// dashboard 專用 API（mattye.dev/api/dashboard/*）。
// 邊緣由 Cloudflare Access 把關（僅 owner email）；憑證只存在 worker secrets，永不進瀏覽器。
//   POST /api/dashboard/trigger — 觸發 analytics workflow（GitHub workflow dispatch）
//   GET  /api/dashboard/users   — 註冊用戶數（D1 telaaurea-auth 的 user 表）
//   GET  /api/dashboard/data/{summary.json,history.ndjson} — 代讀 gist，網址只存在 worker secret
const REPO = 'matt-ye/personal-website';
const WORKFLOW = 'analytics.yml';

const DATA_FILES = {
  'summary.json': 'application/json',
  'history.ndjson': 'application/x-ndjson',
};

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

// 驗 Access JWT 的簽章、aud、iss、效期。只查 header 存在的話任何人都能偽造；
// Access 設定只要出錯一次（2026-08 就發生過路徑打錯），這裡就是最後一道。
const b64urlBytes = (s) =>
  Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));
const b64urlJson = (s) => JSON.parse(new TextDecoder().decode(b64urlBytes(s)));

let certs = { keys: [], at: 0 };
async function accessJwk(env, kid) {
  const find = () => certs.keys.find((k) => k.kid === kid);
  // Access 會輪替金鑰：不認得的 kid 才重抓，但限速，避免假 kid 把每個請求都變成一次外部呼叫
  if (!find() && Date.now() - certs.at > 60_000) {
    const res = await fetch(`https://${env.ACCESS_TEAM_DOMAIN}/cdn-cgi/access/certs`);
    if (!res.ok) throw new Error(`certs ${res.status}`);
    certs = { keys: (await res.json()).keys ?? [], at: Date.now() };
  }
  return find();
}

export async function verifyAccessJwt(token, env) {
  if (!token || !env.ACCESS_AUD || !env.ACCESS_TEAM_DOMAIN) return false;
  try {
    const [h, p, sig] = token.split('.');
    const header = b64urlJson(h);
    if (header.alg !== 'RS256') return false;
    const jwk = await accessJwk(env, header.kid);
    if (!jwk) return false;
    const algo = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' };
    const key = await crypto.subtle.importKey('jwk', jwk, algo, false, ['verify']);
    const valid = await crypto.subtle.verify(
      algo, key, b64urlBytes(sig), new TextEncoder().encode(`${h}.${p}`)
    );
    if (!valid) return false;
    const claims = b64urlJson(p);
    const now = Date.now() / 1000;
    const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud];
    return (
      aud.includes(env.ACCESS_AUD) &&
      claims.iss === `https://${env.ACCESS_TEAM_DOMAIN}` &&
      claims.exp > now &&
      (claims.nbf === undefined || claims.nbf <= now)
    );
  } catch {
    return false;
  }
}

export default {
  async fetch(req, env) {
    // 未通過一律 fail closed，不看路徑。
    if (!(await verifyAccessJwt(req.headers.get('Cf-Access-Jwt-Assertion'), env))) {
      return json({ error: 'unauthorized' }, 403);
    }

    const url = new URL(req.url);

    const dataPrefix = '/api/dashboard/data/';
    if (url.pathname.startsWith(dataPrefix) && req.method === 'GET') {
      const file = url.pathname.slice(dataPrefix.length);
      if (!Object.hasOwn(DATA_FILES, file)) return json({ error: 'not found' }, 404);
      if (!env.ANALYTICS_DATA_BASE) return json({ error: 'ANALYTICS_DATA_BASE not set' }, 500);
      // 查詢參數是 cache-buster：gist raw CDN 對同一 URL 快取約 5 分鐘
      const res = await fetch(`${env.ANALYTICS_DATA_BASE.replace(/\/+$/, '')}/${file}?t=${Date.now()}`);
      // 上游錯誤不回傳內文與網址，只回狀態
      if (!res.ok) return json({ error: 'upstream', status: res.status }, 502);
      return new Response(res.body, {
        headers: { 'Content-Type': DATA_FILES[file], 'Cache-Control': 'no-store' },
      });
    }

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
