/*
 * 從手刻頁抽出所有含中文的可翻譯字串。
 *
 * 三個來源分開回傳，因為它們套回去的方式不同：
 *   text  標記裡的文字節點           → 包成 zh-only / en-only
 *   attr  placeholder/aria-label 等  → 純文字語境，改成「中文 / English」
 *   data  <script> 裡的字串字面值     → 補成 {zh, en} 欄位或字典
 *
 * ⚠ 標記與 script 必須分開掃。這輪已經在三個不同的工具上踩過同一個坑：
 *   把 JS 原始碼當成 HTML 內容，結果不是誤判就是改壞用戶端程式碼。
 */
import { readFileSync } from 'node:fs';

const CJK = /[一-鿿]/;

export function extractStrings(file) {
  const raw = readFileSync(file, 'utf8');
  const scripts = [...raw.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]).join('\n');
  const markup = raw
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

  const text = new Set();
  const attr = new Set();
  const data = new Set();

  for (const m of markup.matchAll(/>([^<]+)</g)) {
    const s = m[1].trim();
    if (s && CJK.test(s)) text.add(s);
  }
  for (const m of markup.matchAll(/\s(?:placeholder|aria-label|alt|title|value)="([^"]*)"/g)) {
    const s = m[1].trim();
    if (s && CJK.test(s)) attr.add(s);
  }
  /* 三種引號都要，只取含中文的 */
  for (const m of scripts.matchAll(/"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`((?:[^`\\]|\\.)*)`/g)) {
    const s = (m[1] ?? m[2] ?? m[3] ?? '').trim();
    if (s && CJK.test(s)) data.add(s);
  }

  return { text: [...text], attr: [...attr], data: [...data] };
}
