// dashboard 專用 API（mattye.dev/api/dashboard/*）。
// 邊緣由 Cloudflare Access 把關（僅 owner email）；憑證只存在 worker secrets，永不進瀏覽器。
//   POST /api/dashboard/trigger — 觸發 analytics workflow（GitHub workflow dispatch）
//   GET  /api/dashboard/users   — 註冊用戶數（D1 telaaurea-auth 的 user 表）
const REPO = 'matt-ye/personal-website';
const WORKFLOW = 'analytics.yml';

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

// 自動偵測 users 表（與 scripts/fetch-analytics.mjs 的 pickUsersTable 邏輯一致），
// 快取在 isolate 生命週期內。
//
// 精確的 users/user 優先——捕夢網之後可能新增 print_users / printful_orders
// 這類表（Printful 整合），精確優先可確保不受影響。沒有精確表時只在「模糊
// 候選恰好一張」時才採用；多張就不猜，回錯誤讓人判斷。靜默挑錯的代價是
// 卡片顯示一個看起來正常但其實是別張表的數字。
let usersTable = null;
async function resolveUsersTable(db) {
  if (usersTable) return usersTable;
  const { results } = await db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  const names = (results ?? [])
    .map((r) => r.name)
    .filter((t) => !t.startsWith('sqlite_') && !t.startsWith('_cf_') && !t.startsWith('d1_'));

  const exact = names.find((t) => /^users?$/i.test(t));
  if (exact) return (usersTable = exact);

  const fuzzy = names.filter((t) => /user/i.test(t));
  if (fuzzy.length === 1) return (usersTable = fuzzy[0]);
  if (fuzzy.length > 1) {
    throw new Error(`多張近似 users 的表無法判斷：${fuzzy.join(', ')}`);
  }
  return null;
}

export default {
  async fetch(req, env) {
    // Access 已在邊緣驗證身分；此處防禦性確認 JWT header 存在——
    // 若route 被設到未受 Access 保護的路徑，fail closed 而不是裸奔。
    if (!req.headers.get('Cf-Access-Jwt-Assertion')) {
      return json({ error: 'unauthorized' }, 403);
    }

    const url = new URL(req.url);

    if (url.pathname === '/api/dashboard/users' && req.method === 'GET') {
      try {
        const table = await resolveUsersTable(env.AUTH_DB);
        if (!table) return json({ error: 'users table not found' }, 500);
        const row = await env.AUTH_DB.prepare(`SELECT COUNT(*) AS n FROM "${table}"`).first();
        return json({ count: row?.n ?? 0, table, at: new Date().toISOString() });
      } catch (err) {
        return json({ error: String(err.message).slice(0, 200) }, 500);
      }
    }

    if (url.pathname === '/api/dashboard/trigger' && req.method === 'POST') {
      if (!env.GH_DISPATCH_TOKEN) return json({ error: 'GH_DISPATCH_TOKEN not set' }, 500);
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.GH_DISPATCH_TOKEN}`,
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'User-Agent': 'dashboard-api-worker',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ref: 'main' }),
        }
      );
      if (res.status === 204) return json({ ok: true });
      return json({ ok: false, status: res.status, detail: (await res.text()).slice(0, 300) }, 502);
    }

    return json({ error: 'not found' }, 404);
  },
};
