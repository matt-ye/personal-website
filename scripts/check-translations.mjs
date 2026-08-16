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
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { extractStrings } from './lib/extract-strings.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIR = join(ROOT, 'src/data/translations');

const CJK = /[一-鿿]/;
let bad = 0;

for (const file of readdirSync(DIR).filter((f) => f.endsWith('.mjs'))) {
  const key = file.replace(/\.mjs$/, '');
  const page = join(ROOT, 'src/data/static-pages', `${key}.html`);
  if (!existsSync(page)) {
    console.log(`  ✘ ${key}：找不到來源頁 ${key}.html`);
    bad++;
    continue;
  }

  /* KEEP 是「英文值裡允許留下的中文」，各檔自己宣告（多半是人名）。
     不放寬規則、只把例外寫死成清單——清單外的中文照樣報錯，
     所以真正的漏譯還是擋得住。 */
  const { MAP, KEEP = [] } = await import(`file://${join(DIR, file)}`);
  const found = extractStrings(page);
  const all = new Set([...found.text, ...found.attr, ...found.data]);
  const keys = new Set(Object.keys(MAP));

  const missing = [...all].filter((s) => !keys.has(s));
  const stale = [...keys].filter((s) => !all.has(s));
  /* 空字串是刻意的（片段重新分配時把某一段清空），不算沒翻。
     KEEP 裡的詞先挖掉再判斷——挖完還有中文，就是清單沒涵蓋到的東西。 */
  const untranslated = Object.entries(MAP).filter(
    ([, v]) => v !== '' && CJK.test(KEEP.reduce((s, w) => s.split(w).join(''), v)),
  );

  const ok = !missing.length && !stale.length && !untranslated.length;
  if (!ok) bad++;
  const zhChars = [...all].reduce((n, s) => n + (s.match(/[一-鿿]/g) || []).length, 0);
  console.log(
    `  ${ok ? '✔' : '✘'} ${key.replace(/^(projects__one-more-step__|writing__)/, '').padEnd(30)}` +
      `${all.size} 條 / ${zhChars} 字　對照表 ${keys.size} 條`,
  );
  if (missing.length) {
    console.log(`      ⚠ 漏譯 ${missing.length} 條：`);
    missing.slice(0, 8).forEach((s) => console.log(`          ${s.slice(0, 60)}`));
  }
  if (stale.length) {
    console.log(`      ⚠ 對照表有、頁面沒有 ${stale.length} 條（原文可能改過）：`);
    stale.slice(0, 8).forEach((s) => console.log(`          ${s.slice(0, 60)}`));
  }
  if (untranslated.length) {
    console.log(`      ⚠ 英文值裡還有中文 ${untranslated.length} 條：`);
    untranslated.slice(0, 8).forEach(([k, v]) => console.log(`          ${k.slice(0, 30)} → ${v.slice(0, 40)}`));
  }
}

if (bad) process.exitCode = 1;
