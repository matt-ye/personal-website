/*
 * 給家人的投資課 Week 25：大師心法——Marks 備忘錄與週期思維 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-25-marks-cycles.html
 *
 * 沿用 week-01 的慣例（行內標記邊界留半形空白、人名書名用原文、
 * 語域保持家庭教材的口語溫度）。本週沒有「萬」，溫度計與鐘擺都是判定值。
 *
 * 人名與書名一律用原文：Howard Marks、Buffett、Oaktree；
 *   《掌握市場週期》= Mastering the Market Cycle
 *   《投資最重要的事》= The Most Important Thing
 *   「股市已死」= "The death of equities"（1979 BusinessWeek 封面的原句）
 *   戴維斯雙殺 → "the Davis double play in reverse"（英文的 Davis double play
 *     指的是正向版本，中文的「雙殺」是它的反面，所以加 in reverse）
 * 全部查得到英文原名，KEEP 因此是空的。
 *
 * ⚠ 已知限制（非本對照表可處理）：鐘擺判詞的分隔符「：」、句末的「。」「」」
 *   與 <a> 之間的頓號「、」都不含漢字，抽取器抓不到，英文頁上會保留全形符號。
 *   表頭的 "Buffett（W24）" 同理——整格沒有漢字，抽取器看不見它。
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
  '給家人的投資課 · Q2 投資人季 · Week 25':
    "Family Investing Course · Q2 The Investor's Quarter · Week 25",
  '大師心法——Marks 備忘錄與週期思維':
    "The Master's Mindset — Marks' Memos and Cycle Thinking",
  'Buffett 教你看': 'Buffett teaches you to read the ',
  '公司': 'company',
  '，Marks 教你看': '; Marks teaches you to read the ',
  '環境': 'environment',
  '——市場現在處於貪婪還是恐懼、承擔風險此刻是被獎勵還是被懲罰。':
    ' — whether the market is in greed or in fear right now, and whether taking risk is being rewarded or punished at this moment.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 12': 'Weeks 12',
  '24 週': '24',
  '52 週 · 第 25 週': '52 weeks · Week 25',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  'Q2 知識篇的最後一課。兩位大師合起來，才是「買什麼」＋「什麼時候該更小心」的完整判斷力。本週交付「市場溫度計」，此後每季更新。':
    'The last lesson of the Q2 knowledge block. Only together do the two masters give you the full judgement: what to buy, plus when to be more careful. This week delivers the "market thermometer", to be updated every quarter from now on.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享時家人選的「最難做到的家訓」是哪一條——那條通常就是你們家最需要用制度守住的地方。':
    'Look back at which "hardest family rule to keep" your family picked when you shared last week — that one is usually where your family most needs a system to hold the line.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '市場「風險最高」的時刻，感覺起來是什麼樣子？':
    'What does the moment of highest risk in a market actually feel like?',
  '猜一個答案': 'Pick an answer',
  '人人恐慌、血流成河': 'Everyone panicking, blood in the streets',
  '看起來最安全、人人覺得穩賺': 'It looks safest, and everyone is sure of a profit',
  '波動最劇烈的時候': 'When the swings are at their wildest',
  '答對了——這是 Marks 最反直覺也最重要的一句：風險最高的時刻，看起來最安全。人人覺得穩賺時，估值最貴、槓桿最滿、消防通道最擠；等到血流成河，壞消息已出、價格已跌、槓桿已清，剩下的風險反而小。':
    "Correct — this is Marks' most counter-intuitive and most important line: the moment of highest risk is the one that looks safest. When everyone is sure of a profit, valuations are at their dearest, leverage at its fullest and the fire exits at their most crowded. By the time there is blood in the streets, the bad news is out, prices have fallen and leverage has been cleared — and the risk that remains is smaller.",
  '直覺的答案——但 Marks 的答案是「看起來最安全的時候」。人人覺得穩賺時，估值最貴、槓桿最滿、借錢最容易；風險就在「沒人覺得有風險」的過程裡累積到最大。等到血流成河，風險多半已經釋放掉了。':
    'The intuitive answer — but Marks says it is the moment that looks safest. When everyone is sure of a profit, valuations are at their dearest, leverage at its fullest and money at its easiest to borrow; risk builds to its maximum during the very stretch when nobody feels any. By the time there is blood in the streets, most of it has already been released.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 第二層思考：與共識的距離才有超額':
    '1. Second-level thinking: the excess lives in the distance from consensus',
  'Marks 的起手式：': "Marks' opening move:",
  '第一層思考': 'First-level thinking',
  '「這是好公司，買！」': '"Good company, buy!"',
  '第二層思考': 'Second-level thinking',
  '「這是好公司，': '"Good company — ',
  '但所有人都知道它好、價格已反映了多少？':
    'but everyone knows it is good, so how much of that is already in the price?',
  '如果共識已把它捧上天，好公司也是壞投資。」':
    ' If the consensus has already carried it to the sky, a good company is still a bad investment."',
  '第一層比的是「對不對」，第二層比的是「':
    'The first level competes on being right; the second competes on whether ',
  '你和市場共識的差距': 'the gap between you and the market consensus',
  '對不對」——超額報酬只能來自「你對、且共識錯」的地方。這與 W19「便宜有理由」、W21「市價隱含九宮格哪一格」是同一件事的哲學版：':
    ' is right — excess return can only come from where you are right and the consensus is wrong. This is the philosophical version of "cheap for a reason" in W19 and "which box of the grid does the market price imply" in W21: ',
  '價格裡永遠已經住著一個劇本，你的工作是判斷那個劇本合不合理。':
    'there is always a script already living inside the price, and your job is to judge whether that script is reasonable.',
  '推論：如果你對一檔股票的看法跟財經新聞完全一樣，你大概率賺不到超額——不是因為看法錯，是因為它已在價格裡（W16 的效率邏輯）。':
    'A corollary: if your view of a stock is identical to the financial news, you will most likely earn no excess — not because the view is wrong, but because it is already in the price (the efficiency logic of W16).',

  /* ── 風險的真義 ── */
  '2. 風險的真義：收攏三週伏筆':
    '2. What risk really means: three weeks of set-up, collected',
  'W15 說「σ 不是風險的全部」、W21 說「波動是機會不是風險」——Marks 給出完整版：':
    'W15 said "σ is not the whole of risk" and W21 said "volatility is opportunity, not risk" — Marks gives the complete version:',
  '風險是「本金永久損失」的可能性，不是價格的上下晃動。':
    'Risk is the chance of a permanent loss of capital, not the wobbling of a price up and down.',
  '風險不可測（事前）': 'risk cannot be measured in advance',
  '：σ 可以算，但「會不會永久損失」取決於買價 vs 價值、公司會不會壞掉——這些沒有公式（所以才需要 W21 的安全邊際與 W22 的質化）':
    ': you can compute σ, but whether the loss becomes permanent depends on the price you paid versus value, and on whether the business breaks — and neither has a formula (which is why W21 gives you the margin of safety and W22 the qualitative work)',
  '風險與感受相反': 'risk runs opposite to how it feels',
  '：市場最亢奮、人人覺得「安全」時（紅燈區、高估值），真實風險最高；血流成河、人人恐懼時，風險多半已釋放大半——':
    ': when the market is at its most excited and everyone feels "safe" (the red-light zone, rich valuations), real risk is at its highest; when there is blood in the streets and everyone is afraid, most of the risk has already been released — ',
  '風險最高的時刻，看起來最安全':
    'the moment of highest risk is the one that looks safest',
  '高風險 ≠ 高報酬': 'high risk ≠ high return',
  '：教科書說風險溢酬，Marks 修正：高風險資產只是「':
    ': textbooks talk about a risk premium; Marks corrects them. A high-risk asset merely ',
  '必須提供': 'has to offer',
  '高預期報酬才有人買」，不保證實現——「高風險高報酬」的正確版是「高風險、高報酬的':
    ' a high expected return before anyone will buy it, which guarantees nothing. The correct version of "high risk, high return" is "high risk, a ',
  '承諾': 'promise',
  '、高變異的結果」': ' of high return, and a highly variable outcome"',

  /* ── 心理鐘擺 ── */
  '3. 週期思維：定位，不預測': '3. Cycle thinking: orientation, not prediction',
  '延續 W12（循環）但把鏡頭從經濟轉向':
    'It carries on from W12 (cycles), but turns the lens away from the economy and towards ',
  '市場心理與信貸': 'market psychology and credit',
  '——Marks 認為這兩個週期比經濟週期更劇烈、對投資人更重要。':
    ' — Marks holds that these two cycles are more violent than the economic one and matter more to an investor. ',
  '拉動鐘擺看看每一段該有什麼姿態':
    'Drag the pendulum and see what posture each stretch calls for',
  '心理鐘擺：你現在站在哪一段？':
    'The pendulum of psychology: which stretch are you standing in?',
  '市場心理鐘擺': 'The pendulum of market psychology',
  '極度恐懼': 'Extreme fear',
  '極度貪婪': 'Extreme greed',
  '中點（幾乎不停留）': 'The midpoint (where it hardly ever rests)',
  '鐘擺位置': 'Pendulum position',
  '中性': 'Neutral',
  '鐘擺盪到左端': 'the pendulum has swung to the far left',
  '壞消息全出、成交量萎縮、沒人想談股票；信貸窗口關上，好公司也可能借不到錢。':
    'All the bad news is out, volumes have shrivelled and nobody wants to talk about stocks; the credit window is shut, and even good companies may not be able to borrow.',
  '姿態：這是機制最有價值的時候——照 W17 的固定日期買、照 W18 的規則再平衡。不是「勇敢抄底」，是「不要停手」。':
    'Posture: this is when the machinery is worth most — buy on the fixed dates from W17, rebalance by the rules from W18. Not "bravely catching the bottom", simply "do not stop".',
  '偏恐懼': 'Leaning fearful',
  '鐘擺在左半': 'the pendulum is in the left half',
  '估值回到區間下緣、媒體語氣轉為悲觀，但還沒到極端。':
    'Valuations are back at the bottom of their range and the media has turned pessimistic, but it is not extreme yet.',
  '姿態：維持既定計畫，安全邊際要求可回到常態（如 30%）；有閒錢可略為加快部署。':
    'Posture: keep to the plan you already have; the margin-of-safety requirement can go back to normal (30%, say). If you have spare cash you can deploy it a little faster.',
  '鐘擺在中點附近': 'the pendulum is near the midpoint',
  'Marks 說鐘擺「幾乎不停在中間」——所以這裡通常是路過，不是常態。':
    'Marks says the pendulum "hardly ever stops in the middle" — so this is usually somewhere you pass through, not somewhere you live.',
  '姿態：照 IPS 執行，不做額外調整。這時候最該做的是研究功課，不是動作。':
    'Posture: follow the IPS and make no extra adjustments. What this moment is for is research homework, not action.',
  '偏貪婪': 'Leaning greedy',
  '鐘擺在右半': 'the pendulum is in the right half',
  '估值走高、IPO 變多、社群開始出現對帳單，但還沒到全民狂熱。':
    'Valuations are climbing, IPOs are multiplying and brokerage screenshots are appearing on social media — but it is not a national mania yet.',
  '姿態：提高安全邊際要求、放慢新資金部署、檢查倉位有沒有被漲幅推破 W18 的上限。':
    'Posture: raise the margin-of-safety requirement, slow the deployment of new money, and check whether the rally has pushed any position past the W18 ceiling.',
  '鐘擺盪到右端': 'the pendulum has swung to the far right',
  '「這次不一樣」「新時代」滿天飛、排隊上市首日暴漲、借錢容易到爛公司也拿得到——風險在此累積到最大。':
    '"This time is different" and "a new era" are everywhere, listings queue up and spike on day one, and money is so easy to borrow that even bad companies get it — this is where risk piles up to its maximum.',
  '姿態：邊際要求拉到最嚴、確認零槓桿、新資金分批拉到最長。<b>但不是賣光</b>——擇時的教訓（W12）不因為溫度高就失效。':
    'Posture: tighten the margin requirement as far as it goes, confirm zero leverage, stretch new money over the longest instalments. <b>But do not sell everything</b> — the lesson about timing (W12) does not stop applying just because the temperature is high.',

  '可操作版': 'The usable version',
  '你無法預測何時反轉，但可以': 'You cannot predict when it turns, but you can ',
  '評估現在站在鐘擺哪一段':
    'judge which stretch of the pendulum you are standing in',
  '，然後調整攻守（': ' and then adjust attack and defence accordingly (',
  '不是進出場！': 'not getting in and out!',
  '）：偏貪婪端 → 提高安全邊際要求、不加槓桿、檢查倉位；偏恐懼端 → 敢於執行既定的再平衡與分批買入（W17–18 的機制此時最有價值）。':
    '): towards the greedy end → raise the margin-of-safety requirement, take on no leverage, check your positions; towards the fearful end → find the nerve to carry out the rebalancing and instalment buying you already planned (the W17–18 machinery is worth most right here).',

  /* ── 市場溫度計 ── */
  '4. 市場溫度計：把感覺變成檢查表':
    '4. The market thermometer: turning a feeling into a checklist',
  'Marks 在《掌握市場週期》給過一張「市場評估清單」，本課綱簡化為':
    'In Mastering the Market Cycle, Marks offers a "market assessment checklist"; this syllabus simplifies it down to ',
  '五指標': 'five indicators',
  '。逐項點選你的判定，下面會給出綜合溫度與對應姿態——這就是本週的交付物，練習時把實際證據填進去：':
    '. Click your call on each one and the combined temperature and matching posture appear below — this is the deliverable for the week, and in the exercise you fill in the real evidence:',
  '市場溫度計（五指標）': 'The market thermometer (five indicators)',
  '偏冷': 'Cold',
  '偏熱': 'Hot',
  '估值水位': 'Valuation level',
  '大盤 P/E vs 10 年區間': 'Market P/E vs its 10-year range',
  '證交所統計／指數 P/E': 'TWSE statistics / index P/E',
  '高於區間上緣': 'Above the top of the range',
  '低於區間下緣': 'Below the bottom of the range',
  'IPO／新股熱度': 'IPO and new-listing heat',
  '上市家數與首日表現': 'Number of listings and first-day performance',
  '財經新聞掃描': 'A scan of the financial news',
  '排隊上市、首日暴漲、題材股滿天飛':
    'Listings queuing up, first-day spikes, story stocks everywhere',
  'IPO 撤件、乏人問津': 'IPOs withdrawn, nobody interested',
  '信貸鬆緊': 'Credit conditions',
  '高收益債利差': 'High-yield bond spreads',
  '低利差、垃圾債搶手、借錢容易':
    'Tight spreads, junk bonds in demand, borrowing easy',
  '利差飆、銀行緊縮': 'Spreads spiking, banks tightening',
  '散戶情緒': 'Retail sentiment',
  '開戶數與融資餘額': 'New accounts opened and margin balances',
  '開戶／融資統計＋體感':
    'Account and margin statistics, plus what you can feel',
  '開戶暴增、社群曬對帳單、計程車司機報明牌':
    'Account openings surging, brokerage screenshots on social media, taxi drivers handing out tips',
  '成交量萎縮、沒人談股票': 'Volumes shrivelled, nobody talking about stocks',
  '媒體語言': 'The language of the media',
  '本週三個標題': 'Three headlines from this week',
  '財經媒體標題': 'Financial media headlines',
  '「這次不一樣」「新時代」': '"This time is different", "a new era"',
  '「股市已死」': '"The death of equities"',
  '<button data-v="-1">偏冷</button><button data-v="0" class="on">中性</button><button data-v="1">偏熱</button>':
    '<button data-v="-1">Cold</button><button data-v="0" class="on">Neutral</button><button data-v="1">Hot</button>',
  '<span class="where">查：': '<span class="where">Check: ',
  '<b>偏熱（': '<b>Running hot (',
  '項偏熱）。</b>姿態：①安全邊際要求提高（如 30%→40%）②新資金部署放慢（W17 分批拉長）③檢查倉位有沒有被漲幅推破 W18 上限、確認零槓桿。<strong>長期配置與定期投入不變。</strong>':
    'indicators running hot).</b> Posture: ① raise the margin-of-safety requirement (say 30%→40%) ② slow the deployment of new money (stretch the W17 instalments) ③ check whether the rally has pushed any position past the W18 ceiling, and confirm zero leverage. <strong>The long-term allocation and the regular contributions do not change.</strong>',
  '<b>偏冷（': '<b>Running cold (',
  '項偏冷）。</b>姿態：這是 W17–18 機制最有價值的時候——照固定日期買、照規則再平衡，把 W24 的原則清單拿出來執行。難的不是判斷，是<strong>在壞消息裡照做</strong>。':
    'indicators running cold).</b> Posture: this is when the W17–18 machinery is worth most — buy on the fixed dates, rebalance by the rules, and get the W24 principles list out and act on it. The hard part is not the judgement, it is <strong>doing it anyway while the news is bad</strong>.',
  '<b>還沒開始評。</b>逐項點選——正式做練習時，每一項都要填上本季的實際證據與日期，不是憑印象。':
    "<b>Nothing assessed yet.</b> Work down the list — and when you do the exercise for real, every line needs this quarter's actual evidence and a date, not an impression.",
  '<b>中性偏': '<b>Neutral, leaning ',
  '熱': 'hot',
  '冷': 'cold',
  '平': 'flat',
  '（熱': ' (hot',
  '／冷': ' / cold',
  '）。</b>Marks 說鐘擺「幾乎不停在中間」——中性通常是路過。此時最該做的是研究功課與更新溫度計，不是調整部位。':
    ').</b> Marks says the pendulum "hardly ever stops in the middle", so neutral is usually somewhere you are passing through. What matters most right now is the research homework and updating the thermometer, not moving positions.',
  '每季更新一次（與 W11 每月總經儀表板互補：儀表板看經濟、溫度計看人心）。這裡的按鈕只是把判斷結構化——練習時要把「本季實際證據」寫進去，不是憑印象。':
    "Update it once a quarter (it complements the monthly macro dashboard from W11: the dashboard watches the economy, the thermometer watches people). The buttons here only give the judgement a structure — in the exercise you have to write in this quarter's actual evidence, not an impression.",

  /* ── Buffett × Marks ── */
  '5. Buffett × Marks：互補的雙鏡頭':
    '5. Buffett × Marks: two lenses that complete each other',
  'Marks（本週）': 'Marks (this week)',
  '鏡頭': 'Lens',
  '由下而上：這家公司值多少': 'Bottom-up: what is this company worth',
  '由上而下：現在的環境獎勵什麼':
    'Top-down: what does the present environment reward',
  '核心問句': 'Core question',
  '「這生意十年後還在嗎？」': '"Will this business still be here in ten years?"',
  '「現在市場在鐘擺哪一端？」':
    '"Which end of the pendulum is the market at right now?"',
  '風險觀': 'View of risk',
  '不懂的不碰（能力圈）':
    'Do not touch what you do not understand (the circle of competence)',
  '最危險的話：這次不一樣': 'The most dangerous words: this time is different',
  '共同點': 'In common',
  '價格 vs 價值、逆共識需要獨立判斷、時間是朋友':
    'Price vs value; going against the consensus takes independent judgement; time is a friend',
  '實務組合：': 'In practice, combine them: ',
  '用 Marks 決定「多防禦」，用 Buffett 決定「買哪家」':
    'let Marks decide how defensive to be, and Buffett decide which company to buy',
  '——溫度計偏熱時提高 W21 的邊際要求，偏冷時把 W24 原則清單拿出來執行。':
    ' — when the thermometer runs hot, raise the W21 margin requirement; when it runs cold, get the W24 principles list out and act on it.',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「第二層思考＝跟大家反著做」':
    '"Second-level thinking means doing the opposite of everyone else"',
  '不是；共識': 'It does not. The consensus is ',
  '經常是對的': 'right a great deal of the time',
  '（尤其平淡時期）。第二層思考是「評估共識的定價」，只在極端處反向——為反而反只是另一種第一層。':
    ' (especially in the quiet stretches). Second-level thinking means assessing how the consensus is priced, and going the other way only at the extremes — being contrarian for its own sake is just first-level thinking in a different hat.',
  '「溫度計偏熱＝賣光」': '"A hot thermometer means sell everything"',
  '溫度計調整的是': 'What the thermometer adjusts is your ',
  '姿態': 'posture',
  '（邊際要求、槓桿、新資金部署速度），不是進出場開關（W12 擇時的教訓不變）。':
    ' (margin requirement, leverage, the pace at which new money goes in), not an in-or-out switch — the lesson about timing from W12 still stands.',
  '「Marks 每次都說『不知道』，沒有用」':
    '"Marks always says he does not know, which is useless"',
  '「知道自己不知道什麼」正是他的方法論核心；他對「何時」永遠說不知道，對「何處（鐘擺位置）」給出判斷——':
    'Knowing what you do not know is the very core of his method. On "when" he always says he does not know; on "where" — the position of the pendulum — he gives a judgement — ',
  '這個區分本身就是本週最重要的一課':
    'and that distinction is itself the most important lesson of the week',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '70 分': '70 min',
  'Oaktree 備忘錄（Howard Marks Memos）↗': 'Oaktree memos (Howard Marks Memos) ↗',
  '精讀兩篇：①一篇風險主題（搜 "Risk Revisited" 或 "The Seven Worst Words in the World"）——對照講義第 2 節；②最新一篇，練習「即時判讀」：他現在認為鐘擺在哪？用':
    'Read two of them closely: ① one on risk (search for "Risk Revisited" or "The Seven Worst Words in the World") — set it against section 2 of the notes; ② the most recent one, as practice at reading in real time: where does he think the pendulum is now? Use ',
  'W24 的三遍讀法': "W24's three-pass reading method",
  '，各萃取 3 條行為指令。': ', and pull 3 behavioural instructions out of each.',
  '40 分': '40 min',
  '《投資最重要的事》（Howard Marks）': 'The Most Important Thing (Howard Marks)',
  '第二層思考＋風險相關章節——書裡的版本比備忘錄更系統化。':
    'The chapters on second-level thinking and on risk — the book version is more systematic than the memos.',
  '選讀': 'Optional',
  '《掌握市場週期》信貸週期章':
    'Mastering the Market Cycle, the credit cycle chapter',
  '2008 劇本的完整解剖——信貸窗口怎麼從大開到猛然關上。':
    'A full dissection of the 2008 script — how the credit window went from wide open to slammed shut.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '建立市場溫度計（本週交付物）':
    "Build the market thermometer (this week's deliverable)",
  '建一頁「市場溫度計」（試算表或筆記）：五指標 ×（現況描述／熱中冷判定／證據來源／日期）':
    'Make a one-page "market thermometer" (spreadsheet or notes): five indicators × (description of the current state / hot-neutral-cold call / source of evidence / date)',
  '實際填入本季數據': "Fill in this quarter's actual figures",
  '：大盤 P/E（證交所查）、高收益債利差（FRED 搜 "high yield spread"）、IPO 與開戶熱度（新聞掃描）、媒體語言（記下三個本週標題）':
    ': the market P/E (look it up at the TWSE), high-yield bond spreads (search FRED for "high yield spread"), IPO and account-opening heat (a news scan), the language of the media (write down three headlines from this week)',
  '寫「本季溫度結論」三行：溫度判定＋因此我的姿態（邊際要求／新資金速度／要不要檢查倉位）':
    'Write three lines of "this quarter\'s temperature conclusion": the temperature call, and therefore my posture (margin requirement / pace of new money / whether to check positions)',
  '行事曆設定': 'Put a ',
  '每季更新': 'quarterly update',
  '（與 W39 月報節奏對齊）':
    ' in the calendar (aligned with the monthly-report rhythm of W39)',
  '從兩篇 memo 萃取的 6 條行為指令，併入 W24 的原則清單（v1 → v1.1）':
    'Fold the 6 behavioural instructions from the two memos into the W24 principles list (v1 → v1.1)',
  '驗收標準：': 'What counts as done: ',
  '五指標全部有本季實際證據（非印象）；溫度結論有對應的具體姿態調整；原則清單更新至 v1.1。':
    "All five indicators carry this quarter's actual evidence rather than impressions, the temperature conclusion has a matching concrete change of posture, and the principles list is updated to v1.1.",
  '自我檢核': 'Check yourself',
  '五指標全部有本季實際證據（非印象）':
    "All five indicators carry this quarter's actual evidence (not impressions)",
  '溫度結論有對應的具體姿態調整':
    'The temperature conclusion has a matching concrete change of posture',
  '原則清單更新至 v1.1': 'The principles list is updated to v1.1',

  /* ── 快問快答 ── */
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '「風險最高的時刻看起來最安全」——用信貸週期解釋為什麼':
    '"The moment of highest risk looks safest" — explain why, using the credit cycle',
  '→ 信貸氾濫期人人借得到錢 → 違約少 → 「風險很低」的體感 → 更激進地借貸與買入 → 槓桿與估值堆到極致——':
    '→ When credit is everywhere, everyone can borrow → defaults are few → it feels as though "risk is low" → borrowing and buying turn more aggressive → leverage and valuations pile up to the extreme — ',
  '風險在「沒人覺得有風險」的過程中累積到最大':
    'risk builds to its maximum over the very stretch when nobody feels any',
  '；反之恐慌期壞消息全出、價格已跌、槓桿已清，剩餘風險反而小。':
    '. In a panic the opposite holds: the bad news is all out, prices have fallen, leverage has been cleared, and the risk left over is smaller.',
  '第二層思考如何應用在「一檔人人叫好的成長股」？':
    'How do you apply second-level thinking to a growth stock everybody loves?',
  '→ 不否認它是好公司（第一層可能對），而是問：':
    '→ Not by denying it is a good company (the first level may well be right), but by asking: ',
  '目前價格隱含的成長假設是什麼':
    'what growth assumption is the current price implying',
  '（W21 反推九宮格）？共識有沒有可能太樂觀？萬一成長從 30% 降到 20%（仍很好），估值會怎樣（戴維斯雙殺）？——結論可能是「好公司，但此價無邊際，等待」。':
    ' (reverse-engineer the W21 grid)? Could the consensus be too optimistic? If growth falls from 30% to 20% — still excellent — what happens to the valuation (a reverse Davis double play: growth disappoints and the multiple derates at the same time)? The conclusion may well be "good company, no margin at this price, wait".',
  '溫度計偏熱時，具體該調整哪三件事（而不是賣光）？':
    'When the thermometer runs hot, which three things do you actually adjust, rather than selling everything?',
  '→ ①提高安全邊際要求（如 30%→40%）②放慢新資金部署（W17 分批拉長）③檢查倉位與槓桿（W18 上限有沒有被漲幅推破、確認零槓桿）——':
    '→ ① Raise the margin-of-safety requirement (say 30%→40%) ② slow the deployment of new money (stretch the W17 instalments) ③ check positions and leverage (has the rally pushed anything past the W18 ceiling, and confirm zero leverage) — ',
  '長期配置與定期投入不變':
    'the long-term allocation and the regular contributions do not change',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '夜店與消防通道': 'The nightclub and the fire exits',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（夜店與消防通道）': 'Opening (the nightclub and the fire exits)',
  '「有個投資大師說：判斷該不該進夜店，不是看裡面多熱鬧，是看':
    '"An investing master once said: deciding whether to go into a nightclub is not about how lively it is inside, it is about ',
  '消防通道還剩幾條、裡面擠了多少人':
    'how many fire exits are left and how many people are packed in',
  '。人越多、越嗨，出事時越逃不出來。」':
    '. The more people and the wilder the party, the harder it is to get out when something goes wrong."',
  '核心比喻（鐘擺）': 'The core metaphor (the pendulum)',
  '「市場心情像鐘擺，永遠在『貪婪』和『恐懼』之間盪，而且幾乎不停在中間。我們沒辦法預測它什麼時候回擺——但可以看出它現在盪到哪裡：計程車司機都在報明牌＝盪很遠了；沒有人想聊股票＝另一頭。」':
    '"The market\'s mood is a pendulum, forever swinging between greed and fear, and it hardly ever stops in the middle. We cannot predict when it swings back — but we can see how far it has gone: taxi drivers handing out stock tips means it has swung a long way; nobody wanting to talk about stocks at all means the other end."',
  '互動（家庭溫度計）': 'Interaction (the family thermometer)',
  '「來玩個遊戲：你最近有沒有聽到誰在講股票？新聞標題是『全民瘋台股』還是『股民哀鴻遍野』？」（把家人的體感填進溫度計的「散戶情緒」欄——':
    '"Let us play a game: have you heard anyone talking about stocks lately? Are the headlines \'the whole country is mad for Taiwanese shares\' or \'investors in despair\'?" (Put what your family feels into the "retail sentiment" row of the thermometer — ',
  '家人本身就是絕佳的情緒感測器':
    'your own family makes an excellent sentiment sensor',
  '收尾（連回全季）': 'Closing (tying the quarter together)',
  '「這一季我們學會了：怎麼分錢（配置）、怎麼進場、怎麼算一家公司值多少、怎麼防自己的心理偏誤、跟兩位大師學了看公司和看環境。下週我要交期末報告——一份完整的投資分析，寫給你們聽得懂。」':
    '"This quarter we learned how to divide the money up (allocation), how to enter, how to work out what a company is worth, how to guard against our own psychological biases, and from two masters how to read a company and how to read the environment. Next week I hand in my final report — a complete investment analysis, written so that you can follow it."',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那現在是熱還是冷？」': '"So is it hot or cold right now?"',
  '誠實給出你溫度計的判定＋強調「這只改變我們的小心程度，不改變長期計畫」。':
    'Give your thermometer\'s call honestly, and stress that "this only changes how careful we are, not the long-term plan".',
  '「大師為什麼不直接說買或賣？」':
    '"Why will the masters not just say buy or sell?"',
  '「因為誠實。知道『在哪裡』但不知道『何時』——承認第二件事，才配判斷第一件。」':
    '"Because they are honest. They know where we are but not when it turns — and only by admitting the second do you earn the right to judge the first."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能解釋第二層思考並舉一個自己的例子':
    'You can explain second-level thinking and give an example of your own',
  '能複述 Marks 風險觀的三推論':
    "You can retell the three corollaries of Marks' view of risk",
  '市場溫度計完成（本季實據）＋每季更新排程':
    "The market thermometer is done, with this quarter's real evidence, and a quarterly update is scheduled",
  '原則清單 v1.1（併入 Marks 的 6 條）':
    "The principles list is at v1.1, with Marks' six folded in",
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '🎓 第 25 週完成——Q2 知識篇收官。下週見：個股投資論文 Capstone。':
    '🎓 Week 25 done — the Q2 knowledge block is wrapped. Next up: the single-stock investment thesis capstone.',
  '下週預告 · Week 26：Q2 Capstone——個股投資論文':
    'Next week · Week 26: the Q2 capstone — a single-stock investment thesis',
  '——Q2 知識篇到此收官。下週是期末考：把 W13 的健檢、W19–21 的估值三部曲、W22 的質化分析五份產出，組裝成一份完整的個股投資論文。':
    ' — the Q2 knowledge block closes here. Next week is the final exam: take the check-up from W13, the valuation trilogy of W19–21 and the qualitative analysis of W22, and assemble those five outputs into one complete single-stock investment thesis.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：Buffett 股東信精讀':
    "Previous week: reading Buffett's shareholder letters closely",
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
