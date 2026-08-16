#!/usr/bin/env node
// 連結健檢：掃描全站每一頁的超連結，回報站內連結、頁內錨點與外部網址的狀態。
//
//   node scripts/check-links.mjs            # 全部檢查（外連需要對外網路）
//   node scripts/check-links.mjs --internal # 只檢查站內連結與錨點（免網路）
//
// 掃描對象是 `dist/`，所以請先跑過 `npm run build`。
//
// 為什麼掃 dist 而不是 src：src 裡有三種語法（markdown 的 [text](url)、astro 的
// href="..."、ts 的字串常數），各要一個萃取器；build 之後全部變成標準 HTML，
// 一個 <a href> regex 就吃得下全站——包含部落格 md 轉出的頁面。
//
// 在 GitHub Actions 上執行時會另外寫一份表格到 job summary。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SCAN_DIRS = [DIST];
const ONLY_INTERNAL = process.argv.includes('--internal');
const TIMEOUT_MS = 20000;
const CONCURRENCY = 6;
const UA = 'Mozilla/5.0 (compatible; mattye-link-check/1.0; +https://mattye.dev)';

/** 遞迴收集要掃描的 HTML 檔 */
function collectHtml(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) collectHtml(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

/**
 * href 屬性值裡的 HTML 實體要先解碼再拿去 fetch。
 *
 * `&` 在屬性值裡本來就該寫成 `&amp;`——那是正確的 HTML，瀏覽器解析後送出的是 `&`。
 * 直接拿原始字串去 fetch，等於送出一個瀏覽器永遠不會送的網址。
 *
 * 實際踩到：`press.ntu.edu.tw/...?act=book&amp;refer=...` 被報成 404，
 * 換成 `&` 之後是 200——網址是好的，是檢查器沒解碼。
 * 有些站（YouTube）會容忍多餘的 `amp;` 參數，所以這個 bug 只在嚴格的站上顯形，
 * 更難被發現。
 *
 * 驗證工具要模擬真實客戶端的行為：它驗的是「使用者點下去會怎樣」，
 * 不是「原始碼字面長怎樣」。
 */
function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_m, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_m, h) => String.fromCodePoint(parseInt(h, 16)));
}

/** 讀一行一個網址的清單檔（# 開頭是註解） */
function readUrlList(name) {
  const p = path.join(ROOT, 'scripts', name);
  return new Set(
    (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
  );
}

/** 已確認失效、還沒修的網址：仍會列進報告，但不讓 CI 一直紅 */
const IGNORE = readUrlList('link-check-ignore.txt');

/**
 * 已人工確認正常、但這支程式驗不到的網址。
 * 有些站台（support.google.com 最明顯）對機房 IP 一律回 404——注意是 404 不是 403，
 * 所以光看狀態碼分不出「頁面不存在」和「你不是真人」。這類網址列在這裡，
 * 讓報告說實話：不是壞掉，是驗不到。
 */
const VERIFIED = readUrlList('link-check-verified.txt');

const files = SCAN_DIRS.flatMap((d) => collectHtml(d)).sort();
if (files.length === 0) {
  console.error('dist/ 底下找不到任何 HTML 檔——請先跑 `npm run build`。');
  process.exit(1);
}

/** dist 檔案路徑 → 網站上的網址路徑，當作報告裡的頁面標籤 */
function pageLabel(file) {
  const rel = path.relative(DIST, file).split(path.sep).join('/');
  return '/' + rel.replace(/(^|\/)index\.html$/, '$1');
}

// ---------- 收集連結 ----------
const internalIssues = [];
const externalMap = new Map(); // url -> Set(頁面標籤)
let internalOk = 0;

for (const file of files) {
  const label = pageLabel(file);
  const raw = fs.readFileSync(file, 'utf8');
  // <script> 裡的 href="${...}" 是樣板字串，不是真的連結（/coaching、/speeches 從
  // Google Sheet 動態組卡片）。這些網址在建置期不存在，靜態掃描本來就驗不了。
  const html = raw.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));

  // 只看 <a> 的 href：<link rel="preconnect"> / canonical 之類不是給人點的連結
  for (const m of html.matchAll(/<a\b[^>]*?href="([^"]+)"/g)) {
    const href = decodeEntities(m[1]);
    if (href.includes("' +")) continue; // JS 樣板字串組出來的連結，另行人工確認

    // mailto:／tel:／javascript: 沒有可檢查的目標，不是站內路徑也不是可 fetch 的網址
    if (/^(mailto|tel|javascript|sms):/i.test(href)) continue;

    if (href.startsWith('#')) {
      if (ids.has(href.slice(1))) internalOk++;
      else internalIssues.push({ label, href, msg: '頁內錨點不存在' });
      continue;
    }
    if (/^https?:\/\//.test(href)) {
      if (!externalMap.has(href)) externalMap.set(href, new Set());
      externalMap.get(href).add(label);
      continue;
    }
    if (!href.startsWith('/')) {
      internalIssues.push({ label, href, msg: '非絕對路徑' });
      continue;
    }
    // 站內連結可能帶 query 或 hash（例如 /writing/?series=硬核簡報）——
    // 那是給前端篩選用的，檔案系統上只有去掉這兩段之後的路徑。
    const cleanHref = href.replace(/[?#].*$/, '');
    const target = cleanHref.endsWith('/')
      ? path.join(DIST, cleanHref, 'index.html')
      : path.join(DIST, cleanHref);
    if (fs.existsSync(target)) internalOk++;
    else internalIssues.push({ label, href, msg: '站內目標頁面不存在（先跑 npm run build）' });
  }
}

// ---------- 檢查外連 ----------
async function probe(url) {
  const attempt = async (method) => {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        signal: ctrl.signal,
        headers: { 'user-agent': UA, accept: '*/*' },
      });
      return { status: res.status, finalUrl: res.url };
    } finally {
      clearTimeout(t);
    }
  };
  const once = async () => {
    try {
      let r = await attempt('HEAD');
      // 不少站台不接受 HEAD（或用它擋機器人），改用 GET 再試一次
      if ([400, 402, 403, 405, 406, 415, 501].includes(r.status)) {
        try { r = await attempt('GET'); } catch { /* 保留 HEAD 的結果 */ }
      }
      return r;
    } catch (e) {
      return { status: 0, error: e.name === 'AbortError' ? '逾時' : String(e.message || e) };
    }
  };

  const r = await once();
  // 會被判失效的，隔幾秒重試一次再定讞——對方站台抽風一分鐘不該讓 CI 變紅。
  // （實測：goodinfo.tw 與 csrc.nist.gov 都出現過前三輪正常、第四輪 520／404。）
  if (r.status >= 400 && ![401, 402, 403, 429, 451, 999].includes(r.status)) {
    await new Promise((res) => setTimeout(res, 3000));
    return await once();
  }
  return r;
}

/** 轉址後是否落到「別的頁面」——原頁面被移除時，很多站台會默默把你丟回首頁 */
function redirectedAway(url, finalUrl) {
  if (!finalUrl || finalUrl === url) return false;
  try {
    const from = new URL(url), to = new URL(finalUrl);
    const seg = from.pathname.split('/').filter(Boolean).pop();
    if (!seg) return false; // 原本就是首頁，轉到 /index 之類很正常
    const key = seg.replace(/\.\w+$/, '');
    return !to.href.includes(key);
  } catch { return false; }
}

function verdict(r, url) {
  const is2xx = r.status >= 200 && r.status < 300;
  if (VERIFIED.has(url) && !is2xx) {
    return { icon: '🔎', text: `${r.status || r.error}（機器驗不到，已人工確認正常）` };
  }
  if (IGNORE.has(url) && !is2xx) {
    return { icon: '🔕', text: `${r.status || r.error}（已知待修，見 link-check-ignore.txt）` };
  }
  if (r.status >= 200 && r.status < 300) {
    if (redirectedAway(url, r.finalUrl)) {
      return { icon: '⚠️', text: '轉址到別的頁面（原頁面可能已移除）' };
    }
    return { icon: '✅', text: '正常' };
  }
  // 這幾種回應分不出「頁面不在」還是「站台擋機器人」——交給人點一次，不當成失效。
  // （實測：Investopedia 同一批網址每次跑回 402 或 403 都有，是反爬不是死連結。）
  if ([401, 402, 403, 429, 451, 999].includes(r.status)) {
    return { icon: '⚠️', text: `${r.status}（付費牆或擋機器人，請人工點一次）` };
  }
  if (r.status === 0) return { icon: '⚠️', text: `連不上：${r.error}（可能被擋，請人工點一次）` };
  // 5xx 是「對方伺服器現在有問題」，不是「這個頁面不存在」——連結健檢不該為此變紅
  if (r.status >= 500) return { icon: '⚠️', text: `${r.status}（對方伺服器異常，請人工點一次）` };
  return { icon: '❌', text: `HTTP ${r.status}` };
}

/* 全站掃描後，footer/header 的連結會出現在每一頁——列出 60 個頁面沒有資訊量。
   超過門檻就只印前幾個並標「等 N 頁」。 */
const MAX_PAGES_SHOWN = 4;
function pagesLabel(pages) {
  if (pages.length <= MAX_PAGES_SHOWN) return pages.join('、');
  return `${pages.slice(0, MAX_PAGES_SHOWN).join('、')} 等 ${pages.length} 頁`;
}

const externalResults = [];
if (!ONLY_INTERNAL) {
  const urls = [...externalMap.keys()].sort();
  let cursor = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, async () => {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      const r = await probe(url);
      externalResults.push({ url, pages: [...externalMap.get(url)].sort(), ...r, ...verdict(r, url) });
    }
  });
  await Promise.all(workers);
  externalResults.sort((a, b) => a.url.localeCompare(b.url));
}

// ---------- 輸出 ----------
const lines = [];
lines.push(`掃描 ${files.length} 個頁面（dist 全站）`);
lines.push('');
lines.push(`站內連結與錨點：通過 ${internalOk} 個，問題 ${internalIssues.length} 個`);
for (const i of internalIssues) lines.push(`  ❌ ${i.label}  ${i.href}  — ${i.msg}`);
lines.push('');

if (ONLY_INTERNAL) {
  lines.push(`外部連結：略過（--internal），共 ${externalMap.size} 個待驗證`);
} else {
  const broken = externalResults.filter((r) => r.icon === '❌');
  const warn = externalResults.filter((r) => r.icon === '⚠️');
  const known = externalResults.filter((r) => r.icon === '🔕');
  const unverifiable = externalResults.filter((r) => r.icon === '🔎');
  const ok = externalResults.length - broken.length - warn.length - known.length - unverifiable.length;
  lines.push(`外部連結：${externalResults.length} 個｜正常 ${ok}｜需人工確認 ${warn.length}｜機器驗不到（已確認正常）${unverifiable.length}｜已知待修 ${known.length}｜新失效 ${broken.length}`);
  lines.push('');
  for (const r of externalResults) {
    lines.push(`  ${r.icon} ${r.text.padEnd(28)} ${r.url}`);
    lines.push(`      使用於：${pagesLabel(r.pages)}`);
    if (r.finalUrl && r.finalUrl !== r.url) lines.push(`      轉址到：${r.finalUrl}`);
  }
  // 待修清單也會腐爛：已經自己好起來的網址提醒刪掉，免得清單愈積愈舊。
  // 只看 IGNORE——VERIFIED 收的本來就是「時好時壞、驗不到」的網址，
  // 某一輪剛好回 2xx 不代表下一輪也會，提醒刪掉反而會害人把清單拆了。
  const recovered = externalResults.filter((r) => r.icon === '✅' && IGNORE.has(r.url));
  if (recovered.length) {
    lines.push('');
    lines.push(`以下 ${recovered.length} 個網址現在自己回 2xx 了，可以從清單檔移除：`);
    for (const r of recovered) lines.push(`  · ${r.url}`);
  }
}
console.log(lines.join('\n'));

// GitHub Actions job summary
if (process.env.GITHUB_STEP_SUMMARY) {
  const md = [];
  md.push('## 連結健檢報告', '');
  md.push(`掃描 ${files.length} 個頁面（dist 全站）。`, '');
  md.push(`### 站內連結與錨點`, '');
  md.push(internalIssues.length === 0
    ? `✅ 全部通過（${internalOk} 個）`
    : `❌ ${internalIssues.length} 個問題（通過 ${internalOk} 個）`);
  if (internalIssues.length) {
    md.push('', '| 頁面 | 連結 | 問題 |', '|---|---|---|');
    for (const i of internalIssues) md.push(`| ${i.label} | \`${i.href}\` | ${i.msg} |`);
  }
  if (!ONLY_INTERNAL) {
    md.push('', '### 外部連結', '', '| 狀態 | 連結 | 使用於 |', '|---|---|---|');
    for (const r of externalResults) {
      md.push(`| ${r.icon} ${r.text} | ${r.url} | ${pagesLabel(r.pages).replace(/、/g, '<br>')} |`);
    }
  }
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md.join('\n') + '\n');
}

const hardFail = internalIssues.length > 0 || externalResults.some((r) => r.icon === '❌');
process.exit(hardFail ? 1 : 0);
