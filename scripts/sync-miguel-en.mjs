/*
 * 把紀念頁的英文版同步到專屬 repo（matt-ye/In-Memory-of-Miguel-Li，private）。
 *
 * ── 為什麼要同步 ────────────────────────────────────────────────
 * 那個 repo 是紀念頁**內容的真實來源與封存**：content.json → build_site.py
 * → site/index.html，整個 site/ 以 301 導向 mattye.dev 上的正式頁，
 * 自己不被索引（noindex ＋ robots Disallow）。
 * 英文版現在也上線了，封存就該包含它——否則這份紀錄只留下一半。
 *
 * ── 為什麼不直接複製 mattye.dev 的建置產物 ──────────────────────
 * 那份是 Astro 產的，帶著站台的 head、GA 與 SiteStrip。放進封存會混進
 * 另一個專案的外殼。這裡改成**對專屬 repo 自己的 site/index.html 施譯**，
 * 產出的 site/en/index.html 與中文版同一份血緣、同一種形狀。
 *
 * ── 用法 ────────────────────────────────────────────────────────
 *   node scripts/sync-miguel-en.mjs [專屬 repo 的路徑]
 *
 * 只寫 site/en/index.html 一個檔；其餘（_redirects、HANDOFF）人工維護。
 *
 * ⚠ 每一項 head 替換找不到就中止。安靜略過的代價是英文封存頁帶著中文
 *   title 與 og:*，而那要有人去看原始碼才會發現。
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyTranslations, findResidualCjk, findBrokenScripts } from './lib/extract-strings.mjs';
import { staticPageMeta } from '../src/data/staticPageMeta.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY = 'writing__In-Memory-of-Miguel-Li';
const DEFAULT_REPO = 'D:/Claude_Project_Space/Miguel-Text-Database/repo_clone';

const repo = process.argv[2] ?? DEFAULT_REPO;
const srcFile = join(repo, 'site/index.html');
if (!existsSync(srcFile)) {
  throw new Error(`找不到 ${srcFile}——第一個引數要給專屬 repo 的路徑（預設 ${DEFAULT_REPO}）`);
}

const meta = staticPageMeta.find((m) => m.key === KEY);
if (!meta) throw new Error(`staticPageMeta 裡找不到 ${KEY}`);
for (const f of ['titleEn', 'descriptionEn', 'ogTitleEn', 'ogDescriptionEn', 'ogImageAltEn']) {
  if (!meta[f]) throw new Error(`staticPageMeta 的 ${KEY} 缺 ${f}，無法產生英文封存頁`);
}

const table = await import(`../src/data/translations/${KEY}.mjs`);
const zhUrl = meta.canonical;
const enUrl = zhUrl.replace('https://mattye.dev/', 'https://mattye.dev/en/');

let html = readFileSync(srcFile, 'utf8');

/* ── ① 內文：套對照表 ───────────────────────────────────────── */
const applied = applyTranslations(html, table);
/*
 * ⚠ `missing` 在這裡是**參考資訊，不是關卡**。
 *
 * head 的 title／description 與 JSON-LD 的 jobTitle 本來就不由對照表負責
 * （它們在 staticPageMeta），所以必然出現在 missing 裡。想用「這條有沒有
 *  出現在 body」來分流是行不通的——那是子字串比對，body 裡的「傳奇教師」
 *  會讓 '教師' 誤判成內文漏譯（實際踩過）。
 *
 * 真正的關卡是最後那道 findResidualCjk：**直接問產物還有沒有中文**。
 * 清單型的檢查只驗得到清單內的東西，掃描型的才涵蓋得到盲區。
 */
if (applied.missing.length) {
  console.log(`  · 對照表未涵蓋 ${applied.missing.length} 條（預期是 head 與 JSON-LD，由下面的步驟處理）：`);
  applied.missing.forEach((s) => console.log(`      ${JSON.stringify(s.slice(0, 60))}`));
}
html = applied.html;

/* ── ② head：逐項換成英文 ──────────────────────────────────── */
/* 每一項都必須命中，否則中止——見檔頭說明 */
const swaps = [
  ['<html lang="zh-TW">', '<html lang="en">'],
  [/<title>[^<]*<\/title>/, `<title>${meta.titleEn}</title>`],
  [`<link rel="canonical" href="${zhUrl}">`, `<link rel="canonical" href="${enUrl}">`],
  [/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(meta.ogTitleEn)}">`],
  [
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${esc(meta.ogDescriptionEn)}">`,
  ],
  [`<meta property="og:url" content="${zhUrl}">`, `<meta property="og:url" content="${enUrl}">`],
  /* 英文頁用英文站名——中文後綴對英語讀者是雜訊，與 StaticPageLayout 一致 */
  ['<meta property="og:site_name" content="葉淨維 Matt Ye">', '<meta property="og:site_name" content="Matt Ye">'],
  ['<meta property="og:locale" content="zh_TW">', '<meta property="og:locale" content="en_US">'],
  [
    /<meta property="og:image:alt" content="[^"]*">/,
    `<meta property="og:image:alt" content="${esc(meta.ogImageAltEn)}">`,
  ],
  [/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${esc(meta.ogTitleEn)}">`],
  [
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${esc(meta.ogDescriptionEn)}">`,
  ],
];
for (const [from, to] of swaps) {
  const before = html;
  html = typeof from === 'string' ? html.replace(from, to) : html.replace(from, to);
  if (html === before) throw new Error(`head 替換沒有命中：${from}`);
}

/* description 有兩個（長短各一，生成器留下的），兩個都要換 */
const descCount = (html.match(/<meta name="description" content="[^"]*">/g) ?? []).length;
if (!descCount) throw new Error('head 找不到 <meta name="description">');
html = html.replace(
  /<meta name="description" content="[^"]*">/g,
  `<meta name="description" content="${esc(meta.descriptionEn)}">`,
);

/* ── ③ 站內連結指向英文版 ─────────────────────────────────── */
if (!html.includes('href="/writing/"')) throw new Error('找不到頁尾的 /writing/ 連結');
html = html.split('href="/writing/"').join('href="/en/writing/"');

/* ── ④ JSON-LD ────────────────────────────────────────────── */
/* 與 StaticPageLayout 的 localizeJsonLd 同一套處理，維持兩邊一致 */
let ldCount = 0;
html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (_m, raw) => {
  let node = JSON.parse(raw);
  const swapDeep = (v) => {
    if (typeof v === 'string') return meta.jsonLdEn?.[v] ?? v;
    if (Array.isArray(v)) return v.map(swapDeep);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, swapDeep(x)]));
    return v;
  };
  if (node.url) node.url = enUrl;
  if (node.mainEntityOfPage) node.mainEntityOfPage = enUrl;
  if (node.inLanguage) node.inLanguage = 'en';
  if (node.headline) node.headline = meta.ogTitleEn;
  if (node['@type'] === 'WebPage' && node.name) node.name = meta.ogTitleEn;
  if (node.description) node.description = meta.ogDescriptionEn;
  node = swapDeep(node);
  ldCount++;
  return `<script type="application/ld+json">${JSON.stringify(node)}</script>`;
});
if (!ldCount) throw new Error('找不到任何 JSON-LD 區塊');

/* ── ⑤ 驗收 ───────────────────────────────────────────────── */
const residual = findResidualCjk(html, table.KEEP ?? []);
if (residual.length) {
  throw new Error(`英文封存頁還有 ${residual.length} 處中文。第一處：…${residual[0]}…`);
}
const broken = findBrokenScripts(html);
if (broken.length) {
  throw new Error(`有 ${broken.length} 塊 script 解析失敗：${broken[0].message}`);
}

const outFile = join(repo, 'site/en/index.html');
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, html, 'utf8');
console.log(`  ✔ 寫入 ${outFile}`);
console.log(`     ${html.length} 字元　JSON-LD ${ldCount} 塊　description ${descCount} 處　殘留中文 0　script 全部可解析`);

/** meta 值要塞進 content="…"，值裡的雙引號會提早關掉屬性 */
function esc(s) {
  return s.split('"').join('&quot;');
}
