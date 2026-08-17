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

/* 頁面自己的工具列錨點：主題切換鈕，語言鈕插在它前面。
   各頁的 id 不同（紀念頁 themeBtn、課程週次頁 themeToggle），比對形狀不比對字面值。 */
const TOOLBAR_ANCHOR = /<button\b[^>]*\bid="(themeBtn|themeToggle)"[^>]*>/;

/** 這個片段有沒有可以掛語言鈕的工具列 */
export function hasToolbar(fragment) {
  return TOOLBAR_ANCHOR.test(fragment);
}

/*
 * 樣式：**沿用主題鈕自己的那條 CSS 規則**，把 a.langbtn 加進它的選擇器。
 *
 * 一開始是複製紀念頁 .tbtn 的框線圓角，但課程週次頁的主題鈕是
 * #themeToggle、樣式完全不同——照抄等於為每一頁猜一次 CSS，猜錯的症狀
 * 是按鈕長得像沒套到樣式的裸連結。
 *
 * 改成「找出那條規則、把自己加進去」，語言鈕就**依定義**與主題鈕同款，
 * 頁面之後改樣式也會一起跟著改。只另外補 <a> 需要的置中與去底線。
 */
const A_FIXES =
  'a.langbtn{display:inline-flex;align-items:center;justify-content:center;' +
  'text-decoration:none;font-size:.8rem;font-weight:700;letter-spacing:.02em}';

/**
 * 把語言鈕插進工具列。沒有工具列就原樣回傳。
 *
 * @param {string} fragment
 * @param {{href: string, hreflang: string, isEn: boolean}} opts
 */
export function injectLangButton(fragment, { href, hreflang, isEn }) {
  const anchor = fragment.match(TOOLBAR_ANCHOR);
  if (!anchor) return fragment;
  const themeId = anchor[1];

  /* 鈕面用**目標語言**標示：要切過去的人看得懂的是那一邊的語言。
     方鈕放不下 🌐 ＋ 文字，所以只留文字，說明放 title／aria-label。 */
  const label = isEn ? '中' : 'EN';
  const hint = isEn ? '切換到中文' : 'Switch to English';
  const btn =
    `<a class="langbtn" href="${href}" hreflang="${hreflang}" title="${hint}" aria-label="${hint}">${label}</a>\n  `;

  let out = fragment.replace(TOOLBAR_ANCHOR, (m) => btn + m);
  if (out.includes('a.langbtn{')) return out; // 已經補過

  /*
   * 找出主題鈕的**基礎**樣式規則，把 a.langbtn 加進它的選擇器。
   *
   * ⚠ 不能只找「選擇器裡含 #themeToggle 的第一條規則」——實測踩過：
   *   課程週次頁的第一條是 `.navrow a:focus-visible,#themeToggle:focus-visible`，
   *   加進去只拿到 focus 外框，按鈕本體還是預設的藍色連結。
   *   HTML 層看不出來，是瀏覽器量到 13×24、radius 0 才發現。
   *
   * 判準：選擇器用逗號拆開後，**有一段正好等於**那個選擇子（沒有偽類）。
   * 兩種寫法都涵蓋：以 id 選（#themeToggle）或以 class 選（.tbtn）。
   */
  const wanted = [`#${themeId}`, '.tbtn'];
  let hit = null;
  for (const m of out.matchAll(/(^|[};])\s*([^{}@;]+?)\s*\{/g)) {
    const parts = m[2].split(',').map((x) => x.trim());
    if (parts.some((p) => wanted.includes(p))) { hit = m; break; }
  }
  if (!hit) {
    throw new Error(
      `找得到工具列的 #${themeId}，卻找不到它的基礎 CSS 規則（選擇器要有一段正好是 ` +
        `${wanted.join(' 或 ')}）——語言鈕會變成沒有樣式的裸連結。` +
        `頁面若改用其他寫法，請更新 lib/langButton.mjs。`,
    );
  }
  out = out.slice(0, hit.index) + hit[0].replace(/\{$/, ',a.langbtn{') + out.slice(hit.index + hit[0].length);

  if (!out.includes('</style>')) {
    throw new Error(`片段有 #${themeId} 工具列卻找不到 </style>，語言鈕會沒有樣式`);
  }
  return out.replace('</style>', A_FIXES + '</style>');
}
