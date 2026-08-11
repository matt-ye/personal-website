# HANDOFF：SEO／AEO 優化工作流

**寫給**：接手 SEO／AEO 優化的 session（跨 session 交接文件，內容自足，不依賴任何對話紀錄）
**更新**：2026-08-11。接手後若完成任何項目，**請直接更新本檔**（勾掉＋一行結果），這裡是唯一的進度真相。

---

## 30 秒背景

mattye.dev，Astro 6 靜態站，Cloudflare Pages（push `main` 自動部署）。
架構速覽見 [`README.md`](../README.md)；**開發規則見 [`CLAUDE.md`](../CLAUDE.md)——每個需求開新 PR、owner 說「可以 merge」才 merge、merge 用 merge commit、禁用 JS/CSS framework。**

三份要先讀的文件（都在 repo 裡，不用翻對話）：

1. [`docs/seo-architecture-audit.md`](seo-architecture-audit.md) — 架構級問題總盤點＋優先序（本 handoff 的 TODO 依據）
2. [`docs/i18n-architecture-plan.md`](i18n-architecture-plan.md) — 中英分頁完整規劃
3. [PR #168](https://github.com/matt-ye/personal-website/pull/168) 說明 — metadata 層已修完的範圍（別重做）

---

## 已完成（不要重做）

- ✅ 38 個靜態頁的 OG／twitter／JSON-LD 補齊，全站 Person `@id` 串成同一實體（#168，2026-07-26）
- ✅ 全站內部連結 trailing-slash 統一（#181）；sitemap lastmod 35/60（#183）；GA4 注入 40 個靜態頁（#182）
- ✅ 首頁專案導覽（點擊深度 3→2）；`/projects/agent-skills/` 分頁（#186）
- ✅ GSC：sitemap 已重送（60 頁已發現）、三筆索引問題已按「驗證修正」（2026-08-10，驗證中，3–14 天）
- ✅ 全站連結健檢＋272 條外連逐條驗證（#189，**draft 待 owner merge**——動工前先確認它進了 main，`scripts/check-links.mjs` 的全站版在那個 branch 上）

## TODO（依 audit 文件的優先序）

### 1. 【擋在最前面的決策】問題 A：Sheet 驅動內容靜態化

`index`／`coaching`／`speeches` 三頁核心內容是瀏覽器端 fetch Google Sheet（gviz CSV）。
實測：`/speeches/` 對不執行 JS 的爬蟲只有 1,113 字可見，**61 場演講零場在 HTML 裡**；LLM 爬蟲（GPTBot／ClaudeBot）完全看不到——AEO 上「150+ 場演講」不存在。

- [ ] **等 owner 選案**：A-1 build 期抓 Sheet 靜態化（audit 文件建議）／A-2 只補 JSON-LD 快照／A-3 不動
- [ ] 若 A-1，還要 owner 答：rebuild 用手動 deploy hook 還是每日排程（取決於 Sheet 更新頻率）
- [ ] A-1 實作要點：fetch 搬進 Astro frontmatter（build 期執行）；篩選互動保留（資料改 inline JSON）；**Sheet 掛掉的 fallback**（用上次快照，別讓 build 紅）；`_eng` 缺值退回中文並標 `lang="zh-TW"`

### 2. 小件（可同一批 PR）

- [x] **RSS feed**（`@astrojs/rss`）——已完成 2026-08-11：`/rss.xml`，來源與 /writing 共用 `src/lib/writing.ts`
- [x] **GSC verification meta tag**——已確認：驗證非走 meta tag（2026-08-08 已生效），BaseLayout 不需要也不應該再加
- [x] CLAUDE.md 待辦清單同步勾掉已完成項（GA4／GSC／照片／sitemap／RSS）

### 3. i18n（等 1 做完再動，順序有相依）

**為什麼要等**：A-1 把 Sheet 資料搬到 build 期後，`/en/speeches` 直接在 build 期選 `_eng` 欄位；先做 i18n 的話 Sheet 頁要做兩次。

- [ ] **方案 C 先行**：一頁英文 landing（`/en/`），成本約 B 的十分之一，GA4 觀察一兩個月流量再決定升級
- [ ] 升級方案 B 前，owner 要答 i18n 文件第 7 節的四個問題（翻幾篇文章、38 靜態頁怎麼辦…）
- [ ] 方案 B 的 Phase 拆解照 i18n 文件第 5 節，**坑清單在第 6 節先讀**（localStorage vs 網址、diet-calculator 是重災區、GA4 path 斷層）

### 4. 長期掛著（不擋上面）

- [ ] 40 個靜態頁遷移成 Astro 頁（metadata 債的根治；獨立大工程，單獨開計畫）

---

## 工作規範摘要（詳見 CLAUDE.md，這裡只列最容易踩的）

1. **不直接 push main**；一需求一 PR；標題 `feat:`／`fix:`／`content:`／`style:`／`chore:`
2. **owner 明說「可以 merge」才 merge**；merge 前核對遠端 SHA 與本地一致；**固定 merge commit**（非 squash）
3. 改動會影響輸出 HTML 的東西後，跑 `npm run build` ＋ `node scripts/check-links.mjs --internal`（站內 0 錯才算過）
4. 驗證要看**建置產物**不是原始碼——這站有 build 期注入（GA、sitemap lastmod、課程週次自動連結），只看 src 會漏
5. 外連驗證的完整方法論（狀態碼≠死活、Crossref／Wayback／RDAP 通道、處置四分法）在 owner 知識庫：`D:\Second_Brain_of_Matt\PROMPT_連結驗證與來源查核SOP.md`（本機 session 才讀得到；cloud session 讀 #189 的 PR 說明與留言也夠）

## 已知陷阱（這個 repo 特有）

- 中英文目前是**同頁雙 DOM**（`<T>` 元件 390 處＋CSS 切換）——爬蟲會讀到「AI＆認知科學研究AI & Cognitive Science Research」混雜字串。這正是 i18n 計畫要解的，**不要**試圖在現機制上小修
- `grep -c` 數行不數次數；建置產物多為單行 HTML，計數用 `grep -o | wc -l`
- Windows 環境：Python 寫檔預設 CRLF，餵給 bash/curl 前要 `newline='\n'`
- `link-check` CI 只在動到特定 paths 時觸發（#189 merge 後放寬到 `src/**`）；外連 272 條約跑 2–3 分鐘
- Sheet 的 gviz 端點對 Google 爬蟲可抓（robots.txt `Allow: /spreadsheet`），所以問題 A 的正確表述是「**只有會執行 JS 的 Google 延遲看到**，Bing／LLM／預覽卡看不到」——選案時別把它當成「Google 完全看不到」

## 進行中的 PR（接手時先看狀態）

| PR | 內容 | 狀態（2026-08-11） |
|---|---|---|
| #197 | 本盤點文件＋README | draft，待 owner 看 |
| #189 | 連結健檢全站化＋驗證報告 | draft，待 owner merge——**你的基礎設施在這裡** |
| #196 | CLAUDE.md 補勾＋hello-world footer | draft（另一個 session 的） |
| #94／#74 | 內容類，owner 刻意留著 | 別動 |
