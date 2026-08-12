# HANDOFF：SEO／AEO 優化工作流

**寫給**：接手 SEO／AEO 優化的 session（跨 session 交接文件，內容自足，不依賴任何對話紀錄）
**更新**：2026-08-11（#200：Astro 7 升版＋依賴漏洞清零；#198：RSS feed、GSC 索引判讀、Access 修正）。接手後若完成任何項目，**請直接更新本檔**（勾掉＋一行結果），這裡是唯一的進度真相。

---

## 30 秒背景

mattye.dev，Astro 7 靜態站，Cloudflare Pages（push `main` 自動部署）。
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
- ✅ 全站連結健檢＋272 條外連逐條驗證（#189，**已 merge 進 main 2026-08-11**）——`scripts/check-links.mjs` 現在掃 dist 全站；54 條擋機器人網址在 `link-check-verified.txt`，每條附證據
- ✅ `/writing/hello-world/` 站內入口 1→24 個頁面（#196）——見下方「GSC 索引狀態的判讀」
- ✅ RSS feed `/rss.xml`（#198）——見下方「RSS feed 的架構決定」
- ✅ Astro 6.4.2 → 7.2.0，`npm audit` 8 個漏洞（1 low／7 high）清到 0（#200，2026-08-11）——**改 `<T>` 相關的東西前先讀下方「Astro 7 的轉義陷阱」**
- ✅ Cloudflare Access 修正（2026-08-11，非程式碼）：`/api/dashboard/*` 先前被設成 `mattye.dev/api.dashboard`（**點，非斜線**），路徑永遠比對不到，worker 收不到 Access JWT 而 fail closed 回 `{"error":"unauthorized"}`。已改正並與 `/dashboard` 併入同一個 Access app（分成兩個 app 時登入 cookie 各自綁 AUD，一鍵更新會被 302 轉去登入頁）

## 連結健檢的遺留觀察項（#189 session 未完全結案的）

這些**不是待辦**，是「當時無法定案、要時間才能收尾」的觀察項。跑健檢看到它們時不要當成新問題：

- [ ] **`iswnetwork.ca`（BOPPPS 頁）**：源站 80/443 無回應（四個獨立出口確認），但網域註冊到 2027-03、NS 三個月前才更新——判定主機故障非棄置。頁面上已改接 Internet Archive 2025-08 快照＋一條 Waterloo CTE 現行來源，**ref-meta 註明「官方站恢復後可改回」**。收尾動作：過幾週 `curl -I https://www.iswnetwork.ca/` 一次，恢復了就把存檔連結換回原站、拿掉註記
- [ ] **`indiehackers.com` ×3（tech-publishing 頁）**：2026-08-09 最後一輪整站 502 Bad gateway，同日稍早還是 200——對方停機。刻意**不進任何清單**（5xx 歸「對方伺服器異常」不算失效）。每月 1 日的排程健檢會自動再驗；若連續兩個月仍 5xx，再依 SOP 找替代（Wayback 有存檔）
- [ ] **verified 清單的維護原則**（已寫在檔頭，這裡重申給接手者）：清單裡的網址**時好時壞是常態**，某一輪回 2xx 不代表可以移除；反之 `link-check-ignore.txt` 目前是空的，**保持它只放真失效**

## GSC 索引狀態的判讀（2026-08-11 逐項查證）

owner 看到 GSC 兩份報告覺得有問題，**逐項查過後結論是技術面沒有缺陷**。寫在這裡是為了讓接手者
**不要浪費時間去「修」不是問題的東西**——尤其別去動 trailing slash 設定或 canonical，那些現在都是對的。

**「頁面會重新導向」2 筆——正常，不需要處理**

| 網址 | 為什麼出現在報告裡 |
|---|---|
| `http://mattye.dev/`（**http**，非 https） | Cloudflare 的 HTTP→HTTPS 301。每個 HTTPS 站都有這筆 |
| `https://mattye.dev/writing/family-investing-08-...`（**結尾無斜線**） | directory 格式輸出（`/foo/index.html`），Cloudflare Pages 把無斜線 308 轉到有斜線 |

這份報告不是錯誤清單，是「這些網址會轉址，所以我改去索引目標網址」的通知。

**「已檢索 - 目前尚未建立索引」6 筆——非技術問題**

6 個網址其實只有 3 頁（`/coaching`、`/writing/hello-world`、`/projects/marketing`，各含有／無斜線兩種寫法）。逐項查證：

| 檢查項 | 結果 |
|---|---|
| `noindex` | 三頁都沒有，允許索引 |
| canonical | 正確且自我一致（一律指向有斜線版） |
| description | 三頁各異，非重複內容 |
| sitemap | 三頁都收錄 |
| 站內連結 | `/coaching/` 24 個、`/projects/marketing/` 7 個 |

且首頁 GSC 顯示「網址在 Google 服務中／網頁已編入索引」，發現方式是本站 sitemap，Google 採用的標準網址就是我們宣告的——**基礎建設全通**。

結論：「已檢索但未索引」＝Google 抓過了但還沒決定收錄，屬於新站權重累積期（GSC 8/8 才驗證）。**唯一找到的實質缺口**是 `/writing/hello-world/` 全站只有 1 個入口，已在 #196 補到 24 個。

接手者可做（非程式碼）：GSC「網址檢查」對三頁各按一次「要求建立索引」，**務必用結尾有斜線的 canonical 版**。其餘只能靠時間與外部連結。

## RSS feed 的架構決定（#198）

`/rss.xml`，26 筆，涵蓋 `/writing` 全部內容。**動它之前先讀這節**，因為它不是獨立的一個檔：

- **來源是共用的**：站上文章散在四處（`src/content/blog/` 的 Markdown ＋ `src/data/` 的 `oneMoreStep`／`marketingUnits`／`essays`）。`/writing` 列表頁與 feed 都讀 `src/lib/writing.ts` 的 `getWritingItems()`。**新增第五種內容來源時只改那一個檔**，兩邊同時生效；不要在 feed 或列表頁各自另建清單——feed 漏文章沒有畫面可看，不會有人回報
- **build 期會擋**：`astro.config.mjs` 的 `verifyRssFeed()` 檢查 feed 非空、連結在 dist 有對應頁、網址為絕對路徑，任一不符 **build 結束碼 1**（Cloudflare 會擋下部署）。已實測故意打錯 slug 會紅
- **未來日期會被濾掉**：課程週次的 `date` 是排程性質（同 sitemap lastmod 的處理）。目前四個來源都沒有未來日，這是預留的防線
- **目前給 description 不給全文**：四個來源有 Markdown 與手刻 HTML 兩種形態，只有前者能輕易取全文，混著給會前後不一致。**若之後把 AEO 當主要目標，全文 feed 是可考慮的升級**（audit 提到 feed 是 LLM 抓內容的常用管道），但要先解決手刻 HTML 那批

## Astro 7 的轉義陷阱（#200）——**動 `<T>` 之前先讀這節**

`<T zh="…" en="…" />` 全站用了 390 處，是這個 repo 最常被碰的元件。Astro 7 之後有一條
非直覺的規則：

> **`<T>` 的 `zh`／`en` 是 JS 字串**，由 `{zh}` 插值輸出、Astro 會轉義一次。
> 裡面寫 `&amp;`／`&nbsp;`／`&gt;` 這類 HTML entity，**畫面上會直接看到 `&amp;` 字樣**。
> 一律填實際字元：`&`、`>`，nbsp 用 U+00A0 實字元。

模板標籤之間的文字不受這條限制（`<h1>演講 &amp; 工作坊</h1>` 照常寫 entity）。
差別在 Astro 把模板文字當 HTML 原樣輸出，把 `{expr}` 當不可信字串轉義——**Astro 6 的
漏洞（CVE-2026-54298 那組）就是後者漏了轉義**，所以「修好安全性」跟「弄壞既有的
entity 寫法」是同一個改動的兩面，不可能只要前者。#200 已修掉當時全站 5 處。

實務提醒：

- `diet-calculator.astro:217` 的圖例間距是兩個 **U+00A0 實字元**（原始碼裡看不見），
  上方有 `{/* */}` 註解擋著。改那行時不要順手換回 `&nbsp;`
- 要驗有沒有再犯，掃 `dist/` 找 `&amp;(amp|nbsp|gt|lt|quot);` 這種雙重轉義，
  比看原始碼可靠（同規範 4：驗證要看建置產物）
- 依賴升級的判讀方法也留在 #200 說明裡：這站是純靜態輸出，`npm audit` 的傳遞漏洞
  **多數 code path 根本不走**（例如 sharp 從未被呼叫，因為圖全在 `public/`），
  評風險先問「這條路我走不走」，不要照 severity 分數辦事

## TODO（依 audit 文件的優先序）

### 1. ~~【擋在最前面的決策】問題 A：Sheet 驅動內容靜態化~~ ✅ 已完成（A-1，2026-08-11）

owner 選 A-1（build 期靜態化）＋每日排程同步。**三頁都已改完**，實測結果：

| 頁面 | 爬蟲可見正文 | 「載入中」佔位 |
|---|---|---|
| `/speeches/` | 731 → **24,311** 字元（165 筆紀錄進 HTML） | 2 → 0 |
| `/coaching/` | 1,953 → **3,856** 字元 | 4 → 0 |
| `/` | 2,568 → **6,074** 字元 | 8 → 0 |

三頁都不再連 `docs.google.com`；統計數字（場次／時數／人次／獎金）在 build 期就填好，
不再是 `—`。站內連結健檢 955 個通過 0 問題。

**架構（動它之前先讀）**：

- `scripts/fetch-sheets.mjs` 把 7 個來源抓成 `src/data/sheets/*.json`。
  內容沒變就不寫檔；任一來源抓失敗**保留既有快照**並以非零碼結束——
  網站不會因為 Google 掛掉而失去內容，但失敗不會被藏起來
- `.github/workflows/sync-sheets.yml` 每日 21:00 UTC（台北 05:00）同步，
  有變動才 commit，push 後由既有的 main 綁定觸發 Cloudflare 部署。也可手動 Run workflow
- **`src/lib/sheets.ts` 是唯一做「欄名 → 型別」對應的地方**。
  ⚠ Sheet 的中英欄位命名慣例並不一致：`主辦單位_zh`/`_eng`、`org_zh`/`org_en`、
  `title`/`title_eng`、`競賽名稱`/`Contest Name`（完全不同名）四種都有，
  所以逐表寫死對應，**不要改成「猜後綴」的通則**——通則遇到第四種會安靜地取不到值
- 三頁的 client script 都保留原本的篩選／圖表／輪播邏輯，只是資料改由
  `define:vars` 帶入。`index.astro` 的五個 load 函式仍吃「二維陣列＋欄位索引」，
  所以 frontmatter 把快照還原成 `[表頭, ...資料列]` 再傳進去

**順帶修掉一個原本被藏住的資料問題**：兩列的 URL 欄塞了多個連結加說明文字
（`報名資訊: https://… ⏎ 電子報：https://…`）。內容原本不在 HTML 裡，連結健檢掃不到；
改成 build 期渲染後才浮現。`sheets.ts` 現在只取第一個合法網址。

- [ ] 待觀察：首頁 LCP 實測 106 秒（PSI mobile，兩次測量一致）。原以為是 Sheet 逾時，
      但第二次測量時 Sheet 只花 463ms、LCP 仍 106.6s，**根因未定案**。
      候選假設是 hero 三張輪播不斷產生新的 LCP 候選（未驗證）。
      這次改動移除了 client fetch，值得重測一次看有無變化

### 2. 小件（可同一批 PR）

- [x] ~~**RSS feed**~~ 已完成 2026-08-11（#198）：`/rss.xml`，26 筆。**不是單純加一個 feed 檔**——來源與 `/writing` 共用 `src/lib/writing.ts`，且 build 期 `verifyRssFeed()` 把關，細節見上方「RSS feed 的架構決定」
- [x] ~~GSC verification meta tag~~ 已確認不需要：GSC 驗證 2026-08-08 已完成且非走 meta tag（見 CLAUDE.md 待辦區註記），BaseLayout 不應再加 verification 標籤
- [x] ~~CLAUDE.md 待辦清單同步~~ #196 已處理；#198 再補上 RSS 與新的「內容來源與 RSS feed」一節

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
- `<T>` 的 `zh`／`en` 屬性**不能寫 HTML entity**（Astro 7 起會雙重轉義，畫面直接顯示 `&amp;`）——見上方「Astro 7 的轉義陷阱」。連帶提醒：把一個 `<T>` 拆成兩個會讓原始 HTML 的中英文交錯（`zh en zh en`），削弱 `<T>` 本來為爬蟲／LLM 提供的語言分段，排版需求優先用 CSS 解
- `grep -c` 數行不數次數；建置產物多為單行 HTML，計數用 `grep -o | wc -l`
- Windows 環境：Python 寫檔預設 CRLF，餵給 bash/curl 前要 `newline='\n'`
- `link-check` CI 只在動到特定 paths 時觸發（#189 merge 後放寬到 `src/**`）；外連 272 條約跑 2–3 分鐘
- Sheet 的 gviz 端點對 Google 爬蟲可抓（robots.txt `Allow: /spreadsheet`），所以問題 A 的正確表述是「**只有會執行 JS 的 Google 延遲看到**，Bing／LLM／預覽卡看不到」——選案時別把它當成「Google 完全看不到」

## 進行中的 PR（接手時先看狀態）

| PR | 內容 | 狀態（2026-08-11 更新） |
|---|---|---|
| #197 | 盤點文件＋README＋本 handoff | ✅ 已 merge |
| #189 | 連結健檢全站化＋驗證報告 | ✅ 已 merge——全站健檢基礎設施可用 |
| #196 | CLAUDE.md 補勾＋hello-world footer | ✅ 已 merge |
| #198 | RSS feed＋本 handoff 更新 | ✅ 已 merge（2026-08-11） |
| #200 | Astro 7 升版＋漏洞清零＋`<T>` entity 修正 | ✅ 已 merge（2026-08-11） |
| #94／#74 | 內容類，owner 刻意留著 | 別動 |
