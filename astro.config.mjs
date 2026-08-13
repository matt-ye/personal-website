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

// RSS feed 的自我驗證（理由同 autoLinkWeekRefs：自動產生、不經過人眼的連結
// 必須自己證明有效）。feed 壞掉不像頁面壞掉那樣看得見——沒有畫面、訂閱者也
// 不會回報，只會安靜地漏文章，所以讓 build 直接紅掉。
// 擋下的情境：feed 空了（來源模組壞掉）、連結指向不存在的頁（slug 改名但
// 資料檔沒同步）、網址不是絕對路徑（RSS 規格要求，閱讀器才連得到）。
/**
 * BreadcrumbList JSON-LD 自動注入。
 *
 * 刻意「從網址推導」而不是逐頁手寫：這站的內容一直在長（課程週次、行銷專欄、
 * One More Step 都會再加），手寫的麵包屑一定會有人忘記加。從 dist 的目錄結構
 * 推導，新頁面一 build 就自動有麵包屑，不需要任何額外動作。
 *
 * 每一層的顯示名稱去讀該層 index.html 自己的 <title>（去掉站名後綴）——
 * 名稱因此永遠與該頁自稱的一致，改標題時麵包屑跟著改，不會對不上。
 */
function injectBreadcrumbs() {
  return {
    name: 'inject-breadcrumbs',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        /** 從一個 index.html 取出適合當麵包屑節點的名稱 */
        const labelOf = (segments) => {
          const file = join(root, ...segments, 'index.html');
          let html;
          try { html = readFileSync(file, 'utf8'); } catch { return null; }
          const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
          if (!t) return null;
          let s = t[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

          /* 站名後綴可能出現不只一次——有些頁面自己的 title 就寫了
             「Projects — Matt Ye」，BaseLayout 再加一次變成
             「Projects — Matt Ye · 葉淨維 Matt Ye」。所以要重複剝到沒有為止。
             麵包屑每一節都掛著站名的話，路徑會長到看不出層級。 */
          for (let i = 0; i < 3; i++) {
            const next = s.replace(/\s*[—–·|｜-]\s*(葉淨維\s*)?Matt Ye\s*$/iu, '');
            if (next === s) break;
            s = next;
          }
          /* 「第 1 週：…｜給家人的投資課」這種「自己｜所屬系列」的寫法，
             系列名在麵包屑的上一層已經有了，這裡只保留自己那一段。 */
          s = s.replace(/｜[^｜]*$/u, '');
          /* 雙語標題是中英並排（「給家人的投資課 Family Investing Course」），
             取中文那段就好——麵包屑要短。找不到中文就整串保留。 */
          const zh = s.match(/^[^A-Za-z]*[一-鿿][^A-Za-z]*/u);
          if (zh && zh[0].trim().length >= 2) s = zh[0].trim();

          /* 剝完後常留下孤立的分隔符（例如「…筆記 ·」），清掉頭尾的標點 */
          s = s.replace(/^[\s—–·|｜:：-]+|[\s—–·|｜:：-]+$/gu, '');

          return s.trim() || null;
        };

        const pages = [];
        const walk = (d) => {
          for (const entry of readdirSync(d)) {
            const p = join(d, entry);
            if (statSync(p).isDirectory()) { walk(p); continue; }
            if (entry === 'index.html') pages.push(p);
          }
        };
        walk(root);

        let injected = 0, skipped = 0;
        for (const file of pages) {
          const rel = relative(root, file).split(sep).slice(0, -1); // 去掉 index.html
          if (rel.length === 0) continue;            // 首頁本身不需要麵包屑
          const html = readFileSync(file, 'utf8');
          if (html.includes('"BreadcrumbList"')) { skipped++; continue; }

          /* 逐層組出項目。祖先層若沒有自己的頁面（例如 /projects/marketing/ 有頁、
             但某個中介目錄沒有），就跳過那一層——麵包屑要指向真的點得到的頁面。 */
          const items = [{ name: '首頁', url: `${SITE}/` }];
          for (let i = 0; i < rel.length; i++) {
            const segs = rel.slice(0, i + 1);
            const label = labelOf(segs);
            if (!label) continue;
            items.push({ name: label, url: `${SITE}/${segs.join('/')}/` });
          }
          if (items.length < 2) continue;            // 只有首頁就沒有意義

          const ld = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((it, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: it.name,
              /* 最後一項是當前頁，依 schema.org 慣例不給 item */
              ...(i === items.length - 1 ? {} : { item: it.url }),
            })),
          };

          const idx = html.toLowerCase().lastIndexOf('</head>');
          if (idx === -1) continue;
          const tag = `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
          writeFileSync(file, html.slice(0, idx) + tag + html.slice(idx));
          injected++;
        }
        logger.info(`breadcrumbs injected into ${injected} page(s)${skipped ? `, ${skipped} already had one` : ''}`);
      },
    },
  };
}

/**
 * 給 public/ 手刻頁的 Article JSON-LD 補 datePublished。
 *
 * 那些頁面的結構化資料是手寫的，多數漏了 datePublished。日期不另外猜——
 * 直接用 sitemap lastmod 已經在讀的同一份資料（src/data/*.ts 的 date 欄位），
 * 那是內容的發佈日，比檔案的 git 建立時間準確（內容常是先寫好、排程才上線）。
 */
function injectArticleDates(dateByUrl) {
  return {
    name: 'inject-article-dates',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let filled = 0, noDate = 0;
        const walk = (d) => {
          for (const entry of readdirSync(d)) {
            const p = join(d, entry);
            if (statSync(p).isDirectory()) { walk(p); continue; }
            if (entry !== 'index.html') continue;

            const html = readFileSync(p, 'utf8');
            /* 只補「有 Article 型 JSON-LD 但沒有 datePublished」的頁 */
            if (!/"@type"\s*:\s*"(Article|BlogPosting|NewsArticle|TechArticle)"/.test(html)) continue;
            if (/"datePublished"/.test(html)) continue;

            const url = `${SITE}/${relative(root, p).split(sep).slice(0, -1).join('/')}/`;
            const date = dateByUrl.get(url);
            if (!date) { noDate++; continue; }

            /* 插在 @type 後面，維持 JSON 合法 */
            const out = html.replace(
              /("@type"\s*:\s*"(?:Article|BlogPosting|NewsArticle|TechArticle)")/,
              `$1,"datePublished":"${new Date(`${date}T00:00:00+08:00`).toISOString()}"`
            );
            if (out !== html) { writeFileSync(p, out); filled++; }
          }
        };
        walk(root);
        logger.info(`datePublished filled on ${filled} page(s)${noDate ? `, ${noDate} had no date in src/data` : ''}`);
      },
    },
  };
}

function verifyRssFeed() {
  return {
    name: 'verify-rss-feed',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const file = join(root, 'rss.xml');
        let xml;
        try {
          xml = readFileSync(file, 'utf8');
        } catch {
          throw new Error('rss.xml 未產生——檢查 src/pages/rss.xml.ts');
        }

        const links = [...xml.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map((m) => m[1]);
        if (links.length === 0) throw new Error('rss.xml 沒有任何 item——檢查 src/lib/writing.ts 的來源');

        const bad = [];
        for (const href of links) {
          if (!href.startsWith(SITE + '/')) { bad.push(`${href}（非絕對網址）`); continue; }
          const rel = href.slice(SITE.length).replace(/^\/+|\/+$/g, '');
          // 目錄式輸出：/foo/ → dist/foo/index.html
          try { statSync(join(root, ...rel.split('/'), 'index.html')); }
          catch { bad.push(`${href}（dist 找不到對應頁面）`); }
        }
        if (bad.length) throw new Error(`rss.xml 有 ${bad.length} 個無效連結：\n  ` + bad.join('\n  '));

        logger.info(`rss.xml verified: ${links.length} item(s), all links resolve`);
      },
    },
  };
}

/*
 * i18n 遷移的建置期守衛。
 *
 * 遷移一頁要做兩件事：把頁面改成 [...lang] 動態路由，以及把路徑加進
 * src/lib/i18n.ts 的 MIGRATED_PATHS。只做第一件，頁面會正常產出、畫面
 * 完全正常，但少了 hreflang——搜尋引擎因此不知道兩個網址是同一頁的不同語言。
 *
 * 這種「症狀看不見」的遺漏正是最該用機器擋的：實際發生過一次（/projects/），
 * 而且是在人工比對 dist 產出時才發現的。
 *
 * 檢查方式是比對 dist 的實際產出，不是讀原始碼——真正重要的是使用者拿到的
 * HTML 裡有沒有那幾行，不是我們以為它應該有。
 */
function verifyI18nHreflang() {
  return {
    name: 'verify-i18n-hreflang',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const enRoot = join(root, 'en');

        /** dist/en 底下所有頁面的中文對應路徑，例如 /about/ */
        const enPages = [];
        const walk = (d, rel) => {
          let entries;
          try { entries = readdirSync(d); } catch { return; }
          for (const e of entries) {
            const full = join(d, e);
            if (statSync(full).isDirectory()) walk(full, `${rel}/${e}`);
            else if (e === 'index.html') enPages.push(`${rel || ''}/`.replace(/\/+/g, '/'));
          }
        };
        walk(enRoot, '');
        if (enPages.length === 0) return; // 還沒有任何 /en/ 頁面

        const hasHreflang = (file) => {
          try {
            const html = readFileSync(file, 'utf8').replace(/<script\b[\s\S]*?<\/script>/gi, '');
            return /<link rel="alternate" hreflang="en"/.test(html);
          } catch { return null; }
        };

        const problems = [];
        for (const p of enPages) {
          const rel = p.replace(/^\/|\/$/g, '');
          const enFile = join(root, 'en', ...(rel ? rel.split('/') : []), 'index.html');
          const zhFile = join(root, ...(rel ? rel.split('/') : []), 'index.html');

          if (hasHreflang(zhFile) === null) {
            problems.push(`${p} 有 /en/ 版但找不到中文版 dist${p}index.html`);
            continue;
          }
          if (!hasHreflang(enFile)) problems.push(`/en${p} 缺 hreflang`);
          if (!hasHreflang(zhFile)) problems.push(`${p} 缺 hreflang（有 /en 版卻沒互指）`);
        }

        if (problems.length) {
          throw new Error(
            `i18n hreflang 檢查未過，通常是忘了把路徑加進 src/lib/i18n.ts 的 MIGRATED_PATHS：\n  ` +
              problems.join('\n  '),
          );
        }
        logger.info(`i18n verified: ${enPages.length} localized page pair(s), hreflang reciprocal`);
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

    /* published 優先於 date。
       兩個欄位的語意不同：date 可能是排程／課綱進度（familyInvestingCourse 的
       date 是「課程第幾週」，排到 2026-12），published 是「實際公開的那一天」。

       以前只有 date，未來日期一律跳過——結果 20 個課程頁明明公開可讀、內容
       完整、也在 sitemap 裡，卻因為進度表日期在未來而不輸出 datePublished。
       填了 published 就不做未來檢查：這個欄位的定義就是已經公開，不可能在未來。 */
    const published = block.match(/published:\s*'(\d{4}-\d{2}-\d{2})'/);
    const when = published ? published[1] : (date && date[1] <= TODAY ? date[1] : null);
    if (!when) continue;

    const href = url ? url[1] : (slug ? urlOf(slug[1]) : null);
    if (!href) continue;
    map.set(href.startsWith('http') ? href : SITE + href, when);
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
  /* 網址層級的語言分流。目前站上的語言是 CSS 切換（同一份 HTML 裝兩種語言，
     見 components/T.astro），那讓爬蟲讀到「首頁Home」這種混雜字串，也沒辦法
     把英文版單獨分享給人。

     prefixDefaultLocale: false 是關鍵：中文維持原網址（/about/），英文才加
     前綴（/en/about/）。既有的網址、外部連結與 GSC 索引因此完全不受影響。

     ⚠ 這個設定本身不會產生任何 /en/ 頁面——要一頁一頁遷移成 [...lang] 動態
     路由才會有。遷移進度見 docs/i18n-architecture-plan.md。 */
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
    routing: { prefixDefaultLocale: false },
  },
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
    /* 這兩個都在 astro:build:done 改寫 dist 的 HTML。
       datePublished 用的是與 sitemap lastmod 同一份日期資料（src/data/*.ts 的 date），
       麵包屑則從 dist 的目錄結構推導，新增內容不必另外設定。 */
    injectArticleDates(lastmodByUrl),
    injectBreadcrumbs(),
    verifyRssFeed(),
    verifyI18nHreflang(),
  ],
});
