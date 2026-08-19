// 首頁與 /projects 共用的專案清單。抽出來的原因：首頁需要直接連到各個
// 子 hub（縮短點擊深度），但清單只能有一份，不然兩邊會各自漂移。
// `internal: true` 代表站內路徑，外部連結要另外加 target/rel。

export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  status: 'live' | 'in-progress' | 'archived';
  url: string;
  tags: string[];
  tagsEn: string[];
  internal?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'dreamcatcher',
    title: '捕夢網產生器',
    titleEn: 'Dreamcatcher Generator',
    description: '根據使用者設定，即時繪製專屬的捕夢網圖案。探索幾何之美與個人化創作。',
    descriptionEn: 'Renders a personalized dreamcatcher pattern in real time based on user input — exploring geometric beauty and generative design.',
    status: 'live', // 'live' | 'in-progress' | 'archived'
    /* 原本指向 a0972210123.github.io/dreamcatcher/，但那個 GitHub Pages 路徑
       早就 404（帳號改名前後都是）。捕夢網真正上線的位置是 telaaurealab.com。 */
    url: 'https://telaaurealab.com/',
    tags: ['互動工具', 'Generative Art'],
    tagsEn: ['Interactive Tool', 'Generative Art'],
  },
  {
    slug: 'one-more-step',
    title: 'One More Step',
    /* 品牌名不翻譯。原本寫 'Learning Notes'，那是 tags 裡「學習筆記」的譯法，
       被誤套到標題上——英文頁的專案卡因此叫 Learning Notes，跟站上其他地方
       （/projects/one-more-step/ 的 h1、/writing 的分類、RSS）全部對不起來。 */
    titleEn: 'One More Step',
    description: '把複雜的東西搞懂，然後寫下來。學習筆記集，涵蓋 IP 治理、電商創業等主題。',
    descriptionEn: 'Understanding complex topics, then writing them down — a collection of learning notes spanning IP governance, e-commerce entrepreneurship, and more.',
    status: 'live',
    url: '/projects/one-more-step/',
    tags: ['學習筆記'],
    tagsEn: ['Learning Notes'],
    internal: true,
  },
  {
    slug: 'marketing',
    title: '行銷專欄',
    titleEn: 'Marketing Column',
    description: '52 週行銷學習地圖的公開筆記：平台演算法、短影音、開發者行銷到品牌策略，每週一個可實作的單元。',
    descriptionEn: 'Public notes from a 52-week marketing learning roadmap — platform algorithms, short video, developer marketing, and brand strategy, one actionable unit at a time.',
    status: 'in-progress',
    url: '/projects/marketing/',
    tags: ['行銷', '學習筆記'],
    tagsEn: ['Marketing', 'Learning Notes'],
    internal: true,
  },
  {
    slug: 'family-investing-course',
    title: '給家人的投資課',
    titleEn: 'Family Investing Course',
    description: '52 週投資學習地圖的每週教材：複利、財報、估值到資產配置，含互動計算機與「教家人腳本」——與「寫給家人的投資入門」專欄連動。',
    descriptionEn: 'Weekly units from a 52-week investing curriculum — compounding, financial statements, valuation, and asset allocation, with interactive calculators and family-teaching scripts. Companion to the Family Investing column.',
    status: 'in-progress',
    url: '/projects/family-investing-course/',
    tags: ['投資', '學習筆記', '互動工具'],
    tagsEn: ['Investing', 'Learning Notes', 'Interactive Tool'],
    internal: true,
  },
  {
    slug: 'diet-calculator',
    title: '體態管理計算機',
    titleEn: 'Body Composition Calculator',
    description: '以台灣 DRIs 第八版、ISSN、ACSM 文獻為基礎，估算 BMR、TDEE、巨量營養素與碳循環週計畫。純前端計算，不上傳不儲存。',
    descriptionEn: 'BMR, TDEE, macro, and carb-cycling calculator grounded in Taiwan DRIs 8th ed., ISSN, and ACSM literature. Fully client-side — nothing is uploaded or stored.',
    status: 'live',
    url: '/projects/diet-calculator/',
    tags: ['健康工具', '文獻實證'],
    tagsEn: ['Health Tool', 'Evidence-Based'],
    internal: true,
  },
  {
    slug: 'dementia-exposome',
    title: '腦健康 Exposome 檢測',
    titleEn: 'Brain-Health Exposome Check-in',
    description: '以 2024 年 Lancet 失智症委員會 14 項可調整風險因子與居住地 PM2.5 累積暴露為基礎的教育性腦健康自我檢視，估算「腦齡加速」的教育性參考值。純前端計算，不上傳不儲存。',
    descriptionEn: 'An educational brain-health self-check based on the 2024 Lancet Commission’s 14 modifiable risk factors and lifelong PM2.5 exposure, giving an educational "brain-age acceleration" estimate. Fully client-side — nothing uploaded or stored.',
    status: 'live',
    url: 'https://brain-exposome.mattye.dev',
    tags: ['健康工具', '文獻實證'],
    tagsEn: ['Health Tool', 'Evidence-Based'],
    internal: false,
  },
];
