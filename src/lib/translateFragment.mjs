/*
 * 機制 C：用整頁對照表把手刻頁的片段換成英文。
 *
 * ── 為什麼抽成共用模組 ────────────────────────────────────────────
 * 原本這段長在 StaticPageContent.astro 裡，只服務 src/data/static-pages/。
 * 26 週課程頁（src/data/course-weeks/）結構完全一樣——零 zh-only、
 * 零 data-i18n、零語言鈕，純中文——需要同一套處理。
 *
 * 複製一份到課程頁的路由，就是下一次走鐘的起點：三道守衛只有一邊會更新，
 * 而漏掉的那一邊不會報錯，只會安靜地把中文送上英文頁。
 *
 * ── 三道守衛，缺一不可 ────────────────────────────────────────────
 *   ① missing   對照表查不到的字串 → 這是「清單型」檢查
 *   ② residual  換完還有中文       → 「掃描型」，涵蓋抽取器的盲區
 *   ③ broken    script 還能不能解析 → 改的是原始碼，就要驗它能不能跑
 *
 * 三者的盲區不重疊，都是被實際的失敗逼出來的：
 *   ② 紀念頁曾有 12 條字串既沒被抽出、也不會被 ① 點名（斷詞遇到正則
 *      字面值裡的引號會整批位移）——抽取器看不見的東西 ① 當然看不見。
 *   ③ 英文所有格的一個撇號打斷單引號字面值，整份 script SyntaxError、
 *      71 個 modal 全部打不開——而 ① ② 都是綠的。
 */
import { applyTranslations, findResidualCjk, findBrokenScripts } from '../../scripts/lib/extract-strings.mjs';

/**
 * @param {string} fragment 中文片段
 * @param {object} table    src/data/translations/<key>.mjs 的匯出
 * @param {string} key      出錯訊息用，指出是哪一頁
 * @returns {string} 英文片段
 */
export function translateFragment(fragment, table, key) {
  const { html, missing } = applyTranslations(fragment, table);
  if (missing.length) {
    throw new Error(
      `${key}：對照表缺 ${missing.length} 條譯文，英文頁會殘留中文。` +
        `請補進 src/data/translations/${key}.mjs 並重跑 node scripts/check-translations.mjs。` +
        `前幾條：${missing.slice(0, 3).map((s) => JSON.stringify(s.slice(0, 40))).join('、')}`,
    );
  }

  const residual = findResidualCjk(html, table.KEEP ?? []);
  if (residual.length) {
    throw new Error(
      `${key}：英文頁還有 ${residual.length} 處中文，對照表沒涵蓋到（可能是抽取器的盲區）。` +
        `第一處前後文：…${residual[0]}…`,
    );
  }

  const broken = findBrokenScripts(html);
  if (broken.length) {
    throw new Error(
      `${key}：換成英文後有 ${broken.length} 塊 <script> 解析失敗，譯文可能沒有正確脫逸。` +
        `第 ${broken[0].index} 塊：${broken[0].message}　開頭：${broken[0].head}`,
    );
  }

  return html;
}
