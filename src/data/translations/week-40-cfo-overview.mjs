/*
 * 給家人的投資課 Week 40：CFO 三大決策總覽——投資、融資、股利 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-40-cfo-overview.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 飲料店統一譯為 drinks shop（沿用 W3–W12 既有譯法）；JS 算出的「萬／億」後綴依 W17／W27 慣例清空並把單位掛到標籤上。
 */
export const KEEP = [];
export const ADDED = [];
export const INCOMPLETE = false;
export const MAP = {
  '← 課程首頁':
    '← Course home',
  '① 講義':
    '① Notes',
  '② 導讀':
    '② Reading',
  '③ 練習':
    '③ Exercise',
  '④ 分享':
    '④ Teach it',
  '⑤ 檢核':
    '⑤ Checklist',
  '給家人的投資課 · Q4 財務長季 · Week 40':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 40',
  'CFO 三大決策總覽——投資、融資、股利':
    'The CFO\'s Three Big Decisions — Investing, Financing, Dividends',
  'Q4 開場：換到桌子的另一邊。前 39 週你是「評價公司的人」，這一季你是「':
    'Q4 opens: we move to the other side of the table. For the first 39 weeks you were "the person who evaluates companies"; this quarter you are "',
  '被評價的人':
    'the one being evaluated',
  '」——替公司決定錢投到哪、錢從哪來、賺的錢還多少。有趣的是，這三個決策你':
    '" — deciding where the company\'s money goes, where it comes from, and how much of what it earns to hand back. The funny thing is that you have ',
  '早就做過':
    'already made these three decisions',
  '：它們全藏在第 4 週飲料店的分錄裡。':
    ': they are all hidden in the Week 4 drinks-shop journal entries.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：Q1–Q3 完成':
    'Prerequisites: Q1–Q3 completed',
  '52 週 · 第 40 週':
    '52 weeks · Week 40',
  '本季在三個角色中的定位：':
    'Where this quarter sits across the three roles:',
  '投資人看資本配置的結果，操盤手看它反映在股價上，財務長則是':
    'Investors look at the results of capital allocation, portfolio managers see them reflected in the share price, and the CFO is ',
  '做出那些配置的人':
    'the person who makes those allocations',
  '。知道好 CFO 怎麼想，就看得出哪家公司的錢被聰明地用。':
    '. Knowing how a good CFO thinks lets you see which company\'s money is being used wisely.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的第一次經理人報告——家人的三題測試過了嗎？':
    'Look back at last week\'s first manager\'s report — did your family pass the three-question test?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一家公司帳上現金很多。財務長第一個該問的問題是什麼？':
    'A company has a lot of cash on its books. What is the first question the CFO should ask?',
  '要發多少股利給股東':
    'How much dividend to pay shareholders',
  '有沒有報酬高過資金成本的投資機會':
    'Are there investment opportunities that earn more than the cost of capital?',
  '買回庫藏股，把 EPS 推高':
    'Buy back shares to push up EPS',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 驚喜開場：你的飲料店早就做過這三個決策':
    '1. A surprise opening: your drinks shop made all three decisions long ago',
  '回看第 4 週第 1 個月的分錄，用 CFO 的眼睛重讀：':
    'Look back at the first month\'s journal entries in Week 4 and reread them through a CFO\'s eyes:',
  '分錄':
    'Journal entry',
  '當時的名字':
    'What we called it then',
  'CFO 的名字':
    'What the CFO calls it',
  '借：現金 500,000／貸：股本 500,000':
    'Dr Cash 500,000 / Cr Share capital 500,000',
  '老闆投入開店':
    'Owner invests to open the shop',
  '融資決策':
    'Financing decision',
  '：100% 權益、0 負債——資本結構的選擇':
    ': 100% equity, 0 debt — a capital structure choice',
  '借：設備 200,000／貸：現金 200,000':
    'Dr Equipment 200,000 / Cr Cash 200,000',
  '買製茶設備':
    'Buys tea-making equipment',
  '投資決策':
    'Investment decision',
  '：這 20 萬投下去，回收得來嗎？——資本預算':
    ': will the NT$200,000 come back? — capital budgeting',
  '淨利 26,667 → 保留盈餘':
    'Net income 26,667 → retained earnings',
  '月底結帳':
    'Month-end close',
  '股利決策':
    'Dividend decision',
  '：配發率 0%——全數留下來擴店？':
    ': payout ratio 0% — keep it all to expand the shop?',
  '公司金融的全部，就是把這三個決策做大、做嚴謹。':
    'All of corporate finance is making these three decisions bigger and more rigorous.',
  '飲料店憑感覺，上市公司用 NPV（W41）、WACC（W42）、資本結構理論（W43）、股利政策（W44）。你在 Q1 練的三表功力、Q2 練的估值功力，本季全部換邊使用。':
    'The drinks shop goes by feel; a listed company uses NPV (W41), WACC (W42), capital structure theory (W43) and dividend policy (W44). The skills you built on the three statements in Q1 and on valuation in Q2 all get used from the other side this quarter.',
  '2. 三大決策地圖：本季的目錄':
    '2. The map of the three big decisions: this quarter\'s table of contents',
  '目標函數：極大化公司長期價值':
    'Objective function: maximize the company\'s long-term value',
  '錢投到哪裡？':
    'Where does the money go?',
  'W41 資本預算 NPV／IRR':
    'W41 Capital budgeting: NPV / IRR',
  'W45 營運資金':
    'W45 Working capital',
  'W47 併購':
    'W47 Mergers and acquisitions',
  '錢從哪裡來？':
    'Where does the money come from?',
  'W42 資金成本 WACC':
    'W42 Cost of capital: WACC',
  'W43 資本結構':
    'W43 Capital structure',
  'W48 資金調度與避險':
    'W48 Funding and hedging',
  '賺的錢怎麼分？':
    'How are the profits split?',
  'W44 現金股利 vs 庫藏股':
    'W44 Cash dividends vs buybacks',
  'W46 財務規劃把三者串成預算　·　W49 治理、W50 稅務、W51 投資人關係＝三大決策的邊界條件':
    'W46 Financial planning ties the three into a budget · W49 Governance, W50 Tax and W51 Investor relations = the boundary conditions of the three decisions',
  '三者互鎖':
    'The three interlock',
  '：投資案值不值得做，取決於資金成本（融資決定的）；能配多少股利，取決於投資需要留多少錢。':
    ': whether a project is worth doing depends on the cost of capital (set by the financing decision); how much dividend can be paid depends on how much the investments need to keep.',
  '順序上投資決策優先':
    'Investment comes first in order',
  '——先看有沒有報酬高於 WACC 的案子，融資與股利配合它。':
    ' — first see whether any project earns more than WACC; financing and dividends follow it.',
  '分錄分類台：這是哪一種決策？':
    'Journal entry sorting desk: which decision is this?',
  '七筆飲料店後來的交易。每一筆背後，都是三大決策之一。':
    'Seven later transactions at the drinks shop. Behind every one of them is one of the three big decisions.',
  '第 1／7 筆':
    'Transaction 1/7',
  '下一筆 →':
    'Next transaction →',
  '目前答對 0 題':
    'Correct so far: 0',
  '3. 目標函數：極大化「長期價值」，不是別的':
    '3. The objective function: maximize "long-term value", nothing else',
  'CFO 教科書的第一原則，也是實務中最常被違反的：':
    'The first principle of CFO textbooks, and the one most often violated in practice:',
  '不是極大化 EPS':
    'Not maximizing EPS',
  '——買回庫藏股、砍研發都能推高 EPS，卻可能毀滅價值（W5 的 EPS 操縱，換邊看就是誘惑）':
    ' — buybacks and R&D cuts can both push EPS up yet may destroy value (W5\'s EPS manipulation is, seen from the other side, the temptation)',
  '不是極大化短期股價':
    'Not maximizing the short-term share price',
  '——市場先生的報價（W21）不該指揮公司經營；為了本季財測砍長期投資，是代理問題的經典款':
    ' — Mr. Market\'s quote (W21) should not run the company; cutting long-term investment to hit this quarter\'s guidance is a classic agency problem',
  '不是極大化規模':
    'Not maximizing size',
  '——帝國建造（W47 併購動機的黑暗面）：營收翻倍但 ROIC 低於 WACC，等於越大越毀滅價值（W9 的鐵律，現在是你的經營約束）':
    ' — empire building (the dark side of the motives for M&A, W47): revenue doubles but ROIC is below WACC, so the bigger it gets, the more value it destroys (W9\'s iron law, now your operating constraint)',
  '第三個「不是」最反直覺：帳上明明每年都賺錢，怎麼會是在毀滅價值？因為帳上的淨利沒有扣掉':
    'The third "not" is the most counterintuitive: the books show a profit every year, so how can the company be destroying value? Because net income does not deduct ',
  '股東資金的成本':
    'the cost of shareholders\' money',
  '。用下面的計算機看一次：':
    '. Try it with the calculator below:',
  '帝國建造計算機':
    'Empire-Building Calculator',
  '一家公司投入資本 100 億，每年把資本擴張 g%。經濟利潤 ＝（ROIC − WACC）× 投入資本，累計 5 年。':
    'A company has invested capital of NT$10 billion and expands its capital by g% a year. Economic profit = (ROIC − WACC) × invested capital, cumulated over 5 years.',
  'ROIC 6%・快速擴張':
    'ROIC 6% · fast expansion',
  'ROIC 6%・不擴張':
    'ROIC 6% · no expansion',
  'ROIC 12%・快速擴張':
    'ROIC 12% · fast expansion',
  '每年資本擴張':
    'Annual capital expansion',
  '5 年後規模':
    'Size after 5 years',
  '投入資本（億）':
    'Invested capital (NT$100m)',
  '5 年帳面獲利':
    '5-year book profit',
  'ROIC × 資本（億）':
    'ROIC × capital (NT$100m)',
  '5 年經濟利潤':
    '5-year economic profit',
  '扣掉資金成本後（億）':
    'After the cost of capital (NT$100m)',
  '投資人視角的翻譯':
    'The investor\'s translation',
  '：一家公司的資本配置紀律，全寫在「ROIC 對 WACC」與「現金流向」裡。Buffett 說 CEO 最重要的工作是資本配置（W24）——本季你學的，就是這門手藝的技術規格。':
    ': a company\'s capital-allocation discipline is all written in "ROIC versus WACC" and "where the cash goes". Buffett says a CEO\'s most important job is capital allocation (W24) — what you learn this quarter is the technical specification of that craft.',
  '4. CFO 的職能全景：不只三大決策':
    '4. The CFO\'s full range of duties: more than the three big decisions',
  '職能':
    'Function',
  '內容':
    'What it covers',
  '對應週':
    'Related weeks',
  '財務規劃（FP&amp;A）':
    'Financial planning (FP&amp;A)',
  '預算、預測、滾動修正':
    'Budgets, forecasts, rolling revisions',
  '資金（Treasury）':
    'Treasury',
  '現金水位、銀行關係、匯率利率避險':
    'Cash levels, bank relationships, FX and interest-rate hedging',
  '會計與控制':
    'Accounting and control',
  '財報產出、內控——你在 Q1 讀的報表就是這裡做的':
    'Producing the financial statements, internal controls — the statements you read in Q1 are made here',
  'Q1 換邊':
    'Q1, from the other side',
  '稅務':
    'Tax',
  '合法節稅結構':
    'Legitimate tax-saving structures',
  '投資人關係':
    'Investor relations',
  '法說會、年報、跟你這種分析師過招':
    'Earnings calls, annual reports, and going toe to toe with analysts like you',
  '治理介面':
    'Governance interface',
  '對董事會、審計委員會負責':
    'Accountable to the board and the audit committee',
  'CEO 講故事，CFO 負責讓故事對得起數字——同時是煞車（風控），也是變速箱（資源配置）。':
    'The CEO tells the story; the CFO makes sure the story is true to the numbers — both the brake (risk control) and the gearbox (resource allocation).',
  '5. 雙面視角：本季的學習方法':
    '5. The two-sided view: how we learn this quarter',
  '每個主題都用兩面讀——這是 W52 雙報告期末專題的預演：':
    'Read every topic from both sides — a rehearsal for the W52 dual-report capstone:',
  '主題':
    'Topic',
  'CFO 問':
    'The CFO asks',
  '投資人問（你已經會的）':
    'The investor asks (what you can already do)',
  '資本預算':
    'Capital budgeting',
  '這案子 NPV 大於 0 嗎？':
    'Is this project\'s NPV greater than 0?',
  '它過去的大投資回收了嗎？（W7 資本支出 vs 折舊）':
    'Did its past big investments pay back? (W7 capex vs depreciation)',
  '資本結構':
    'Capital structure',
  '借多少最適？':
    'How much debt is optimal?',
  '它的槓桿撐得住衰退嗎？（W6 有息負債）':
    'Can its leverage survive a recession? (W6 interest-bearing debt)',
  '股利':
    'Dividends',
  '該留還是該發？':
    'Keep the money or pay it out?',
  '留下的錢有賺到高於 WACC 嗎？（W9 ROIC）':
    'Is the retained money earning more than WACC? (W9 ROIC)',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「CFO 就是會計主管。」':
    '"A CFO is just the head of accounting."',
  '會計是看後照鏡（記錄已發生），CFO 的主業是看擋風玻璃（配置未來資源）；會計只是其中一個部門。':
    'Accounting looks in the rear-view mirror (recording what has already happened); the CFO\'s main job is looking through the windshield (allocating future resources). Accounting is only one of the departments.',
  '「公司現金多，就該發股利。」':
    '"If a company has a lot of cash, it should pay dividends."',
  '要先過投資決策這關：有 ROIC 高於 WACC 的機會就該留（台積電模式）；沒有才輪到還錢給股東（W44 詳談）。順序錯了，就是資本配置失能。':
    'It has to pass the investment decision first: if there are opportunities with ROIC above WACC, keep the cash (the TSMC model); only when there are none does it come to returning money to shareholders (W44 covers this in detail). Get the order wrong and that is a failure of capital allocation.',
  '「財務長只對老闆負責。」':
    '"The CFO answers only to the boss."',
  '法律上對':
    'Legally, he answers to ',
  '公司與全體股東':
    'the company and all its shareholders',
  '負責（受託義務，W35 的公司版）。歷史上最大的財報弊案，幾乎都始於 CFO 對老闆的過度忠誠——W49 案例課的預告。':
    ' (fiduciary duty, the corporate version of W35). Historically, almost every major accounting scandal began with a CFO\'s excessive loyalty to the boss — a preview of the W49 case lesson.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '公司金融的地圖與你的實習公司':
    'The map of corporate finance, and your practice company',
  '50 分鐘':
    '50 min',
  '《Principles of Corporate Finance》第 1 章':
    'Principles of Corporate Finance, Chapter 1',
  'Brealey、Myers、Allen 的經典教科書：公司金融的目標函數與三大決策。本季正式開讀。':
    'Brealey, Myers and Allen\'s classic textbook: the objective function of corporate finance and the three big decisions. We formally start reading it this quarter.',
  '40 分鐘':
    '40 min',
  'Damodaran：Corporate Finance 課程第 1 講':
    'Damodaran: Corporate Finance course, Lecture 1',
  '他的「corporate finance in one picture」框架圖值得抄進筆記——本季所有週次都掛在那張圖上。':
    'His "corporate finance in one picture" framework is worth copying into your notes — every week this quarter hangs off that picture.',
  '20 分鐘':
    '20 min',
  '選定 Q4 實習公司':
    'Pick your Q4 practice company',
  '建議沿用你的目標公司（W13 到 W26 一路分析的那家），或台積電。翻開最新年報的「致股東報告書」與「營運概況」，標出它去年做的三大決策各一例。':
    'We suggest reusing your target company (the one you have analyzed all the way from W13 to W26), or TSMC. Open the latest annual report\'s "Letter to Shareholders" and "Operations Overview", and mark one example of each of the three big decisions it made last year.',
  '選讀':
    'Optional',
  '一篇台灣上市公司財務長的深度訪談':
    'An in-depth interview with the CFO of a Taiwan-listed company',
  '搜「財務長 專訪」，聽實務者自述工作內容。':
    'Search for a CFO interview and hear a practitioner describe the job in their own words.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '實習公司的三大決策考古':
    'Archaeology of your practice company\'s three big decisions',
  '：年報裡找出去年最大的資本支出項目（蓋廠？併購？）——金額多少？公司給的理由是什麼？W41 起你會學怎麼驗證它划不划算':
    ': in the annual report, find last year\'s largest capital spending item (a new plant? an acquisition?) — how much was it? What reason did the company give? From W41 on you will learn how to check whether it was worth it',
  '：資產負債表看資金結構（W6 的技能）——有息負債／權益比？去年有沒有發債、增資、還款？':
    ': read the capital structure from the balance sheet (a W6 skill) — what is the interest-bearing debt to equity ratio? Last year, did it issue bonds, raise equity or repay debt?',
  '：去年 EPS 與每股股利 → 配發率 ＿%；跟五年前比，趨勢如何？':
    ': last year\'s EPS and dividend per share → payout ratio ____%; how does the trend compare with five years ago?',
  '寫 200 字：「如果我是這家公司的 CFO，三個決策裡我最想重新檢視的是＿＿，因為＿＿」':
    'Write 200 words: "If I were this company\'s CFO, the one of the three decisions I would most want to re-examine is ____, because ____"',
  '飲料店複習':
    'Drinks shop review',
  '（10 分鐘）：把第 4 週的分錄用 CFO 語言重新標註一遍（講義第 1 節的表，自己做一次）':
    ' (10 minutes): relabel the Week 4 journal entries in CFO language (the table in section 1 of the notes — do it yourself once)',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '帝國建造計算機預設（ROIC 6%、WACC 8%、每年擴張 15%）：5 年後規模 201.1 億（翻倍）、帳面累計獲利 40.5 億，經濟利潤卻是 −13.5 億；按「不擴張」，經濟利潤是 −10.0 億——':
    'The Empire-Building Calculator defaults (ROIC 6%, WACC 8%, 15% expansion a year): size after 5 years NT$20.11 billion (doubled), cumulative book profit NT$4.05 billion, yet economic profit of −NT$1.35 billion; press "no expansion" and economic profit is −NT$1.00 billion — ',
  '擴張得越快，毀滅得越多':
    'the faster you expand, the more value you destroy',
  '。按「ROIC 12%」則是 +27.0 億。':
    '. Press "ROIC 12%" and it is +NT$2.70 billion.',
  '實習公司三大決策各有一個具體實例（含金額）':
    'Each of the practice company\'s three big decisions has one concrete example (with amounts)',
  '200 字 CFO 視角短評完成':
    'The 200-word short commentary from the CFO\'s point of view is done',
  '能畫出三大決策地圖與互鎖關係':
    'I can draw the map of the three big decisions and how they interlock',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '為什麼說三大決策裡「投資決策優先」？':
    'Why do we say "the investment decision comes first" among the three big decisions?',
  '→ 融資的目的是替好案子找錢、股利是把用不完的錢還給股東——兩者都在回應「有沒有 ROIC 高於 WACC 的案子」。先決定配息再找投資機會，等於先把彈藥發掉再看要不要打仗。':
    '→ Financing exists to find money for good projects, and dividends return the money you can\'t use to shareholders — both respond to the question "is there a project with ROIC above WACC?". Deciding the dividend before looking for investments is like firing off your ammunition before deciding whether to go to war.',
  '公司每年都有淨利，為什麼還可能在毀滅價值？':
    'A company earns a net profit every year, so how can it still be destroying value?',
  '→ 淨利只扣了債權人的利息，沒扣':
    '→ Net income deducts only the interest paid to creditors, not ',
  '股東資金的機會成本':
    'the opportunity cost of shareholders\' money',
  '。ROIC 低於 WACC 時，每多投入一塊錢，賺的都不夠付資金成本——帳上賺錢、經濟上虧錢；擴張越快，毀得越多。':
    '. When ROIC is below WACC, every extra dollar invested earns less than the cost of capital — profitable on the books, loss-making in economic terms; the faster the expansion, the more is destroyed.',
  '買回庫藏股推高了 EPS，股東一定受益嗎？':
    'A buyback pushed EPS up. Do shareholders necessarily benefit?',
  '→ 不一定。EPS 上升可能只是分母變小；如果買回價格高於內在價值，等於拿留下來的股東的錢，高價買走離開的股東的股份——價值反而轉移出去。W44 會詳談判斷方法。':
    '→ Not necessarily. EPS can rise just because the denominator got smaller; if the buyback price is above intrinsic value, you are using the remaining shareholders\' money to buy out the departing shareholders at a high price — value is transferred out instead. W44 covers how to judge this.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '我們家的財務長':
    'Our family\'s CFO',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（家庭財務長）':
    'Opening (the family CFO)',
  '「我們家其實一直有一位 CFO——就是管三個問題的人：':
    '"Our family has actually always had a CFO — the person who handles three questions: ',
  '錢投到哪':
    'where the money goes',
  '（買房？裝修？進修？）、':
    ' (buy a house? renovate? study?), ',
  '錢從哪來':
    'where the money comes from',
  '（存款？房貸？）、':
    ' (savings? a mortgage?), ',
  '賺的錢怎麼分':
    'how the profits are split',
  '（存起來？花掉？孝親？）。公司的財務長，管的是一模一樣的三個問題，只是多幾個零。」':
    ' (save it? spend it? support the parents?). A company\'s CFO handles exactly the same three questions, just with a few more zeros."',
  '核心演示（飲料店回歸）':
    'Core demonstration (back to the drinks shop)',
  '「還記得我們的飲料店嗎？第一個月就做了全部三個決策：老闆掏 50 萬（錢從哪來）、花 20 萬買設備（投到哪）、賺的 26,667 全留著（怎麼分）。':
    '"Remember our drinks shop? In the first month it made all three decisions: the owner put in NT$500,000 (where the money comes from), spent NT$200,000 on equipment (where it goes), and kept all of the NT$26,667 profit (how it\'s split). ',
  '接下來三個月，我會學怎麼把這三個決定做得像上市公司一樣嚴謹':
    'Over the next three months I will learn to make these three decisions as rigorously as a listed company',
  '——然後你會發現，我們家的財務決定也能用同一套方法。」':
    ' — and then you will see that our family\'s own financial decisions can use the same method."',
  '互動（家庭三決策盤點）':
    'Interactive (the family\'s three-decision inventory)',
  '「來當一次家庭 CFO：我們家現在最大的『投資決策』是什麼？『融資結構』——房貸佔比健康嗎？每月結餘的『配發政策』——多少進投資、多少當生活品質？」':
    '"Let\'s be the family CFO for a moment: what is our family\'s biggest \'investment decision\' right now? On \'financing structure\' — is the mortgage share healthy? And for the monthly surplus\'s \'payout policy\' — how much goes to investing and how much to quality of life?"',
  '把答案記下來。Q4 結束時回頭看，家人會發現自己已經在用公司金融的語言思考。':
    'Write the answers down. When Q4 ends, look back — your family will find they are already thinking in the language of corporate finance.',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「學這個對投資有什麼用？」':
    '"What use is learning this for investing?"',
  '「知道好 CFO 怎麼想，就看得出哪家公司的錢被聰明地用——Buffett 說，挑公司挑的就是挑資本配置的人。」':
    '"Knowing how a good CFO thinks lets you see which company\'s money is being used wisely — Buffett says picking a company is really picking the people who allocate its capital."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫三大決策地圖，以及目標函數的三個「不是」':
    'I can write the map of the three big decisions from memory, plus the three "nots" of the objective function',
  '實習公司三決策考古完成':
    'The archaeology of the practice company\'s three decisions is done',
  '飲料店分錄的 CFO 重標註完成':
    'The CFO relabeling of the drinks-shop journal entries is done',
  '分享環節完成（家庭三決策盤點），記錄卡住的點':
    'The teach-it step is done (the family\'s three-decision inventory); I noted where I got stuck',
  '回填 curriculum/01-overview.md 第 40 週進度欄':
    'Fill in the Week 40 progress column of curriculum/01-overview.md',
  '下週預告 · Week 41：資本預算':
    'Next week · Week 41: Capital budgeting',
  '——三大決策的第一個：NPV 與 IRR，「這個案子該不該投」的數學。你會發現它就是 W20 的 DCF 換了主詞。':
    ' — the first of the three decisions: NPV and IRR, the math of "should we take this project?" You will find it is just W20\'s DCF with a different subject.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：Q3 期末專題':
    'Previous week: The Q3 capstone project',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle light / dark theme',
  '猜一個答案':
    'Pick an answer',
  '三大決策地圖':
    'Map of the three big decisions',
  '答對了——投資決策優先。有報酬高於資金成本（ROIC > WACC）的機會就該留著用；沒有，才輪到用股利或庫藏股把錢還給股東。順序錯了，就是資本配置失能。':
    'Correct — the investment decision comes first. If there are opportunities that earn more than the cost of capital (ROIC > WACC), keep the money to use; only if there are none does it come to returning the money to shareholders through dividends or buybacks. Get the order wrong and that is a failure of capital allocation.',
  '財務長第一個該問的是：有沒有報酬高於資金成本（ROIC > WACC）的投資機會？有就該留著用；沒有，才輪到用股利或庫藏股還給股東。只為推高 EPS 而買回，可能反而毀滅價值。':
    'The first question the CFO should ask is: are there investment opportunities that earn more than the cost of capital (ROIC > WACC)? If yes, keep the money to use; only if not does it come to returning it to shareholders through dividends or buybacks. A buyback done just to push up EPS can actually destroy value.',
  '向銀行借款 30 萬，年利率 3%。':
    'Borrows NT$300,000 from the bank at 3% a year.',
  '錢從哪裡來——借款改變了資本結構（負債從 0 變成 30 萬），這是 W42–43 的主題。':
    'Where the money comes from — the loan changes the capital structure (debt goes from 0 to NT$300,000); this is the topic of W42–43.',
  '花 80 萬頂下隔壁的店面，開第二家分店。':
    'Spends NT$800,000 to take over the shop next door and open a second branch.',
  '錢投到哪裡——擴點就是一個資本預算案：未來的現金流折現回來，值不值 80 萬？（W41；若是買下別人的公司，就是 W47 併購。）':
    'Where the money goes — expanding is a capital budgeting project: discount the future cash flows back, are they worth NT$800,000? (W41; if it were buying someone else\'s company, that would be W47, mergers and acquisitions.)',
  '年底宣布：每股發放現金股利 2 元。':
    'At year end, announces a cash dividend of NT$2 per share.',
  '賺的錢怎麼分——發出去，就代表公司判斷手上沒有更好的投資機會（W44）。':
    'How the profits are split — paying it out means the company judges it has no better investment opportunity on hand (W44).',
  '夏天前多進一批茶葉與杯子，存貨從 3 萬增加到 8 萬。':
    'Before summer, stocks up on extra tea leaves and cups; inventory rises from NT$30,000 to NT$80,000.',
  '投資決策——而且是最常被忽略的一種：營運資金。錢被卡在存貨裡，跟買設備一樣是在「投資」（W45）。':
    'An investment decision — and the most commonly overlooked kind: working capital. Money tied up in inventory is "invested" just like money spent on equipment (W45).',
  '找朋友入股 20 萬，對方取得兩成股權。':
    'A friend buys in for NT$200,000 and receives a 20% stake.',
  '融資決策——用權益而不是負債籌錢。代價是未來的獲利要分兩成出去（W42 的權益成本）。':
    'A financing decision — raising money with equity rather than debt. The price is that 20% of future profits must be shared out (W42\'s cost of equity).',
  '用公司的閒錢，向一位小股東買回他持有的股份。':
    'Uses the company\'s idle cash to buy back the shares held by one small shareholder.',
  '股利決策的另一種形式：庫藏股。把現金還給股東，只是方式不同——W44 會比較兩者。':
    'Another form of the dividend decision: the buyback (treasury stock). Cash goes back to shareholders, just by a different route — W44 compares the two.',
  '提前還清銀行借款，省下利息。':
    'Repays the bank loan early, saving interest.',
  '融資決策——降低負債比例。省利息是好事，但也放棄了槓桿的稅盾（W43 的取捨）。':
    'A financing decision — lowering the debt ratio. Saving interest is good, but it also gives up the leverage tax shield (W43\'s trade-off).',
  '第':
    'Transaction',
  '筆':
    '',
  '重新開始——目前答對 0 題':
    'Starting over — correct so far: 0',
  '答對——':
    'Correct — ',
  '再想想——':
    'Think again — ',
  '這是':
    'the category is: ',
  '重新開始 ↺':
    'Restart ↺',
  '目前答對':
    'Correct so far:',
  '題':
    '',
  '<b>帳上 5 年賺了':
    '<b>Over 5 years the books show a profit of',
  '億，扣掉資金成本卻毀掉':
    '(NT$100m), but after the cost of capital you have destroyed',
  '億。</b>':
    '(NT$100m).</b>',
  '規模變成':
    'Scale becomes',
  '倍——ROIC 低於 WACC 時，擴張越快，毀滅越多。報紙會寫「營收創新高」。':
    'times as large — when ROIC is below WACC, the faster you expand, the more value you destroy. The papers will write "record revenue".',
  '不擴張也在流失價值；這時候最好的資本配置，可能是把錢還給股東。':
    'Not expanding is also bleeding value; at this point the best capital allocation may be to return the money to shareholders.',
  '<b>ROIC 剛好等於 WACC：怎麼擴張都不創造、也不毀滅價值。</b>成長本身沒有意義，成長的「品質」才有。':
    '<b>ROIC exactly equals WACC: however you expand, you neither create nor destroy value.</b> Growth itself means nothing; the quality of growth is what counts.',
  '<b>ROIC 高於 WACC：每投入一塊錢都在創造價值，5 年累計 +':
    '<b>ROIC is above WACC: every dollar invested creates value, a 5-year cumulative +',
  '這時候擴張是對的——這就是台積電把錢留著蓋廠、而不是全部發掉的理由。':
    'Expanding is right in this case — and this is why TSMC keeps its cash to build plants rather than paying it all out.',
  '這時候不擴張反而可惜——有好案子卻把錢閒著，也是資本配置失能。':
    'Not expanding is a pity in this case — having good projects and leaving the money idle is also a failure of capital allocation.',
  '✓ 換好位子了——下週學 CFO 的第一個工具：NPV。':
    '✓ You are in the new seat — next week, the CFO\'s first tool: NPV.',
};
