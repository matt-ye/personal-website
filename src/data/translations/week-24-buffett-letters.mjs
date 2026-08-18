/*
 * 給家人的投資課 Week 24：Buffett 股東信精讀 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-24-buffett-letters.html
 *
 * 沿用 week-01 的慣例（行內標記邊界的半形空白、語域）。本週沒有金額換算問題，
 * 但有「回到原話」的問題，逐條交代：
 *
 * ⚠ 中譯的 Buffett 名言一律還原成他的英文原話（已查證，非回譯）：
 *   ·「別人恐懼我貪婪」→ "be greedy when others are fearful"
 *      （2008/10/17 NYT op-ed「Buy American. I Am.」原句：
 *       "Be fearful when others are greedy, and be greedy when others are fearful."）
 *   ·「報價是服務不是指令」→ "there to serve you, not to instruct you"
 *      （1987 年致股東信：Mr. Market "is there to serve you, not to guide you."
 *       中文用的是「指令」，故取 serve/instruct 這組配對，語意與原句一致。）
 *   ·「合理價買偉大公司」→ "a wonderful company at a fair price"（1989 年信原話）
 *   ·「菸屁股」→ "cigar butt"（Buffett 自用詞）
 *   · 能力圈 = circle of competence｜市場先生 = Mr. Market（Graham 原詞）
 *
 * ⚠ 這兩處**原文就是英文**，原樣保留不動：
 *   "Buy American. I Am."｜"we expect to hold these securities for a long time"
 *
 * ⚠ 這兩處是 Matt 的轉述、不是逐字引語，因此**不套用某句名言的原話**，
 *   照中文語意譯出，不加引號冒充原話：
 *   ·「他稱利率是『資產價格的地心引力』」——最接近的原話出自 1999 Fortune
 *     〈Mr. Buffett on the Stock Market〉（"These act on financial valuations the
 *     way gravity acts on matter…"），**不是股東信**，故譯成描述句而非引語。
 *   ·「他公開寫文章說『我正在買美國股票』」——op-ed 原句為
 *     "So … I've been buying American stocks."，此處是轉述句，照轉述譯。
 *
 * ⚠ 已知限制：抽取器只抓含漢字的字串，夾在標記間的孤立全形標點（`：`、`）。`）
 *   抓不到，英文頁上會殘留。要動的是原始碼標點，不在對照表的職權內。
 *
 * 語域：這是「叫家人一起讀原典」的口氣，不是文獻回顧。
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
  '給家人的投資課 · Q2 投資人季 · Week 24':
    "Family Investing Course · Q2 The Investor's Quarter · Week 24",
  '大師心法——Buffett 股東信精讀':
    "How the Masters Think — Reading Buffett's Shareholder Letters Closely",
  '開始「讀原典」的習慣：不是收集名言，是學會從原文萃取可操作原則。':
    'Start the habit of reading the primary source: not collecting quotations, but learning to pull actionable principles out of the original text.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 21–23 週': 'Weeks 21–23',
  '52 週 · 第 24 週': '52 weeks · Week 24',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  'Buffett 六十年股東信是投資史上最完整的公開思想紀錄——而且免費。你會發現他的每條原則，都是前 23 週某一課的活體示範（或 W23 某個偏誤的解藥）。':
    'sixty years of Buffett shareholder letters are the most complete public record of thinking in the history of investing — and they cost nothing. You will find that every one of his principles is a live demonstration of some lesson from the first 23 weeks, or the antidote to one of the biases in W23.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週兩個實驗的結果——家人在擲硬幣和台北 101 實驗裡各中了哪個偏誤？護身三句記住了嗎。':
    'go back over the results of last week\'s two experiments — which bias did your family fall for in the coin toss, and which in the Taipei 101 experiment? Have the three protective sentences stuck?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '全世界最會投資的人，把六十年的思想全部免費公開在網路上。你猜「認真讀過原文」的投資人比例是？':
    'The best investor in the world put sixty years of his thinking online, free, for anyone to read. What share of investors do you think have actually read the originals properly?',
  '猜一個答案': 'Pick an answer',
  '大多數認真的投資人都讀過': 'Most serious investors have',
  '大概一半': 'About half',
  '極少數': 'Very few',
  '答對了——免費公開六十年，認真讀過原文的人仍是極少數，多數人只讀語錄和二手詮釋。這正是機會：原典習慣是你和多數投資人的分水嶺——讀二手的人判斷永遠慢一手，還被詮釋者的偏誤污染（W23 的確認偏誤）。':
    'Correct — free and public for sixty years, and still only a handful of people have read the originals properly. Most read quotations and second-hand interpretation. That is exactly the opportunity: the habit of going to the primary source is the line between you and most investors. Anyone reading second-hand is always a step behind, and carries the interpreter\'s biases as well (the confirmation bias from W23).',
  '比想像少得多——免費公開六十年，認真讀過原文的人仍是極少數，多數人只讀語錄和二手詮釋。這正是機會：原典習慣是你和多數投資人的分水嶺——讀二手的人判斷永遠慢一手，還被詮釋者的偏誤污染（W23 的確認偏誤）。':
    'Far fewer than you would think — free and public for sixty years, and still only a handful have read the originals properly. Most read quotations and second-hand interpretation. That is exactly the opportunity: the habit of going to the primary source is the line between you and most investors. Anyone reading second-hand is always a step behind, and carries the interpreter\'s biases as well (the confirmation bias from W23).',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 為什麼讀原典，而不是讀「巴菲特語錄」':
    '1. Why read the source rather than a book of Buffett quotations',
  '語錄去掉了脈絡': 'Quotations strip out the context',
  '——「別人恐懼我貪婪」單獨看是雞湯；放回 2008 年 10 月（他在道瓊崩跌中發表 "Buy American. I Am." 時）才看得到判斷的依據與範圍':
    ' — "be greedy when others are fearful" on its own is a fortune cookie. Put it back into October 2008, when he published "Buy American. I Am." in the middle of a collapsing Dow, and you can finally see what the judgement rested on and how far it reached',
  '原文有完整的推理鏈': 'The original carries the whole chain of reasoning',
  '——他每年用真實部位解釋「為什麼買、為什麼不賣、哪裡看錯」；這是免費的投資決策案例庫，含':
    ' — every year he uses real positions to explain why he bought, why he did not sell, and where he read it wrong. It is a free case library of investment decisions, and it includes ',
  '認錯紀錄': 'a record of the mistakes he admits',
  '（語錄從不收錄認錯）': ' (quotation books never include the mistakes)',
  '建立資訊食物鏈的位置': 'It puts you higher up the information food chain',
  '——讀二手詮釋的人，判斷永遠慢一手、且被詮釋者的偏誤污染（W23 ③）。原典習慣是你和多數投資人的分水嶺':
    ' — anyone reading second-hand interpretation is always a step behind, and picks up the interpreter\'s biases along the way (W23 ③). The habit of reading primary sources is the watershed between you and most investors',

  /* ── 三遍讀法 ── */
  '2. 精讀方法：三遍讀法': '2. How to read closely: the three-pass method',
  '對每封信（每封約 20–30 頁，其實是一年一封的「散文財報」）：':
    'For each letter (about 20–30 pages, and really an annual report written as an essay):',
  '通讀（40 分）': 'Read it straight through (40 min)',
  '：不停頓讀完，標記三處「咦？」（反直覺、看不懂、想反駁的地方）':
    ': get to the end without stopping, and mark three places that make you go "huh?" — counter-intuitive, unclear, or something you want to argue with',
  '精讀標記處（20 分）': 'Read the marked passages closely (20 min)',
  '：對每處問——他的推理是什麼？前提是什麼？我的課程（W1–23）哪一週講過對應概念？':
    ': for each one, ask what his reasoning is, what he is assuming, and which week of this course (W1–23) covered the matching idea',
  '萃取（15 分）': 'Extract (15 min)',
  '：寫 5 條「可操作 takeaway」——標準：': ': write five actionable takeaways. The standard: ',
  '必須是行為指令': 'each one has to be a behavioural instruction',
  '（「當 X 時做 Y」），不是感想': ' ("when X, do Y"), not a reflection',

  /* ── takeaway 品檢器 ── */
  '3. 先練手感：takeaway 品檢器': '3. Warm up: the takeaway quality check',
  '第三遍的萃取標準最容易失守——六條筆記，判斷哪些合格：':
    'The third pass is where the standard slips most easily. Six notes below — decide which ones pass:',
  'takeaway 品檢器（合格＝行為指令，有觸發條件與動作）':
    'Takeaway quality check (a pass = a behavioural instruction, with a trigger and an action)',
  '「投資要有耐心。」': '"Be patient when you invest."',
  '感想，不是指令——沒有觸發條件、沒有動作。你在盤中焦慮時，這句話幫不了你。':
    'A reflection, not an instruction — no trigger, no action. When you are anxious in the middle of a trading day, this sentence does nothing for you.',
  '「估值時，先假設自己十年不能賣出，再決定買不買。」':
    '"When valuing a business, first assume I cannot sell for ten years, then decide whether to buy."',
  '合格——觸發條件（做估值時）＋具體動作（用十年不能賣的前提檢驗）。這是 1988 年信持有哲學的可操作版。':
    'Passes — a trigger (when you are valuing something) plus a concrete action (test it under a ten-year lock-up). This is the actionable version of the holding philosophy in the 1988 letter.',
  '「別人恐懼我貪婪。」': '"Be greedy when others are fearful."',
  '口號——聽起來像指令，但「恐懼」沒有客觀觸發標準、「貪婪」沒有具體動作。可操作版是 W18 的再平衡規則：偏離 ±5pp 時機械化買入低配那邊。':
    'A slogan — it sounds like an instruction, but "fearful" has no objective trigger and "greedy" has no concrete action. The actionable version is the rebalancing rule from W18: when a weight drifts ±5pp, mechanically buy the underweighted side.',
  '「當我無法用三句話講出這家公司怎麼賺錢時，直接跳過。」':
    '"When I cannot say in three sentences how this company makes money, I skip it."',
  '合格——能力圈原則的行為指令版：清楚的觸發測試（三句話講不出）＋明確動作（跳過）。':
    'Passes — the circle of competence turned into a behavioural instruction: a clear trigger test (you cannot say it in three sentences) plus a definite action (skip it).',
  '「要像巴菲特一樣長期思考。」': '"Think long term, the way Buffett does."',
  '感想——「長期思考」無法驗證有沒有做到。改寫成「任何賣出決定先寫下理由並隔 48 小時執行」才有約束力。':
    'A reflection — there is no way to check whether you actually thought long term. Rewrite it as "write down the reason for any sell decision and wait 48 hours before acting" and it starts to bind.',
  '「按下買入鍵之前，先寫下這筆投資最強的一條反對理由。」':
    '"Before I press buy, I write down the strongest single argument against this investment."',
  '合格——觸發（買入前）＋動作（寫反對理由），直接對抗 W23 的確認偏誤；也是 W26 論文反方章的日常版。':
    'Passes — a trigger (before buying) plus an action (write the counter-argument), aimed straight at the confirmation bias in W23. It is also the everyday version of the counter-case chapter in the W26 thesis.',
  '<div class="tbtns"><button data-a="true">合格</button><button data-a="false">不合格</button></div>':
    '<div class="tbtns"><button data-a="true">Passes</button><button data-a="false">Fails</button></div>',
  '<b>答對。</b>': '<b>Correct.</b>',
  '<b>不是——</b>': '<b>No — </b>',
  '完成：': 'Done: ',
  '——口訣：合格的 takeaway 一定有「觸發條件＋動作」，能被檢驗有沒有執行。':
    ' — the rule of thumb: a takeaway that passes always has a trigger and an action, and you can check afterwards whether you carried it out.',
  '已答': 'Answered',

  /* ── 兩封信 ── */
  '4. 本週的兩封信與看點': '4. This week\'s two letters, and what to watch for',
  '建議組合，可依興趣替換其他年份，方法不變。皆在官網免費取得——1977 年起全文公開。':
    'A suggested pairing; swap in other years if they interest you more, the method does not change. Both are free on the official site, which carries the full text from 1977 onwards.',
  '信一：1988 年信（買入可口可樂的邏輯）':
    'Letter one: 1988 (the logic behind buying Coca-Cola)',
  '看點：': 'What to watch for: ',
  '史上最著名的「寬護城河＋合理價格」實戰。注意他怎麼描述可口可樂的':
    "the most famous wide-moat-at-a-fair-price case ever executed. Notice how he describes Coca-Cola's ",
  '定價權與全球分銷': 'pricing power and global distribution',
  '（W22 的護城河三維）、為什麼願意付「看起來不便宜」的 P/E（W19「便宜有理由」的反面：':
    ' (the three moat dimensions from W22), and why he was willing to pay a P/E that did not look cheap — the flip side of "cheap for a reason" in W19: ',
  '貴得有理由': 'expensive for a reason',
  '對照課程：': 'Course cross-reference: ',
  'W22 質化 → W21「模糊的正確」——他從不出示精確 DCF，但對價值區間有強判斷。同場加映："we expect to hold these securities for a long time" 的持有哲學＝W1 複利＋W10 低周轉的合體。':
    'W22 qualitative analysis → being roughly right, from W21. He never shows a precise DCF, yet he holds a strong view on the range of value. Bonus feature: the holding philosophy behind "we expect to hold these securities for a long time" is W1 compounding and W10 low turnover fused into one.',
  '信二：2008 年信（金融海嘯中的原則）':
    'Letter two: 2008 (principles inside the financial crisis)',
  '系統崩潰時他寫了什麼、做了什麼（高盛與 GE 的特別股交易）；他怎麼區分「價格波動」與「本金永久損失」（W15 侷限、W21 市場先生）；以及他公開承認的錯誤（ConocoPhillips 追高油價——':
    'what he wrote and what he did while the system was breaking (the preferred-stock deals with Goldman Sachs and GE); how he separates price volatility from permanent loss of capital (the limits in W15, Mr. Market in W21); and the mistake he owned up to in public (ConocoPhillips, chasing oil prices up — ',
  '大師也會犯 W23 的近因效應': 'even the master falls for the recency effect from W23',
  '，看他怎麼處理）。': ', and watch how he handles it).',
  'W12 循環與恐慌、W23 全部偏誤的反面示範。':
    'W12 cycles and panic, and a counter-demonstration of every bias in W23.',

  /* ── 四大原則 ── */
  '5. 四大原則與本課綱的對應': '5. The four principles, mapped onto this syllabus',
  '點四張卡看對應——然後看穿它們的共同結構：':
    'Click the four cards to see the mapping — then look through to the structure they share:',
  '四大原則對應卡': 'The four principles, card by card',
  '能力圈': 'Circle of competence',
  '股票＝公司所有權': 'A share is part-ownership of a business',
  '市場先生': 'Mr. Market',
  '複利與時間': 'Compounding and time',
  '只投資自己看得懂的生意；圈的邊界比大小重要。':
    'Only invest in businesses you understand; the edge of the circle matters more than its size.',
  '對應課程：<a href="/projects/family-investing-course/week-21-margin-of-safety/">W21「跳過是選項」</a>、<a href="/projects/family-investing-course/week-22-moat-five-forces/">W22 質化能力</a>':
    'Course links: <a href="/projects/family-investing-course/week-21-margin-of-safety/">W21, skipping is an option</a> and <a href="/projects/family-investing-course/week-22-moat-five-forces/">W22, qualitative judgement</a>',
  '買股票是買下企業的一部分，不是買代碼。':
    'Buying a share means buying part of a business, not buying a ticker.',
  '對應課程：<a href="/writing/family-investing-04-what-is-stock/">專欄 #4</a>、<a href="/projects/family-investing-course/week-05-income-statement/">W5–9 財報分析</a>的意義':
    'Course links: <a href="/writing/family-investing-04-what-is-stock/">column #4</a>, and what <a href="/projects/family-investing-course/week-05-income-statement/">the statement analysis in W5–9</a> is actually for',
  '報價是服務不是指令。': 'A quote is there to serve you, not to instruct you.',
  '對應課程：<a href="/projects/family-investing-course/week-21-margin-of-safety/">W21</a>（Graham 直傳）':
    'Course link: <a href="/projects/family-investing-course/week-21-margin-of-safety/">W21</a> (straight from Graham)',
  '絕不打斷複利；聲譽與資本同理。':
    'Never interrupt compounding — and what goes for capital goes for reputation.',
  '對應課程：<a href="/projects/family-investing-course/week-01-tvm/">W1</a>、<a href="/projects/family-investing-course/week-10-market-structure/">W10</a>、<a href="/projects/family-investing-course/week-17-entry-strategy/">W17</a>':
    'Course links: <a href="/projects/family-investing-course/week-01-tvm/">W1</a>, <a href="/projects/family-investing-course/week-10-market-structure/">W10</a>, <a href="/projects/family-investing-course/week-17-entry-strategy/">W17</a>',
  '共同結構：': 'The shared structure: ',
  '四條全是「': 'all four come down to ',
  '降低決策頻率、提高單次決策品質': 'deciding less often, and deciding better each time',
  '」——與 W23 的對策工程（減少讓系統一出場的機會）完全同構。大師心法不神祕，是行為紀律的極致版。':
    ' — structurally identical to the countermeasure engineering in W23, which cuts down the occasions System 1 gets to play. There is nothing mystical about how the masters think; it is behavioural discipline taken to its limit.',

  /* ── 三個警告 ── */
  '6. 讀 Buffett 的三個警告': '6. Three warnings about reading Buffett',
  '倖存者偏差': 'Survivorship bias',
  '：他是那個時代價值投資者中「活下來的最大樣本」；學原則，不要學「重壓單一標的」的膽識（他的容錯資本與資訊管道跟你不同）':
    ': he is the largest surviving sample among the value investors of his era. Learn the principles, not the nerve to bet enormous sums on a single name — his cushion for error and his access to information are nothing like yours',
  '時代背景': 'The era he came from',
  '：他早年的「菸屁股」打法在今日資訊效率下幾乎絕跡——他自己也進化了（Munger 推動「合理價買偉大公司」）；讀信要看':
    ': the "cigar butt" style of his early years has all but vanished now that information travels so efficiently — and he moved on from it himself (Munger pushed him towards a wonderful company at a fair price). Read the letters for ',
  '思想的演變': 'how the thinking evolved',
  '，不是任一時點的教條': ', not for dogma frozen at any one moment',
  '規模差異': 'The difference in scale',
  '：他現在的資金量只能買巨型公司；你的小資金反而是優勢（選擇多）——別照抄他的持股清單，抄他的':
    ': the sums he runs now can only go into giant companies. Your small capital is an advantage rather than a handicap, because you have far more to choose from. Do not copy his holdings list; copy his ',
  '流程': 'process',

  /* ── 闢謠 ── */
  '7. 常見誤解闢謠': '7. Three things people get wrong',
  '「Buffett 說不要分散，所以 ETF 是錯的」':
    '"Buffett says do not diversify, so ETFs must be wrong"',
  '他對「知道自己在做什麼的人」說集中，對其他所有人（包括他遺囑中給太太的指示）推薦':
    'He recommends concentration to people who know what they are doing. To everyone else — including the instructions in his will for his wife — he recommends ',
  '低成本指數基金': 'a low-cost index fund',
  '——W16 與 W18 的立場正是他的預設建議。':
    ' — the position taken in W16 and W18 is precisely his default advice.',
  '「他不看總經，所以總經沒用」': '"He ignores macro, so macro is useless"',
  '他不': 'He does not ',
  '預測': 'forecast',
  /* 出處已更正：這句出自 Fortune 1999 專文，不在任何一年的股東信裡（見來源頁）。
     中文被 <strong> 切成三段，英文照片段重新分配。 */
  '總經（W12 立場相同），但對利率與通膨的理解貫穿每封信。那個著名的比喻——利率之於資產評價，猶如地心引力之於物質，利率越高、向下的拉力越強——':
    " the macro picture (the same stance as W12), but an understanding of interest rates and inflation runs through every letter. His famous image — that rates act on asset valuations the way gravity acts on matter, the higher the rate the stronger the downward pull — ",
  '出自 1999 年《財星》專文而非股東信': 'comes from a 1999 Fortune article, not from the letters',
  'Buffett「地心引力」原文（Fortune, 1999/11）↗': 'Buffett on gravity, the original (Fortune, 1999/11) ↗',
  '；W3 就是這句話的展開。': '; W3 is that idea worked out in full.',
  '「照他的話做就會富有」': '"Do what he says and you will get rich"',
  '他的話免費公開六十年，多數讀者仍然追漲殺跌——因為缺的從來不是知識，是 W23 的制度化紀律。':
    'His words have been free and public for sixty years, and most readers still buy high and sell low — because what was missing was never the knowledge. It is the institutionalised discipline of W23.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '主時數': 'Main hours',
  'Berkshire 股東信官網 ↗': 'The Berkshire shareholder letters site ↗',
  '1988 年信 ↗': 'the 1988 letter ↗',
  '2008 年信（PDF）↗': 'the 2008 letter (PDF) ↗',
  '用三遍讀法各走一次——這就是本週的主要時數。':
    'Run the three-pass method over each of them — this is where most of the week goes.',
  '輔助': 'Support',
  '卡關時回對照表': 'The mapping table, for when you get stuck',
  '讀信卡關就回四大原則卡找對應週次複習（例：讀到 float 看不懂，先跳過——那是保險商業模式，非本週重點）。':
    'When a letter stalls you, go back to the four principle cards and revisit the matching week. (For example: if "float" makes no sense, skip it for now — that is the insurance business model, not the point of this week.)',
  '選讀': 'Optional',
  '與 2008 年信對照，看「說」與「做」的一致性。（NYT 可能有付費牆，搜尋標題也可找到轉載。）':
    'Read it against the 2008 letter and see whether what he said matched what he did. (The NYT may be paywalled; searching the title usually turns up a reprint.)',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '萃取你的投資原則清單 v1（本週交付物）':
    "Extract your investing principles, v1 (this week's deliverable)",
  '每封信 5 條 takeaway': 'Five takeaways per letter',
  '（共 10 條）——嚴格用「行為指令」格式：':
    ' (ten in all) — strictly in behavioural-instruction form: ',
  '當＿＿時，我做＿＿': 'when ＿＿, I do ＿＿',
  '；每條標註出處段落與對應課程週次':
    '; note the source paragraph and the matching course week for each one',
  '合併去重': 'Merge and de-duplicate',
  '：10 條中挑出你真心會執行的 5–7 條，寫成「':
    ': out of the ten, pick the 5–7 you will genuinely act on and write them up as ',
  '我的投資原則清單 v1': 'My Investing Principles, v1',
  '」（獨立文件）——這是 W26 投資論文的哲學章、也是日後每季複盤（W38）的對照標準':
    ' in its own document — it becomes the philosophy chapter of the W26 investment thesis, and the yardstick for every quarterly review from here on (W38)',
  '反向測試': 'Reverse test',
  '：對每條原則問「過去的我哪次違反了它？」（連回 W23 任務 A）——答不出來的原則可能只是抄來的口號，考慮刪掉':
    ': ask of each principle, "when did I break this in the past?" (linking back to task A in W23). A principle you cannot answer for is probably a slogan you copied — consider cutting it',
  '驗收標準：': 'Done when: ',
  '10 條 takeaway 全部是行為指令格式且有出處；原則清單 v1 成為獨立文件（5–7 條）；每條通過「我違反過它」的反向測試。':
    'all ten takeaways are in behavioural-instruction form with a source; the v1 principles list exists as its own document of 5–7 items; and every item passes the "I have broken this" reverse test.',
  '自我檢核': 'Check yourself',
  '10 條 takeaway 全部是行為指令格式且有出處':
    'All ten takeaways are behavioural instructions and carry a source',
  '原則清單 v1 成為獨立文件（5–7 條）':
    'The v1 principles list exists as its own document (5–7 items)',
  '每條原則通過「我違反過它」的反向測試':
    'Every principle passes the "I have broken this" reverse test',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '為什麼「能力圈的邊界比大小重要」？':
    ' Why does the edge of your circle of competence matter more than its size?',
  '→ 因為虧大錢的交易多數發生在': '→ Because the trades that lose real money mostly happen ',
  '圈外而不自知': 'outside the circle, without you noticing',
  '的地方——圈小但邊界清楚的人會說「不知道」而跳過（W21）；圈大但邊界模糊的人會在自以為懂的領域重倉。可操作版：對每筆投資先問「我憑什麼比賣方懂？」':
    '. Someone with a small circle and a sharp edge says "I do not know" and skips it (W21); someone with a large circle and a blurry edge takes a big position in a field they only think they understand. The actionable version: before every investment, ask what makes you better informed than the person selling to you.',
  'Buffett 給一般人的實際建議是指數基金——這跟他自己集中持股矛盾嗎？':
    " Buffett's actual advice to ordinary people is index funds — does that contradict his own concentrated portfolio?",
  '不矛盾，是同一套邏輯的兩種輸出': 'No — they are two outputs of the same logic',
  '：集中的前提是「深度理解＋時間投入＋情緒紀律」三者兼備；他誠實判斷多數人（含專業者，W16 SPIVA）不具備，所以預設建議是指數化。這正是「能力圈」原則應用在「選投資方式」上。':
    '. Concentration requires deep understanding, time invested and emotional discipline, all three together. He honestly judges that most people — professionals included, see SPIVA in W16 — do not have all three, so his default advice is indexing. That is the circle of competence applied to the question of how you invest.',
  '讀 2008 年信時，哪一個行為最直接反駁了 W23 的損失趨避？':
    ' Reading the 2008 letter, which single action most directly contradicts the loss aversion in W23?',
  '→ 在市場暴跌、帳面鉅虧之際':
    '→ With the market collapsing and huge paper losses on the books, he ',
  '繼續買進': 'kept buying',
  '（高盛、GE 特別股與後續加碼）——損失趨避會驅使常人在浮虧時停止行動甚至清倉；他反向而行，因為決策依據是「價格 vs 價值」（W21）而非「痛不痛」（W23）。':
    ' (the Goldman Sachs and GE preferreds, and the additions that followed). Loss aversion drives ordinary people to freeze, or even to liquidate, while they are underwater; he went the other way, because his decision rested on price versus value (W21) rather than on how much it hurt (W23).',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '一封信的重量': 'The weight of one letter',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（一封信的重量）': 'Opening (the weight of one letter)',
  '「全世界最會投資的人，每年寫一封信給股東，寫了六十年，全部免費公開在網路上。猜猜看認真讀過的人多不多？」（極少。）「今天我講兩個裡面的故事。」':
    '"The best investor in the world has written one letter a year to his shareholders for sixty years, and every one of them is free online. Guess how many people have actually read them properly." (Very few.) "Today I am going to tell you two of the stories inside."',
  '故事一（可樂與排隊哲學）': 'Story one (Coke, and the philosophy of the queue)',
  '「1988 年他花巨資買可口可樂。他的理由不是內線、不是線圖，是一個你也懂的觀察：':
    '"In 1988 he spent an enormous sum buying Coca-Cola. His reason was not inside information and it was not a chart — it was an observation you would understand just as well: ',
  '全世界的人明天還是會喝可樂，而且漲價照喝':
    'people all over the world will still drink Coke tomorrow, and they will keep drinking it even after a price rise',
  '（上上週的定價權！）。好投資的理由，通常簡單到可以講給家人聽——講不出來的，八成有問題。」':
    ' (pricing power, from two weeks ago!). The reason behind a good investment is usually simple enough to explain to your family — and if you cannot explain it, something is probably wrong."',
  '故事二（2008 年的反向）': 'Story two (going the other way in 2008)',
  '「2008 年全世界恐慌逃命時，他公開寫文章說『我正在買美國股票』。不是他不怕，是他':
    '"In 2008, while the whole world was panicking and running for the exit, he published an article saying he had been buying American stocks. It was not that he felt no fear — it was that he ',
  '二十年前就寫好了規則': 'had written the rule down twenty years earlier',
  '：別人恐懼時的價格最便宜。他只是執行舊規則——跟我們家的那張規則卡（IPS）同一個道理。」':
    ': prices are at their cheapest when everyone else is frightened. All he did was execute an old rule — the same idea as that rule card of ours, the IPS."',
  '互動': 'Interaction',
  '「他有四條家訓：只碰看得懂的、買股票＝買公司、市場報價是服務不是命令、絕不打斷複利。你覺得我們家哪一條最難做到？」（讓家人選——通常選「別人恐懼我貪婪」相關的，正好收尾：「所以規則要現在寫，不是崩盤那天寫。」）':
    '"He has four house rules: only touch what you understand; buying a share is buying a business; a market quote is a service, not an order; never interrupt compounding. Which of them do you think would be hardest for our family?" (Let them pick — they usually choose something to do with being greedy when others are fearful, which is the perfect close: "Which is exactly why the rules get written now, not on the day of the crash.")',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那直接買他的公司（波克夏）不就好了？」':
    '"Why not just buy his company, Berkshire, and be done with it?"',
  '「這是一個合理選項之一！但他自己說了：他之後的波克夏不會再有過去的報酬率——規模太大了。學流程比抄答案耐用。」':
    '"That is one perfectly reasonable option! But he has said it himself: Berkshire from here will not repeat the returns it made in the past, because it is simply too big now. Learning the process wears better than copying the answer."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '兩封信三遍讀法完成（有「咦？」標記與筆記）':
    'The three-pass method is done on both letters, with the "huh?" marks and notes',
  '「我的投資原則清單 v1」完成（5–7 條行為指令）':
    'My Investing Principles v1 is finished (5–7 behavioural instructions)',
  '能說出四大原則與課程週次的對應':
    'You can say how each of the four principles maps onto a week of the course',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 24 週完成——原典習慣已開張。下週見：Marks 備忘錄與週期思維。':
    '🎓 Week 24 done — the primary-source habit is open for business. Next up: the Marks memos and cycle thinking.',
  '下週預告 · Week 25：大師心法——Marks 備忘錄與週期思維':
    'Next week · Week 25: how the masters think — the Marks memos and cycle thinking',
  '——另一位大師、另一種文體：Buffett 教你看':
    ' — a different master and a different form. Buffett teaches you to look at ',
  '公司': 'companies',
  '，Marks 教你看': ', while Marks teaches you to look at ',
  '週期與風險': 'cycles and risk',
  '；兩者合起來才是完整的判斷力。':
    '; only together do they add up to complete judgement.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：行為財務學': 'Last week: behavioural finance',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
