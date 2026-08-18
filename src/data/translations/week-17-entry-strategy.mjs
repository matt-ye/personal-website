/*
 * 給家人的投資課 Week 17：入場策略 Lump Sum vs DCA — 英文對照表。
 * 來源頁：src/data/course-weeks/week-17-entry-strategy.html
 *
 * 沿用 week-01 的慣例（金額單位、行內標記邊界的半形空白、語域）。本週三件：
 *
 * ⚠ 金額單位「萬」：路徑實驗室的數字是 JS 算的（`x/10000` 再接「萬」），
 *   所以值的後綴「萬」翻成空字串，單位改掛在標籤上：
 *       LSI 一次投入 · 期末 → "Lump sum, final value (NT$10k)"
 *       兩種策略的資產價值（萬） → "(NT$10k)"
 *   **散文裡的金額照常換算**：120 萬 → NT$1.2M、每月 10 萬 → NT$100,000、
 *   126 萬／136.8 萬 → NT$1.26M／NT$1.368M。
 *
 * ⚠ 專有名詞用本來的英文名，不自創：Vanguard、Bogleheads、S&amp;P 500、
 *   LSI／DCA、IPS。《快思慢想》是 Kahneman "Thinking, Fast and Slow" 的
 *   繁中書名，用英文原書名而非回譯。
 *
 * ⚠ 已知限制：抽取器只抓含漢字的字串，夾在標記間的孤立全形標點（`：`、`」`）
 *   抓不到，英文頁上會殘留。要動的是原始碼標點，不在對照表的職權內。
 *
 * 語域：這是勸家人「先講死日期、跌了照買」的口氣，不是研究報告。
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
  '單元導航': 'Section navigation',
  '切換深淺主題': 'Toggle light / dark theme',

  /* ── 標題區 ── */
  '給家人的投資課 · Q2 投資人季 · Week 17':
    "Family Investing Course · Q2 The Investor's Quarter · Week 17",
  '入場策略——Lump Sum vs DCA': 'Getting In — Lump Sum vs DCA',
  'W14 決定了「擺多少」，本週決定「怎麼把錢放進去」——用數據回答，不用感覺回答。':
    'W14 settled how much goes where. This week settles how the money actually gets in — answered with data, not with feelings.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 14 週': 'Week 14',
  '52 週 · 第 17 週': '52 weeks · Week 17',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '專欄 #10 的深化版。操盤手部署資金（Q3）、財務長調度現金（Q4）都會回到這個決策框架。':
    'this is column #10 taken deeper. The trader deploying capital (Q3) and the CFO scheduling cash (Q4) both come back to this same decision framework.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧 W16 家庭基金體檢的發現——加權費率算出來了嗎、高費率部位「處理或保留」的決定寫了嗎。':
    'go back over what the W16 family fund audit turned up — did you work out the weighted fee, and did you write down the keep-or-clear decision on the expensive holdings?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '手上有一筆 120 萬要投入。歷史數據中，「一次全投」和「分 12 個月慢慢投」——哪個比較常贏？':
    'You have NT$1.2 million to invest. In the historical data, which wins more often: putting it all in at once, or spreading it over 12 months?',
  '猜一個答案': 'Pick an answer',
  '分批——比較安全': 'Spreading it out — safer',
  '一次全投——約三次裡贏兩次': 'All at once — wins about two times out of three',
  '差不多五五波': 'Roughly a coin flip',
  '答對了——Vanguard 的經典回測顯示，約 2/3 的歷史區間一次投入勝出，因為市場長期向上、錢越早到位越早複利。但「比較常贏」不等於「該無腦選它」——本週講清楚分批到底在買什麼。':
    'Correct — Vanguard\'s well-known backtest shows that investing all at once came out ahead in about two-thirds of historical periods, because markets rise over the long run and money that arrives earlier starts compounding earlier. But "wins more often" is not the same as "always pick it" — this week is about what spreading it out actually buys you.',
  '多數人的直覺——但 Vanguard 的經典回測顯示，約 2/3 的歷史區間是「一次全投」勝出，因為市場長期向上、錢越早到位越早複利。分批買到的其實不是安全，是另一樣東西——本週講清楚它是什麼、什麼時候值得買。':
    'That is most people\'s instinct — but Vanguard\'s well-known backtest shows that going all in came out ahead in about two-thirds of historical periods, because markets rise over the long run and money that arrives earlier starts compounding earlier. What spreading it out buys is not safety; it is something else, and this week explains what that is and when it is worth paying for.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 先分清楚兩種「定期定額」': '1. First, separate the two things people call "DCA"',
  '它們常被混為一談，但決策邏輯完全相反：':
    'They get lumped together constantly, and their decision logic is the exact opposite:',
  '類型': 'Type',
  '情境': 'Situation',
  '本質': 'What it really is',
  '持續型 DCA': 'Ongoing DCA',
  '每月薪水撥一筆投入': 'Setting aside part of each month\'s pay to invest',
  '沒有選擇': 'No choice involved',
  '——你的錢本來就是每月進來的，分批是唯一可能。這是專欄 #5 講的、絕大多數上班族的常態':
    ' — your money arrives monthly to begin with, so instalments are the only option. This is what column #5 covers, and it is how almost every salaried person invests',
  '整筆分批型 DCA': 'Phasing in a lump sum',
  '手上已有一大筆錢（獎金、遺產、賣房），分 N 個月投入 vs 一次投入':
    'You already hold a large sum (a bonus, an inheritance, the proceeds of a house sale): spread it over N months, or invest it all at once',
  '有選擇': 'There is a choice',
  '——這才是本週「Lump Sum vs DCA」要辯論的題目':
    ' — and this is the question the lump sum versus DCA debate is actually about',
  '本週的所有數據討論，都是針對第二種。第一種你已經在做、也該繼續做，沒有爭議。':
    'Every piece of data this week is about the second kind. The first kind you are already doing, and should keep doing — nobody disputes it.',

  /* ── 數據結論 ── */
  '2. 數據結論：LSI 期望值較高，但代價是後悔風險':
    '2. What the data says: LSI has the higher expected value, and the price is regret risk',
  'Vanguard 的經典研究回測數十年、多市場：':
    'Vanguard\'s well-known study backtested decades of data across several markets: ',
  '約 2/3 的歷史區間，一次投入（LSI）的最終結果優於 12 個月分批（DCA）':
    'in roughly two-thirds of historical periods, investing the lump sum at once (LSI) ended up ahead of spreading it over 12 months (DCA)',
  '。原因很單純——市場長期向上（W1 複利、W12 循環），錢越早到位、越早開始複利；分批等於「平均而言持有較多現金」，而現金的期望報酬最低。':
    '. The reason is simple: markets rise over the long run (W1 compounding, W12 cycles), so money that arrives earlier starts compounding earlier. Spreading it out means holding more cash on average, and cash has the lowest expected return of anything you can hold.',
  '用三條自製路徑看清楚（120 萬；DCA ＝ 每月 10 萬 × 12 個月）——':
    'Three made-up paths make it visible (NT$1.2M; DCA = NT$100,000 a month × 12 months) — ',
  '點三個情境，看誰贏、為什麼': 'click through the three scenarios and see who wins, and why',
  '路徑實驗室：LSI vs DCA（120 萬 · 12 個月）':
    'Path lab: LSI vs DCA (NT$1.2M · 12 months)',
  'A 穩步上漲': 'A Steady climb',
  'B 先跌後回': 'B Falls, then recovers',
  'C 先漲後跌回起點': 'C Rises, then falls back to the start',
  '十二個月的市場價格路徑': 'The market price path over twelve months',
  '兩種策略的資產價值逐月變化': 'Month-by-month portfolio value under the two strategies',
  '市場價格路徑（指數）': 'Market price path (index)',
  '兩種策略的資產價值（萬）': 'Portfolio value under the two strategies (NT$10k)',
  '月份（買點）': 'Month (purchase point)',
  'LSI 資產價值': 'LSI portfolio value',
  'DCA 資產價值（含未投入現金）': 'DCA portfolio value (including uninvested cash)',
  '市場價格': 'Market price',
  '本金 120 萬': 'Principal, NT$1.2M',
  'LSI 一次投入 · 期末': 'LSI, all at once · final value (NT$10k)',
  '146.4 萬': '146.4',
  '🏆 贏家': '🏆 Winner',
  'DCA 分 12 個月 · 期末': 'DCA over 12 months · final value (NT$10k)',
  '132.4 萬': '132.4',
  '萬': '',
  '教學示意路徑（非真實行情）：LSI 期初以 100 全數買入；DCA 每月 10 萬買在當月價格、未投入部分以現金持有（不計息），各月價值皆以當月價格計。順便觀察：DCA 那條線前期比較平——現金墊著跌不深，這就是「行為保險」的長相。練習任務 A 的驗證點：情境 B 應得 LSI≈126 萬、DCA≈136.8 萬。':
    'Illustrative paths, not real market data. LSI buys the whole amount at a price of 100 on day one; DCA buys NT$100,000 at each month\'s price and holds the rest in cash (earning nothing), with every month valued at that month\'s price. Notice in passing how flat the DCA line is early on — the cash cushion keeps the drop shallow, and that is what behavioural insurance looks like. Check figures for exercise A: scenario B should give LSI ≈ NT$1.26M and DCA ≈ NT$1.368M.',
  'A 穩步上漲（100→122）': 'A Steady climb (100→122)',
  '<b>LSI 贏：</b>早到位吃滿整段漲幅；DCA 每個月都買在更高的價格，平均成本被一路墊高。':
    '<b>LSI wins:</b> arriving early captures the whole rise, while DCA buys at a higher price every single month and its average cost gets pushed up all the way.',
  'B 先跌後回（100→80→105）': 'B Falls, then recovers (100→80→105)',
  '<b>DCA 贏：</b>前半段的下跌讓每筆 10 萬買到更多股數——低點的便宜貨在回升時放大戰果。這是 DCA 唯一的勝利劇本：進場後先跌、之後才漲。':
    '<b>DCA wins:</b> the fall in the first half lets each NT$100,000 buy more units, and those cheap units magnify the gain on the way back up. This is DCA\'s only winning script: the market drops after you start, and only then rises.',
  'C 先漲後跌回起點（100→120→100）': 'C Rises, then falls back to the start (100→120→100)',
  '<b>LSI 贏（雖然只是打平）：</b>價格繞一圈回到原點，LSI 不賺不賠；DCA 卻有大半資金買在 104–120 的半山腰——震盪盤中分批反而是追高。':
    '<b>LSI wins (though only by breaking even):</b> the price goes round in a circle and comes back to where it started, so LSI neither gains nor loses; but most of DCA\'s money went in halfway up the hill, between 104 and 120. In a choppy market, spreading it out is chasing the price.',
  '關鍵洞察': 'The key insight',
  'DCA 只在「進場後': 'DCA only wins on paths where the market ',
  '先跌、之後才漲': 'falls first and rises only later',
  '」的路徑贏（情境 B）。因為市場上漲的月份多於下跌，這種路徑是少數——這就是「2/3 LSI 勝」的來源。DCA':
    ' after you enter (scenario B). Because more months rise than fall, that path is the minority — which is exactly where the two-thirds LSI win rate comes from. DCA is',
  '不是': 'not',
  '穩賺的保守策略；情境 C 顯示它在震盪盤反而可能追高。':
    ' a safe-by-default conservative strategy; scenario C shows it can end up chasing prices in a choppy market.',

  /* ── 行為保險 ── */
  '3. 那 DCA 到底在買什麼？答案：行為保險':
    '3. So what does DCA actually buy? Behavioural insurance',
  '如果 LSI 期望值較高，為什麼 DCA 仍值得存在？因為投資的最大風險不是「少賺一點」，是':
    'If LSI has the higher expected value, why does DCA deserve to exist at all? Because the biggest risk in investing is not earning a bit less. It is ',
  '「一次投入後隔天崩盤，從此再也不敢進場」':
    'putting everything in, watching the market crash the next day, and never daring to invest again',
  '。DCA 的真正價值是': '. The real value of DCA is ',
  '行為保險': 'behavioural insurance',
  '降低「單日進場點」的重要性 → 降低極端後悔':
    'It makes the single day you entered matter less → less extreme regret',
  '心理上更容易「開始」——對第一次投入大筆錢的人，跨出第一步比最優化期望值更重要':
    'It is psychologically easier to start — and for someone putting a large sum in for the first time, taking the first step matters more than optimising expected value',
  '保費就是那 1/3 機率下少賺的錢——跟所有保險一樣，你為「不會發生最壞情況」付費':
    'The premium is the money you give up in the other third of cases — as with any insurance, you are paying so that the worst case does not happen to you',

  /* ── 決策框架 ── */
  '4. 決策框架：三個問題': '4. The decision framework: three questions',
  '回答三題，看你的入場建議（做完練習 B 會把它寫成文字規則）：':
    'Answer three questions and see your entry recommendation (exercise B turns it into a written rule):',
  '三問決策器': 'The three-question decider',
  'Q1 這筆錢佔你總投資資產的比重大嗎？':
    'Q1 Is this sum large relative to your total investment assets?',
  '小（如 &lt;10%）': 'Small (say &lt;10%)',
  '大（如一次讓部位翻倍）': 'Large (it would roughly double your position)',
  'Q2 你的風險承受（W14 心理那項）誠實地說如何？':
    'Q2 Honestly, how is your risk tolerance (the psychological one from W14)?',
  '穩健，能接受帳面大跌': 'Steady — I can live with a big paper loss',
  '容易恐慌，會半夜看盤': 'I panic easily and check prices at 3am',
  'Q3 是否有估值極端訊號？': 'Q3 Are there extreme valuation signals?',
  '（W12 市場溫度）': '(market temperature, W12)',
  '沒有特別訊號': 'Nothing unusual',
  '市場明顯過熱': 'The market is clearly overheated',
  '先回答 Q1。': 'Answer Q1 first.',
  '<b>建議：直接 LSI，一次到位。</b>佔比小，錯了也傷不了配置——別想太多，早進場早複利。':
    '<b>Recommendation: LSI, all at once.</b> The amount is small enough that getting it wrong will not damage your allocation — do not overthink it. In earlier, compounding earlier.',
  '金額大——往下回答 Q2。': 'A large sum — go on to Q2.',
  '再回答 Q3。': 'Now answer Q3.',
  '<b>建議：LSI 或短分批（3 個月）。</b>心臟與數據都站在早進場這邊；想留一點緩衝就用 3 個月機械化分批。':
    '<b>Recommendation: LSI, or a short phase-in over 3 months.</b> Both your nerves and the data point to getting in early; if you want a little cushion, use three mechanical monthly instalments.',
  '<b>建議：短–中分批（3–6 個月）。</b>市場明顯過熱時分批的機會成本較低——但注意，這已接近擇時；日期定死，不准變成無限期等待。':
    '<b>Recommendation: a short to medium phase-in, 3–6 months.</b> When the market is clearly overheated the opportunity cost of spreading out is lower — but note that this is edging towards market timing. Fix the dates, and do not let it turn into waiting indefinitely.',
  '<b>建議：拉長分批（6–12 個月），買安心。</b>期望值讓一點給睡眠品質——一次進場後恐慌砍在低點，比少賺更貴。':
    '<b>Recommendation: a long phase-in, 6–12 months. You are buying peace of mind.</b> Trade a little expected value for sleep — panicking and selling at the bottom after going all in costs far more than earning slightly less.',
  '<b>建議：拉長分批（6–12 個月）。</b>心理與市場溫度都指向保守端——重點是寫死日期、機械化執行，跌了照買。':
    '<b>Recommendation: a long phase-in, 6–12 months.</b> Both your psychology and the market temperature point to the conservative end — the essential part is fixed dates, executed mechanically, still buying when it falls.',
  '鐵律：': 'Iron rule: ',
  '無論選哪個，': 'whichever you choose, ',
  '先把日期定死、寫進 IPS': 'fix the dates first and write them into your IPS',
  '（例：「分 6 個月、每月 15 日投入」）。DCA 最大的失敗模式是「跌了不敢買、想等更低」——那不是 DCA，是擇時。機械化執行才是 DCA 的靈魂。':
    ' (for example: six instalments, invested on the 15th of each month). The biggest failure mode of DCA is not daring to buy when the market falls because you want to wait for a lower price — that is not DCA, that is market timing. Mechanical execution is the whole soul of DCA.',

  /* ── 闢謠 ── */
  '5. 常見誤解闢謠': '5. Three things people get wrong',
  '「DCA 比較安全、比較聰明」': '"DCA is safer and smarter"',
  '期望值上它較低；它買的是心理安穩不是超額報酬。清楚知道自己在買保險，就不會用錯地方。':
    'Its expected value is lower. What it buys is peace of mind, not excess return. Once you know you are buying insurance, you stop applying it in the wrong places.',
  '「等回檔再一次進場」': '"I will wait for a pullback and then go in all at once"',
  '這是偽裝成謹慎的擇時；回檔真來時你會想等更低（W12）。要嘛 LSI、要嘛機械化 DCA，別留「看情況」的空間。':
    'That is market timing dressed as prudence; when the pullback actually arrives you will want to wait for a lower one (W12). Either LSI or mechanical DCA — leave no room for "let us see how it goes".',
  '「持續型 DCA 也要考慮該不該一次投入」':
    '"Ongoing DCA also needs a lump-sum-or-not decision"',
  '不用，你的錢每月才進來，沒有「一次」的選項；照常投入即可。':
    'It does not. Your money only arrives monthly, so there is no all-at-once option. Just keep investing as usual.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '15 分': '15 min',
  '專欄 #5 重讀 ↗': 'Column #5, reread ↗',
  '（#10 發布後改讀 #10）': ' (switch to #10 once it is published)',
  '持續型 DCA 的原點；本週補上整筆分批的完整數據與行為框架。':
    'The origin of ongoing DCA; this week adds the full data and the behavioural framing for phasing in a lump sum.',
  '45 分': '45 min',
  '本週主文；重點看「2/3 勝率」與「平均超額幅度」兩張圖，把數字抄進筆記。':
    'The main text this week. Focus on the two charts — the two-thirds win rate and the average size of the outperformance — and copy the numbers into your notes.',
  '20 分': '20 min',
  '社群對 LSI vs DCA 的實務共識。':
    'The community\'s practical consensus on LSI versus DCA.',
  '選讀': 'Optional',
  '《快思慢想》損失趨避章節': '"Thinking, Fast and Slow", the loss aversion chapter',
  '理解為什麼「後悔」對人的重量遠超「少賺」——DCA 存在的心理學基礎（也預告 W23）。':
    'Understand why regret weighs on people so much more than earning less does — the psychological ground DCA stands on (and a preview of W23).',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '回測與決策規則': 'A backtest and a decision rule',
  '任務 A｜自製回測（30 分鐘）': 'Task A | build your own backtest (30 minutes)',
  '用試算表建一欄 12 個月的價格路徑，先手動輸入情境 B（100→80→105），計算 LSI 與 DCA 期末值——':
    'In a spreadsheet, put a 12-month price path in one column. Type in scenario B by hand first (100→80→105) and compute the final value under LSI and DCA — ',
  '驗證：LSI≈126 萬、DCA≈136.8 萬': 'check: LSI ≈ NT$1.26M, DCA ≈ NT$1.368M',
  '（和上面實驗室對答案）': ' (compare against the lab above)',
  '改成情境 A 與 C 各驗一次': 'Repeat once each for scenarios A and C',
  '進階：找一段': 'Advanced: find a stretch of ',
  '真實': 'real',
  '指數月資料（台股或 S&amp;P 500），挑三個起點（含 2008 年中這種「進場後大跌」的起點），比較 LSI vs 6 個月 DCA':
    ' monthly index data (Taiwan or the S&amp;P 500), pick three starting points — including one like mid-2008, where the market falls hard right after you enter — and compare LSI against a 6-month DCA',
  '寫 150 字：哪種市場路徑 DCA 才贏？這種路徑常見嗎？':
    'Write 150 words: which kind of market path does DCA win on, and how common is that path?',
  '任務 B｜寫下你的入場規則（20 分鐘）':
    'Task B | write down your own entry rule (20 minutes)',
  '針對「假如明天收到一筆佔投資資產 ＿% 的錢」，用三問框架寫出你的決策規則（含分批月數與':
    'For the case "tomorrow I receive a sum equal to ＿% of my investment assets", use the three-question framework to write your decision rule, including the number of instalments and the ',
  '固定日期': 'fixed dates',
  '），加進 W14 的目標配置文件。':
    ', and add it to the target allocation document from W14.',
  '驗收標準：': 'Done when: ',
  '回測驗證點通過；個人入場規則寫入 IPS 草稿，含固定日期。':
    'the backtest check figures come out right, and your personal entry rule is written into the draft IPS with fixed dates.',
  '自我檢核': 'Check yourself',
  '回測驗證點（情境 B：LSI≈126 萬、DCA≈136.8 萬）通過':
    'The backtest check passes (scenario B: LSI ≈ NT$1.26M, DCA ≈ NT$1.368M)',
  '個人入場規則寫入 IPS 草稿，含固定日期':
    'Your personal entry rule is in the draft IPS, with fixed dates',
  '能說出「DCA 是行為保險而非超額報酬來源」':
    'You can state that DCA is behavioural insurance, not a source of excess return',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '為什麼「2/3 機率 LSI 勝」的根本原因，跟 W1、W12 學的是同一件事？':
    ' Why is the underlying reason for the two-thirds LSI win rate the same thing you learned in W1 and W12?',
  '→ 因為': '→ Because ',
  '市場長期向上': 'markets rise over the long run',
  '（W1 複利、W12 循環的上升傾向）——LSI 讓錢早到位、早複利；DCA 平均持有較多低報酬的現金。三者是同一個「時間在市場裡」的道理。':
    ' (W1 compounding, and the upward drift of the cycles in W12). LSI gets the money in early so it compounds early; DCA holds more low-returning cash on average. All three are the same point about time in the market.',
  'DCA 在哪一種市場路徑會輸得最難看？':
    ' On which kind of market path does DCA lose most badly?',
  '一路上漲': 'A market that rises all the way',
  '的市場（情境 A／C 類）——DCA 每個月都買在更高的價格，等於持續追高，最後平均成本高於一次到位。':
    ' (the scenario A and C shapes) — DCA buys at a higher price every month, chasing all the way up, and ends with an average cost above going in at once.',
  '持續型 DCA 需要做「LSI vs DCA」的決策嗎？':
    ' Does ongoing DCA need an LSI-versus-DCA decision at all?',
  '不需要': 'No',
  '——持續型 DCA 的錢每月才進帳，根本沒有「一次投入」的選項；照紀律投入即可，別被本週的辯論干擾。':
    ' — the money for ongoing DCA only lands each month, so there is no all-at-once option to choose. Keep investing on schedule and do not let this week\'s debate distract you.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '中獎難題': 'The lottery problem',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（中獎難題）': 'Opening (the lottery problem)',
  '「假設你中了 120 萬，要投入我們講好的配置——你會一次全買，還是分成一年慢慢買？」（讓對方選並說理由，通常會選「分批比較安全」——正好是切入點。）':
    '"Say you win NT$1.2 million and you are going to put it into the allocation we agreed on — would you buy it all at once, or spread it over a year?" (Let them choose and give a reason. Most people say spreading it out feels safer, which is exactly the way in.)',
  '核心觀念': 'The core idea',
  '「直覺上分批比較穩，但數據說：因為市場長期往上，':
    '"Spreading it out feels steadier, but the data says otherwise: because markets rise over the long run, ',
  '三次裡有兩次是『一次買』賺比較多':
    'buying all at once earns more in two cases out of three',
  '——因為錢早點到位、早點開始滾。」（用 W1 的雪球回扣。）':
    ' — because the money arrives earlier and starts rolling earlier." (Call back to the snowball from W1.)',
  '但是（關鍵轉折）': 'But — the turn that matters',
  '「那為什麼還有人分批？因為分批買的不是『多賺』，是『安心』——萬一你一次全買、隔天大跌，你可能從此嚇到再也不敢投資。分批就像':
    '"So why does anyone spread it out? Because what you buy by spreading it out is not more money, it is being able to sleep. If you go all in and the market drops hard the next day, you might be scared off investing for good. Spreading it out is like ',
  '分期付款的勇氣': 'buying courage in instalments',
  '，讓你走得出第一步、也睡得著。」':
    ' — it gets you through the first step, and it lets you sleep."',
  '互動（機械化）': 'Interaction (make it mechanical)',
  '「所以我們家的規則是：小錢一次進、大錢分批進，而且——日期先講死，跌了照買不准反悔。因為『等更低點』的人，通常永遠在等。」':
    '"So the rule in this family is: small amounts go in at once, large amounts go in by instalments — and the dates get fixed in advance. When it falls, we still buy, no backing out. Because people who wait for a lower price usually wait forever."',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那到底該選哪個？」': '"So which one should I actually pick?"',
  '「看金額大小和你的心臟。這筆錢佔比小就一次進；大到你會焦慮，就分 6 個月——買的是好眠，不是更高報酬。」':
    '"It depends on the size of the sum and on your nerves. If it is a small share of what you hold, put it in at once. If it is big enough to make you anxious, spread it over six months — what you are buying is good sleep, not a higher return."',
  '「分批期間跌了不是很虧？」':
    '"If it falls while I am still phasing in, have I not lost out?"',
  '「反過來想：分批的人最怕的是『一路漲』（追高），最愛的是『先跌』（買便宜）——跌反而是分批策略的朋友。」':
    '"Turn it round: what a phase-in fears most is a market that only rises, because you chase it up. What it loves is a fall early on, because everything gets cheaper. A drop is the friend of a phase-in, not its enemy."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能區分持續型 DCA 與整筆分批型 DCA':
    'You can tell ongoing DCA apart from phasing in a lump sum',
  '回測試算完成（三情境）並理解「2/3 LSI 勝」的成因':
    'The backtest is done for all three scenarios, and you understand where the two-thirds LSI win rate comes from',
  '個人入場規則寫入 IPS 草稿（含固定日期的機械化執行）':
    'Your personal entry rule is in the draft IPS, with fixed dates and mechanical execution',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 17 週完成——入場規則已寫下。下週見：倉位管理與 IPS。':
    '🎓 Week 17 done — your entry rule is written. Next up: position sizing and the IPS.',
  '下週預告 · Week 18：倉位管理與再平衡':
    'Next week · Week 18: position sizing and rebalancing',
  '——配置、入場都定了，下週補上最後兩個決定（倉位上限、再平衡規則），並把全部規則固化成一份投資政策聲明書（IPS）：寫給恐慌時自己的信。':
    ' — the allocation and the way in are settled. Next week adds the last two decisions (position limits and rebalancing rules) and freezes the whole set into an investment policy statement: a letter to the version of you who is panicking.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：指數化投資與成本侵蝕': 'Last week: index investing and the erosion of costs',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
