#!/usr/bin/env node
/*
 * 把 Google Sheet 的資料抓下來存成 src/data/sheets/*.json 快照。
 *
 * 為什麼要有快照，而不是 build 時直接抓：
 *   1. build 不再依賴 Google 的可用性——Sheet 掛掉、變慢、改權限，網站照樣能部署
 *   2. 資料進版控後可以 diff、可以回溯「哪天演講紀錄變了」
 *   3. 三頁原本在瀏覽器端 fetch 這些 CSV，內容不在 HTML 裡，爬蟲與 LLM 完全看不到
 *
 * 用法：
 *   node scripts/fetch-sheets.mjs            # 抓取並寫入（內容沒變就不動檔案）
 *   node scripts/fetch-sheets.mjs --check    # 只檢查抓不抓得到，不寫檔（CI 用）
 *
 * 失敗策略：任何一個來源抓失敗，就保留該來源的既有快照並在最後以非零碼結束。
 * 「抓不到」不該讓網站失去既有內容，但也不該安靜地假裝成功。
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'src', 'data', 'sheets');
const SHEET_ID = '1vYSAfnbqFzLNBNcPY5dd8XRxvVozt1IDd-kIqKO5swA';
const CHECK_ONLY = process.argv.includes('--check');

/* 來源清單。query 直接對應 gviz 的參數，name 就是輸出的檔名。
   ⚠ 新增來源時只要加一列，src/lib/sheets.ts 那邊再決定怎麼用。 */
const SOURCES = [
  { name: 'speeches', query: 'gid=0', desc: '演講紀錄主表（index 統計與 speeches 列表共用）' },
  { name: 'site-content', query: 'sheet=site_content', desc: '首頁文案（hero 等）' },
  { name: 'core-strengths', query: 'sheet=core_strengths', desc: '核心優勢' },
  { name: 'experience-roles', query: 'sheet=experience_roles', desc: '經歷與角色' },
  { name: 'personal-awards', query: 'sheet=personal_awards', desc: '個人獎項' },
  { name: 'mentees-awards', query: 'sheet=mentees_award_records', desc: '培訓戰績' },
  { name: 'testimonials', query: 'gid=611725944', desc: '學員回饋' },
];

const url = (q) => `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&${q}`;

/* CSV 解析：與 speeches.astro 原本的 client 端實作同一套規則
   （引號內可含逗號與換行，"" 表示跳脫的引號）。 */
function parseCSV(text) {
  const rows = [];
  let row = [], cur = '', inQ = false;
  const t = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (c === '"') {
      if (inQ && t[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (c === ',' && !inQ) {
      row.push(cur.trim()); cur = '';
    } else if (c === '\n' && !inQ) {
      row.push(cur.trim());
      if (row.some((v) => v)) rows.push(row);
      row = []; cur = '';
    } else {
      cur += c;
    }
  }
  if (cur || row.length) { row.push(cur.trim()); rows.push(row); }
  return rows;
}

/* 存成「物件陣列、欄名保持 Sheet 原樣」。
   刻意不在這裡做欄位改名或中英配對——那些規則放 src/lib/sheets.ts，
   因為 Sheet 的欄名慣例不一致（_zh/_eng/_en/無後綴/純英文欄名混用），
   把 mapping 留在型別化的那一層比較好維護，這裡只負責忠實搬運。 */
function toObjects(rows) {
  if (rows.length < 2) return [];
  const header = rows[0];
  return rows.slice(1).map((r) => {
    const o = {};
    header.forEach((h, i) => { if (h) o[h] = r[i] ?? ''; });
    return o;
  });
}

async function fetchOne(src, attempt = 1) {
  try {
    const res = await fetch(url(src.query), {
      signal: AbortSignal.timeout(45_000),
      headers: { 'User-Agent': 'mattye.dev-build/1.0' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    /* Google 對權限有問題的表會回 HTML 登入頁而不是 CSV，狀態碼仍是 200。
       只看狀態碼會把一頁 HTML 當成資料存進去。 */
    if (/^\s*</.test(text)) throw new Error('回傳的是 HTML 不是 CSV（分享權限可能被改了）');
    const items = toObjects(parseCSV(text));
    if (items.length === 0) throw new Error('解析後 0 列');
    return items;
  } catch (e) {
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, attempt * 1500));
      return fetchOne(src, attempt + 1);
    }
    throw e;
  }
}

mkdirSync(OUT_DIR, { recursive: true });

let failed = 0, changed = 0, unchanged = 0;
for (const src of SOURCES) {
  const file = join(OUT_DIR, `${src.name}.json`);
  try {
    const items = await fetchOne(src);
    const payload = JSON.stringify(items, null, 2) + '\n';

    if (CHECK_ONLY) {
      console.log(`  ✓ ${src.name.padEnd(18)} ${String(items.length).padStart(4)} 列`);
      continue;
    }

    /* 只在內容真的變了才寫檔——否則每次排程都會產生一筆無意義的 commit。 */
    const prev = existsSync(file) ? readFileSync(file, 'utf8') : null;
    if (prev === payload) {
      unchanged++;
      console.log(`  = ${src.name.padEnd(18)} ${String(items.length).padStart(4)} 列（無變動）`);
    } else {
      writeFileSync(file, payload, 'utf8');
      changed++;
      console.log(`  ✓ ${src.name.padEnd(18)} ${String(items.length).padStart(4)} 列${prev ? '（已更新）' : '（新增）'}`);
    }
  } catch (e) {
    failed++;
    const keep = existsSync(file);
    console.error(`  ✗ ${src.name.padEnd(18)} ${e.message}${keep ? ' —— 保留既有快照' : ' —— 且無既有快照可用'}`);
  }
}

console.log(`\n${changed} 更新／${unchanged} 無變動／${failed} 失敗`);
if (failed) {
  console.error('有來源抓取失敗。既有快照已保留，網站不會失去內容，但這次的資料是舊的。');
  process.exit(1);
}
