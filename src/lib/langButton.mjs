/*
 * 手刻頁的語言切換鈕：決定放哪裡，以及怎麼放。
 *
 * ── 為什麼需要這一支 ──────────────────────────────────────────────
 * 這批頁原本只有中文、沒有雙語 UI，英文版上線後由版面在頁尾的 SiteStrip
 * 補一條語言連結。對多數頁夠用，但紀念頁**很長**（近 200KB、七個區塊），
 * 頁尾那條實質上找不到——Matt 的回報就是「缺少中英文轉換的按鈕」。
 *
 * 那一頁自己有一條 sticky 頂欄，右側放著主題切換鈕。語言鈕該在那裡：
 * 使用者會去找的地方，是頁面自己的工具列，不是捲到底的頁尾。
 *
 * ── 判準從內容推導，不維護清單 ────────────────────────────────
 * 「片段裡有沒有 #themeBtn」就是「這頁有沒有工具列」。有就放進工具列，
 * 沒有就留給頁尾的 SiteStrip。新頁自帶工具列會自動放對位置。
 *
 * ⚠ 這支同時被 StaticPageContent（插按鈕）與 StaticPageLayout（決定要不要
 *   在 SiteStrip 再放一條）匯入。判準只有一份，兩邊不會各說各話——
 *   分成兩份實作的話，症狀是同一頁出現兩顆語言鈕，或一顆都沒有。
 */

/** 頁面自己的工具列錨點。目前是主題切換鈕，語言鈕插在它前面。 */
const TOOLBAR_ANCHOR = /<button\b[^>]*\bid="themeBtn"[^>]*>/;

/** 這個片段有沒有可以掛語言鈕的工具列 */
export function hasToolbar(fragment) {
  return TOOLBAR_ANCHOR.test(fragment);
}

/* 與頁面既有的 .tbtn 同款——沿用它的框線、圓角與尺寸，只補 <a> 需要的
   置中與去底線。附掛在頁面自己的 <style> 尾端，不另外開檔：
   片段是用 set:html 輸出的，Astro 的 scoped style 套不進去。 */
const CSS =
  'a.tbtn{display:inline-flex;align-items:center;justify-content:center;' +
  'text-decoration:none;font-size:.82rem;font-weight:600;letter-spacing:.02em}' +
  'a.tbtn:hover{background:var(--bg2)}';

/**
 * 把語言鈕插進工具列。沒有工具列就原樣回傳。
 *
 * @param {string} fragment
 * @param {{href: string, hreflang: string, isEn: boolean}} opts
 */
export function injectLangButton(fragment, { href, hreflang, isEn }) {
  if (!hasToolbar(fragment)) return fragment;

  /* 鈕面用**目標語言**標示：要切過去的人看得懂的是那一邊的語言。
     38×38 的方鈕放不下 🌐 ＋ 文字，所以只留文字，說明放 title／aria-label。 */
  const label = isEn ? '中' : 'EN';
  const hint = isEn ? '切換到中文' : 'Switch to English';
  const btn =
    `<a class="tbtn" href="${href}" hreflang="${hreflang}" title="${hint}" aria-label="${hint}">${label}</a>\n  `;

  const out = fragment.replace(TOOLBAR_ANCHOR, (m) => btn + m);
  /* 樣式只補一次；片段本來就有 <style>（這批頁都自帶完整 CSS） */
  if (out.includes('a.tbtn{')) return out;
  if (!out.includes('</style>')) {
    throw new Error('片段有 #themeBtn 工具列卻找不到 </style>，語言鈕會沒有樣式');
  }
  return out.replace('</style>', CSS + '</style>');
}
