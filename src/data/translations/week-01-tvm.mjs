/*
 * 給家人的投資課 Week 01：複利與貨幣時間價值 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-01-tvm.html
 *
 * ══ 這是 26 週的第一份，下面幾條決定會套用到全部 ══
 *
 * ⚠ 金額單位「萬」——**值不動，單位進標籤**
 *   互動計算機的數字是 JS 算的（`value / 10000` 再接上「萬」），
 *   對照表只能換字串、不能改算術。所以：
 *       值的後綴「萬」→ 空字串
 *       欄位／統計卡的標籤 → 補上 (NT$10k)
 *   例：期末終值 1,004.5 萬 → "Final value (NT$10k)" ＋ "1,004.5"
 *   英文財經表格本來就把單位放在表頭，這是慣例而不是將就。
 *
 *   **散文裡的金額則照常換算**（360 萬 → NT$3.6 million）——
 *   句子裡塞 (NT$10k) 讀起來不像人話。兩種語境各自用各自的慣例。
 *
 * ⚠ 台灣特有名詞不自創英譯：主計總處、勞退這類機構名，用官方英文名，
 *   查不到就保留原字並列入 KEEP（同 investment-notes 的處理）。
 *
 * ⚠ 已知限制：JS 裡的 `toLocaleString("zh-TW", …)` 不含中文，抽取器抓不到，
 *   所以英文頁的數字仍走台灣地區設定。這批數字的分位寫法兩地相同，
 *   畫面上看不出差別；真要改得動原始碼，不在對照表的職權內。
 *
 * 語域：這是寫給家人的教材，不是教科書。英文要保住口語感與比喻
 *   （滾雪球、雪坡要夠長），不要改寫成投資銀行的研究報告。
 */

export const KEEP = [];
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
  單元導航: 'Section navigation',
  切換深淺主題: 'Toggle light / dark theme',

  /* ── 標題區 ── */
  '給家人的投資課 · Q1 共同地基 · Week 01':
    'Family Investing Course · Q1 Common Ground · Week 01',
  複利與貨幣時間價值: 'Compounding and the Time Value of Money',
  'Time Value of Money——所有金融計算的第一塊磚。':
    'The time value of money — the first brick in every financial calculation.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：無': 'Prerequisites: none',
  '52 週 · 第 1 週': '52 weeks · Week 1',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles:',
  '投資人的估值（Q2 DCF）、操盤手的報酬計算（Q3）、財務長的資本預算（Q4 NPV），全部建立在「把不同時間的錢換算到同一個時點」這一件事上。':
    "The investor's valuation work (Q2, DCF), the trader's return calculations (Q3) and the CFO's capital budgeting (Q4, NPV) all rest on one thing: moving money from different points in time onto the same date.",

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '每個月存 1 萬元，連續存 30 年，用年化 6% 的報酬投資——最後會有多少錢？':
    'You save NT$10,000 a month for 30 years and invest it at 6% a year. How much do you end up with?',
  猜一個答案: 'Pick an answer',
  '大約 400 萬': 'About NT$4 million',
  '大約 600 萬': 'About NT$6 million',
  '大約 800 萬': 'About NT$8 million',
  '1,000 萬以上': 'NT$10 million or more',
  '答對了——而且多數人猜不到。你存進去的 360 萬只是雪球的核心，剩下 644 萬是時間滾出來的。':
    "Correct — and most people miss it. The NT$3.6 million you put in is just the core of the snowball; the other NT$6.44 million is what time rolled on.",
  '比你猜的多。多數人猜 400–600 萬——人類天生用直線思考，但複利是曲線，我們總是低估它的後段。':
    'More than you guessed. Most people say NT$4–6 million — we think in straight lines by nature, but compounding is a curve, and we always underestimate its back half.',
  萬元: 'NT$10,000',
  '360 萬': 'NT$3.6M',
  你存進去的本金: 'What you put in',
  '644 萬': 'NT$6.44M',
  複利長出來的利息: 'What compounding added',
  終值中利息的佔比: 'Interest as a share of the final value',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 一個核心觀念：今天的 100 元 ≠ 明年的 100 元':
    '1. One core idea: NT$100 today ≠ NT$100 next year',
  '如果我欠你 100 元，跟你說「明年還」，你吃虧了——因為你今天拿到 100 元可以存起來生利息，明年會變成比 100 元多。':
    'If I owe you NT$100 and say "I\'ll pay you next year", you lose out — NT$100 in your hands today could earn interest and be worth more than NT$100 by next year.',
  '錢有時間價值，時間的價格就是利率。':
    'Money has a time value, and the price of time is the interest rate.',
  '所有金融計算只做一件事：': 'Every financial calculation does just one thing:',
  '把不同時點的錢，換算到同一個時點再比較。':
    'move money from different dates onto the same date, then compare.',
  '往未來換叫「複利」（compounding），往現在換叫「折現」（discounting）。':
    'Moving it forward is compounding; moving it back is discounting.',

  '2. 終值（FV）：往未來滾': '2. Future value (FV): rolling forward',
  '（Present Value）：現在的錢': ' (present value): money today',
  '：每期報酬率': ': the return per period',
  '：期數': ': the number of periods',
  關鍵在: 'The key is the',
  '指數 n': 'exponent n',
  '——利息會再生利息。單利是直線，複利是曲線，時間越長差距越誇張。':
    ' — interest earns interest. Simple interest is a straight line, compounding is a curve, and the longer the horizon the more absurd the gap.',
  '算例 1': 'Worked example 1',
  '單筆 100 萬、年化 6%、放 30 年：':
    'A single NT$1 million, at 6% a year, left for 30 years:',
  'FV = 100萬 × 1.06': 'FV = NT$1M × 1.06',
  '574.3 萬': 'NT$5.743M',
  '前 10 年只從 100 萬變 179 萬（+79 萬），最後 10 年卻從 320 萬變 574 萬（+254 萬）。':
    'The first decade takes it from NT$1M to NT$1.79M (+NT$790k); the last decade takes it from NT$3.2M to NT$5.74M (+NT$2.54M).',
  複利的爆發在後段: 'Compounding does its damage late',
  '——「越早開始越好」是數學，不是雞湯。':
    ' — "start as early as you can" is arithmetic, not a motivational poster.',

  /* ── 互動計算機 ── */
  親手滾一顆雪球: 'Roll a snowball yourself',
  '拉動參數，觀察哪一個對終值的影響最大。（這也是本週練習第 6 步。）':
    'Drag the sliders and see which input moves the final value most. (This is also step 6 of the exercise.)',
  每月投入: 'Monthly contribution',
  每月投入金額: 'Monthly contribution',
  '10,000 元': 'NT$10,000',
  年化報酬: 'Annual return',
  年化報酬率: 'Annual return',
  投資年數: 'Years invested',
  '30 年': '30 years',
  '終值（本金＋複利）': 'Final value (contributions + compounding)',
  累積投入本金: 'Total contributed',
  '1,004.5 萬': 'NT$10.045M',
  期末終值: 'Final value (NT$10k)',
  投入本金: 'Contributed (NT$10k)',
  利息佔比: 'Interest share',
  '12 年': '12 years',
  '72 法則翻倍時間': 'Doubling time, Rule of 72',
  '以表格檢視資料（每 5 年）': 'View the data as a table (every 5 years)',
  年: 'Year',
  /* 表格表頭——儲存格是裸數字（單位後綴已剝掉），單位必須在表頭 */
  累積本金: 'Contributed (NT$10k)',
  終值: 'Final value (NT$10k)',
  終值與累積本金隨年數變化的折線圖:
    'Line chart of final value and total contributions over time',
  /* SVG 與表格裡的單位後綴：值留數字，單位在標籤（見檔頭） */
  '萬</text>': '</text>',
  '年</text>': '</text>',
  元: '',
  萬: '',
  "萬</td><td class='num'>": "</td><td class='num'>",
  "第 <span class='num'>": "Year <span class='num'>",
  "</span> 年<br>終值 <span class='num'>": "</span><br>Final value <span class='num'>",
  "萬</span><br>本金 <span class='num'>": "</span><br>Contributed <span class='num'>",
  '萬</span>': '</span>',

  /* ── 現值 ── */
  '3. 現值（PV）：往現在折': '3. Present value (PV): discounting back',
  '把公式反過來：': 'Turn the formula around:',
  這裡的: 'Here',
  改叫: 'is called the',
  折現率: 'discount rate',
  '（discount rate）：你要求的報酬率越高，未來的錢在你眼中越不值錢。':
    ': the higher the return you demand, the less future money is worth to you.',
  '算例 2': 'Worked example 2',
  '30 年後的 1,000 萬，用 8% 折現，今天值多少？':
    'What is NT$10 million in 30 years worth today, discounted at 8%?',
  'PV = 1,000萬 ÷ 1.08': 'PV = NT$10M ÷ 1.08',
  '99.4 萬': 'NT$994k',
  '只值不到 100 萬。這個「未來的大數字折回來其實很小」的直覺，是 Q2 學 DCF 估值時最重要的心理準備——分析師嘴裡的「十年後獲利翻五倍」，折現後可能沒你想的值錢。':
    'Under NT$1 million. That instinct — big future numbers shrink a lot on the way back — is the most important preparation for DCF valuation in Q2. When an analyst says "profits will be five times bigger in ten years", the discounted version may be worth far less than it sounds.',

  /* ── 年金 ── */
  '4. 年金（Annuity）：每期固定投入或領取':
    '4. Annuities: paying in or drawing out a fixed amount each period',
  每期期末投入固定金額: 'Pay a fixed amount in at the end of each period',
  '，累積': ', accumulated over',
  '期的終值；以及每期期末領': ' periods; and the present value of drawing',
  '、領': ' at the end of each period for',
  '期的現值：': ' periods:',
  年金: 'Annuity',
  '算例 3': 'Worked example 3',
  '每月存 1 萬、年化 6%（月利 0.5%）——就是開頭那題：':
    'NT$10,000 a month at 6% a year (0.5% a month) — the question we opened with:',
  年數: 'Years',
  '10 年': '10 years',
  '120 萬': 'NT$1.2M',
  '163.9 萬': 'NT$1.639M',
  '20 年': '20 years',
  '240 萬': 'NT$2.4M',
  '462.0 萬': 'NT$4.62M',
  '30 年存到千萬，其中 640 萬是複利長出來的。注意 10→20 年終值幾乎三倍、20→30 年又翻一倍多——再次看到複利的後段爆發。':
    'Thirty years gets you to NT$10 million, NT$6.4 million of which compounding produced. Note that the final value almost triples from year 10 to 20, then more than doubles again from 20 to 30 — the back-half surge once more.',
  '算例 4 ／ 反向用法': 'Worked example 4 / running it backwards',
  '退休後每年想領 60 萬、領 25 年，退休金要準備多少？假設退休後資產仍有 4% 報酬：':
    'You want NT$600,000 a year for 25 years in retirement. How large a pot do you need, assuming it still earns 4%?',
  'PV = 60萬 × (1 − 1.04': 'PV = NT$600k × (1 − 1.04',
  '937.3 萬': 'NT$9.373M',
  '準備約 940 萬就夠——不需要 60萬 × 25年 = 1,500 萬，因為還沒領走的錢持續在生息。這條公式 Q4 算貸款、Q2 算穩定配息公司的價值，都會再出現。':
    'About NT$9.4 million is enough — not NT$600k × 25 = NT$15 million, because the money you have not drawn yet keeps earning. This same formula returns in Q4 for loans and in Q2 for valuing steady dividend payers.',

  /* ── 72 法則 ── */
  '5. 72 法則：心算翻倍時間':
    '5. The Rule of 72: doubling time in your head',
  '翻倍年數 ≈ 72 ÷ 年報酬率(%)': 'Years to double ≈ 72 ÷ annual return (%)',
  '為什麼是 72？': 'Why 72?',
  翻倍的精確條件是: 'Doubling exactly requires',
  '，取對數得': ', and taking logs gives',
  '，而小': ', while for small',
  時: ',',
  '，所以': ', so',
  '。用 72 而不是 69.3，是因為 72 可以被 2、3、4、6、8、9、12 整除，心算方便，而且在常見報酬率區間（4–10%）更準：':
    '. We use 72 rather than 69.3 because 72 divides evenly by 2, 3, 4, 6, 8, 9 and 12 — easier in your head — and it is more accurate across the usual range of returns (4–10%):',
  年報酬率: 'Annual return',
  '72 法則': 'Rule of 72',
  精確值: 'Exact',
  '36.0 年': '36.0 yrs',
  '35.0 年': '35.0 yrs',
  '18.0 年': '18.0 yrs',
  '17.7 年': '17.7 yrs',
  '12.0 年': '12.0 yrs',
  '11.9 年': '11.9 yrs',
  '9.0 年': '9.0 yrs',
  '6.0 年': '6.0 yrs',
  '6.1 年': '6.1 yrs',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「年化 6% 就是每年穩穩 +6%」':
    '"6% a year means a steady +6% every year"',
  '年化是幾何平均，實際路徑上下劇烈波動；同樣年化，波動大的路徑讓人半途放棄的機率高得多（Q3 週 27 會學波動拖累）。':
    'An annualised figure is a geometric mean; the actual path swings hard. For the same annualised return, a more volatile path makes people quit partway far more often (volatility drag comes in Q3, week 27).',
  '「複利要靠高報酬」': '"Compounding needs high returns"',
  '公式裡 n 是指數、r 只是底數的一部分；拉長時間比追高報酬可靠，而追高報酬通常伴隨讓你中途出場的波動。':
    'In the formula n is the exponent and r is only part of the base. Lengthening the time is more reliable than chasing returns — and chasing returns usually brings the volatility that pushes you out early.',
  '「定存也有複利，何必投資」':
    '"Term deposits compound too, so why invest?"',
  '對，但要跟通膨賽跑：定存 1.5% − 通膨 2% ＝ 實質負報酬。這正是下週的主題。':
    'True, but you are racing inflation: a 1.5% deposit minus 2% inflation is a negative real return. That is next week\'s subject.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '資源：': 'Source: ',
  '（免費）': ' (free)',
  '30 分': '30 min',
  '重點：單利 vs 複利的圖形差異。預期收穫：能自己畫出兩條線。':
    'Focus: how simple and compound interest differ on a chart. You should come away able to draw both lines yourself.',
  '40 分': '40 min',
  '「Present value」系列 ↗': 'The "Present value" series ↗',
  '重點：折現的方向感——利率越高，未來的錢越不值錢。預期收穫：看到任何「未來會有 X 元」的敘述，反射性地問「折現率多少？」':
    'Focus: a feel for the direction of discounting — the higher the rate, the less future money is worth. You should come away asking "at what discount rate?" reflexively whenever someone says "this will be worth X in future".',
  選讀: 'Optional',
  'MIT OpenCourseWare 15.401 第 2–3 講投影片 ↗':
    'MIT OpenCourseWare 15.401, lecture 2–3 slides ↗',
  '行有餘力再看：學術版的嚴謹寫法。':
    'If you have time: the rigorous academic treatment.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  建立你自己的複利試算表: 'Build your own compounding spreadsheet',
  '用 Google Sheets 或 Excel。': 'Use Google Sheets or Excel.',
  這張表之後的課程還會再用到: 'You will reuse this sheet later in the course',
  '——它是整年課程的第一個常備工具。':
    ' — it is the first standing tool of the year.',
  '開一張表，欄位：': 'Open a sheet with these columns:',
  '年｜期初餘額｜當年投入｜當年利息｜期末餘額':
    'Year | opening balance | contributions | interest | closing balance',
  '參數格獨立放最上面：': 'Put the parameters in their own cells at the top:',
  '月投入 = 10,000': 'Monthly contribution = 10,000',
  '年化報酬 = 6%': 'Annual return = 6%',
  '拉出 30 年（或 360 個月），公式全部引用參數格（不要寫死數字）':
    'Fill down 30 years (or 360 months), with every formula referencing the parameter cells — never a hard-coded number',
  '驗證終值（見下方框）；若差距大，檢查：投入是期初還期末？月利率是否 = 6%÷12？':
    'Check the final value (see the box below). If it is well off, check two things: are contributions at the start or the end of the period, and is the monthly rate 6% ÷ 12?',
  '加一欄「單利對照」（本金 + 本金×0.5%×月數），畫出兩條線的圖':
    'Add a "simple interest" column (principal + principal × 0.5% × months) and chart both lines',
  '玩參數：報酬改 4%、8%；月投入改 5,000、20,000——觀察哪個參數影響大（可先用上面的互動計算機找感覺，再用自己的表驗證）':
    'Play with the parameters: try 4% and 8%; try contributions of 5,000 and 20,000. See which matters more. (Get a feel with the calculator above, then confirm it in your own sheet.)',
  '驗證點：': 'Check: ',
  '30 年期末餘額應非常接近': 'the closing balance after 30 years should be very close to',
  '10,045,150 元': 'NT$10,045,150',
  '（月複利、期末投入），誤差 1% 內。':
    ' (monthly compounding, end-of-period contributions), within 1%.',
  自我檢核: 'Check yourself',
  '30 年終值與 10,045,150 誤差在 1% 內':
    'The 30-year final value is within 1% of 10,045,150',
  '圖上能明顯看到複利曲線與單利直線在後段拉開':
    'The chart clearly shows the compound curve pulling away from the simple-interest line late on',
  '能用一句話回答：「時間和報酬率，哪個是指數、哪個是底數？」':
    'You can answer in one sentence: which of time and return is the exponent, and which is the base?',
  '加分題：年化 8% 之下，100 萬變成 800 萬要幾年？（用 72 法則心算）':
    'Bonus: at 8% a year, how long does NT$1M take to become NT$8M? (Do it in your head with the Rule of 72.)',
  '100 萬 → 800 萬 ＝ 翻 3 倍（2³）。8% 之下翻一倍':
    'NT$1M → NT$8M is three doublings (2³). At 8%, one doubling takes',
  '72 ÷ 8 = 9 年': '72 ÷ 8 = 9 years',
  '，翻三次 ＝': ', so three of them =',
  '27 年': '27 years',
  '精確計算：ln8 ÷ ln1.08 = 27.0 年——心算與精確幾乎一致。':
    'Exactly: ln8 ÷ ln1.08 = 27.0 years — the mental arithmetic lands almost exactly right.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '先玩，再講': 'Play first, then explain',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（就是本頁最上面那題）': 'Opening (the question at the top of this page)',
  '「猜猜看：每個月存一萬塊，連續存 30 年，用年化 6% 的報酬投資，最後會有多少錢？」':
    '"Guess: you save ten thousand a month for 30 years and invest it at 6% a year. How much do you end up with?"',
  '讓每個人喊一個數字再揭曉。多數人會猜 400–600 萬——低估複利是人類通病，猜錯正好是教學起點。':
    'Have everyone call out a number before you reveal it. Most will say NT$4–6 million. Underestimating compounding is universal, and being wrong is exactly where the lesson starts.',
  揭曉: 'The reveal',
  '「答案是': '"The answer is',
  一千萬: 'ten million',
  '。你們存進去的其實只有 360 萬，另外 640 萬是利滾利長出來的。」':
    '. You only put in NT$3.6 million; the other NT$6.4 million is interest earning interest."',
  '核心比喻：滾雪球': 'The core metaphor: a snowball',
  '「複利像滾雪球——雪球前十年看起來都小小的，因為球小、沾的雪少；但球一大，每滾一圈沾的雪比你當初整顆球還大。所以':
    '"Compounding is a snowball. For the first ten years it looks tiny, because a small ball picks up little snow. But once it is big, one roll picks up more snow than the whole ball weighed at the start. So',
  '雪坡要夠長（時間），比雪多大顆（報酬率）更重要':
    'a long enough slope (time) matters more than how much snow there is (the return)',
  '互動 2：教 72 法則': 'Interaction 2: teach the Rule of 72',
  '「報酬率 6%，72÷6＝12 年翻一倍。那定存 1.5% 呢？」——48 年才翻倍。順勢預告下週：而且通膨還在偷偷扣你的錢。':
    '"At 6%, 72 ÷ 6 = 12 years to double. What about a 1.5% deposit?" — 48 years. Which sets up next week: and inflation is quietly taking a cut the whole time.',
  預期反應與應對: 'What they will say, and what to answer',
  '「6% 哪裡來？會不會賠？」':
    '"Where does 6% come from? Could I lose money?"',
  '誠實回答：這是全球股市長期歷史量級，中間會有大跌年份，這正是之後要學的。不要含糊帶過——家人的信任來自誠實。':
    'Answer honestly: it is the long-run historical order of magnitude for global equities, and there will be years with big falls — which is exactly what the later weeks cover. Do not gloss over it; with family, trust comes from being straight.',
  '「我現在才開始會不會太晚？」': '"Am I too late to start?"',
  '「最好的時間是 20 年前，第二好的時間是今天。」＋展示 10 年也有 164 萬。':
    '"The best time was 20 years ago; the second best is today." Then show them that even 10 years gets to NT$1.64 million.',
  本腳本可搭配專欄: 'Pair this script with column piece',
  '#1《為什麼要投資》': '#1, "Why invest at all"',
  '一起給家人讀。': 'and read them together.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  本週完成的定義: 'What counts as done this week',
  '複利試算表完成且 30 年終值驗證通過':
    'The compounding spreadsheet is built and the 30-year value checks out',
  '能不看講義寫出 FV、PV、年金終值三條公式':
    'You can write the FV, PV and annuity formulas from memory',
  '能解釋「為什麼折現率越高、現值越低」':
    'You can explain why a higher discount rate means a lower present value',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）':
    'One line of notes on the week, for next week\'s review',
  '🎓 第 1 週完成——下週見：通膨與實質報酬。':
    '🎓 Week 1 done — next up: inflation and real returns.',
  '下週預告 · Week 02：通膨與實質報酬':
    'Next week · Week 02: inflation and real returns',
  '——複利幫你賺的錢，通膨在偷偷扣。你會學費雪方程式，並用主計總處的真實 CPI 資料，算出「20 年前的 100 萬相當於今天多少購買力」。':
    " — inflation quietly takes back what compounding earns you. You will learn the Fisher equation and use real CPI data from Taiwan's DGBAS to work out what NT$1 million twenty years ago buys today.",

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  專欄文章: 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
