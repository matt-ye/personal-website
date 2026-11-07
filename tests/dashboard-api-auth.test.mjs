// node --test tests/dashboard-api-auth.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../workers/dashboard-api/src/index.js';

const TEAM = 'team.cloudflareaccess.com';
const AUD = 'aud-1';
const DATA_BASE = 'https://data.example/raw';
const env = { ACCESS_TEAM_DOMAIN: TEAM, ACCESS_AUD: AUD, ANALYTICS_DATA_BASE: DATA_BASE };
const algo = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]) };

const good = await crypto.subtle.generateKey(algo, true, ['sign', 'verify']);
const attacker = await crypto.subtle.generateKey(algo, true, ['sign', 'verify']);
const jwk = { ...(await crypto.subtle.exportKey('jwk', good.publicKey)), kid: 'k1' };

const b64 = (v) => Buffer.from(v).toString('base64url');
async function sign(claims, { key = good.privateKey, alg = 'RS256' } = {}) {
  const head = `${b64(JSON.stringify({ alg, kid: 'k1' }))}.${b64(JSON.stringify(claims))}`;
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(head));
  return `${head}.${b64(new Uint8Array(sig))}`;
}
const now = () => Math.floor(Date.now() / 1000);
const claims = (over = {}) => ({ aud: [AUD], iss: `https://${TEAM}`, exp: now() + 60, ...over });

const upstream = [];
globalThis.fetch = async (url) => {
  const u = String(url);
  if (u.endsWith('/cdn-cgi/access/certs')) return Response.json({ keys: [jwk] });
  upstream.push(u);
  return new Response('{"ok":true}');
};

const call = (path, token, e = env) =>
  worker.fetch(
    new Request(`https://mattye.dev${path}`, { headers: token ? { 'Cf-Access-Jwt-Assertion': token } : {} }),
    e
  );
const SUMMARY = '/api/dashboard/data/summary.json';

test('a valid token reads the data files', async () => {
  const res = await call(SUMMARY, await sign(claims()));
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('Cache-Control'), 'no-store');
  assert.deepEqual(await res.json(), { ok: true });
});

test('bad tokens are rejected before any data is fetched', async () => {
  upstream.length = 0;
  const cases = {
    missing: undefined,
    garbage: 'x',
    'forged header value': 'a.b.c',
    'wrong signing key': await sign(claims(), { key: attacker.privateKey }),
    'wrong aud': await sign(claims({ aud: ['other'] })),
    'wrong iss': await sign(claims({ iss: 'https://evil.example' })),
    expired: await sign(claims({ exp: now() - 1 })),
    'not yet valid': await sign(claims({ nbf: now() + 60 })),
    'alg none': await sign(claims(), { alg: 'none' }),
  };
  for (const [name, token] of Object.entries(cases)) {
    assert.equal((await call(SUMMARY, token)).status, 403, name);
  }
  assert.equal(upstream.length, 0);
});

test('fails closed when the audience is not configured', async () => {
  const res = await call(SUMMARY, await sign(claims()), { ...env, ACCESS_AUD: '' });
  assert.equal(res.status, 403);
});

test('only allow-listed files are served and upstream URLs never leak', async () => {
  const token = await sign(claims());
  for (const f of ['../secret', 'constructor', '', 'summary.json/x']) {
    assert.equal((await call(`/api/dashboard/data/${f}`, token)).status, 404, f);
  }
  const realFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(`failed at ${DATA_BASE}`, { status: 500 });
  try {
    const res = await call(SUMMARY, token);
    assert.equal(res.status, 502);
    assert.ok(!(await res.text()).includes(DATA_BASE));
  } finally {
    globalThis.fetch = realFetch;
  }
});
