/*
 * 給家人的投資課 Week 27：報酬衡量 TWR/MWR——模擬組合上線 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-27-returns-portfolio.html
 *
 * 沿用既有慣例（行內標記邊界留半形空白、術語固定譯法、語域保持家庭教材
 * 的口語溫度）。金額照 W17 的慣例：散文內換算（100 萬 → NT$1,000,000）；
 * JS 算出的數值後綴「萬」翻成空字串，單位改掛在標籤上（如 End value (NT$10k)）。
 *
 * 產製方式（2026-08-21）：235 條中 186 條散文由 T2 模型初翻、44 條互動控制
 * 與 JS 字串（語序重組、單位規則）由主對話親譯，合併後經覆蓋完整性（雙向）、
 * EN 零中文殘留、check-translations 與建置期三道守衛驗證。
 *
 * dragnote 的判讀句是整句模板＋佔位符（{m}{d}{x}{g}），不是字串拼接——
 * 翻譯時保留佔位符原樣。
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
  '給家人的投資課 · Q3 操盤手季 · Week 27':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 27',
  '報酬衡量——TWR/MWR 與模擬組合上線':
    'Measuring returns — TWR/MWR and the paper portfolio goes live',
  'Q3 操盤手季開場。操盤手的第一課不是「怎麼賺」，是':
    'The opening of Q3, the portfolio manager\'s quarter. The first lesson of being a portfolio manager isn\'t "how to make money" — it\'s ',
  '怎麼誠實地算自己賺了多少':
    'how to honestly calculate how much you\'ve actually made',
  '——多數人連自己的真實報酬率都算錯。':
    '— most people get even their own real return wrong.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：':
    'Prerequisites: ',
  '第 18 週':
    'Week 18',
  '52 週 · 第 27 週':
    '52 weeks · Week 27',
  'Q3 開場':
    'Q3 opens',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '鏡頭從「一家公司」換成「一個組合」。本週交付兩件事：三組容易混淆的報酬概念，和':
    'The lens shifts from "one company" to "one portfolio." This week delivers two things: three easily-confused return concepts, and ',
  '正式上線的模擬組合':
    'the paper portfolio, officially live',
  '——它是 Q3 一整季的實驗載具，之後每週在上面加一個模組。':
    '— it\'s the experimental vehicle for the whole of Q3; every week from here adds one more module onto it.',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週的電梯簡報——家人成功複述你的反方論證了嗎？卡住的那段改寫了沒？':
    'Look back at last week\'s elevator pitch — did your family manage to retell your counter-argument? Did you rewrite the part where they got stuck?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '第一年 +50%、第二年 −50%——「平均報酬 0%」。你的 100 萬變成多少？':
    'Year one +50%, year two −50% — "average return 0%." What does your NT$1,000,000 become?',
  '還是 100 萬，不賺不賠':
    'Still NT$1,000,000 — break even',
  '75 萬，虧了四分之一':
    'NT$750,000 — down a quarter',
  '順序對就能賺':
    'Get the order right and you come out ahead',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 算術 vs 幾何：波動拖累':
    '1. Arithmetic vs. geometric: volatility drag',
  '100 萬 → 第一年 +50% → 150 萬 → 第二年 −50% →':
    'NT$1,000,000 → year one +50% → NT$1,500,000 → year two −50% →',
  '75 萬':
    'NT$750,000',
  '。算術平均（50−50）÷2 ＝ 0%，但你實實在在虧了 25%。':
    '. The arithmetic average, (50−50)÷2, is 0% — but you\'re genuinely down 25%.',
  '真實的複合報酬要用':
    'The real compounded return has to use ',
  '幾何平均':
    'Geometric mean',
  '−13.4%／年':
    '−13.4%/year',
  '。算術與幾何的差距就是':
    '. The gap between arithmetic and geometric is ',
  '波動拖累（volatility drag）':
    'volatility drag',
  '，波動越大差距越大（近似公式：幾何 ≈ 算術 − σ²/2）。兩個含義：':
    ', and the bigger the volatility, the bigger the gap (rule of thumb: geometric ≈ arithmetic − σ²/2). Two implications:',
  '別人說「平均報酬 X%」，先問是算術還是幾何——':
    'When someone says "average return X%," ask first whether it\'s arithmetic or geometric —',
  '你的資產照幾何長大':
    'your assets grow by the geometric one',
  '「同樣的平均報酬，低波動組合長期贏」有數學原因——W15 的分散降波動不只是心理安慰，它直接提高幾何報酬':
    '"Given the same average return, the lower-volatility portfolio wins over the long run" has a mathematical reason — the diversification that lowers volatility in W15 isn\'t just psychological comfort, it directly raises the geometric return',
  'CAGR（年化複合成長率）':
    'CAGR (compound annual growth rate)',
  '就是幾何平均的標準版：(期末÷期初)^(1/年數) − 1。例：3 年 100 → 150，CAGR ＝ 1.5^(1/3) − 1 ＝':
    ' is the standard form of the geometric mean: (ending value ÷ starting value)^(1/number of years) − 1. Example: 3 years, 100 → 150, CAGR = 1.5^(1/3) − 1 =',
  '波動拖累模擬器':
    'Volatility drag simulator',
  '兩年一組：一年賺「平均＋波動」、一年賺「平均−波動」。算術平均不變，看波動怎麼吃掉終值。':
    'Two years at a time: one year earns "average + volatility," the other earns "average − volatility." The arithmetic average stays the same — watch how volatility eats into the ending value.',
  '算術平均報酬':
    'Arithmetic mean return',
  '波動幅度（±）':
    'Volatility (±)',
  '算術平均':
    'Arithmetic mean',
  '口頭上的「平均」':
    'The "average" people quote',
  '資產實際的成長率':
    'How assets actually grow',
  '波動拖累':
    'Volatility drag',
  '零波動（同樣算術平均）· 10 年':
    'No volatility (same mean) · 10 yrs (NT$10k)',
  '有波動 · 10 年':
    'With volatility · 10 yrs (NT$10k)',
  '拉動滑桿看差距。':
    'Drag the sliders to see the gap.',
  '2. TWR vs MWR：兩個都對，回答不同問題':
    '2. TWR vs. MWR: both are correct, they just answer different questions',
  '帳戶':
    'An account ',
  '有資金進出':
    'with money moving in and out',
  '時，「報酬率」出現兩種算法，結果可以天差地遠。講義算例：':
    ' gives rise to two ways of calculating "the return," and the results can be worlds apart. Worked example from these notes:',
  '期 1：投入 10 萬 → 市場翻倍（+100%）→ 20 萬':
    'Period 1: invest NT$100,000 → the market doubles (+100%) → NT$200,000',
  '你信心大增，':
    'Feeling much more confident, you',
  '加碼 90 萬':
    'add NT$900,000',
  '→ 110 萬':
    '→ NT$1,100,000',
  '期 2：市場 −10% → 期末':
    'Period 2: the market −10% → ending balance',
  '99 萬':
    'NT$990,000',
  '。總投入 100 萬——':
    '. Total invested: NT$1,000,000 —',
  '實際虧 1 萬':
    'you\'re actually down NT$10,000',
  'TWR（時間加權報酬）':
    'TWR (time-weighted return)',
  '把每段報酬相乘、不理會資金進出：2.0 × 0.9 − 1 ＝':
    ' multiplies each period\'s return together and ignores money moving in and out: 2.0 × 0.9 − 1 =',
  'MWR（金額加權報酬，即 IRR）':
    'MWR (money-weighted return, i.e. IRR)',
  '把每筆錢按在場時間加權：解 10(1+r)² + 90(1+r) ＝ 99，得':
    ' weights each dollar by how long it was in the account: solve 10(1+r)² + 90(1+r) = 99, giving',
  '−0.91%／期':
    '−0.91%/period',
  '同一段歷史，+80% 對上負報酬——兩個都沒算錯。TWR 回答「這個策略表現如何」，MWR 回答「你的錢實際長了多少」。差距＝你的擇時行為的成本。':
    'Same history, +80% versus a negative return — neither one is wrong. TWR answers "how did the strategy perform"; MWR answers "how much did your money actually grow." The gap is the cost of your own market-timing behavior.',
  '用法鐵律':
    'The iron rule for which to use',
  '：評估策略、比較基金、對照基準 → 看 TWR；評估自己的錢包與行為 → 看 MWR。多數散戶的 MWR 顯著低於所持基金的 TWR（追高殺低的實證）——這個差距正是 W17 機械化入場與 W23 對策工程要消滅的東西。':
    ': evaluating a strategy, comparing funds, checking against a benchmark → look at TWR; evaluating your own wallet and your own behavior → look at MWR. Most retail investors\' MWR runs well below the TWR of the funds they hold (the empirical footprint of buying high and selling low) — that gap is exactly what W17\'s mechanized entries and W23\'s countermeasure engineering are meant to eliminate.',
  'TWR / MWR 實驗台':
    'The TWR / MWR test bench',
  '起始投入固定 10 萬。動報酬、動加碼金額、換加碼時點，看兩個報酬率怎麼分道揚鑣。':
    'Starting investment fixed at NT$100,000. Move the return, move the top-up amount, change the timing of the top-up, and watch the two returns pull apart.',
  '講義算例':
    'Lecture example',
  '加碼改到期 2 之後':
    'Top-up after period 2',
  '完全不加碼':
    'No top-up at all',
  '期 1 報酬':
    'Period-1 return',
  '期 2 報酬':
    'Period-2 return',
  '加碼金額':
    'Top-up amount (NT$10k)',
  '90 萬':
    '90',
  '加碼時點':
    'Top-up timing',
  '期 1 結束後':
    'After period 1',
  '期 2 結束後':
    'After period 2',
  '期末市值':
    'End value (NT$10k)',
  '總投入 —':
    'Total in: —',
  '實際損益':
    'Actual P&L (NT$10k)',
  '錢包的真相':
    'What your wallet says',
  '策略的成績':
    'What the strategy did',
  'MWR（每期）':
    'MWR (per period)',
  '你的錢的成績':
    'What your money did',
  '調整參數看判讀。':
    'Adjust the controls to see the verdict.',
  '3. 報酬引用的三個必答':
    '3. Three questions any quoted return must answer',
  '任何人（包括你自己）報一個報酬率，先問三件事，否則數字沒有意義：':
    'Whenever anyone — including yourself — quotes a return, ask three things first, or the number means nothing:',
  '必答':
    'Must answer',
  '為什麼':
    'Why',
  '期間？':
    'Over what period?',
  '起訖日是哪天——起點選在低點的「三年翻倍」是話術':
    'What are the start and end dates — a "doubled in three years" whose starting point was picked at a low is just a sales pitch',
  '含息否？':
    'Does it include income?',
  '含股利再投入（total return）還是純價格？台股殖利率 3–4%，十年下來差距巨大':
    'Does it include dividends reinvested (total return), or is it price only? Taiwan stocks yield 3–4%, and over ten years that gap is huge',
  '幣別？':
    'What currency?',
  '海外資產用台幣還是原幣計？（W14 的匯率課題）':
    'Are overseas assets measured in NT dollars or in their original currency? (The exchange-rate issue from W14)',
  '4. 模擬組合上線：Q3 的載具（本週交付物）':
    '4. The paper portfolio goes live: Q3\'s vehicle (this week\'s deliverable)',
  '從本週起，你有一個':
    'From this week on, you have a portfolio that runs on ',
  '用真實市價、假鈔票':
    'real market prices and fake money',
  '運作的組合：':
    ':',
  '規格':
    'Spec',
  '內容':
    'Details',
  '資金':
    'Funding',
  '虛擬 100 萬':
    'A virtual NT$1,000,000',
  '配置':
    'Allocation',
  '完全依照你 W18 的 IPS（比例、標的類型、單一上限）':
    'Follows your W18 IPS exactly (weights, asset types, single-position ceiling)',
  '建倉':
    'Building the initial positions',
  '依 IPS 的入場規則（W17）——若規則是分批，就真的分批記錄':
    'Follows the entry rules in the IPS (W17) — if the rule is to buy in instalments, actually record it in instalments',
  '記錄格式':
    'Record format',
  '試算表一筆一列：日期｜標的｜動作｜股數｜成交價（當日實價）｜金額｜手續費稅（W10 真實費率）｜當下理由（一句話）':
    'One row per trade in a spreadsheet: Date | Ticker | Action | Shares | Price (actual price that day) | Amount | Fees & tax (real rates from W10) | Reason (one line)',
  '估值頁':
    'Valuation page',
  '每週五收盤後更新各部位市值與組合總值':
    'Update every position\'s market value and the portfolio total after Friday\'s close each week',
  '紀律':
    'Discipline',
  '買賣必須符合 IPS；違規操作可以做，但理由欄要註明「違規」——Q3 結束時看違規操作的績效（劇透：這是最好的行為財務自我實驗）':
    'Buys and sells must follow the IPS; a rule-breaking trade is allowed, but the reason column must say "rule break" — at the end of Q3 you\'ll look at how the rule-breaking trades performed (spoiler: this is the best behavioral-finance self-experiment there is)',
  '為什麼用模擬而不是真錢？':
    'Why paper money instead of real money? ',
  '練的是流程與記錄習慣，不是膽量':
    'What you\'re practicing is process and the habit of record-keeping, not nerve',
  '。等 Q3 的衡量工具齊了（Sharpe、歸因、壓測），這套流程平移到真錢帳戶，一天就能接軌。':
    '. Once Q3\'s measurement tools are all in place (Sharpe ratio, attribution, stress tests), this same process carries straight over to a real-money account — it\'ll take a day to switch.',
  '5. 常見誤解闢謠':
    '5. Common misconceptions, debunked',
  '「我的基金賺 30%，我卻沒賺到——基金一定有鬼。」':
    '"My fund made 30%, but I didn\'t — the fund must be up to something."',
  '正常且常見：基金的 30% 是 TWR，你的是 MWR；你可能在淨值高點才申購。錯不在基金，在資金進出的時機——這正是兩個指標要分開的原因。':
    'Normal, and common: the fund\'s 30% is TWR, yours is MWR; you may have bought in only after the NAV was already high. The fault isn\'t the fund\'s, it\'s the timing of your money moving in and out — which is exactly why the two metrics need to be kept separate.',
  '「這三個月賺 10%，年化就是 46% 的實力。」':
    '"Made 10% in three months, so annualized that\'s 46% skill."',
  '年化放大了雜訊。三個月的成績有太多運氣成分，外推成年化等於宣稱這運氣能連續複製四次——一年以下的績效，直接看原始報酬即可。':
    'Annualizing magnifies noise. Three months of results have too much luck baked in, and extrapolating to an annualized figure amounts to claiming that luck can be repeated four times in a row — for anything under a year, just look at the raw return.',
  '「模擬組合不痛不癢，練不到心理。」':
    '"A paper portfolio doesn\'t hurt, so it can\'t train your psychology."',
  '對，心理要真錢才練得到（所以 W23 的制度才重要）。但':
    'True — psychology only gets trained with real money (which is exactly why W23\'s system matters). But ',
  '流程、記錄、衡量':
    'process, record-keeping, and measurement',
  '在模擬裡練最便宜——先把儀表裝好，再上路。':
    ' are cheapest to practice on paper — install the instruments first, then hit the road.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '把三個定義啃熟':
    'Chew through the three definitions',
  '40 分鐘':
    '40 min',
  'Investopedia：TWR、MWR、CAGR 三條目':
    'Investopedia: the TWR, MWR, and CAGR entries',
  '把定義與算例啃熟，特別注意 TWR 條目裡「切段再相乘」的分段邏輯。':
    'Chew through the definitions and worked examples, and pay special attention to the "split into segments, then multiply" logic in the TWR entry. ',
  '40 分鐘 · 選讀':
    '40 min · optional',
  '《Investments》（Bodie, Kane &amp; Marcus）報酬衡量章節':
    'The performance-measurement chapter of Investments (Bodie, Kane & Marcus)',
  '學術版。重點是理解':
    'The academic version. The key point is understanding',
  'GIPS（全球投資績效標準）為什麼規定基金必須報 TWR':
    'why GIPS (Global Investment Performance Standards) requires funds to report TWR',
  '——答案跟「經理人控制得了什麼」有關，快問快答 Q1 會考。':
    '— the answer has to do with what a manager can and can\'t control; this comes up in Q1 of the quick quiz. ',
  'GIPS 官網 ↗':
    'GIPS official site ↗',
  '15 分鐘':
    '15 min',
  '回顧你 W18 的 IPS':
    'Review your IPS from W18',
  '建倉前最後一次確認：比例、單一上限、入場規則。模擬組合的每一筆都要對得上這張卡。':
    'One last check before building positions: weights, single-position ceiling, entry rules. Every trade in the paper portfolio has to match this card.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '建倉，然後親手算一次':
    'Build the positions, then work the numbers by hand',
  '任務 A｜模擬組合建倉（30 分鐘）':
    'Task A | Build the paper portfolio\'s initial positions (30 min)',
  '按第 4 節的規格建立試算表（記錄頁＋估值頁）':
    'Set up the spreadsheet per the spec in section 4 (record page + valuation page)',
  '用今天（或最近交易日）的實價完成第一批建倉——分批規則就記第一期':
    'Complete the first round of buying at today\'s (or the most recent trading day\'s) actual prices — if the rule is to buy in instalments, just log the first one',
  '每筆附一句理由；手續費稅用 W10 的真實費率算進去':
    'Attach one line of reasoning to every trade; work the fees and tax in using the real rates from W10',
  '任務 B｜手算 TWR vs MWR（20 分鐘）':
    'Task B | Calculate TWR vs. MWR by hand (20 min)',
  '用講義算例自己算一遍：驗證 TWR ＝ +80%、期末 99 萬、MWR ≈ −0.91%／期（試算表 IRR 函數或試誤法）':
    'Work through the notes\' example yourself: verify TWR = +80%, ending balance NT$990,000, MWR ≈ −0.91%/period (use a spreadsheet\'s IRR function or trial and error)',
  '改一個數字玩：把 90 萬的加碼改到':
    'Play with changing one number: move the NT$900,000 top-up to ',
  '期 2 之後':
    'after period 2',
  '才投入，TWR 和 MWR 各變成什麼？——親手體會「時機影響 MWR、不影響 TWR」':
    ' instead, and see what TWR and MWR each become — feel for yourself how "timing affects MWR, not TWR"',
  '算完拿上面的實驗台對答案':
    'Once you\'ve finished, check your answer against the test bench above',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '你的手算與實驗台一致：講義算例 TWR +80%、MWR −0.91%／期；加碼移到期 2 後，TWR 不動、MWR 翻成 +34.16%／期——同一個策略，時機讓 MWR 從負翻到大正，這就是兩個指標分開的意義。':
    'Your hand calculation matches the test bench: the notes\' example gives TWR +80%, MWR −0.91%/period; move the top-up to after period 2 and TWR stays put while MWR flips to +34.16%/period — same strategy, and timing alone turns MWR from negative to strongly positive. That\'s the whole point of keeping the two metrics separate.',
  '模擬組合上線：含成本與理由欄，且每筆符合 IPS':
    'The paper portfolio is live: with costs included and a reason column, and every trade follows the IPS',
  'TWR/MWR 算例手算驗證通過':
    'The TWR/MWR worked example checks out by hand',
  '每週五更新估值的行事曆提醒已設':
    'A calendar reminder for the Friday valuation update is set',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼基金業被規定用 TWR 揭露績效？':
    'Why is the fund industry required to disclose performance using TWR?',
  '→ 因為基金經理人':
    '→ Because a fund manager ',
  '無法控制投資人何時申購贖回':
    'cannot control when investors subscribe or redeem',
  '——資金進出的時機是客戶的行為。TWR 剔除資金流的影響，才能公平衡量經理人本身的操作能力。這正是 GIPS 的核心規定。':
    '— the timing of money moving in and out is the client\'s behavior. TWR strips out the effect of those cash flows, which is the only way to fairly measure the manager\'s own skill at running money. This is exactly what GIPS requires at its core.',
  '你的 MWR 長期低於所持標的的 TWR——診斷是什麼？處方在哪幾週？':
    'Your MWR runs persistently below the TWR of what you hold — what\'s the diagnosis? Which weeks hold the treatment?',
  '→ 診斷：':
    '→ Diagnosis: ',
  '擇時行為在漏錢':
    'Your market-timing behavior is leaking money',
  '——資金總在上漲後流入、下跌後流出（追高殺低）。處方：W17 機械化入場（定日投入）、W18 再平衡與 IPS 預先承諾、W23 對策工程。':
    '— money keeps flowing in after prices rise and out after they fall (buying high and selling low). Treatment: W17\'s mechanized entries (investing on fixed dates), W18\'s rebalancing and IPS pre-commitment, and W23\'s countermeasure engineering.',
  '+50% 再 −50% 虧 25%——那 −50% 再 +50% 呢？順序重要嗎？':
    '+50% then −50% loses you 25% — what about −50% then +50%? Does the order matter?',
  '→ 一樣虧 25%（0.5 × 1.5 ＝ 1.5 × 0.5 ＝ 0.75）——':
    '→ Same 25% loss either way (0.5 × 1.5 = 1.5 × 0.5 = 0.75) —',
  '乘法交換律：無資金進出時，順序不影響終值':
    'the commutative property of multiplication: with no money moving in or out, order doesn\'t affect the ending value',
  '。但若中途有進出，順序就透過 MWR 影響你的實際損益——又回到「時機影響的是 MWR」。':
    '. But if money moves in or out partway through, order does affect your actual gain or loss, through MWR — right back to "timing is what affects MWR."',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '詭異的成績單':
    'The strange-looking scorecard',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（詭異的成績單）':
    'Opening (the strange-looking scorecard)',
  '「考考你：有個人投資，策略報酬率 +80%，但他的錢包':
    '"Quiz you: someone invests, their strategy\'s return is +80%, but their wallet ',
  '虧了 1 萬':
    'is down NT$10,000',
  '。這可能嗎？」（揭曉講義算例，一步步走：小錢的時候賺了翻倍，大錢進場之後跌了一段。）':
    '. Is that even possible?" (Reveal the notes\' worked example and walk through it step by step: it doubled while the money on the table was small, then fell after the big money went in.)',
  '核心觀念':
    'The core idea',
  '「所以『報酬率』有兩種：一種算':
    '"So there are two kinds of \'return\': one measures how good the ',
  '策略':
    'strategy',
  '厲不厲害，一種算':
    ' is, the other measures whether ',
  '你的錢':
    'your money',
  '有沒有長大。它們的差距，就是你進出場的時機造成的——大部分人虧就虧在這個差距：漲了才敢把大錢放進去。」（連回 W17：「所以我們家進場才要先定日期，不看心情。」）':
    ' actually grew. The gap between them comes from your own timing — and that\'s exactly where most people lose money: they only dare put the big money in after it\'s already gone up." (Tie it back to W17: "That\'s why in our family we set the entry dates first, and don\'t go by mood.")',
  '互動（平均的騙局）':
    'Interaction (the trick behind averages)',
  '「再考一題：第一年賺 50%、第二年虧 50%，平均 0%，所以不賺不賠？」（拿 100 元演：150 → 75。）「跌下去要花更大力氣才爬得回來——這就是為什麼我們寧可賺得穩，不要大起大落。」':
    '"One more quiz: year one up 50%, year two down 50%, average 0%, so break even?" (Act it out with NT$100: 150 → 75.) "It takes more work to climb back out of a hole than it took to dig it — that\'s why we\'d rather earn steadily than swing wildly."',
  '收尾（新玩具）':
    'Closing (the new toy)',
  '「從這週起，我們家有一個『模擬帳戶』：假的 100 萬、真的股價，完全照我們那張規則卡操作。每個月我會像基金經理人一樣跟你們報告成績——用今天學的兩種報酬率。」':
    '"From this week on, our family has a \'paper account\': fake NT$1,000,000, real stock prices, run exactly by our rule card. Every month I\'ll report the results to you like a fund manager would — using the two kinds of return we learned today."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「模擬的有什麼用？」':
    '"What\'s the point of it being fake?"',
  '「飛行員也先用模擬器。錢是假的，但價格、紀律、記錄全是真的——等儀表都會看了，換真錢只是換油門。」':
    '"Pilots train on simulators too. The money is fake, but the prices, the discipline, and the record-keeping are all real — once you can read every instrument, switching to real money is just switching to a real throttle."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能解釋波動拖累並算 CAGR':
    'You can explain volatility drag and calculate CAGR',
  '能用算例說明 TWR 與 MWR 各回答什麼問題':
    'You can use a worked example to show what question each of TWR and MWR answers',
  '模擬組合上線——Q3 載具就位':
    'The paper portfolio is live — Q3\'s vehicle is in place',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '回填 curriculum/01-overview.md 第 27 週進度欄':
    'Fill in the Week 27 progress column of curriculum/01-overview.md',
  '下週預告 · Week 28：風險衡量——波動、回撤與風險儀表':
    'Next week · Week 28: measuring risk — volatility, drawdown, and the risk dashboard',
  '——組合會賺還不夠，要知道它「晃得多兇、最深摔多深」。下週你會給模擬組合裝上第一組風險儀表。':
    '— a portfolio that makes money isn\'t enough; you need to know how hard it swings and how deep it can fall. Next week you\'ll fit the paper portfolio with its first set of risk instruments.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：Q2 Capstone 投資論文':
    'Previous week: the Q2 capstone investment thesis',
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
  '波動幅度':
    'Volatility range',
  '期一報酬':
    'Period-1 return',
  '期二報酬':
    'Period-2 return',
  '答對了——150 萬再跌 50% 只剩 75 萬。「平均 0%」是算術平均；你的資產照幾何平均長大：√(1.5×0.5)−1 = −13.4%／年。這個差距叫波動拖累，下面的模擬器讓你親手拉出來。':
    'Correct — NT$1.5M falling 50% leaves NT$750,000. "Average 0%" is the arithmetic mean; your assets grow at the geometric mean: √(1.5×0.5)−1 = −13.4%/yr. That gap is volatility drag — the simulator below lets you pull it open yourself.',
  '順序其實無所謂——0.5×1.5 和 1.5×0.5 都是 0.75，一樣虧 25%（乘法交換律）。「平均 0%」是算術平均；資產照幾何平均長大：√(1.5×0.5)−1 = −13.4%／年。這叫波動拖累。':
    'Order actually doesn\'t matter — 0.5×1.5 and 1.5×0.5 are both 0.75: the same 25% loss (multiplication commutes). "Average 0%" is the arithmetic mean; assets grow at the geometric mean: √(1.5×0.5)−1 = −13.4%/yr. That is volatility drag.',
  '直覺的答案——但 100 萬 → 150 萬 → 75 萬，虧了四分之一。「平均 0%」是算術平均；你的資產照幾何平均長大：√(1.5×0.5)−1 = −13.4%／年。這個差距叫波動拖累，下面的模擬器讓你親手拉出來。':
    'The intuitive answer — but NT$1M → NT$1.5M → NT$750,000: a quarter gone. "Average 0%" is the arithmetic mean; your assets grow at the geometric mean: √(1.5×0.5)−1 = −13.4%/yr. That gap is volatility drag — the simulator below lets you pull it open yourself.',
  '萬':
    '',
  '<b>零波動時算術＝幾何。</b>把波動拉上去，看同樣的「平均」怎麼分出兩條路。':
    '<b>With zero volatility, arithmetic = geometric.</b> Pull the volatility up and watch the same "average" split into two roads.',
  '<b>同樣「平均 {m}%」，十年差 {d} 萬。</b>波動 ±{x}% 每年吃掉約 {g} 個百分點的複合報酬——這就是 W15 分散降波動的數學紅利：不是心理安慰，是直接加在幾何報酬上。':
    '<b>Same "average {m}%", yet after ten years the outcomes differ by {d} × NT$10k.</b> A ±{x}% swing eats about {g} points of compound return each year — this is the mathematical dividend of W15 diversification: not comfort, a straight add to your geometric return.',
  '總投入':
    'Total in:',
  '<b>沒有資金進出時，MWR 就是 TWR 的每期幾何平均。</b>兩個指標只有在錢進進出出時才會分家——把加碼拉上去看看。':
    '<b>With no money moving in or out, MWR is just the per-period geometric mean of TWR.</b> The two only part ways when cash flows — pull the top-up slider and see.',
  '<b>策略賺、你的錢沒跟上（TWR＞MWR）。</b>大錢在高點才進場——策略的好行情被小錢享受，壞行情由大錢承擔。這就是追高的成本，也是多數散戶的常態。':
    '<b>The strategy made money; your money didn\'t keep up (TWR > MWR).</b> The big money only arrived at the top — the strategy\'s good stretch was enjoyed by small money, its bad stretch borne by big money. That is the cost of chasing, and the norm for most retail investors.',
  '<b>你的錢比策略還會賺（MWR＞TWR）。</b>加碼的時機踩對了——大錢避開了壞行情。注意：這在事後看得到，事前靠的多半是運氣；W17 的答案是用機制、不是用感覺。':
    '<b>Your money out-earned the strategy (MWR > TWR).</b> The top-up timing landed right — big money dodged the bad stretch. Note: you can only see this after the fact; before the fact it is mostly luck. W17\'s answer is a mechanism, not a feeling.',
  '<b>兩個指標大致同步。</b>資金進出的時機沒有明顯幫倒忙也沒幫上忙——把報酬或時點改得更極端，看差距怎麼被拉開。':
    '<b>The two are roughly in sync.</b> Cash-flow timing neither helped nor hurt much — push the returns or the timing further and watch the gap open up.',
  '✓ Q3 開場完成——模擬組合已上線，下週給它裝第一組風險儀表。':
    '✓ Q3 opener done — the paper portfolio is live. Next week it gets its first set of risk gauges.',
};
