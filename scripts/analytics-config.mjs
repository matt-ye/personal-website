// Analytics pipeline 設定：fetch script 與 dashboard 的單一資料來源。
// 要增減追蹤的專案，改這裡即可（無需動 script 或頁面）。

// GA4 自訂事件（與 src/components/AnalyticsEvents.astro、Sponsor.astro 對齊）
export const GA4_EVENTS = [
  'donate_open',
  'donate_start',
  'click_github',
  'click_project',
  'click_contact',
  'read_complete',
];

// 主力專案：給中英標籤與自訂 site；一律置頂顯示，且不受 fork/archived/EXCLUDE 過濾影響。
// 其餘 repo 由 fetch-analytics 自動發現（GET /user/repos），用 repo 名 + GitHub description 顯示。
export const FEATURED = [
  {
    repo: 'matt-ye/personal-website',
    label: { zh: '個人網站', en: 'Personal Website' },
    site: 'https://mattye.dev',
  },
  {
    repo: 'matt-ye/dreamcatcher',
    label: { zh: '捕夢網產生器', en: 'Dreamcatcher' },
    site: 'https://telaaurealab.com/',
  },
  {
    repo: 'matt-ye/brain-exposome',
    label: { zh: '腦健康 Exposome', en: 'Brain Exposome' },
    site: 'https://brain-exposome.mattye.dev',
  },
  {
    repo: 'matt-ye/The-Golden-Lag-Engine',
    label: { zh: 'The Golden Lag Engine', en: 'The Golden Lag Engine' },
    site: null,
  },
];

// 自動發現的過濾設定。要永久隱藏某個 repo，把它的 full name（owner/repo）加進 EXCLUDE。
export const EXCLUDE = [
  // 'matt-ye/some-scratch-repo',
];
export const INCLUDE_FORKS = false;    // fork 的 star 不是自己的貢獻，預設排除
export const INCLUDE_ARCHIVED = false; // 封存的 repo 已停更，預設排除

// GA4 hostName 切分要保留的 host（其餘如 localhost、*.pages.dev 會被過濾）
export const HOSTS = ['mattye.dev', 'brain-exposome.mattye.dev'];

// 主站以外、有自己 GA4 property 的網站。
// 前置（owner 手動）：把 service account 加為該 property 的 Viewer，
// 並把「數字 property ID」存進對應的 Actions secret；secret 未設 → 該站自動跳過。
export const GA4_EXTRA_SITES = [
  {
    key: 'dreamcatcher',
    env: 'GA4_PROPERTY_ID_2', // 捕夢網（G-4MY30R916S 所屬 property 的數字 ID）
    label: { zh: '捕夢網 Tela Aurea', en: 'Dreamcatcher · Tela Aurea' },
    site: 'https://telaaurealab.com',
  },
];
