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

// publish:false 的 repo 完全不抓取、不寫入 gist（連名字都不落地）
export const REPOS = [
  {
    repo: 'matt-ye/personal-website',
    label: { zh: '個人網站', en: 'Personal Website' },
    site: 'https://mattye.dev',
    publish: true,
  },
  {
    repo: 'matt-ye/dreamcatcher',
    label: { zh: '捕夢網產生器', en: 'Dreamcatcher' },
    site: 'https://telaaurealab.com/',
    publish: true,
  },
  {
    repo: 'matt-ye/brain-exposome',
    label: { zh: '腦健康 Exposome', en: 'Brain Exposome' },
    site: 'https://brain-exposome.mattye.dev',
    publish: true,
  },
  {
    repo: 'matt-ye/The-Golden-Lag-Engine',
    label: { zh: 'The Golden Lag Engine', en: 'The Golden Lag Engine' },
    site: null,
    publish: true,
  },
];

// GA4 hostName 切分要保留的 host（其餘如 localhost、*.pages.dev 會被過濾）
export const HOSTS = ['mattye.dev', 'brain-exposome.mattye.dev'];
