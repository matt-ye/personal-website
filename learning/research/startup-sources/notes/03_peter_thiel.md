# Peter Thiel 創業思想：一手來源目錄與論證地圖（截至 2026-11-16）

## 0. 方法與重要限制（請先讀）

- **本次沒有任何 A 級（親自抓取頁面）條目。** WebFetch 對 penguinrandomhouse.com、blakemasters.com、foundersfund.com、conversationswithtyler.com、youtube.com 均回傳 ENOTFOUND（本 session 網路白名單外）；wsj.com 被工具拒絕。這些網域要加入 session 的網路允許清單才能抓。
- WebSearch 的 allowed_domains 也不能用 wsj.com、web.archive.org、genius.com。WebSearch 額度在最後一輪用盡，Wharton 與少數補查未完成。
- 因此全部驗證等級最高為 **B**（精確 URL 與標題一起出現在搜尋結果）。凡 URL 只出現在搜尋摘要文字裡、或靠記憶與 URL 規律推得的，一律標 **C** 並放到第 5 節。
- 搜尋結果摘要由模型產生，其中的日期、細節可能有誤。本檔只採用多處一致的資訊，並標明單一來源的日期。
- 版權：只寫書名、URL、日期與我自己的一句話摘要，不複製書文或筆記內容。

---

## 1. Tier 1：標準一手來源

**1-1. Zero to One: Notes on Startups, or How to Build the Future**
- 作者：Peter Thiel with Blake Masters｜日期：2014-09-16（PRH 頁面）｜類型：book
- URL：https://www.penguinrandomhouse.com/books/234730/zero-to-one-by-peter-thiel-with-blake-masters/
- 驗證：B（標題與 ISBN 出現在搜尋結果）
- 版本資訊：ISBN 9780804139298；224 頁；PRH 頁面另列 9780804139304 與 9780804165266，搜尋結果沒說明各對應哪種格式。有聲書由 Blake Masters 朗讀。
- 出版社注意：搜尋摘要寫 imprint 為「Crown Currency」，我記憶中的版權頁是 Crown Business。**兩者衝突，引用前請查版權頁。**
- 重點：全書主張創業要創造「從 0 到 1」的新東西，靠獨占、長期持久與祕密，而非在既有市場競爭。
- 核心概念：全部（monopoly、definite optimism、secrets、power law、last mover、distribution、founder）
- Tier 1｜付費牆／授權：商業書；沒有找到 Crown 官方公開試讀節錄（搜尋摘要明說沒找到）。

**1-2. 「Competition Is for Losers」（WSJ，摘自 Zero to One 第 3 章 "All Happy Companies Are Different"）**
- 作者：Peter Thiel｜日期：2014-09-12（單一封存副本標示 11:25 a.m. ET）｜類型：essay
- URL：https://www.wsj.com/articles/peter-thiel-competition-is-for-losers-1410535536
- 驗證：**C（URL 未確認）**。一個論壇貼文標題以截斷形式出現 `online.wsj.com/articles/peter-th ... 1410535536`，文章 ID 尾碼吻合，但完整 slug 是我補的。
- 文章本身的存在、標題與日期由多個二手來源一致支持（Mises Wire、Brett Fox 等，見 1-7、3-x）。Thiel 在 CS183B 講座中自述 WSJ 版本標題是較聳動的版本，書中章名較溫和（搜尋摘要轉述，未見原句）。
- 重點：獨占是長期價值的來源，完全競爭下利潤被抹平。
- 核心概念：monopoly vs competition
- Tier 1｜付費牆：WSJ 付費牆，可能需要訂閱。
- 替代：https://mises.org/wire/peter-thiel-monopoly-and-competition 是 Mises 的評論，不是原文。

**1-3. Blake Masters 的 CS183 筆記首頁（blakemasters.com）**
- 作者：Blake Masters（記錄）／Peter Thiel（講者）｜日期：2012 春季學期（講座）；筆記 2012 年陸續貼出｜類型：lecture-notes
- URL（首頁）：https://blakemasters.com/（搜尋結果列出 `https://blakemasters.com/#_=_`，標題 "Blake Masters"）
- 驗證：B（僅限首頁）；**筆記索引頁 `http://blakemasters.com/peter-thiels-cs183-startup` 為 C**，只在搜尋摘要中被引述，並非搜尋結果項目。
- 搜尋摘要稱首頁現在把「CS183 Startup Notes」列為原始筆記入口，網站主軸已轉為國防、製造、基礎建設等硬科技創業。我沒能親自確認。
- 重點：Thiel 2012 年 Stanford 課程的最早、最廣傳的逐堂文字記錄；每篇開頭有 Masters 的免責聲明（錯漏歸他、功勞歸 Thiel）。
- 核心概念：全部；是 Zero to One 的前身
- Tier 1｜授權：作者個人網站，著作權人為 Masters／Thiel，引用請連回原站，不要轉貼全文。

**1-4. Y Combinator / Stanford CS183B (2014)「Competition Is for Losers with Peter Thiel (How to Start a Startup 2014: 5)」**
- 講者：Peter Thiel（課程主持：Sam Altman；YC）｜日期：2014 秋季（YouTube 上架日期各處不一，有 2014-10-07 與其他版本）｜類型：video
- YouTube URL：https://www.youtube.com/watch?v=3Fx5Q8xGU8k（**C**：影片 ID 是從第三方摘要站網址 `youtubesummary.com/summary/3Fx5Q8xGU8k` 推得，未見 YouTube 頁面本身）
- 可驗證的替代頁面（B，標題完整出現）：
  - https://news.ycombinator.com/item?id=13948780 （標題 "Competition Is for Losers with Peter Thiel (How to Start a Startup 2014: 5)"）
  - https://news.ycombinator.com/item?id=8424165 （標題 "Lecture 5, How to Start a Startup: Peter Thiel"）
  - https://rosetta.to/u/ycombinator/competition-is-for-losers-with-peter-thiel-how-to-start-a-startup-2014-5 （第三方目錄）
- 時長約 50 分 27 秒（第三方列表）。另有 YC Root Access 頻道的同一講座上傳（影片 ID 約為 5_0dVHMpJlo，來自 videohighlight.com 網址，C）。
- 重點：Thiel 自己用口語講解獨占 vs 完全競爭、從小市場起家並擴張、持久性重於成長。
- 核心概念：monopoly vs competition、last-mover、start small
- Tier 1｜授權：YouTube 免費；YC 對課程材料另有授權條款，未查。

**1-5. Peter Thiel's CS183: Startup，逐堂筆記（可驗證的堂次）**
- 作者：Blake Masters｜日期：2012 春季｜類型：lecture-notes
- 可驗證的標題與位置（皆為第三方鏡像或討論串，B）：
  - Class 13：https://www.gwern.net/docs/www/blakemasters.com/382477541aba0ef1f7431100c8ea5521686a657b.html （標題 "Peter Thiel's CS183: Startup - Class 13 Notes Essay"；gwern.net 保存的 blakemasters.com 副本，是目前搜尋裡唯一看到的「原站存檔」）
  - Class 5：https://news.ycombinator.com/item?id=3868410 （標題 "Peter Thiel's CS183: Startup - Class 5 Notes Essay"）
  - Class 7：https://news.ycombinator.com/item?id=3896304 （標題 "Peter Thiel's CS183: Startup - Class 7 Notes"）
  - Class 3：https://mirror.xyz/ztonft.eth/8dQINRc-gOHd1e5DiNUhW5TLLOIIQNQ4F52jekgR9Dc （標題 "Peter Thiel's CS183: Startup - Class 3 Notes Essay"；第三方轉貼）
  - 彙整副本：https://gist.github.com/kevindeasis/57f8f8c913f3c23c8073 （標題 "Notes Essays—Peter Thiel's CS183: Startup—Stanford, Spring 2012"；第三方，未見授權說明）
- **已由搜尋摘要支持的堂次標題**：Class 1「The Challenge of the Future」；Class 4「The Last Mover Advantage」（單一來源）；Class 5「The Mechanics of Mafia」；Class 9「If You Build It, Will They Come?」（distribution）。一位評論者把 Class 8 稱為「The Pitch」（單一來源）。**其餘堂次的標題與主題未能驗證**，我不憑記憶補。
- 重點：這組筆記是 Zero to One 各章的原型，章節標題與堂次標題多處重疊。
- Tier 1｜授權：優先引用 blakemasters.com 原站；鏡像僅供核對。

**1-6. Founders Fund：「What Happened to the Future?」**
- 作者：Founders Fund（搜尋摘要稱署名 Bruce Gibney，單一來源）｜日期：**不確定**。一個來源說 2011 年 Hacker News 討論串就連過這篇，另一來源說網站日期為 2017 年 1 月，兩者衝突，建議寫「約 2011 年首發、之後改版」之前先查。｜類型：essay（基金宣言）
- URL：https://foundersfund.com/the-future/?stream=top
- 驗證：B（標題與 URL 同現；根網址 https://foundersfund.com/the-future/ 為我去掉參數所得，應可用但未驗證）
- 重點：主張創投已不再資助真正的科技突破，轉而資助功能與小工具；列出航太、生技、先進機械與軟體、能源、網路等應投資的領域。
- 核心概念：definite optimism／stagnation；與創辦人導向投資
- Tier 1｜授權：公司網站，公開。

**1-7. Thiel 的 Stanford CS183 與書的關係：TechCrunch 報導**
- 作者：TechCrunch｜日期：2014-09-16｜類型：article
- URL：https://techcrunch.com/2014/09/16/zero-to-one-how-blake-masters-went-from-being-peter-thiels-student-to-co-author
- 驗證：B
- 重點：說明 Masters 的課堂筆記如何變成共同著作，可用來交代「筆記到書」的來歷。
- Tier 1（來歷佐證）｜授權：一般新聞網站。

---

## 2. Tier 2：強力輔助來源

**2-1. Conversations with Tyler, Ep. 1「Peter Thiel on Stagnation, Innovation, and What Not To Name Your Company」（Live at Mason）**
- 講者：Peter Thiel × Tyler Cowen｜日期：**搜尋結果未顯示**（我不給年份）｜類型：interview
- URL：https://conversationswithtyler.com/episodes/peter-thiel/ ｜驗證：B
- 重點：Thiel 論停滯集中在原子世界而非位元世界，並把原因歸於管制；同一頁有逐字稿。
- 核心概念：stagnation／definite optimism；公司取名等創業實務
- Tier 2｜授權：網站提供音檔與逐字稿，可免費讀。

**2-2. Conversations with Tyler, Ep. 210「Peter Thiel on Political Theology」**
- 日期：搜尋結果未顯示｜類型：interview
- URL：https://conversationswithtyler.com/episodes/peter-thiel-political-theology/ ｜驗證：B
- 重點：Thiel 談「科技」一詞被縮窄成 IT／AI，是集中化停滯的表現。與創業的關聯較間接。
- Tier 2（創業相關度低，宜放注腳）。

**2-3. Hoover Institution《Uncommon Knowledge》Thiel 談 Zero to One（2014）**
- 講者：Peter Thiel × Peter Robinson｜日期：2014-10-24，約 46 分鐘（搜尋摘要）｜類型：video／interview
- URL：https://hoover.org/research/peter-thiel-markets-technology-and-education （標題 "Peter Thiel on markets, technology, and education"）
- 驗證：B。**注意：** 摘要把「Zero to One 新書、2014-10-24」描述對應到這一組結果，但這個 URL 的標題與摘要並非逐字對得上，我認為相符但沒有完全確認。
- 重點：Thiel 談市場、獨占與科技進展不足。
- Tier 2｜授權：Hoover 影片與逐字稿可免費讀。

**2-4. Thiel Fellowship 官網與 FAQ**
- 作者：Thiel Foundation／Thiel Fellowship｜日期：持續更新，創立於 2011｜類型：article（機構頁）
- URL：https://thielfellowship.org/ 與 https://thielfellowship.org/faq ｜驗證：B
- 重點（搜尋摘要）：兩年期、補助 25 萬美元、不取股權、申請者 22 歲以下且不具大學學位。舊子網域 summit.thielfellowship.org 寫 10 萬美元，與主站衝突，主站較新但未見日期。
- 核心概念：「大學不必要」與年輕創辦人的押注
- Tier 2｜授權：公開。

**2-5. 〈The End of the Future〉（National Review，2011-10-03）**
- 作者：Peter Thiel｜日期：2011-10-03（封面故事，多來源一致）｜類型：essay
- 原文 URL：https://www.nationalreview.com/2011/10/end-future-peter-thiel/ （**C**：只在搜尋摘要中被轉述為引用）
- 可驗證的替代頁（B）：https://reason.com/2011/10/03/the-future-has-been-called-off/ （Reason 的評論，標題 "The Future Has Been Called Off, Says Venture Capitalist Peter Thiel"）；https://www.historynewsnetwork.org/article/peter-thiel-the-end-of-the-future （轉載）
- 重點：Thiel 的停滯論主文，Zero to One 的 definite／indefinite optimism 是它的延伸（Free Beacon 評論稱書擴充了這篇）。
- Tier 2｜授權：雜誌文章；轉載頁性質不明，引用以原站為準。

**2-6. 《The Contrarian》與 Thiel 傳記**
- 本次只在 PRH 搜尋結果看到 Max Chafkin《The Contrarian》（ISBN 9781984878557）。它是第三方傳記，不是 Thiel 本人的論述。
- URL：https://www.penguinrandomhouse.com/books/609711/the-contrarian-by-max-chafkin/ ｜驗證：B｜Tier 3（背景）。

**2-7. 近期：Walter Isaacson《The Builders》Thiel 集「We Need to Hit the Accelerator as Hard as Possible」on AI**
- 講者：Thiel × Walter Isaacson｜日期：搜尋摘要稱 2026-10-22 釋出；另一則稱錄於 2026-09-16。**單一來源，需複核**｜類型：interview（podcast）
- URL：https://omny.fm/shows/the-builders/peter-thiel?in_playlist=podcast ｜驗證：B
- 逐字稿：https://podcasts.happyscribe.com/the-builders/peter-thiel-we-need-to-hit-the-accelerator-as-hard-as-possible-on-ai ｜B（第三方轉錄，非官方）
- 重點：談 AI 風險反彈、反對暫停 AI 發展，並替魅力型創辦人辯護（摘要）。
- 核心概念：founder／definite optimism（偏 AI 與政治）
- Tier 2｜授權：podcast 免費；逐字稿為第三方。

**2-8. 近期：MD MEETS（Mathias Döpfner，Axel Springer Award 場合）**
- 日期：約 2026-09 下旬（搜尋摘要，**未驗證**）｜類型：interview
- URL：https://dealroom.co/news/talk-B7yl7fEHeKM-peter-thiel-ai-is-bigger-than-the-internet-but-europe-is-falling-behind/ ｜驗證：B（Dealroom 的頁面）
- 另有文字稿頁：https://aletteraday.substack.com/p/letter-345-peter-thiel-and-mathias ｜B（"Letter #345: Peter Thiel and Mathias Döpfner (2026)"）
- 重點：Thiel 說 AI 至少與網際網路一樣大，並認為歐洲缺乏迫切感。
- Tier 2｜授權：第三方轉述，引用前聽原片。

**2-9. 近期：Aspen（主持 Andrew Ross Sorkin）談停滯、創辦人與機器智慧**
- 日期：貼文 2026-01-13；現場日期未查｜類型：talk 摘要（第三方部落格）
- URL：https://simongros.org/2026/01/13/stagnation-founders-and-the-new-machine-intelligence-peter-thiel-at-aspen-on-risk-power-and-the-american-system/ ｜驗證：B（頁面標題）｜Tier 3（二手整理，不是原始影片）。

**2-10. NYT《Interesting Times》：Ross Douthat × Peter Thiel（2025-06-26；2025-07-11 於 Hard Fork 轉播）**
- 日期：podwise 列表標 2025-06-26；global player 列出 Hard Fork 轉播標題 "Interesting Times: A Mind-Bending Conversation with Peter Thiel"（2025-07-11）｜類型：interview（podcast）
- URL（B）：https://www.globalplayer.com/podcasts/episodes/7DrsXcD ；非官方逐字稿 https://singjupost.com/a-i-mars-and-immortality-are-we-dreaming-big-enough-peter-thiel-transcript
- **NYT 原頁 URL 沒找到。** 注意：搜尋摘要中另有一處把此訪談寫成「2024」，與 2025 列表衝突，我採 2025。
- 重點：重申停滯論，談 AI、火星與長生。
- Tier 2｜授權：NYT 的文字版可能有付費牆；podcast 免費。

---

## 3. Tier 3：窄用途或二手來源

**3-1. Dan Wang「Lecture notes by Peter Thiel」** — https://danwang.co/lecture-notes-by-peter-thiel/ ｜B｜Tier 3（個人評論，用途是另一個讀者的整理視角）。

**3-2. Medium「32 Quotes from Peter Thiel on Business Strategy and Monopoly Theory」（How to Start a Startup 出版物）** — https://medium.com/how-to-start-a-startup/32-quotes-from-peter-thiel-on-business-strategy-and-monopoly-theory-6025a479f1a7 ｜B｜Tier 3（講座引句彙整，非官方；引用前核對原片）。

**3-3. Knowledge at Wharton「Peter Thiel's Notes on Startups」** — https://knowledge.wharton.upenn.edu/article/peter-thiels-notes-on-startups/ ｜B（只見標題與網址同現）｜Tier 3（書出版時期的報導；日期未確認；最後補查因額度用盡未完成）。

**3-4. Hoover《The World According to Thiel》（2020-01 在 Mont Pelerin Society 錄製）** — https://www.hoover.org/research/peter-thiel-transcript ｜B｜Tier 3（偏政治思想，創業相關度低）。

**3-5. Hoover《Peter Thiel, Leader Of The Rebel Alliance》（約 2022-11）與《Apocalypse Now?》（2024）** — https://www.hoover.org/plus/research/peter-thiel-leader-rebel-alliance ｜https://www.hoover.org/plus/research/apocalypse-now-peter-thiel-ancient-prophecies-and-modern-tech ｜B｜Tier 3（日期為搜尋摘要所述；Hoover Plus 內容可能需註冊）。

**3-6. Antichrist 講座（2025-09 至 10，舊金山 Commonwealth Club，ACTS 17 Collective 主辦）** — https://fortune.com/2025/09/02/peter-thiel-is-delivering-4-private-sold-out-lectures-at-a-club-in-san-francisco-about-the-antichrist/ ｜B（Fortune 報導，標題吻合）｜Tier 3。**講座本身不錄影、不公開**（多來源一致），且與創業主題只有間接關聯（科技與管制、Girard 的神學化），除非專欄要談 Thiel 思想轉向，否則不建議納入。

**3-7. Founders 播客 #278「Peter Thiel」（David Senra 重讀 Zero to One）** — https://www.founderspodcast.com/episodes/278-peter-thiel ｜B｜Tier 3（二手讀書筆記，非 Thiel 本人）。

**3-8. eCorner（Stanford）— PayPal 創辦人場次（2004-01-21，Max Levchin 與 Thiel）** — 搜尋摘要有此場次，但頁面 URL 未見；候選 PDF `https://ecorner.stanford.edu/wp-content/uploads/sites/2/2004/01/1022.pdf`（標題只顯示 "Stanford"）｜**C**｜Tier 3。**我沒找到 Thiel 單獨在 eCorner 的創業講座。**

---

## 4. Zero to One 的批評與分析（供專欄呈現正反兩面；皆為 B）

| # | 來源 | URL | 立場與重點（一句話） |
|---|---|---|---|
| 4-1 | Law & Liberty，〈The Insights and Fancies of a Billionaire Entrepreneur〉 | https://lawliberty.org/?p=4330 | 認為書比多數商管書原創，但批評「經濟學家眼中所有獨占都一樣」說得太滿，事前創新誘因與事後濫用成本的區分正是反壟斷法的基礎。 |
| 4-2 | Cato Regulation，〈More Zero, Less One〉（2015 春） | https://www.cato.org/regulation/spring-2015/more-zero-less-one | 稱 Thiel 的見解常有原創性，但指出是否「獨占」取決於如何界定相關市場。 |
| 4-3 | Prospect，〈Review: Zero to One by Peter Thiel〉 | https://prospectmagazine.co.uk/culture/46931/review-zero-to-one-by-peter-thiel | 認為創新在現代經濟中的份量比 Thiel 的版本小得多。 |
| 4-4 | Mises Wire，〈Peter Thiel: Monopoly and Competition〉 | https://mises.org/wire/peter-thiel-monopoly-and-competition | **支持方**：認為 Thiel 對主流獨占理論的批評紮實；同時指出標題誤導，較準確是「完全競爭理論是給輸家的」。 |
| 4-5 | The New Republic，〈Peter Thiel's Zero to One Review〉 | https://newrepublic.com/article/119532/peter-thiels-zero-one-review | 一般書評；本次未讀全文，立場請自行確認。 |
| 4-6 | LA Review of Books，〈Zero to One by Blake Masters and Peter Thiel〉（"Citizen Thiel"） | https://lareviewofbooks.org/review/citizen-thiel | 把書讀成一套相當連貫的政治與社會意識形態。 |
| 4-7 | Slate Star Codex，〈Book Review: Zero To One〉（2019-01-31） | https://slatestarcodex.com/2019/01/31/book-review-zero-to-one/ | 長篇個人書評；本次僅見標題，立場請讀後確認。 |
| 4-8 | The Cornell Review（學生書評） | https://www.thecornellreview.org/segrest-book-review-zero-to-one-notes-on-startups-or-how-to-build-the-future/ | 提出 Thiel 把 definite optimism 歸於 1600s–1960s 西方，卻沒解釋轉向 indefinite 的原因。 |
| 4-9 | UnHerd，〈Tech bros don't get René Girard〉（2025-06） | https://unherd.com/2025/06/tech-bros-dont-get-rene-girard | 認為 Thiel 版本的 mimetic 解法（創新者超越模仿競爭）更接近 Sartre 而非 Girard。 |
| 4-10 | HN 討論串（Lecture 5） | https://news.ycombinator.com/item?id=13948780 | 有留言指出 Thiel 說創造價值與捕捉價值互相獨立，卻在整場講座把它們當強負相關；留言性質，僅供參考。 |
| 4-11 | Brett J. Fox，〈Is Peter Thiel Right That Competition Is For Losers?〉 | https://www.brettjfox.com/is-peter-thiel-right-that-competition-is-for-losers/ | 個人部落格式論辯；未讀內文。 |

**找不到的東西：** 沒有找到對 Zero to One 的同儕審查期刊論文。一個 DOI（https://doi.org/10.59350/vk7v8-v3b27，標題 "Book Review: Zero to One"）解析的很可能是部落格存檔，不是學術期刊，勿當學術引用。專欄若要用「學術」立場，要另查 SSRN／Google Scholar／反壟斷文獻（contestable markets、natural monopoly、Schumpeterian competition）。

---

## 5. Thiel 論證地圖

說明：「最佳一手來源」欄只填我能對應到的來源；**章節編號中標 (C) 的是憑記憶，未經搜尋證實**，專欄寫作者引用前需對照書的目錄。已由搜尋摘要支持的章名：第 2 章 Party Like It's 1999、第 3 章 All Happy Companies Are Different、第 4 章 The Ideology of Competition、第 5 章 Last Mover Advantage、第 8 章 Secrets（出自一個目錄轉述，未見完整 TOC）。

| 概念 | 最佳一手來源（URL） | 懷疑者會怎麼說（來源） |
|---|---|---|
| 獨占 vs 競爭（創業應追求獨占，競爭抹平利潤） | WSJ 摘錄（URL 為 C，見 1-2）；書第 3、4 章；CS183B Lecture 5（YC，見 1-4）；CS183 Class 3（見 1-5 的鏡像） | 「獨占」依市場界定而變，且事前誘因與事後濫用要分開（[Cato 4-2](https://www.cato.org/regulation/spring-2015/more-zero-less-one)、[Law & Liberty 4-1](https://lawliberty.org/?p=4330)）；Thiel 的獨占定義非經濟學慣用定義（搜尋摘要轉述，來源為一篇政策部落格，未取得原頁，不列 URL）；創新在經濟中份量沒這麼大（[Prospect 4-3](https://prospectmagazine.co.uk/culture/46931/review-zero-to-one-by-peter-thiel)） |
| 完全競爭 vs 創造／捕捉價值 | CS183B Lecture 5 | 價值創造與捕捉被講成獨立，卻實際上當作負相關（[HN 留言 4-10](https://news.ycombinator.com/item?id=13948780)，留言性質） |
| 明確樂觀 vs 不明確樂觀（definite／indefinite optimism） | 書的第 1 章「The Challenge of the Future」（章名已證實，與 CS183 Class 1 同名）；較完整的定義在書另一章（編號 C）；〈The End of the Future〉（2-5） | 把美國由 definite 轉 indefinite 當成停滯的原因，並未解釋成因（[Cornell Review 4-8](https://www.thecornellreview.org/segrest-book-review-zero-to-one-notes-on-startups-or-how-to-build-the-future/)）；也低估 IT 革命（來自 wayne-blog.pages.dev 的閱讀筆記，個人部落格，證據弱）；Cowen 在 2024 年回顧中說停滯已因 AI 與生醫而結束（[CWT 2024 Retrospective](https://conversationswithtyler.com/episodes/conversations-with-tyler-2024-retrospective/)，B，摘要轉述）；對照 Thiel 自己的停滯論（[CWT Ep.1](https://conversationswithtyler.com/episodes/peter-thiel/)） |
| 祕密（secrets：重要但少人相信的真理） | 書第 8 章 Secrets（章名已證實於目錄轉述）；CS183 對應堂次未能驗證 | 本次未找到針對「祕密」概念的專門批評，標為缺口 |
| 冪次法則（power law：少數公司／決策主導報酬） | 書第 7 章「Follow the Money」（C）；CS183 Class 7（見 1-5，HN 3896304，但該堂主題未證實） | 本次沒有找到專門評論；Cornell／Wayne 等泛評僅提到書「論證缺乏證據支撐」（[Jason Collins](https://www.jasoncollins.blog/posts/thiels-zero-to-one)，B，書評稱論點未配上充分證據） |
| 最後一個進場者優勢（last-mover advantage） | 書第 5 章「Last Mover Advantage」（已證實）；CS183 Class 4（單一來源） | 同 4-1／4-2 的「市場界定」與「獨占持久」問題；Thiel 要的「持久」本身難以事前驗證（HN 留言層級，無獨立專文） |
| 通路與銷售（distribution：沒有銷售就沒有生意） | CS183 Class 9「If You Build It, Will They Come?」（B，見 1-5）；書同名章（章名已證實為此名，編號為 C） | 本次沒找到專門批評，標為缺口 |
| 創辦人、繼任與創辦人悖論（founder／succession） | 書的「The Founder's Paradox」章（C，編號未證）；Founders Fund 宣言（1-6）；Founders Fund「不把創辦人趕出公司」的承諾（來自 allthingsvc.substack.com/p/founders-fund，二手，B） | 本次沒有找到針對 Thiel 創辦人觀的批評。注意：Thiel 在 2026 Builders 訪談為魅力型創辦人辯護（2-7，二手摘要），可與公司治理批評對照；治理面的反方來源需另查 |
| 停滯論（stagnation）與創投方向 | 〈The End of the Future〉（2-5）；Founders Fund 宣言（1-6）；CWT Ep.1（2-1） | Cowen 的轉向（見上）；Free Beacon 評論提到西方中心偏見（搜尋摘要轉述，URL https://freebeacon.com/culture/the-future-and-its-enemies/ 為 B，未讀全文） |
| 模仿欲望與競爭（Girard） | 沒有找到 Thiel 本人寫的「Mimetic Desire」專文；最接近的是書與 WSJ 文中的競爭論 | UnHerd 認為 Thiel 版本偏離 Girard（[UnHerd 4-9](https://unherd.com/2025/06/tech-bros-dont-get-rene-girard)） |

---

## 6. 未驗證項目（C 級，不可當作已驗證）

1. WSJ 全文 URL `https://www.wsj.com/articles/peter-thiel-competition-is-for-losers-1410535536`：ID 吻合、slug 為推測；文章存在與日期（2014-09-12）有二手佐證。
2. 筆記索引頁 `http://blakemasters.com/peter-thiels-cs183-startup`：只在搜尋摘要中被引述。
3. CS183B Lecture 5 YouTube `https://www.youtube.com/watch?v=3Fx5Q8xGU8k`（ID 由第三方網址推得）；YC Root Access 版本 ID `5_0dVHMpJlo` 同理。
4. National Review 原文 `https://www.nationalreview.com/2011/10/end-future-peter-thiel/`：搜尋摘要提及，未列為結果。
5. eCorner 2004 PayPal 場次的具體 URL。
6. Zero to One 章號：第 6、7、9、12–14 章的章名與編號（我記憶中分別是 You Are Not a Lottery Ticket、Follow the Money、Foundations、Man and Machine、Seeing Green、The Founder's Paradox），**搜尋沒證實**。
7. CS183 其餘堂次標題（Class 2、3、6、7、8、10 以後），只有 Class 1、4、5、9 有搜尋摘要支持，Class 8 為單一評論者所稱。
8. Thiel × Cowen（CWT Ep.1、Ep.210）與 Hoover 2014 訪談的確切日期（Hoover 的 2014-10-24 為摘要所述）。
9. Builders 集與 MD MEETS 的日期（2026-09／10）為搜尋摘要所述，來自第三方列表。
10. Founders Fund 宣言的作者與首發日期（Gibney？2011 或 2017？）。
11. Crown 的 imprint 名稱（Crown Currency 或 Crown Business）。
12. Thiel Fellowship 的補助額（主站 25 萬美元兩年，與舊子網域 10 萬美元衝突，未見日期）。

---

## 7. 完整度的誠實評估

- **條目數：** 約 27 個來源（含 11 個批評），涵蓋書、WSJ、CS183 筆記、CS183B、Founders Fund 宣言、Thiel Fellowship、CWT、Hoover、近期訪談。但**沒有一個是我親自抓取確認的（零個 A）**，因為抓取工具在本 session 受網路限制。這份清單應視為「高機率存在、需最後人工點開」的清單，尤其是標 C 的項目。
- **最弱的環節：**
  - CS183 的逐堂標題只確認 4 堂，專欄若要「逐堂對應」，必須先到 blakemasters.com 或 gwern.net 存檔核對完整目錄。
  - WSJ 原文網址與 YouTube 網址都是 C，這兩個是專欄最可能直接連結的，優先人工驗證。
  - 「祕密」、「冪次法則」、「通路」、「創辦人繼任」四項在批評側幾乎沒找到專門反方來源，不應在專欄裡寫成「業界普遍批評」。
  - **沒有同儕審查的學術回應**。
- **近期（2024–2026）：** 找到的多是 AI 與政治神學主題，真正講「如何創業」的新一手材料很少。最貼近創業的是 2026 的 Builders 訪談與 MD MEETS，但兩者的日期與內容都靠第三方摘要。我沒有找到 2026 年 Thiel 本人新的創業方法論專文或新書。
- **漏掉但可能存在的來源：** Thiel 在 Stanford 以外的創業講座（例如他在多場 Y Combinator 或 Startup School 的活動）、Thiel 與 Reid Hoffman／Marc Andreessen 的對談、Founders Fund 的其他文章（如合夥人撰寫的 Founders Fund 部落格）、Thiel 的 Cato Unbound 與 Policy Review 文章（偏政治或總體，已刻意排除〈The Education of a Libertarian〉）。這些我沒查到證據，不放入。
- **需要人幫忙的事：** 把 penguinrandomhouse.com、blakemasters.com、foundersfund.com、conversationswithtyler.com、youtube.com 加進 session 網路允許清單後重跑抓取，就能把大部分 B 升級為 A，並解決 C 項目。
