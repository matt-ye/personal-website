import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
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
