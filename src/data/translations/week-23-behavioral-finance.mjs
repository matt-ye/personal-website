/*
 * 給家人的投資課 Week 23：行為財務學——認知偏誤與對策工程 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-23-behavioral-finance.html
 *
 * 沿用 week-01 的慣例。本週特有的幾件事：
 *
 * ⚠ 這頁沒有計算機、沒有金額欄位，「萬」的規則只出現在散文裡，照常換算：
 *   虧 1 萬／賺 2 萬 → NT$10,000／NT$20,000。
 *   擲硬幣實驗的 15,000／10,000／1,500／250 是裸數字，原文就沒帶幣別，照抄不加。
 *
 * ⚠ 書名用原著英文名（都是英文書的中譯本，不是自創英譯）：
 *   《快思慢想》= Thinking, Fast and Slow（Kahneman）
 *   《高勝算決策》= Thinking in Bets（Annie Duke）
 *   系統一／系統二 = System 1 / System 2（Kahneman 的標準術語）
 *   台北 101 = Taipei 101；尤利西斯 = Ulysses。
 *
 * ⚠ 配對遊戲的人名（小張、小李、小王、小陳、小林）是課文自己編的路人甲，
 *   不是真實人物，用通行的姓氏羅馬拼音 Chang／Lee／Wang／Chen／Lin，
 *   不另取英文名。
 *
 * ⚠ 抽取器抓不到、因此英文頁會留下的中文標點（不在對照表職權內）：
 *   ① 配對遊戲答錯時的 `」——</b>`（整段沒有漢字所以沒被抽出）。
 *      為了不讓引號變成單邊，`<b>是「` 的英文值刻意保留 「，讓 「」 成對。
 *   ② 對策卡「針對：」後面的 `、` 分隔號（BIAS_NAMES.join("、")）。
 *
 * 語域：機場安檢、把自己綁上桅杆、賣掉花澆灌草——這些比喻是本週的骨架，
 *   英文要保住它們，不要改寫成行為金融學的文獻回顧。
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
  '給家人的投資課 · Q2 投資人季 · Week 23':
    "Family Investing Course · Q2 The Investor's Quarter · Week 23",
  '行為財務學——認知偏誤與對策工程':
    'Behavioural finance — cognitive bias, and engineering your way around it',
  '前 22 週打造了分析武器，本週處理「拿武器的手會抖」的問題。':
    'The first 22 weeks built the analytical weapons. This week deals with the fact that the hand holding them shakes.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 18 週（IPS）': 'week 18 (the IPS)',
  '52 週 · 第 23 週': '52 weeks · Week 23',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '行為偏誤是多數投資人（含專業者）長期落後的第一大原因——比選錯股嚴重。投資人靠對策自保、操盤手把它工程化成流程（Q3 週 36、38）、財務長要懂市場為何過度反應（Q4 IR）。':
    'Behavioural bias is the single biggest reason most investors — professionals included — lag over the long run, and it does more damage than picking the wrong stock. The investor protects himself with countermeasures, the trader engineers them into a process (Q3, weeks 36 and 38), and the CFO has to understand why the market overreacts (Q4, investor relations).',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週定價權試金石遊戲的結果——對方出的題（誰敢漲價）判對了嗎、「紅是結果不是原因」講通了嗎。':
    'Look back at how last week\'s pricing-power litmus test went — did they judge their own example right (who dares raise prices), and did "being popular is a result, not a cause" land?',

  /* ── 開場擲硬幣 ── */
  '開始之前，先玩一把': 'Before we start, play a round',
  '擲硬幣：正面你贏 15,000，反面你輸 10,000。玩不玩？':
    'A coin flip: heads you win 15,000, tails you lose 10,000. Do you play?',
  '玩或不玩': 'Play or pass',
  '玩': 'Play',
  '不玩': 'Pass',
  '你比多數人「理性」——這把的期望值是 +2,500（贏 15,000×50% − 輸 10,000×50%），數學上該玩。但大部分人會搖頭：虧 1 萬的痛大約等於賺 2 萬的爽。這就是損失趨避——本週六大偏誤的第一號，也是「一跌就想全賣」的心理根源。':
    'You are more "rational" than most — the expected value here is +2,500 (win 15,000 × 50% − lose 10,000 × 50%), so the maths says play. Most people shake their heads anyway: losing NT$10,000 hurts about as much as making NT$20,000 feels good. That is loss aversion — the first of this week\'s six biases, and the psychological root of "it fell, sell everything".',
  '跟多數人一樣——但這把的期望值是 +2,500（贏 15,000×50% − 輸 10,000×50%），數學上該玩。你的大腦把「輸 10,000 的痛」放大了約兩倍。這就是損失趨避——本週六大偏誤的第一號，也是「一跌就想全賣」的心理根源。':
    'Same as most people — but the expected value here is +2,500 (win 15,000 × 50% − lose 10,000 × 50%), so the maths says play. Your brain roughly doubled the pain of losing 10,000. That is loss aversion — the first of this week\'s six biases, and the psychological root of "it fell, sell everything".',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',

  '1. 為什麼聰明人也會虧錢：兩套系統':
    '1. Why clever people lose money too: two systems',
  'Kahneman 的框架：大腦有': "Kahneman's framework: the brain runs ",
  '系統一': 'System 1',
  '（快、直覺、省力——處理 95% 的日常）與':
    ' (fast, intuitive, cheap to run — it handles 95% of daily life) and ',
  '系統二': 'System 2',
  '（慢、費力、講邏輯）。演化把系統一調校成適合叢林求生：怕損失、跟隨群體、找模式、要立刻行動。':
    ' (slow, effortful, logical). Evolution tuned System 1 for staying alive in the jungle: fear losses, follow the group, look for patterns, act now.',
  '問題': 'The problem',
  '金融市場獎勵的行為，幾乎全部與叢林直覺相反。':
    'Almost every behaviour financial markets reward runs against jungle instinct. ',
  '行為財務學就是「系統一在市場裡闖的禍」的目錄——以及怎麼用制度把系統二綁進流程。':
    'Behavioural finance is the catalogue of the trouble System 1 causes in markets — and of how to wire System 2 into your process with rules.',

  /* ── 六大偏誤 ── */
  '2. 六大偏誤目錄（每個都配自測）':
    '2. A catalogue of six biases (each with a self-test)',
  '① 損失趨避': '① Loss aversion',
  '虧 1 萬的痛 ≈ 賺 2 萬的爽（前景理論，痛苦權重約 2 倍）。':
    'Losing NT$10,000 hurts about as much as making NT$20,000 feels good (prospect theory: the pain carries roughly twice the weight). ',
  '市場後果：處分效應': 'The market consequence: the disposition effect',
  '——急著賣賺錢的（鎖住快樂）、死抱虧錢的（逃避痛苦定案），恰好是「賣掉花、澆灌草」。':
    ' — you rush to sell the winners, locking in the pleasure, and cling to the losers, avoiding the pain of making it final. Which is exactly "selling the flowers and watering the weeds".',
  '自測：': 'Self-test: ',
  '就是開頭那把硬幣——期望值 +2,500 你敢玩嗎？':
    'the coin flip at the top of this page — the expected value is +2,500, so would you play?',
  '② 過度自信': '② Overconfidence',
  '多數人自評駕駛技術「高於平均」；投資人高估自己的資訊與判斷。':
    'Most people rate their own driving "above average"; investors overrate their information and their judgement. ',
  '市場後果：': 'The market consequence: ',
  '過度交易（W10 的過路費）、倉位過度集中、不設安全邊際。':
    'over-trading (the tolls from W10), positions that are far too concentrated, and no margin of safety.',
  '給 10 題冷知識，要求答「90% 信心區間」——多數人錯 4–5 題（區間畫太窄）。':
    'take 10 trivia questions and answer each with a "90% confidence interval" — most people get 4 or 5 wrong, because they draw the interval far too narrow.',
  '③ 確認偏誤': '③ Confirmation bias',
  '買了之後只看利多新聞，把反證滑掉。':
    'Once you have bought, you read only the good news and swipe past anything that argues the other way. ',
  '論點過期了還加碼攤平；社群同溫層放大效應。':
    'you average down even after the thesis has expired, and the echo chamber online amplifies all of it.',
  '回想你上次買股後，主動搜尋過「不該買它的理由」嗎？':
    'think back to the last stock you bought — did you go looking for reasons not to buy it?',
  '④ 錨定': '④ Anchoring',
  '無關的數字黏住判斷。': 'An irrelevant number sticks to your judgement. ',
  '抱著「回本再說」的殭屍部位；被歷史高價錨定而覺得「腰斬＝便宜」。':
    'zombie positions held "until I break even"; anchored on an old high, you start to feel that "down 50% = cheap".',
  '「你的買入成本」就是最強的錨——「跌回成本我就賣」有任何商業邏輯嗎？（公司價值與你的成本無關。）':
    '"what you paid" is the strongest anchor of all — is there any business logic to "I will sell when it comes back to my cost"? (What the company is worth has nothing to do with what you paid.)',
  '⑤ 羊群效應': '⑤ Herding',
  '跟著群體才安心，演化上落單＝死亡。':
    'Staying with the crowd feels safe; in evolutionary terms, being left alone meant death. ',
  '追熱門題材在最貴時進場（W12 紅燈區）、恐慌時跟著踩踏出場——「別人貪婪我恐懼」難，正因為它對抗的是生存本能。':
    'you chase a hot theme and buy at its most expensive (the W12 red-light zone), then join the stampede for the exit in a panic. "Be fearful when others are greedy" is hard precisely because it fights a survival instinct.',
  '⑥ 近因效應': '⑥ Recency bias',
  '最近的經驗權重被放大。': 'Recent experience gets weighted far too heavily. ',
  '連漲三年→「股票只會漲」（2021）；剛崩盤→「再也不碰股票」（2009 空手錯過十年多頭）。W11 的「落後指標當領先用」，心理根源就是它。':
    'three years up in a row → "stocks only go up" (2021); straight after a crash → "never touching stocks again" (sitting out from 2009 and missing a ten-year bull run). The "reading a lagging indicator as a leading one" mistake from W11 has its psychological root right here.',

  /* ── 配對遊戲 ── */
  '3. 練一輪：這是哪個偏誤？': '3. One round of practice: which bias is this?',
  '六個交易室裡的真實場景，配對到六大偏誤：':
    'Six situations straight out of a dealing room, matched to the six biases:',
  '偏誤配對遊戲': 'Bias matching game',
  '①損失趨避': '① Loss aversion',
  '②過度自信': '② Overconfidence',
  '③確認偏誤': '③ Confirmation bias',
  '④錨定': '④ Anchoring',
  '⑤羊群': '⑤ Herding',
  '⑥近因': '⑥ Recency',
  '小張的持股裡，賺 15% 的早早賣掉了，虧 30% 的抱了三年「等回本」。':
    'In Chang\'s portfolio, anything up 15% got sold early, and anything down 30% has been held for three years "until it comes back".',
  '損失趨避的處分效應——鎖住快樂、逃避把痛苦定案，結果是「賣掉花、澆灌草」，組合裡留下的全是弱者。':
    'Loss aversion, showing up as the disposition effect — locking in the pleasure, avoiding making the pain final. The result is "selling the flowers and watering the weeds", and the portfolio ends up holding only the weak ones.',
  '小李一年周轉率 300%，覺得自己「看盤很準」，帳戶卻跑輸大盤。':
    'Lee turns his portfolio over 300% a year, is convinced he "reads the screen well", and still trails the index.',
  '過度自信——高估自己的資訊與判斷，換來過度交易的過路費（W10）；台股研究算出這張帳單約年 3.8 個百分點。':
    'Overconfidence — overrating his own information and judgement, and paying the tolls of over-trading for it (W10). The Taiwan study puts that bill at roughly 3.8 percentage points a year.',
  '買進後，小王只追蹤說這檔會漲的 YouTuber，看到利空就滑掉。':
    'After buying, Wang follows only the YouTubers who say the stock will rise, and swipes past any bad news.',
  '確認偏誤——只收集支持自己的證據；解藥是強制反方論證：買入前必寫「最強的反對理由」。':
    'Confirmation bias — collecting only the evidence that agrees with you. The antidote is a mandatory counter-argument: before buying, you must write down "the strongest case against".',
  '「這檔從 600 跌到 300，腰斬耶，一定很便宜！」':
    '"This one went from 600 to 300 — cut in half, it must be cheap!"',
  '錨定——被歷史高價 600 綁架了判斷；300 貴不貴，只跟公司現在的基本面與內在價值有關（W19–21），跟它「曾經多少錢」無關。':
    'Anchoring — the old high of 600 has hijacked the judgement. Whether 300 is expensive depends only on the company\'s fundamentals and intrinsic value today (W19–21), and not at all on what it once cost.',
  '同事都在買某熱門題材，小陳怕錯過，在新聞最熱那週進場。':
    'Everyone at work is buying some hot theme. Chen, afraid of missing out, buys in the week the news peaks.',
  '羊群效應——跟著群體才安心；但題材最熱＝通常最貴（W12 紅燈區），演化本能恰好把你送到最差的進場點。':
    'Herding — the crowd is where it feels safe. But a theme at its hottest is usually at its most expensive (the W12 red-light zone), so the evolutionary instinct delivers you to the worst possible entry point.',
  '連漲三年後，小林把預備金也投入：「股票就是只會漲。」':
    'After three straight years of gains, Lin puts the emergency fund in as well: "stocks just go up."',
  '近因效應——最近的經驗權重被放大成「永遠」；2021 年的「只會漲」與 2009 年的「再也不碰」是同一個偏誤的兩面。':
    'Recency bias — recent experience gets inflated into "always". "It only goes up" in 2021 and "never again" in 2009 are two faces of the same bias.',
  '<b>答對。</b>': '<b>Correct.</b>',
  /* 收尾的 `」——</b>` 抽取器抓不到，所以這裡保留 「 讓引號成對（見檔頭） */
  '<b>是「': '<b>It was "',
  '完成：': 'Done: ',
  '——記住：認得出別人的偏誤只是第一步，練習 A 要在自己的決策裡找到它們。':
    ' — and remember: spotting someone else\'s bias is only step one. Exercise A asks you to find them in your own decisions.',
  '已答': 'Answered',

  /* ── 對策工程 ── */
  '4. 對策工程：不靠意志力，靠制度':
    '4. Engineering the countermeasures: rules, not willpower',
  '行為財務的殘酷結論：': 'The brutal conclusion of behavioural finance: ',
  '知道偏誤不會讓你免疫': 'knowing about a bias does not make you immune to it',
  '（Kahneman 自己承認研究一輩子仍會犯）。有效的是把決策外包給「冷靜時設計的制度」——':
    ' (Kahneman admitted a lifetime of research never stopped him falling for them). What works is outsourcing the decision to rules you designed while calm — ',
  '點一個偏誤，看哪些對策打得到它':
    'click a bias and see which countermeasures reach it',
  '對策速查器': 'Countermeasure finder',
  '全部': 'All',
  'IPS 預先承諾（W18）': 'IPS pre-commitment (W18)',
  '恐慌時執行冷靜時的規則，不做新決定':
    'In a panic you execute the rules you wrote while calm, and make no new decisions',
  '檢查清單（W8 紅旗 → W36 買入清單）':
    'Checklists (W8 red flags → the W36 buy list)',
  '強制系統二逐項過，不給直覺跳關':
    'Forces System 2 through item by item, and leaves instinct no gate to skip',
  '反方論證強制': 'A compulsory counter-argument',
  '買入前必寫「這筆投資最強的反對理由」（W26 論文的反方章）':
    'Before buying you must write "the strongest case against this investment" (the counter-case chapter of the W26 thesis)',
  '機械化執行（W17 定日投入、W18 再平衡）':
    'Mechanical execution (W17 fixed-date investing, W18 rebalancing)',
  '把「何時動作」從情緒手中拿走':
    'Takes "when to act" out of the hands of your emotions',
  '決策與結果分離（W38 日誌）':
    'Separating the decision from the outcome (the W38 journal)',
  '用「當時可知的資訊」評價決策，不用結果':
    'Judges a decision on what could be known at the time, not on how it turned out',
  '成本失憶練習': 'The cost-amnesia drill',
  '問「今天空手，我會用現價買它嗎？」——不會就該賣，與成本無關':
    'Ask "if I owned none of it today, would I buy it at this price?" If not, sell — what you paid has nothing to do with it',
  '｜針對：': ' | targets: ',
  '共同原理：': 'The common principle: ',
  '好的投資流程長得像機場安檢——不信任任何人的直覺（包括自己的），每個人都走一樣的關卡。':
    'a good investing process looks like airport security — nobody\'s instinct is trusted, your own included, and everybody goes through the same gates.',

  /* ── 台股實證 ── */
  '5. 台股散戶的實證註腳':
    "5. An empirical footnote from Taiwan's retail investors",
  '行為偏誤不是理論：學界對台灣市場的著名研究（Barber, Lee, Liu &amp; Odean, "Just How Much Do Individual Investors Lose by Trading?"）利用台股完整交易資料估計，':
    'Behavioural bias is not a theory. A well-known academic study of the Taiwanese market (Barber, Lee, Liu &amp; Odean, "Just How Much Do Individual Investors Lose by Trading?") used the market\'s complete trading records to estimate that ',
  '散戶因過度交易造成的整體損失約當其投資組合報酬的年 3.8 個百分點':
    'the losses retail investors inflict on themselves through over-trading come to roughly 3.8 percentage points of their portfolio return a year',
  '——過度自信（②）＋過路費（W10）的實證帳單。這是把「行為成本」量化得最乾淨的研究之一（細節以論文為準）。':
    ' — the empirical bill for overconfidence (②) plus tolls (W10). It is one of the cleanest measurements of "behavioural cost" anywhere; the paper itself is the authority on the details.',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「我知道這些偏誤，所以我沒事」': '"I know about these biases, so I am fine"',
  '知識不等於免疫；偏誤在情緒高張時發作，而那時你不會覺得自己有偏誤。對策是制度，不是自省。':
    'Knowledge is not immunity. A bias fires when emotion runs high, and in that moment you will not feel biased at all. The remedy is a system, not introspection.',
  '「行為財務＝別人不理性，我可以套利」':
    '"Behavioural finance means everyone else is irrational and I can arbitrage them"',
  '第一課永遠是照鏡子；市場的不理性能維持得比你的資金久（凱因斯）。':
    'The first lesson is always to look in the mirror. The market can stay irrational longer than your money can last (Keynes).',
  '「紀律＝壓抑情緒」': '"Discipline means suppressing your emotions"',
  '情緒不可能消除；紀律是':
    'You cannot get rid of emotion. Discipline is ',
  '把重要決定移到情緒到場之前':
    'moving the important decisions to before the emotion arrives',
  '（IPS 的本質）。': ' — which is exactly what an IPS is.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '70 分': '70 min',
  '《快思慢想》選章': 'Selected chapters of "Thinking, Fast and Slow"',
  '前景理論（損失趨避）＋過度自信兩部分——原典的實驗敘述比任何轉述都有說服力。':
    'The prospect theory (loss aversion) and overconfidence sections — the original account of the experiments is more convincing than any summary of it.',
  '20 分': '20 min',
  '名詞地圖。': 'A map of the terms.',
  '台股完整交易資料的研究（':
    'A study built on the complete trading records of the Taiwan market (',
  ', 2009）；讀摘要與結論即可——看見「自己人」的數據。':
    ', 2009); the abstract and conclusion are enough — this is data about our own market.',
  '選讀': 'Optional',
  '《高勝算決策》前兩章': 'The first two chapters of "Thinking in Bets"',
  '決策與結果分離——W38 的預習。':
    'Separating the decision from the outcome — a preview of W38.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '偏誤盤點與 IPS 增補（本週交付物）':
    'A bias inventory, and an addition to your IPS (this week\'s deliverable)',
  '任務 A｜個人偏誤盤點（30 分鐘）': 'Task A | Personal bias inventory (30 minutes)',
  '回顧自己過去的 3 個真實決策（投資、大額消費、職涯皆可），每個寫：':
    'Look back at three real decisions of your own — investing, a large purchase or a career move all count — and for each write:',
  '當時的決定與理由': 'The decision you made at the time, and why',
  '事後看，哪個偏誤在場？（對照六大目錄）':
    'With hindsight, which bias was in the room? (Check it against the six)',
  '證據是什麼？（誠實——這份文件只給自己看）':
    'What is the evidence? (Be honest — nobody else ever reads this)',
  '任務 B｜IPS 增補「我的偏誤與對策」（20 分鐘）':
    'Task B | Add "my biases and my countermeasures" to the IPS (20 minutes)',
  '在 W18 的 IPS 加一節：列出你': 'Add a section to your W18 IPS listing ',
  '最容易犯的前兩個偏誤': 'the two biases you fall for most easily',
  '（從任務 A 歸納）＋各配一條具體對策（從對策表選，寫成可執行的規則，如「任何買入決定隔 48 小時再下單」）。':
    ' (drawn from task A), each paired with one concrete countermeasure. Pick from the table above and write it as a rule you can actually follow, such as "every decision to buy waits 48 hours before the order goes in".',
  '驗收標準：': 'What counts as done: ',
  '3 個真實決策的偏誤標記完成（有證據不是貼標籤）；IPS 新增節完成且對策可執行（有具體觸發條件）。':
    'three real decisions tagged with a bias, backed by evidence rather than a label; and a new IPS section whose countermeasures can actually be executed, with concrete triggers.',
  '自我檢核': 'Check yourself',
  '3 個真實決策的偏誤標記完成（有證據不是貼標籤）':
    'Three real decisions are tagged with a bias, with evidence rather than a label',
  'IPS 新增節完成且對策可執行（有具體觸發條件）':
    'The new IPS section is written, and its countermeasures are executable with concrete triggers',
  '能不看講義背出六大偏誤':
    'You can recite the six biases without looking at the notes',

  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up to check)',
  '處分效應「賣盈抱虧」為什麼長期傷害報酬？':
    'Why does the disposition effect — selling winners and holding losers — hurt returns over the long run?',
  '→ 它系統性地': '→ Because it systematically ',
  '截斷贏家、放養輸家': 'cuts the winners short and lets the losers run',
  '：上漲的好公司早早賣掉（錯過複利主升段，W1 的後段爆發），惡化的公司無限展期（虧損越滾越深）——長期組合裡留下的全是弱者。':
    ': the good companies that are rising get sold early, so you miss the main compounding stretch (the back-half surge from W1), while the deteriorating ones get rolled over indefinitely and the loss keeps deepening. Over time the portfolio holds nothing but the weak ones.',
  '「跌回我的成本價就賣」犯了哪（幾）個偏誤？':
    'Which bias — or biases — does "I will sell when it falls back to what I paid" commit?',
  '錨定': 'Anchoring',
  '（成本價是與公司價值無關的數字）＋':
    ' (what you paid is a number with no bearing on what the company is worth) plus ',
  '損失趨避': 'loss aversion',
  '（不肯把浮虧定案）；正確問題永遠是「以現價與現在的基本面，它值得持有嗎」。':
    ' (refusing to make a paper loss final). The right question is always: at today\'s price and today\'s fundamentals, is it worth holding?',
  '為什麼對策的主軸是「制度」而不是「更努力自省」？':
    'Why do the countermeasures centre on rules rather than on trying harder to examine yourself?',
  '→ 因為偏誤發作於': '→ Because a bias fires ',
  '情緒高張的當下': 'in the very moment emotion is running highest',
  '，而那一刻自省能力恰好最弱（系統二離線）；制度的作用是把關鍵決策移到情緒到場之前（預先承諾）或強制通過關卡（清單），不依賴當下的你。':
    ', which is exactly when your capacity for self-examination is weakest — System 2 is offline. Rules move the key decision to before the emotion arrives (pre-commitment), or force it through a gate (a checklist), so that nothing depends on the you of that moment.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '兩個現場實驗': 'Two live experiments',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。本週不用講的，直接對家人做兩個實驗。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). This week you explain nothing: you run two experiments on your family instead.',
  '實驗一（損失趨避）': 'Experiment one (loss aversion)',
  '「我們玩擲硬幣：正面我給你 1,500，反面你給我 1,000。玩不玩？」（多數人搖頭。）「但這遊戲平均每把你賺 250！你的大腦把『輸 1,000 的痛』放大了兩倍——這就是為什麼股票跌 10% 的難受，遠超過漲 10% 的開心，也是為什麼很多人一跌就想全賣。」':
    '"Let us flip a coin: heads I give you 1,500, tails you give me 1,000. Want to play?" (Most people shake their heads.) "But on average you make 250 a flip! Your brain doubled the pain of losing 1,000 — which is why a stock falling 10% hurts far more than it rising 10% feels good, and why so many people want to sell everything the moment it drops."',
  '實驗二（錨定）': 'Experiment two (anchoring)',
  '先問「台北 101 高度是高於還是低於 300 公尺？」再問「你猜實際多高？」——換一個家人先問「高於還是低於 700 公尺？」再猜。（兩人的猜測會被各自聽到的數字拉走；實際 508 公尺。）「一個隨便的數字就能綁架判斷——所以『我的買入成本』『歷史最高價』都在偷偷綁架我們的賣出決定。」':
    'First ask: "is Taipei 101 taller or shorter than 300 metres?" then "how tall do you think it actually is?" With a second family member, start with "taller or shorter than 700 metres?" and then ask them to guess. (Each guess gets dragged towards whichever number that person heard; the real answer is 508 metres.) "An arbitrary number is enough to hijack a judgement — which is how \'what I paid\' and \'the all-time high\' quietly hijack our decisions about when to sell."',
  '收尾（護身三句）': 'Closing (three lines to keep you safe)',
  '1. 跌得越痛，越不要當下做決定（決定是冷靜時寫好的——秀 IPS）':
    '1. The more a fall hurts, the less you decide anything on the spot (the decisions were written while calm — show them the IPS)',
  '2. 買它之前，先講出三個「不該買」的理由':
    '2. Before you buy it, say out loud three reasons not to',
  '3. 判斷要不要留著一樣東西，問「今天重來我還會買嗎」，別問「回本了嗎」':
    '3. To decide whether to keep something, ask "would I buy it again today?", not "have I broken even yet?"',
  '預期反應與應對': 'What they will say, and what to answer',
  '「你們學這麼多還會被騙？」':
    '"You have learned all this and you still get caught out?"',
  '「會，連發明這門學問的教授都會。差別是我們用規則把自己綁起來——像尤利西斯把自己綁在桅杆上聽海妖唱歌。」':
    '"Yes — even the professors who founded the field do. The difference is that we tie ourselves down with rules, the way Ulysses had himself lashed to the mast so he could hear the sirens sing."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '六大偏誤能各配一個自己的例子':
    'You can give an example of your own for each of the six biases',
  'IPS「偏誤與對策」節完成':
    'The "biases and countermeasures" section of the IPS is written',
  '兩個家人實驗執行完（記錄他們的反應）':
    'Both family experiments are done, with their reactions written down',
  '本週心得記一行（下週回顧用）':
    'One line of notes on the week, for next week\'s review',
  '🎓 第 23 週完成——把自己綁上桅杆了。下週見：Buffett 股東信精讀。':
    '🎓 Week 23 done — you are lashed to the mast. Next up: a close reading of Buffett\'s shareholder letters.',
  '下週預告 · Week 24：大師心法——Buffett 股東信精讀':
    "Next week · Week 24: how the masters think — a close reading of Buffett's shareholder letters",
  '——開始讀原典。六十年股東信是「所有偏誤的反面教材」：你會發現他的每條原則，都是本週某個偏誤的解藥。':
    ' — time to read the primary source. Sixty years of shareholder letters read as a counter-example to every bias in this week\'s catalogue: you will find that each of his principles is the antidote to one of them.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：護城河進階＋波特五力':
    "Previous week: moats in depth, plus Porter's five forces",
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
