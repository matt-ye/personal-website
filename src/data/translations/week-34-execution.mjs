/*
 * 給家人的投資課 Week 34：交易執行——滑價與市場衝擊 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-34-execution.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 張 → lots（1 lot = 1,000 shares，首次出現處註明）；JS 的『天』→ day(s)；TWAP／VWAP 的中文括號說明改接在術語之後。
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
  '給家人的投資課 · Q3 操盤手季 · Week 34':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 34',
  '交易執行——滑價與市場衝擊':
    'Trade execution — slippage and market impact',
  'W10 算過「明示的過路費」（手續費、稅），本週算':
    'W10 worked out the "visible tolls" (commissions and taxes). This week we work out ',
  '看不見的那一半':
    'the invisible half',
  '：從「決定買」到「真的買到」之間漏掉的錢。':
    ': the money that leaks out between "deciding to buy" and "actually buying."',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 10、27 週':
    'Prerequisites: Weeks 10 and 27',
  '52 週 · 第 34 週':
    '52 weeks · Week 34',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '對操盤手，執行是每天的手藝；對長期投資人，它決定「紙上策略」與「實際績效」的差距——W27 的 TWR／MWR 之外，第三個吃掉報酬的縫隙。':
    'For a portfolio manager, execution is a daily craft; for a long-term investor, it decides the gap between the "paper strategy" and "actual performance" — after W27\'s TWR/MWR, the third gap that eats your returns.',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週的保單詢價——幫你的組合全年投保要多少 %？結論是什麼？':
    'Look back at last week\'s insurance quote — what percentage would it cost to insure your portfolio for the full year? What was your conclusion?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '中大型的交易單，手續費稅這種「看得見的成本」，跟價差、滑價、市場衝擊這些「看不見的成本」比起來？':
    'For a mid-sized or large trade, how do "visible costs" like commissions and taxes compare with "invisible costs" like the bid-ask spread, slippage, and market impact?',
  '看得見的比較多':
    'The visible ones are bigger',
  '差不多':
    'About the same',
  '看不見的常常是數倍':
    'The invisible ones are often several times larger',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 交易成本的完整地圖':
    '1. The full map of trading costs',
  '層':
    'Layer',
  '成本':
    'Cost',
  '何時看得見':
    'When you can see it',
  '顯性':
    'Explicit',
  '手續費、證交稅（W10）':
    'Commissions and securities transaction tax (W10)',
  '對帳單上':
    'On your statement',
  '隱性一':
    'Hidden #1',
  '買賣價差':
    'Bid-ask spread',
  '：成交瞬間就付掉價差的一半':
    ': you pay half the spread the instant the trade executes',
  '永遠不出現在對帳單':
    'Never appears on your statement',
  '隱性二':
    'Hidden #2',
  '滑價':
    'Slippage',
  '：從決定到成交之間的價格移動':
    ': the price move between deciding and executing',
  '要自己記錄才看得到':
    'You only see it if you record it yourself',
  '隱性三':
    'Hidden #3',
  '市場衝擊':
    'Market impact',
  '：你的單本身把價格推走':
    ': your own order pushes the price away',
  '單大才顯著':
    'Only significant for large orders',
  '隱性四':
    'Hidden #4',
  '機會成本':
    'Opportunity cost',
  '：掛太低沒買到，股價飛了':
    ': you bid too low, didn\'t get filled, and the stock took off',
  '最痛也最常被遺忘':
    'The most painful, and the most often forgotten',
  '機構的實證共識：':
    'The institutional empirical consensus: ',
  '中大型單的隱性成本常數倍於顯性成本':
    'for mid-sized and large orders, hidden costs are often several times the explicit costs',
  '——你在 W10 算的只是冰山露出水面的部分。':
    ' — what you worked out in W10 was only the tip of the iceberg above the water.',
  '2. Implementation Shortfall：把全部漏損一次算清':
    '2. Implementation shortfall: counting every leak at once',
  'IS（實施短缺）':
    'IS (implementation shortfall)',
  '＝「理想成交（決策當下的價格、全部成交、零成本）」與「實際結果」的總差距。':
    ' = the total gap between the "ideal fill (the price at the moment of decision, fully filled, zero cost)" and the "actual result."',
  '算例：決策時股價 100。實際執行：80% 的量分批成交在均價 100.6（手續費 0.1%），剩下 20% 掛太低沒買到，股價已走到 103 放棄追——':
    'Worked example: the stock is 100 when you decide. In execution, 80% of the quantity is filled in slices at an average of 100.6 (commission 0.1%); the other 20% was bid too low and never filled, and by the time the stock had gone to 103 you gave up chasing —',
  '成交部分：(100.6 − 100) ÷ 100 ＋ 0.1% ＝':
    'Filled part: (100.6 − 100) ÷ 100 + 0.1% =',
  '未成交機會成本：20% × (103 − 100) ÷ 100 ＝':
    'Unfilled opportunity cost: 20% × (103 − 100) ÷ 100 =',
  '總 IS ≈ 0.8 × 0.70% ＋ 0.60% ＝ 1.16%':
    'Total IS ≈ 0.8 × 0.70% + 0.60% = 1.16%',
  '一次進場就漏掉 1.16%——什麼都還沒賺，先輸給「執行」一大截。IS 的價值在於':
    'One entry leaks 1.16% — you haven\'t earned anything yet and you\'re already well behind because of "execution." The value of IS is that it ',
  '把「沒買到」也算成成本':
    'counts "didn\'t get filled" as a cost too',
  '：只記滑價的人會越掛越低、越等越久，帳面「零滑價」、實際機會成本爆表。':
    ': people who only track slippage bid lower and lower and wait longer and longer, showing "zero slippage" on paper while their opportunity cost explodes.',
  'IS 計算器':
    'IS calculator',
  '決策價固定 100。拉成交均價、費率、成交比例與放棄時的股價，看哪一塊漏得最多。':
    'The decision price is fixed at 100. Drag the average fill price, the fee rate, the fill ratio, and the stock price when you gave up, and see which piece leaks the most.',
  '成交均價':
    'Average fill price',
  '手續費率':
    'Commission rate',
  '成交比例':
    'Fill ratio',
  '放棄時的股價':
    'Stock price when you gave up',
  '成交部分成本':
    'Cost of the filled part',
  '滑價＋費用 × 成交比例':
    'Slippage + fees × fill ratio',
  '未成交 × 錯過的漲幅':
    'Unfilled × the rise you missed',
  '總 IS':
    'Total IS',
  '這一筆漏掉的':
    'What this trade leaked',
  '拉動滑桿。':
    'Drag the sliders.',
  '3. 市場衝擊與參與率：大單的物理學':
    '3. Market impact and participation rate: the physics of big orders',
  '你的買單會消耗掛單簿的賣單（W10 的五檔）——單越大，吃穿越多檔，':
    'Your buy order consumes the sell orders in the order book (the five levels in W10) — the bigger the order, the more levels you eat through, and ',
  '你自己就是漲價的原因':
    'you yourself become the reason the price goes up',
  '。經驗法則（量級）：單日成交量若超過該股':
    '. Rule of thumb (order of magnitude): once your order for the day exceeds ',
  '日均量（ADV）的 10–20%':
    '10–20% of the stock\'s average daily volume (ADV)',
  '，市場衝擊開始顯著。':
    ', market impact starts to become significant.',
  '算例：某中型股日均量 5,000 張，你要買 1,000 張 ＝ ADV 的 20% → 用 10% 參與率拆成':
    'Worked example: a mid-sized stock trades 5,000 lots a day on average (1 lot = 1,000 shares) and you want to buy 1,000 lots = 20% of ADV → split it at a 10% participation rate over ',
  '2 天':
    '2 days',
  '；若是 5,000 張的單就得拆一到兩週——':
    '; an order of 5,000 lots would take one to two weeks — ',
  '流動性差的標的，部位大小天生有上限':
    'for an illiquid stock, position size has a built-in ceiling',
  '（W18 倉位的另一個約束來源）。':
    ' (another source of constraint on W18\'s position sizing).',
  '機構的拆單演算法只需要概念：':
    'Institutions\' order-splitting algorithms only need to be understood as ideas: ',
  '（時間均分）、':
    ' (time-weighted: spread it evenly over time), ',
  '（跟著成交量的節奏買）——目標都是把腳印踩淡。個人版：大部位分 2–5 天、每天限價分筆，不求買在最低，只求不把價格自己推走。':
    ' (volume-weighted: buy in step with the rhythm of trading volume) — the goal of both is to make your footprint lighter. The individual\'s version: split a big position over 2–5 days, with limit orders in several slices each day; don\'t try to buy at the lowest price, just don\'t push the price yourself.',
  '拆單規劃器':
    'Order-splitting planner',
  '輸入日均量與你的單量，選參與率，看要拆幾天、單日吃掉多少流動性。':
    'Enter the average daily volume and your order size, pick a participation rate, and see how many days it takes to split and how much of a day\'s liquidity you eat.',
  '日均量（ADV）':
    'Average daily volume (ADV)',
  '5,000 張':
    '5,000 lots',
  '你的單量':
    'Your order size',
  '1,000 張':
    '1,000 lots',
  '參與率上限':
    'Participation rate cap',
  '單量佔 ADV':
    'Order as % of ADV',
  '一天做完的話':
    'If done in one day',
  '要拆幾天':
    'Days to split over',
  '每天不超過參與率':
    'Never more than the participation rate per day',
  '每天下多少':
    'How much to place each day',
  'ADV × 參與率':
    'ADV × participation rate',
  '4. 個人投資者的執行紀律（可直接抄）':
    '4. An individual investor\'s execution discipline (copy it directly)',
  '預設限價單':
    'Default to limit orders',
  '——市價單只在「流動性極佳＋急迫性真實」時用':
    ' — use market orders only when liquidity is excellent and the urgency is real',
  '避開開盤前 15 分鐘':
    'Avoid the first 15 minutes after the open',
  '——集合競價後的價格發現期，價差最寬、波動最大；也避開收盤前試撮的雜訊':
    ' — it\'s the price-discovery period after the opening auction, when spreads are widest and volatility is highest; also avoid the noise of the indicative matching before the close',
  '限價掛哪裡':
    'Where to place the limit',
  '——想成交就掛對手方最佳價（買掛賣一），想省價差就掛己方最佳價（買掛買一）承擔等待風險——知道自己在選哪個':
    ' — if you want to get filled, bid at the counterparty\'s best price (buy at the best ask); if you want to save the spread, bid at your own side\'s best price (buy at the best bid) and take on the risk of waiting — know which one you are choosing',
  '決策價要記下來':
    'Write down the decision price',
  '——IS 的起點。沒有記錄就沒有改進':
    ' — it is the starting point of IS. No record, no improvement',
  '零股與冷門股加倍小心':
    'Be doubly careful with odd lots and thinly traded stocks',
  '——價差比例可能是權值股的 5–10 倍；「省手續費折扣、賠價差」是撿芝麻丟西瓜':
    ' — the spread as a percentage can be 5–10 times that of a large cap; "saving the commission discount and losing on the spread" is penny wise, pound foolish',
  '5. 常見誤解闢謠':
    '5. Three things people get wrong',
  '「我單很小，沒有市場衝擊。」':
    '"My orders are small, so there\'s no market impact."',
  '對，但價差與滑價照收；而且小單最容易犯第四層錯（掛太低等不到）——IS 對散戶一樣成立，只是組成不同。':
    'True, but the spread and slippage still apply — and small orders are the most likely to make the fourth-layer mistake (bidding too low and never getting filled). IS applies to individual investors too; the components are just different.',
  '「限價單一定比市價單好。」':
    '"A limit order is always better than a market order."',
  '限價省價差、賠機會成本。':
    'A limit order saves the spread and costs you opportunity. ',
  '急迫性高的交易':
    'High-urgency trades',
  '（再平衡觸發、保險到期前）該付價差買確定性——工具對應目的，不是教條。':
    ' (a rebalancing trigger, before an insurance policy expires) should pay the spread to buy certainty — the tool should match the purpose; it isn\'t dogma.',
  '「執行好可以創造 alpha。」':
    '"Good execution can create alpha."',
  '執行是':
    'Execution ',
  '守住':
    'protects',
  'alpha 不是創造；它的天花板是零漏損——但對比多數人每年漏 1–2%，守住就是超額。':
    ' alpha — it doesn\'t create it; its ceiling is zero leakage. But compared with most people, who leak 1–2% a year, protecting it is already an excess return.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '主菜是實地觀察':
    'The main course is hands-on observation',
  '40 分鐘':
    '40 min',
  '實地觀察：開盤前後的五檔':
    'Hands-on observation: the five levels around the open',
  '開盤前 5 分鐘到開盤後 20 分鐘，盯一檔權值股與一檔冷門股的五檔：記錄價差 % 的變化（開盤瞬間 vs 30 分鐘後）——親眼看「避開開盤」的理由。':
    'From 5 minutes before the open to 20 minutes after, watch the five-level order book of one large-cap stock and one thinly traded stock: record how the spread % changes (the moment of the open vs. 30 minutes later) — see with your own eyes the reason to "avoid the open."',
  '10 分鐘':
    '10 min',
  '回顧 W10 的成本卡與五檔觀察':
    'Review W10\'s cost card and five-level observation',
  '本週把它升級成完整的 IS 觀。':
    'This week you upgrade it into the full IS view.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '把執行紀律裝進模擬組合':
    'Build execution discipline into the paper portfolio',
  '任務 A｜執行紀錄升級（20 分鐘）':
    'Task A | Upgrade the execution log (20 minutes)',
  '交易記錄表加三欄：決策價｜成交均價｜IS%（IS ＝ (成交均價 − 決策價) ÷ 決策價 ＋ 費率）。回填至今所有交易；之後每筆必填':
    'Add three columns to the trade log: decision price | average fill price | IS% (IS = (average fill price − decision price) ÷ decision price + fee rate). Backfill every trade to date; fill it in for every trade from now on',
  '任務 B｜市場衝擊評估（20 分鐘）':
    'Task B | Market impact assessment (20 minutes)',
  '對流動性最差的持股：查日均量，假設部位放大 10 倍後要一天出清——是 ADV 的幾 %？該拆幾天？寫兩行：「這檔的實際部位上限大約是＿＿，因為＿＿」':
    'For your least liquid holding: look up its average daily volume, and suppose the position grows 10x and you had to clear it in one day — what % of ADV is that? How many days should you split it over? Write two lines: "The realistic position cap for this stock is about __, because __"',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  'IS 計算器的預設值就是講義算例，必須出現 0.56%＋0.60%＝1.16%；拆單規劃器預設（5,000 張 ADV、1,000 張、10%）必須是 20% 與 2 天。':
    'The IS calculator\'s defaults are the worked example from the notes, so you must see 0.56% + 0.60% = 1.16%; the order-splitting planner\'s defaults (ADV of 5,000 lots, 1,000 lots, 10%) must give 20% and 2 days.',
  'IS 欄位上線且回填完成':
    'The IS column is live and backfilled',
  '市場衝擊評估完成（有 ADV 數字）':
    'Market impact assessment done (with ADV figures)',
  '實地觀察筆記完成（開盤 vs 盤中價差對比）':
    'Hands-on observation notes done (spread at the open vs. mid-session)',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼「只記滑價、不記機會成本」的人會越掛越低？':
    'Why do people who "only track slippage and not opportunity cost" bid lower and lower?',
  '→ 記分板有盲區：掛低價 → 沒成交 → 「零滑價」的假好成績 → 強化掛更低的行為；錯過的上漲從不進他的帳。':
    '→ The scoreboard has a blind spot: bid low → not filled → a falsely good score of "zero slippage" → reinforces bidding even lower; the rise they missed never enters their books.',
  '度量什麼，就會優化什麼':
    'Whatever you measure is what you optimize',
  '——IS 把兩邊都記，行為才會平衡。':
    ' — IS records both sides, so behavior stays balanced.',
  '再平衡觸發時（W18），該用限價還是積極單？':
    'When a rebalancing trigger fires (W18), should you use a limit order or an aggressive one?',
  '接近市價的積極單':
    'An aggressive order near the market price',
  '。再平衡的目的是風險控制，急迫性真實；為省 0.2% 價差掛低不成交，讓組合多暴露在錯誤配置下好幾天——撿芝麻丟西瓜。省價差的耐心留給非急迫的新增部位。':
    '. The purpose of rebalancing is risk control, so the urgency is real; bidding low to save a 0.2% spread and not getting filled leaves the portfolio exposed to the wrong allocation for days — penny wise, pound foolish. Save the spread-saving patience for non-urgent new positions.',
  '你的 IS 長期平均 +0.8%——對「年周轉次數」的含義是什麼？':
    'Your IS averages +0.8% over the long run — what does that imply for "annual turnover"?',
  '→ IS 是每次交易都要付的隱性過路費：0.8% × 年周轉 5 次 ＝':
    '→ IS is a hidden toll you pay on every trade: 0.8% × 5 turnovers a year = ',
  '4%／年':
    '4% per year',
  '，直接疊在 W10 顯性成本上。高 IS 的人更付不起高周轉；降低周轉是對「執行不佳」最有效的補償。':
    ', stacked right on top of W10\'s explicit costs. People with a high IS can least afford high turnover; cutting turnover is the most effective compensation for poor execution.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '菜市場的物理學':
    'The physics of the wet market',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（一次買 100 斤蔥）':
    'Opening (buying 100 catties of scallions at once)',
  '「你去菜市場一次要買 100 斤蔥，會發生什麼事？」（第一攤買完，第二攤看到你來就漲價。）「大戶買股票也一樣——':
    '"If you went to the wet market and wanted to buy 100 catties of scallions at once, what would happen?" (The first stall sells out, and the second stall sees you coming and raises the price.) "Big investors buying stocks is the same — ',
  '單子太大，自己就把價格買貴了':
    'an order that\'s too big pushes the price up against itself',
  '。所以真正的大戶都『假裝自己是散戶』，分很多天、小口小口買。」':
    '. So the real big players \'pretend to be small investors\': they buy a little at a time, over many days."',
  '核心觀念（看不見的漏水）':
    'The core idea (the invisible leak)',
  '「上次講過買賣股票的『過路費』。今天講更陰的：':
    '"We talked last time about the \'tolls\' of trading stocks. Today is about something sneakier: ',
  '看不見的漏水':
    'the invisible leak',
  '——你想用 100 元買，實際買到 100.6；你掛 99 想省錢，結果沒買到、股票漲到 103……這些帳單上看不到的損失，加起來常常比過路費還多。」':
    ' — you wanted to buy at 100 but actually paid 100.6; you bid 99 to save money, didn\'t get filled, and the stock went to 103... These losses that never show up on a statement often add up to more than the tolls."',
  '互動（家庭版執行紀律）':
    'Interaction (the family version of execution discipline)',
  '「我們家買賣的三條鐵律，你幫我記住：①':
    '"Three iron rules for our family\'s trading — help me remember them: ① ',
  '永遠用限價':
    'always use limit orders',
  '（先講好價格）②':
    ' (agree the price first) ② ',
  '不在開盤那一刻搶':
    'don\'t rush in at the moment of the open',
  '（人擠人最貴）③':
    ' (a crowd is the most expensive) ③ ',
  '買之前先看那檔股票熱不熱絡':
    'before buying, check whether the stock is actively traded',
  '（冷門的東西，進得去出不來）。」':
    ' (with thinly traded things, you can get in but you can\'t get out)."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「差 0.5% 有差嗎？」':
    '"Does a 0.5% difference really matter?"',
  '「一次沒差，但它跟過路費一樣會複利——還記得年周轉 5 次、20 年吃掉三分之一的那張表嗎？漏水也算在裡面。」':
    '"Once, no — but it compounds just like tolls do. Remember that table where 5 turnovers a year ate a third over 20 years? The leak is counted in that too."',
  '「那大戶怎麼辦？」':
    '"So what do the big players do?"',
  '「機構有專門的『拆單機器人』，把大單切碎慢慢餵。我們散戶的優勢反而是船小好調頭——別浪費這個優勢去追價。」':
    '"Institutions have dedicated \'order-splitting bots\' that chop a big order into pieces and feed it in slowly. Our advantage as small investors is that a small boat turns easily — don\'t waste that advantage chasing prices."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能畫出交易成本四層地圖並各舉一例':
    'Can draw the four-layer map of trading costs and give an example of each',
  '能手算講義的 IS 算例（1.16%）':
    'Can work out the notes\' IS example (1.16%) by hand',
  '模擬組合 IS 欄位上線＋市場衝擊評估完成':
    'The paper portfolio\'s IS column is live + the market impact assessment is done',
  '分享環節完成（三條鐵律），記錄卡住的點':
    'Sharing session done (the three iron rules); wrote down where I got stuck',
  '回填 curriculum/01-overview.md 第 34 週進度欄':
    'Fill in the Week 34 progress column of curriculum/01-overview.md',
  '下週預告 · Week 35：基金產業實務':
    'Next week · Week 35: how the fund industry works in practice',
  '——看懂基金產業的結構、費用與利益衝突：「理專的薪水誰付的」將有完整答案。':
    ' — understand the fund industry\'s structure, fees, and conflicts of interest: you\'ll get a full answer to "who pays the bank wealth adviser\'s salary?"',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：衍生性商品':
    'Previous week: derivatives',
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
  '日均量':
    'Average daily volume',
  '單量':
    'Order size',
  '參與率':
    'Participation rate',
  '答對了——機構的實證共識是：中大型單的隱性成本常是顯性成本的數倍。對帳單上的手續費只是冰山露出水面的部分。':
    'Correct — the institutional empirical consensus is that the hidden costs of mid-sized and large orders are often several times the explicit costs. The commission on your statement is only the tip of the iceberg above the water.',
  '直覺如此，但機構的實證共識正好相反：中大型單的隱性成本（價差、滑價、市場衝擊、沒買到的機會成本）常是顯性成本的數倍。對帳單上的只是冰山一角。':
    'That\'s the intuition, but the institutional empirical consensus says the opposite: the hidden costs of mid-sized and large orders (spread, slippage, market impact, and the opportunity cost of not getting filled) are often several times the explicit costs. What\'s on your statement is just the tip of the iceberg.',
  '<b>最大的漏洞是沒買到的那部分。</b>對帳單上看起來很省，實際上錯過的漲幅比滑價加費用還貴——這就是只記滑價的人會越掛越低的原因。':
    '<b>The biggest leak is the part that didn\'t get filled.</b> It looks cheap on the statement, but the rise you missed actually costs more than slippage plus fees — which is why people who only track slippage keep bidding lower.',
  '<b>這一筆執行得比決策價還好。</b>可能是耐心掛單換到的，也可能只是運氣——長期平均才看得出你的執行手藝。':
    '<b>This trade was executed better than the decision price.</b> It may have been the patience of a resting order, or it may just be luck — only the long-run average shows your execution craft.',
  '<b>主要漏在成交本身（滑價＋費用）。</b>檢查是不是用了市價單、或在開盤價差最寬的時候進場。':
    '<b>The main leak is in the fill itself (slippage + fees).</b> Check whether you used a market order, or entered when the spread was widest right at the open.',
  '張':
    'lots',
  '天':
    'day(s)',
  '<b>單量不到日均量的一成。</b>一天內分幾筆限價就能完成，市場衝擊有限。':
    '<b>Your order is under a tenth of average daily volume.</b> A few limit-order slices within one day will do it, and the market impact is limited.',
  '<b>單量佔日均量':
    '<b>Your order is',
  '%——一天做完會自己推高價格。</b>拆成':
    '% of average daily volume — doing it all in one day would push the price up yourself.</b> Split it over',
  '天、每天限價分筆，把腳印踩淡。':
    'days, using limit orders in several slices each day to keep your footprint light.',
  '<b>要拆':
    '<b>You\'d have to split it over',
  '天才不會壓垮流動性。</b>這代表部位相對這檔股票太大了——流動性本身就是部位上限（W18 倉位的另一個約束），進得去也要想想出不出得來。':
    'days to avoid overwhelming the liquidity.</b> That means the position is too large relative to this stock — liquidity itself is the position cap (another constraint on W18\'s position sizing), and getting in also means thinking about whether you can get out.',
  '✓ 漏水點都找到了——下週看基金產業的費用結構與利益衝突。':
    '✓ All the leaks found — next week, the fund industry\'s fee structure and conflicts of interest.',
};
