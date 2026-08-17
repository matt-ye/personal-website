// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, relative, sep } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const SITE = 'https://mattye.dev';


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

          /*
           * 英文頁的根節點是 /en/，不是 /。
           *
           * 不分流的話，/en/ 底下每一頁的麵包屑都會是
           *   首頁 → /            （中文標籤，而且指回中文站）
           *   Matt Ye → /en/      （多出來的一層，標籤是站名）
           *   …
           * 對爬蟲而言，那是在說「這個英文頁的路徑起點是一個中文頁」。
           * 實測 26 個英文頁全部如此（2026-08-17 發現）。
           *
           * 作法：把 en 這一段從層級裡拿掉，改由根節點承擔。
           */
          const isEnPage = rel[0] === 'en';
          const levels = isEnPage ? rel.slice(1) : rel;
          const items = isEnPage
            ? [{ name: 'Home', url: `${SITE}/en/` }]
            : [{ name: '首頁', url: `${SITE}/` }];

          /* 逐層組出項目。祖先層若沒有自己的頁面（例如 /projects/marketing/ 有頁、
             但某個中介目錄沒有），就跳過那一層——麵包屑要指向真的點得到的頁面。 */
          for (let i = 0; i < levels.length; i++) {
            const segs = levels.slice(0, i + 1);
            /* labelOf 讀的是磁碟路徑，所以英文頁要把 en 前綴加回去 */
            const label = labelOf(isEnPage ? ['en', ...segs] : segs);
            if (!label) continue;
            items.push({ name: label, url: `${SITE}/${(isEnPage ? ['en', ...segs] : segs).join('/')}/` });
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
            /* i18n 頁對查同一筆日期：/en/x/ 與 /x/ 是同一篇文章的兩個語言版本，
               發佈日當然一樣。這份對照表是用中文網址建的，英文頁要剝掉 /en 前綴再查
               ——否則英文版會宣告自己沒有發佈日，那是 error 級的 L2-ARTICLE-NO-DATE。 */
            const date = dateByUrl.get(url) ?? dateByUrl.get(url.replace(`${SITE}/en/`, `${SITE}/`));
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
/*
 * 英文頁的 head 不該原封不動抄中文頁的值。
 *
 * ── 判準為什麼是「相同 ＋ 含中文」而不是「含中文」──────────────────
 * 只看「含中文」會誤判：紀念頁的英文標題是
 *   "Remembering Miguel 李維晏 · Teaching is the work of sharing joy"
 * ——人名刻意保留原字（各對照表的 KEEP），那是決定，不是漏譯。
 *
 * 只看「與中文頁相同」也會誤判：兩種語言共用一段純英文（產品名之類）是正常的。
 *
 * 兩個條件同時成立才是真的漏——**英文頁拿到的就是中文頁那一份**。
 * 這正是 aw32／daniels-talk／ga4-guide 的症狀：它們填了 titleEn 所以產出了
 * /en/ 網址，卻沒填 ogTitleEn，於是 StaticPageLayout 回退到中文的 ogTitle，
 * 英文頁的分享卡整張是中文。三頁上線多時都沒被發現——畫面上看不到，
 * 只有分享出去或爬蟲讀到才知道。
 */
function verifyI18nMeta() {
  const FIELDS = [
    [/<title>([^<]*)<\/title>/, 'title'],
    [/<meta name="description" content="([^"]*)"/, 'description'],
    [/<meta property="og:title" content="([^"]*)"/, 'og:title'],
    [/<meta property="og:description" content="([^"]*)"/, 'og:description'],
    [/<meta property="og:image:alt" content="([^"]*)"/, 'og:image:alt'],
    [/<meta name="twitter:title" content="([^"]*)"/, 'twitter:title'],
    [/<meta name="twitter:description" content="([^"]*)"/, 'twitter:description'],
  ];
  const CJK = /[一-鿿]/;

  return {
    name: 'verify-i18n-meta',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const enRoot = join(root, 'en');

        const pages = [];
        const walk = (d, rel) => {
          let entries;
          try { entries = readdirSync(d); } catch { return; }
          for (const e of entries) {
            const full = join(d, e);
            if (statSync(full).isDirectory()) walk(full, `${rel}/${e}`);
            else if (e === 'index.html') pages.push(`${rel || ''}/`.replace(/\/+/g, '/'));
          }
        };
        walk(enRoot, '');
        if (!pages.length) return;

        const headOf = (file) => {
          try {
            const html = readFileSync(file, 'utf8');
            return html.slice(0, html.indexOf('</head>'));
          } catch { return null; }
        };
        /* JSON-LD 的 headline／description／name 走同一個判準 */
        const ldOf = (file) => {
          try {
            const html = readFileSync(file, 'utf8');
            const out = {};
            for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
              const node = JSON.parse(m[1]);
              if (node['@type'] === 'BreadcrumbList') continue; // 麵包屑另有自己的產生邏輯
              for (const k of ['headline', 'description', 'name']) {
                /* ⚠ Person 的 name 不驗：人名在兩種語言本來就相同，而 name／
                   alternateName 正是 schema.org 用來承載名字的欄位。
                   紀念頁的 "李維晏" 會落在這裡，那是 KEEP 政策，不是漏譯。 */
                if (k === 'name' && node['@type'] === 'Person') continue;
                if (typeof node[k] === 'string') (out[k] ??= []).push(node[k]);
              }
              if (typeof node.isPartOf?.name === 'string') (out['isPartOf.name'] ??= []).push(node.isPartOf.name);
            }
            return out;
          } catch { return {}; }
        };

        const problems = [];
        for (const p of pages) {
          const rel = p.replace(/^\/|\/$/g, '');
          const segs = rel ? rel.split('/') : [];
          const enHead = headOf(join(root, 'en', ...segs, 'index.html'));
          const zhHead = headOf(join(root, ...segs, 'index.html'));
          if (enHead === null || zhHead === null) continue; // hreflang 那支負責報缺頁

          for (const [re, name] of FIELDS) {
            const en = enHead.match(re)?.[1];
            const zh = zhHead.match(re)?.[1];
            if (en && zh && en === zh && CJK.test(en)) {
              problems.push(`/en${p} 的 ${name} 與中文頁相同且含中文：${en.slice(0, 50)}…`);
            }
          }

          const enLd = ldOf(join(root, 'en', ...segs, 'index.html'));
          const zhLd = ldOf(join(root, ...segs, 'index.html'));
          for (const [k, enVals] of Object.entries(enLd)) {
            const zhVals = zhLd[k] ?? [];
            enVals.forEach((v, i) => {
              if (v === zhVals[i] && CJK.test(v)) {
                problems.push(`/en${p} 的 JSON-LD ${k} 與中文頁相同且含中文：${v.slice(0, 50)}…`);
              }
            });
          }
        }

        if (problems.length) {
          throw new Error(
            `英文頁的 meta／JSON-LD 直接沿用了中文頁的值（多半是漏填 ogTitleEn／ogDescriptionEn／jsonLdEn）：\n  ` +
              problems.join('\n  '),
          );
        }
        logger.info(`i18n meta verified: ${pages.length} page(s), no Chinese fallthrough`);
      },
    },
  };
}

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

/*
 * 守衛：[data-i18n] 佔位元素不能是空的。
 *
 * 那幾頁的文字由 applyI18n() 在瀏覽器端填入，build 產物裡本來全是空元素
 * ——aw32 的正文只有 176 字元，整頁對爬蟲等於不存在。內容已由
 * scripts/prerender-i18n.mjs 一次性寫進 public/ 的原始檔。
 *
 * 這條守衛擋的是之後的漂移：新增了 data-i18n 元素、或改了 var I 字典卻
 * 忘記重跑腳本。症狀（爬蟲看到空殼）在瀏覽器上完全看不出來，所以只能靠
 * 建置期檢查——同 verifyI18nHreflang 的理由。
 *
 * 修法：node scripts/prerender-i18n.mjs
 */
/*
 * 頁面用了 ligature 圖示字型，就必須真的載入那個字型。
 *
 * 為什麼需要這個守衛：手刻頁遷移時，<head> 被 staticPageMeta 產生的版本取代，
 * 原本寫在那裡的字型連結整批消失。**畫面沒有壞掉**——ligature 圖示退化成
 * 它的名字（arrow_back、translate、dark_mode 直接顯示成文字），字體退回系統字。
 * 「看起來只是有點怪」，所以沒有人回報，SEO 檢核器也不驗這件事
 * （它檢查的是結構與內容，不是「頁面需要的外部資源在不在」）。
 *
 * 只驗 ligature 圖示字型，不驗一般字體：一般 font-family 是有 fallback 的堆疊，
 * 少了 webfont 只是換一個字體；ligature 圖示少了字型會直接變成英文單字，
 * 那是功能性損壞，不是外觀差異。**判準要對應後果的嚴重度。**
 */
/*
 * dist/404.html 必須存在——它的有無決定整站的路由行為。
 *
 * Cloudflare Pages 官方文件：「If your project does not include a top-level
 * 404.html file, Pages assumes that you are deploying a single-page application」，
 * 而該模式「matches all incoming paths to the root (/)」。
 *
 * 也就是說**刪掉 src/pages/404.astro 不會讓任何東西壞掉**——建置照過、
 * 頁面照出，只是全站悄悄變回「任何網址都回 200 ＋ 首頁」的狀態，
 * 而那正是 Google 說的 soft 404。這種退化沒有症狀，所以在這裡擋。
 */
function verifyNotFoundPage() {
  return {
    name: 'verify-404-page',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const file = join(fileURLToPath(dir), '404.html');
        let html;
        try { html = readFileSync(file, 'utf8'); } catch {
          throw new Error(
            'dist/404.html 不存在。沒有它，Cloudflare Pages 會把整站當成 SPA，' +
            '任何不存在的網址都會回 200 ＋ 首頁內容（Google 的 soft 404）。\n' +
            '  → 請確認 src/pages/404.astro 還在',
          );
        }
        /* 錯誤頁進索引就失去意義了——Google 對 soft 404 的建議之一就是 noindex */
        if (!/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) {
          throw new Error('dist/404.html 缺少 noindex——錯誤頁不該進索引');
        }
        logger.info('404 page verified: exists and is noindex');
      },
    },
  };
}

function verifyIconFonts() {
  const FONTS = [
    { cls: /class="[^"]*\bmaterial-symbols[^"]*"/, need: /fonts\.googleapis\.com[^"]*Material\+Symbols/, name: 'Material Symbols' },
    { cls: /class="[^"]*\bmaterial-icons\b[^"]*"/, need: /fonts\.googleapis\.com[^"]*Material\+Icons/, name: 'Material Icons' },
  ];
  return {
    name: 'verify-icon-fonts',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const problems = [];
        let checked = 0;

        const walk = (d) => {
          let entries;
          try { entries = readdirSync(d); } catch { return; }
          for (const e of entries) {
            const full = join(d, e);
            if (statSync(full).isDirectory()) { walk(full); continue; }
            if (e !== 'index.html') continue;
            const html = readFileSync(full, 'utf8');
            for (const f of FONTS) {
              if (!f.cls.test(html)) continue;
              checked++;
              if (!f.need.test(html)) {
                problems.push(`${relative(root, full).replace(/\\/g, '/')} 用了 ${f.name} 的圖示，但沒有載入該字型`);
              }
            }
          }
        };
        walk(root);

        if (problems.length) {
          throw new Error(
            `圖示字型缺失（${problems.length} 頁）：\n  ${problems.join('\n  ')}\n` +
            '  → 在 src/data/staticPageMeta.ts 該頁的 headLinks 補上字型連結',
          );
        }
        logger.info(`icon fonts verified: ${checked} page(s) using icon fonts, all loaded`);
      },
    },
  };
}

function verifyI18nPrerendered() {
  return {
    name: 'verify-i18n-prerendered',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const problems = [];
        let checked = 0;

        const walk = (d) => {
          let entries;
          try { entries = readdirSync(d); } catch { return; }
          for (const e of entries) {
            const full = join(d, e);
            if (statSync(full).isDirectory()) { walk(full); continue; }
            if (e !== 'index.html') continue;

            const html = readFileSync(full, 'utf8').replace(/<script\b[\s\S]*?<\/script>/gi, '');
            if (!/data-i18n/.test(html)) continue;
            checked++;
            /* 只抓「開標籤後緊接關標籤」的真空元素；有巢狀內容的不算 */
            const empty = [...html.matchAll(/<(\w+)\b([^>]*\bdata-i18n(?:-html)?\s*=\s*"[^"]+"[^>]*)>\s*<\/\1>/g)];
            if (empty.length) {
              const rel = full.slice(root.length).replace(/\\/g, '/');
              problems.push(`${rel}：${empty.length} 個空的 data-i18n 元素 — 跑 node scripts/prerender-i18n.mjs`);
            }
          }
        };
        walk(root);

        /* 紀念頁用的是 id 容器而不是 data-i18n，上面那個掃描抓不到。
           這些 id 必須逐一列出——實際發生過：另一個分支重寫了頁面區塊，
           git 自動合併沒有衝突，四個容器被改回空的而完全沒有訊號。

           #boardWall 刻意不在清單裡：留言從 Sheet 即時抓，含學生姓名，
           不寫進版控（見 scripts/prerender-i18n.mjs 的說明）。 */
        const MEMORIAL = 'writing/In-Memory-of-Miguel-Li/index.html';
        /* one-more-step 兩頁由資料陣列生成的區塊。
           上面那個掃描只抓 data-i18n，這些是帶 id 的容器，抓不到。

           中英兩條路由都要驗：中文版由 scripts/prerender-containers.mjs 寫進片段，
           英文版由 StaticPageContent 從 <key>.en.json 注入——兩條路徑不同，
           只驗一邊的話另一邊壞掉不會有訊號。 */
        const OMS = {
          'projects/one-more-step/aw32/index.html': [
            'timelineList', 'statsGrid', 'filterControls', 'startupGrid', 'tierGrid',
            'moatStrongList', 'moatWeakList', 'opinionGrid', 'lensGrid',
          ],
          'projects/one-more-step/daniels-talk/index.html': ['readingsGrid', 'summaryTable', 'quizQuestions'],
        };
        for (const [rel, ids] of Object.entries(OMS)) {
          for (const prefix of ['', 'en/']) {
            const full = join(root, ...`${prefix}${rel}`.split('/'));
            let html;
            try { html = readFileSync(full, 'utf8'); } catch { continue; }
            const empty = ids.filter((id) =>
              new RegExp(`<(\\w+)[^>]*\\bid="${id}"[^>]*>\\s*</\\1>`).test(html),
            );
            if (empty.length) {
              problems.push(`${prefix}${rel}：${empty.length} 個空容器（${empty.join(', ')}）— 跑 node scripts/prerender-containers.mjs`);
            }
            checked++;
          }
        }

        const MEMORIAL_IDS = ['nameZh', 'bioParas', 'facts', 'stats', 'courseList', 'tributeList', 'qtext', 'footer'];
        try {
          const html = readFileSync(join(root, ...MEMORIAL.split('/')), 'utf8')
            .replace(/<script\b[\s\S]*?<\/script>/gi, '');
          const empty = MEMORIAL_IDS.filter((id) =>
            new RegExp(`<(\\w+)[^>]*\\bid="${id}"[^>]*>\\s*</\\1>`).test(html),
          );
          if (empty.length) problems.push(`${MEMORIAL}：${empty.length} 個空容器（${empty.join(', ')}）`);
          if (!/data-related-links/.test(html)) problems.push(`${MEMORIAL}：缺站內相關連結區塊 — 跑 node scripts/prerender-i18n.mjs`);
          checked++;
        } catch { /* 檔案不在就跳過，不擋建置 */ }

        if (problems.length) {
          throw new Error(
            /* 修法寫在每一條問題後面，不寫在標題——現在有兩支腳本
               （data-i18n 佔位用 prerender-i18n、資料陣列容器用 prerender-containers），
               標題只寫一支會把人指去跑不對的那支。 */
            '預渲染的內容不見了，爬蟲會看到空殼：\n  ' + problems.join('\n  '),
          );
        }
        if (checked) logger.info(`i18n prerender verified: ${checked} page(s), no empty placeholders`);
      },
    },
  };
}


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
      // keep unlinked prototype/lab pages out of the sitemap (also noindex'd)
      filter: (page) => !page.includes('/projects/globe-lab') && !page.includes('/dashboard'),
      serialize(item) {
        const d = lastmodByUrl.get(item.url);
        if (d) item.lastmod = new Date(`${d}T00:00:00+08:00`).toISOString();
        return item;
      },
    }),
    autoLinkWeekRefs(),
    /* 這兩個都在 astro:build:done 改寫 dist 的 HTML。
       datePublished 用的是與 sitemap lastmod 同一份日期資料（src/data/*.ts 的 date），
       麵包屑則從 dist 的目錄結構推導，新增內容不必另外設定。 */
    injectArticleDates(lastmodByUrl),
    injectBreadcrumbs(),
    verifyRssFeed(),
    verifyI18nHreflang(),
    verifyI18nMeta(),
    verifyNotFoundPage(),
    verifyIconFonts(),
    verifyI18nPrerendered(),
  ],
});