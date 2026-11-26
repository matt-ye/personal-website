/*
 * 給家人的投資課 Week 42：資金成本——WACC 與 CAPM 實務估算 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-42-wacc-capm.html
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
  '給家人的投資課 · Q4 財務長季 · Week 42':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 42',
  '資金成本——WACC 與 CAPM 實務估算':
    'The Cost of Capital — Estimating WACC and CAPM in Practice',
  '上週 NPV 裡那個「8%」，這週要自己算了。WACC 是公司所有投資案的':
    'The "8%" in last week\'s NPV — this week you work it out yourself. WACC is the ',
  '跨欄高度':
    'height of the hurdle',
  '——跨不過的案子毀滅價值。它也是 W20 DCF 折現率的正式版，以及 W9「ROIC 高於 WACC ＝ 護城河」那條鐵律的分母。':
    ' every investment project in the company has to clear — projects that cannot clear it destroy value. It is also the formal version of the discount rate in W20\'s DCF, and the denominator of W9\'s iron law "ROIC above WACC = a moat".',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 15、20、41 週':
    'Prerequisites: Weeks 15, 20 and 41',
  '52 週 · 第 42 週':
    '52 weeks · Week 42',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'CFO 用它設定投資門檻；投資人用它判斷 ROIC 算不算好；本週你會替實習公司親手估一個 WACC，每個輸入都有出處。':
    'The CFO uses it to set the investment hurdle; the investor uses it to judge whether an ROIC is good; this week you will estimate a WACC for your practice company with your own hands, with a source for every input.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的沉沒成本一課——家人接受「10 萬不該綁架決定」了嗎？':
    'Look back at last week\'s lesson on sunk costs — has your family accepted that "NT$100,000 shouldn\'t hold the decision hostage"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '公司跟銀行借錢要付 2.5% 利息。那用股東的錢，要付多少「利息」？':
    'When a company borrows from a bank it pays 2.5% interest. So what "interest" does it pay when it uses shareholders\' money?',
  '不用付，股東的錢是免費的':
    'None — shareholders\' money is free',
  '要付，而且比銀行貴':
    'It pays, and it costs more than the bank',
  '要付，但比銀行便宜':
    'It pays, but it costs less than the bank',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. WACC 的直覺：兩種金主的加權要價':
    '1. The intuition behind WACC: the weighted asking price of two kinds of backers',
  '公司的錢來自兩種人：':
    'A company\'s money comes from two kinds of people: ',
  '債主':
    'lenders',
  '（要利息）與':
    ' (who want interest) and ',
  '股東':
    'shareholders',
  '（要報酬）。WACC 就是兩者要價的加權平均：':
    ' (who want a return). WACC is the weighted average of what the two ask:',
  'WACC ＝ E／(E＋D) × 股東要求報酬 ＋ D／(E＋D) × 借款利率 ×（1 − 稅率）':
    'WACC = E/(E+D) × shareholders\' required return + D/(E+D) × borrowing rate × (1 − tax rate)',
  'E ＝ 權益':
    'E = equity ',
  '市值':
    'market value',
  '、D ＝ 有息負債（W6 的老朋友）。':
    ', D = interest-bearing debt (an old friend from W6).',
  '用市值權重，不是帳面':
    'Use market-value weights, not book values',
  '——金主看的是現在的價，不是歷史成本':
    ' — the people supplying the money look at today\'s price, not historical cost',
  '（1 − 稅率）：利息可以抵稅，所以債的真實成本比票面利率低。這個「稅盾」是下週的主角':
    '(1 − tax rate): interest is tax-deductible, so the true cost of debt is lower than its stated rate. This "tax shield" is the star of next week',
  '完整算例':
    'A full worked example',
  '：權益市值 600 億、有息負債 200 億、股東要求報酬 8.1%、借款利率 2.5%、稅率 20%。WACC ＝ 0.75 × 8.1% ＋ 0.25 × 2.5% × 0.8 ＝ 6.075% ＋ 0.5% ＝':
    ': equity market value NT$60 billion, interest-bearing debt NT$20 billion, shareholders\' required return 8.1%, borrowing rate 2.5%, tax rate 20%. WACC = 0.75 × 8.1% + 0.25 × 2.5% × 0.8 = 6.075% + 0.5% = ',
  '。這家公司每用一塊錢，平均要付 6.575% 的「資金租金」。':
    '. For every dollar this company uses, it pays on average 6.575% in "capital rent".',
  '2. 借款利率：債主要多少（三個中最簡單）':
    '2. The borrowing rate: what lenders ask (the easiest of the three)',
  '方法依序：①公司現有借款／公司債的':
    'Methods, in order: (1) the ',
  '實際利率':
    'effective interest rate',
  '（年報附註有）；②同信評公司債的市場殖利率；③無風險利率＋信用利差估計。台灣公司常見量級 1.5–4%，依信用與年期而定。':
    ' on the company\'s existing loans and bonds (it is in the annual report notes); (2) the market yield on bonds of the same credit rating; (3) the risk-free rate plus an estimated credit spread. A typical range for Taiwanese companies is 1.5–4%, depending on credit quality and maturity.',
  '3. 股東要求報酬：CAPM 登場':
    '3. Shareholders\' required return: enter CAPM',
  '股東的要價沒有合約寫明，要用模型估。標準工具是':
    'A shareholder\'s asking price is not written in any contract, so it has to be estimated with a model. The standard tool is ',
  '——W15 現代投資組合理論的直系後代、W32 因子模型的單因子祖先：':
    ' — the direct descendant of W15\'s modern portfolio theory and the single-factor ancestor of W32\'s factor models:',
  '股東要求報酬 ＝ 無風險利率 ＋ β × 股權風險溢酬（ERP）':
    'Shareholders\' required return = risk-free rate + β × equity risk premium (ERP)',
  '輸入':
    'Input',
  '意義':
    'What it means',
  '哪裡拿':
    'Where to get it',
  '量級':
    'Typical size',
  '無風險利率':
    'Risk-free rate',
  '錢的基本時間價格（W1、W3）':
    'The basic time price of money (W1, W3)',
  '十年期公債殖利率（台灣：央行／櫃買中心；美元估值用美債）':
    'Ten-year government bond yield (Taiwan: the Central Bank / Taipei Exchange; use US Treasuries for US-dollar valuations)',
  '台灣 1–2% 上下（查當日）':
    'Around 1–2% in Taiwan (check the day\'s figure)',
  '這檔股票對大盤的敏感度，系統性風險的量（W15）':
    'This stock\'s sensitivity to the market, a measure of systematic risk (W15)',
  '財經網站的迴歸值，或 Damodaran 產業 β':
    'Regression values on financial websites, or Damodaran\'s industry β',
  '大盤＝1；穩定公用事業 &lt;1；高波動科技 &gt;1':
    'Market = 1; stable utilities &lt;1; high-volatility tech &gt;1',
  '整體股市高於無風險的長期要求':
    'The long-run return the whole stock market demands above the risk-free rate',
  'Damodaran ERP 資料頁（按國家更新）':
    'Damodaran\'s ERP data page (updated by country)',
  '成熟市場 4–6%；台灣略高（含國家風險溢酬）':
    'Mature markets 4–6%; Taiwan slightly higher (includes a country risk premium)',
  '算例':
    'Worked example',
  '：無風險利率 1.5%、β 1.1、ERP 6% → 股東要求報酬 ＝ 1.5% ＋ 1.1 × 6% ＝':
    ': risk-free rate 1.5%, β 1.1, ERP 6% → shareholders\' required return = 1.5% + 1.1 × 6% = ',
  '。直覺句：「持有這檔股票的風險是大盤的 1.1 倍，所以股東要求比無風險多 6.6 個百分點的補償。」':
    '. In plain words: "Holding this stock is 1.1 times as risky as the market, so shareholders ask for 6.6 percentage points more than the risk-free rate as compensation."',
  'WACC 組裝台':
    'WACC assembly bench',
  '預設是講義算例。下方的九宮格會跟著你的輸入，把 β 與 ERP 各上下晃一格。':
    'The defaults are the lecture\'s worked example. The nine-box grid below follows your inputs, nudging β and ERP up and down one notch each.',
  '權益市值 E':
    'Equity market value E',
  '600 億':
    '600 × NT$100m',
  '有息負債 D':
    'Interest-bearing debt D',
  '200 億':
    '200 × NT$100m',
  '借款利率':
    'Borrowing rate',
  '稅率':
    'Tax rate',
  '這家公司的 ROIC':
    'This company\'s ROIC',
  '股東要求報酬':
    'Shareholders\' required return',
  '稅後借款成本':
    'After-tax cost of debt',
  '利率 ×（1 − 稅率）':
    'Rate × (1 − tax rate)',
  '創造還是毀滅':
    'Creates or destroys value',
  '敏感度九宮格（WACC）：β ±0.2 × ERP ±1%':
    'Sensitivity grid (WACC): β ±0.2 × ERP ±1%',
  '4. 每個輸入的爭議（誠實面對）':
    '4. The disputes over every input (being honest)',
  'WACC 看起來精密，其實每個零件都在晃：':
    'WACC looks precise, but every part of it wobbles:',
  'β 不穩定':
    'β is unstable',
  '：換個迴歸期間（2 年 vs 5 年、週資料 vs 月資料），β 就變。實務常用「產業平均 β」再按槓桿調整（unlever-relever），比單一公司的迴歸值穩':
    ': change the regression window (2 years vs 5 years, weekly vs monthly data) and β changes. In practice people often take the "industry average β" and re-adjust it for leverage (unlever-relever), which is steadier than a single company\'s regression value',
  'ERP 是估的':
    'ERP is an estimate',
  '：歷史平均？隱含法？學界吵了五十年，4% 和 6% 都有人用——差 2 個百分點，WACC 差超過 1 個百分點，估值差一大截（W21 九宮格的根源）':
    ': historical average? implied method? Academics have argued for fifty years, and both 4% and 6% are in use — a 2-point difference moves WACC by more than 1 point and makes a big difference to the valuation (the root of W21\'s nine-box grid)',
  'CAPM 本身有缺陷':
    'CAPM itself is flawed',
  '：W32 學過，β 對報酬的解釋力實證上很弱；但它仍是業界的標準語言':
    ': you studied this in W32 — β\'s explanatory power for returns is empirically weak; but it is still the industry\'s standard language',
  '結論（Damodaran 的態度）':
    'Conclusion (Damodaran\'s attitude)',
  '：WACC 是':
    ': WACC is a ',
  '合理區間':
    'reasonable range',
  '，不是精確值——永遠配敏感度使用。「WACC 8.7362%」是假精確的招牌':
    ', not a precise value — always use it together with a sensitivity analysis. "WACC 8.7362%" is the trademark of false precision',
  '5. 跨欄高度的三個應用':
    '5. Three uses of the hurdle height',
  '投資案門檻':
    'Investment hurdle',
  '（W41）：NPV 的折現率、IRR 的比較基準':
    ' (W41): the discount rate for NPV, the benchmark for IRR',
  '價值創造的判官':
    'The judge of value creation',
  'ROIC 高於 WACC ＝ 每塊錢投入都在創造價值':
    'ROIC above WACC = every dollar invested creates value',
  '——護城河的財務定義，正式補完分母':
    ' — the financial definition of a moat, finally completing the denominator',
  'DCF 折現率':
    'DCF discount rate',
  '（W20）：你當時「先用 9%」的那個位置，現在能自己算了。回去把目標公司 DCF 的折現率換成自算的 WACC，看估值變多少':
    ' (W20): the spot where you used "let\'s start with 9%" back then — now you can calculate it yourself. Go back and swap your target company\'s DCF discount rate for your own WACC, and see how much the valuation changes',
  '風險對應原則':
    'The risk-matching principle',
  '：不同風險的案子該用不同的門檻。用公司整體 WACC 去評「比本業風險高很多的新事業」，會系統性高估它的價值。保守作法：新事業加碼 2–3 個百分點。':
    ': projects of different risk deserve different hurdles. Judging "a new business much riskier than the core business" with the company-wide WACC will systematically overstate its value. A conservative approach: add 2–3 percentage points for the new business.',
  '錯用門檻的代價':
    'The cost of using the wrong hurdle',
  '一個新事業：投資 18 億，之後每年現金流 1 億、永續成長 2%。公司整體 WACC 6.5%，但這個新事業的風險高得多。':
    'A new business: invest NT$1.8 billion, then NT$100 million of cash flow a year, growing 2% forever. The company-wide WACC is 6.5%, but this new business is much riskier.',
  '公司整體 WACC':
    'Company-wide WACC',
  '新事業風險加碼':
    'Risk add-on for the new business',
  '2.5 個百分點':
    '2.5 percentage points',
  '每年現金流':
    'Annual cash flow',
  '1.0 億':
    '1.0 × NT$100m',
  '用整體 WACC 算':
    'Calculated with the company-wide WACC',
  'NPV（億）':
    'NPV (NT$100m)',
  '用風險對應門檻算':
    'Calculated with the risk-matched hurdle',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「債比股便宜，多借就能壓低 WACC。」':
    '"Debt is cheaper than equity, so borrowing more brings WACC down."',
  '半對：稅盾確實讓債便宜，但借越多、破產風險越高，股東與債主的要價':
    'Half right: the tax shield does make debt cheaper, but the more you borrow, the higher the bankruptcy risk, and what both shareholders and lenders ask for ',
  '都會被推高':
    'gets pushed up',
  '——WACC 不會一路往下（下週 MM 理論的正題）。':
    ' — WACC does not keep falling forever (the main topic of next week\'s MM theory).',
  '「WACC 是財務部的事，投資人不用算。」':
    '"WACC is the finance department\'s business; investors don\'t need to calculate it."',
  '你每次判斷「這家公司 ROIC 15% 算好嗎」，都隱含在跟 WACC 比。不會算分母，那條鐵律只是口號。':
    'Every time you judge "is an ROIC of 15% good for this company?", you are implicitly comparing it with WACC. If you can\'t calculate the denominator, that iron law is just a slogan.',
  '「帳上現金多，資金成本就低。」':
    '"If the books show lots of cash, the cost of capital is low."',
  '現金不是資金來源，是資金':
    'Cash is not a source of funds, it is a ',
  '用途':
    'use',
  '；囤現金的機會成本恰恰是 WACC——股東的錢閒置在 1% 的定存裡，而股東要求 8%（W44 股利政策的核心矛盾）。':
    ' of funds; the opportunity cost of hoarding cash is exactly WACC — shareholders\' money sits idle in a 1% deposit while shareholders demand 8% (the core tension in W44\'s dividend policy).',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '找到每個輸入的出處':
    'Find the source of every input',
  '50 分鐘':
    '50 min',
  '《Principles of Corporate Finance》資金成本章':
    'Principles of Corporate Finance, the cost of capital chapters',
  'WACC 與 CAPM 的正式推導。':
    'The formal derivation of WACC and CAPM.',
  '30 分鐘':
    '30 min',
  'Damodaran Data 頁：各國 ERP 與產業 β':
    'Damodaran\'s Data page: ERP by country and β by industry',
  '實際找到兩張表——各國 ERP（找台灣的值）與產業 β（找實習公司產業的 unlevered β）。抄下數字與更新日期。':
    'Actually find two tables — ERP by country (find Taiwan\'s value) and industry β (find the unlevered β for your practice company\'s industry). Copy down the numbers and the update dates.',
  '10 分鐘':
    '10 min',
  '台灣十年期公債殖利率':
    'Taiwan\'s ten-year government bond yield',
  '到中央銀行或櫃買中心查最新值，記下日期。':
    'Look up the latest value at the Central Bank or the Taipei Exchange and note the date.',
  '選讀':
    'Optional',
  'Damodaran 資金成本講次':
    'Damodaran\'s cost of capital lecture',
  '聽他親口說「cost of capital is not a precise number」。':
    'Hear him say it himself: "cost of capital is not a precise number".',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '替實習公司估 WACC（本週交付物）':
    'Estimate WACC for your practice company (this week\'s deliverable)',
  '做一張「WACC 計算單」，每一行都有出處：':
    'Build a "WACC worksheet" in which every line has a source:',
  'E：權益市值 ＝ 今日股價 × 流通股數（查證交所）':
    'E: equity market value = today\'s share price × shares outstanding (look it up at the Taiwan Stock Exchange)',
  'D：有息負債 ＝ 短期借款＋一年內到期長債＋長期借款＋公司債（W6 技能，年報附註）':
    'D: interest-bearing debt = short-term borrowings + long-term debt due within a year + long-term borrowings + corporate bonds (a W6 skill, from the annual report notes)',
  '無風險利率：十年期公債殖利率（今日值＋出處）':
    'Risk-free rate: ten-year government bond yield (today\'s value + source)',
  'β：財經網站迴歸值與 Damodaran 產業 β':
    'β: the regression value from a financial website and Damodaran\'s industry β — ',
  '兩個都抄':
    'copy both',
  '，選一個並寫理由':
    ', then pick one and write down your reason',
  'ERP：Damodaran 的台灣值（含出處與日期）':
    'ERP: Damodaran\'s value for Taiwan (with source and date)',
  '借款利率：年報利息費用 ÷ 平均有息負債（實際利率法），與新發債利率對照':
    'Borrowing rate: interest expense in the annual report ÷ average interest-bearing debt (the effective rate method), cross-checked against the rate on newly issued bonds',
  '組裝 WACC，先用講義算例重算一遍驗證手感':
    'Assemble the WACC, first redoing the lecture\'s worked example to check you have the feel for it',
  '敏感度：β ±0.2、ERP ±1% 的四角——WACC 區間多寬？':
    'Sensitivity: the four corners of β ±0.2 and ERP ±1% — how wide is the WACC range?',
  '收官':
    'The finish',
  '：拿實習公司的 ROIC（W9 算過）跟自算 WACC 比——它在創造還是毀滅價值？寫三行結論':
    ': compare the practice company\'s ROIC (computed in W9) with your own WACC — is it creating or destroying value? Write a three-line conclusion',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '組裝台預設必須是股東要求報酬 8.10%、稅後借款成本 2.00%、WACC 6.58%（精確值 6.575%）。九宮格四角是 5.00%（β 0.9、ERP 5%）到 8.45%（β 1.3、ERP 7%）——只晃兩個輸入，WACC 就差了將近 3.5 個百分點。錯用門檻的預設：用 6.5% 算 NPV +4.22 億，用 9% 算 −3.71 億。':
    'The assembly bench defaults must show: shareholders\' required return 8.10%, after-tax cost of debt 2.00%, WACC 6.58% (exact value 6.575%). The four corners of the nine-box grid run from 5.00% (β 0.9, ERP 5%) to 8.45% (β 1.3, ERP 7%) — nudge just two inputs and WACC differs by nearly 3.5 percentage points. Wrong-hurdle defaults: at 6.5% the NPV is +NT$422 million, at 9% it is −NT$371 million.',
  '計算單每個輸入有出處與日期':
    'Every input on the worksheet has a source and a date',
  '講義算例驗證通過（6.575%）':
    'The lecture\'s worked example is verified (6.575%)',
  'ROIC vs WACC 的結論寫出（護城河鐵律補完分母）':
    'The ROIC vs WACC conclusion is written (completing the denominator of the moat iron law)',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '為什麼 WACC 的權重用市值，不用帳面值？':
    'Why are WACC\'s weights based on market value rather than book value?',
  '→ WACC 回答的是「':
    '→ WACC answers "the opportunity cost of ',
  '現在':
    'now',
  '繼續佔用這些資本的機會成本」。金主當下要求的報酬，是基於資本的市場價值（他們此刻能賣掉的價錢），不是多年前的入帳成本；帳面權重會系統性扭曲，尤其在股價遠離淨值時。':
    ' continuing to tie up this capital". The return that providers of capital demand today is based on the market value of the capital (the price they could sell at this moment), not the cost booked years ago; book weights distort systematically, especially when the share price is far from book value.',
  '股東的錢為什麼比債主的錢貴？（兩個理由）':
    'Why is shareholders\' money more expensive than lenders\' money? (two reasons)',
  '求償順位':
    'Order of claims',
  '：清算時債主先拿，股東拿剩的（常常是零）——風險高、要價高。②':
    ': in liquidation, lenders are paid first and shareholders take what is left (often zero) — higher risk, higher asking price. ② ',
  '報酬不確定':
    'Uncertain returns',
  '：利息是合約保證，股利與資本利得全看經營成果——不確定性本身要補償（W1 折現率的本義）。':
    ': interest is guaranteed by contract, whereas dividends and capital gains depend entirely on how the business does — uncertainty itself has to be compensated (the true meaning of W1\'s discount rate).',
  '公司整體 WACC 6.5%，新事業風險遠高於本業——用 6.5% 評估它會犯什麼錯？':
    'The company-wide WACC is 6.5%, but the new business is far riskier than the core business — what mistake do you make by evaluating it at 6.5%?',
  '系統性高估新事業的價值':
    'You systematically overstate the new business\'s value',
  '：高風險現金流用低折現率折現 → NPV 虛胖 → 通過不該通過的案子。正解是風險對應：用同業純業務公司的資金成本，或本業加碼 2–3 個百分點。':
    ': discounting high-risk cash flows at a low rate → an inflated NPV → approving projects that should not pass. The right way is to match the hurdle to the risk: use the cost of capital of pure-play peers, or the core business\'s rate plus 2–3 percentage points.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '股東的錢更貴':
    'Shareholders\' money costs more',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（兩種金主）':
    'Opening (two kinds of backers)',
  '「公司要錢有兩條路：跟銀行借（付利息 2.5%），或用股東的錢。問題來了——':
    '"A company has two ways to get money: borrow from the bank (paying 2.5% interest), or use shareholders\' money. So here\'s the question — ',
  '股東的錢要付多少『利息』？':
    'what \'interest\' do you pay on shareholders\' money?',
  '」（讓家人想。常見答案：不用付吧？）':
    '" (Let the family think. A common answer: none, right?)',
  '核心觀念':
    'The core idea',
  '「要付，而且':
    '"You do pay, and it is ',
  '更貴':
    'more expensive',
  '——只是不寫在合約上。銀行有抵押品、排前面；股東排最後、賠光認賠——風險越大，要價越高（第一週的道理）。股東的要價大概 8%：無風險的 1.5% 加上『陪你冒險』的 6.6%。所以公司真正的資金成本是兩種錢的加權——我們實習的那家公司算出來是＿%。」':
    ' — it\'s just not written in a contract. The bank has collateral and ranks first; shareholders rank last and take the loss if it all goes wrong — the bigger the risk, the higher the asking price (the logic of Week 1). Shareholders ask for roughly 8%: the risk-free 1.5% plus 6.6% for \'keeping you company in the risk\'. So the company\'s true cost of capital is the weighted average of the two kinds of money — for the company we are studying it works out to ____%."',
  '互動（跨欄）':
    'Interactive (the hurdle)',
  '「這個數字是公司的『及格線』：做任何生意賺不到這個 %，等於幫金主打白工。所以聽到公司要蓋新廠、辦併購，內行人問的第一句是：':
    '"This number is the company\'s pass mark: any business that earns less than this % is working for free for the people who supplied the money. So when a company says it will build a new plant or make an acquisition, the first question an insider asks is: ',
  '報酬跨得過資金成本嗎？':
    'does the return clear the cost of capital?',
  '連回護城河：「之前說 ROIC 高的是好公司——現在你知道，比較的對象就是這條線。」':
    'Linking back to the moat: "Earlier we said companies with high ROIC are good companies — now you know the thing they are being compared with is this line."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「股東又沒逼公司付 8%。」':
    '"Shareholders don\'t force the company to pay 8%."',
  '「有——用腳投票。長期賺不到要求報酬的公司，股價會跌到『便宜到值得』為止；8% 是市場的隱形合約。」':
    '"They do — by voting with their feet. A company that can\'t earn its required return over the long run sees its share price fall until it is \'cheap enough to be worth it\'; the 8% is the market\'s invisible contract."',
  '「借錢比較便宜，那全用借的？」':
    '"Borrowing is cheaper, so why not borrow everything?"',
  '「下週的主題！先劇透：借太多，兩種金主都會漲價。」':
    '"That\'s next week\'s topic! A spoiler: borrow too much and both kinds of backers raise their price."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫 WACC 與 CAPM 公式，說出每個輸入的出處':
    'I can write the WACC and CAPM formulas from memory and name the source of every input',
  '實習公司 WACC 計算單完成（含敏感度四角）':
    'The practice company\'s WACC worksheet is done (including the four sensitivity corners)',
  'ROIC vs WACC 結論完成':
    'The ROIC vs WACC conclusion is done',
  '分享環節完成（股東的錢更貴），記錄卡住的點':
    'The teach-it step is done (shareholders\' money costs more); I noted where I got stuck',
  '回填 curriculum/01-overview.md 第 42 週進度欄':
    'Fill in the Week 42 progress column of curriculum/01-overview.md',
  '下週預告 · Week 43：資本結構':
    'Next week · Week 43: Capital structure',
  '——債與股的最適比例存在嗎？MM 定理的優雅與現實的偏離，加上「槓桿雙面刃」的完整數字展示。':
    ' — does an optimal mix of debt and equity exist? The elegance of the MM theorem against the deviations of reality, plus a full numerical demonstration of the "double-edged sword of leverage".',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：資本預算':
    'Previous week: Capital budgeting',
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
  '權益市值':
    'Equity market value',
  '有息負債':
    'Interest-bearing debt',
  '股權風險溢酬':
    'Equity risk premium',
  '風險加碼':
    'Risk add-on',
  '答對了——只是不寫在合約上。股東排在債主後面、賠光認賠，報酬也沒保證，所以要價更高：大約 8%，是銀行利率的三倍多。長期賺不到這個數字的公司，股價會跌到便宜到值得為止。':
    'Correct — it\'s just not written in a contract. Shareholders rank behind lenders and take the loss if it all goes wrong, and their return isn\'t guaranteed either, so their asking price is higher: about 8%, more than three times the bank\'s rate. A company that can\'t earn that number over the long run sees its share price fall until it is cheap enough to be worth it.',
  '要付，而且比銀行貴——只是不寫在合約上。股東排在債主後面、賠光認賠，報酬也沒保證，所以要價更高：大約 8%，是銀行利率的三倍多。長期賺不到這個數字的公司，股價會跌到便宜到值得為止。':
    'It pays, and it costs more than the bank — it\'s just not written in a contract. Shareholders rank behind lenders and take the loss if it all goes wrong, and their return isn\'t guaranteed either, so their asking price is higher: about 8%, more than three times the bank\'s rate. A company that can\'t earn that number over the long run sees its share price fall until it is cheap enough to be worth it.',
  '億':
    '× NT$100m',
  '，合理區間':
    ', reasonable range',
  '跨過了跨欄：每投入一塊錢都在創造價值':
    'clears the hurdle: every dollar invested is creating value',
  '——但 ROIC 落在 WACC 的區間內，這個結論並不穩，別說得太篤定。':
    ' — but ROIC sits inside WACC\'s range, so this conclusion is not robust; don\'t be too sure of it.',
  '，而且在整個區間之上，結論很穩。':
    ', and it is above the whole range, so the conclusion is solid.',
  '跨不過跨欄：帳上賺錢，經濟上卻在毀滅價值（W40 的帝國建造）。':
    'does not clear the hurdle: it earns money on the books but destroys value economically (W40\'s empire building).',
  '個百分點':
    'percentage points',
  '<b>同一個案子，換個門檻就從「該做」變「不該做」。</b>用整體':
    '<b>Same project, different hurdle: it flips from "do it" to "don\'t".</b> Using the overall',
  '% 算是 +':
    '% it comes out at +',
  '億，按風險對應的':
    '(NT$100m); using the risk-matched',
  '% 算卻是 −':
    '% it comes out at −',
  '億——用低門檻評高風險事業，正是公司「多角化」踩雷的標準路徑。':
    '(NT$100m) — judging a high-risk business with a low hurdle is the standard way companies step on a mine when they "diversify".',
  '<b>連用加碼後的':
    '<b>Even at the risk-loaded',
  '% 都是正的——這個案子經得起風險調整，可以做。</b>':
    '% it is still positive — this project holds up under risk adjustment, so do it.</b>',
  '<b>兩種門檻都是負的：不做。</b>現金流不夠撐起 18 億的投資。':
    '<b>Both hurdles give a negative NPV: don\'t do it.</b> The cash flows are not enough to support an investment of NT$1.8 billion.',
  '✓ 跨欄高度算出來了——下週問：借多少才對？':
    '✓ The hurdle height is worked out — next week\'s question: how much should you borrow?',
};
