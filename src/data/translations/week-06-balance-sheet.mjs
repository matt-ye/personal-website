/*
 * 給家人的投資課 Week 06：資產負債表深讀 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-06-balance-sheet.html
 *
 * 沿用 week-01 的慣例（金額單位、行內標記邊界的半形空白、語域）。本週四件：
 *
 * ⚠ 金額：hero 的「300 億／100 億」是散文語境，照常換算成 NT$30 billion／
 *   NT$10 billion；資產負債表本體的金額是原始元數，照抄不動（表頭沒有單位，
 *   中文版也沒有，不自行增補）。
 *
 * ⚠ 會計術語用標準英文：資產負債表 balance sheet｜流動／非流動 current /
 *   non-current｜流動比 current ratio｜速動比 quick ratio｜營運資金 working
 *   capital｜利息保障倍數 interest coverage｜商譽 goodwill｜減損 impairment。
 *   有息／無息負債固定譯成 interest-bearing debt／interest-free liabilities，
 *   全頁一致（本週的核心分類，用詞飄掉整週就散了）。
 *
 * ⚠ 公開資訊觀測站用證交所官方英文名 Market Observation Post System。
 *   《財報就像一本故事書》查不到官方英文書名 → 保留中文原字，列入 KEEP。
 *   「MJ」是原文就有的英文代稱，原樣保留。
 *
 * ⚠ 已知限制：抽取器只抓含漢字的字串。分類遊戲的錯誤回饋在原始碼裡是
 *   `"✗ 是「<b>" + LABEL + "</b>」。"`，後半段 `</b>」。` 不含漢字、抽不到，
 *   英文頁上會殘留全形引號與句號。同理 header chip 的頓號、幾處句末的
 *   `」`／`：` 也留著。要動的是原始碼標點，不在對照表的職權內。
 *
 * 語域：成績單 vs 健檢報告、骨質與血壓的比喻是講給家人聽的，英文保住那個口吻。
 */

export const KEEP = ['《財報就像一本故事書》'];
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
  '給家人的投資課 · Q1 共同地基 · Week 06':
    'Family Investing Course · Q1 Common Ground · Week 06',
  '資產負債表深讀': 'Reading the Balance Sheet Closely',
  '損益表看「賺不賺」，資產負債表看「撐不撐得住」。':
    'The income statement tells you whether a company makes money. The balance sheet tells you whether it can hold up.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 4': 'Weeks 4',
  '5 週': '5',
  '52 週 · 第 6 週': '52 weeks · Week 6',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '投資人用它判斷財務安全性（Q2）、操盤手用它算 ROE 分母與槓桿（Q3）、財務長的資本結構決策直接寫在這張表上（Q4 的地基）。':
    'the investor uses it to judge financial safety (Q2), the trader uses it for the denominator of ROE and for leverage (Q3), and the CFO writes every capital-structure decision straight onto this statement (the foundation of Q4).',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「利潤率瀑布」時對方卡住的點——尤其「是本業賺的嗎？」有沒有變成對方的反射動作。先用自己的話再講一次。':
    'look back at where the other person got stuck when you shared the margin waterfall last week — especially whether "did the core business earn it?" has become a reflex for them. Say it in your own words once more first.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  'A 公司總負債': 'Company A has total liabilities of',
  '300 億': 'NT$30 billion',
  '（全是應付帳款與客戶預收）；B 公司總負債只有':
    ' (all of it accounts payable and customer prepayments); company B has total liabilities of only',
  '100 億': 'NT$10 billion',
  '（全是銀行借款）。哪家的財務風險比較高？':
    ' (all of it bank borrowings). Which one carries more financial risk?',
  '猜一個答案': 'Pick an answer',
  'A（欠比較多）': 'A (it owes more)',
  '一樣危險': 'Equally risky',
  '看不出來': 'Cannot tell',
  'A 公司：300 億無息負債': 'Company A: NT$30bn of interest-free liabilities',
  '不用付利息': 'No interest to pay',
  '應付帳款＝供應商免費借你錢；預收＝客戶先付錢。生意好的副產品。':
    'Accounts payable is the supplier lending to you for free; unearned revenue is the customer paying first. Both are by-products of business going well.',
  'B 公司：100 億有息負債': 'Company B: NT$10bn of interest-bearing debt',
  '利息照付、到期要還': 'Interest due, principal due',
  '銀行不會因為你生意差就免收利息——這才是財務風險的來源。':
    'A bank will not waive the interest because business is bad — that is where financial risk comes from.',
  '答對了。負債的重點不是「多少」，是「要不要付利息」——A 的 300 億是供應商與客戶免費借的營運負債；B 的 100 億利息照付、到期要還。這是本週的核心分類。':
    'Correct. What matters about liabilities is not how much, but whether interest has to be paid. A\'s NT$30bn is operating liabilities lent for free by suppliers and customers; B\'s NT$10bn carries interest and falls due. That split is the heart of this week.',
  '答案是 B。A 的 300 億全是「無息負債」——供應商月結、客戶預付，等於免費借你錢，是生意好的副產品；B 的 100 億是銀行借款，利息照付、到期要還。負債的重點不是多少，是要不要付利息。':
    'The answer is B. A\'s NT$30bn is entirely interest-free: suppliers on monthly terms and customers paying in advance, which amounts to a free loan and is a by-product of business going well. B\'s NT$10bn is bank borrowing, with interest to pay and a repayment date. What matters about liabilities is not how much, but whether they cost interest.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 把飲料店月底排成正式資產負債表':
    '1. Laying the drinks shop out as a proper balance sheet',
  '延續第 4 週的期末數字，正式排版——依':
    'Taking the closing figures from week 4 and setting them out properly, in ',
  '流動性排序': 'order of liquidity',
  '（變現最快的排最上面）：': ' (whatever turns into cash fastest goes on top):',
  '資產': 'Assets',
  '金額': 'Amount',
  '負債與權益': 'Liabilities and equity',
  '流動資產': 'Current assets',
  '流動負債': 'Current liabilities',
  '現金': 'Cash',
  '應付帳款': 'Accounts payable',
  '應收帳款': 'Accounts receivable',
  '預收收入': 'Unearned revenue',
  '存貨': 'Inventory',
  '非流動負債': 'Non-current liabilities',
  '非流動資產': 'Non-current assets',
  '權益': 'Equity',
  '設備淨額': 'Equipment, net',
  '股本': 'Share capital',
  '保留盈餘': 'Retained earnings',
  '資產總計': 'Total assets',
  '負債＋權益總計': 'Total liabilities + equity',
  '左右永遠相等（第 4 週的恆等式），而右邊回答「左邊的錢從哪來」：這家店':
    'The two sides are always equal (the identity from week 4), and the right side answers where the money on the left came from. This shop is',
  '87% 靠股東、13% 靠欠供應商': '87% funded by shareholders and 13% by what it owes suppliers',
  '——幾乎沒有財務風險。': ' — almost no financial risk at all.',

  /* ── 流動 vs 非流動 ── */
  '2. 流動 vs 非流動：一年線': '2. Current vs non-current: the one-year line',
  '一年內會變現／到期的': 'Anything that turns into cash or falls due within a year',
  '歸流動，其餘非流動。這條線是償債分析的基礎：':
    ' counts as current; everything else is non-current. This line is the basis of all solvency analysis:',
  '流動比 =': 'Current ratio =',
  '速動比 =': 'Quick ratio =',
  '流動資產 − 存貨': 'Current assets − inventory',
  '飲料店體檢': 'The drinks shop health check',
  '流動比 ＝ 495,000 ÷ 90,000 ＝': 'Current ratio = 495,000 ÷ 90,000 =',
  '、速動比 ＝': ', quick ratio =',
  '（超健康；一般標準：流動比 &gt; 1.5–2、速動比 &gt; 1 算穩）。':
    ' (extremely healthy; the usual benchmarks are a current ratio &gt; 1.5–2 and a quick ratio &gt; 1).',
  '營運資金': 'Working capital',
  '（Working Capital）＝ 流動資產 − 流動負債 ＝': ' = current assets − current liabilities =',
  '——公司日常周轉的緩衝墊。': ' — the cushion a company runs its daily life on.',
  '速動比剔除存貨的原因：存貨是流動資產裡最不保證變現的——賣不掉的珍珠與過季的衣服，帳上值錢、現實不值錢。':
    'Why the quick ratio strips out inventory: of all the current assets, inventory is the least certain to turn into cash — tapioca pearls nobody buys and last season\'s clothes are worth money on the books and nothing in real life.',

  /* ── 有息 vs 無息 ── */
  '3. 負債的兩張臉：有息 vs 無息':
    '3. The two faces of liabilities: interest-bearing vs interest-free',
  '負債不是都一樣可怕（hero 那題你已經見識過了），關鍵分類是':
    'Not all liabilities are equally frightening (you just saw that in the opening question). The split that matters is ',
  '要不要付利息': 'whether interest has to be paid',
  '類型': 'Type',
  '例子': 'Examples',
  '性質': 'What it is',
  '無息負債': 'Interest-free liabilities',
  '應付帳款、預收收入、應付費用': 'Accounts payable, unearned revenue, accrued expenses',
  '營運自然產生': 'Thrown off naturally by operations',
  '，通常是好事——等於供應商和客戶免費借你錢':
    ' — usually a good thing, since suppliers and customers are lending to you for free',
  '有息負債': 'Interest-bearing debt',
  '短期借款、長期借款、公司債': 'Short-term borrowings, long-term borrowings, corporate bonds',
  '財務槓桿': 'Financial leverage',
  '，要付利息、到期要還——風險的主要來源':
    ' — interest to pay and principal to repay at maturity; the main source of risk',
  '所以「負債比（總負債÷總資產）」只是第一眼，真正的風險指標是：':
    'So the debt ratio (total liabilities ÷ total assets) is only the first glance. The real risk measures are these:',
  '有息負債 ÷ 股東權益': "Interest-bearing debt ÷ shareholders' equity",
  '利息保障倍數 =': 'Interest coverage =',
  '營業利益': 'Operating profit',
  '利息費用': 'Interest expense',
  '回想專欄 #7：EV 計算用的正是':
    'Remember column #7: what an EV calculation uses is precisely ',
  '，不是總負債——同一個道理。': ', not total liabilities — the same idea.',
  '長短錯配': 'Maturity mismatch',
  '是另一個隱形殺手：用一年內到期的短債，去蓋十年才回本的廠房——利率一升或銀行不續借，馬上斷鏈。看「一年內到期之長期負債」科目，對照手上現金夠不夠還。':
    ' is the other invisible killer: using short-term debt that falls due within a year to build a plant that takes ten years to pay back. One rate rise, or one bank that declines to roll the loan over, and the chain snaps. Look up the line "long-term liabilities due within one year" and check whether the cash on hand covers it.',

  /* ── 科目分類挑戰 ── */
  '科目分類挑戰': 'Sort the line items',
  '分析師拿到資產負債表的第一個動作：把科目標成三色（流動性 × 計息性 × 權益）。十題練出這個反射——這也是本週導讀的實戰任務。':
    'The first thing an analyst does with a balance sheet is colour every line three ways: liquidity × whether it bears interest × equity. Ten questions to build the reflex — and the same task comes up in this week\'s reading.',
  '第 1 題 / 10': 'Question 1 of 10',
  '答對 0 / 0': 'Correct 0 / 0',
  '下一題 →': 'Next question →',
  '第': 'Question',
  '題 /': 'of',
  '答對': 'Correct',
  '✓ 答對。': '✓ Correct.',
  '✗ 是「<b>': '✗ It is <b>',
  '看結果': 'See the result',
  '滿分！你已經有分析師拿到報表的第一反射了。':
    'Full marks. You now have the reflex an analyst reaches for first.',
  '不錯——錯的那幾題正是最常混淆的科目，重看一次解說再進導讀實戰。':
    'Good — the ones you missed are exactly the line items people mix up most. Read those explanations once more before you go on to the reading task.',
  '沒關係，這十個科目就是本週的核心詞彙——回講義第 1、3 節走一遍，再回來重玩。':
    'No problem: these ten line items are the core vocabulary of the week. Walk back through sections 1 and 3 of the notes, then come back and play again.',
  '<b>完成：': '<b>Score: ',
  '<button style="font:inherit;font-size:.85rem;font-weight:700;padding:.35rem .9rem;border-radius:99px;cursor:pointer;border:1.5px solid var(--pine);background:transparent;color:var(--pine)" id="g-retry">再玩一次</button>':
    '<button style="font:inherit;font-size:.85rem;font-weight:700;padding:.35rem .9rem;border-radius:99px;cursor:pointer;border:1.5px solid var(--pine);background:transparent;color:var(--pine)" id="g-retry">Play again</button>',
  '公司帳上的活錢': 'The live money in the company account',
  '變現最快的流動資產——資產負債表的第一行。':
    'The current asset that converts fastest — the first line of the balance sheet.',
  '欠供應商的貨款（月結）': 'What you owe suppliers on monthly terms',
  '一年內要付、但不用利息——供應商免費借你錢，營運自然產生的無息負債。':
    'Due within a year but carries no interest — the supplier is lending to you for free. An interest-free liability thrown off naturally by operations.',
  '設備': 'Equipment',
  '製茶機、店面裝潢': 'The tea machine and the shop fit-out',
  '用超過一年、不打算賣掉變現——非流動資產，之後逐年折舊。':
    'Used for more than a year and not there to be sold for cash — a non-current asset, depreciated year by year.',
  '客戶先付的團購訂金': 'A deposit a customer paid up front for a group order',
  '第 4 週的老朋友：錢已收、貨未交——是負債（欠客戶東西），但不用付利息，還代表產品搶手。':
    'An old friend from week 4: cash received, goods not delivered. It is a liability (you owe the customer something), but it costs no interest and signals the product is in demand.',
  '短期借款': 'Short-term borrowings',
  '跟銀行借的一年期周轉金': 'A one-year working-capital loan from the bank',
  '要付利息、一年內到期要還——有息負債，財務風險的主要來源。':
    'Interest to pay and principal due within a year — interest-bearing debt, and the main source of financial risk.',
  '倉庫裡的茶葉與珍珠': 'The tea leaves and tapioca pearls in the storeroom',
  '預期一年內賣掉變現——流動資產；但它是流動資產裡最不保證變現的，所以速動比會剔除它。':
    'Expected to be sold for cash within a year — a current asset; but the least certain of them to convert, which is why the quick ratio takes it out.',
  '歷年賺來還沒分掉的錢': 'Money earned over the years and not yet paid out',
  '權益——淨利的累積，屬於股東。飲料店兩個月存了 98,334。':
    'Equity — accumulated net profit, belonging to the shareholders. The drinks shop built up 98,334 in two months.',
  '一年內到期之長期借款': 'Long-term borrowings due within one year',
  '五年貸款裡明年要還的那期': 'The slice of a five-year loan that falls due next year',
  '有息負債，而且是「長短錯配」的檢查點——對照手上現金夠不夠還這筆。':
    'Interest-bearing debt, and the checkpoint for maturity mismatch — hold it up against the cash on hand and see whether it covers this.',
  '企業客戶月結還沒付的貨款': 'What a corporate customer on monthly terms has not paid yet',
  '一年內會收到的錢——流動資產；但要盯「收得回來嗎、越欠越久嗎」。':
    'Money due within a year — a current asset; but keep watching whether it comes back, and whether it is taking longer and longer.',
  '商譽': 'Goodwill',
  '併購別家公司時付的溢價': 'The premium paid when acquiring another company',
  '非流動資產，也是地雷區：不攤銷但每年減損測試，被併公司不如預期時可以一次炸掉整年獲利。':
    'A non-current asset and a minefield: not amortised but tested for impairment every year, and when the acquired company disappoints it can blow up a whole year of profit at once.',

  /* ── 資產端地雷 ── */
  '4. 資產端的三個地雷區': '4. Three minefields on the asset side',
  '：客戶欠的錢。看兩件事——收得回來嗎（呆帳準備）、越欠越久嗎（應收帳款周轉天數上升是紅旗）':
    ': money customers owe you. Watch two things — will it come back (the bad-debt allowance), and is it taking longer and longer (rising days sales outstanding is a red flag)',
  '：三種業態三種風險——電子業怕跌價（過時）、食品業怕過期、營建業存貨是蓋一半的房子（變現週期以年計）。':
    ': three kinds of business, three kinds of risk — electronics fears write-downs from obsolescence, food fears expiry dates, and a builder\'s inventory is a half-finished building whose conversion cycle is measured in years. ',
  '存貨增速 &gt; 營收增速＝賣不動的前兆':
    'Inventory growing faster than revenue is the early sign that things are not selling',
  '商譽與無形資產': 'Goodwill and intangible assets',
  '：商譽＝併購時付的溢價，': ': goodwill is the premium paid in an acquisition, and it is ',
  '不攤銷但每年做減損測試': 'not amortised but tested for impairment every year',
  '——被併公司表現不如預期時，一次性減損可以炸掉整年獲利（歷史上多起百億級案例）。商譽佔總資產比重高的公司，把它從權益裡扣掉再算一次「有形淨值」，安全邊際更誠實':
    ' — when the acquired company falls short of expectations, one write-down can blow up a whole year of profit (history has several ten-billion-dollar examples). Where goodwill is a large share of total assets, strip it out of equity and recompute tangible book value; the margin of safety you get that way is more honest',

  /* ── 商業模式 ── */
  '5. 從資產負債表看商業模式': '5. Reading the business model off the balance sheet',
  '重資產': 'Asset-heavy',
  '（晶圓廠、航空）：非流動資產佔比高 → 高折舊、高資本支出、景氣下行時固定成本壓力大':
    ' (fabs, airlines): a high share of non-current assets → heavy depreciation, heavy capital spending, and painful fixed costs when the cycle turns down',
  '輕資產': 'Asset-light',
  '（軟體、顧問）：資產少 → ROA 高，護城河不在資產在無形（人才、網路效應）':
    ' (software, consulting): few assets → high ROA, with the moat sitting in intangibles rather than assets (talent, network effects)',
  '金融業': 'Financials',
  '：資產負債表本身就是生意（吸存款＝負債、放貸款＝資產），槓桿天生高，比率標準完全不同——':
    ': the balance sheet is the business itself (taking deposits is a liability, making loans is an asset), leverage is inherently high, and the benchmarks are completely different — ',
  '金融股的分析框架獨立於一般產業':
    'financial stocks need a framework of their own, separate from ordinary industries',
  '，本課程後段另行處理': ', and the later part of this course handles them separately',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「負債比低＝好公司」': '"A low debt ratio means a good company"',
  '蘋果、可口可樂都刻意維持不低的負債（便宜的債換昂貴的股權，Q4 會講）；負債比要配「利息保障倍數」一起看。':
    'Apple and Coca-Cola both deliberately carry a fair amount of debt (swapping cheap debt for expensive equity — Q4 covers this). Read the debt ratio together with interest coverage.',
  '「帳上現金多＝安全」': '"Plenty of cash on the books means it is safe"',
  '要問現金的來源：本業賺的？借來的？增資來的？現金多但同時短債更多，是假安全。':
    'Ask where the cash came from: earned by the core business, borrowed, or raised from shareholders? Lots of cash alongside even more short-term debt is a false sense of safety.',
  '「淨值高於股價（P/B&lt;1）＝撿便宜」':
    '"Book value above the share price (P/B &lt; 1) means a bargain"',
  '先問淨值裡有多少是商譽和收不回的應收（連回專欄 #7 的 P/B 討論）。':
    'First ask how much of that book value is goodwill and receivables that will never be collected (this links back to the P/B discussion in column #7).',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '40 分': '40 min',
  '《財報就像一本故事書》資產負債表章節':
    '《財報就像一本故事書》, the balance sheet chapter',
  'MJ 的「資產負債表是體質」框架。':
    "MJ's framing of the balance sheet as the body's underlying constitution.",
  '50 分': '50 min',
  '公開資訊觀測站 實戰 ↗': 'Market Observation Post System, hands on ↗',
  '下載追蹤公司最新年度「合併資產負債表」逐行讀，把每個科目標成三色：流動/非流動資產、無息/有息負債、權益（就是上面遊戲練的動作）。特別找出：「一年內到期之長期借款」、「存貨」明細附註、「商譽」有沒有。':
    'Download the latest annual consolidated balance sheet for the company you follow and read it line by line, colouring each item three ways: current or non-current asset, interest-free or interest-bearing liability, equity — exactly the move the game above drills. Look in particular for long-term borrowings due within one year, the inventory note, and whether there is any goodwill.',
  '20 分': '20 min',
  '營運資金與商譽減損的標準定義。':
    'The standard definitions of working capital and goodwill impairment.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '體質檢查五比率＋同業對照': 'Five health-check ratios, plus a peer comparison',
  '對追蹤公司計算最新年度：': 'For the company you follow, compute for the latest year: ',
  '流動比、速動比、負債比、有息負債÷股東權益、利息保障倍數':
    "current ratio, quick ratio, debt ratio, interest-bearing debt ÷ shareholders' equity, and interest coverage",
  '（利息保障倍數需要從損益表拿營業利益、從附註拿利息費用）':
    ' (interest coverage needs operating profit from the income statement and interest expense from the notes)',
  '選一家': 'Pick one ',
  '同業': 'peer',
  '做同樣計算，並排對照': ' and run the same numbers, side by side',
  '寫 150 字結論：哪家體質好？差異主要來自哪個科目？':
    'Write a 150-word conclusion: which one is in better shape, and which line item drives the difference?',
  '加做：把兩家的「商譽＋無形資產」佔股東權益比重算出來——誰的淨值比較「有形」？':
    "Extra: work out goodwill plus intangibles as a share of shareholders' equity for both — whose book value is the more tangible?",
  '本週工具驗證：': "This week's tool check: ",
  '飲料店流動比': 'the drinks shop has a current ratio of',
  '、速動比': ', a quick ratio of',
  '、負債全是無息、利息保障倍數 ∞（無借款）——真實公司極少這麼乾淨，比率跑出來後記得跟商業模式對照。':
    ', liabilities that are entirely interest-free, and interest coverage of ∞ (no borrowings at all). Real companies are rarely this clean, so once you have the ratios, read them back against the business model.',
  '自我檢核': 'Check yourself',
  '五比率 × 兩家公司完成，數據出自官方財報':
    'Five ratios × two companies are done, with figures from the official filings',
  '能指出兩家負債結構的本質差異（有息 vs 無息的組成）':
    'You can point to the real difference between the two debt structures (how much is interest-bearing and how much is interest-free)',
  '150 字結論寫完': 'The 150-word conclusion is written',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  'A 公司流動比 2.0，B 公司 1.2，B 一定比較危險嗎？':
    ' Company A has a current ratio of 2.0 and company B 1.2 — must B be the riskier one?',
  '不一定': 'Not necessarily',
  '——要看產業：超商、量販靠「先收現金、月結付供應商」營運，流動比常年 &lt; 1 也很健康（負營運資金模式，之後會深談）；比率脫離商業模式就沒有意義。':
    ' — it depends on the industry. Convenience stores and hypermarkets run on collecting cash first and paying suppliers on monthly terms, so a current ratio permanently &lt; 1 is perfectly healthy (the negative working capital model, which we come back to later). A ratio detached from the business model means nothing.',
  '為什麼「預收收入很多」通常是好事？':
    ' Why is a large unearned revenue balance usually good news?',
  '→ 預收＝客戶': '→ Unearned revenue means the customer ',
  '先付錢': 'pays first',
  '給你——現金已入袋、風險在客戶端，同時代表產品搶手（訂金、儲值、預售）；它雖列負債，卻是「欠貨不欠錢」的好負債。':
    ' — the cash is already in the bank, the risk sits with the customer, and it says the product is in demand (deposits, stored value, pre-sales). It is booked as a liability, but it is the good kind: you owe goods, not money.',
  '一家公司負債比 85%——什麼情況下這完全正常？':
    ' A company has a debt ratio of 85% — when is that entirely normal?',
  '（銀行、保險）：吸收存款本來就是負債，85% 是常態；一般製造業若 85% 就要高度警戒。':
    ' (banks and insurers): taking deposits is a liability by definition, so 85% is the norm. For an ordinary manufacturer, 85% would call for serious alarm.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '成績單 vs 健檢報告': 'A report card vs a health check',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（家庭版資產負債表）': 'Opening (the household balance sheet)',
  '拿一張紙畫 T 字：「左邊寫我們家有什麼：房子、車、存款。右邊寫錢從哪來：房貸＋我們自己的。左邊加總一定等於右邊——這就是公司資產負債表，我們家也有一張。」':
    'Take a sheet of paper and draw a T. "On the left, write down what our family has: the house, the car, the savings. On the right, write down where the money came from: the mortgage, plus our own. The left column always adds up to exactly the right — and that is a company balance sheet. Our family has one too."',
  '核心比喻：健檢報告': 'The core metaphor: a health check',
  '「損益表是這個月的': '"The income statement is this month\'s ',
  '成績單': 'report card',
  '，資產負債表是': ', and the balance sheet is the ',
  '健檢報告': 'health check',
  '。成績單可以靠熬夜衝一次，健檢報告騙不了人——骨質（權益）夠不夠、血壓（負債）高不高，都是長年累積。」':
    '. You can cram for a report card by pulling one all-nighter, but a health check does not lie — whether your bone density (equity) holds up and whether your blood pressure (debt) runs high are both years in the making."',
  '互動：好債 vs 壞債': 'Interaction: good debt vs bad debt',
  '「欠供應商的貨款（月結）跟跟銀行借的錢，哪個比較可怕？」——引導：前者不用利息、是生意好的副產品；後者要利息、到期要還。「所以聽到『那家公司負債幾百億』，先問一句：':
    '"Which is scarier — what we owe suppliers on monthly terms, or what we borrowed from the bank?" Lead them to it: the first costs no interest and is a by-product of business going well; the second costs interest and has to be repaid on the date. "So next time you hear that a company owes tens of billions, ask one question first: ',
  '要付利息的有多少？': 'how much of it pays interest?',
  '預期反應與應對': 'What they will say, and what to answer',
  '「房貸是不是壞事？」': '"Is a mortgage a bad thing?"',
  '「跟公司一樣：比率合理、付得起利息的槓桿是工具；付不起的才是災難。重點永遠是『利息保障倍數』——我們家的版本就是月收入除以月房貸。」':
    '"Same as a company: leverage at a sensible ratio, with interest you can comfortably pay, is a tool. Leverage you cannot service is a disaster. It always comes back to interest coverage — and the household version of that is monthly income divided by the monthly mortgage payment."',
  '「存貨也算資產？賣不掉怎麼辦」':
    '"Inventory counts as an asset? What if it never sells?"',
  '正是速動比存在的原因——分析師也不完全信任存貨。':
    'That is exactly why the quick ratio exists — analysts do not fully trust inventory either.',
  '本腳本可搭配專欄': 'Pair this script with column ',
  '#7《財務報表三表》': '#7, "The three financial statements"',
  '服用。': '.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能把真實資產負債表科目分成三色（流動性 × 計息性 × 權益）':
    'You can sort the lines of a real balance sheet three ways (liquidity × whether it bears interest × equity)',
  '五比率同業對照表完成': 'The five-ratio peer comparison table is done',
  '能解釋「有息 vs 無息負債」與「商譽減損」兩個概念':
    'You can explain both interest-bearing versus interest-free liabilities, and goodwill impairment',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 6 週完成——下週見：現金流量表深讀。':
    '🎓 Week 6 done — next up: reading the cash flow statement closely.',
  '下週預告 · Week 07：現金流量表深讀':
    'Next week · Week 07: reading the cash flow statement closely',
  '——第 4 週你就發現「賺錢≠現金變多」，下週用第三張表把這件事講完整：營業／投資／融資三大活動、自由現金流，以及為什麼現金流量表被稱為「最誠實的報表」。':
    ' — back in week 4 you found that profit ≠ more cash. Next week the third statement finishes the story: the three activities (operating, investing, financing), free cash flow, and why the cash flow statement is called the most honest of the three.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：損益表深讀': 'Last week: reading the income statement closely',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
