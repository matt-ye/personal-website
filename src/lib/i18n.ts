/*
 * i18n 的單一事實來源：哪些頁面已經有 /en/ 的獨立網址。
 *
 * 遷移是逐頁進行的（見 docs/i18n-architecture-plan.md），過程中站上同時存在
 * 兩種頁面。站內連結必須知道差別——否則在英文頁點一個連結會被踢回中文，
 * 或更糟，連到一個還不存在的 /en/ 網址。
 *
 * 遷移一頁就在 MIGRATED_PATHS 加一條。這裡是唯一需要改的地方：
 * BaseLayout 的 hreflang、Header/Footer 的連結、各頁的站內連結都讀這份清單。
 */

/**
 * 已經有 /en/ 對應網址的路徑。結尾一律帶斜線，與站上的網址格式一致。
 *
 * ⚠ 新增 [...lang] 頁面時**必須**同步加進來，否則那頁不會輸出 hreflang——
 * 而缺 hreflang 在畫面上完全看不出來。astro.config.mjs 的 verifyI18nHreflang
 * 會在建置期比對 dist 裡實際產出的 /en/ 頁面與這份清單，漏了就讓 build 失敗。
 */
export const MIGRATED_PATHS = [
  '/',
  '/about/',
  '/sponsor/',
  '/projects/',
  '/coaching/',
  '/speeches/',
  '/projects/agent-skills/',
  '/projects/diet-calculator/',
  /* marketing 專欄的手刻頁。這四頁的判準另有一層：staticPageMeta 要有填英文欄位
     （titleEn/descriptionEn），StaticPageLayout 與 [slug].astro 都讀那個判準。
     marketing-foundations 刻意不列——它有 13 處純中文尚未補譯。 */
  '/projects/marketing/faceless-pipeline/',
  '/projects/marketing/social-platforms-2026/',
  '/projects/marketing/tech-publishing/',
  '/projects/marketing/short-video/',
] as const;

/**
 * 把站內路徑轉成當前語言該去的網址。
 *
 * 尚未遷移的頁面**刻意維持原路徑**——連到中文版好過連到 404。
 * 使用者在那一頁仍可用切換鈕看英文（未遷移的頁面保留 CSS 雙語機制）。
 */
export function localeHref(path: string, locale: string | undefined): string {
  if (locale !== 'en') return path;
  return (MIGRATED_PATHS as readonly string[]).includes(path) ? `/en${path}` : path;
}

/** 這個路徑是否已經有英文版（決定要不要輸出 hreflang）。 */
export function hasEnglishRoute(pathname: string): boolean {
  const zhPath = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return (MIGRATED_PATHS as readonly string[]).includes(zhPath);
}
