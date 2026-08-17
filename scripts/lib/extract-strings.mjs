/*
 * 手刻頁的可翻譯字串：抽出（extractStrings）與套用（applyTranslations）。
 *
 * 兩支放同一個檔、共用同一組常數，是刻意的——**它們必須走一模一樣的語境**。
 * 對照表的驗證（check-translations）保證「抽得到的每一條都有譯文」；
 * 只有在套用走同一套規則時，這個保證才等於「英文頁不會殘留中文」。
 * 分成兩份實作的話，兩邊的規則遲早走岔，而症狀是英文頁上冒出中文——
 * 建置不會報錯，得有人用眼睛看到才知道。
 *
 * 三種語境分開處理，因為它們的邊界不同：
 *   text  標記裡的文字節點           >中文<
 *   attr  placeholder/aria-label 等  純文字語境，塞不進標籤
 *   data  <script> 裡的字串字面值     三種引號都算
 *
 * ⚠ 標記與 script 必須分開掃。這輪已經在三個不同的工具上踩過同一個坑：
 *   把 JS 原始碼當成 HTML 內容，結果不是誤判就是改壞用戶端程式碼。
 */
import { readFileSync } from 'node:fs';

const CJK = /[一-鿿]/;

/* 三個語境的判準。抽出與套用共用，改一處兩邊一起改。 */
const TEXT = /* 文字節點 */ />([^<]+)</g;
const ATTR = /* 純文字屬性 */ /(\s(?:placeholder|aria-label|alt|title|value)=")([^"]*)(")/g;

const SCRIPT_BLOCK = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const STYLE_BLOCK = /<style\b[^>]*>[\s\S]*?<\/style>/gi;

/*
 * JS 字串字面值：必須真的斷詞，不能用單一 regex 抓引號。
 *
 * ⚠ 這裡曾經是 /"(?:[^"\\]|\\.)*"|'…'|`…`/ 一條 regex，實測會壞在這種程式碼：
 *     .replace(/[&<>"]/g, m => ({ '&': '&amp;', '"': '&quot;' }[m]))
 *   正則字面值裡的那個 " 被當成字串開頭，一路吃到後面的 '"'，
 *   於是**該行之後的所有引號配對整批位移**。症狀是紀念頁有 25 處中文
 *   既沒被抽出、也沒被替換——抽取器看不見，所以對照表的驗證也看不見。
 *
 *   對抽取來說這只是漏抓，對替換來說更嚴重：錯位的區間會被當成字串改寫，
 *   等於改壞用戶端程式碼。所以改成逐字掃描，明確處理四種語境：
 *     行註解 //…            引號在裡面不算數
 *     區塊註解 /*…*\/        同上
 *     正則字面值 /…/flags    含字元類別 […]，裡面的引號與 / 都不算數
 *     字串 ' " `            這才是要回傳的東西
 *
 *   `/` 是除號還是正則開頭，用前一個有意義字元判斷（JS 詞法的經典作法）：
 *   前面是識別字、數字、`)`、`]` → 除號；其餘 → 正則。
 */
const REGEX_ALLOWED_BEFORE = /[([{;,:=!&|?+\-*%~^<>]$/;
const KEYWORD_BEFORE = /\b(return|typeof|instanceof|in|of|new|delete|void|case|do|else|yield|await)$/;

export function scanJsStrings(src) {
  const out = [];
  let i = 0;
  /* 前一個有意義的字元（跳過空白與註解），給 `/` 的判別用 */
  let prev = '';
  const n = src.length;

  while (i < n) {
    const c = src[i];

    if (c === '/' && src[i + 1] === '/') {
      i = src.indexOf('\n', i);
      if (i < 0) i = n;
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      i = end < 0 ? n : end + 2;
      continue;
    }
    if (c === '/') {
      const trimmed = prev;
      const isRegex = trimmed === '' || REGEX_ALLOWED_BEFORE.test(trimmed) || KEYWORD_BEFORE.test(trimmed);
      if (isRegex) {
        i = skipRegex(src, i);
        prev = '/';
        continue;
      }
      prev = '/';
      i++;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      const start = i;
      i++;
      while (i < n) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === c) { i++; break; }
        i++;
      }
      out.push({ start, end: i, quote: c, value: src.slice(start + 1, i - 1) });
      prev = c;
      continue;
    }
    if (!/\s/.test(c)) prev = prev.length > 12 ? prev.slice(-12) + c : prev + c;
    i++;
  }
  return out;
}

/* 正則字面值：字元類別 […] 裡的 / 不算結尾 */
function skipRegex(src, i) {
  i++; // 跳過開頭的 /
  let inClass = false;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { i += 2; continue; }
    if (c === '\n') return i; // 沒閉合就當它不是正則，避免吃掉整份原始碼
    if (c === '[') inClass = true;
    else if (c === ']') inClass = false;
    else if (c === '/' && !inClass) { i++; break; }
    i++;
  }
  while (i < src.length && /[a-z]/i.test(src[i])) i++; // flags
  return i;
}

export function extractStrings(file) {
  const raw = readFileSync(file, 'utf8');
  const scripts = [...raw.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]).join('\n');
  const markup = raw.replace(SCRIPT_BLOCK, '').replace(STYLE_BLOCK, '');

  const text = new Set();
  const attr = new Set();
  const data = new Set();

  for (const m of markup.matchAll(TEXT)) {
    const s = m[1].trim();
    if (s && CJK.test(s)) text.add(s);
  }
  for (const m of markup.matchAll(ATTR)) {
    const s = m[2].trim();
    if (s && CJK.test(s)) attr.add(s);
  }
  for (const tok of scanJsStrings(scripts)) {
    const s = tok.value.trim();
    if (s && CJK.test(s)) data.add(s);
  }

  return { text: [...text], attr: [...attr], data: [...data] };
}

/*
 * 把中文換成英文。回傳 { html, missing }。
 *
 * `missing` 是「有中文、但對照表查不到」的字串。呼叫端決定怎麼處理——
 * 建置期應該直接失敗（見 StaticPageContent），因為安靜放行就是把中文送上英文頁。
 *
 * MODALS_EN 走另一條路：它的 key 是 modal 名稱、值是整段英文 HTML，
 * 對應的中文在原始碼裡是一段幾百字的模板字面值。用「模板內容 → 英文」的
 * 對照表（modalByBody）在字面值語境比對，與 MAP 同一個機制。
 */
export function applyTranslations(html, { MAP = {}, MODALS_EN = null, KEEP = [] } = {}) {
  const missing = [];

  /* 模板字面值的對照：trim 後的中文模板內容 → 英文 HTML。
     key 用 modal 名稱是給人看的，比對時要的是內容。 */
  const modalByBody = new Map();
  if (MODALS_EN) {
    const hits = [...html.matchAll(/\n  ([A-Za-z$][\w$]*): \{\n/g)];
    for (let i = 0; i < hits.length; i++) {
      const seg = html.slice(hits[i].index, i + 1 < hits.length ? hits[i + 1].index : html.length);
      const at = seg.indexOf('html: `');
      if (at < 0) continue; // 不是 modal 物件
      const close = seg.indexOf('`', at + 'html: `'.length);
      if (close < 0) continue;
      const body = seg.slice(at + 'html: `'.length, close).trim();
      const en = MODALS_EN[hits[i][1]]?.html;
      if (en !== undefined) modalByBody.set(body, en);
    }
  }

  /* 查表。查不到就記進 missing，原字串原樣留著讓守衛抓到。 */
  const lookup = (s) => {
    const core = s.trim();
    if (!core || !CJK.test(core)) return null;
    const en = MAP[core] ?? modalByBody.get(core);
    if (en === undefined) {
      missing.push(core);
      return null;
    }
    return en;
  };

  /* 前後空白原樣保留，只換中間那段——縮排是版面的一部分，
     尤其 <pre> 與模板字面值裡的換行有意義。 */
  const swap = (raw) => {
    const en = lookup(raw);
    if (en === null) return null;
    const lead = raw.slice(0, raw.length - raw.trimStart().length);
    const tail = raw.slice(raw.trimEnd().length);
    return lead + en + tail;
  };

  /* script/style 當分界切片：標記語境只在片段之間改，script 內只改字面值。 */
  const GUARD = /<(script|style)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let out = '';
  let last = 0;
  for (const m of html.matchAll(GUARD)) {
    out += rewriteMarkup(html.slice(last, m.index));
    out += m[1].toLowerCase() === 'script' ? rewriteScript(m[0]) : m[0];
    last = m.index + m[0].length;
  }
  out += rewriteMarkup(html.slice(last));

  return { html: out, missing: [...new Set(missing)] };

  function rewriteMarkup(chunk) {
    return chunk
      .replace(TEXT, (whole, inner) => {
        const en = swap(inner);
        return en === null ? whole : `>${en}<`;
      })
      .replace(ATTR, (whole, open, val, close) => {
        const en = swap(val);
        return en === null ? whole : open + en + close;
      });
  }

  /* 逐字掃出字串 token 後由後往前換，這樣前面的位移不會被後面的改動影響 */
  function rewriteScript(block) {
    const toks = scanJsStrings(block);
    let s = block;
    for (let k = toks.length - 1; k >= 0; k--) {
      const t = toks[k];
      const en = swap(t.value);
      if (en === null) continue;
      s = s.slice(0, t.start + 1) + en + s.slice(t.end - 1);
    }
    return s;
  }
}

/*
 * 守衛：套用之後還剩下的中文。
 *
 * 排除四種「不是內容」的語境，各有理由：
 *   HTML 註解   建置來源的出處說明，兩種語言的頁面本來就一樣，不是讀者看的字
 *   <style>     CSS 規則；字型名稱與選擇器可能含中文，換掉會壞版面
 *   href/src 值 **網址是識別碼，不是文案**。/writing/?series=投資專欄 的中文是
 *               篩選用的資料鍵（英文索引頁自己有顯示對照），翻掉連結就壞了
 *   KEEP        各對照表自己宣告的白名單（查無官方英文名的品牌）
 *
 * 回傳每一處的前後文，讓建置期的錯誤訊息能指出是哪一句——只說「有殘留」
 * 而不說在哪，等於把找的工作丟回給人。
 */
export function findResidualCjk(html, KEEP = []) {
  let probe = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(STYLE_BLOCK, '')
    .replace(/\s(?:href|src|action|formaction)="[^"]*"/g, '');
  for (const w of KEEP) probe = probe.split(w).join('');
  const hits = [];
  for (const m of probe.matchAll(/[一-鿿]+/g)) {
    hits.push(probe.slice(Math.max(0, m.index - 50), m.index + m[0].length + 50).replace(/\s+/g, ' '));
  }
  return hits;
}
