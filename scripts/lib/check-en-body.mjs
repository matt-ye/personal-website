/*
 * 英文頁的內文裡有沒有「沒標語言」的中文。
 *
 * ── 判準為什麼是「沒標語言」而不是「有中文」 ──────────────────────
 * 英文頁上出現中文本身不一定是缺陷。這站有三種情況是刻意的：
 *   人名     葉淨維、李維晏——不音譯（見各對照表的 KEEP）
 *   語言鈕   英文頁寫「中」，讓中文讀者認得
 *   中文原件 只有中文版的文章摘要、即時抓取的留言、字典查不到英文名的機構
 *
 * 真正的缺陷是**沒有標示語言**：一段沒有 lang 的中文，對爬蟲與螢幕閱讀器
 * 就是「這是英文」。所以判準是「中文 ＋ 沒有 lang="zh-TW" 包住」。
 *
 * 這樣寫也讓修法有兩條路，而不是只能硬翻：翻成英文，或誠實標示它是中文。
 *
 * ⚠ 這支涵蓋 findResidualCjk 涵蓋不到的地方。那支只跑在「有對照表的手刻頁」
 *   （機制 C），Astro 元件渲染的頁面完全沒有這一關——課程首頁曾經因此
 *   在英文版留下 1,680 字中文，是 Matt 自己看到才發現的。
 */
const CJK = /[一-鿿]/;

/** 把有 lang="zh-TW"（或 lang="zh…"）的元素整段拿掉，含巢狀 */
function stripTagged(html) {
  let out = html;
  for (let pass = 0; pass < 8; pass++) {
    const before = out;
    /* 逐個找開標記，用深度計數找配對的結尾——巢狀同名標籤很常見 */
    const open = /<(\w+)\b[^>]*\blang="zh[^"]*"[^>]*>/i;
    const m = out.match(open);
    if (!m) break;
    const tag = m[1];
    const bodyStart = m.index + m[0].length;
    const scan = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
    scan.lastIndex = bodyStart;
    let depth = 1;
    let end = -1;
    let hit;
    while ((hit = scan.exec(out))) {
      depth += hit[1] ? -1 : 1;
      if (depth === 0) { end = hit.index + hit[0].length; break; }
    }
    out = end < 0 ? out.slice(0, m.index) : out.slice(0, m.index) + out.slice(end);
    if (out === before) break;
  }
  return out;
}

/**
 * @returns {{ count: number, samples: string[] }}
 */
export function findUntaggedCjk(html) {
  let body = html
    .replace(/[\s\S]*?<\/head>/i, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    /* 網址是識別碼不是文案（?series=投資專欄 翻掉連結就壞了） */
    .replace(/\s(?:href|src|action|formaction)="[^"]*"/g, '');
  body = stripTagged(body);

  const text = body.replace(/<[^>]+>/g, '\n');
  const samples = [...new Set(text.split('\n').map((s) => s.trim()).filter((s) => CJK.test(s)))];
  const count = (text.match(/[一-鿿]/g) || []).length;
  return { count, samples };
}
