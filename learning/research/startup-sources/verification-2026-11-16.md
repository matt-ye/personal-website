# 連結與 DOI 驗證紀錄（2026-11-16）

> 對 `source-report.md` 的所有 URL 與 DOI 做的實際連線核對。**這是研究當日的快照**：網頁會改版、轉址、下架，
> 引用前仍應再開一次。驗證方法：HTTP GET 取得狀態碼與 `<title>`；DOI 對 Crossref API（`api.crossref.org`）比對標題、期刊、卷期頁、年份。
> 「開啟成功」只代表**頁面存在且標題相符**，不代表內文已逐字讀過；授權句另列於第 3 節（讀原頁取得）。

## 1. 結論

| 項目 | 結果 |
|---|---|
| DOI（14 筆） | **全部 Crossref 比對成功**，含原列 B- 的 3 筆；原報告 2.3 的年份更正（Kaplan & Strömberg 2004／2003、Hellmann & Puri 2002）全數屬實 |
| URL（120 條） | 開啟成功 90；失敗 30（見第 4 節，多數是站方或代理擋機器人，不等於連結壞掉） |
| 可升為 A 級（親自開啟、標題相符） | 90 條 URL ＋ 14 筆 DOI |
| 仍須人工處理 | 第 4 節清單；其中 WSJ、YouTube 兩類本環境完全無法連線 |

## 2. DOI 核對（Crossref）

| DOI | Crossref 標題 | 期刊 卷(期) 頁 | 年 | 與原報告 |
|---|---|---|---|---|
| 10.5465/amr.2000.2791611 | The Promise of Entrepreneurship as a Field of Research | AMR 25(1) 217–226 | 2000 | 相符 |
| 10.2307/259121 | Causation and Effectuation… | AMR 26(2) 243（Crossref 僅列起始頁） | 2001 | 相符 |
| 10.1257/jep.28.3.25 | Entrepreneurship as Experimentation | JEP 28(3) 25–48 | 2014 | 相符 |
| 10.1111/j.1540-6261.2008.01429.x | Should Investors Bet on the Jockey or the Horse?… | JF 64(1) 75–115 | 2009 | 相符 |
| 10.1257/aer.100.3.1163 | The Burden of the Nondiversifiable Risk of Entrepreneurship | AER 100(3) 1163–1194 | 2010 | 相符 |
| 10.1111/1540-6261.00419 | Venture Capital and the Professionalization of Start-Up Firms | JF 57(1) 169–197 | 2002 | 相符 |
| 10.1016/j.jfineco.2019.06.011 | How do venture capitalists make decisions? | JFE 135(1) 169–190 | 2020 | 相符 |
| 10.1257/jep.34.3.237 | Venture Capital's Role in Financing Innovation… | JEP 34(3) 237–261 | 2020 | 相符 |
| 10.1287/orsc.2019.1304 | Do Accelerators Work? If So, How? | Org. Science 31(2) 378–414 | 2020 | 相符 |
| 10.1093/rfs/hhx103 | The Effects of Business Accelerators on Venture Performance: Evidence from Start-Up Chile | RFS 31(4) 1566–1603 | Crossref 記 2017（線上首發），期刊年 2018 | 相符；引用以 2018 卷期為準 |
| **10.1287/mnsc.2018.3249** | A Scientific Approach to Entrepreneurial Decision Making: Evidence from a Randomized Control Trial | **Management Science 66(2) 564–586** | 2020 | **B- → 已驗證；補上卷期頁** |
| 10.1287/mnsc.2021.4209 | Experimentation and Start-up Performance: Evidence from A/B Testing | Mgmt Sci 68(9) 6434–6453 | 2022 | 相符 |
| **10.1111/j.1540-6261.2004.00696.x** | Characteristics, Contracts, and Actions: Evidence from Venture Capitalist Analyses | JF 59(5) 2177–2210 | 2004 | **B- → 已驗證** |
| **10.1111/1467-937X.00245** | Financial Contracting Theory Meets the Real World… | Review of Economic Studies 70(2) 281–315 | 2003 | **B- → 已驗證** |

## 3. 原頁實讀所得（取代原報告「搜尋摘要轉述」的事項）

| 項目 | 原頁內容 | 影響 |
|---|---|---|
| MIT OCW 授權 | 條款頁寫明 **Creative Commons Attribution-NonCommercial-ShareAlike 4.0**；並要求除標示來源外不得使用 MIT 名稱或標誌 | 原報告「摘要轉述」升為已核；翻譯／改作限非商業且相同方式分享 |
| YC SAFE primer PDF | 內文：「expressly copyrighted and made available under the Creative Commons Attribution-No Derivatives…」（PDF 文字層，版本號未在擷取片段內） | 確認為 **CC BY-ND**；不得改作（含翻譯成衍生版）。版本（4.0）請開 PDF 確認 |
| Steve Blank 講義 | 頁面寫「Creative Commons license applies」，**未寫變體** | 仍未知變體；翻譯前須自行向作者確認 |
| PG 轉載條款（gfaq.html） | 鏡像：「I'd rather you linked to it instead」；校刊：可，附原文網址；翻譯：可，附原文網址並寄翻譯網址給他 | 與原報告轉述一致；無開放授權，維持「連結＋自寫註解」 |
| 《Zero to One》imprint | PRH 頁面資料：product_imprint = **Crown Currency**；ISBN 9780804139298（精裝）、9780804139304（電子書） | 解決原報告 2.4 的 imprint 衝突，以 PRH 為準 |
| PG 各文日期（頁面實測） | start 2005-03；ds 2013-07；growth 2012-09；startupideas 2012-11；aord 2015-10；fundraising 2008-08；foundermode 2024-09；makersschedule 2009-07；relres 2009-03；mean 2014-11；powerful **2026-09**；startuphubs 2007-10 | 原報告「記憶」的日期全數成立；補上 growth、startupideas、mean、startuphubs 的確切月份 |
| PG 索引最新文章（articles.html 頂部） | Making Startups Powerful → How Universities Should Prepare Founders（prepare.html）→ How to Earn a Billion Dollars（earn.html）→ How to Convert Between Wealth and Income Tax → The Brand Age … | 後兩篇之前的清單沒收；與創業直接相關者可列為下一批候補（未讀全文） |
| blakemasters CS183 筆記索引 | 原列 `blakemasters.com/peter-thiels-cs183-startup` → **404**；首頁實際連到 **`https://blakemasters.tumblr.com/peter-thiels-cs183-startup`** | 原 C 級索引頁網址作廢，改用 tumblr 網址（該主機本環境未放行，未開啟） |
| Altman 部落格 | 首頁 `posts.atom` 可讀；最新一則 2026-04-10。`/startup-advice` 可開 | atom 可作為 slug／日期的機器驗證來源 |
| 〈The End of the Future〉 | National Review 實際網址已轉址為 `https://www.nationalreview.com/articles/end-future-peter-thiel` | 原 C 級 → 以新網址記錄 |
| Hacker News 兩串 | #13948780 標題「Competition Is for Losers with Peter Thiel (How to Start a Startup 2014: 5)」；#8424165「Lecture 5, How to Start a Startup: Peter Thiel」 | 僅確認討論串存在，非原片 |

## 4. 未能驗證、須人工處理

| 項目 | 狀況 | 建議 |
|---|---|---|
| `startupclass.samaltman.com`（含 lec05、lec09） | 代理回 502，三次重試皆同 | 本環境連不上；以瀏覽器確認 20 講清單 |
| WSJ〈Competition Is for Losers〉 | 本環境禁止連線 | 人工搜尋 WSJ 確認網址與日期（付費牆） |
| 所有 YouTube（CS183B Lec5、Startup School 播放清單、Chesky、0lJKucu6HJc、PG shorts） | 本環境禁止連線 | 影片 ID 全部仍為 C；以瀏覽器逐一確認 |
| SSRN（2719810、2801385）、INFORMS references、core.ac.uk、dash.harvard.edu（429）、business.columbia.edu、news.stanford.edu、medium.com | 403／429（擋機器人） | 開放版連結請人工開；DOI 已另驗，不依賴這些副本 |
| econpapers aecrev（連線被重設）、rfinst（404，URL 組法有誤） | — | 以 DOI 為準（兩篇 DOI 均已驗證），這兩條 RePEc 網址可刪 |
| `hhs.se` Kaplan–Strömberg PDF | 404 | 改連 NBER w8764（已開啟成功） |
| `ecorner.stanford.edu/podcasts/etl` | 404 | 改用已開啟的 `https://stvp.stanford.edu/ecorner` |
| eprints.lse.ac.uk／reason.com／gwern.net／subtraction.com | 本環境無法連線 | 非核心來源，人工決定是否保留 |
| blogs.lse.ac.uk 書評、pubmed | 202／203 空回應 | 人工開啟 |
| econbiz | 回傳機器人檢查頁 | 人工開啟或刪除 |

## 5. 全部 URL 結果

| 結果 | URL | 頁面標題（抓取所得） |
|---|---|---|
| 開啟成功 | https://a16z.com/all-things-sales-16-mini-lessons-for-startup-founders/ | All Things Sales! 16 Mini-Lessons for Startup Founders |
| 開啟成功 | https://a16z.com/peacetime-ceo-wartime-ceo/ | Peacetime CEO/Wartime CEO |
| 開啟成功 | https://a16z.com/the-struggle/ | The Struggle |
| 開啟成功 | https://a16z.com/why-software-is-eating-the-world/ | Why Software Is Eating the World |
| 開啟成功 | https://abovethecrowd.com/2011/05/24/all-revenue-is-not-created-equal-the-keys-to-the-10x-revenue-club/ | All Revenue is Not Created Equal: The Keys to the 10X Revenue Club - A |
| 開啟成功 | https://arxiv.org/abs/2512.13755 | [2512.13755] Founder Backgrounds and Startup Funding: Evidence from Y  |
| 開啟成功 | https://avc.com/2017/08/mba-mondays/ | MBA Mondays - AVC |
| 開啟成功 | https://blakemasters.com/ | Blake Masters |
| 開啟成功 | https://blog.eladgil.com/p/ai-startup-vs-incumbent-value | AI: Startup Vs Incumbent Value - by Elad Gil - Elad Blog |
| 開啟成功 | https://blog.samaltman.com/posts.atom | Sam Altman |
| 開啟成功 | https://blog.samaltman.com/startup-advice | Startup Advice - Sam Altman |
| 開啟成功 | https://cdixon.org/2013/08/04/the-idea-maze/ | The idea maze — cdixon |
| 開啟成功 | https://cdixon.org/2015/01/31/come-for-the-tool-stay-for-the-network/ | Come for the tool, stay for the network — cdixon |
| 開啟成功 | https://conversationswithtyler.com/episodes/peter-thiel/ | Peter Thiel on Stagnation, Innovation, and What Not To Name Your Compa |
| 開啟成功 | https://econbiz.de/Record/characteristics-contracts-and-actions-evidence-from-venture-capitalist-analyses-kaplan-steven/10005302381 | Making sure you're not a bot! |
| 開啟成功 | https://econpapers.repec.org/RePEc:aea:jecper:v:28:y:2014:i:3:p:25-48 | EconPapers: Entrepreneurship as Experimentation |
| 開啟成功 | https://econpapers.repec.org/RePEc:bla:jfinan:v:57:y:2002:i:1:p:169-197 | EconPapers: Venture Capital and the Professionalization of Start‐Up Fi |
| 開啟成功 | https://econpapers.repec.org/RePEc:cpr:ceprdp:14909 | EconPapers: Small Changes with Big Impact: Experimental Evidence of a  |
| 開啟成功 | https://econpapers.repec.org/RePEc:eee:jfinec:v:135:y:2020:i:1:p:169-190 | EconPapers: How do venture capitalists make decisions? |
| 開啟成功 | https://econpapers.repec.org/RePEc:inm:ormnsc:v:68:y:2022:i:9:p:6434-6453 | EconPapers: Experimentation and Start-up Performance: Evidence from A/ |
| 開啟成功 | https://foundersfund.com/the-future/?stream=top | What happened to the future? - Founders Fund |
| 開啟成功 | https://growth.eladgil.com/ | High Growth Handbook – By Elad Gil |
| 開啟成功 | https://hbr.org/2013/05/why-the-lean-start-up-changes-everything | Why the Lean Start-Up Changes Everything |
| 開啟成功 | https://hbr.org/2016/04/blitzscaling | Blitzscaling |
| 開啟成功 | https://ideas.repec.org/a/bla/jfinan/v64y2009i1p75-115.html | Should Investors Bet on the Jockey or the Horse? Evidence from the Evo |
| 開啟成功 | https://indicators.kauffman.org/report/early-stage-entrepreneurship-national-2025 | National Report on Early-Stage Entrepreneurship in the United States ( |
| 開啟成功 | https://iris.unibocconi.it/handle/11565/4013977 | A scientific approach to entrepreneurial decision making: evidence fro |
| 開啟成功 | https://jobs.netflix.com/culture | Netflix Culture Memo - Careers at Netflix |
| 開啟成功 | https://news.ycombinator.com/item?id=13948780 | Competition Is for Losers with Peter Thiel (How to Start a Startup 201 |
| 開啟成功 | https://news.ycombinator.com/item?id=8424165 | Lecture 5, How to Start a Startup: Peter Thiel |
| 開啟成功 | https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/ | New Enterprises |
| 開啟成功 | https://ocw.mit.edu/courses/15-391-early-stage-capital-fall-2010/ | Early Stage Capital |
| 開啟成功 | https://ocw.mit.edu/courses/15-392-scaling-entrepreneurial-ventures-spring-2026/ | Scaling Entrepreneurial Ventures |
| 開啟成功 | https://ocw.mit.edu/courses/15-393-nuts-and-bolts-of-new-ventures-january-iap-2025/ | Nuts and Bolts of New Ventures |
| 開啟成功 | https://ocw.mit.edu/pages/privacy-and-terms-of-use/ | Privacy and Terms of Use |
| 開啟成功 | https://ocw.mit.edu/terms/ | Privacy and Terms of Use |
| 開啟成功 | https://paulgraham.com/articles.html | Essays |
| 開啟成功 | https://paulgraham.com/ds.html | Do Things that Don't Scale |
| 開啟成功 | https://paulgraham.com/foundermode.html | Founder Mode |
| 開啟成功 | https://paulgraham.com/fundraising.html | A Fundraising Survival Guide |
| 開啟成功 | https://paulgraham.com/powerful.html | Making Startups Powerful |
| 開啟成功 | https://paulgraham.com/start.html | How to Start a Startup |
| 開啟成功 | https://paulgraham.com/startuphubs.html | Why to Move to a Startup Hub |
| 開啟成功 | https://pmarchive.com/guide_to_startups_part4.html | Pmarchive · The only thing that matters |
| 開啟成功 | https://pmarchive.com/guide_to_startups_part8.html | Pmarchive · Hiring, managing, promoting, and firing executives |
| 開啟成功 | https://sequoiacap.com/article/pmf-framework | The Arc Product-Market Fit Framework |
| 開啟成功 | https://startupgenome.com/report/the-global-startup-ecosystem-report-2025/introduction | The Global Startup Ecosystem Report 2025 |
| 開啟成功 | https://steveblank.com/2013/05/06/free-reprints-of-why-the-lean-startup-changes-everything/ | Steve Blank Free Reprints of “Why the Lean Startup Changes Everything” |
| 開啟成功 | https://steveblank.com/slides/ | Steve Blank Slides/Videos |
| 開啟成功 | https://store.hbr.org/product/strategy-for-start-ups/S18031 | Strategy for Start-ups |
| 開啟成功 | https://stripe.com/annual-updates/2025 | Stripe’s 2025 annual letter |
| 開啟成功 | https://stvp.stanford.edu/ecorner | eCorner |
| 開啟成功 | https://theleanstartup.com/principles | The Lean Startup |
| 開啟成功 | https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders | Jeff Bezos' 2016 Letter to Amazon Shareholders |
| 開啟成功 | https://www.aboutamazon.com/news/company-news/amazons-original-1997-letter-to-shareholders | Jeff Bezos' Original 1997 Letter to Amazon Shareholders |
| 開啟成功 | https://www.aeaweb.org/doi/10.1257/jep.34.3.237 | Venture Capital's Role in Financing Innovation: What We Know and How M |
| 開啟成功 | https://www.cato.org/regulation/spring-2015/more-zero-less-one |  |
| 開啟成功 | https://www.gsb.stanford.edu/insights/entrepreneurship | Entrepreneurship Insights by Stanford Business |
| 開啟成功 | https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/ | Strategy Letter V – Joel on Software |
| 開啟成功 | https://www.nationalreview.com/2011/10/end-future-peter-thiel/ | The End of the Future |
| 開啟成功 | https://www.nber.org/papers/22587 | How Do Venture Capitalists Make Decisions? |
| 開啟成功 | https://www.nber.org/papers/w14219 | The Burden of the Nondiversifiable Risk of Entrepreneurship |
| 開啟成功 | https://www.nber.org/papers/w20358 | Entrepreneurship as Experimentation |
| 開啟成功 | https://www.nber.org/papers/w26278 | Experimentation and Startup Performance: Evidence from A/B testing |
| 開啟成功 | https://www.nber.org/papers/w27492 | Venture Capital’s Role in Financing Innovation: What We Know and How M |
| 開啟成功 | https://www.nber.org/papers/w8764 | Characteristics, Contracts, and Actions: Evidence from Venture Capital |
| 開啟成功 | https://www.paulgraham.com/aord.html | Default Alive or Default Dead? |
| 開啟成功 | https://www.paulgraham.com/gfaq.html | General FAQ |
| 開啟成功 | https://www.paulgraham.com/growth.html | Startup = Growth |
| 開啟成功 | https://www.paulgraham.com/makersschedule.html | Maker's Schedule, Manager's Schedule |
| 開啟成功 | https://www.paulgraham.com/mean.html | Mean People Fail |
| 開啟成功 | https://www.paulgraham.com/relres.html | Relentlessly Resourceful |
| 開啟成功 | https://www.paulgraham.com/startupideas.html | How to Get Startup Ideas |
| 開啟成功 | https://www.penguinrandomhouse.com/books/234730/zero-to-one-by-peter-thiel-with-blake-masters/ | Zero to One by Peter Thiel, Blake Masters: 9780804139298 |
| 開啟成功 | https://www.penguinrandomhouse.com/books/623123/why-startups-fail-by-tom-eisenmann/9780593137024/ | Why Startups Fail by Tom Eisenmann: 9780593137024 |
| 開啟成功 | https://www.startuplessonslearned.com/2009/03/minimum-viable-product.html | Lessons Learned: Venture Hacks interview: "What is the minimum viable  |
| 開啟成功 | https://www.startupschool.org/ | Startup School - The Best Resource for Founders |
| 開啟成功 | https://www.strategyzer.com/library/the-business-model-canvas | Business Model Canvas – Download the Official Template |
| 開啟成功 | https://www.udacity.com/course/how-to-build-a-startup--ep245 | How to Build a Startup |
| 開啟成功 | https://www.ycombinator.com/assets/ycdc/Primer%20for%20post-money%20safe%20v1.1-2af8129e12effd9638eeab383b7309142c8f415e5cdb0bc210d573f779177a1c.pdf |  |
| 開啟成功 | https://www.ycombinator.com/library/6f-how-to-plan-an-mvp | How to plan an MVP  : YC Startup Library |
| 開啟成功 | https://www.ycombinator.com/library/6h-startup-pricing-101 | Startup pricing 101  : YC Startup Library |
| 開啟成功 | https://www.ycombinator.com/library/7R-startup-legal-mechanics | Startup legal mechanics   : YC Startup Library |
| 開啟成功 | https://www.ycombinator.com/library/8F-modern-startup-funding | Modern startup funding  : YC Startup Library |
| 開啟成功 | https://www.ycombinator.com/library/CP-one-order-of-operations-for-starting-a-startup | One order of operations for starting a startup  : YC Startup Library |
| 開啟成功 | https://www.ycombinator.com/library/DU-dalton-michael-where-do-great-startup-ideas-come-from | Dalton & Michael: Where do great startup ideas come from?  : YC Startu |
| 開啟成功 | https://www.ycombinator.com/library/Iq-how-to-talk-to-users | How to talk to users  : YC Startup Library |
| 開啟成功 | https://www.ycombinator.com/rfs | Requests for Startups |
| 開啟成功 | https://www.ycombinator.com/safe | The SAFE — the open standard for startup fundraising |
| 開啟成功 | https://ycombinator.com/library/4A-a-guide-to-seed-fundraising?amp=&amp= | A guide to seed fundraising  : YC Startup Library |
| 未連上 | http://blakemasters.com/peter-thiels-cs183-startup | <urlopen error [Errno -2] Name or service not known> |
| 回應 202（內容未取得） | https://blogs.lse.ac.uk/lsereviewofbooks/2012/08/09/book-review-the-founders-dilemmas |  |
| 403 拒絕（站方或代理） | https://business.columbia.edu/faculty/research/discovery-driven-planning |  |
| 403 拒絕（站方或代理） | https://core.ac.uk/download/96716822.pdf |  |
| 429 限流 | https://dash.harvard.edu/bitstream/handle/1/27336545/kerr,nanda,rhodes-kropf_entrepreneurship-as-experimentation.pdf |  |
| 未連上 | https://doi.org/10.2307/259121 | <urlopen error [Errno -2] Name or service not known> |
| 未連上 | https://doi.org/10.5465/amr.2000.2791611 | <urlopen error [Errno -2] Name or service not known> |
| 未連上 | https://econpapers.repec.org/RePEc:aea:aecrev:v:100:y:2010:i:3:p:1163-94 | <urlopen error [Errno 104] Connection reset by peer> |
| 404 不存在 | https://econpapers.repec.org/RePEc:oup:rfinst:v:31:y:2018:i:4:p:1566-1603 |  |
| 404 不存在 | https://ecorner.stanford.edu/podcasts/etl |  |
| 未連上 | https://eprints.lse.ac.uk/84553/ | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 403 拒絕（站方或代理） | https://medium.com/@stewart/we-dont-sell-saddles-here-4c59524d650d |  |
| 403 拒絕（站方或代理） | https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says |  |
| 403 拒絕（站方或代理） | https://papers.ssrn.com/abstract=2719810 |  |
| 403 拒絕（站方或代理） | https://papers.ssrn.com/abstract=2801385 |  |
| 回應 203（內容未取得） | https://pubmed.ncbi.nlm.nih.gov/18314638/ | pubmed.ncbi.nlm.nih.gov |
| 403 拒絕（站方或代理） | https://pubsonline.informs.org/doi/references/10.1287/orsc.2019.1304 |  |
| 未連上 | https://reason.com/2011/10/03/the-future-has-been-called-off/ | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 未連上 | https://startupclass.samaltman.com/ | <urlopen error Tunnel connection failed: 502 Bad Gateway> |
| 未連上 | https://startupclass.samaltman.com/courses/lec05/ | <urlopen error Tunnel connection failed: 502 Bad Gateway> |
| 未連上 | https://startupclass.samaltman.com/courses/lec09/ | <urlopen error Tunnel connection failed: 502 Bad Gateway> |
| 未連上 | https://subtraction.com/2014/02/18/we-dont-sell-saddles-here | <urlopen error [SSL: SSLV3_ALERT_HANDSHAKE_FAILURE] sslv3 al |
| 未連上 | https://www.gwern.net/docs/www/blakemasters.com/382477541aba0ef1f7431100c8ea5521686a657b.html | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 404 不存在 | https://www.hhs.se/contentassets/662e98040ed14d6c93b1119e5a9796a4/kaplanstrombergjf2004.pdf |  |
| 未連上 | https://www.wsj.com/articles/peter-thiel-competition-is-for-losers-1410535536 | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 未連上 | https://www.youtube.com/playlist?list=PLEb7ftOB0yf0 | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 未連上 | https://www.youtube.com/shorts/pdTa4LH4tjg | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 未連上 | https://www.youtube.com/watch?v=0lJKucu6HJc | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 未連上 | https://www.youtube.com/watch?v=3Fx5Q8xGU8k | <urlopen error Tunnel connection failed: 403 Forbidden> |
| 未連上 | https://www.youtube.com/watch?v=ViqxJY_AG_w | <urlopen error Tunnel connection failed: 403 Forbidden> |
