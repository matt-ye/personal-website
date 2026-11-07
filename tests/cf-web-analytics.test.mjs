// node --test tests/cf-web-analytics.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { splitRanges, shapeWindow, RETENTION_DAYS } from '../scripts/cf-web-analytics.mjs';

const NOW = new Date('2026-11-07T00:00:00Z');
const row = (count, visits, dimensions = {}) => ({ count, sum: { visits }, dimensions });

test('splitRanges keeps each chunk within the API limit and leaves no gap', () => {
  const ranges = splitRanges(180, NOW);
  assert.equal(ranges.length, 2);
  assert.equal(ranges[0].until, NOW.toISOString());
  assert.equal(ranges[1].until, ranges[0].since);
  for (const r of ranges) assert.ok(new Date(r.until) - new Date(r.since) <= 90 * 86_400_000);
});

test('splitRanges never asks for more than retention', () => {
  const ranges = splitRanges(365, NOW);
  const span = (new Date(ranges[0].until) - new Date(ranges.at(-1).since)) / 86_400_000;
  assert.equal(span, RETENTION_DAYS);
});

test('shapeWindow merges chunks, sorts days and labels direct traffic', () => {
  const empty = { total: [], daily: [], paths: [], referers: [], devices: [], countries: [] };
  const a = { ...empty,
    total: [row(5, 3)],
    daily: [row(2, 1, { date: '2026-11-02' }), row(3, 2, { date: '2026-11-03' })],
    referers: [row(4, 2, { refererHost: '' }), row(1, 1, { refererHost: 'l.threads.com' })],
  };
  const b = { ...empty, total: [row(4, 2)], daily: [row(4, 2, { date: '2026-11-02' })], referers: [row(4, 2, { refererHost: '' })] };
  const out = shapeWindow([a, b]);
  assert.deepEqual(out.totals, { users: 5, views: 9, sessions: 5 });
  assert.deepEqual(out.daily.map((d) => [d.date, d.views]), [['2026-11-02', 6], ['2026-11-03', 3]]);
  assert.deepEqual(out.channels, [{ channel: 'Direct', sessions: 4 }, { channel: 'l.threads.com', sessions: 1 }]);
});

test('shapeWindow returns zero totals when no data', () => {
  const out = shapeWindow([{ total: [], daily: [], paths: [], referers: [], devices: [], countries: [] }]);
  assert.deepEqual(out.totals, { users: 0, views: 0, sessions: 0 });
  assert.deepEqual(out.daily, []);
});
