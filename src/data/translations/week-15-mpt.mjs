/*
 * 給家人的投資課 Week 15：現代投資組合理論（MPT）入門 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-15-mpt.html
 *
 * 沿用 week-01 的慣例（單位進標籤、行內標記邊界留半形空白、
 * 專有名詞用原文官方名、語域保持家庭教材的口語溫度）。
 *
 * 本週的特別處理：
 *
 * ⚠ 「檔」（持股檔數）比照 week-01 的「萬」——**值不動，單位進標籤**。
 *   滑桿輸出是 JS 拼的（`n + " 檔"`），英文沒有一個能同時吃 1 與 100 的
 *   量詞（"1 stocks" 或 "1 holdings" 都不像話），所以：
 *       值的後綴「檔」→ 空字串｜標籤 → "Number of holdings N"
 *   句子裡的「N 檔」照常翻成 holdings（"20 holdings: volatility about…"），
 *   單複數在那個語境自然成立。
 *
 * ⚠ 「非系統性風險」「系統性風險」兩條 key 各自出現在兩處：清單項開頭
 *   （<li><strong>…</strong>）與句中（→ 50 檔台股消除的是<strong>…</strong>）。
 *   一條 key 只能有一種大小寫，選了句中的小寫——清單項以小寫開頭讀起來
 *   像詞條定義，尚可；反過來把句中寫成大寫會是明顯的錯字。
 *
 * ⚠ 已知限制（非本對照表可處理）：<strong> 之後單獨成為文字節點的全形
 *   「：」不含漢字，抽取器抓不到，英文頁上會保留全形冒號。
 *
 * 外國人名與書名一律用原文：Markowitz、Howard Marks、
 * 《漫步華爾街》= A Random Walk Down Wall Street。KEEP 因此是空的。
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
  '給家人的投資課 · Q2 投資人季 · Week 15':
    "Family Investing Course · Q2 The Investor's Quarter · Week 15",
  '現代投資組合理論（MPT）入門': 'Modern Portfolio Theory (MPT): a first look',
  '上週的配置是「該擺多少」，本週是它背後的數學——為什麼分散是投資裡唯一的免費午餐。':
    'Last week\'s allocation was "how much goes where"; this week is the maths underneath it — why diversification is the only free lunch in investing.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisite: ',
  '第 14 週': 'Week 14',
  '52 週 · 第 15 週': '52 weeks · Week 15',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  'MPT 是 Q2 配置哲學的理論根、Q3 整季（Sharpe、因子、歸因）的語言基礎、以及 CAPM（Q4 週 42 算資金成本）的前身。':
    'MPT is the theoretical root of the Q2 allocation philosophy, the shared language of the whole of Q3 (Sharpe, factors, attribution), and the forerunner of CAPM (used in Q4, week 42, to work out the cost of capital).',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週家庭心理測試的結果——「100 萬變 60 萬」對方的第一個念頭是什麼？記下來了嗎？煮湯比喻（火／鍋蓋／那杯水）講通了嗎。':
    'Look back at the result of last week\'s family psychology test — when NT$1 million turned into NT$600,000, what was their first thought? Did you write it down? And did the soup metaphor (the flame, the lid, that glass of water) land?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '一個 100% 債券的組合（波動 6%），加入一成「更危險」的股票（波動 18%）——整體波動會怎樣？':
    'A 100% bond portfolio (volatility 6%) takes on one part in ten of "more dangerous" stocks (volatility 18%) — what happens to overall volatility?',
  '猜一個答案': 'Pick an answer',
  '升高一點': 'Rises a little',
  '幾乎不變': 'Barely changes',
  '反而下降': 'Actually falls',
  '答對了——直覺上加「更危險」的東西該更危險，但只要兩者不同步（ρ 夠低），波動從 6% 降到約 5.69%、期望報酬還從 3% 升到 3.4%。這就是本週的主角：分散，唯一的免費午餐。':
    'Correct — intuition says that adding something "more dangerous" must make the whole thing more dangerous, but as long as the two do not move in step (ρ low enough), volatility falls from 6% to about 5.69% while the expected return rises from 3% to 3.4%. That is this week\'s lead actor: diversification, the only free lunch there is.',
  '直覺的答案——但只要股債走不同的路（相關性夠低），波動反而從 6% 降到約 5.69%、期望報酬還從 3% 升到 3.4%。加一點「危險資產」讓整體更安全——這就是本週的主角：分散，唯一的免費午餐。':
    'The intuitive answer — but as long as stocks and bonds walk different roads (correlation low enough), volatility actually falls from 6% to about 5.69% while the expected return rises from 3% to 3.4%. A little of the "dangerous asset" makes the whole thing safer — which is this week\'s lead actor: diversification, the only free lunch there is.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 用兩個數字描述一個資產': '1. Describing an asset with two numbers',
  'MPT（Markowitz, 1952）的起手式：任何資產壓縮成兩個數字——':
    'The opening move of MPT (Markowitz, 1952): squeeze any asset into two numbers — ',
  '期望報酬 E(r)': 'expected return E(r)',
  '（平均賺多少）與': ' (how much it earns on average) and ',
  '標準差 σ': 'standard deviation σ',
  '（波動多大）。本週沿用上週的量級：':
    " (how much it swings). This week reuses last week's magnitudes:",
  '股票：E ＝ 7%、σ ＝ 18%': 'Stocks: E = 7%, σ = 18%',
  '債券：E ＝ 3%、σ ＝ 6%': 'Bonds: E = 3%, σ = 6%',
  'σ 的直覺：報酬大約 2/3 的年份落在「平均 ± 1σ」內——股票即 −11% ～ +25%，這就是「正常的一年也可能是負的」的數學表達。':
    'The intuition for σ: in roughly two-thirds of years the return lands inside "average ± 1σ" — for stocks that means −11% to +25%. This is the mathematical way of saying that a perfectly normal year can still be a losing one.',

  '2. 組合的魔術：報酬是加權平均，風險不是':
    '2. The portfolio trick: return is a weighted average, risk is not',
  '兩資產組合（權重 w 與 1−w）：': 'A two-asset portfolio (weights w and 1−w):',
  '報酬：乖乖加權平均，沒有魔術。':
    'Return: an obedient weighted average, no magic involved.',
  '風險：': 'Risk: ',
  '有第三項！': 'there is a third term!',
  'ρ（相關係數，−1～+1）就是整個 MPT 的靈魂——兩資產不完全同步（ρ&lt;1）時，組合波動':
    ' ρ (the correlation coefficient, −1 to +1) is the soul of the whole of MPT. When two assets are not perfectly in step (ρ&lt;1), portfolio volatility is ',
  '小於': 'less than',
  '加權平均，互相抵消的部分就是免費午餐。':
    ' the weighted average, and the part that cancels out is the free lunch.',

  /* ── 效率前緣繪圖器 ── */
  '3. 親手拉一次：效率前緣繪圖器': '3. Pull the levers yourself: the efficient-frontier plotter',
  '下面的曲線是「股票權重從 0% 拉到 100%」的所有組合。':
    'The curve below is every portfolio you get as the stock weight runs from 0% to 100%. ',
  '拉 ρ 看曲線怎麼彎、拉權重看你的點在哪':
    'Drag ρ to see how the curve bends, drag the weight to see where your point lands',
  '效率前緣繪圖器（股 E7%/σ18% · 債 E3%/σ6%）':
    'Efficient-frontier plotter (stocks E7%/σ18% · bonds E3%/σ6%)',
  '相關係數 ρ': 'Correlation ρ',
  '相關係數': 'Correlation coefficient',
  '股票權重 w': 'Stock weight w',
  '股票權重': 'Stock weight',
  '風險報酬座標上的組合曲線': 'Portfolio curve on risk / return axes',
  '風險 σ（%）': 'Risk σ (%)',
  '期望報酬 E（%）': 'Expected return E (%)',
  '所有股債組合': 'Every stock / bond mix',
  '「風險＝加權平均」的假想線（ρ＝+1）':
    'The imaginary "risk = weighted average" line (ρ = +1)',
  '你的組合': 'Your portfolio',
  '最小波動點': 'Minimum-volatility point',
  '100% 股': '100% stocks',
  '100% 債': '100% bonds',
  '期望報酬 E(r': 'Expected return E(r',
  '組合波動 σ': 'Portfolio volatility σ',
  '加權平均波動': 'Weighted-average volatility',
  '免費午餐（省下的波動）': 'Free lunch (volatility saved)',
  '<b>ρ = +1：免費午餐消失。</b>曲線貼上虛線變成直線——完全同步的資產，放再多也沒有分散效果（快問快答 Q1）。':
    '<b>ρ = +1: the free lunch is gone.</b> The curve settles onto the dashed line and goes straight — perfectly synchronised assets give you no diversification however many you hold (quick question Q1).',
  '<b>ρ ≈ −1：教科書極限。</b>理論上可以把波動壓到接近 0——現實中找不到長期 ρ=−1 的資產對，但方向是對的：越不同步，省越多。':
    '<b>ρ ≈ −1: the textbook limit.</b> In theory you could press volatility down to nearly zero. No real pair of assets sustains ρ = −1 for long, but the direction is right: the less they move together, the more you save.',
  '<b>你正站在最小波動點（股': '<b>You are standing on the minimum-volatility point (stocks',
  '%）：</b>比 100% 債券更穩、報酬還更高——「加一點危險資產反而更安全」的那個點。':
    '%):</b> steadier than 100% bonds and higher-returning as well — the point where "a little of the dangerous asset actually makes you safer".',
  '同樣的期望報酬': 'Expected return',
  '%，波動': '%, volatility',
  '%——比「加權平均」少': '% — below the "weighted average" by',
  '個百分點。<b>什麼都沒犧牲，這就是免費午餐</b>；ρ 越低省越多。':
    'percentage points. <b>Nothing was sacrificed — this is the free lunch</b>; the lower ρ goes, the more you save.',
  '練習的驗證點就在預設值：ρ=+0.3、股 60%——E 應為 5.40%、σ 應為 11.75%。數字為講義量級假設，非預測。':
    'The exercise checkpoint sits at the default setting: ρ=+0.3, stocks 60% — E should be 5.40% and σ should be 11.75%. The numbers are teaching-scale assumptions, not forecasts.',

  '免費午餐的極致示範': 'The free lunch at its most extreme',
  '：把 ρ 調到 0、權重拉到 10%——純債券組合（σ＝6%）加入一成股票後，':
    ': set ρ to 0 and the weight to 10% — once a pure bond portfolio (σ = 6%) takes on one part in ten of stocks, ',
  '波動降到 5.69%、期望報酬還從 3% 升到 3.4%':
    'volatility drops to 5.69% and the expected return climbs from 3% to 3.4%',
  '。對「一點股票都不敢碰」的極保守者，這是最有力的一課：適量的「危險資產」反而讓整體更安全——因為它跟債券走不同的路。':
    '. For the ultra-conservative who dare not touch a single share, this is the most persuasive lesson there is: a measured dose of the "dangerous asset" makes the whole safer, precisely because it walks a different road from bonds.',

  /* ── 效率前緣 ── */
  '4. 效率前緣：所有聰明組合的天際線':
    '4. The efficient frontier: the skyline of every sensible portfolio',
  '曲線上緣叫': 'The upper edge of the curve is the ',
  '效率前緣（efficient frontier）': 'efficient frontier',
  '：同樣風險下報酬最高的組合集合。三個判讀：':
    ': the set of portfolios with the highest return for a given level of risk. Three things to read off it:',
  '前緣': 'Portfolios ',
  '下方': 'below',
  '的組合都是輸家（同風險、較低報酬）——「全債券」通常就在前緣下方（第 3 節的原因）':
    ' the frontier are all losers (same risk, lower return) — "all bonds" usually sits below the frontier, for the reason in section 3',
  '前緣上': 'On the frontier there is ',
  '沒有唯一最佳點': 'no single best point',
  '——選哪個點由你的風險承受度決定（接回 W14 的三要素）':
    ' — which point you take is decided by your risk tolerance (back to the three factors from W14)',
  '加入更多低相關資產（全球股票、不同天期債券），整條前緣':
    'Add more low-correlation assets (global equities, bonds of different maturities) and the whole frontier ',
  '往左上推': 'pushes up and to the left',
  '——這就是 W14「多元分散」的數學版':
    ' — this is the mathematical version of "diversify widely" from W14',

  /* ── 分散的極限 ── */
  '5. 分散的極限：系統性風險': '5. The limit of diversification: systematic risk',
  '把股票從 1 檔加到 20 檔，波動快速下降；加到 100 檔，幾乎不再降。因為風險有兩層：':
    'Go from 1 holding to 20 and volatility drops fast; go on to 100 and it barely drops at all. Because risk comes in two layers:',
  '非系統性風險': 'unsystematic risk',
  '（個別公司的倒楣事）：可以分散掉，市場':
    " (one company's own misfortunes): can be diversified away, and the market does ",
  '不會': 'not',
  '為它付你報酬（因為免費就能消除）':
    ' pay you for carrying it (because you can be rid of it for free)',
  '系統性風險': 'systematic risk',
  '（整個市場一起跌：衰退、升息、戰爭）：分散':
    ' (the whole market falling together: recession, rate rises, war): diversification ',
  '消不掉': 'cannot remove it',
  '，這才是股票長期報酬的來源（承擔它的補償）':
    ', and this is where the long-run return on stocks comes from — the compensation for bearing it',

  /* ── 幾檔才算分散 ── */
  '幾檔才算分散？': 'How many holdings count as diversified?',
  /* 值是裸數字（單位後綴已剝掉），單位在標籤——見檔頭 */
  '持股檔數 N': 'Number of holdings N',
  '持股檔數': 'Number of holdings',
  '1 檔': '1',
  '檔': '',
  '系統性（消不掉）': 'Systematic (cannot be removed)',
  '系統性': 'Systematic',
  '%（消不掉）': '% (cannot be removed)',
  '非系統性': 'Unsystematic',
  '<b>1 檔：波動約': '<b>1 holding: volatility about',
  '%</b>——市場的風險加上「這一家公司的所有倒楣事」全押在一起。':
    "%</b> — the market's risk plus every piece of bad luck this one company can suffer, all riding on the same bet.",
  '檔：波動約': 'holdings: volatility about',
  '%</b>——下降得很快，每加一檔都有感。':
    '%</b> — falling fast, and every extra holding still makes a difference.',
  '%</b>——距離 16% 的地板只剩': '%</b> — only',
  'pt。15–20 檔不同產業已消除大部分非系統性風險。':
    'pt above the 16% floor. Fifteen to twenty holdings across different industries already remove most unsystematic risk.',
  '%</b>——曲線已經躺平：再加檔數幾乎不再降，剩下的是分散消不掉的系統性風險（它才是長期報酬的來源）。':
    '%</b> — the curve has flattened: adding more names barely lowers it now, and what remains is the systematic risk diversification cannot touch (which is exactly what long-run returns pay for).',
  '量級示意模型：市場層波動 16%、個股獨有波動 25%，等權重、獨有風險互相獨立（σ² = 16² + 25²/N）。實務結論：15–20 檔不同產業已消除大部分非系統性風險——這是 W18 倉位管理與「ETF 一次到位」的理論根據。':
    'An order-of-magnitude model: market-level volatility 16%, single-stock idiosyncratic volatility 25%, equal weights, idiosyncratic risks independent of one another (σ² = 16² + 25²/N). The practical conclusion: 15–20 holdings across different industries already remove most unsystematic risk — this is the theoretical basis for position sizing in W18 and for "one ETF and you are done".',

  /* ── 侷限 ── */
  '6. MPT 的三個侷限（誠實面對）': '6. Three limits of MPT (faced honestly)',
  '輸入是歷史，未來會變': 'the inputs are history, and the future moves',
  '：E、σ、ρ 全是回頭看的估計；尤其 ρ——':
    ': E, σ and ρ are all backward-looking estimates, and ρ above all — ',
  '危機時相關性趨近 1': 'in a crisis correlations head towards 1',
  '（2008、2020 各資產齊跌），減震器在最需要時最弱（Q3 週 37 主題）':
    ' (in 2008 and 2020 everything fell together), so the shock absorber is weakest exactly when you need it most (the subject of Q3, week 37)',
  'σ 不等於風險的全部': 'σ is not the whole of risk',
  '：把「漲很多」和「跌很多」同等計為波動；Marks 的批評（W25）：真正的風險是本金永久損失':
    ': it scores "up a lot" and "down a lot" as equally volatile. Marks\' objection (W25): the real risk is the permanent loss of capital',
  '常態分布假設': 'the normal-distribution assumption',
  '：真實市場「肥尾」——極端事件遠比鐘形曲線預測的頻繁':
    ': real markets have fat tails — extreme events happen far more often than a bell curve predicts',
  '結論': 'Conclusion',
  'MPT 是': 'MPT is a ',
  '思考框架': 'framework for thinking',
  '（分散為什麼有效、風險怎麼組合）而非精密儀器；用它的直覺，不迷信它的小數點。':
    ' (why diversification works, how risks combine) rather than a precision instrument. Take its intuitions; do not worship its decimal places.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '60 分': '60 min',
  'MIT OCW 15.401 組合理論講次 ↗': 'MIT OCW 15.401, the portfolio theory lecture ↗',
  '學術版推導（Lecture: Portfolio Theory）；目標是看懂每個符號，不需背證明。':
    'The academic derivation (Lecture: Portfolio Theory). The goal is to follow every symbol, not to memorise the proof.',
  '20 分': '20 min',
  '選讀導論與結論——讀原典開頭那句精神：投資人該關心的是':
    "Read the introduction and the conclusion — the spirit of the original's opening line is that what an investor should care about is the ",
  '組合整體': 'portfolio as a whole',
  '，不是單一證券。': ', not any individual security.',
  '15 分': '15 min',
  '看圖補直覺——和上面的繪圖器對照。':
    'Charts to top up the intuition — read them against the plotter above.',
  '選讀': 'Optional',
  '《漫步華爾街》MPT 章節': 'A Random Walk Down Wall Street, the MPT chapters',
  '科普版再走一遍。': 'The same ground once more, in popular-science form.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '親手畫出效率前緣': 'Draw the efficient frontier with your own hands',
  '用試算表（延用 W1 複利表的檔案，開新分頁）：':
    'Use a spreadsheet (reuse the W1 compounding file and open a new tab):',
  '參數格：E_股=7%、σ_股=18%、E_債=3%、σ_債=6%、ρ（可切換）':
    'Parameter cells: E_stock=7%, σ_stock=18%, E_bond=3%, σ_bond=6%, ρ (switchable)',
  '權重欄：股票 0%、10%、…、100%（11 列）':
    'Weight column: stocks 0%, 10%, …, 100% (11 rows)',
  '每列計算 E(r': 'For each row compute E(r',
  ') 與 σ': ') and σ',
  '（用講義公式；': ' (use the formulas from the notes; ',
  '驗證': 'check',
  '：ρ=0.3、60/40 那列應為 E=5.4%、σ=11.75%——和上面繪圖器的預設值對照）':
    ": the ρ=0.3, 60/40 row should come out at E=5.4% and σ=11.75% — compare it with the plotter's defaults above)",
  '畫散布圖（X=σ、Y=E），分別把 ρ 設 0.3／0／−0.3 看曲線怎麼彎':
    'Plot a scatter chart (X=σ, Y=E) and set ρ to 0.3 / 0 / −0.3 in turn to watch the curve bend',
  '找出': 'Find',
  '：ρ=0 時，哪個權重的 σ 最低？（應在股票 10% 附近——親眼看到「加股票降風險」）':
    ': with ρ=0, which weight gives the lowest σ? (It should be near 10% stocks — "adding stocks lowers risk" with your own eyes)',
  '寫 100 字：我的 W14 目標配置落在曲線的哪一段？我對它的位置滿意嗎？':
    'Write 100 words: which stretch of the curve does my W14 target allocation sit on, and am I happy with where it sits?',
  '驗收標準：': 'What counts as done: ',
  '驗證點（5.4%、11.75%）通過；三條 ρ 曲線畫出；找到 ρ=0 的最小波動點。':
    'The checkpoint (5.4%, 11.75%) passes, all three ρ curves are drawn, and you found the minimum-volatility point at ρ=0.',
  '自我檢核': 'Check yourself',
  '驗證點（5.4%、11.75%）通過': 'The checkpoint (5.4%, 11.75%) passes',
  '三條曲線畫出且能解釋 ρ 越低越彎':
    'All three curves are drawn and you can explain why a lower ρ bends them more',
  '找到 ρ=0 的最小波動點': 'You found the minimum-volatility point at ρ=0',

  /* ── 快問快答 ── */
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '兩資產 ρ＝+1 時，組合波動是什麼？免費午餐還在嗎？':
    'When two assets have ρ = +1, what is the portfolio volatility? Is the free lunch still there?',
  '＝ w·σ₁＋(1−w)·σ₂（恰好是加權平均）——第三項不再打折，':
    ' = w·σ₁ + (1−w)·σ₂, exactly the weighted average — the third term stops giving a discount, so the ',
  '免費午餐消失': 'free lunch disappears',
  '；完全同步的資產放再多也沒有分散效果。把繪圖器的 ρ 拉到 +1 看：曲線變成直線、貼上虛線。':
    '. Perfectly synchronised assets give no diversification however many of them you hold. Drag the plotter\'s ρ to +1 and look: the curve straightens and settles onto the dashed line.',
  '為什麼市場不補償非系統性風險？':
    'Why does the market not pay you for unsystematic risk?',
  '→ 因為它': '→ Because you can ',
  '免費就能消除': 'be rid of it for free',
  '（多買幾檔即可）——市場只補償「無法逃避」的承擔；不肯分散而承擔個股風險，是自願不領免費午餐，市場不會另發薪水。':
    ' (just buy a few more names) — the market only pays for what you cannot escape. Carrying single-stock risk because you refuse to diversify is turning down a free lunch of your own accord, and the market does not write you an extra pay cheque for that.',
  '2008 年「股債分散」有用、「股票內部分散 50 檔」沒用——用兩層風險解釋。':
    'In 2008 "stock and bond diversification" helped, while "50 different stocks" did not — explain it with the two layers of risk.',
  '→ 50 檔台股消除的是': '→ Fifty Taiwanese stocks remove ',
  '（個別公司），但 2008 是': ' (individual companies), but 2008 was ',
  '（整個市場）——只有跨資產類別（股 vs 債）的分散碰得到系統性層次；而且即使如此，危機中 ρ 上升也會讓效果打折。':
    ' (the whole market) — only diversification across asset classes (stocks vs bonds) reaches the systematic layer, and even then a rising ρ during the crisis takes some of the benefit back.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '雨傘店與冰淇淋店': 'The umbrella shop and the ice-cream shop',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（雨傘與冰淇淋）': 'Opening (umbrellas and ice cream)',
  '「一個小鎮只有兩家店：雨傘店和冰淇淋店。你只能投資一家、或各投一半——哪個選擇讓你':
    '"A small town has only two shops: an umbrella shop and an ice-cream shop. You may invest in one of them, or put half in each — which choice lets you ',
  '每年都睡得著': 'sleep soundly every year',
  '？」（下雨傘店賺、出太陽冰店賺——各一半的人旱澇保收。）':
    '?" (Rain and the umbrella shop earns; sun and the ice-cream shop earns — whoever holds half of each gets paid either way.)',
  '核心觀念': 'The core idea',
  '「這就是分散的祕密：': '"This is the secret of diversification: ',
  '不是選更多股票，是選走不同路的資產':
    'it is not about picking more stocks, it is about picking assets that walk different roads',
  '。數學上還有個神奇結果——全部買最安全的債券，再加一成股票，整體反而':
    '. And the maths has a small miracle in store: buy nothing but the safest bonds, add one part in ten of stocks, and the whole thing actually gets ',
  '更穩': 'steadier',
  '，因為它們常常一個跌時另一個沒跌。」':
    ', because very often when one of them falls the other does not."',
  '互動：家庭資產健檢': 'Interaction: a family asset check-up',
  '「我們家的資產：房子、薪水、存款、股票——哪些其實是『同一家店』？」（引導發現：幾乎全是「台灣景氣」這家店——連回上週的全球化配置。）':
    '"Our family\'s assets — the house, our salaries, savings, stocks — which of them are really the same shop?" (Steer them to the discovery: nearly all of it is one shop called "the Taiwanese economy", which loops back to last week\'s case for going global.)',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那多買幾檔台股就分散了？」':
    '"So buying a few more Taiwanese stocks counts as diversifying?"',
  '「50 檔台股在海嘯來時一起跌——分散要跨『會不會一起跌』的界線（資產類別、國家），不是湊數量。」':
    '"Fifty Taiwanese stocks all fall together when the tsunami arrives. Diversifying means crossing the line of \'do these fall together?\' — asset classes, countries — not making up the numbers."',
  '「聽起來分散就無敵了？」': '"So diversification makes you invincible?"',
  '誠實講侷限：「真正的大風暴裡大家會一起跌（2008）；分散讓你跌得淺、活得下來，不是不會跌。」':
    'Be honest about the limits: "in a real storm everything falls together (2008). Diversification means you fall less far and live through it, not that you do not fall."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能寫出兩資產組合的 E 與 σ 公式並解釋第三項':
    'You can write the E and σ formulas for a two-asset portfolio and explain the third term',
  '效率前緣試算表完成（三條 ρ 曲線）':
    'The efficient-frontier spreadsheet is finished (all three ρ curves)',
  '能說出 MPT 三個侷限': 'You can name the three limits of MPT',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 15 週完成——免費午餐已領。下週見：指數化投資與成本侵蝕。':
    '🎓 Week 15 done — free lunch collected. Next up: index investing and the erosion of costs.',
  '下週預告 · Week 16：指數化投資與成本侵蝕':
    'Next week · Week 16: index investing and the erosion of costs',
  '——MPT 說「買組合整體」，下週看實務上最便宜的一次到位工具：為什麼「買下整個市場＋壓低成本」是連專業者都難以打敗的預設答案。':
    ' — MPT says "buy the portfolio as a whole"; next week looks at the cheapest one-stop way of doing it in practice, and why "own the whole market and keep costs down" is the default answer even professionals struggle to beat.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：資產配置': 'Previous week: asset allocation',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
