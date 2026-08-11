/*
 * RSS feed（/rss.xml）。
 *
 * 內容來源與 /writing 列表頁共用 src/lib/writing.ts——新增文章或新增內容
 * 來源都不需要動這個檔，feed 會自動跟上。這是刻意的：feed 漏文章不像頁面
 * 漏文章那樣看得見，唯一可靠的做法是讓兩者讀同一份清單。
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getWritingItems } from '../lib/writing';

const SITE_TITLE = '葉淨維 Matt Ye';
const SITE_DESC =
  '職能治療師、研究者、溝通教育者。硬核簡報、投資專欄、管理專欄、行銷專欄與 One More Step 學習筆記。';

export async function GET(context: APIContext) {
  const items = await getWritingItems();

  /* 排除未來日期：本站有排程性質的內容（課程週次的 date 會先寫好、時間到才
     上線，見 astro.config.mjs 的 lastmod 註解）。未來日期的 feed item 會讓
     閱讀器排序錯亂，也等於預告還沒公開的內容，所以在這裡擋掉。
     目前 /writing 的四個來源都沒有未來日，這是為之後鋪的防線。 */
  const now = Date.now();
  const published = items.filter((i) => i.date.getTime() <= now);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESC,
    // context.site 來自 astro.config.mjs 的 site，相對路徑會被組成絕對網址
    site: context.site!,
    items: published.map((i) => ({
      title: i.title,
      description: i.desc,
      link: i.href,
      pubDate: i.date,
      categories: [i.category],
    })),
    customData: '<language>zh-TW</language>',
  });
}
