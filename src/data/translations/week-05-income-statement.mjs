/*
 * 給家人的投資課 Week 05：損益表深讀 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-05-income-statement.html
 *
 * 沿用 week-01 的慣例（金額單位、行內標記邊界的半形空白、語域）。本週三件：
 *
 * ⚠ 金額單位：瀑布圖與滑桿的數字都是 JS 算的元，後綴「元」一律翻成空字串，
 *   單位改掛在標籤上（滑桿標籤補 NT$）。散文裡的「1,000 萬」照常換算成
 *   NT$10 million；損益表本體的金額是原始元數，照抄不動。
 *
 * ⚠ 機構與服務名用官方英文名，不自創：
 *     公開資訊觀測站 = Market Observation Post System（MOPS，證交所官方英文名）
 *     財報狗 = Statementdog（該服務自用的英文名）
 *   《財報就像一本故事書》查不到官方英文書名 → 保留中文原字，列入 KEEP。
 *   「MJ」是原文就有的英文代稱，原樣保留。
 *
 * ⚠ 會計術語用標準英文：毛利 gross profit｜營業利益 operating profit｜
 *   業外 non-operating｜共同比 common-size｜塞貨 channel stuffing｜
 *   費用資本化 capitalising expenses。
 *
 * 已知限制：抽取器只抓含漢字的字串，夾在標記間的孤立全形標點（`？`、`」`）
 * 抓不到，英文頁上會殘留。要動的是原始碼標點，不在對照表的職權內。
 *
 * 語域：飲料店＋瀑布的比喻是講給家人聽的，英文保住那個口吻。
 */

export const KEEP = ['財報就像一本故事書'];
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
  '給家人的投資課 · Q1 共同地基 · Week 05':
    'Family Investing Course · Q1 Common Ground · Week 05',
  '損益表深讀': 'Reading the Income Statement Closely',
  '三張表裡最常被引用、也最常被美化的一張。我們把飲料店排成正式損益表。':
    'The most quoted of the three statements, and the most often dressed up. We are going to lay the drinks shop out as a proper income statement.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 4 週': 'Week 4',
  '52 週 · 第 5 週': '52 weeks · Week 5',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '投資人靠它算 EPS 與利潤率（Q2 估值的分子來源）、操盤手用它驗證成長故事（Q3）、財務長對它的每一行負責（Q4）。':
    'the investor uses it for EPS and margins (the numerator in Q2 valuation), the trader uses it to test a growth story (Q3), and the CFO answers for every line of it (Q4).',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「飲料店記帳台」時對方卡住的點——尤其「預收收入是負債」「賺錢≠現金變多」有沒有講通。先用自己的話再講一次。':
    'look back at where the other person got stuck when you shared the drinks-shop ledger last week — especially whether "unearned revenue is a liability" and "profit ≠ more cash" landed. Say it in your own words once more first.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '飲料店第二個月賣了': 'In month two the drinks shop sold',
  '15 萬': 'NT$150,000',
  '（成本 5.5 萬、房租 2 萬、折舊 3,333）。這個月最後':
    ' (cost NT$55,000, rent NT$20,000, depreciation 3,333). In the end, how much did it ',
  '真正賺多少': 'really make',
  '猜一個答案': 'Pick an answer',
  '約 3 萬': 'About NT$30,000',
  '約 7 萬': 'About NT$70,000',
  '約 10 萬': 'About NT$100,000',
  '15 萬全賺': 'All NT$150,000',
  '元（淨利率 47.8%）': '(net margin 47.8%)',
  '答對了。15 萬營收 → 扣成本剩毛利 9.5 萬 → 再扣房租折舊剩淨利 7.17 萬。錢在每一層被不同的人拿走——這就是「利潤率瀑布」，本週的主角。':
    'Correct. NT$150,000 of revenue → take out cost and NT$95,000 of gross profit is left → take out rent and depreciation and NT$71,700 of net profit is left. At every level somebody takes a share — that is the margin waterfall, the star of this week.',
  '答案是約 7 萬（71,667）：15 萬營收扣掉成本 5.5 萬剩毛利 9.5 萬，再扣房租折舊 2.33 萬，剩淨利 7.17 萬。錢在每一層被拿走一些——這就是利潤率瀑布。':
    'The answer is about NT$70,000 (71,667): NT$150,000 of revenue less NT$55,000 of cost leaves NT$95,000 of gross profit, less NT$23,300 of rent and depreciation leaves NT$71,700 of net profit. A little is taken at every level — that is the margin waterfall.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 從分錄到報表：飲料店的損益表':
    '1. From journal entries to a statement: the drinks shop income statement',
  '上週你記完了分錄，現在把它們': 'Last week you posted the entries; now we ',
  '排版': 'lay them out',
  '成損益表——你會發現報表只是分錄的整理術。右欄「佔營收 %」就是':
    ' as an income statement — and you will see a statement is just journal entries, tidied. The right-hand column, share of revenue, is ',
  '共同比（common-size）分析': 'common-size analysis',
  '，把損益表變成百分比，任何規模的公司都能互相比較：':
    ': turn the statement into percentages and companies of any size become comparable with each other.',
  '飲料店 損益表（第 2 個月）': 'Drinks shop — income statement (month 2)',
  '金額': 'Amount',
  '佔營收': 'Share of revenue',
  '營業收入': 'Revenue',
  '（減）銷貨成本': '(less) Cost of sales',
  '毛利': 'Gross profit',
  '（減）營業費用（房租 20,000＋折舊 3,333）':
    '(less) Operating expenses (rent 20,000 + depreciation 3,333)',
  '營業利益': 'Operating profit',
  '（±）業外損益、利息、所得稅': '(±) Non-operating items, interest, tax',
  '淨利': 'Net profit',
  '真實公司的損益表不管幾百億，骨架跟這張一模一樣。':
    'However many billions a real company reports, the skeleton is exactly the one above.',

  /* ── 利潤率瀑布 ── */
  '2. 利潤率瀑布：錢在每一層被誰拿走':
    '2. The margin waterfall: who takes a cut at each level',
  '把損益表想成一道瀑布：水從「營收」流下，每一層岩石分走一些，流到最底下的才是股東的。':
    'Think of the income statement as a waterfall: the water starts at revenue, every ledge of rock takes some of it, and only what reaches the bottom belongs to the shareholders. ',
  '拉動下方滑桿，加入「業外一次性利得」（例如這個月賣了設備），看淨利怎麼被墊高——但營業利益動也不動。':
    'Drag the slider below to add a one-off non-operating gain (say the shop sold its equipment this month) and watch net profit get propped up — while operating profit does not budge.',
  '利潤率瀑布': 'The margin waterfall',
  '損益表利潤率瀑布圖': 'Waterfall chart of the income statement margins',
  '留下（毛利/營業利益/淨利）': 'Kept (gross / operating / net profit)',
  '被拿走（成本/費用）': 'Taken (costs and expenses)',
  '業外一次性': 'Non-operating one-off',
  '業外一次性利得（賣設備／土地）':
    'One-off non-operating gain, NT$ (selling equipment or land)',
  '業外一次性利得': 'One-off non-operating gain',
  '0 元': '0',
  '本業（營業利益）永遠是 71,667——業外只是「這個月中了獎」。':
    'The core business (operating profit) stays at 71,667 — a non-operating gain is just winning a raffle this month.',
  '營業利益率': 'Operating margin',
  '淨利率': 'Net margin',
  '業外佔稅前淨利': 'Non-operating share of pre-tax profit',
  '營收': 'Revenue',
  '−銷貨成本': '−Cost of sales',
  '−營業費用': '−Operating expenses',
  '＋業外': '+Non-operating',
  '元</span><br>佔營收 <span class=\'num\'>':
    '</span><br>Share of revenue <span class=\'num\'>',
  '元': '',
  '看到了嗎？<b>淨利率衝到': 'See it? <b>Net margin shoots to',
  '%</b>，但<b>營業利益率動都沒動（47.8%）</b>——這':
    '%</b>, but <b>operating margin has not moved at all (47.8%)</b> — that',
  '元是賣設備的一次性利得，明年不會再有。看新聞說「獲利創新高」，先問一句：<b>是本業賺的嗎？</b>':
    'is a one-off gain from selling equipment, and it will not be there next year. When the news says "record profits", ask one question first: <b>did the core business earn it?</b>',
  '（業外已佔淨利': '(non-operating items already make up',
  '%，該把它當投資公司分析了）':
    '% of net profit — time to analyse this one as an investment company)',

  /* ── 三個利潤率 ── */
  '3. 三個利潤率，三個問題': '3. Three margins, three questions',
  '三個利潤率各自回答一個問題，之間的「間距」跟絕對值一樣重要：':
    'Each of the three margins answers a different question, and the gaps between them matter as much as the levels:',
  '利潤率': 'Margin',
  '回答的問題': 'The question it answers',
  '惡化時查什麼': 'What to check when it slips',
  '毛利率': 'Gross margin',
  '產品本身賺不賺？（定價權、生產效率）':
    'Does the product itself make money? (pricing power, production efficiency)',
  '售價被殺？原料漲？產品組合變差？':
    'Prices being cut? Input costs up? A worse product mix?',
  '整個本業賺不賺？（含管銷研發）':
    'Does the whole core business make money? (including admin, selling and R&amp;D)',
  '費用失控？研發暴增（未必是壞事）？':
    'Expenses out of control? R&amp;D jumping (not necessarily a bad thing)?',
  '股東最後拿到幾 %？': 'What percentage do shareholders end up with?',
  '業外虧損？稅率變化？利息負擔？':
    'Non-operating losses? A change in the tax rate? Interest burden?',
  '判讀心法：毛利率 50% 但營業利益率只剩 10%，代表管銷研發吃掉 40 個百分點——要嘛是重研發的投資期，要嘛是費用管理有問題，年報的費用明細會告訴你是哪一種。':
    'How to read it: a 50% gross margin with only a 10% operating margin means admin, selling and R&amp;D ate 40 percentage points — either the company is in a heavy investment phase, or its cost control has a problem. The expense breakdown in the annual report tells you which.',

  /* ── 收入認列 ── */
  '4. 收入認列：損益表最大的操縱空間':
    '4. Revenue recognition: where the income statement bends most easily',
  '「什麼時候算賣出去了」是有規則的（IFRS 15 五步驟），而規則的邊緣就是灰色地帶。三種常見手法：':
    'There are rules for when something counts as sold (the five steps of IFRS 15) — and the edge of the rules is the grey zone. Three common moves:',
  '塞貨（channel stuffing）': 'Channel stuffing',
  '季底硬塞貨給經銷商衝業績——貨其實還在通路，下季會退回或吃掉下季訂單。特徵：':
    'Pushing stock onto distributors at quarter end to hit a number — the goods are still sitting in the channel and will either come back or eat into next quarter. The tell: ',
  '應收帳款增速遠超營收': 'receivables growing far faster than revenue',
  '（第 8 週紅旗）。': ' (a week 8 red flag).',
  '總額 vs 淨額': 'Gross vs net',
  '平台代收 100 元、抽成 10 元——記 100（總額）還是 10（淨額）？規則看「誰承擔存貨與定價風險」，但灰色地帶常被用來膨脹營收規模。':
    'A platform collects 100 and keeps 10 as commission — does it book 100 (gross) or 10 (net)? The rule turns on who carries the inventory and pricing risk, but the grey zone is often used to inflate the size of reported revenue.',
  '一次性 vs 經常性': 'One-off vs recurring',
  '賣設備一次認列 vs 訂閱制逐期認列。':
    'Selling equipment is recognised once; a subscription is recognised period by period. ',
  '經常性收入（recurring revenue）品質遠高於一次性':
    'Recurring revenue is of far higher quality than one-off revenue',
  '——這是市場給 SaaS 公司高估值的核心原因。':
    ' — which is the core reason the market pays up for SaaS companies.',

  /* ── 業外損益 ── */
  '5. 業外損益：台股閱讀的必修陷阱':
    '5. Non-operating items: the trap you must learn to read in Taiwanese filings',
  '台股財報在「營業利益」之下有一大塊「營業外收入及支出」：利息、匯兌、處分資產利得、轉投資損益。':
    'Taiwanese filings carry a large "non-operating income and expenses" block below operating profit: interest, foreign exchange, gains on asset disposals, and results from investments in other companies. ',
  '經典陷阱：本業衰退的公司靠「賣土地、賣廠房」讓淨利很漂亮':
    'The classic trap: a company whose core business is shrinking makes net profit look lovely by selling land or a plant',
  '（你剛剛在瀑布圖裡親手拉過）。判讀規則：':
    ' (you just did it yourself with the slider on the waterfall). Rules for reading it:',
  '看營業利益，不要只看淨利': 'Look at operating profit, not just net profit',
  '——營業利益才是本業成績': ' — operating profit is the score of the core business',
  '業外佔稅前淨利長期 &gt; 30%，把它當投資公司分析，不要當本業公司':
    'If non-operating items are consistently &gt; 30% of pre-tax profit, analyse it as an investment company rather than an operating one',
  '一次性利得（處分資產）直接在心中扣掉再算 EPS':
    'Strip out one-off gains (asset disposals) in your head before you work out EPS',

  /* ── 費用資本化 ── */
  '6. 費用資本化：藏費用的合法魔法':
    '6. Capitalising expenses: the legal magic trick for hiding costs',
  '同一筆 1,000 萬開發支出——': 'Take the same NT$10 million of development spending. ',
  '費用化': 'Expense it',
  '當期直接 −1,000 萬；': ' and the period takes the full −NT$10 million; ',
  '資本化': 'capitalise it',
  '先記為資產、分 5 年折舊，當期只 −200 萬。突然開始大量資本化開發支出的公司，當期獲利被墊高了，對比同業的會計政策（年報附註）是必要功課。':
    ' and it goes on the books as an asset, depreciated over 5 years, so the period only takes −NT$2 million. A company that suddenly starts capitalising development spending on a large scale has propped up its current profit; comparing accounting policies against its peers (in the notes to the annual report) is required homework.',

  /* ── 闢謠 ── */
  '7. 常見誤解闢謠': '7. Three things people get wrong',
  '「EPS 成長＝公司變好」': '"EPS is growing, so the company is getting better"',
  'EPS＝淨利÷股數，買回庫藏股減少股數也能推升 EPS；要看淨利本身、最好看營業利益。':
    'EPS = net profit ÷ share count, so buying back shares lifts EPS just by shrinking the denominator. Look at net profit itself, and better still at operating profit.',
  '「毛利率越高越好」': '"The higher the gross margin the better"',
  '跨產業比毛利率沒意義（軟體 80% vs 零售 20% 是商業模式差異）；同業比、跟自己的歷史比才有意義。':
    'Comparing gross margins across industries means nothing (software at 80% versus retail at 20% is a difference in business model). Compare against peers, and against the company\'s own history.',
  '「虧損公司不值得看」': '"A loss-making company is not worth looking at"',
  '要分「毛利為負」（產品本身不賺，危險）和「毛利健康但重投資導致淨損」（亞馬遜走了二十年的路）。':
    'Separate a negative gross margin (the product itself does not make money — dangerous) from a healthy gross margin with a net loss caused by heavy investment (the road Amazon walked for twenty years).',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '40 分': '40 min',
  '《財報就像一本故事書》損益表章節':
    '《財報就像一本故事書》, the income statement chapter',
  '用 MJ 的圖像法再走一遍利潤率瀑布。':
    "Walk the margin waterfall once more using MJ's picture method.",
  '50 分': '50 min',
  '公開資訊觀測站 實戰 ↗': 'Market Observation Post System, hands on ↗',
  '路徑：財務報表 → 採 IFRSs 後 → 合併報表 → 輸入你追蹤的公司代號。下載最新':
    'Path: Financial Reports → After Adoption of IFRSs → Consolidated Reports → enter the ticker of the company you follow. Download the latest ',
  '年度合併財報': 'annual consolidated financial report',
  '，翻到「合併綜合損益表」逐行讀完，對照上面的飲料店骨架把每一行歸類。預期收穫：發現真實報表只是飲料店版的放大＋細分。':
    ', turn to the consolidated statement of comprehensive income and read every line, sorting each one against the drinks-shop skeleton above. You should come away seeing that a real statement is just the drinks shop, scaled up and subdivided.',
  '10 分': '10 min',
  '專欄 #7 損益表段落重讀 ↗': 'Column #7, the income statement section, reread ↗',
  '現在每個科目你都知道分錄與陷阱了。':
    'By now you know both the journal entry and the trap behind every line item.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '五年利潤率趨勢表': 'A five-year margin trend table',
  '對你追蹤的台股公司（建議沿用之後 Q1 capstone 要用的那家）建立利潤率趨勢表。':
    'Build a margin trend table for the Taiwan-listed company you follow (ideally the one you will use for the Q1 capstone).',
  '從公開資訊觀測站（或財報狗輔助對照）取得近 5 年：營收、毛利、營業利益、淨利':
    'From the Market Observation Post System (with Statementdog as a cross-check) get the last 5 years of revenue, gross profit, operating profit and net profit',
  '建表：年度 × （毛利率、營業利益率、淨利率、業外佔稅前淨利比）':
    'Build the table: year × (gross margin, operating margin, net margin, non-operating share of pre-tax profit)',
  '標出': 'Mark the ',
  '趨勢轉折年': 'turning-point years',
  '（任一利潤率變動超過 3 個百分點的年份）':
    ' (any year in which one of the margins moved more than 3 percentage points)',
  '打開該年度年報的「營運概況／管理階層討論（MD&amp;A）」，找出公司自己怎麼解釋，寫 150 字摘要':
    'Open that year\'s annual report at "Operational Highlights / Management Discussion and Analysis (MD&amp;A)", find how the company explains it in its own words, and write a 150-word summary',
  '檢查：淨利率有沒有哪一年「異常高於」營業利益率的走勢？若有，去業外損益找原因':
    'Check: is there a year where net margin runs unusually far above operating margin? If so, go looking in the non-operating items for the reason',
  '本週工具驗證：': "This week's tool check: ",
  '飲料店第 2 個月毛利率': 'in month two the drinks shop had a gross margin of',
  '、營業利益率＝淨利率': ', and an operating margin equal to its net margin of',
  '（無業外時兩者相等）。你的真實公司若淨利率遠高於營業利益率，八成有業外一次性利得。':
    ' (the two are equal when nothing non-operating is in play). If your real company shows a net margin far above its operating margin, there is almost certainly a one-off non-operating gain inside it.',
  '自我檢核': 'Check yourself',
  '5 年 × 4 指標的表完成，數據來自官方財報（不是新聞）':
    'The 5-year × 4-metric table is done, with figures from the official filings (not from the news)',
  '至少找到一個轉折年並有公司方的解釋':
    'You found at least one turning-point year and the company\'s own explanation for it',
  '能用一句話說出這家公司「錢主要在哪一層被拿走」':
    'You can say in one sentence which level takes most of this company\'s money',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '毛利率 55%、營業利益率 12%——中間 43 個百分點去哪了？該去財報哪裡查？':
    ' A 55% gross margin and a 12% operating margin — where did the 43 percentage points in between go? Where in the filings do you look?',
  '→ 被': '→ Eaten by ',
  '營業費用': 'operating expenses',
  '（推銷＋管理＋研發）吃掉了；查合併財報的「營業費用」明細附註，看三項各佔多少。':
    ' (selling + administrative + R&amp;D). Check the operating expense note in the consolidated statements to see how much each of the three takes.',
  '某公司淨利年增 80%，但營業利益持平——最可能發生了什麼？':
    ' A company\'s net profit is up 80% year on year but operating profit is flat — what most likely happened?',
  '→ 淨利成長來自': '→ The growth in net profit came from ',
  '業外': 'non-operating items',
  '（處分資產、匯兌、轉投資），本業沒變好——去「營業外收入及支出」找一次性項目。（就是你在瀑布圖拉滑桿看到的效果。）':
    ' (asset disposals, foreign exchange, investments in other companies); the core business did not improve. Go to non-operating income and expenses and look for one-off items. (Exactly the effect you saw when you dragged the slider on the waterfall.)',
  '平台公司把總額改記淨額，營收暴減 90% 但淨利不變——公司變差了嗎？':
    ' A platform company switches from gross to net reporting, revenue collapses 90% but net profit is unchanged — did the company get worse?',
  '沒有變差': 'Nothing got worse',
  '，只是會計表達方式改變，毛利與淨利不動；但過去用總額營收講的「規模故事」要重新評估。':
    ' — only the way it is presented changed. Gross profit and net profit did not move; but the scale story that was told using gross revenue needs rethinking.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '損益表是一道瀑布': 'The income statement is a waterfall',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（延續飲料店）': 'Opening (continuing the drinks shop)',
  '「上次我們的飲料店記完帳了，今天來看成績單。這個月賣了 15 萬，你猜最後真正賺多少？」（揭曉瀑布：15 萬 → 9.5 萬毛利 → 7.17 萬淨利——每一層被誰拿走。可以直接打開上面的瀑布圖。）':
    '"Last time we finished the books for our drinks shop; today we look at the report card. It sold NT$150,000 this month — how much do you think it really made?" (Then reveal the waterfall: NT$150,000 → NT$95,000 of gross profit → NT$71,700 of net profit, and who took a cut at each level. You can open the waterfall chart above and show them.)',
  '核心比喻：瀑布': 'The core metaphor: a waterfall',
  '「損益表是一道瀑布。水從山頂的『營收』流下來，每一層岩石都會分走一些：原料商拿一層、房東拿一層、政府拿一層——流到最底下池子裡的才是股東的。':
    '"The income statement is a waterfall. The water starts as revenue at the top of the mountain and every ledge of rock takes a share on the way down: the supplier takes one, the landlord takes one, the government takes one — and only what reaches the pool at the bottom belongs to the shareholders. ',
  '看公司不要只看池子（淨利），要看每層岩石各吃掉多少。':
    'When you look at a company, do not only look at the pool (net profit) — look at how much each ledge takes.',
  '互動（陷阱題）': 'Interaction (a trick question)',
  '「一家公司今年賺的錢是去年的兩倍，但其實是把土地賣了。明年還會有這種獲利嗎？所以看新聞說『獲利創新高』，我們家要先問一句什麼？」——答案：':
    '"A company earned twice as much this year as last year — but it did it by selling a piece of land. Will that profit be there again next year? So when the news says \'record profits\', what is the first question this family asks?" — Answer: ',
  '「是本業賺的嗎？」': '"Did the core business earn it?"',
  '（拉一下瀑布圖的業外滑桿給對方看：淨利飆高、但本業那格動都沒動。）':
    ' (Drag the non-operating slider on the waterfall and show them: net profit spikes, and the core-business bar does not move at all.)',
  '預期反應與應對': 'What they will say, and what to answer',
  '「數字這麼多，我怎麼可能看得懂」':
    '"There are so many numbers. How could I possibly follow it?"',
  '「你只要記住三個 %：毛利率、營業利益率、淨利率，像看健檢報告只看紅字一樣。」':
    '"You only need three percentages: gross margin, operating margin, net margin. It is like reading a health check and only looking at the values in red."',
  '「業外收入不好嗎？賺就是賺」':
    '"What is wrong with non-operating income? Money is money"',
  '「偶爾中獎很好，但你不會把中獎當薪水規劃生活。」':
    '"Winning a prize now and then is lovely, but you would not plan your life around it the way you plan around a salary."',
  '本腳本可搭配專欄': 'Pair this script with column ',
  '#7《財務報表三表》': '#7, "The three financial statements"',
  '服用。': '.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能把任一真實損益表對應到「營收→毛利→營業利益→淨利」骨架':
    'You can map any real income statement onto the revenue → gross profit → operating profit → net profit skeleton',
  '五年利潤率趨勢表完成且轉折年有歸因':
    'The five-year margin trend table is done and the turning-point years have an explanation',
  '能說出三種收入操縱手法的名字與特徵':
    'You can name the three revenue-manipulation moves and describe how each shows up',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 5 週完成——下週見：資產負債表深讀。':
    '🎓 Week 5 done — next up: reading the balance sheet closely.',
  '下週預告 · Week 06：資產負債表深讀':
    'Next week · Week 06: reading the balance sheet closely',
  '——損益表講「這段期間賺多少」，資產負債表講「這個時間點，公司有什麼、欠什麼」。飲料店的設備、存貨、應付帳款會排成一張快照，你會學看流動比、負債比與「有息負債」這個關鍵字。':
    ' — the income statement says how much was earned over a period; the balance sheet says what the company owns and owes at a moment in time. The drinks shop\'s equipment, inventory and payables get laid out as a snapshot, and you will learn to read the current ratio, the debt ratio, and the key phrase "interest-bearing debt".',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：借貸法則與應計制': 'Last week: the rules of debit and credit, and the accrual basis',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
