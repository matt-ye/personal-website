/*
 * 給家人的投資課 Week 04：借貸法則與應計制 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-04-accounting.html
 *
 * 沿用 week-01 的慣例（金額單位、行內標記邊界的半形空白、語域）。本週另外三件：
 *
 * ⚠ 會計術語一律用標準英文，不自創：
 *     借貸法則 = the rules of debit and credit｜應計制 = accrual basis
 *     應收／應付帳款 = accounts receivable / payable｜預收收入 = unearned revenue
 *     銷貨成本 = cost of sales｜累計折舊 = accumulated depreciation
 *   記帳台裡的「借」「貸」是欄位代號，用 Dr／Cr（與講義的 Debit, Dr 對得上）。
 *
 * ⚠ 本週金額都在百萬以下，散文一律展開成 NT$500,000 這種寫法
 *   （week-01 的 NT$3.6M 是因為那邊真的是百萬級）。
 *   練習題與解答裡的數字是「習題本身」，照抄不加幣別，與 <pre> 對齊一致。
 *
 * ⚠ 已知限制：抽取器只抓含漢字的字串，所以夾在標記之間的孤立全形標點
 *   （`？`、`。`、開頭的 `「`）抓不到，英文頁上會殘留。例：
 *     「借：現金」是現金<strong>增加</strong>。  → …cash <b>increases</b>。
 *   要修得動原始碼的標點，不在對照表的職權內。
 *
 * 語域：飲料店故事線是講給家人聽的，英文要保住那個口吻
 *   （「賺不賺」和「現金多不多」是兩本帳）——不要改寫成會計教科書。
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
  單元導航: 'Section navigation',
  切換深淺主題: 'Toggle light / dark theme',

  /* ── 標題區 ── */
  '給家人的投資課 · Q1 共同地基 · Week 04':
    'Family Investing Course · Q1 Common Ground · Week 04',
  借貸法則與應計制: 'The Rules of Debit and Credit, and the Accrual Basis',
  '會計是商業的語言——這是整年課程裡「最不能跳過」的一週。我們開一家飲料店。':
    'Accounting is the language of business — the one week of the year you really cannot skip. We are going to open a drinks shop.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 1 週': 'Week 1',
  '52 週 · 第 4 週': '52 weeks · Week 4',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '投資人讀財報（Q1 第 5–9 週全靠它）、操盤手驗證盈餘品質（Q3）、財務長本身就活在分錄裡（Q4）。這條「飲料店」故事線會一路貫穿到財報三表。':
    'the investor reads financial statements (weeks 5–9 of Q1 all rest on this), the trader checks earnings quality (Q3), and the CFO lives inside journal entries (Q4). This drinks-shop storyline runs all the way through to the three statements.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「地心引力／債券蹺蹺板」時對方卡住的點——是傳導鏈，還是「利率漲債券跌」？先用自己的話再講一次。':
    'look back at where the other person got stuck when you shared "gravity / the bond seesaw" last week — was it the transmission chain, or "rates up, bonds down"? Say it in your own words once more first.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '飲料店第一個月：老闆出 50 萬、買了 20 萬設備、賒 5 萬原料、賣了 8 萬、付 2 萬房租。這個月':
    'Month one at a drinks shop: the owner puts in NT$500,000, buys NT$200,000 of equipment, takes NT$50,000 of ingredients on credit, sells NT$80,000 and pays NT$20,000 of rent. Did the shop ',
  賺還是賠: 'make money or lose money',
  '？月底': '? And at the end of the month, ',
  現金是變多還變少: 'did cash go up or down',
  猜一個答案: 'Pick an answer',
  '賺錢，現金變多': 'Profit, and more cash',
  '賺錢，但現金變少': 'Profit, but less cash',
  '賠錢，現金變少': 'A loss, and less cash',
  '賠錢，但現金變多': 'A loss, but more cash',
  '本月淨利（賺不賺）': 'Net profit this month (did we make money?)',
  '收入 8 萬 − 成本 3 萬 − 房租 2 萬 − 折舊 3,333':
    'Sales 80,000 − cost 30,000 − rent 20,000 − depreciation 3,333',
  '現金變動（現金多不多）': 'Change in cash (do we have more cash?)',
  '50 萬 → 36 萬，因為買了 20 萬設備':
    'NT$500,000 → NT$360,000, because we bought NT$200,000 of equipment',
  '答對了——這正是本週最重要的一課。帳面賺 26,667，現金卻少了 14 萬（錢變成了設備）。「賺不賺」和「現金多不多」是兩本帳。':
    'Correct — and this is the most important lesson of the week. On paper we made 26,667, yet cash fell by NT$140,000 (the money turned into equipment). "Did we make money" and "do we have cash" are two separate sets of books.',
  '答案是「賺錢，但現金變少」：帳面賺 26,667，現金卻從 50 萬掉到 36 萬——因為 20 萬變成了設備。「賺不賺」和「現金多不多」是兩本完全不同的帳，這就是本週的核心。':
    'The answer is "profit, but less cash": on paper we made 26,667, yet cash dropped from NT$500,000 to NT$360,000 — because NT$200,000 turned into equipment. "Did we make money" and "do we have cash" are two completely different sets of books, and that is the heart of this week.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 一條恆等式統治一切': '1. One identity rules everything',
  資產: 'Assets',
  負債: 'Liabilities',
  股東權益: "Shareholders' equity",
  '翻譯：': 'In plain words: ',
  '公司擁有的每一塊錢資源（左邊），都有來源（右邊）——不是借來的（負債），就是股東的（權益）。':
    'every dollar of resources the company holds (left side) came from somewhere (right side) — either it was borrowed (liabilities) or it belongs to the shareholders (equity).',
  '複式簿記（double-entry bookkeeping）的天才之處：每筆交易':
    'The genius of double-entry bookkeeping: every transaction is ',
  '同時記兩邊（或同邊一增一減）':
    'recorded on both sides at once (or as one increase and one decrease on the same side)',
  '，恆等式永遠成立。記錄自帶防錯機制——兩邊不平，一定有地方記錯了。這套系統用了六百年，至今是所有財報的地基。':
    ', so the identity always holds. The record checks itself — if the two sides do not match, something went in wrong. The system has been running for six hundred years and is still the foundation of every financial statement.',

  /* ── 互動記帳台 ── */
  '飲料店的第一個月：跟著記六筆帳': 'Month one at the drinks shop: post six entries with me',
  '點「下一筆」逐步記帳，看左邊「資產」和右邊「負債＋權益」兩根柱子——':
    'Click "Next entry" to post them one at a time and watch the two columns, assets on the left and liabilities + equity on the right — ',
  '不管記哪一筆，兩根永遠一樣高': 'whichever entry you post, the two stay exactly the same height',
  '。這就是複式簿記自帶的防錯機制。': '. That is the error check built into double-entry bookkeeping.',
  交易步驟: 'Transaction steps',
  '資產與負債加權益的堆疊長條圖，兩柱等高':
    'Stacked bar chart of assets against liabilities plus equity, the two columns equal in height',
  '← 上一筆': '← Previous',
  '下一筆 →': 'Next entry →',
  第: 'Entry',
  筆: '',
  開店前: 'Before opening',
  '① 老闆投入 50 萬開店': '① Owner puts NT$500,000 into the shop',
  現金: 'Cash',
  股本: 'Share capital',
  '② 現金 20 萬買製茶設備': '② NT$200,000 cash for tea-making equipment',
  設備: 'Equipment',
  '③ 賒購原料 5 萬（月結付款）': '③ NT$50,000 of ingredients on credit (monthly terms)',
  存貨: 'Inventory',
  '④ 現金銷售 8 萬，結轉成本 3 萬': '④ NT$80,000 of cash sales, NT$30,000 transferred to cost of sales',
  銷貨成本: 'Cost of sales',
  '⑤ 付本月房租 2 萬': '⑤ Pay NT$20,000 of rent for the month',
  租金費用: 'Rent expense',
  '⑥ 月底提列設備折舊 3,333': '⑥ Record 3,333 of depreciation on the equipment at month end',
  折舊費用: 'Depreciation expense',
  累計折舊: 'Accumulated depreciation',
  應收: 'Receivables',
  應付: 'Payables',
  預收: 'Unearned',
  保留盈餘: 'Retained earnings',
  借: 'Dr',
  貸: 'Cr',
  '</div><p class="muted" style="margin:0">還沒有交易——資產、負債、權益都是 0。點「下一筆」開始。</p>':
    '</div><p class="muted" style="margin:0">No transactions yet — assets, liabilities and equity are all 0. Click "Next entry" to begin.</p>',
  '</div><div class="blabel">資產</div></div>': '</div><div class="blabel">Assets</div></div>',
  '</div><div class="blabel">負債 ＋ 權益</div></div>':
    '</div><div class="blabel">Liabilities + equity</div></div>',
  '<span class="muted">資產 ＝ 負債 ＋ 權益（0 ＝ 0）</span>':
    '<span class="muted">Assets = liabilities + equity (0 = 0)</span>',
  '資產 <span class="num">': 'Assets <span class="num">',
  '</span> ＝ 負債＋權益 <span class="num">': '</span> = liabilities + equity <span class="num">',
  '</span> <span class="ok">✓ 永遠平衡</span>': '</span> <span class="ok">✓ always balanced</span>',
  '·　本月淨利 <span class="num" style="color:var(--asset)">+26,667</span>（＝保留盈餘）':
    '·　net profit this month <span class="num" style="color:var(--asset)">+26,667</span> (= retained earnings)',

  /* ── 借貸法則 ── */
  '2. 借貸法則：五類科目的增減方向':
    '2. The rules of debit and credit: which way each of the five account types moves',
  '「借」（Debit, Dr）與「貸」（Credit, Cr）': '"Debit" (Dr) and "credit" (Cr) ',
  沒有好壞含義: 'carry no sense of good or bad',
  '，純粹是「左欄」與「右欄」的代號。記法：':
    ' — they are simply names for the left column and the right column. The way to remember it: ',
  '資產、費用長在左邊（借方增加）；負債、權益、收入長在右邊（貸方增加）':
    'assets and expenses grow on the left (a debit increases them); liabilities, equity and revenue grow on the right (a credit increases them)',
  '——各科目在自己家的方向增加。每筆分錄借方總額＝貸方總額，永遠。':
    ' — every account grows towards its own home side. In every entry, total debits = total credits. Always.',
  科目類別: 'Account type',
  增加記: 'Increase',
  減少記: 'Decrease',
  例子: 'Examples',
  '借（左）': 'Debit (left)',
  '貸（右）': 'Credit (right)',
  '現金、存貨、設備、應收帳款': 'Cash, inventory, equipment, accounts receivable',
  費用: 'Expenses',
  '房租、薪資、折舊': 'Rent, wages, depreciation',
  '應付帳款、借款': 'Accounts payable, borrowings',
  權益: 'Equity',
  '股本、保留盈餘': 'Share capital, retained earnings',
  收入: 'Revenue',
  銷貨收入: 'Sales revenue',
  '為什麼費用跟資產同邊？因為費用最終會':
    'Why do expenses sit on the same side as assets? Because in the end expenses ',
  減少權益: 'reduce equity',
  '——把它想成「權益的負項」，方向自然相反於權益。':
    ' — think of them as a negative item inside equity, so of course they move the opposite way.',

  /* ── 賺錢 ≠ 現金 ── */
  '3. 賺錢 ≠ 現金變多': '3. Making a profit ≠ having more cash',
  '回頭看記帳台的月底：本月': "Look back at the ledger at month end: this month's ",
  '淨利 ＋26,667': 'net profit was +26,667',
  '，自動流入權益的保留盈餘（這正是財報三表勾稽的第一條線，你剛剛親手記出來了）。但':
    ', and it flows straight into retained earnings under equity (that is the first line tying the three statements together, and you just posted it by hand). But ',
  '現金卻從 50 萬變 36 萬，減少 14 萬':
    'cash went from NT$500,000 to NT$360,000, down NT$140,000',
  '——因為買了設備 20 萬。': ' — because we bought NT$200,000 of equipment.',
  本週最重要的一句話: 'The one sentence that matters most this week',
  賺錢: 'making a profit',
  '」和「': ' and ',
  現金變多: 'having more cash',
  '」是兩件事。同一個月，飲料店淨利 +26,667、現金 −140,000——這就是為什麼上市公司要交':
    ' are two different things. In the same month the drinks shop had net profit of +26,667 and a cash change of −140,000 — which is why listed companies have to file ',
  三張: 'three',
  '報表（第 7 週會用現金流量表把這件事講完整）。':
    ' statements (week 7 finishes the story with the cash flow statement).',

  /* ── 應計制 ── */
  '4. 應計制：財報的靈魂設定': '4. The accrual basis: the soul setting of financial reporting',
  '應計制（accrual basis）': 'The accrual basis',
  '：收入在「賺到時」認列（交貨／提供服務），費用在「發生時」認列——':
    ': revenue is recognised when it is earned (goods delivered or service provided) and expenses when they are incurred — ',
  與現金何時進出無關: 'regardless of when the cash actually moves',
  '。由此誕生「四兄弟」科目，全部是時間差的產物：':
    '. Out of that come the "four siblings" accounts, every one of them a product of a timing gap:',
  科目: 'Account',
  情境: 'Situation',
  性質: 'What it is',
  應收帳款: 'Accounts receivable',
  '貨已交、錢未收': 'Goods delivered, cash not yet received',
  '資產（收錢的權利）': 'Asset (the right to be paid)',
  應付帳款: 'Accounts payable',
  '貨已拿、錢未付': 'Goods received, cash not yet paid',
  '負債（付錢的義務）': 'Liability (the obligation to pay)',
  預收收入: 'Unearned revenue',
  '錢已收、貨未交': 'Cash received, goods not yet delivered',
  '（欠客戶東西——不是收入！）': ' (you owe the customer something — not revenue!)',
  預付費用: 'Prepaid expenses',
  '錢已付、服務未用': 'Cash paid, service not yet used',
  '資產（例：預付一年保險，逐月轉費用）':
    'Asset (e.g. a year of insurance paid up front, moved to expense month by month)',
  最反直覺的是: 'The least intuitive of them is that ',
  預收收入是負債: 'unearned revenue is a liability',
  '：健身房收你年費 12,000，當下一毛錢收入都不能認，要逐月認 1,000——因為服務還沒提供，這筆錢是「欠你的服務」。':
    ': the gym takes NT$12,000 for a year and cannot book a single dollar of it as revenue that day. It recognises NT$1,000 a month, because the service has not been given yet — that money is service it owes you.',
  '為什麼要這麼麻煩？': 'Why go to all this trouble?',
  '因為應計制讓「這段期間的經營成果」可比較：用現金制的話，公司只要月底拖著不付貨款，獲利就能灌水。代價是：應計制也創造了操縱空間（提前認收入、費用資本化）——這正是第 8 週紅旗清單要抓的東西。':
    ' Because the accrual basis makes "what the business did over this period" comparable. On a cash basis, a company could pad its profit just by dragging its feet on supplier payments at month end. The price is that the accrual basis also creates room to manipulate (recognising revenue early, capitalising expenses) — exactly what the red-flag checklist in week 8 is built to catch. ',
  '應計制是更好的地圖，但地圖不是領土；現金流量表就是用來對地圖查核領土的。':
    'The accrual basis is a better map, but the map is not the territory; the cash flow statement is how you check the map against the territory.',

  /* ── 闢謠 ── */
  '5. 常見誤解闢謠': '5. Three things people get wrong',
  '「借＝支出、貸＝收入」': '"Debit means money out, credit means money in"',
  '完全不是。借貸只是左右欄位代號，「借：現金」是現金':
    'Not at all. Debit and credit are just names for the left and right columns; "Dr Cash" means cash ',
  增加: 'increases',
  '「有賺錢＝有現金」': '"If it is profitable, it has cash"',
  '飲料店淨利 +26,667、現金 −140,000，同一個月。':
    'The drinks shop: net profit +26,667 and cash −140,000, in the very same month.',
  '「會計是給會計師學的」': '"Accounting is for accountants"',
  '看不懂分錄邏輯的人讀財報，就像看不懂音符的人讀樂譜，只能看別人的二手評論。':
    'Reading financial statements without understanding journal entries is like reading a score without knowing the notes — all you can do is take somebody else\'s word for it.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '80 分': '80 min',
  '本週主菜。順序：Balance sheet → Income statement → Cash vs accrual accounting → Depreciation。預期收穫：用英文語境把 Dr/Cr、accrual 再走一遍，聽到 "accounts receivable" 能立刻對上「應收帳款」。':
    'The main course this week. Order: Balance sheet → Income statement → Cash vs accrual accounting → Depreciation. You should come away having walked Dr/Cr and accrual once more, so that hearing "accounts receivable" instantly calls up the account it stands for.',
  '60 分': '60 min',
  '《財報就像一本故事書》前三章（選讀）':
    '《財報就像一本故事書》, first three chapters (optional)',
  '中文語境的故事化版本，適合睡前讀。':
    'The same ideas told as a story, in Chinese — good bedtime reading.',
  '15 分': '15 min',
  '專欄 #7 逐表拆解段落 ↗': 'Column #7, the statement-by-statement section ↗',
  '現在回頭看，每個科目背後你都知道分錄長怎樣了。':
    'Coming back to it now, you know what the journal entry behind every line item looks like.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '換你當記帳士：飲料店第二個月': 'Your turn on the books: month two at the drinks shop',
  '發生六筆交易。寫出每筆分錄（科目＋借貸方向＋金額），最後驗算恆等式。':
    'Six transactions happen. Write the journal entry for each one (account + debit or credit + amount), then check the identity at the end. ',
  '先自己寫完，再展開對答案。': 'Write them all yourself before you open the answers.',
  '償還上月應付帳款 50,000（付現）': "Settle last month's accounts payable of 50,000 (in cash)",
  '再賒購原料 60,000': 'Buy another 60,000 of ingredients on credit',
  '本月銷售 150,000：其中現金 100,000、企業客戶月結 50,000（貨已交）':
    'Sales of 150,000 this month: 100,000 in cash and 50,000 to a corporate customer on monthly terms (goods delivered)',
  '結轉本月用掉的原料成本 55,000': 'Transfer the 55,000 of ingredients used this month to cost of sales',
  '收到某公司預付下個月團購訂金 30,000（貨還沒做）':
    "Receive a 30,000 deposit from a company for next month's group order (nothing made yet)",
  '月底：付房租 20,000、提列折舊 3,333':
    'Month end: pay 20,000 of rent and record 3,333 of depreciation',
  '驗證點：': 'Check: ',
  本月淨利應為: 'net profit this month should be',
  '（第 5 筆訂金不算收入）；月底「資產＝負債＋權益」＝':
    ' (the deposit in item 5 is not revenue); at month end, assets = liabilities + equity =',
  '（延續上月期末數）。': " (carrying on from last month's closing figures).",
  自我檢核: 'Check yourself',
  '六筆分錄借方＝貸方皆平衡': 'All six entries balance — debits = credits',
  '第 5 筆沒有把訂金記成收入（記預收收入＝負債）':
    'Item 5 does not book the deposit as revenue (it goes to unearned revenue, a liability)',
  '月底恆等式驗算通過（688,334）': 'The month-end identity checks out (688,334)',
  '能說出本月淨利與現金變動各多少、為何不同':
    'You can say what net profit and the change in cash each were, and why they differ',
  '展開完整解答（先自己寫完再看）': 'Open the full answer (write yours first)',
  '① 借：應付帳款 50,000      貸：現金 50,000\n② 借：存貨 60,000          貸：應付帳款 60,000\n③ 借：現金 100,000         貸：銷貨收入 150,000\n   借：應收帳款 50,000\n④ 借：銷貨成本 55,000      貸：存貨 55,000\n⑤ 借：現金 30,000          貸：預收收入 30,000  ← 負債，不是收入\n⑥ 借：租金費用 20,000      貸：現金 20,000\n   借：折舊費用 3,333       貸：累計折舊 3,333':
    '① Dr Accounts payable 50,000      Cr Cash 50,000\n② Dr Inventory 60,000             Cr Accounts payable 60,000\n③ Dr Cash 100,000                 Cr Sales revenue 150,000\n   Dr Accounts receivable 50,000\n④ Dr Cost of sales 55,000         Cr Inventory 55,000\n⑤ Dr Cash 30,000                  Cr Unearned revenue 30,000  ← a liability, not revenue\n⑥ Dr Rent expense 20,000          Cr Cash 20,000\n   Dr Depreciation expense 3,333   Cr Accumulated depreciation 3,333',
  本月淨利: 'Net profit this month',
  '（⑤ 的 30,000 不算收入）。': ' (the 30,000 in ⑤ is not revenue).',
  月底驗算: 'Month-end check',
  '：資產（現金 420,000 ＋ 應收 50,000 ＋ 存貨 25,000 ＋ 設備淨 193,334）＝':
    ': assets (cash 420,000 + receivables 50,000 + inventory 25,000 + equipment net of depreciation 193,334) =',
  '；負債（應付 60,000 ＋ 預收 30,000）＋ 權益（股本 500,000 ＋ 保留盈餘 98,334）＝':
    '; liabilities (payables 60,000 + unearned 30,000) + equity (share capital 500,000 + retained earnings 98,334) =',
  現金變動: 'Change in cash',
  '＝ +60,000（36 萬→42 萬），': '= +60,000 (NT$360,000 → NT$420,000), and ',
  淨利: 'net profit',
  '＝ 71,667——又不一樣：這次差在「賒銷 5 萬還沒收到」與「預收 3 萬先進來」等時間差。你已經開始用會計的眼睛看世界了。':
    '= 71,667 — different again. This time the gap is timing: NT$50,000 sold on credit that has not been collected, and NT$30,000 collected before the goods exist. You are starting to see the world through accounting eyes.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  開一家虛擬飲料店: 'Open an imaginary drinks shop',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（說故事）': 'Opening (tell the story)',
  '「我們來開一家虛擬飲料店。我出 50 萬，第一個月：買了 20 萬設備、賒了 5 萬原料、賣了 8 萬、付了 2 萬房租。你覺得這個月是賺還是賠？」（可以直接打開上面的記帳台，一筆一筆點給對方看。）':
    '"Let\'s open an imaginary drinks shop. I put in NT$500,000. In the first month we bought NT$200,000 of equipment, took NT$50,000 of ingredients on credit, sold NT$80,000 and paid NT$20,000 of rent. Do you think we made money or lost money?" (You can open the ledger above and click through it with them, one entry at a time.)',
  第一個驚訝: 'The first surprise',
  '「帳面上賺了 26,667。但現金從 50 萬變 36 萬——少了 14 萬。賺錢的店現金卻變少，因為錢變成了設備。':
    '"On paper we made 26,667. But cash went from NT$500,000 to NT$360,000 — down NT$140,000. A shop that made money ended up with less cash, because the money turned into equipment. ',
  '『賺不賺』和『現金多不多』是兩本帳':
    "'Did we make money' and 'do we have cash' are two separate sets of books",
  '，這就是為什麼上市公司要交三張報表。」':
    ', and that is why listed companies have to file three statements."',
  '第二個驚訝（預收收入）': 'The second surprise (unearned revenue)',
  '「健身房收你 12,000 年費，你猜他們當天能算多少『收入』？」——答案：0，服務還沒給，那是欠你的債。順帶一提：這也是為什麼預售屋、儲值卡商家倒閉時，消費者是債權人。':
    '"The gym charges you NT$12,000 for the year. How much of that can they count as revenue on the day?" — Answer: zero. The service has not been given, so it is a debt they owe you. And by the way: this is why, when an off-plan property developer or a shop holding your stored-value card goes under, the customers are creditors.',
  互動: 'Interaction',
  '讓對方記一筆「家庭分錄」——「這個月我們付了 3 萬房租」怎麼記？（借：房租費用／貸：現金——恭喜對方寫出人生第一筆分錄。）':
    'Have them post a household journal entry — how would you record "we paid NT$30,000 of rent this month"? (Dr Rent expense / Cr Cash — congratulate them on the first journal entry of their life.)',
  預期反應與應對: 'What they will say, and what to answer',
  '「太難了，我只要知道公司賺不賺」':
    '"This is too much. I just want to know whether a company makes money"',
  '「只要記住兩本帳的觀念就好：下次看到新聞說某公司『獲利創新高但現金吃緊』，你就是家裡唯一知道那是什麼意思的人。」':
    '"Just hold on to the two-sets-of-books idea. Next time the news says a company has \'record profits but a cash squeeze\', you will be the only person at home who knows what that means."',
  '「賒帳也要記？」': '"Things bought on credit get recorded too?"',
  '「對，這是現代會計最聰明的地方：欠的、被欠的都記，才藏不住。」':
    '"Yes — and that is the cleverest part of modern accounting: what you owe and what you are owed both go on the books, so nothing can hide."',
  本腳本可搭配專欄: 'Pair this script with column ',
  '#7《財務報表三表》': '#7, "The three financial statements"',
  '服用。': '.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  本週完成的定義: 'What counts as done this week',
  '能默寫借貸法則表（五類科目增減方向）':
    'You can write out the debit/credit table from memory (which way each of the five account types moves)',
  六筆練習分錄全對且恆等式驗算通過:
    'All six practice entries are right and the identity checks out',
  '能解釋「預收收入為什麼是負債」與「折舊為什麼不是現金支出」':
    'You can explain why unearned revenue is a liability and why depreciation is not a cash outflow',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 4 週完成——下週見：損益表深讀。':
    '🎓 Week 4 done — next up: reading the income statement closely.',
  'Q1 前段回顧 · 下週預告 · Week 05：損益表深讀':
    'Q1 so far · next week · Week 05: reading the income statement closely',
  '——週 1–4 的四樣工具（複利表、費雪式、債券折現、借貸法則）都在手上了。下週起進入三表深讀：先從損益表開始，把飲料店的「賺多少」拆解成毛利、營業利益、淨利。':
    ' — you now hold all four tools from weeks 1–4: the compounding sheet, the Fisher equation, bond discounting, and the rules of debit and credit. From next week we read the three statements closely, starting with the income statement, and break the drinks shop\'s "how much did we make" into gross profit, operating profit and net profit.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：利率與殖利率曲線': 'Last week: interest rates and the yield curve',
  專欄文章: 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
