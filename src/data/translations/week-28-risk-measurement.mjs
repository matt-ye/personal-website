/*
 * 給家人的投資課 Week 28：風險衡量——波動率、回撤與 VaR — 英文對照表。
 * 來源頁：src/data/course-weeks/week-28-risk-measurement.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * JS 算出的數值後綴「萬」「元」翻成空字串，單位改掛在標籤上（如 NT$10k、NT$）。
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
  '給家人的投資課 · Q3 操盤手季 · Week 28':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 28',
  '風險衡量——波動率、回撤與 VaR':
    'Measuring Risk: Volatility, Drawdown, and VaR',
  '上週給模擬組合裝了報酬儀表，本週裝':
    'Last week we gave the paper portfolio a set of return gauges. This week we add the ',
  '風險儀表':
    'risk gauges',
  '。操盤手與散戶的分水嶺不在報酬，在能不能量化自己承擔了多少風險——只看報酬，等於開車只看時速、不看油表和煞車。':
    '. What separates a portfolio manager from a casual investor isn\'t returns — it\'s being able to put a number on how much risk you\'re taking. Looking only at returns is like driving while watching only the speedometer, never the fuel gauge or the brakes.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：':
    'Prerequisites: ',
  '第 15':
    'Weeks 15',
  '27 週':
    '27',
  '52 週 · 第 28 週':
    '52 weeks · Week 28',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '操盤手的第二組儀表。本週的產出（波動、MDD）直接餵給 W29 的 Sharpe 家族與 W37 的壓力測試——風險量不出來，後面整季都沒得算。':
    'The portfolio manager\'s second set of gauges. This week\'s outputs (volatility, MDD) feed straight into W29\'s Sharpe family and W37\'s stress tests — if risk can\'t be measured, nothing else this quarter can be calculated.',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週教家人「兩種報酬率」的反應——他們記住「策略的成績 vs 你的錢的成績」了嗎？':
    'Think back to how your family reacted to the "two kinds of return" last week. Did they remember "the strategy\'s score vs. your own money\'s score"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '投資虧了一半（−50%），要賺多少 % 才回得了本？':
    'You lose half your money (−50%). How much do you have to gain, in %, just to get back to even?',
  '賺 50% 就回來了':
    'Gain 50% and you\'re back',
  '大概 75%':
    'About 75%',
  '要賺 100%——整整翻倍':
    'Gain 100% — a full doubling',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 波動率：風險的第一個（不完美）代理':
    '1. Volatility: the first (imperfect) stand-in for risk',
  'W15 已經定義過 σ；本週補上實務計算，三步：':
    'We already defined σ in W15. This week we add the practical calculation, in three steps:',
  '取每日報酬 r ＝ P':
    'Take the daily return r = P',
  '算日報酬的標準差 σ':
    'Calculate the standard deviation of daily returns, σ',
  '日':
    'daily',
  '年化':
    'Annualize',
  '年':
    'annual',
  '× √252（一年約 252 個交易日；√ 來自「變異數隨時間線性相加」的假設。用週資料就 ×√52、月資料 ×√12）':
    ' × √252 (there are about 252 trading days in a year; the √ comes from the assumption that "variance adds up linearly over time." With weekly data use ×√52; with monthly data, ×√12)',
  '基準感':
    'Rule of thumb',
  '：日波動 1% → 年化':
    ': daily volatility of 1% → annualized ',
  '——恰好是成熟股市的常態量級（W14 的表）。':
    ' — right in the normal range for developed stock markets (the table in W14).',
  'σ 的正確定位（收攏 W15 與 W25）：它衡量的是「':
    'Where σ really fits (pulling together W15 and W25): it measures "',
  '顛簸程度':
    'how bumpy the ride is',
  '」不是「虧錢機率」——但顛簸程度仍然重要，因為①它透過波動拖累直接吃掉幾何報酬（W27）②它決定你會不會在半路被甩下車（行為風險，W23）。':
    '," not "the chance of losing money." But bumpiness still matters, because (1) through volatility drag it directly eats into geometric return (W27), and (2) it decides whether you get shaken off the ride halfway (behavioral risk, W23).',
  '2. 最大回撤（MDD）：最有體感的風險指標':
    '2. Maximum drawdown (MDD): the risk measure you can actually feel',
  'MDD ＝ 從':
    'MDD = the deepest fall from the ',
  '歷史最高點':
    'all-time high',
  '摔下來最深的那一跤。它比 σ 有體感，因為它正是你帳戶上看到的那個慘綠數字。':
    '. You can feel it more than σ because it is exactly that ugly red number you see in your account.',
  '而它連著一張每個投資人都該背下來的表——':
    'And it comes with a table every investor should know by heart — ',
  '回本的不對稱':
    'the asymmetry of getting back to even',
  '回撤':
    'Drawdown',
  '回本需要':
    'Gain needed to recover',
  '跌得越深，回本的坡越陡——':
    'The deeper the fall, the steeper the climb back — ',
  '非線性地陡':
    'non-linearly steep',
  '。控制回撤不是膽小：它保護的是幾何報酬（W27 的拖累）和你自己的心理（W23）。同時要看':
    '. Controlling drawdown isn\'t timidity: it protects your geometric return (the drag from W27) and your own state of mind (W23). Also watch the ',
  '回本時間':
    'time to recover',
  '：2000 年科技泡沫後，那斯達克花了約 15 年才回到前高——「長期會回來」的長期，可能超過你的耐心甚至人生階段。':
    ': after the 2000 dot-com bubble, the Nasdaq took about 15 years to get back to its prior high — the "long run" in "it\'ll come back in the long run" can outlast your patience, or even your stage of life.',
  '回本陡坡':
    'The recovery slope',
  '拉回撤深度，看爬出來要多陡。以 100 萬本金為例。':
    'Drag the drawdown depth and see how steep the climb back is. Based on a NT$1,000,000 starting amount.',
  '回撤深度':
    'Drawdown depth',
  '帳戶剩下':
    'Account left',
  '100 萬本金':
    'NT$1,000,000 principal',
  '剩餘資金要漲的幅度':
    'How much the remaining money must rise',
  '陡峭倍率':
    'Steepness multiple',
  '回本幅度 ÷ 回撤幅度':
    'Recovery needed ÷ drawdown',
  '拉動滑桿。':
    'Drag the slider.',
  '3. VaR：機構的語言，連同它的三個缺陷':
    '3. VaR: the language of institutions, and its three flaws',
  'VaR（風險值）':
    'VaR (value at risk)',
  '：「在 95% 信心水準下，單日最多虧 X。」常態假設下的速算：VaR':
    ': "At a 95% confidence level, the most you lose in a single day is X." A quick calculation under the normal-distribution assumption: VaR',
  '例：組合 100 萬、日波動 1% → 95% 單日 VaR ≈':
    'Example: a NT$1,000,000 portfolio with 1% daily volatility → 95% one-day VaR ≈ ',
  '16,450 元':
    'NT$16,450',
  '——白話是「一百天裡約有五天，單日虧損會超過 1.6 萬」。':
    ' — in plain words, "in about five days out of a hundred, the one-day loss will be more than NT$16,000."',
  '三個缺陷':
    'Three flaws',
  '（2008 年後人盡皆知，但它仍是機構的標準語言）：':
    ' (everyone has known them since 2008, yet it is still the institutional standard language):',
  '尾部之外不管':
    'Blind beyond the tail',
  '——VaR 說「5% 機率虧超過 X」，但沒說超過時虧多少（可能是 X 的三倍）。補丁是 CVaR／預期短缺，概念知道即可':
    ' — VaR says "a 5% chance of losing more than X," but not how much more once you cross that line (it could be three times X). The patch is CVaR / expected shortfall; just know the idea',
  '常態假設':
    'The normal-distribution assumption',
  '——真實市場肥尾（W15），極端日遠比鐘形曲線預測的多。「25 個標準差事件連續三天」（2007 年 Goldman 的名言）其實是模型錯了，不是宇宙異常':
    ' — real markets have fat tails (W15), and extreme days happen far more often than the bell curve predicts. "A 25-standard-deviation event, three days in a row" (a famous 2007 Goldman line) really means the model was wrong, not that the universe misbehaved',
  '回頭看':
    'Looking backward',
  '——用平靜期資料算的 VaR，在風暴來時必然低估；風險最大的時候（W25），儀表讀數最溫和':
    ' — a VaR computed from calm-period data will inevitably underestimate when the storm hits; when risk is greatest (W25), the gauge reads mildest',
  '本課的用法：VaR 當作溝通工具——把風險講成一個金額，家人和委員會都聽得懂——不當作安全保證。':
    'How we use it in this course: VaR is a communication tool — it puts risk into one dollar figure that the family and the committee can both understand — not a guarantee of safety.',
  '風險翻譯機：把 σ 翻成家人聽得懂的句子':
    'Risk translator: turning σ into a sentence your family understands',
  '拉組合市值與日波動，看年化波動與 VaR 金額——以及那句該講給家人聽的白話。':
    'Drag the portfolio value and the daily volatility to see annualized volatility and the VaR amount — and the plain-language sentence you\'d say to your family.',
  '組合市值':
    'Portfolio value (NT$10k)',
  '100 萬':
    '100',
  '日波動 σ':
    'Daily volatility σ',
  '年化波動':
    'Annualized volatility',
  'σ日 × √252':
    'σ daily × √252',
  '95% 單日 VaR':
    '95% one-day VaR (NT$)',
  '1.645 × σ日 × 市值':
    '1.645 × σ daily × portfolio value',
  '99% 單日 VaR':
    '99% one-day VaR (NT$)',
  '2.326 × σ日 × 市值':
    '2.326 × σ daily × portfolio value',
  '提醒：這三個數字全是「回頭看」的統計——儀表讀數最安心的時候，往往最接近它失效的環境（缺陷 3）。':
    'A reminder: all three numbers are backward-looking statistics — when the gauges read most reassuringly, you are often closest to the environment where they fail (flaw 3).',
  '4. 下行風險：只懲罰往下的波動':
    '4. Downside risk: penalize only the downward swings',
  'σ 有個哲學缺陷：大漲也算「波動」。':
    'σ has a philosophical flaw: big gains count as "volatility" too.',
  '下行偏差（downside deviation）':
    'Downside deviation',
  '只計算低於門檻（通常 0 或無風險利率）那些報酬的離散度——「只懲罰跌，不懲罰漲」。':
    ' measures only the spread of returns that fall below a threshold (usually 0 or the risk-free rate) — "punish the drops, not the rises."',
  '本週只需建立概念：兩個組合同樣的 σ，一個的波動來自偶爾暴漲、一個來自頻繁下跌——下行偏差會把它們區分開，σ 不會。它是下週':
    'This week we only need the concept: two portfolios with the same σ, one whose volatility comes from the occasional surge and one from frequent declines — downside deviation tells them apart, while σ cannot. It is the denominator of next week\'s ',
  'Sortino 比率':
    'Sortino ratio',
  '的分母。':
    '.',
  '5. 組合風險儀表板 v1（本週交付物）':
    '5. Portfolio risk dashboard v1 (this week\'s deliverable)',
  '在模擬組合試算表加一個「風險模組」分頁：':
    'Add a "risk module" tab to the simulated-portfolio spreadsheet:',
  '指標':
    'Metric',
  '算法':
    'How to calculate',
  '更新頻率':
    'Update frequency',
  '組合年化波動':
    'Portfolio annualized volatility',
  '成分近 3 年（或可得期間）日／週報酬 → 組合報酬序列 → σ×√252':
    'Daily/weekly returns of the holdings over the past 3 years (or whatever is available) → portfolio return series → σ×√252',
  '季':
    'Quarterly',
  '歷史 MDD':
    'Historical MDD',
  '組合價值序列對歷史新高的最大跌幅':
    'The largest fall of the portfolio-value series from its prior all-time high',
  '週（隨估值頁自動）':
    'Weekly (automatic with the valuation tab)',
  '1.645 × σ日 × 組合市值':
    '1.645 × σ daily × portfolio value',
  'IPS 容忍對照':
    'IPS tolerance check',
  '上述指標 vs W14 寫下的「−X% 我會＿＿」':
    'The metrics above vs. the "if I\'m down −X%, I will ___" you wrote down in W14',
  '成分歷史價格從 Goodinfo 或券商軟體匯出；組合報酬用權重加權即可，先不做共變異數矩陣——那是選讀進階。':
    'Export the holdings\' historical prices from Goodinfo or your broker\'s software. The portfolio return is just a weighted sum — skip the covariance matrix for now; that\'s an optional advanced topic.',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「風險指標低＝安全。」':
    '"A low risk reading means it\'s safe."',
  '三個指標全是':
    'All three metrics are ',
  '的統計；風暴前夕讀數最漂亮（W25）。儀表告訴你「過去的顛簸」，不預告前方的懸崖——所以還需要 W37 的壓力測試（往前想）。':
    ' statistics; the readings look their prettiest on the eve of a storm (W25). The gauges tell you about "the bumps behind you" but don\'t warn of the cliff ahead — which is why you also need W37\'s stress tests (thinking forward).',
  '「控制回撤＝少賺。」':
    '"Controlling drawdown means earning less."',
  '回本不對稱表說明：避開深坑對':
    'The recovery-asymmetry table shows that avoiding deep holes is a plus for ',
  '幾何報酬':
    'geometric return',
  '是加分。犧牲的是牛市的相對排名，換到的是複利的連續性。':
    '. What you give up is your relative ranking in bull markets; what you get is the continuity of compounding.',
  '「VaR 蓋掉 95% 就夠了。」':
    '"Covering VaR at 95% is enough."',
  '毀掉投資人的從來是那 5%——以及 5% 裡沒說的深度。VaR 是日常儀表，極端情境要用壓測。':
    'What ruins investors is always that other 5% — and the depth that the 5% doesn\'t tell you. VaR is an everyday gauge; extreme scenarios call for stress tests.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '統計工具＋哲學上蓋':
    'Statistical tools plus the philosophical big picture',
  '40 分鐘':
    '40 min',
  'Investopedia：VaR、Maximum Drawdown、Downside Deviation 三條目':
    'Investopedia: the entries on VaR, Maximum Drawdown, and Downside Deviation',
  '把定義與算例啃熟。':
    'Get the definitions and worked examples down cold. ',
  '《投資最重要的事》（Howard Marks）風險三章':
    'Chapters on risk in The Most Important Thing (Howard Marks)',
  'Marks 對「可測 vs 不可測風險」的完整論述——本週所有統計工具的哲學上蓋：算得出來的是過去的顛簸，算不出來的才是真正該敬畏的。':
    'Marks\'s full discussion of "measurable vs. unmeasurable risk" — the philosophical big picture behind every statistical tool this week: what can be calculated is the bumpiness of the past; what can\'t be calculated is what truly deserves respect.',
  '10 分鐘':
    '10 min',
  '回顧 W15 與 W25':
    'Revisit W15 and W25',
  'σ 的侷限（W15 肥尾）與風險的真義（W25 本金永久損失）——本週把兩條線全部收攏進儀表板。':
    'The limits of σ (fat tails, W15) and the true meaning of risk (permanent loss of capital, W25) — this week pulls both threads together into the dashboard.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '給模擬組合裝風險儀表':
    'Install the risk gauges on the paper portfolio',
  '任務 A｜風險模組（40 分鐘）':
    'Task A | Risk module (40 minutes)',
  '匯出組合各成分近 3 年的':
    'Export the past 3 years of ',
  '週':
    'weekly',
  '價格（量小好處理；年化改 ×√52 ≈ ×7.2）':
    ' prices for each holding (less data, easier to handle; annualize with ×√52 ≈ ×7.2)',
  '算各成分報酬序列 → 按目前權重合成組合報酬序列':
    'Calculate each holding\'s return series → combine them into a portfolio return series using current weights',
  '算三個數：組合年化波動、期間 MDD、95% 單週 VaR 金額':
    'Calculate three numbers: portfolio annualized volatility, MDD over the period, and the 95% one-week VaR amount',
  '對照 IPS':
    'Check against your IPS',
  '：算出的 MDD 若明天重演，金額是多少？在你 W14 寫的容忍範圍內嗎？寫兩行結論':
    ': if the MDD you calculated repeated tomorrow, how much money would that be? Is it within the tolerance you wrote in W14? Write two lines of conclusion',
  '任務 B｜手感練習（10 分鐘）':
    'Task B | Mental-math drill (10 minutes)',
  '不查表心算：−35% 回本要幾 %？（先想公式 dd ÷ (1−dd)，再拿上面的陡坡驗算）':
    'Without looking at the table, work out: how much do you need to gain to recover from −35%? (First think of the formula dd ÷ (1−dd), then check it against the recovery-slope table above)',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '−35% 的答案是 +53.8%（0.35 ÷ 0.65）。風險模組的三個數字用「風險翻譯機」抽查：日 σ 1% 的年化必須是 15.9%、100 萬的 95% VaR 必須是 16,450 元——對不上就是公式帶錯。':
    'The answer for −35% is +53.8% (0.35 ÷ 0.65). Spot-check the risk module\'s three numbers with the "risk translator": annualized volatility for a daily σ of 1% must come out as 15.9%, and the 95% VaR on NT$1,000,000 must come out as NT$16,450 — if they don\'t match, a formula is wrong.',
  '風險模組三指標算出且方法正確':
    'The risk module\'s three metrics are calculated, with the method correct',
  'IPS 容忍對照完成（用金額表述）':
    'IPS tolerance check done (stated in dollar amounts)',
  '回本不對稱表能默寫三行以上':
    'You can write out three or more rows of the recovery-asymmetry table from memory',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼年化要乘 √252 而不是 252？':
    'Why do we multiply by √252 to annualize, instead of 252?',
  '→ 因為（假設報酬獨立）':
    '→ Because (assuming returns are independent) it is the ',
  '變異數':
    'variance',
  '才隨期數線性相加：σ²年 ＝ 252 × σ²日，開根號後 σ年 ＝ σ日 × √252。直接乘 252 是把標準差當變異數用——經典錯誤。':
    ' that adds up linearly over periods: σ² annual = 252 × σ² daily, and taking the square root gives σ annual = σ daily × √252. Multiplying by 252 directly uses a standard deviation as if it were a variance — a classic mistake.',
  '兩組合同樣年化 σ＝15%：A 的 MDD −18%、B 的 −45%——可能嗎？':
    'Two portfolios have the same annualized σ = 15%: A has an MDD of −18% and B has −45%. Is that possible?',
  '完全可能':
    'Entirely possible',
  '。σ 只量平均顛簸，不管路徑順序：B 的下跌集中連續出現（滾成深坑），A 的漲跌交錯（坑淺）。這說明 σ 與 MDD 互補、缺一不可——也預示了下行偏差的價值。':
    '. σ measures only the average bumpiness and ignores the order of events: B\'s losses come in a consecutive streak (rolling into a deep hole), while A\'s ups and downs alternate (a shallow hole). This shows that σ and MDD complement each other and you need both — and it hints at the value of downside deviation.',
  'VaR 在什麼時候最危險？':
    'When is VaR most dangerous?',
  '市場最平靜的時候':
    'When the market is calmest',
  '。平靜期資料估出的 σ 小、VaR 讀數溫和，誘使你加大部位；而平靜期常是槓桿與估值累積的時期（W25 的信貸週期）——儀表最安心時，往往最接近它失效的環境。':
    '. A σ estimated from calm-period data is small and the VaR reading is mild, tempting you to take bigger positions; and calm periods are often when leverage and valuations are building up (the credit cycle from W25). When the gauges feel safest, you are often closest to the environment where they fail.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '開車三儀表':
    'Three gauges for driving',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（回本的陡坡）':
    'Opening (the steep climb back)',
  '「猜謎：投資虧了一半，要賺多少 % 才回本？」（多數人答 50%。）「答案是':
    '"Here\'s a riddle: you lose half your money. How much do you have to gain, in %, to get back to even?" (Most people say 50%.) "The answer is ',
  '——虧掉一半，剩下的錢要翻倍才回得來。跌 10% 只要賺 11% 回本，跌 50% 要賺 100%——':
    ' — if you lose half, the money that\'s left has to double to get back. Down 10% needs only an 11% gain to recover, but down 50% needs 100% — ',
  '坑越深，爬出來越不成比例地難':
    'the deeper the hole, the more out of proportion the climb out becomes',
  '核心比喻（開車三儀表）':
    'Core metaphor (three gauges for driving)',
  '「看投資組合像開車：報酬率是':
    '"Think of a portfolio like a car: the return is the ',
  '時速':
    'speed',
  '，波動是':
    ', volatility is the ',
  '路面顛簸':
    'bumpiness of the road',
  '，最大回撤是':
    ', and maximum drawdown is the ',
  '這趟摔過最深的坑':
    'deepest pothole you hit on this trip',
  '。只看時速的駕駛最危險——我們家的模擬帳戶這週裝好了全套儀表板。」':
    '. The driver who watches only the speed is the most dangerous one — this week we installed the full dashboard on our family\'s simulated account."',
  '互動（家庭風險翻譯）':
    'Interaction (a family risk translation)',
  '「我們的模擬組合 100 萬，儀表說『正常日子裡，一百天大概有五天，單日會虧超過 1.6 萬』——聽到這句你的感覺是？」':
    '"Our paper portfolio is NT$1,000,000, and the gauge says \'on normal days, in about five days out of a hundred, a one-day loss will be more than NT$16,000.\' How do you feel hearing that?"',
  '把統計翻成金額與頻率，觀察家人反應——這就是 VaR 作為溝通工具的用法。反應太大 → 回頭檢討配置是否超出全家的心理容忍。':
    'Translate the statistics into a dollar amount and a frequency, and watch how your family reacts — that\'s how VaR works as a communication tool. If the reaction is too strong, go back and check whether the allocation exceeds the whole family\'s emotional tolerance.',
  '收尾':
    'Closing',
  '「記住那張陡坡表就好：':
    '"Just remember that steep-climb table: ',
  '跌一半、賺一倍':
    'lose half, gain double',
  '。所以我們的策略永遠先想『最深會摔多深』，再想『能跑多快』。」':
    '. That\'s why our strategy always asks first \'how deep could the fall be?\' and only then \'how fast can we go?\'"',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那乾脆都不要跌，全放定存？」':
    '"Then why not just avoid any drop and put everything in time deposits?"',
  '回 W2 與 W14：通膨的坑是每年必跌的慢性坑；重點是把回撤控制在「撐得住」，不是「零」。':
    'Go back to W2 and W14: inflation is a slow, chronic hole you fall into every single year. The point is to keep drawdowns at a level you can endure, not at "zero."',
  '「儀表能預測下一次大跌嗎？」':
    '"Can the gauges predict the next big crash?"',
  '誠實：「不能，它只記錄過去的顛簸。預想懸崖是另一個工具（壓力測試），過幾週會裝上。」':
    'Be honest: "No — they only record past bumpiness. Looking ahead to the cliff is a different tool (stress testing), which we\'ll add in a few weeks."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能手算年化波動與 VaR 速算':
    'You can calculate annualized volatility and a quick VaR by hand',
  '模擬組合風險模組上線＋IPS 容忍對照完成':
    'The paper portfolio\'s risk module is live, and the IPS tolerance check is done',
  '能說出 VaR 三缺陷與正確用途':
    'You can name VaR\'s three flaws and its proper use',
  '分享環節完成（回本陡坡＋三儀表），記錄卡住的點':
    'Teaching session done (the steep climb back + three gauges); note where you got stuck',
  '回填 curriculum/01-overview.md 第 28 週進度欄':
    'Fill in the Week 28 progress column in curriculum/01-overview.md',
  '下週預告 · Week 29：風險調整績效——Sharpe 家族':
    'Next week\'s preview · Week 29: Risk-adjusted performance — the Sharpe family',
  '——報酬儀表（W27）除以風險儀表（W28），得到 Sharpe／Sortino／IR：「同樣賺 8%，誰賺得比較高明」終於有了答案。':
    ' — the return gauge (W27) divided by the risk gauge (W28) gives Sharpe / Sortino / IR: "Both earned 8%, so who earned it more skillfully?" finally has an answer.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：報酬衡量 TWR/MWR':
    'Previous week: Measuring returns, TWR/MWR',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle dark/light theme',
  '猜一個答案':
    'Pick a guess',
  '日波動':
    'Daily volatility',
  '答對了——虧一半，剩下的錢要翻倍才回得來。回本需要的幅度是 dd÷(1−dd)：跌 10% 只要 11%，跌 50% 要 100%，跌 60% 要 150%——坑越深，爬出來越不成比例地難。下面的陡坡讓你拉給自己看。':
    'Correct — if you lose half, the money that\'s left has to double to get back. The gain needed to recover is dd÷(1−dd): only 11% after a 10% fall, 100% after a 50% fall, 150% after a 60% fall — the deeper the hole, the more out of proportion the climb out becomes. The slope below lets you drag it yourself.',
  '多數人都這樣猜——但 100 萬虧 50% 剩 50 萬，50 萬要漲 100% 才回到 100 萬。回本需要的幅度是 dd÷(1−dd)，非線性地陡：跌 10% 只要 11%，跌 50% 要 100%。下面的陡坡讓你拉給自己看。':
    'Most people guess that — but NT$1,000,000 down 50% leaves NT$500,000, and NT$500,000 has to rise 100% to get back to NT$1,000,000. The gain needed to recover is dd÷(1−dd), which gets steep non-linearly: only 11% after a 10% fall, 100% after a 50% fall. The slope below lets you drag it yourself.',
  '<b>淺坑好爬。</b>回本幅度只比回撤大一點——這也是為什麼 W14 的配置要把「你撐得住的回撤」放在報酬之前決定。':
    '<b>A shallow hole is easy to climb out of.</b> The gain needed is only slightly bigger than the drawdown — which is why W14\'s allocation decides "the drawdown you can stand" before it decides returns.',
  '<b>坡開始變陡了。</b>回本需要的幅度已經明顯大於跌幅——複利的懲罰是非線性的（W27 的波動拖累就是同一件事的另一面）。':
    '<b>The slope is getting steeper.</b> The gain needed is now clearly bigger than the fall — the penalty of compounding is non-linear (W27\'s volatility drag is the same thing seen from the other side).',
  '<b>深坑區。</b>這裡不只是數學問題：2000 年科技泡沫後那斯達克花了約 15 年回到前高——「長期會回來」的長期，可能超過你的耐心甚至人生階段。控制回撤保護的是複利的連續性。':
    '<b>Deep-hole territory.</b> This is no longer just a math problem: after the 2000 dot-com bubble the Nasdaq took about 15 years to regain its prior high — the "long run" in "it\'ll come back in the long run" can outlast your patience, or even your stage of life. Controlling drawdown protects the continuity of compounding.',
  '萬':
    '',
  '元':
    '',
  '偏低（債券型的量級）':
    'low (the range of a bond fund)',
  '成熟股市的常態量級':
    'in the normal range for developed stock markets',
  '偏高（單一個股或集中組合的量級）':
    'high (the range of a single stock or a concentrated portfolio)',
  '<b>講給家人聽：</b>「正常日子裡，一百天大概有五天，單日會虧超過':
    '<b>What to tell your family:</b> "On normal days, in about five days out of a hundred, the one-day loss will be more than NT$',
  '千元。」':
    ' thousand."',
  '% 屬於':
    '% is ',
  '——對照 W14 你寫下的容忍度，這個量級全家撐得住嗎？':
    ' — compare that with the tolerance you wrote down in W14. Can the whole family stand a level like this?',
  '✓ 風險儀表就位——下週把報酬除以風險，得到 Sharpe 家族。':
    '✓ Risk gauges are in place — next week we divide returns by risk to get the Sharpe family.',
};
