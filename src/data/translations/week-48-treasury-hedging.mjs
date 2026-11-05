/*
 * 給家人的投資課 Week 48：資金調度與避險——匯率與利率風險 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-48-treasury-hedging.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 金額：散文照 W17／W27 換算；JS 算出的萬元值改掛單位標籤（NT$10k／CNY 10k）。
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
  '給家人的投資課 · Q4 財務長季 · Week 48':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 48',
  '資金調度與避險——匯率與利率風險':
    'Funding and Hedging — Currency and Interest-Rate Risk',
  'W33 學的衍生品保險，本週裝進公司：出口商手上的美元、浮動利率的借款、海外子公司的報表。核心紀律一句話：':
    'The derivatives-as-insurance idea from W33, fitted into a company this week: an exporter\'s US dollars, floating-rate borrowings, an overseas subsidiary\'s financial statements. The core discipline in one line: ',
  '財務部是滅火器，不是印鈔機':
    'The treasury is a fire extinguisher, not a money printer',
  '——台灣的 TRF 風暴，就是忘記這句話的集體學費。':
    ' — Taiwan\'s TRF storm was the collective tuition fee for forgetting that line.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 3、33、43 週':
    'Prerequisites: Weeks 3, 33, 43',
  '52 週 · 第 48 週':
    '52 weeks · Week 48',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'CFO 管理本業以外的波動；投資人讀年報的避險附註，那一頁是 CFO 給你的人格測驗。':
    'The CFO manages the volatility that sits outside the core business; the investor reads the hedging note in the annual report — that page is the CFO\'s personality test, handed to you.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的頂讓故事——家人算出「不該買」了嗎？':
    'Look back at last week\'s shop-takeover story — did your family work out that it "should not be bought"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '出口商用遠期外匯鎖定匯率 31.5。三個月後台幣貶到 32.5，等於「少賺 100 萬」。這筆避險是失敗嗎？':
    'An exporter locks in an exchange rate of 31.5 with a forward contract. Three months later the Taiwan dollar has weakened to 32.5, which means "NT$1,000,000 less earned." Did this hedge fail?',
  '是，早知道不要避':
    'Yes — we should never have hedged',
  '不是，它買到的是確定性':
    'No — what it bought was certainty',
  '要看下一季匯率怎麼走':
    'It depends on which way the rate goes next quarter',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 匯率曝險的三張臉':
    '1. The three faces of currency exposure',
  '曝險':
    'Exposure',
  '定義':
    'Definition',
  '例子':
    'Examples',
  '管理工具':
    'How to manage it',
  '交易曝險':
    'Transaction exposure',
  '已簽約的未來外幣收付':
    'Contracted future foreign-currency receipts and payments',
  '三個月後收 100 萬美元貨款':
    'Collecting a US$1 million payment in three months',
  '遠期外匯、選擇權（本週主角）':
    'Forward contracts and options (this week\'s stars)',
  '換算曝險':
    'Translation exposure',
  '海外子公司報表換算回母幣':
    'An overseas subsidiary\'s statements translated back into the parent\'s currency',
  '美國子公司的美元資產負債':
    'The US subsidiary\'s US-dollar assets and liabilities',
  '通常不避（帳面效果，不是現金）':
    'Usually not hedged (an accounting effect, not cash)',
  '經濟曝險':
    'Economic exposure',
  '匯率長期改變競爭力':
    'Exchange rates changing competitiveness over the long run',
  '台幣長期升值侵蝕出口報價力':
    'A persistently stronger Taiwan dollar erodes export pricing power',
  '金融工具解不了——靠營運布局（海外設廠、雙幣定價）':
    'Financial instruments can\'t fix it — it takes operational choices (plants overseas, pricing in two currencies)',
  '台灣出口商的日常：接單美元、成本台幣——':
    'A Taiwanese exporter\'s daily reality: orders in US dollars, costs in Taiwan dollars — ',
  '台幣升值直接咬毛利':
    'a stronger Taiwan dollar bites straight into gross margin',
  '（W5 的毛利率殺手之一）。這是台灣 CFO 最重要的單一風險。':
    ' (one of the gross-margin killers from W5). This is the single most important risk for a Taiwanese CFO.',
  '2. 遠期外匯：避險的原型':
    '2. Forward contracts: the prototype of hedging',
  '出口商三個月後將收':
    'In three months an exporter will receive ',
  '100 萬美元':
    'US$1 million',
  '，今天跟銀行簽遠期合約，鎖定匯率':
    ', and today signs a forward contract with the bank, locking in the rate of',
  '：到期不管即期匯率是 30.0 還是 32.5，都收 3,150 萬台幣。':
    ': at maturity, whether the spot rate is 30.0 or 32.5, it collects NT$31.5 million either way.',
  '正確判讀':
    'How to read it correctly',
  '：避險把多種可能變成':
    ': hedging turns many possible outcomes into ',
  '一種確定':
    'one certain outcome',
  '——它不是賺錢工具，是「把匯率從變數變常數」的工具。事後看「少賺 100 萬」不是避險失敗：':
    ' — it is not a money-making tool, it is a tool for "turning the exchange rate from a variable into a constant." Looking back and seeing "NT$1,000,000 less earned" does not make the hedge a failure: ',
  '消除不確定性本身就是產品':
    'eliminating uncertainty is itself the product',
  '，公司因此能放心報價、算毛利、做 W46 的預算。用 W38 的語言：評價避險看決策品質，不看結果。':
    ', which lets the company quote prices, work out margins and build the W46 budget with confidence. In W38\'s terms: judge a hedge by the quality of the decision, not by the result.',
  '遠期外匯與避險比率':
    'Forward contracts and the hedge ratio',
  '100 萬美元應收、遠期匯率 31.5。拉避險比率，看三個月後收入的「可能範圍」怎麼收窄。':
    'A US$1 million receivable, forward rate 31.5. Raise the hedge ratio and watch the "possible range" of income in three months narrow.',
  '全避・台幣升到 30':
    'Fully hedged · TWD rises to 30',
  '全避・台幣貶到 32.5':
    'Fully hedged · TWD weakens to 32.5',
  '避 60%・升到 30':
    'Hedge 60% · rises to 30',
  '不避・升到 30':
    'No hedge · rises to 30',
  '三個月後即期匯率':
    'Spot rate in three months',
  '避險比率':
    'Hedge ratio',
  '有避險的收入':
    'Income with the hedge',
  '萬台幣':
    'NT$10k',
  '完全不避的收入':
    'Income with no hedge at all',
  '匯率 30–33 時的收入範圍':
    'Income range for rates of 30–33',
  '不確定性的寬度':
    'Width of the uncertainty',
  '工具家譜':
    'The family of tools',
  '（概念即可）：遠期外匯（鎖死，最常用）、外匯選擇權（付權利金、保留好處——W33 的保險邏輯）、換匯換利與利率交換（把浮動利率換固定、把美元債換台幣債，本質都是「交換現金流的合約」）。':
    ' (the concept is enough): forward contracts (lock it down, the most common), currency options (pay a premium, keep the upside — the insurance logic of W33), and cross-currency swaps and interest-rate swaps (swap floating for fixed, swap US-dollar debt for Taiwan-dollar debt; at heart all of them are "contracts to exchange cash flows").',
  '3. 避險政策：把「避多少」寫成制度':
    '3. Hedging policy: writing "how much to hedge" into a rule',
  '好公司的避險像 IPS（W18），不靠財務長的手感：':
    'A good company hedges the way an IPS works (W18), not on the CFO\'s gut feel:',
  '：交易曝險的 50–80%——留一部分自然波動；100% 避險成本高，也放棄所有上檔':
    ': 50–80% of the transaction exposure — leave some natural fluctuation; a 100% hedge costs more and also gives up all the upside',
  '期間對齊':
    'Matching tenors',
  '：避險天期＝收付款天期，超過的部分就是投機':
    ': the hedge\'s tenor equals the tenor of the receipt or payment; anything beyond that is speculation',
  '禁止投機條款':
    'No-speculation clause',
  '沒有對應的曝險，不得建立衍生品部位':
    ' No derivative position may be opened without a matching exposure',
  '——W33 的分界線寫進公司章程':
    ' — the dividing line from W33, written into the company\'s articles',
  '自然避險優先':
    'Natural hedging first',
  '：美元收入配美元採購、美元借款，收支同幣別互相抵銷——零成本、零對手風險，最被低估的工具':
    ': match US-dollar revenue with US-dollar purchases and US-dollar borrowing, so receipts and payments in the same currency offset each other — zero cost, zero counterparty risk, and the most underrated tool',
  '4. 台灣的血淚教材：TRF 風暴':
    '4. A hard lesson from Taiwan: the TRF storm',
  '2014–2016 年，大量台灣中小企業（多為有人民幣收付的貿易商）向銀行買了':
    'From 2014 to 2016, a large number of Taiwanese small and medium-sized businesses (mostly traders with renminbi receipts and payments) bought ',
  'TRF（目標可贖回遠期合約）':
    'TRFs (target redemption forwards)',
  '，被包裝成「避險兼賺匯差」。結構的致命處：':
    ' from banks, packaged as "a hedge that also earns you an exchange-rate spread." The fatal flaw in the structure: ',
  '獲利有上限（達標即出場）、虧損無下限，而且常有雙倍槓桿':
    'gains are capped (the contract ends once the target is hit), losses have no floor, and there is often double leverage',
  '。人民幣單邊升值時月月小賺；2015 年 8 月人民幣匯改急貶後，虧損雪崩，損失以百億計。':
    '. While the renminbi rose steadily in one direction, they made small gains every month; after the August 2015 renminbi exchange-rate reform sent it sharply lower, the losses avalanched, running into the tens of billions.',
  'TRF 形狀測試':
    'TRF shape test',
  '示意模型：每月名目 100 萬美元，履約價 6.20。匯率低於 6.20（人民幣強）時公司賺差價，累積賺滿「出場目標」就提前結束；高於 6.20 時，公司按槓桿倍數賠差價，沒有下限。單位：萬元人民幣。':
    'An illustrative model: a monthly notional of US$1 million, strike 6.20. When the rate is below 6.20 (a strong renminbi) the company earns the difference, and the contract ends early once cumulative gains reach the "exit target"; above 6.20, the company pays the difference multiplied by the leverage, with no floor. Unit: CNY 10k.',
  '人民幣續升':
    'Renminbi keeps rising',
  '小幅反轉':
    'Small reversal',
  '急貶（2015 式）':
    'Sharp fall (2015-style)',
  '12 個月後匯率':
    'Exchange rate after 12 months',
  '虧損槓桿':
    'Loss leverage',
  '2 倍':
    '2 times',
  '出場目標（獲利上限）':
    'Exit target (profit cap)',
  '最多能賺':
    'Maximum gain',
  '出場目標':
    'Exit target',
  '實際累積損益':
    'Actual cumulative gain or loss',
  '萬元人民幣':
    'CNY 10k',
  '持續月數':
    'Months it lasts',
  '達標即提前出場':
    'Exits early once the target is hit',
  '三個教訓，每個都呼應你學過的課：':
    'Three lessons, each echoing a course you\'ve already taken:',
  '「穩定小賺＋極端巨虧」的報酬形狀':
    'The return shape of "steady small gains plus an extreme, huge loss"',
  '——W29 的假高 Sharpe、W33 賣尾部風險的公司版：這種形狀一出現就該警鈴大作':
    ' — the fake high Sharpe of W29, the company version of selling tail risk from W33: when this shape shows up, alarm bells should ring',
  '它從來不是避險':
    'It was never a hedge',
  '——獲利上限讓「保護」在最需要時消失，本質是賣選擇權收權利金，拿公司的命賺零用錢':
    ' — a profit cap makes the "protection" vanish exactly when it is needed most; at heart it is selling options for the premium, risking the company\'s life to earn pocket money',
  '財務部變利潤中心的下場':
    'What happens when the treasury becomes a profit center',
  '——當避險部門開始「貢獻獲利」，誘因已經歪了（W35 利益衝突的內部版）':
    ' — once the hedging department starts to "contribute profit," the incentives are already bent (the in-house version of W35\'s conflicts of interest)',
  '5. 利率風險：W3 的公司版收尾':
    '5. Interest-rate risk: the corporate version of W3, to close',
  '浮動利率借款的公司，升息直接墊高利息（W43 的兩平點被推高）。管理選項：發固定利率債鎖定，或用利率交換把浮動換固定。判斷框架與匯率相同：':
    'For a company with floating-rate borrowing, a rate rise pushes interest costs straight up (and pushes up W43\'s break-even point). The options: issue fixed-rate bonds to lock the rate in, or use an interest-rate swap to turn floating into fixed. The framework is the same as for currency: ',
  '現金流穩定的公司鎖利率＝買預算確定性':
    'a company with stable cash flow that locks in its rate is buying budget certainty',
  '；「猜利率方向」不是 CFO 的工作（W12 擇時的教訓，公司版）。':
    '; "guessing the direction of interest rates" is not the CFO\'s job (the lesson of W12 on market timing, company edition).',
  '投資人視角':
    'The investor\'s view',
  '：翻實習公司年報的「避險會計」與「衍生工具」附註，看三件事：①避了什麼險（幣別、金額）；②工具與天期；③':
    ': open the "hedge accounting" and "derivatives" notes in your internship company\'s annual report and look for three things: ① what is hedged (currency, amount); ② the instruments and their tenors; ③ ',
  '有沒有與曝險無關的部位':
    'any position unrelated to an exposure',
  '——紅旗。附註寫得清楚透明的公司，通常財務紀律也好。':
    ' — a red flag. A company whose notes are clear and transparent usually has good financial discipline too.',
  '6. 常見誤解闢謠':
    '6. Common misconceptions, debunked',
  '「避險有成本，不避最省。」':
    '"Hedging costs money; not hedging is cheapest."',
  '不避險＝把公司損益交給匯率擲骰子；「省下的保費」會在壞年份以毛利率崩跌償還，而且常常發生在最需要現金的時刻（W37）。':
    'Not hedging = handing the company\'s profit and loss to the exchange rate\'s dice; the "premium you saved" gets repaid in a bad year as a collapse in gross margin, and it often happens at the moment you need cash most (W37).',
  '「事後匯率沒動，避險白做了。」':
    '"The exchange rate didn\'t move, so the hedge was wasted."',
  '這是 resulting（W38）：保險沒理賠不代表保險白買；避險買的是「當初就能確定」。':
    'That is resulting (W38): an insurance policy that never pays out was not wasted money; what a hedge buys is "being certain from the start."',
  '「銀行推薦的結構型商品比較划算。」':
    '"The structured product the bank recommends is better value."',
  '複雜度是費用的藏身處（W35）。記住 TRF 的形狀測試：':
    'Complexity is where fees hide (W35). Remember the TRF shape test: ',
  '問清楚最壞情況虧多少——答案是「無下限」就轉身走':
    'ask exactly how much you lose in the worst case — if the answer is "no floor," turn around and walk away',
  '。家庭版同樣適用。':
    '. The same goes for the family version.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '教科書、血淚史與年報附註':
    'A textbook, a painful history, and the notes in an annual report',
  '40 分鐘':
    '40 min',
  '《Principles of Corporate Finance》風險管理章':
    'Principles of Corporate Finance, the risk-management chapter',
  '公司為什麼要避險、怎麼避。':
    'Why companies hedge, and how.',
  'TRF 風暴回顧':
    'Looking back at the TRF storm',
  '搜「TRF 風暴 台灣 中小企業」，讀一篇深度回顧（金管會報告或財經深度報導），對照講義的三個教訓。':
    'Search "TRF storm Taiwan SMEs" and read one in-depth retrospective (a Financial Supervisory Commission report or a major financial feature), then compare it with the three lessons in the notes.',
  '30 分鐘':
    '30 min',
  '實習公司年報的避險附註':
    'The hedging note in your internship company\'s annual report',
  '找「金融工具」「避險會計」附註——第一次讀會硬，用第 5 節的三件事當地圖。這是本週練習的原料。':
    'Look for the "financial instruments" and "hedge accounting" notes — the first read will be heavy going; use the three things in section 5 as your map. This is the raw material for this week\'s exercise.',
  '15 分鐘':
    '15 min',
  'Investopedia：Forward Contract 與 Currency Swap':
    'Investopedia: Forward Contract and Currency Swap',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '實習公司的避險體檢':
    'A hedging check-up for your internship company',
  '外幣曝險':
    'Foreign-currency exposure',
  '：主要幣別、金額量級；附註的敏感度分析表——匯率動 1% 影響損益多少？':
    ': the main currencies and rough size; the sensitivity analysis table in the note — how much does profit and loss change when the exchange rate moves 1%?',
  '避險工具':
    'Hedging instruments',
  '：遠期、選擇權、交換？名目金額、天期':
    ': forwards, options, swaps? Notional amounts and tenors',
  '避險比率估算':
    'Estimating the hedge ratio',
  '：工具名目金額 ÷ 曝險 ≈ ＿%':
    ': instrument notional amount ÷ exposure ≈ ___%',
  '紅旗檢查':
    'Red-flag check',
  '：有沒有與曝險不對應的部位？附註透明度給分（1–5）':
    ': any position that doesn\'t match an exposure? Score the transparency of the notes (1–5)',
  '手算講義的遠期算例三情境（鎖定 3,150 萬）':
    'Work through the notes\' forward example by hand in all three scenarios (locking in NT$31.5 million)',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '遠期台：全避時不管匯率 30 或 32.5，有避險的收入都是 3,150 萬；匯率 30 時不避是 3,000 萬（避險多收 150 萬），32.5 時不避是 3,250 萬（少收 100 萬）。避 60%、匯率 30 時收入 3,090 萬，收入範圍的寬度從不避的 300 萬縮到 120 萬。TRF 形狀測試：「人民幣續升」賺滿 15 就出場；「急貶」12 個月累積 −573 萬元人民幣——最多賺 15，卻賠了它的 38 倍。':
    'Forward example: with a full hedge, whether the rate is 30 or 32.5, income with the hedge is NT$31.5 million; at 30, income with no hedge is NT$30 million (the hedge brings in NT$1.5 million more), and at 32.5, income with no hedge is NT$32.5 million (NT$1,000,000 less). With a 60% hedge and a rate of 30, income is NT$30.9 million, and the width of the income range shrinks from NT$3 million unhedged to NT$1.2 million. TRF shape test: "Renminbi keeps rising" earns the full CNY 150,000 and exits; "Sharp fall" accumulates −CNY 5.73 million after 12 months — the most it could earn was CNY 150,000, yet it lost 38 times that.',
  '避險附註一頁解剖完成（含透明度評分）':
    'One page of the hedging note dissected (transparency score included)',
  '遠期三情境手算通過':
    'Hand calculation of the three forward scenarios done',
  '能複述避險政策四條與 TRF 三教訓':
    'I can recite the four hedging-policy rules and the three TRF lessons',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '「避險後匯率反而對我們有利，虧了 100 萬」——CFO 該怎麼向董事會解釋？':
    '"After hedging, the exchange rate moved in our favor and we lost NT$1,000,000" — how should the CFO explain that to the board?',
  '→ 用':
    '→ Use ',
  '決策與結果分離':
    'separating the decision from the outcome',
  '（W38）：避險當下鎖定的匯率，讓公司能以確定的毛利接單報價；事後匯率走向是無人能測的結果。董事會語言：「我們付出 100 萬的機會成本，買到整季報價與預算的確定性——這正是政策設計的原意。若想保留有利走向的空間，該討論的是改用選擇權或調整避險比率，而不是不避。」':
    ' (W38): the rate locked in at the moment of hedging lets the company quote orders at a certain gross margin; where the rate goes afterward is an outcome no one can forecast. In the board\'s language: "We paid NT$1,000,000 in opportunity cost to buy certainty for the whole quarter\'s pricing and budget — which is exactly what the policy was designed to do. If we want to keep room for favorable moves, what we should discuss is switching to options or adjusting the hedge ratio, not skipping the hedge."',
  '自然避險為什麼優於金融避險？':
    'Why is natural hedging better than financial hedging?',
  '→ 收支同幣別：':
    '→ Receipts and payments in the same currency: ',
  '零交易成本、零對手風險、不用管到期日':
    'zero transaction cost, zero counterparty risk, no need to track maturity dates',
  '，而且自動隨業務規模伸縮。台灣常見型態：接美元訂單的廠商以美元計價採購設備原料、發美元公司債；在美國設廠讓成本與收入同幣別。':
    ', and it scales automatically with the business. Common patterns in Taiwan: a manufacturer with US-dollar orders buys equipment and materials priced in US dollars and issues US-dollar corporate bonds; or it builds a plant in the US so that costs and revenue are in the same currency.',
  '用三個你學過的概念解釋 TRF 為什麼註定是災難？':
    'Using three concepts you\'ve learned, explain why a TRF was bound to be a disaster.',
  '賣尾部風險的報酬形狀':
    ' The return shape of selling tail risk',
  '（W29、W33）：有上限的小獲利 × 無下限的巨虧；②':
    ' (W29, W33): small capped gains × huge uncapped losses; ② ',
  '槓桿':
    'Leverage',
  '（W43、W37）：雙倍名目金額放大災難；③':
    ' (W43, W37): the doubled notional amount magnifies the disaster; ③ ',
  '它不滿足避險的定義':
    'It fails the definition of a hedge',
  '（W33）：達標出場條款讓「保護」在行情反轉前就消失，剩下的全是裸曝險。任何一個概念掌握了，都不會碰它。':
    ' (W33): the exit-on-target clause makes the "protection" disappear before the market reverses, leaving nothing but naked exposure. Anyone who has mastered any one of these concepts would never touch it.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '問下限':
    'Ask about the floor',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（出國換匯的放大版）':
    'Opening (the supersized version of changing money for a trip)',
  '「出國前先換好日幣，回來發現日幣又跌了——你會說『虧了』嗎？」（會有點嘔，但——）「你換匯是為了':
    '"Before a trip abroad you change your yen in advance, and when you get back you find the yen has fallen again — would you say you \'lost money\'?" (You\'d feel a bit annoyed, but —) "You changed money to ',
  '確定旅費':
    'pin down your travel budget',
  '，不是為了賭匯率。公司也一樣：三個月後要收幾千萬美元，先跟銀行『講好匯率』，今天就能確定這張單賺不賺——':
    ', not to bet on the exchange rate. A company is the same: if it will collect tens of millions of US dollars in three months, it \'agrees on the rate\' with the bank first, and today it already knows whether this order makes money — ',
  '做生意的賺生意的錢，不賭匯率的錢':
    'a business earns its money from doing business, not from betting on exchange rates',
  '核心故事（TRF）':
    'Core story (TRF)',
  '「十年前台灣幾百家中小企業買了一種商品，號稱『避險還能月月賺小錢』。它的形狀是：':
    '"Ten years ago, hundreds of Taiwanese small and medium-sized businesses bought a product billed as \'a hedge that still earns you a little every month.\' Its shape was: ',
  '贏有上限、輸沒下限':
    'you win with a cap, you lose with no floor',
  '。人民幣一路升時大家月月領糖果；2015 年一夕反轉，虧損雪崩，以百億計的學費。教訓只有三個字：':
    '. While the renminbi climbed steadily, everyone collected candy every month; in 2015 it reversed overnight, the losses avalanched, and the tuition ran to tens of billions. The lesson is short: ',
  '。任何投資，先問『最壞虧多少』；答案含糊或『理論上無限』，轉身就走。」':
    '. Before any investment, ask \'how much could I lose at worst?\'; if the answer is vague or \'theoretically unlimited,\' turn around and walk away."',
  '互動（家庭防身題庫）':
    'Interaction (the family\'s self-defense question set)',
  '「複習一下我們的防身三題：①最壞虧多少？（本週）②錢誰保管？（W35）③每年收我多少 %？（W16）——三題走天下，九成的坑跨得過。」':
    '"A quick review of our three self-defense questions: ① What\'s the worst-case loss? (this week) ② Who holds the money? (W35) ③ What percentage a year do they take from me? (W16) — three questions will carry you anywhere, and they get you past nine in ten traps."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那我們家的美股 ETF 要避匯率嗎？」':
    '"So should our family\'s US stock ETF be currency-hedged?"',
  '「長期投資人通常不避（W14 講過）：避險成本年年付，而匯率長期雙向。公司要避，是因為它有『三個月後的確定收付』；我們沒有交期，時間會攤平。」':
    '"Long-term investors usually don\'t hedge (as W14 covered): hedging costs are paid every year, while exchange rates move both ways over the long run. A company hedges because it has \'certain receipts and payments three months out\'; we have no delivery date, and time averages things out."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能講匯率曝險的三張臉與各自的管理法':
    'I can explain the three faces of currency exposure and how each is managed',
  '遠期算例＋實習公司避險體檢完成':
    'The forward example and the internship-company hedging check-up are done',
  '能複述 TRF 三教訓與「形狀測試」':
    'I can recite the three TRF lessons and the "shape test"',
  '分享環節完成（問下限＋防身三題），記錄卡住的點':
    'The sharing session is done (ask about the floor + the three self-defense questions), and I\'ve noted where I got stuck',
  '回填 curriculum/01-overview.md 第 48 週進度欄':
    'Fill in the Week 48 progress column of curriculum/01-overview.md',
  '下週預告 · Week 49：公司治理與財報舞弊':
    'Next week · Week 49: corporate governance and financial fraud',
  '——Enron、Wirecard 與台灣案例：紅旗清單升級 v2 的素材課。':
    ' — Enron, Wirecard and Taiwanese cases: the material for upgrading the red-flag checklist to v2.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：併購':
    'Previous week: mergers and acquisitions',
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
  '即期匯率':
    'Spot rate',
  '答對了——避險把「可能收 3,000 萬、也可能收 3,250 萬」變成「確定收 3,150 萬」，公司因此能放心報價、算毛利。事後少賺 100 萬是結果，不是決策品質；保險沒理賠，不代表保險白買。':
    'Correct — hedging turns "might collect NT$30 million, might collect NT$32.5 million" into "certain to collect NT$31.5 million," so the company can quote prices and work out margins with confidence. Earning NT$1,000,000 less afterward is an outcome, not the quality of the decision; an insurance policy that doesn\'t pay out doesn\'t mean it was wasted.',
  '不是失敗。避險把「可能收 3,000 萬、也可能收 3,250 萬」變成「確定收 3,150 萬」，公司因此能放心報價、算毛利。用事後的匯率評價避險，就是 W38 說的 resulting。':
    'Not a failure. Hedging turns "might collect NT$30 million, might collect NT$32.5 million" into "certain to collect NT$31.5 million," so the company can quote prices and work out margins with confidence. Judging a hedge by the exchange rate afterward is exactly the resulting that W38 talks about.',
  '<b>全避：不管匯率怎麼走，都收 3,150 萬。</b>':
    '<b>Fully hedged: whichever way the rate goes, you collect NT$31.5 million.</b>',
  '<b>不避：收入完全交給匯率，範圍寬達 300 萬。</b>':
    '<b>No hedge: income is left entirely to the exchange rate, with a range as wide as NT$3 million.</b>',
  '<b>避':
    '<b>Hedging',
  '%：收入範圍收窄到':
    '% narrows the income range to',
  '萬。</b>保留一部分上檔，也保留一部分風險——這就是避險比率的取捨。':
    '(in NT$10k).</b> You keep some of the upside and some of the risk — that is the trade-off in the hedge ratio.',
  '這次的匯率下，避險':
    ' At this exchange rate, the hedge left you ',
  '多收':
    'ahead by',
  '少收':
    'behind by',
  '萬——':
    '(in NT$10k) —',
  '但這不是避險的目的，':
    ' but that is not what a hedge is for: ',
  '這不是失敗，':
    ' and that is not a failure: ',
  '確定性才是它的產品。':
    'certainty is its product.',
  '倍':
    'times',
  '個月':
    'months',
  '<b>第':
    '<b>In month',
  '個月賺滿':
    'it earned the full',
  '就出場了。</b>這是最好的劇本——而它的獲利早就被上限鎖死。月月領糖果的那幾個月，正是大家加碼買進的時候。':
    '(CNY 10k) and exited.</b> That is the best-case script — and its profit was capped from the start. The months when everyone was collecting candy are exactly when people were adding to their positions.',
  '<b>最多只能賺':
    '<b>The most it could earn was',
  '，實際累積 −':
    ' (CNY 10k), yet the actual cumulative result is −',
  '，是上限的':
    ' (CNY 10k), which is',
  '倍。</b>前幾個月的小賺讓人安心，反轉後每個月的虧損還在擴大，而且':
    'times the cap.</b> The small gains of the first few months feel reassuring, but after the reversal the loss grows larger every month. ',
  '倍讓虧損翻倍。':
    'times doubles the loss.',
  '沒有任何下限。':
    'There is no floor at all.',
  '形狀測試：贏有上限、輸沒下限——轉身就走。':
    ' Shape test: wins are capped, losses have no floor — turn around and walk away.',
  '<b>累積 +':
    '<b>Cumulative gain: +',
  '，還沒碰到出場目標。</b>匯率一旦越過 6.20，每個月都開始按槓桿倍數賠錢。':
    ' (CNY 10k), and the exit target has not been reached.</b> Once the rate moves past 6.20, every month starts losing money at the leverage multiple.',
  '✓ 學會問下限了——下週看財報舞弊怎麼騙過所有人。':
    '✓ You\'ve learned to ask about the floor — next week we look at how financial fraud fools everyone.',
};
