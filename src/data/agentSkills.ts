// AI Agent Skills — 公開發布的 agent skill repo 清單，渲染在 /projects 的
// AI Agent Skills 卡片內。一筆一個 skill，新 skill 上架只加一筆，不動頁面。
// 描述以 GitHub repo description 為準（單一事實來源），改描述請兩邊同步。
// 目前都是 Claude skill；卡片定位刻意寫「AI Agent Skills」——之後要通用到
// 不同 agent 格式，名稱不綁定單一平台。

export interface AgentSkill {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  repoUrl: string;
  tags: string[];
  tagsEn: string[];
}

export const agentSkills: AgentSkill[] = [
  {
    slug: 'toutour',
    title: 'Toutour',
    titleEn: 'Toutour',
    description: '幫任何網站加上聚光燈導覽的 skill：分析版面、訪談開發者、產生步驟並用 Playwright 逐步驗證。',
    descriptionEn: 'Adds a verified spotlight onboarding tour to any website — analyzes the layout, interviews the developer, generates steps, and verifies each with Playwright.',
    repoUrl: 'https://github.com/matt-ye/Toutour',
    tags: ['網站導覽', 'Playwright'],
    tagsEn: ['Onboarding Tour', 'Playwright'],
  },
  {
    slug: 'endnote-to-zotero',
    title: 'EndNote → Zotero 搬家',
    titleEn: 'EndNote → Zotero Migration',
    description: '把 EndNote library 完整搬到 Zotero：保留 PDF 附件與兩層分組階層。',
    descriptionEn: 'Migrates an EndNote library to Zotero with PDF attachments and the full group hierarchy intact.',
    repoUrl: 'https://github.com/matt-ye/endnote-to-zotero-migration',
    tags: ['文獻管理', '資料遷移'],
    tagsEn: ['Reference Manager', 'Data Migration'],
  },
];
