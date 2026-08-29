# CLAUDE.md — 個人網站開發規則

## 專案概覽

**Owner：** 葉淨維 Ching-Wei (Matt) Ye  
**GitHub：** https://github.com/matt-ye/personal-website  
**部署：** Cloudflare Pages（連接 GitHub `main` branch，push 自動 deploy）  
**網域：** https://mattye.dev（自訂網域，preview: personal-website-1m7.pages.dev）  
**Tech stack：** Astro 7 (static) · Plain CSS · Markdown content collections

---

## 開發環境

**建議：統一使用 `claude.ai/code`（瀏覽器版）**，手機和電腦都用這個，避免本地環境衝突。

- claude.ai/code 運行在 Anthropic 雲端 VM，直接操作 GitHub repo，不需要本地 node_modules
- 改內容 / 樣式 → merge 後 Cloudflare Pages 幾秒內自動 deploy，不需要本地預覽
- 例外：需要快速迭代 UI 時，可在桌機用本地 `npm run dev`，但要記得先 pull main

---

## 工作流程規則

1. **每次收到需求，開一個新 PR**，不直接 push 到 `main`
2. PR 標題格式：`feat:` / `fix:` / `content:` / `style:` / `chore:` + 一句話描述
3. PR 說明要包含：做了什麼、為什麼這樣做、需要注意的地方
4. 等待 owner review，owner 明確說「可以 merge」後才 merge
5. **Merge 前必做：** 用 `mcp__github__get_file_contents` 或 `list_commits` 確認 remote branch 的最新 commit SHA 與本地一致，確保所有 push 都已同步到 GitHub
6. **Merge 方式：** 固定使用 `merge commit`（非 squash、非 rebase）。Squash 在 claude.ai/code 環境中可能因 push proxy 延遲，導致遺漏後續 commit

### Merge 前 checklist
- [ ] Cloudflare Pages preview 已確認頁面內容正確
- [ ] `mcp__github__list_commits` 確認 PR branch 的最新 SHA 包含所有預期變更
- [ ] PR 狀態為 ready（非 draft）才能 merge

---

## 技術規範

### Astro
- 使用 Astro 7，**靜態輸出**（`output: 'static'`）
- Content collections 設定在 `src/content.config.ts`
- **`<T zh="…" en="…" />` 的兩個屬性是 JS 字串**，由 `{zh}` 插值輸出、Astro 會轉義一次。
  裡面寫 `&amp;` / `&nbsp;` / `&gt;` 這類 HTML entity，畫面上會直接看到 `&amp;` 字樣。
  一律填實際字元（`&`、`>`、nbsp 用 U+00A0 實字元）。這條只適用於「屬性／JS 字串」，
  模板標籤之間的文字（如 `<h1>演講 &amp; 工作坊</h1>`）照常寫 entity
- 文章放在 `src/content/blog/`，格式為 Markdown（`.md`）
- 頁面路由走 `src/pages/[...lang]/`：同一個檔案產出中文（`/…`）與英文（`/en/…`）兩個網址

### 雙語（i18n）——2026-08 全站遷移完成
- **政策：新內容一律雙語。中文先寫、英文隨後補**，兩者是獨立網址（`/…` 與 `/en/…`），
  各自有 canonical 與 hreflang，由 layout 統一產生
- **英文版的存在由資料推導，不維護清單**：英文 meta 欄位（`titleEn` 等）有填＋
  （手刻頁）對照表存在 → `/en/` 網址自動產出；沒填就單純沒有英文版
- 內容分三類，機制不同（細節與決策脈絡見 `docs/i18n-architecture-plan.md`）：
  1. **Astro 模板頁**（首頁、coaching…）：`<T zh en>` 成對輸出
  2. **手刻 HTML 頁**（one-more-step、marketing…）：內容片段在 `src/data/static-pages/`，
     英文由 `src/data/translations/<key>.mjs` 整頁對照表在建置期換出（機制 C）
  3. **課程週次頁**：內容片段在 `src/data/course-weeks/`，同走機制 C；
     生產流程見 `curriculum/README.md`「教材網頁的部署慣例」
- 對照表的驗證：`node scripts/check-translations.mjs`；build 期另有守衛，
  漏譯／殘留中文會直接讓 build 失敗

### 發佈前檢核（YAEO）
- SEO/AEO 檢核用 owner 自己的 skill（repo：`matt-ye/yaeo`，skills/seo-aeo-audit）：
  `node scripts/seo-check.mjs --dir ./dist --site https://mattye.dev`
- 大改版或新頁上線前跑一次，看 error/warn（info 不用歸零，`noindex` 等是刻意設計）
- 已知待修：25 頁課程英文版 title 超過 60 字元（L1-TITLE-LONG）。新頁的英文 title
  控制在 60 字元內，不要再加長這個名單

### 頁面指紋清單 `data/page-manifest.json`（跨 session 的內容變更帳本）

每頁 markdown 分身的內容指紋，**進版控**。用途不只提交給搜尋引擎——它是
「**哪一頁的內容在哪一天真的變了**」的可讀紀錄，接手時直接查得到最新進度。

```json
"https://mattye.dev/about/": { "hash": "0b6b…", "lastChanged": "2026-08-30" }
```

```bash
node scripts/page-manifest.mjs diff                  # 列出與清單有差異的網址
node scripts/page-manifest.mjs build 2026-08-30      # 重算並直接寫回清單（不走 stdout）
```

- **指紋算在 `dist/md/` 的 markdown 分身，不是整份 HTML。** HTML 的 `<head>` 帶著
  vite 資源雜湊，改一次全站 CSS 會讓 119 頁全部「看起來變了」，但內容一個字沒動。
  分身只含 `<main>` 的語意內容。實測：同一份原始碼連續 build 兩次，指紋完全一致。
- `lastChanged` **只在指紋改變時才更新**，所以沒有內容變更的 build 不會產生雜訊 commit。
- ⚠ **不要用 `> data/page-manifest.json` 重導向產生它**——shell 會在腳本執行前先清空檔案，
  於是讀到空檔、`lastChanged` 全部重置。腳本自己寫檔就是為了避開這個坑。

### 搜尋引擎提交：Bing URL Submission API（`.github/workflows/bing-url-submission.yml`）

push 到 `main` 後，把**指紋有變動的頁**提交給 Bing。金鑰在 repo secret
`BING_WEBMASTER_API_KEY`（BWT → Settings → API access 取得）。

> ⚠ **配額是硬約束：DailyQuota 100、MonthlyQuota 300，而全站 119 頁。**
> 所以**絕對不能改回「每次 push 送整份 sitemap」**——那樣第三次 push 就爆掉。
> 查當前配額：`GetUrlSubmissionQuota`。

- 成功回應是 `{"d":null}`，**光看狀態碼分不出有沒有真的收下**——workflow 會回查配額確認有扣。
- 配額不足時**不靜默截斷**：逐條列出未提交的網址，且 **manifest 不更新**，
  那些頁下次仍會被判為變動並重試。若照常更新 manifest，它們會被當成已處理、永遠不再送。
- 金鑰走 query string（微軟的設計）——**任何情況都不要把整串 URL 印進 log**。
- 回寫 manifest 的 commit 用預設 `GITHUB_TOKEN`，GitHub 刻意不讓這種 commit 觸發 workflow，
  所以不會遞迴（同 `sync-sheets.yml`）。

#### ⚠ 不要改回 IndexNow

`api.indexnow.org` 對本站一律回 **403 `UserForbiddedToAccessSite`**，2026-08 查證過，
**六個假設全部被實測推翻**：金鑰檔內容（三處逐位元組一致）、Cloudflare 攔截
（Security Events 篩該路徑 → 無事件）、Bing 抓不到（BWT Live URL 測試 → 可索引）、
需要 BWT 產生的金鑰（那顆 Generate 是公開文件頁的前端隨機產生器，重整值就變）、
尾端換行（拿掉仍 403）、`(host, key)` 組合卡住（換全新金鑰仍 403）。

決定性對照組：**同一份請求、同一把金鑰、同一個金鑰檔，Yandex 回 202、Bing 回 403。**
問題在 Bing 那一側，repo 裡沒有東西能修它。

Yandex 那條仍保留在同一支 workflow 裡（`continue-on-error`，零配額成本），
用的是 `public/121a93972fa37400d8b6c87a13075582.txt`。**那個金鑰檔不要刪。**

> 另一個教訓：舊版 workflow 把 IndexNow 的 **202 當成成功**，而 202 的語意是
> 「收到了，金鑰驗證排程中」。歷史上唯二的兩次綠勾都是 202，於是一個從未生效的
> 整合被綠勾蓋了四天。**判定「成功」之前，先確認那個狀態碼真的代表事情做完了。**

### CSS
- **不使用 Tailwind**，使用 plain CSS
- 所有全域樣式在 `src/styles/global.css`
- 用 CSS custom properties（變數）管理 design tokens
- 頁面特定樣式用 `<style>` 寫在 `.astro` 檔案的 scoped block
- Max content width：`680px`

### 元件結構
```
src/
├── components/     # 可重用元件（Header, Footer, PostCard）
├── content/blog/   # Markdown 文章
├── content.config.ts
├── data/           # 手刻 HTML 頁的 metadata 清單（essays, marketing…）
├── layouts/        # BaseLayout, PostLayout
├── lib/
│   └── writing.ts  # 文章來源的單一事實來源 ← 見下節
├── pages/          # 路由頁面（含 rss.xml.ts）
└── styles/
    └── global.css
```

### 內容來源與 RSS feed（重要）

站上的「文章」散在四個來源：`src/content/blog/`（Markdown）＋ `src/data/` 底下
三個清單（`oneMoreStep` / `marketingUnits` / `essays`，對應 `public/` 的手刻 HTML）。

**`src/lib/writing.ts` 的 `getWritingItems()` 是這四者合併後的單一事實來源**，
`/writing` 列表頁與 `/rss.xml` 都讀它。因此：

- 新增一篇文章（`.md` 或在 `src/data/` 加一筆）→ 列表頁與 feed **自動同步**，不需要動別的檔
- **新增第五種內容來源時，只改 `src/lib/writing.ts`**，兩邊會同時生效
- 不要在 `rss.xml.ts` 或 `writing/index.astro` 裡各自另建清單——feed 漏文章不會有人發現

Build 期有 `verifyRssFeed()`（`astro.config.mjs`）把關：feed 空掉、連結指向
不存在的頁、或網址不是絕對路徑，**build 直接失敗**（結束碼 1，Cloudflare 會擋下部署）。

### 文章 Frontmatter 規範
```yaml
---
title: 文章標題
description: 一句話描述（用於 SEO meta 和文章列表）
pubDate: YYYY-MM-DD
lang: zh   # zh 或 en
tags: [標籤1, 標籤2]   # 可選
draft: false   # true 時不顯示在列表
---
```

---

## SEO 規則
- 每篇文章必須有 `title` 和 `description`
- `description` 長度建議 50-160 字元
- `lang` 設定正確（`zh` → `zh-TW`，`en` → `en`）
- canonical URL 由 BaseLayout 自動處理
- RSS feed 在 `/rss.xml`，BaseLayout 已放 `<link rel="alternate">` 供自動發現

---

## 命名規範
- 文章 slug（檔名）：英文小寫、用連字號，例如 `my-first-post.md`
- 元件檔名：PascalCase，例如 `PostCard.astro`
- CSS class 名稱：kebab-case，例如 `.post-card-title`

---

## 待辦事項（之後的 PR）
- [x] 加入 Google Analytics 4（G-1RKL72DPPW）
- [x] Google Search Console 驗證（2026-08-08 完成，站已編入索引）
      驗證非走 meta tag，BaseLayout 不需要也不應該再加 verification 標籤
- [x] 建立 `llms.txt`
- [x] 加入個人照片（首頁 hero 三張輪播）
- [x] 設定自訂網域（mattye.dev）
- [x] 加入 RSS feed（`@astrojs/rss`）— `/rss.xml`，來源見「內容來源與 RSS feed」
- [x] 依賴漏洞清零（#200，2026-08-11）：Astro 6.4.2 → 7.2.0，`npm audit` 8 個（1 low／7 high）→ 0。
      留在 6.x 清不完（astro 的 3 個 XSS 修正只出在 7.0.4／7.0.6／7.0.10，sharp／esbuild 也被
      6.x 的依賴範圍卡住）。**升版的代價寫在上面 Astro 一節的 `<T>` 規範**，判讀方法見
      `docs/HANDOFF-seo-aeo.md` 的「Astro 7 的轉義陷阱」
- [x] 加入 sitemap（`@astrojs/sitemap`）
- [x] Dark mode support

---

## 禁止事項
- 不使用 JavaScript framework（React、Vue 等）
- 不使用 CSS framework（Tailwind、Bootstrap 等）
- 不使用 `npm run build` 以外的 build 工具
- 不修改 Cloudflare Pages 設定，除非 owner 明確要求
- **不把搜尋引擎提交改回「每次 push 送整份 sitemap」**——Bing 的月配額只有 300，全站 119 頁，第三次 push 就爆（見〈搜尋引擎提交〉）
- **不改回 IndexNow**（`api.indexnow.org`）——對本站一律 403，六個假設實測全推翻，問題在 Bing 端
- **不刪 `public/121a93972fa37400d8b6c87a13075582.txt`**——那是仍在用的 Yandex IndexNow 金鑰檔
- **不把含 API 金鑰的網址印進 log**——Bing 的金鑰走 query string
