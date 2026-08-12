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
import organizationsRaw from '../data/sheets/organizations.json';
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

/* ── 單位字典（organizations） ─────────────────────────────────────
 *
 * 演講表只填單位的中文名，英文名／官網／類型都從這裡查。
 * 這樣同一個單位的資料只有一份，不會像以前那樣同一個機構在不同列有三種英文名。
 */

export interface Organization {
  name: string;
  nameEn: string;
  url: string;
  type: string;
  abbr: string;
}

/* 比對用的正規化：臺/台 異體字、空白、結尾括號縮寫都會造成對不上，
   但它們指的是同一個機構。 */
const normOrgKey = (s: string) =>
  (s ?? '')
    .trim()
    .replace(/臺/g, '台')
    .replace(/\s+/g, '')
    .replace(/[（(].*?[)）]\s*$/, '');

const ORG_INDEX: Map<string, Organization> = (() => {
  const idx = new Map<string, Organization>();
  for (const r of organizationsRaw as Row[]) {
    const name = (r['單位名稱'] ?? '').trim();
    if (!name) continue;
    const org: Organization = {
      name,
      nameEn: (r['單位名稱_eng'] ?? '').trim(),
      url: (r['官網URL'] ?? '').trim(),
      type: (r['類型'] ?? '').trim(),
      abbr: (r['簡稱'] ?? '').trim(),
    };
    idx.set(normOrgKey(name), org);
    /* 別名讓演講表保留歷史寫法也能對上——那 179 列不必因為字典改名而全部重打 */
    for (const alias of (r['別名'] ?? '').split('｜')) {
      const a = alias.trim();
      if (a) idx.set(normOrgKey(a), org);
    }
  }
  return idx;
})();

/** 查單位。查不到回 null——呼叫端要能接受「這個單位還沒進字典」，
 *  不然每新增一場演講都得先維護字典才 build 得起來。 */
export const findOrg = (name: string): Organization | null =>
  ORG_INDEX.get(normOrgKey(name)) ?? null;

/** 單位的顯示資訊：字典查得到就用字典的，查不到至少還有原始名稱可顯示 */
export interface OrgRef {
  name: string;      // 顯示用的中文名（字典優先，維持全站一致）
  nameEn: string;
  url: string;       // 空字串代表不做成連結
  type: string;
  abbr: string;
  matched: boolean;  // 是否對到字典，供 build 期回報用
}

export function orgRef(rawName: string, fallbackEn = ''): OrgRef | null {
  const raw = (rawName ?? '').trim();
  if (!raw || raw === '-') return null;
  const hit = findOrg(raw);
  return hit
    ? { name: hit.name, nameEn: hit.nameEn, url: hit.url, type: hit.type, abbr: hit.abbr, matched: true }
    : { name: raw, nameEn: fallbackEn, url: '', type: '', abbr: '', matched: false };
}

/** build 期用：列出演講表裡還沒進字典的單位，方便逐步補完 */
export function unmatchedOrgs(names: string[]): string[] {
  const miss = new Set<string>();
  for (const n of names) {
    const t = (n ?? '').trim();
    if (t && t !== '-' && !findOrg(t)) miss.add(t);
  }
  return [...miss];
}

export const allOrganizations = (): Organization[] =>
  [...new Set(ORG_INDEX.values())].sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'));

/* ── 演講紀錄（index 的統計與 speeches 的列表共用同一份） ───────────── */

export interface Speech {
  date: string;
  dateObj: Date | null;
  year: number;
  /* 單位資訊全部來自 organizations 字典（英文名／官網／類型都在那裡），
     演講表只填中文名。查不到的單位 url 為空字串，顯示成純文字。 */
  host: OrgRef | null;
  coHost1: OrgRef | null;
  coHost2: OrgRef | null;
  topic: Bilingual;        // 主題 / 主題_eng
  eventType: string;       // 場次類型
  mode: string;            // 形式（線上／實體）
  language: string;
  audienceEdu: string;     // 聽眾教育程度
  attendees: number;       // 人數
  hours: number;
  youtubeUrl: string;      // 影片URL
  otherUrl: string;        // 報導URL
}

export function getSpeeches(): Speech[] {
  return (speechesRaw as Row[])
    .filter((r) => r['日期'] && r['主辦單位'])
    .map((r) => {
      const d = toDate(r['日期']);
      return {
        date: r['日期'] ?? '',
        dateObj: d,
        year: d ? d.getFullYear() : 0,
        host: orgRef(r['主辦單位']),
        coHost1: orgRef(r['協辦單位_1']),
        coHost2: orgRef(r['協辦單位_2']),
        topic: bi(r['主題'], r['主題_eng']),
        eventType: r['場次類型'] ?? '',
        mode: r['形式'] ?? '',
        language: r['語言'] ?? '',
        audienceEdu: r['聽眾教育程度'] ?? '',
        attendees: num(r['人數']),
        hours: num(r['小時']),
        youtubeUrl: firstUrl(r['影片URL']),
        otherUrl: firstUrl(r['報導URL']),
      };
    })
    .sort((a, b) => (b.dateObj?.getTime() ?? 0) - (a.dateObj?.getTime() ?? 0));
}

/** 演講表裡出現、但字典查不到的單位名稱（build 期印出來提醒逐步補完） */
export function speechesUnmatchedOrgs(): string[] {
  return unmatchedOrgs(
    (speechesRaw as Row[]).flatMap((r) => [r['主辦單位'], r['協辦單位_1'], r['協辦單位_2']])
  );
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
