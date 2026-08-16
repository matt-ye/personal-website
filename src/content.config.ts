import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    /* 實質改寫內容時才填（補錯字不算）。有填才會輸出 dateModified 與頁面上的
       「更新於」，沒填就什麼都不輸出——理由同 astro.config 的 sitemap lastmod：
       填了不準的日期比不填更糟，Google 會因此不信任整站的時間訊號。 */
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['zh', 'en']).default('zh'),
    /* 雙語文章：同一篇同時提供中英內文（內文用 .lang-zh / .lang-en 包住）。
       填了 titleEn 就代表這篇會跟著站上的語言切換走，標題與日期格式一起換。 */
    titleEn: z.string().optional(),
    descriptionEn: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    series: z.string().optional(),
    /* YMYL（Your Money or Your Life）：涉及財務、健康、安全的主題。填 true 會在
       文末輸出免責聲明。

       為什麼是明確欄位而不是從 series 或 tags 自動推斷：漏標的代價不對稱——
       財經文章少了聲明，比非財經文章多了聲明糟得多。自動推斷在新開一個財經
       系列時會靜默失效，而且沒有任何訊號。明確欄位配合 YMYL_SERIES 的建置期
       守衛（見下），漏標會讓 build 直接失敗。 */
    ymyl: z.boolean().optional().default(false),
  }),
});

/**
 * 已知屬於 YMYL 的系列。這裡列名不會自動套用免責聲明——它只負責在
 * 建置時檢查該系列的文章有沒有忘記填 `ymyl: true`。
 *
 * 新增財經／醫療／法律類系列時，把 series 名稱加進來。加了之後若該系列
 * 有文章沒填 ymyl，build 會失敗並指出是哪一篇。
 */
export const YMYL_SERIES = ['family-investing'];

export const collections = { blog };
