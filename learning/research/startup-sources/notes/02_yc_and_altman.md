# YC 公開學習資源與 Sam Altman 創業寫作：來源目錄（截至 2026-11-16）

## 方法與限制（先讀）

- **WebFetch 全數失敗**：`www.ycombinator.com`、`blog.samaltman.com` 都回 `getaddrinfo ENOTFOUND`（沙箱網路白名單未放行），依指示未重試、未用 curl。因此**沒有任何一筆是 A 級**（沒有親自抓到頁面）。
- 所有條目的證據都來自 WebSearch：URL 與標題同時出現在搜尋結果 = **B 級**。講者／日期／內容是搜尋結果摘要，不是我讀過頁面，因此**搜尋結果沒給的欄位一律寫「未驗證」**，不補。
- 搜尋結果給的是相對時間（「515 days ago」之類），不可換算，所以大部分 Library 頁面的**發布日期＝未驗證**。
- Library 頁面的 URL 形如 `/library/<2字元ID>-<slug>`，ID 無法由 slug 推導，**不得憑 slug 重建**。

### 資源家族的逐字稿與授權（各條目引用 F1–F7）

| 家族 | 逐字稿/字幕 | 授權/使用 |
|---|---|---|
| F1 YC Library 頁面（ycombinator.com/library/…） | 未驗證（沒讀到頁面；影片頁是否附逐字稿、YouTube 字幕是否開啟都需親自確認） | **找不到明確的 Library 內容授權聲明**；預設視為 YC 著作權保留，只連結 + 自寫摘要，引文限短句 |
| F2 Stanford CS183B 課程站（startupclass.samaltman.com） | 搜尋摘要稱「每講頁面有投影片與逐字稿，逐字稿在 Genius 上有註解」（B，第二手） | 站上授權聲明未找到；同樣預設只連結 |
| F3 YouTube 播放清單／影片 | 未驗證 | 平台條款 + 上傳者著作權；**部分清單疑為第三方上傳**（見各條） |
| F4 YC blog 文章（ycombinator.com/blog/…） | 文章即文字 | 授權聲明未找到 |
| F5 SAFE 與法律文件 | 文件本身即文字 | SAFE 有明確條款（見末尾 §3）：**CC BY-ND 4.0（不可改作）**，由搜尋摘要轉述，非逐字取得 |
| F6 Sam Altman 個人部落格 | 文章即文字 | 站上授權聲明未找到；個人著作，預設只連結 |
| F7 startupschool.org | 課程為影片+練習，逐字稿未驗證 | 免費註冊使用；授權聲明未找到 |

---

## 1. YC Library 主要分類與高價值條目

### Takeaway
YC Library 於 2020-08 上線（整合既有 YC 內容的中央入口）；內容以「影片＋文章」按主題篩選（可確認的分類有 Design、Fundraising/Investors，其餘分類名稱未能確認）；另有以人物／系列命名的 carousel（Dalton & Michael、Lightcone Podcast、How To Build The Future、AI Startup School、Garry Tan's Channel）。**搜尋未能找到 Tom Blomfield、Harj Taggar、Aaron Harris 專屬的 Library 單頁**，僅有 Startup School 2022 清單上的講者掛名（見 Gap）。

### Cited Findings — 條目（格式：標題｜講者｜日期｜類型｜URL｜驗證｜重點｜標籤｜Tier｜逐字稿｜授權｜對應主題）

**Library 入口與分類**

- **L00 Announcing the YC Startup Library**｜YC｜2020（HN「Library 2.0」討論串佐證 2020-08）｜article｜https://www.ycombinator.com/blog/startup-library｜B｜說明 Library 整合 YC 既往知識並作為新內容的集中地｜meta｜Tier 2｜文字｜F4｜Library 沿革／資料來源說明。
- **L01 Learn About Design from the YC Startup Library**｜YC｜未驗證｜index｜https://www.ycombinator.com/library/search?categories=Design｜B｜分類篩選頁，證實 `search?categories=` 參數機制與「Design」分類存在｜design｜Tier 3｜n/a｜F1｜產品／設計。
- **L02 Learn About Fundraising Investors from the YC Startup Library**｜YC｜未驗證｜index｜https://www.ycombinator.com/library/search?categories=Fundraising+++Investors｜B｜證實「Fundraising / Investors」分類存在｜fundraising｜Tier 3｜n/a｜F1｜募資。

**想法／起步／PMF（Seibel、Dalton）**

- **L10 One order of operations for starting a startup**｜Michael Seibel｜未驗證（對應文章版 https://www.ycombinator.com/blog/one-order-of-operations-for-starting-a-startup，B）｜video/article｜https://www.ycombinator.com/library/CP-one-order-of-operations-for-starting-a-startup｜B｜起步順序：先選自己在乎的問題→與朋友腦力激盪解法→做 MVP 上線｜idea, product｜**Tier 1**｜文字版有；影片字幕未驗證｜F1｜精實創業／起步。
- **L11 How to plan an MVP**｜Michael Seibel｜2019（Startup School 2019 recap 提及；Library 頁日期未驗證）｜video｜https://www.ycombinator.com/library/6f-how-to-plan-an-mvp｜B｜MVP 要小、聚焦少數初始使用者、數週內上線；另提出 hard-tech 用的「heavy MVP」｜product, PMF｜**Tier 1**｜未驗證｜F1｜精實創業。YouTube 版：https://www.youtube.com/watch?v=1hHMwLxN6EM（"Michael Seibel - How to Plan an MVP"，B）
- **L12 How to build an MVP**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/Io-how-to-build-an-mvp｜B｜MVP 製作（與 L11 配套；搜尋結果僅見標題）｜product｜Tier 2｜未驗證｜F1｜精實創業。
- **L13 Building product**｜Michael Seibel（搜尋摘要稱 Seibel 談 building product；YouTube 另見 "Michael Seibel - Building Product" https://www.youtube.com/watch?v=C27RVio2rOs，B）｜未驗證｜video｜https://www.ycombinator.com/library/7s-building-product｜B｜早期產品開發原則｜product｜Tier 2｜未驗證｜F1｜產品。
- **L14 How to get and test ideas**｜Michael Seibel（搜尋稱僅 Seibel 一人）｜未驗證｜video｜https://www.ycombinator.com/library/7x-how-to-get-and-test-ideas｜B｜取得與測試創業點子｜idea｜Tier 2｜未驗證｜F1｜點子／驗證。
- **L15 How to get startup ideas**｜Jared Friedman（搜尋結果摘要）｜未驗證｜video｜https://www.ycombinator.com/library/8g-how-to-get-startup-ideas｜B｜點子來源方法論（搜尋亦見 Startup School 2022 掛名「How to Get and Evaluate Startup Ideas」）｜idea｜**Tier 1**｜未驗證｜F1｜點子。
- **L16 Dalton & Michael: Where do great startup ideas come from?**｜Dalton Caldwell, Michael Seibel｜未驗證｜video｜https://www.ycombinator.com/library/DU-dalton-michael-where-do-great-startup-ideas-come-from｜B｜以 Airbnb、Coinbase、Stripe 為例談點子來源；技術朋友都在抱怨的問題可能是真問題｜idea｜Tier 2｜未驗證｜F1｜點子。
- **L17 Dalton & Michael: Should you follow your passion?**｜同上｜未驗證｜video｜https://www.ycombinator.com/library/DW-dalton-michael-should-you-follow-your-passion｜B｜解法找問題的陷阱、熱情與選題｜idea, founder-psychology｜Tier 2｜未驗證｜F1｜點子／心態。
- **L18 Dalton & Michael: The two mindsets that can kill your startup**｜同上｜未驗證｜video｜https://www.ycombinator.com/library/Ic-dalton-michael-the-two-mindsets-that-can-kill-your-startup｜B｜（內容僅見標題，細節未驗證）｜founder-psychology｜Tier 2｜未驗證｜F1｜創辦人心態。
- **L19 Dalton & Michael: Simple products that became big companies**｜同上｜未驗證｜video｜https://www.ycombinator.com/library/DT-dalton-michael-simple-products-that-became-big-companies｜B｜簡單產品長成大公司｜product, idea｜Tier 3｜未驗證｜F1｜MVP。
- **L20 Dalton & Michael: How future billionaires get sh*t done**｜同上｜未驗證｜video｜https://www.ycombinator.com/library/Ik-dalton-michael-how-future-billionaires-get-sh-t-done｜B｜執行力／行動｜founder-psychology｜Tier 3｜未驗證｜F1｜執行。
- **L21 Dalton & Michael: The student's guide to becoming a successful startup founder**｜同上｜未驗證｜video｜https://www.ycombinator.com/library/IZ-dalton-michael-the-student-s-guide-to-becoming-a-successful-startup-founder｜B｜給學生的創業路徑｜idea, founder-psychology｜Tier 3｜未驗證｜F1。
- **L22 When Should You Trust Your Gut?**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/Kw-when-should-you-trust-your-gut｜B｜有／無領域專長的創辦人，對直覺的信任程度應不同｜idea, founder-psychology｜Tier 3｜未驗證｜F1。
- **L23 The 5 things that kill startups post seed rounds**｜Michael Seibel（搜尋摘要稱其提及約 70% 公司未找到 PMF）｜未驗證｜video｜https://www.ycombinator.com/library/8a-the-5-things-that-kill-startups-post-seed-rounds｜B｜種子輪後常見死因，含產品開發太慢｜PMF, growth｜Tier 2｜未驗證｜F1｜PMF／失敗模式。
- **L24 How not to fail**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/5l-how-not-to-fail｜B｜（僅見標題）｜PMF｜Tier 3｜未驗證｜F1。
- **L25 YC's essential startup advice**｜YC（講者未驗證）｜未驗證｜video｜https://ycombinator.com/library/4D-yc-s-essential-startup-advice?amp=&amp=｜B（URL 帶 amp 參數，建議去除參數）｜YC 核心建議彙編｜meta｜**Tier 1**｜未驗證｜F1｜入門總覽。

**使用者／成長／指標／定價**

- **L30 How to talk to users**｜Gustaf Alströmer｜Startup School 2022（日期未驗證）｜video｜https://www.ycombinator.com/library/Iq-how-to-talk-to-users｜B｜如何訪談現有與潛在使用者並詮釋回饋｜PMF, product｜**Tier 1**｜未驗證｜F1｜客戶訪談。
- **L31 How to Start a Startup: Talking to users**｜Emmett Shear（搜尋稱出自 Stanford 課程頁）｜2014（課程年份）｜video｜https://www.ycombinator.com/library/JQ-how-to-start-a-startup-talking-to-users/｜B｜Stanford 課程內談使用者訪談與該問的問題｜PMF｜Tier 2｜課程站有逐字稿（見 F2）｜F1/F2｜客戶訪談。
- **L32 How to Start a Startup: Building Product, Talking to Users, and Growing**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/dS-how-to-start-a-startup-building-product-talking-to-users-and-growing｜B｜組合型條目｜product, growth｜Tier 3｜未驗證｜F1。
- **L33 How to measure your product**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/8C-how-to-measure-your-product｜B｜指標／量測｜growth, product｜Tier 2｜未驗證｜F1｜成長指標。
- **L34 Analytics for startups**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/8H-analytics-for-startups｜B｜分析指標入門｜growth｜Tier 3｜未驗證｜F1。
- **L35 Startup pricing 101**｜Kevin Hale（搜尋稱 Kevin Hale on pricing）｜未驗證｜video｜https://www.ycombinator.com/library/6h-startup-pricing-101｜B｜定價入門｜sales, product｜**Tier 1**｜未驗證｜F1｜定價。
- **L36 User you don't want**｜講者未驗證｜未驗證｜article/video｜https://www.ycombinator.com/library/67-user-you-don-t-want｜B｜（僅見標題）｜product｜Tier 3｜未驗證｜F1。
- **Kevin Hale「How to Evaluate Startup Ideas」**（Startup School 2019，無 Library 直連）：以 YC 部落格週回顧佐證——https://www.ycombinator.com/blog/startup-school-week-8-recap-adora-cheung-on-prioritizing-your-time-and-kevin-hale-on-evaluating-startup-ideas/（B）；podcast 預覽 https://www.ycombinator.com/blog/startup-school-podcast-preview-with-kevin-hale（B）｜重點：點子=問題+解法實驗+洞見三要素｜idea｜**Tier 1**｜F4｜**注意：此講的原始影片 URL 我未取得（Gap）**。

**募資／法務／申請**

- **L40 Modern startup funding**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/8F-modern-startup-funding｜B｜以 SAFE 等可轉換證券做早期募資｜fundraising, legal｜**Tier 1**｜未驗證｜F1｜募資。
- **L41 A guide to seed fundraising**｜YC｜未驗證（blog 版 https://blog.ycombinator.com/how-to-raise-a-seed-round/，B）｜article｜https://ycombinator.com/library/4A-a-guide-to-seed-fundraising?amp=&amp=｜B｜募到下個里程碑（約 12–18 個月）、種子輪稀釋通常至多約 20%、避免超過 25%｜fundraising｜**Tier 1**｜文字｜F1/F4｜募資。
- **L42 How to build your seed round pitch deck**｜YC｜未驗證｜article｜https://ycombinator.com/library/2u-how-to-build-your-seed-round-pitch-deck?amp=&amp=｜B｜清晰簡潔、團隊頁聚焦創辦人而非顧問｜fundraising｜Tier 2｜文字｜F1｜Pitch deck。
- **L43 Fundraising Fundamentals (SUS 2018)**｜講者未驗證｜Startup School 2018｜video｜https://www.ycombinator.com/library/7I-fundraising-fundamentals-sus-2018｜B｜種子輪傾向可轉換工具而非定價股權｜fundraising｜Tier 2｜未驗證｜F1｜募資。
- **L44 Fundraising Advice for YC Companies**｜YC｜未驗證｜article｜https://blog.ycombinator.com/fundraising-advice-for-yc-companies｜B｜先關第一批、數週內集中見投資人｜fundraising｜Tier 3｜文字｜F4。
- **L45 Startup legal mechanics**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/7R-startup-legal-mechanics｜B｜法律實務與常見錯誤｜legal｜Tier 2｜未驗證｜F1｜法務。
- **L46 How to apply and succeed at YC**｜講者未驗證｜未驗證｜video｜https://www.ycombinator.com/library/It-how-to-apply-and-succeed-at-yc｜B｜申請 YC 建議｜fundraising, meta｜Tier 2｜未驗證｜F1｜申請。
- **L47 Before the startup**｜講者未驗證（課程站 lec03 為 Paul Graham 同名講；是否同一支未驗證）｜未驗證｜video｜https://www.ycombinator.com/library/8y-before-the-startup｜B｜創業前準備｜idea｜Tier 3｜未驗證｜F1。

**共同創辦人**

- **L50 Does co-founder matching work?**｜YC｜未驗證｜article/video｜https://www.ycombinator.com/library/Cq-does-co-founder-matching-work｜B｜檢討共同創辦人配對成效｜founder-psychology｜Tier 3｜未驗證｜F1。
- **L51 What do people want in a co-founder?**｜YC｜未驗證｜https://www.ycombinator.com/library/Cn-what-do-people-want-in-a-co-founder｜B｜找共同創辦人的偏好｜founder-psychology｜Tier 3｜F1。
- **L52 Keys To Successful Co-Founder Relationships**｜講者未驗證｜https://www.ycombinator.com/library/Im-keys-to-successful-co-founder-relationships｜B｜共創關係｜founder-psychology｜Tier 2｜F1。
- **L53 How Top 1% Founders Navigate Co-founder Conflict**｜Lightcone（Garry、Harj、Diana 等，據搜尋摘要）｜未驗證｜podcast｜https://ycombinator.com/library/MI-how-to-navigate-co-founder-disputes｜B｜共創衝突處理｜founder-psychology｜Tier 2｜未驗證｜F1。
- **YC 配對平台**：https://www.ycombinator.com/cofounder-matching（B）、https://www.startupschool.org/cofounder-matching（B）、公告 https://www.ycombinator.com/blog/co-founder-matching（B）、https://www.ycombinator.com/blog/10-questions-to-discuss-with-a-potential-co-founder（B）｜免費，宣稱超過 100,000 次配對（搜尋摘要，未驗證數字）｜Tier 2–3｜F7/F4。

**AI 時代（Lightcone 與 Library 近作）**

- **L60 The Truth About Building AI Startups Today [Lightcone Ep. 1]**｜Garry Tan、Diana Hu、Harj Taggar、Jared Friedman（系列主持人，據 Library 系列說明）｜未驗證｜podcast｜https://www.ycombinator.com/library/Kb-the-truth-about-building-ai-startups-today-lightcone-podcast-ep-1｜B｜AI 創業現況｜product, growth｜Tier 2｜未驗證｜F1/F3。
- **L61 Lightcone Podcast（系列頁）**｜同上｜https://www.ycombinator.com/library/carousel/Lightcone%20Podcast｜B｜每兩週一集（Library 說明）｜Tier 2。
- **L62 How to Build a Self-Improving Company with AI**｜Tom Blomfield（搜尋摘要稱其 batch talk）｜未驗證（近年）｜video｜https://www.ycombinator.com/library/Qf-how-to-build-a-self-improving-company-with-ai｜B｜AI 時代公司運營｜product, growth｜Tier 3｜未驗證｜F1。
- **L63 10 People + AI = Billion Dollar Company?**｜Lightcone（Garry、Jared、Diana）｜未驗證｜podcast｜https://www.ycombinator.com/library/LD-10-people-ai-billion-dollar-company｜B｜小團隊＋AI｜hiring, growth｜Tier 3｜F1。
- **L64 How to Spend Your 20s in the AI Era**｜講者未驗證｜https://www.ycombinator.com/library/Me-how-to-spend-your-20s-in-the-ai-era｜B｜職涯／創業選擇｜founder-psychology｜Tier 3｜F1。
- **L65 Garry Tan's Channel（系列頁）**｜Garry Tan｜https://www.ycombinator.com/library/carousel/Garry%20Tan's%20Channel｜B｜含 2018 Startup School 設計講與 Design Review｜design｜Tier 3｜F1。
- **L66 Requests for Startups**｜YC（含 Diana Hu 等作者）｜https://www.ycombinator.com/rfs｜B｜YC 想投資的方向清單｜idea｜Tier 2｜文字｜F4｜點子（時效性高，需標註抓取日）。
- **L67 YC Startup Playbook**｜YC（Sam Altman 時期出品，作者未驗證）｜https://www.ycombinator.com/blog/startup-playbook｜B（僅標題）｜早期 YC 創業手冊｜meta｜Tier 3｜F4｜**內容未驗證，可能已過時**。

### Inferences
- Tom Blomfield、Harj Taggar、Aaron Harris、Diana Hu、Garry Tan 的個人 Library 單頁，部分可由「Startup School 2022 講者名單」與 Lightcone 系列間接涵蓋；若需逐人清單，需放行 www.ycombinator.com 後從 `/library/search?…` 取得。
- 以 Seibel + Dalton & Michael 為核心是最穩的 Tier 1 骨幹（多筆 B 級證據互相印證）。

### Gaps
- Library 完整分類清單與每篇發布日期：搜尋結果不含，無法驗證。
- Tom Blomfield（客戶／文化類）、Harj Taggar（僅知 SUS 2022 掛名「Should You Start A Startup?」）、Aaron Harris（僅知 SUS 2022 掛名「Startup Business Models and Pricing」）的 Library 專頁 URL 未找到；搜尋結果中也未見他們出現在 CS183B 清單（Aaron Harris 在 2014 課程的講次未能驗證）。

---

## 2. Startup School（startupschool.org）與 Stanford CS183B

### Takeaway
startupschool.org 是 YC 免費自學課程（官網稱約 7 週、每週 1–2 小時；FAQ 稱完全免費）；歷史版本包含 2018（10 週）、2019、2022（7 週，2022-06-27 起）；2025 與 2026 轉為現場活動（AI Startup School、Startup School 2026）。CS183B「How to Start a Startup」為 2014 秋季 Stanford 課，課程站共 20 講。

### Cited Findings

**startupschool.org**
- **S01 Startup School 首頁**｜YC｜持續更新（抓取日 2026-11 未確認內容版本）｜course｜https://www.startupschool.org/｜B｜免費、自訂步調、約 7 週；課綱含 How to Plan your MVP、Modern Startup Funding、How to Get Users and Grow｜all｜**Tier 1**｜影片逐字稿未驗證｜F7｜整體入口。
- **S02 Startup School for Aspiring Founders**｜YC｜未驗證｜course｜https://www.startupschool.org/aspiring-founders｜B｜8 個模組：是否創業、點子、共創、客戶訪談、上線、指標與定價、募資、申請 YC（搜尋摘要；模組數另一則摘要稱 6 週，**兩者矛盾，未解**）｜idea, PMF, fundraising｜Tier 1｜F7。
- **S03 Startup School for Future Founders**｜YC｜2020 起（HN 2020-11 討論串 https://news.ycombinator.com/item?id=24944460 佐證，B）｜course｜https://www.startupschool.org/future-founders｜B｜給「還沒準備好」的未來創辦人｜idea｜Tier 3｜F7。
- **S04 FAQ**｜https://www.startupschool.org/faq｜B｜稱免費、持續提供資源存取｜meta｜Tier 3。
- **S05 The latest Startup School talks are now available to all**｜YC｜2022｜article｜https://www.ycombinator.com/blog/startup-school-videos｜B｜2022 影片清單，每支約 15–30 分鐘；講者含 Harj Taggar、Jared Friedman、Gustaf Alströmer、Aaron Epstein、Michael Seibel、Kat Mañalac、Diana Hu 等｜all｜**Tier 1**｜文字｜F4｜**2022 講次索引**。
- **S06 Announcing Startup School 2022**｜https://www.ycombinator.com/blog/announcing-startup-school-2022｜B｜2022 為 7 週、免費、公開｜Tier 3。
- **S07 Announcing Startup School 2019**｜https://www.ycombinator.com/blog/announcing-startup-school-2019/｜B｜Tier 3。
- **S08 Startup School 2018 – Curriculum**｜https://blog.ycombinator.com/startup-school-2018-curriculum｜B｜2018 十週課綱｜Tier 3。
- **S09 Startup School 2019 週回顧**：Week 1 https://www.ycombinator.com/blog/startup-school-week-1-recap-kevin-hale-and-eric-migicovsky/ ；Week 2 https://www.ycombinator.com/blog/startup-school-week-2-recap-michael-seibel-adora-cheung-and-ilya-volodarsky/ ；Week 8 https://www.ycombinator.com/blog/startup-school-week-8-recap-adora-cheung-on-prioritizing-your-time-and-kevin-hale-on-evaluating-startup-ideas/ ；Week 10 https://www.ycombinator.com/blog/startup-school-week-10-recap-ali-rowghani-on-how-to-lead-and-kevin-hale-and-adora-cheung-on-startup-school-2019-by-the-numbers/｜B｜2019 各週講者摘要｜Tier 2｜F4。

**Startup School YouTube 清單（官方性見註）**
- **Y1 Startup School 2012**｜https://www.youtube.com/playlist?list=PLQ-uHSnFig5PFAmAiftS0h9hHFZJNHGCn｜B｜活動日 2012-10-20（搜尋摘要）｜Tier 3。
- **Y2 Startup School 2013**｜https://www.youtube.com/playlist?list=PLQ-uHSnFig5PZH_UEL0JalZ2edVGsO2R8｜B｜2013-10-19｜Tier 3。
- **Y3 Y Combinator Startup School 2017 @ Stanford**｜https://www.youtube.com/playlist?list=PLvBgUnavXrvNK77iutykiQCWlImf1Irx7｜B｜2017 活動存檔；**上傳者未驗證**（ID 前綴與 YC 官方頻道清單不同，可能為第三方）｜Tier 2。
- **Y4 YC AI Startup School 2025**｜https://www.youtube.com/playlist?list=PLv4ItuuAyLfoWTi3FMaQPk8Y2u17SUEpb｜B｜2025-06-16/17 SF 活動；**搜尋摘要稱由上傳者及參加者錄製，疑非 YC 官方**｜Tier 2。
- **Y5 Startup School 2026**｜`https://www.youtube.com/playlist?list=PLEb7ftOB0yf0`｜**B 但 ID 長度異常（疑被截斷，YouTube 清單 ID 通常為 34 字元）——不可直接使用，需人工確認**｜Tier 2。
- **Y6 Y Combinator: The Pocket Guide of Essential YC Advice**｜https://www.youtube.com/playlist?list=PLPU1VWZcc21DghzZQmAChX95VI56KEZLR｜B｜**上傳者未驗證，疑第三方整理**｜Tier 3。
- AI Startup School 的 Library 頁：https://www.ycombinator.com/library/carousel/AI%20Startup%20School（B）；2025 活動公告 https://www.ycombinator.com/blog/ai-startupschool（B，標題 "Join us at AI Startup School — June 16-17"，稱 100% 免費、全員邀請制）。
- **2026 活動頁** https://events.ycombinator.com/startup-school-2026（B）：SF，2026-07-25–26，hand-picked builders；**是否免費未驗證**。
- Startup School Paris（https://events.ycombinator.com/yc-paris-sus，B）：站內標記已結束（過期頁）。
- YC AI Stack（學生資源）：https://www.ycombinator.com/blog/the-yc-ai-student-starter-pack 、https://deals.ycombinator.com/students（B）｜非教學內容，僅作活動福利背景。

**Stanford CS183B「How to Start a Startup」（2014 秋）— 課程站與清單**
- **C00 How to Start a Startup（課程首頁／About）**｜Sam Altman（課程主持）｜2014 Fall｜course｜https://startupclass.samaltman.com/ 、https://startupclass.samaltman.com/lists/about/ ｜B｜20 支影片、約 1000 分鐘；附投影片與逐字稿、電子書版本｜all｜**Tier 1**｜**有（課程站頁面，據搜尋摘要）**｜F2｜整個課程入口。另有 Readings https://startupclass.samaltman.com/lists/readings/ 、Projects https://startupclass.samaltman.com/lists/projects/ （B）。
- **C01 Lecture 1：Ideas, Products, Teams and Execution Part I**｜Sam Altman & Dustin Moskovitz｜2014｜video｜https://startupclass.samaltman.com/courses/lec01/ ｜B（標題細節來自 YouTube 標題 "Ideas, Products, Teams, and Execution with Dustin Moskovitz (How to Start a Startup 2014: Lecture 1)" https://www.youtube.com/watch?v=egJeFaIXZLo ，B）｜idea, product, hiring｜**Tier 1**｜課程站有｜F2/F3｜精實創業。
- **C02 Lecture 2：Ideas, Products, Teams and Execution Part II**｜Sam Altman｜2014｜https://startupclass.samaltman.com/courses/lec02/ ｜B｜**Tier 1**｜F2。
- **C03 Lecture 3：Before the Startup**｜Paul Graham｜2014｜https://startupclass.samaltman.com/courses/lec03/ ｜B｜**Tier 1**｜F2。
- **C04 Lecture 4**｜講者與標題未驗證｜https://startupclass.samaltman.com/courses/lec04/ ｜B（僅見 URL 與 "Lecture 4"）｜Tier 3。
- **C05 Lecture 5：Competition is For Losers**｜Peter Thiel（讀物為 Zero to One 第 3–5 章）｜2014｜https://startupclass.samaltman.com/courses/lec05/ ｜B｜**Tier 1**｜idea｜F2。
- **C06 Lecture 6：成長（Growth）**｜Alex Schultz（Facebook VP Growth）｜https://startupclass.samaltman.com/courses/lec06/ ｜B（URL 來自搜尋結果，**頁面標題未見**）｜growth｜**Tier 1**｜F2。
- **C07 Lecture 7：How to Build Products Users Love**｜講者未驗證｜https://startupclass.samaltman.com/courses/lec07/ ｜B｜product｜Tier 1｜F2。
- **C09 Lecture 9：How to Raise Money**｜講者未驗證（讀物含 PG "How to Convince Investors"、"How to Raise Money"）｜https://startupclass.samaltman.com/courses/lec09/ ｜B｜fundraising｜**Tier 1**｜F2。
- **C13 Lecture 13：How To Be A Great Founder**｜Reid Hoffman｜https://startupclass.samaltman.com/courses/lec13/ ｜B｜founder-psychology｜**Tier 1**｜F2。
- **C18 Lecture 18：Legal and Accounting Basics for Startups**｜講者未驗證｜https://startupclass.samaltman.com/courses/lec18/ ｜B｜legal｜Tier 2｜F2。
- **C19 Lecture 19：Sales and Marketing**｜講者未驗證｜https://startupclass.samaltman.com/courses/lec19/ ｜B｜sales｜Tier 2｜F2。
- **C20 Lecture 20：Later-Stage Advice**｜講者未驗證｜https://startupclass.samaltman.com/courses/lec20/ ｜B｜growth, hiring｜Tier 2｜F2。
- lec08、lec10–12、lec14–17：頁面未出現在搜尋結果，**未驗證**（讀物頁暗示 lec10 有 Alfred Lin / Brian Chesky 的 Hiring and Culture，僅為間接）。**Aaron Harris 是否在清單中：未能驗證。**
- **YouTube 播放清單（CS183B）**：
  - https://www.youtube.com/playlist?list=PL11qn6zM2Y3bMZdChxEqHKaCaKUjwItGL（標題 "Startup: YC How To Start A Startup 2015 (Stanford Course: CS183B)"，**年份標示 2015 與課程實際 2014 秋季不符**，且上傳者未驗證）B
  - https://www.youtube.com/playlist?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1（"How to Start a Startup"）B；https://m.youtube.com/playlist?list=PLlqJy-tyOLlzSmpBBoQafRlrfEgiyjmdN B；皆上傳者未驗證
  - 單支：https://www.youtube.com/watch?v=WrPWrC3Nyrk（Altman & Moskovitz 開場）B；https://www.youtube.com/watch?v=ZoqgAy3h4OM（"How and Why to Start A Startup - Sam Altman & Dustin Moskovitz - Stanford CS183F: Startup School"；**標 CS183F，編號不一致**）B；https://www.youtube.com/watch?v=0lJKucu6HJc（"Sam Altman - How to Succeed with a Startup"）B —— **這是影片標題，不是部落格文章**。

### Inferences
- 官方課程站（startupclass.samaltman.com）比 YouTube 清單更適合作為 canonical 引用，因為各清單上傳者未驗證。
- startupschool.org 現行形式是「自學課程＋共創配對」，2025–2026 的 Startup School 是邀請制現場活動，不等同免費公開課。

### Gaps
- 20 講完整講者／標題對照（缺 lec04、08、10–12、14–17 等）。
- 2017–2025 各屆 Startup School 的 ycombinator.com 完整講者清單頁未取得（只有 2018 課綱、2019 週回顧、2022 影片索引）。
- startupschool.org 現行課程模組是 6、7 或 8 個，說法互相矛盾。

---

## 3. YC 官方 YouTube 頻道與播放清單

### Takeaway
YC 官方頻道本身的 URL（@ycombinator）**未在搜尋結果出現，未驗證**。可證實屬於 YC 頻道群的清單前綴為 `PLQ-uHSnFig5…`（How to Build the Future、Dalton & Michael、Startup School 2012/2013）。

### Cited Findings
- **How to Build the Future（YouTube 清單）**｜Sam Altman 2016 起創辦，首集 Mark Zuckerberg；後續 Garry Tan、David Lieb 等主持｜playlist｜https://www.youtube.com/playlist?list=PLQ-uHSnFig5MoTTcgd8EzenEADqGTQPpW ｜B｜Tier 2｜F3；Library 系列頁 https://www.ycombinator.com/library/carousel/How%20To%20Build%20The%20Future （B）；系列介紹 https://www.ycombinator.com/blog/how-to-build-the-future （B）。
- **Dalton & Michael（YouTube 清單）**｜Dalton Caldwell、Michael Seibel｜https://www.youtube.com/playlist?list=PLQ-uHSnFig5Nd98Sc9I-kkc0ZWe8peRMC ｜B｜**Tier 1**｜Library 系列頁 https://www.ycombinator.com/library/carousel/Dalton%20&%20Michael （B）；另有獨立頻道 "Dalton + Michael" https://www.youtube.com/channel/UCllx7jOjBL794FK67jtb5Og （B）。
- **YC Root Access**（頻道）：https://www.youtube.com/channel/UCxIJaCMEptJjxmmQgGFsnCg/playlists （B）。
- **Lightcone Podcast**：YouTube 專屬清單 URL **未找到**（見 §1 Library 系列頁）。
- **Michael Seibel「Y Combinator's Essential Startup Advice」**：https://www.youtube.com/watch?v=A35jCapHmug（描述為 Startup Grind 2019 對談，**非 YC 頻道上傳**，B）；"The Secrets to YC's Essential Startup Advice…" https://www.youtube.com/watch?v=MdykKrbDBwc （B，上傳者未驗證）。
- "Everything We Teach at YC in 10 Minutes"：https://www.youtube.com/watch?v=bzxPVr9H8Kc 與 https://youtube.com/watch?v=Pg72m3CjuK4 （兩個版本，B，上傳者未驗證，可能是整理／轉載）。

### Gaps
- YC 官方頻道 URL、Lightcone 官方播放清單、"Essential Startup Advice" 官方清單：均未驗證。

---

## 4. YC 文件（SAFE、申請、共創、Jargon）

### Takeaway
SAFE 為 YC 最明確、最成熟的「開放文件」，有專頁、primer、User Guide，且有明確授權（CC BY-ND 4.0，搜尋摘要轉述）。找不到 "Startup Jargon" 頁面；未找到開放式 term sheet。

### Cited Findings
- **D01 The SAFE — the open standard for startup fundraising**｜YC｜持續更新｜document｜https://www.ycombinator.com/safe ｜B｜post-money SAFE 三版本（有估值上限無折扣／有折扣無上限／無上限 MFN），另有加拿大、開曼、新加坡版；選配 pro rata side letter｜legal, fundraising｜**Tier 1**｜文件本身為文字｜F5。
- **D02 YC Safe Financing Documents（文件下載頁）**｜https://www.ycombinator.com/documents （B；搜尋結果 URL 帶追蹤參數，使用前去除）｜Tier 1｜F5。
- **D03 Primer for post-money safe v1.1**（PDF）｜https://www.ycombinator.com/assets/ycdc/Primer%20for%20post-money%20safe%20v1.1-2af8129e12effd9638eeab383b7309142c8f415e5cdb0bc210d573f779177a1c.pdf ｜B｜說明 post-money 持股計算（例：$500k／$6.7M 上限≈7.5%）；**含 CC BY-ND 4.0 授權敘述（搜尋摘要轉述）**｜**Tier 1**｜F5。
- **D04 SAFE User Guide（Quick Start Guide，PDF）**｜https://bookface-static.ycombinator.com/assets/ycdc/SAFE%20User%20Guide-a47c6588327d73aa2799e61ed7c2cae9f1a0ee9acfa9c43b62039dc06e715832.pdf ｜B｜修改、資金到位才生效、side letter 說明｜Tier 2｜F5（`bookface-static` 子網域，非 www）。
- **D05 SAFE vs. convertible note vs. priced round**｜https://www.ycombinator.com/safe/safe-vs-convertible-note ｜B｜Tier 2｜F5。
- **D06 Announcing the Safe, a Replacement for Convertible Notes**｜YC｜2013（日期未驗證；原始 SAFE 公告）｜https://www.ycombinator.com/blog/announcing-the-safe-a-replacement-for-convertible-notes ｜B｜Tier 2｜F4。
- **D07 The Y Combinator Standard Deal**｜https://www.ycombinator.com/deal ｜B｜YC 投資條件說明（金額未驗證，使用前須重讀頁面）｜fundraising｜Tier 2｜F5。
- **D08 Send a SAFE Terms of Use**｜https://www.ycombinator.com/safe-terms-of-use.html ｜B｜簽署工具條款；工具目前僅支援美國註冊公司（搜尋摘要）｜legal｜Tier 3。
- **D09 Co-founder matching**（見 §1）。
- **Startup Jargon**：**未找到**（搜尋「YC Startup Jargon」無結果，見 Gap）。
- **開源 term sheet / YC Open-Source Sales Agreement**：僅在 Hacker News 討論串 https://news.ycombinator.com/item?id=9035256 出現（B），為留言串，**非 YC 官方頁**，不可當 YC 授權依據。

### Gaps
- Startup Jargon 頁面不存在或搜尋不到；開放 term sheet 無官方頁。
- SAFE 授權聲明未見 primer 原文逐字，僅有搜尋摘要轉述。

---

## 5. Sam Altman 部落格（blog.samaltman.com）—— 創業相關文章與 slug

### Takeaway
下列 slug 皆在搜尋結果中以「標題＋URL」同現（B）。**「How to Succeed with a Startup」並不是部落格文章，而是 YouTube 影片標題**；**「The Strength of Being Misunderstood」在 blog.samaltman.com 上的 slug 未能驗證**（搜尋只找到非官方鏡像）。

### Cited Findings
- **A01 How To Be Successful**｜Sam Altman｜2019（日期搜尋未給，記憶為 2019，**未驗證**）｜essay｜https://blog.samaltman.com/how-to-be-successful ｜B｜13 條成功原則：複利、長期思考、自信、銷售、內在驅動｜founder-psychology｜**Tier 1**｜文字｜F6｜創辦人心態。
- **A02 Startup Advice**｜Sam Altman｜日期未驗證｜essay｜https://blog.samaltman.com/startup-advice ｜B｜93 條條列建議（Make something people want 等）｜PMF, hiring, product｜**Tier 1**｜F6。
- **A03 Startup advice, briefly**｜Sam Altman｜日期未驗證｜essay｜https://blog.samaltman.com/startup-advice-briefly ｜B｜精簡版，指向長版課程站｜Tier 1｜F6。
- **A04 Productivity**｜Sam Altman｜日期未驗證｜essay｜https://blog.samaltman.com/productivity ｜B｜每天多做 10%／進步 1% 的複利；用對的事比用對系統重要｜founder-psychology｜**Tier 1**｜F6。
- **A05 The days are long but the decades are short**｜Sam Altman｜日期未驗證｜essay｜https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short ｜B｜人生建議清單，含選對事、聚焦、低燃燒率、每年做一件大膽新事｜founder-psychology｜**Tier 1**｜F6。
- **A06 How things get done**｜https://blog.samaltman.com/how-things-get-done ｜B｜（內容僅見標題）｜Tier 3。
- **A07 What happened to innovation?**｜https://blog.samaltman.com/what-happened-to-innovation-1 ｜B｜（slug 末尾 `-1`，已驗證原樣）｜idea｜Tier 3。
- **A08 The Gentle Singularity**｜https://blog.samaltman.com/the-gentle-singularity ｜B｜AI 願景文，**非創業建議，列為背景**｜Tier 3。
- **A09 Fundraising Mistakes Founders Make / "It's mostly investors that talk about valuations …"**｜部落格分頁 https://blog.samaltman.com/?page=10 與 ?page=9 ｜B（**僅見分頁索引，單篇 slug 未驗證**）｜fundraising｜Tier 2。
- **A10 The Strength of Being Misunderstood**｜Sam Altman｜2020（第二手稱 2020，未驗證）｜essay｜blog.samaltman.com slug **未驗證**（C）；搜尋只命中 `chameleon-cyan-85a9.squarespace.com/notes/the-strength-of-being-misunderstood` 鏡像，**不得當 canonical**｜founder-psychology｜Tier 2。
- Feed：https://blog.samaltman.com/posts.atom （B，可作為日期與 slug 的機器可讀驗證來源）。
- **How to Succeed with a Startup**（影片）：https://www.youtube.com/watch?v=0lJKucu6HJc （B，Altman 講座影片；上傳者未驗證）。
- **How to Start a Startup**（Altman 單講）：https://www.youtube.com/watch?v=Vv3CEAS_w34 （B，上傳者未驗證）。

### Gaps
- 以上所有文章的發表日期：搜尋結果未顯示。
- A10 的官方 slug；「Startup Advice」之外的其他 Altman 創業長文（如招募、募資專文）slug。

---

## 6. 2025–2026 新內容

### Takeaway
找到的新資料以「活動與 AI 主題」為主：AI Startup School（2025-06-16/17，SF，免費、邀請制）、Startup School 2026（2026-07-25/26，SF）、Lightcone 與 Library 的 AI 主題近作、YC AI Stack 學生福利。均為 B 級；2026-11 的最新 Library 更新無法驗證。

### Cited Findings
- AI Startup School 公告：https://www.ycombinator.com/blog/ai-startupschool （B，2025）
- Startup School 2026 活動頁：https://events.ycombinator.com/startup-school-2026 （B，2026-07-25–26）
- Library 近作：L60–L65（見 §1）。
- Requests for Startups：https://www.ycombinator.com/rfs （B，含 Diana Hu 等作者；時效性高）
- Lightcone「2025 forecast」類短集與 Alexandr Wang 專訪出現在搜尋結果的 YouTube（B：https://www.youtube.com/watch?v=uGjv25IrjoE、https://www.youtube.com/watch?v=5noIKN8t69U，上傳者未驗證）。
- **過期／疑過期**：Startup School Paris 頁面標記已結束；Startup School 2019/2022 皆為時間限定課程；Library 2.0 的 HN 串為 2020；Startup Playbook 內容年代未驗證。

### Gaps
- 2026-07 之後（含 2026-11）的新增 Library 內容、新版 Startup School 課綱：搜尋無法確認。

---

## 推薦 10 項入門路徑（皆 B 級，連結閱讀為主）

1. L10 One order of operations（Seibel）— https://www.ycombinator.com/library/CP-one-order-of-operations-for-starting-a-startup
2. L16 Dalton & Michael: Where do great startup ideas come from? — https://www.ycombinator.com/library/DU-dalton-michael-where-do-great-startup-ideas-come-from
3. L15 How to get startup ideas（Jared Friedman）— https://www.ycombinator.com/library/8g-how-to-get-startup-ideas
4. L11 How to plan an MVP（Seibel）— https://www.ycombinator.com/library/6f-how-to-plan-an-mvp
5. L30 How to talk to users（Gustaf Alströmer）— https://www.ycombinator.com/library/Iq-how-to-talk-to-users
6. C02 Lecture 2（Altman）+ C03 Before the Startup（PG）— https://startupclass.samaltman.com/courses/lec02/ ；https://startupclass.samaltman.com/courses/lec03/
7. C05 Competition is For Losers（Thiel）— https://startupclass.samaltman.com/courses/lec05/
8. A02 Startup Advice（Altman）— https://blog.samaltman.com/startup-advice
9. L40 Modern startup funding + D01 SAFE — https://www.ycombinator.com/library/8F-modern-startup-funding ；https://www.ycombinator.com/safe
10. L41 A guide to seed fundraising — https://ycombinator.com/library/4A-a-guide-to-seed-fundraising（去除 `?amp=&amp=`；站內是否接受須重驗）

## (2) 無法驗證清單（C 級或未驗證）

C 級（未列為已驗證）：
- Sam Altman〈The Strength of Being Misunderstood〉於 blog.samaltman.com 的官方 slug（推測為 `the-strength-of-being-misunderstood`，**未確認**；僅有非官方鏡像）。
- YC 官方 YouTube 頻道主頁 URL（@ycombinator）。
- Lightcone Podcast 官方 YouTube 播放清單 URL。
- Startup School 2026 YouTube 播放清單：搜尋得到 `PLEb7ftOB0yf0`，**ID 長度異常，疑被截斷**。
- Startup Jargon 頁面（找不到）。
- 開源 term sheet 的官方頁（找不到）。
- Tom Blomfield、Harj Taggar、Aaron Harris 的個別 Library 專頁。
- Kevin Hale〈How to Evaluate Startup Ideas〉原始影片 URL。

其他未驗證項目：
- 所有條目的發布日期（除少數有年份線索者）。
- 所有逐字稿／字幕可得性（除 CS183B 課程站，據搜尋摘要）。
- Library 完整分類名稱（只確認 Design、Fundraising/Investors）。
- CS183B 的 lec04、08、10–12、14–17 講者與標題；Aaron Harris 是否在課程中。
- 多個 YouTube 清單的上傳者是否為 YC 官方。
- WebFetch 對 www.ycombinator.com、blog.samaltman.com 均 ENOTFOUND；需沙箱放行這兩個網域才能把 B 升為 A。

## (3) YC 內容的授權／重用聲明（僅列實際找到者）

1. **SAFE（搜尋摘要轉述，非逐字）**：「the form is expressly copyrighted and made available under the Creative Commons Attribution-No Derivatives 4.0 License」——出處：Primer for post-money safe v1.1 https://www.ycombinator.com/assets/ycdc/Primer%20for%20post-money%20safe%20v1.1-2af8129e12effd9638eeab383b7309142c8f415e5cdb0bc210d573f779177a1c.pdf 。歸檔含義：可原樣散布並註明出處，**不得改作／節錄改寫成衍生版本**。此句為搜尋工具摘要，原文措辭須人工核對。
2. **Send a SAFE Terms of Use**：「the license granted herein supplements (and does not limit) the rights granted under the YC General Terms」——出處：https://www.ycombinator.com/safe-terms-of-use.html 。僅涉及使用者在簽署工具輸入的資料授權，**不是 Library 內容授權**。YC General Terms 的 URL 未找到。
3. **YC Library／部落格／影片／課程站／Altman 部落格**：**未找到任何明確的重用授權聲明**。HN 討論（https://news.ycombinator.com/item?id=9035256、https://news.ycombinator.com/item?id=39319117）為使用者留言，**不可作為授權依據**。
4. 建議歸檔政策（我的判斷，非 YC 聲明）：除 SAFE 外，一律「只連結 + 自寫一句話摘要 + 極短引文」；CS183B 課程站雖提供逐字稿，也不因此視為可轉載。
