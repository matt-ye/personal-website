/*
 * 給家人的投資課 Week 45：營運資金管理——現金轉換循環 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-45-working-capital.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 金額單位：散文內 10 億 → NT$1 billion、6,000 萬 → NT$60 million、0.6 億 → NT$60 million；JS 算出的數字後綴「億」→「× NT$100m」、「萬」→「× NT$10k」（本頁沒有標籤可掛單位的地方，yi() 同一個函式輸出兩種量級，故後綴留在數字上）。飲料店算例的 25,000 等沿用 W4 不加幣別。
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
  '給家人的投資課 · Q4 財務長季 · Week 45':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 45',
  '營運資金管理——現金轉換循環':
    'Working capital management — the cash conversion cycle',
  '三大決策之外，CFO 的日常主戰場：讓公司':
    'Beyond the three big decisions, the CFO\'s everyday main battlefield: making sure the company has ',
  '每天有現金可用':
    'cash to use every day',
  '。W6 埋下的營運資金、W7 的「賺錢但缺現金」，本週用一個指標收攏——現金轉換循環（CCC）。還有一個驚喜：你的飲料店，天生是「負 CCC」的好生意。':
    '. The working capital planted in W6 and the "profitable but short of cash" of W7 come together this week in one metric — the cash conversion cycle (CCC). And there\'s a surprise: your drink shop is, by nature, a good "negative CCC" business.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 6–7 週':
    'Prerequisites: Weeks 6–7',
  '52 週 · 第 45 週':
    '52 weeks · Week 45',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'CFO 用 CCC 管現金；投資人用它的五年趨勢抓營運失控的早期訊號——常比損益表早一到兩季。':
    'The CFO uses CCC to manage cash; the investor uses its five-year trend to catch the early signs of operations spiralling out of control — often one or two quarters ahead of the income statement.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的果樹選擇——「台積電改發九成」，家人答對了嗎？':
    'Looking back at last week\'s fruit-tree choice — "TSMC switching to a 90% payout": did the family get it right?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一家公司營收暴增 30%、帳面大賺，卻跑去跟銀行借錢。這代表什麼？':
    'A company\'s revenue jumps 30% and it books a big accounting profit, yet it goes to the bank to borrow money. What does that mean?',
  '一定是作帳，賺錢怎麼會缺錢':
    'It must be cooked books — how can a profitable company be short of cash?',
  '不一定：成長本身很吃現金':
    'Not necessarily: growth itself eats cash',
  '管理層亂花錢':
    'Management is wasting money',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. CCC：錢出去到錢回來，繞一圈幾天':
    '1. CCC: how many days it takes for money to go out and come back around',
  'CCC ＝ 存貨天數（DIO）＋ 應收天數（DSO）− 應付天數（DPO）':
    'CCC = days inventory outstanding (DIO) + days sales outstanding (DSO) − days payable outstanding (DPO)',
  '＝ 存貨 ÷ 銷貨成本 × 365：進貨到賣掉，貨在倉庫躺幾天（分母是成本——W9 的提醒）':
    ' = inventory ÷ cost of goods sold × 365: from buying the goods to selling them, how many days they lie in the warehouse (the denominator is cost — the W9 reminder)',
  '＝ 應收 ÷ 營收 × 365：賣掉到收到錢，等幾天':
    ' = receivables ÷ revenue × 365: from the sale to the cash arriving, how many days you wait',
  '＝ 應付 ÷ 銷貨成本 × 365：拿貨到付錢，拖幾天——':
    ' = payables ÷ cost of goods sold × 365: from receiving the goods to paying for them, how many days you stall — ',
  '這是減項':
    'this one is subtracted',
  '，供應商借你的免費資金':
    ', the free funding your suppliers lend you',
  '算例':
    'Worked example',
  'CCC 65 天':
    'CCC 65 days',
  '。這家公司每一塊營運的錢，付出去後要 65 天才轉回來；這 65 天的缺口，就是營運資金要墊的錢（W6）。':
    '. Every dollar of operating money this company pays out takes 65 days to come back; the gap of those 65 days is the money working capital has to advance (W6).',
  '縮短 CCC ＝ 無償釋放現金。':
    'Shortening CCC = releasing cash for free.',
  '2. 驚喜：你的飲料店是負 CCC 生意':
    '2. A surprise: your drink shop is a negative-CCC business',
  '用第 4 週第 2 個月的數據算（以 30 天月計）：':
    'Calculated from Week 4\'s month-two data (taking a 30-day month):',
  '元件':
    'Component',
  '計算':
    'Calculation',
  '天數':
    'Days',
  '存貨 25,000 ÷ 月成本 55,000 × 30':
    'Inventory 25,000 ÷ monthly cost 55,000 × 30',
  '13.6 天':
    '13.6 days',
  '應收 50,000 ÷ 月營收 150,000 × 30':
    'Receivables 50,000 ÷ monthly revenue 150,000 × 30',
  '10.0 天':
    '10.0 days',
  '應付 60,000 ÷ 月進貨 60,000 × 30':
    'Payables 60,000 ÷ monthly purchases 60,000 × 30',
  '30.0 天':
    '30.0 days',
  '−6.4 天':
    '−6.4 days',
  '負的':
    'Negative',
  '——客人大多付現（應收天數低）、原料週轉快（存貨天數低）、供應商月結（應付天數長）：':
    ' — customers mostly pay in cash (low days receivable), ingredients turn over fast (low days inventory), and suppliers bill monthly (long days payable): ',
  '錢還沒付給供應商，就已經從客人手上收回來了':
    'the cash is collected from customers before the suppliers are even paid',
  '。生意越大，供應商借你的免費資金越多。':
    '. The bigger the business, the more free funding your suppliers lend you.',
  '負 CCC 的巨人們':
    'The negative-CCC giants',
  '：好市多、全聯（先收現金後付貨款）、預收制的健身房與訂閱軟體（W4 的預收收入）——它們的成長':
    ': Costco, PX Mart (cash first, pay for the goods later), prepaid gyms and subscription software (W4\'s unearned revenue) — their growth ',
  '自帶融資':
    'finances itself',
  '。W6 快問快答「超商流動比小於 1 也健康」的原因，就是這個。':
    '. That is the reason behind the W6 quick question "a convenience store with a current ratio below 1 is still healthy."',
  '現金轉換循環時間軸':
    'Cash conversion cycle timeline',
  '上排是錢被卡住的天數（存貨＋應收），下排是供應商借你的天數（應付）。斜線區就是要自己墊錢的缺口。':
    'The top row is the days cash is stuck (inventory + receivables); the bottom row is the days suppliers lend to you (payables). The hatched area is the gap you have to fund yourself.',
  '我們的飲料店':
    'Our drink shop',
  '講義算例':
    'Lecture example',
  '量販店型':
    'Hypermarket type',
  '承包工程型':
    'Contract-construction type',
  '存貨天數 DIO':
    'Days inventory DIO',
  '60.0 天':
    '60.0 days',
  '應收天數 DSO':
    'Days receivable DSO',
  '45.0 天':
    '45.0 days',
  '應付天數 DPO':
    'Days payable DPO',
  '40.0 天':
    '40.0 days',
  '年營收':
    'Annual revenue',
  '10 億':
    '10 × NT$100m',
  '天':
    'days',
  '要墊的營運資金':
    'Working capital to advance',
  '約 營收 ÷ 365 × CCC':
    'About revenue ÷ 365 × CCC',
  '縮短 10 天可釋放':
    'Freed by cutting 10 days',
  '一次性的現金':
    'One-time cash',
  '3. 成長的隱藏帳單：營運資金會吃現金':
    '3. The hidden bill of growth: working capital eats cash',
  '正 CCC 公司的殘酷數學：':
    'The harsh math of a positive-CCC company: ',
  '營收成長，營運資金同比例膨脹':
    'when revenue grows, working capital swells in proportion',
  '。算例：營收 10 億、營運資金佔營收 20%、今年成長 30%——營運資金需求增加 10 億 × 30% × 20% ＝':
    '. Example: revenue of NT$1 billion, working capital at 20% of revenue, growth of 30% this year — the working capital requirement rises by NT$1 billion × 30% × 20% = ',
  '6,000 萬':
    'NT$60 million',
  '。若淨利率 8%（當年淨利約 1.04 億），':
    '. If the net margin is 8% (that year\'s net income is about NT$104 million), ',
  '成長本身吃掉當年淨利的 58%':
    'growth alone eats up 58% of that year\'s net income',
  '這就是 W7「賺錢但現金流出」的定量版：損益表越漂亮、現金越緊。CFO 的功課是預測成長所需的營運資金（W46 的預測模型必含這條），並用 CCC 管理把帳單壓小。':
    'This is the quantified version of W7\'s "profitable but cash flowing out": the prettier the income statement, the tighter the cash. The CFO\'s homework is to forecast the working capital that growth requires (W46\'s forecasting model must include this line), and to use CCC management to keep the bill small.',
  '成長帳單計算機':
    'Growth bill calculator',
  '營運資金佔營收的比例可以是負的——那就是負 CCC 生意。':
    'The ratio of working capital to revenue can be negative — that\'s a negative-CCC business.',
  '講義算例（佔 20%）':
    'Lecture example (20% of revenue)',
  '重資本製造（佔 35%）':
    'Capital-heavy manufacturing (35% of revenue)',
  '負 CCC 零售（佔 −5%）':
    'Negative-CCC retail (−5% of revenue)',
  '今年營收':
    'This year\'s revenue',
  '營收成長':
    'Revenue growth',
  '營運資金佔營收':
    'Working capital as a share of revenue',
  '淨利率':
    'Net margin',
  '營運資金增加':
    'Working capital increase',
  '成長要墊的錢':
    'Money growth requires you to advance',
  '明年淨利':
    'Next year\'s net income',
  '成長後營收 × 淨利率':
    'Revenue after growth × net margin',
  '被成長吃掉':
    'Eaten by growth',
  '佔淨利':
    'As a share of net income',
  '4. 三個元件的管理槓桿（與其代價）':
    '4. Management levers for the three components (and their price)',
  '想縮短':
    'To shorten',
  '手段':
    'Lever',
  '隱藏代價':
    'Hidden cost',
  '存貨天數':
    'Days inventory',
  '精實庫存、以銷定產':
    'Lean inventory, produce to order',
  '缺貨風險、供應鏈韌性下降（疫情的教訓）':
    'Stockout risk, weaker supply-chain resilience (the lesson of the pandemic)',
  '應收天數':
    'Days receivable',
  '縮短帳期、預收、催收紀律':
    'Shorter payment terms, prepayment, collections discipline',
  '客戶關係，可能輸給帳期寬鬆的對手':
    'Customer relationships; you may lose to rivals with looser terms',
  '拉長應付天數':
    'Lengthen days payable',
  '談判月結天數':
    'Negotiate monthly settlement days',
  '壓榨供應商的極限＝供應商倒閉或漲價；大企業拖小供應商帳期有道德與法規邊界':
    'The limit of squeezing suppliers = suppliers going under or raising prices; large companies stretching small suppliers\' payment terms run into ethical and regulatory limits',
  '投資人視角':
    'The investor\'s view',
  '（W8 紅旗的深化）：CCC':
    ' (a deepening of the W8 red flags): CCC ',
  '逐年惡化':
    'worsening year after year',
  '——尤其應收與存貨天數同步拉長——是營運失控的早期訊號，常早於損益表惡化一到兩季。把 CCC 三元件的五年趨勢加進你的健檢流程。':
    ' — especially when days receivable and days inventory lengthen together — is an early signal of operations getting out of control, often one or two quarters ahead of the income statement deteriorating. Add the five-year trend of the three CCC components to your health-check routine.',
  '5. 現金管理的最後一塊：水位與階梯':
    '5. The last piece of cash management: water levels and ladders',
  'CFO 的現金政策三層：①':
    'The CFO\'s cash policy has three layers: (1) ',
  '營運水位':
    'the operating level',
  '：付薪水、貨款的週轉底線，通常以「月支出的 N 倍」設定；②':
    ': the working floor for paying salaries and suppliers, usually set as "N times monthly spending"; (2) ',
  '緩衝':
    'the buffer',
  '：對應 W37 壓測的情境準備；③':
    ': scenario preparation matching the W37 stress test; (3) ',
  '超額現金':
    'excess cash',
  '：這一層該回到 W44 的決策樹——有 ROIC 高於 WACC 的案子就投，沒有就還股東。閒置現金的短期去處是定存階梯與貨幣市場工具，安全與流動性優先——':
    ': this layer goes back to the W44 decision tree — invest if there\'s a project with ROIC above WACC, otherwise return it to shareholders. Idle cash goes short-term into CD ladders and money-market instruments, with safety and liquidity first — ',
  '財務部不是利潤中心':
    'the treasury department is not a profit center',
  '（W48 的預告）。':
    ' (a preview of W48).',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「應付帳款拖越久越聰明。」':
    '"The longer you stall on payables, the smarter you are."',
  '應付天數是免費資金沒錯，但供應商不是傻子：長期壓榨會反映在報價、品質順位、缺貨時的配貨順序上。把供應鏈當提款機的公司，危機時最先斷鏈。':
    'Days payable are free funding, true — but suppliers aren\'t fools: squeezing them for long shows up in quoted prices, quality priority, and the order of allocation when goods are short. A company that treats its supply chain as an ATM is the first to see the chain snap in a crisis.',
  '「營運資金是財務部的事。」':
    '"Working capital is the finance department\'s job."',
  '存貨天數在生產部手上、應收在業務手上、應付在採購手上——CCC 是':
    'Inventory days are in production\'s hands, receivables in sales\' hands, payables in purchasing\'s hands — CCC is ',
  '全公司的營運紀律':
    'the whole company\'s operating discipline',
  '，CFO 只是記分員。':
    ', and the CFO is just the scorekeeper.',
  '「CCC 短就是好公司。」':
    '"A short CCC means a good company."',
  '要配商業模式看：精品業存貨天數天生長（存貨是陳列資產）、承包工程應收天數天生長。跟同業比、跟自己的歷史比——W9 的鐵律永遠適用。':
    'Look at it against the business model: luxury goods naturally have long inventory days (inventory is a display asset), and contract construction naturally has long receivable days. Compare with peers and with your own history — W9\'s iron rule always applies.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '從定義到負 CCC 巨頭':
    'From the definition to the negative-CCC giants',
  '50 分鐘':
    '50 min',
  '《Principles of Corporate Finance》營運資金章':
    'Principles of Corporate Finance: the working capital chapter',
  '本週主幹。':
    'The backbone of this week.',
  '25 分鐘':
    '25 min',
  'Investopedia：Cash Conversion Cycle 與 Days Payable Outstanding':
    'Investopedia: Cash Conversion Cycle and Days Payable Outstanding',
  '負 CCC 案例一篇':
    'A negative-CCC case study',
  '搜「Costco 負營運資金」或「Amazon negative cash conversion cycle」的分析文章——看巨頭怎麼把 CCC 變成成長引擎。':
    'Search for analyses of "Costco negative working capital" or "Amazon negative cash conversion cycle" — see how the giants turn CCC into a growth engine.',
  '10 分鐘':
    '10 min',
  '回顧 W6–7 自己的產出':
    'Review your own output from W6–7',
  '營運資金與三線表，是本週的地基。':
    'Working capital and the three-statement model are this week\'s foundation.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '實習公司的 CCC 五年解剖':
    'A five-year CCC dissection of your case-study company',
  '從實習公司財報取近 5 年：存貨、應收、應付、營收、銷貨成本':
    'From the company\'s financial statements take the last 5 years: inventory, receivables, payables, revenue, cost of goods sold',
  '算每年 DIO／DSO／DPO／CCC，畫成趨勢':
    'Calculate DIO / DSO / DPO / CCC for each year and plot the trend',
  '判讀三問：CCC 變長還是變短？主因是哪個元件？跟營收成長對照——「成長吃現金」的帳單有多大？':
    'Three questions to read it with: is CCC getting longer or shorter? Which component is the main cause? Set it against revenue growth — how big is the "growth eats cash" bill?',
  '手算飲料店的 −6.4 天與講義的 65 天算例':
    'Work out the drink shop\'s −6.4 days and the lecture\'s 65-day example by hand',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '時間軸按「我們的飲料店」CCC 必須是 −6.4 天、斜線區變綠（全世界幫你出營運資金）；按「講義算例」是 65.0 天，營收 10 億時要墊約 1.78 億。成長帳單預設：營運資金增加 0.60 億、明年淨利 1.04 億、被成長吃掉 57.7%；按「負 CCC 零售」，成長反而釋放現金。':
    'On the timeline, pressing "Our drink shop" must give a CCC of −6.4 days, with the hatched area turning green (the whole world helps you fund working capital); pressing "Lecture example" gives 65.0 days, and at revenue of NT$1 billion you must advance about NT$178 million. Growth-bill defaults: working capital increase NT$60 million, next year\'s net income NT$104 million, eaten by growth 57.7%; press "Negative-CCC retail" and growth actually releases cash.',
  '五年 CCC 趨勢完成，且有元件歸因':
    'Finished the five-year CCC trend, with attribution to components',
  '飲料店 −6.4 天手算通過':
    'The drink shop\'s −6.4 days worked out by hand and checked',
  '能解釋「成長吃現金」的機制與量級':
    'Can explain the mechanism and scale of "growth eats cash"',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '兩家公司淨利率一樣，A 的 CCC −10 天、B +80 天——高速成長期誰活得舒服？':
    'Two companies have the same net margin; A has a CCC of −10 days, B +80 days — who has an easier time during rapid growth?',
  'A 舒服得多':
    'A has a far easier time',
  '。負 CCC 下，成長越快，供應商與預付的客戶「借」你的免費資金越多——成長自帶融資；B 每成長一分，就要先墊 80 天的營運資金，高速成長期反而最容易資金斷鏈。同一個指標的兩端：成長把 B 勒死、把 A 餵肥。':
    '. With a negative CCC, the faster you grow, the more free funding suppliers and prepaying customers "lend" you — growth finances itself; for B, every bit of growth means first advancing 80 days of working capital, so in rapid growth it is the one most likely to suffer a funding break. Two ends of the same metric: growth strangles B and fattens A.',
  '應收天數突然從 45 天跳到 75 天，給三個假設（一好兩壞）與查證方法':
    'Days receivable suddenly jump from 45 to 75 days — give three hypotheses (one good, two bad) and how to verify each',
  '→ 好的：①接了付款條件較長的大單或新市場（查：營收是否同步跳、客戶結構說明）。壞的：②塞貨衝業績（W8 紅旗——查：季底集中出貨？次季退貨？）；③大客戶財務惡化付不出來（查：集中度、該客戶的新聞與財報）。三個都從年報附註的':
    '→ The good one: (1) it landed big orders or a new market with longer payment terms (check: did revenue jump at the same time, and the customer-mix disclosure). The bad ones: (2) channel stuffing to hit targets (W8 red flag — check: concentrated shipments at quarter-end? returns in the next quarter?); (3) a major customer\'s finances are deteriorating and it can\'t pay (check: concentration, plus news and financial statements of that customer). All three start with the ',
  '帳齡分析表':
    'aging schedule',
  '入手。':
    ' in the annual report footnotes.',
  '為什麼說「預收收入是最美的負債」？':
    'Why is it said that "unearned revenue is the most beautiful liability"?',
  '→ 它同時是：W4 的「已收現金、未計收入」（會計上最誠實的負債）、W6 的無息負債（免費資金），以及本週壓低應收天數、甚至讓 CCC 轉負的引擎。客戶預先付錢＝產品搶手＋營運資金別人出——三重好消息藏在「負債」科目裡。':
    '→ It is at once: W4\'s "cash received but revenue not yet recognised" (the most honest liability in accounting), W6\'s interest-free liability (free funding), and this week\'s engine for pushing receivable days down, even turning CCC negative. Customers paying in advance = a hot product + someone else funds your working capital — three pieces of good news hidden inside a "liability" account.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '我們的店的祕密':
    'The secret of our shop',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（我們的店的祕密）':
    'Opening (the secret of our shop)',
  '「還記得我們的飲料店嗎？我發現它有個了不起的祕密：':
    '"Remember our drink shop? I found it has a remarkable secret: ',
  '客人當場付現金，但我們付供應商是月結':
    'customers pay cash on the spot, but we pay our suppliers monthly',
  '——算出來，錢平均『先進來 6 天』才要付出去。生意做越大，手上的免費週轉金越多。」':
    ' — worked out, the money comes in on average \'6 days before\' it has to go out. The bigger the business, the more free working cash we have in hand."',
  '核心觀念（三段水管的時間差）':
    'The core idea (three sections of pipe and their timing gaps)',
  '「做生意的現金像三段水管：貨躺倉庫幾天（存貨）＋客人欠幾天（應收）－我們欠供應商幾天（應付）。加起來是正的，就要自己墊錢；':
    '"Cash in a business is like three sections of pipe: how many days the goods sit in the warehouse (inventory) + how many days customers owe us (receivables) − how many days we owe suppliers (payables). If the total is positive, we have to advance the money ourselves; ',
  '是負的，等於全世界幫你出營運資金':
    'if it\'s negative, the whole world is funding your working capital',
  '——全聯、好市多、健身房年費，全是這一招。」':
    '— PX Mart, Costco, gym annual fees, all use this exact trick."',
  '互動（識破成長陷阱）':
    'Interaction (spotting the growth trap)',
  '「反過來：一家公司生意暴增 30%，帳面大賺，卻跑來借錢——有問題嗎？」（引導：不一定！墊在貨和帳款上的錢跟著暴增，成長本身很花錢。）「所以聽到『那家公司成長超快』，我們家多問一句：':
    '"Flip it around: a company\'s business jumps 30%, it books a big accounting profit, yet it comes asking for a loan — is something wrong?" (Guide: not necessarily! The money tied up in goods and receivables surges along with it; growth itself costs a lot.) "So when we hear \'that company is growing super fast,\' our family asks one more question: ',
  '它的成長是自帶錢包，還是一路要人養？':
    'Does its growth come with its own wallet, or does it need feeding all the way?',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「欠供應商錢還算優點？」':
    '"Is owing suppliers money actually a virtue?"',
  '「月結是產業慣例、雙方同意的信用，不是賴帳——重點是這個模式讓誰墊錢。當然，拖到供應商活不下去，就是另一回事了（W49 治理課有反例）。」':
    '"Monthly settlement is an industry norm, credit both sides agree to, not welshing — what matters is who this model makes advance the money. Of course, stalling until the supplier can\'t survive is another matter (the W49 governance lesson has counterexamples)."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫 CCC 公式與三元件的分母':
    'Can write from memory the CCC formula and the denominators of the three components',
  '實習公司五年 CCC 解剖完成':
    'Finished the five-year CCC dissection of the case-study company',
  '能解釋負 CCC 模式與「成長吃現金」':
    'Can explain the negative-CCC model and "growth eats cash"',
  '分享環節完成（飲料店的祕密），記錄卡住的點':
    'Finished the sharing session (the drink shop\'s secret) and noted where I got stuck',
  '回填 curriculum/01-overview.md 第 45 週進度欄':
    'Fill in the Week 45 progress column of curriculum/01-overview.md',
  '下週預告 · Week 46：財務規劃':
    'Next week · Week 46: Financial planning',
  '——把三表接起來往前推：「明年的報表長什麼樣」，以及成長超過可持續成長率時，錢從哪來。':
    ' — connect the three statements and project them forward: "what will next year\'s statements look like," and where the money comes from when growth exceeds the sustainable growth rate.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：股利政策':
    'Previous week: dividend policy',
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
  '應付天數':
    'Days payable',
  '答對了——營收成長 30%，卡在存貨與應收帳款裡的錢也跟著膨脹。營收 10 億、營運資金佔兩成的公司，光是這次成長就要多墊 6,000 萬，吃掉當年淨利的將近六成。損益表越漂亮，現金可能越緊。':
    'Correct — when revenue grows 30%, the money tied up in inventory and receivables swells along with it. For a company with revenue of NT$1 billion and working capital at 20% of revenue, this growth alone requires advancing another NT$60 million, eating up nearly 60% of that year\'s net income. The prettier the income statement, the tighter cash may be.',
  '不一定是壞事：成長本身很吃現金。營收成長 30%，卡在存貨與應收帳款裡的錢也跟著膨脹——營收 10 億、營運資金佔兩成的公司，要多墊 6,000 萬，吃掉當年淨利的將近六成。':
    'Not necessarily bad: growth itself eats cash. When revenue grows 30%, the money tied up in inventory and receivables swells along with it — a company with revenue of NT$1 billion and working capital at 20% of revenue has to advance another NT$60 million, eating up nearly 60% of that year\'s net income.',
  '億':
    '× NT$100m',
  '萬':
    '× NT$10k',
  '">存貨':
    '">Inventory',
  '">應收':
    '">Receivables',
  '">應付':
    '">Payables',
  '<div>0 天　→':
    '<div>0 days →',
  '天</div>':
    'days</div>',
  '天：錢還沒付給供應商，就已經從客人手上收回來了。</b>營收':
    'days: the customers\' cash comes in before the suppliers are even paid.</b> At revenue of',
  '億的規模，等於供應商免費借你約':
    '× NT$100m, the suppliers are lending you about',
  '——生意越大，借得越多。':
    ' for free — the bigger the business, the more they lend.',
  '天：每一塊錢付出去，要':
    'days: every dollar you pay out takes',
  '天才轉回來。</b>營收':
    'days to come back.</b> At revenue of',
  '億的規模，要長期墊著約':
    '× NT$100m, you have to keep about',
  '。每縮短 10 天，就無償釋放約':
    ' tied up over the long run. Every 10 days shaved off releases about',
  '現金。':
    'in cash, for free.',
  '釋放':
    'Frees up',
  '<b>負營運資金：成長反而送錢來。</b>營收多':
    '<b>Negative working capital: growth actually sends you money.</b> Revenue is up by',
  '億，供應商與預付的客戶多借你':
    '× NT$100m, and suppliers and prepaying customers lend you another',
  '億——成長自帶融資。':
    '× NT$100m — growth finances itself.',
  '<b>不成長，就沒有這張帳單。</b>營運資金只在營收擴大時才需要追加。':
    '<b>No growth, no bill.</b> Working capital only needs topping up when revenue expands.',
  '<b>成長':
    '<b>Growth of',
  '%，要多墊':
    '%, so you have to advance another',
  '億營運資金，吃掉淨利的':
    '× NT$100m of working capital, eating up',
  '成長吃掉的比賺到的還多：帳面獲利，現金卻在流失，只能借錢或增資——這就是成長型公司常缺錢的原因。':
    'Growth is eating more than it earns: a profit on paper while cash drains away, so the company can only borrow or issue shares — this is why growing companies are often short of cash.',
  '損益表上的淨利，有一大塊根本拿不出來用。':
    'A large part of the net income on the income statement can\'t actually be spent.',
  '✓ 看得見錢卡在哪了——下週把三表接起來往前推。':
    '✓ You can see where the cash is stuck — next week we connect the three statements and project them forward.',
};
