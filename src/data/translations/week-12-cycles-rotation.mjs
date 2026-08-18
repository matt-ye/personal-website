/*
 * 給家人的投資課 Week 12：景氣循環與資產輪動 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-12-cycles-rotation.html
 *
 * 沿用 week-01 的慣例。本週沒有金額單位問題（計算器全是百分比），要注意的是：
 *
 * ⚠ 四個象限的字串被三處共用，翻譯必須同時成立
 *   「復甦／過熱／趨緩／衰退」既是表格的階段名（獨立儲存格），也是象限按鈕，
 *   而「衰退」還被講義第 3 節當成句子的開頭（`衰退<strong>還在惡化</strong>時…`）。
 *   同一個 key 只能有一個譯文，所以譯成名詞 "Recession"，
 *   把接續的空白與語氣放進後面那一段（'還在惡化' → ' still deepening'）。
 *
 * ⚠ 投資時鐘的詳解是 JS 拼出來的
 *   `"<b>" + name + "：歷史相對贏家是" + win + "</b><br>" + why + …`
 *   中間那條連接字串前後都直接接變數，英文必須自帶前後空白，
 *   否則會黏成 "Recovery— the…equities"。
 *
 * ⚠ 書名用官方英文書名，不自己翻
 *   《掌握市場週期》= Mastering the Market Cycle（Howard Marks 原著名）；
 *   SPIVA、J.P. Morgan Guide to the Markets 本來就是英文。
 *   台股加權指數用 TAIEX，證交所用 TWSE。
 *
 * ⚠ 已知限制（與 week-01 相同，非本對照表可解）
 *   `<strong>…</strong>：` 與 `…</strong>。」` 這種「全形標點自己一個文字節點」
 *   的寫法，全形冒號／句號不在抽取器的 CJK 範圍內，抽不到也換不掉。
 *
 * 語域：寫給家人的教材。四季、擲硬幣、「規則是給恐慌時的自己的信」要保住溫度。
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
  '給家人的投資課 · Q1 共同地基 · Week 12':
    'Family Investing Course · Q1 Common Ground · Week 12',
  '景氣循環與資產輪動': 'The Business Cycle and Asset Rotation',
  'Q1 知識篇收官：循環的形狀、各季節誰漲誰跌——以及為什麼答案仍是「留在場上」。':
    'Closing out the knowledge half of Q1: the shape of the cycle, who rises and falls in each season — and why the answer is still "stay in the market".',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 11 週': 'Week 11',
  '52 週 · 第 12 週': '52 weeks · Week 12',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '把儀表板放進時間軸——這是 Q2 資產配置哲學（廣泛分散＋紀律再平衡）的理論鋪墊、Q3 壓力測試的背景知識。':
    'This puts the dashboard on a timeline — the groundwork for the Q2 allocation philosophy (broad diversification plus disciplined rebalancing), and the background you need for the Q3 stress tests.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「氣象台」時對方卡住的點——燈號講通了嗎、「檢查門窗不是賣房逃難」有沒有記住。先用自己的話再講一次。':
    'Think back to where people got stuck when you taught "the weather bureau" last week — did the signal lights land, and did "checking the doors and windows is not selling the house and fleeing" stick? Say it again in your own words first.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '2020 年 3 月，疫情封城、失業狂飆、新聞最恐怖的那幾週——台股和美股在做什麼？':
    'March 2020: lockdowns, unemployment spiking, the most frightening weeks of news anyone could remember. What were the Taiwan and US markets doing?',
  '猜一個答案': 'Pick an answer',
  '繼續崩跌好幾個月': 'Still crashing, for months more',
  '已經觸底、開始回升': 'Already bottomed and turning up',
  '橫盤等消息': 'Going sideways, waiting for news',
  '答對了——2020 年 3 月下旬，就在封城與失業數據最嚇人的期間，股市觸底反轉，隨後一年大漲。股價買的是「明年」不是「今天」——這就是本週的核心：股市的春天，總是在經濟的隆冬裡開始。':
    'Correct — in late March 2020, right in the middle of the lockdowns and the most alarming unemployment numbers, the market bottomed and turned, then rose sharply over the following year. A share price buys "next year", not "today" — and that is the core of this week: the market\'s spring always begins in the depth of the economy\'s winter.',
  '直覺的答案——但事實是：2020 年 3 月下旬，就在新聞最恐怖的期間，股市已觸底並開始大幅回升。股價買的是「明年」不是「今天」——等新聞變好才進場的人，錯過了整段最陡的漲幅。':
    'The intuitive answer — but the fact is that in late March 2020, right when the news was at its most frightening, the market had already bottomed and begun climbing hard. A share price buys "next year", not "today", so anyone waiting for the news to improve missed the whole steepest stretch of the rally.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 景氣循環的四階段': '1. The four phases of the business cycle',
  '經濟不走直線，走波浪。一個典型循環（歷史上平均數年一輪，長短不一）：':
    'The economy does not move in a straight line, it moves in waves. A typical cycle (historically a few years on average, though the length varies a lot):',
  '階段': 'Phase',
  '特徵': 'What it looks like',
  '央行姿態': 'Central bank stance',
  '儀表板的樣子': 'The dashboard',
  '復甦': 'Recovery',
  '從谷底回升，企業補庫存': 'Climbing off the bottom; companies rebuild inventory',
  '維持寬鬆': 'Stays loose',
  'PMI 回到 50 上、藍燈轉綠、利率低':
    'PMI back above 50, the blue light turning green, rates low',
  '擴張': 'Expansion',
  '成長強勁、信心高、通膨升溫': 'Strong growth, high confidence, inflation heating up',
  '開始升息': 'Starts hiking',
  'PMI 高檔、紅燈區、殖利率曲線走平':
    'PMI high, the signal in the red zone, the yield curve flattening',
  '趨緩': 'Slowdown',
  '成長減速、通膨仍高（最難熬的組合）':
    'Growth decelerating, inflation still high (the hardest combination to sit through)',
  '緊縮尾聲': 'End of the tightening',
  'PMI 下滑、曲線倒掛出現': 'PMI sliding, the curve starting to invert',
  '衰退': 'Recession',
  '需求萎縮、裁員、企業違約': 'Demand shrinks, layoffs, corporate defaults',
  '轉向降息': 'Turns to cutting',
  'PMI &lt; 50、藍燈、失業率飆（落後確認）':
    'PMI &lt; 50, blue light, unemployment spiking (a lagging confirmation)',
  '判讀重點': 'How to read it',
  '：階段之間沒有鈴聲，只有事後才看得清的邊界；而且每輪循環的驅動不同（2008 金融槓桿、2020 疫情、2022 通膨），歷史相似但不重複。':
    ': no bell rings between the phases — the boundaries are only clear in hindsight. And each cycle has a different driver (financial leverage in 2008, a pandemic in 2020, inflation in 2022), so history looks similar but never repeats.',

  /* ── 投資時鐘 ── */
  '2. 資產輪動：投資時鐘（心智模型，不是操作指南）':
    '2. Asset rotation: the investment clock (a mental model, not a playbook)',
  '用兩個軸（成長↑↓ × 通膨↑↓）把循環切成四象限，各有歷史上相對占優的資產。':
    'Two axes — growth ↑↓ against inflation ↑↓ — cut the cycle into four quadrants, each with an asset that has historically done relatively well. ',
  '點四個象限看各自的邏輯': 'Tap the four quadrants to see the logic of each',
  '投資時鐘四象限': 'The four quadrants of the investment clock',
  '橫軸：通膨（左低 → 右高）　·　縱軸：成長（上升 → 下降）':
    'Horizontal: inflation (low on the left → high on the right) · Vertical: growth (rising → falling)',
  '成長↑ 通膨↓': 'growth ↑ inflation ↓',
  '🏆 股票': '🏆 Equities',
  '過熱': 'Overheating',
  '成長↑ 通膨↑': 'growth ↑ inflation ↑',
  '🏆 原物料': '🏆 Commodities',
  '成長↓ 通膨↓': 'growth ↓ inflation ↓',
  '🏆 債券': '🏆 Bonds',
  '停滯性趨緩': 'Stagflationary slowdown',
  '成長↓ 通膨↑': 'growth ↓ inflation ↑',
  '🏆 現金': '🏆 Cash',
  /* JS 拼接：前後都直接接變數，英文自帶空白（見檔頭） */
  '：歷史相對贏家是': ' — the historical relative winner has been ',
  '復甦（成長↑ 通膨↓）': 'Recovery (growth ↑, inflation ↓)',
  '股票': 'equities',
  '獲利回升＋利率仍低，估值與獲利雙升——歷史上股票的黃金象限。':
    'Profits are recovering while rates are still low, so valuations and earnings rise together — historically the golden quadrant for equities.',
  '儀表板的樣子：PMI 回到 50 上、燈號藍轉綠、央行還沒升息。':
    'What the dashboard looks like: PMI back above 50, the signal light turning from blue to green, the central bank not hiking yet.',
  '過熱（成長↑ 通膨↑）': 'Overheating (growth ↑, inflation ↑)',
  '原物料': 'commodities',
  '需求強推升商品價格；同時升息開始壓縮股債的估值。':
    'Strong demand pushes commodity prices up, while rate hikes start squeezing the valuation of both stocks and bonds.',
  '儀表板的樣子：PMI 高檔、紅燈區、殖利率曲線走平、CPI 高於央行目標。':
    "What the dashboard looks like: PMI high, the signal in the red zone, the yield curve flattening, CPI above the central bank's target.",
  '停滯性趨緩（成長↓ 通膨↑）': 'Stagflationary slowdown (growth ↓, inflation ↑)',
  '現金': 'cash',
  '最難熬的組合：股（獲利降）債（利率高）雙殺——2022 年的劇本。現金不是賺，是輸得最少。':
    'The hardest combination to sit through: stocks hit by falling profits and bonds hit by high rates, both at once — the script of 2022. Cash does not make you money, it just loses the least.',
  '儀表板的樣子：PMI 下滑、CPI 仍高、殖利率曲線倒掛出現。':
    'What the dashboard looks like: PMI sliding, CPI still high, the yield curve starting to invert.',
  '衰退（成長↓ 通膨↓）': 'Recession (growth ↓, inflation ↓)',
  '債券': 'bonds',
  '央行轉向降息 → 債券價格上漲（第 3 週的反向關係）；股票則在等待預期翻轉。':
    'The central bank turns to cutting → bond prices rise (the inverse relationship from Week 3), while stocks wait for expectations to turn.',
  '儀表板的樣子：PMI < 50、藍燈、失業率飆升（落後確認）、央行開始降息。':
    'What the dashboard looks like: PMI < 50, the blue light, unemployment spiking (a lagging confirmation), the central bank starting to cut.',
  '為什麼只當心智模型：': 'Why it stays a mental model: ',
  '①象限邊界即時判斷極難（數據落後＋修正）②市場提前反映，等你確認、價格早走完一段 ③每輪例外都不少。正確用法是理解「為什麼此刻股債齊跌」這類現象——不是「現在該全壓原物料」。':
    '① the boundaries between quadrants are extremely hard to call in real time (the data lags and then gets revised); ② the market prices things in early, so by the time you are sure, most of the move is behind you; ③ every cycle throws up plenty of exceptions. The right use is to understand things like "why are stocks and bonds falling together right now" — not "I should go all in on commodities".',

  /* ── 股市與經濟的時間差 ── */
  '3. 股市與經濟的時間差：預期性':
    '3. The gap between the market and the economy: it runs on expectations',
  '延續上週的核心機制——': "Carrying on from last week's core mechanism — ",
  '股市是領先指標，它交易的是 6–12 個月後的預期':
    'the stock market is a leading indicator, and what it trades is expectations 6–12 months out',
  '還在惡化': ' still deepening',
  '時股市常已觸底回升（2009 年 3 月、2020 年 3 月都是失業狂飆中的底部）':
    ': the market has often already bottomed and turned up (March 2009 and March 2020 were both bottoms in the middle of surging unemployment)',
  '「經濟明明很差，股票憑什麼漲」的答案：股價比的是「比預期好還是壞」，以及降息把折現率壓下來':
    'The answer to "the economy is obviously terrible, so how can stocks rise": a share price is measured against expectations — better or worse than expected — and rate cuts push the discount rate down',
  '反過來，「數據史上最好」常伴隨市場頂部——所有好消息都已定價':
    'It works the other way too: "the best data on record" often shows up near a market top — all the good news is already in the price',

  /* ── 擇時的代價 ── */
  '4. 擇時的代價：這一課的重點結論':
    '4. What timing costs you: the key conclusion of this lesson',
  '輪動框架這麼誘人，為什麼本課程的答案仍是「廣泛配置＋紀律」？三個證據方向：':
    'If the rotation framework is this tempting, why is this course\'s answer still "broad allocation plus discipline"? Three lines of evidence:',
  '錯過最好的日子代價巨大': 'Missing the best days costs an enormous amount',
  '：多家機構的長期回測一致顯示——過去數十年若錯過市場':
    ": long-run backtests from several institutions all agree — over the past few decades, if you missed the market's ",
  '表現最好的 10 個交易日': '10 best trading days',
  '，總報酬大約腰斬；錯過 20–30 天，可能所剩無幾。而':
    ', your total return was roughly halved; miss 20–30 days and there may be almost nothing left. And ',
  '最好的日子高度集中在最恐慌的時段附近':
    'the best days cluster tightly around the most panicked stretches',
  '（大跌後的報復性反彈）——擇時者恰好最容易在那時空手。練習 B 會請你查原始資料驗證量級':
    ' (the violent bounces right after a crash) — which is exactly when a market timer is most likely to be sitting in cash. Exercise B will ask you to check the original data and verify the order of magnitude',
  '專業機構的成績單': "The professionals' report card",
  '：SPIVA 年度報告長期顯示，10–15 年期絕大多數主動基金（含可以自由擇時的）落後其基準指數':
    ': the annual SPIVA scorecards have shown for years that over 10–15 years the vast majority of active funds — including the ones free to time the market — lag their benchmark index',
  '雙重正確的門檻': 'The bar of being right twice',
  '：擇時要對': ': timing means being right ',
  '兩次': 'twice',
  '（賣對頂、買回底）——拉下面的計算器感受一下':
    ' (sell at the top, buy back at the bottom) — drag the calculator below to get a feel for it',

  /* ── 雙重正確計算器 ── */
  '雙重正確計算器': 'The right-twice calculator',
  '假設你單次判斷的勝率是——': 'Suppose your hit rate on a single call is —',
  '單次判斷勝率': 'Hit rate on one call',
  '賣對頂部': 'Sell right at the top',
  '買回底部': 'Buy back at the bottom',
  '兩次都對': 'Right both times',
  '<b>兩次都對的機率只剩': '<b>The odds of getting both right drop to just',
  '%</b>——比丟硬幣還差，而且每次進出還要付第 10 週的過路費。這就是「擇時要雙重正確」的門檻。':
    '%</b> — worse than a coin flip, and every trip in and out still pays the tolls from Week 10. That is the bar that "you have to be right twice" sets.',
  '就算單次高達': 'Even if a single call is as good as',
  '%（多數專業者達不到），兩次連對也只有 <b>':
    '% (which most professionals never reach), being right twice in a row is still only <b>',
  '%</b>——再扣掉過路費與情緒成本，優勢所剩無幾。':
    '%</b> — and once you subtract the tolls and the emotional cost, there is almost no edge left.',
  '結論的精確表述': 'The conclusion, stated precisely',
  '不是「循環知識無用」，而是——':
    'It is not that knowing the cycle is useless. It is that ',
  '循環知識用來調整心態與體質（預備金、配置比例、再平衡紀律），不是用來進出場':
    'cycle knowledge is for adjusting your mindset and your finances — the emergency fund, the allocation weights, the rebalancing discipline — not for getting in and out',
  '。藍燈時敢繼續執行、紅燈時不加碼槓桿，就是循環知識的全部變現方式。':
    '. Having the nerve to keep going when the light is blue, and not piling on leverage when it is red — that is the whole of how cycle knowledge pays off.',

  /* ── 闢謠 ── */
  '5. 常見誤解闢謠': '5. Three things people get wrong',
  '「這次不一樣」': '"This time is different"',
  '四個字被 Templeton 稱為投資中最昂貴的話；循環的':
    'Templeton called those four words the most expensive in investing. The ',
  '驅動': 'driver',
  '每次不同，人性（貪婪→恐慌）的循環從未缺席。':
    ' changes every cycle, but the cycle of human nature — greed → panic — has never once been absent.',
  '「等回檔再買」': '"I will buy on the next dip"',
  '最常見的隱形擇時；回檔真來時，理由（壞消息）會讓你想等「更低」。解法是機械化（定期定額、再平衡），Q2 詳談。':
    'The most common form of hidden market timing. When the dip actually arrives, the reason for it — bad news — is what makes you want to wait for "even lower". The fix is to mechanise it (fixed regular contributions, rebalancing); more on that in Q2.',
  '「輪動圖顯示衰退期買債券穩賺」':
    '"The rotation chart says buying bonds in a recession is a sure thing"',
  '2022 就是反例：通膨型趨緩中股債齊跌，「股債蹺蹺板」不是物理定律。':
    '2022 is the counter-example: in an inflation-driven slowdown, stocks and bonds fell together. The "stock-bond seesaw" is not a law of physics.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '50 分': '50 min',
  'Howard Marks《掌握市場週期》選章':
    'Howard Marks, Mastering the Market Cycle — selected chapters',
  '讀「週期的本質」與「鐘擺」相關章節——核心：你無法預測，但可以':
    'Read the chapters on the nature of cycles and on the pendulum. The core point: you cannot forecast, but you can ',
  '知道自己站在鐘擺的哪一段': 'know which part of the pendulum swing you are standing in',
  '30 分': '30 min',
  'SPIVA 最新年度報告 ↗': 'The latest SPIVA annual scorecard ↗',
  '只看兩張表：美國與亞太市場的「10 年期落後基準比例」——把數字抄進筆記。':
    'Look at just two tables — the share of funds underperforming their benchmark over 10 years, for the US and for Asia-Pacific. Copy the numbers into your notes.',
  '20 分': '20 min',
  '標準定義。': 'The standard definitions.',
  '選讀': 'Optional',
  'J.P. Morgan《Guide to the Markets》最新版':
    'J.P. Morgan, Guide to the Markets — latest edition',
  '搜尋其中 "missing the best days" 那一頁——練習 B 的原始資料。':
    'Find the "missing the best days" page in it — the source data for Exercise B.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '用兩次衰退檢驗框架': 'Test the framework against two recessions',
  '任務 A｜歷史檢驗（35 分鐘）': 'Task A | Historical check (35 minutes)',
  '對 2008（金融海嘯）與 2020（疫情）兩次衰退，各查：':
    'For each of the two recessions — 2008 (the financial crisis) and 2020 (the pandemic) — look up:',
  '台股（加權指數）從高點到低點的跌幅與月份':
    'How far the Taiwan market (the TAIEX) fell from peak to trough, and in which months',
  '低點出現時，「經濟數據」（失業率／GDP）當時是在惡化還是好轉？（驗證「股市領先」）':
    'When the low came, were the economic numbers (unemployment, GDP) still getting worse or already improving? (This is the test of "the market leads".)',
  '低點後 12 個月台股的漲幅':
    'How much the Taiwan market rose in the 12 months after the low',
  '寫 200 字：兩次衰退中，「等經濟數據確認好轉再進場」的人錯過了什麼？':
    'Write 200 words: in each of those recessions, what did someone who waited for the data to confirm a recovery miss?',
  '資料來源：台灣證交所歷史指數、FRED、或 Goodinfo 的指數歷史頁。':
    "Sources: the TWSE historical index data, FRED, or Goodinfo's index history pages.",
  '任務 B｜擇時代價查證（15 分鐘）': 'Task B | Verify what timing costs (15 minutes)',
  '找到任一機構的「錯過最好 N 天」研究原始圖表（J.P. Morgan、Fidelity 等皆有公開版本），把「全程持有 vs 錯過最好 10 天」的具體數字抄進筆記，註明來源與統計期間。':
    'Find the original chart from any institution\'s "missing the best N days" study (J.P. Morgan, Fidelity and others all publish one), copy the specific numbers for "stayed fully invested vs missed the 10 best days" into your notes, and record the source and the period covered. ',
  '這是「數據紀律」的練習：講義給量級，你負責找原始出處。':
    'This is an exercise in data discipline: the notes give you the order of magnitude, you find the primary source.',
  '驗收標準：': 'What counts as done: ',
  '兩次衰退的「股市低點 vs 數據低點」時間差證據整理完成；「錯過最好 10 天」有原始出處與統計期間。':
    'the evidence on the lag between the market low and the data low is written up for both recessions, and "missing the 10 best days" has a primary source and a stated period.',
  '自我檢核': 'Check yourself',
  '兩次衰退的時間差證據（股市低點 vs 數據低點）整理完成':
    'The lag evidence for both recessions (market low vs data low) is written up',
  '「錯過最好 10 天」的原始資料找到並註明出處':
    'You found the original data for "missing the 10 best days" and noted the source',
  '200 字結論寫完': 'The 200-word conclusion is written',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then expand to check)',
  '2022 年為什麼「衰退買債券」的劇本失靈？':
    'Why did the "buy bonds in a recession" script fail in 2022?',
  '→ 2022 是': '→ 2022 was an ',
  '通膨驅動': 'inflation-driven',
  '的趨緩：央行為壓通膨暴力升息 → 利率上升同時壓垮股票估值':
    ' slowdown: central banks hiked violently to crush inflation → rising rates flattened equity valuations ',
  '與': 'and',
  '債券價格（第 3 週的反向關係），股債同跌；「衰退買債」的前提是「衰退伴隨降息」，當年降息還遠。':
    ' bond prices alike (the inverse relationship from Week 3), so stocks and bonds fell together. "Buy bonds in a recession" assumes the recession comes with rate cuts — and in 2022 the cuts were still a long way off.',
  '股市在衰退「數據最差」之前觸底——用預期機制解釋。':
    'In a recession the market bottoms before the data hits its worst — explain that with the expectations mechanism.',
  '→ 股價＝未來現金流的折現。當市場判斷「最壞的情況已可估計」且央行開始救市（降息、QE），':
    '→ A share price is the discounted value of future cash flows. Once the market decides the worst case can at least be estimated, and the central bank starts firefighting (rate cuts, QE), ',
  '預期': 'expectations',
  '由「未知的壞」轉為「已知的壞＋將來的好」，價格就先回升——即使當下數據仍在惡化。':
    ' shift from "unknown bad" to "known bad plus good ahead", and prices turn up first — even while the data in front of you is still getting worse.',
  '循環知識對長期投資人的正確用途是什麼？（一句話）':
    'What is the right use of cycle knowledge for a long-term investor? (One sentence.)',
  '定位與備戰，不是預測與進出':
    'Locating yourself and getting prepared, not forecasting and trading',
  '（調整預備金、維持配置紀律、在極端區間檢查自己的貪婪與恐懼）。':
    ' (adjust the emergency fund, keep the allocation discipline, and check your own greed and fear when things get extreme).',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '經濟的四季': 'The four seasons of the economy',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（四季）': 'Opening (the four seasons)',
  '「經濟像四季：春天復甦、夏天火熱、秋天轉涼、冬天衰退。差別是——':
    '"The economy runs on four seasons: recovery in spring, heat in summer, cooling in autumn, recession in winter. The difference is that ',
  '經濟的四季不照日曆走': "the economy's seasons do not follow the calendar",
  '，有時夏天特別長，有時直接從夏天跳到冬天（2020）。」':
    ' — sometimes summer runs very long, and sometimes it jumps straight from summer to winter (2020)."',
  '核心比喻＋反直覺': 'Core metaphor, plus the counter-intuitive part',
  '「最奇怪的是：': '"The strangest thing is this: ',
  '股市的春天，總是在經濟的隆冬裡開始':
    "the market's spring always begins in the depth of the economy's winter",
  '。2020 年 3 月新聞最恐怖的時候，就是股市的最低點——因為股價買的是『明年』，不是『今天』。所以等『新聞變好才買』的人，永遠買在比較貴的地方。」':
    '. March 2020, when the news was at its most frightening, was the market\'s lowest point — because a share price buys \'next year\', not \'today\'. So anyone who waits for the news to get better always ends up buying somewhere more expensive."',
  '互動：擲硬幣': 'Interaction: flip a coin',
  '「假設你猜頂部有六成把握、猜底部也有六成——連續猜對兩次的機率是多少？」（36%——比丟硬幣還差。可以打開上面的計算器拉給對方看。）「所以我們家的策略不是猜，是':
    '"Say you are 60% sure you can call the top, and 60% sure you can call the bottom — what are the odds of getting both right in a row?" (36% — worse than a coin flip. Open the calculator above and drag it for them.) "So the strategy in this family is not to guess, it is ',
  '留在場上＋壞天氣不逃': 'stay in the market, and do not run when the weather turns',
  '收尾（連回全季）': 'Closing (tying the whole quarter together)',
  '「這 12 週我們學了：錢會長大（複利）、也會縮水（通膨）、有地心引力（利率）、公司有三張報表、經濟有四季。下次我會拿一家真的公司，20 分鐘做一次完整健檢給你看。」':
    '"Over these 12 weeks we have learned that money grows (compounding) and shrinks (inflation), that it has gravity (interest rates), that a company has three financial statements, and that the economy has four seasons. Next time I will take a real company and run a full health check on it in 20 minutes, in front of you."',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那大跌的時候不會怕嗎？」': '"But aren\'t you scared when it crashes?"',
  '「會，所以才要事先寫好規則（預備金、比例）——規則是給恐慌時的自己的信。」':
    '"Yes — which is exactly why you write the rules down beforehand (emergency fund, allocation weights). The rules are a letter to your panicking self."',
  '「你怎麼知道低點到了？」': '"How do you know when the bottom is in?"',
  '「不知道，沒有人知道。我們賺的是『一直在場』的錢，不是『猜中低點』的錢。」':
    '"I don\'t. Nobody does. The money we make comes from always being in the market, not from calling the bottom."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能畫出四階段循環與各階段的儀表板特徵':
    'You can draw the four-phase cycle and what the dashboard looks like in each phase',
  '能解釋投資時鐘的邏輯與它不能當操作指南的三個理由':
    'You can explain the logic of the investment clock and the three reasons it is not a playbook',
  '兩次衰退檢驗＋擇時代價查證完成':
    'Both recession checks and the timing-cost verification are done',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 12 週完成——Q1 知識篇收官。下週見：20 分鐘財報健檢 Capstone。':
    '🎓 Week 12 done — that closes the knowledge half of Q1. Next up: the 20-minute financial health check capstone.',
  '下週預告 · Week 13：Q1 Capstone——20 分鐘財報健檢':
    'Next week · Week 13: the Q1 capstone — a 20-minute financial health check',
  '——Q1 知識篇到此收官。下週是期末考：選一家沒分析過的台股公司，限時 20 分鐘跑完財報健檢。工具都在手上了：利潤率瀑布、體質比率、三線表、紅旗清單、杜邦拆解。':
    ' — that is the end of the knowledge half of Q1. Next week is the final exam: pick a Taiwanese company you have never analysed and run a full financial health check inside 20 minutes. You already have every tool you need — the margin waterfall, the health ratios, the three-line table, the red-flag list, the DuPont breakdown.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：總經指標判讀': 'Previous week: reading the macro indicators',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
