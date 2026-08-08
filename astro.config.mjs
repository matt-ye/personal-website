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
  ],
});
