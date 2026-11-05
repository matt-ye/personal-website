/*
 * 給家人的投資課 Week 41：資本預算——NPV 與 IRR — 英文對照表。
 * 來源頁：src/data/course-weeks/week-41-capital-budgeting.html
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
  '給家人的投資課 · Q4 財務長季 · Week 41':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 41',
  '資本預算——NPV 與 IRR':
    'Capital Budgeting — NPV and IRR',
  '三大決策的第一個：「這個案子該不該投？」你會發現 NPV 就是 W20 的 DCF':
    'The first of the three big decisions: "should we take this project?" You will find that NPV is W20\'s DCF with ',
  '換了主詞':
    'a different subject',
  '——DCF 替整家公司估值，NPV 替單一投資案估值，同一套折現數學。':
    ' — DCF values a whole company, NPV values a single project, and it is the same discounting math.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 1、20、40 週':
    'Prerequisites: Weeks 1, 20 and 40',
  '52 週 · 第 41 週':
    '52 weeks · Week 41',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  '這是 CFO 最常用的工具，也是投資人驗證「公司有沒有亂花錢」的透鏡。':
    'This is the CFO\'s most-used tool, and it is also the lens an investor uses to check whether a company is wasting its money.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的家庭三決策盤點——我們家最大的「投資決策」是什麼？':
    'Look back at last week\'s family inventory of the three decisions — what is our family\'s biggest "investment decision"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '兩個只能選一個的案子：A 投 1 億、報酬率 50%；B 投 10 億、報酬率 20%。資金成本都是 8%。公司該選哪個？':
    'Two projects, only one can be chosen: A invests NT$100 million at a 50% return; B invests NT$1 billion at a 20% return. The cost of capital is 8% for both. Which should the company pick?',
  'A，報酬率高得多':
    'A, the return is much higher',
  'B，創造的價值金額比較大':
    'B, it creates a bigger amount of value',
  '兩個差不多':
    'About the same',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. NPV：把 W20 的 DCF 對準單一案子':
    '1. NPV: pointing W20\'s DCF at a single project',
  'NPV ＝ Σ 第 t 年現金流 ÷（1 ＋ r）':
    'NPV = Σ cash flow in year t ÷ (1 + r)',
  '（第 0 年通常是負的投資額；r ＝ WACC）':
    '(Year 0 is usually the negative investment; r = WACC)',
  '決策規則':
    'The decision rule',
  '：NPV 大於 0 → 做（創造價值）；小於 0 → 不做；互斥案選 NPV 最大的。':
    ': NPV above 0 → do it (it creates value); below 0 → don\'t; among mutually exclusive projects, pick the one with the largest NPV.',
  '完整算例｜擴廠案':
    'A full worked example | the plant expansion',
  '：投資 10 億，未來 5 年增量現金流 2.5／3.0／3.0／2.5／2.0 億，WACC 8%。逐年折現加總後，NPV ＝':
    ': invest NT$1 billion; incremental cash flows over the next 5 years of NT$250 / 300 / 300 / 250 / 200 million; WACC 8%. Discount each year and add them up, and NPV = ',
  '+0.467 億':
    '+NT$46.7 million',
  '→ 該做。這案子在還清 8% 的資金成本之後，還替股東多創造了 4,670 萬的今日價值。':
    ' → do it. After covering the 8% cost of capital, the project still creates NT$46.7 million of extra value in today\'s money for shareholders.',
  '擴廠案 NPV 實驗台':
    'Plant expansion NPV test bench',
  '灰色是名目現金流，綠色是折現後的今日價值。拉現金流與 WACC，看 NPV 有多脆。':
    'Grey is the nominal cash flow, green is the discounted present value. Drag the cash flows and WACC to see how fragile the NPV is.',
  '講義算例':
    'Lecture example',
  '現金流打 9 折':
    'Cash flows at 90%',
  'WACC 升到 10%':
    'WACC up to 10%',
  '投資額':
    'Investment',
  '10.0 億':
    '10.0 × NT$100m',
  '現金流達成率':
    'Cash flow achievement',
  '名目現金流':
    'Nominal cash flow',
  '折現後':
    'Discounted',
  '億，今日價值':
    'in NT$100m, present value',
  '讓 NPV＝0 的折現率':
    'The discount rate that makes NPV = 0',
  '回收期':
    'Payback period',
  '不折現':
    'Undiscounted',
  '2. 先回家一趟：飲料店第二家店':
    '2. First, a trip back home: the drinks shop\'s second branch',
  '裝潢＋設備投資 60 萬，估計每月淨現金流 1.5 萬、經營 5 年（月折現率 0.75%，年約 9%）。60 個月的現金流折回今天值':
    'Fit-out plus equipment costs NT$600,000, with expected net cash flow of NT$15,000 a month for 5 years (monthly discount rate 0.75%, about 9% a year). The 60 months of cash flow are worth ',
  '72.3 萬':
    'NT$723,000',
  '，減掉 60 萬，NPV ＝':
    ' today; subtract NT$600,000 and NPV = ',
  '+12.3 萬 → 開！':
    '+NT$123,000 → open it!',
  'W40 說飲料店「憑感覺」做投資決策——現在它有了 NPV。上市公司的百億擴廠案，骨架跟這個一模一樣。':
    'W40 said the drinks shop makes investment decisions "by feel" — now it has NPV. A listed company\'s NT$10 billion plant expansion has exactly the same skeleton.',
  '第二家店計算機':
    'Second branch calculator',
  '找出「損益兩平的月現金流」——那就是給店長的最低業績目標。':
    'Find the "break-even monthly cash flow" — that is the minimum performance target to give the shop manager.',
  '60 萬':
    '60 × NT$10k',
  '每月淨現金流':
    'Monthly net cash flow',
  '1.50 萬':
    '1.50 × NT$10k',
  '經營年數':
    'Years of operation',
  '5 年':
    '5 yrs',
  '年折現率':
    'Annual discount rate',
  '已經花了 10 萬請人做評估報告':
    'Already spent NT$100,000 on an evaluation report',
  '未來現金流今日值':
    'Present value of future cash flows',
  '萬':
    '× NT$10k',
  '損益兩平月現金流':
    'Break-even monthly cash flow',
  '店長的最低目標':
    'The manager\'s minimum target',
  '3. IRR：同一個案子的另一種說法':
    '3. IRR: another way of saying the same thing about a project',
  'IRR ＝ 讓 NPV 恰好為 0 的折現率':
    'IRR = the discount rate that makes NPV exactly 0',
  '，也就是案子的「內建報酬率」。擴廠案的 IRR ＝':
    ', which is the project\'s "built-in rate of return". The plant expansion\'s IRR = ',
  '，高於 WACC 8% → 做。單一、正常的案子，IRR 與 NPV 必然同向，不會打架。':
    ', above the WACC of 8% → do it. For a single, normal project, IRR and NPV always point the same way and never clash.',
  'IRR 的好處是直覺——「這案子賺 9.8%」人人聽得懂。但它有三個著名陷阱：':
    'IRR\'s strength is intuition — "this project earns 9.8%" is something everyone understands. But it has three famous traps:',
  '陷阱一｜規模忽視（互斥案的經典錯誤）':
    'Trap 1 | Ignoring scale (the classic mistake with mutually exclusive projects)',
  '互斥案':
    'Mutually exclusive projects',
  '投資':
    'Investment',
  '一年後回收':
    'Payoff after one year',
  'A 小而美':
    'A: small and neat',
  '1 億':
    'NT$100 million',
  '1.5 億':
    'NT$150 million',
  '0.39 億':
    'NT$39 million',
  'B 大而穩':
    'B: big and steady',
  '10 億':
    'NT$1 billion',
  '12 億':
    'NT$1.2 billion',
  '1.11 億':
    'NT$111 million',
  'IRR 說選 A、NPV 說選 B——':
    'IRR says pick A, NPV says pick B — ',
  '選 B':
    'pick B',
  '。公司的目標是極大化價值的':
    '. The company\'s goal is to maximize the ',
  '金額':
    'amount',
  '，不是報酬率的百分比（W40 目標函數）。':
    ' of value, not the percentage return (the W40 objective function).',
  '鐵律：互斥案永遠聽 NPV 的。':
    'Iron rule: for mutually exclusive projects, always listen to NPV.',
  '陷阱二｜多重解':
    'Trap 2 | Multiple solutions',
  '：現金流正負號變換多次（先投入 → 賺錢 → 期末大額復原成本）時，IRR 可能有兩個以上的解——挖礦、核電除役這類案子常見。':
    ': when the cash flows change sign several times (invest → earn → a big restoration cost at the end), IRR can have two or more solutions — common in projects such as mining and nuclear decommissioning.',
  '陷阱三｜再投資假設':
    'Trap 3 | The reinvestment assumption',
  '：IRR 隱含「期中收到的現金能再以 IRR 的報酬率投資出去」。IRR 50% 的案子，中途收到的錢真找得到 50% 的去處嗎？NPV 只假設再投資於 WACC，保守而誠實。':
    ': IRR implicitly assumes that cash received along the way can be reinvested at the IRR. For a project with a 50% IRR, can you really find a 50% home for the money received midway? NPV assumes reinvestment only at WACC — conservative and honest.',
  '4. 回收期法：粗糙，但有存在的理由':
    '4. Payback period: crude, but there is a reason it exists',
  '＝幾年回本。擴廠案的累計現金流在第 3.6 年跨過 10 億 → 回收期':
    '= the number of years to get your money back. The plant expansion\'s cumulative cash flow passes NT$1 billion in year 3.6 → payback period ',
  '3.6 年':
    '3.6 years',
  '。缺陷明顯：不折現，也不管回收後的現金流（砍掉第 5 年的 2 億，回收期不變）。但它回答另一個問題：':
    '. The flaws are obvious: no discounting, and it ignores cash flows after payback (cut the NT$200 million in year 5 and the payback period does not change). But it answers a different question: ',
  '「錢卡多久」':
    '"how long is the money stuck"',
  '。流動性緊、環境變化快的公司，用它當 NPV 的輔助門檻（例：NPV 大於 0 且回收期短於 4 年）合情合理。':
    '. For a company with tight liquidity and a fast-changing environment, using it as a secondary hurdle alongside NPV (for example, NPV above 0 and payback shorter than 4 years) is perfectly reasonable.',
  '5. 增量現金流：最容易做錯的一步':
    '5. Incremental cash flows: the step most easily done wrong',
  'NPV 公式簡單，難在':
    'The NPV formula is simple; the hard part is ',
  '現金流放什麼進去':
    'what cash flows you put into it',
  '。三條原則：':
    '. Three principles:',
  '沉沒成本不管':
    'Ignore sunk costs',
  '：已花的可行性研究費 5,000 萬，不管做不做都拿不回來，':
    ': the NT$50 million already spent on the feasibility study can\'t be recovered whether or not you go ahead, so it ',
  '不進現金流':
    'stays out of the cash flows',
  '。心理上最難——人會想「都花這麼多了」，這是 W23 損失趨避的公司版，叫沉沒成本謬誤':
    '. This is the hardest part psychologically — people think "we\'ve already spent so much" — it is the corporate version of W23\'s loss aversion, and it is called the sunk cost fallacy',
  '機會成本要管':
    'Count opportunity costs',
  '：用自家閒置土地蓋廠「不用錢」？錯——土地若能賣 3 億，這 3 億就是案子的成本':
    ': building the plant on the company\'s own idle land is "free"? Wrong — if the land could be sold for NT$300 million, that NT$300 million is a cost of the project',
  '外溢效果要管':
    'Count spillover effects',
  '：新產品吃掉自家舊產品的營收（自食效果）要扣掉；帶動周邊產品的銷售要加上':
    ': a new product eating the revenue of the company\'s old product (cannibalization) must be deducted; sales it lifts for companion products must be added',
  '「做 vs 不做，公司整體現金流的差異」才是增量——不是案子自己的損益表。':
    '"The difference in the company\'s overall cash flow between doing it and not doing it" is what incremental means — not the project\'s own income statement.',
  '6. 投資人視角：事後查核':
    '6. The investor\'s view: checking afterwards',
  'CFO 算 NPV 給董事會看；投資人看不到內部模型，但能驗證':
    'The CFO calculates NPV for the board; investors can\'t see the internal model, but they can verify ',
  '事後成績':
    'the track record afterwards',
  '公司歷年大型資本支出之後，ROIC 上升還是下降？（W9——擴產擴出價值，還是擴出產能過剩？）':
    'After the company\'s large capital expenditures over the years, did ROIC go up or down? (W9 — did the expansion build value, or build overcapacity?)',
  '管理層口中的「策略性投資」有沒有量化的回收說法？年報裡的擴廠理由是 NPV 語言，還是形容詞？':
    'Does management\'s "strategic investment" come with any quantified payback story? Is the annual report\'s rationale for a new plant in the language of NPV, or in adjectives?',
  '這正是 W22 護城河趨勢與 W40「資本配置紀律」的檢驗現場':
    'This is exactly the testing ground for W22\'s moat trend and W40\'s "capital allocation discipline"',
  '7. 常見誤解闢謠':
    '7. Three things people get wrong',
  '「IRR 高的案子比較好。」':
    '"The project with the higher IRR is the better one."',
  '互斥案的陷阱一：IRR 是比率，公司吃的是金額。':
    'Trap 1 for mutually exclusive projects: IRR is a ratio, but what a company lives on is amounts of money.',
  '「NPV 是精確科學。」':
    '"NPV is an exact science."',
  '它繼承 DCF 的所有毛病（W21 的假設放大器）：現金流是估的、WACC 也是估的。上面的實驗台已經示範——現金流打 9 折，NPV 就翻負。所以公司內部也要做敏感度與情境分析。':
    'It inherits all of DCF\'s flaws (W21\'s assumption amplifier): the cash flows are estimates, and so is WACC. The test bench above already showed it — cut the cash flows to 90% and NPV turns negative. That is why companies also run sensitivity and scenario analyses internally.',
  '「回收期短就是好案子。」':
    '"A short payback period means a good project."',
  '回收期偏好短期、懲罰長期布局（研發、品牌）；只用回收期的公司，會系統性地放棄最有價值的長線投資。':
    'Payback favors the short term and punishes long-term bets (R&D, brands); a company that uses payback alone will systematically give up its most valuable long-horizon investments.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '從教科書到年報':
    'From textbook to annual report',
  '60 分鐘':
    '60 min',
  '《Principles of Corporate Finance》資本預算章':
    'Principles of Corporate Finance, the capital budgeting chapters',
  'NPV／IRR 的正式推導與增量現金流原則——本週主幹。':
    'The formal derivation of NPV / IRR and the incremental cash flow principles — this week\'s backbone.',
  '30 分鐘':
    '30 min',
  'MIT 15.401 Finance Theory I：資本預算講次（選讀）':
    'MIT 15.401 Finance Theory I: the capital budgeting lecture (optional)',
  'MIT OpenCourseWare 的公開課程。':
    'A public course from MIT OpenCourseWare.',
  '20 分鐘':
    '20 min',
  '實習公司年報：去年最大的投資案':
    'Practice company\'s annual report: last year\'s largest investment project',
  'W40 已經標出來了。讀管理層的說明，用第 6 節的眼睛評分：有沒有回收期或報酬率的量化語言？':
    'W40 already marked it. Read management\'s explanation and score it with the eyes of section 6: is there any quantified language about payback period or return?',
  '10 分鐘':
    '10 min',
  '回顧 W20 自己的 DCF':
    'Revisit your own W20 DCF',
  '確認你看得出 NPV 與 DCF 是同一條公式。':
    'Confirm you can see that NPV and DCF are the same formula.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '三題實戰':
    'Three practical problems',
  '任務 A｜擴廠案全套（25 分鐘）':
    'Task A | The full plant-expansion case (25 minutes)',
  '用試算表重建講義的擴廠案：驗證 NPV ＝ +0.467 億、IRR ≈ 9.82%（用 IRR 函數）、回收期 3.6 年。再做敏感度：現金流全部打 9 折、WACC 升到 10%——NPV 還是正的嗎？親手體會「小案子的 NPV 很脆」。':
    'Rebuild the lecture\'s plant-expansion case in a spreadsheet: verify NPV = +NT$46.7 million, IRR ≈ 9.82% (use the IRR function), payback period 3.6 years. Then run the sensitivities: all cash flows at 90%, WACC up to 10% — is the NPV still positive? Feel for yourself how fragile the NPV of a small project is.',
  '任務 B｜飲料店第二家店（15 分鐘）':
    'Task B | The drinks shop\'s second branch (15 minutes)',
  '重算分店 NPV（+12.3 萬）；再問：如果月現金流只有 1.2 萬呢？找出 NPV ＝ 0 的那個月現金流——資本預算直接變成管理工具。':
    'Recompute the branch\'s NPV (+NT$123,000); then ask: what if monthly cash flow is only NT$12,000? Find the monthly cash flow at which NPV = 0 — capital budgeting turns directly into a management tool.',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '擴廠案實驗台預設必須是 NPV +0.47 億、IRR 9.82%、回收期 3.6 年；按「現金流打 9 折」NPV 變 −0.58 億，按「WACC 升到 10%」NPV 變 −0.04 億——兩個小變動都讓好案子翻負。第二家店預設 NPV +12.3 萬、損益兩平月現金流 1.25 萬；月現金流拉到 1.2 萬，NPV 是 −2.2 萬。勾選「已花 10 萬評估費」，NPV 必須':
    'The plant-expansion test bench defaults must show NPV +NT$47 million, IRR 9.82%, payback 3.6 years; press "Cash flows at 90%" and NPV becomes −NT$58 million, press "WACC up to 10%" and NPV becomes −NT$4 million — two small changes both turn a good project negative. The second-branch defaults show NPV +NT$123,000 and break-even monthly cash flow of NT$12,500; drag monthly cash flow to NT$12,000 and NPV is −NT$22,000. Tick "already spent NT$100,000 on an evaluation report" and the NPV must ',
  '完全不變':
    'not change at all',
  '擴廠案三指標驗證通過＋敏感度做完':
    'The plant-expansion three metrics are verified and the sensitivities are done',
  '分店損益兩平現金流算出':
    'Branch break-even cash flow is worked out',
  '能背出增量現金流三原則':
    'I can recite the three principles of incremental cash flow',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '互斥案 IRR 與 NPV 打架時聽誰的？為什麼？':
    'When IRR and NPV disagree on mutually exclusive projects, which do you follow? Why?',
  '聽 NPV':
    'Follow NPV',
  '。公司的目標是極大化股東價值的「金額」，不是報酬率的「百分比」；高 IRR 的小案子創造的絕對價值，可能遠小於中 IRR 的大案子。IRR 適合當「單一案子過不過門檻」的溝通語言，不適合排序互斥案。':
    '. The company\'s goal is to maximize the amount of shareholder value, not the percentage return; a small project with a high IRR can create far less absolute value than a big project with a middling IRR. IRR is good as the language for "does a single project clear the hurdle", not for ranking mutually exclusive projects.',
  '「可行性研究已經花了 5,000 萬，不做太可惜」——錯在哪？':
    '"The feasibility study already cost NT$50 million, so it would be a pity not to go ahead" — what is wrong with that?',
  '→ 錯在讓':
    '→ The mistake is letting the ',
  '沉沒成本':
    'sunk cost',
  '參與決策：那 5,000 萬不管做不做都拿不回來，唯一該問的是「從今天起的增量現金流 NPV 是否為正」。行為版本是損失趨避＋承諾升級（W23）——不想讓已投入的損失「定案」，於是加碼爛案。':
    ' take part in the decision: the NT$50 million can\'t be recovered whether you go ahead or not, and the only question is "from today on, is the incremental cash flow NPV positive?" The behavioral version is loss aversion plus escalation of commitment (W23) — not wanting to make the sunk loss "final", so you pile more money into a bad project.',
  '投資人怎麼從公開資訊「事後查核」一家公司的資本預算紀律？':
    'How can an investor "check after the fact" a company\'s capital budgeting discipline from public information?',
  '→ 三個線索：①大型資本支出後 2–3 年的':
    '→ Three clues: (1) the ',
  'ROIC 軌跡':
    'ROIC trajectory',
  '（上升＝投資有理，持續下滑＝擴產毀值）；②資本支出／折舊比與營收成長的對照（狂投資但營收不動＝錢進了無底洞）；③管理層溝通的語言（有沒有回收率或年限的量化承諾，事後有沒有追蹤交代）。':
    ' for 2–3 years after large capital expenditures (rising = the investment made sense, steadily falling = the expansion destroyed value); (2) the capex-to-depreciation ratio against revenue growth (heavy investment with flat revenue = the money went into a bottomless pit); (3) the language of management\'s communication (is there a quantified commitment on return or timeframe, and did they report back on it afterwards?).',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '要不要開第二家店？':
    'Should we open a second shop?',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（第二家店）':
    'Opening (the second shop)',
  '「我們的飲料店生意不錯，店長問：要不要開第二家？裝潢加設備 60 萬。你怎麼決定？」（讓家人先憑感覺表態。）':
    '"Our drinks shop is doing well, and the manager asks: shall we open a second one? Fit-out plus equipment costs NT$600,000. How would you decide?" (Let the family give a gut-feel answer first.)',
  '核心演示':
    'The core demo',
  '「上市公司的作法是三步：①估每月能淨賺多少（我們估 1.5 萬）②折現加總未來五年（記得第一週的『未來的錢打折』嗎？）③跟 60 萬比。答案：未來現金流今天值 72 萬，減 60 萬——':
    '"A listed company does it in three steps: (1) estimate how much it nets each month (we estimate NT$15,000); (2) discount and add up the next five years (remember Week 1\'s \'future money gets a discount\'?); (3) compare with NT$600,000. The answer: the future cash flows are worth NT$720,000 today, minus NT$600,000 — ',
  '淨賺 12 萬的『今日價值』，開！':
    'we net NT$120,000 of \'present value\', so open it!',
  '台積電蓋千億晶圓廠，算法跟這個一模一樣，只是多幾個零。」':
    'When TSMC builds a NT$100 billion fab, the calculation is exactly the same, just with a few more zeros."',
  '互動（沉沒成本）':
    'Interactive (sunk costs)',
  '「換個情境：我們已經花 10 萬請人做了評估報告，結果算出來 NPV 是負的。有人說『都花 10 萬了，不開太浪費』——這句話對嗎？」（引導：那 10 萬不管開不開都回不來了。）「':
    '"A different scenario: we have already paid NT$100,000 for someone to write an evaluation report, and it turns out the NPV is negative. Someone says, \'We\'ve spent NT$100,000 already, so not opening would be a waste\' — is that right?" (Guide them: that NT$100,000 is gone whether we open or not.) "',
  '已經沉下去的錢，不該綁架未來的決定。':
    'Money that has already sunk should not hold future decisions hostage.',
  '這招學會了，人生到處用得上：看到一半的爛電影、投入很深的錯誤方向……」':
    ' Once you learn this trick you can use it everywhere in life: a bad movie you\'re halfway through, a wrong direction you\'ve already invested heavily in..."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「未來每月 1.5 萬是猜的吧？」':
    '"Surely the NT$15,000 a month is a guess?"',
  '「對！所以要做第二步：如果只有 1.2 萬還划算嗎？算出『至少要做到多少』——這就是給店長的目標。承認是猜的，然後量化猜錯的後果，就是專業和賭博的差別。」':
    '"Yes! That\'s why there\'s step two: is it still worth it if it\'s only NT$12,000? Work out \'how much we have to achieve at minimum\' — that becomes the manager\'s target. Admitting it\'s a guess, and then quantifying the cost of guessing wrong, is the difference between a professional and a gambler."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫 NPV 公式與決策規則、IRR 三陷阱':
    'I can write the NPV formula and decision rule from memory, and the three IRR traps',
  '三題實戰完成（含敏感度與損益兩平）':
    'The three practical problems are done (including sensitivities and break-even)',
  '能解釋 NPV 與 W20 DCF 的關係':
    'I can explain the relationship between NPV and W20\'s DCF',
  '分享環節完成（沉沒成本一課），記錄卡住的點':
    'The teach-it step is done (the sunk cost lesson); I noted where I got stuck',
  '回填 curriculum/01-overview.md 第 41 週進度欄':
    'Fill in the Week 41 progress column of curriculum/01-overview.md',
  '下週預告 · Week 42：資金成本':
    'Next week · Week 42: The cost of capital',
  '——NPV 裡那個 8% 從哪來？WACC 與 CAPM 的實務估算，你會替實習公司親手算一個。':
    ' — where does the 8% in NPV come from? Practical estimation of WACC and CAPM; you will calculate one yourself for your practice company.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：CFO 三大決策':
    'Previous week: The CFO\'s three big decisions',
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
  '分店投資額':
    'Branch investment',
  '答對了——A 的 NPV 是 0.39 億，B 是 1.11 億。50% 的報酬率乘在 1 億上，不如 20% 乘在 10 億上。公司要極大化的是價值的金額，互斥案永遠聽 NPV 的。':
    'Correct — A\'s NPV is NT$39 million and B\'s is NT$111 million. A 50% return on NT$100 million is worth less than a 20% return on NT$1 billion. What the company wants to maximize is the amount of value, so for mutually exclusive projects always listen to NPV.',
  '選 B。A 的 NPV 是 0.39 億，B 是 1.11 億——50% 的報酬率乘在 1 億上，不如 20% 乘在 10 億上。公司要極大化的是價值的金額，不是報酬率的百分比：互斥案永遠聽 NPV 的。':
    'Pick B. A\'s NPV is NT$39 million and B\'s is NT$111 million — a 50% return on NT$100 million is worth less than a 20% return on NT$1 billion. What the company wants to maximize is the amount of value, not the percentage return: for mutually exclusive projects always listen to NPV.',
  '億':
    '× NT$100m',
  '回不了本':
    'Never pays back',
  '年':
    'yrs',
  '<span>第':
    '<span>Year',
  '年</span>':
    '</span>',
  '億：做。</b>還清':
    '(NT$100m): do it.</b> After paying the',
  '% 的資金成本後，替股東多創造':
    '% cost of capital, it still creates an extra',
  '萬的今日價值。':
    '(NT$10k) of present value for shareholders.',
  '但注意，緩衝很薄——試試把現金流打 9 折。':
    'But note that the cushion is thin — try cutting the cash flows to 90%.',
  '億：不做。</b>':
    '(NT$100m): don\'t do it.</b>',
  '% 低於 WACC':
    '% is below WACC',
  '賺的錢不夠付資金成本。原本 +0.47 億的好案子，一個小假設就能讓它翻負：這就是要做敏感度分析的原因。':
    'so the profit does not cover the cost of capital. A good project that was +0.47 (NT$100m) can be tipped negative by one small assumption: this is why sensitivity analysis is done.',
  '萬：開。</b>只要每月至少做到':
    '(NT$10k): open it.</b> As long as monthly net cash flow reaches at least',
  '萬的淨現金流，這家店就不虧股東的錢——這個數字直接交給店長當目標。':
    '(NT$10k), the shop does not lose shareholders\' money — hand this number straight to the manager as the target.',
  '萬：不開。</b>每月淨現金流至少要':
    '(NT$10k): don\'t open.</b> Monthly net cash flow must be at least',
  '萬才划算；做不到這個業績，60 個月的辛苦換不回投資加上資金成本。':
    '(NT$10k) to be worth it; fall short of that and 60 months of hard work will not earn back the investment plus the cost of capital.',
  '<br><b>評估費 10 萬已經花掉了——NPV 一塊錢都沒變。</b>不管開不開，那 10 萬都拿不回來，所以它不進現金流。「都花了 10 萬，不開太浪費」是沉沒成本謬誤。':
    '<br><b>The NT$100,000 evaluation fee is already spent — the NPV has not moved by a single dollar.</b> Whether we open or not, that NT$100,000 is not coming back, so it stays out of the cash flows. "We\'ve already spent NT$100,000, so not opening would be a waste" is the sunk cost fallacy.',
  '✓ 會算 NPV 了——下週追問那個 8% 從哪裡來。':
    '✓ You can compute NPV now — next week, where that 8% comes from.',
};
