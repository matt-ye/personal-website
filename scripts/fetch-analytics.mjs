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

const SCHEMA_VERSION = 1;
const env = (k) => (process.env[k] ?? '').trim() || null;

const GA4_SA_KEY = env('GA4_SA_KEY');
const GA4_PROPERTY_ID = env('GA4_PROPERTY_ID');
const CF_API_TOKEN = env('CF_API_TOKEN');
const CF_ZONE_ID = env('CF_ZONE_ID');
const GH_TRAFFIC_TOKEN = env('GH_TRAFFIC_TOKEN');
const GIST_TOKEN = env('GIST_TOKEN');
const GIST_ID = env('GIST_ID');

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

async function fetchGa4() {
  const token = await googleToken(JSON.parse(GA4_SA_KEY));
  const D28 = [{ startDate: '28daysAgo', endDate: 'today' }];
  const dims = (...names) => names.map((name) => ({ name }));
  const mets = (...names) => names.map((name) => ({ name }));
  const byMetricDesc = (name) => [{ metric: { metricName: name }, desc: true }];
  const SCOPE = gaScope(MAIN_STREAM_ID, HOSTS);

  // 1) 7/28/90 天總覽（單請求三個 dateRanges；rows 帶 dateRange 維度 date_range_N）
  const totalsRes = await ga4Report(token, 'totals', {
    dateRanges: [
      { startDate: '7daysAgo', endDate: 'today' },
      { startDate: '28daysAgo', endDate: 'today' },
      { startDate: '90daysAgo', endDate: 'today' },
    ],
    metrics: mets(
      'activeUsers', 'newUsers', 'sessions', 'screenPageViews',
      'engagementRate', 'userEngagementDuration'
    ),
    dimensionFilter: SCOPE,
    returnPropertyQuota: true,
  });
  const totals = { d7: null, d28: null, d90: null };
  for (const row of totalsRes.rows ?? []) {
    const key = { date_range_0: 'd7', date_range_1: 'd28', date_range_2: 'd90' }[
      row.dimensionValues?.[0]?.value
    ];
    if (!key) continue;
    const m = row.metricValues.map((v) => num(v.value));
    totals[key] = {
      users: m[0], newUsers: m[1], sessions: m[2], views: m[3],
      engagementRate: m[4], engagementSec: m[5],
    };
  }
  const quota = totalsRes.propertyQuota?.tokensPerDay;
  if (quota) console.log(`  GA4 quota: ${quota.consumed}/${quota.consumed + quota.remaining} tokens/day`);

  // 2) 90 天逐日趨勢
  const dailyRes = await ga4Report(token, 'daily', {
    dateRanges: [{ startDate: '90daysAgo', endDate: 'today' }],
    dimensions: dims('date'),
    metrics: mets('activeUsers', 'screenPageViews', 'sessions'),
    orderBys: [{ dimension: { dimensionName: 'date' } }],
    dimensionFilter: SCOPE,
    limit: 100,
  });
  const daily = (dailyRes.rows ?? []).map((r) => ({
    date: gaDate(r.dimensionValues[0].value),
    users: num(r.metricValues[0].value),
    views: num(r.metricValues[1].value),
    sessions: num(r.metricValues[2].value),
  }));

  // 3) Top pages（28 天）
  const pagesRes = await ga4Report(token, 'topPages', {
    dateRanges: D28,
    dimensions: dims('pagePath'),
    metrics: mets('screenPageViews', 'activeUsers', 'userEngagementDuration'),
    orderBys: byMetricDesc('screenPageViews'),
    dimensionFilter: SCOPE,
    limit: 30,
  });
  const topPages = (pagesRes.rows ?? []).map((r) => ({
    path: r.dimensionValues[0].value,
    views: num(r.metricValues[0].value),
    users: num(r.metricValues[1].value),
    engagementSec: num(r.metricValues[2].value),
  }));

  // 4) 流量管道 + 原始來源
  const channelsRes = await ga4Report(token, 'channels', {
    dateRanges: D28,
    dimensions: dims('sessionDefaultChannelGroup'),
    metrics: mets('sessions', 'activeUsers'),
    orderBys: byMetricDesc('sessions'),
    dimensionFilter: SCOPE,
  });
  const channels = (channelsRes.rows ?? []).map((r) => ({
    channel: r.dimensionValues[0].value,
    sessions: num(r.metricValues[0].value),
    users: num(r.metricValues[1].value),
  }));
  const sourcesRes = await ga4Report(token, 'sources', {
    dateRanges: D28,
    dimensions: dims('sessionSource', 'sessionMedium'),
    metrics: mets('sessions'),
    orderBys: byMetricDesc('sessions'),
    dimensionFilter: SCOPE,
    limit: 15,
  });
  const sources = (sourcesRes.rows ?? []).map((r) => ({
    source: r.dimensionValues[0].value,
    medium: r.dimensionValues[1].value,
    sessions: num(r.metricValues[0].value),
  }));

  // 5) 國家 / 裝置
  const countriesRes = await ga4Report(token, 'countries', {
    dateRanges: D28,
    dimensions: dims('country'),
    metrics: mets('activeUsers'),
    orderBys: byMetricDesc('activeUsers'),
    dimensionFilter: SCOPE,
    limit: 12,
  });
  const countries = (countriesRes.rows ?? []).map((r) => ({
    country: r.dimensionValues[0].value,
    users: num(r.metricValues[0].value),
  }));
  const devicesRes = await ga4Report(token, 'devices', {
    dateRanges: D28,
    dimensions: dims('deviceCategory'),
    metrics: mets('activeUsers'),
    dimensionFilter: SCOPE,
  });
  const devices = (devicesRes.rows ?? []).map((r) => ({
    device: r.dimensionValues[0].value,
    users: num(r.metricValues[0].value),
  }));

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

  // 7) hostName 切分（僅在多站掛同 property 後才有多列）
  const hostsRes = await ga4Report(token, 'hosts', {
    dateRanges: D28,
    dimensions: dims('hostName'),
    metrics: mets('activeUsers', 'screenPageViews', 'sessions'),
    dimensionFilter: SCOPE,
  });
  const hosts = (hostsRes.rows ?? [])
    .map((r) => ({
      host: r.dimensionValues[0].value,
      users: num(r.metricValues[0].value),
      views: num(r.metricValues[1].value),
      sessions: num(r.metricValues[2].value),
    }))
    .filter((h) => HOSTS.includes(h.host));

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
    totals, daily, topPages, channels, sources, countries, devices,
    hosts, events: Object.values(events), dailyEvents,
  };
}

// 同 property 底下其他網站的輕量報表組（例如捕夢網）：
// 以 streamId + hostName 切分；總覽 + 90 天逐日 + top pages + 管道 + 國家 + 站方熱門事件
async function fetchGa4Site(site) {
  const token = await googleToken(JSON.parse(GA4_SA_KEY));
  const D28 = [{ startDate: '28daysAgo', endDate: 'today' }];
  const dims = (...names) => names.map((name) => ({ name }));
  const mets = (...names) => names.map((name) => ({ name }));
  const byMetricDesc = (name) => [{ metric: { metricName: name }, desc: true }];
  const SCOPE = gaScope(site.streamId, site.hosts);
  const report = (label, body) =>
    ga4Report(token, `${label}@${site.key}`, { ...body, dimensionFilter: body.dimensionFilter ?? SCOPE });

  const totalsRes = await report('totals', {
    dateRanges: [
      { startDate: '7daysAgo', endDate: 'today' },
      { startDate: '28daysAgo', endDate: 'today' },
      { startDate: '90daysAgo', endDate: 'today' },
    ],
    metrics: mets('activeUsers', 'newUsers', 'sessions', 'screenPageViews', 'engagementRate'),
  });
  const totals = { d7: null, d28: null, d90: null };
  for (const row of totalsRes.rows ?? []) {
    const key = { date_range_0: 'd7', date_range_1: 'd28', date_range_2: 'd90' }[
      row.dimensionValues?.[0]?.value
    ];
    if (!key) continue;
    const m = row.metricValues.map((v) => num(v.value));
    totals[key] = { users: m[0], newUsers: m[1], sessions: m[2], views: m[3], engagementRate: m[4] };
  }

  const dailyRes = await report('daily', {
    dateRanges: [{ startDate: '90daysAgo', endDate: 'today' }],
    dimensions: dims('date'),
    metrics: mets('activeUsers', 'screenPageViews', 'sessions'),
    orderBys: [{ dimension: { dimensionName: 'date' } }],
    limit: 100,
  });
  const daily = (dailyRes.rows ?? []).map((r) => ({
    date: gaDate(r.dimensionValues[0].value),
    users: num(r.metricValues[0].value),
    views: num(r.metricValues[1].value),
    sessions: num(r.metricValues[2].value),
  }));

  const pagesRes = await report('topPages', {
    dateRanges: D28,
    dimensions: dims('pagePath'),
    metrics: mets('screenPageViews', 'activeUsers'),
    orderBys: byMetricDesc('screenPageViews'),
    limit: 15,
  });
  const topPages = (pagesRes.rows ?? []).map((r) => ({
    path: r.dimensionValues[0].value,
    views: num(r.metricValues[0].value),
    users: num(r.metricValues[1].value),
  }));

  const channelsRes = await report('channels', {
    dateRanges: D28,
    dimensions: dims('sessionDefaultChannelGroup'),
    metrics: mets('sessions'),
    orderBys: byMetricDesc('sessions'),
  });
  const channels = (channelsRes.rows ?? []).map((r) => ({
    channel: r.dimensionValues[0].value,
    sessions: num(r.metricValues[0].value),
  }));

  const countriesRes = await report('countries', {
    dateRanges: D28,
    dimensions: dims('country'),
    metrics: mets('activeUsers'),
    orderBys: byMetricDesc('activeUsers'),
    limit: 8,
  });
  const countries = (countriesRes.rows ?? []).map((r) => ({
    country: r.dimensionValues[0].value,
    users: num(r.metricValues[0].value),
  }));

  const eventsRes = await report('topEvents', {
    dateRanges: D28,
    dimensions: dims('eventName'),
    metrics: mets('eventCount'),
    orderBys: byMetricDesc('eventCount'),
    limit: 20,
  });
  // 濾掉每站都有的雜訊事件，留下站方自己的（例如購買、加入購物車）
  const NOISE = new Set(['page_view', 'session_start', 'first_visit', 'user_engagement', 'scroll']);
  const topEvents = (eventsRes.rows ?? [])
    .map((r) => ({ name: r.dimensionValues[0].value, count: num(r.metricValues[0].value) }))
    .filter((e) => !NOISE.has(e.name))
    .slice(0, 8);

  return { configured: true, totals, daily, topPages, channels, countries, topEvents };
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

function mergeHistory(prevText, ga4, cf, gh, extraSites = []) {
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

const history = mergeHistory(prevHistory, ga4, cloudflare, github, ga4Sites);

// summary 不含 script 內部用的中間資料
const { dailyEvents: _e, ...ga4Out } = ga4;
const { dailyTraffic: _t, ...githubOut } = github;
const summary = {
  schemaVersion: SCHEMA_VERSION,
  generatedAt: new Date().toISOString(),
  ga4: ga4Out,
  ga4Sites,
  cloudflare,
  github: githubOut,
};
const summaryJson = JSON.stringify(summary, null, 2);

mkdirSync('out', { recursive: true });
writeFileSync('out/summary.json', summaryJson);
writeFileSync('out/history.ndjson', history);
console.log(`- out/: summary.json ${summaryJson.length} bytes, history ${history.split('\n').filter(Boolean).length} 天`);

await gistWrite(summaryJson, history);
