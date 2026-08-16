/*
 * 把手刻頁裡「由 JS 從資料陣列生成」的區塊，在建置前先渲染進 HTML。
 *
 * 為什麼需要：aw32 有 57% 的可見內容（19 家新創、時間軸、護城河矩陣…）
 * 是載入後才由 renderAll() 塞進空容器的。build 產物裡那些容器是空的，
 * 爬蟲與 LLM 讀到的是空殼——這一段內容對它們等於不存在。
 *
 * 與 prerender-i18n.mjs 的分工：
 *   那支處理 [data-i18n] 佔位元素（純字典查表，沒有邏輯）
 *   這支處理**資料陣列 + render 函式**生成的區塊（有邏輯）
 * 兩者都靠 scripts/lib/run-page-script.mjs 之外的機制，各自獨立可重跑。
 *
 * 語言分工：
 *   中文 → 直接寫進片段（爬蟲在中文網址讀到的就是這份）
 *   英文 → 另存 <key>.en.json，由 StaticPageContent 在 /en/ 路由注入
 * 這樣每個網址的 HTML 只帶一種語言，中文頁不會因此變兩倍重。
 *
 * 冪等：容器已有內容就整段換掉（資料改了要能重跑），所以可重複執行。
 *
 * 用法（改了資料陣列或 render 函式之後要重跑）：
 *   node scripts/prerender-containers.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { renderPage } from './lib/run-page-script.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

/** 要處理的頁面鍵名。新增同類頁面時加進來。 */
const KEYS = ['projects__one-more-step__aw32', 'projects__one-more-step__daniels-talk'];

/** 把 inner 塞進 <tag id="x">…</tag>，不論原本有沒有內容 */
function fillById(html, id, inner) {
  /* 用深度計數找配對的結尾標籤：容器裡塞的是整段 HTML，
     很可能含同名巢狀（<div> 裡有 <div>），反向參照會提早閉合。 */
  const open = new RegExp(`<(\\w+)\\b[^>]*\\bid="${id}"[^>]*>`);
  const m = html.match(open);
  if (!m) return null;

  const tag = m[1];
  const bodyStart = m.index + m[0].length;
  const scan = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
  scan.lastIndex = bodyStart;
  let depth = 1;
  let end = -1;
  let hit;
  while ((hit = scan.exec(html))) {
    depth += hit[1] ? -1 : 1;
    if (depth === 0) { end = hit.index; break; }
  }
  if (end < 0) return null;

  return html.slice(0, bodyStart) + inner + html.slice(end);
}

let failed = false;

for (const key of KEYS) {
  const file = join(ROOT, 'src/data/static-pages', `${key}.html`);
  let html = readFileSync(file, 'utf8');
  const js = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]).join('\n;\n');

  let zh;
  let en;
  try {
    zh = renderPage(js, 'zh');
    en = renderPage(js, 'en');
  } catch (err) {
    console.error(`  ✗ ${key}：跑頁面 script 失敗 — ${err.message}`);
    console.error('    多半是頁面用到了 shim 沒實作的瀏覽器 API，請補進 scripts/lib/run-page-script.mjs');
    failed = true;
    continue;
  }

  /* 兩種語言的容器必須一一對應，少一個就是有 render 分支只在單語跑到 */
  const zhIds = Object.keys(zh).sort();
  const enIds = Object.keys(en).sort();
  if (zhIds.join() !== enIds.join()) {
    console.error(`  ✗ ${key}：中英容器不一致 zh=[${zhIds}] en=[${enIds}]`);
    failed = true;
    continue;
  }

  let filled = 0;
  const missing = [];
  for (const id of zhIds) {
    const next = fillById(html, id, zh[id]);
    if (next === null) { missing.push(id); continue; }
    html = next;
    filled++;
  }

  writeFileSync(file, html, 'utf8');
  writeFileSync(join(ROOT, 'src/data/static-pages', `${key}.en.json`), JSON.stringify(en, null, 1), 'utf8');

  const chars = (s) => Object.values(s).reduce((n, v) => n + v.length, 0);
  console.log(
    `  ✓ ${key.replace('projects__one-more-step__', '').padEnd(14)}` +
      `中文寫入 ${filled}/${zhIds.length} 個容器（${chars(zh)} 字元）｜英文另存 ${chars(en)} 字元`,
  );
  if (missing.length) {
    console.error(`    ✗ 片段裡找不到容器：${missing.join(', ')}`);
    failed = true;
  }
}

if (failed) process.exitCode = 1;
