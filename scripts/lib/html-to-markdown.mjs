/**
 * html-to-markdown.mjs — 把建置產物的 <main> 轉成 markdown（零依賴）
 *
 * 用途：給 AI agent 取用的 markdown 分身。**輸入刻意是建置後的 HTML，不是原始碼**——
 * 理由跟 seo-check 掃 dist 一樣：爬蟲與 agent 看到的是建置產物，
 * 而站上多數頁面（首頁、coaching、課程週次）根本沒有 markdown 原始碼，
 * 內容是 .astro 模板與 src/data/ 的片段組出來的。從 HTML 轉是唯一涵蓋全站的做法。
 *
 * 不是通用轉換器，只處理本站 <main> 裡實際會出現的標籤。
 * 遇到不認得的行內標籤就取其文字，不會整段消失。
 */

/** HTML 實體還原。只處理實際會遇到的幾個——不是完整的實體表。 */
const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  mdash: '—', ndash: '–', hellip: '…', laquo: '«', raquo: '»',
  ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’',
};
function decodeEntities(s) {
  return s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, code) => {
    if (code[0] === '#') {
      const n = code[1] === 'x' || code[1] === 'X'
        ? parseInt(code.slice(2), 16)
        : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : m;
    }
    const key = code.toLowerCase();
    return key in ENTITIES ? ENTITIES[key] : m;
  });
}

/** markdown 的行內跳脫。只跳脫會真的改變語意的字元，不要見符號就加反斜線。 */
function escapeInline(s) {
  return s.replace(/([\\`*_[\]])/g, '\\$1');
}

const BLOCK = new Set([
  'p', 'div', 'section', 'article', 'header', 'footer', 'aside', 'main',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'pre',
  'table', 'thead', 'tbody', 'tr', 'th', 'td', 'figure', 'figcaption', 'details', 'summary',
  'hr', 'br', 'dl', 'dt', 'dd', 'nav', 'form', 'fieldset',
]);
/* 內容對讀者無意義、或會把版面雜訊帶進 markdown 的容器，整塊丟掉 */
const DROP = new Set(['script', 'style', 'noscript', 'svg', 'template', 'iframe', 'canvas', 'select', 'option']);
const VOID = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'source', 'col']);

function parseAttrs(raw) {
  const attrs = {};
  for (const m of raw.matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g)) {
    attrs[m[1].toLowerCase()] = decodeEntities(m[3] ?? m[4] ?? m[5] ?? '');
  }
  return attrs;
}

/**
 * @param {string} html  整頁 HTML（會自己抓 <main>）
 * @param {{ baseUrl?: string }} [opts]  相對連結要轉成絕對網址時傳入頁面網址
 * @returns {string} markdown（不含 frontmatter）
 */
export function htmlToMarkdown(html, opts = {}) {
  const { baseUrl } = opts;
  /* 貪婪比對到最後一個收尾標籤：<article class="tribute"> 底下還巢狀著 <article>，
     非貪婪會在第一個 </article> 就切斷，整篇只剩開頭。實測踩過。 */
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)
    /* 站上有 5 個手刻頁（×中英＝10 頁）沒有 <main> 地標，內容包在 <article> 裡。
       那是既有的 HTML 結構問題（缺少地標，對輔助技術與抓取都不利），
       但**不該因此讓那些頁沒有 markdown 分身**——退而求其次用 <article>。
       ⚠ 這是相容措施不是正解：真正的修法是那幾頁補上 <main>。 */
    || html.match(/<article\b[^>]*>([\s\S]*)<\/article>/i);
  /* 兩者都沒有的頁（例如純導向頁）就不產分身，交給呼叫端判斷 */
  if (!mainMatch) return '';
  /* HTML 註解要先拿掉，否則會被當成文字輸出（實測踩過：首頁的 <!-- ① Hero --> 進了 markdown） */
  const src = mainMatch[1].replace(/<!--[\s\S]*?-->/g, '');

  const abs = (href) => {
    if (!href) return '';
    if (!baseUrl) return href;
    try { return new URL(href, baseUrl).href; } catch { return href; }
  };

  /** 輸出緩衝：以「區塊」為單位堆疊，最後用空行接起來 */
  const blocks = [];
  let inline = '';           // 當前區塊累積中的行內文字
  const listStack = [];      // { ordered, index }
  /* <a> 的 href 只在開標籤拿得到，收尾組 [label](href) 時才用得上。
     用堆疊而不是單一變數：巢狀 <a> 不合法，但破損的 HTML 會出現未配對的收尾。 */
  const hrefStack = [];
  let quoteDepth = 0;
  let pre = null;            // 進入 <pre> 後改為原文累積

  const flush = () => {
    const text = inline.replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').trim();
    inline = '';
    if (!text) return;
    const prefix = '> '.repeat(quoteDepth);
    blocks.push(prefix ? text.split('\n').map((l) => prefix + l).join('\n') : text);
  };

  /* 表格要等整個 <table> 收完才能決定欄寬與分隔列，所以獨立累積 */
  let table = null;          // { rows: string[][], head: boolean }

  const tagRe = /<\/?([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>])*?)\/?>/g;
  let cursor = 0;
  let dropDepth = 0;
  let dropTag = null;
  let m;

  const pushText = (raw) => {
    if (!raw) return;
    const text = decodeEntities(raw);
    if (pre !== null) { pre += text; return; }
    if (dropDepth) return;
    if (table) { table.cell += text.replace(/\s+/g, ' '); return; }
    if (!text.trim() && !inline.endsWith(' ')) { if (inline) inline += ' '; return; }
    inline += escapeInline(text.replace(/\s+/g, ' '));
  };

  while ((m = tagRe.exec(src))) {
    pushText(src.slice(cursor, m.index));
    cursor = tagRe.lastIndex;

    const closing = m[0][1] === '/';
    const tag = m[1].toLowerCase();
    const attrs = closing ? {} : parseAttrs(m[2] || '');
    const selfClosing = /\/>$/.test(m[0]) || VOID.has(tag);

    /* ── 整塊丟掉的容器 ── */
    if (dropDepth) {
      if (tag === dropTag) dropDepth += closing ? -1 : 1;
      if (dropDepth === 0) dropTag = null;
      continue;
    }
    if (!closing && DROP.has(tag) && !selfClosing) { dropDepth = 1; dropTag = tag; continue; }
    if (!closing && DROP.has(tag)) continue;

    /* ── 依屬性丟掉的元素 ──────────────────────────────────────────────
     * hidden：未遷移成 /en/ 獨立網址的頁面，同一份 HTML 同時裝中英兩種語言
     *   （components/T.astro），英文那半帶 hidden。不處理的話輸出會變成
     *   「葉淨維Ching-Wei (Matt) Ye」「數字看見By the Numbers」這種黏在一起的字串
     *   ——正是 yaeo 的 L2-BILINGUAL-CONCAT。實測踩過，首頁整頁都是。
     *   用 hidden 而不是特判 .lang-en，是因為 T.astro 明講 hidden 才是
     *   「沒有 CSS 也讀得出來」的語義層宣告；語言切換時 hidden 會對調，
     *   所以這條對兩個方向都成立。
     * aria-hidden：裝飾性元素（純圖示 emoji）。對讀 markdown 的 agent 只是雜訊。
     *
     * ⚠ hidden 是**無值屬性**（<span … hidden>），parseAttrs 只抓 name="value"
     *   的形式，抓不到它。所以這裡比對的是原始屬性字串，不是解析後的物件。 */
    const rawAttrs = closing ? '' : (m[2] || '');
    const attrHidden = !closing
      && (/(^|\s)hidden(\s|=|$)/i.test(rawAttrs) || attrs['aria-hidden'] === 'true');
    if (attrHidden && !selfClosing) { dropDepth = 1; dropTag = tag; continue; }
    if (attrHidden) continue;

    /* ── <pre>：原文照抄 ── */
    if (tag === 'pre') {
      if (!closing) { flush(); pre = ''; continue; }
      const code = decodeEntities(pre.replace(/<\/?code\b[^>]*>/gi, '')).replace(/^\n+|\n+$/g, '');
      blocks.push('```\n' + code + '\n```');
      pre = null;
      continue;
    }
    if (pre !== null) { pre += m[0]; continue; }

    /* ── 表格 ── */
    if (tag === 'table') {
      if (!closing) { flush(); table = { rows: [], row: null, cell: '', head: false }; continue; }
      if (table) {
        const rows = table.rows.filter((r) => r.length);
        if (rows.length) {
          const width = Math.max(...rows.map((r) => r.length));
          const pad = (r) => [...r, ...Array(width - r.length).fill('')];
          const head = pad(rows[0]);
          const body = rows.slice(1).map(pad);
          blocks.push([
            `| ${head.join(' | ')} |`,
            `|${' --- |'.repeat(width)}`,
            ...body.map((r) => `| ${r.join(' | ')} |`),
          ].join('\n'));
        }
        table = null;
      }
      continue;
    }
    if (table) {
      if (tag === 'tr' && !closing) { table.row = []; table.cell = ''; continue; }
      if (tag === 'tr' && closing) { if (table.row) table.rows.push(table.row); table.row = null; continue; }
      if ((tag === 'td' || tag === 'th') && !closing) { table.cell = ''; continue; }
      if ((tag === 'td' || tag === 'th') && closing) {
        if (table.row) table.row.push(table.cell.trim().replace(/\|/g, '\\|'));
        table.cell = '';
        continue;
      }
      if (tag === 'a' && !closing && attrs.href) { table.cell += ''; continue; }
      if (tag === 'br') { table.cell += ' '; continue; }
      continue;
    }

    /* ── 標題 ── */
    if (/^h[1-6]$/.test(tag)) {
      if (!closing) { flush(); inline = ''; continue; }
      const text = inline.trim();
      inline = '';
      if (text) blocks.push('#'.repeat(+tag[1]) + ' ' + text);
      continue;
    }

    /* ── 清單 ── */
    if (tag === 'ul' || tag === 'ol') {
      if (!closing) { flush(); listStack.push({ ordered: tag === 'ol', index: 0 }); }
      else { flush(); listStack.pop(); }
      continue;
    }
    if (tag === 'li') {
      if (!closing) { flush(); continue; }
      const cur = listStack[listStack.length - 1];
      const text = inline.trim();
      inline = '';
      if (text) {
        const depth = Math.max(0, listStack.length - 1);
        const marker = cur?.ordered ? `${++cur.index}.` : '-';
        blocks.push('  '.repeat(depth) + marker + ' ' + text.replace(/\n/g, ' '));
      }
      continue;
    }

    /* ── 引用 ── */
    if (tag === 'blockquote') { flush(); quoteDepth += closing ? -1 : 1; quoteDepth = Math.max(0, quoteDepth); continue; }

    /* ── 行內 ── */
    if (tag === 'a') {
      if (!closing) {
        /* 圖示連結的文字在 <svg> 裡，而 svg 被整塊丟掉——收尾時 label 會是空的。
           aria-label／title 正是那種連結的無障礙名稱，拿它當文字最準確。
           實測踩過：社群圖示列原本輸出成三串黏在一起的裸網址。 */
        hrefStack.push({ href: abs(attrs.href), fallback: attrs['aria-label'] || attrs.title || '' });
        inline += '[';
        continue;
      }
      const link = hrefStack.pop();
      const open = inline.lastIndexOf('[');
      if (open === -1) continue;
      const label = inline.slice(open + 1);
      const text = label.trim() || escapeInline(link?.fallback || '');
      inline = link?.href
        ? inline.slice(0, open) + (text ? `[${text}](${link.href})` : `<${link.href}>`)
        : inline.slice(0, open) + label;
      continue;
    }
    if (tag === 'img') {
      const alt = (attrs.alt || '').trim();
      /* 裝飾性圖片（alt=""）對讀 markdown 的 agent 沒有資訊，跳過 */
      if (alt) inline += `![${escapeInline(alt)}](${abs(attrs.src)})`;
      continue;
    }
    if (tag === 'strong' || tag === 'b') { inline += '**'; continue; }
    if (tag === 'em' || tag === 'i') { inline += '*'; continue; }
    if (tag === 'code') { inline += '`'; continue; }
    if (tag === 'br') { inline += '\n'; continue; }
    if (tag === 'hr') { flush(); blocks.push('---'); continue; }

    /* ── 其餘區塊標籤：斷開段落 ── */
    if (BLOCK.has(tag)) { flush(); continue; }
    /* 不認得的行內標籤（span、mark、time…）不做記號，保留其文字 */
  }
  pushText(src.slice(cursor));
  flush();

  return blocks.join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
}
