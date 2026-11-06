// Cloudflare Web Analytics（RUM）→ dashboard 網站區塊。
// 輸出形狀對齊 fetchGa4Site，所以 dashboard 的 siteBlocks() 直接吃得下。
//
// 2026-11 實測帳戶限制（viewer.accounts.settings）：單次查詢最多 93 天
// （maxDuration 8035200 秒）、資料最多保留 184 天（notOlderThan）。
// 所以每段切成 90 天、整體上限 180 天，d365 視窗實際只有 180 天的資料。
//
// 指標沒有 unique visitors，只有 pageviews（count）與 visits（sum.visits），
// users / sessions 都用 visits 代表。
// 長區間是 Cloudflare 的抽樣估算，少量資料時各視窗的分佈可能不一致（總量仍一致）。

const CF_GRAPHQL = 'https://api.cloudflare.com/client/v4/graphql';
const DAY_MS = 86_400_000;
export const CHUNK_DAYS = 90;
export const RETENTION_DAYS = 180;
const WINDOW_DAYS = { d7: 7, d28: 28, d90: 90, d180: 180, d365: 180 };

// 由近到遠切段；until 為開區間（查詢用 datetime_lt），段與段之間不會重複計算。
export function splitRanges(days, now = new Date()) {
  const ranges = [];
  let remaining = Math.min(days, RETENTION_DAYS);
  let until = now.getTime();
  while (remaining > 0) {
    const span = Math.min(remaining, CHUNK_DAYS);
    const since = until - span * DAY_MS;
    ranges.push({ since: new Date(since).toISOString(), until: new Date(until).toISOString() });
    until = since;
    remaining -= span;
  }
  return ranges;
}

// 多段結果依維度值加總（同一天可能被切在兩段）。
export function mergeRows(chunks, keyOf) {
  const merged = new Map();
  for (const rows of chunks) {
    for (const r of rows ?? []) {
      const key = keyOf(r);
      const cur = merged.get(key) ?? { key, views: 0, visits: 0 };
      cur.views += r.count ?? 0;
      cur.visits += r.sum?.visits ?? 0;
      merged.set(key, cur);
    }
  }
  return [...merged.values()];
}

const QUERY = `
  query ($account: String!, $filter: AccountRumPageloadEventsAdaptiveGroupsFilter_InputObject!) {
    viewer { accounts(filter: { accountTag: $account }) {
      total: rumPageloadEventsAdaptiveGroups(limit: 1, filter: $filter) { count sum { visits } }
      daily: rumPageloadEventsAdaptiveGroups(limit: 100, filter: $filter, orderBy: [date_ASC]) {
        count sum { visits } dimensions { date } }
      paths: rumPageloadEventsAdaptiveGroups(limit: 100, filter: $filter, orderBy: [count_DESC]) {
        count sum { visits } dimensions { requestPath } }
      referers: rumPageloadEventsAdaptiveGroups(limit: 100, filter: $filter, orderBy: [sum_visits_DESC]) {
        count sum { visits } dimensions { refererHost } }
      devices: rumPageloadEventsAdaptiveGroups(limit: 20, filter: $filter, orderBy: [sum_visits_DESC]) {
        count sum { visits } dimensions { deviceType } }
      countries: rumPageloadEventsAdaptiveGroups(limit: 100, filter: $filter, orderBy: [sum_visits_DESC]) {
        count sum { visits } dimensions { countryName } }
    } }
  }`;

async function queryChunk(range, { token, accountTag, siteTag }) {
  const res = await fetch(CF_GRAPHQL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        account: accountTag,
        filter: { AND: [{ datetime_geq: range.since, datetime_lt: range.until }, { siteTag }] },
      },
    }),
  });
  if (!res.ok) throw new Error(`Cloudflare HTTP ${res.status}: ${await res.text()}`);
  const body = await res.json();
  if (body.errors?.length) throw new Error(`Cloudflare GraphQL: ${JSON.stringify(body.errors)}`);
  return body.data.viewer.accounts[0];
}

const top = (list, n) => list.sort((a, b) => b.visits - a.visits || b.views - a.views).slice(0, n);

// 把一個視窗的多段結果轉成 dashboard 要的形狀（純函式，測試直接打這裡）。
export function shapeWindow(chunks) {
  const pick = (field, dim) => mergeRows(chunks.map((c) => c[field]), (r) => r.dimensions[dim]);
  const total = mergeRows(chunks.map((c) => c.total), () => 'all')[0] ?? { views: 0, visits: 0 };
  return {
    totals: { users: total.visits, views: total.views, sessions: total.visits },
    daily: pick('daily', 'date')
      .sort((a, b) => a.key.localeCompare(b.key))
      .map((d) => ({ date: d.key, users: d.visits, views: d.views, sessions: d.visits })),
    topPages: top(pick('paths', 'requestPath'), 20)
      .map((p) => ({ path: p.key, users: p.visits, views: p.views })),
    channels: top(pick('referers', 'refererHost'), 8)
      .map((r) => ({ channel: r.key || 'Direct', sessions: r.visits })),
    devices: top(pick('devices', 'deviceType'), 8)
      .map((d) => ({ device: d.key, users: d.visits })),
    countries: top(pick('countries', 'countryName'), 20)
      .map((c) => ({ country: c.key, users: c.visits })),
  };
}

export async function fetchCfWebAnalytics(site, { token, accountTag, now = new Date() }) {
  const out = { source: 'cf-wa', configured: true, totals: {}, topPages: {}, channels: {}, devices: {}, countries: {}, daily: [] };
  const byDays = new Map(); // d180 與 d365 查同一段，不重複打 API
  for (const [win, days] of Object.entries(WINDOW_DAYS)) {
    if (!byDays.has(days)) {
      const chunks = [];
      for (const range of splitRanges(days, now)) {
        chunks.push(await queryChunk(range, { token, accountTag, siteTag: site.siteTag }));
      }
      byDays.set(days, shapeWindow(chunks));
    }
    const shaped = byDays.get(days);
    out.totals[win] = shaped.totals;
    for (const field of ['topPages', 'channels', 'devices', 'countries']) out[field][win] = shaped[field];
    if (days === RETENTION_DAYS) out.daily = shaped.daily;
  }
  return out;
}
