// node --test tests/repo-health.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeHealth, fetchRepoHealth } from '../scripts/repo-health.mjs';

const human = { type: 'User' };
const bot = { type: 'Bot' };

test('separates human, draft and bot PRs, and ignores bot issues and PRs listed as issues', () => {
  const h = summarizeHealth({
    pulls: [{ user: human }, { user: human, draft: true }, { user: bot }, { user: bot }],
    issues: [{ user: human }, { user: bot }, { user: human, pull_request: {} }],
    runs: [],
  });
  assert.deepEqual(h, { prs: 1, drafts: 1, botPrs: 2, issues: 1, ci: 'none' });
});

test('CI uses the newest run of each workflow: failure wins, then pending, then success', () => {
  const ci = (runs) => summarizeHealth({ pulls: [], issues: [], runs }).ci;
  const run = (workflow_id, status, conclusion) => ({ workflow_id, status, conclusion });
  assert.equal(ci([run(1, 'completed', 'success'), run(2, 'completed', 'failure')]), 'failure');
  assert.equal(ci([run(1, 'completed', 'success'), run(2, 'in_progress', null)]), 'pending');
  assert.equal(ci([run(1, 'completed', 'skipped')]), 'success');
  // 同一 workflow 舊的失敗已被新的成功蓋過
  assert.equal(ci([run(1, 'completed', 'success'), run(1, 'completed', 'failure')]), 'success');
});

test('a forbidden query yields null, never a false zero, and does not sink the others', async () => {
  const get = async (path) => {
    if (path.includes('/pulls')) throw Object.assign(new Error('403'), { status: 403 });
    if (path.includes('/issues')) return [{ user: human }];
    throw Object.assign(new Error('403'), { status: 403 });
  };
  assert.deepEqual(await fetchRepoHealth('o/r', 'main', get), {
    prs: null, drafts: null, botPrs: null, issues: 1, ci: null,
  });
});
