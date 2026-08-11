# mattye.dev — 個人網站

葉淨維 Ching-Wei (Matt) Ye 的個人網站。Astro 6 靜態輸出，Cloudflare Pages 部署（push `main` 自動上線）。

**開發規則看 [`CLAUDE.md`](CLAUDE.md)**（PR 流程、技術規範、禁止事項）。

## 架構速覽

- `src/pages/` — 14 個 Astro 路由頁；`src/content/blog/` — 文章（Markdown）
- `public/projects/**`、`public/writing/**` — 40 個手刻靜態教材頁（不走 BaseLayout）
- `index`／`coaching`／`speeches` 三頁的資料由 Google Sheet（gviz CSV）驅動
- 中英文目前是同頁雙 DOM（`<T>` 元件＋CSS 切換），不是分頁——已知架構問題，見下方文件

## 文件索引（`docs/`）

| 文件 | 內容 | 狀態 |
|---|---|---|
| [`HANDOFF-seo-aeo.md`](docs/HANDOFF-seo-aeo.md) | **跨 session 交接**：SEO/AEO 工作流的 TODO、已完成清單、陷阱 | 進行中 |
| [`seo-architecture-audit.md`](docs/seo-architecture-audit.md) | **架構與 SEO 總盤點**：Sheet 驅動內容的可見性問題、優先序、待決策 | 待評估 |
| [`i18n-architecture-plan.md`](docs/i18n-architecture-plan.md) | 中英雙語改分頁的完整規劃（三方案、Phase、坑） | 待評估 |
| [`analytics-pipeline.md`](docs/analytics-pipeline.md) | GA4＋Cloudflare＋GitHub 每日快照管線的設定 | 運行中 |
| [`marketing-roadmap/`](docs/marketing-roadmap/) | 行銷專欄的課綱與大綱 | 連載中 |

歷次大修的紀錄在 PR 說明裡，重要的幾個：
[#168](https://github.com/matt-ye/personal-website/pull/168) 全站 metadata／JSON-LD 稽核、
[#181](https://github.com/matt-ye/personal-website/pull/181) trailing-slash 修正、
[#189](https://github.com/matt-ye/personal-website/pull/189) 連結健檢擴大到全站（逐條驗證報告在留言）。

## 常用指令

```bash
npm run dev        # 本地開發
npm run build      # 建置（dist/；sitemap 與 GA 注入都在這步）
node scripts/check-links.mjs --internal   # 站內連結健檢（免網路，先 build）
node scripts/check-links.mjs              # 全站連結健檢（含外連）
```

CI：`link-check`（PR 觸發＋每月排程）、`analytics`（每日快照）。
