# Analytics Pipeline 設定手冊

`/dashboard` 儀表板的資料管線：GitHub Actions 每日（01:30 UTC = 09:30 台北）執行
`scripts/fetch-analytics.mjs`，抓取 GA4 + Cloudflare + GitHub 數據後寫入 secret gist，
dashboard 頁面在瀏覽器端讀取 gist 渲染。

```
GA4 Data API ─┐
Cloudflare  ──┼─→ fetch-analytics.mjs ─→ secret gist（summary.json + history.ndjson）
GitHub API  ──┘        (GitHub Actions)         ↑ 每日 upsert，長期累積
                                                └─← /dashboard 瀏覽器端 fetch
```

任一 secret 未設定時，該來源自動跳過、其餘照常；dashboard 對缺少的區塊顯示「尚未設定」。
所以以下步驟**可以分次做**，不會擋住任何功能。

---

## 一次性設定步驟（全部約 45–50 分鐘）

### 1. Google Analytics Data API（~15 分鐘）

1. 到 [console.cloud.google.com](https://console.cloud.google.com) 建立專案（或用既有專案）
2. 「API 和服務」→ 啟用 **Google Analytics Data API**
3. 「IAM 與管理」→「服務帳戶」→ 建立服務帳戶（名稱隨意，如 `analytics-reader`），
   不用授予任何專案角色 → 建立金鑰（JSON）→ 下載
4. 到 [analytics.google.com](https://analytics.google.com) → Admin → Property →
   **Property Access Management** → 加入服務帳戶的 email（`xxx@xxx.iam.gserviceaccount.com`），
   角色選 **Viewer**
5. Admin → Property Settings → 記下 **Property ID**（純數字，**不是** `G-1RKL72DPPW` 那個）

### 2. Cloudflare Analytics API（~5 分鐘）

1. [dash.cloudflare.com](https://dash.cloudflare.com) → My Profile → API Tokens → Create Token
2. 權限：**Zone → Analytics → Read**，Zone Resources 限定 `mattye.dev`
3. Zone ID 在 mattye.dev zone 的 Overview 頁右下角

### 3. GitHub tokens（~7 分鐘，需要兩把）

1. **fine-grained PAT**（[github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens)）：
   - Repository access：**All repositories**（pipeline 會自動發現 owner 名下所有 repo）
   - Permissions：**Administration: Read-only** + **Metadata: Read-only**
     （traffic API 需要 push-level access，Administration read 即可）
   - 注意：fine-grained PAT 最長一年，到期要重發並更新 secret
2. **classic PAT**（[github.com/settings/tokens](https://github.com/settings/tokens)）：
   只勾 **gist** scope（gist API 不支援 fine-grained PAT）

### 4. 存入 Actions Secrets（~5 分鐘）

repo Settings → Secrets and variables → Actions → New repository secret：

| Secret 名稱 | 內容 |
|---|---|
| `GA4_SA_KEY` | 服務帳戶 JSON 金鑰**全文** |
| `GA4_PROPERTY_ID` | GA4 property 數字 ID |
| `CF_API_TOKEN` | Cloudflare API token |
| `CF_ZONE_ID` | mattye.dev zone ID |
| `GH_TRAFFIC_TOKEN` | fine-grained PAT（名稱不能以 `GITHUB_` 開頭，是 Actions 的保留字） |
| `GIST_TOKEN` | classic PAT（gist scope） |
| `GIST_ID` | 首次執行後補（見下一步） |

### 5. 首次執行（~3 分鐘）

1. Actions → **analytics** → Run workflow
2. 看 log：首跑會自動建立 secret gist 並印出兩行指示——
   - `GIST_ID = <id>` → 存成 Actions secret
   - `PUBLIC_ANALYTICS_DATA_BASE = https://gist.githubusercontent.com/<user>/<id>/raw` → 下一步用
3. 再手動跑一次確認 gist 正常 upsert（history 不會出現重複日期）

### 6. Cloudflare Pages 環境變數（~2 分鐘）

Pages 專案 → Settings → Environment variables →
新增 `PUBLIC_ANALYTICS_DATA_BASE`（Production 與 Preview 都加），值為上一步的 raw base URL。
下次 deploy 後 `/dashboard` 就會讀到資料。

### 7. 私人子網域三件組（~15 分鐘）

目標：`dashboard.mattye.dev` 進入、只有 owner 能看。

1. **DNS**：mattye.dev zone → DNS → 新增記錄
   `A` `dashboard` → `192.0.2.1`（佔位 IP，Proxied 開啟——流量只會進轉址規則，不會真的連到這個 IP）
2. **轉址**：Rules → Redirect Rules → Create rule
   - When：Hostname equals `dashboard.mattye.dev`
   - Then：Dynamic redirect 301 → `concat("https://mattye.dev/dashboard", "")`
     （或 static URL `https://mattye.dev/dashboard`）
3. **Cloudflare Access**（[one.dash.cloudflare.com](https://one.dash.cloudflare.com)，免費方案即可）：
   - Access → Applications → Add an application → Self-hosted
   - Application domain：`mattye.dev`，Path：`dashboard`
   - Policy：Allow → Include → Emails → `a0972210123@gmail.com`
   - 登入方式留預設 One-time PIN 即可（開頁 → 輸入 email → 收驗證碼）

### 8. GA4 key events（PR 1 merge 後，~3 分鐘）

GA4 Admin → Events → 等自訂事件出現後（通常 24h 內），將下列標為 **key event**：
`click_github`、`click_project`、`donate_start`（其餘視需要）。

---

## 資料格式

### `summary.json`（dashboard 主要讀這份）

```jsonc
{
  "schemaVersion": 1,
  "generatedAt": "2026-07-24T01:35:00Z",
  "ga4": {
    "configured": true,            // false = secret 未設定；有 error 欄位 = 本次抓取失敗
    "totals": { "d7": {...}, "d28": {...}, "d90": {...} },  // users/newUsers/sessions/views/engagementRate/engagementSec
    "daily": [{ "date": "2026-07-23", "users": 12, "views": 31, "sessions": 14 }],
    "topPages": [{ "path": "/", "views": 120, "users": 88, "engagementSec": 5400 }],
    "channels": [{ "channel": "Organic Search", "sessions": 40, "users": 33 }],
    "sources": [{ "source": "google", "medium": "organic", "sessions": 40 }],
    "countries": [{ "country": "Taiwan", "users": 50 }],
    "devices": [{ "device": "mobile", "users": 41 }],
    "hosts": [{ "host": "mattye.dev", "users": 70, "views": 150, "sessions": 80 }],
    "events": [{ "name": "click_github", "d28": 12, "d90": 31, "topPages": [{ "path": "/", "count": 5 }] }]
  },
  "cloudflare": {
    "configured": true,
    "daily": [{ "date": "2026-07-23", "req": 900, "pv": 300, "uniq": 80, "bytes": 1, "cachedReq": 700, "cachedBytes": 1, "threats": 0 }],
    "topCountries": [{ "country": "TW", "requests": 900 }],
    "hosts": [{ "host": "mattye.dev", "requests": 1200 }],  // null = free plan 不支援 host 切分
    "notes": []
  },
  "github": {
    "configured": true,
    "repos": [{
      "repo": "matt-ye/dreamcatcher", "label": { "zh": "捕夢網產生器", "en": "Dreamcatcher" },
      "site": "https://...", "stars": 5, "forks": 1, "watchers": 2, "openIssues": 0,
      "views14": { "count": 40, "uniques": 12 }, "clones14": { "count": 3, "uniques": 2 },
      "referrers": [{ "referrer": "mattye.dev", "count": 10, "uniques": 4 }]
    }]
  }
}
```

### `history.ndjson`（每日一行，長期趨勢）

```jsonc
{"v":1,"date":"2026-07-23",
 "ga":{"users":12,"views":31,"sessions":14,"ev":{"click_github":2}},
 "cf":{"req":900,"pv":300,"uniq":80,"bytes":1,"cachedReq":700,"cachedBytes":1,"threats":0},
 "gh":{"matt-ye/dreamcatcher":{"v":10,"vu":4,"c":1,"cu":1,"stars":5}}}
```

- 以日期為 key 做 per-source 冪等 upsert：GA 每次重寫近 90 天（GA 數據 48h 內會修正，自我修復）、
  CF 近 7 天、GitHub traffic 近 14 天、stars 只落當日快照
- 各來源保留原生日界：GA = property 時區、CF / GitHub = UTC（趨勢用途可容忍）
- dashboard 容錯規則：忽略未知欄位；缺欄位或 `configured:false` 視為未設定；
  `schemaVersion` 大於已知版本才拒讀

---

## 維運備忘

- **追蹤清單**：pipeline 自動發現 owner 名下所有 repo（預設排除 fork 與 archived）。
  要隱藏個別 repo → 加進 `scripts/analytics-config.mjs` 的 `EXCLUDE`；
  要給中英標籤 / 自訂 site / 置頂 → 加進 `FEATURED`；
  fork / archived 要不要納入 → `INCLUDE_FORKS` / `INCLUDE_ARCHIVED`
- **改排程**：`.github/workflows/analytics.yml` 的 cron（UTC）
- **立即更新資料**：Actions → analytics → Run workflow
- **PAT 到期**（fine-grained 最長一年）：重發後更新 `GH_TRAFFIC_TOKEN` secret
- **gist 壞掉**：gist 有版本歷史（Revisions），可回復；或刪掉 `GIST_ID` secret 讓下次執行重建
- **排程自動停用**：repo 60 天無 commit 時 GitHub 會停用排程 workflow（此 repo 活躍，實際上不會發生；
  真發生時 Actions 頁會有 re-enable 按鈕）
- **GA4 配額**：本管線每日用量 <1%（25k tokens/日），不需擔心
