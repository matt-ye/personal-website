/*
 * 給家人的投資課 Week 47：企業估值應用——併購 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-47-mergers-acquisitions.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 金額：散文內 130 萬 → NT$1,300,000、100 億 → NT$10 billion、綜效 20 億 → NT$2 billion；互動台的「億」為 NT$100m，單位掛在標籤與算式尾端，JS 後綴「億」為空字串。EPS 增厚機的數字是抽象單位，不加幣別。
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
  '給家人的投資課 · Q4 財務長季 · Week 47':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 47',
  '企業估值應用——併購':
    'Valuation in practice — mergers and acquisitions',
  '估值技能的終極考場：一家公司買下另一家。W19–21 的工具全部上陣，加上兩個新零件：':
    'The ultimate exam for valuation skills: one company buys another. All the tools from W19–21 come into play, plus two new parts: ',
  '綜效':
    'synergies',
  '與':
    ' and ',
  '控制權溢價':
    'the control premium',
  '。核心悖論先講：實證上，':
    '. The central paradox first: empirically, ',
  '多數併購毀滅買方股東的價值':
    'most acquisitions destroy value for the buyer\'s shareholders',
  '——本週搞懂為什麼，以及怎麼識別例外。':
    ' — this week we work out why, and how to spot the exceptions.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 19–21、42 週':
    'Prerequisites: Weeks 19–21, 42',
  '52 週 · 第 47 週':
    '52 weeks · Week 47',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'CFO 決定出價上限；持有買方股票的投資人，要看懂自己是不是那個買單的人。':
    'The CFO sets the bid ceiling; an investor holding the buyer\'s stock needs to see whether they are the one picking up the bill.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的家庭預算——「成長速限」講通了嗎？':
    'Looking back at last week\'s family budget — did the "growth speed limit" make sense?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '隔壁飲料店頂讓開價 130 萬。它自己值 100 萬；買下來共用進貨與排班，還能多出「值 20 萬」的好處。該買嗎？':
    'The drink shop next door is up for transfer at an asking price of NT$1,300,000. It is worth NT$1,000,000 on its own; buy it and share purchasing and shift scheduling, and you\'d gain a benefit "worth NT$200,000." Should you buy?',
  '該買，有綜效':
    'Buy it — there\'s synergy',
  '不該買，100 ＋ 20 還不到 130':
    'Don\'t buy it — NT$1,000,000 + NT$200,000 doesn\'t even reach NT$1,300,000',
  '看能不能殺價到 125':
    'See whether you can haggle it down to NT$1,250,000',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 併購的價值方程式':
    '1. The value equation of an acquisition',
  '買方創造的價值 ＝ 目標獨立價值 ＋ 綜效現值 − 支付價格':
    'Value created for the buyer = the target\'s stand-alone value + present value of synergies − price paid',
  '完整算例':
    'A full example',
  '：目標公司獨立價值 100 億、預估綜效現值 20 億、買方付 30% 溢價（130 億）→ 買方價值 ＝ 100 ＋ 20 − 130 ＝':
    ': the target\'s stand-alone value is NT$10 billion, the estimated present value of synergies is NT$2 billion, and the buyer pays a 30% premium (NT$13 billion) → buyer\'s value = 10 + 2 − 13 = ',
  '−10 億':
    '−NT$1 billion',
  '賣方股東現賺 30 億溢價，買方股東倒虧 10 億——即使綜效全數實現。':
    'The seller\'s shareholders pocket a NT$3 billion premium now, while the buyer\'s shareholders are left NT$1 billion worse off — even if the synergies are fully realised.',
  '溢價是':
    'The premium is ',
  '確定付出':
    'a certain payment',
  '的（平均 20–40%），綜效是':
    ' (on average 20–40%), while the synergies are ',
  '不確定實現':
    'uncertain to be realised',
  '的（實證實現率偏低）。所以併購的預設結果是「賣方贏、買方輸」；買方要贏，綜效必須大於溢價，而且真的做得出來。':
    ' (the empirical realisation rate is low). So the default outcome of an acquisition is "the seller wins, the buyer loses"; for the buyer to win, the synergies must exceed the premium and must actually be delivered.',
  '2. 綜效：唯一能正當化溢價的東西':
    '2. Synergies: the only thing that can justify a premium',
  '類型':
    'Type',
  '例子':
    'Examples',
  '可信度':
    'Credibility',
  '成本綜效':
    'Cost synergies',
  '合併採購、關閉重複產線、裁併後台':
    'Combined purchasing, closing duplicate production lines, merging back offices',
  '較高（可量化、操之在己）':
    'Higher (quantifiable, within your own control)',
  '營收綜效':
    'Revenue synergies',
  '交叉銷售、通路互補、定價力提升':
    'Cross-selling, complementary channels, stronger pricing power',
  '較低（要客戶配合——「1＋1＝3」常變 1＋1＝1.8）':
    'Lower (needs customers to cooperate — "1 + 1 = 3" often turns into 1 + 1 = 1.8)',
  '財務綜效':
    'Financial synergies',
  '稅務結構、借款成本下降':
    'Tax structure, lower borrowing costs',
  '有限，而且容易被高估':
    'Limited, and easily overestimated',
  '綜效的估值紀律':
    'Valuation discipline for synergies',
  '：它是未來現金流，要用 DCF 折現（W20），而且要扣':
    ': they are future cash flows, to be discounted with a DCF (W20), and you must subtract ',
  '整合成本':
    'integration costs',
  '——系統合併、留才獎金、文化內耗，常被漏列。經驗法則：':
    ' — system mergers, retention bonuses, culture friction — which are often left off the list. Rule of thumb: ',
  '營收綜效打對折、成本綜效打八折':
    'halve revenue synergies and take 20% off cost synergies',
  '；投行簡報上的綜效數字，先問「誰負責交付、寫進誰的 KPI」。':
    '; for any synergy number in an investment bank\'s deck, first ask "who is responsible for delivering it, and whose KPI is it written into?"',
  '併購價值方程式':
    'Acquisition value equation',
  '預設是講義算例：綜效 20 億（成本 12、營收 8）。勾選「套用打折法則」，看綜效縮水後的真實結果。':
    'The default is the lecture example: synergies of 20 (cost 12, revenue 8), all in NT$100m. Tick "apply the haircut rule" to see the real result once the synergies shrink.',
  '目標獨立價值':
    'Target\'s stand-alone value (NT$100m)',
  '100 億':
    '100',
  '成本綜效（現值）':
    'Cost synergies, PV (NT$100m)',
  '12 億':
    '12',
  '營收綜效（現值）':
    'Revenue synergies, PV (NT$100m)',
  '8 億':
    '8',
  '0 億':
    '0',
  '收購溢價':
    'Acquisition premium',
  '套用打折法則（成本綜效 × 0.8、營收綜效 × 0.5）':
    'Apply the haircut rule (cost synergies × 0.8, revenue synergies × 0.5)',
  '賣方股東':
    'Seller\'s shareholders',
  '現拿的溢價（億）':
    'Premium taken in cash now (NT$100m)',
  '買方股東':
    'Buyer\'s shareholders',
  '創造的價值（億）':
    'Value created (NT$100m)',
  '打平需要的綜效':
    'Synergies needed to break even',
  '＝溢價＋整合成本':
    '= premium + integration costs',
  '3. 支付方式的訊號：現金 vs 換股':
    '3. The signal in how you pay: cash vs shares',
  '現金收購':
    'Cash acquisition',
  '：買方獨吞未來的綜效與風險——管理層':
    ': the buyer takes all the future synergies and risk alone — a posture of management that is ',
  '有信心':
    'confident',
  '的姿態，也常暗示認為自家股價不貴':
    ', and often also implying that it doesn\'t think its own stock is expensive',
  '換股收購':
    'Share-swap acquisition',
  '：把風險分給賣方股東一起扛——常暗示買方認為':
    ': shares the risk with the seller\'s shareholders — often implies the buyer thinks ',
  '自家股票貴':
    'its own stock is expensive',
  '（用貴的紙買東西划算；W43 增資訊號的親戚）':
    ' (it pays to buy things with expensive paper; a relative of the W43 share-issue signal)',
  '實證與此一致：現金併購的買方，長期表現優於換股併購的買方。':
    'The evidence agrees: buyers in cash deals perform better over the long run than buyers in share-swap deals.',
  'EPS 增厚的陷阱（本週最重要的防身術）':
    'The EPS accretion trap (the most important self-defence of the week)',
  '：高本益比公司換股買低本益比公司，EPS':
    ': when a high-P/E company buys a low-P/E company with its shares, EPS ',
  '必然':
    'always',
  '增厚。A（本益比 20、淨利 100、股數 100、股價 20）換股買 B（本益比 10、淨利 50、市值 500）：發新股 500 ÷ 20 ＝ 25 股 → 合併 EPS ＝ 150 ÷ 125 ＝':
    ' goes up (accretion). A (P/E 20, net income 100, 100 shares, share price 20) buys B (P/E 10, net income 50, market cap 500) with shares: issuing new shares 500 ÷ 20 = 25 shares → combined EPS = 150 ÷ 125 = ',
  '零綜效也會發生':
    'It happens even with zero synergy',
  '，純粹是「用 20 倍的紙買 10 倍的獲利」的算術——W40「不是極大化 EPS」、W44 庫藏股魔術的三度重演。':
    ', purely the arithmetic of "buying 10× earnings with 20× paper" — the third replay of W40\'s "not maximizing EPS" and W44\'s buyback magic.',
  'EPS 增厚機':
    'EPS accretion machine',
  'A 用自家股票買下 B，沒有任何綜效。看 EPS 怎麼變，再對照價值有沒有變。':
    'A buys B with its own shares, with no synergies at all. Watch how EPS changes, then check whether value changed.',
  '講義算例':
    'Lecture example',
  'B 比 A 貴':
    'B is pricier than A',
  '加付 30% 溢價':
    'Pay a 30% premium',
  'A（買方）本益比':
    'A (buyer) P/E',
  '20 倍':
    '20 ×',
  'B（目標）本益比':
    'B (target) P/E',
  '10 倍':
    '10 ×',
  '發行新股':
    'New shares issued',
  '股（原本 100）':
    'shares (originally 100)',
  '合併後 EPS':
    'Combined EPS',
  '原本 1.00':
    'Was 1.00',
  '買方股東的價值變化':
    'Change in the buyer\'s shareholders\' value',
  '價值方程式':
    'Value equation',
  '4. 為什麼買方常輸：三個結構性原因':
    '4. Why buyers often lose: three structural reasons',
  '贏家的詛咒':
    'The winner\'s curse',
  '：競標中出價最高者勝出——而最高價常來自':
    ': in an auction the highest bidder wins — and the highest bid often comes from ',
  '最樂觀、最可能高估':
    'the most optimistic buyer, the one most likely to be overestimating',
  '的買家。你贏得標的那一刻，就是「全場只有你願意付這麼多」的證明':
    '. The moment you win is proof that "you\'re the only one in the room willing to pay this much"',
  '代理問題（帝國建造）':
    'The agency problem (empire building)',
  '：規模＝CEO 的薪酬、地位、媒體版面——管理層用股東的錢買自己的王座（W40 目標函數的第三個「不是」）':
    ': size = the CEO\'s pay, status and media coverage — management uses shareholders\' money to buy itself a throne (the third "not" in W40\'s objective function)',
  '過度自信':
    'Overconfidence',
  '（W23 的公司版）：「別人整合失敗，我們不一樣」。Buffett 的比喻：管理層自認是能吻醒蟾蜍的公主，但多數蟾蜍吻了還是蟾蜍——而且是用溢價買的蟾蜍':
    ' (the corporate version of W23): "others fail at integration, we\'re different." Buffett\'s metaphor: managers see themselves as the princess who can kiss a toad into a prince, but most toads are still toads after the kiss — and toads bought at a premium at that',
  '例外長什麼樣':
    'What the exceptions look like',
  '：小規模補強型（買技術或團隊，整合面小）、買方有可複製的整合手冊（連續併購者）、危機中的廉價收購（W24 Buffett 在 2008 的姿態）。共同點：':
    ': small bolt-on deals (buying technology or a team, with little to integrate), buyers with a repeatable integration playbook (serial acquirers), and cheap acquisitions in a crisis (Buffett\'s stance in 2008 from W24). What they share: ',
  '紀律與價格':
    'discipline and price',
  '，還是那兩件事。':
    ', the same two things again.',
  '5. 控制權溢價與少數股權折價':
    '5. The control premium and the minority discount',
  '為什麼買「整家公司」要付溢價？因為':
    'Why pay a premium to buy a "whole company"? Because ',
  '控制權有價':
    'control has a value',
  '：能換管理層、改資本配置、拿綜效——這些散戶股東拿不到。反過來，你平常買的股票是「少數股權」，天生比控制權交易便宜。兩個含義：①用併購交易價回推「你的持股該值多少」，要先扣掉控制權溢價；②被收購題材的想像空間 ＝ 溢價 × 機率，通常都被高估。':
    ': the power to replace management, change capital allocation and capture synergies — things retail shareholders can\'t get. Conversely, the stock you normally buy is a "minority stake," inherently cheaper than a control transaction. Two implications: (1) when backing out "what your holding should be worth" from an acquisition price, first subtract the control premium; (2) the upside from a "takeover story" = premium × probability, which is usually overestimated.',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「合併後市佔第一，就是好併購。」':
    '"After the merger we\'re number one by market share, so it\'s a good deal."',
  '市佔是規模不是價值（W22 的假護城河）；判準永遠是綜效對溢價。':
    'Market share is scale, not value (W22\'s false moat); the test is always synergies against the premium.',
  '「EPS 增厚，對股東就好。」':
    '"EPS accretion is good for shareholders."',
  '上面的增厚機：算術效果，與價值無關。被這招說服的董事會，正是併購毀值的共犯結構。':
    'The accretion machine above: an arithmetic effect, unrelated to value. A board persuaded by this trick is exactly the accomplice structure behind value-destroying acquisitions.',
  '「被收購方股價大漲，代表市場看好這筆併購。」':
    '"The target\'s share price soared, so the market likes the deal."',
  '漲的是':
    'What rose is ',
  '溢價':
    'the premium',
  '——賣方的確定收益。看':
    ' — the seller\'s certain gain. Look at ',
  '買方':
    'the buyer\'s',
  '的股價反應，才是市場對「這筆交易划不划算」的投票；公告日買方股價下跌，是常態級的警訊。':
    ' share price reaction: that is the market\'s vote on whether the deal pays off; a buyer\'s share price falling on the announcement day is a routine-grade warning sign.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '理論與一件真實案子':
    'Theory and one real deal',
  '50 分鐘':
    '50 min',
  '《Principles of Corporate Finance》併購章':
    'Principles of Corporate Finance: the M&A chapter',
  '動機分類、支付方式、實證結果。':
    'Classification of motives, payment methods, empirical results.',
  '30 分鐘':
    '30 min',
  '《Valuation》綜效章節（選讀）':
    'Valuation: the synergies chapter (optional)',
  '麥肯錫怎麼替綜效估值打折。':
    'How McKinsey haircuts synergy valuations.',
  '40 分鐘':
    '40 min',
  '一件台灣真實併購案':
    'A real Taiwanese deal',
  '選近年一件大型案（公開收購或合併），收集：公告新聞稿、溢價（收購價 vs 公告前股價）、宣稱的綜效、':
    'Pick a large recent deal (a tender offer or merger) and collect: the announcement press release, the premium (offer price vs the share price before the announcement), the claimed synergies, ',
  '公告日買賣雙方的股價反應':
    'the buyer\'s and the target\'s share price reactions on the announcement day',
  '。這是本週練習的原料。':
    '. This is the raw material for this week\'s exercise.',
  '選讀':
    'Optional',
  '控制權價值的完整框架。':
    'The complete framework for the value of control.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '一件併購案的完整解剖':
    'A complete dissection of one deal',
  '任務 A｜併購解剖卡（40 分鐘）':
    'Task A | The deal anatomy card (40 minutes)',
  '案名、買方／目標、公告日':
    'Deal name, buyer / target, announcement date',
  '支付方式：現金／換股／混合 → 訊號解讀':
    'Payment method: cash / shares / mixed → read the signal',
  '溢價：收購價 vs 前 20 日均價 ＝ ＿%':
    'Premium: offer price vs the 20-day average price = ＿%',
  '宣稱綜效的內容與金額 → 用打折法則重估':
    'The content and amount of the claimed synergies → re-estimate with the haircut rule',
  '價值方程式：獨立價值＋折後綜效 − 支付價格 ≈ ＿（正／負）':
    'Value equation: stand-alone value + discounted synergies − price paid ≈ ＿ (positive / negative)',
  '市場投票：公告日買方股價 ＿%、目標股價 ＿%':
    'Market vote: buyer\'s share price on announcement day ＿%, target\'s share price ＿%',
  '判決：買方股東是贏是輸？三行理由':
    'Verdict: are the buyer\'s shareholders winners or losers? Three lines of reasons',
  '任務 B｜EPS 魔術重演（10 分鐘）':
    'Task B | The EPS magic replayed (10 minutes)',
  '手算講義的換股算例，再把 B 的本益比改成 25（比買方貴）——EPS 變增厚還是稀釋？':
    'Work through the lecture\'s share-swap example by hand, then change B\'s P/E to 25 (more expensive than the buyer) — does EPS become accretive or dilutive?',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '價值方程式預設：賣方 +30、買方 −10、打平需要綜效 30；勾選打折法則後，綜效剩 13.6，買方變 −16.4。EPS 增厚機：講義算例 EPS 1.200（+20%）、價值變化 0；「B 比 A 貴」EPS 0.923（稀釋）；「加付 30% 溢價」EPS 仍是 1.132（增厚！），買方價值卻是 −150——EPS 和價值往相反方向走。':
    'Value-equation defaults (NT$100m): seller +30, buyer −10, synergies needed to break even 30; tick the haircut rule and the synergies drop to 13.6, and the buyer goes to −16.4. EPS accretion machine: the lecture example gives EPS 1.200 (+20%) and a value change of 0; "B is pricier than A" gives EPS 0.923 (dilution); "Pay a 30% premium" still gives EPS 1.132 (accretion!), while the buyer\'s value is −150 — EPS and value move in opposite directions.',
  '解剖卡完成（含市場投票數據）':
    'Finished the anatomy card (including the market-vote data)',
  'EPS 算例雙向驗證（增厚與稀釋）':
    'EPS example verified in both directions (accretion and dilution)',
  '能默寫價值方程式':
    'Can write the value equation from memory',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '「贏家的詛咒」為什麼在競標中幾乎無法避免？CFO 的解方是什麼？':
    'Why is the "winner\'s curse" almost unavoidable in auctions? What is the CFO\'s remedy?',
  '→ 因為競標的':
    '→ Because the auction\'s ',
  '選擇機制':
    'selection mechanism',
  '本身就在挑出「估值最樂觀的人」——估值是一個分布，最高出價來自分布的右尾，中標與高估在統計上綁在一起。解方：':
    ' itself picks out the "most optimistic valuer" — valuations are a distribution, the highest bid comes from the right tail, and winning and overestimating are statistically tied together. The remedy: ',
  '事前定死上限價':
    'fix a ceiling price in advance',
  '（W36 預先承諾的併購版——投行的費用結構會慫恿你加價，上限要在熱血之前寫下），超過就退場。':
    ' (the M&A version of W36\'s pre-commitment — the investment bank\'s fee structure will tempt you to bid up, so write the ceiling down before the adrenaline kicks in), and walk away if it is exceeded.',
  '買方宣布換股收購，持有買方股票的你該想到哪兩件事？':
    'The buyer announces a share-swap acquisition; as a holder of the buyer\'s stock, what two things should you think of?',
  '→ ①管理層可能認為':
    '→ (1) Management may believe ',
  '自家股票被高估':
    'its own stock is overvalued',
  '，才捨得當貨幣用——對你的持股是間接警訊；②交易風險由你共同承擔，換股後你間接持有目標公司——要用 W26 的論文標準重新檢視：合併後的新公司，你還想持有嗎？':
    ', which is why it is willing to spend it as currency — an indirect warning sign for your holding; (2) you share the deal risk, and after the swap you indirectly own the target — re-examine it by the W26 thesis standard: the newly merged company, do you still want to own it?',
  '綜效 20 億、溢價 30 億——什麼情況下仍可能對買方合理？':
    'Synergies of NT$2 billion, a premium of NT$3 billion — when could it still make sense for the buyer?',
  '→ 當目標「對買方的特定價值」高於獨立價值——例如握有買方急需的專利、產能或執照，讓對手買走的策略成本不在 100 億的獨立估值裡。但「策略價值」正是最常被濫用的加價藉口：它必須能翻譯成具體的現金流（誰、何時、多少），否則就是帝國建造的修辭。':
    '→ When the target\'s "specific value to the buyer" is higher than its stand-alone value — for example, it holds a patent, capacity or licence the buyer badly needs, so that the strategic cost of letting a rival buy it isn\'t in the NT$10 billion stand-alone valuation. But "strategic value" is exactly the most abused excuse for bidding up: it must be translatable into concrete cash flows (whose, when, how much), otherwise it is just empire-building rhetoric.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '頂讓的故事':
    'The story of the shop transfer',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（頂讓的故事）':
    'Opening (the story of the shop transfer)',
  '「隔壁飲料店要頂讓，開價 130 萬。我們算過它自己值 100 萬；買下來共用進貨、共用排班，可以多出『值 20 萬』的好處。':
    '"The drink shop next door is up for transfer, asking NT$1,300,000. We\'ve worked out it is worth NT$1,000,000 on its own; buy it and share purchasing and shift scheduling, and we\'d gain a benefit \'worth NT$200,000.\' ',
  '該買嗎？':
    'Should we buy it?',
  '」（讓家人算：100 ＋ 20 ＝ 120，小於 130——不該。）「這就是併購的全部數學：好處是猜的，溢價是真金白銀。」':
    '" (Let the family work it out: NT$1,000,000 + NT$200,000 = NT$1,200,000, less than NT$1,300,000 — no.) "That\'s all the maths of M&A: the benefit is a guess, the premium is real money."',
  '核心觀念（為什麼老闆們還是愛買）':
    'The core idea (why bosses still love to buy)',
  '「那為什麼新聞上的公司整天在併購？三個人性：①':
    '"So why are the companies in the news doing deals all day? Three human tendencies: (1) ',
  '拍賣會效應':
    'the auction effect',
  '——搶標搶贏的，通常是出價最衝動的；②':
    ' — whoever wins the bidding war is usually the most impulsive bidder; (2) ',
  '老闆想當大王':
    'the boss wants to be king',
  '——公司變兩倍大，老闆薪水和排場跟著變大，虧的是股東；③':
    ' — a company twice as big means a bigger salary and more pomp for the boss, and the loss falls on the shareholders; (3) ',
  '人人自信是例外':
    'everyone thinks they\'re the exception',
  '——『別人整合失敗，我不一樣』。」':
    ' — \'others fail at integration, I\'m different.\'"',
  '互動（看新聞的新姿勢）':
    'Interaction (a new way to read the news)',
  '「下次看到併購新聞，我們家看兩個地方：①':
    '"Next time we see merger news, our family looks at two things: (1) ',
  '當天股價漲還是跌——市場幫你投票了；②付現金還是換股票——換股，可能是老闆自己覺得股票貴，順手花掉。」':
    ' share price rising or falling that day — the market has voted for you; (2) cash or shares — if it\'s shares, maybe the boss himself thinks the stock is expensive and is spending it while he can."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「被買的公司股東賺翻了？」':
    '"Did the shareholders of the acquired company make a killing?"',
  '「對，賣方幾乎永遠是贏家，現拿三成溢價——所以持股被公開收購通常是好消息；要小心的是當『買方』的股東。」':
    '"Yes — sellers are almost always the winners, taking a 30% premium in cash — so having your shares hit by a public tender offer is usually good news; the ones to watch out for are the shareholders of the buyer."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫價值方程式，解釋「賣方贏、買方輸」的結構':
    'Can write the value equation from memory and explain the structure of "the seller wins, the buyer loses"',
  '台灣併購案解剖卡完成':
    'Finished the anatomy card of a Taiwanese deal',
  '能拆穿 EPS 增厚話術':
    'Can see through the EPS accretion pitch',
  '分享環節完成（頂讓故事＋看新聞兩招），記錄卡住的點':
    'Finished the sharing session (the shop-transfer story + the two news-reading moves) and noted where I got stuck',
  '回填 curriculum/01-overview.md 第 47 週進度欄':
    'Fill in the Week 47 progress column of curriculum/01-overview.md',
  '下週預告 · Week 48：資金調度與避險':
    'Next week · Week 48: Treasury and hedging',
  '——出口商的美元、借款的利率：公司層級的風險管理，以及台灣 TRF 風暴的教訓。':
    ' — exporters\' US dollars and loan interest rates: corporate-level risk management, and the lessons of Taiwan\'s TRF storm.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：財務規劃':
    'Previous week: financial planning',
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
  '買方本益比':
    'Buyer\'s P/E',
  '目標本益比':
    'Target\'s P/E',
  '答對了——獨立價值 100 加上綜效 20，總共 120，付 130 等於倒虧 10。而且溢價是確定付出的，綜效只是預估：真的做出來都還虧，做不出來虧更多。':
    'Correct — stand-alone value NT$1,000,000 plus synergies NT$200,000 totals NT$1,200,000, so paying NT$1,300,000 is a NT$100,000 loss. And the premium is a certain payment while the synergies are only an estimate: if it still loses money when everything goes right, it loses even more when it doesn\'t.',
  '不該買：獨立價值 100 加上綜效 20 只有 120，付 130 等於倒虧 10——即使殺到 125 也還是虧。溢價是確定付出的，綜效只是預估。':
    'Don\'t buy: stand-alone value NT$1,000,000 plus synergies NT$200,000 is only NT$1,200,000, so paying NT$1,300,000 is a NT$100,000 loss — and even haggling it down to NT$1,250,000 still loses money. The premium is a certain payment; the synergies are only an estimate.',
  '億':
    '',
  '獨立價值 <b>':
    'Stand-alone value <b>',
  '</b> ＋ 綜效 <b>':
    '</b> + synergies <b>',
  '− 整合成本 <b>':
    ' − integration costs <b>',
  '− 支付價格 <b>':
    ' − price paid <b>',
  '</b> 億':
    '</b> (NT$100m)',
  '<b>買方股東也贏：綜效':
    '<b>The buyer\'s shareholders win too: synergies of',
  '億蓋過了溢價':
    '(NT$100m) cover the premium',
  '與整合成本':
    ' and the integration costs',
  '。</b>剩下的問題只有一個——這些綜效真的做得出來嗎？誰負責交付？':
    '.</b> Only one question remains — can these synergies actually be delivered? Who is responsible for delivering them?',
  '<b>賣方確定拿走':
    '<b>The sellers take away a certain',
  '億，買方股東倒虧':
    '(NT$100m), and the buyer\'s shareholders lose',
  '億。</b>':
    '(NT$100m).</b>',
  '打折後的綜效只剩':
    'After the haircut, the synergies are down to only',
  '億——營收綜效最容易縮水。':
    '(NT$100m) — revenue synergies shrink most easily.',
  '這還是綜效全數實現的最佳情況；試試勾選打折法則。':
    'And this is still the best case, with the synergies fully realised; try ticking the haircut rule.',
  '倍':
    '×',
  '<b>EPS 增厚':
    '<b>EPS accretion of',
  '%，買方股東卻損失':
    '%, yet the buyer\'s shareholders lose',
  '。</b>多付的溢價直接送給賣方，但因為 A 的本益比比較高，EPS 照樣上升——拿 EPS 增厚當併購理由的簡報，最該被追問的就是這一頁。':
    '.</b> The extra premium goes straight to the seller, but because A\'s P/E is higher, EPS rises anyway — a deck that uses EPS accretion as the reason for a deal should be asked its toughest questions on exactly this page.',
  '%，價值一分沒變。</b>零綜效、零溢價，只因為用':
    '%, but value hasn\'t changed at all.</b> Zero synergy, zero premium — just paying with',
  '倍的紙買了':
    '× paper to buy',
  '倍的獲利。增厚或稀釋，只反映兩邊本益比的相對高低。':
    '× earnings. Accretion or dilution only reflects the relative P/E of the two sides.',
  '<b>EPS 稀釋':
    '<b>EPS dilution of',
  '%</b>——因為目標的本益比比買方高。稀釋也不代表毀值：判準永遠是價值方程式，不是 EPS。':
    '%</b> — because the target\'s P/E is higher than the buyer\'s. Dilution doesn\'t mean value destruction either: the test is always the value equation, not EPS.',
  '<b>兩邊本益比相同：EPS 不變。</b>':
    '<b>The two P/Es are the same: EPS is unchanged.</b>',
  '✓ 看得穿併購了——下週處理公司的匯率與利率風險。':
    '✓ You can see through acquisitions now — next week we deal with the company\'s currency and interest-rate risk.',
};
