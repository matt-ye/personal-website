/*
 * 給家人的投資課 Week 46：財務規劃與預算——三表連動預測 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-46-financial-planning.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 模型中的數字（營收 1,000、資本支出 50…）為抽象單位，不加幣別。
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
  '給家人的投資課 · Q4 財務長季 · Week 46':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 46',
  '財務規劃與預算——三表連動預測':
    'Financial planning and budgeting — the linked three-statement forecast',
  'CFO 的水晶球部門。你在 W20 為估值「預測過未來」，本週從公司內部做同一件事：':
    'The CFO\'s crystal-ball department. In W20 you "forecast the future" for a valuation; this week we do the same thing from inside the company: ',
  '明年的三張報表長什麼樣':
    'what next year\'s three statements look like',
  '、成長需要多少錢、錢從哪來。可持續成長率在此正式登場——它把 W9、W44、W45 全部接起來。':
    ', how much money growth needs, and where the money comes from. The sustainable growth rate makes its formal debut here — it ties W9, W44 and W45 all together.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 5–7、44–45 週':
    'Prerequisites: Weeks 5–7, 44–45',
  '52 週 · 第 46 週':
    '52 weeks · Week 46',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'CFO 用預測模型回答「錢夠不夠」；投資人拿公司宣稱的成長目標，對照它養不養得起。':
    'The CFO uses the forecasting model to answer "is there enough money?"; the investor takes the growth target a company claims and checks whether it can afford it.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週飲料店的負 CCC 祕密——家人聽懂「成長自帶錢包」了嗎？':
    'Looking back at last week\'s negative-CCC secret of the drinks shop — did the family understand "growth brings its own wallet"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一家公司 ROE 15%、每年把四成獲利發成股利。不借錢、不增資的話，它最快每年能成長多少？':
    'A company has an ROE of 15% and pays out 40% of its earnings as dividends. If it neither borrows nor issues shares, how fast can it grow each year, at most?',
  '15%，跟 ROE 一樣':
    '15%, the same as ROE',
  '沒有上限，看市場需求':
    'No limit — it depends on market demand',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 銷售驅動法：一條營收假設拉出三張表':
    '1. The sales-driven method: one revenue assumption pulls out three statements',
  '財務預測的標準骨架：':
    'The standard skeleton of a financial forecast: ',
  '幾乎所有科目都跟著營收走':
    'almost every line item moves with revenue',
  '營收假設（成長 %）——一切的源頭':
    ' Revenue assumption (growth %) — the source of everything',
  '損益表：成本費用率 × 營收 → 淨利（W5 的共同比，現在用來往前投影）':
    ' Income statement: cost ratios × revenue → net income (W5\'s common-size statements, now used to project forward)',
  '資產負債表：營運資金 ＝ 營收 × 歷史比率（W45）；固定資產 ＝ 舊值 ＋ 資本支出 − 折舊':
    ' Balance sheet: working capital = revenue × historical ratio (W45); fixed assets = old value + capex − depreciation',
  '現金流量表：自動導出（W7 的間接法，方向反過來用）':
    ' Cash flow statement: derived automatically (W7\'s indirect method, used in reverse)',
  '配平：資產需求大於內生資金的缺口 ＝ 需要的外部資金（借款或增資）；多出來的 ＝ 可還債或發股利的餘裕':
    ' Plugging the balance: the gap where asset needs exceed internally generated funds = external funding needed (borrowing or new equity); any excess = room to repay debt or pay dividends',
  '恆等式當裁判':
    'The identity as referee',
  '：預測的資產負債表若不平衡，缺口就是答案本身——「':
    ': if the forecast balance sheet doesn\'t balance, the gap is the answer itself — "',
  '外部資金需求（EFN）':
    'external financing needed (EFN)',
  '」。你第 4 週學的「資產＝負債＋權益」，在此變成規劃工具。':
    '". The "assets = liabilities + equity" you learned in Week 4 becomes a planning tool here.',
  '2. 一頁式三表預測':
    '2. A one-page three-statement forecast',
  '基期：營收 1,000、淨利率 10%、營運資金＝營收的 20%、固定資產 500（折舊 40／年）、無負債、配發率 40%。明年假設：營收 +15%、資本支出 50。算出來：營收 1,150、淨利 115；營運資金增加 30（吃現金，W45）；固定資產淨增 10；保留盈餘增加 69。資產需求 40 對上內生資金 69 →':
    'Base period: revenue 1,000, net margin 10%, working capital = 20% of revenue, fixed assets 500 (depreciation 40 a year), no debt, payout ratio 40%. Next year\'s assumptions: revenue +15%, capex 50. The result: revenue 1,150, net income 115; working capital up 30 (eats cash, W45); net fixed assets up 10; retained earnings up 69. Asset needs of 40 against internal funds of 69 → ',
  '餘裕 +29':
    'surplus +29',
  '這一頁就是「預算」的骨架。':
    'This one page is the skeleton of a "budget." ',
  '注意營運資金那一行':
    'Note the working capital line',
  '：不懂 W45 的人做預測，最常漏掉的就是這 30。':
    ': for someone who doesn\'t understand W45, the thing most often left out of a forecast is exactly this 30.',
  '一頁式預測台':
    'One-page forecast lab',
  '預設是講義算例。拉成長率、配發率，看餘裕什麼時候變成缺口。':
    'The default is the lecture example. Drag the growth rate and the payout ratio and see when the surplus turns into a shortfall.',
  '講義算例':
    'Lecture example',
  '成長 30%':
    'Growth 30%',
  '配發 80%':
    'Payout 80%',
  '營收成長':
    'Revenue growth',
  '淨利率':
    'Net margin',
  '營運資金佔營收':
    'Working capital as a share of revenue',
  '配發率':
    'Payout ratio',
  '資本支出':
    'Capex',
  '固定資產跟著營收等比例擴張（取代上面的資本支出）':
    'Fixed assets expand in proportion to revenue (replacing the capex above)',
  '步驟':
    'Step',
  '計算':
    'Calculation',
  '結果':
    'Result',
  '餘裕／缺口':
    'Surplus / shortfall',
  '正＝餘裕，負＝要外部資金':
    'Positive = surplus, negative = external funding needed',
  '餘裕歸零的成長率':
    'Growth rate at which the surplus hits zero',
  '其他假設不變':
    'Other assumptions unchanged',
  '3. 可持續成長率：不借錢、不增資，最快長多快':
    '3. The sustainable growth rate: how fast can you grow with no borrowing and no new shares',
  '可持續成長率 g* ＝ ROE ×（1 − 配發率）':
    'Sustainable growth rate g* = ROE × (1 − payout ratio)',
  '算例':
    'Worked example',
  '：ROE 15%、配發率 40% → g* ＝ 15% × 0.6 ＝':
    ': ROE 15%, payout ratio 40% → g* = 15% × 0.6 = ',
  '。直覺：權益是成長的底盤——負債比率不變時，權益長多快，資產就能長多快、營收就能長多快；而權益的內生成長只來自保留盈餘＝ROE × 留存率。':
    '. The intuition: equity is the chassis of growth — with the debt ratio held constant, however fast equity grows, assets can grow that fast, and so can revenue; and equity\'s internal growth comes only from retained earnings = ROE × retention ratio.',
  '一個重要的細節':
    'An important detail',
  '：g* 的前提是「所有資產都跟著營收等比例擴張」。上面的預測台若把資本支出固定在 50，30% 的成長看起來也養得起——那是因為工廠沒有跟著擴大，現實裡撐不了幾年。勾選「固定資產跟著營收等比例擴張」，餘裕歸零的成長率就落到':
    ': g*\'s premise is that "all assets expand in proportion to revenue." If the lab above fixes capex at 50, even 30% growth looks affordable — that\'s only because the factory isn\'t being expanded along with it, which can\'t last more than a few years in reality. Tick "fixed assets expand in proportion to revenue" and the growth rate at which the surplus hits zero falls to ',
  '：正是這家公司的 g*（ROE ＝ 100 ÷ 700，精確版公式 ROE × b ÷（1 − ROE × b））。':
    ': exactly this company\'s g* (ROE = 100 ÷ 700; the exact formula is ROE × b ÷ (1 − ROE × b)).',
  '用法（CFO 的體檢表）':
    'How to use it (the CFO\'s check-up chart)',
  '計畫成長 20% 大於 g* 9% →':
    'A planned growth of 20% is above g* of 9% → ',
  '缺口必須有交代':
    'the shortfall must be accounted for',
  '：借債（負債比上升，W43 的權衡）、增資（W43 的訊號成本）、或提高 ROE、砍股利。沒有交代的高成長計畫是空話':
    ': borrow (the debt ratio rises, the W43 trade-off), issue shares (the W43 signalling cost), raise ROE, or cut the dividend. A high-growth plan with no answer for that is empty talk',
  '長期成長小於 g* → 錢會堆積成現金山，回到 W44 的決策樹：該還股東了':
    'Long-run growth below g* → money piles up into a cash mountain, back to the W44 decision tree: time to return it to shareholders',
  '投資人視角：拿公司「宣稱的成長目標」對照它的 g* 與融資動作——三者對不上，就是年報說故事、報表說真話的時刻':
    'The investor\'s view: set the company\'s "claimed growth target" against its g* and its financing moves — when the three don\'t match up, that\'s the moment the annual report tells a story and the statements tell the truth',
  '借來的成長：5 年槓桿推演':
    'Borrowed growth: a 5-year leverage projection',
  '起點：權益 100、負債 50（負債／權益 0.5）。資產照計畫成長率擴張，權益只靠保留盈餘長大，差額全部用借的。':
    'Starting point: equity 100, debt 50 (debt/equity 0.5). Assets expand at the planned growth rate, equity grows only through retained earnings, and the difference is all borrowed.',
  '計畫成長':
    'Planned growth',
  '可持續成長率':
    'Sustainable growth rate',
  '5 年後負債／權益':
    'Debt/equity after 5 years',
  '起點 0.50':
    'Starting point 0.50',
  '4. 預算的政治學':
    '4. The politics of budgeting',
  '預算不只是數學，是':
    'A budget isn\'t just maths, it\'s ',
  '談判':
    'negotiation',
  '藏沙袋（sandbagging）':
    'Sandbagging',
  '：部門故意報低目標，年底輕鬆達標領獎金——CFO 的對策是用外部基準校準（市場成長率、對手數字）':
    ': departments deliberately report low targets, hit them easily at year-end, and collect bonuses — the CFO\'s counter is to calibrate against outside benchmarks (market growth rates, competitors\' numbers)',
  '曲棍球桿（hockey stick）':
    'Hockey stick',
  '：計畫書前兩年平平、第三年起飛——「奇蹟發生在預測期後段」是最古老的美化術（W20 見過它的估值版：把成長塞進終值）':
    ': the plan is flat for the first two years and takes off in the third — "the miracle happens late in the forecast period" is the oldest form of window-dressing (you met its valuation version in W20: stuffing the growth into the terminal value)',
  '滾動預測':
    'Rolling forecast',
  '：取代「一年編一次、編完就過時」的年度預算，每季往前滾 4–6 季；代價是組織要習慣「目標會動」':
    ': replaces the annual budget that is "drawn up once a year and obsolete once drawn up," rolling forward 4–6 quarters every quarter; the price is that the organization has to get used to "targets that move"',
  '5. 情境化：把 W21 的技能搬進公司':
    '5. Scenarios: bringing W21\'s skills into the company',
  '單點預算＝假精確。成熟的財務規劃做三情境（基準／衰退／擴張），每個情境掛':
    'A single-point budget = false precision. Mature financial planning builds three scenarios (base / downturn / expansion), and attaches to each an ',
  '行動觸發器':
    'action trigger',
  '：「若第二季營收低於衰退情境 → 凍結招聘、砍非核心資本支出」——這是 W26 觸發條件與 W37 壓測的公司版。':
    ': "if Q2 revenue is below the downturn scenario → freeze hiring and cut non-core capex" — this is the corporate version of W26\'s trigger conditions and W37\'s stress test. ',
  '預算的價值不在猜中，在於情境發生時，行動已經先想好。':
    'The value of a budget isn\'t in guessing right, it\'s that when a scenario occurs, the action has already been thought through.',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「預測要準。」':
    '"A forecast should be accurate."',
  '預測必然不準；好預測的標準是':
    'A forecast is bound to be inaccurate; the standard of a good forecast is ',
  '假設透明、情境完備、觸發器明確':
    'transparent assumptions, complete scenarios, clear triggers',
  '——跟好估值同一標準（W21「模糊的正確」）。':
    ' — the same standard as a good valuation (W21\'s "vaguely right").',
  '「成長越快越好。」':
    '"The faster the growth, the better."',
  '快過 g* 的成長要靠外部資金餵；「借來的成長」在信貸窗口關閉時（W25）最先出事——成長是有價格的。':
    'Growth faster than g* has to be fed by external funding; "borrowed growth" is the first to blow up when the credit window closes (W25) — growth has a price.',
  '「預算是控制工具。」':
    '"A budget is a control tool."',
  '只當控制用會招來藏沙袋；最好的預算文化是「共同的地圖」：說清楚往哪走、錢夠不夠、情境變了怎麼辦。':
    'Used only for control, it invites sandbagging; the best budget culture is a "shared map": being clear about where we\'re headed, whether the money is enough, and what to do if the scenario changes.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '從教科書到法說會':
    'From the textbook to the earnings call',
  '50 分鐘':
    '50 min',
  '《Principles of Corporate Finance》財務規劃章':
    'Principles of Corporate Finance: the financial planning chapter',
  '銷售驅動法與外部資金需求的正式版。':
    'The formal version of the sales-driven method and external financing needed.',
  '30 分鐘':
    '30 min',
  '《Valuation》預測章節（選讀）':
    'Valuation: the forecasting chapters (optional)',
  '機構級的預測紀律——麥肯錫怎麼防曲棍球桿。':
    'Institutional-grade forecasting discipline — how McKinsey guards against hockey sticks.',
  '實習公司最近一次法說會簡報':
    'Your practice company\'s latest earnings-call deck',
  '找「展望」那一頁：它給了成長目標嗎？資本支出計畫？把數字抄下來，練習用 g* 檢驗。':
    'Find the "outlook" slide: does it give a growth target? A capex plan? Copy the numbers down, and practise testing them with g*.',
  '10 分鐘':
    '10 min',
  '回顧 W20 自己的 DCF 預測期':
    'Review your own W20 DCF forecast period',
  '你當時的營收成長假設，現在有工具檢驗它「養不養得起」了。':
    'The revenue growth assumption you made then — you now have a tool to test whether the company "can afford it."',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '一頁三表預測':
    'A one-page three-statement forecast',
  '任務 A｜迷你模型（35 分鐘）':
    'Task A | The mini model (35 minutes)',
  '用試算表重建講義的迷你算例，然後改參數玩三次：①營收成長改 30%；②配發率改 80%；③讓固定資產跟著營收等比例擴張，找出餘裕恰好為零的成長率，對照 g*。':
    'Rebuild the lecture\'s mini example in a spreadsheet, then change the parameters three times: (1) change revenue growth to 30%; (2) change the payout ratio to 80%; (3) let fixed assets expand in proportion to revenue, find the growth rate at which the surplus is exactly zero, and compare it with g*.',
  '任務 B｜實習公司的 g* 檢驗（15 分鐘）':
    'Task B | The g* test of your practice company (15 minutes)',
  '用 W9 算過的 ROE 與 W44 查的配發率算實習公司的 g*；對照它宣稱的成長目標與近年融資動作（W40 考古）——三者的故事一致嗎？寫三行。':
    'Use the ROE you calculated in W9 and the payout ratio you looked up in W44 to compute your practice company\'s g*; compare it with its claimed growth target and its recent financing moves (the W40 archaeology) — do the three tell the same story? Write three lines.',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '預測台預設餘裕 +29.0；按「成長 30%」剩 +8.0；按「配發 80%」變缺口 −17.0。資本支出固定 50 時，餘裕歸零的成長率是 35.7%——看起來很寬裕，但那是假設工廠不擴建；勾選等比例擴張後，同樣 15% 成長就變成缺口 −36.0，歸零點落在 9.4%。槓桿推演預設（成長 25%、ROE 12%、配發 50%）：g* 6.0%，5 年後負債／權益從 0.50 升到 2.42。':
    'The lab\'s default surplus is +29.0; pressing "Growth 30%" leaves +8.0; pressing "Payout 80%" turns it into a shortfall of −17.0. With capex fixed at 50, the growth rate at which the surplus hits zero is 35.7% — it looks very comfortable, but that assumes the factory is never expanded; once you tick proportional expansion, the same 15% growth becomes a shortfall of −36.0, and the zero point falls to 9.4%. Leverage-projection defaults (growth 25%, ROE 12%, payout 50%): g* 6.0%, and debt/equity after 5 years rises from 0.50 to 2.42.',
  '迷你模型驗證（+29）＋三次參數實驗完成':
    'Finished the mini-model check (+29) plus the three parameter experiments',
  '實習公司 g* 檢驗三行結論完成':
    'Finished the three-line conclusion on the practice company\'s g* test',
  '能默寫 g* 公式與它的三個用途':
    'Can write the g* formula and its three uses from memory',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '為什麼營運資金增加常是預測新手漏掉的科目？漏掉的後果？':
    'Why is the increase in working capital the line forecasting beginners most often leave out? What happens if they do?',
  '→ 因為它':
    '→ Because it is ',
  '不在損益表上':
    'not on the income statement',
  '（W7 的老教訓：應計不等於現金）。新手從淨利直接推現金餘裕，跳過了墊在存貨與應收上的錢。後果：高估可用資金 → 擴張到一半付不出貨款 → 緊急借貴錢或砍單——「預測很美、周轉不靈」。':
    ' (W7\'s old lesson: accruals are not cash). Beginners project the cash surplus straight from net income and skip the money tied up in inventory and receivables. The consequence: overestimated available funds → halfway through the expansion they can\'t pay suppliers → emergency expensive borrowing or cancelled orders — "a beautiful forecast, a cash crunch."',
  '公司連年成長 25%、ROE 12%、配發率 50%——不增資的話，資產負債表會發生什麼事？':
    'A company grows 25% a year for years on end, with ROE of 12% and a payout ratio of 50% — with no new equity, what happens to its balance sheet?',
  '→ g* ＝ 12% × 50% ＝ 6%，遠低於 25% → 每年都有巨大的外部資金需求 →':
    '→ g* = 12% × 50% = 6%, far below 25% → a huge external funding need every year → ',
  '負債比逐年墊高':
    'the debt ratio keeps climbing',
  '（上面的推演：5 年從 0.5 倍到 2.4 倍），或不斷增資稀釋。資產負債表越來越脆（W43 的困境成本升溫）；這種模式的壓力測試（W37）特別重要。':
    ' (the projection above: from 0.5× to 2.4× in 5 years), or repeated share issues dilute holders. The balance sheet gets more and more fragile (W43\'s distress costs heat up); stress testing (W37) matters especially for this pattern.',
  '「第三年起飛」的計畫書，該追問哪兩個問題？':
    'A plan that "takes off in year three": what two questions should you ask?',
  '前兩年為什麼起不來？':
    'Why can\'t it take off in the first two years?',
  '」阻礙是什麼、第三年憑什麼消失；②「':
    '" What is the obstacle, and what makes it vanish in year three? (2) "',
  '起飛那年的關鍵假設是什麼、現在有什麼證據？':
    'What is the key assumption in the takeoff year, and what evidence do we have for it now?',
  '」把奇蹟拆成可驗證的里程碑。答不出來的曲棍球桿，直接打回——這也是看新創與轉型故事的標準兩問。':
    '" Break the miracle into verifiable milestones. A hockey stick that can\'t answer gets sent straight back — these are also the two standard questions for judging startup and turnaround stories.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '家庭年度計畫與成長的速限':
    'A family annual plan and the speed limit on growth',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（家庭年度計畫）':
    'Opening (the family annual plan)',
  '「公司每年做一件我們家也該做的事：':
    '"Every year a company does something our family should do too: ',
  '預算':
    'a budget',
  '——明年收入多少、開銷多少、剩多少、大筆支出（旅遊？換車？）錢夠不夠、不夠從哪來。今天用我們家的數字走一遍公司的方法。」':
    ' — how much income next year, how much spending, how much is left over, whether the money is enough for the big expenses (a trip? a new car?), and where it comes from if not. Today let\'s walk through the company\'s method with our family\'s numbers."',
  '核心演示（家庭版三步）':
    'The core demo (the family version in three steps)',
  '「①明年收入假設（加薪 3%？）②固定開銷跟著物價走（W2 的通膨！）③大支出清單——最後看缺口：':
    '"(1) Next year\'s income assumption (a 3% raise?) (2) fixed spending that moves with prices (W2\'s inflation!) (3) the list of big expenses — and finally look at the gap: ',
  '動存款，還是得『融資』（貸款）？':
    'dip into savings, or do we have to \'raise financing\' (a loan)?',
  '這就是上市公司預算的全部骨架，他們只是多幾百行。」':
    ' That\'s the whole skeleton of a listed company\'s budget; they just have a few hundred more lines."',
  '互動（成長的速限）':
    'Interaction (the speed limit on growth)',
  '「公司有個神奇公式：':
    '"Companies have a magic formula: ',
  '不借錢的話，成長速度有極限':
    'with no borrowing, growth has a speed limit',
  '——賺的錢扣掉發掉的，就是能再投入的全部。我們家也一樣：投資部位的『自然成長速度』＝報酬率 × 存下來的比例。想更快？要嘛多存，要嘛借錢——而我們家的 IPS 說不借。」':
    ' — what you earn minus what you pay out is all you can put back in. Our family is the same: the investment portfolio\'s \'natural growth rate\' = return × the share we save. Want it faster? Either save more or borrow — and our family\'s IPS says no borrowing."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「計畫趕不上變化，做預算幹嘛？」':
    '"Plans can\'t keep up with change — why bother with a budget?"',
  '「所以公司現在流行『滾動預測』：每季修一次。預算的重點不是猜中，是':
    '"That\'s why companies now favor \'rolling forecasts\': revised every quarter. The point of a budget isn\'t guessing right, it\'s that ',
  '變化來的時候，我們已經想過怎麼辦':
    'when change comes, we\'ve already thought about what to do',
  '——跟消防演習同一個道理。」':
    ' — same logic as a fire drill."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能走完銷售驅動法五步驟＋配平邏輯':
    'Can walk through the five steps of the sales-driven method plus the plugging logic',
  '迷你模型與參數實驗完成':
    'Finished the mini model and the parameter experiments',
  '實習公司 g* 檢驗完成':
    'Finished the g* test of the practice company',
  '分享環節完成（家庭預算＋成長速限），記錄卡住的點':
    'Finished the sharing session (family budget + the growth speed limit) and noted where I got stuck',
  '回填 curriculum/01-overview.md 第 46 週進度欄':
    'Fill in the Week 46 progress column of curriculum/01-overview.md',
  '下週預告 · Week 47：併購':
    'Next week · Week 47: Mergers and acquisitions',
  '——為什麼多數併購毀滅買方價值？溢價、綜效與「贏家的詛咒」。':
    ' — why do most acquisitions destroy value for the buyer? Premiums, synergies and the "winner\'s curse."',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：營運資金':
    'Previous week: working capital',
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
  '答對了——可持續成長率 ＝ ROE ×（1 − 配發率）＝ 15% × 0.6 ＝ 9%。權益只能靠保留盈餘長大，想長得比這更快，就得借錢、增資，或少發股利。':
    'Correct — sustainable growth rate = ROE × (1 − payout ratio) = 15% × 0.6 = 9%. Equity can only grow through retained earnings; to grow faster than that, you have to borrow, issue shares, or pay out less in dividends.',
  '答案是 9%：可持續成長率 ＝ ROE ×（1 − 配發率）＝ 15% × 0.6。權益只能靠保留盈餘長大，想長得比這更快，就得借錢、增資，或少發股利。':
    'The answer is 9%: sustainable growth rate = ROE × (1 − payout ratio) = 15% × 0.6. Equity can only grow through retained earnings; to grow faster than that, you have to borrow, issue shares, or pay out less in dividends.',
  '<tr><td class=\\"f\\">營收</td><td>1,000 ×':
    '<tr><td class="f">Revenue</td><td>1,000 ×',
  '<tr><td class=\\"f\\">淨利</td><td>營收 ×':
    '<tr><td class="f">Net income</td><td>Revenue ×',
  '<tr><td class=\\"f\\">營運資金增加</td><td>營收增加 ×':
    '<tr><td class="f">Working capital increase</td><td>Revenue increase ×',
  '（吃現金）</td></tr>':
    ' (eats cash)</td></tr>',
  '<tr><td class=\\"f\\">固定資產淨變動</td><td>':
    '<tr><td class="f">Net change in fixed assets</td><td>',
  '− 折舊 40':
    '− depreciation 40',
  '<tr><td class=\\"f\\">保留盈餘增加</td><td>淨利 ×':
    '<tr><td class="f">Retained earnings increase</td><td>Net income ×',
  '不成長也缺':
    'Short even with no growth',
  '<b>餘裕':
    '<b>Surplus',
  '：內生資金養得起這個成長。</b>多出來的可以還債、加發股利，或者——回到 W44 的決策樹。':
    ': internal funds can afford this growth.</b> The excess can repay debt, pay extra dividends, or — back to the W44 decision tree.',
  '<br>但資本支出只有':
    '<br>But capex is only',
  '，等於工廠沒有跟著擴大。勾選上面的等比例擴張，看看真相。':
    ', which means the factory isn\'t being expanded along with it. Tick the proportional-expansion box above to see the truth.',
  '<b>缺口':
    '<b>Shortfall',
  '：成長需要外部資金。</b>要嘛借（負債比上升）、要嘛增資（稀釋與訊號成本）、要嘛降低配發率——計畫書上必須寫明是哪一個。':
    ': growth needs external funding.</b> Either borrow (the debt ratio rises), raise equity (dilution and signalling cost), or lower the payout ratio — the plan must say which one.',
  '<b>計畫成長':
    '<b>Planned growth of',
  '% 超過 g*':
    '% exceeds g* of',
  '%：5 年後負債／權益從 0.50 升到':
    '%: after 5 years debt/equity rises from 0.50 to',
  '損益表年年亮眼，資產負債表卻越來越脆——信貸窗口一關（W25），這就是最先出事的公司。':
    'The income statement shines year after year, yet the balance sheet gets more and more fragile — once the credit window closes (W25), this is the company that gets into trouble first.',
  '槓桿逐步墊高，要確認 W43 的困境成本還在可控範圍。':
    'Leverage is being built up step by step; check that W43\'s distress costs are still under control.',
  '<b>成長':
    '<b>Growth of',
  '% 低於 g*':
    '% is below g* of',
  '%：負債比一路下降到':
    '%: the debt ratio keeps falling to',
  '，錢開始堆積。</b>現金山該回到 W44 的決策樹——還給股東，或找 ROIC 高於 WACC 的新案子。':
    ', and money starts to pile up.</b> The cash mountain should go back to the W44 decision tree — return it to shareholders, or find new projects with ROIC above WACC.',
  '<b>成長剛好等於 g*：負債比維持不變。</b>這就是「可持續」的意思。':
    '<b>Growth exactly equals g*: the debt ratio stays unchanged.</b> That is what "sustainable" means.',
  '✓ 三表能往前推了——下週看最大的一筆投資決策：併購。':
    '✓ The three statements can now be projected forward — next week, the biggest single investment decision: mergers and acquisitions.',
};
