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
  }),
});

export const collections = { blog };
