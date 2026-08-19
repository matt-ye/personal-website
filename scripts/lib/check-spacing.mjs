/*
 * 中英排版差異的守衛：行內標記邊界的半形空白。
 *
 * ── 問題 ──────────────────────────────────────────────────────────
 * 中文在 <strong> 前後不留空白，英文要留。而這批頁的翻譯是**片段式**的
 * ——一句話被 <strong> 切成三段，各段各自查表——所以邊界的空白沒有人負責：
 *
 *     關鍵在<strong>指數 n</strong>——利息會再生利息
 *   → The key is the<strong>exponent n</strong> — interest earns interest
 *                  ↑ 這裡少一個半形空白，畫面上是 "the**exponent n**"
 *
 * 中文頁看起來完全正常，英文頁也不會壞掉，只是讀起來像沒排版。
 * 逐條翻譯時很難察覺——每一條單獨看都對，錯的是接縫。
 *
 * ── 判準：拿中文頁當對照，而不是猜 ────────────────────────────────
 * 只看英文「字母黏著標記」會誤報：`<b class="num">NT$3.6M</b>Label` 這種
 * 數值卡的 <b> 是 block，本來就不該有空白。
 *
 * 改成比對同一個邊界的兩種語言：
 *   中文那側是漢字（所以原文不需要空白）
 *   ＋ 英文那側是字母黏字母
 *   → 就是翻譯時掉了空白。
 *
 * 兩邊的標記序列相同（機制 C 只換文字、不動結構），所以邊界可以一一對應。
 */

/* ⚠ sub／sup 不列入：上標下標本來就緊貼前文（Terminal value(end of year 5)），
   把它們算進來會把正確的排版報成缺空白。 */
const INLINE = /^(strong|em|b|i|code|span|a|abbr|mark|small|u)$/i;
const CJK = /[一-鿿]/;
/*
 * 需要空白的「左側」字元：字母數字，**以及收尾的引號與括號**。
 *
 * ⚠ 只看字母數字會漏。實測踩過：
 *     <a>#1《為什麼要投資》</a>一起給家人讀。
 *   → …"Why invest at all"and read them together.
 *   左側是 " 不是字母，於是守衛放行，畫面上黏成 all"and。
 */
const NEED_AFTER = /[A-Za-z0-9"')\]}%]/;
/* 需要空白的「右側」字元：只有字母數字。
   ⚠ 刻意不含引號——文字後面緊接一個收尾引號是正常的
   （…for two quarters running</strong>" or "…）。左側含引號就夠了：
   真正要抓的 all"and 會由 NEED_AFTER 的 " 命中。 */
const NEED_BEFORE = /[A-Za-z0-9]/;

/*
 * 頁面自己的 CSS 把哪些 class／id 變成 block？
 *
 * ⚠ 沒有這一步會誤報：統計卡的 `<b class="num">1,004.5</b>期末終值` 兩邊
 *   都是字，但 .num 是 display:block，本來就不該有空白。
 *   判準只看標籤名的話，<b> 一律被當成行內，於是每張數值卡都報一次。
 */
function blockSelectors(html) {
  const names = new Set(); // 自己帶 class／id 就是 block 的
  const scoped = []; // { parentClass, tag }：`.item b{display:block}` 這種
  for (const style of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    for (const rule of style[1].matchAll(/([^{}]+)\{([^}]*)\}/g)) {
      if (!/display\s*:\s*(block|flex|grid|table|list-item|inline-block)/.test(rule[2])) continue;
      for (const sel of rule[1].split(',')) {
        const parts = sel.trim().split(/\s+/);
        const last = parts[parts.length - 1];
        if (/^[.#]/.test(last)) {
          for (const m of last.matchAll(/[.#]([\w-]+)/g)) names.add(m[1]);
        } else if (/^[a-z][\w-]*$/i.test(last) && parts.length > 1) {
          /* 結尾是裸標籤名（`.split .item b`）——實測就是統計卡的來源：
             display:block 掛在 <b> 上，而 <b> 只有 class="num"，
             只收集 class 名的話永遠對不上，於是每張數值卡都誤報。 */
          const parent = parts[parts.length - 2];
          for (const m of parent.matchAll(/[.#]([\w-]+)/g)) scoped.push({ parent: m[1], tag: last.toLowerCase() });
        }
      }
    }
  }
  return { names, scoped };
}

/** 把 HTML 切成 [文字, 標記, 文字, 標記, …]，並記下每個標記的名稱 */
function tokenize(html) {
  const body = html
    .replace(/[\s\S]*?<\/head>/i, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const parts = body.split(/(<[^>]+>)/);
  return parts.map((p) => (p.startsWith('<') ? { tag: (p.match(/^<\/?([a-zA-Z0-9-]+)/) || [])[1] ?? '', raw: p } : { text: p }));
}

/**
 * @returns {{ side: '前'|'後', tag: string, zh: string, en: string }[]}
 */
export function findMissingGaps(zhHtml, enHtml) {
  const z = tokenize(zhHtml);
  const e = tokenize(enHtml);
  /* 結構應該一致；不一致就不比（機制 C 之外的頁面不適用這個判準） */
  if (z.length !== e.length) return [];

  const blocks = blockSelectors(zhHtml);
  const out = [];
  /* 閉標記本身沒有 class，所以記住對應開標記的屬性與「是不是區塊的第一個子元素」 */
  const stack = [];

  for (let i = 0; i < z.length; i++) {
    const t = z[i];
    if (!t.tag) continue;
    const isClose = t.raw.startsWith('</');

    if (!isClose && INLINE.test(t.tag)) {
      /* 父層的 class——`.item b{display:block}` 這種規則要靠它判斷 */
      const prevTag = /^\s*$/.test(z[i - 1]?.text ?? '') ? (z[i - 2]?.raw ?? '') : '';
      const parentClasses = [...prevTag.matchAll(/(?:class|id)="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/));
      stack.push({ attrs: t.raw, tag: t.tag.toLowerCase(), parentClasses });
    }
    const open = isClose ? stack.pop() : stack[stack.length - 1];
    if (!INLINE.test(t.tag)) continue;

    /* CSS 說它是 block 的話，本來就不該有空白——不是漏譯。
       兩種寫法都要涵蓋：自己帶 class（.num{display:block}）
       與掛在父層底下的裸標籤（.item b{display:block}）。 */
    const own = [...(open?.attrs ?? t.raw).matchAll(/(?:class|id)="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/));
    if (own.some((n) => blocks.names.has(n))) continue;
    if (
      blocks.scoped.some((s) => s.tag === open?.tag && (open?.parentClasses ?? []).includes(s.parent))
    ) continue;

    /* 開標記看「前一段文字的結尾 vs 後一段文字的開頭」，閉標記反過來 */
    const zhPrev = z[i - 1]?.text ?? '';
    const zhNext = z[i + 1]?.text ?? '';
    const enPrev = e[i - 1]?.text ?? '';
    const enNext = e[i + 1]?.text ?? '';

    const zhEdge = isClose ? zhNext[0] : zhPrev.slice(-1);
    const enEdgeA = isClose ? enPrev.slice(-1) : enPrev.slice(-1);
    const enEdgeB = isClose ? enNext[0] : enNext[0];

    /* 中文那側是漢字（原文不需空白），英文兩側卻黏在一起 */
    if (!zhEdge || !CJK.test(zhEdge)) continue;
    const a = isClose ? enPrev.slice(-1) : enEdgeA;
    const b = isClose ? enNext[0] : enEdgeB;
    if (!a || !b) continue;
    if (NEED_AFTER.test(a) && NEED_BEFORE.test(b)) {
      out.push({
        side: isClose ? '後' : '前',
        tag: t.tag,
        zh: (zhPrev.slice(-14) + t.raw + zhNext.slice(0, 14)).replace(/\s+/g, ' '),
        en: (enPrev.slice(-24) + t.raw + enNext.slice(0, 24)).replace(/\s+/g, ' '),
      });
    }
  }
  return out;
}
