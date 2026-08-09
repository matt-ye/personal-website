// AI Agent Skills — 公開發布的 agent skill repo 清單。
// /projects 卡片只列標題（description），完整說明（descriptionLong，約 150–200 字）
// 渲染在 /projects/agent-skills/ 分頁。新 skill 上架只加一筆，不動頁面。
// 短描述以 GitHub repo description 為準；長描述整理自各 repo README。

export interface SkillLink {
  label: string;
  labelEn: string;
  url: string;
}

export interface AgentSkill {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  descriptionLong: string;
  descriptionLongEn: string;
  repoUrl: string;
  tags: string[];
  tagsEn: string[];
  links: SkillLink[];
}

export const agentSkills: AgentSkill[] = [
  {
    slug: 'toutour',
    title: 'Toutour',
    titleEn: 'Toutour',
    description: '幫任何網站加上聚光燈導覽的 skill：分析版面、訪談開發者、產生步驟並用 Playwright 逐步驗證。',
    descriptionEn: 'Adds a verified spotlight onboarding tour to any website — analyzes the layout, interviews the developer, generates steps, and verifies each with Playwright.',
    descriptionLong:
      '通用格式（SKILL.md）的 agent skill，在 Claude Code、Cursor、Gemini CLI、Codex CLI 都能用。它讓 AI 編程助手替網站自動分析版面與 UI 元件、訪談開發者的偏好，然後產生「聚光燈遮罩」式的逐步新手導覽——並用 Playwright 逐步實測每一步真的存在、可點擊，導覽不再是裝飾。引擎零依賴、MIT 授權，誕生自 telaaurealab.com 的上線實戰，附 32 種導覽模式的互動圖鑑與現場 demo。',
    descriptionLongEn:
      'An agent skill in the universal SKILL.md format — works in Claude Code, Cursor, Gemini CLI and Codex CLI. It has your AI coding assistant analyze a site’s layout and UI components, interview you about preferences, then generate a spotlight step-by-step onboarding tour — verifying every step with Playwright so the tour actually passes. Zero-dependency MIT engine, born from the production tour on telaaurealab.com, with an interactive gallery of 32 onboarding patterns.',
    repoUrl: 'https://github.com/matt-ye/Toutour',
    tags: ['網站導覽', 'Playwright'],
    tagsEn: ['Onboarding Tour', 'Playwright'],
    links: [
      { label: '導覽模式圖鑑', labelEn: 'Pattern gallery', url: 'https://matt-ye.github.io/Toutour/patterns.html' },
      { label: '引擎 demo', labelEn: 'Engine demo', url: 'https://matt-ye.github.io/Toutour/' },
    ],
  },
  {
    slug: 'endnote-to-zotero',
    title: 'EndNote → Zotero 搬家',
    titleEn: 'EndNote → Zotero Migration',
    description: '把 EndNote library 完整搬到 Zotero：保留 PDF 附件與兩層分組階層。',
    descriptionEn: 'Migrates an EndNote library to Zotero with PDF attachments and the full group hierarchy intact.',
    descriptionLong:
      '把 EndNote 的文獻、PDF 附件與分組階層完整搬進 Zotero：手冊＋腳本＋AI skill。Zotero 官方匯入會丟掉分組結構，逐組匯出在幾十組的規模下不可行；這套工具改成整庫匯出一次、從 EndNote 資料庫讀出分組、在 Zotero 端用腳本重建兩層階層。所有腳本對 EndNote 原庫唯讀，中途出錯隨時可重來。實戰驗證：2,257 筆文獻、366 個分組、1,952 個 PDF，分組 100% 重建；不會寫程式也有純 GUI 路徑可走。',
    descriptionLongEn:
      'A complete path for moving an EndNote library into Zotero — manual, scripts, and an AI skill. Zotero’s official import drops the group structure, and exporting group by group breaks down at scale; this toolkit exports the library once, reads the group tree from the EndNote database, and rebuilds the two-level hierarchy inside Zotero by script. Every script opens the EndNote library read-only, so a failed run is always recoverable. Field-tested: 2,257 references, 366 groups, 1,952 PDFs, 100% of groups rebuilt — with a GUI-only path for non-programmers.',
    repoUrl: 'https://github.com/matt-ye/endnote-to-zotero-migration',
    tags: ['文獻管理', '資料遷移'],
    tagsEn: ['Reference Manager', 'Data Migration'],
    links: [],
  },
];
