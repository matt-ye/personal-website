// 每個 repo 的待處理狀態（dashboard 的「需要處理」清單）。
// 三個查詢各自失敗不互相影響：token 少權限時該欄回 null，dashboard 顯示「—」，
// 不會誤報成 0。機器人開的 issue 是定期報告、刻意留著當紀錄，不算待處理。

const isBot = (x) => x?.user?.type === 'Bot';
const FAILED = new Set(['failure', 'timed_out', 'startup_failure']);

// API 由新到舊排序。每個 workflow 只看最新一次：舊的失敗後來修好了就不該再報。
// ponytail: 只看 GitHub Actions；fine-grained token 沒有 Checks 權限，外部檢查
// （如 Cloudflare Pages）的失敗看不到。
function latestPerWorkflow(runs) {
  const seen = new Set();
  return runs.filter((r) => !seen.has(r.workflow_id) && seen.add(r.workflow_id));
}

export function summarizeHealth({ pulls, issues, runs }) {
  const ciState = () => {
    if (!runs) return null;
    if (!runs.length) return 'none';
    const latest = latestPerWorkflow(runs);
    if (latest.some((r) => FAILED.has(r.conclusion))) return 'failure';
    if (latest.some((r) => r.status !== 'completed')) return 'pending';
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
  const [pulls, issues, actions] = await Promise.all([
    safe(`/repos/${name}/pulls?state=open&per_page=100`),
    safe(`/repos/${name}/issues?state=open&per_page=100`),
    branch ? safe(`/repos/${name}/actions/runs?branch=${encodeURIComponent(branch)}&per_page=30`) : null,
  ]);
  return summarizeHealth({ pulls, issues, runs: actions?.workflow_runs ?? null });
}
