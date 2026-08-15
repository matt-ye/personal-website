// Marketing Column units — the 52-week marketing learning roadmap made public.
// Same shape as OmsDoc; units are self-contained HTML under public/projects/marketing/<slug>/.
// Array order = curriculum order (W1 first); the hub page renders in this order.
// Dates are backdated one week apart (weekly-serial cadence); new units continue the rhythm.
import type { OmsDoc } from './oneMoreStep';

export const marketingUnits: OmsDoc[] = [
  {
    slug: 'marketing-foundations',
    title: '行銷基礎與 2026 趨勢',
    titleEn: 'Marketing Foundations & Trends',
    description: '漏斗演進三部曲（AIDA→AARRR→Flywheel）、AEO/GEO 與 zero-click 時代的對策，加上 JTBD、StoryBrand、Hook Model 三個必學框架。行銷學習地圖 W1-2。',
    /*
     * ⚠ 這段英文**不能**寫進 staticPageMeta 的 descriptionEn。
     *
     * 那個欄位同時是「這頁要不要產生英文版」的判準（StaticPageLayout 的 hasEn
     * 與 [slug].astro 的 getStaticPaths 都讀它）。這頁刻意沒有英文版——內文還有
     * 13 處純中文未補譯——所以往那裡填會連帶生出一個翻譯不完整的英文頁。
     *
     * 卡片描述與頁面有沒有英文版是兩件事：卡片就在 /en/writing/ 上，
     * 標題已經是英文了，描述沒有理由留中文。
     */
    descriptionEn:
      'The three-stage evolution of the funnel (AIDA to AARRR to Flywheel), what AEO/GEO and the zero-click era demand, plus three frameworks worth knowing: JTBD, StoryBrand and the Hook Model. Marketing Roadmap W1-2.',
    tags: ['行銷', '框架', 'AEO/GEO'],
    date: '2026-06-07',
    url: '/projects/marketing/marketing-foundations/',
  },
  {
    slug: 'social-platforms-2026',
    title: '社交平台 2026 生態',
    titleEn: 'Social Platform Ecosystems 2026',
    description: 'TikTok/Reels/Shorts 演算法差異、LinkedIn dwell time 機制、小紅書種草文化與 Pinterest 長尾流量——八大平台的經營邏輯與選擇框架。行銷學習地圖 W3-5。',
    tags: ['社群經營', '演算法', '短影音'],
    date: '2026-06-14',
    url: '/projects/marketing/social-platforms-2026/',
  },
  {
    slug: 'tech-publishing',
    title: '技術人發文平台：文化與禁忌',
    titleEn: 'Tech Publishing Platforms',
    description: 'Hacker News、Product Hunt、Reddit 的生存規則，canonical 跨發策略、build in public 的透明度取捨，與 GitHub README 行銷。行銷學習地圖 W6-7。',
    tags: ['開發者行銷', 'Launch', 'Build in Public'],
    date: '2026-06-21',
    url: '/projects/marketing/tech-publishing/',
  },
  {
    slug: 'short-video',
    title: '短影音製作方法',
    titleEn: 'Short-Form Video Production',
    description: '六種 hook 公式與四段式腳本、三平台規格與 safe zone、CapCut/DaVinci/Descript 工具選型，到一源多用 repurposing 系統與 social SEO 發布策略。行銷學習地圖 W8-10。',
    tags: ['短影音', '腳本', 'Repurposing'],
    date: '2026-06-28',
    url: '/projects/marketing/short-video/',
  },
  {
    slug: 'faceless-pipeline',
    title: '不露臉短影音 Pipeline',
    titleEn: 'The Faceless Video Pipeline',
    description: '五種 faceless 類型、中文 TTS 選型、AI 影片工具 2026 現況、n8n 自動化管線、YouTube/TikTok AI 政策紅線，與手作 process video 的零風險路線。行銷學習地圖 W11-12，Q1 完結。',
    tags: ['Faceless', 'AI 工具', '合規'],
    date: '2026-07-05',
    url: '/projects/marketing/faceless-pipeline/',
  },
];
