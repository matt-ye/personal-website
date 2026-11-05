/*
 * 給家人的投資課 Week 33：衍生性商品——避險用途 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-33-derivatives-hedging.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * JS money() 的後綴『元』譯 TWD，『萬』譯空字串並把單位掛在標籤（Notional value (NT$10k)）；JS 拼接句的全形標點由 applyTranslations 自動轉半形。
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
  '給家人的投資課 · Q3 操盤手季 · Week 33':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 33',
  '衍生性商品——避險用途':
    'Derivatives for hedging',
  '衍生品是金融世界的雙面刃：媒體上它是賭場，機構裡它是保險公司。本課的立場很清楚——':
    'Derivatives are a double-edged sword in the financial world: in the media they are a casino, inside institutions they are an insurance company. This course\'s position is clear — ',
  '衍生品是風險管理工具，不是投機工具':
    'derivatives are a risk-management tool, not a speculation tool',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 3、28 週':
    'Prerequisites: Weeks 3 and 28',
  '52 週 · 第 33 週':
    '52 weeks · Week 33',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '學會它，你能替組合買保單（W37 壓測後的行動選項）、看懂 CFO 的避險部位（Q4 的 W48），也能識破「穩賺選擇權策略」的推銷話術。':
    'Learn this and you can buy your portfolio an insurance policy (an action option after the W37 stress test), read a CFO\'s hedging positions (W48 in Q4), and see through the sales pitch for "sure-win options strategies."',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週因子考古——HML 的失落期找到了嗎？你算出要等幾年才回正？':
    'Look back at last week\'s factor archaeology — did you find HML\'s lost decade? How many years did you work out you would have to wait to get back to positive?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '如果每一季都替股票組合買「跌超過 5% 就理賠」的保險，一整年的保費大概要多少？':
    'If you bought "pays out if it falls more than 5%" insurance on a stock portfolio every quarter, about how much would a full year of premiums cost?',
  '約 1%，像車險一樣便宜':
    'About 1%, as cheap as car insurance',
  '約 3%':
    'About 3%',
  '約 10%——比多數年份的股市報酬還貴':
    'About 10% — more than the stock market returns in most years',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 期貨：標準化的「先講好價格」':
    '1. Futures: a standardized "agree the price now"',
  '遠期合約':
    'Forward contract',
  '的直覺：農夫和麵包店在播種時就約好半年後的小麥價格——兩邊都消除了不確定性。':
    ' — the intuition: at planting time, a farmer and a bakery agree on the price of wheat six months out. Both sides remove the uncertainty. ',
  '期貨':
    'Futures',
  '＝標準化（規格、到期日）、集中結算、每日結算損益的遠期合約。':
    ' are forward contracts that are standardized (contract size, expiry date), centrally cleared, and marked to market daily.',
  '台指期基本規格（以期交所公告為準）：大台每點':
    'Basic specs for Taiwan index futures (the exchange\'s announcements are the authority): the large contract is ',
  '200 元':
    'NT$200',
  '、小台每點 50 元、微台每點 10 元；保證金只需押合約價值的一小部分（量級約 10% 上下，隨波動調整，':
    ' per point, the mini is NT$50 per point, and the micro is NT$10 per point. Margin only requires putting up a small fraction of the contract value (on the order of 10%, adjusted with volatility; ',
  '下單前必查期交所當期公告':
    'always check the exchange\'s current announcement before placing an order',
  '保證金＝內建槓桿':
    'Margin = built-in leverage',
  '：指數 20,000 點的大台名目價值 400 萬，保證金若約 40 萬 → 10 倍槓桿——指數動 1%，你的保證金動 10%。這就是「期貨危險」的全部來源：不是商品危險，是':
    ': a large contract on an index at 20,000 points has a notional value of NT$4,000,000; if margin is about NT$400,000, that is 10x leverage — the index moves 1%, your margin moves 10%. This is the whole source of "futures are dangerous": it\'s not the product that\'s dangerous, it\'s ',
  '槓桿沒被尊重':
    'leverage that isn\'t respected',
  '。避險用法恰恰相反：持有 400 萬現股、放空一口大台 → 淨曝險歸零（鎖住價值，代價是也放棄上漲）。':
    '. Hedging uses them the opposite way: hold NT$4,000,000 of stock and short one large contract → net exposure goes to zero (you lock in the value, at the price of giving up the upside too).',
  '槓桿顯微鏡：一口大台':
    'Leverage microscope: one large contract',
  '每點 200 元。拉指數點位、保證金比例與指數漲跌，看同一口合約對「保證金」造成多大的晃動——以及有現股對沖時的淨結果。':
    'Each point is worth NT$200. Drag the index level, the margin ratio, and the index move to see how hard the same contract shakes your margin — and the net result when you hold the stock as a hedge.',
  '指數點位':
    'Index level',
  '保證金比例':
    'Margin ratio',
  '指數漲跌':
    'Index move',
  '名目價值':
    'Notional value (NT$10k)',
  '點位 × 200 元':
    'Index level × NT$200',
  '槓桿倍數':
    'Leverage',
  '名目 ÷ 保證金':
    'Notional ÷ margin',
  '做多一口：保證金變動':
    'Long one contract: change in margin',
  '投機的體感':
    'What speculation feels like',
  '現股＋放空一口：淨變動':
    'Stock + short one contract: net change',
  '避險的體感':
    'What hedging feels like',
  '拉動滑桿。':
    'Drag the sliders.',
  '2. 選擇權：可以只買「保險的那一半」':
    '2. Options: you can buy just the "insurance half"',
  '期貨是「義務」（到期必須履約），選擇權是「權利」（可以不用）：':
    'A futures contract is an "obligation" (you must perform at expiry); an option is a "right" (you may choose not to). A ',
  '買權（Call）':
    'call option (Call)',
  '付權利金，取得用履約價':
    ': pay a premium and you get the right to ',
  '買':
    'buy',
  '的權利——看漲的票；':
    ' at the strike price — a ticket for a rise; a ',
  '賣權（Put）':
    'put option (Put)',
  '賣':
    'sell',
  '的權利——':
    ' at the strike price — ',
  '下跌的保險':
    'insurance against a fall',
  '權利金＝':
    'Premium = ',
  '內含價值':
    'intrinsic value',
  '（現在履約能拿到的）＋':
    ' (what you would get by exercising right now) + ',
  '時間價值':
    'time value',
  '（剩餘時間內變成有利的可能性）。時間價值每天衰減（theta）、到期歸零——':
    ' (the chance of becoming favorable in the time that remains). Time value decays every day (theta) and goes to zero at expiry — ',
  '買方付租金，賣方收租金':
    'the buyer pays rent, the seller collects rent',
  '3. 保護性賣權：給組合買保單':
    '3. Protective put: buying insurance for the portfolio',
  '持股市值 100，買 3 個月期、履約價 95（價外 5%）的賣權，權利金 2.5：':
    'Stock holdings worth 100; buy a 3-month put with a strike of 95 (5% out of the money) at a premium of 2.5:',
  '到期股價':
    'Stock price at expiry',
  '未保險':
    'Uninsured',
  '有保險（股票＋put−保費）':
    'Insured (stock + put − premium)',
  '107.5（漲時少賺保費）':
    '107.5 (you give up the premium on the way up)',
  '跌到哪都鎖在 92.5':
    'Locked at 92.5 no matter how far it falls',
  '——最大損失＝價外距離 5 ＋ 保費 2.5 ＝':
    ' — the maximum loss = distance out of the money 5 + premium 2.5 = ',
  '，完全是保險的形狀（自負額 5%＋保費 2.5%）。':
    ', which is exactly the shape of an insurance policy (5% deductible + 2.5% premium).',
  '代價的真相':
    'The real cost',
  '：單季保費 2.5% → 全年連續投保粗略':
    ': a premium of 2.5% per quarter → insuring continuously for a full year is roughly ',
  '~10%／年':
    '~10% per year',
  '——比多數年份的股市報酬還貴！所以長期持有保護性賣權幾乎必然侵蝕報酬。保險要買在「特定曝險、特定期間」（重大事件前、集中部位、W37 壓測發現的具體弱點），不是常態配備。長期投資人的「保險」正解是 W14 的配置與預備金——便宜得多。':
    ' — more expensive than the stock market returns in most years! So holding protective puts for the long term almost inevitably erodes returns. Buy insurance for "a specific exposure over a specific period" (before a major event, a concentrated position, a specific weakness found in the W37 stress test), not as standard equipment. The right "insurance" for a long-term investor is W14\'s allocation and the emergency fund — much cheaper.',
  '4. Covered Call：把上漲賣掉換租金':
    '4. Covered call: sell the upside for rent',
  '持股 100，賣出履約價 105 的買權、收權利金 2：跌到 95 時值 97（多墊 2）、100 時 102、105 時 107——':
    'Stock holdings of 100; sell a call with a strike of 105 and collect a premium of 2. At 95 the position is worth 97 (cushioned by 2 extra), at 100 it is 102, at 105 it is 107 — ',
  '漲到 115 也只有 107':
    'even if the stock rises to 115 it is only worth 107',
  '，漲幅被截斷。':
    ', so the gain is capped.',
  '本質：':
    'In essence: ',
  '賣掉「大漲的可能性」換固定租金':
    'you sell the "chance of a big rise" for a fixed rent',
  '——盤整市場的現金流策略。誠實的定價問題：你收的租金，長期補得起「錯過的大漲」嗎？W12 說過，報酬集中在少數大漲日——被截斷的正是那些日子。':
    ' — a cash-flow strategy for sideways markets. The honest pricing question: can the rent you collect make up, over the long run, for the "big rallies you miss"? W12 said returns are concentrated in a few big up days — and those are exactly the days that get cut off.',
  '到期 payoff 實驗台':
    'Expiry payoff lab',
  '選策略、調履約價與權利金。虛線是純持股，綠線是你的策略，金點是你拉的到期股價。':
    'Pick a strategy and adjust the strike and premium. The dashed line is simply holding the stock, the green line is your strategy, and the gold dot is the expiry stock price you drag.',
  '保護性賣權':
    'Protective put',
  '履約價':
    'Strike',
  '權利金':
    'Premium',
  '虛線＝純持股　綠線＝策略　金點＝到期股價下的組合價值':
    'Dashed = stock only | Green = strategy | Gold dot = portfolio value at the expiry price',
  '純持股':
    'Stock only',
  '到期價值':
    'Value at expiry',
  '策略':
    'Strategy',
  '5. 為什麼散戶做多裸選擇權多半虧':
    '5. Why retail investors who buy naked options mostly lose',
  '時間價值天天扣血':
    'Time value bleeds you every day',
  '——買方要「方向對＋幅度夠＋時間內發生」三個全對；賣方只要三個不全發生就贏':
    ' — the buyer has to be right on direction, right on size, and right within the time limit, all three; the seller wins as long as the three don\'t all happen',
  '樂透偏好':
    'Lottery preference',
  '（W23）——價外選擇權便宜、報酬倍數誘人，恰是期望值最差的角落':
    ' (W23) — out-of-the-money options are cheap and the payoff multiples are tempting, which is exactly the corner with the worst expected value',
  '雙邊成本與價差':
    'Two-way costs and spreads',
  '——選擇權的買賣價差比例遠大於股票（W10 隱性成本的放大版）':
    ' — the bid-ask spread on options is a far bigger share of the price than on stocks (an amplified version of the hidden costs in W10)',
  '而「賣方穩賺」也是半個神話：賣方＝開保險公司，平時月月收租、Sharpe 漂亮（W29 陷阱③的本尊），一次大浪潮賠掉多年租金——沒有資本與風控就裸賣，是撿鋼板的完整定義。':
    'And "sellers always win" is half a myth, too: a seller is running an insurance company — collecting rent every month, with a pretty Sharpe ratio (the real thing behind trap ③ in W29), then one big wave wipes out years of rent. Selling naked without capital and risk controls is the textbook definition of picking up pennies in front of a steamroller.',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「期貨選擇權＝賭博。」':
    '"Futures and options = gambling."',
  '工具中性：農夫用期貨是避險、賭徒用期貨是賭博。差別在':
    'The tool is neutral: a farmer using futures is hedging; a gambler using futures is gambling. The difference is ',
  '有沒有對應的曝險要對沖':
    'whether there is an underlying exposure to offset',
  '——有現股才叫避險，沒有就是裸部位。':
    ' — with stock in hand it is a hedge; without it, it is a naked position.',
  '「保險越多越安心。」':
    '"The more insurance, the safer I feel."',
  '保費是確定成本。全年投保 ~10% 的保費會把期望報酬吃到見骨——保險買「破產風險」，不買「波動不舒服」。':
    'A premium is a certain cost. Insuring all year at ~10% eats expected returns down to the bone — insurance is for "the risk of ruin," not for "volatility that feels uncomfortable."',
  '「有人靠賣選擇權財富自由。」':
    '"Some people got financially free selling options."',
  '倖存者敘事（W24 的警告）——同一策略的爆倉者不會開課。':
    'A survivorship narrative (W24\'s warning) — the people who blew up on the same strategy don\'t run courses.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '規格以官方為準':
    'Specs: the official source rules',
  '50 分鐘':
    '50 min',
  '30 分鐘':
    '30 min',
  '臺灣期貨交易所：台指期與台指選擇權現行規格、保證金':
    'Taiwan Futures Exchange: current specs and margins for TAIEX futures and options',
  '講義的量級以此為準；順看「交易人須知」的風險預告。':
    'The magnitudes in the notes defer to this; also read the risk disclosure in the "Trader\'s Guide."',
  '臺灣期貨交易所 ↗':
    'Taiwan Futures Exchange ↗',
  '5 分鐘':
    '5 min',
  '回顧 W28 風險模組':
    'Review the W28 risk module',
  '你的組合 VaR 是多少？本週練習會替它「詢價」。':
    'What is your portfolio\'s VaR? This week\'s exercise will go and "get a quote" on it.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '替模擬組合詢一次保險價':
    'Get an insurance quote for the paper portfolio',
  '任務 A｜保單報價（30 分鐘）':
    'Task A | The policy quote (30 minutes)',
  '查台指選擇權':
    'Pull up the TAIEX options market\'s ',
  '實際報價':
    'actual quote',
  '：取 2–3 個月期、價外約 5% 的賣權權利金':
    ': take the premium of a put about 5% out of the money, with 2–3 months to expiry',
  '換算：權利金點數 × 50 元 × 需要口數（股票部位市值 ÷ (指數 × 50 元)）→ 保費佔組合 %':
    'Convert: premium points × NT$50 × number of contracts needed (market value of the stock position ÷ (index × NT$50)) → premium as a % of the portfolio',
  '年化（×4 粗略），寫下：「幫我的組合全年投保要＿%——我的結論是＿＿」':
    'Annualize (roughly ×4) and write down: "Insuring my portfolio for the full year costs _% — my conclusion is __"',
  '用講義算例重算一遍保險表（92.5 鎖定值）':
    'Redo the insurance table using the worked example in the notes (the locked-in value of 92.5)',
  '任務 B｜payoff 圖（15 分鐘）':
    'Task B | Payoff charts (15 minutes)',
  '試算表畫兩張到期 payoff 圖（X＝到期股價 70–130），跟純持股的直線對照——親手畫過一次，形狀一輩子忘不掉':
    'In a spreadsheet, draw two expiry payoff charts (X = stock price at expiry, 70–130) and compare each with the straight line for just holding the stock — draw them by hand once and the shapes stay with you for life',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '保護性賣權在履約價以下是一條水平線，高度＝履約價 − 權利金（95 − 2.5 ＝ 92.5）；covered call 在履約價以上是水平線，高度＝履約價＋權利金（105 ＋ 2 ＝ 107）。拿上面的實驗台對答案。':
    'The protective put is a flat line below the strike, at a height of strike − premium (95 − 2.5 = 92.5); the covered call is a flat line above the strike, at a height of strike + premium (105 + 2 = 107). Check your answers against the lab above.',
  '真實保費詢價完成（有日期與報價來源）':
    'A real insurance quote obtained (with the date and the source of the quote)',
  '兩張 payoff 圖畫出':
    'Both payoff charts drawn',
  '能解釋為什麼不常態投保':
    'Can explain why we don\'t insure all the time',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '避險與投機的分界線是什麼（一句話）？':
    'What is the line between hedging and speculation (in one sentence)?',
  '有沒有對應的既有曝險':
    'Whether there is an existing exposure to offset',
  '：對沖手上真實部位的風險＝避險；沒有部位而建立方向性曝險＝投機。同一張合約，差別只在你的資產負債表。':
    ': offsetting the risk of a real position you hold is hedging; creating a directional exposure when you hold no position is speculation. Same contract — the only difference is your balance sheet.',
  '為什麼「買方要三個全對、賣方只要不全對」？':
    'Why does "the buyer has to be right on all three, while the seller only needs the three not to all happen"?',
  '→ 買方損益＝方向 × 幅度 − 時間價值衰減：方向錯、幅度不夠、或時間拖太久，任一個都讓權利金歸零；賣方收下權利金後，只要「三個全對」不發生就落袋。結構性的勝率不對稱——但賣方的尾部虧損無上限，':
    '→ Buyer\'s P&L = direction × size − time-value decay: wrong direction, not enough size, or too long a wait — any one of them sends the premium to zero. Once the seller has collected the premium, they pocket it as long as "all three right" doesn\'t happen. A structural asymmetry in win rate — but the seller\'s tail loss is unlimited: ',
  '勝率高 ≠ 期望值高':
    'a high win rate does not mean a high expected value',
  '你的組合在什麼「特定情境」下值得買 put？':
    'Under what "specific circumstances" is it worth buying a put on your portfolio?',
  '已知的重大二元事件':
    'A known, major binary event',
  '（大選、重大裁決、關鍵財報）疊加':
    ' (an election, a major ruling, a key earnings report) combined with ',
  '無法降低的集中部位':
    'a concentrated position you can\'t reduce',
  '（如限售股、近期要動用的資金）——「短期間、特定風險、無法用賣出解決」三條件都滿足時，付保費才划算；平時的市場波動用配置吸收即可。':
    ' (such as restricted stock, or money you\'ll need soon) — only when all three conditions hold (a short period, a specific risk, and no way to solve it by selling) is paying the premium worth it; ordinary market swings are absorbed by your allocation.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '投資的車險':
    'Car insurance for investing',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（保險的語言）':
    'Opening (the language of insurance)',
  '「你買過車險吧？付保費、有自負額、出事才理賠、沒出事保費歸零。股票世界有一模一樣的東西——今天講投資的保險。」':
    '"You\'ve bought car insurance, right? You pay a premium, there\'s a deductible, it pays out only when something happens, and if nothing happens the premium is gone. The stock world has exactly the same thing — today I\'m talking about insurance for investing."',
  '核心演示':
    'The core demo',
  '「我們的股票 100 萬，付 2.5 萬保費，保證跌到哪都剩 92.5 萬。」（結構與車險完全同構，家人秒懂。）「':
    '"We hold NT$1,000,000 of stock. Pay NT$25,000 in premium and we\'re guaranteed to have NT$925,000 left, no matter how far it falls." (The structure is exactly the same as car insurance, so the family gets it instantly.) "',
  '但你猜這保險一年要多少？大概 10%':
    'But guess what this insurance costs for a year? About 10%',
  '——比車險貴太多了。所以我們平常不保，靠的是配置：債券與現金那部分就是天然的減震。」':
    ' — far more than car insurance. So normally we don\'t buy it, and rely on allocation instead: the bond and cash part is a natural shock absorber."',
  '互動（識破話術）':
    'Interaction (spotting the sales pitch)',
  '「有人說他『賣保險給別人、月月穩定收租』——聽起來穩嗎？」':
    '"Someone says he \'sells insurance to other people and collects steady rent every month\' — does that sound safe?"',
  '引導：保險公司平時都賺，大災那年呢？聽到「選擇權穩定現金流」，先問：大跌那個月你賠多少？':
    'Guide the conversation: the insurance company makes money in ordinary years — but what about the year of the big disaster? When you hear "steady option income," first ask: how much did you lose in the month of the big drop?',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那期貨呢？聽說很危險。」':
    '"What about futures? I heard they\'re dangerous."',
  '「工具不危險，10 倍槓桿才危險——同一把菜刀，切菜和揮舞是兩回事。我們家用不到槓桿，IPS 的禁止事項寫著呢。」':
    '"The tool isn\'t dangerous; 10x leverage is. It\'s the same kitchen knife — chopping vegetables and waving it around are two different things. Our family has no use for leverage, and it\'s right there in the prohibited list in our IPS."',
  '「完全不碰不就好了？」':
    '"Why not just never touch them?"',
  '「不碰是好預設！但要':
    '"Not touching them is a good default! But you have to ',
  '看得懂':
    'be able to read them',
  '——公司財報裡有它（避險部位）、推銷話術裡有它，看不懂的人才會被騙。」':
    ' — they\'re in company financial statements (as hedging positions) and in sales pitches, and the people who can\'t read them are the ones who get fooled."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能畫出保護性賣權與 covered call 的 payoff':
    'Can draw the payoff of a protective put and a covered call',
  '真實詢價完成、能說出「為何不常態投保」':
    'Real quote obtained, and can say "why we don\'t insure all the time"',
  '能區分避險與投機（曝險對應原則）':
    'Can tell hedging from speculation (the exposure-matching principle)',
  '分享環節完成，記錄卡住的點':
    'Sharing session done; wrote down where I got stuck',
  '回填 curriculum/01-overview.md 第 33 週進度欄':
    'Fill in the Week 33 progress column of curriculum/01-overview.md',
  '下週預告 · Week 34：交易執行':
    'Next week · Week 34: trade execution',
  '——從「決定買」到「真的買到」之間，錢是怎麼漏掉的：滑價、市場衝擊，與大單的拆法。':
    ' — between "deciding to buy" and "actually buying," how money leaks out: slippage, market impact, and how to split up a big order.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：因子投資':
    'Previous week: factor investing',
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
  '到期損益圖':
    'Payoff at expiry chart',
  '答對了——一季保費約 2.5%，四季加起來約 10%，比多數年份的股市報酬還高。所以長期常態投保幾乎必然侵蝕報酬；保險要買在特定事件、特定部位、特定期間。':
    'Correct — a quarter\'s premium is about 2.5%, and four quarters add up to about 10%, more than the stock market returns in most years. So buying insurance all the time almost inevitably eats into returns; buy it for a specific event, a specific position, a specific period.',
  '大部分人都低估了——價外 5% 的三個月期賣權，權利金常在 2.5% 上下，四季加起來約 10%，比多數年份的股市報酬還高。所以長期常態投保幾乎必然侵蝕報酬。':
    'Most people underestimate it — a three-month put 5% out of the money often costs about 2.5% in premium, and four quarters add up to about 10%, more than the stock market returns in most years. So buying insurance all the time almost inevitably eats into returns.',
  '元':
    'TWD',
  '萬':
    '',
  '±0 元':
    '±0 TWD',
  '<b>指數不動，什麼都沒發生。</b>把漲跌拉開，看槓桿怎麼放大。':
    '<b>The index didn\'t move, so nothing happened.</b> Drag the move wider and watch how leverage magnifies it.',
  '<b>指數只動':
    '<b>The index moved only',
  '，做多一口的保證金就動了':
    ', and the margin on one long contract moved',
  '保證金已經賠光還不夠——這就是被追繳、斷頭的那一刻。':
    ' The margin is wiped out and then some — this is the moment of the margin call and forced liquidation.',
  '保證金腰斬——遠在觸及這裡之前，你就會收到追繳通知。':
    ' Margin cut in half — long before you get here, you would have received a margin call.',
  '同一口合約若是拿來對沖等值的現股：現股':
    ' If the same contract is used to hedge an equal value of stock, the stock',
  '、期貨':
    ', the futures',
  '，淨變動是零——這才是避險。':
    ', so the net change is zero — that is hedging.',
  '<b>地板＝履約價 − 權利金 ＝':
    '<b>Floor = strike − premium =',
  '股價跌破履約價，保險開始理賠——再怎麼跌都鎖在地板。':
    ' The stock has fallen below the strike, so the insurance starts paying — however far it drops, you are locked in at the floor.',
  '股價在履約價之上，保險沒用上——你付的':
    ' The stock is above the strike, so the insurance wasn\'t needed — the',
  '就是這季的保費。':
    'you paid is this quarter\'s premium.',
  '最大損失 ＝ (100 − 履約價) ＋ 權利金 ＝':
    ' Maximum loss = (100 − strike) + premium =',
  '<b>天花板＝履約價＋權利金 ＝':
    '<b>Ceiling = strike + premium =',
  '股價漲過履約價，超出的部分歸買方——大漲被截斷了。':
    ' The stock has risen above the strike, so everything above it goes to the buyer — the big rally is capped.',
  '股價在履約價之下，你多收了':
    ' The stock is below the strike, and you collected an extra',
  '的租金墊著。':
    'in premium to cushion the fall.',
  '賣掉的是大漲的可能性，換來的是固定租金。':
    ' What you sold is the chance of a big rise, and what you got in return is a fixed rent.',
  '✓ 保單的形狀畫進腦子了——下週看錢怎麼在下單時漏掉。':
    '✓ The shape of the policy is in your head — next week, watch how money leaks out when you place the order.',
};
