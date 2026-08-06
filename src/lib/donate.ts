/*
 * 贊助的共用邏輯：footer 的 modal（Sponsor.astro）與 /sponsor 頁共用這一份，
 * 避免兩邊各自實作一次而日後漂移。
 *
 * 後端是既有的 dreamcatcher-worker，TWD 走綠界、USD 走 Polar。
 * 注意：WORKER_URL 裡的 a0972210123 是 Cloudflare Workers 的子網域，
 * 與 GitHub 帳號無關，不會因為帳號改名而改變——不要動它。
 */
const WORKER_URL = 'https://dreamcatcher-worker.a0972210123.workers.dev';

/* 建議金額。實際可接受的範圍由 worker 端把關，這裡只負責呈現 */
export const DONATION_AMOUNTS: Record<string, number[]> = {
  twd: [50, 150, 300],
  usd: [2, 5, 10],
};

/* 自填金額的範圍，與 worker 的 DONATION_LIMITS 對齊。
   前端先擋一次只是為了給即時提示；送出去仍由 worker 做最終驗證。 */
export const DONATION_LIMITS: Record<string, { min: number; max: number }> = {
  twd: { min: 30, max: 20000 },
  usd: { min: 1,  max: 500   },
};

/* 回傳錯誤訊息字串，通過則回傳 null */
export function checkAmount(cur: string, amt: number): string | null {
  const lim = DONATION_LIMITS[cur];
  if (!lim) return L('幣別不支援', 'Unsupported currency');
  if (!Number.isInteger(amt)) return L('請輸入整數', 'Whole numbers only');
  if (amt < lim.min || amt > lim.max) {
    return L(`請輸入 ${lim.min}–${lim.max} 之間的金額`,
             `Enter an amount between ${lim.min} and ${lim.max}`);
  }
  return null;
}

export const money = (cur: string, n: number) => (cur === 'twd' ? `NT$${n}` : `$${n}`);

export const lang = () =>
  document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'zh';

export const L = (zh: string, en: string) => (lang() === 'en' ? en : zh);

export const track = (name: string, params: Record<string, unknown>) => {
  try { (window as any).gtag?.('event', name, params); } catch (e) {}
};

/*
 * 綠界要求以 form POST 帶著 CheckMacValue 送單，不能用單純的 redirect。
 * worker 同時回傳現成的 html 與結構化的 action + fields；這裡刻意用後者以
 * DOM 建表單，而不是把一段 HTML 字串 document.write 進頁面——後者會把
 * 「伺服器回傳的字串」當成可執行標記，是不必要的注入面。
 * target=_blank 由使用者點擊觸發，瀏覽器視為使用者發起的導覽，不會被擋。
 */
function submitEcpayForm(action: string, fields: Record<string, string>) {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = action;
  form.target = '_blank';
  form.style.display = 'none';
  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = String(value);
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
  form.remove();
}

/*
 * 建立贊助付款並把使用者送去付款頁。
 * 失敗時 throw，由呼叫端顯示訊息。
 */
export async function startDonation(amount: number, currency: string, source: string) {
  track('donate_start', { amount, currency, source });

  const res = await fetch(`${WORKER_URL}/create-donation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, currency }),
  });
  const data = await res.json();

  // Polar（USD）：回傳結帳連結
  if (data.url) {
    const popup = window.open(data.url, '_blank');
    if (!popup && confirm(L('瀏覽器封鎖了新視窗，是否在本頁前往付款？', 'Popup blocked — continue to payment in this tab?'))) {
      location.href = data.url;
    }
    return;
  }

  // 綠界（TWD）
  if (data.provider === 'ecpay' && data.action && data.fields) {
    submitEcpayForm(data.action, data.fields);
    return;
  }

  throw new Error(data.error || 'Unexpected response');
}
