/*
 * 給家人的投資課 Week 29：風險調整績效——Sharpe 家族 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-29-sharpe-family.html
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
  '給家人的投資課 · Q3 操盤手季 · Week 29':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 29',
  '風險調整績效——Sharpe 家族':
    'Risk-Adjusted Performance: The Sharpe Family',
  'W27 裝了報酬儀表、W28 裝了風險儀表，本週把兩者':
    'W27 installed the return gauges and W28 the risk gauges. This week we ',
  '相除':
    'divide',
  '——回答操盤手的核心問題：「同樣賺 8%，誰賺得比較高明？」':
    ' one by the other — to answer the portfolio manager\'s central question: "Both earned 8%, so who earned it more skillfully?"',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：':
    'Prerequisites: ',
  '第 27':
    'Weeks 27',
  '28 週':
    '28',
  '52 週 · 第 29 週':
    '52 weeks · Week 29',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  'Sharpe／Sortino／IR 是基金業的通用語言（Q3 月報的必備欄位），也是你評估任何金融商品的照妖鏡——「不看分母的比較都是行銷」。':
    'Sharpe / Sortino / IR are the common language of the fund industry (required columns in the Q3 monthly report), and also your lie detector for evaluating any financial product — "a comparison that ignores the denominator is just marketing."',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週教家人「回本陡坡」的反應——「跌一半、賺一倍」他們記住了嗎？':
    'Think back to how your family reacted to the "steep climb back" last week. Do they remember "lose half, gain double"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  'C 基金一年賺 12%、A 基金只賺 8%。什麼情況下，專業投資人反而會說 A 比較高明？':
    'Fund C earned 12% in a year, while Fund A earned only 8%. Under what circumstances would a professional investor say A is actually the smarter performer?',
  '不可能，賺得多就是比較強':
    'Impossible — earning more simply means better',
  'A 承擔的風險少很多的時候':
    'When A took far less risk',
  'A 的手續費比較低的時候':
    'When A\'s fees are lower',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 為什麼報酬要除以風險':
    '1. Why returns must be divided by risk',
  '兩檔基金都賺 8%，A 波動 15%、B 波動 25%——B 承擔了更多顛簸才換到同樣報酬，等於「花更多油錢跑同樣距離」。':
    'Two funds both earn 8%. A\'s volatility is 15% and B\'s is 25% — B took on a much bumpier ride to get the same return, which is like "spending more on gas to cover the same distance."',
  '風險調整績效＝每承擔一單位風險，換到多少超額報酬':
    'Risk-adjusted performance = how much excess return you get for each unit of risk taken',
  '。沒有這一步，所有績效比較都是不公平的。':
    '. Without this step, every performance comparison is unfair.',
  '2. Sharpe 比率：業界第一通用指標':
    '2. The Sharpe ratio: the industry\'s most common metric',
  '。分子是':
    '. The numerator is the ',
  '超額報酬':
    'excess return',
  '（超過無風險利率的部分——冒險才有的報酬），分母是總波動。':
    ' (the part above the risk-free rate — the return you earn only by taking risk), and the denominator is total volatility.',
  '算例（R':
    'Worked example (R',
  '基金':
    'Fund',
  '報酬':
    'Return',
  '判讀：A ＞ C ＞ B——':
    'Reading it: A > C > B — ',
  'C 報酬最高但不是最高明':
    'C has the highest return but isn\'t the smartest performer',
  '：它多賺的 4 個百分點是用加倍的顛簸換的，效率反而輸 A。用 W15 的話說：同樣的 Sharpe 之下，你可以放大 A 的部位調到 C 的報酬、卻承受更低風險——這就是「效率」的意義。':
    ': the extra 4 percentage points it earned were bought with double the bumpiness, so it actually loses to A on efficiency. In W15 terms: at the same Sharpe ratio, you could scale up your position in A to match C\'s return while taking less risk — that is what "efficiency" means.',
  '量級感':
    'Rule of thumb',
  '：長期而言 &gt;0.5 已屬不錯、&gt;1 很優秀、宣稱長期 &gt;2 的要高度警戒（見第 5 節）。':
    ': over the long run, above 0.5 is already decent, above 1 is very good, and anyone claiming a long-run figure above 2 deserves serious suspicion (see Section 5).',
  'Sharpe 對決台':
    'Sharpe showdown',
  '兩檔基金各拉報酬與波動，看誰的每單位風險賺得多。R':
    'Drag the return and volatility for each of two funds and see which earns more per unit of risk. R',
  '固定 2%。':
    ' is fixed at 2%.',
  'A vs B（同報酬不同波動）':
    'A vs B (same return, different volatility)',
  'A vs C（高報酬 vs 高效率）':
    'A vs C (higher return vs. higher efficiency)',
  '甲：報酬':
    'Fund 1: return',
  '甲：年化波動':
    'Fund 1: annualized volatility',
  '乙：報酬':
    'Fund 2: return',
  '乙：年化波動':
    'Fund 2: annualized volatility',
  '甲 Sharpe':
    'Fund 1 Sharpe',
  '(報酬 − 2%) ÷ σ':
    '(return − 2%) ÷ σ',
  '乙 Sharpe':
    'Fund 2 Sharpe',
  '拉動滑桿或按預設。':
    'Drag a slider or press a preset.',
  '3. Sortino 比率：只懲罰下跌的 Sharpe':
    '3. The Sortino ratio: a Sharpe that punishes only the drops',
  'W28 鋪好的下行偏差在此登場：Sortino ＝ (R':
    'The downside deviation we laid the groundwork for in W28 now makes its entrance: Sortino = (R',
  ') ÷ 下行偏差。':
    ') ÷ downside deviation.',
  '算例：A 基金總 σ 15%，但其中大半波動來自偶爾暴漲，下行偏差只有 9% → Sortino ＝ 6 ÷ 9 ＝':
    'Worked example: Fund A has a total σ of 15%, but most of that volatility comes from the occasional surge, and its downside deviation is only 9% → Sortino = 6 ÷ 9 = ',
  '（Sharpe 只有 0.40）。':
    ' (its Sharpe is only 0.40).',
  'Sharpe 與 Sortino 的':
    'The ',
  '差距本身就是資訊':
    'gap between Sharpe and Sortino is itself information',
  '：Sortino 明顯高於 Sharpe ＝ 波動偏「往上跳」（投資人喜歡的那種）；兩者接近 ＝ 上下對稱。對「絕對報酬」型策略（目標是不虧錢），Sortino 更貼近本意。':
    ': a Sortino well above the Sharpe = volatility that mostly "jumps up" (the kind investors like); the two close together = ups and downs are symmetric. For "absolute return" strategies (where the goal is not to lose money), Sortino is closer to the real intent.',
  '4. 資訊比率（IR）：相對基準的 Sharpe':
    '4. The information ratio (IR): Sharpe measured against a benchmark',
  '前兩個比率對照「無風險利率」；當你的目標是':
    'The first two ratios compare against the "risk-free rate." When your goal is to ',
  '打敗基準':
    'beat a benchmark',
  '（下週主題），對照物換成基準指數：IR ＝ 超額報酬 ÷ 追蹤誤差（追蹤誤差＝超額報酬的標準差）。':
    ' (next week\'s topic), the yardstick becomes the benchmark index: IR = excess return ÷ tracking error (tracking error = the standard deviation of excess return).',
  '算例：年超額報酬 1.5%、追蹤誤差 3% → IR ＝':
    'Worked example: annual excess return of 1.5% and tracking error of 3% → IR = ',
  '——「每偏離基準一單位，換到 0.5 單位超額」。':
    ' — "for every unit of deviation from the benchmark, you earn 0.5 units of excess return."',
  '三個比率的分工（背下來）：':
    'How the three ratios divide the work (memorize this):',
  '比率':
    'Ratio',
  '分母（風險的定義）':
    'Denominator (how risk is defined)',
  '適用':
    'Best for',
  '總波動':
    'Total volatility',
  '整體組合、跨資產比較':
    'Whole portfolios, cross-asset comparisons',
  '下行偏差':
    'Downside deviation',
  '絕對報酬目標、不對稱策略':
    'Absolute-return goals, asymmetric strategies',
  '追蹤誤差':
    'Tracking error',
  '主動管理 vs 基準（經理人的成績單）':
    'Active management vs. a benchmark (a manager\'s report card)',
  '5. 使用陷阱（比公式更重要）':
    '5. Traps in using them (more important than the formulas)',
  '期間敏感':
    'Period sensitivity',
  '——牛市尾段人人 Sharpe 漂亮；至少看含一次完整下跌循環（5 年以上）的數字':
    ' — near the end of a bull market everyone\'s Sharpe looks great; look at figures that include at least one full downturn cycle (5+ years)',
  '平滑化假象':
    'The smoothing illusion',
  '——不常估值的資產（私募、部分債券基金、不動產）報酬序列被人為平滑 → σ 假低 → Sharpe 假高。「低波動高報酬」的另類基金，先查它多久估值一次':
    ' — assets that are rarely re-valued (private equity, some bond funds, real estate) have artificially smoothed return series → σ looks falsely low → Sharpe looks falsely high. For an alternative fund with "low volatility, high return," first check how often it is valued',
  '尾部風險不入帳':
    'Tail risk doesn\'t show up',
  '——賣保險型策略（如賣選擇權）平時月月小賺（σ 小、Sharpe 極高），直到某月一次還清。Sharpe 對「壓路機前撿鋼板」的策略系統性高估（W28 VaR 缺陷的親戚）':
    ' — insurance-selling strategies (such as selling options) make small gains every month in normal times (small σ, extremely high Sharpe) until one month they pay it all back at once. Sharpe systematically overstates strategies of the "picking up nickels in front of a steamroller" kind (a cousin of the VaR flaw in W28)',
  '負值時失義':
    'It stops making sense when negative',
  '——兩檔都虧損時，Sharpe 的大小比較會反直覺（虧 5%、σ 30% 的 Sharpe「優於」虧 5%、σ 10%）。負 Sharpe 區間別排名，直接看回撤與原因':
    ' — when both funds are losing money, comparing their Sharpe ratios becomes counter-intuitive (a Sharpe for −5% with σ 30% is "better than" −5% with σ 10%). Don\'t rank in negative-Sharpe territory; look straight at drawdown and the reasons',
  '陷阱照妖鏡：這個漂亮數字有什麼問題？':
    'Trap detector: what\'s wrong with this pretty number?',
  '四個情境，各對應一個使用陷阱。先判斷，再展開看解析。':
    'Four scenarios, each matching one trap. Decide first, then open up the explanation.',
  '第 1 / 4 題':
    'Question 1 / 4',
  '① 期間敏感':
    '① Period sensitivity',
  '② 平滑化假象':
    '② The smoothing illusion',
  '③ 尾部風險':
    '③ Tail risk',
  '④ 負值失義':
    '④ Meaningless when negative',
  '目前答對 0 題':
    'Correct so far: 0',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「報酬最高的就是最好的。」':
    '"The highest return is the best."',
  '本週的存在理由——不看分母的比較都是行銷。':
    'The whole reason this week exists — a comparison that ignores the denominator is just marketing.',
  '「Sharpe 高就可以買。」':
    '"A high Sharpe means it\'s okay to buy."',
  '先問三件事：期間多長？含下跌循環嗎？策略有沒有尾部風險？（陷阱 1–3 的檢查順序。）':
    'Ask three things first: How long is the period? Does it include a downturn cycle? Does the strategy carry tail risk? (The checking order for traps 1–3.)',
  '「散戶不用算這些。」':
    '"Everyday investors don\'t need to calculate this."',
  '你每次在「高股息 vs 市值型」「這檔基金 vs 0050」之間比較時，其實都在做風險調整判斷——差別只在有沒有算對。':
    'Every time you compare "high-dividend vs. cap-weighted" or "this fund vs. 0050," you are already making a risk-adjusted judgment — the only difference is whether you got it right.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '定義啃熟＋機構視角':
    'Learn the definitions cold, plus the institutional view',
  '40 分鐘':
    '40 min',
  'Investopedia：Sharpe、Sortino、Information Ratio 三條目':
    'Investopedia: the entries on Sharpe, Sortino, and Information Ratio',
  '啃熟定義與例子。':
    'Get the definitions and examples down cold. ',
  '30 分鐘':
    '30 min',
  'AQR Insights：Sharpe 誤用／平滑化主題文章':
    'AQR Insights: articles on Sharpe misuse / smoothing',
  '機構視角的陷阱清單——特別找談 return smoothing 或 Sharpe 誤用的一篇精讀。':
    'A checklist of traps from the institutional view — look in particular for one article on return smoothing or Sharpe misuse and read it closely. ',
  '10 分鐘':
    '10 min',
  '回顧 W27–28 的模擬組合':
    'Revisit the W27–28 simulated portfolio',
  '本週練習的原料：報酬序列與風險模組都已就位——本週只是把兩個分頁的數字相除。':
    'The raw material for this week\'s exercise: the return series and the risk module are both already in place — this week you just divide the numbers on the two tabs.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '給模擬組合裝上第三組儀表':
    'Install the third set of gauges on the simulated portfolio',
  '任務 A｜三比率上線（35 分鐘）':
    'Task A | Three ratios go live (35 minutes)',
  '用 W28 的組合報酬序列（週頻即可）算年化報酬（W27 CAGR 法）與年化 σ（W28）':
    'Use W28\'s portfolio return series (weekly frequency is fine) to calculate annualized return (the W27 CAGR method) and annualized σ (W28)',
  '用一年期定存利率的量級（查台銀牌告，約 1.5–2%，':
    'is roughly the one-year time-deposit rate (check Bank of Taiwan\'s posted rate, about 1.5–2%, ',
  '註明查詢日':
    'note the date you looked it up',
  '算 Sharpe；用「只取負報酬週」算下行偏差 → Sortino':
    'Calculate Sharpe; use only the negative-return weeks to compute downside deviation → Sortino',
  '基準先用 W18 IPS 指定的基準（下週正式深化），算超額報酬序列 → 追蹤誤差 → IR':
    'For the benchmark, start with the one your W18 IPS specifies (we\'ll go deeper next week); calculate the excess-return series → tracking error → IR',
  '驗證手感':
    'Sanity check',
  '：用講義算例手算一次三個比率，確認公式沒帶錯':
    ': calculate the three ratios by hand once using the worked example in the notes, to confirm you haven\'t carried a formula wrong',
  '任務 B｜照妖鏡實戰（15 分鐘）':
    'Task B | The detector in action (15 minutes)',
  '挑一檔你或家人持有（或被推銷過）的基金：從月報／官網找它的三年報酬與 σ（或自算），算 Sharpe，跟同期大盤 ETF 比。寫兩行結論':
    'Pick a fund that you or your family holds (or has been pitched): find its three-year return and σ from the monthly report or website (or calculate them yourself), calculate its Sharpe, and compare it with a market ETF over the same period. Write two lines of conclusion',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '講義算例的三個答案是':
    'The three answers for the notes\' worked example are ',
  '（Sharpe A／Sortino A／IR）。手算對不上就是公式帶錯——最常見的錯是分子忘了減 R':
    ' (Sharpe A / Sortino A / IR). If your hand calculation doesn\'t match, a formula is wrong — the most common mistake is forgetting to subtract R',
  '模擬組合三比率上線（含 Rf 出處與日期）':
    'The three ratios for the simulated portfolio are live (with the source and date of Rf noted)',
  '講義算例手算驗證通過（0.40／0.67／0.50）':
    'The notes\' worked example passes the hand check (0.40 / 0.67 / 0.50)',
  '真實基金照妖鏡完成':
    'The real-fund detector exercise is done',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  'C 基金報酬 12% 遠勝 A 的 8%，為什麼 Sharpe 反而說 A 較好？這個結論對誰沒用？':
    'Fund C\'s 12% return far beats A\'s 8%, so why does Sharpe say A is better? And who is this conclusion no use to?',
  '→ 因為 A 的':
    '→ Because A\'s ',
  '單位風險報酬':
    'return per unit of risk',
  '較高——想要 12% 的人可以持有 A 並適度放大部位，比直接持有 C 更有效率。':
    ' is higher — someone who wants 12% can hold A and scale up the position moderately, which is more efficient than holding C outright. ',
  '對誰沒用':
    'Who it\'s no use to',
  '：不能用槓桿、且必須達到 12% 報酬目標的人，可能仍得選 C——比率是效率指標，不能代替目標設定（W14 的風險需求）。':
    ': someone who can\'t use leverage and must hit a 12% return target may still have to choose C — a ratio is an efficiency metric, and can\'t replace goal-setting (the risk needs from W14).',
  '一檔基金 Sortino 遠高於 Sharpe，說明什麼？':
    'A fund\'s Sortino is far higher than its Sharpe. What does that tell you?',
  '→ 它的波動':
    '→ Its volatility ',
  '不對稱地偏向上漲':
    'leans asymmetrically toward the upside',
  '——下跌溫和、上漲劇烈（投資人樂見的偏態），也可能是策略特性（如趨勢跟蹤）。反過來 Sortino ≈ Sharpe 表示漲跌對稱。':
    ' — mild declines, sharp rallies (the skew investors like to see), though it can also be a feature of the strategy (such as trend following). Conversely, Sortino ≈ Sharpe means ups and downs are symmetric.',
  '「連續 36 個月正報酬、Sharpe 2.5」的策略，你的第一個問題是什麼？':
    'For a strategy with "36 straight months of positive returns and a Sharpe of 2.5," what is your first question?',
  '這個策略的虧損長什麼樣子？':
    '"What do this strategy\'s losses look like?"',
  '」36 個月不虧＋超高 Sharpe 最常見的解釋是賣尾部風險（平時穩定小賺、極端時一次巨虧）或平滑化估值——歷史上多起爆雷基金，出事前正是這種完美曲線。':
    ' The most common explanations for 36 months without a loss plus a very high Sharpe are selling tail risk (small steady gains normally, then one huge loss in an extreme) or smoothed valuations — many blown-up funds in history had exactly this kind of perfect curve before trouble hit.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '兩個司機':
    'Two drivers',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（兩個司機）':
    'Opening (two drivers)',
  '「兩個計程車司機都在 30 分鐘內把你送到目的地。A 平穩開到；B 一路超車、急煞、闖黃燈。你下次搭誰的車？」（一樣快，但你會選 A。）「投資也一樣：':
    '"Two taxi drivers both get you to your destination in 30 minutes. A drives smoothly; B overtakes everyone, brakes hard, and runs yellow lights. Whose cab do you take next time?" (Same speed, but you\'d pick A.) "Investing is the same: ',
  '同樣賺 8%，平穩賺到的比驚險賺到的高明':
    'earning 8% smoothly is smarter than earning 8% by the skin of your teeth',
  '——因為驚險的那種，總有一天翻車。」':
    ' — because the nail-biting kind will flip the car one day."',
  '核心觀念':
    'The core idea',
  '「所以專業投資人比的不是『賺多少』，是『':
    '"So professional investors don\'t compare \'how much did you earn\' — they compare \'',
  '每冒一分險賺多少':
    'how much did you earn for each bit of risk taken',
  '』——這個分數叫 Sharpe。我們家的模擬帳戶這週開始也有這個分數了。」（秀模擬組合的三比率。）':
    '.\' That score is called Sharpe. Our family\'s simulated account now has this score too, starting this week." (Show the simulated portfolio\'s three ratios.)',
  '互動（推銷防身術）':
    'Interaction (sales-pitch self-defense)',
  '「下次有人跟你推銷『這檔基金去年賺 20%！』，你要問哪兩句？」':
    '"Next time someone pitches you \'this fund made 20% last year!\', which two questions should you ask?"',
  '引導出：①「它晃得多兇？」②「跌的年份表現如何？」——問完對方答不出來，就不用再談了。':
    'Draw out: (1) "How wildly does it swing?" (2) "How did it do in the years it fell?" — if they can\'t answer, there\'s nothing more to discuss.',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「分數多少算好？」':
    '"What score counts as good?"',
  '「長期超過 0.5 不錯、超過 1 很強；有人跟你說長期 2 以上——先懷疑，天上掉的通常不是餡餅。」':
    '"Over the long run, above 0.5 is decent and above 1 is strong; if someone tells you a long-run figure of 2 or more — be suspicious first. What falls from the sky is usually not a pie."',
  '「太複雜了記不住。」':
    '"It\'s too complicated to remember."',
  '「記比喻就好：':
    '"Just remember the metaphor: ',
  '別只問車多快，要問開得穩不穩':
    'don\'t only ask how fast the car goes — ask how steadily it drives',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫三比率公式與各自分母的意義':
    'You can write out the three ratio formulas and what each denominator means',
  '模擬組合績效模組上線':
    'The simulated portfolio\'s performance module is live',
  '能說出四個使用陷阱':
    'You can name the four traps in using these ratios',
  '分享環節完成，記錄卡住的點':
    'Teaching session done; note where you got stuck',
  '回填 curriculum/01-overview.md 第 29 週進度欄':
    'Fill in the Week 29 progress column in curriculum/01-overview.md',
  '下週預告 · Week 30：績效歸因——Brinson 模型':
    'Next week\'s preview · Week 30: Performance attribution — the Brinson model',
  '——超額報酬算出來了，但它是「押對市場」還是「挑對股票」賺的？Brinson 模型幫你把帳拆得乾乾淨淨。':
    ' — the excess return has been calculated, but did it come from "calling the right market" or "picking the right stocks"? The Brinson model splits the books cleanly for you.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：風險衡量':
    'Previous week: Measuring risk',
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
  '甲報酬':
    'Fund 1 return',
  '甲波動':
    'Fund 1 volatility',
  '乙報酬':
    'Fund 2 return',
  '乙波動':
    'Fund 2 volatility',
  '答對了——比較績效要先除以風險。C 的 12% 若是用 30% 的波動換來的，Sharpe 只有 0.33；A 的 8% 配 15% 波動，Sharpe 0.40——每冒一分險，A 賺得比較多。這就是本週的主角：風險調整績效。':
    'Correct — compare performance only after dividing by risk. If C\'s 12% was bought with 30% volatility, its Sharpe is only 0.33; A\'s 8% with 15% volatility gives a Sharpe of 0.40 — for each bit of risk taken, A earns more. This is the star of this week: risk-adjusted performance.',
  '費用確實重要（W10、W16），但本週的答案更根本：比較績效要先除以風險。C 的 12% 用 30% 波動換來，Sharpe 0.33；A 的 8% 配 15% 波動，Sharpe 0.40——每冒一分險，A 賺得比較多。':
    'Fees do matter (W10, W16), but this week\'s answer is more fundamental: compare performance only after dividing by risk. C\'s 12% was bought with 30% volatility, for a Sharpe of 0.33; A\'s 8% with 15% volatility gives a Sharpe of 0.40 — for each bit of risk taken, A earns more.',
  '<b>兩邊都是負超額——這個區間 Sharpe 失義（陷阱④）。</b>負值時波動大的反而分數「好看」，別在這裡排名；直接看回撤與虧損原因。':
    '<b>Both sides have negative excess return — in this range Sharpe stops making sense (trap 4).</b> When values are negative, the one with higher volatility actually scores "better"; don\'t rank here; look directly at drawdown and the reasons for the losses.',
  '<b>效率打平。</b>Sharpe 相同時，理論上可以用部位大小把兩者調成同樣的報酬與風險——差異要再看 Sortino（波動的形狀）與費用。':
    '<b>Efficiency is a tie.</b> When the Sharpe ratios are equal, in theory you can use position size to adjust the two to the same return and risk — so look next at Sortino (the shape of the volatility) and fees.',
  '甲':
    'Fund 1',
  '乙':
    'Fund 2',
  '比較高明。</b>不是因為賺得多，是<strong>每承擔一單位波動換到的超額報酬</strong>比較多。想要更高報酬的人，放大':
    ' is the smarter performer.</b> Not because it earned more, but because it earned more <strong>excess return per unit of volatility taken</strong>. Someone who wants a higher return is better off sizing up the position in',
  '的部位比直接持有':
    'rather than just holding',
  '更有效率——這就是「效率」勝過「絕對報酬」的意義。':
    ' outright — that is what it means for "efficiency" to beat "absolute return."',
  '「本基金近五年 Sharpe 1.8」——而這五年大盤只跌過一季。':
    '"This fund\'s Sharpe over the past five years is 1.8" — and the broad market fell in only one quarter during those five years.',
  '期間敏感。牛市尾段人人 Sharpe 漂亮——沒有經歷完整下跌循環的數字，只證明了它在順風時會走路。至少看含一次熊市的 5 年以上資料。':
    'Period sensitivity. Near the end of a bull market everyone\'s Sharpe looks great — a figure that hasn\'t been through a full downturn cycle only proves it can walk with the wind at its back. Look at 5+ years of data that include at least one bear market.',
  '某私募房地產基金：年化 9%、波動只有 4%，Sharpe 高達 1.75。':
    'A private real-estate fund: 9% annualized, volatility of only 4%, Sharpe as high as 1.75.',
  '平滑化假象。不常估值的資產（私募、不動產）報酬序列被人為抹平——σ 假低、Sharpe 假高。先問它多久估值一次、由誰估。':
    'The smoothing illusion. Assets that are rarely re-valued (private equity, real estate) have their return series artificially flattened — σ looks falsely low and Sharpe falsely high. Ask first how often it is valued, and by whom.',
  '某選擇權策略連續 36 個月正報酬、Sharpe 2.5，號稱「絕對報酬」。':
    'An options strategy with 36 straight months of positive returns and a Sharpe of 2.5, billed as "absolute return."',
  '尾部風險不入帳。賣保險型策略平時月月小賺（σ 小、Sharpe 極高），直到某月一次還清——壓路機前撿鋼板。Sharpe 對這類策略系統性高估。':
    'Tail risk doesn\'t show up. Insurance-selling strategies make small gains every month in normal times (small σ, extremely high Sharpe) until one month they pay it all back at once — picking up nickels in front of a steamroller. Sharpe systematically overstates strategies like this.',
  '熊市裡：X 基金虧 5%（σ 30%）、Y 基金虧 5%（σ 10%）——X 的 Sharpe 比較「好」。':
    'In a bear market: Fund X loses 5% (σ 30%) and Fund Y loses 5% (σ 10%) — X\'s Sharpe looks "better."',
  '負值失義。分子為負時，分母越大商越接近零、看起來越「好」——但那只是虧得比較顛簸。負 Sharpe 區間不要排名，直接看回撤與原因。':
    'Meaningless when negative. When the numerator is negative, the larger the denominator, the closer the quotient is to zero and the "better" it looks — but that only means the loss was bumpier. Don\'t rank in negative-Sharpe territory; look straight at drawdown and the reasons.',
  '第':
    'Question',
  '題':
    '',
  '重新開始——目前答對 0 題':
    'Starting over — correct so far: 0',
  '答對——':
    'Correct — ',
  '再想想——':
    'Think again — ',
  '這是':
    'This is ',
  '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">（點上面的「下一題」繼續）</span>':
    '<br><span style="font-size:.85em;color:var(--ink-3)">(tap "Next question" above to carry on)</span>',
  '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">（四題結束——想再練就點「再玩一次」）</span>':
    '<br><span style="font-size:.85em;color:var(--ink-3)">(all four done — tap "Play again" to practise more)</span>',
  '目前答對':
    'Correct so far:',
  '下一題 →':
    'Next question →',
  '再玩一次 ↺':
    'Play again ↺',
  '✓ 三組儀表齊了——下週用 Brinson 模型拆帳：超額到底贏在哪。':
    '✓ All three sets of gauges are in place — next week we use the Brinson model to split the books: where exactly did the excess return come from.',
};
