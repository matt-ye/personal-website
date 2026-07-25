/**
 * tour-verify.js — 首頁導覽（src/components/Tour.astro）的健康檢查
 *
 * 用法：起 dev server，開 http://localhost:4321/ ，把整個檔案貼進瀏覽器
 * console 執行，或用瀏覽器自動化工具 evaluate 它。回傳一份 report 物件。
 *
 * 為什麼需要這個：導覽會「腐化」——UI 重構後選擇器悄悄失效、步驟順序改變，
 * 但頁面本身看起來完全正常，不會有人發現導覽已經指向空氣。
 * 每次改動首頁 hero 或導覽列後，重跑這支腳本。
 *
 * 判定失敗的條件：
 *   - 有選擇器找不到元素（step 被靜默過濾掉 → 總步數變少）
 *   - spotlight 尺寸退化（<4px）
 *   - 說明卡蓋住 spotlight（使用者看不到被指的東西）
 *   - 說明卡跑出視窗
 *   - 步數與預期不符
 */
(async () => {
  const EXPECTED_STEPS = 10; // 與 Tour.astro 的 STEPS 長度一致；有意增減時才改這個數字
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const rect = el => el.getBoundingClientRect();
  const report = { pass: true, viewport: innerWidth + 'x' + innerHeight, failures: [], steps: [] };

  const fail = msg => { report.pass = false; report.failures.push(msg); };

  const openBtn = document.getElementById('tour-open');
  if (!openBtn) { fail('找不到 #tour-open（導覽入口按鈕）'); return report; }

  try { localStorage.removeItem('tour_seen'); } catch (e) {}
  openBtn.click();
  await sleep(400);

  const counter = document.querySelector('.tt-count');
  if (!counter) { fail('導覽沒有開啟：找不到 .tt-count'); return report; }

  const total = Number(counter.textContent.split('/')[1]);
  if (total !== EXPECTED_STEPS) {
    fail(`步數為 ${total}，預期 ${EXPECTED_STEPS}。通常代表某個步驟的選擇器已失效被過濾掉。`);
  }

  for (let i = 0; i < total; i++) {
    await sleep(400);
    const spotEl = document.querySelector('.tt-spot');
    const cardEl = document.querySelector('.tt-card');
    const s = rect(spotEl), c = rect(cardEl);
    const centered = spotEl.classList.contains('tt-hidden'); // 歡迎/結束卡沒有目標
    const n = document.querySelector('.tt-count').textContent;
    const title = document.querySelector('.tt-title').textContent;

    const degenerate = !centered && (s.width <= 4 || s.height <= 4);
    const overlaps = !centered &&
      !(c.right <= s.left || c.left >= s.right || c.bottom <= s.top || c.top >= s.bottom);
    const offscreen = c.left < -1 || c.top < -1 || c.right > innerWidth + 1 || c.bottom > innerHeight + 1;

    if (degenerate) fail(`第 ${n} 步「${title}」：spotlight 尺寸退化（${Math.round(s.width)}×${Math.round(s.height)}）`);
    if (overlaps) fail(`第 ${n} 步「${title}」：說明卡蓋住了 spotlight`);
    if (offscreen) fail(`第 ${n} 步「${title}」：說明卡超出視窗`);

    report.steps.push({ n, title, centered, degenerate, overlaps, offscreen });
    if (i < total - 1) document.querySelector('.tt-next').click();
  }

  // 鍵盤：Esc 應結束並寫入 tour_seen
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await sleep(300);
  const cardHidden = document.querySelector('.tt-card').style.display === 'none';
  const blockerHidden = document.querySelector('.tt-block').style.display === 'none';
  if (!cardHidden) fail('按 Esc 之後說明卡沒有關閉');
  if (!blockerHidden) fail('按 Esc 之後互動封鎖層沒有移除（頁面會卡住無法點擊）');

  report.summary = report.pass
    ? `通過：${total} 步全部正常（${report.viewport}）`
    : `失敗 ${report.failures.length} 項`;
  console.log(report.summary, report);
  return report;
})();
