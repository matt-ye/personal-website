/*
 * 站上「文章」的單一事實來源。
 *
 * 內容散在四個地方——content collection 的 Markdown，以及三個 .ts 清單
 * （它們對應 public/ 底下的手刻 HTML）。/writing 列表頁與 RSS feed 都需要
 * 這份合併後的清單，所以收集邏輯放這裡共用，而不是兩邊各抄一份：
 * 各抄一份的話，日後新增第五種來源時只改了其中一邊，另一邊會安靜地漏掉
 * 文章——RSS 尤其危險，漏了不會有人發現（沒有畫面可看）。
 *
 * ⚠️ 新增內容來源時只要改這個檔，/writing 與 /rss.xml 會同時生效。
 */
import { getCollection } from 'astro:content';
import { oneMoreStep } from '../data/oneMoreStep';
import { staticPageMeta } from '../data/staticPageMeta';
import { marketingUnits } from '../data/marketing';
import { essays } from '../data/essays';

export interface WritingItem {
  title: string;
  titleEn: string;
  /* 雙語文章用「切換」而非「兩行並陳」：卡片標題與描述跟著站上的語言換。
     titleAlt/descAlt 只有 blog 文章會填，列表頁用，RSS 用不到。 */
  titleAlt?: string;
  descAlt?: string;
  desc: string;
  href: string;
  date: Date;
  category: string;
  badge: string;
  kind: 'post' | 'feature';
  /* 渲染後的全文 HTML，只有 Markdown 文章有（手刻的 public/ 頁面拿不到）。
     RSS 用它輸出全文；列表頁用不到。
     為什麼要給全文：feed 是 LLM 抓內容的常用管道，只給一句話描述等於
     讓對方拿不到實質內容。有全文的給全文，沒有的維持描述——
     混合是刻意的取捨，總比全部都只給一句話好。 */
  contentHtml?: string;
}

/* 列表頁的系列篩選順序。categories 由實際存在的項目決定，
   所以這裡多列了也不會跑出空按鈕。 */
export const CAT_ORDER = [
  '硬核簡報',
  '投資專欄',
  '管理專欄',
  '行銷專欄',
  'One More Step',
  '隨筆',
];

export async function getWritingItems(): Promise<WritingItem[]> {
  // Blog posts → unified items
  const posts: WritingItem[] = (await getCollection('blog', ({ data }) => !data.draft)).map(p => ({
    title: p.data.title,
    titleEn: '',            // 留空：文章卡片不像 One More Step 那樣多印一行英文標題
    titleAlt: p.data.titleEn ?? '',
    descAlt: p.data.descriptionEn ?? '',
    desc: p.data.description,
    href: `/writing/${p.id}/`,
    date: p.data.pubDate,
    category: p.data.series === 'family-investing' ? '投資專欄'
            : p.data.series === 'hardcore-presentation' ? '硬核簡報'
            : p.data.series === 'management-3r' ? '管理專欄'
            /* One More Step 有兩個入口：/projects/one-more-step/ 讀 oneMoreStep.ts，
               這裡讀 content collection。長文用 Markdown 寫的走這條，才拿得到
               全文 RSS；手刻 HTML 的舊頁走 oneMoreStep.ts。兩邊都會匯進 /writing，
               而下面是純串接沒有去重——**同一篇不要兩邊都放**。 */
            : p.data.series === 'one-more-step' ? 'One More Step'
            : '隨筆',
    badge: p.data.titleEn ? '中 · EN' : (p.data.lang === 'zh' ? '中' : 'EN'),
    kind: 'post',
    /* Astro 的 content layer 已經把 Markdown 渲染好放在 rendered.html，
       不需要另外裝 markdown-it 之類的依賴。 */
    contentHtml: p.rendered?.html,
  }));

  // One More Step features → unified items
  const features: WritingItem[] = oneMoreStep.map(d => ({
    title: d.title,
    titleAlt: d.titleEn,
    /* titleAlt 決定主標題會不會跟著語言切換；titleEn 只是中文頁下方那行小字。
       兩個欄位長得像但用途不同——沒接上的話，資料裡明明有英文標題，
       英文頁卻仍顯示中文。 */
    titleEn: d.titleEn,
    descAlt: d.descriptionEn ?? '',
    desc: d.description,
    href: d.url ?? `/projects/one-more-step/${d.slug}/`,
    date: new Date(d.date),
    category: 'One More Step',
    badge: 'One More Step',
    kind: 'feature',
  }));

  // Marketing Column units → unified items
  const marketingItems: WritingItem[] = marketingUnits.map(d => ({
    title: d.title,
    titleAlt: d.titleEn,
    /* titleAlt 決定主標題會不會跟著語言切換；titleEn 只是中文頁下方那行小字。
       兩個欄位長得像但用途不同——沒接上的話，資料裡明明有英文標題，
       英文頁卻仍顯示中文。 */
    titleEn: d.titleEn,
    descAlt:
      d.descriptionEn ??
      staticPageMeta.find((m) => m.key === `projects__marketing__${d.slug}`)?.descriptionEn ?? '',
    /* marketing 的英文描述寫在 staticPageMeta（隨頁面英文版一起核准的那批），
       不在 marketingUnits 裡。在這裡接起來，而不是把文案複製一份過去——
       複製的那份遲早會和頁面上的說法走岔。 */
    desc: d.description,
    href: d.url ?? `/projects/marketing/${d.slug}/`,
    date: new Date(d.date),
    category: '行銷專欄',
    badge: '行銷專欄',
    kind: 'feature',
  }));

  // Standalone essays / 隨筆 (static HTML under public/writing/) → unified items
  const essayItems: WritingItem[] = essays.map(d => ({
    title: d.title,
    titleAlt: d.titleEn,
    /* titleAlt 決定主標題會不會跟著語言切換；titleEn 只是中文頁下方那行小字。
       兩個欄位長得像但用途不同——沒接上的話，資料裡明明有英文標題，
       英文頁卻仍顯示中文。 */
    titleEn: d.titleEn,
    descAlt: d.descriptionEn ?? '',
    desc: d.description,
    href: d.url,
    date: new Date(d.date),
    category: '隨筆',
    badge: '紀念',
    kind: 'feature',
  }));

  return [...posts, ...features, ...marketingItems, ...essayItems]
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
