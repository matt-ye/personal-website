/*
 * Sheet 快照的讀取層（build 期執行）。
 *
 * 資料來自 src/data/sheets/*.json，由 scripts/fetch-sheets.mjs 產生、
 * .github/workflows/sync-sheets.yml 每日更新。頁面不再在瀏覽器端 fetch Google——
 * 內容因此進得了 HTML，爬蟲與 LLM 看得到，也不必等外部請求才畫得出畫面。
 *
 * ⚠ 這裡是唯一做「欄名 → 型別」對應的地方。Sheet 的中英欄位命名慣例並不一致
 *   （`_zh`/`_eng`/`_en`/無後綴/純英文欄名混用，見各 map 的註解），所以刻意
 *   逐表寫死對應，而不是用「猜後綴」的通則——通則遇到 `競賽名稱` / `Contest Name`
 *   這種完全不同名的配對就會安靜地取不到值。
 */

import speechesRaw from '../data/sheets/speeches.json';
import siteContentRaw from '../data/sheets/site-content.json';
import coreStrengthsRaw from '../data/sheets/core-strengths.json';
import experienceRolesRaw from '../data/sheets/experience-roles.json';
import personalAwardsRaw from '../data/sheets/personal-awards.json';
import menteesAwardsRaw from '../data/sheets/mentees-awards.json';
import testimonialsRaw from '../data/sheets/testimonials.json';

type Row = Record<string, string>;

export interface Bilingual {
  zh: string;
  en: string;
}

const bi = (zh?: string, en?: string): Bilingual => ({
  zh: (zh ?? '').trim(),
  en: (en ?? '').trim(),
});

/** 取顯示語言。英文缺值時退回中文——寧可顯示中文，也不要出現空白。 */
export const pick = (b: Bilingual, lang: 'zh' | 'en'): string =>
  lang === 'en' && b.en ? b.en : b.zh;

/** 英文缺值時要標回 `lang="zh-TW"`，讓爬蟲與朗讀器知道這段其實是中文。 */
export const langAttr = (b: Bilingual, lang: 'zh' | 'en'): string =>
  lang === 'en' && b.en ? 'en' : 'zh-TW';

/** Sheet 的 show 欄是字串 'TRUE'/'FALSE'；沒有這欄時視為顯示。 */
const visible = (r: Row) => (r.show ?? 'TRUE').toUpperCase() !== 'FALSE';

const num = (v?: string) => {
  const n = Number((v ?? '').replace(/[^\d.-]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

/* URL 欄位在 Sheet 裡不保證乾淨——實際資料中有「報名資訊: https://… ⏎ 電子報：https://…」
   這種一格塞多個連結加說明文字的寫法。整格直接當 href 會產生壞連結
   （內容原本在瀏覽器端渲染，連結健檢掃不到，所以這個問題一直被藏著）。
   這裡只取第一個看起來完整的網址，取不到就當作沒有連結。 */
const firstUrl = (v?: string): string => {
  const m = (v ?? '').match(/https?:\/\/[^\s"'<>]+/);
  return m ? m[0] : '';
};

/** Sheet 的日期是 2020/9/7 這種格式，Date 建構子對它的解讀跨平台不一致，所以自己拆。 */
const toDate = (raw?: string): Date | null => {
  const m = (raw ?? '').match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
};

/* ── 演講紀錄（index 的統計與 speeches 的列表共用同一份） ───────────── */

export interface Speech {
  date: string;
  dateObj: Date | null;
  year: number;
  host: Bilingual;         // 主辦單位_zh / 主辦單位_eng
  hostType: string;
  coHost1: Bilingual;
  coHost1Type: string;
  coHost2: Bilingual;
  coHost2Type: string;
  topic: Bilingual;        // ⚠ 主題 / Topic（英文欄沒有後綴，是獨立欄名）
  eventType: string;       // 場次類型
  mode: string;            // 線上/實體
  language: string;
  audienceEdu: string;     // 聽眾教育程度
  attendees: number;       // 人數/觀看
  hours: number;
  youtubeUrl: string;
  otherUrl: string;
}

export function getSpeeches(): Speech[] {
  return (speechesRaw as Row[])
    .filter((r) => r['日期'] && r['主辦單位_zh'])
    .map((r) => {
      const d = toDate(r['日期']);
      return {
        date: r['日期'] ?? '',
        dateObj: d,
        year: d ? d.getFullYear() : 0,
        host: bi(r['主辦單位_zh'], r['主辦單位_eng']),
        hostType: r['主辦單位_類型'] ?? '',
        coHost1: bi(r['協辦單位_1_zh'], r['協辦單位_1_eng']),
        coHost1Type: r['協辦單位_1_類型'] ?? '',
        coHost2: bi(r['協辦單位_2_zh'], r['協辦單位_2_eng']),
        coHost2Type: r['協辦單位_2_類型'] ?? '',
        topic: bi(r['主題'], r['Topic']),
        eventType: r['場次類型'] ?? '',
        mode: r['線上/實體'] ?? '',
        language: r['語言'] ?? '',
        audienceEdu: r['聽眾教育程度'] ?? '',
        attendees: num(r['人數/觀看']),
        hours: num(r['小時']),
        youtubeUrl: firstUrl(r['YouTube URL']),
        otherUrl: firstUrl(r['News, Blog, or Other URL']),
      };
    })
    .sort((a, b) => (b.dateObj?.getTime() ?? 0) - (a.dateObj?.getTime() ?? 0));
}

/* ── 首頁文案（key-value 表） ──────────────────────────────────────── */

export function getSiteContent(): Record<string, Bilingual> {
  const out: Record<string, Bilingual> = {};
  for (const r of siteContentRaw as Row[]) {
    if (r.key) out[r.key] = bi(r.value, r.value_eng);
  }
  return out;
}

/* ── 核心優勢 ─────────────────────────────────────────────────────── */

export interface CoreStrength {
  order: number;
  icon: string;
  title: Bilingual;        // title / title_eng
  description: Bilingual;
}

export function getCoreStrengths(): CoreStrength[] {
  return (coreStrengthsRaw as Row[])
    .filter(visible)
    .map((r) => ({
      order: num(r['排序']),
      icon: r.icon ?? '',
      title: bi(r.title, r.title_eng),
      description: bi(r.description, r.description_eng),
    }))
    .sort((a, b) => a.order - b.order);
}

/* ── 經歷與角色 ───────────────────────────────────────────────────── */

export interface ExperienceRole {
  order: number;
  icon: string;
  org: Bilingual;          // ⚠ org_zh / org_en（這張表用 _en 不是 _eng）
  title: Bilingual;        // title / title_eng
  description: Bilingual;
  period: string;
}

export function getExperienceRoles(): ExperienceRole[] {
  return (experienceRolesRaw as Row[])
    .filter(visible)
    .map((r) => ({
      order: num(r['排序']),
      icon: r.icon ?? '',
      org: bi(r.org_zh, r.org_en),
      title: bi(r.title, r.title_eng),
      description: bi(r.description, r.description_eng),
      period: r.period ?? '',
    }))
    .sort((a, b) => a.order - b.order);
}

/* ── 個人獎項 ─────────────────────────────────────────────────────── */

export interface PersonalAward {
  year: string;
  contest: Bilingual;      // 競賽名稱_zh / 競賽名稱_eng
  award: Bilingual;
  host: Bilingual;
  link: string;
  note: Bilingual;
  icon: string;
  id: string;
}

export function getPersonalAwards(): PersonalAward[] {
  return (personalAwardsRaw as Row[])
    .filter(visible)
    .map((r) => ({
      year: r['年份'] ?? '',
      contest: bi(r['競賽名稱_zh'], r['競賽名稱_eng']),
      award: bi(r['獎項_zh'], r['獎項_eng']),
      host: bi(r['主辦單位_zh'], r['主辦單位_eng']),
      link: firstUrl(r['連結']),
      note: bi(r['說明_zh'], r['說明_eng']),
      icon: r.icon ?? '',
      id: r.ID ?? '',
    }))
    .sort((a, b) => b.year.localeCompare(a.year));
}

/* ── 培訓戰績 ─────────────────────────────────────────────────────── */

export interface MenteeAward {
  year: string;
  contest: Bilingual;      // ⚠ 競賽名稱 / Contest Name（英文欄是獨立欄名，不是後綴）
  contestAbbr: string;
  team: string;
  award: string;
  prize: string;
  teamCount: string;
  urls: string;
  newsLink: string;
  highlight: Bilingual;    // ⚠ 訓練內容亮點_zh / 訓練內容亮點_en（這裡又是 _en）
}

export function getMenteesAwards(): MenteeAward[] {
  return (menteesAwardsRaw as Row[])
    .filter((r) => r['年分'] || r['競賽名稱'])
    .map((r) => ({
      year: r['年分'] ?? '',
      contest: bi(r['競賽名稱'], r['Contest Name']),
      contestAbbr: r['Contest Abbreviation'] ?? '',
      team: r['Mentee/Team Name'] ?? '',
      award: r['獎項'] ?? '',
      prize: r['獎金 (NTD)'] ?? '',
      teamCount: r['組數'] ?? '',
      urls: r['URLs'] ?? '',
      newsLink: r['報導連結'] ?? '',
      highlight: bi(r['訓練內容亮點_zh'], r['訓練內容亮點_en']),
    }))
    .sort((a, b) => b.year.localeCompare(a.year));
}

/* ── 學員回饋 ─────────────────────────────────────────────────────── */

export interface Testimonial {
  order: number;
  team: string;
  quote: Bilingual;        // quote / quote_eng
  context: Bilingual;
}

export function getTestimonials(): Testimonial[] {
  return (testimonialsRaw as Row[])
    .filter(visible)
    .filter((r) => r.quote)
    .map((r) => ({
      order: num(r['排序']),
      team: r['Mentee/Team Name'] ?? '',
      quote: bi(r.quote, r.quote_eng),
      context: bi(r.context, r.context_eng),
    }))
    .sort((a, b) => a.order - b.order);
}
