/*
 * 把 [data-i18n] 佔位元素的預設語言（中文）內容寫進 HTML。
 *
 * 為什麼需要：這幾頁的文字全部由 applyI18n() 在瀏覽器端填入，build 產物裡
 * 那些元素是空的。實測 aw32 的正文只有 176 字元、44 個 data-i18n 元素全空
 * ——整頁對爬蟲與 LLM 等於不存在。
 *
 * 為什麼是一次性腳本、不是建置期外掛：外掛要在 plugin 裡複製一份 JS 的渲染
 * 邏輯，兩套實作會漂移。寫進檔案則是「進 git、可 review、可 diff」，而漏填
 * 由 astro.config 的 verifyI18nPrerendered 在建置期擋下（見該函式註解）。
 *
 * 用法（改了 var I 的字典之後要重跑）：
 *   node scripts/prerender-i18n.mjs
 *
 * 冪等：已經有內容的元素不動，所以重複執行安全。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractObjectLiteral, escapeHtml } from '../src/lib/objectLiteral.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

/*
 * 站上路徑 → 內容片段的檔案路徑。
 *
 * 這批頁面原本是 public/<path>/index.html，後來搬進 src/data/static-pages/
 * 並改成把 / 換成 __ 的鍵名。這支腳本的路徑當時沒跟著改，於是它一跑就
 * ENOENT——而 astro.config 的 verifyI18nPrerendered 失敗時，正是叫人跑這支。
 * 修法的工具本身壞掉，比沒有工具更糟：訊息看起來是可行動的，實際上不是。
 */
const fragmentOf = (sitePath) =>
  `src/data/static-pages/${sitePath.split('/').filter(Boolean).join('__')}.html`;


/** 要處理的頁面。新增同類頁面時加進來。 */
const PAGES = [
  fragmentOf('projects/one-more-step/aw32'),
  fragmentOf('projects/one-more-step/daniels-talk'),
];

/** 預設語言——與 applyI18n() 的初始 state.lang 一致 */
const DEFAULT_LANG = 'zh';

let totalFilled = 0;

for (const rel of PAGES) {
  const file = join(ROOT, rel);
  let html = readFileSync(file, 'utf8');

  const literal = extractObjectLiteral(html, /\bvar\s+I\s*=\s*/);
  if (!literal) {
    console.error(`  ✗ ${rel}：找不到 var I 字典，跳過`);
    process.exitCode = 1;
    continue;
  }

  /* 這份字典是我們自己 repo 裡的檔案，信任層級等同 import。
     用 Function 而不是 JSON.parse：字典是 JS 物件字面值（鍵沒有引號、
     可能有尾逗號），不是合法 JSON。 */
  let dict;
  try {
    dict = new Function(`return (${literal});`)();
  } catch (err) {
    console.error(`  ✗ ${rel}：字典解析失敗 ${err.message}`);
    process.exitCode = 1;
    continue;
  }

  const table = dict?.[DEFAULT_LANG];
  if (!table) {
    console.error(`  ✗ ${rel}：字典裡沒有 ${DEFAULT_LANG}`);
    process.exitCode = 1;
    continue;
  }

  let filled = 0;
  const missing = [];

  /* 只填「開標籤後緊接關標籤」的空元素。已經有內容的不動——
     那可能是刻意寫死的文案，覆蓋掉會是靜默的資料遺失。 */
  html = html.replace(
    /<(\w+)\b([^>]*\bdata-i18n(-html)?\s*=\s*"([^"]+)"[^>]*)>(\s*)<\/\1>/g,
    (whole, tag, attrs, isHtml, key, gap) => {
      const value = table[key];
      if (value === undefined) { missing.push(key); return whole; }
      filled++;
      /* data-i18n 走 textContent → 要跳脫；data-i18n-html 走 innerHTML → 原樣 */
      return `<${tag}${attrs}>${isHtml ? value : escapeHtml(value)}</${tag}>`;
    },
  );

  writeFileSync(file, html);
  totalFilled += filled;
  console.log(`  ✓ ${rel}：填入 ${filled} 處${missing.length ? `，字典缺 ${missing.length} 個鍵：${missing.join(', ')}` : ''}`);
  if (missing.length) process.exitCode = 1;
}

/* ────────────────────────────────────────────────────────────────
 * 紀念頁（In-Memory-of-Miguel-Li）
 *
 * 機制與上面不同：資料在同檔的 const DATA，由一堆 render 函式塞進帶 id 的
 * 容器。build 產物的正文只有 295 字元——47 則課程回饋、13 門課的綜合意見、
 * 一篇紀念文章全部看不到。
 *
 * ⚠ 刻意不渲染留言板（#boardWall）：留言是從 Google Sheet 即時抓的，含學生
 * 姓名，而這個 repo 是公開的。寫進 HTML 等於把個資永久寫進 git 歷史——
 * 網頁可以下架、Sheet 可以改，git 歷史不能。
 * 課程回饋（carousel / courses.quotes）則本來就已經寫死在這個檔案裡、
 * 已隨檔案提交多次，渲染它們不會新增任何個資。
 * ──────────────────────────────────────────────────────────────── */

const MEMORIAL = fragmentOf('writing/In-Memory-of-Miguel-Li');

/** 把內容塞進 <tag id="x">…</tag>；已有內容就不動（冪等） */
function fillById(html, id, inner) {
  const re = new RegExp(`(<(\\w+)\\b[^>]*\\bid="${id}"[^>]*>)(\\s*)(</\\2>)`, '');
  if (!re.test(html)) return { html, filled: false };
  return { html: html.replace(re, `$1${inner}$4`), filled: true };
}

{
  const file = join(ROOT, MEMORIAL);
  let html = readFileSync(file, 'utf8');
  const literal = extractObjectLiteral(html, /\bconst\s+DATA\s*=\s*/);

  if (!literal) {
    console.error(`  ✗ ${MEMORIAL}：找不到 const DATA`);
    process.exitCode = 1;
  } else {
    const D = new Function(`return (${literal});`)();
    const e = escapeHtml;
    const blocks = {};

    if (D.bio) {
      blocks.nameZh = e(D.bio.name_zh ?? '');
      blocks.nameEn = e(D.bio.name_en ?? '');
      blocks.role = e(D.bio.title ?? '');
      blocks.dates = e(D.bio.dates ?? '');
      blocks.lead = e(D.bio.lead ?? '');
      blocks.bioParas = (D.bio.paras ?? []).map((p) => `<p>${e(p)}</p>`).join('');
      /* facts 是 [標籤, 值] 的二元組 */
      blocks.facts = (D.bio.facts ?? [])
        .map((f) => `<div class="fact"><b>${e(f[0] ?? '')}</b> <span>${e(f[1] ?? '')}</span></div>`)
        .join('');
    }

    if (D.stats) {
      blocks.stats = Object.entries(D.stats)
        .map(([k, v]) => `<div class="stat"><b>${e(v)}</b> <span>${e(k)}</span></div>`)
        .join('');
    }

    /* 課程回憶：這一區是整頁最有價值的內容（13 門課、各自的綜合意見與具名留言） */
    if (Array.isArray(D.courses)) {
      blocks.courseList = D.courses
        .map((c) => {
          const sem = c.semesters?.length ? `<span class="sem">${e(c.semesters.join('、'))}</span>` : '';
          const quotes = (c.quotes ?? [])
            .map(
              (q) =>
                `<blockquote class="pq"><p>${e(q.text ?? '')}</p>` +
                `<cite>${e(q.name ?? '')}${q.sem ? `　${e(q.sem)}` : ''}${q.source ? `　${e(q.source)}` : ''}</cite></blockquote>`,
            )
            .join('');
          /* 課名用 h3：這一區的區塊標題是 h2，一門課是一個內容單位 */
          return (
            `<section class="course"><h3>${e(c.name ?? '')}</h3>` +
            (c.count ? `<p class="count">${e(c.count)} 則回饋</p>` : '') +
            sem +
            (c.synthesis ? `<p class="synthesis">${e(c.synthesis)}</p>` : '') +
            quotes +
            `</section>`
          );
        })
        .join('');
    }

    if (Array.isArray(D.tributes)) {
      blocks.tributeList = D.tributes
        .map(
          (t) =>
            `<article class="tribute"><h3>${e(t.title ?? '')}</h3>` +
            `<p class="meta">${e(t.author ?? '')}${t.date ? `　${e(t.date)}` : ''}</p>` +
            `<div class="body">${(t.body ?? '').split(/\n{2,}/).map((p) => `<p>${e(p)}</p>`).join('')}</div>` +
            (t.source ? `<p class="src">${e(t.source)}</p>` : '') +
            `</article>`,
        )
        .join('');
    }

    /* 輪播只渲染第一則當靜態版；47 則全出會讓爬蟲讀到一大團重複語境的引言 */
    if (Array.isArray(D.carousel) && D.carousel[0]) {
      const q = D.carousel[0];
      blocks.qtext = e(q.text ?? '');
      blocks.qmeta = `${e(q.name ?? '')}${q.course ? `　${e(q.course)}` : ''}${q.sem ? `　${e(q.sem)}` : ''}`;
    }

    if (D.footer) blocks.footer = e(D.footer);

    let filled = 0;
    const skipped = [];
    for (const [id, inner] of Object.entries(blocks)) {
      if (!inner) continue;
      const r = fillById(html, id, inner);
      if (r.filled) { html = r.html; filled++; } else skipped.push(id);
    }

    writeFileSync(file, html);
    totalFilled += filled;
    console.log(
      `  ✓ ${MEMORIAL}：填入 ${filled} 個區塊` +
        (skipped.length ? `（${skipped.length} 個已有內容或找不到容器：${skipped.join(', ')}）` : '') +
        `\n     留言板 #boardWall 刻意不渲染——含學生姓名，維持即時抓取`,
    );
  }
}

/* ────────────────────────────────────────────────────────────────
 * 站內出站連結
 *
 * 這幾頁是「走得進去、走不出來」——內容完整但沒有任何出站內部連結，
 * 讀者看完只能按上一頁，爬蟲則直接走到死路（權重也不會往下傳）。
 *
 * 每頁給「返回上層 ＋ 2 個主題相關的去處」，而不是塞一排全站導覽：
 * 相關連結對讀者才有用，對爬蟲也才是有意義的主題訊號。
 *
 * ⚠ 標籤跟著各頁自己的雙語機制走：ga4-guide 用 .zh-only/.en-only，
 * 另外兩頁是單語頁，直接給中文。三頁三種機制是既有現實，不在這裡統一。
 * ──────────────────────────────────────────────────────────────── */

const RELATED = [
  {
    file: fragmentOf('projects/one-more-step/ga4-guide'),
    bilingual: true,
    links: [
      { href: '/projects/one-more-step/', zh: '← One More Step 全部筆記', en: '← All One More Step notes' },
      { href: '/projects/marketing/', zh: '行銷專欄', en: 'Marketing notes' },
      { href: '/projects/', zh: '所有專案', en: 'All projects' },
    ],
  },
  {
    file: fragmentOf('projects/one-more-step/investment-notes'),
    bilingual: false,
    links: [
      { href: '/projects/one-more-step/', zh: '← One More Step 全部筆記' },
      { href: '/projects/family-investing-course/', zh: '給家人的投資課（52 週）' },
      { href: '/writing/?series=投資專欄', zh: '投資專欄' },
    ],
  },
  {
    file: fragmentOf('writing/In-Memory-of-Miguel-Li'),
    bilingual: false,
    links: [
      { href: '/writing/', zh: '← 所有文章' },
      { href: '/about/', zh: '關於本站作者' },
      { href: '/', zh: '回首頁' },
    ],
  },
];

const RELATED_MARK = 'data-related-links';

for (const page of RELATED) {
  const file = join(ROOT, page.file);
  let html = readFileSync(file, 'utf8');

  if (html.includes(RELATED_MARK)) {
    console.log(`  · ${page.file}：相關連結已存在，跳過`);
    continue;
  }

  const items = page.links
    .map((l) =>
      page.bilingual
        ? `<a href="${l.href}"><span class="zh-only">${escapeHtml(l.zh)}</span><span class="en-only">${escapeHtml(l.en ?? l.zh)}</span></a>`
        : `<a href="${l.href}">${escapeHtml(l.zh)}</a>`,
    )
    .join('\n      ');

  const block =
    `\n    <nav class="related-links" ${RELATED_MARK} aria-label="相關頁面">\n      ${items}\n    </nav>\n  `;

  /* 插在 </footer> 之前——那是頁面內容的結尾，也是讀者看完後自然會停的位置 */
  const idx = html.lastIndexOf('</footer>');
  if (idx < 0) {
    console.error(`  ✗ ${page.file}：找不到 </footer>，無法插入`);
    process.exitCode = 1;
    continue;
  }
  html = html.slice(0, idx) + block + html.slice(idx);
  writeFileSync(file, html);
  console.log(`  ✓ ${page.file}：加入 ${page.links.length} 個站內連結`);
}

console.log(`\n共填入 ${totalFilled} 處。`);
