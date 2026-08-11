# 網站架構與 SEO 總盤點

**狀態：** 待評估（尚未動工）
**撰寫日期：** 2026-08-11
**目的：** 把散在各 session 的架構級問題集中成一份，附新鮮盤點數字與方案，供決定優先序。

> **已存在的紀錄，不重寫**：
> - metadata 層的缺口已在 [PR #168](https://github.com/matt-ye/personal-website/pull/168) 修完（38 檔補 OG／twitter／JSON-LD，全站 Person `@id` 串成同一實體）
> - 中英分頁的完整規劃在 [`docs/i18n-architecture-plan.md`](i18n-architecture-plan.md)（三方案、Phase 拆解、七個坑、四個待決策）
>
> 這份文件處理的是 #168 結尾點名「需要 owner 決定方向」的架構級問題，加上 Sheet 驅動這個新確認的缺口。

---

## 1. 盤點數字（2026-08-11 重新查證）

| 項目 | 2026-08-07 | 現在 | 備註 |
|---|---:|---:|---|
| Astro 頁面路由 | 13 | **14** | 新增 `/projects/agent-skills/` |
| `public/` 手寫靜態頁 | 38 | **40** | |
| `<T>` 使用次數 | 365 | **390** | 雙語 DOM 持續長大 |
| Sheet 即時驅動的頁面 | 3 | 3 | `index`、`coaching`、`speeches` |
| 部落格文章／有英文版 | 11／1 | 11／1 | |
| RSS feed | 無 | 無 | CLAUDE.md 待辦掛著 |
| GSC verification meta tag | 無 | 無 | 同上（目前用 DNS/檔案驗證？需確認） |

另外：**根目錄 `README.md` 還是 Astro starter 的預設樣板**——這次找前幾個 session 的紀錄，就是因為 README 沒有任何指引才差點找不到。已知紀錄實際散在 `docs/` 與 PR 說明裡。

---

## 2. 問題 A：Sheet 驅動的內容，搜尋引擎幾乎看不到

### 現況機制

`index`、`coaching`、`speeches` 三頁的核心內容（演講紀錄、培訓戰績、數字看見、獎項）在瀏覽器端 fetch Google Sheet 的 gviz CSV 再渲染。HTML 原始碼裡只有骨架與「載入中…」。

### 實測（build 產物、不執行 JS 的視角）

| 頁面 | 爬蟲可見文字 | 「載入中」佔位 | 看不見的內容 |
|---|---:|---:|---|
| `/speeches/` | 1,113 字 | 2 處 | **61 場演講全部** |
| `/coaching/` | 2,324 字 | 4 處 | 培訓戰績、隊伍紀錄 |
| `/` | 2,954 字 | 8 處 | 數字看見、核心優勢、經歷、獎項、合作單位 |

### 誰看得到、誰看不到（查證過，不是猜的）

- **Google**：看得到，但延遲。Googlebot 的 WRS 會執行 JS，且 `docs.google.com/robots.txt` 明寫 `Allow: /spreadsheet`，gviz 端點抓得到。代價是進 render queue（可能數天）＋每次重爬都要重新渲染——GSC 的「已檢索-尚未索引」與此相關。
- **Bing 與其他引擎**：JS 渲染不穩定，多數情況看不到。
- **LLM 爬蟲（GPTBot、ClaudeBot、PerplexityBot）**：**完全看不到**。它們不執行 JS。AEO 上，「150+ 場演講」這個最核心的證據對答案引擎是不存在的。
- **社群預覽卡**：OG 標籤是靜態的所以卡片正常，但預覽文字抓不到內容。

### 方案

**A-1（建議）：build 時抓 Sheet，輸出靜態 HTML**

Astro 頁面 frontmatter 是 build 期執行的——把現在瀏覽器端的 fetch 搬進 frontmatter，內容直接進 HTML。

- 資料更新頻率低（演講一場一場加），「build 時快照」完全符合使用情境
- 更新流程：改完 Sheet 後手動觸發 Cloudflare Pages rebuild（deploy hook 一條 URL），或排程 CI 每日 rebuild
- 順帶消掉三頁的 loading 閃爍與 CLS
- 與 i18n 計畫**相容且互補**：build 期拿到資料後，`_eng` 缺值的處理從 runtime JS 移到 build 期，方案 B 的 Phase 2 反而變簡單
- 風險：build 期多一個外部依賴（Sheet 掛了 build 會失敗）→ 需要 fallback：fetch 失敗時用上一次的快照（存 repo 或建置 cache）

**A-2：維持 client fetch，另外把資料快照進 JSON-LD**

只把演講清單以 `Event`／結構化資料形式在 build 期塞進頁面，畫面照舊。工作量小，但 HTML 可見文字還是空的，只解決 AEO 不解決 SEO，而且資料存在兩個管道，會漂移。

**A-3：不動**

接受「只有 Google 延遲看得到」。若目標受眾只從 Google 來，損失有限；但 AEO 全損。

> 註：A-1 做完後，`speeches`／`coaching` 的篩選互動照樣保留——資料改成 build 期注入，篩選仍是前端 JS，只是資料來源從 fetch 變成頁面裡的 inline JSON。

---

## 3. 問題 B：中英文應改成分頁（語言標籤）

完整規劃已在 [`docs/i18n-architecture-plan.md`](i18n-architecture-plan.md)，此處只更新兩點：

1. **數字更新**：`<T>` 已從 365 長到 390——每拖一個月，搬移成本都在漲。
2. **與問題 A 的相依**：若決定做 i18n 方案 B（Astro 13→14 頁雙路由），**先做 A-1 再做 i18n** 順序較好——Sheet 資料在 build 期就位後，`/en/speeches` 直接在 build 期選 `_eng` 欄位，不需要 runtime 的語言判斷。反過來先做 i18n 的話，Sheet 頁要做兩次。

該文件的建議不變：先方案 C（一頁英文 landing）觀察流量，再決定升級 B。四個待決策仍然開著（見該文件第 7 節）。

---

## 4. 其他缺口（小，但順序上值得一起排）

| # | 項目 | 說明 | 工作量 |
|---|---|---|---|
| C-1 | **README 是 starter 樣板** | 換成真的專案說明＋`docs/` 索引，讓紀錄找得到（這次差點找不到就是它害的） | 極小 |
| C-2 | **RSS feed** | `@astrojs/rss`，CLAUDE.md 掛很久了；對訂閱與 AEO（feed 是 LLM 抓內容的常用管道）都有幫助 | 小 |
| C-3 | **GSC verification meta tag** | 待辦掛著；若目前已用 DNS 驗證則可直接劃掉 | 極小 |
| C-4 | **40 個靜態頁的 metadata 債** | #168 用腳本批次補過一輪，但每次新增 meta 欄位仍要批次改 40 處。長期解法是遷移成 Astro 頁（i18n 文件第 6 節第 6 點），這是獨立大工程，先掛著 | 大 |

---

## 5. 建議優先序

按「效益 ÷ 投入」排：

| 順位 | 項目 | 理由 |
|---|---|---|
| 1 | **C-1 README** | 十分鐘的事，直接解決「紀錄找不到」 |
| 2 | **A-1 Sheet → build 期靜態化** | 三頁核心內容進 HTML；61 場演講第一次對搜尋引擎與 LLM 存在；GSC 索引問題可望改善；同時是 i18n 的前置 |
| 3 | **C-2 RSS ＋ C-3 GSC tag** | 小，可與 2 同一批 |
| 4 | **i18n 方案 C**（一頁英文 landing） | 照原規劃，低成本試水溫 |
| 5 | **i18n 方案 B** | 等 4 的流量數據；且吃 2 的成果 |
| — | C-4 靜態頁遷移 | 獨立排程，不擋上面任何一項 |

## 6. 待決策

1. **A 選哪個**：A-1（建議）／A-2／A-3？
2. **A-1 的 rebuild 策略**：改 Sheet 後手動按 deploy hook，還是排程每日自動 rebuild？（演講更新頻率大概多久一次？）
3. **i18n 四個待決策**（見 i18n 文件第 7 節）——可以等 A-1 上線後再答。

---

## 附錄：本次盤點指令

```bash
# 數字重查：同 i18n 文件附錄，另加
# 爬蟲視角可見文字（build 後）
python -c "剝掉 <script> 與標籤後統計 dist/*/index.html 的純文字量與『載入中』佔位數"
# gviz 端點可爬性
curl -s https://docs.google.com/robots.txt | grep -i spreadsheet
```
