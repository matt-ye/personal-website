// One More Step long-form pieces — shared between /projects/one-more-step and /writing.
// `date` drives sort/display on the unified Writing hub (ISO yyyy-mm-dd). Adjust as needed.
export interface OmsDoc {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  /** 英文樞紐頁的卡片描述。沒填就退回中文並標 lang="zh-TW"——
   *  空白比中文更糟，但讓爬蟲把中文當成英文更糟。 */
  descriptionEn?: string;
  tags: string[];
  date: string;       // publish date for the Writing hub
  /*
   * 真正的公開日，只在 date 不是公開日時才需要填。
   *
   * 目前唯一的使用者是 familyInvestingCourse：那裡的 date 是「課程第幾週」的
   * 進度表（每週遞增到 2026-12），不是發佈日——26 頁全部在 2026-07 就上線了。
   * astro.config 的 readPairs 會跳過未來日期（那是為排程內容設計的），結果
   * 20 頁明明公開可讀，卻因為進度表日期在未來而不輸出 datePublished。
   *
   * 填了 published 就用它當 datePublished，且不做未來日期檢查——這個欄位的
   * 定義就是「已經公開的那一天」，不可能在未來。
   */
  published?: string;
  url?: string;       // explicit path for static-HTML subpages; omit to use slug routing
}

export const oneMoreStep: OmsDoc[] = [
  {
    slug: 'atcc-judges',
    title: '四位評審教我的事——職能治療師在商業競賽決賽現場的筆記',
    titleEn: 'What Four Judges Taught Me: An OT at a Business Case Finals',
    description: '23rd ATCC 全國決賽現場觀察：四位評審的提問如何映照提案的缺口，整理成「評審提問四原型」「五道生死題」「五型專屬死穴」三個可直接使用的工具。',
    descriptionEn:
      "Notes from the 23rd ATCC national finals: how four judges' questions exposed the gaps in each pitch, distilled into three ready-to-use tools — four archetypes of judge questions, five make-or-break questions, and the fatal flaw specific to each pitch type.",
    tags: ['簡報教練', '商業競賽', 'ATCC', '職能治療'],
    date: '2026-07-05',
    url: '/projects/one-more-step/atcc-judges/',
  },
  {
    slug: 'quantum-photonics-investing',
    title: '矽光子 × 量子電腦 × PQC 投資地圖',
    titleEn: 'Silicon Photonics, Quantum & PQC Investing Map',
    description: '從 AppWorks AW#32 / AW#33 的 PQC 與矽光子趨勢出發，整理矽光子、量子電腦五大硬體路線、光子 EDA / 光運算的觀念地圖，附台股、美股對應投資標的總覽表。',
    descriptionEn:
      'Starting from the PQC and silicon photonics themes at AppWorks AW#32 and AW#33: a concept map of silicon photonics, the five hardware approaches to quantum computing, photonic EDA and optical computing — with a table of the corresponding Taiwan- and US-listed companies.',
    tags: ['矽光子', '量子電腦', 'PQC', '投資'],
    date: '2026-06-25',
    url: '/projects/one-more-step/quantum-photonics-investing/',
  },
  {
    slug: 'aw32',
    title: 'AW#32 創投現場：19 家新創與下一個創業風向',
    titleEn: 'AW#32 Demo Day: 19 Startups & the Next Big Bet',
    description: 'AppWorks AW#32 × 緯創 Demo Day 完整解析：19 家新創、AW#33 四大 RFS（製造 AI／國防／鏈上金融／後量子密碼）、創辦人可信度與護城河矩陣，以及「下一個創業風向」分析。',
    descriptionEn:
      'A full read of the AppWorks AW#32 x Wistron Demo Day: 19 startups, the four RFS themes for AW#33 (manufacturing AI, defense, on-chain finance, post-quantum cryptography), a founder-credibility and moat matrix, and where the next wave looks to be heading.',
    tags: ['創投', '深科技', '趨勢'],
    date: '2026-06-17',
    url: '/projects/one-more-step/aw32/',
  },
  {
    slug: 'investment-notes',
    title: '台股 × 美股投資知識庫',
    titleEn: 'TW & US Stock Investment Notes',
    description: '從台股籌碼、法人解讀、可轉債、處置股，到美股三大指數、公司估值（P/E、EV/EBITDA、DCF）、財報深度解讀與 SaaS 績效指標，72 張互動知識卡片一次掌握。',
    descriptionEn:
      'From Taiwan-market flow analysis, institutional positioning, convertible bonds and disposition stocks, to the three US indices, valuation methods (P/E, EV/EBITDA, DCF), close reading of financial statements and SaaS performance metrics — 72 interactive cards.',
    tags: ['投資', '美股', '台股', '財報'],
    date: '2026-06-19',
    url: '/projects/one-more-step/investment-notes/',
  },
  {
    slug: 'boppps',
    title: 'BOPPPS × ISW 教學設計手冊',
    titleEn: 'BOPPPS Teaching Design Manual',
    description: '基於 ISW 框架的學習者中心教學設計：六大模組詳解、時間配置建議、線上工具對應，附 40 分鐘國小 AI Agent 課程完整範例與 10 篇關鍵文獻。',
    descriptionEn:
      'Learner-centered instructional design built on the ISW framework: the six modules explained, suggested time allocation and matching online tools, plus a complete 40-minute elementary-school AI agent lesson and 10 key papers.',
    tags: ['教學設計', 'BOPPPS', 'ISW', '工作坊'],
    date: '2026-06-13',
    url: '/projects/one-more-step/boppps/',
  },
  {
    slug: 'ga4-guide',
    title: 'GA4 分析全攻略',
    titleEn: 'GA4 Complete Guide',
    description: '涵蓋漏斗分析、使用者行為、行銷歸因、爬蟲偵測到 BigQuery 進階功能，附 24 個術語速查與 30+ 官方及社群連結。中英雙語並列。',
    descriptionEn:
      'Covers funnel analysis, user behavior, marketing attribution, bot detection and advanced BigQuery features, with a 24-term glossary and 30+ official and community links. Bilingual throughout.',
    tags: ['GA4', '數據分析', '行銷'],
    date: '2026-06-05',
    url: '/projects/one-more-step/ga4-guide/',
  },
  {
    slug: 'lemon-squeezy',
    title: 'Lemon Squeezy 數位創業指南',
    titleEn: "Lemon Squeezy Creator's Guide",
    description: '從創作者經濟到開第一間網路商店：數位產品類型、平台功能全覽、結帳設定，以及讓你快速上手的互動測驗與行動清單。',
    descriptionEn:
      'From the creator economy to opening your first online store: types of digital products, a full tour of the platform, checkout setup, plus an interactive quiz and action checklist to get you started.',
    tags: ['電商', '數位產品', '創業'],
    date: '2026-06-01',
    url: '/projects/one-more-step/lemon-squeezy/',
  },
  {
    slug: 'ip-governance-ai',
    title: 'IP 治理與 AI',
    titleEn: 'IP Governance & AI',
    description: '探討人工智慧時代的智慧財產權治理架構，涵蓋著作權、專利、開源授權等核心議題。',
    descriptionEn:
      'Intellectual property governance in the age of AI: copyright, patents, open-source licensing, and the core questions each of them raises.',
    tags: ['IP 治理', 'AI', '法律'],
    date: '2026-06-06',
  },
  {
    slug: 'daniels-talk',
    title: '職涯四公式：才幹、人脈、領導與傳承',
    titleEn: 'Competence · Networking · Leadership · Legacy',
    description: '整理康寧科技大中華區總裁 曾崇凱 Daniel 的演講精華：四條職涯公式、Boss vs Leader、北極星思維、英雄之旅，以及三個實用演講技巧。',
    descriptionEn:
      "Highlights from a talk by Daniel Tseng (President, Corning Technology Greater China): four career formulas, boss versus leader, north-star thinking, the hero's journey, and three practical speaking techniques.",
    tags: ['職涯', 'Soft Skills', '領導力'],
    date: '2026-06-07',
    url: '/projects/one-more-step/daniels-talk/',
  },
];
