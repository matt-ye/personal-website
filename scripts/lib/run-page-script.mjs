/*
 * 在 Node 裡跑手刻頁自己的 <script>，把它渲染進容器的 HTML 收回來。
 *
 * ── 為什麼是自己寫 shim，不是裝 jsdom ──────────────────────────
 * 實測這兩頁的 34k／28k 字元 JS 只用到 6 種瀏覽器 API，對元素只做
 * innerHTML／textContent／addEventListener 三件事。jsdom 是殺雞用牛刀。
 *
 * 更重要的是**失敗方式不同**：jsdom 會盡力執行任何程式碼，包含我們沒預期的
 * 路徑，產出可能是「跑完了但內容不完整」；shim 沒實作的 API 會直接丟 TypeError，
 * 建置當場停下。這些產物要進 git 當成正確答案，**大聲失敗比寬容執行更有價值**。
 *
 * 而且跑的是頁面自己的 render 函式，渲染邏輯的複製為零——
 * 這正是 prerender-i18n.mjs 註解裡「不要在外掛複製一份，兩套實作會漂移」的要求。
 *
 * ── 語言怎麼指定 ────────────────────────────────────────────
 * 這兩頁的 state.lang 都是 `store.get("<something>-lang") || "zh"`，
 * 所以 shim 的 localStorage.getItem 回傳什麼就渲染成什麼語言，
 * 完全不必改寫頁面程式碼。
 */

/** 一個假元素：記錄被寫入的 innerHTML／textContent，其餘操作當作互動用途忽略 */
function makeEl(id) {
  return {
    id,
    innerHTML: '',
    textContent: '',
    /* 互動相關的呼叫在預渲染階段沒有意義，安靜忽略 */
    addEventListener() {},
    removeEventListener() {},
    setAttribute() {},
    getAttribute() { return null; },
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    style: {},
    dataset: {},
    querySelectorAll() { return []; },
    querySelector() { return null; },
    closest() { return null; },
    scrollIntoView() {},
    focus() {},
    children: [],
  };
}

/**
 * @param {string} js  頁面的 script 內容
 * @param {string} lang  'zh' | 'en'
 * @returns {Record<string,string>} id → 該容器最後被寫入的 innerHTML
 */
export function renderPage(js, lang) {
  const els = new Map();
  const el = (id) => {
    if (!els.has(id)) els.set(id, makeEl(id));
    return els.get(id);
  };

  const documentStub = {
    /* 任何 id 都給一個假元素——回傳 null 會讓頁面在 .textContent 上炸掉，
       那是 shim 的問題不是頁面的問題 */
    getElementById: el,
    /* 全部回空陣列：這些選擇器在頁面裡的用途都是掛事件或填 data-i18n，
       前者預渲染不需要，後者已經在 StaticPageContent 於建置期處理 */
    querySelectorAll: () => [],
    querySelector: () => null,
    documentElement: makeEl('html'),
    body: makeEl('body'),
    /* daniels-talk 用 readyState 決定要不要等 DOMContentLoaded。
       給 'complete' 讓它直接呼叫 init()。 */
    readyState: 'complete',
    addEventListener() {},
    createElement: (tag) => makeEl(`<${tag}>`),
  };

  const windowStub = {
    scrollY: 0,
    innerWidth: 1280,
    addEventListener() {},
    matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
  };

  const localStorageStub = {
    /* 鍵名含 lang 就回傳指定語言，其餘（主題等）回 null 走頁面預設 */
    getItem: (k) => (/lang/i.test(k) ? lang : null),
    setItem() {},
  };

  /* daniels-talk 用它做捲動高亮導覽。預渲染沒有視窗，永遠不會有交叉事件，
     所以給一個什麼都不做的建構子即可。

     ⚠ 這個是**被 shim 抓出來的**，不是事先盤點到的：我掃 API 時用的正則要求
     識別字後面接 `.`，而它是 `new IntersectionObserver(…)`，所以漏掉了。
     shim 當場丟 ReferenceError，比 jsdom 讓它跑過去、產出少一塊內容要好。 */
  class IntersectionObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  /* 以參數注入，而不是塞進 globalThis——避免污染 Node 的全域，
     也讓「頁面用到了我們沒給的東西」直接變成 ReferenceError。 */
  const fn = new Function(
    'document', 'window', 'localStorage', 'requestAnimationFrame', 'setTimeout',
    'IntersectionObserver',
    `"use strict";\n${js}`,
  );
  fn(
    documentStub, windowStub, localStorageStub,
    (cb) => cb(), (cb) => cb(),
    IntersectionObserverStub,
  );

  const out = {};
  for (const [id, e] of els) if (e.innerHTML) out[id] = e.innerHTML;
  return out;
}
