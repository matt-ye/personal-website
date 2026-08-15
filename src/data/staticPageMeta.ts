/*
 * public/ 手刻頁的 head metadata——單一事實來源。
 *
 * 由 scripts/extract-static-pages.mjs 萃取。key 是把路徑的 / 換成 __，
 * 用來對應 src/data/static-pages/<key>.html 的內容片段。
 *
 * jsonLd 保留原始字串陣列：各頁的結構不同（Article／+CreativeWorkSeries／
 * +Person／WebPage），重組的風險大於收益。
 */
export interface StaticPageMeta {
  key: string;
  route: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  /* 英文版 meta。有填才會產出 /en/ 網址——StaticPageLayout 與 [...lang] 路由
     都讀這四個欄位判斷「這頁準備好了沒」，不另外維護一份清單。
     沒填的頁就單純沒有英文網址，也不輸出 hreflang（同 MIGRATED_PATHS 的判準）。 */
  titleEn?: string;
  descriptionEn?: string;
  ogTitleEn?: string;
  ogDescriptionEn?: string;
  ogType: string;
  ogImage: string;
  canonical: string;
  ogLocale?: string;
  ogImageAlt?: string;
  twitterSite?: string;
  twitterCreator?: string;
  themeColor?: string;
  /**
   * 這頁自己需要的外部資源（字型等）。
   *
   * ⚠ 這個欄位是補上遷移時的缺口：手刻頁的 <head> 被 staticPageMeta 取代之後，
   *   原本寫在那裡的字型連結整批消失。症狀不是頁面壞掉，而是圖示變成
   *   ligature 文字（arrow_back、dark_mode）、字體退回系統字——
   *   畫面「看起來只是有點怪」，所以三個月沒有人發現。
   */
  headLinks?: { rel: string; href: string; crossorigin?: boolean }[];
  articlePublishedTime?: string;
  /** <html> 上的 data-* 屬性（各頁自己的主題／語言機制） */
  htmlAttrs?: Record<string, string>;
  jsonLd?: string[];
}

export const staticPageMeta: StaticPageMeta[] = [
  {
    "key": "projects__marketing__faceless-pipeline",
    "route": "/projects/marketing/faceless-pipeline/",
    "title": "不露臉短影音 Pipeline — Faceless Video | Marketing Column · Matt Ye",
    "description": "Faceless 頻道類型、中文 TTS 選型、n8n 自動化管線、YouTube/TikTok 的 AI 內容政策紅線，與手作 process video 實戰。",
    "ogTitle": "不露臉短影音 Pipeline — Faceless Video Pipeline",
    "ogDescription": "AI 工具鏈、自動化、平台政策紅線與手作 process video。中英雙語學習單元 W11-12。",
    "titleEn": "The Faceless Video Pipeline | Marketing Column · Matt Ye",
    "descriptionEn": "Faceless channel formats, Mandarin TTS selection, n8n automation pipelines, the AI-content policy lines on YouTube and TikTok, and hands-on process video.",
    "ogTitleEn": "The Faceless Video Pipeline",
    "ogDescriptionEn": "AI toolchains, automation, platform policy lines, and hands-on process video. Bilingual learning unit W11-12.",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/marketing/faceless-pipeline/",
    "ogLocale": "zh_TW",
    "htmlAttrs": {
      "data-theme": "light",
      "data-lang": "zh"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"不露臉短影音 Pipeline — Faceless Video Pipeline\",\n    \"description\": \"AI 工具鏈、自動化、平台政策紅線與手作 process video。中英雙語學習單元 W11-12。\",\n    \"url\": \"https://mattye.dev/projects/marketing/faceless-pipeline/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/marketing/faceless-pipeline/\",\n    \"isPartOf\": {\n      \"@type\": \"CreativeWorkSeries\",\n      \"name\": \"行銷專欄 Marketing Column\",\n      \"url\": \"https://mattye.dev/projects/marketing/\"\n    }\n  }"
    ]
  },
  {
    "key": "projects__marketing__marketing-foundations",
    "route": "/projects/marketing/marketing-foundations/",
    "title": "行銷基礎與 2026 趨勢 — Marketing Foundations | Marketing Column · Matt Ye",
    "description": "行銷漏斗演進（AIDA→AARRR→Flywheel）、AEO/GEO、zero-click content、JTBD/StoryBrand/Hook Model。中英雙語行銷學習單元 W1-2。",
    "ogTitle": "行銷基礎與 2026 趨勢 — Marketing Foundations",
    "ogDescription": "行銷漏斗演進、AEO/GEO、zero-click、JTBD/StoryBrand/Hook Model。中英雙語學習單元。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/marketing/marketing-foundations/",
    "ogLocale": "zh_TW",
    "htmlAttrs": {
      "data-theme": "light",
      "data-lang": "zh"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"行銷基礎與 2026 趨勢 — Marketing Foundations\",\n    \"description\": \"行銷漏斗演進、AEO/GEO、zero-click、JTBD/StoryBrand/Hook Model。中英雙語學習單元。\",\n    \"url\": \"https://mattye.dev/projects/marketing/marketing-foundations/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/marketing/marketing-foundations/\",\n    \"isPartOf\": {\n      \"@type\": \"CreativeWorkSeries\",\n      \"name\": \"行銷專欄 Marketing Column\",\n      \"url\": \"https://mattye.dev/projects/marketing/\"\n    }\n  }"
    ]
  },
  {
    "key": "projects__marketing__short-video",
    "route": "/projects/marketing/short-video/",
    "title": "短影音製作方法 — Short-Form Video | Marketing Column · Matt Ye",
    "description": "Hook 公式、三平台規格與 safe zone、剪輯工具選型、一源多用 repurposing 系統，以及 social SEO 發布策略。",
    "ogTitle": "短影音製作方法 — Short-Form Video Production",
    "ogDescription": "腳本結構、剪輯工作流、一源多用系統。中英雙語學習單元 W8-10。",
    "titleEn": "Short-Form Video Production | Marketing Column · Matt Ye",
    "descriptionEn": "Hook formulas, specs and safe zones across three platforms, editing-tool selection, a repurposing system, and social-SEO publishing strategy.",
    "ogTitleEn": "Short-Form Video Production",
    "ogDescriptionEn": "Script structure, editing workflow, and a repurposing system. Bilingual learning unit W8-10.",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/marketing/short-video/",
    "ogLocale": "zh_TW",
    "htmlAttrs": {
      "data-theme": "light",
      "data-lang": "zh"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"短影音製作方法 — Short-Form Video Production\",\n    \"description\": \"腳本結構、剪輯工作流、一源多用系統。中英雙語學習單元 W8-10。\",\n    \"url\": \"https://mattye.dev/projects/marketing/short-video/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/marketing/short-video/\",\n    \"isPartOf\": {\n      \"@type\": \"CreativeWorkSeries\",\n      \"name\": \"行銷專欄 Marketing Column\",\n      \"url\": \"https://mattye.dev/projects/marketing/\"\n    }\n  }"
    ]
  },
  {
    "key": "projects__marketing__social-platforms-2026",
    "route": "/projects/marketing/social-platforms-2026/",
    "title": "社交平台 2026 生態 — Social Platforms | Marketing Column · Matt Ye",
    "description": "TikTok/Reels/Shorts 演算法、Threads/X/LinkedIn、小紅書/Pinterest/Facebook 完整生態解析。中英雙語行銷學習單元 W3-5。",
    "ogTitle": "社交平台 2026 生態 — Social Platforms 2026",
    "ogDescription": "八大平台演算法邏輯、受眾輪廓、內容偏好與商業功能。中英雙語學習單元。",
    "titleEn": "Social Platform Ecosystems 2026 | Marketing Column · Matt Ye",
    "descriptionEn": "TikTok, Reels and Shorts algorithms; Threads, X and LinkedIn; Xiaohongshu, Pinterest and Facebook — a full ecosystem breakdown. Bilingual unit W3-5.",
    "ogTitleEn": "Social Platform Ecosystems 2026",
    "ogDescriptionEn": "Algorithm logic, audience profiles, content preferences and commerce features across eight platforms. Bilingual learning unit.",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/marketing/social-platforms-2026/",
    "ogLocale": "zh_TW",
    "htmlAttrs": {
      "data-theme": "light",
      "data-lang": "zh"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"社交平台 2026 生態 — Social Platforms 2026\",\n    \"description\": \"八大平台演算法邏輯、受眾輪廓、內容偏好與商業功能。中英雙語學習單元。\",\n    \"url\": \"https://mattye.dev/projects/marketing/social-platforms-2026/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/marketing/social-platforms-2026/\",\n    \"isPartOf\": {\n      \"@type\": \"CreativeWorkSeries\",\n      \"name\": \"行銷專欄 Marketing Column\",\n      \"url\": \"https://mattye.dev/projects/marketing/\"\n    }\n  }"
    ]
  },
  {
    "key": "projects__marketing__tech-publishing",
    "route": "/projects/marketing/tech-publishing/",
    "title": "技術人發文平台 — Tech Publishing | Marketing Column · Matt Ye",
    "description": "Hacker News、Product Hunt、Reddit、dev.to、Substack、build in public、GitHub 行銷的文化與禁忌。中英雙語行銷學習單元 W6-7。",
    "ogTitle": "技術人發文平台 — Tech Publishing Platforms",
    "ogDescription": "HN/PH/Reddit/dev.to/Substack/GitHub 的平台文化、成功模式與絕對禁忌。中英雙語學習單元。",
    "titleEn": "Tech Publishing Platforms | Marketing Column · Matt Ye",
    "descriptionEn": "Hacker News, Product Hunt, Reddit, dev.to, Substack, build in public and GitHub marketing — the culture and the taboos. Bilingual unit W6-7.",
    "ogTitleEn": "Tech Publishing Platforms",
    "ogDescriptionEn": "Platform culture, what works and what is absolutely off-limits on HN, PH, Reddit, dev.to, Substack and GitHub. Bilingual learning unit.",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/marketing/tech-publishing/",
    "ogLocale": "zh_TW",
    "htmlAttrs": {
      "data-theme": "light",
      "data-lang": "zh"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"技術人發文平台 — Tech Publishing Platforms\",\n    \"description\": \"HN/PH/Reddit/dev.to/Substack/GitHub 的平台文化、成功模式與絕對禁忌。中英雙語學習單元。\",\n    \"url\": \"https://mattye.dev/projects/marketing/tech-publishing/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/marketing/tech-publishing/\",\n    \"isPartOf\": {\n      \"@type\": \"CreativeWorkSeries\",\n      \"name\": \"行銷專欄 Marketing Column\",\n      \"url\": \"https://mattye.dev/projects/marketing/\"\n    }\n  }"
    ]
  },
  {
    "key": "projects__one-more-step__atcc-judges",
    "route": "/projects/one-more-step/atcc-judges/",
    "title": "四位評審教我的事——職能治療師在商業競賽決賽現場的筆記 · One More Step",
    "description": "23rd ATCC 全國決賽現場觀察：四位評審的提問如何映照提案的缺口，整理成「評審提問四原型」「五道生死題」「五型專屬死穴」三個可直接使用的工具。",
    "ogTitle": "四位評審教我的事——職能治療師在商業競賽決賽現場的筆記",
    "ogDescription": "23rd ATCC 全國決賽現場觀察：四位評審的提問如何映照提案的缺口，整理成「評審提問四原型」「五道生死題」「五型專屬死穴」三個可直接使用的工具。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/atcc-judges/",
    "articlePublishedTime": "2026-07-05T00:00:00+08:00",
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"四位評審教我的事——職能治療師在商業競賽決賽現場的筆記\",\n    \"description\": \"23rd ATCC 全國決賽現場觀察：四位評審的提問如何映照提案的缺口，整理成「評審提問四原型」「五道生死題」「五型專屬死穴」三個可直接使用的工具。\",\n    \"url\": \"https://mattye.dev/projects/one-more-step/atcc-judges/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/one-more-step/atcc-judges/\",\n    \"datePublished\": \"2026-07-05\"\n  }"
    ]
  },
  {
    "key": "projects__one-more-step__aw32",
      "headLinks": [
        { "rel": "preconnect", "href": "https://fonts.googleapis.com" },
        { "rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": true },
        { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300..700&family=Noto+Sans+TC:wght@400;500;700&display=swap" },
        { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" }
      ],
    "route": "/projects/one-more-step/aw32/",
    "title": "AppWorks 第 32 屆 Demo Day（AW#32）：19 家新創 | One More Step",
    "description": "AppWorks 第 32 屆 Demo Day（AW#32）×緯創：19 家新創解析、AW#33 四大 RFS、創辦人可信度與護城河矩陣。",
    "ogTitle": "AppWorks 第 32 屆 Demo Day（AW#32）：19 家新創 | One More Step",
    "ogDescription": "整理 AppWorks AW#32 × 緯創 Demo Day：19 家新創團隊解析、AW#33 四大 RFS（製造 AI／國防／鏈上金融／後量子密碼）、創辦人可信度與護城河矩陣，以及下一個創業風向觀點。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/aw32/",
    "titleEn": "AppWorks Demo Day #32 (AW#32): 19 Startups | One More Step",
    "descriptionEn": "AppWorks Demo Day #32 (AW#32) with Wistron: 19 startups analysed, the four AW#33 RFS themes, and a founder-credibility and moat matrix.",
    "twitterSite": "@MattChingWeiYe",
    "twitterCreator": "@MattChingWeiYe",
    "themeColor": "#6750A4",
    "htmlAttrs": {
      "data-theme": "light"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"AW#32 Demo Day: 19 Startups & the Next Big Bet\",\n    \"description\": \"整理 AppWorks AW#32 × 緯創 Demo Day：19 家新創團隊解析、AW#33 四大 RFS（製造 AI／國防／鏈上金融／後量子密碼）、創辦人可信度與護城河矩陣，以及下一個創業風向觀點。\",\n    \"datePublished\": \"2026-06-17\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"@id\": \"https://mattye.dev/#person\",\n      \"name\": \"Ching-Wei (Matt) Ye\"\n    },\n    \"publisher\": {\n      \"@type\": \"Person\",\n      \"@id\": \"https://mattye.dev/#person\",\n      \"name\": \"Ching-Wei (Matt) Ye\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/one-more-step/aw32/\",\n    \"inLanguage\": \"zh-TW\"\n  }"
    ]
  },
  {
    "key": "projects__one-more-step__boppps",
    "route": "/projects/one-more-step/boppps/",
    "title": "BOPPPS × ISW — 教學設計手冊 · One More Step",
    "description": "BOPPPS 六大模組（暖身、目標、前測、參與式學習、後測、總結）與其 ISW 起源，44 項研究驗證的建構主義教學框架。",
    "ogTitle": "BOPPPS × ISW — 教學設計手冊 · One More Step",
    "ogDescription": "結合 ISW 1979 年起源的教學技能工作坊，BOPPPS 六大模組（暖身、目標、前測、參與式學習、後測、總結）為核心，44 項研究驗證的建構主義學習框架，適用線上課程與工作坊設計。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/boppps/",
    "twitterSite": "@MattChingWeiYe",
    "twitterCreator": "@MattChingWeiYe",
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"BOPPPS × ISW — 教學設計手冊 · One More Step\",\n    \"description\": \"結合 ISW 1979 年起源的教學技能工作坊，BOPPPS 六大模組（暖身、目標、前測、參與式學習、後測、總結）為核心，44 項研究驗證的建構主義學習框架，適用線上課程與工作坊設計。\",\n    \"url\": \"https://mattye.dev/projects/one-more-step/boppps/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/one-more-step/boppps/\"\n  }"
    ]
  },
  {
    "key": "projects__one-more-step__daniels-talk",
      "headLinks": [
        { "rel": "preconnect", "href": "https://fonts.googleapis.com" },
        { "rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": true },
        { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300..700&family=Noto+Sans+TC:wght@400;500;700&display=swap" },
        { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" }
      ],
    "route": "/projects/one-more-step/daniels-talk/",
    "title": "職涯四公式：才幹、人脈、領導與傳承 — One More Step",
    "description": "整理康寧科技大中華區總裁 曾崇凱 Daniel 的演講精華：四條職涯公式、Boss vs Leader、北極星思維、英雄之旅，以及三個實用演講技巧。",
    "ogTitle": "職涯四公式：才幹、人脈、領導與傳承 — One More Step",
    "ogDescription": "整理康寧科技大中華區總裁 曾崇凱 Daniel 的演講精華：四條職涯公式、Boss vs Leader、北極星思維、英雄之旅，以及三個實用演講技巧。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/daniels-talk/",
    "titleEn": "Four Competence Formulas — One More Step",
    "descriptionEn": "Takeaways from Daniel Tseng, President of Corning Greater China: four career formulas, Boss vs Leader, North Star thinking, and three speaking techniques.",
    "twitterSite": "@MattChingWeiYe",
    "twitterCreator": "@MattChingWeiYe",
    "themeColor": "#6750A4",
    "htmlAttrs": {
      "data-theme": "light"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"職涯四公式：才幹、人脈、領導與傳承 — One More Step\",\n    \"description\": \"整理康寧科技大中華區總裁 曾崇凱 Daniel 的演講精華：四條職涯公式、Boss vs Leader、北極星思維、英雄之旅，以及三個實用演講技巧。\",\n    \"url\": \"https://mattye.dev/projects/one-more-step/daniels-talk/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/one-more-step/daniels-talk/\"\n  }"
    ]
  },
  {
    "key": "projects__one-more-step__ga4-guide",
    "route": "/projects/one-more-step/ga4-guide/",
    "title": "GA4 全攻略",
    "description": "GA4 完整教學：漏斗分析、使用者行為、行銷應用、爬蟲偵測、進階功能。中英雙語。",
    "ogTitle": "GA4 全攻略",
    "ogDescription": "GA4 完整教學：漏斗分析、使用者行為、行銷應用、爬蟲偵測、進階功能。中英雙語。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/ga4-guide/",
    "titleEn": "GA4 Complete Guide",
    "descriptionEn": "A complete GA4 walkthrough: funnel analysis, user behaviour, marketing applications, bot detection and advanced features.",
    "twitterSite": "@MattChingWeiYe",
    "twitterCreator": "@MattChingWeiYe",
    "htmlAttrs": {
      "data-theme": "light",
      "data-lang": "zh"
    },
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"GA4 全攻略\",\n    \"description\": \"GA4 完整教學：漏斗分析、使用者行為、行銷應用、爬蟲偵測、進階功能。中英雙語。\",\n    \"url\": \"https://mattye.dev/projects/one-more-step/ga4-guide/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/one-more-step/ga4-guide/\"\n  }"
    ]
  },
  {
    "key": "projects__one-more-step__investment-notes",
      "headLinks": [
        { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" }
      ],
    "route": "/projects/one-more-step/investment-notes/",
    "title": "台股 × 美股投資知識庫",
    "description": "台股筆記與美股估值、財報、指標全方位知識庫。融資、籌碼、法人、選擇權、可轉債等投資概念詳解。",
    "ogTitle": "台股 × 美股投資知識庫",
    "ogDescription": "台股筆記與美股估值、財報、指標全方位知識庫。融資、籌碼、法人、選擇權、可轉債等投資概念詳解。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/investment-notes/",
    "twitterSite": "@MattChingWeiYe",
    "twitterCreator": "@MattChingWeiYe",
    "jsonLd": [
      "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Article\",\n  \"headline\": \"台股 × 美股投資知識庫\",\n  \"description\": \"台股筆記與美股估值、財報、指標全方位知識庫。融資、籌碼、法人、選擇權、可轉債等投資概念詳解。\",\n  \"url\": \"https://mattye.dev/projects/one-more-step/investment-notes/\",\n  \"inLanguage\": \"zh-TW\",\n  \"image\": \"https://mattye.dev/og-logo.png\",\n  \"author\": {\n    \"@id\": \"https://mattye.dev/#person\"\n  },\n  \"publisher\": {\n    \"@id\": \"https://mattye.dev/#person\"\n  },\n  \"mainEntityOfPage\": \"https://mattye.dev/projects/one-more-step/investment-notes/\"\n}"
    ]
  },
  {
    "key": "projects__one-more-step__lemon-squeezy",
    "route": "/projects/one-more-step/lemon-squeezy/",
    "title": "Lemon Squeezy 數位創業學習指南",
    "description": "從創作者經濟到開第一間網路商店：數位產品類型、平台功能全覽、結帳設定，以及互動測驗與行動清單。",
    "ogTitle": "Lemon Squeezy 數位創業學習指南",
    "ogDescription": "從創作者經濟到開第一間網路商店：數位產品類型、平台功能全覽、結帳設定，以及互動測驗與行動清單。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/lemon-squeezy/",
    "twitterSite": "@MattChingWeiYe",
    "twitterCreator": "@MattChingWeiYe",
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"Lemon Squeezy 數位創業學習指南\",\n    \"description\": \"從創作者經濟到開第一間網路商店：數位產品類型、平台功能全覽、結帳設定，以及互動測驗與行動清單。\",\n    \"url\": \"https://mattye.dev/projects/one-more-step/lemon-squeezy/\",\n    \"inLanguage\": \"zh-TW\",\n    \"image\": \"https://mattye.dev/og-logo.png\",\n    \"author\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"publisher\": {\n      \"@id\": \"https://mattye.dev/#person\"\n    },\n    \"mainEntityOfPage\": \"https://mattye.dev/projects/one-more-step/lemon-squeezy/\"\n  }"
    ]
  },
  {
    "key": "projects__one-more-step__quantum-photonics-investing",
    "route": "/projects/one-more-step/quantum-photonics-investing/",
    "title": "矽光子 × 量子電腦 × PQC — 趨勢與投資地圖 · One More Step",
    "description": "矽光子、量子電腦五大硬體路線、光子 EDA 與光互連物理層的技術地圖，以及 Nvidia 逾 65 億美元光子投資版圖與對應台股標的。",
    "ogTitle": "矽光子 × 量子電腦 × PQC — 趨勢與投資地圖",
    "ogDescription": "從 AppWorks AW#32 / AW#33 的 PQC 與矽光子趨勢出發，整理矽光子、量子電腦五大硬體路線、光子 EDA / 光運算、光互連物理層，以及 Nvidia 逾 65 億美元光子投資版圖與對應台股、美股標的。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/og-logo.png",
    "canonical": "https://mattye.dev/projects/one-more-step/quantum-photonics-investing/",
    "ogLocale": "zh_TW",
    "articlePublishedTime": "2026-06-25T00:00:00+08:00",
    "jsonLd": [
      "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"矽光子 × 量子電腦 × PQC — 趨勢與投資地圖\",\n    \"description\": \"從 AppWorks AW#32 / AW#33 的 PQC 與矽光子趨勢出發，整理矽光子、量子電腦五大硬體路線、光子 EDA / 光運算、光互連物理層，以及 Nvidia 光子投資版圖與對應台股、美股標的。\",\n    \"url\": \"https://mattye.dev/projects/one-more-step/quantum-photonics-investing/\",\n    \"datePublished\": \"2026-06-25\",\n    \"inLanguage\": \"zh-TW\",\n    \"author\": { \"@id\": \"https://mattye.dev/#person\" },\n    \"publisher\": { \"@id\": \"https://mattye.dev/#person\" }\n  }"
    ]
  },
  {
    "key": "writing__In-Memory-of-Miguel-Li",
    "route": "/writing/In-Memory-of-Miguel-Li/",
    "title": "懷念 Miguel 李維晏老師 ・ 教育是分享快樂的志業",
    "description": "李維晏（Miguel）老師紀念網站——彙整十餘年、數百位台大學生的課程回饋與留言，以及她的著作、研究計畫與開放式課程。",
    "ogTitle": "懷念 Miguel 李維晏老師 ・ 教育是分享快樂的志業",
    "ogDescription": "李維晏（Miguel）老師紀念網站——彙整十餘年、數百位台大學生的課程回饋與留言，以及她的著作、研究計畫與開放式課程。",
    "ogType": "article",
    "ogImage": "https://mattye.dev/writing/In-Memory-of-Miguel-Li/og-miguel.jpg",
    "canonical": "https://mattye.dev/writing/In-Memory-of-Miguel-Li/",
    "ogLocale": "zh_TW",
    "ogImageAlt": "李維晏（Miguel）老師的照片，與「教育是分享快樂的志業」字樣",
    "jsonLd": [
      "{\"@context\": \"https://schema.org\", \"@type\": \"WebPage\", \"name\": \"懷念 Miguel 李維晏老師 ・ 教育是分享快樂的志業\", \"description\": \"李維晏（Miguel）老師紀念網站——彙整十餘年、數百位台大學生的課程回饋與留言，以及她的著作、研究計畫與開放式課程。\", \"url\": \"https://mattye.dev/writing/In-Memory-of-Miguel-Li/\", \"inLanguage\": \"zh-TW\", \"image\": \"https://mattye.dev/writing/In-Memory-of-Miguel-Li/og-miguel.jpg\", \"about\": {\"@type\": \"Person\", \"name\": \"李維晏 Miguel Li\", \"jobTitle\": \"教師\"}, \"author\": {\"@id\": \"https://mattye.dev/#person\"}, \"publisher\": {\"@id\": \"https://mattye.dev/#person\"}}",
      "{\"@context\": \"https://schema.org\", \"@type\": \"Person\", \"name\": \"李維晏\", \"alternateName\": [\"Wei-Yan Li\", \"Miguel Li\"], \"jobTitle\": \"國立臺灣大學寫作教學中心副教授兼中心主任\", \"affiliation\": {\"@type\": \"CollegeOrUniversity\", \"name\": \"National Taiwan University\"}, \"sameAs\": [\"https://orcid.org/0000-0002-1803-8088\", \"https://scholars.lib.ntu.edu.tw/handle/123456789/718759\"]}"
    ]
  }
];
