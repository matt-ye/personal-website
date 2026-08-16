# Marketing Learning Roadmap — 使用說明（寫給未來的模型）

> **你（模型）正在讀這份文件，代表 Matt 要你基於這個知識庫做事。先讀完本檔再行動。**

## 這個資料庫是什麼

Matt（葉淨維）的一年期行銷學習素材庫，建立於 2026-07。目的：系統性補強近年行銷趨勢知識，最終目標是**通用行銷能力**——能行銷任何公司/產品，不限於自己的專案。

這些 markdown **不是給 Matt 直接閱讀的**，是給你（模型）作為原始素材，逐週產出教學網站用的。

## 目錄結構

```
docs/marketing-roadmap/
├── README.md              ← 本檔
├── 00-curriculum-map.md   ← 52 週總地圖，先看這個找到對應模組
├── q1/                    ← Q1 五個模組（W1-12），內容完整
│   ├── m01-marketing-foundations.md
│   ├── m02-social-platforms-2026.md
│   ├── m03-tech-publishing.md
│   ├── m04-short-video.md
│   └── m05-faceless-pipeline.md
├── q2-outline.md          ← Q2 骨架（W13-26），做到時需先研究展開
├── q3-outline.md          ← Q3 骨架（W27-38）
├── q4-outline.md          ← Q4 骨架（W39-52）
└── industry-notes.md      ← 四大產業偏好速查
```

## 核心工作流程：Matt 說「做第 N 週」時

1. **查地圖**：讀 `00-curriculum-map.md` 找到第 N 週屬於哪個模組
2. **讀模組**：讀對應的模組 md，取出該週的學習目標、知識點、參考連結
3. **驗證新鮮度**：教材建立於 2026-07。若已過了幾個月，用 WebSearch/WebFetch 驗證：
   - 參考連結是否仍有效
   - 平台功能/演算法/價格是否已改變（社交平台變化極快）
   - 有新趨勢就補充，過時內容照舊呈現但標註「已過時，現況是…」
4. **產出單元網站**：雙語（繁中為主+英文術語）單檔自包含 HTML
   - 風格參考：`public/projects/one-more-step/ga4-guide/index.html`（白底卡片風、sticky 側欄、卡片展開收合、搜尋、術語速查 glossary、深色模式、RWD）
   - 內容結構：學習目標 → 知識點卡片 → 實作練習 → 參考連結（區分官方/社群）
   - **不要放任何部署教學橫幅在頁面上**（Matt 明確要求過移除）
5. **部署**：
   - HTML 放 `public/projects/marketing/<slug>/index.html`（行銷專欄 hub）
   - 在 `src/data/marketing.ts` 的 `marketingUnits` 陣列加 entry（`url: '/projects/marketing/<slug>/'`），會自動出現在 /projects/marketing 專欄頁與 /writing hub 的「行銷專欄」分類
   - 開新 branch → PR → **回覆時必附 PR 連結**（Matt 明確要求過）
   - Matt merge 後 Cloudflare Pages 自動部署到 mattye.dev

## 進入新一季時（Q2/Q3/Q4）

outline 檔只有主題骨架。展開成完整模組前，**必須先做新鮮度研究**（派 research agents 搜尋當時最新資料），把 outline 展開成與 q1/ 同格式的完整模組檔，再開始逐週產出。展開後的模組檔存回 `q2/`（新資料夾），outline 檔保留不刪。

## 模組檔格式約定

每個模組 md 包含：
- **週次拆分**：每週一個 section（`## Week N`）
- **學習目標**：該週結束時應能做到什麼（可驗證的行為）
- **知識點**：3-7 個核心概念，每個附說明
- **實作練習**：用 Matt 的真實專案練習（見下方背景）
- **參考連結**：附標題與類型標籤（官方/社群/影片/工具）
- **產業備註**：該主題在四大產業的差異（如適用）

## Matt 的背景（產出教材時的個人化依據）

- 職能治療師（OT）→ AI 創業，教育家×創業家×跨界者
- 個人網站 mattye.dev（Astro，本 repo），One More Step 是他的學習文件集
- 正在行銷 **telaaurealab.com**（捕夢網生成器：手作電商 + 數位工具雙屬性，賣 SVG/PNG 設計，有 Stripe 付款與 Gumroad bundle 計畫）→ 實作練習的最佳標的
- 已完成 GA4 教學單元（`/projects/one-more-step/ga4-guide/`），有 GA4 基礎，數據類主題可銜接
- 未來有 Somnorva（睡眠新創，暫停中）
- 中文母語，英文可讀；教材繁中為主、術語保留英文

## 產業偏好涵蓋（詳見 industry-notes.md）

1. 數位產品 / SaaS / 工具類（Product Hunt、dev 平台、indie hacker 生態）
2. 實體電商 / 手作商品（Etsy、Pinterest、IG Shopping、小紅書）
3. 教育 / 知識型產品（線上課程、電子報、知識付費）
4. B2B / 專業服務（LinkedIn、內容行銷、顧問型漏斗）

## 維護規則

- 過時內容**標註 deprecated 不刪除**（保留學習脈絡）
- 每次產出單元網站後，在對應模組檔頂部的「產出紀錄」加一行（日期、週次、slug、PR 編號）
- 連結失效時更新為替代資源並註記原連結
