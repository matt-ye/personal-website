// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, relative, sep } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const SITE = 'https://mattye.dev';

// GA4 tag。與 src/layouts/BaseLayout.astro（GA 注入點）保持一致。
const GA_ID = 'G-1RKL72DPPW';
const GA_SNIPPET =
  `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>` +
  `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
  `gtag('js',new Date());gtag('config','${GA_ID}');</script>`;

// public/ 底下的手刻靜態 HTML 不經過 BaseLayout，故沒有 GA tag。
// build 後掃過 dist/**/*.html，對缺 tag 者在 </head> 前補上（已有者跳過，不重複計數）。
function injectGaIntoStaticHtml() {
  return {
    name: 'inject-ga-static-html',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let injected = 0;
        const walk = (d) => {
          for (const entry of readdirSync(d)) {
            const p = join(d, entry);
            if (statSync(p).isDirectory()) { walk(p); continue; }
            if (!entry.endsWith('.html')) continue;
            const html = readFileSync(p, 'utf8');
            if (html.includes(GA_ID)) continue; // 已有 tag（Astro 頁 / 重跑）
            const idx = html.toLowerCase().lastIndexOf('</head>');
            if (idx === -1) continue; // 無 <head>，略過
            writeFileSync(p, html.slice(0, idx) + GA_SNIPPET + html.slice(idx));
            injected++;
          }
        };
        walk(root);
        logger.info(`injected GA tag into ${injected} static HTML page(s)`);
      },
    },
  };
}

// 投資課 26+ 週的內文密集互相引用（「W12」「第 21 週」），但手刻 HTML 裡多數
// 引用是純文字——逐頁手改近兩百處不可行，之後每週還會新增。所以 build 後把
// 課程頁內文的週次引用自動轉成站內連結：
//   - 對照表從 src/data/familyInvestingCourse.ts 讀（單一事實來源，該檔每週
//     上線時本來就要新增 entry），且只連結 dist 裡「目標頁真的存在」的週次——
//     內文提到還沒上線的 W38 會保持純文字，等那週上線，下次 build 自動補上
//   - 只動文字節點。<script>（互動 JS 與 JSON-LD 裡有大量 WNN 字串，注入
//     HTML 會直接弄壞互動）、<style>、<title>、既有 <a>、<summary>／<button>／
//     <label>（點連結會蓋掉展開／作答／勾選的行為）一律跳過；屬性值天然不在
//     文字節點裡，不會被碰到
//   - 不連結「本頁自己的週次」（W25 頁裡的 W25 連自己沒有意義）
// 寫作慣例因此不變：新單元照常寫「（W18）」，build 完自動變連結。
function autoLinkWeekRefs() {
  const COURSE = 'projects/family-investing-course';
  // 點連結會與原本的互動行為衝突、或本來就不該動的容器
  const SKIP = new Set(['script', 'style', 'title', 'a', 'summary', 'button', 'label']);
  const WREF_CSS =
    'a.wref{color:var(--pine);text-decoration:none}a.wref:hover{text-decoration:underline}';

  return {
    name: 'auto-link-week-refs',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const courseDir = join(root, ...COURSE.split('/'));

        // 週次 → URL 對照表：讀 data 檔（理由同 sitemap 的 readPairs：不 import .ts），
        // 並要求 dist 裡目標頁確實存在——自動產生的連結不經過人眼，必須自我驗證。
        const urlByWeek = new Map();
        let src = '';
        try { src = readFileSync(join(__dirname, 'src/data/familyInvestingCourse.ts'), 'utf-8'); } catch {}
        for (const m of src.matchAll(/slug:\s*'(week-(\d{2})[^']*)'/g)) {
          const slug = m[1], week = parseInt(m[2], 10);
          try {
            statSync(join(courseDir, slug, 'index.html'));
            urlByWeek.set(week, `/${COURSE}/${slug}/`);
          } catch { /* 目標頁不在 dist，不連 */ }
        }
        if (urlByWeek.size === 0) { logger.warn('no week pages found, skipped'); return; }

        let pages = 0, links = 0;
        for (const entry of readdirSync(courseDir)) {
          const selfWeek = entry.match(/^week-(\d{2})/);
          if (!selfWeek) continue;
          const file = join(courseDir, entry, 'index.html');
          const html = readFileSync(file, 'utf8');

          let pageLinks = 0;
          const self = parseInt(selfWeek[1], 10);
          const wrap = (label, week) => {
            const url = urlByWeek.get(week);
            if (!url || week === self) return label;
            pageLinks++;
            return `<a class="wref" href="${url}">${label}</a>`;
          };
          // 「W12」「第 12 週」以及範圍寫法「W19–20」「W14–18」「第 21–23 週」
          // （分隔號 en-dash 與 hyphen 都有人寫）。範圍的起訖各自成為連結，中間
          // 週次不展開——自動改寫散文（W14–18 → W14、W15…）會動到文意，不做。
          // 必須用單一 regex 一次掃完：分成多次 replace 的話，前一輪產生的
          // <a>W19</a> 會被下一輪當成新的 W19 再包一層，變成巢狀連結。
          // 「W15：20」「W13/W19」這類不是範圍，分隔號字元類故意不含 ：與 /。
          const linkify = (text) =>
            text.replace(
              /\bW(?<ra>\d{1,2})(?<rsep>\s?[–—-]\s?)(?<rb>\d{1,2})\b|第(?<ds1>\s?)(?<da>\d{1,2})(?<dsep>\s?[–—-]\s?)(?<db>\d{1,2})(?<ds2>\s?)週|\bW(?<sa>\d{1,2})\b|第\s?(?<sb>\d{1,2})\s?週/g,
              (...args) => {
                const whole = args[0], g = args[args.length - 1];
                if (g.ra) return wrap('W' + g.ra, +g.ra) + g.rsep + wrap(g.rb, +g.rb);
                if (g.da) return '第' + g.ds1 + wrap(g.da, +g.da) + g.dsep + wrap(g.db, +g.db) + g.ds2 + '週';
                if (g.sa) return wrap(whole, +g.sa);
                return wrap(whole, +g.sb);
              }
            );

          // 以標籤為界切開，僅改「不在任何 SKIP 容器內」的文字片段
          const depth = {};
          let inSkip = 0;
          const out = html.split(/(<[^>]*>)/).map((tok) => {
            if (tok.startsWith('<')) {
              const t = tok.match(/^<\s*(\/?)([a-zA-Z][a-zA-Z0-9-]*)/);
              if (t && SKIP.has(t[2].toLowerCase()) && !tok.endsWith('/>')) {
                const name = t[2].toLowerCase();
                depth[name] = (depth[name] || 0) + (t[1] ? -1 : 1);
                inSkip += t[1] ? -1 : 1;
              }
              return tok;
            }
            return inSkip > 0 ? tok : linkify(tok);
          }).join('');

          if (pageLinks > 0) {
            // 連結樣式跟頁面的 a.srclink 一致；規則附掛在頁面既有 <style> 尾端。
            // 先檢查再插入，重跑同一份 dist 也不會重複。
            const styled = out.includes(WREF_CSS)
              ? out
              : out.replace('</style>', WREF_CSS + '</style>');
            writeFileSync(file, styled);
            pages++;
            links += pageLinks;
          }
        }
        logger.info(`linked ${links} week reference(s) across ${pages} course page(s)`);
      },
    },
  };
}

function findPublicHtmlPages(publicDir, siteUrl) {
  const pages = [];
  function scan(dir) {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        scan(fullPath);
      } else if (entry === 'index.html') {
        // relative() 在 Windows 回傳反斜線。最終 XML 看不出來（new URL 會正規化），
        // 但 serialize 拿到的是原始字串，比對網址會全部落空——所以在這裡就轉成 /。
        const rel = relative(publicDir, dir).split(sep).join('/');
        pages.push(`${siteUrl}/${rel}/`);
      }
    }
  }
  scan(publicDir);
  return pages;
}

const publicPages = findPublicHtmlPages(join(__dirname, 'public'), SITE);

/*
 * sitemap 的 lastmod。
 *
 * 刻意「有真實日期才給，沒有就不給」——lastmod 是選填欄位，但填了不準的值
 * 比不填更糟：Google 明確表示會忽略甚至不再信任該站的 lastmod。所以這裡
 * 不用建置時間（那會宣稱每次部署全站都更新過），只用內容本身的日期。
 *
 * 資料來源用 fs + regex 直接讀，不 import .ts：astro.config 是 .mjs，
 * 走 import 得依賴 Vite 的 TS 解析，多一層build 期的失敗點。這些檔案的
 * 形狀很固定（slug + date 成對），regex 夠用且不會拖累建置。
 */
/* 排程性質的日期（例如尚未到期的課程週次）會落在未來。未來的 lastmod 不是
   「最後修改時間」，Google 也會判定為不可信而忽略整站的 lastmod，所以直接
   不給。建置日一到就會自動生效，不需要人工維護。 */
const TODAY = new Date().toISOString().slice(0, 10);

function readPairs(file, urlOf) {
  const map = new Map();
  let src;
  try {
    src = readFileSync(join(__dirname, file), 'utf-8');
  } catch {
    return map;                       // 檔案不在就跳過，不擋建置
  }
  // 逐個物件比對 slug 與 date，順序不拘
  for (const block of src.split(/\{\s*\n/)) {
    const slug = block.match(/slug:\s*'([^']+)'/);
    const date = block.match(/date:\s*'(\d{4}-\d{2}-\d{2})'/);
    const url = block.match(/url:\s*'([^']+)'/);
    if (!date || date[1] > TODAY) continue;
    const href = url ? url[1] : (slug ? urlOf(slug[1]) : null);
    if (!href) continue;
    map.set(href.startsWith('http') ? href : SITE + href, date[1]);
  }
  return map;
}

function readBlogDates() {
  const map = new Map();
  const dir = join(__dirname, 'src/content/blog');
  let files = [];
  try {
    files = readdirSync(dir).filter(f => f.endsWith('.md'));
  } catch {
    return map;
  }
  for (const f of files) {
    const fm = readFileSync(join(dir, f), 'utf-8').slice(0, 800);
    const d = fm.match(/pubDate:\s*(\d{4}-\d{2}-\d{2})/);
    if (d && d[1] <= TODAY) map.set(`${SITE}/writing/${f.replace(/\.md$/, '')}/`, d[1]);
  }
  return map;
}

const oms = readPairs('src/data/oneMoreStep.ts', s => `/projects/one-more-step/${s}/`);
const mkt = readPairs('src/data/marketing.ts', s => `/projects/marketing/${s}/`);
const fic = readPairs('src/data/familyInvestingCourse.ts', s => `/projects/family-investing-course/${s}/`);
const ess = readPairs('src/data/essays.ts', s => `/writing/${s}/`);
const blog = readBlogDates();

// 列表頁的「最後更新」＝最新一篇子頁的日期。這仍然是真實日期：hub 的內容
// 確實在那天才多出一筆。沒有子頁可推的（首頁、計算機）就不給。
const newest = (...maps) => maps.flatMap(m => [...m.values()]).sort().pop();

const lastmodByUrl = new Map([
  ...oms, ...mkt, ...fic, ...ess, ...blog,
  [`${SITE}/projects/one-more-step/`, newest(oms)],
  [`${SITE}/projects/marketing/`, newest(mkt)],
  [`${SITE}/projects/family-investing-course/`, newest(fic)],
  [`${SITE}/writing/`, newest(ess, blog, oms, mkt)],
]);

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [
    sitemap({
      customPages: publicPages,
      // keep unlinked prototype/lab pages out of the sitemap (also noindex'd)
      filter: (page) => !page.includes('/projects/globe-lab') && !page.includes('/dashboard'),
      serialize(item) {
        const d = lastmodByUrl.get(item.url);
        if (d) item.lastmod = new Date(`${d}T00:00:00+08:00`).toISOString();
        return item;
      },
    }),
    injectGaIntoStaticHtml(),
    autoLinkWeekRefs(),
  ],
});
