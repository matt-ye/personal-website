// 每個 repo 的待處理狀態（dashboard 的「需要處理」清單）。
// 三個查詢各自失敗不互相影響：token 少權限時該欄回 null，dashboard 顯示「—」，
// 不會誤報成 0。機器人開的 issue 是定期報告、刻意留著當紀錄，不算待處理。

const isBot = (x) => x?.user?.type === 'Bot';
const FAILED = new Set(['failure', 'timed_out', 'startup_failure']);

export function summarizeHealth({ pulls, issues, checkRuns }) {
  const ciState = () => {
    if (!checkRuns) return null;
    if (!checkRuns.length) return 'none';
    if (checkRuns.some((c) => FAILED.has(c.conclusion))) return 'failure';
    if (checkRuns.some((c) => c.status !== 'completed')) return 'pending';
    return 'success';
  };
  return {
    prs: pulls ? pulls.filter((p) => !isBot(p) && !p.draft).length : null,
    drafts: pulls ? pulls.filter((p) => !isBot(p) && p.draft).length : null,
    botPrs: pulls ? pulls.filter(isBot).length : null,
    issues: issues ? issues.filter((i) => !i.pull_request && !isBot(i)).length : null,
    ci: ciState(),
  };
}

// ponytail: 每項只讀第一頁 100 筆，個人 repo 夠用；超過時數字會偏低。
export async function fetchRepoHealth(name, branch, get) {
  const safe = (path) => get(path).catch(() => null);
  const [pulls, issues, checks] = await Promise.all([
    safe(`/repos/${name}/pulls?state=open&per_page=100`),
    safe(`/repos/${name}/issues?state=open&per_page=100`),
    branch ? safe(`/repos/${name}/commits/${encodeURIComponent(branch)}/check-runs?per_page=100`) : null,
  ]);
  return summarizeHealth({ pulls, issues, checkRuns: checks?.check_runs ?? null });
}
