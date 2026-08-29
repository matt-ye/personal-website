#!/usr/bin/env node
/**
 * page-manifest.mjs — 建置產物的內容指紋清單（零依賴，Node 18+）
 *
 *   node scripts/page-manifest.mjs build <YYYY-MM-DD>
 *       從 dist/md 重算指紋，**直接寫回** data/page-manifest.json（不走 stdout）
 *   node scripts/page-manifest.mjs diff
 *       與 data/page-manifest.json 比對，把變動的網址逐行印到 stdout（統計走 stderr）
 *
 * ## 為什麼雜湊算在 markdown 分身上，不是整份 HTML
 *
 * HTML 的 <head> 帶著 vite 的資源雜湊檔名（`/_astro/xxx.HASH.css`）。改一次全站 CSS，
 * 119 頁的 HTML 全部會變——但內容一個字都沒動。拿那個當「變更」訊號，
 * 每次樣式微調都會把 Bing 的每月 300 條配額一次燒掉三分之一。
 *
 * markdown 分身只含 <main> 的語意內容（由 astro.config.mjs 的 emitMarkdownTwins 產生），
 * 版面與資源雜湊都不在裡面。**實測：同一份原始碼連續 build 兩次，119 頁指紋完全一致。**
 *
 * ## 這份清單不只給提交用
 *
 * `data/page-manifest.json` 是「哪一頁的內容在哪一天真的變了」的可讀紀錄，
 * 進版控、跨 session 查得到。lastChanged 只在指紋改變時才更新，
 * 所以沒有變更的 build 不會產生 diff，也就不會有雜訊 commit。
 */

import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const SITE = 'https://mattye.dev';
const TWINS = 'dist/md';
const MANIFEST = 'data/page-manifest.json';

/** /md/about.md → https://mattye.dev/about/ ；/md/index.md → https://mattye.dev/ */
function twinToUrl(rel) {
  const noExt = rel.replace(/\.md$/, '');
  return noExt === 'index' ? `${SITE}/` : `${SITE}/${noExt}/`;
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
}

function fingerprints() {
  if (!existsSync(TWINS)) {
    console.error(`找不到 ${TWINS} — 要先 npm run build`);
    process.exit(2);
  }
  const out = {};
  for (const file of walk(TWINS).filter((f) => f.endsWith('.md'))) {
    const rel = relative(TWINS, file).split(sep).join('/');
    out[twinToUrl(rel)] = createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 16);
  }
  return out;
}

function loadManifest() {
  if (!existsSync(MANIFEST)) return null;
  const raw = readFileSync(MANIFEST, 'utf8');
  /* 檔案存在卻讀不成 JSON 要大聲報錯，不能當成「沒有清單」——
     那會靜默重建基線、把該提交的變更整批吞掉。 */
  if (!raw.trim()) { console.error(`${MANIFEST} 是空檔——不當成基線缺失，請確認是不是被覆寫了`); process.exit(2); }
  try { return JSON.parse(raw); }
  catch (e) { console.error(`${MANIFEST} 不是合法 JSON：${e.message}`); process.exit(2); }
}

const mode = process.argv[2];

if (mode === 'build') {
  /* 日期從參數傳入，不在腳本裡呼叫 Date——同樣的輸入要產生同樣的輸出，
     否則每次 build 都是新內容、每次 push 都產生雜訊 commit。 */
  const today = process.argv[3];
  if (!today) { console.error('用法：node scripts/page-manifest.mjs build <YYYY-MM-DD>'); process.exit(2); }

  const now = fingerprints();
  const prev = loadManifest()?.pages ?? {};
  const pages = {};
  for (const [url, hash] of Object.entries(now)) {
    pages[url] = {
      hash,
      /* 指紋沒變就沿用舊日期——lastChanged 記的是「內容何時變的」，不是「何時 build 的」 */
      lastChanged: prev[url]?.hash === hash ? prev[url].lastChanged : today,
    };
  }
  /* 腳本自己寫檔，不靠 shell 重導向。`> data/page-manifest.json` 會在腳本執行前
     就把檔案清空，於是讀到空檔、lastChanged 全部重置——實測踩過。 */
  const changed = Object.entries(pages).filter(([u, p]) => prev[u]?.hash !== p.hash).length;
  writeFileSync(MANIFEST, `${JSON.stringify({ site: SITE, pages }, null, 2)}\n`, 'utf8');
  console.error(`${MANIFEST} 已更新：${Object.keys(pages).length} 頁，其中 ${changed} 頁指紋有變`);
  process.exit(0);
}

if (mode === 'diff') {
  const now = fingerprints();
  const manifest = loadManifest();

  /* 第一次沒有清單時**不提交任何東西**，只建立基線。
     否則首次執行會把 119 頁全部當成「變更」，一次燒掉每月 300 條配額的四成。 */
  if (!manifest) {
    console.error(`沒有 ${MANIFEST} — 建立基線，本次不提交`);
    process.exit(0);
  }

  const prev = manifest.pages ?? {};
  const changed = Object.keys(now).filter((url) => prev[url]?.hash !== now[url]);
  for (const url of changed) console.log(url);

  const removed = Object.keys(prev).filter((url) => !(url in now));
  if (removed.length) console.error(`（${removed.length} 個網址已從網站移除，不提交：${removed.slice(0, 5).join('、')}）`);
  console.error(`變動 ${changed.length} 頁／全站 ${Object.keys(now).length} 頁`);
  process.exit(0);
}

console.error('用法：node scripts/page-manifest.mjs build <YYYY-MM-DD> | diff');
process.exit(2);
