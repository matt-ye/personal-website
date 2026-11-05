/*
 * 26 個課程週次頁的 head metadata——單一事實來源。
 *
 * 由 scripts/extract-course-weeks.mjs 從原本 public/ 的手刻頁萃取。
 * title / description / ogTitle / ogDescription 是四個**刻意分開**的欄位：
 *   title       SERP 用，帶「｜給家人的投資課 · Matt Ye」後綴
 *   ogTitle     社群卡片用，不帶站名
 *   description SERP 用，開頭帶「52 週投資課第 N 週」的脈絡
 *   ogDescription 社群用，直接講重點
 * 互相推導會損失資訊，所以四個都存。
 */
export interface CourseWeekMeta {
  slug: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  /* 英文版 meta。有填才會產出 /en/ 網址——CourseWeekLayout 與 [...lang] 路由
     都讀這四個欄位判斷「這週準備好了沒」，不另外維護清單。
     判準與 staticPageMeta 一致。 */
  titleEn?: string;
  descriptionEn?: string;
  ogTitleEn?: string;
  ogDescriptionEn?: string;
  /** JSON-LD 與 og:* 不同時才填 */
  ldHeadline?: string;
  ldDescription?: string;
}

export const courseWeekMeta: CourseWeekMeta[] = [
  {
    "slug": "week-01-tvm",
    "title": "第 1 週：複利與貨幣時間價值｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 1 週：複利與折現的核心觀念、FV/PV/年金公式、72 法則，附互動複利計算機與費曼學習法分享腳本。",
    "ogTitle": "第 1 週：複利與貨幣時間價值 — 給家人的投資課",
    "ogDescription": "複利與折現、FV/PV/年金、72 法則——附互動複利計算機與費曼學習法分享腳本。",
    "titleEn": "Week 1: The Time Value of Money | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 1 of 52: the core ideas behind compounding and present value, the FV/PV/annuity formulas and the Rule of 72, with an interactive compounding calculator.",
    "ogTitleEn": "Week 1: Compounding and the Time Value of Money",
    "ogDescriptionEn": "Compounding and present value, FV/PV/annuities, the Rule of 72 — an interactive calculator plus a Feynman-technique script for teaching it.",
  },
  {
    "slug": "week-02-inflation",
    "title": "第 2 週：通膨與實質報酬｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 2 週：通膨是反向複利、費雪方程式與實質報酬、CPI 怎麼讀，附「雙雪球賽跑」互動計算機與費曼學習法分享腳本。",
    "ogTitle": "第 2 週：通膨與實質報酬 — 給家人的投資課",
    "ogDescription": "通膨是反向複利：費雪方程式、購買力半衰期、CPI 讀法——附雙雪球賽跑互動計算機。",
    "titleEn": "Week 2: Inflation and Real Returns | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 2 of 52: inflation as compounding in reverse, the Fisher equation and real returns, and how to read CPI - with a two-snowball race calculator.",
    "ogTitleEn": "Week 2: Inflation and Real Returns",
    "ogDescriptionEn": "Inflation is compounding in reverse: the Fisher equation, the half-life of purchasing power, how to read CPI - with a two-snowball race calculator.",
  },
  {
    "slug": "week-03-interest-rates",
    "title": "第 3 週：利率與殖利率曲線｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 3 週：利率傳導鏈、為什麼利率漲債券跌、存續期間、殖利率曲線倒掛與衰退預測。附「債券蹺蹺板」互動計算機與費曼學習法分享腳本。",
    "ogTitle": "第 3 週：利率與殖利率曲線 — 給家人的投資課",
    "ogDescription": "利率是所有資產的地心引力：傳導鏈、債券反向定價、存續期間、殖利率曲線倒掛——附債券蹺蹺板互動計算機。",
    "titleEn": "Week 3: Rates and the Yield Curve | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 3 of 52: the rate transmission chain, why bond prices fall when rates rise, duration and yield curve inversion - with a bond seesaw calculator.",
    "ogTitleEn": "Week 3: Interest Rates and the Yield Curve",
    "ogDescriptionEn": "Interest rates are gravity for every asset: the transmission chain, inverse bond pricing, duration, an inverted yield curve - with a bond seesaw calculator.",
  },
  {
    "slug": "week-04-accounting",
    "title": "第 4 週：借貸法則與應計制｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 4 週：會計恆等式、借貸法則、應計制與預收收入，用一家虛擬飲料店的六筆分錄逐步演示複式簿記如何永遠平衡。附互動記帳台與費曼學習法分享腳本。",
    "ogTitle": "第 4 週：借貸法則與應計制 — 給家人的投資課",
    "ogDescription": "開一家虛擬飲料店，用六筆分錄理解複式簿記為什麼永遠平衡——附逐步播放的互動記帳台。",
    "titleEn": "Week 4: Accounting Foundations | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 4 of 52: the accounting identity, debit and credit, the accrual basis - six journal entries show why double-entry balances, with an interactive ledger.",
    "ogTitleEn": "Week 4: The Rules of Debit and Credit, and the Accrual Basis",
    "ogDescriptionEn": "Open an imaginary drinks shop and use six journal entries to see why double-entry bookkeeping always balances - with a step-by-step interactive ledger.",
  },
  {
    "slug": "week-05-income-statement",
    "title": "第 5 週：損益表深讀｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 5 週：把飲料店排成損益表，看利潤率瀑布、共同比分析、收入認列的操縱空間與業外損益陷阱。附「利潤率瀑布」互動圖與業外美化演示。",
    "ogTitle": "第 5 週：損益表深讀 — 給家人的投資課",
    "ogDescription": "損益表是一道瀑布——每一層被誰拿走？附利潤率瀑布互動圖，與「賣土地美化淨利」的業外陷阱演示。",
    "titleEn": "Week 5: The Income Statement | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 5 of 52: the margin waterfall, common-size analysis, revenue recognition and the non-operating items trap - with an interactive margin waterfall.",
    "ogTitleEn": "Week 5: Reading the Income Statement Closely",
    "ogDescriptionEn": "The income statement is a waterfall - who takes a cut at each level? With an interactive margin waterfall, and a demo of the non-operating trap of selling land to flatter net profit.",
  },
  {
    "slug": "week-06-balance-sheet",
    "title": "第 6 週：資產負債表深讀｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 6 週：把飲料店排成資產負債表快照，看流動比與速動比、有息 vs 無息負債的兩張臉、商譽地雷。附「科目分類挑戰」互動遊戲與費曼學習法分享腳本。",
    "ogTitle": "第 6 週：資產負債表深讀 — 給家人的投資課",
    "ogDescription": "損益表看賺不賺，資產負債表看撐不撐得住：有息 vs 無息負債的兩張臉——附科目分類挑戰互動遊戲。",
    "titleEn": "Week 6: The Balance Sheet | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 6 of 52: the current and quick ratios and the two faces of interest-bearing vs interest-free liabilities - with a sort-the-line-items game.",
    "ogTitleEn": "Week 6: Reading the Balance Sheet Closely",
    "ogDescriptionEn": "The income statement tells you whether a company makes money, the balance sheet whether it can hold up: the two faces of interest-bearing vs interest-free liabilities - with a sort-the-line-items game.",
  },
  {
    "slug": "week-07-cash-flow",
    "title": "第 7 週：現金流量表深讀｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 7 週：最誠實的一張表——三大活動、間接法、自由現金流與八種現金流組合。附「間接法偵探」互動對帳遊戲，親手編出人生第一張現金流量表。",
    "ogTitle": "第 7 週：現金流量表深讀 — 給家人的投資課",
    "ogDescription": "淨利 71,667、現金只多 60,000——差額去哪了？當一次偵探，用間接法一筆筆對帳，親手編出現金流量表。",
    "titleEn": "Week 7: The Cash Flow Statement | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 7 of 52: the most honest of the three statements - the three activities, the indirect method and free cash flow, with an indirect-method detective game.",
    "ogTitleEn": "Week 7: Reading the Cash Flow Statement",
    "ogDescriptionEn": "Net profit of 71,667 but cash up only 60,000 - where did the gap go? Play detective, reconcile it item by item with the indirect method and build the cash flow statement by hand.",
  },
  {
    "slug": "week-08-quality-red-flags",
    "title": "第 8 週：三表勾稽與財報品質紅旗｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 8 週：把三張報表縫起來互相查核（勾稽三條線）、盈餘品質五特徵，並建立你的紅旗檢查清單 v1。附「紅旗雷達」互動判讀挑戰與博達案例課。",
    "ogTitle": "第 8 週：三表勾稽與財報品質紅旗 — 給家人的投資課",
    "ogDescription": "一張表可以化妝，三張表同時化妝很難不露餡——勾稽三條線、紅旗清單 v1，附紅旗雷達互動挑戰。",
    "titleEn": "Week 8: Financial Red Flags | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 8 of 52: the three tie-out lines that make the statements check each other, the five marks of earnings quality, and the Procomp Informatics case.",
    "ogTitleEn": "Week 8: Tying the Three Statements Together, and Red Flags in the Numbers",
    "ogDescriptionEn": "One statement can wear makeup, three at once almost always shows - the three tie-out lines, red-flag list v1, with an interactive red-flag radar challenge.",
  },
  {
    "slug": "week-09-dupont-ratios",
    "title": "第 9 週：財務比率體系與杜邦五因子｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 9 週：四大類比率抽屜、杜邦五因子拆解 ROE——同樣賺 20%，靠真本事還是靠借錢？附「ROE 果汁機」互動實驗台與台積電 vs 聯電對決練習。",
    "ogTitle": "第 9 週：財務比率體系與杜邦五因子 — 給家人的投資課",
    "ogDescription": "ROE 像果汁機的產出，杜邦拆解是把果汁倒回去看原料——附五因子互動實驗台，同樣 ROE 拉出完全不同的配方。",
    "titleEn": "Week 9: DuPont and Ratio Analysis | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 9 of 52: four ratio drawers and the five-factor DuPont breakdown of ROE - the same 20%, real strength or borrowed money? TSMC vs UMC, head to head.",
    "ogTitleEn": "Week 9: A system for financial ratios, and the five-factor DuPont breakdown",
    "ogDescriptionEn": "ROE is what comes out of a juicer, and the DuPont breakdown pours the juice back to look at what went in - with a five-factor bench where the same ROE comes from completely different recipes.",
  },
  {
    "slug": "week-10-market-structure",
    "title": "第 10 週：台股交易制度與成本｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 10 週：委託單的旅程、T+2 交割、撮合規則，以及交易成本的複利懲罰——附「過路費計算機」：折數×周轉×年數，看 20 年終值被吃掉多少。",
    "ogTitle": "第 10 週：台股交易制度與成本 — 給家人的投資課",
    "ogDescription": "投資賺不賺不確定，過路費是百分之百確定的——附過路費計算機，算清楚周轉率的複利懲罰。",
    "titleEn": "Week 10: Taiwan Market Structure | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 10 of 52: the journey of an order, T+2 settlement, the matching rules and the compounding penalty of trading costs - with a toll calculator.",
    "ogTitleEn": "Week 10: Taiwan Market Structure and Trading Costs",
    "ogDescriptionEn": "Whether the investment makes money is uncertain, the toll is 100% certain - with a toll calculator to work out the compounding penalty of turnover.",
  },
  {
    "slug": "week-11-macro-indicators",
    "title": "第 11 週：總經指標判讀｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 11 週：領先／同時／落後指標的座標、六個核心指標判讀卡、央行反應函數，與「預期 vs 現實」的驚奇機制——附互動模擬器與每月總經儀表板模板。",
    "ogTitle": "第 11 週：總經指標判讀 — 給家人的投資課",
    "ogDescription": "個股是顯微鏡，總經是氣象台：為什麼數據好、股市卻跌？——附「預期 vs 現實」互動模擬器與總經儀表板模板。",
    "titleEn": "Week 11: Macro Indicators | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 11 of 52: leading, coincident and lagging indicators, the central bank reaction function, and the surprise of expectation vs reality - with a simulator.",
    "ogTitleEn": "Week 11: Reading the Macro Indicators",
    "ogDescriptionEn": "One company is a microscope, macro is the weather station: why does the market fall on good data? - with an expectation vs reality simulator and a macro dashboard template.",
  },
  {
    "slug": "week-12-cycles-rotation",
    "title": "第 12 週：景氣循環與資產輪動｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 12 週：景氣四階段、投資時鐘四象限、股市的預期性，以及擇時的代價——為什麼答案是「留在場上」。附投資時鐘互動與雙重正確計算器。",
    "ogTitle": "第 12 週：景氣循環與資產輪動 — 給家人的投資課",
    "ogDescription": "股市的春天，總是在經濟的隆冬裡開始——景氣四階段、投資時鐘、擇時的代價，Q1 知識篇收官。",
    "titleEn": "Week 12: Cycles and Rotation | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 12 of 52: the four phases of the business cycle, the four quadrants of the investment clock, and what timing costs you - with an interactive clock.",
    "ogTitleEn": "Week 12: The Business Cycle and Asset Rotation",
    "ogDescriptionEn": "The market's spring always begins in the depth of the economy's winter - the four phases of the cycle, the investment clock, what timing costs you. Closing out the Q1 knowledge block.",
  },
  {
    "slug": "week-13-q1-capstone",
    "title": "第 13 週：Q1 Capstone——20 分鐘財報健檢｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 13 週：Q1 期末考——把週 5–9 的五樣工具組成一條 20 分鐘可重複執行的財報健檢流程。附六步驟互動導覽、一頁報告模板與自評計分器。",
    "ogTitle": "第 13 週：Q1 Capstone——20 分鐘財報健檢 — 給家人的投資課",
    "ogDescription": "期末考考的不是記憶，是組裝：六步驟、20 分鐘，回答唯一的問題——這家公司值不值得再花 20 小時研究。",
    "titleEn": "Week 13: Q1 Capstone Check-up | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 13 of 52: the Q1 final exam - turn the tools from weeks 5-9 into a repeatable 20-minute financial check-up, with a six-step interactive walkthrough.",
    "ogTitleEn": "Week 13: Q1 Capstone — the 20-minute financial check-up",
    "ogDescriptionEn": "The final exam is not about memory, it is about assembly: six steps, 20 minutes, answering the one question - is this company worth another 20 hours of digging?",
  },
  {
    "slug": "week-14-asset-allocation",
    "title": "第 14 週：資產配置——股債現金與風險承受度｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 14 週：Q2 投資人季開場——預備金、三類資產的角色、風險承受度三要素，做出自己的目標配置。附配置模擬器：期望報酬、30 年終值與 2008 重演壓力測試。",
    "ogTitle": "第 14 週：資產配置——股債現金與風險承受度 — 給家人的投資課",
    "ogDescription": "全年最重要的單一決定：股債現金的比例。配置在「長期報酬」與「你撐不撐得住的回檔」之間定價——用模擬器親手拉一次。",
    "titleEn": "Week 14: Asset Allocation | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 14 of 52: the emergency fund, what each of the three asset classes is for, and the three components of risk tolerance - with an allocation simulator.",
    "ogTitleEn": "Week 14: Asset Allocation — Stocks, Bonds, Cash and Risk Tolerance",
    "ogDescriptionEn": "The single most important decision of the year: how much in stocks, bonds and cash. Allocation prices the trade between long-run return and the drawdown you can actually sit through - drag it yourself in the simulator.",
  },
  {
    "slug": "week-15-mpt",
    "title": "第 15 週：現代投資組合理論（MPT）入門｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 15 週：為什麼分散是投資裡唯一的免費午餐——兩個數字描述資產、相關係數的魔術、效率前緣與系統性風險。附效率前緣互動繪圖器與「幾檔才算分散」模擬器。",
    "ogTitle": "第 15 週：現代投資組合理論（MPT）入門 — 給家人的投資課",
    "ogDescription": "報酬是加權平均，風險不是——相關係數的第三項就是免費午餐。拉動 ρ 親眼看效率前緣往左上彎。",
    "titleEn": "Week 15: Modern Portfolio Theory | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 15 of 52: why diversification is the only free lunch - the correlation coefficient, the efficient frontier and systematic risk, with a frontier plotter.",
    "ogTitleEn": "Week 15: Modern Portfolio Theory (MPT): a first look",
    "ogDescriptionEn": "Return is a weighted average, risk is not - the third term, the one with the correlation in it, is the free lunch. Drag the correlation and watch the efficient frontier bend up and to the left.",
  },
  {
    "slug": "week-16-index-investing",
    "title": "第 16 週：指數化投資與成本侵蝕｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 16 週：Sharpe 主動管理的算術、SPIVA 成績單、成本的反向複利與 ETF 六檢核點。附費用侵蝕計算器。",
    "ogTitle": "第 16 週：指數化投資與成本侵蝕 — 給家人的投資課",
    "ogDescription": "成本是確定的，超額報酬是不確定的：為什麼「買下整個市場＋壓低成本」是連專業者都難以打敗的預設答案。",
    "titleEn": "Week 16: Index Investing | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 16 of 52: Sharpe's arithmetic of active management, the SPIVA scorecard, cost as compounding in reverse, six ETF checkpoints - a fee erosion calculator.",
    "ogTitleEn": "Week 16: Index Investing and the Erosion of Costs",
    "ogDescriptionEn": "The cost is certain, the excess return is not: why owning the whole market and keeping costs down is the default answer that even professionals struggle to beat.",
  },
  {
    "slug": "week-17-entry-strategy",
    "title": "第 17 週：入場策略——Lump Sum vs DCA｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 17 週：手上一筆錢，一次投入還是分批？兩種本質不同的 DCA、Vanguard 的 2/3 結論、DCA 買的是行為保險。附三情境路徑實驗室與三問決策器。",
    "ogTitle": "第 17 週：入場策略——Lump Sum vs DCA — 給家人的投資課",
    "ogDescription": "LSI 期望值較高，但 DCA 買的不是報酬，是行為保險——用三條市場路徑親眼看誰贏、為什麼。",
    "titleEn": "Week 17: Lump Sum vs DCA | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 17 of 52: a lump sum in hand, all at once or in instalments? Two kinds of DCA, Vanguard's two-thirds finding, and DCA as behavioural insurance.",
    "ogTitleEn": "Week 17: Getting In — Lump Sum vs DCA",
    "ogDescriptionEn": "LSI has the higher expected value, but what DCA buys is not return, it is behavioural insurance - three market paths show you who wins, and why.",
  },
  {
    "slug": "week-18-position-rebalancing",
    "title": "第 18 週：倉位管理與再平衡｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 18 週：單一標的上限、集中 vs 分散、再平衡的本質是風險控制，並固化成投資政策聲明書（IPS）。",
    "ogTitle": "第 18 週：倉位管理與再平衡 — 給家人的投資課",
    "ogDescription": "牛市會讓組合悄悄超載：拉動漲跌幅看配置怎麼漂移、該賣買多少拉回來——以及寫給恐慌時自己的那封信（IPS）。",
    "titleEn": "Week 18: Sizing and Rebalancing | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 18 of 52: caps on any one holding, concentrated vs diversified, rebalancing as risk control rather than a return booster, set down in an IPS.",
    "ogTitleEn": "Week 18: Position sizing and rebalancing",
    "ogDescriptionEn": "A bull market quietly overloads a portfolio: drag the moves to see the allocation drift and how much to buy or sell to pull it back - plus the letter you write to your panicking self (the IPS).",
  },
  {
    "slug": "week-19-relative-valuation",
    "title": "第 19 週：估值一——相對估值深用｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 19 週：四個主要倍數的適用與陷阱、EV 怎麼算才對、comps 怎麼選。附 EV/EBITDA 計算機與 PEG 天平。",
    "ogTitle": "第 19 週：估值一——相對估值深用 — 給家人的投資課",
    "ogDescription": "P/E 12 和 P/E 30 哪家便宜？光看倍數無法回答——「貴/便宜」要放在成長、品質、風險的脈絡裡看。",
    "titleEn": "Week 19: Relative Valuation | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 19 of 52: where each of the four main multiples fits and where it traps you, how to work out EV, and how to pick comps - with an EV/EBITDA calculator.",
    "ogTitleEn": "Week 19: Valuation I — Relative Valuation in Depth",
    "ogDescriptionEn": "A P/E of 12 or a P/E of 30 - which is cheaper? The multiple alone cannot answer: expensive and cheap only mean something in the context of growth, quality and risk.",
  },
  {
    "slug": "week-20-dcf",
    "title": "第 20 週：估值二——DCF 基礎｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 20 週：DCF 三零件（FCF 預測、折現率、終值）、終值為何佔六到八成、假設放大器的正確心態。附互動計算機。",
    "ogTitle": "第 20 週：估值二——DCF 基礎 — 給家人的投資課",
    "ogDescription": "會生金蛋的鵝值多少錢？拉動成長率、折現率與永續 g，親眼看終值怎麼主導整個估值——DCF 是假設的放大器。",
    "titleEn": "Week 20: DCF Basics | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 20 of 52: the three parts of a DCF, and why the terminal value is sixty to eighty per cent of the whole valuation - with an interactive calculator.",
    "ogTitleEn": "Week 20: Valuation II — The Basics of DCF",
    "ogDescriptionEn": "What is a goose that lays golden eggs worth? Drag the growth rate, the discount rate and the perpetual growth rate, and watch the terminal value dominate the whole valuation - a DCF is an amplifier for assumptions.",
  },
  {
    "slug": "week-21-margin-of-safety",
    "title": "第 21 週：估值三——敏感度、情境與安全邊際｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 21 週：敏感度九宮格把單點變區間、三情境商業故事、Graham 的安全邊際與市場先生寓言。附互動九宮格。",
    "ogTitle": "第 21 週：估值三——敏感度、情境與安全邊際 — 給家人的投資課",
    "ogDescription": "同一個 DCF，假設都「聽起來合理」地小改——最保守到最樂觀差 2 倍。把單點變區間，只在明顯便宜時出手。",
    "titleEn": "Week 21: The Margin of Safety | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 21 of 52: a nine-cell sensitivity grid turns one number into a range, three scenarios give it a business story, then Graham's margin of safety.",
    "ogTitleEn": "Week 21: Valuation III — Sensitivity, Scenarios and the Margin of Safety",
    "ogDescriptionEn": "The same DCF with every assumption nudged to something that still sounds reasonable - a factor of two from the most conservative corner to the most optimistic. Turn the point into a range and act only when it is obviously cheap.",
  },
  {
    "slug": "week-22-moat-five-forces",
    "title": "第 22 週：質化分析——護城河進階＋波特五力｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 22 週：估值假設的品質保證——護城河從「有沒有」升級到來源×寬度×趨勢、Porter 五力產業掃描、定價權試金石。附五力雷達評分器與真假護城河快篩。",
    "ogTitle": "第 22 週：質化分析——護城河進階＋波特五力 — 給家人的投資課",
    "ogDescription": "好賺的生意會把競爭者吸過來，直到大家都不好賺——真正值錢的公司不是「現在很賺」的，是「別人搶不走」的。",
    "titleEn": "Week 22: Moats and Five Forces | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 22 of 52: moats from does it have one to source x width x trend, a Porter's Five Forces sweep and pricing power as the litmus test - with a radar scorer.",
    "ogTitleEn": "Week 22: Qualitative Analysis — Moats in Depth, plus Porter's Five Forces",
    "ogDescriptionEn": "A profitable business pulls competitors in until nobody is making a profit - the company really worth something is not the one earning well today, it is the one nobody can take that away from.",
  },
  {
    "slug": "week-23-behavioral-finance",
    "title": "第 23 週：行為財務學——認知偏誤與對策工程｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 23 週：拿武器的手會抖——兩套系統、六大偏誤目錄（各配自測）、對策工程：不靠意志力靠制度。附擲硬幣實驗、偏誤配對遊戲與對策速查器。",
    "ogTitle": "第 23 週：行為財務學——認知偏誤與對策工程 — 給家人的投資課",
    "ogDescription": "知道偏誤不會讓你免疫——有效的是把決策外包給冷靜時設計的制度。六大偏誤目錄與對策工程。",
    "titleEn": "Week 23: Behavioural Finance | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 23 of 52: two systems, six biases each with a self-test, and countermeasures engineered out of rules rather than willpower - with a bias matching game.",
    "ogTitleEn": "Week 23: Behavioural finance — cognitive bias, and engineering your way around it",
    "ogDescriptionEn": "Knowing about a bias does not make you immune - what works is outsourcing the decision to rules you designed while calm. A catalogue of six biases, and the countermeasures engineered around them.",
  },
  {
    "slug": "week-24-buffett-letters",
    "title": "第 24 週：大師心法——Buffett 股東信精讀｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 24 週：開始讀原典——為什麼讀信不讀語錄、三遍讀法、1988 與 2008 兩封信的看點、四大原則與課程對應。附 takeaway 品檢器與四大原則對應卡。",
    "ogTitle": "第 24 週：大師心法——Buffett 股東信精讀 — 給家人的投資課",
    "ogDescription": "六十年股東信免費公開，認真讀過的人極少——原典習慣是你和多數投資人的分水嶺。學會從原文萃取可操作原則。",
    "titleEn": "Week 24: Buffett's Letters | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 24 of 52: read the primary sources - why the letters and not a book of quotations, the three-pass method, and the 1988 and 2008 letters up close.",
    "ogTitleEn": "Week 24: How the Masters Think — Reading Buffett's Shareholder Letters Closely",
    "ogDescriptionEn": "Sixty years of shareholder letters, free and public, and very few people have read them properly - the primary-source habit is the watershed between you and most investors. Learn to pull actionable principles out of the original text.",
  },
  {
    "slug": "week-25-marks-cycles",
    "title": "第 25 週：大師心法——Marks 備忘錄與週期思維｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 25 週：Buffett 教你看公司，Marks 教你看環境——第二層思考、風險是本金永久損失、心理鐘擺與信貸窗口。附市場溫度計五指標互動評估與心理鐘擺。",
    "ogTitle": "第 25 週：大師心法——Marks 備忘錄與週期思維 — 給家人的投資課",
    "ogDescription": "風險最高的時刻，看起來最安全。你無法預測鐘擺何時回擺，但可以判斷它現在盪到哪——然後調整姿態，不是進出場。",
    "titleEn": "Week 25: Marks and Market Cycles | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 25 of 52: second-level thinking, risk as the permanent loss of capital, the pendulum of psychology and the credit window - with a market thermometer.",
    "ogTitleEn": "Week 25: The Master's Mindset — Marks' Memos and Cycle Thinking",
    "ogDescriptionEn": "The moment of highest risk is the one that looks safest. You cannot predict when the pendulum turns, but you can tell where it is swinging now - and then adjust your posture, rather than getting in and out.",
  },
  {
    "slug": "week-26-q2-capstone-thesis",
    "title": "第 26 週：Q2 Capstone——個股投資論文｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 26 週：把 Q1 財報分析與 Q2 估值質化組裝成一份投資論文——七章結構、反方論證三來源、可驗證的認錯觸發條件。附觸發條件健檢與 Rubric 自評計分器。",
    "ogTitle": "第 26 週：Q2 Capstone——個股投資論文 — 給家人的投資課",
    "ogDescription": "投資論文不是報告，是一份寫給一年後自己的決策合約——它記錄你為什麼買，以及什麼證據出現時你承認自己錯了。",
    "titleEn": "Week 26: The Investment Thesis | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 26 of 52: assemble Q1 and Q2 into an investment thesis - seven chapters, three sources for the counter-case, and checkable triggers for admitting error.",
    "ogTitleEn": "Week 26: Q2 Capstone — an investment thesis on one stock",
    "ogDescriptionEn": "An investment thesis is not a report, it is a decision contract written to the you of a year from now - it records why you bought, and what evidence would make you admit you were wrong.",
  },
  {
    "slug": "week-27-returns-portfolio",
    "title": "第 27 週：報酬衡量 TWR/MWR——模擬組合上線｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 27 週：算術 vs 幾何與波動拖累、TWR 與 MWR 各回答什麼問題、報酬引用三必答，並讓模擬組合正式上線。附波動拖累模擬器與 TWR/MWR 實驗台。",
    "ogTitle": "第 27 週：報酬衡量 TWR/MWR——模擬組合上線 — 給家人的投資課",
    "ogDescription": "策略 +80%、錢包卻虧 1 萬——TWR 與 MWR 各回答什麼問題。模擬組合上線，Q3 的實驗載具就位。",
    "titleEn": "Week 27: TWR vs MWR | Family Investing Course · Matt Ye",
    "descriptionEn": "Week 27 of 52: arithmetic vs geometric returns and volatility drag, what TWR and MWR each answer — and the paper portfolio goes live as the vehicle for Q3.",
    "ogTitleEn": "Week 27: TWR/MWR and the Paper Portfolio",
    "ogDescriptionEn": "A strategy up 80% while the wallet lost money — what TWR and MWR each answer. The paper portfolio goes live as Q3's experimental vehicle."
  },
  {
    "slug": "week-28-risk-measurement",
    "title": "第 28 週：風險衡量——波動率、回撤與 VaR｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 28 週：波動率年化（×√252）、最大回撤與回本不對稱、VaR 速算與三缺陷、下行偏差，給模擬組合裝上風險儀表板。附回本陡坡與風險翻譯機互動。",
    "ogTitle": "第 28 週：風險衡量——波動率、回撤與 VaR — 給家人的投資課",
    "ogDescription": "虧 50% 要賺 100% 才回本——回本的坡非線性地陡。波動、MDD、VaR 三儀表上線，把風險翻成家人聽得懂的金額。"
  },
  {
    "slug": "week-29-sharpe-family",
    "title": "第 29 週：風險調整績效——Sharpe 家族｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 29 週：Sharpe、Sortino 與資訊比率——同樣賺 8% 誰賺得高明；比公式更重要的四個使用陷阱。附 Sharpe 對決台與陷阱照妖鏡互動。",
    "ogTitle": "第 29 週：風險調整績效——Sharpe 家族 — 給家人的投資課",
    "ogDescription": "報酬除以風險才能比高下：C 賺 12% 卻輸給賺 8% 的 A。三比率的分工、四個陷阱，附對決台與照妖鏡互動。"
  },
  {
    "slug": "week-30-brinson-attribution",
    "title": "第 30 週：績效歸因——Brinson 模型｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 30 週：超額 2.4pp 拆成配置、選股與交互三塊且勾稽歸零，並修正被誤用最多的「90% 來自配置」。附 Brinson 拆帳台與 90% 判讀互動。",
    "ogTitle": "第 30 週：績效歸因——Brinson 模型 — 給家人的投資課",
    "ogDescription": "贏大盤 2.4pp——押對類別還是挑對股票？配置＋選股＋交互＝超額，帳拆得乾乾淨淨。附拆帳台互動。"
  },
  {
    "slug": "week-31-benchmarks-tracking",
    "title": "第 31 週：基準與追蹤誤差｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 31 週：好基準三條件、含息報酬指數、追蹤誤差與 Active Share，拆穿櫃子裡的指數基金。附含息尺與櫃子稽查器互動。",
    "ogTitle": "第 31 週：基準與追蹤誤差 — 給家人的投資課",
    "ogDescription": "拿不含息的加權指數比，人人都是股神。好基準三條件、TE 與 Active Share，三分鐘識破櫃子裡的指數基金。"
  },
  {
    "slug": "week-32-factor-investing",
    "title": "第 32 週：因子投資——Fama-French 與風格的科學｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 32 週：三因子模型、五大因子家族、價值因子的失落十年，以及 smart beta 解碼。附因子拆帳台與 ETF 解碼互動。",
    "ogTitle": "第 32 週：因子投資——Fama-French 與風格的科學 — 給家人的投資課",
    "ogDescription": "你的選股超額，會不會只是買了便宜股、小型股的風格？三因子一跑，傳奇選股人的 α 常縮成雜訊。"
  },
  {
    "slug": "week-33-derivatives-hedging",
    "title": "第 33 週：衍生性商品——避險用途｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 33 週：期貨保證金的內建槓桿、選擇權權利金、保護性賣權與 covered call，以及為何不常態投保。附槓桿顯微鏡與 payoff 實驗台。",
    "ogTitle": "第 33 週：衍生性商品——避險用途 — 給家人的投資課",
    "ogDescription": "同一張合約，有現股是避險、沒有是投機。保護性賣權鎖住地板，但全年投保要約 10%——保險要買在特定時刻。"
  },
  {
    "slug": "week-34-execution",
    "title": "第 34 週：交易執行——滑價與市場衝擊｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 34 週：交易成本四層地圖、Implementation Shortfall、市場衝擊與參與率、個人執行五紀律。附 IS 計算器與拆單規劃器。",
    "ogTitle": "第 34 週：交易執行——滑價與市場衝擊 — 給家人的投資課",
    "ogDescription": "一次進場就漏掉 1.16%：價差、滑價、市場衝擊，還有掛太低沒買到的機會成本——對帳單上看不到的那一半。"
  },
  {
    "slug": "week-35-fund-industry",
    "title": "第 35 週：基金實務——結構、費用與利益衝突｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 35 週：基金容器與保管銀行、2/20 與台灣公募帳單、尾隨佣金的利益衝突、十分鐘讀公開說明書。附 2/20 解剖台與費差帳單。",
    "ogTitle": "第 35 週：基金實務——結構、費用與利益衝突 — 給家人的投資課",
    "ogDescription": "理專的薪水是你付的，而且每年持續付。看懂基金業的錢流管線，帶走自保三問：每年多少、貴幾倍、誰保管。"
  },
  {
    "slug": "week-36-decision-process",
    "title": "第 36 週：投資決策流程——檢查清單與事前驗屍｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 36 週：12 項買入前檢查清單、事前驗屍、決策記錄卡與一人投委會的三頂帽子。附清單試跑台、驗屍板與決策卡產生器。",
    "ogTitle": "第 36 週：投資決策流程——檢查清單與事前驗屍 — 給家人的投資課",
    "ogDescription": "專家失誤的主因不是不知道，是壓力下漏掉。把 35 週學的判斷力做成一張起飛清單，再用事前驗屍拆掉過度自信。"
  },
  {
    "slug": "week-37-stress-testing",
    "title": "第 37 週：壓力測試與危機案例——2008、2020、2022｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 37 週：三場危機的病因差異、把歷史情境灌進組合、反向壓測與流動性壓測、壓測後的行動選單。附三場風暴壓測台與毀滅劇本計算器。",
    "ogTitle": "第 37 週：壓力測試與危機案例 — 給家人的投資課",
    "ogDescription": "2008 債券救了你，2022 沒有——因為病因不同。趁沒失火時做一次家庭投資消防演習。"
  },
  {
    "slug": "week-38-journal-review",
    "title": "第 38 週：投資紀律——交易日誌與複盤｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 38 週：resulting 謬誤與決策四象限、日誌三個關鍵欄位、月度與季度複盤節奏。附四象限審判庭與運氣放大鏡。",
    "ogTitle": "第 38 週：投資紀律——交易日誌與複盤 — 給家人的投資課",
    "ogDescription": "亂做卻賺錢，是最危險的格子。學會把「決策品質」和「結果品質」分開看，才知道自己有沒有在進步。"
  },
  {
    "slug": "week-39-q3-capstone-report",
    "title": "第 39 週：Q3 期末專題——模擬組合風險月報｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 39 週：把 W27–38 的模組組裝成七節專業月報，含勾稽紀律、一段話摘要與 10 分制 Rubric。附月報勾稽台與自評表。",
    "ogTitle": "第 39 週：Q3 期末專題——模擬組合風險月報 — 給家人的投資課",
    "ogDescription": "錢怎麼樣了、為什麼、接下來看什麼——三分鐘講清楚，壞消息先講。寫得出這份月報，操盤手就從志向變成技能。"
  },
  {
    "slug": "week-40-cfo-overview",
    "title": "第 40 週：CFO 三大決策總覽——投資、融資、股利｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 40 週：Q4 財務長季開場，用飲料店分錄認識投資、融資、股利三大決策與目標函數的三個「不是」。附分錄分類台與帝國建造計算機。",
    "ogTitle": "第 40 週：CFO 三大決策總覽 — 給家人的投資課",
    "ogDescription": "錢投到哪、錢從哪來、賺的錢怎麼分——你在第 4 週的飲料店早就做過。換到桌子另一邊，看懂資本配置。"
  },
  {
    "slug": "week-41-capital-budgeting",
    "title": "第 41 週：資本預算——NPV 與 IRR｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 41 週：NPV 是換了主詞的 DCF、IRR 的三個陷阱、回收期法的用途與增量現金流三原則。附擴廠案 NPV 實驗台與第二家店計算機。",
    "ogTitle": "第 41 週：資本預算——NPV 與 IRR — 給家人的投資課",
    "ogDescription": "報酬率 50% 的小案子，輸給 20% 的大案子。學會 CFO 最常用的工具，也學會讓沉沒成本閉嘴。"
  },
  {
    "slug": "week-42-wacc-capm",
    "title": "第 42 週：資金成本——WACC 與 CAPM 實務估算｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 42 週：WACC 的兩種金主、CAPM 三個輸入的出處與爭議、合理區間與風險對應門檻。附 WACC 組裝台、敏感度九宮格與錯用門檻計算機。",
    "ogTitle": "第 42 週：資金成本——WACC 與 CAPM — 給家人的投資課",
    "ogDescription": "股東的錢比銀行的錢貴，只是不寫在合約上。算出公司的跨欄高度，護城河鐵律就補完了分母。"
  },
  {
    "slug": "week-43-capital-structure",
    "title": "第 43 週：資本結構——MM 理論與實務槓桿｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 43 週：槓桿雙面刃、MM 定理的切披薩論證、稅盾與困境成本的抵換、融資順位與槓桿健康三數字。附槓桿實驗台與最適槓桿示意圖。",
    "ogTitle": "第 43 週：資本結構——MM 理論與實務槓桿 — 給家人的投資課",
    "ogDescription": "槓桿是放大鏡，唯一不變的是利息照付。從 MM 定理出發，看懂為什麼電信敢借、科技不敢借。"
  },
  {
    "slug": "week-44-dividend-policy",
    "title": "第 44 週：股利政策與庫藏股——發還是留？｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 44 週：股利決策樹與 ROIC 對 WACC 的唯一判準、股利無關論的三個偏離、庫藏股的 EPS 魔術與台灣高配息文化。附果樹模擬器與庫藏股照妖鏡。",
    "ogTitle": "第 44 週：股利政策與庫藏股 — 給家人的投資課",
    "ogDescription": "發股利是吃果子，保留是種樹。判斷標準不是想不想吃，是土地還肥不肥。"
  },
  {
    "slug": "week-45-working-capital",
    "title": "第 45 週：營運資金管理——現金轉換循環｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 45 週：CCC 三元件、飲料店的負 CCC、成長吃現金的帳單、管理槓桿與代價、現金水位三層。附 CCC 時間軸與成長帳單計算機。",
    "ogTitle": "第 45 週：營運資金管理——現金轉換循環 — 給家人的投資課",
    "ogDescription": "錢還沒付給供應商，就已經從客人手上收回來了。看懂誰在墊錢，就看懂為什麼有些公司越成長越缺錢。"
  },
  {
    "slug": "week-46-financial-planning",
    "title": "第 46 週：財務規劃與預算——三表連動預測｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 46 週：銷售驅動法五步驟、外部資金需求、可持續成長率 g* 的三個用途、預算的政治學與情境化。附一頁式預測台與借來的成長推演。",
    "ogTitle": "第 46 週：財務規劃與預算 — 給家人的投資課",
    "ogDescription": "不借錢、不增資，成長有速限：ROE ×（1 − 配發率）。學會讓三張報表往前推一年，看成長養不養得起。"
  },
  {
    "slug": "week-47-mergers-acquisitions",
    "title": "第 47 週：企業估值應用——併購｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 47 週：併購價值方程式、綜效的打折法則、現金與換股的訊號、EPS 增厚陷阱與贏家的詛咒。附併購價值方程式與 EPS 增厚機。",
    "ogTitle": "第 47 週：企業估值應用——併購 — 給家人的投資課",
    "ogDescription": "溢價是真金白銀，綜效是猜的。看懂為什麼多數併購讓賣方贏、買方輸，以及 EPS 增厚為什麼不代表任何事。"
  },
  {
    "slug": "week-48-treasury-hedging",
    "title": "第 48 週：資金調度與避險——匯率與利率風險｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 48 週：匯率曝險三張臉、遠期外匯與避險比率、避險政策四條、台灣 TRF 風暴三教訓與利率風險。附遠期外匯台與 TRF 形狀測試。",
    "ogTitle": "第 48 週：資金調度與避險——匯率與利率風險 — 給家人的投資課",
    "ogDescription": "財務部是滅火器，不是印鈔機。避險買的是確定性；贏有上限、輸沒下限的商品，問完下限就轉身走。"
  },
  {
    "slug": "week-49-governance-fraud",
    "title": "第 49 週：公司治理與財報舞弊案例｜給家人的投資課 · Matt Ye",
    "description": "52 週投資課第 49 週：治理防火牆、Enron／Wirecard／博達三案的共同四步驟、紅旗清單 v2 的五項治理紅旗與 CFO 的頭版測試。附殺信使測試與 15 項掃描器。",
    "ogTitle": "第 49 週：公司治理與財報舞弊案例 — 給家人的投資課",
    "ogDescription": "正常公司面對質疑會回應數據；心虛的公司攻擊提問的人。三個世紀級騙局，警訊都亮了好幾年。"
  }
];
