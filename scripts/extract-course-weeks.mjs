/*
 * 把 public/projects/family-investing-course 底下 26 個 week-NN 目錄的
 * index.html 拆成「meta 資料」與「內容片段」，供 Astro 動態路由使用。
 *
 * 為什麼要拆：26 頁各自帶一份完整的 <head>（title / description / og ×8 /
 * twitter ×4 / canonical / JSON-LD），改一個 meta 標籤要動 26 個檔案。
 * 每頁還各自內嵌約 11.5 KB 的 <style>，其中約一半是完全相同的骨架
 * ——26 頁合計約 160 KB 的重複。
 *
 * 拆完之後：
 *   meta   → src/data/courseWeekMeta.ts（單一事實來源）
 *   內容   → src/data/course-weeks/<slug>.html（body + 該頁專屬 style/script）
 *   共用   → 由 CourseWeekLayout 統一產生 head，共用 CSS 走 Astro 打包
 *
 * ⚠ 這是一次性轉換工具，不是建置流程的一環。轉換完成、驗證通過後，
 *   public/ 的原始檔就會刪除，這支腳本留作紀錄與必要時的重跑。
 *
 * 用法：node scripts/extract-course-weeks.mjs [--dry]
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'public/projects/family-investing-course');
const OUT_HTML = join(ROOT, 'src/data/course-weeks');
const OUT_META = join(ROOT, 'src/data/courseWeekMeta.ts');
const DRY = process.argv.includes('--dry');

const meta = (html, re) => (html.match(re) || [, ''])[1];

/** 取 <head> 裡的一個 meta content；找不到回空字串（呼叫端自行判斷是否致命） */
const metaContent = (html, key, attr = 'name') =>
  meta(html, new RegExp(`<meta\\s+${attr}="${key}"\\s+content="([^"]*)"`, 'i'));

const weeks = readdirSync(SRC)
  .filter((d) => d.startsWith('week-'))
  .sort();

const records = [];
const problems = [];

for (const slug of weeks) {
  const file = join(SRC, slug, 'index.html');
  const html = readFileSync(file, 'utf8');

  const rec = {
    slug,
    title: meta(html, /<title[^>]*>([\s\S]*?)<\/title>/),
    description: metaContent(html, 'description'),
    ogTitle: metaContent(html, 'og:title', 'property'),
    ogDescription: metaContent(html, 'og:description', 'property'),
  };

  /* 這四個欄位是刻意分開寫的（SERP 版 vs 社群版），無法互相推導。
     少任何一個都是資料遺失，所以在這裡就擋下來，不要等到 build 才發現。 */
  for (const [k, v] of Object.entries(rec)) {
    if (!v) problems.push(`${slug}：缺 ${k}`);
  }

  /* JSON-LD 的 headline/description 目前與 og:* 相同；若哪一頁不同要單獨記下來 */
  const ld = meta(html, /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/);
  try {
    const parsed = JSON.parse(ld);
    if (parsed.headline !== rec.ogTitle) rec.ldHeadline = parsed.headline;
    if (parsed.description !== rec.ogDescription) rec.ldDescription = parsed.description;
  } catch {
    problems.push(`${slug}：JSON-LD 解析失敗`);
  }

  records.push(rec);

  /* 內容片段＝<body> 原樣（含該頁專屬的 style 與 script）。
     刻意不動裡面的任何一個字：那些 script 是各週的互動計算機，
     每支都不一樣，改寫的風險遠大於收益。 */
  const body = meta(html, /<body[^>]*>([\s\S]*)<\/body>/);
  if (!body) { problems.push(`${slug}：找不到 <body>`); continue; }

  /* <style> 在 head 裡，要一起帶過去——它是這一頁的專屬樣式 */
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');

  const fragment =
    `<!-- 由 scripts/extract-course-weeks.mjs 從 public/ 的手刻頁轉出，內容未改動。 -->\n` +
    (styles ? `<style is:global>\n${styles.trim()}\n</style>\n\n` : '') +
    body.trim() +
    '\n';

  if (!DRY) {
    mkdirSync(OUT_HTML, { recursive: true });
    writeFileSync(join(OUT_HTML, `${slug}.html`), fragment);
  }
}

if (problems.length) {
  console.error('✗ 萃取有問題，未寫出 meta：');
  for (const p of problems) console.error(`   ${p}`);
  process.exit(1);
}

const ts =
  `/*\n * 26 個課程週次頁的 head metadata——單一事實來源。\n *\n` +
  ` * 由 scripts/extract-course-weeks.mjs 從原本 public/ 的手刻頁萃取。\n` +
  ` * title / description / ogTitle / ogDescription 是四個**刻意分開**的欄位：\n` +
  ` *   title       SERP 用，帶「｜給家人的投資課 · Matt Ye」後綴\n` +
  ` *   ogTitle     社群卡片用，不帶站名\n` +
  ` *   description SERP 用，開頭帶「52 週投資課第 N 週」的脈絡\n` +
  ` *   ogDescription 社群用，直接講重點\n` +
  ` * 互相推導會損失資訊，所以四個都存。\n */\n` +
  `export interface CourseWeekMeta {\n` +
  `  slug: string;\n  title: string;\n  description: string;\n  ogTitle: string;\n  ogDescription: string;\n` +
  `  /** JSON-LD 與 og:* 不同時才填 */\n  ldHeadline?: string;\n  ldDescription?: string;\n}\n\n` +
  `export const courseWeekMeta: CourseWeekMeta[] = ${JSON.stringify(records, null, 2)};\n`;

if (!DRY) writeFileSync(OUT_META, ts);

console.log(`✓ 萃取 ${records.length} 週`);
console.log(`   meta → src/data/courseWeekMeta.ts`);
console.log(`   內容 → src/data/course-weeks/*.html`);
if (DRY) console.log('   （--dry：未寫檔）');
