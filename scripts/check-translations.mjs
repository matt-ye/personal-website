/*
 * 驗證 src/data/translations/ 的對照表與來源頁對得上。
 *
 * 三件事各自會安靜出錯，所以都要驗：
 *   ① 漏譯：頁面有的中文字串，對照表沒有 → 遷移時那句會留在英文頁上
 *   ② 冗餘：對照表有、頁面沒有 → 多半是原文改過了，翻譯已經過期
 *   ③ 沒翻：英文值裡還有中文 → 複製貼上時漏改
 *
 * 只讀不寫。這些檔案還不影響網站輸出（見 translations/README.md），
 * 所以這支不掛在 build 上，需要時手動跑：
 *   node scripts/check-translations.mjs
 */
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractStrings } from './lib/extract-strings.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIR = join(ROOT, 'src/data/translations');

const CJK = /[一-鿿]/;
let bad = 0;

/* 對照表服務兩族來源頁：手刻頁與課程週次頁。用檔名找，不維護對照清單——
   static-pages 的 key 一律含 __（由路徑轉出），course-weeks 的 key 是週次 slug，
   兩者不會撞名。 */
const SOURCES = ['src/data/static-pages', 'src/data/course-weeks'];

for (const file of readdirSync(DIR).filter((f) => f.endsWith('.mjs'))) {
  const key = file.replace(/\.mjs$/, '');
  const page = SOURCES.map((d) => join(ROOT, d, `${key}.html`)).find(existsSync);
  if (!page) {
    console.log(`  ✘ ${key}：${SOURCES.join(' 與 ')} 都找不到 ${key}.html`);
    bad++;
    continue;
  }

  /* KEEP 是「英文值裡允許留下的中文」，各檔自己宣告（多半是人名）。
     不放寬規則、只把例外寫死成清單——清單外的中文照樣報錯，
     所以真正的漏譯還是擋得住。 */
  /* INCOMPLETE 宣告「這份還在翻」。漏譯會列出來但不算失敗——
     「還沒做完」和「做錯了」是兩件事，報成同一種的話，真正的錯誤
     會被埋在一長串未完成清單裡看不見。stale／untranslated 仍然算失敗。 */
  /* ADDED 宣告「這幾條原文頁沒有，是英文版刻意新增的」（例如譯文來源標示）。
     不宣告的話會被當成「原文改過、翻譯已過期」——那是完全不同的問題，
     混在一起會讓真正過期的條目被忽略。 */
  const { MAP, KEEP = [], ADDED = [], INCOMPLETE = false, MODALS_EN = null } = await import(
    `file://${join(DIR, file)}`
  );
  const found = extractStrings(page);
  const all = new Set([...found.text, ...found.attr, ...found.data]);
  const keys = new Set(Object.keys(MAP));

  /* MODALS_EN 是「整段 modal HTML 模板」的翻譯，按 modal key 對照——
     幾百字的模板不適合當 MAP 的 key（不可讀也難 diff），而且遷移時
     .en.json 注入機制吃的正是「key → 英文 HTML」這個形狀。
     對帳方式：從來源頁解析出每個 modal 的 html 模板（trim 後），
     模板字串的涵蓋與否改看「它的 key 有沒有出現在 MODALS_EN」。 */
  const modalBodies = new Map(); // trim 後的模板內容 → modal key
  if (MODALS_EN) {
    const src = readFileSync(page, 'utf8');
    const hits = [...src.matchAll(/\n  ([A-Za-z$][\w$]*): \{\n/g)];
    for (let i = 0; i < hits.length; i++) {
      const seg = src.slice(hits[i].index, i + 1 < hits.length ? hits[i + 1].index : src.length);
      const hAt = seg.indexOf('html: `');
      if (hAt < 0) continue; // 不是 modal 物件（沒有 html 模板）就略過
      const close = seg.indexOf('`', hAt + 'html: `'.length);
      if (close < 0) continue;
      modalBodies.set(seg.slice(hAt + 'html: `'.length, close).trim(), hits[i][1]);
    }
  }
  const covered = (s) =>
    keys.has(s) || (modalBodies.has(s) && Object.hasOwn(MODALS_EN ?? {}, modalBodies.get(s)));

  const missing = [...all].filter((s) => !covered(s));
  const stale = [...keys].filter((s) => !all.has(s) && !ADDED.includes(s));
  /* 空字串是刻意的（片段重新分配時把某一段清空），不算沒翻。
     KEEP 裡的詞先挖掉再判斷——挖完還有中文，就是清單沒涵蓋到的東西。 */
  const stripKeep = (v) => KEEP.reduce((s, w) => s.split(w).join(''), v);

  /* 英文值裡的全形標點也算沒翻完。
     ⚠ 只驗漢字會漏：'— 馮博堅：a three-word method' 的冒號是全形，
     值裡沒有其他中文，於是整條通過檢查、直接上線到英文頁。
     全形標點在英文句子裡看起來就是沒排版，而且逐條校對很難注意到。 */
  /* ⚠ 手列清單會漏。實測踩過：列了 、。！（），：；？「」 卻漏掉 ＋，
     於是英文按鈕上出現「＋ Add back to cash」——全形加號比半形寬一截，
     畫面上一眼看得出不對，兩層檢查卻都放行。改用完整區段：
     U+FF01–FF5E（全形 ASCII 變體）與 U+3001–U+301F（CJK 標點）。

     ＿（U+FF3F）是唯一的例外：它是練習題的填空底線，
     全形版比半形寬、留給人寫字的空間剛好，英文表單同樣適用。
     × ÷ − · 不在全形區段內，是英文正常的排版符號，本來就不會被掃到。 */
  const FULLWIDTH = /[\uFF01-\uFF3E\uFF40-\uFF5E\u3001-\u301F]/;
  const untranslated = Object.entries(MAP).filter(
    ([, v]) => v !== '' && (CJK.test(stripKeep(v)) || FULLWIDTH.test(stripKeep(v))),
  );

  /* MODALS_EN 這邊的三種錯各自對應 MAP 的同名檢查 */
  const srcModalKeys = new Set(modalBodies.values());
  const staleModals = MODALS_EN ? Object.keys(MODALS_EN).filter((k) => !srcModalKeys.has(k)) : [];
  const untranslatedModals = MODALS_EN
    ? Object.entries(MODALS_EN).filter(([, v]) => CJK.test(stripKeep(v.html ?? '')))
    : [];

  /* 錯誤（一定要修）與未完成（進行中）分開算 */
  const broken = stale.length || untranslated.length || staleModals.length || untranslatedModals.length;
  const ok = !broken && (!missing.length || INCOMPLETE);
  if (broken || (missing.length && !INCOMPLETE)) bad++;

  const cjk = (s) => (s.match(/[一-鿿]/g) || []).length;
  const zhChars = [...all].reduce((n, s) => n + cjk(s), 0);
  const doneChars = [...all].filter(covered).reduce((n, s) => n + cjk(s), 0);
  const mark = broken ? '✘' : missing.length ? '…' : '✔';
  console.log(
    `  ${mark} ${key.replace(/^(projects__one-more-step__|writing__)/, '').padEnd(30)}` +
      `${all.size - missing.length}/${all.size} 條　${doneChars}/${zhChars} 字` +
      (missing.length ? `　（進行中，剩 ${missing.length} 條 / ${zhChars - doneChars} 字）` : ''),
  );
  if (missing.length && !INCOMPLETE) {
    console.log(`      ⚠ 漏譯 ${missing.length} 條：`);
    missing.slice(0, 8).forEach((s) => console.log(`          ${s.slice(0, 60)}`));
  }
  if (stale.length) {
    console.log(`      ⚠ 對照表有、頁面沒有 ${stale.length} 條（原文可能改過）：`);
    stale.slice(0, 8).forEach((s) => console.log(`          ${s.slice(0, 60)}`));
  }
  if (untranslated.length) {
    console.log(`      ⚠ 英文值裡還有中文或全形標點 ${untranslated.length} 條：`);
    untranslated.slice(0, 8).forEach(([k, v]) => console.log(`          ${k.slice(0, 30)} → ${v.slice(0, 40)}`));
  }
  if (staleModals.length) {
    console.log(`      ⚠ MODALS_EN 有、來源頁沒有的 modal key：${staleModals.join(', ')}`);
  }
  if (untranslatedModals.length) {
    console.log(`      ⚠ MODALS_EN 英文 html 裡還有中文：${untranslatedModals.map(([k]) => k).join(', ')}`);
  }
}

if (bad) process.exitCode = 1;
