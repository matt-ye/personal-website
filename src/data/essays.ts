// Standalone essay / 隨筆 pages hosted as static HTML under public/writing/<slug>/.
// Mirrors the OmsDoc shape used by oneMoreStep.ts; surfaced on the /writing hub.
export interface EssayDoc {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  /** 英文樞紐頁的卡片描述。沒填就退回中文並標 lang="zh-TW"。 */
  descriptionEn?: string;
  tags: string[];
  date: string;   // yyyy-mm-dd, drives sort on the Writing hub
  url: string;    // explicit path to the static page under public/
}

export const essays: EssayDoc[] = [
  {
    slug: 'In-Memory-of-Miguel-Li',
    title: '懷念 Miguel — 李維晏老師',
    titleEn: 'In Memory of Miguel Li',
    description: '彙整數百位學生的回憶與祝福、生平與紀念專文，以及一片持續累積的留言牆——獻給最棒的 Miguel 老師。',
    descriptionEn:
      'Memories and messages from hundreds of students, a life story and memorial essays, and a message wall that is still growing — dedicated to Miguel, the best of teachers.',
    tags: ['隨筆', '紀念'],
    date: '2026-06-30',
    url: '/writing/In-Memory-of-Miguel-Li/',
  },
];
