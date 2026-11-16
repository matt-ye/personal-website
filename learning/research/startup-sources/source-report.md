# 歸檔創業一手來源前，必先逐條點開

> **⚠ 2026-11-16 驗證後註記**：本報告完成時沙盒無法連線，下文所有等級（B／B-／C）為**驗證前**狀態。
> 後續已實際核對：14 個 DOI 全數通過 Crossref；120 條 URL 中 90 條開啟成功。**請以 `verification-2026-11-16.md` 為準**（含已解決的衝突，例如《Zero to One》imprint 為 Crown Currency、blakemasters 索引頁改為 tumblr 網址）。

> 研究日 2026-11-16。本報告彙整六份研究筆記（`01_paul_graham.md`、`02_yc_and_altman.md`、`03_peter_thiel.md`、`04_founders_and_investors.md`、`05_accelerators_universities.md`、`06_academic_doi.md`），並對照 repo 內的管理課綱（`learning/00-overview.md`、`learning/year2/00-overview.md`）做週次對應。
> 驗證等級：A＝研究者親自抓到頁面；B＝精確 URL（或 DOI）與標題在同一則搜尋結果中同現；B-＝B 級但 DOI 只有單一二手來源；C＝未確認。「重點」皆為研究者依搜尋摘要自寫，不是讀過全文。

---

## 1. 摘要（繁體中文）

**結論先講：這份清單可以當「候選歸檔名單」，不能當「已驗證名單」。六個研究池沒有任何一筆達到 A 級**，因為沙盒網路擋掉了所有目標網站（paulgraham.com、ycombinator.com、blog.samaltman.com、blakemasters.com、pmarchive.com、ocw.mit.edu、steveblank.com、api.crossref.org 等 WebFetch 全數 DNS 解析失敗；wsj.com 被工具拒絕）。所有 B 級只代表「URL 與標題曾在搜尋結果裡一起出現」。**因此每一條連結在上線或入庫前，都必須由人（或有網路權限的 session）親自點開一次。** 本報告不升級任何等級，也不把 C 級混進「已驗證」清單。

對於「想用一手來源自學創業、並寫繁中管理專欄」的 Matt，建議的做法是：

- **主幹（高信心存在、可免費讀）**：Paul Graham 的文章（11 篇）、YC Library／Startup School／Stanford CS183B 課程站、Andreessen／Horowitz／Dixon／Bezos 股東信／Spolsky 等創業者原文、MIT OCW 15.390–15.393、Steve Blank 體系、Kauffman 與 Startup Genome 的量化報告。
- **證據層（讓專欄不只是名人語錄）**：18 筆學術與 HBR 書目（Kerr–Nanda–Rhodes-Kropf、Camuffo 隨機實驗、Koning A/B 測試、Gompers 等 VC 決策問卷、Hallen 等加速器研究……）。其中 3 筆 DOI 為 **B-**，上稿前必須用 doi.org／Crossref 複驗。
- **授權原則**：明文開放授權的只有少數（MIT OCW 為 CC BY-NC-SA 4.0；YC SAFE primer 為 CC BY-ND 4.0，但這句是搜尋摘要轉述；Steve Blank 講義宣稱「Creative Commons license applies」但版本未驗證）。**其餘一律當作保留著作權：只存連結、年份、自己的一句話註解，不複製內文或逐字稿。**
- **對課綱的覆蓋**：對 W19–W21（精實創業／商業模式／PMF）與 W38（募資）覆蓋最強；對 W15–W16（五力、核心能力）、W18（破壞式創新）、W40–W41（動機、心理安全）、Year-2 Q1 談判，**本批來源幾乎沒有直接對應**（見第 6 節缺口）。
- **台灣／亞洲**：本次**沒有找到任何可驗證的同儕審查台灣新創論文**；不可在專欄寫「已有學術證據顯示台灣……」。

---

## 2. 限制，與必須先由人驗證的清單

### 2.1 這份報告能與不能保證什麼

| 項目 | 狀況 |
|---|---|
| A 級（親自抓取確認） | **0 筆**。六個池全部如此 |
| 每筆「重點」 | 來自搜尋摘要，研究者自寫，不是讀過全文；標「只憑標題」者內容完全未讀 |
| 日期 | 只有搜尋結果或 URL 本身顯示者才填；其餘為「未驗證」。標「（記憶，未確認）」者純屬研究者印象 |
| 授權句 | 全部來自搜尋摘要轉述，沒有任何一句是讀過原頁逐字取得 |
| 搜尋額度 | Thiel、founders、學術三個池的搜尋額度中途用完，補查未完成 |
| 課綱週次 | W 編號指 repo 的 `learning/`（管理 3R 課綱），**不是** `curriculum/`（那是另一套投資課綱，W14–21 是資產配置與估值）。Year-2 大綱為「規劃存檔，尚未啟用」 |

### 2.2 優先人工驗證清單（最可能被專欄直接引用的 18 條）

| 優先 | 項目 | 目前等級 | 要確認什麼 |
|---|---|---|---|
| 1 | WSJ「Competition Is for Losers」，Thiel，2014-09-12，疑似 `https://www.wsj.com/articles/peter-thiel-competition-is-for-losers-1410535536` | **C** | 完整 slug 是研究者依殘缺字串（`…1410535536`）補的；文章存在與日期由二手來源佐證。付費牆 |
| 2 | blakemasters.com CS183 筆記索引頁 `http://blakemasters.com/peter-thiels-cs183-startup`；首頁 `https://blakemasters.com/` | 索引頁 **C**；首頁 B | 索引頁只在摘要中被引述。逐堂標題僅 Class 1、4、5、9 有佐證 |
| 3 | `https://paulgraham.com/articles.html`（PG 全文索引） | 未開啟 | 驗證所有年份；2025 至 2026-05 之間與 2026-09 之後是否還有新文，筆記明說**未查證** |
| 4 | PG 授權：`https://www.paulgraham.com/gfaq.html` | B（僅摘要轉述） | 翻譯／鏡像／轉載條款原文與頁尾 © 字樣 |
| 5 | YC Library 各頁 canonical URL（`/library/<2 字元 ID>-<slug>`） | B | ID 無法由 slug 推導，不得手改；Y03、Y04、Y05、Y06、Y07、Y12、Y13 都要逐條點開，並確認是否轉址 |
| 6 | 帶 `?amp=&amp=` 的兩條：`https://ycombinator.com/library/4A-a-guide-to-seed-fundraising?amp=&amp=` 與 `…/2u-how-to-build-your-seed-round-pitch-deck?amp=&amp=` | B | 研究者建議去掉參數，但「去參數版本是否可用」**未驗證**；本報告核心集未收這兩條，若要加請先驗 |
| 7 | CS183B 課程站 `https://startupclass.samaltman.com/` 的 20 講清單 | B（僅 lec01、02、03、04、05、06、07、09、13、18、19、20 的 URL 出現） | lec08、10–12、14–17 的講者與標題未驗證；Aaron Harris 是否在課程中未驗證 |
| 8 | CS183B Lecture 5 YouTube `https://www.youtube.com/watch?v=3Fx5Q8xGU8k` | **C** | 影片 ID 是從第三方摘要站網址推得，未見 YouTube 頁面；YC Root Access 版（約 `5_0dVHMpJlo`）同為 C |
| 9 | 《Zero to One》版權頁 | B | imprint 兩說衝突（見 2.4）；ISBN 9780804139298 與另兩個 ISBN 各對應何種格式未說明 |
| 10 | Altman 部落格：`https://blog.samaltman.com/startup-advice`；機器可讀驗證源 `https://blog.samaltman.com/posts.atom` | B | 用 atom feed 核對所有 slug 與日期；〈The Strength of Being Misunderstood〉的官方 slug 未驗證（C） |
| 11 | SAFE primer 授權：`https://www.ycombinator.com/assets/ycdc/Primer%20for%20post-money%20safe%20v1.1-2af8129e12effd9638eeab383b7309142c8f415e5cdb0bc210d573f779177a1c.pdf` | B | 「CC BY-ND 4.0」是搜尋摘要轉述；請讀 PDF 原文確認版本與措辭 |
| 12 | MIT OCW 條款頁 `https://ocw.mit.edu/pages/privacy-and-terms-of-use/`（另有 `https://ocw.mit.edu/terms/`）與 15.390 課程頁 | B | CC BY-NC-SA 4.0 的確切措辭、第三方教材例外、AI 訓練相關條文；15.391 課程頁授權未逐頁驗證 |
| 13 | Camuffo 等 2020，DOI `10.1287/mnsc.2018.3249` | **B-** | DOI 只來自單一二手來源；卷期不明，**複驗前不要寫卷期** |
| 14 | Kaplan & Strömberg 2004（JF），DOI `10.1111/j.1540-6261.2004.00696.x`；2003（RES），`10.1111/1467-937X.00245` | **B-**（兩筆） | 同上，單一二手來源；請用 doi.org／Crossref 比對 |
| 15 | Steve Blank `https://steveblank.com/slides/` 的 CC 版本 | B | 頁面稱「Creative Commons license applies」，**版本未驗證**；Udacity 課程是否需註冊也未驗證 |
| 16 | Andreessen 〈The only thing that matters〉`https://pmarchive.com/guide_to_startups_part4.html` 與 a16z〈The Struggle〉`https://a16z.com/the-struggle/` | B | 專欄最可能引用的兩篇創業者原文；確認日期（Part 4 搜尋顯示 2007-06-25；The Struggle 的 a16z 頁標示 2012-06-15，原部落格首發日未驗證） |
| 17 | National Review〈The End of the Future〉`https://www.nationalreview.com/2011/10/end-future-peter-thiel/` | **C** | 只在摘要中被轉述為引用，未列為搜尋結果；Thiel 停滯論主文，若要引用需先驗證 |
| 18 | Startup School 2026 YouTube 播放清單 `https://www.youtube.com/playlist?list=PLEb7ftOB0yf0` | **C** | 清單 ID 長度異常（YouTube 清單 ID 通常為 34 字元），疑被截斷，**不可直接使用** |

### 2.3 對原簡報的更正（研究者查證後發現與原指示不同處）

| 原簡報／常見說法 | 查證結果 |
|---|---|
| Kaplan & Strömberg「Characteristics, Contracts, and Actions」為 JF 2003 | 實為 *Journal of Finance* **2004** 年 59(5)；2003 年的是 *Review of Economic Studies* 的另一篇（Financial Contracting Theory Meets the Real World）。兩篇都已列在筆記，且 DOI 都是 B- |
| Hellmann & Puri：RFS 2002／JF 2000 | 年份對調：正確為 **JF 2002**（專業化）與 **RFS 2000**（產品市場與融資策略） |
| 「How to Succeed with a Startup」是 Altman 部落格文章 | 是 **YouTube 影片標題**（`https://www.youtube.com/watch?v=0lJKucu6HJc`，上傳者未驗證），不是部落格文章 |
| PG「Make Something People Want」 | 搜尋找不到同名 PG 文章，只確認是 YC 口號（出現在〈Billionaires Build〉、〈Be Good〉）。**slug 不明，不要猜** |
| PG「Why Startup Hubs Work」 | 此標題找不到；最接近且已確認的是〈Why to Move to a Startup Hub〉（`https://paulgraham.com/startuphubs.html`） |
| 「Founder Mode」影片 | 搜尋到的影片是 Brian Chesky 的 YC 活動演講（例如 `https://www.youtube.com/watch?v=ViqxJY_AG_w`，是否 YC 官方頻道未確認），不是 PG 的演講；PG 的文字版是 `https://paulgraham.com/foundermode.html` |
| Wasserman 2003 學術論文（Rich vs King） | 本次找不到，**不要引用**；可驗證的是 2008 HBR〈The Founder's Dilemma〉與 2012 書 |
| a16z「Startup School」 | 搜尋找不到此官方課程頁，**不要列入** |
| YC 「Startup Jargon」頁、官方開放 term sheet | 找不到；開放 term sheet 只在 HN 留言串出現，非 YC 官方 |
| CS183B YouTube 清單標「2015」 | 課程實際為 2014 秋；清單上傳者未驗證，建議以課程站為 canonical |

### 2.4 研究筆記之間或筆記內部互相矛盾（只報告，不裁決）

| 議題 | 說法 A | 說法 B |
|---|---|---|
| 《Zero to One》imprint | 搜尋摘要：Crown Currency | 研究者記憶中的版權頁：Crown Business |
| Joel Spolsky〈Strategy Letter V〉日期 | URL 顯示 2002-06-12 | 搜尋摘要寫 2002-06-15（筆記採 URL，但兩者不一致本身未解決） |
| HBR〈Blitzscaling〉（疑似 2016-04，`https://hbr.org/2016/04/blitzscaling`） | 搜尋結果署名為 LeBlanc | 另一搜尋結果署名為 Sullivan。**未確認作者；不可把此文歸給 Hoffman。**Hoffman & Yeh 的同名書（2018，Currency）是另一個作品，其唯一 B 級連結只是 LinkedIn 介紹文 |
| Stanford eCorner 授權 | 舊 STVP 文章與 Podcast feed：CC BY-NC-ND 2.5 | 現行 STVP Terms of Use 僅允許個人非商業下載，未提 CC。筆記明說「兩者衝突，不選邊；使用前請直接詢問 STVP」 |
| Founders Fund〈What Happened to the Future?〉 | 2011 年 HN 討論串就連過 | 網站日期為 2017 年 1 月；作者署名 Bruce Gibney 為單一來源 |
| Thiel Fellowship 補助 | 主站：兩年 25 萬美元 | 舊子網域：10 萬美元（均未見日期） |
| startupschool.org 現行課程 | 一則摘要稱 8 個模組 | 另一則稱 6 週；其他處稱約 7 週 |
| CS183B 一支影片標題 | 課程 CS183B | 另一影片標為「CS183F: Startup School」 |
| Ross Douthat × Thiel 訪談年份 | 2025-06-26／2025-07-11（採用） | 另一處搜尋摘要寫 2024 |
| 引用數字的版本差 | Hall & Woodward：2009 會議稿出場現金 US$3.6M | 正式版 US$4.4M。同類：Gompers 等 2020 樣本 885（正式）vs 889（草稿）；Gornall & Strebulaev 帳面高估 48%（正式）vs 50%（NBER） |
| HBR 頁碼 | Blank 2013：63–72 vs 起始頁 64 | McGrath & MacMillan：44–54 vs 44–52（且一處只列 MacMillan）；Gans–Scott–Stern：p.44 vs 46–51 |
| Yu (2020) 作者單位 | 明尼蘇達大學 | UC Berkeley（DOI 一致） |

---

## 3. 核心歸檔集（共 81 筆，全部為 B 或 B-；各池依筆記的 Tier 1 與必要的 Tier 2 精選）

**表格欄位**：ID｜標題｜作者｜年｜類型｜URL 或 DOI｜等級｜權利備註｜建議週次／專欄主題。
**權利縮寫**：**PG-權利**＝paulgraham.com 唯一找到的條款在 gfaq.html（搜尋摘要轉述：翻譯可，但須附原文網址並寄給他；偏好連結而非鏡像整篇；全文與頁尾 © 未取得），未見開放授權，視為保留著作權。**公開非開放**＝作者或公司網站公開可讀，但未見授權聲明，只連結＋自寫註解＋極短引文。**付費牆**＝需訂閱或購買。
**年份**：「（記憶）」＝研究者印象未確認；「未驗證」＝沒有可靠日期。

### 3.1 Paul Graham（11 筆）

| ID | 標題 | 作者 | 年 | 類型 | URL | 等級 | 權利備註 | 週次／主題 |
|---|---|---|---|---|---|---|---|---|
| P01 | How to Start a Startup | Paul Graham | 2005-03 | essay | https://paulgraham.com/start.html | B | PG-權利 | W19、W21；起步三要素 |
| P02 | Do Things that Don't Scale | Paul Graham | 2013-07 | essay | https://paulgraham.com/ds.html | B | PG-權利 | W19、W21；早期手動成長 |
| P03 | Startup = Growth | Paul Graham | 未驗證（記憶 2012-09） | essay | https://www.paulgraham.com/growth.html | B | PG-權利 | W21；成長率與指標 |
| P04 | How to Get Startup Ideas | Paul Graham | 未驗證（記憶 2012-11） | essay | https://www.paulgraham.com/startupideas.html | B | PG-權利 | W19、W20；點子來源 |
| P05 | Default Alive or Default Dead? | Paul Graham | 2015-10 | essay | https://www.paulgraham.com/aord.html | B | PG-權利 | W37、W38；燒錢與獲利路徑 |
| P06 | A Fundraising Survival Guide | Paul Graham | 2008-08 | essay | https://paulgraham.com/fundraising.html | B | PG-權利 | W38；募資的士氣管理 |
| P07 | Founder Mode | Paul Graham | 2024-09 | essay | https://paulgraham.com/foundermode.html | B | PG-權利 | W49、W43；創辦人 vs 職業經理人管理 |
| P08 | Maker's Schedule, Manager's Schedule | Paul Graham | 2009-07 | essay | https://www.paulgraham.com/makersschedule.html | B | PG-權利 | W49、W51；時間與會議 |
| P09 | Relentlessly Resourceful | Paul Graham | 2009-03 | essay | https://www.paulgraham.com/relres.html | B | PG-權利 | W51；創辦人特質 |
| P10 | Mean People Fail | Paul Graham | 2014 | essay | https://www.paulgraham.com/mean.html（搜尋結果出現的是帶 `?viewfullsite=1` 的版本；基本路徑為去參數所得） | B | PG-權利 | W41、W43；文化與招募 |
| P11 | Making Startups Powerful | Paul Graham | 2026-09 | essay | https://paulgraham.com/powerful.html | B | PG-權利；最新文，日期請核 | W14、W21；「讓公司更強大」的問法 |

### 3.2 YC、Stanford CS183B、Sam Altman（14 筆）

YC 全系列（Library、課程站、部落格、Altman 部落格）**均未找到授權聲明**，一律只連結。HN 討論串不能當授權依據。

| ID | 標題 | 作者／講者 | 年 | 類型 | URL | 等級 | 權利備註 | 週次／主題 |
|---|---|---|---|---|---|---|---|---|
| Y01 | How to Start a Startup（Stanford CS183B 課程站，共 20 講） | Sam Altman 主持 | 2014 秋 | course | https://startupclass.samaltman.com/ | B | 未找到授權；據摘要有投影片與逐字稿，**有逐字稿不等於可轉載** | W19；入口 |
| Y02 | CS183B Lecture 9：How to Raise Money | 講者未驗證 | 2014 | video | https://startupclass.samaltman.com/courses/lec09/ | B | 同上 | W38 |
| Y03 | One order of operations for starting a startup | Michael Seibel | 未驗證 | video／文章 | https://www.ycombinator.com/library/CP-one-order-of-operations-for-starting-a-startup | B | 未找到授權 | W19、W20 |
| Y04 | How to plan an MVP | Michael Seibel | 2019（Startup School 2019 回顧提及；Library 頁日期未驗證） | video | https://www.ycombinator.com/library/6f-how-to-plan-an-mvp | B | 同上 | W19 |
| Y05 | How to talk to users | Gustaf Alströmer | Startup School 2022（日期未驗證） | video | https://www.ycombinator.com/library/Iq-how-to-talk-to-users | B | 同上 | W21；客戶訪談 |
| Y06 | Dalton & Michael: Where do great startup ideas come from? | Dalton Caldwell、Michael Seibel | 未驗證 | video | https://www.ycombinator.com/library/DU-dalton-michael-where-do-great-startup-ideas-come-from | B | 同上 | W20；點子 |
| Y07 | Modern startup funding | 講者未驗證 | 未驗證 | video | https://www.ycombinator.com/library/8F-modern-startup-funding | B | 同上 | W38；SAFE 與早期募資 |
| Y08 | The SAFE — the open standard for startup fundraising | Y Combinator | 持續更新 | document | https://www.ycombinator.com/safe | B | SAFE 文件宣稱 CC BY-ND 4.0（摘要轉述，見 3.5） | W38；Y2 Q1 W9–W12 法務 |
| Y09 | Primer for post-money safe v1.1（PDF） | Y Combinator | 未驗證 | PDF | https://www.ycombinator.com/assets/ycdc/Primer%20for%20post-money%20safe%20v1.1-2af8129e12effd9638eeab383b7309142c8f415e5cdb0bc210d573f779177a1c.pdf | B | **CC BY-ND 4.0（摘要轉述，原文須人工核對）**：可原樣散布並註明出處，不得改作 | W38 |
| Y10 | Startup School（自學課程入口） | Y Combinator | 持續更新 | course | https://www.startupschool.org/ | B | 免費註冊使用；授權聲明未找到 | W19–W21；Y2 Q3 |
| Y11 | Startup Advice | Sam Altman | 未驗證 | essay | https://blog.samaltman.com/startup-advice | B | 個人著作，未找到授權 | W19、W49 |
| Y12 | Startup legal mechanics | 講者未驗證 | 未驗證 | video | https://www.ycombinator.com/library/7R-startup-legal-mechanics | B | 未找到授權 | Y2 Q1 W9–W12 |
| Y13 | Startup pricing 101 | Kevin Hale（搜尋摘要） | 未驗證 | video | https://www.ycombinator.com/library/6h-startup-pricing-101 | B | 未找到授權 | W20；Y2 Q3 W36 定價 |
| Y14 | Requests for Startups | Y Combinator | 持續更新（時效性高，須標註抓取日） | page | https://www.ycombinator.com/rfs | B | 未找到授權 | Y2 Q3 AI 方向 |

### 3.3 Peter Thiel（7 筆）

| ID | 標題 | 作者 | 年 | 類型 | URL | 等級 | 權利備註 | 週次／主題 |
|---|---|---|---|---|---|---|---|---|
| T01 | Zero to One: Notes on Startups, or How to Build the Future | Peter Thiel with Blake Masters | 2014-09-16 | book | https://www.penguinrandomhouse.com/books/234730/zero-to-one-by-peter-thiel-with-blake-masters/ | B | 商業書；未找到官方公開試讀；imprint 衝突見 2.4 | W14、W17；Y2 Q4 深讀候補 |
| T02 | CS183B Lecture 5：Competition is For Losers | Peter Thiel | 2014 | video／課程頁 | https://startupclass.samaltman.com/courses/lec05/ | B | 同 Y01 | W14、W17；獨占 vs 競爭 |
| T03 | Blake Masters 個人站首頁（CS183 筆記入口） | Blake Masters | 筆記 2012 春 | lecture-notes | https://blakemasters.com/ | B（僅首頁；索引頁為 C） | 著作權人為 Masters／Thiel；連回原站，不轉貼全文 | W14 |
| T04 | Peter Thiel's CS183: Startup — Class 13 Notes Essay（gwern.net 保存的 blakemasters.com 副本） | Blake Masters（記錄） | 2012 春 | lecture-notes（第三方存檔） | https://www.gwern.net/docs/www/blakemasters.com/382477541aba0ef1f7431100c8ea5521686a657b.html | B | 第三方存檔，僅供核對原站，不當 canonical | 核對用 |
| T05 | What Happened to the Future? | Founders Fund（署名 Gibney 為單一來源） | 日期不確定（見 2.4） | essay | https://foundersfund.com/the-future/?stream=top | B（URL 帶參數，去參數版未驗證） | 公司網站公開 | W14；停滯論與投資方向 |
| T06 | Conversations with Tyler Ep.1：Peter Thiel on Stagnation, Innovation, and What Not To Name Your Company | Thiel × Tyler Cowen | 搜尋結果未顯示 | interview | https://conversationswithtyler.com/episodes/peter-thiel/ | B | 網站提供音檔與逐字稿，可免費讀；再利用條款未查 | W14 |
| T07 | More Zero, Less One（《Regulation》2015 春） | Cato Institute | 2015 | review（**批評面**） | https://www.cato.org/regulation/spring-2015/more-zero-less-one | B | 一般出版物 | W14、W17；反方：獨占取決於市場界定 |

### 3.4 創業者與投資人原文（17 筆）

「管理學」欄＝筆記標的管理主題。

| ID | 標題 | 作者 | 年 | 類型 | URL | 等級 | 權利備註 | 週次／主題 |
|---|---|---|---|---|---|---|---|---|
| F01 | The only thing that matters（Pmarca Guide to Startups, Part 4） | Marc Andreessen | 2007-06-25 | essay | https://pmarchive.com/guide_to_startups_part4.html | B | 作者官方存檔，公開；未見授權條款 | W21；PMF |
| F02 | Part 8: Hiring, managing, promoting, and firing executives | Marc Andreessen | 未驗證 | essay | https://pmarchive.com/guide_to_startups_part8.html | B | 同上 | W42、W48 |
| F03 | Why Software Is Eating the World | Marc Andreessen | 2011-08-20 | essay | https://a16z.com/why-software-is-eating-the-world/ | B | a16z 轉載公開；WSJ 原文付費牆 | W14；Y2 Q3 |
| F04 | The Struggle | Ben Horowitz | a16z 頁標示 2012-06-15（原首發日未驗證） | post | https://a16z.com/the-struggle/ | B | a16z 公開，未見授權 | W49；領導與低潮 |
| F05 | Peacetime CEO/Wartime CEO | Ben Horowitz | 未驗證 | post | https://a16z.com/peacetime-ceo-wartime-ceo/ | B | 同上 | W49、W48 |
| F06 | The idea maze | Chris Dixon | 2013-08-04 | essay | https://cdixon.org/2013/08/04/the-idea-maze/ | B | 公開非開放 | W14、W20 |
| F07 | Come for the tool, stay for the network | Chris Dixon | 2015-01-31 | essay | https://cdixon.org/2015/01/31/come-for-the-tool-stay-for-the-network/ | B | 公開非開放 | W17、W20；網路效應 |
| F08 | Amazon's Original 1997 Letter to Shareholders | Jeff Bezos | 1997 | letter | https://www.aboutamazon.com/news/company-news/amazons-original-1997-letter-to-shareholders | B | Amazon 官方公開；再利用細則未驗證 | W14、W50；長期思維 |
| F09 | 2016 Letter to Shareholders（Day 2、高速決策） | Jeff Bezos | 2016（發布日未驗證） | letter | https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders | B | 同上 | W49、W50 |
| F10 | Strategy Letter V（commoditize your complement） | Joel Spolsky | URL 2002-06-12；摘要寫 2002-06-15（見 2.4） | essay | https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/ | B | 公開非開放 | W17；互補品策略 |
| F11 | High Growth Handbook | Elad Gil | 2018（Stripe Press；站上文章日 2018-07-17） | book／網站 | https://growth.eladgil.com/ | B | 網站可見各章；全文授權未驗證；印刷版為商業出版品 | W43、W48、W49；規模化組織 |
| F12 | All Revenue is Not Created Equal: The Keys to the 10X Revenue Club | Bill Gurley | 2011-05-24 | essay | https://abovethecrowd.com/2011/05/24/all-revenue-is-not-created-equal-the-keys-to-the-10x-revenue-club/ | B | 公開非開放；倍數為 2011–2012 歷史數據 | W36；收入品質與估值 |
| F13 | MBA Mondays（系列入口，約 200 篇，約 2010-01 至 2013 底） | Fred Wilson | 入口頁 2017 年建立；逐篇 URL 需另查 | post series | https://avc.com/2017/08/mba-mondays/ | B | 公開非開放；留言屬他人 | W37、W38、W42 |
| F14 | Steve Jobs 2005 Stanford Commencement Address | Steve Jobs | 2005-06-12 | talk | https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says | B | Stanford 官方提供文字與影片；再利用需查 | W51；W52 宣言 |
| F15 | Venture Hacks interview: "What is the minimum viable product?" | Eric Ries | 2009-03（依 URL） | post | https://www.startuplessonslearned.com/2009/03/minimum-viable-product.html | B | 作者網站公開；未見授權 | W19 |
| F16 | AI: Startup Vs Incumbent Value | Elad Gil | 未驗證 | post | https://blog.eladgil.com/p/ai-startup-vs-incumbent-value | B | Substack 公開；未見授權 | Y2 Q3；AI 時代策略 |
| F17 | Stripe's 2025 annual letter | Patrick & John Collison | 涵蓋 2025 年度；發布日未驗證 | letter | https://stripe.com/annual-updates/2025 | B | Stripe 官方公開；其中 1.9 兆美元等數字為搜尋摘要轉述，未核 | Y2 Q3；AI 時代 |

### 3.5 加速器、大學與研究機構（14 筆）

| ID | 標題 | 機構／作者 | 年 | 類型 | URL | 等級 | 權利備註 | 週次／主題 |
|---|---|---|---|---|---|---|---|---|
| E01 | 15.390 New Enterprises（Spring 2013） | MIT Sloan／Bill Aulet 等 | 2013 | OCW 課程 | https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/ | B | **OCW 條款頁稱 CC BY-NC-SA 4.0**（第三方教材除外）；摘要轉述 | W19、W20；框架較舊（2013） |
| E02 | 15.391 Early Stage Capital（Fall 2010） | MIT Sloan／Shari Loessberg | 2010 | OCW 課程 | https://ocw.mit.edu/courses/15-391-early-stage-capital-fall-2010/ | B | OCW CC BY-NC-SA 4.0；本課程頁授權未逐頁驗證 | W37、W38；term sheet |
| E03 | 15.392 Scaling Entrepreneurial Ventures（Spring 2026） | MIT Sloan | 2026 | OCW 課程 | https://ocw.mit.edu/courses/15-392-scaling-entrepreneurial-ventures-spring-2026/ | B | 同上 | W43、W48、W49；規模化 |
| E04 | 15.393 Nuts and Bolts of New Ventures（January IAP 2025） | MIT Sloan | 2025-01 | OCW 課程 | https://ocw.mit.edu/courses/15-393-nuts-and-bolts-of-new-ventures-january-iap-2025/ | B | 同上 | Y2 Q1 W1–W4、W9–W12（法務、談判、簡報） |
| E05 | Entrepreneurial Thought Leaders（ETL）系列 | Stanford STVP／eCorner | 2000 年代初至今 | podcast／video | https://ecorner.stanford.edu/podcasts/etl | B | **授權新舊矛盾（2.4）；使用前直接詢問 STVP**；eCorner 另在併入 stvp.stanford.edu（`https://stvp.stanford.edu/ecorner`），舊址可能轉址 | W51、W49；創辦人敘事 |
| E06 | Stanford GSB Insights：Entrepreneurship | Stanford GSB | 持續更新 | article hub | https://www.gsb.stanford.edu/insights/entrepreneurship | B | 授權未找到（預設保留著作權）；逐篇未驗證 | 證據層；專欄素材 |
| E07 | Steve Blank — Slides／Videos（Lean LaunchPad 講義與影片） | Steve Blank | 頁面日期未驗證 | toolkit | https://steveblank.com/slides/ | B | 頁面稱 **"Creative Commons license applies"，版本未驗證** | W19、W20 |
| E08 | How to Build a Startup（EP245） | Udacity／Steve Blank、Kathleen Mullaney | 搜尋摘要稱最後更新 2025-11-14 | course（14 堂） | https://www.udacity.com/course/how-to-build-a-startup--ep245 | B | 標示免費，是否需 Udacity 帳號未驗證；CC 說法同 E07 | W19；客戶探索 |
| E09 | The Arc Product-Market Fit Framework | Sequoia Capital | 頁面日期未驗證 | article | https://sequoiacap.com/article/pmf-framework | B | 授權未知 | W21 |
| E10 | Business Model Canvas | Strategyzer | 持續更新 | toolkit | https://www.strategyzer.com/library/the-business-model-canvas | B | 樣板免費；**CC BY-SA 3.0 說法純憑記憶，屬 C，不可引用** | W20 |
| E11 | The Lean Startup — Principles | Eric Ries | 頁面日期未驗證 | page | https://theleanstartup.com/principles | B | 頁面免費；書為付費；授權未知 | W19 |
| E12 | National Report on Early-Stage Entrepreneurship in the United States (2025) | Kauffman Foundation | 2025 | report | https://indicators.kauffman.org/report/early-stage-entrepreneurship-national-2025 | B | 授權未知（Kauffman 是否採 CC 未驗證） | 證據層；創業活動統計（美國，非台灣） |
| E13 | The Global Startup Ecosystem Report 2025 (GSER 2025) | Startup Genome | 2025-06-12 | report | https://startupgenome.com/report/the-global-startup-ecosystem-report-2025/introduction | B | 網頁版免費；完整 PDF 是否需註冊未驗證 | 證據層；生態系與 VC 數據 |
| E14 | All Things Sales! 16 Mini-Lessons for Startup Founders | a16z | 約 3 年前（搜尋摘要，未驗證） | video | https://a16z.com/all-things-sales-16-mini-lessons-for-startup-founders/ | B | 授權未知 | Y2 Q1 W5–W8（B2B 銷售） |

### 3.6 學術與 HBR 書目（18 筆；DOI 皆為「標題與 DOI 在搜尋結果同現」）

「開放版本」只列搜尋結果裡實際出現者；第三方副本授權不明，不建議轉載。HBR 文章與書本身沒有 DOI，不是遺漏。

| ID | 作者（年）與標題 | 期刊／出處 | DOI（或無） | 連結 | 等級 | 開放版本／權利 | 週次／主題 |
|---|---|---|---|---|---|---|---|
| A01 | Shane & Venkataraman (2000)，The Promise of Entrepreneurship as a Field of Research | *Academy of Management Review* 25(1): 217–226 | 10.5465/amr.2000.2791611 | https://doi.org/10.5465/amr.2000.2791611（由 DOI 組出，未開啟） | B | 未確認合法開放版；第三方副本授權不明；AMR 正式版通常需訂閱 | 專欄理論基礎；W19 |
| A02 | Sarasvathy (2001)，Causation and Effectuation… | *AMR* 26(2): 243–263 | 10.2307/259121 | https://doi.org/10.2307/259121（組出） | B | 開放版未確認（effectuation.org 為作者團隊文獻庫，是否放全文需點開） | W19；決策邏輯 |
| A03 | Kerr, Nanda & Rhodes-Kropf (2014)，Entrepreneurship as Experimentation | *J. Economic Perspectives* 28(3): 25–48 | 10.1257/jep.28.3.25 | https://econpapers.repec.org/RePEc:aea:jecper:v:28:y:2014:i:3:p:25-48 | B | 開放版：https://dash.harvard.edu/bitstream/handle/1/27336545/kerr,nanda,rhodes-kropf_entrepreneurship-as-experimentation.pdf ；https://www.nber.org/papers/w20358 | W19、W21 |
| A04 | Kaplan, Sensoy & Strömberg (2009)，Should Investors Bet on the Jockey or the Horse? | *J. Finance* 64(1): 75–115 | 10.1111/j.1540-6261.2008.01429.x | https://ideas.repec.org/a/bla/jfinan/v64y2009i1p75-115.html | B | 本次未找到開放版 | W38、W42；團隊 vs 事業 |
| A05 | Hall & Woodward (2010)，The Burden of the Nondiversifiable Risk of Entrepreneurship | *American Economic Review* 100(3): 1163–94 | 10.1257/aer.100.3.1163 | https://econpapers.repec.org/RePEc:aea:aecrev:v:100:y:2010:i:3:p:1163-94 | B | 正式版限 AEA 會員／機構；NBER 舊版 https://www.nber.org/papers/w14219 （**數字與正式版不同**，引用須指明版本） | W35、W38；創辦人報酬 |
| A06 | Hellmann & Puri (2002)，Venture Capital and the Professionalization of Start-Up Firms | *J. Finance* 57(1): 169–197 | 10.1111/1540-6261.00419 | https://econpapers.repec.org/RePEc:bla:jfinan:v:57:y:2002:i:1:p:169-197 | B | 本次未找到開放版 | W42、W43、W48；人資制度與外部 CEO |
| A07 | Gompers, Gornall, Kaplan & Strebulaev (2020)，How Do Venture Capitalists Make Decisions? | *J. Financial Economics* 135(1): 169–190 | 10.1016/j.jfineco.2019.06.011 | https://econpapers.repec.org/RePEc:eee:jfinec:v:135:y:2020:i:1:p:169-190 | B | 開放版：https://papers.ssrn.com/abstract=2801385 ；https://www.nber.org/papers/22587 ；樣本數以正式版 885 為準 | W36、W38 |
| A08 | Lerner & Nanda (2020)，Venture Capital's Role in Financing Innovation… | *J. Economic Perspectives* 34(3): 237–61 | 10.1257/jep.34.3.237 | https://www.aeaweb.org/doi/10.1257/jep.34.3.237 | B | 開放版：https://www.nber.org/papers/w27492 | W38；VC 不適合每種新創 |
| A09 | Hallen, Cohen & Bingham (2020)，Do Accelerators Work? If So, How? | *Organization Science* 31(2): 378–414 | 10.1287/orsc.2019.1304 | https://pubsonline.informs.org/doi/references/10.1287/orsc.2019.1304 | B | SSRN 早期版 https://papers.ssrn.com/abstract=2719810 （可能與正式版有差異） | 加速器證據 |
| A10 | Gonzalez-Uribe & Leatherbee (2018)，The Effects of Business Accelerators on Venture Performance: Evidence from Start-Up Chile | *Review of Financial Studies* 31(4): 1566–1603 | 10.1093/rfs/hhx103 | https://econpapers.repec.org/RePEc:oup:rfinst:v:31:y:2018:i:4:p:1566-1603. | B | LSE 接受稿 https://eprints.lse.ac.uk/84553/ ；https://core.ac.uk/download/96716822.pdf | 加速器證據；政策評估 |
| A11 | Camuffo, Cordova, Gambardella & Spina (2020)，A Scientific Approach to Entrepreneurial Decision Making: Evidence from a Randomized Control Trial | *Management Science* 2020（卷期未取得，**複驗前勿寫**） | 10.1287/mnsc.2018.3249 | https://iris.unibocconi.it/handle/11565/4013977 | **B-**（DOI 僅單一二手來源） | Bocconi IRIS；CEPR DP14909 https://econpapers.repec.org/RePEc:cpr:ceprdp:14909 | W19；假設驅動的 RCT 證據 |
| A12 | Koning, Hasan & Chatterji (2022)，Experimentation and Start-up Performance: Evidence from A/B Testing | *Management Science* 68(9): 6434–6453 | 10.1287/mnsc.2021.4209 | https://econpapers.repec.org/RePEc:inm:ormnsc:v:68:y:2022:i:9:p:6434-6453 | B | 開放版：https://www.nber.org/papers/w26278 | W19；Y2 Q3 W29 A/B 實驗 |
| A13 | Kaplan & Strömberg (2004)，Characteristics, Contracts, and Actions: Evidence from Venture Capitalist Analyses | *J. Finance* 59(5): 2177–2210 | 10.1111/j.1540-6261.2004.00696.x | https://econbiz.de/Record/characteristics-contracts-and-actions-evidence-from-venture-capitalist-analyses-kaplan-steven/10005302381 | **B-**（DOI 僅單一二手來源） | 作者機構 PDF https://www.hhs.se/contentassets/662e98040ed14d6c93b1119e5a9796a4/kaplanstrombergjf2004.pdf ；https://www.nber.org/papers/w8764 | W37、W38；契約與盡調。**年份已更正為 2004** |
| A14 | Blank (2013)，Why the Lean Start-Up Changes Everything | *Harvard Business Review* 91(5)（頁碼未解決，見 2.4） | 無 | https://hbr.org/2013/05/why-the-lean-start-up-changes-everything | B（僅書目） | HBR 付費牆；Blank 曾提供免費重印 https://steveblank.com/2013/05/06/free-reprints-of-why-the-lean-startup-changes-everything/ ，有讀者回報失效，現況未知 | W19（本課綱已用） |
| A15 | McGrath & MacMillan (1995)，Discovery-Driven Planning | *HBR* 73(4)（頁碼與作者列示不一致） | 無 | https://business.columbia.edu/faculty/research/discovery-driven-planning | B（僅書目；此為機構頁，非 HBR 原頁） | 未找到合法版本；HBR 付費 | W19、W20 |
| A16 | Gans, Scott & Stern (2018)，Strategy for Start-ups | *HBR* 96(3)（頁碼矛盾） | 無 | https://store.hbr.org/product/strategy-for-start-ups/S18031 | B（僅書目） | MIT 站的 PDF 帶 HBR 版權聲明，授權不明，**不建議轉載** | W14、W20；創業策略 |
| A17 | Eisenmann (2021)，Why Start-Ups Fail（HBR；同名書另有 PRH 頁） | *HBR* 2021 年 5–6 月；書 Penguin Random House | 無 | https://www.penguinrandomhouse.com/books/623123/why-startups-fail-by-tom-eisenmann/9780593137024/ | B（僅書目；hbr.org 原頁未取得） | 付費／商業書 | W21、W49；失敗模式檢核 |
| A18 | Wasserman (2012)，The Founder's Dilemmas（書；2008 HBR 同名短文為縮版） | Princeton University Press；HBR 86(2) | 無 | https://blogs.lse.ac.uk/lsereviewofbooks/2012/08/09/book-review-the-founders-dilemmas （LSE 書評；2008 HBR 的 PubMed 條目 https://pubmed.ncbi.nlm.nih.gov/18314638/ ） | B（僅書目） | 商業書；HBR 付費 | W42、W43、W48；共同創辦與股權 |

### 3.7 未列入核心集的 C 級與待確認項目（**不得視為已驗證**）

| 項目 | 已知狀況 | 為何是 C |
|---|---|---|
| WSJ〈Competition Is for Losers〉（Thiel，2014-09-12） | 疑似 URL 見 2.2 第 1 項 | slug 為研究者補寫；存在與日期有二手佐證 |
| blakemasters.com 筆記索引頁 | `http://blakemasters.com/peter-thiels-cs183-startup` | 只在摘要中被引述 |
| CS183B Lecture 5 YouTube | `https://www.youtube.com/watch?v=3Fx5Q8xGU8k` | ID 由第三方網址推得；可驗證的替代頁是 HN `https://news.ycombinator.com/item?id=13948780` 與 `https://news.ycombinator.com/item?id=8424165`（B，留言串，非原片） |
| National Review〈The End of the Future〉（2011-10-03） | `https://www.nationalreview.com/2011/10/end-future-peter-thiel/` | 只在摘要中轉述；可驗證的二手頁是 Reason `https://reason.com/2011/10/03/the-future-has-been-called-off/` |
| Altman〈The Strength of Being Misunderstood〉 | blog.samaltman.com 官方 slug 未驗證 | 只找到非官方鏡像，**不得當 canonical** |
| Startup School 2026 播放清單 | `https://www.youtube.com/playlist?list=PLEb7ftOB0yf0` | 疑被截斷 |
| YC 官方 YouTube 頻道主頁、Lightcone 官方清單 | URL 未找到 | 搜尋沒有出現 |
| Kevin Hale〈How to Evaluate Startup Ideas〉原始影片 | 只有 YC 部落格週回顧佐證 | 影片 URL 未取得 |
| Tom Blomfield／Harj Taggar／Aaron Harris 的 Library 專頁 | 未找到 | — |
| Butterfield〈We Don't Sell Saddles Here〉 | 疑似 `https://medium.com/@stewart/we-dont-sell-saddles-here-4c59524d650d` | URL 只出現在摘要散文；轉載頁 `https://subtraction.com/2014/02/18/we-dont-sell-saddles-here`（B）署名未確認 |
| Netflix Culture（Reed Hastings） | 官方疑為 `https://jobs.netflix.com/culture` | 只在摘要散文；第三方 PDF 為 B 但非官方 |
| HBR〈Blitzscaling〉（2016-04） | 疑 `https://hbr.org/2016/04/blitzscaling` | 作者署名互相矛盾（見 2.4） |
| Lütke 2025-04 Shopify AI 備忘錄 | 一手 X 貼文 URL 未取得 | 二手報導為 B，非一手 |
| Collison〈Fast〉 | `patrickcollison.com/fast` | 只見導覽列，頁面未被索引 |
| Techstars 官方開源 model seed 文件、Alchemist「The Vault」 | 無官方 URL | 僅見第三方 GitHub 轉載；Vault 疑僅限校友 |
| Strategyzer BMC 為 CC BY-SA 3.0 | — | 純憑記憶，**不可引用** |
| Steve Blank《Four Steps to the Epiphany》、Ries《The Lean Startup》書頁 | 官方書頁未驗證 | 內容地位為經典，但連結未驗證 |
| Chesky 2024-09 YC 演講（founder mode 源頭） | 一手連結未取得 | 只有二手報導 |
| 學術線索：SMJ 加速器論文（408 個加速器）、Avnimelech 等 2024、Chan–Patel–Phan、YC 103 家樣本論文、Hochberg 2016、Nanda 等三篇、Carlsson 等 2013、Gartner 後續文 | DOI 一律 UNVERIFIED | 標題與 DOI 未同現，或根本未取得 DOI |
| Adl〈Founder Backgrounds and Startup Funding: Evidence from Y Combinator〉（arXiv，2025-12） | 摘要稱 arXiv 編號 2512.13755，`https://arxiv.org/abs/2512.13755` | 預印本、非同儕審查；作者名只來自摘要，未查證；筆記自述「視為 B 級預印本線索亦可」，本報告**不升級，維持在此表** |

### 3.8 授權總覽（歸檔政策依據）

| 層級 | 內容 | 可做 | 不可做 |
|---|---|---|---|
| 明文開放（但皆為摘要轉述，須人工核對原頁） | **MIT OCW**：條款頁稱 CC BY-NC-SA 4.0，第三方教材除外，另有 AI 訓練商業用途限制的條文（[OCW terms](https://ocw.mit.edu/pages/privacy-and-terms-of-use/)） | 非商業、相同方式分享、標示來源下可改作（含翻譯）；是否「非商業」涵蓋含廣告或付費方案的網站，是我的推論，需自行判斷 | 商業使用；第三方教材 |
| | **YC SAFE primer**：CC BY-ND 4.0（摘要轉述，見 Y09） | 原樣散布並註明出處 | 改作、節錄改寫成衍生版本 |
| | **Steve Blank 講義與影片**：「Creative Commons license applies」，變體未驗證（[steveblank.com/slides](https://steveblank.com/slides/)） | 先查清 CC 變體再決定 | 在查清前當作可改作 |
| | Stanford d.school Bootleg（不在核心集）：自述非商業、相同方式分享、標示來源 | — | 僅憑其材料開付費工作坊 |
| 授權矛盾 | **Stanford eCorner**：舊 CC BY-NC-ND 2.5 vs 現行 STVP 條款僅限個人非商業下載 | 連結 | 轉載、翻譯；使用前詢問 STVP |
| 公開可讀、無授權聲明 | Paul Graham、YC Library 與課程站、Altman 部落格、pmarchive、a16z、cdixon、Fred Wilson、Gurley、Spolsky、Bezos 股東信、Stripe 年度信、Sequoia、Kauffman、Startup Genome、Strategyzer、Gil 等 | 連結、年份、自寫一句話註解、極短引文（附出處） | 轉貼全文、整篇翻譯、貼逐字稿（**CS183B 有逐字稿也不例外**）。PG 翻譯依 gfaq 摘要須附原文網址並通知 PG，**實際條款以原頁為準** |
| 付費牆／商業出版 | WSJ、HBR 全部、《Zero to One》、Hoffman 與 Gil 與 Wasserman 的書、MIT SMR（免費狀態未驗證） | 只列書目與官方頁 | 轉載、提供盜版 PDF |
| 學術文獻 | DOI 官方頁、SSRN、NBER、機構典藏 | 連結（優先連 DOI／SSRN／NBER／機構典藏） | 自行託管 PDF；第三方副本（effectuation.org 抽印本、課程站 PDF、gwern.net 副本等）授權不明，不要當來源轉載 |

---

## 4. 建議閱讀順序

### 4.1 十二週版（每週約 3–5 小時，每週一個專欄主題）

| 週 | 專欄主題 | 讀這些（核心集 ID） | 這週要回答的問題 |
|---|---|---|---|
| 1 | 創業從哪裡開始 | P01、P04、Y03、F06 | 好點子從哪裡來？為什麼好點子常看起來像壞點子？ |
| 2 | 做出最小的東西並驗證 | Y04、P02、F15、A14、E11 | MVP 是粗製濫造還是最便宜的學習？ |
| 3 | 客戶與 PMF | F01、Y05、E09、P03 | 怎麼知道「有人要」？指標長什麼樣？ |
| 4 | 獨占與競爭：正反兩面 | T01、T02、T07、F10、F03 | Thiel 的「競爭是給輸家」站得住嗎？（正文 vs Cato 批評） |
| 5 | 商業模式與定價 | E10、Y13、A16、F07、E01 | 九宮格、網路效應、定價怎麼接在一起？ |
| 6 | 創業就是實驗：證據 | A03、A11、A12、A15 | 隨機實驗與 A/B 測試怎麼說「假設驅動」有效？ |
| 7 | 募資的機制 | P06、Y02、Y07、Y08、Y09、E02 | SAFE、可轉換證券、term sheet 各是什麼？ |
| 8 | VC 怎麼想：證據 | A07、A04、A08、A13、F12 | VC 看團隊還是看事業？估值怎麼來？ |
| 9 | 團隊與共同創辦人 | A18、A06、F02、P10 | 股權、角色、外部 CEO、不刻薄 |
| 10 | 創辦人模式與管理 | P07、P08、F04、F05、F09 | 創辦人該不該「下去管細節」？和平 vs 戰時 |
| 11 | 規模化與治理 | F11、E03、A06、F05 | 從 10 人到 1000 人，CEO 的工作怎麼變？ |
| 12 | 失敗、證據層與 AI 時代 | A17、E12、E13、F16、F17、Y14 | 失敗模式、統計背景（美國，非台灣）、AI 如何改寫門檻 |

### 4.2 五十二週版（與既有課綱並行的閱讀軌）

此為我依課綱結構排的「建議」，不是研究者的結論。前 21 週掛在 `learning/` 的既有週次；其餘週次提供彈性（筆記標明多數內容日期、授權未驗證，建議先做驗證週）。

| 階段 | 週 | 重點 | 核心集 ID |
|---|---|---|---|
| 0 驗證與建庫 | 1–2 | 先人工點開 2.2 清單，建立 URL／DOI 驗證紀錄 | 全部；先驗 2.2 |
| 1 起步與方法 | 3–10 | 點子、MVP、客戶、PMF；實驗證據 | P01–P04、Y03–Y06、F15、A14、A15、E07、E08、E11 |
| 2 策略與商業模式（對 W14–W21） | 11–18 | 獨占、互補品、網路效應、商業模式、PMF 閘門 | T01–T07、F03、F06、F07、F10、E09、E10、A16、F01 |
| 3 證據與失敗 | 19–24 | 實驗 RCT／A/B、加速器、失敗模式 | A03、A09–A12、A17、E12、E13 |
| 4 錢（對 W35–W38） | 25–32 | 估值、資本結構、SAFE、VC 決策、契約 | F12、F13、P05、P06、Y02、Y07–Y09、E02、A04、A05、A07、A08、A13 |
| 5 人與文化（對 W40–W43） | 33–40 | 招募、專業化、共同創辦、文化 | F02、P10、P07、A06、A18、F11 |
| 6 CEO 與治理（對 W48–W52） | 41–48 | 戰時／和平、時間、治理、長期思維 | F04、F05、F08、F09、P08、Y11、E03、F14、E05 |
| 7 收斂 | 49–52 | 個人管理哲學宣言（W52）；回頭補驗證與缺口 | P09、F14、T01 |

**Year-2 疊加**（`learning/year2` 為規劃存檔、尚未啟用）：Q1（談判、B2B 銷售、法稅）只有 E14（銷售）、Y08、Y09、Y12、E04（法務與簡報）可用，談判完全缺（見第 6 節）；Q3（AI 實作）可用 Y10、Y04、Y13、A12、F16、F17、Y14；Q4（深讀）課綱已預留「書單可換」，核心集中的 T01、F11、A18 可作為候補，需先確認出版社與版本。

---

## 5. 課綱週次對應表

週次依 `learning/00-overview.md`；Year-2 依 `learning/year2/00-overview.md`。「覆蓋」只是我依筆記的判斷。

| 週 | 課綱單元 | 對應來源（核心集 ID） | 覆蓋 |
|---|---|---|---|
| W14 | 什麼是策略——取捨與定位 | T01、T02、T05、T07、F03、F06、F08、A16、P11 | 中 |
| W15 | 產業分析——五力與獲利結構 | T02／T07 作為「獨占 vs 競爭」的對照；其餘無 | **弱** |
| W16 | 核心能力與資源基礎觀點 | 無直接對應 | **缺** |
| W17 | 賽局與競合——藍海與價值創新 | F10、F07、T01、T07 | 中 |
| W18 | 破壞式創新 | 無直接對應（課綱已有 Christensen 的 HBR 連結，不在本批筆記） | **缺** |
| W19 | 精實創業——MVP 與 Build-Measure-Learn | P01、P02、Y01、Y03、Y04、Y11、F15、A14、A15、A11、A12、A03、E01、E07、E08、E11 | **強** |
| W20 | 商業模式設計——九宮格 | E10、E01、P04、Y06、Y13、F06、F07、A16 | 強 |
| W21 | 產品市場適配（PMF） | F01、E09、Y05、Y10、P03、P11、A17 | 強 |
| W35 | 金錢的時間價值——NPV 與 IRR | A05（創業者報酬風險）、E02；其餘無 | **弱** |
| W36 | 企業估值——DCF 與倍數法 | F12、A07；Gornall & Strebulaev 在筆記但未入核心集 | 中 |
| W37 | 資本結構 | P05、F13、E02、A13 | 中 |
| W38 | 創業募資——VC 運作與投資條件 | P06、Y02、Y07、Y08、Y09、E02、F13、A04、A07、A08、A13 | **強** |
| W40 | 動機理論 | 無直接對應 | **缺** |
| W41 | 心理安全感 | P10（間接） | **弱** |
| W42 | 選才與績效 | F02、A04、A06、A18、F13 | 中 |
| W43 | 人才密度與文化 | P07、P10、F11、A06、A18、E03 | 中 |
| W48 | 公司治理 | F02、F05、A06、A13、A18、F11、E03 | 中（創業公司視角，非上市公司治理） |
| W49 | CEO 的工作 | P07、P08、F04、F05、F09、F11、Y11、A17 | 強 |
| W50 | 從優秀到卓越——第五級領導與飛輪 | F08、F09（長期思維、Day 1／Day 2）；Collins 不在本批 | **弱** |
| W51 | 管理自己 | P08、P09、F14、E05 | 中 |
| W52 | 年度總復盤：個人管理哲學宣言 | P09、F14、T01（作為對照） | 中 |
| Y2 Q1 W1–4 | 談判 | E04（簡報／談判速成，間接） | **缺**（Fisher & Ury、Voss 等不在本批） |
| Y2 Q1 W5–8 | B2B 銷售 | E14；YC CS183B lec19（Sales and Marketing）URL 在筆記為 B，未入核心集 | 弱 |
| Y2 Q1 W9–12 | 法律稅務與公司設立 | Y08、Y09、Y12、E04；CS183B lec18 在筆記為 B，未入核心集 | 中（美國視角，**沒有台灣公司法、勞基法、稅法來源**） |
| Y2 Q3 W27–39 | AI 實作 | Y10、Y04、Y13、A12、F16、F17、Y14、F03 | 中 |
| Y2 Q4 W40–47 | 深讀（預設書單與本批無關） | 候補：T01、F11、A18；課綱「書單可換」條款允許 | 候補 |
| Y2 Q4 W48–49 | 台灣案例演練 | 無（沒有台灣來源） | **缺** |

---

## 6. 缺口

**來源面（本批沒找到）**

| 缺口 | 說明 |
|---|---|
| 台灣／亞洲同儕審查論文 | **零筆**。搜尋只回傳產業或政策分析（TIER、GTAI、StartupBlink 排名各年差異大），**不是學術文獻**，不可放進學術書目。研究者建議用 Google Scholar／Scopus 查「Hsinchu Science Park」「Taiwan venture capital」「ITRI spin-off」，期刊找 *Research Policy*、*Technovation*、*Asia Pacific Journal of Management*（未驗證這些期刊有相關文章） |
| Hoffman、Collison、Chesky 的標準一手文章 | Hoffman：書的官方網址與 HBR 原文皆未確認；Collison：沒有「標準創業論文」，〈Fast〉未驗證；Chesky：沒有自撰標準文章，founder mode 源頭演講只有二手報導；另 Houston、Rabois（僅 2014 講座）、Ward（僅 2016 一篇）、Munger 同樣缺 |
| 搜尋未涵蓋 | Kauffman 研究細節（只確認 Indicators 報告頁）、Startup Genome 細節、Eisenhardt 經典（快速決策、動態能力）、Cohen–Fehder–Hochberg–Murray〈The Design of Startup Accelerators〉、Bernstein–Korteweg–Laws、Shane《The Illusions of Entrepreneurship》、Grove、Dalio、Mark Suster、Jason Lemkin、David Sacks、Dharmesh Shah；SBA／美國政府創辦人指南；Coursera／edX 免費旁聽課；Stanford Engineering Everywhere |
| YC 與 Altman 細節未確認 | Library 完整分類與每篇日期、CS183B 的 lec04／08／10–12／14–17、官方頻道與 Lightcone 清單、2026-07 後新增內容、Altman 其他創業長文與〈Fundraising Mistakes Founders Make〉單篇 slug、所有 Altman 文章日期 |
| PG 細節未確認 | articles.html 完整清單；2025 年至 2026-05、2026-09 之後的新文；Oxford Union 官方完整錄影（只找到第三方 Short `https://www.youtube.com/shorts/pdTa4LH4tjg`）；官方 Startup School PG 系列 |
| Thiel 細節未確認 | Zero to One 第 6、7、9、12–14 章名與編號（記憶為 You Are Not a Lottery Ticket、Follow the Money、Foundations、Man and Machine、Seeing Green、The Founder's Paradox，**搜尋沒證實，勿引用章號**）；CS183 其餘堂次標題；「祕密」「冪次法則」「通路」「創辦人繼任」四項沒有找到專門批評來源，**不應寫成「業界普遍批評」**；沒有同儕審查的學術回應（有一個 DOI 解析疑為部落格存檔，勿當學術引用） |
| 因果證據的缺口 | 沒找到對 Lean LaunchPad／I-Corps 的獨立成效評估；Blank 的成效數字為自報；BLS 存活率對象是所有行業的事業單位，**不是科技新創**（數字為搜尋摘要轉述，未核對 Table 7） |
| 課程對應缺口 | W15–W16、W18、W40–W41、W50、Y2 Q1 談判、Y2 Q4 台灣案例；這些週次若要專欄化，需另開一輪研究 |

**研究方法面**

- 全部「重點」來自摘要；標「只憑標題」的條目內容完全未讀。
- 未逐頁驗證任何授權條款；所有授權句皆為轉述。
- 近期內容（2025–2026）主要是 AI 與活動／計畫，不是新教材；Thiel 近年材料偏政治神學，真正的創業方法新資料少。

---

## 7. 完整逐項目錄在哪

本報告的核心集是各池 Tier 1 的精選。**每個來源的完整逐項目錄（含 Tier 2／Tier 3、搜尋摘要層級的重點、標籤、被降級或放棄的人選與詳細缺口說明）仍保留在六份筆記檔**，歸檔時應與本報告放在同一資料夾：

| 筆記檔 | 內容 |
|---|---|
| `01_paul_graham.md` | PG 52 條（文章、影片、書）、gfaq 授權摘要、C 級清單 |
| `02_yc_and_altman.md` | YC Library 約 60 條、Startup School、CS183B 20 講清單、SAFE 與文件、Altman 部落格 slug、2025–2026 新內容 |
| `03_peter_thiel.md` | 27 個來源（含 11 個批評）、論證地圖（概念 vs 最佳來源 vs 批評）、12 項未驗證項目 |
| `04_founders_and_investors.md` | 70 條創業者與投資人原文、9 條 C 級、管理學對照、「若只讀十篇」 |
| `05_accelerators_universities.md` | 59 項加速器與大學資源、授權引句、機構入口對照表 |
| `06_academic_doi.md` | 約 30 筆已驗證學術與書籍書目、C 級線索表、台灣／亞洲說明、開放取得對照 |

**下一步（需要網路權限）**：放行 paulgraham.com、www.ycombinator.com、blog.samaltman.com、blakemasters.com、foundersfund.com、penguinrandomhouse.com、pmarchive.com、a16z.com、ocw.mit.edu、steveblank.com、conversationswithtyler.com、api.crossref.org 後，重跑抓取：對全部 DOI 跑一次 Crossref 比對 title／DOI／卷期頁，並逐條開啟 URL 才能把 B 升為 A。在此之前，**所有等級維持原樣，歸檔時請在每條旁標註「未人工開啟」**。
