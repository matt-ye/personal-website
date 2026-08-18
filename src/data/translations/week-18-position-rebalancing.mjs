/*
 * 給家人的投資課 Week 18：倉位管理與再平衡 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-18-position-rebalancing.html
 *
 * 沿用 week-01 的慣例。本週特有的幾件事：
 *
 * ⚠ 金額單位「萬」——值不動，單位進標籤（漂移模擬器）
 *   統計卡的數字是 JS 算的（`tot/10000`、`trade/10000` 再接 `<small> 萬</small>`），
 *   所以：值的後綴「萬」→ 空字串；卡片標籤補 (NT$10k)。
 *       一年後總資產 → "Total after one year (NT$10k)"
 *       再平衡：賣股買債 → "Rebalance: sell stocks, buy bonds (NT$10k)"
 *   散文裡的金額照常換算：100 萬 → NT$1 million、7.98 萬 → NT$79,800、
 *   98 萬 → NT$980,000。
 *
 * ⚠ dverdict 那句是「句子中間插一個以萬為單位的數字」——既不是統計卡標籤、
 *   也不能重算，(NT$10k) 塞進句子又不像人話。改成把倍率寫在數字後面：
 *       …賣 " + 7.98 + " 萬股票轉入債券 → "…sell 7.98 × NT$10k of stocks…"
 *   這是三種爛選項裡最不爛的一個：算術沒動、單位明確、句子還讀得下去。
 *
 * ⚠ KEEP：綠角財經筆記
 *   這是台灣財經部落格，網址雖然是 greenhornfinancefootnote，但站方沒有正式
 *   宣告的英文名（URL slug 不等於官方英文名）。依「查不到就保留中文原字」
 *   處理，不音譯、不編造。
 *   同一條的「站內搜『再平衡』」則譯成 search for "rebalancing"——把「再平衡」
 *   放進 KEEP 會讓守衛對整份檔案的這個詞失明，得不償失。
 *
 * ⚠ 抽取器抓不到、因此英文頁會留下的中文標點（不在對照表職權內）：
 *   ① 前置 chip 的分隔號「、」（第 14、15、17 週）
 *   ② 互動段落結尾的「。」」——它是獨立文字節點，整段沒有漢字所以沒被抽出
 *
 * ⚠ 台灣公司用官方英文名，都查得到，所以不列 KEEP：
 *   台積電 = TSMC｜聯發科 = MediaTek｜聯電 = UMC｜日月光 = ASE｜瑞昱 = Realtek
 *
 * 語域：果園修枝、體重、給恐慌的自己寫信——這些比喻是本週的骨架，
 *   英文要保住那個溫度，不要改寫成投資顧問的 rebalancing policy 說明。
 */

export const KEEP = ['綠角財經筆記'];
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
  '給家人的投資課 · Q2 投資人季 · Week 18':
    "Family Investing Course · Q2 The Investor's Quarter · Week 18",
  '倉位管理與再平衡': 'Position sizing and rebalancing',
  'Q2 配置系列收尾：單一標的放多少、漂移了怎麼拉回來——然後把一切寫成給恐慌時自己的一封信。':
    'The end of the Q2 allocation run: how much goes into any one holding, how to pull the drift back — and then writing it all down as a letter to your panicking self.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 14': 'weeks 14',
  '17 週': '17',
  '52 週 · 第 18 週': '52 weeks · Week 18',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '專欄 #8 四個決定的最後兩個（倉位、再平衡）。本週產出的 IPS 是 Q3 模擬組合（W27）的憲法。':
    'The last two of the four decisions in column #8 (position sizing and rebalancing). The IPS you write this week is the constitution for the Q3 paper portfolio (W27).',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週「一次進 vs 分批進」的討論——中獎難題對方選了哪邊、「分期付款的勇氣」講通了嗎。':
    'Look back at last week\'s "all at once vs in instalments" discussion — which side did they take on the lottery-win problem, and did "the courage of paying in instalments" land?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '100 萬的 70/30 股債組合，一年後股票 +40%、債券 +2%，你什麼都沒做——現在股票佔幾成？':
    'An NT$1 million 70/30 stock-and-bond portfolio. A year later stocks are up 40% and bonds up 2%, and you have done nothing — what share is in stocks now?',
  '猜一個答案': 'Pick an answer',
  '還是 70%，比例不會變': 'Still 70% — the ratio does not move',
  '約 73%': 'About 73%',
  '約 76%，組合悄悄變得更冒險':
    'About 76% — the portfolio has quietly become riskier',
  '答對了——股票變 98 萬、債券 30.6 萬，權重漂到 76.2%。你什麼都沒做，組合卻悄悄變得比你當初決定的更冒險。把它拉回來的動作，就是本週的主角：再平衡。':
    'Correct — stocks are now NT$980,000 and bonds NT$306,000, so the weight has drifted to 76.2%. You did nothing, and the portfolio quietly became riskier than the one you signed up for. Pulling it back is this week\'s subject: rebalancing.',
  '會變的——股票變 98 萬、債券 30.6 萬，權重漂到 76.2%（+6.2pp）。你什麼都沒做，組合卻悄悄變得比你當初決定的更冒險。把它拉回來的動作，就是本週的主角：再平衡。':
    'It does move — stocks are now NT$980,000 and bonds NT$306,000, so the weight has drifted to 76.2% (+6.2pp). You did nothing, and the portfolio quietly became riskier than the one you signed up for. Pulling it back is this week\'s subject: rebalancing.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',

  '1. 倉位管理：單一標的該放多少':
    '1. Position sizing: how much goes into any one holding',
  'W15 已給出理論答案的一半：': 'W15 already gave half the theoretical answer: ',
  '15–20 檔': '15–20 holdings',
  '不同產業的股票能消除大部分非系統性風險。倉位管理是把它變成規則：':
    ' spread across different industries removes most unsystematic risk. Position sizing turns that into rules:',
  '單一個股上限': 'A cap on any single stock',
  '：常見 5–10%。用「輸得起多少」倒推——若單一個股歸零，總資產損失可承受嗎？100 萬組合、個股上限 10% ＝ 單檔最多 10 萬 ＝ 最壞情況總資產 −10%':
    ': 5–10% is common. Work backwards from "how much can I afford to lose" — if one stock went to zero, could you live with the hit to your total assets? An NT$1 million portfolio with a 10% cap = at most NT$100,000 in any one name = a worst case of −10% on the whole pot',
  '個股 vs ETF 的分工': 'Dividing the work between single stocks and ETFs',
  '：核心用寬基 ETF 一次買到分散（W16），個股是「衛星」——只放在你真正有研究、有信念的少數標的，且合計設上限（如 ≤30%）':
    ': the core buys diversification in one move with a broad-based ETF (W16), and single stocks are "satellites" — only the handful you have genuinely researched and believe in, with a cap on the total (say ≤30%)',
  '相關性也要管': 'Correlation needs managing too',
  '：買了 5 檔「不同公司」但全是半導體，不是分散（W15：同產業一起跌）。上限要看「會不會一起垮」，不只看檔數':
    ': five "different companies" that are all semiconductors is not diversification (W15: the same industry falls together). A cap has to ask "would these go down together", not just count holdings',

  '集中 vs 分散的取捨（沒有標準答案，只有適配）':
    'Concentrated vs diversified (no right answer, only what fits you)',
  '集中（少數重倉）': 'Concentrated (a few large positions)',
  '分散（廣泛持有）': 'Diversified (holding broadly)',
  '報酬': 'Return',
  '對了報酬驚人': 'Spectacular when you get it right',
  '貼近市場平均': 'Close to the market average',
  '風險': 'Risk',
  '錯一個傷筋動骨': 'One mistake does real damage',
  '單一錯誤影響有限': 'Any single mistake stays contained',
  '要求': 'What it asks of you',
  '極深的研究＋極強的心臟': 'Very deep research and a very strong stomach',
  '紀律即可': 'Discipline, and that is all',
  '適合': 'Suits',
  '全職、有優勢的少數人': 'The few who do this full time and have a real edge',
  '幾乎所有人（含多數專業者，W16 SPIVA）':
    'Almost everyone, professionals included (W16, SPIVA)',
  '本課綱立場': 'Where this course stands',
  '：預設廣泛分散（核心 ETF）；集中是「證明自己有優勢後」才逐步、有限度地加碼的權利，不是起點。':
    ': broad diversification by default, through a core ETF. Concentration is a right you earn gradually and in limited size once you have shown you have an edge — it is not a starting point.',

  /* ── 漂移模擬器 ── */
  '2. 再平衡：把漂移的配置拉回來': '2. Rebalancing: pulling the drift back',
  '市場漲跌會讓配置偏離目標。':
    'Markets rise and fall, and your allocation drifts away from target. ',
  '拉動兩邊的年報酬，看你的 70/30 漂到哪、該搬多少錢回來':
    'Drag the annual return on each side, see where your 70/30 ends up, and how much has to move back',
  '漂移與再平衡模擬器（100 萬 · 目標 70/30）':
    'Drift and rebalancing simulator (NT$1 million · target 70/30)',
  '講義算例：股 +40%／債 +2%': 'Worked example: stocks +40% / bonds +2%',
  '崩盤年：股 −30%／債 +5%': 'Crash year: stocks −30% / bonds +5%',
  '平常年：股 +8%／債 +3%': 'Ordinary year: stocks +8% / bonds +3%',
  '股票年報酬': 'Annual stock return',
  '債券年報酬': 'Annual bond return',
  '股': 'Stocks',
  '債': 'Bonds',
  '▲ 實際權重（色塊）vs 目標 70%（虛線）':
    '▲ Actual weights (blocks) vs the 70% target (dashed line)',
  /* 統計卡：值是 JS 算出來的「萬」，所以單位剝掉、進標籤（見檔頭） */
  '一年後總資產': 'Total after one year (NT$10k)',
  '萬': '',
  '<small> 萬</small>': '<small></small>',
  '股票權重（目標 70%）': 'Stock weight (target 70%)',
  '漂移': 'Drift',
  '再平衡：賣股買債': 'Rebalance: sell stocks, buy bonds (NT$10k)',
  '再平衡：賣債買股': 'Rebalance: sell bonds, buy stocks (NT$10k)',
  '練習任務 A 的驗證點就是預設值：股 +40%／債 +2% → 權重 76.2%、需賣股 7.98 萬。閾值制以偏離 ±5pp 為例。':
    'The check for task A in the exercise is the default setting: stocks +40% / bonds +2% → a 76.2% weight, and NT$79,800 of stocks to sell. The threshold rule here uses ±5pp as its example.',
  '<b>幾乎沒漂移</b>——這種年份什麼都不用做。閾值制的價值就在這：小偏差不動手，省下過路費。':
    '<b>Barely any drift</b> — a year like this needs nothing at all. That is the value of a threshold rule: leave small deviations alone and save the tolls.',
  '偏離': 'Off target by',
  'pp，<b>未達 ±5pp 閾值</b>——記錄下來、不動手。若有新資金，優先買':
    'pp, <b>below the ±5pp threshold</b> — write it down and leave it alone. If new money comes in, put it into ',
  '債券': 'bonds',
  '股票': 'stocks',
  '（低配的一邊），零賣出稅費地把比例推回去。':
    ' first (the underweight side), nudging the ratio back with no selling costs at all.',
  '<b>觸發再平衡（+': '<b>Rebalance triggered (+',
  'pp）：</b>賣': 'pp):</b> sell',
  '萬股票轉入債券，回到 70/30。感覺像「賣掉表現好的」？正是——強制賣高買低，讓風險回到你當初同意的水準。':
    '× NT$10k of stocks and move it into bonds, back to 70/30. Feels like selling the one that is doing well? That is exactly the point — it forces you to sell high and buy low, and puts the risk back at the level you agreed to.',
  '<b>觸發再平衡（−': '<b>Rebalance triggered (−',
  '萬債券轉入股票。在大跌後把錢搬進股票——最反人性、也最有價值的一次執行；這就是 IPS 存在的理由。':
    '× NT$10k of bonds and move it into stocks. Moving money into stocks after a big fall is the least natural thing you will ever do, and the most valuable. This is exactly why the IPS exists.',

  '再平衡的本質': 'What rebalancing really is',
  '強制「賣高買低」＋風險控制': 'Forced "sell high, buy low" plus risk control',
  '。它不是報酬增強器（長期報酬主要來自資產本身），而是':
    '. It is not a return booster — long-run return comes mostly from the assets themselves — it is there to ',
  '確保你的風險始終等於你當初同意承擔的水準':
    'keep your risk equal to the level you originally agreed to carry',
  '——防止牛市讓你不知不覺超載、然後在回檔時受傷超出預期。':
    ' — it stops a bull market from quietly overloading you, and then hurting you more than you expected when it pulls back.',

  /* ── 兩種觸發機制 ── */
  '3. 兩種觸發機制': '3. Two ways to trigger it',
  '機制': 'Method',
  '規則': 'Rule',
  '優缺點': 'Pros and cons',
  '日曆制': 'Calendar based',
  '固定週期檢查（每年／每半年）': 'Check on a fixed cycle (yearly or half-yearly)',
  '簡單、可排程；可能在剛好該動時還沒到日子':
    'Simple and easy to schedule; the date may not arrive just when action is needed',
  '閾值制': 'Threshold based',
  '偏離目標 ±5pp（或 ±25% 相對）才動':
    'Act only once you are ±5pp off target (or ±25% in relative terms)',
  '抓住大漂移、省下小額交易成本；需要定期查看':
    'Catches the big drifts and saves small trading costs; needs checking regularly',
  '研究顯示兩者長期績效差異不大——':
    'Research shows little long-run difference between the two — ',
  '紀律本身遠比「哪一種」重要':
    'the discipline itself matters far more than which one you choose',
  '。實務常見折衷：': '. The common compromise in practice: ',
  '每年查一次（日曆），但只在偏離超過閾值時才實際交易':
    'check once a year (calendar) but only trade when the deviation passes the threshold',
  '（省 W10 的過路費）。': ' (saving the tolls from W10).',
  '成本意識': 'Cost awareness',
  '：再平衡會產生交易成本與（台股賣出）證交稅、可能的資本利得稅（Q4 週 50）。優先用「新資金流入」補低配的那一邊（買入不觸發賣出稅費），能減少再平衡的摩擦。':
    ': rebalancing brings trading costs, securities transaction tax on Taiwan sales, and possibly capital gains tax (Q4, week 50). Topping up the underweight side with new money first — buying does not trigger the selling charges — cuts the friction down.',

  /* ── IPS ── */
  '4. 把一切固化：投資政策聲明書（IPS）':
    '4. Setting it all down: the investment policy statement (IPS)',
  'IPS 是你寫給「未來恐慌時的自己」的一封信。一頁，六節——複製模板開始填：':
    'An IPS is a letter to the version of you who will panic later. One page, six sections — copy the template and start filling it in:',
  '我的投資政策聲明書 v1': 'My investment policy statement v1',
  '複製模板': 'Copy template',
  '已複製 ✓': 'Copied ✓',
  '複製失敗，請手動選取': 'Copy failed — select it by hand',
  /* 全形底線 ＿ 保留：它比半形寬，貼進筆記工具時填空欄位才對得齊 */
  '【我的投資政策聲明書 v1】  日期：＿＿\n1. 目標與時間水平：這筆錢的用途＿＿、預計＿年後動用\n2. 目標配置：股 ＿%（全球＿/台股＿）、債 ＿%、現金 ＿%（來自 W14）\n3. 單一標的上限：個股 ≤＿%、個股合計 ≤＿%、核心 ETF ＿%\n4. 入場規則：（來自 W17，含固定日期的機械化執行）\n5. 再平衡規則：每年＿月檢查；偏離 ±＿pp 時交易；優先用新資金補低配\n6. 禁止事項：不擇時進出、不追熱門主題、不用槓桿、大跌時不看盤亂賣':
    '[My investment policy statement v1]  Date: ＿＿\n1. Goal and time horizon: what this money is for ＿＿, to be used in ＿ years\n2. Target allocation: stocks ＿% (global ＿ / Taiwan ＿), bonds ＿%, cash ＿% (from W14)\n3. Position caps: any one stock ≤＿%, all single stocks ≤＿%, core ETF ＿%\n4. Entry rules: (from W17, including mechanical execution on fixed dates)\n5. Rebalancing rules: check every year in ＿; trade when ±＿pp off target; top up the underweight side with new money first\n6. Never: no market timing, no chasing hot themes, no leverage, no panic selling on a big down day',
  'IPS 的唯一目的': 'The only purpose of an IPS',
  '：把「冷靜時的決定」寫下來，抵抗「激動時的衝動」。它可以改——但只在人生階段改變時改（結婚、買房、退休倒數），':
    ': write down the decisions you make while calm, so they can hold off the impulses that arrive while you are agitated. It can be changed — but only when your stage of life changes (marriage, buying a home, the countdown to retirement), ',
  '不因市場漲跌改': 'never because the market moved',
  '。這條界線就是投資紀律的全部。':
    '. That one line is the whole of investment discipline.',

  /* ── 闢謠 ── */
  '5. 常見誤解闢謠': '5. Three things people get wrong',
  '「再平衡是為了賺更多」': '"Rebalancing is there to make you more money"',
  '不是；它是風險控制，長期甚至可能小幅拉低報酬（因為一直在賣強勢資產）。它的價值是「讓你承擔的風險始終可控」，這在下一次崩盤時才會兌現。':
    'It is not. It is risk control, and over the long run it may even shave a little off your return, because you keep selling the strong asset. Its value is keeping the risk you carry under control, and that only pays out in the next crash.',
  '「漲的賣掉、跌的買進，違反直覺」':
    '"Selling what went up and buying what went down is backwards"',
  '正是重點：再平衡強制你做「低買高賣」，對抗「追高殺低」的人性。機械化執行才能克服情緒。':
    'That is precisely the point: rebalancing forces you to buy low and sell high, against the human pull to chase highs and dump lows. Only mechanical execution beats emotion.',
  '「分散越多越好，買 100 檔」': '"More diversification is always better — buy 100 stocks"',
  '邊際效益遞減（W15：20 檔後幾乎不再降風險），過度分散＝管理成本上升、且稀釋你真正有信念的部位；一檔寬基 ETF 通常勝過自己硬湊 100 檔。':
    'The benefit tails off (W15: past 20 holdings, risk barely falls further). Over-diversifying raises your management costs and waters down the positions you actually believe in. One broad-based ETF usually beats 100 names cobbled together by hand.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '40 分': '40 min',
  '本週主文；讀「Why rebalance」「Methods」「Rebalancing with new money」三節。':
    'The main reading this week; take the "Why rebalance", "Methods" and "Rebalancing with new money" sections.',
  '25 分': '25 min',
  '綠角財經筆記：再平衡相關文章 ↗': '綠角財經筆記: posts on rebalancing ↗',
  '台灣視角的再平衡實證與稅費考量（站內搜「再平衡」）。':
    'Evidence on rebalancing from a Taiwanese standpoint, with the tax and fee angle (search the site for "rebalancing").',
  '15 分': '15 min',
  'IPS 範本——照著改寫成自己的。': 'An IPS template — rewrite it into your own.',
  '10 分': '10 min',
  '回顧 W15 ↗': 'Revisit W15 ↗',
  '15–20 檔的分散極限，是倉位上限的理論根。':
    'The 15–20 holding limit on diversification is the theoretical root of position caps.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '完成你的 IPS（本週交付物）': 'Finish your IPS (this week\'s deliverable)',
  '任務 A｜再平衡試算（20 分鐘）': 'Task A | Rebalancing calculation (20 minutes)',
  '用試算表：輸入你的目標配置與初始金額，假設一年後各資產不同漲跌幅，計算漂移後權重與「該買賣多少才回到目標」。':
    'In a spreadsheet: enter your target allocation and starting amount, assume a different one-year move for each asset, then work out the drifted weights and how much to buy or sell to get back to target. ',
  '驗證：70/30、股 +40%／債 +2% 時，需賣股 7.98 萬':
    'Check: at 70/30, with stocks +40% and bonds +2%, you need to sell NT$79,800 of stocks',
  '（和上面模擬器對答案）。': ' (compare with the simulator above).',
  '任務 B｜寫出 IPS v1（30 分鐘）': 'Task B | Write IPS v1 (30 minutes)',
  '把 W14（配置）、W17（入場）與本週（倉位、再平衡）的所有決定，整合成一頁 IPS（用上面六節模板）。這份文件 Q3 建模擬組合時直接引用。':
    'Pull every decision from W14 (allocation), W17 (entry) and this week (position sizing, rebalancing) into a one-page IPS, using the six-section template above. You will quote this document directly when you build the paper portfolio in Q3.',
  '驗收標準：': 'What counts as done: ',
  '再平衡試算驗證點通過；IPS v1 一頁完成（六節齊全）。':
    'the rebalancing calculation ties out, and IPS v1 is a finished single page with all six sections.',
  '自我檢核': 'Check yourself',
  '再平衡試算驗證點（賣股 7.98 萬）通過':
    'The rebalancing check ties out (NT$79,800 of stocks to sell)',
  'IPS v1 一頁完成（六節齊全）':
    'IPS v1 is a finished single page with all six sections',
  '能解釋再平衡的本質是風險控制而非報酬增強':
    'You can explain that rebalancing is risk control, not a return booster',

  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up to check)',
  '再平衡長期可能小幅「降低」報酬，為什麼還要做？':
    'Rebalancing may slightly lower your return over the long run — so why do it?',
  '→ 因為它的產品不是報酬、是': '→ Because what it produces is not return, it is ',
  '風險控制': 'risk control',
  '——不再平衡的組合會在牛市末端股票超載，然後在崩盤時損失超出你的承受度，可能導致恐慌性賣出（一次行為錯誤 &gt; 多年再平衡成本）。它在下次危機時才兌現價值。':
    ' — a portfolio that is never rebalanced ends a bull market overloaded with stocks, then loses more in the crash than you can stand, which can tip you into panic selling (one behavioural mistake &gt; years of rebalancing costs). Its value only shows up in the next crisis.',
  '為什麼「用新資金補低配」比「賣高配買低配」更省成本？':
    'Why is "top up the underweight side with new money" cheaper than "sell the overweight side to buy the underweight one"?',
  '→ 賣出會觸發交易成本、證交稅、可能的資本利得稅（W10、Q4 週 50）；用「還沒投入的新錢」直接買低配的一邊，只有買入手續費、':
    '→ Selling triggers trading costs, securities transaction tax and possibly capital gains tax (W10; Q4, week 50). Buying the underweight side with money you have not yet invested costs only the purchase commission and ',
  '不觸發任何賣出稅費': 'triggers no selling taxes or fees whatsoever',
  '，摩擦最小。': ', so the friction is as small as it gets.',
  '買了台積電、聯發科、聯電、日月光、瑞昱五檔，算充分分散嗎？':
    'You hold TSMC, MediaTek, UMC, ASE and Realtek — five stocks. Is that properly diversified?',
  '不算': 'No',
  '——五檔全是半導體，共享同一產業風險（W15 的系統性／產業風險），景氣下行或產業逆風時會一起跌；分散要跨產業甚至跨資產類別，不是湊檔數。':
    ' — all five are semiconductors and share one industry risk (the systematic and industry risk from W15). In a downturn, or an industry headwind, they fall together. Diversification means spreading across industries and even across asset classes, not counting up names.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '果園修枝': 'Pruning the orchard',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（果園修枝）': 'Opening (pruning the orchard)',
  '「想像我們家有一片果園，本來說好七成種蘋果、三成種梨。過了一年蘋果樹長得特別好，現在變成七成六都是蘋果——你覺得該怎麼辦？」（引導：把長太多的蘋果修一點、補種梨，回到原本的比例。）':
    '"Imagine we own an orchard. We agreed on seventy per cent apples and thirty per cent pears. A year on, the apple trees have done especially well and apples are now seventy-six per cent of the orchard — what do you think we should do?" (Steer them to: prune back some of the apples, plant more pears, get back to the original ratio.)',
  '核心觀念': 'The core idea',
  '「這就叫再平衡。蘋果（股票）長太快，代表園子悄悄變得比我們當初打算的更『賭』。修枝不是因為蘋果不好，是為了讓整片園子的風險，永遠是我們當初同意的樣子。而且它強迫我們做一件反人性的事——':
    '"That is rebalancing. The apples (stocks) grew too fast, which means the orchard has quietly become more of a gamble than we planned. We prune not because the apples are bad, but so the risk of the whole orchard stays what we agreed to. And it forces us into something that feels wrong — ',
  '把漲多的賣一點、去買跌的': 'selling a bit of what went up to buy what went down',
  '，這正好是賺錢的方向。」':
    ' — which happens to be the direction that makes money."',
  '互動（IPS 的意義）': 'Interaction (what the IPS is for)',
  '「我寫了一張『家庭投資規則卡』（秀 IPS）。為什麼要白紙黑字？因為市場大跌那天，我會很想把股票全賣掉——這張卡是':
    '"I have written a family investing rule card (show them the IPS). Why put it in black and white? Because on the day the market falls hard, I will badly want to sell every share we own — and this card is ',
  '冷靜的我，寫給恐慌的我的一封信':
    'a letter from the calm me to the panicking me',
  '預期反應與應對': 'What they will say, and what to answer',
  '「漲得好幹嘛賣掉？」': '"Why sell something that is doing well?"',
  '「不是全賣，是修回比例。就像體重——不是不能吃，是超過設定值就要調整回來，不然哪天失控。」':
    '"Not sell it all — trim it back to the ratio. Like body weight: it is not that you cannot eat, it is that once you pass the number you set, you adjust back, or one day it gets away from you."',
  '「每天都要調嗎？」': '"Do you have to adjust it every day?"',
  '「不用，一年看一次，偏離太多才動。看太勤只會多付過路費（W10）、多做多錯。」':
    '"No. Look once a year, and only act if it has drifted a long way. Checking too often just means paying more tolls (W10) and making more mistakes."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能用算例說明配置漂移與再平衡交易':
    'You can use a worked example to explain allocation drift and the rebalancing trade',
  'IPS v1 完成（Q3 模擬組合的憲法）':
    'IPS v1 is finished (the constitution for the Q3 paper portfolio)',
  '能說出兩種再平衡觸發機制與「紀律 &gt; 方法」':
    'You can name both rebalancing triggers and say why discipline &gt; method',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '本週心得記一行（下週回顧用）':
    'One line of notes on the week, for next week\'s review',
  '🎓 第 18 週完成——IPS 已成文，配置框架收攏完畢。下週見：相對估值深用。':
    '🎓 Week 18 done — the IPS is written and the allocation framework is complete. Next up: relative valuation in depth.',
  '下週預告 · Week 19：估值一——相對估值深用':
    'Next week · Week 19: valuation, part one — relative valuation in depth',
  '——Q2 配置段落到此完成（W14–18 是一套完整框架）。下週起鏡頭拉回單一公司，進入估值：你將學會回答「這家公司值多少錢」。':
    ' — the Q2 allocation stretch ends here; W14–18 make up one complete framework. From next week the camera pulls back to a single company and into valuation: you will learn to answer "what is this company worth".',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：入場策略': 'Previous week: entry strategy',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
