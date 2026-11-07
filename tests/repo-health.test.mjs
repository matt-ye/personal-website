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
    checkRuns: [],
  });
  assert.deepEqual(h, { prs: 1, drafts: 1, botPrs: 2, issues: 1, ci: 'none' });
});

test('CI: any failure wins, then pending, then success', () => {
  const ci = (checkRuns) => summarizeHealth({ pulls: [], issues: [], checkRuns }).ci;
  assert.equal(ci([{ status: 'completed', conclusion: 'success' }, { status: 'completed', conclusion: 'failure' }]), 'failure');
  assert.equal(ci([{ status: 'completed', conclusion: 'success' }, { status: 'in_progress', conclusion: null }]), 'pending');
  assert.equal(ci([{ status: 'completed', conclusion: 'skipped' }]), 'success');
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
