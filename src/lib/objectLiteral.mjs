/*
 * 從 JS 原始碼裡取出物件字面值（例如手刻頁裡的 `var I = { zh: {…}, en: {…} }`）。
 *
 * 為什麼抽成共用模組：scripts/prerender-i18n.mjs 與建置期的 StaticPageContent
 * 都要讀同一份字典。原本只有腳本裡有一份，建置期若再抄一份，兩邊的括號計數
 * 邏輯遲早走岔——而走岔的症狀是「某一頁的英文沒填進去」，畫面上看不出來。
 *
 * 用大括號計數而不是正則：字典值裡有巢狀物件與帶括號的 HTML，
 * 正則沒辦法可靠地找到對應的結尾括號。
 */

/**
 * @param {string} src  原始碼
 * @param {RegExp} declRe  宣告的樣式，例如比對 `var I =` 的那條
 * @returns {string|null} 含大括號的物件字面值，找不到回傳 null
 *
 * ⚠ 這段註解裡不要寫正則字面值：`\s*` 後面接的斜線會湊成 `*​/`，
 *   把區塊註解提早關掉，而報錯的行號會指到下一行、不是真正的肇因。
 */
export function extractObjectLiteral(src, declRe) {
  const m = src.match(declRe);
  if (!m) return null;
  const start = src.indexOf('{', m.index);
  if (start < 0) return null;

  let depth = 0;
  let inStr = null; // 目前在哪種引號裡（避免把字串裡的括號算進去）
  let escaped = false;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (inStr) { if (ch === inStr) inStr = null; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) return src.slice(start, i + 1); }
  }
  return null;
}

/**
 * 讀出手刻頁的 `var I` 雙語字典。
 *
 * 用 Function 而不是 JSON.parse：字典是 JS 物件字面值（鍵沒有引號、
 * 可能有尾逗號），不是合法 JSON。這些檔案在我們自己的 repo 裡，
 * 信任層級等同 import。
 *
 * @returns {{zh: Record<string,string>, en: Record<string,string>}|null}
 */
export function readI18nDict(html) {
  const literal = extractObjectLiteral(html, /\bvar\s+I\s*=\s*/);
  if (!literal) return null;
  try {
    return new Function(`return (${literal});`)();
  } catch {
    return null;
  }
}

export const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
