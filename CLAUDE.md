# CLAUDE.md — 個人網站開發規則

## 專案概覽

**Owner：** 葉淨維 Ching-Wei (Matt) Ye  
**GitHub：** https://github.com/matt-ye/personal-website  
**部署：** Cloudflare Pages（連接 GitHub `main` branch，push 自動 deploy）  
**網域：** https://mattye.dev（自訂網域，preview: personal-website-1m7.pages.dev）  
**Tech stack：** Astro 6 (static) · Plain CSS · Markdown content collections

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
- 使用 Astro 6，**靜態輸出**（`output: 'static'`）
- Content collections 設定在 `src/content.config.ts`
- 文章放在 `src/content/blog/`，格式為 Markdown（`.md`）
- 頁面路由：`/` · `/writing` · `/writing/[slug]`

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
├── layouts/        # BaseLayout, PostLayout
├── pages/          # 路由頁面
└── styles/
    └── global.css
```

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

---

## 命名規範
- 文章 slug（檔名）：英文小寫、用連字號，例如 `my-first-post.md`
- 元件檔名：PascalCase，例如 `PostCard.astro`
- CSS class 名稱：kebab-case，例如 `.post-card-title`

---

## 待辦事項（之後的 PR）
- [x] 加入 Google Analytics 4（G-1RKL72DPPW）
- [ ] 加入 Google Search Console verification meta tag
- [x] 建立 `llms.txt`
- [ ] 加入個人照片
- [x] 設定自訂網域（mattye.dev）
- [ ] 加入 RSS feed（`@astrojs/rss`）
- [x] 加入 sitemap（`@astrojs/sitemap`）
- [x] Dark mode support

---

## 禁止事項
- 不使用 JavaScript framework（React、Vue 等）
- 不使用 CSS framework（Tailwind、Bootstrap 等）
- 不使用 `npm run build` 以外的 build 工具
- 不修改 Cloudflare Pages 設定，除非 owner 明確要求
