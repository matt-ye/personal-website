/*
 * 把 public/ 剩下的 14 個手刻 HTML 頁拆成「meta 資料」與「內容片段」，
 * 供 Astro 動態路由使用。做法與 extract-course-weeks.mjs 相同，
 * 差別在這批頁面的 head 形狀不一致，要多帶幾個選配欄位。
 *
 * 實測 14 頁的 head：
 *   15 個 meta key 全部都有（description / og ×7 / twitter ×4 / author / viewport）
 *   選配：generator(10) og:locale(7) twitter:site(6) twitter:creator(6)
 *         article:published_time(2) theme-color(2) og:image:alt(1)
 *   html 標籤 3 種變體（data-theme / data-lang 屬性）
 *   JSON-LD 4 種形狀（Article / Article+CreativeWorkSeries / +Person / WebPage…）
 *
 * JSON-LD 原樣搬過去，不重組——那些 @graph 結構各頁不同，
 * 重寫等於把「已經正確的東西」再賭一次。
 *
 * 用法：node scripts/extract-static-pages.mjs [--dry]
 */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUB = join(ROOT, 'public');
const OUT_HTML = join(ROOT, 'src/data/static-pages');
const OUT_META = join(ROOT, 'src/data/staticPageMeta.ts');
const DRY = process.argv.includes('--dry');

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const f = join(d, e);
    if (statSync(f).isDirectory()) walk(f);
    else if (e === 'index.html') files.push(f);
  }
})(PUB);
files.sort();

const grab = (s, re) => { const m = s.match(re); return m ? m[1] : undefined; };
const metaOf = (head, key) =>
  grab(head, new RegExp(`<meta\\s+(?:name|property)="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s+content="([^"]*)"`, 'i'));

const records = [];
const problems = [];

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const rel = relative(PUB, file).replace(/\\/g, '/').replace(/\/index\.html$/, '');
  const head = grab(html, /<head[^>]*>([\s\S]*?)<\/head>/) ?? '';
  const key = rel.replace(/\//g, '__');

  const rec = {
    key,
    route: `/${rel}/`,
    title: grab(html, /<title[^>]*>([\s\S]*?)<\/title>/),
    description: metaOf(head, 'description'),
    ogTitle: metaOf(head, 'og:title'),
    ogDescription: metaOf(head, 'og:description'),
    ogType: metaOf(head, 'og:type'),
    ogImage: metaOf(head, 'og:image'),
    canonical: grab(head, /<link\s+rel="canonical"\s+href="([^"]*)"/),
  };

  /* 這幾個是必要欄位；缺任何一個都是資料遺失，直接讓腳本失敗 */
  for (const k of ['title', 'description', 'ogTitle', 'ogDescription', 'ogType', 'ogImage', 'canonical']) {
    if (!rec[k]) problems.push(`${rel}：缺 ${k}`);
  }

  /* 選配欄位：有才寫，避免在資料檔裡塞一堆 undefined */
  for (const [prop, name] of [
    ['ogLocale', 'og:locale'],
    ['ogImageAlt', 'og:image:alt'],
    ['twitterSite', 'twitter:site'],
    ['twitterCreator', 'twitter:creator'],
    ['themeColor', 'theme-color'],
    ['articlePublishedTime', 'article:published_time'],
  ]) {
    const v = metaOf(head, name);
    if (v) rec[prop] = v;
  }

  /* <html> 的額外屬性（data-theme / data-lang）——那是各頁自己的主題與語言機制，
     搬到 layout 時要原樣保留，否則初始狀態會不同 */
  const htmlTag = grab(html, /(<html[^>]*>)/) ?? '';
  const attrs = {};
  for (const m of htmlTag.matchAll(/\b(data-[\w-]+)="([^"]*)"/g)) attrs[m[1]] = m[2];
  if (Object.keys(attrs).length) rec.htmlAttrs = attrs;

  /* JSON-LD 原樣保留字串——各頁結構不同，重組的風險大於收益 */
  const lds = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1].trim());
  for (const ld of lds) {
    try { JSON.parse(ld); } catch { problems.push(`${rel}：JSON-LD 解析失敗`); }
  }
  if (lds.length) rec.jsonLd = lds;

  records.push(rec);

  /* 內容片段：<body> 原樣 ＋ head 裡的 <style>。
     head 內的非 JSON-LD <script>（主題初始化之類）也要帶——它們必須在
     渲染前執行，位置不能改。 */
  const body = grab(html, /<body[^>]*>([\s\S]*)<\/body>/);
  if (!body) { problems.push(`${rel}：找不到 <body>`); continue; }

  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
  const headScripts = [...head.matchAll(/<script(?![^>]*ld\+json)(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => m[1].trim())
    .filter(Boolean);

  const fragment =
    `<!-- 由 scripts/extract-static-pages.mjs 從 public/ 的手刻頁轉出，內容未改動。 -->\n` +
    headScripts.map((s) => `<script is:inline>\n${s}\n</script>`).join('\n') +
    (headScripts.length ? '\n\n' : '') +
    (styles ? `<style is:global>\n${styles.trim()}\n</style>\n\n` : '') +
    body.trim() +
    '\n';

  if (!DRY) {
    mkdirSync(OUT_HTML, { recursive: true });
    writeFileSync(join(OUT_HTML, `${key}.html`), fragment);
  }
}

if (problems.length) {
  console.error('✗ 萃取有問題，未寫出 meta：');
  for (const p of problems) console.error(`   ${p}`);
  process.exit(1);
}

const ts =
  `/*\n * public/ 手刻頁的 head metadata——單一事實來源。\n *\n` +
  ` * 由 scripts/extract-static-pages.mjs 萃取。key 是把路徑的 / 換成 __，\n` +
  ` * 用來對應 src/data/static-pages/<key>.html 的內容片段。\n *\n` +
  ` * jsonLd 保留原始字串陣列：各頁的結構不同（Article／+CreativeWorkSeries／\n` +
  ` * +Person／WebPage），重組的風險大於收益。\n */\n` +
  `export interface StaticPageMeta {\n` +
  `  key: string;\n  route: string;\n  title: string;\n  description: string;\n` +
  `  ogTitle: string;\n  ogDescription: string;\n  ogType: string;\n  ogImage: string;\n  canonical: string;\n` +
  `  ogLocale?: string;\n  ogImageAlt?: string;\n  twitterSite?: string;\n  twitterCreator?: string;\n` +
  `  themeColor?: string;\n  articlePublishedTime?: string;\n` +
  `  /** <html> 上的 data-* 屬性（各頁自己的主題／語言機制） */\n  htmlAttrs?: Record<string, string>;\n` +
  `  jsonLd?: string[];\n}\n\n` +
  `export const staticPageMeta: StaticPageMeta[] = ${JSON.stringify(records, null, 2)};\n`;

if (!DRY) writeFileSync(OUT_META, ts);

console.log(`✓ 萃取 ${records.length} 頁`);
for (const r of records) console.log(`   ${r.route}`);
if (DRY) console.log('（--dry：未寫檔）');
