/*
 * 給家人的投資課 Week 14：資產配置 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-14-asset-allocation.html
 *
 * 沿用 week-01 的慣例。本週要注意的：
 *
 * ⚠ 配置模擬器的「萬」分兩種語境
 *   統計卡（30 年後／帳面剩下）走 week-01 的慣例：值的後綴剝成空字串，
 *   單位掛回標籤 —— "After 30 years (from NT$1M, in NT$10k)"。
 *   但下方那段 verdict 是 JS 現拼的**句子**（"…帳面剩 69 萬（−31%）。"），
 *   句子裡不能只留裸數字，也不能重算成 NT$690k（數字由 JS 產生），
 *   所以用 "× NT$10k" 當單位標記："69 × NT$10k, a drop of −31%."
 *   兩種語境各用各的慣例，和 week-01 對散文／表格的分法同一個道理。
 *
 * ⚠ 「煮一鍋好湯的比例」同時是 h2 與句中的 <strong>
 *   一個 key 只有一個譯文，所以譯成可當標題的 "The proportions in a good pot
 *   of soup"，再把前一段片段改寫成句號收尾（'「配置像' → '"Think of
 *   allocation this way. '），避免句中冒出大寫。
 *
 * ⚠ KEEP：「站內搜『資產配置』」的搜尋字保留中文
 *   那是要輸進中文站內搜尋框的字串，翻成英文就搜不到；後面補括號釋義。
 *   綠角財經筆記用該站自己的英文名 Green Horn Finance Footnote
 *   （出處：站點網域 greenhornfinancefootnote.blogspot.com）。
 *   《漫步華爾街》用原著名 A Random Walk Down Wall Street。
 *
 * ⚠ 已知限制（與 week-01 相同）：`</strong>。` 這類全形標點自成文字節點者，
 *   不在抽取器的 CJK 範圍內，抽不到也換不掉。
 *
 * 語域：寫給家人的教材。煮湯、雞蛋籃子、「寫給自己的信」要保住溫度。
 */

export const KEEP = ['資產配置'];
export const ADDED = [];
export const INCOMPLETE = false;

export const MAP = {
  /* ── 頁首導覽 ── */
  '← 課程首頁': '← Course home',
  '① 講義': '① Notes',
  '② 導讀': '② Reading',
  '③ 練習': '③ Exercise',
  '④ 分享': '④ Teach it',
  '⑤ 檢核': '⑤ Checklist',
  '單元導航': 'Section navigation',
  '切換深淺主題': 'Toggle light / dark theme',

  /* ── 標題區 ── */
  '給家人的投資課 · Q2 投資人季 · Week 14':
    'Family Investing Course · Q2 The Investor · Week 14',
  '資產配置——股債現金與風險承受度':
    'Asset Allocation — Stocks, Bonds, Cash and Risk Tolerance',
  'Q2 開場就是全年最重要的單一決定：你的錢，股票、債券、現金各擺多少。':
    'Q2 opens with the single most important decision of the year: how much of your money goes into stocks, into bonds, and into cash.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  'Q1 完成': 'Q1 completed',
  '52 週 · 第 14 週': '52 weeks · Week 14',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  'Brinson 研究說配置解釋組合波動的九成。本週的產出是 W18 投資政策聲明書（IPS）的核心、W27 模擬組合的藍圖。':
    "The Brinson study says allocation explains nine tenths of a portfolio's volatility. What you produce this week becomes the core of the investment policy statement (IPS) in W18 and the blueprint for the simulated portfolio in W27.",
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週 Capstone 演示時家人卡住的點——健檢結論對方複述得出來嗎、「相親第一印象 ≠ 結婚」的比喻有沒有講通。':
    'Think back to where your family got stuck during last week\'s capstone walkthrough — could they repeat the health-check conclusion back to you, and did the "a good first impression on a blind date is not marriage" metaphor land?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '著名的 Brinson 研究：一個投資組合的長期波動，九成由什麼解釋？':
    "The famous Brinson study: what explains nine tenths of a portfolio's long-run volatility?",
  '猜一個答案': 'Pick an answer',
  '選股功力': 'Skill at picking stocks',
  '進出場時機': 'Timing your entries and exits',
  '資產配置比例': 'The asset allocation weights',
  '答對了——Brinson 等人的研究顯示，組合報酬的波動九成由資產配置比例解釋；選股與擇時的貢獻遠小於多數人的想像。所以本週做的是全年最重要的單一決定：股債現金各擺多少。':
    'Correct — Brinson and colleagues found that nine tenths of the variation in portfolio returns is explained by the asset allocation weights; stock picking and timing contribute far less than most people imagine. So this week you make the single most important decision of the year: how much goes into stocks, bonds and cash.',
  '多數人都這樣猜——但 Brinson 等人的研究顯示，組合報酬的波動九成由「資產配置比例」解釋；選股與擇時的貢獻遠小於想像。所以本週做的不是選股，是全年最重要的單一決定：股債現金各擺多少。':
    'Most people guess that — but Brinson and colleagues found that nine tenths of the variation in portfolio returns is explained by the asset allocation weights; stock picking and timing contribute far less than you would think. So this week is not about picking stocks. It is the single most important decision of the year: how much goes into stocks, bonds and cash.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 順序不能錯：預備金 → 配置 → 選標的':
    '1. The order matters: emergency fund → allocation → picking what to hold',
  '任何配置討論之前，先確認': 'Before any discussion of allocation, settle the ',
  '緊急預備金': 'emergency fund',
  '：6–12 個月的家庭必要支出，放在活存／定存，':
    ': 6–12 months of essential household spending, held in a savings or time deposit account, and ',
  '不屬於投資組合': 'not counted as part of the portfolio',
  '。它的功能是「讓你在市場最糟的時候不必賣股票付房租」——沒有預備金的人，任何配置都撐不過第一次衰退（W12 學的：最好的日子緊跟著最恐慌的日子，被迫下車就全錯過）。':
    '. Its whole job is to make sure you never have to sell stocks to pay the rent at the worst possible moment. Without one, no allocation survives its first recession (from W12: the best days come right on the heels of the most panicked ones, and if you are forced out you miss every one of them).',

  /* ── 三類資產 ── */
  '2. 三類資產的角色分工': '2. What each of the three asset classes is for',
  '資產': 'Asset',
  '角色': 'Role',
  '長期報酬量級*': 'Long-run return, order of magnitude*',
  '波動量級*': 'Volatility, order of magnitude*',
  '股票': 'Equities',
  '成長引擎': 'The growth engine',
  '名目 6–10%／年': '6–10% a year, nominal',
  '年波動 15–20%，大回檔 −30～−50%':
    '15–20% a year, with big drawdowns of −30 to −50%',
  '債券（投資級）': 'Bonds (investment grade)',
  '減震器＋現金流': 'Shock absorber, plus cash flow',
  '名目 2–5%／年': '2–5% a year, nominal',
  '年波動 4–8%（2022 例外年 −15% 級）':
    '4–8% a year (2022 was the exception year, around −15%)',
  '現金／短債': 'Cash / short-term bonds',
  '彈藥＋安全墊': 'Ammunition, plus a cushion',
  '約略追平或小輸通膨': 'Roughly keeps up with inflation, or loses to it slightly',
  '* 依據長期歷史（美國市場百年級數據；台股歷史較短、波動更大）。':
    "* Based on long history (a century of US market data; Taiwan's record is shorter and more volatile). ",
  '這是量級不是保證': 'These are orders of magnitude, not guarantees',
  '——練習會要求你查一份原始資料校準。':
    ' — the exercise will ask you to look up a primary source and calibrate them.',

  /* ── 配置模擬器 ── */
  '3. 親手拉一次：配置模擬器': '3. Drag it yourself: the allocation simulator',
  '配置就是在「長期報酬」與「你撐不撐得住的回檔」之間定價。拉動比例，看':
    'Allocation is pricing the trade between long-run return and the drawdown you can actually sit through. Drag the weights and watch ',
  '期望報酬、30 年終值、2008 重演的損失金額':
    'the expected return, the 30-year value and what a repeat of 2008 would cost you',
  '怎麼變：': ' move:',
  '配置模擬器（假設投入 100 萬）':
    'Allocation simulator (assumes NT$1 million invested)',
  '60/40 經典': '60/40, the classic',
  '90/10 年輕滑降起點': '90/10, the young end of a glide path',
  '債券': 'Bonds',
  '股票比例': 'Equity weight',
  '債券比例': 'Bond weight',
  '股': 'Stocks',
  '債': 'Bonds',
  '現金': 'Cash',
  '期望報酬（量級）': 'Expected return (order of magnitude)',
  /* 統計卡：值的單位後綴剝掉，單位掛回標籤（見檔頭） */
  '%／年': '%/yr',
  '<small>%／年</small>': '<small>%/yr</small>',
  '30 年後（100 萬 →）': 'After 30 years (from NT$1M, in NT$10k)',
  '萬': '',
  '<small> 萬</small>': '<small></small>',
  '2008 重演（一年）': 'A repeat of 2008 (one year)',
  '帳面剩下': 'What is left on paper (NT$10k)',
  '量級假設：期望報酬用股 7%／債 4%／現金 1.5%（講義量級中值）；「2008 重演」用股 −46%／債 +5%／現金 +1%（2008 年美股跌幅量級）。皆為歷史量級，非預測、非保證。':
    'Assumptions: expected returns of 7% for equities, 4% for bonds and 1.5% for cash (the midpoints of the ranges in the notes); the "repeat of 2008" uses −46% for equities, +5% for bonds and +1% for cash (the order of magnitude of the 2008 US fall). All are historical magnitudes — not forecasts, not guarantees.',
  /* verdict 是 JS 現拼的句子，單位用 × NT$10k（見檔頭） */
  '<b>心理測試：</b>2008 重演時帳面剩':
    '<b>A psychological test:</b> a repeat of 2008 leaves you with',
  '萬（−': '× NT$10k, a drop of −',
  '%）。看著這個金額問自己：那天我會加碼、抱住、還是睡不著砍掉？<strong>撐不住的配置，期望報酬再高都領不到。</strong>':
    '%. Look at that amount and ask yourself: on that day, would I buy more, hold on, or lie awake and sell? <strong>An allocation you cannot sit through never pays you its expected return, however high that return looks.</strong>',
  '<b>中間地帶：</b>2008 重演約剩':
    '<b>The middle ground:</b> a repeat of 2008 leaves roughly',
  '萬——長期報酬與回檔的折衷帶，經典 60/40 就落在這裡。記得 2022 股債齊跌是這類配置的例外年。':
    '× NT$10k — the compromise zone between long-run return and drawdown, and where the classic 60/40 sits. Remember that 2022, when stocks and bonds fell together, was the exception year for this kind of mix.',
  '<b>保守端：</b>回檔淺（剩':
    '<b>The conservative end:</b> the drawdown is shallow (you keep',
  '萬），但 30 年終值也縮到':
    '× NT$10k), but the 30-year value also shrinks to',
  '萬。回 W2：太保守的配置，輸給的不是市場，是通膨。<strong>夠了就是夠了——但先確認真的夠。</strong>':
    '× NT$10k. Back to W2: an allocation that is too conservative does not lose to the market, it loses to inflation. <strong>Enough really is enough — but make sure it genuinely is enough first.</strong>',
  '兩個內建劇本的對照：': 'Compare the two built-in presets: ',
  '70/20/10 與 40/50/10 的期望報酬只差 0.9%':
    '70/20/10 and 40/50/10 differ by only 0.9% in expected return',
  '（5.85% vs 4.95%）——但拉 30 年，100 萬的終值是 550 萬 vs 426 萬；反過來，2008 重演時一個 −31%、一個 −16%。':
    ' (5.85% against 4.95%) — but stretch that over 30 years and NT$1 million ends at NT$5.5 million against NT$4.26 million. In the other direction, a repeat of 2008 costs one of them −31% and the other −16%. ',
  '看著「帳面剩下」那格金額做決定，不要看百分比。':
    'Make the decision looking at the amount in the "what is left on paper" box, not at the percentage.',

  /* ── 風險承受度三要素 ── */
  '4. 風險承受度的三要素（誠實作答）':
    '4. The three components of risk tolerance (answer honestly)',
  '點三張卡，每一張都要誠實回答——':
    'Tap the three cards and answer each one honestly — ',
  '然後取最保守的那個': 'then go with the most conservative of the three',
  '風險承受度三要素': 'The three components of risk tolerance',
  '① 風險能力': '① Risk capacity',
  '客觀': 'Objective',
  '② 風險需求': '② Risk need',
  '目標倒推': 'Worked back from your goal',
  '③ 心理承受': '③ Risk temperament',
  '主觀 · 最常被高估': 'Subjective · the one people most often overrate',
  '① 風險能力（客觀）': '① Risk capacity (objective)',
  '時間水平（幾年後要用這筆錢？）、收入穩定度、負債、年齡。時間 >10 年＋收入穩＝能力高。':
    'Time horizon (how many years before you need this money?), income stability, debt, age. More than 10 years plus a steady income means high capacity.',
  '自問：這筆錢最快幾年後會用到？失業半年，生活撐得住嗎？':
    'Ask yourself: how soon might I need this money? If I were out of work for six months, could we get by?',
  '② 風險需求（目標倒推）': '② Risk need (worked back from your goal)',
  '你的財務目標需要多少報酬？若 4% 就達標，不必為了 8% 冒 −50% 的險——夠了就是夠了。':
    'What return does your financial goal actually require? If 4% gets you there, you do not need to risk −50% chasing 8% — enough is enough.',
  '自問：我的目標（退休金／教育金）倒推回來，年化需要幾 %？':
    'Ask yourself: working back from my goal (retirement, education), what annual return do I actually need?',
  '③ 心理承受（主觀 · 最常被高估）':
    '③ Risk temperament (subjective · the one people most often overrate)',
  '帳面 −40%（100 萬剩 60 萬）你會加碼、抱住、還是睡不著砍掉？牛市裡人人自認勇敢。':
    'Down 40% on paper — NT$1 million becomes NT$600,000. Would you buy more, hold on, or lie awake and sell? In a bull market everyone thinks they are brave.',
  '自問：2022 或任何大跌時，我真實做了什麼？（用行為當證據，不用想像）':
    'Ask yourself: in 2022, or in any big fall, what did I actually do? (Use your behaviour as the evidence, not your imagination.)',
  '三者取最保守：': 'Go with the most conservative of the three: ',
  '配置錯在太保守，少賺；錯在太激進，會在谷底砍掉一切——不可逆。牛市裡人人自認勇敢，用':
    'Err too conservative and you earn less; err too aggressive and you will cut everything at the bottom — and that one cannot be undone. In a bull market everyone thinks they are brave, so think in ',
  '金額': 'amounts of money',
  '想（100 萬剩 60 萬），不是百分比。':
    ' (NT$1 million down to NT$600,000), not in percentages.',

  /* ── 常見配置模型 ── */
  '5. 常見配置模型（起點，不是答案）':
    '5. Common allocation models (a starting point, not an answer)',
  '模型': 'Model',
  '規則': 'Rule',
  '評註': 'Comment',
  '股 60 債 40': '60% equities, 40% bonds',
  '百年老經典；2022 股債齊跌暴露單一弱點，但長期紀錄仍佳':
    'A century-old classic. 2022, when stocks and bonds fell together, exposed its one weak spot, but the long-run record still holds up',
  '年齡法則': 'The age rule',
  '債券 % ＝ 年齡（或股票 % ＝ 110 − 年齡）':
    'Bond % = your age (or equity % = 110 − your age)',
  '粗糙但方向對：越接近用錢，波動容忍越低':
    'Crude, but pointed the right way: the closer you are to spending it, the less volatility you can take',
  '目標日期滑降': 'Target-date glide path',
  '年輕 90/10，隨年齡自動走向 40/60':
    '90/10 when young, drifting automatically towards 40/60 with age',
  '退休基金的標準設計；「自動化」是它的美德':
    'The standard design for retirement funds; being automatic is its virtue',
  '全天候概念（Dalio）': 'The All Weather idea (Dalio)',
  '股／長債／中債／商品／黃金分散到「四種經濟季節」':
    'Equities, long bonds, intermediate bonds, commodities and gold spread across the "four economic seasons"',
  '哲學：對 W12 的四象限全天候備戰；一般人取其精神（多元分散）即可，不必複製比例':
    'The philosophy: be ready for all four quadrants from W12, in any weather. Most people only need the spirit of it — spread widely — and do not have to copy the weights',
  '共同精神': 'What they all share',
  '：模型給的是紀律的骨架；你的三要素決定往哪個方向微調。':
    ': a model gives you the skeleton of discipline; your own three components decide which way to adjust it.',

  /* ── 台灣投資人的課題 ── */
  '6. 台灣投資人的三個特殊課題': '6. Three issues specific to investors in Taiwan',
  'Home bias（本土偏誤）': 'Home bias',
  '：台股佔全球市值僅約 2% 上下，但多數台灣人 90%+ 資產在台股＋台灣房產——收入（工作）、房子、股票全押同一個經濟體與地緣風險。全球化配置（全球型股票工具）是分散這個風險的直接手段':
    ': Taiwan is only about 2% of global market capitalisation, yet most people here hold 90%+ of their assets in Taiwanese shares and Taiwanese property — income, home and portfolio all riding on one economy and one set of geopolitical risks. A global allocation (a global equity vehicle) is the direct way to spread that',
  '匯率': 'The exchange rate',
  '：買全球資產＝持有外幣曝險。長期而言匯率波動遠小於股市波動且雙向，一般不避險；但要理解「台幣升值的年份，海外資產換算回來會被吃掉一塊」是正常現象，不是投資失敗':
    ': buying global assets means holding foreign currency exposure. Over the long run, currency moves are far smaller than equity moves and they cut both ways, so most people do not hedge. But understand that in a year when the Taiwan dollar strengthens, converting overseas assets back takes a slice off the top — that is normal, not a failed investment',
  '工具類型': 'The type of vehicle',
  '（不指名個別商品）：全球股票指數工具、台股大盤工具、投資級債券工具。選擇時用 W16 的 ETF 清單檢核，稅務差異 Q4 週 50 詳談':
    ' (no individual products named): a global equity index vehicle, a Taiwan broad-market vehicle, an investment-grade bond vehicle. Use the ETF checklist from W16 when you choose; the tax differences are covered in Q4, week 50',
  '本週的一句話': 'The one sentence for this week',
  '配置不是找最好的比例，是找「跌 40% 那天你仍然執行得下去」的比例。':
    'Allocation is not about finding the best weights. It is about finding the weights you can still stick to on the day it falls 40%. ',
  '寫下來（練習），跌的時候它就是你事先寫給自己的信。':
    'Write them down — that is this week\'s exercise — and when the fall comes, they are the letter you wrote to yourself in advance.',

  /* ── 闢謠 ── */
  '7. 常見誤解闢謠': '7. Three things people get wrong',
  '「現在利率高，全放定存就好」':
    '"Rates are high right now, so just put it all in a time deposit"',
  '回 W2：看': 'Back to W2: look at the ',
  '實質': 'real',
  '報酬；且定存解決不了長期通膨與長壽風險。':
    ' return. And a time deposit does nothing about long-run inflation or the risk of living a long time.',
  '「債券很安全」': '"Bonds are safe"',
  '2022 年長天期債 −15% 級（W3 的存續期間）；債券的「安全」是相對股票的波動，不是不會跌。':
    'Long-dated bonds fell on the order of 15% in 2022 (duration, from W3). "Safe" for a bond means less volatile than equities — not that it cannot fall.',
  '「配置定了就不能改」': '"Once the allocation is set you cannot change it"',
  '人生階段改變（結婚、買房、退休倒數）就該改；':
    'You should change it when your life stage changes — marriage, buying a home, the countdown to retirement. ',
  '不該因為市場漲跌而改': 'You should not change it because the market moved',
  '——這是配置與擇時的分界線。':
    ' — that is the line between allocation and market timing.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '20 分': '20 min',
  '專欄 #8 重讀 ↗': 'Column #8 — reread ↗',
  '四個決定的框架——本週做的是第一個決定（配置），之後三週依序補完。':
    'The four-decision framework — this week is the first decision (allocation), and the next three weeks fill in the rest in order.',
  '40 分': '40 min',
  '英文世界最實戰的配置條目；重點讀 "Set your allocation" 與 "Stay the course" 段。':
    'The most practical allocation entry in English. Focus on the "Set your allocation" and "Stay the course" sections.',
  '30 分': '30 min',
  '綠角財經筆記：資產配置系列任兩篇 ↗':
    'Green Horn Finance Footnote: any two pieces from the asset allocation series ↗',
  '台灣視角、含全球工具的實務討論（站內搜「資產配置」）。':
    'A practical, Taiwan-side discussion that covers global vehicles (search the site for 資產配置, asset allocation).',
  '量級查證：把「股／債／現金的長期年化」抄進筆記並註明統計期間——校準講義的量級表。':
    'A calibration check: copy the long-run annualised figures for equities, bonds and cash into your notes along with the period they cover, then calibrate the table above against them.',
  '選讀': 'Optional',
  '《漫步華爾街》資產配置章節':
    'A Random Walk Down Wall Street — the asset allocation chapters',
  'Malkiel 的生命週期配置建議——對照「目標日期滑降」模型。':
    "Malkiel's life-cycle allocation advice — compare it against the target-date glide path model.",

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '寫下你的目標配置（本週交付物）':
    "Write down your target allocation (this week's deliverable)",
  '開新文件，命名': 'Open a new document and call it ',
  '「我的目標配置 v1」': '"My target allocation v1"',
  '，依序作答：': ', then answer these in order:',
  '預備金': 'Emergency fund',
  '：家庭月必要支出 ＿ 元 × ＿ 個月 ＝ ＿ 元；目前是否到位？（未到位：先補，投資縮小規模開始）':
    ': essential monthly household spending NT$＿ × ＿ months = NT$＿. Is it in place yet? (If not, fill it first and start investing on a smaller scale)',
  '三要素自評': 'Self-assessment on the three components',
  '（各一段）：能力（時間水平＿年、收入穩定度）／需求（目標報酬約＿%，為什麼）／心理（−40% 時我真實會＿＿，證據是＿＿）':
    ' (a paragraph each): capacity (horizon ＿ years, income stability) / need (target return about ＿%, and why) / temperament (at −40% I would actually ＿＿, and my evidence is ＿＿)',
  '目標配置': 'Target allocation',
  '：股 ＿%（其中全球 ＿%／台股 ＿%）、債 ＿%、現金 ＿%':
    ': equities ＿% (of which global ＿% / Taiwan ＿%), bonds ＿%, cash ＿%',
  '壓力測試': 'Stress test',
  '：用上面的模擬器（或歷史量級手算）算「2008 重演」時我的組合大約 −＿%、金額 −＿ 元——':
    ': use the simulator above (or work it out by hand from the historical magnitudes) to find that a repeat of 2008 costs my portfolio about −＿%, or NT$＿ — ',
  '看著這個金額再確認一次比例':
    'now look at that amount and confirm the weights one more time',
  '理由': 'Reasons',
  '：三行，寫給一年後的自己': ': three lines, written to yourself a year from now',
  '驗收標準：': 'What counts as done: ',
  '預備金金額算出且狀態誠實；壓力測試用金額（非百分比）寫出；配置比例加總 100% 且有三行理由。':
    'the emergency fund amount is worked out and its status stated honestly; the stress test is written in money rather than percentages; the weights add to 100% and come with three lines of reasoning.',
  '自我檢核': 'Check yourself',
  '預備金金額算出且狀態誠實':
    'The emergency fund amount is worked out and its status stated honestly',
  '壓力測試用金額（非百分比）寫出':
    'The stress test is written in money, not percentages',
  '配置比例加總 100% 且有三行理由':
    'The weights add to 100% and come with three lines of reasoning',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then expand to check)',
  '30 歲、收入穩定、15 年不用這筆錢，但 −20% 就睡不著——配置該遷就哪一個？':
    'You are 30, your income is steady and you will not need this money for 15 years — but −20% keeps you awake at night. Which of the three should the allocation defer to?',
  '遷就心理承受': 'Defer to temperament',
  '（三取最保守）——能力再高，睡不著的人會在谷底賣光，一次行為錯誤抹掉十年配置紅利；先用較低股比開始，隨經驗再上調。':
    ' (the most conservative of the three) — however high your capacity, someone who cannot sleep sells out at the bottom, and one behavioural mistake wipes out a decade of allocation gains. Start with a lower equity weight and raise it as you gain experience.',
  '為什麼「目標 4% 就達標的人」不該配 90% 股票？':
    'Why should someone whose goal only needs 4% not hold 90% equities?',
  '→ 因為': '→ Because their ',
  '風險需求': 'risk need',
  '已滿足——多冒的險只買到「不需要的報酬」，卻真實承擔 −50% 與睡眠品質；投資是達成目標的工具，不是競賽。':
    ' is already met. The extra risk buys only a return they do not need, while the −50% and the lost sleep are entirely real. Investing is a tool for reaching a goal, not a competition.',
  '台灣人「全球化配置」主要在分散什麼風險？（三個層次）':
    'For an investor in Taiwan, what risk does a global allocation mainly spread? (Three layers.)',
  '→ ①單一股市風險（台股集中在電子業）②單一經濟體風險（薪水＋房產＋股票同綁台灣景氣）③地緣政治風險（極端情境下的資產存續）。':
    "→ ① single-market risk (Taiwan's market is concentrated in electronics); ② single-economy risk (salary, property and shares all tied to the Taiwanese cycle); ③ geopolitical risk (whether the assets survive an extreme scenario).",

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '煮一鍋好湯的比例': 'The proportions in a good pot of soup',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（雞蛋與籃子 2.0）': 'Opening (eggs and baskets, version 2.0)',
  '「『雞蛋不要放同一個籃子』大家都會背。但我們家的現況可能是：工作的薪水、住的房子、買的股票——全部在':
    '"Everyone can recite \'don\'t put all your eggs in one basket\'. But here is where our family may actually stand: the salary we work for, the house we live in, the shares we bought — all of them in one basket called ',
  '台灣': 'Taiwan',
  '這一個籃子裡。」': '."',
  '核心比喻': 'The core metaphor',
  '「配置像': '"Think of allocation this way. ',
  '：股票是火（讓湯滾、但太大會燒焦）、債券是鍋蓋（壓住噴濺）、現金是旁邊那杯水（隨時能救急）。比例不對，食材再好都會煮壞。」':
    ': equities are the flame (they keep it boiling, but turn it too high and everything burns), bonds are the lid (they hold down the spitting), and cash is the glass of water beside the stove (there the moment you need it). Get the proportions wrong and even the best ingredients cook badly."',
  '互動：家庭心理測試': 'Interaction: the family psychology test',
  '「如果我們投資 100 萬，某天變 60 萬——你的第一個念頭是什麼？」（記下對方的真實反應——這就是家庭版風險承受度調查，比任何問卷都準。）':
    '"If we invested NT$1 million and one day it was worth NT$600,000 — what is your first thought?" (Write down their honest reaction. That is the household version of a risk tolerance survey, and it is more accurate than any questionnaire.)',
  '收尾': 'Closing',
  '「所以我們家在『買什麼』之前，先決定了比例：＿/＿/＿，還有＿個月的預備金。跌的時候記得：這是我們':
    '"So before we decide what to buy, we decided the proportions: ＿/＿/＿, plus ＿ months of emergency fund. When it falls, remember: this is the script we thought through ',
  '事先': 'in advance',
  '想清楚的劇本。」': '."',
  '預期反應與應對': 'What they will say, and what to answer',
  '「全球？我又不懂美國公司」':
    '"Global? I don\'t know the first thing about American companies"',
  '「你不需要懂：買全球就是買『人類經濟繼續運轉』，比賭單一國家需要的知識更少，不是更多。」':
    '"You don\'t need to. Buying the world is buying \'the human economy keeps running\'. That takes less knowledge than betting on one country, not more."',
  '「債券利息那麼低幹嘛買」': '"Bond yields are so low — why bother?"',
  '「它是鍋蓋不是火——2008 股票 −46% 時，它讓整鍋湯不會噴光，讓我們敢繼續煮。」':
    '"It is the lid, not the flame. When equities fell 46% in 2008, it kept the whole pot from boiling over, and that is what let us keep cooking."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '「我的目標配置 v1」文件完成（五項全答）':
    'The "My target allocation v1" document is finished, with all five items answered',
  '長期報酬量級已用原始資料校準（註明出處與期間）':
    'The long-run return magnitudes are calibrated against a primary source, with the source and period noted',
  '能解釋三要素並說出自己的最保守項':
    'You can explain the three components and name which one is your most conservative',
  '分享環節完成（含家庭心理測試），記錄卡住的點':
    'You have taught it, including the family psychology test, and noted where they got stuck',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 14 週完成——全年最重要的決定已寫下。下週見：MPT，分散為什麼是免費午餐。':
    '🎓 Week 14 done — the most important decision of the year is written down. Next up: MPT, and why diversification is a free lunch.',
  '下週預告 · Week 15：現代投資組合理論（MPT）入門':
    'Next week · Week 15: an introduction to Modern Portfolio Theory (MPT)',
  '——本週的配置是「該擺多少」，下週是它背後的數學：為什麼分散是投資裡唯一的免費午餐、相關性怎麼讓 1 + 1 的波動小於 2。':
    ' — this week was how much to put where; next week is the maths behind it: why diversification is the only free lunch in investing, and how correlation makes the volatility of 1 + 1 come out less than 2.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：Q1 Capstone': 'Previous week: the Q1 capstone',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
