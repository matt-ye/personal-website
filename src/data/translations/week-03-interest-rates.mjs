/*
 * 給家人的投資課 Week 03：利率與殖利率曲線 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-03-interest-rates.html
 *
 * 沿用 week-01 的慣例（金額單位、片段邊界、機構名不自創英譯）。以下是本週的差異：
 *
 * ⚠ 債券蹺蹺板計算機的單位
 *   價格值由 JS 算出（`p.toFixed(1)+" 萬"`），依慣例把「萬」換成空字串，
 *   單位改掛在圖例的基準線標籤上：「虛線 = 面額 100 萬（平價）」
 *   → "Dashed line = par, 100 (NT$10k)"。圖上 Y 軸與三張卡片的數字因此
 *   共用同一個單位宣告，不會出現裸數字打架。
 *
 * ⚠ SVG 系列標籤 `年</text>` → `y</text>`（不是 week-01 的空字串）
 *   week-01 那條是 X 軸刻度（軸名已在別處），這裡是貼在三條線右端的
 *   系列標籤「2年／5年／10年」，去掉單位會變成孤立的 2/5/10，讀不出來。
 *
 * ⚠ 片段邊界補了 week-01 漏掉的半形空白
 *   `<b>標籤：</b>內文` 與 `專欄 <a>#3</a>一起給對方讀` 這兩種接法，
 *   原始碼裡標記前後沒有空白（中文不需要）。week-01 的對照表在同型的
 *   位置沒補空白，英文會黏成 "roles:Interest" / "…"and read"。本檔一律補上。
 *
 * ⚠ 已知限制（與 week-01 相同，非本對照表可解）
 *   `<strong>…</strong>。` 這種「句號自己一個文字節點」的寫法，句號是
 *   U+3002，不在抽取器的 CJK 範圍內，所以抽不到也換不掉——英文頁上會留下
 *   全形句號。要修得動原始碼，不在對照表的職權內。
 *
 * 語域：寫給家人的教材。地心引力、蹺蹺板、颱風檢查門窗這些比喻要保住，
 *   不要改寫成券商研究報告。
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
  單元導航: 'Section navigation',
  切換深淺主題: 'Toggle light / dark theme',

  /* ── 標題區 ── */
  '給家人的投資課 · Q1 共同地基 · Week 03':
    'Family Investing Course · Q1 Common Ground · Week 03',
  利率與殖利率曲線: 'Interest Rates and the Yield Curve',
  '利率是所有資產的地心引力——看懂它，等於看懂資產定價的重力場。':
    'Interest rates are gravity for every asset — understand them and you understand the field that pulls on every price.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 1 週': 'Week 1',
  '52 週 · 第 3 週': '52 weeks · Week 3',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '利率決定折現率的底（Q2 估值）、債券部位的漲跌（Q3 組合）、公司借錢的成本（Q4 WACC）。它是所有資產定價的地心引力。':
    'Interest rates set the floor under the discount rate (Q2, valuation), move your bond positions (Q3, portfolio) and price what it costs a company to borrow (Q4, WACC). They are the gravity behind every asset price.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「口袋破洞」時對方卡住的點——是費雪的名目 vs 實質，還是購買力半衰期？先用自己的話再講一次。':
    'Think back to where people got stuck when you taught "the hole in your pocket" last week — was it Fisher\'s nominal vs real, or the half-life of purchasing power? Say it again in your own words first.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '市場利率從 3% 升到 4%。你手上有兩張債券——一張 2 年到期、一張 10 年到期，票息都是 3%。哪張跌得比較慘？各跌多少？':
    'The market rate goes from 3% to 4%. You hold two bonds — one maturing in 2 years, one in 10 — and both pay a 3% coupon. Which one falls harder, and by how much?',
  猜一個答案: 'Pick an answer',
  兩張差不多: 'About the same',
  '2 年債跌比較多': 'The 2-year falls more',
  '10 年債跌比較多': 'The 10-year falls more',
  '2 年期債券': '2-year bond',
  '100 萬 → 98.11 萬': 'NT$1M → NT$981,100',
  '10 年期債券': '10-year bond',
  '100 萬 → 91.89 萬': 'NT$1M → NT$918,900',
  '答對了。同樣升息 1%，10 年債跌 8.11%、2 年債只跌 1.89%——四倍多。原因是它的現金流離現在更遠，被折現放大得更兇。這個敏感度叫「存續期間」，本週的主角。':
    'Correct. For the same 1% rise, the 10-year drops 8.11% while the 2-year drops only 1.89% — more than four times as much. Its cash flows sit further out, so discounting magnifies them harder. That sensitivity is called "duration", the star of this week.',
  '其實是 10 年債慘得多：跌 8.11% vs 2 年債的 1.89%，差四倍多。年期越長、現金流離現在越遠，被折現率放大得越兇——這叫「存續期間（duration）」。':
    'Actually the 10-year is far worse off: down 8.11% against the 2-year\'s 1.89%, more than four times as much. The longer the maturity, the further out the cash flows sit, and the harder the discount rate magnifies them — that is "duration".',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 利率從哪裡來：政策利率的傳導鏈':
    '1. Where rates come from: the policy-rate transmission chain',
  '利率不是一個數字，是一整條鏈。央行只直接控制最上游；越往下游，市場力量佔比越大：':
    'An interest rate is not one number, it is a whole chain. The central bank directly controls only the top of it; the further downstream you go, the more the market decides:',
  央行政策利率: 'Central bank policy rate',
  '台灣重貼現率／美國聯邦基金利率': "Taiwan's discount rate / the US federal funds rate",
  銀行間拆款利率: 'Interbank lending rate',
  銀行存放款利率: 'Bank deposit and lending rates',
  '你的定存、房貸': 'Your time deposit, your mortgage',
  公債殖利率: 'Government bond yields',
  '市場定價的「無風險利率」': 'The "risk-free rate", as priced by the market',
  '公司債利率 ＝ 公債 ＋ 信用利差':
    'Corporate bond rate = government bond + credit spread',
  股票折現率: 'Equity discount rate',
  '＝ 無風險利率 ＋ 股權風險溢酬': '= risk-free rate + equity risk premium',
  '所以「央行升息一碼（0.25%），房貸利率大概跟著走，但十年期公債殖利率不一定」——長端利率反映的是市場對':
    'So "when the CBC raises rates by a quarter point (0.25%), mortgage rates roughly follow, but the ten-year government bond yield may not" — long-end rates reflect what the market expects inflation and growth to be ',
  未來多年: 'many years from now',
  '通膨與成長的預期，不是央行的當下動作。': ', not what the central bank did today.',

  '2. 利率跟債券為什麼反向：折現數學的必然':
    '2. Why rates and bond prices move opposite ways: the discounting math leaves no choice',
  '債券＝未來現金流的固定合約。': 'A bond is a fixed contract on future cash flows. ',
  '用第 1 週的折現公式就能算出價格': "You can price it with Week 1's discounting formula",
  '。以 2 年期、面額 100 萬、年票息 3%（每年付 3 萬）為例：':
    '. Take a 2-year bond, face value NT$1 million, 3% annual coupon (NT$30,000 a year):',
  '3萬': 'NT$30k',
  '103萬': 'NT$1.03M',
  市場利率: 'Market rate',
  '＝ 3% 時算出 100 萬（平價）；升到 4% 時，新債都給 4% 了，你這張 3% 的舊債要打折才有人買 → 98.11 萬。':
    '= 3% gives you NT$1 million, exactly par. Push it to 4% and new bonds all pay 4%, so nobody buys your old 3% bond unless it comes at a discount → NT$981,100. ',
  '利率上升 → 債券價格下跌，不是規定，是數學。':
    'Rates up, bond prices down. That is not a rule someone wrote, it is arithmetic.',

  /* ── 債券蹺蹺板計算機 ── */
  債券蹺蹺板: 'The bond seesaw',
  '三張票息都 3% 的債券（面額 100 萬），只差到期年限。拉動市場利率，看它們的價格怎麼反向移動——':
    'Three bonds, all with a 3% coupon and NT$1 million face value, differing only in maturity. Drag the market rate and watch their prices move the other way — ',
  '年期越長、蹺得越兇': 'the longer the maturity, the wilder the seesaw',
  '，這就是「存續期間（duration）」。': '. That is what "duration" means.',
  '市場利率（折現率）': 'Market rate (discount rate)',
  '2 年債': '2-year bond',
  '5 年債': '5-year bond',
  '10 年債': '10-year bond',
  '虛線 = 面額 100 萬（平價）': 'Dashed line = par, 100 (NT$10k)',
  三種年期債券價格對市場利率的敏感度曲線:
    'Sensitivity curves: prices of three bond maturities against the market rate',
  /* 卡片與 SVG 的單位後綴：值留數字，單位在上面的圖例（見檔頭） */
  '100.0 萬': '100.0',
  '萬</text>': '</text>',
  '年</text>': 'y</text>',
  萬: '',

  /* ── 存續期間 ── */
  '3. 存續期間：2022 年的慘案': '3. Duration: the 2022 wreckage',
  '同樣升息 1%，10 年債的跌幅是 2 年債的四倍多。':
    'For the same 1% rise, the 10-year falls more than four times as far as the 2-year. ',
  '現金流離現在越遠，被折現率的指數效果放大越多。':
    'The further out a cash flow sits, the more the exponent in the discount rate magnifies it.',
  '這個敏感度的正式度量叫存續期間（duration），粗略記法：「利率變 1%，價格反向變幾 %」。':
    ' The formal measure of that sensitivity is duration; the rough version is "if rates move 1%, how many percent does the price move the other way?"',
  '這解釋了 2022 年的慘案：美國暴力升息，「安全」的長天期公債基金跌了兩成——':
    'That explains the wreckage of 2022: the US hiked violently and "safe" long-dated government bond funds fell twenty percent — ',
  '「安全」指的是違約風險低，不是價格不會跌':
    '"safe" means the default risk is low, not that the price cannot fall',

  /* ── 殖利率曲線 ── */
  '4. 殖利率曲線：市場寫給你的預期報告':
    '4. The yield curve: the market writing out its own forecast for you',
  '把不同年期的公債殖利率連成線，形狀會說話。點按鈕切換三種型態：':
    'Join up government bond yields across maturities and the shape talks. Tap the buttons to switch between the three forms:',
  殖利率曲線型態: 'Yield curve shapes',
  殖利率曲線型態示意圖: 'Diagram of the yield curve shapes',
  '正常（右上斜）': 'Normal (upward sloping)',
  平坦: 'Flat',
  '倒掛（右下斜）': 'Inverted (downward sloping)',
  '<b>正常（右上斜）</b>：長天期殖利率 &gt; 短天期。鎖住錢越久要求的補償越多，反映經濟預期正常——這是多數時候的樣子。':
    '<b>Normal (upward sloping)</b>: long yields &gt; short yields. The longer you lock your money away, the more compensation you want. It reflects an ordinary outlook — and it is what the curve looks like most of the time.',
  '<b>平坦</b>：長短期利率差不多。市場預期未來央行會降息（成長趨緩），是正常與倒掛之間的過渡狀態。':
    '<b>Flat</b>: long and short rates are about the same. The market expects the central bank to cut later (growth slowing); it is the transition between normal and inverted.',
  '<b>倒掛（右下斜）</b>：短期 &gt; 長期。市場強烈預期衰退將至、央行將被迫降息——歷史上多次領先衰退 12–18 個月，但時點不精確。':
    '<b>Inverted (downward sloping)</b>: short &gt; long. The market strongly expects a recession and forced rate cuts — historically it has led recessions by 12–18 months, though the timing is imprecise.',
  '看曲線最快的地方：FRED 代碼': 'The fastest place to look: the FRED series ',
  '（10 年減 2 年利差，一條線就看得到倒掛與否）。':
    ' (the 10-year minus 2-year spread — one line shows you whether it is inverted). ',
  '歷史上美國 10 年期減 2 年期利差倒掛，多次領先衰退 12–18 個月':
    'a US 10-year-minus-2-year inversion has led recessions by 12–18 months on several occasions in history',
  '——是有效的領先指標，但時點不精確，也曾拉長延遲。':
    ' — a useful leading indicator, but the timing is imprecise and the lag has sometimes stretched out.',

  /* ── 利率與股票 ── */
  '5. 利率與股票：地心引力的三條路': '5. Rates and stocks: three paths for gravity',
  折現率: 'Discount rate',
  '：無風險利率上升 → 未來獲利折現值下降 → 估值（P/E）承壓，':
    ': the risk-free rate rises → the discounted value of future profits falls → valuations (P/E) come under pressure, and ',
  成長股受傷更重: 'growth stocks get hurt worse',
  '（現金流集中在遙遠未來，duration 長——跟長天期債券同一個道理）':
    ' (their cash flows sit far out in the future, so duration is long — the same logic as a long-dated bond)',
  相對吸引力: 'Relative appeal',
  '：定存 5% 時，誰要冒險賺股息 3%？資金從股市回流':
    ': when a time deposit pays 5%, who takes the risk for a 3% dividend? Money flows back out of stocks',
  企業成本: 'Corporate costs',
  '：借款利息變貴 → 獲利被吃掉一塊':
    ': borrowing gets more expensive → a slice of profit disappears',
  '算例 ／ 利率的日常版：房貸': 'Worked example / rates in everyday life: the mortgage',
  '1,000 萬、30 年本息均攤，升息兩碼（0.5%）：':
    'NT$10 million over 30 years on equal principal-and-interest payments, with rates up two notches (0.5%):',
  房貸利率: 'Mortgage rate',
  /* 表格：儲存格是裸數字（單位後綴已剝掉），單位必須在表頭 */
  月付金: 'Monthly payment (NT$)',
  '30 年總利息': 'Total interest over 30 yrs (NT$10k)',
  '36,962 元': '36,962',
  '331 萬': '331',
  '39,512 元': '39,512',
  '422 萬': '422',
  '升息兩碼，總利息多付': 'Two notches of hikes, and the extra interest comes to ',
  '91 萬': 'NT$910,000',
  '（一台車）——利率對一般家庭不是抽象名詞。':
    ' (a car) — for an ordinary household, interest rates are not an abstraction.',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「升息＝股市一定跌」': '"A rate hike always means stocks fall"',
  市場反映的是: 'What the market prices is the ',
  預期差: 'gap against expectations',
  '：升息若早被預期且幅度低於擔憂，股市反而常上漲。交易的是「比預期鷹或鴿」，不是動作本身。':
    ': if the hike was already expected and comes in smaller than feared, stocks often rise instead. What gets traded is "more hawkish or more dovish than expected", not the move itself.',
  '「倒掛了，趕快全部賣掉」': '"It inverted — sell everything, quickly"',
  '倒掛到衰退的延遲可達一年以上，期間股市可能續漲；它是「調整心態與體質」的信號，不是擇時開關。':
    'The lag from inversion to recession can run over a year, and stocks may keep climbing the whole time. It is a signal to adjust your mindset and your finances, not a market-timing switch.',
  '「央行降息是好事」': '"A rate cut is good news"',
  '要看理由：預防性降息（保成長）通常利多；衰退式降息（救火）常伴隨股市大跌。同一個動作，兩種劇本。':
    'It depends why. A precautionary cut to protect growth is usually bullish; a recessionary cut to put out a fire usually comes with a big drop in stocks. Same move, two completely different scripts.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '15 分': '15 min',
  '專欄 #3《利率》重讀 ↗': 'Column #3, "Interest rates" — reread ↗',
  '銜接：專欄講傳導的故事，本週補債券數學與曲線判讀。':
    'How it connects: the column tells the transmission story; this week adds the bond math and how to read the curve.',
  '45 分': '45 min',
  'FRED：10Y−2Y 利差（T10Y2Y）↗': 'FRED: the 10Y−2Y spread (T10Y2Y) ↗',
  '看 40 年圖：找出每次跌破 0（倒掛）之後，灰色衰退帶出現的時間差。親眼驗證「倒掛領先衰退」，同時看到延遲有多不規則。':
    'Look at the 40-year chart: each time it drops below 0 (inversion), find the gap before the grey recession band shows up. See for yourself that inversion leads recession — and how irregular the lag is.',
  '20 分': '20 min',
  '三型態的標準定義。': 'The standard definitions of the three shapes.',
  選讀: 'Optional',
  '中央銀行全球資訊網 ↗': 'Central Bank of the Republic of China (Taiwan) ↗',
  '從「新聞發布」找最近一次': 'Under "Press Releases", find the most recent ',
  理監事會後記者會參考資料:
    'reference materials from the press conference after the Board Meeting',
  '，讀一次央行自己怎麼解釋利率決策（抓「對通膨與成長的判斷」兩段就好）。':
    ', and read how the CBC itself explains the rate decision (the two passages on its read of inflation and growth are enough).',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  三個任務: 'Three tasks',
  '任務 A｜FRED 三線疊圖（35 分鐘）': 'Task A | Overlay three lines on FRED (35 minutes)',
  '進 FRED，搜': 'Go to FRED and search ',
  '（聯邦基金利率）開圖': ' (the federal funds rate) to open the chart',
  '「Edit Graph」→「Add Line」加入': '"Edit Graph" → "Add Line", then add ',
  '（10 年期公債殖利率）': ' (the 10-year government bond yield)',
  再加: 'Then add ',
  '（S&amp;P 500，右軸）': ' (S&amp;P 500, right axis)',
  '時間拉到近 10–20 年，觀察三時期：2015–18 緩升息、2020 急降息、2022 暴力升息':
    'Set the window to the last 10–20 years and look at three periods: the slow hikes of 2015–18, the emergency cuts of 2020, and the violent hikes of 2022',
  '寫 200 字觀察：政策利率動的時候，長率跟了嗎？股市怎麼反應？有沒有「升息但股市漲」的段落？':
    'Write 200 words: when the policy rate moved, did long rates follow? How did stocks react? Are there stretches where rates rose and stocks rose too?',
  '任務 B｜手算債券（15 分鐘）': 'Task B | Price a bond by hand (15 minutes)',
  '3 年期債券、面額 100 萬、票息 2%（年付 2 萬），市場利率 3%，價格是多少？（用第 1 週的折現公式，三筆現金流各自折現相加。）':
    'A 3-year bond, face value NT$1 million, 2% coupon (NT$20,000 a year), market rate 3% — what is it worth? (Use Week 1\'s discounting formula: discount each of the three cash flows and add them up.)',
  '驗證點：': 'Check: ',
  手算結果應約: 'your answer should come to about',
  '97.17 萬': 'NT$971,700',
  '（票息 2% &lt; 市場 3%，折價交易，低於面額——合理性檢查通過）。':
    ' (coupon 2% &lt; market 3%, so it trades at a discount, below par — the sanity check passes).',
  自我檢核: 'Check yourself',
  '疊圖做出來且 200 字觀察有具體時間段':
    'The overlay chart is built and the 200-word note names specific periods',
  '手算債券與解答誤差 &lt; 1,000 元':
    'Your hand-calculated bond price is within NT$1,000 of the answer',
  '快問快答全對（見下）': 'You got all three quick questions right (below)',
  '任務 C｜快問快答三題（先答，再展開對答案）':
    'Task C | Three quick questions (answer first, then expand to check)',
  '為什麼長天期債券對利率更敏感？': 'Why are longer-dated bonds more sensitive to rates?',
  '→ 現金流離現在越遠，折現的指數效果放大越多（':
    '→ The further out the cash flow, the more the discounting magnifies it (in ',
  的: 'the exponent',
  '大）。': 'is large).',
  '殖利率曲線倒掛，市場在說什麼？': 'The yield curve inverts — what is the market saying?',
  '→ 市場預期經濟將轉弱、央行未來會降息，所以願意鎖住長天期的較低利率。':
    '→ The market expects the economy to weaken and the central bank to cut later, so it is happy to lock in a lower rate for longer.',
  '升息環境下，高成長科技股為什麼常比金融股慘？':
    'In a hiking cycle, why do high-growth tech stocks usually fare worse than financials?',
  '→ 成長股的獲利集中在遙遠未來（duration 長），折現率上升時現值縮水最多；金融股的放款利差反而可能受惠。':
    "→ A growth company's profits sit far out in the future (long duration), so a rising discount rate shrinks their present value the most; a bank's lending spread may actually benefit.",

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  用房貸切入: 'Start with the mortgage',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（用房貸切入）': 'Opening (start with the mortgage)',
  '「如果我們家房貸 1,000 萬，銀行利率從 2% 升到 2.5%，你猜 30 年總共多付多少利息？」':
    '"If our mortgage is NT$10 million and the bank rate goes from 2% to 2.5%, guess how much extra interest we pay over 30 years."',
  '揭曉：91 萬——一台車。對方立刻理解「升息」不是新聞名詞。':
    'The reveal: NT$910,000 — a car. They get straight away that "rate hike" is not just a word on the news.',
  '核心比喻：地心引力': 'The core metaphor: gravity',
  '「利率是所有資產的': '"Interest rates are ',
  地心引力: 'gravity',
  '。利率低，什麼都飛得起來（股票、房價）；利率一升，重力變強，':
    ' for every asset. When rates are low everything can fly — stocks, house prices. When rates rise the pull gets stronger, and ',
  飛得越高的東西掉得越重: 'the higher something flew, the harder it drops',
  蹺蹺板道具: 'The seesaw prop',
  '「債券和利率坐蹺蹺板的兩端——利率上去，舊債券價格就下來。為什麼？你手上這張舊的每年付 3 萬，現在新的都付 4 萬，你那張要賣只能降價。」（可以打開上面的「債券蹺蹺板」拉給對方看。）':
    '"Bonds and interest rates sit at opposite ends of a seesaw — rates go up, the price of old bonds comes down. Why? The old one in your hand pays NT$30,000 a year and the new ones pay NT$40,000, so the only way to sell yours is to cut the price." (Open the bond seesaw above and let them drag it.)',
  互動: 'Interaction',
  '「所以聽到『央行升息』，我們家該想到哪三件事？」——引導：房貸變貴／定存變甜／股票短期會晃，但不用恐慌性賣出。':
    '"So when we hear \'the central bank is raising rates\', what three things should we think about?" Steer them to: the mortgage gets pricier, time deposits get sweeter, stocks wobble in the short run — but no panic selling.',
  預期反應與應對: 'What they will say, and what to answer',
  '「那利率高就把股票全賣掉買定存？」':
    '"So if rates are high, should we sell all the stocks and buy time deposits?"',
  '定存 5% 聽起來甜，但通常出現在通膨 6–8% 的時候（連回上週：看實質報酬）。':
    'A 5% deposit sounds sweet, but it usually shows up when inflation is running 6–8% (back to last week: look at the real return).',
  '「新聞說倒掛要衰退了，怕」':
    '"The news says the inversion means a recession is coming. That scares me."',
  '「這是氣象台說『今年颱風可能比較多』，該做的是檢查門窗（配置與預備金），不是把房子賣了。」':
    '"That is the weather bureau saying \'we may get more typhoons this year\'. What you do is check the doors and windows — your allocation and your emergency fund — not sell the house."',
  本腳本可搭配專欄: 'Pair this script with column',
  '#3《利率》': '#3, "Interest rates"',
  '一起給對方讀。': ' and read them together.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  本週完成的定義: 'What counts as done this week',
  '能畫出利率傳導鏈（央行→市場→股債）':
    'You can draw the transmission chain (central bank → market → stocks and bonds)',
  '能徒手算 2–3 期債券價格，並解釋反向關係':
    'You can price a 2–3 period bond by hand and explain the inverse relationship',
  'FRED 疊圖與觀察短文完成': 'The FRED overlay and the short write-up are done',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 3 週完成——下週見：借貸法則與應計制（開一家飲料店）。':
    '🎓 Week 3 done — next up: debits, credits and accrual accounting (you open a drinks shop).',
  '下週預告 · Week 04：借貸法則與應計制':
    'Next week · Week 04: debits, credits and accrual accounting',
  '——從「錢的時間價值」轉向「公司怎麼記帳」。你會開一家虛擬飲料店，用真實的分錄理解借貸法則——這條故事線會一路貫穿到財報三表。':
    ' — we move from "what money is worth over time" to "how a company keeps its books". You will open an imaginary drinks shop and learn debits and credits through real journal entries — a storyline that runs all the way to the three financial statements.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：通膨與實質報酬': 'Previous week: inflation and real returns',
  專欄文章: 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
