/*
 * 給家人的投資課 Week 10：台股交易制度與成本 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-10-market-structure.html
 *
 * 沿用 week-01 的慣例（金額單位、片段邊界、機構名不自創英譯）。本週的差異：
 *
 * ⚠ 過路費計算機有五種值後綴，分兩類處理
 *   幣值與比例（萬／元／折）→ 空字串，單位改寫進標籤：
 *       單筆金額 → "Trade size (NT$10k)"
 *       手續費折數 → "Commission discount (tenths of the full fee)"
 *       單趟來回成本 → "Cost per round trip (NT$)"
 *   非幣值的量詞（趟／倍）→ 照常翻成英文（trips ／ ×），因為它們本來就是
 *   讀得出來的字，不是需要換算的單位；塞進標籤反而讓數字變成裸數。
 *
 * ⚠ 台灣機構一律用官方英文名
 *   證交所 TWSE｜集保 TDCC（Taiwan Depository & Clearing Corporation）｜
 *   金管會 FSC。「綠角財經筆記」用該站自己的英文名 Green Horn Finance
 *   Footnote（出處：站點網域 greenhornfinancefootnote.blogspot.com），不是音譯。
 *
 * ⚠ KEEP：「站內搜『交易成本』」的搜尋字保留中文
 *   那是要輸進中文站內搜尋框的字串，翻成英文就搜不到；後面補一個括號釋義。
 *
 * ⚠ 已知限制（與 week-01 相同，非本對照表可解）
 *   `<strong>…</strong>。` 這種「句號自己一個文字節點」的寫法，全形句號不在
 *   抽取器的 CJK 範圍內，抽不到也換不掉，英文頁上會留著。
 *
 * 語域：寫給家人的教材。高速公路過路費、「蛤」一聲、賭場那幾句要保住口語感。
 */

export const KEEP = ['交易成本'];
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
  '給家人的投資課 · Q1 共同地基 · Week 10':
    'Family Investing Course · Q1 Common Ground · Week 10',
  '台股交易制度與成本': 'Taiwan Market Structure and Trading Costs',
  '前九週學「分析什麼」，本週學「在哪裡買、付多少過路費」。':
    'The first nine weeks were about what to analyse. This week is about where you buy, and how much toll you pay.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：無（獨立單元）': 'Prerequisites: none (standalone unit)',
  '52 週 · 第 10 週': '52 weeks · Week 10',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '交易成本是投資人唯一 100% 確定的負報酬（Q2 指數化投資的核心論據）、操盤手的執行基本功（Q3）、財務長理解自家股票流動性的背景知識（Q4 IR）。':
    "Trading costs are the only 100% certain negative return an investor has (the core argument for index investing in Q2), the trader's basic execution skill (Q3), and the background a CFO needs to understand their own stock's liquidity (Q4, IR).",
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「果汁機」時對方卡住的點——「加水的果汁停電就露餡」有沒有講通。先用自己的話再講一次。':
    'Think back to where people got stuck when you taught "the juicer" last week — did "watered-down juice shows itself the moment the power cuts out" land? Say it again in your own words first.',
  '⚠️ 本週的費率與制度為通則整理，實際以證交所、金管會與券商公告為準（文中已標查證點）。':
    '⚠️ The rates and rules here are a general summary. What actually applies is whatever the TWSE, the FSC and your broker announce (the points to verify are flagged in the text).',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '用 50 萬買一檔股票、之後賣掉（一趟來回）——政府和券商總共抽你多少錢？（無手續費折扣）':
    'You buy NT$500,000 of a stock and later sell it — one round trip. How much do the government and your broker take between them? (No commission discount.)',
  '猜一個答案': 'Pick an answer',
  '幾十元': 'A few tens of dollars',
  '幾百元': 'A few hundred',
  '近三千元': 'Close to three thousand',
  '上萬元': 'Over ten thousand',
  '元（0.585%）': 'NT dollars (0.585%)',
  '答對了。買賣各 0.1425% 手續費＋賣出 0.3% 證交稅＝ 2,925 元。單次像小錢——但往下拉計算機看：一年五趟、二十年，光過路費吃掉終值三分之一。':
    'Correct. 0.1425% commission on the buy and again on the sell, plus 0.3% transaction tax on the sell = NT$2,925. One trade looks like small money — but scroll down to the calculator: five round trips a year for twenty years, and the tolls alone eat a third of your final value.',
  '答案是近三千元（2,925）：買賣各 0.1425% 手續費＋賣出 0.3% 證交稅。單次像小錢——但往下拉計算機看：一年五趟、二十年，光過路費吃掉終值三分之一。':
    'The answer is close to three thousand (NT$2,925): 0.1425% commission on the buy and again on the sell, plus 0.3% transaction tax on the sell. One trade looks like small money — but scroll down to the calculator: five round trips a year for twenty years, and the tolls alone eat a third of your final value.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 一筆委託單的旅程': '1. The journey of a single order',
  '你按下「買進」之後發生的事：': 'What happens after you press "Buy":',
  '你（券商 App）': 'You (your broker app)',
  '下單': 'Place the order',
  '券商': 'Broker',
  '檢核、送單': 'Checks it, routes it',
  '證交所': 'TWSE',
  '撮合引擎配對買賣 → 成交回報': 'The matching engine pairs buy and sell → fill report',
  '集保': 'TDCC',
  '股票過戶': 'Shares transferred',
  '銀行': 'Bank',
  'T+2 交割扣款': 'T+2 settlement debit',
  'T+2 交割': 'T+2 settlement',
  '：今天成交，':
    ': you trade today, and the cash only really leaves or enters your bank account ',
  '兩個營業日後': 'two business days later',
  '銀行帳戶才實際扣款／入帳。買股票當下帳戶可以沒錢，T+2 早上補足即可——但補不足就是':
    '. You do not need the money in the account at the moment you buy; topping it up on the morning of T+2 is enough — but if you cannot, that is ',
  '違約交割': 'a settlement default',
  '，信用紀錄嚴重受損（新手最常見的事故，分享環節必講）。':
    ', and it does serious damage to your credit record (the most common accident for beginners — you must cover this when you teach it).',

  /* ── 撮合制度表 ── */
  '2. 台股撮合制度的重點規則': "2. The rules that matter in Taiwan's matching system",
  '規則': 'Rule',
  '內容': 'What it says',
  '你該知道的點': 'What you need to know',
  '交易時間': 'Trading hours',
  '9:00–13:30（盤後定價、零股另有時段）':
    '9:00–13:30 (the after-hours fixed-price and odd-lot sessions run separately)',
  '開盤 9:00 與收盤 13:25–13:30 是集合競價':
    'The 9:00 open and the 13:25–13:30 close are call auctions',
  '撮合方式': 'How orders match',
  '盤中': 'Intraday: ',
  '逐筆交易': 'continuous trading',
  '；開收盤集合競價': '; call auctions at the open and the close',
  '逐筆＝隨到隨撮；收盤前 5 分鐘集合競價決定收盤價':
    'Continuous = matched as they arrive; the last 5 minutes are a call auction that sets the closing price',
  '漲跌幅': 'Daily price limit',
  '每日 ±10%': '±10% a day',
  '鎖死漲／跌停時可能買不到／賣不掉——流動性風險的極端形式':
    'When it locks limit-up or limit-down you may not be able to buy or sell at all — liquidity risk in its extreme form',
  '交易單位': 'Trading unit',
  '1 張＝1,000 股；有盤中零股交易':
    '1 lot = 1,000 shares; intraday odd-lot trading is available',
  '小資金可買零股，但零股流動性較差、價差較大':
    'A small account can buy odd lots, but odd lots are less liquid and the spread is wider',
  '當日沖銷': 'Day trading',
  '現股當沖需簽風險預告': 'Cash day trading requires signing a risk disclosure',
  '本課程定位：當沖是交易者的職業競技場，不是投資工具':
    "This course's position: day trading is a professional arena for traders, not an investing tool",
  '美股對照（建立座標系）：做市商持續報價、無漲跌幅限制（改用熔斷）、可買 1 股、交割 T+1——台股的漲跌停與集合競價，美股都沒有，策略移植前要注意制度差異。':
    "US comparison, to give you bearings: market makers quote continuously, there are no daily price limits (circuit breakers instead), you can buy a single share, and settlement is T+1. The US has neither Taiwan's limit-up/limit-down nor its call auctions, so mind the structural differences before you transplant a strategy.",

  /* ── 成本表 ── */
  '3. 交易成本全表：顯性的部分': '3. The full cost table: the visible part',
  '成本': 'Cost',
  '費率': 'Rate',
  '收取時點': 'When it is charged',
  '備註': 'Notes',
  '券商手續費': 'Broker commission',
  '0.1425%（上限）': '0.1425% (the cap)',
  '買、賣各一次': 'Once on the buy, once on the sell',
  '電子下單普遍 5–6 折——': 'Online orders usually pay 50–60% of that — ',
  '查你的券商實際折數': 'check what your own broker actually charges',
  '證券交易稅': 'Securities transaction tax',
  '0.3%（股票）': '0.3% (stocks)',
  '只在': 'Only when you ',
  '賣出': 'sell',
  '時': '',
  'ETF 為 0.1%；當沖減半屬階段性政策，使用前查證':
    'ETFs pay 0.1%; the half rate for day trades is a temporary policy — verify it before you rely on it',
  '股利相關': 'Dividend-related',
  '領股利時': 'When dividends are paid',
  '二代健保補充保費等，Q4 稅務週詳談':
    'The second-generation NHI supplementary premium and the like — covered in the Q4 tax week',

  /* ── 過路費計算機 ── */
  '過路費計算機': 'The toll calculator',
  '拉你的實際條件，看單趟成本——然後看下面那兩張卡：':
    'Drag in your real numbers and look at the cost of one round trip — then look at the two cards below: ',
  '周轉率的複利懲罰，20 年後差多少':
    'what turnover costs you once it compounds for 20 years',
  '。（假設市場年報酬 7%）': '. (Assuming the market returns 7% a year.)',
  '股票（稅 0.3%）': 'Stocks (tax 0.3%)',
  'ETF（稅 0.1%）': 'ETFs (tax 0.1%)',
  /* 幣值與比例的後綴剝成空字串，單位進標籤（見檔頭） */
  '單筆金額': 'Trade size (NT$10k)',
  '50 萬': '50',
  '手續費折數': 'Commission discount (tenths of the full fee)',
  '6 折': '6',
  '一年買賣幾趟': 'Round trips per year',
  '年周轉次數': 'Round trips per year',
  '5 趟': '5 trips',
  '2,355 元': '2,355',
  '單趟來回成本': 'Cost per round trip (NT$)',
  '一年的過路費率': 'Tolls paid over the year',
  '扣成本後年報酬': 'Annual return after costs',
  '你（一年': 'You:',
  '趟）': 'trips a year',
  '2.48 倍': '2.48 ×',
  '20 年後的本金倍數': 'Multiple of your capital after 20 years',
  '不動如山（買了就放）': 'Sitting still (buy it and leave it)',
  '3.87 倍': '3.87 ×',
  '假設兩者拿到同樣的市場報酬 7%/年——現實中頻繁進出還要另付滑價與選時錯誤，這裡只算確定的過路費。':
    'Both are assumed to earn the same 7% a year from the market. In reality, trading in and out also costs you slippage and timing mistakes; this counts only the tolls you know for certain.',
  '萬': '',
  '折': '',
  '趟': 'trips',
  '元': '',
  '倍': '×',
  '20 年下來，光確定的過路費就吃掉終值的 <b>':
    'Over 20 years, the tolls alone — the certain part — eat this much of your final value: <b>',
  '——「不動如山」不是懶，是有數學支撐的策略。':
    ' — "sitting still" is not laziness, it is a strategy with arithmetic behind it.',

  /* ── 隱性成本 ── */
  '4. 隱性成本：買賣價差與滑價': '4. The hidden costs: spread and slippage',
  '買賣價差': 'The bid-ask spread',
  '：最佳買價 99.9 vs 最佳賣價 100.1——你用市價單買進的瞬間就付了價差的一半。大型股價差約 0.1–0.2%，冷門股與零股可能 1% 以上。':
    ': best bid 99.9 against best ask 100.1 — the instant you buy with a market order you have already paid half the spread. Large caps run about 0.1–0.2%; thin stocks and odd lots can be over 1%. ',
  '滑價': 'Slippage',
  '：你想的價格 vs 實際成交價的差——單量大於掛單簿深度時，會「吃穿」好幾檔價位。':
    ': the gap between the price you had in mind and the price you actually got — when your order is bigger than the depth on the book, it eats through several price levels.',
  '市價單 vs 限價單': 'Market orders vs limit orders',
  '：市價單保證成交、不保證價格；限價單保證價格、不保證成交。':
    ': a market order guarantees the fill but not the price; a limit order guarantees the price but not the fill. ',
  '平時用限價單是基本紀律': 'Using limit orders by default is basic discipline',
  '（尤其開盤、收盤與冷門股）。':
    ' (especially at the open, at the close, and in thin stocks).',
  '五檔報價': 'The five-level quote',
  '是觀察流動性的窗口——買之前先看五檔，估算「我這筆金額進得去、出得來嗎」：':
    ' is your window on liquidity. Look at it before you buy and ask "can an order this size get in, and get back out?":',
  '權值股的五檔（示意）': 'Five levels for a large cap (illustrative)',
  '買量(張)': 'Bid size (lots)',
  '買價': 'Bid',
  '賣價': 'Ask',
  '賣量(張)': 'Ask size (lots)',
  '價差 0.1%、每檔幾百到上千張——進出百萬':
    'Spread 0.1%, hundreds to thousands of lots at every level — moving a million in and out is ',
  '無痛': 'painless',
  '冷門股的五檔（示意）': 'Five levels for a thin stock (illustrative)',
  '價差 1.4%、每檔個位數張——你的單':
    'Spread 1.4%, single-digit lots at every level — your order ',
  '就是行情': 'is the market',
  '，市價單會成交在離譜價位。':
    ', and a market order will fill at an absurd price.',

  /* ── 除權息 ── */
  '5. 除權息機制（概念版）': '5. How going ex-dividend works (the concept version)',
  '除息': 'Going ex-dividend',
  '：發 2 元現金股利 → 除息日股價自動減 2 元。':
    ': the company pays a NT$2 cash dividend → on the ex-dividend day the share price is automatically cut by NT$2. ',
  '股利不是天上掉的錢': 'A dividend is not money falling out of the sky',
  '，是把公司的錢搬到你口袋、股價同步扣掉。':
    '; it moves the company\'s money into your pocket and docks the share price by the same amount. ',
  '填息': 'Filling the gap',
  '：除息後股價漲回原位才算真正賺到——填不填息取決於公司體質，不是股利率高低。台灣的「高殖利率」文化盛行，判讀時永遠回到：':
    ': you have only really gained once the price climbs back to where it was — and whether it does depends on the health of the business, not on how high the yield is. Taiwan has a strong "high dividend yield" culture, so always come back to ',
  '總報酬 ＝ 價差 ＋ 股利': 'total return = price change + dividends',
  '，兩者合著看。（稅務留給 Q4。）':
    ', and read the two together. (Tax is left to Q4.)',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「手續費幾百塊，小錢」': '"Commission is a few hundred dollars — small money"',
  '單次是小錢，': 'One trade is small money. ',
  '頻率': 'Frequency',
  '讓它變大錢（計算機那 36%）；成本是確定的，預期報酬是不確定的。':
    ' turns it into big money (that 36% in the calculator). The cost is certain; the expected return is not.',
  '「零股跟整張一樣」': '"An odd lot is the same as a full lot"',
  '制度上能買，但流動性與價差劣勢真實存在；定期定額零股要用限價單、避開冷門標的。':
    'You are allowed to buy them, but the liquidity and spread disadvantage is real. For regular odd-lot investing, use limit orders and stay away from thin names.',
  '「當沖稅減半，所以當沖划算」': '"The tax is halved for day trades, so day trading pays"',
  '稅減半仍有雙邊手續費＋價差；當沖的統計現實是多數散戶長期為負（且該優惠屬階段性政策，隨時可能落日）。':
    'Half the tax still leaves commission on both sides plus the spread. The statistical reality of day trading is that most retail traders end up negative over time — and the concession is a temporary policy that can lapse at any moment.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '50 分': '50 min',
  '台灣證券交易所 ↗': 'Taiwan Stock Exchange (TWSE) ↗',
  '「交易資訊 → 交易制度」專區': ', the "Trading Information → Trading System" section',
  '讀「撮合原則」與「盤中零股交易」說明頁；順手查目前的當沖證交稅規定（驗證講義的查證點）。預期收穫：知道規則的官方出處，之後制度變動你會查第一手。':
    'Read the "matching principles" and "intraday odd-lot trading" pages, and while you are there check the current transaction tax rule for day trades (the verification point flagged in the notes). You should come away knowing the official source for the rules, so that when they change you go straight to it.',
  '30 分': '30 min',
  '你的券商 App': 'Your broker app',
  '找出自己的手續費折數（不知道就打客服問——這通電話年化報酬率極高）；打開任一大型股與任一冷門股的五檔報價並排比較掛單厚度。':
    'Find out your own commission discount (if you do not know it, call customer service — that phone call has an extremely high annualised return). Then open the five-level quote for any large cap and any thin stock side by side and compare how thick the book is.',
  '20 分': '20 min',
  '綠角財經筆記 ↗': 'Green Horn Finance Footnote ↗',
  '站內搜「交易成本」': '— search the site for 交易成本 (trading costs)',
  '台灣視角的成本複利論述，選一篇讀。':
    'The cost-compounding argument from a Taiwan perspective. Pick one piece and read it.',
  '選讀': 'Optional',
  '買賣價差的標準定義。': 'The standard definition of the bid-ask spread.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '算清楚自己的過路費': 'Work out your own tolls',
  '任務 A｜個人成本卡（30 分鐘）': 'Task A | Your personal cost card (30 minutes)',
  '用你的實際手續費折數，在上面的計算機重算 50 萬來回成本：股票版與 ETF 版各一次':
    'Using your real commission discount, redo the NT$500,000 round trip in the calculator above — once for stocks, once for an ETF',
  '回顧自己（或家人）過去一年的實際交易次數，估算全年交易成本佔資產比重':
    'Look back at how many trades you (or your family) actually made last year and estimate the year\'s trading costs as a share of assets',
  '做一張「成本卡」貼在交易軟體旁：單趟成本 %、我的年周轉上限':
    'Make a "cost card" and stick it beside your trading app: cost per round trip in %, and my ceiling for round trips per year',
  '任務 B｜五檔觀察（20 分鐘）': 'Task B | Watch the order book (20 minutes)',
  '挑三檔股票（權值股／中型股／冷門股），同一時間截圖五檔報價，記錄：價差 %（(賣一−買一)÷中價）、五檔總掛單量。寫三行結論：如果我要進出 100 萬，各需要幾檔價位？':
    'Pick three stocks (a large cap, a mid cap, a thin one), screenshot all five quote levels at the same moment, and record the spread in % ((ask 1 − bid 1) ÷ mid) plus the total size across the five levels. Write three lines: if I wanted to move NT$1 million in and out, how many price levels would each one take?',
  '本週工具驗證：': "This week's tool check: ",
  '50 萬無折扣來回 ＝': 'a NT$500,000 round trip with no discount =',
  '2,925 元（0.585%）': 'NT$2,925 (0.585%)',
  '；6 折股票': '; stocks at a 60% commission rate',
  '、6 折 ETF': ', ETFs at a 60% commission rate',
  '——計算機與手算要一致。':
    ' — the calculator and your hand calculation should agree.',
  '自我檢核': 'Check yourself',
  '成本卡完成（用自己的真實折數）':
    'The cost card is done, using your own real commission rate',
  '三檔股票的價差與深度紀錄完成': 'Spread and depth recorded for three stocks',
  '能說出 T+2 與違約交割的關係':
    'You can explain how T+2 relates to a settlement default',
  '任務 C｜快問快答三題（先答，再展開對答案）':
    'Task C | Three quick questions (answer first, then expand to check)',
  '為什麼證交稅只在賣出收，對「長期持有」是隱性獎勵？':
    'Why is a tax charged only on sales an implicit reward for holding long term?',
  '→ 買進不課稅、賣出才課——': '→ Buying is not taxed, only selling is — ',
  '不賣就不觸發': 'if you never sell, it never fires',
  '；周轉越低、繳稅次數越少，制度天然偏袒長期持有者。':
    '. The lower your turnover, the fewer times you pay, so the system naturally favours long-term holders.',
  '市價單在什麼情境下特別危險？（舉兩個）':
    'When is a market order especially dangerous? (Name two.)',
  '開盤瞬間': 'the instant the market opens',
  '（集合競價後價格跳動大）②':
    ' (prices jump hard right after the opening call auction) ② ',
  '冷門股／零股': 'thin stocks and odd lots',
  '（掛單稀疏，市價單可能吃穿多檔成交在離譜價位）；另外漲跌停邊緣也危險。':
    ' (the book is sparse, so a market order can eat through several levels and fill at an absurd price). The edges of the daily limits are dangerous too.',
  '除息 3 元、除息日股價開盤跌 3 元——你賺了還是沒賺？':
    'A NT$3 dividend goes ex and the price opens NT$3 lower — have you gained or not?',
  '沒賺也沒虧': 'You have neither gained nor lost',
  '（暫時）——3 元從股價搬進你的現金帳戶，總資產不變；之後「填息」漲回 3 元才是真的賺，貼息則是領了股利賠了價差。':
    ' (for now) — NT$3 moves out of the share price and into your cash account, so your total assets are unchanged. Only when the price climbs back by NT$3 have you really gained; if it never does, you collected the dividend and lost it on the price.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '高速公路的過路費': 'Tolls on the freeway',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（過路費）': 'Opening (the toll)',
  '「買賣一次股票，你猜政府和券商總共抽多少？」（揭曉：50 萬來回約 2,400–2,900 元。）「感覺是小錢？那如果一年進出五次、連續二十年呢？」（打開上面的計算機拉給對方看：':
    '"Buy and sell a stock once — guess how much the government and the broker take between them?" (The reveal: about NT$2,400–2,900 on a NT$500,000 round trip.) "Feels like small money? What if you do it five times a year for twenty years?" (Open the calculator above and drag it for them: ',
  '光過路費就吃掉超過三分之一的最終獲利':
    'the tolls alone eat more than a third of what you end up with',
  '——對方通常會「蛤」一聲，這一聲就是教學成功。）':
    ' — they usually let out a "huh?", and that sound means the lesson landed.)',
  '核心比喻：過路費': 'The core metaphor: the toll booth',
  '「交易成本像高速公路過路費。偶爾出遊沒感覺；但你如果每天在交流道進進出出，過路費比油錢還貴。':
    '"Trading costs are like freeway tolls. Take the occasional trip and you barely notice; but if you are on and off the ramps every day, the tolls cost more than the petrol. ',
  '投資賺不賺不確定，過路費是百分之百確定的':
    'Whether the investment makes money is uncertain — the toll is 100% certain',
  '——所以能少過收費站就少過。」':
    ' — so pass through as few toll gates as you can."',
  '互動：兩個防身知識': 'Interaction: two things to protect yourself with',
  '「一定要記住的：①今天買股票，':
    '"Two things you have to remember: ① you buy a stock today, and the money only comes out ',
  '後天': 'the day after tomorrow',
  '才扣款——帳戶沒錢會變違約交割，信用毀掉；②下單用':
    ' — if there is nothing in the account it becomes a settlement default and your credit is wrecked; ② place your orders at a ',
  '限價': 'limit price',
  '，就是先講好價格才成交，不會被亂賣。」':
    ', which means the price is agreed before anything trades, so nothing gets sold out from under you."',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那高股息每年領錢總是真的吧？」':
    '"But high-dividend stocks really do pay you every year, right?"',
  '用除息機制解釋「股利是左口袋換右口袋，漲回去才是真的賺」——預告之後資產配置週會講怎麼看總報酬。':
    'Use the ex-dividend mechanism to explain that a dividend moves money from your left pocket to your right, and only the price climbing back is a real gain — then flag that the asset allocation week will cover how to read total return.',
  '「當沖聽說能快速賺錢」': '"I hear you can make money fast day trading"',
  '「賭場也能。統計上絕大多數當沖散戶長期是輸的，而且每一把都先付過路費。」':
    '"So can a casino. Statistically the vast majority of retail day traders lose over time — and every single hand starts by paying the toll."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能畫出委託單旅程（券商→交易所→集保／交割）':
    'You can draw the journey of an order (broker → exchange → TDCC / settlement)',
  '個人成本卡完成，知道自己的真實費率':
    'Your personal cost card is done and you know your real rates',
  '能解釋價差、滑價、限價單紀律三件事':
    'You can explain all three: spread, slippage, and limit-order discipline',
  '分享環節完成（T+2 與限價單兩個防身知識講到）':
    'You have taught it, covering both defences — T+2 and limit orders',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 10 週完成——下週見：總經指標判讀。':
    '🎓 Week 10 done — next up: reading the macro indicators.',
  '下週預告 · Week 11：總經指標判讀':
    'Next week · Week 11: reading the macro indicators',
  '——公司分析完、交易也懂了，接下來把鏡頭拉遠：GDP、CPI、利率、PMI 這些新聞天天講的數字，到底該怎麼讀、哪些對投資真的有用。你會建立自己的「每月總經儀表板」。':
    ' — with company analysis and trading behind you, we pull the camera back: GDP, CPI, interest rates, PMI — the numbers the news repeats every day. How should you read them, and which ones actually matter for investing? You will build your own monthly macro dashboard.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：比率體系與杜邦五因子': 'Previous week: the ratio system and five-factor DuPont',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
