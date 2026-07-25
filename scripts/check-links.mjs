#!/usr/bin/env node
// 連結健檢：掃描教材頁的所有超連結，回報站內連結、頁內錨點與外部網址的狀態。
//
//   node scripts/check-links.mjs            # 全部檢查（外連需要對外網路）
//   node scripts/check-links.mjs --internal # 只檢查站內連結與錨點（免網路）
//
// 站內連結會比對 dist/ 的建置結果，所以請先跑過 `npm run build`。
// 在 GitHub Actions 上執行時會另外寫一份表格到 job summary。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SCAN_DIRS = [path.join(ROOT, 'public', 'projects')];
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

const files = SCAN_DIRS.flatMap((d) => collectHtml(d)).sort();
if (files.length === 0) {
  console.error('找不到任何 HTML 檔，請確認路徑。');
  process.exit(1);
}

// ---------- 收集連結 ----------
const internalIssues = [];
const externalMap = new Map(); // url -> Set(頁面標籤)
let internalOk = 0;

for (const file of files) {
  const label = path.basename(path.dirname(file));
  const html = fs.readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));

  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (href.includes("' +")) continue; // JS 樣板字串組出來的連結，另行人工確認

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
    const target = href.endsWith('/')
      ? path.join(DIST, href, 'index.html')
      : path.join(DIST, href);
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
  try {
    let r = await attempt('HEAD');
    // 不少站台不接受 HEAD，改用 GET 再試一次
    if (r.status === 405 || r.status === 403 || r.status === 501) {
      try { r = await attempt('GET'); } catch { /* 保留 HEAD 的結果 */ }
    }
    return r;
  } catch (e) {
    return { status: 0, error: e.name === 'AbortError' ? '逾時' : String(e.message || e) };
  }
}

function verdict(r) {
  if (r.status >= 200 && r.status < 300) return { icon: '✅', text: '正常' };
  if (r.status === 401 || r.status === 403) return { icon: '⚠️', text: `${r.status}（付費牆或擋機器人，請人工點一次）` };
  if (r.status === 429) return { icon: '⚠️', text: '429（被限流，請人工點一次）' };
  if (r.status === 0) return { icon: '❌', text: `連不上：${r.error}` };
  return { icon: '❌', text: `HTTP ${r.status}` };
}

const externalResults = [];
if (!ONLY_INTERNAL) {
  const urls = [...externalMap.keys()].sort();
  let cursor = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, async () => {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      const r = await probe(url);
      externalResults.push({ url, pages: [...externalMap.get(url)].sort(), ...r, ...verdict(r) });
    }
  });
  await Promise.all(workers);
  externalResults.sort((a, b) => a.url.localeCompare(b.url));
}

// ---------- 輸出 ----------
const lines = [];
lines.push(`掃描 ${files.length} 個頁面`);
lines.push('');
lines.push(`站內連結與錨點：通過 ${internalOk} 個，問題 ${internalIssues.length} 個`);
for (const i of internalIssues) lines.push(`  ❌ ${i.label}  ${i.href}  — ${i.msg}`);
lines.push('');

if (ONLY_INTERNAL) {
  lines.push(`外部連結：略過（--internal），共 ${externalMap.size} 個待驗證`);
} else {
  const broken = externalResults.filter((r) => r.icon === '❌');
  const warn = externalResults.filter((r) => r.icon === '⚠️');
  lines.push(`外部連結：${externalResults.length} 個｜正常 ${externalResults.length - broken.length - warn.length}｜需人工確認 ${warn.length}｜失效 ${broken.length}`);
  lines.push('');
  for (const r of externalResults) {
    lines.push(`  ${r.icon} ${r.text.padEnd(28)} ${r.url}`);
    lines.push(`      使用於：${r.pages.join('、')}`);
    if (r.finalUrl && r.finalUrl !== r.url) lines.push(`      轉址到：${r.finalUrl}`);
  }
}
console.log(lines.join('\n'));

// GitHub Actions job summary
if (process.env.GITHUB_STEP_SUMMARY) {
  const md = [];
  md.push('## 連結健檢報告', '');
  md.push(`掃描 ${files.length} 個教材頁。`, '');
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
      md.push(`| ${r.icon} ${r.text} | ${r.url} | ${r.pages.join('<br>')} |`);
    }
  }
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md.join('\n') + '\n');
}

const hardFail = internalIssues.length > 0 || externalResults.some((r) => r.icon === '❌');
process.exit(hardFail ? 1 : 0);
