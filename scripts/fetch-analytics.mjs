#!/usr/bin/env node
// 每日 analytics 快照：GA4 Data API + Cloudflare GraphQL + GitHub REST → secret gist。
// 零外部依賴（Node 22：內建 fetch + node:crypto）。
//
// 環境變數（缺少者該來源優雅跳過，不影響其他來源）：
//   GA4_SA_KEY        service account 完整 JSON（GA4 property 需加此 SA 為 Viewer）
//   GA4_PROPERTY_ID   GA4 property 數字 ID（非 G- 開頭的 measurement ID）
//   CF_API_TOKEN      Cloudflare API token（Zone → Analytics → Read）
//   CF_ZONE_ID        mattye.dev 的 zone ID
//   GH_TRAFFIC_TOKEN  GitHub fine-grained PAT（追蹤 repos 的 Administration/Metadata read）
//   GIST_TOKEN        GitHub classic PAT（僅 gist scope；gist API 不支援 fine-grained）
//   GIST_ID           資料 gist 的 ID（未設時首跑自動建立 secret gist 並在 log 印出）
//
// 輸出：out/summary.json、out/history.ndjson（並同步到 gist）。
// history 以日期為 key 做 per-source 冪等 upsert，同日重跑不會重複。

import { createSign } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import {
  GA4_EVENTS, FEATURED, EXCLUDE, INCLUDE_FORKS, INCLUDE_ARCHIVED, HOSTS,
  MAIN_STREAM_ID, GA4_EXTRA_SITES,
} from './analytics-config.mjs';

// v2：維度報表（topPages/channels/devices/countries/hosts/topEvents）從單一 28 天陣列
// 改為「視窗 → 陣列」物件（{d7:[…],d28:[…],…}）。dashboard 兩種形狀都能讀。
const SCHEMA_VERSION = 2;
const env = (k) => (process.env[k] ?? '').trim() || null;

const GA4_SA_KEY = env('GA4_SA_KEY');
const GA4_PROPERTY_ID = env('GA4_PROPERTY_ID');
const CF_API_TOKEN = env('CF_API_TOKEN');
const CF_ZONE_ID = env('CF_ZONE_ID');
const GH_TRAFFIC_TOKEN = env('GH_TRAFFIC_TOKEN');
const GIST_TOKEN = env('GIST_TOKEN');
const GIST_ID = env('GIST_ID');
const CF_ACCOUNT_ID = env('CF_ACCOUNT_ID');
const CF_D1_DB_ID = env('CF_D1_DB_ID');
const CF_D1_TOKEN = env('CF_D1_TOKEN');

const num = (v) => Number(v ?? 0) || 0;
const isoDay = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d;
};
// GA4 的 date 維度格式為 YYYYMMDD
const gaDate = (s) => (s?.length === 8 ? `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}` : s);

/* ── GA4 ─────────────────────────────────────────────── */

const b64url = (input) =>
  Buffer.from(input).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

async function googleToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/analytics.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now - 60, // 防時鐘偏移
      exp: now + 3540,
    })
  );
  const input = `${header}.${claims}`;
  const signature = createSign('RSA-SHA256').update(input).sign(sa.private_key);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${input}.${b64url(signature)}`,
    }),
  });
  if (!res.ok) throw new Error(`Google token ${res.status}: ${await res.text()}`);
  return (await res.json()).access_token;
}

async function ga4Report(token, label, body, propertyId = GA4_PROPERTY_ID) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) throw new Error(`GA4 ${label} ${res.status}: ${await res.text()}`);
  return res.json();
}

// 站別範圍過濾：streamId + hostName 雙重條件（可再 and 上其他條件，如事件白名單）。
// 雙重過濾的原因見 analytics-config.mjs 的 MAIN_STREAM_ID 註解。
function gaScope(streamId, hosts, ...extra) {
  const expressions = [
    { filter: { fieldName: 'streamId', inListFilter: { values: [streamId] } } },
    { filter: { fieldName: 'hostName', inListFilter: { values: hosts } } },
    ...extra,
  ];
  return { andGroup: { expressions } };
}

// KPI 時間視窗（dashboard 的 7天/28天/90天/半年/一年切換）。
// GA4 單一請求最多 4 個 dateRanges → 分批；多 range 時 rows 會附加 dateRange 維度（date_range_N），
// 單 range 時不附加。
const WINDOWS = { d7: '7daysAgo', d28: '28daysAgo', d90: '90daysAgo', d180: '180daysAgo', d365: '365daysAgo' };

// 純函式：把多 dateRange 回應的 rows 依視窗分桶（可單測）。
// 多 range 時 dateRange 維度附加在請求維度之後；單 range 時不附加。
export function bucketByWindow(rows, chunk, dimCount, emit) {
  for (const row of rows) {
    const dv = (row.dimensionValues ?? []).map((v) => v.value);
    const idx = chunk.length === 1 ? 0 : num(String(dv[dimCount] ?? '').split('_').pop());
    const key = chunk[idx];
    if (!key) continue;
    emit(key, dv.slice(0, dimCount), (row.metricValues ?? []).map((v) => num(v.value)));
  }
}

async function ga4Windows(token, label, scope, metricNames, mapRow) {
  const keys = Object.keys(WINDOWS);
  const out = {};
  for (let i = 0; i < keys.length; i += 4) {
    const chunk = keys.slice(i, i + 4);
    const res = await ga4Report(token, `${label}[${chunk.join(',')}]`, {
      dateRanges: chunk.map((k) => ({ startDate: WINDOWS[k], endDate: 'today' })),
      metrics: metricNames.map((name) => ({ name })),
      dimensionFilter: scope,
    });
    bucketByWindow(res.rows ?? [], chunk, 0, (key, _d, m) => { out[key] = mapRow(m); });
  }
  return out;
}

// 單一維度 × 5 視窗：每視窗回傳排序後的 topN 清單
async function ga4WindowsByDim(token, label, scope, dimName, metricNames, mapRow, { sortBy, topN, limit }) {
  const keys = Object.keys(WINDOWS);
  const out = {};
  for (let i = 0; i < keys.length; i += 4) {
    const chunk = keys.slice(i, i + 4);
    const res = await ga4Report(token, `${label}[${chunk.join(',')}]`, {
      dateRanges: chunk.map((k) => ({ startDate: WINDOWS[k], endDate: 'today' })),
      dimensions: [{ name: dimName }],
      metrics: metricNames.map((name) => ({ name })),
      dimensionFilter: scope,
      limit,
    });
    bucketByWindow(res.rows ?? [], chunk, 1, (key, d, m) => {
      (out[key] ??= []).push(mapRow(d[0], m));
    });
  }
  for (const k of Object.keys(out)) {
    out[k].sort((a, b) => sortBy(b) - sortBy(a));
    if (out[k].length > topN) out[k].length = topN;
  }
  return out;
}

// 兩站共用的維度報表組（全部 5 視窗，dashboard 的視窗切換直接可用）
async function fetchSiteDimensions(token, scope) {
  const topPages = await ga4WindowsByDim(token, 'topPages', scope, 'pagePath',
    ['screenPageViews', 'activeUsers', 'userEngagementDuration'],
    (d, m) => ({ path: d, views: m[0], users: m[1], engagementSec: m[2] }),
    { sortBy: (r) => r.views, topN: 20, limit: 500 }); // 20 筆：排行顯示 10、漏斗要加總 /writing/* 長尾
  const channels = await ga4WindowsByDim(token, 'channels', scope, 'sessionDefaultChannelGroup',
    ['sessions'], (d, m) => ({ channel: d, sessions: m[0] }),
    { sortBy: (r) => r.sessions, topN: 10, limit: 100 });
  const devices = await ga4WindowsByDim(token, 'devices', scope, 'deviceCategory',
    ['activeUsers'], (d, m) => ({ device: d, users: m[0] }),
    { sortBy: (r) => r.users, topN: 5, limit: 50 });
  const countries = await ga4WindowsByDim(token, 'countries', scope, 'country',
    ['activeUsers'], (d, m) => ({ country: d, users: m[0] }),
    { sortBy: (r) => r.users, topN: 12, limit: 250 });
  return { topPages, channels, devices, countries };
}

async function fetchGa4() {
  const token = await googleToken(JSON.parse(GA4_SA_KEY));
  const dims = (...names) => names.map((name) => ({ name }));
  const mets = (...names) => names.map((name) => ({ name }));
  const SCOPE = gaScope(MAIN_STREAM_ID, HOSTS);

  // 1) KPI 總覽（7/28/90/180/365 天視窗）
  const totals = await ga4Windows(token, 'totals', SCOPE,
    ['activeUsers', 'newUsers', 'sessions', 'screenPageViews', 'engagementRate', 'userEngagementDuration'],
    (m) => ({ users: m[0], newUsers: m[1], sessions: m[2], views: m[3], engagementRate: m[4], engagementSec: m[5] }));

  // 2) 逐日趨勢（365 天——dashboard 視窗切到半年/一年也有圖可看）
  const dailyRes = await ga4Report(token, 'daily', {
    dateRanges: [{ startDate: '365daysAgo', endDate: 'today' }],
    dimensions: dims('date'),
    metrics: mets('activeUsers', 'screenPageViews', 'sessions'),
    orderBys: [{ dimension: { dimensionName: 'date' } }],
    dimensionFilter: SCOPE,
    limit: 400,
  });
  const daily = (dailyRes.rows ?? []).map((r) => ({
    date: gaDate(r.dimensionValues[0].value),
    users: num(r.metricValues[0].value),
    views: num(r.metricValues[1].value),
    sessions: num(r.metricValues[2].value),
  }));

  // 3–5) 維度報表（topPages / 管道 / 裝置 / 國家，全部 5 視窗；
  //      舊的 sources 報表從未被 dashboard 使用，移除）
  const { topPages, channels, devices, countries } = await fetchSiteDimensions(token, SCOPE);

  // 6) 自訂事件 × 頁面（28/90 天雙窗口）
  const eventFilter = {
    filter: { fieldName: 'eventName', inListFilter: { values: GA4_EVENTS } },
  };
  const scopedEventFilter = gaScope(MAIN_STREAM_ID, HOSTS, eventFilter);
  const eventsRes = await ga4Report(token, 'events', {
    dateRanges: [
      { startDate: '28daysAgo', endDate: 'today' },
      { startDate: '90daysAgo', endDate: 'today' },
    ],
    dimensions: dims('eventName', 'pagePath'),
    metrics: mets('eventCount'),
    dimensionFilter: scopedEventFilter,
    limit: 250,
  });
  const events = {};
  for (const name of GA4_EVENTS) events[name] = { name, d28: 0, d90: 0, topPages: [] };
  for (const row of eventsRes.rows ?? []) {
    const [name, path, range] = row.dimensionValues.map((v) => v.value);
    const count = num(row.metricValues[0].value);
    const ev = events[name];
    if (!ev) continue;
    if (range === 'date_range_0') {
      ev.d28 += count;
      ev.topPages.push({ path, count });
    } else {
      ev.d90 += count;
    }
  }
  for (const ev of Object.values(events)) {
    ev.topPages.sort((a, b) => b.count - a.count).splice(5);
  }

  // 6b) 事件 × 視窗總數（KPI 視窗切換用；dateRange 維度附加在 eventName 之後）
  const eventWindows = {};
  {
    const keys = Object.keys(WINDOWS);
    for (let i = 0; i < keys.length; i += 4) {
      const chunk = keys.slice(i, i + 4);
      const res = await ga4Report(token, `eventWindows[${chunk.join(',')}]`, {
        dateRanges: chunk.map((k) => ({ startDate: WINDOWS[k], endDate: 'today' })),
        dimensions: dims('eventName'),
        metrics: mets('eventCount'),
        dimensionFilter: scopedEventFilter,
        limit: 100,
      });
      for (const row of res.rows ?? []) {
        const name = row.dimensionValues[0].value;
        const idx = chunk.length === 1 ? 0 : num(String(row.dimensionValues[1]?.value ?? '').split('_').pop());
        const key = chunk[idx];
        if (key) (eventWindows[name] ??= {})[key] = num(row.metricValues[0].value);
      }
    }
  }
  for (const ev of Object.values(events)) ev.windows = eventWindows[ev.name] ?? {};

  // 7) hostName 切分（主站 vs 腦齡；SCOPE 已限縮到 HOSTS）——5 視窗
  const hosts = await ga4WindowsByDim(token, 'hosts', SCOPE, 'hostName',
    ['activeUsers', 'screenPageViews', 'sessions'],
    (d, m) => ({ host: d, users: m[0], views: m[1], sessions: m[2] }),
    { sortBy: (r) => r.users, topN: 5, limit: 50 });

  // 8) 逐日事件數（餵 history，供長期轉換趨勢）
  const dailyEventsRes = await ga4Report(token, 'dailyEvents', {
    dateRanges: [{ startDate: '90daysAgo', endDate: 'today' }],
    dimensions: dims('date', 'eventName'),
    metrics: mets('eventCount'),
    dimensionFilter: scopedEventFilter,
    limit: 1000,
  });
  const dailyEvents = {}; // date → { eventName: count }
  for (const row of dailyEventsRes.rows ?? []) {
    const date = gaDate(row.dimensionValues[0].value);
    const name = row.dimensionValues[1].value;
    (dailyEvents[date] ??= {})[name] = num(row.metricValues[0].value);
  }

  return {
    configured: true,
    totals, daily, topPages, channels, devices, countries,
    hosts, events: Object.values(events), dailyEvents,
  };
}

// 同 property 底下其他網站（例如捕夢網）：與主站抓「同一組」報表（全部 5 視窗），
// 以 streamId + hostName 切分——dashboard 用同一套渲染程式呈現兩站。
async function fetchGa4Site(site) {
  const token = await googleToken(JSON.parse(GA4_SA_KEY));
  const dims = (...names) => names.map((name) => ({ name }));
  const mets = (...names) => names.map((name) => ({ name }));
  const SCOPE = gaScope(site.streamId, site.hosts);

  const totals = await ga4Windows(token, `totals@${site.key}`, SCOPE,
    ['activeUsers', 'newUsers', 'sessions', 'screenPageViews', 'engagementRate'],
    (m) => ({ users: m[0], newUsers: m[1], sessions: m[2], views: m[3], engagementRate: m[4] }));

  const dailyRes = await ga4Report(token, `daily@${site.key}`, {
    dateRanges: [{ startDate: '365daysAgo', endDate: 'today' }],
    dimensions: dims('date'),
    metrics: mets('activeUsers', 'screenPageViews', 'sessions'),
    orderBys: [{ dimension: { dimensionName: 'date' } }],
    dimensionFilter: SCOPE,
    limit: 400,
  });
  const daily = (dailyRes.rows ?? []).map((r) => ({
    date: gaDate(r.dimensionValues[0].value),
    users: num(r.metricValues[0].value),
    views: num(r.metricValues[1].value),
    sessions: num(r.metricValues[2].value),
  }));

  const { topPages, channels, devices, countries } = await fetchSiteDimensions(token, SCOPE);

  // 站方自己的熱門事件（不套主站事件白名單）——5 視窗；濾掉每站都有的雜訊事件
  const NOISE = new Set(['page_view', 'session_start', 'first_visit', 'user_engagement', 'scroll']);
  const topEventsRaw = await ga4WindowsByDim(token, `topEvents@${site.key}`, SCOPE, 'eventName',
    ['eventCount'], (d, m) => ({ name: d, count: m[0] }),
    { sortBy: (r) => r.count, topN: 20, limit: 120 });
  const topEvents = {};
  for (const [k, list] of Object.entries(topEventsRaw)) {
    topEvents[k] = list.filter((e) => !NOISE.has(e.name)).slice(0, 8);
  }

  return { configured: true, totals, daily, topPages, channels, devices, countries, topEvents };
}

/* ── Cloudflare ──────────────────────────────────────── */

async function cfGraphql(query, variables) {
  const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${CF_API_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Cloudflare HTTP ${res.status}: ${await res.text()}`);
  return res.json();
}

async function fetchCloudflare() {
  const notes = [];
  const since = isoDay(daysAgo(7));
  const until = isoDay(new Date());

  // Zone 每日總量（free plan 可用；長尾靠 history 累積）
  const dailyQ = `
    query ($zone: String!, $since: Date!, $until: Date!) {
      viewer { zones(filter: { zoneTag: $zone }) {
        httpRequests1dGroups(limit: 10, filter: { date_geq: $since, date_leq: $until }, orderBy: [date_ASC]) {
          dimensions { date }
          sum { requests pageViews bytes cachedRequests cachedBytes threats
                countryMap { requests clientCountryName } }
          uniq { uniques }
        }
      } }
    }`;
  const dailyRes = await cfGraphql(dailyQ, { zone: CF_ZONE_ID, since, until });
  if (dailyRes.errors?.length) throw new Error(`Cloudflare GraphQL: ${JSON.stringify(dailyRes.errors)}`);
  const groups = dailyRes.data?.viewer?.zones?.[0]?.httpRequests1dGroups ?? [];

  const daily = groups.map((g) => ({
    date: g.dimensions.date,
    req: num(g.sum.requests),
    pv: num(g.sum.pageViews),
    uniq: num(g.uniq.uniques),
    bytes: num(g.sum.bytes),
    cachedReq: num(g.sum.cachedRequests),
    cachedBytes: num(g.sum.cachedBytes),
    threats: num(g.sum.threats),
  }));

  const countryAgg = {};
  for (const g of groups) {
    for (const c of g.sum.countryMap ?? []) {
      countryAgg[c.clientCountryName] = (countryAgg[c.clientCountryName] ?? 0) + num(c.requests);
    }
  }
  const topCountries = Object.entries(countryAgg)
    .map(([country, requests]) => ({ country, requests }))
    .sort((a, b) => b.requests - a.requests)
    .slice(0, 10);

  // Host 切分：best-effort（free plan 可能拒絕 adaptive dataset，失敗不炸）
  let hosts = null;
  const hostQ = `
    query ($zone: String!, $since: Time!, $until: Time!) {
      viewer { zones(filter: { zoneTag: $zone }) {
        httpRequestsAdaptiveGroups(limit: 20, filter: { datetime_geq: $since, datetime_leq: $until }, orderBy: [count_DESC]) {
          count
          dimensions { clientRequestHTTPHost }
        }
      } }
    }`;
  try {
    const hostRes = await cfGraphql(hostQ, {
      zone: CF_ZONE_ID,
      since: daysAgo(7).toISOString(),
      until: new Date().toISOString(),
    });
    if (hostRes.errors?.length) throw new Error(JSON.stringify(hostRes.errors));
    hosts = (hostRes.data?.viewer?.zones?.[0]?.httpRequestsAdaptiveGroups ?? []).map((g) => ({
      host: g.dimensions.clientRequestHTTPHost,
      requests: num(g.count),
    }));
  } catch (err) {
    notes.push(`host split unavailable: ${String(err.message).slice(0, 200)}`);
  }

  return { configured: true, daily, topCountries, hosts, notes };
}

/* ── D1 註冊用戶數（Tela Aurea 帳號系統）────────────── */

async function d1Query(sql) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/d1/database/${CF_D1_DB_ID}/query`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${CF_D1_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ sql }),
    }
  );
  if (!res.ok) throw new Error(`D1 query ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = await res.json();
  if (!data.success) throw new Error(`D1: ${JSON.stringify(data.errors).slice(0, 200)}`);
  return data.result?.[0]?.results ?? [];
}

async function fetchRegUsers() {
  // 自動偵測 users 表：實際 schema 的表名與口頭認知常有出入（首跑就撞上
  // no such table: user），改成查 sqlite_master 自選，schema 改名也不會壞。
  const tables = (await d1Query("SELECT name FROM sqlite_master WHERE type='table'"))
    .map((r) => r.name)
    .filter((t) => !t.startsWith('sqlite_') && !t.startsWith('_cf_') && !t.startsWith('d1_'));
  const table = tables.find((t) => /^users?$/i.test(t)) ?? tables.find((t) => /user/i.test(t));
  if (!table) throw new Error(`找不到 users 相關資料表；現有：${tables.join(', ') || '(無)'}`);
  console.log(`  D1 tables: ${tables.join(', ')} → 使用「${table}」`);
  const count = num((await d1Query(`SELECT COUNT(*) AS n FROM "${table}"`))[0]?.n);
  // siteKey：dashboard 把這張卡掛在哪個網站區塊
  return { configured: true, count, table, siteKey: 'dreamcatcher', fetchedAt: new Date().toISOString() };
}

/* ── GitHub ──────────────────────────────────────────── */

const ghHeaders = (token) => ({
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'mattye-dev-analytics',
});

async function ghGet(path, token) {
  const res = await fetch(`https://api.github.com${path}`, { headers: ghHeaders(token) });
  if (!res.ok) {
    const err = new Error(`GitHub ${path} ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

// 純函式：從 /user/repos 的清單挑出要追蹤的 repo 並排序。
// featured 一律保留且依 config 順序置頂；其餘依 fork/archived/EXCLUDE 過濾、stars desc 排序。
export function selectRepos(list, featured, exclude, { includeForks, includeArchived }) {
  const featuredIndex = new Map(featured.map((f, i) => [f.repo, i]));
  const excludeSet = new Set(exclude);
  const picked = list.filter((r) => {
    if (featuredIndex.has(r.full_name)) return true;
    if (excludeSet.has(r.full_name)) return false;
    if (!includeForks && r.fork) return false;
    if (!includeArchived && r.archived) return false;
    return true;
  });
  picked.sort((a, b) => {
    const fa = featuredIndex.get(a.full_name) ?? Infinity;
    const fb = featuredIndex.get(b.full_name) ?? Infinity;
    if (fa !== fb) return fa - fb;
    return num(b.stargazers_count) - num(a.stargazers_count);
  });
  // API 清單裡沒有的 featured repo（例如改名、打錯）仍要保留卡片位置以顯示錯誤
  const missing = featured.filter((f) => !picked.some((r) => r.full_name === f.repo));
  return { picked, missing };
}

// 自動發現 owner 名下所有 repo（token 需授權 All repositories）
async function discoverRepos() {
  const all = [];
  for (let page = 1; page <= 10; page++) {
    const batch = await ghGet(
      `/user/repos?affiliation=owner&per_page=100&sort=pushed&page=${page}`,
      GH_TRAFFIC_TOKEN
    );
    all.push(...batch);
    if (batch.length < 100) break;
  }
  return all;
}

async function fetchGithub() {
  const repos = [];
  const dailyTraffic = {}; // repo → date → {v,vu,c,cu}
  const featuredByName = new Map(FEATURED.map((f) => [f.repo, f]));

  const discovered = await discoverRepos();
  const { picked, missing } = selectRepos(discovered, FEATURED, EXCLUDE, {
    includeForks: INCLUDE_FORKS,
    includeArchived: INCLUDE_ARCHIVED,
  });
  console.log(`  GitHub: 發現 ${discovered.length} 個 repo，追蹤 ${picked.length} 個（排除 fork/archived/EXCLUDE）`);
  for (const f of missing) {
    repos.push({ repo: f.repo, label: f.label, site: f.site, error: 'repo: not found in /user/repos（改名？token 權限？）' });
  }

  for (const meta of picked) {
    const cfg = featuredByName.get(meta.full_name);
    const name = meta.full_name;
    const entry = {
      repo: name,
      label: cfg?.label ?? null,                    // 非 featured 用 repo 名顯示
      site: cfg?.site ?? (meta.homepage || null),
      description: meta.description || null,
      private: !!meta.private,
      archived: !!meta.archived,
      // /user/repos 的每筆已含 meta，不需再打 /repos/{r}。
      // 注意：清單 API 的 watchers_count 其實等於 stars（GitHub API 歷史包袱），
      // 真正的 watchers（subscribers_count）只有單-repo API 才有——不值得每 repo 多一次呼叫，直接不顯示。
      stars: num(meta.stargazers_count),
      forks: num(meta.forks_count),
      watchers: null,
      openIssues: num(meta.open_issues_count),
      pushedAt: meta.pushed_at,
    };
    // traffic 需要 push-level access；403 時保留 stars 區塊
    try {
      const [views, clones, referrers] = await Promise.all([
        ghGet(`/repos/${name}/traffic/views?per=day`, GH_TRAFFIC_TOKEN),
        ghGet(`/repos/${name}/traffic/clones?per=day`, GH_TRAFFIC_TOKEN),
        ghGet(`/repos/${name}/traffic/popular/referrers`, GH_TRAFFIC_TOKEN),
      ]);
      entry.views14 = { count: num(views.count), uniques: num(views.uniques) };
      entry.clones14 = { count: num(clones.count), uniques: num(clones.uniques) };
      entry.referrers = (referrers ?? [])
        .slice(0, 8)
        .map((r) => ({ referrer: r.referrer, count: num(r.count), uniques: num(r.uniques) }));
      const t = (dailyTraffic[name] ??= {});
      for (const v of views.views ?? []) {
        const date = v.timestamp.slice(0, 10);
        (t[date] ??= {}).v = num(v.count);
        t[date].vu = num(v.uniques);
      }
      for (const c of clones.clones ?? []) {
        const date = c.timestamp.slice(0, 10);
        (t[date] ??= {}).c = num(c.count);
        t[date].cu = num(c.uniques);
      }
    } catch (err) {
      entry.traffic = { error: err.status === 403 ? 'no access (PAT lacks push-level access)' : err.message };
    }
    repos.push(entry);
  }
  return { configured: true, fetchedAt: new Date().toISOString(), repos, dailyTraffic };
}

/* ── Gist IO ─────────────────────────────────────────── */

async function gistRead() {
  if (!GIST_TOKEN || !GIST_ID) return null;
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: ghHeaders(GIST_TOKEN),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`gist read ${res.status}: ${await res.text()}`);
  const gist = await res.json();
  const file = gist.files?.['history.ndjson'];
  if (!file) return null;
  // gist API 對 >1MB 檔案截斷 → 一律走 raw_url 取全文
  if (file.truncated) {
    const raw = await fetch(file.raw_url);
    if (!raw.ok) throw new Error(`gist raw ${raw.status}`);
    return raw.text();
  }
  return file.content ?? null;
}

async function gistWrite(summaryJson, historyNdjson) {
  if (!GIST_TOKEN) {
    console.log('  GIST_TOKEN 未設定 → 僅寫入本地 out/，跳過 gist 發布');
    return;
  }
  const files = {
    'summary.json': { content: summaryJson },
    'history.ndjson': { content: historyNdjson },
  };
  if (GIST_ID) {
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: ghHeaders(GIST_TOKEN),
      body: JSON.stringify({ files }),
    });
    if (!res.ok) throw new Error(`gist update ${res.status}: ${await res.text()}`);
    console.log('  gist updated');
  } else {
    const res = await fetch('https://api.github.com/gists', {
      method: 'POST',
      headers: ghHeaders(GIST_TOKEN),
      body: JSON.stringify({
        description: 'mattye.dev analytics data (auto-generated)',
        public: false,
        files,
      }),
    });
    if (!res.ok) throw new Error(`gist create ${res.status}: ${await res.text()}`);
    const gist = await res.json();
    console.log('');
    console.log('  ★ 已建立 secret gist，請完成兩件事：');
    console.log(`    1. repo Actions secret 新增 GIST_ID = ${gist.id}`);
    console.log(`    2. Cloudflare Pages 環境變數 PUBLIC_ANALYTICS_DATA_BASE = https://gist.githubusercontent.com/${gist.owner.login}/${gist.id}/raw`);
    console.log('');
  }
}

/* ── History merge（冪等 upsert）────────────────────── */

function mergeHistory(prevText, ga4, cf, gh, extraSites = [], regUsers = null) {
  const byDate = new Map();
  for (const line of (prevText ?? '').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const row = JSON.parse(trimmed);
      if (row.date) byDate.set(row.date, row);
    } catch { /* 壞行直接略過 */ }
  }
  const rowFor = (date) => {
    if (!byDate.has(date)) byDate.set(date, { v: 1, date });
    return byDate.get(date);
  };

  if (ga4?.daily) {
    // GA 數據 48h 內會修正 → 90 天全窗口重寫，自我修復
    for (const d of ga4.daily) {
      const row = rowFor(d.date);
      row.ga = { users: d.users, views: d.views, sessions: d.sessions };
      const ev = ga4.dailyEvents[d.date];
      if (ev) row.ga.ev = ev;
    }
  }
  if (cf?.daily) {
    for (const d of cf.daily) {
      const { date, ...rest } = d;
      rowFor(date).cf = rest;
    }
  }
  // 額外 GA4 property（gx.<key>），與主站 ga 相同的 90 天全窗口自我修復
  for (const s of extraSites) {
    if (!s?.daily) continue;
    for (const d of s.daily) {
      const row = rowFor(d.date);
      row.gx ??= {};
      row.gx[s.key] = { u: d.users, v: d.views, s: d.sessions };
    }
  }
  // 註冊用戶數：只落當日快照（ru.<siteKey>），累積出成長曲線
  if (regUsers?.configured && typeof regUsers.count === 'number') {
    const row = rowFor(isoDay(new Date()));
    row.ru ??= {};
    row.ru[regUsers.siteKey] = regUsers.count;
  }
  if (gh?.dailyTraffic) {
    for (const [repo, days] of Object.entries(gh.dailyTraffic)) {
      for (const [date, t] of Object.entries(days)) {
        const row = rowFor(date);
        row.gh ??= {};
        row.gh[repo] = { ...row.gh[repo], ...t };
      }
    }
    // stars 只落今日快照
    const today = isoDay(new Date());
    const row = rowFor(today);
    row.gh ??= {};
    for (const r of gh.repos) {
      if (typeof r.stars === 'number') {
        row.gh[r.repo] = { ...row.gh[r.repo], stars: r.stars };
      }
    }
  }

  return [...byDate.values()]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((r) => JSON.stringify(r))
    .join('\n') + '\n';
}

/* ── Main ────────────────────────────────────────────── */

async function runSource(name, enabled, fn) {
  if (!enabled) {
    console.log(`- ${name}: skipped（secret 未設定）`);
    return { configured: false };
  }
  try {
    const result = await fn();
    console.log(`- ${name}: ok`);
    return result;
  } catch (err) {
    console.error(`- ${name}: error — ${err.message}`);
    return { configured: true, error: String(err.message).slice(0, 300) };
  }
}

const ga4 = await runSource('GA4', GA4_SA_KEY && GA4_PROPERTY_ID, fetchGa4);
const cloudflare = await runSource('Cloudflare', CF_API_TOKEN && CF_ZONE_ID, fetchCloudflare);
const github = await runSource('GitHub', GH_TRAFFIC_TOKEN, fetchGithub);

const regUsers = await runSource(
  'D1:users', CF_ACCOUNT_ID && CF_D1_DB_ID && CF_D1_TOKEN, fetchRegUsers
);

// 同 property 的其他網站(config 驅動;與主站共用憑證,主站 GA 未設定時一併跳過)
const ga4Sites = [];
for (const site of GA4_EXTRA_SITES) {
  const result = await runSource(
    `GA4:${site.key}`, GA4_SA_KEY && GA4_PROPERTY_ID, () => fetchGa4Site(site)
  );
  ga4Sites.push({ key: site.key, label: site.label, site: site.site, ...result });
}

let prevHistory = null;
try {
  prevHistory = await gistRead();
  if (prevHistory) console.log(`- gist: 讀到既有 history（${prevHistory.split('\n').filter(Boolean).length} 天）`);
} catch (err) {
  console.error(`- gist read error — ${err.message}（本次視為無歷史）`);
}

const history = mergeHistory(prevHistory, ga4, cloudflare, github, ga4Sites, regUsers);

// summary 不含 script 內部用的中間資料
const { dailyEvents: _e, ...ga4Out } = ga4;
const { dailyTraffic: _t, ...githubOut } = github;
const summary = {
  schemaVersion: SCHEMA_VERSION,
  generatedAt: new Date().toISOString(),
  ga4: ga4Out,
  ga4Sites,
  regUsers,
  cloudflare,
  github: githubOut,
};
const summaryJson = JSON.stringify(summary, null, 2);

mkdirSync('out', { recursive: true });
writeFileSync('out/summary.json', summaryJson);
writeFileSync('out/history.ndjson', history);
console.log(`- out/: summary.json ${summaryJson.length} bytes, history ${history.split('\n').filter(Boolean).length} 天`);

await gistWrite(summaryJson, history);
