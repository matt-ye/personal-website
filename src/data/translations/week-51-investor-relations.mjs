/*
 * 給家人的投資課 Week 51：投資人關係與資本市場溝通 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-51-investor-relations.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 「說書人」＝storyteller；JS 追蹤表的 HTML 片段（placeholder／option／aria-label）保留標記只換字；「45 億到 50 億」原文無幣別，不補。
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
  '給家人的投資課 · Q4 財務長季 · Week 51':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 51',
  '投資人關係與資本市場溝通':
    'Investor Relations and Capital-Market Communication',
  '課程的最後一塊新知識，也是一個完美的閉環：CFO 面對市場的那一面——而市場的另一端，坐著 50 週前開始學財報的你。學會聽法說會、讀致股東報告書、拆財測，你就同時掌握了「怎麼溝通」與「怎麼聽穿」。':
    'The last piece of new knowledge in the course, and a perfect closing of the loop: the side of the CFO that faces the market — and at the other end of the market sits you, who started learning financial statements 50 weeks ago. Learn to listen to an earnings call, read a shareholder letter and pick apart guidance, and you master both "how to communicate" and "how to see through it."',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 11、25、49 週':
    'Prerequisites: Weeks 11, 25, 49',
  '52 週 · 第 51 週':
    '52 weeks · Week 51',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'CFO 的溝通紀律、投資人的聽法、說書人的總練習——W52 雙報告的最後一份素材。':
    'The CFO\'s communication discipline, the investor\'s way of listening, the storyteller\'s all-round practice — the last piece of material for W52\'s two reports.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週報稅的那個勾——家人算出自家該選哪一個了嗎？':
    'Look back at last week\'s tax-filing tick box — has your family worked out which one to choose?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一場法說會，哪個部分的資訊價值最高？':
    'In an earnings call, which part carries the most valuable information?',
  '開場的簡報':
    'The opening presentation',
  '公布的財測數字':
    'The published guidance numbers',
  '分析師追問與管理層迴避的題目':
    'The analysts\' follow-up questions, and the topics management dodges',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. IR 的工具箱與各自的誠實度結構':
    '1. The IR toolbox, and how honest each tool is by structure',
  '工具':
    'Tool',
  '頻率':
    'Frequency',
  '特性':
    'Character',
  '財報':
    'Financial statements',
  '季':
    'Quarterly',
  '受審計、格式強制——最硬的資訊（你的 Q1 主場）':
    'Audited, mandatory format — the hardest information (your Q1 home turf)',
  '法說會':
    'Earnings call',
  '季／半年':
    'Quarterly / semiannual',
  '數字＋管理層口頭詮釋＋':
    'Numbers + management\'s spoken interpretation + ',
  '分析師追問':
    'analyst follow-up questions',
  '——資訊密度最高的現場':
    '— the highest-density live setting',
  '致股東報告書':
    'Shareholder letter',
  '年':
    'Annual',
  '管理層的「作文」——但長期對照很有價值（第 3 節）':
    'Management\'s "essay" — but comparing it over the long run is very valuable (section 3)',
  '重大訊息':
    'Material-information filings',
  '即時':
    'Real time',
  '法定揭露——併購、處分、高層異動的第一手（W49 的獵場）':
    'Legally required disclosure — the first-hand source for mergers, disposals and senior-management changes (W49\'s hunting ground)',
  '財測／展望':
    'Guidance / outlook',
  '依公司':
    'Varies by company',
  '台灣多為法說口頭展望；承諾的重量各不相同':
    'In Taiwan mostly a verbal outlook on the earnings call; the weight of the commitment varies',
  '永續報告書':
    'Sustainability report',
  '揭露範圍逐年擴大；治理段最值得讀':
    'The scope of disclosure widens every year; the governance section is the most worth reading',
  '好 IR 的三原則':
    'Three principles of good IR',
  '（CFO 視角）：':
    '(the CFO\'s view): ',
  '一致性':
    'Consistency',
  '——壞消息用跟好消息同樣的速度與篇幅講；':
    ' — tell bad news at the same speed and at the same length as good news; ',
  '可預期性':
    'Predictability',
  '——市場最恨驚嚇，不恨壞消息本身（W11 的預期機制）；':
    ' — the market hates surprises, not bad news itself (the expectations mechanism of W11); ',
  '不擠牙膏':
    'No drip-feeding',
  '——壞消息一次講完，分次擠的公司，市場會學會「每次都先假設還有更糟的」。':
    ' — tell all the bad news at once; for a company that squeezes it out in installments, the market learns to "always assume there\'s something worse."',
  '2. 法說會的聽法：三層價值密度':
    '2. How to listen to an earnings call: three layers of value density',
  '簡報唸稿':
    'Presentation read-through',
  '：最低——早就寫在新聞稿裡':
    ': lowest — it\'s already in the press release',
  '財測與假設':
    'Guidance and assumptions',
  '：中——重點不是數字本身，是':
    ': medium — the point isn\'t the number itself, it\'s ',
  '跟上季說法的差異':
    'how it differs from last quarter\'s wording',
  '（上修、下修、口氣轉變）':
    ' (raised, cut, change of tone)',
  '：最高。三個聽點：':
    ': highest. Three things to listen for:',
  '分析師集中追問什麼':
    'What the analysts keep pressing on',
  '——市場當下最擔心的變數，用來更新 W26 論文的觸發條件':
    ' — the variables the market worries about most right now; use them to update the trigger conditions of your W26 thesis',
  '管理層迴避什麼':
    'What management avoids',
  '——重複提問卻繞開的題目，比任何回答都有資訊（W49 殺信使的溫和版：迴避不等於說謊，但標記了敏感區）':
    ' — questions asked repeatedly but sidestepped carry more information than any answer (the mild version of W49\'s shoot-the-messenger: dodging isn\'t lying, but it marks a sensitive area)',
  '量化與形容詞的比例':
    'The ratio of numbers to adjectives',
  '——「毛利率壓力來自 X，影響約 Y 個百分點，Z 季改善」vs「我們審慎樂觀」，CFO 的可信度就在這個比例裡':
    ' — "margin pressure comes from X, costs about Y percentage points, and eases by quarter Z" vs "we are cautiously optimistic": the CFO\'s credibility lives in this ratio',
  '財測的博弈論':
    'The game theory of guidance',
  '：管理層有動機「低報好超越」——W46 藏沙袋的對外版。連續多季「驚喜超標」的公司，該問的是它的財測有沒有資訊量，還是只是儀式。':
    ': management has an incentive to "guide low and beat" — the external version of W46\'s sandbagging. For a company that keeps "beating expectations" quarter after quarter, the question is whether its guidance carries any information, or is merely a ritual.',
  '形容詞偵測器':
    'Adjective detector',
  '六句法說會上的回答。它是有內容的量化回答，還是沒有內容的形容詞？':
    'Six answers from an earnings call. Is each a quantified answer with content, or adjectives with no content?',
  '第 1／6 句':
    'Answer 1/6',
  '量化回答':
    'Quantified answer',
  '形容詞':
    'Adjectives',
  '下一句 →':
    'Next answer →',
  '目前答對 0 題':
    'Correct so far: 0',
  '3. 致股東報告書：作文裡的照妖鏡':
    '3. The shareholder letter: a lie detector inside the essay',
  '單獨一年的報告書是公關稿；':
    'A single year\'s letter is a PR piece; ',
  '連讀五年':
    'reading five years in a row',
  '就是測謊機：':
    ' is a lie detector:',
  '去年的承諾今年提了嗎？':
    'Were last year\'s promises mentioned this year?',
  '悄悄消失的計畫＝失敗但不想講。把每年的承諾列表追蹤，是成本最低的管理層誠信審計（下面的追蹤表）':
    ' A plan that quietly disappears = a failure management doesn\'t want to talk about. Tracking each year\'s commitments in a list is the cheapest integrity audit of management (the tracker below)',
  '歸因的對稱性':
    'Symmetry of attribution',
  '：好年歸功自己、壞年歸咎大環境？誠實的管理層兩邊用同一套歸因——Buffett 股東信是滿分示範（W24）':
    ': good years credited to themselves, bad years blamed on the macro environment? Honest management uses the same attribution on both sides — Buffett\'s shareholder letters are the perfect model (W24)',
  '關鍵指標的一致性':
    'Consistency of key metrics',
  '：今年突然改用新的自訂指標（「調整後 XX」）＝舊指標大概不好看了（W5 一次性項目的敘事版）':
    ': suddenly switching to a new custom metric this year ("adjusted XX") = the old metric probably doesn\'t look good any more (the narrative version of W5\'s one-off items)',
  '承諾追蹤表':
    'Commitment tracker',
  '從實習公司近三年的致股東報告書，抄下具體承諾（產能、新產品、市場目標），再查它們的下落。內容只存在這個瀏覽器；每年年報季回來更新一次。':
    'From your practice company\'s last three years of shareholder letters, copy down concrete commitments (capacity, new products, market targets), then check what became of them. The content is stored only in this browser; come back and update it once a year during annual-report season.',
  '承諾':
    'Commitment',
  '年份':
    'Year',
  '下落':
    'Outcome',
  '＋ 新增一筆承諾':
    '+ Add a commitment',
  '達成':
    'Delivered',
  '說到做到':
    'Did what they said',
  '延宕':
    'Delayed',
  '有交代的落後':
    'Behind, but explained',
  '消失':
    'Vanished',
  '再也沒提過':
    'Never mentioned again',
  '4. CFO 視角：對市場溝通的紀律':
    '4. The CFO\'s view: the discipline of communicating with the market',
  '法說是承諾管理':
    'Earnings calls are commitment management',
  '：說出口的數字會被記住並回放——上面那張追蹤表，就是你被回放的樣子。寧可少承諾':
    ': the numbers you say out loud will be remembered and replayed — the tracker above is what it looks like when you are replayed. Better to promise less',
  '壞消息的處理':
    'Handling bad news',
  '：提早、完整、附行動方案。市場懲罰的是「失去可預期性」，不是壞消息':
    ': early, complete, with an action plan. The market punishes "losing predictability," not the bad news itself',
  '同一套話對所有人':
    'The same script for everyone',
  '：選擇性揭露是法律紅線；「先跟大股東講」是台灣治理案的常見引爆點（W49）':
    ': selective disclosure is a legal red line; "telling the major shareholder first" is a common trigger in Taiwanese governance cases (W49)',
  'IR 是 CFO 的複利資產':
    'IR is the CFO\'s compounding asset',
  '：市場對「說到做到」的公司給予估值溢價與危機時的信任餘裕——用 W21 的語言：可信的管理層＝更窄的估值不確定區間':
    ': the market gives companies that "do what they say" a valuation premium and a cushion of trust in a crisis — in W21\'s language: a credible management team = a narrower band of valuation uncertainty',
  '5. 常見誤解闢謠':
    '5. Common misconceptions, debunked',
  '「法說會利多，快買。」':
    '"A bullish earnings call — buy quickly."',
  '法說內容在散戶聽到時已反映大半（W16 的效率邏輯）；法說的價值是':
    'By the time retail investors hear the content of an earnings call, most of it is already priced in (the efficiency logic of W16); the value of an earnings call is to ',
  '更新你的長期論點':
    'update your long-term thesis',
  '（W26），不是交易訊號。':
    ' (W26), not to serve as a trading signal.',
  '「管理層很會講，就是好公司。」':
    '"Management speaks well, so it\'s a good company."',
  '口才與經營能力無關；量化與形容詞的比例、五年的承諾對照，才是對「會講」的防腐劑。':
    'Eloquence has nothing to do with operating ability; the ratio of numbers to adjectives and a five-year comparison of commitments are the preservative against "speaks well."',
  '「永續報告就是行銷。」':
    '"A sustainability report is just marketing."',
  '環境與社會段落確實常有行銷成分；但':
    'The environmental and social sections do often contain marketing; but the ',
  '治理段':
    'governance section',
  '的董事會運作、風險管理架構，是 W49 檢查的補充材料——挑著讀。':
    '\'s board operations and risk-management framework are supplementary material for the W49 checks — read selectively.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '真實的法說會與三年的報告書':
    'Real earnings calls and three years of shareholder letters',
  '60 分鐘':
    '60 min',
  '實習公司最近一場法說會（本週主菜）':
    'Your practice company\'s most recent earnings call (this week\'s main course)',
  '完整聽錄音或看簡報（公開資訊觀測站或公司 IR 網站），用第 2 節的三層框架做筆記——特別記下 Q&amp;A 的追問焦點與迴避題。':
    'Listen to the full recording or watch the slides (MOPS, the Market Observation Post System, or the company\'s IR website), and take notes with the three-layer framework from section 2 — especially note the focus of the Q&amp;A follow-ups and the questions dodged.',
  '公開資訊觀測站 ↗':
    'MOPS (Market Observation Post System) ↗',
  '40 分鐘':
    '40 min',
  '實習公司近三年致股東報告書':
    'Your practice company\'s last three years of shareholder letters',
  '跑第 3 節的三個測試：承諾追蹤、歸因對稱、指標一致。':
    'Run the three tests from section 3: commitment tracking, symmetry of attribution, consistency of metrics.',
  '10 分鐘':
    '10 min',
  'Buffett 股東信：只重讀他認錯的段落':
    'Buffett\'s shareholder letters: reread only the passages where he admits mistakes',
  '感受滿分卷長什麼樣。':
    'Get a feel for what a perfect score looks like.',
  'Berkshire 股東信 ↗':
    'Berkshire shareholder letters ↗',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '法說會解讀報告':
    'Earnings-call interpretation report',
  '任務 A｜一頁法說筆記（35 分鐘）':
    'Task A | One-page earnings-call notes (35 min)',
  '公司、場次日期':
    'Company, date of the call',
  '財測：本季說法 vs 上季說法（上修／下修／持平＋口氣）':
    'Guidance: this quarter\'s wording vs last quarter\'s (raised / cut / unchanged + tone)',
  'Q&amp;A 熱區：分析師追問最多的三個主題':
    'Q&amp;A hot spots: the three topics analysts pressed on most',
  '迴避偵測：被重複問、卻被繞開的題目（若有）':
    'Dodge detection: questions asked repeatedly but sidestepped (if any)',
  '量化度評分：管理層回答的量化／形容詞比例（1–5 分）':
    'Quantification score: the ratio of numbers to adjectives in management\'s answers (1–5)',
  '對我論點的影響：需要更新 W26 論文的觸發條件嗎？':
    'Impact on my thesis: do the trigger conditions of my W26 thesis need updating?',
  '任務 B｜承諾追蹤表（15 分鐘）':
    'Task B | Commitment tracker (15 min)',
  '用上面的追蹤表，從近三年致股東報告書提取具體承諾，標出達成／延宕／消失。':
    'Use the tracker above to pull concrete commitments from the last three years of shareholder letters, and mark them delivered / delayed / vanished.',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '形容詞偵測器六句裡，量化與形容詞各三句。追蹤表：新增兩筆承諾、一筆標「達成」一筆標「消失」，達成率顯示 50%，而且「消失」那筆會被點名——消失比延宕更值得追問。':
    'Of the adjective detector\'s six answers, three are quantified and three are adjectives. Tracker: add two commitments, mark one "Delivered" and one "Vanished"; the delivery rate shows 50%, and the vanished one gets named — a vanished commitment is worth chasing more than a delayed one.',
  '法說筆記完成（含迴避偵測與量化評分）':
    'Earnings-call notes done (with dodge detection and the quantification score)',
  '三年承諾追蹤表建立':
    'Three-year commitment tracker built',
  '能說出好 IR 三原則與聽法說三層':
    'I can state the three principles of good IR and the three layers of listening to an earnings call',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '為什麼「管理層迴避的問題」比「回答的內容」資訊量更大？':
    'Why does "the questions management dodges" carry more information than "the content of its answers"?',
  '→ 回答的內容經過準備與修飾；':
    '→ Answers are prepared and polished; ',
  '迴避':
    'dodging',
  '則是即時、未經修飾的行為訊號。管理層清楚哪些話說出來要負責，選擇繞開，恰恰標記了「答案不利、而且無法美化」的區域。話可以演，選擇性沉默很難演。':
    ' is a real-time, unpolished behavioral signal. Management knows which statements it will be held accountable for, and choosing to steer around them marks exactly the area where "the answer is unfavorable and can\'t be dressed up." Words can be acted; selective silence is hard to act.',
  '連續八季「小幅超越自己的財測」——兩種解讀？':
    'Eight quarters in a row of "slightly beating its own guidance" — two ways to read it?',
  '→ ①真的執行力強、謹慎承諾——查它的財測與最終結果的絕對差距是否也小；②玩「低報再超越」的儀式，系統性低報預期製造連續驚喜（W46 藏沙袋的對外版）。檢驗法：把它的財測跟':
    '→ ① Genuinely strong execution and cautious commitments — check whether the absolute gap between its guidance and the final result is also small; ② playing the ritual of "guide low, then beat," systematically guiding expectations down to create a string of surprises (the external version of W46\'s sandbagging). The test: compare its guidance with the ',
  '外部分析師共識':
    'external analyst consensus',
  '比——若總是遠低於共識又總是「超標」，是儀式不是實力。':
    ' — if it is always far below consensus and always "beats," that is ritual, not strength.',
  'CFO 為什麼應該「提早且一次講完壞消息」？':
    'Why should a CFO "tell bad news early and all at once"?',
  '→ 市場定價的是':
    '→ The market prices ',
  '不確定性':
    'uncertainty',
  '（W21：折現率吃風險）。擠牙膏式的壞消息讓市場無法確定「還有多少沒講」，每次補充揭露都重啟懷疑，估值折價持續擴大；一次講完＋行動方案＝不確定性見底，市場可以重新定價。':
    ' (W21: the discount rate absorbs risk). Drip-fed bad news leaves the market unable to tell "how much is still unsaid," every follow-up disclosure restarts the doubt, and the valuation discount keeps widening; telling it all at once + an action plan = uncertainty hits bottom, and the market can reprice.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '公司的家長會':
    'The company\'s parent-teacher meeting',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（家長會）':
    'Opening (the parent-teacher meeting)',
  '「上市公司每季要開一場『家長會』——跟股東報告成績。今天教你們怎麼聽出弦外之音，以後新聞播法說會，你們就是內行人。」':
    '"A listed company holds a \'parent-teacher meeting\' every quarter — reporting its grades to the shareholders. Today I\'ll teach you how to hear the meaning behind the words, so when the news covers an earnings call, you\'ll be the insiders."',
  '核心三招（放三分鐘法說片段實測）':
    'Three core moves (test them on a three-minute clip of an earnings call)',
  '①「聽':
    '① "Listen for ',
  '數字':
    'Numbers',
  '還是聽':
    ' or for ',
  '——『審慎樂觀』是沒有內容的四個字；『毛利率下季回到 25%』才叫回答。」②「聽':
    ' — \'cautiously optimistic\' says nothing; \'gross margin back to 25% next quarter\' is what an answer sounds like." ② "Listen for ',
  '分析師一直追什麼':
    'what the analysts keep pressing on',
  '——那是聰明錢最擔心的事。」③「聽':
    ' — that is what the smart money worries about most." ③ "Listen for ',
  '哪題被跳過':
    'which question got skipped',
  '——迴避的題目，就是下一季的新聞。」':
    ' — the question that gets dodged is next quarter\'s headline."',
  '互動（成績單作文學）':
    'Interaction (the report-card essay)',
  '「小孩考差了，聯絡簿寫『這次題目太難、全班都不好』vs『我計算粗心，已重做錯題』——哪種家長會放心？公司年報一模一樣：':
    '"A kid does badly on a test. The contact book says \'the test was too hard, the whole class did badly\' vs \'I was careless with the arithmetic and have redone the wrong ones\' — which one reassures the parents? Company annual reports are exactly the same: ',
  '壞年份怪環境的，跟好年份謝自己的，通常是同一批人。':
    'the ones who blame the environment in bad years are usually the same ones who thank themselves in good years.',
  '收尾（52 週的預告）':
    'Closing (a preview of Week 52)',
  '「下週是我們這一年的最後一課——我要交出兩份報告：一份用':
    '"Next week is the last lesson of our year — I\'ll hand in two reports: one that checks up on a company through the eyes of a ',
  '財務長':
    'CFO',
  '的眼睛檢查一家公司，一份用':
    ', and one that judges what it is worth through the eyes of an ',
  '投資人':
    'investor',
  '的眼睛評它值多少。一年前我連損益表都看不懂——下週你們當評審。」':
    '. A year ago I couldn\'t even read an income statement — next week, you\'re the judges."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「聽起來公司都在演。」':
    '"It sounds like companies are just acting."',
  '「有表演成分，所以才要學聽門道——而且拆穿的方法很便宜：把他去年說的話跟今年的結果對一次就好。」':
    '"There\'s some performance in it, which is why we learn to listen for the tells — and the way to see through it is cheap: just compare what he said last year with this year\'s results."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '法說筆記＋承諾追蹤表完成':
    'Earnings-call notes + commitment tracker done',
  '能雙面陳述（CFO 的溝通紀律／投資人的聽法）':
    'I can argue both sides (the CFO\'s communication discipline / the investor\'s way of listening)',
  '分享環節完成（三招＋作文學），記錄卡住的點':
    'The sharing session is done (three moves + report-card essay), and I\'ve noted where I got stuck',
  '回填 curriculum/01-overview.md 第 51 週進度欄':
    'Fill in the Week 51 progress column of curriculum/01-overview.md',
  '下週預告 · Week 52：年度期末專題':
    'Next week · Week 52: the year-end capstone project',
  '——雙報告：CFO 視角的財務健檢＋投資人視角的估值報告。同一家公司、兩張桌子——52 週的總驗收。':
    '— two reports: a CFO\'s-eye financial health check + an investor\'s-eye valuation report. The same company, two tables — the final test of all 52 weeks.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：稅務基礎':
    'Previous week: tax basics',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle light / dark theme',
  '猜一個答案':
    'Pick an answer',
  '答對了——簡報早就寫在新聞稿裡，財測的價值在於跟上季的差異；資訊密度最高的是 Q&A：分析師集中追問什麼、管理層繞開什麼。':
    'Correct — the presentation is already in the press release, and the value of guidance lies in how it differs from last quarter; the highest information density is in the Q&A: what analysts keep pressing on and what management steers around.',
  '資訊密度最高的是 Q&A：分析師集中追問什麼、管理層繞開什麼。簡報早就寫在新聞稿裡；財測的價值不在數字本身，而在跟上季說法的差異。':
    'The highest information density is in the Q&A: what analysts keep pressing on and what management steers around. The presentation is already in the press release; the value of guidance isn\'t in the number itself but in how it differs from last quarter\'s wording.',
  '「我們對下半年審慎樂觀，相信能持續為股東創造價值。」':
    '"We are cautiously optimistic about the second half and believe we can keep creating value for shareholders."',
  '沒有一個能被事後檢驗的數字。審慎樂觀是最常見、也最空的四個字。':
    ' Not one number that can be checked afterward. "Cautiously optimistic" is the most common and emptiest phrase there is.',
  '「毛利率壓力主要來自新廠折舊，影響約 1.5 個百分點，預計第三季起逐步改善。」':
    '"Margin pressure comes mainly from depreciation on the new plant, about 1.5 percentage points, and should ease gradually from the third quarter."',
  '原因、量級、時間點三者俱全——明年你可以拿這句話回來對帳。':
    ' Cause, magnitude and timing are all there — next year you can come back to this sentence and check it.',
  '「客戶需求依然強勁，我們的競爭優勢無可取代。」':
    '"Customer demand remains strong, and our competitive advantage is irreplaceable."',
  '「強勁」是多少？「無可取代」怎麼衡量？兩個形容詞，零個數字。':
    ' How much is "strong"? How do you measure "irreplaceable"? Two adjectives, zero numbers.',
  '「前三大客戶佔營收比重由 62% 降至 54%，新客戶貢獻約 8 個百分點。」':
    '"The top three customers\' share of revenue fell from 62% to 54%, with new customers contributing about 8 percentage points."',
  '直接回應了集中度風險（W8），而且數字前後勾稽得起來。':
    ' It responds directly to concentration risk (W8), and the numbers reconcile with each other.',
  '「這個問題涉及商業機密，我們會在適當的時機向市場說明。」':
    '"That question involves trade secrets, and we will explain to the market at the appropriate time."',
  '這是迴避。有時合理，但要記下來：分析師若重複追問同一題，下一季很可能變成新聞。':
    ' That\'s a dodge. Sometimes it\'s reasonable, but write it down: if analysts press the same question again, it may well become next quarter\'s news.',
  '「資本支出維持 45 億到 50 億，其中七成用於先進製程擴產。」':
    '"Capital expenditure will stay between 4.5 billion and 5 billion, with 70% going to expanding advanced-process capacity."',
  '給了區間與用途分配——可以對照 W41 的事後查核：這筆錢之後有沒有讓 ROIC 上升？':
    ' It gives a range and an allocation of uses — you can check it against W41\'s post-audit: did this money later lift ROIC?',
  '第':
    'Answer',
  '句':
    '',
  '重新開始——目前答對 0 題':
    'Starting over — correct so far: 0',
  '答對——':
    'Correct — ',
  '再想想——':
    'Think again — ',
  '這是量化回答。':
    'this is a quantified answer.',
  '這是形容詞。':
    'this is just adjectives.',
  '重新開始 ↺':
    'Restart ↺',
  '目前答對':
    'Correct so far:',
  '題':
    '',
  '" placeholder="例：2026 年新廠量產" aria-label="承諾內容"><input type="text" data-f="y" value="':
    '" placeholder="e.g. new plant in mass production in 2026" aria-label="Commitment"><input type="text" data-f="y" value="',
  '" placeholder="年份" aria-label="承諾年份"><select data-f="s" aria-label="後續下落"><option value="">下落…</option><option value="d"':
    '" placeholder="Year" aria-label="Year of the commitment"><select data-f="s" aria-label="What happened next"><option value="">Outcome...</option><option value="d"',
  '>達成</option><option value="l"':
    '>Delivered</option><option value="l"',
  '>延宕</option><option value="v"':
    '>Delayed</option><option value="v"',
  '>消失</option></select><button type="button" data-del="':
    '>Vanished</option></select><button type="button" data-del="',
  '" aria-label="刪除這筆">✕</button></div>':
    '" aria-label="Delete this one">✕</button></div>',
  '（未命名）':
    '(untitled)',
  '按「新增一筆承諾」開始。從最早那一年的報告書抄起。':
    'Press "Add a commitment" to begin. Copy them from the earliest year\'s letter.',
  '替每筆承諾查出下落：達成、延宕（有交代的落後）、還是消失（再也沒提過）。':
    'For each commitment, find out what became of it: delivered, delayed (behind, but explained), or vanished (never mentioned again).',
  '<b>達成率':
    '<b>Delivery rate',
  '消失的承諾：':
    ' Vanished commitments: ',
  '——消失比延宕更值得追問，下次法說會可以直接問它去哪了。':
    ' — a vanished commitment is worth chasing more than a delayed one; at the next earnings call you can simply ask where it went.',
  '目前沒有消失的承諾——說到做到的管理層，市場會給更窄的估值不確定區間。':
    ' No commitments have vanished — for management that does what it says, the market gives a narrower band of valuation uncertainty.',
  '✓ 最後一塊新知識到手——下週，交出兩份報告。':
    '✓ The last piece of new knowledge is in hand — next week, hand in the two reports.',
};
