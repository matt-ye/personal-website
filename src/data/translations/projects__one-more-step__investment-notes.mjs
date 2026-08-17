/*
 * investment-notes（台股 × 美股投資知識庫）的英文對照表。
 *
 * 翻譯基準是 #249 之後的修訂版（35 條事實修正＋38 張卡來源註記都已進來源頁）。
 *
 * 兩層結構，對應頁面的兩種字串：
 *   MAP        小字串——卡片標題、摘要、tag、UI、provenance 說明框
 *   MODALS_EN  71 個 modal 的整段英文 HTML，按 modal key（m1…uk8）對照。
 *              模板幾百字，當 MAP 的 key 不可讀也難 diff；而且遷移時
 *              .en.json 注入機制吃的正是「key → 英文 HTML」這個形狀。
 *
 * 命名對齊站上既有英文：
 *   投資專欄     → Investing column（writing 頁 series 對照表用 'Investing'）
 *   給家人的投資課 → Family Investing Course（52 週課程頁尚無英文版，
 *                   這是本檔先定的描述性譯名；課程頁翻譯時應沿用或回來改這裡）
 *
 * 台股術語的取向：籌碼 → "chips"（首次出現處在 modal 內文有 gloss）、
 * 融資 → margin buying、處置股 → disposition stocks（TWSE 官方英文用
 * disposition measures）、現增 → cash capital increase。
 */

/* 英文值裡允許保留的中文：查不到官方英文名的品牌，依誠實條款不自創譯名 */
export const KEEP = [
  '大戶投', // 永豐金證券的 App 品牌名，官方英文名未確認
  '口袋證券', // 官方英文名未確認
];

export const ADDED = [];

/* modal 模板還沒翻完前保持 true */
export const INCOMPLETE = true;

export const MAP = {
  /* ── header 與分類篩選 ─────────────────────────────── */
  '📈 台股 × 美股投資知識庫': '📈 Taiwan × US Stock Investing Knowledge Base',
  '台股筆記 + 美股估值 · 財報 · 指標全攻略':
    'Taiwan market notes, plus a full guide to US valuation, financial statements, and metrics',
  全部: 'All',
  '📚 基本概念': '📚 Fundamentals',
  '🏦 法人與市場': '🏦 Institutions & the Market',
  '📊 高低點指標': '📊 Top & Bottom Indicators',
  '🔄 可轉債': '🔄 Convertible Bonds',
  '🔴 處置股': '🔴 Disposition Stocks',
  '📋 掛單解讀': '📋 Order-Book Reading',
  '💹 金融商品': '💹 Financial Products',
  '📦 量與籌碼': '📦 Volume & Chips',
  '📱 券商App查詢': '📱 Broker App Guides',
  '🇺🇸 美股市場': '🇺🇸 US Market',
  '💰 公司估值': '💰 Valuation',
  '📋 財報分析': '📋 Financial Statements',
  '📈 績效指標': '📈 Performance Metrics',

  /* ── 內容來源說明框（provenance）──────────────────────
     三段是同一句被 <strong> 切開的碎片，英文要能原順序接回去 */
  '內容來源說明：': 'About the sources: ',
  '本頁論點彙整自 2026 年 6 月的網路資料與市場常見觀點，並於 2026 年 8 月逐條查證修訂——可查證的事實已附官方出處；各種數值門檻多為':
    'The arguments on this page were compiled in June 2026 from online sources and common market views, then fact-checked and revised item by item in August 2026 — verifiable facts now cite official sources, while most numeric thresholds are ',
  '業界慣例或常見說法，非實證結論': 'industry conventions or common heuristics, not empirical findings',
  '，且會隨市場環境變動；查無可靠出處的敘述在各卡片中另有標註。本頁為學習筆記，非投資建議。':
    ', and they shift with market conditions. Statements with no reliable source found are flagged on their cards. This page is a study note, not investment advice.',

  /* ── 台股：基本概念 ─────────────────────────────────── */
  '期望值思維：做什麼都可以賺，但能複製嗎？':
    'Expected-value thinking: anything can make money once — but can you repeat it?',
  基本概念: 'Fundamentals',
  '投資不只看單次報酬，要看能否長久複製、能否在同等報酬下降低風險。':
    'Investing is not about one-off returns — it is about whether a result can be repeated over time, and whether the same return can be earned at lower risk.',
  '點擊展開 →': 'Click to expand →',
  '新手地雷：台指、選擇權、期貨的真實難度':
    'Beginner traps: the real difficulty of index futures and options',
  '衍生性商品本質是避險工具，被當成投機使用難度極高，新手應避免。':
    'Derivatives are hedging tools by design; using them to speculate is extremely hard, and beginners should stay away.',
  '短線 vs 中長線的市場胃納量差異': 'Short-term vs. mid/long-term: very different market capacity',
  '短線近似牌桌零和遊戲，少數贏家通吃；中長線結合產業研究，標的更多元。':
    'Short-term trading resembles a zero-sum card table where a few winners take all; mid/long-term investing pairs with industry research and offers far more candidates.',
  '價值陷阱：不要亂撿便宜與右下角股票':
    'Value traps: do not blindly bargain-hunt stocks charting toward the lower right',
  '沒有深度研究不要輕易抄底，市場價格機制往往走在消息前面。':
    'Never buy the dip without deep research — market prices usually move ahead of the news.',
  '市場效率：有時有效，有時沒效': 'Market efficiency: sometimes it works, sometimes it does not',
  '成交量低、無法人報告的冷門股，消息釋出才動，是市場無效率的具體案例。':
    'Thinly traded stocks with no analyst coverage only move after news breaks — a concrete case of market inefficiency.',
  '族群性：觀察整個產業鏈的同步異動': 'Sector moves: watch the whole supply chain move in sync',
  '龍頭帶動族群上漲，透過產業鏈連動可猜測大資金正在佈局的方向。':
    'Leaders pull the whole group up; supply-chain linkages hint at where big money is positioning.',
  '農曆春節前的融資降倉行為': 'Margin deleveraging before Lunar New Year',
  '過節前融資戶常降槓桿避免休市風險——但學術檢定顯示年前報酬顯著為正，機制與大盤方向要分開看。':
    'Margin traders often cut leverage before the holiday break to avoid closure risk — but academic tests find significantly positive pre-holiday returns, so keep the mechanism separate from market direction.',

  /* ── 台股：法人與市場 ───────────────────────────────── */
  '投信買盤：不等於真正看多的法人訊號':
    'Investment-trust buying: not necessarily a truly bullish institutional signal',
  法人: 'Institutions',
  '投信持續買超可能是 ETF 被動配置，不代表自營或 buy side 真的看好。':
    'Sustained net buying by investment trusts may just be passive ETF allocation — it does not mean prop desks or the buy side are actually bullish.',
  '外資角色變化：內資崛起，台牛車式緩行':
    "Foreign capital's changing role: domestic money rises, the market grinds on ox-cart slow",
  '外資稍微回買不代表翻多，可能只是短暫休息，台股已逐漸由內資主導。':
    "A modest round of foreign buying does not mean they have turned bullish — it may be a pause; Taiwan's market is increasingly driven by domestic capital.",
  '小台多空：程式交易盤，已非純散戶指標':
    'Mini-TAIEX positioning: an algo-driven market, no longer a pure retail gauge',
  期貨: 'Futures',
  '小台期貨藏有大量量化程式單，外國銀行量化組也在其中，解讀需更謹慎。':
    "Mini-TAIEX futures carry heavy quant program flow — foreign banks' quant desks included — so read the numbers with care.",

  /* ── 台股：高低點指標 ───────────────────────────────── */
  '融資水位：絕對金額門檻會過期，要看相對水位':
    'Margin balance: absolute thresholds go stale — watch relative levels',
  指標: 'Indicators',
  '融資餘額是觀察市場槓桿和散戶情緒的重要指標，但近年大戶也用融資，需綜合判斷。':
    'Margin balance is a key gauge of market leverage and retail sentiment, but big players now use margin too, so judge it in context.',
  '融資維持率：150–160% 以下是籌碼乾淨訊號':
    'Margin maintenance ratio: below 150–160% signals a cleaned-up float',
  '維持率低代表斷頭潮或恐慌出清，籌碼清洗完反而是相對低點買進機會。':
    'A low maintenance ratio means forced liquidations or panic selling; once weak hands are flushed out, it often marks a relative buying low.',
  '外資空單：比外資回買更可信的方向指標':
    'Foreign short positions: a more credible directional signal than foreign buying',
  '外資期貨空單部位可參考，但單次小量轉多勿追；空單才是更明確的態度。':
    'Foreign futures shorts are worth tracking, but do not chase a single small flip to long; the short book is the clearer statement of intent.',

  /* ── 台股：可轉債與現增 ─────────────────────────────── */
  '可轉債（CB）基礎：債券 + 換股權利的二合一商品':
    'Convertible bonds (CB) 101: a bond and a conversion right in one',
  可轉債: 'Convertibles',
  '股價漲可換股享收益，股價跌保有債券本息。公司以此快速募資，不等同銀行借款。':
    "If the stock rises you convert and capture the upside; if it falls you keep the bond's principal and interest. Companies use CBs to raise cash fast — not the same as a bank loan.",
  '高檔現增的警訊：短期大漲後突然現增要小心':
    'Red flag: a cash capital increase right after a sharp rally',
  現增: 'Capital raise',
  '短期急拉後現金增資，高機率是「印股票換錢」割韭菜；若用於投資廠房則中長線可能利多。':
    'A cash raise right after a spike is very often "printing shares for cash" at retail\'s expense; if the proceeds fund plants and equipment, it can be a mid/long-term positive.',
  '可轉債行情三階段：宣布 → 定價前壓盤 → 第二波':
    'The three phases of a CB play: announcement → pre-pricing suppression → second leg',
  '宣布時有人搶先上車，定價前壓低才能讓轉換價訂得漂亮，定價後再拉第二波。':
    'Some jump in at the announcement; the stock gets pressed before pricing so the conversion price is set low, then a second leg follows after pricing.',
  'CBAS：可轉債拆成固定收益 + 選擇權分開賣':
    'CBAS: splitting a convertible into fixed income plus an option, sold separately',
  '券商持有CB後拆解，債券端給穩定收益投資人，選擇權端讓想用槓桿的人以較少資金押注股價。':
    'The broker holds the CB and splits it: the bond leg goes to income investors, the option leg lets leverage-seekers bet on the stock with less capital.',

  /* ── 台股：處置股 ───────────────────────────────────── */
  '處置股制度：6日漲幅超25%就可能中標':
    'The disposition system: up 25% in six sessions can trigger it',
  處置股: 'Disposition',
  '處置股是交易所的降溫警示，非壞事本身；對飆股持有者來說有時反而是確認強勢的「認證」。':
    'Disposition status is the exchange\'s cooling-off warning, not inherently bad news; for holders of a runaway stock it can even read as a "certificate" of strength.',
  '處置期間的流動性陷阱與獵人策略':
    'Liquidity traps during disposition — and the hunters who exploit them',
  '撮合間隔拉長，流動性被抽乾，有人專門利用上下緣區間來操作價差。':
    'Matching intervals stretch out and liquidity drains away; some traders specialize in working the band between the upper and lower edges.',

  /* ── 台股：掛單解讀 ─────────────────────────────────── */
  '五檔賣牆 + 左側補買：吃貨敲破的典型結構':
    'Ask-wall plus left-side accumulation: the classic absorb-then-break structure',
  盤口: 'Order book',
  '整數位置掛厚厚賣牆，同時在左側（低檔）持續小量買進，是主力吃貨再敲破牆的手法。':
    'A thick sell wall at a round number while quietly accumulating below is a classic operator move: absorb shares, then smash through the wall.',
  '鎖漲停後的隔日買一牆：假接真撤的誘騙術':
    'The next-day bid wall after a limit-up lock: fake support that vanishes',
  '鎖漲停隔天在買三四設牆，看似要撐盤，實則摜破買一買二時牆會撤，製造假買盤假象。':
    'The day after a limit-up lock, walls at bid 3–4 look like support, but they get pulled once bids 1–2 break — manufactured buying pressure.',
  '判斷程式單：直接丟單觀察反應':
    'Detecting algo orders: probe with a live order and watch the reaction',
  程式交易: 'Algo trading',
  '直接下買單觀察是否有單瞬間追價往上吃，或對手把貨拋給你，藉此判斷程式單走向。':
    'Place a buy order and watch: does something instantly chase and lift the offer, or does the other side dump into you? That tells you which way the algos lean.',

  /* ── 金融商品圖鑑 ───────────────────────────────────── */
  '💹 金融商品圖鑑': '💹 A Field Guide to Financial Products',
  '現股（普通股）：投資的基本單位': 'Common stock: the basic unit of investing',
  現股: 'Stocks',
  '直接買賣公司股份，享有股息、股東權利，不需保證金，風險有限（最多賠光本金）。':
    'Buy and sell company shares directly, with dividends and shareholder rights and no margin required; risk is capped at losing your principal.',
  'ETF：一籃子股票的打包交易': 'ETFs: a basket of stocks traded as one',
  '追蹤指數、產業或主題的基金，在證交所像股票一樣買賣，分原型、槓桿型、反向型。':
    'Funds tracking an index, sector, or theme, traded on the exchange like stocks — plain, leveraged, or inverse.',
  '期貨：約定未來價格的合約，高槓桿高風險':
    'Futures: contracts on a future price — high leverage, high risk',
  '買賣未來特定時間的商品或指數價格，每日結算，需繳保證金，槓桿高、成本低。':
    'Trade the future price of a commodity or index, with daily settlement and margin requirements — high leverage, low cost.',
  '選擇權：用小錢買「權利」的非線性商品':
    'Options: paying a little for a "right" — a nonlinear product',
  選擇權: 'Options',
  '買方付權利金取得買/賣的權利，賣方收權利金但有無限風險，買方最多賠光權利金。':
    'Buyers pay a premium for the right to buy or sell; sellers collect the premium but face unlimited risk. A buyer can lose at most the premium.',
  '權證：券商發行的股票選擇權替代品': 'Warrants: a broker-issued substitute for stock options',
  權證: 'Warrants',
  '只能當買方，用少量權利金押注標的股漲跌，槓桿 3~6 倍，時間越近價值遞減越快。':
    "Buy-side only: a small premium bets on the underlying's move at 3–6x leverage — and time decay accelerates toward expiry.",
  '融資融券（信用交易）：借錢買股、借股放空':
    'Margin trading: borrow cash to buy, borrow shares to short',
  信用交易: 'Margin',
  '融資是向券商借錢買股（槓桿約 1.6~2.5 倍），融券是借股賣出，到期要還。':
    'Margin buying borrows cash from the broker (about 1.6–2.5x leverage); short selling borrows shares to sell — both must be repaid by the deadline.',
  '債券：固定收益的借貸憑證': 'Bonds: fixed-income IOUs',
  債券: 'Bonds',
  '政府或企業向投資人借錢並定期付息，到期還本。風險比股票低，報酬也相對固定。':
    'Governments and companies borrow from investors, pay periodic interest, and repay principal at maturity — lower risk than stocks, with correspondingly fixed returns.',
  五大商品風險報酬比較表: 'Five products compared: risk and reward at a glance',
  比較: 'Comparison',
  '現股、ETF、期貨、選擇權、權證——一張表看懂槓桿、風險上限、適合族群的差異。':
    'Stocks, ETFs, futures, options, warrants — one table covering leverage, maximum loss, and who each suits.',

  /* ── 量與籌碼 ───────────────────────────────────────── */
  '📦 量與籌碼定義': '📦 Volume & Chip-Data Definitions',
  '成交量 vs 成交值：張數 vs 金額的差異':
    'Volume vs. turnover value: lots traded vs. dollars traded',
  成交量: 'Volume',
  '成交量看「幾張」換手，成交值看「多少錢」在流動。各有用途，不能混用。':
    'Volume counts how many lots change hands; turnover value counts how much money flows. Each has its use — do not conflate them.',
  '換手率：相對活躍度，比成交量更客觀':
    'Turnover rate: relative activity, more objective than raw volume',
  換手率: 'Turnover',
  '換手率 = 成交量 ÷ 流通股數，排除股本差異，是判斷主力吸籌或出貨最好用的指標。':
    'Turnover rate = volume ÷ float. It strips out differences in share count, making it the most practical gauge of operator accumulation or distribution.',
  '籌碼是什麼？誰持有，誰說話算': 'What is "chip data"? Whoever holds the shares calls the shots',
  籌碼: 'Chips',
  '「籌碼」指股票持有狀況，集中在少數人手上則易漲，分散在散戶則易跌。':
    '"Chips" refers to who holds the shares: concentrated in a few hands, a stock rises easily; scattered across retail, it falls easily.',
  '三大法人：外資、投信、自營商的角色':
    'The three institutional players: foreign investors, investment trusts, dealers',
  法人籌碼: 'Institutional flows',
  '三大法人資金佔台股約四成，每日盤後公布買賣超，是最容易追蹤的公開籌碼。':
    "The three institutional groups account for roughly 40% of Taiwan's market; their daily net buy/sell figures are the easiest public ownership data to track.",
  '主力與大戶：千張以上持有者的影響力':
    'Operators and big holders: the influence of 1,000-lot-plus positions',
  大戶籌碼: 'Big holders',
  '大戶指持股超過 1,000 張者，資金雄厚且研究深，其持股變化與股價走勢高度相關。':
    'Big holders own more than 1,000 lots; deep-pocketed and well-researched, their position changes correlate strongly with price trends.',
  '量價關係四種情境：放量漲、縮量漲、放量跌、縮量跌':
    'Four volume-price scenarios: rising or falling, on expanding or shrinking volume',
  量價: 'Volume-price',
  '量是股價的先行指標，四種量價組合各有不同意涵，是判斷行情是否延續的關鍵。':
    'Volume leads price. Each of the four volume-price combinations means something different, and together they are key to judging whether a move will continue.',

  /* ── 券商 App ───────────────────────────────────────── */
  '📱 券商 App 查詢指南': '📱 Broker App Lookup Guide',
  '永豐大戶投 App：籌碼 + 大戶買賣力':
    'SinoPac 大戶投 app: chip data plus big-holder buy/sell pressure',
  永豐: 'SinoPac',
  '大戶投以籌碼分析見長，內建分價量表、大戶/散戶買賣力、資金分布四大工具。':
    '大戶投 excels at chip analysis, with built-in tools for price-volume distribution, big-holder vs. retail buy/sell pressure, and capital distribution.',
  '免費公開資料查詢：TWSE / TPEX / 證交所':
    'Free public data: the TWSE and TPEX exchange sites',
  '免費公開資料查詢：TWSE / TPEX / 期交所': 'Free public data: TWSE / TPEX / TAIFEX',
  免費工具: 'Free tools',
  '不用開戶也能查：台灣證交所、櫃買中心的三大法人、融資、處置股資料全部免費。':
    'No brokerage account needed: the TWSE and TPEX publish institutional flows, margin balances, and disposition-stock data for free.',
  '進階分析平台：XQ、MacroMicro、Fincake': 'Advanced platforms: XQ, MacroMicro, Fincake',
  第三方工具: 'Third-party tools',
  '超越券商 App 的進階選擇，提供回測、籌碼視覺化、總經指標等功能。':
    'Options beyond broker apps: backtesting, chip-data visualization, macro indicators, and more.',
  '各大券商 App 功能速覽比較': 'Major broker apps: a quick feature comparison',
  '元大、富邦、國泰、口袋證券、Fugle——介面風格、籌碼功能、當沖支援的快速對照。':
    'Yuanta, Fubon, Cathay, 口袋證券, Fugle — a quick side-by-side on interface style, chip-data features, and day-trading support.',

  /* ── 美股市場基礎 ───────────────────────────────────── */
  '🇺🇸 美股市場基礎': '🇺🇸 US Market Basics',
  '三大指數：道瓊、S&amp;P500、NASDAQ 的差異':
    'The three major indexes: Dow, S&amp;P 500, Nasdaq',
  '三大指數：道瓊、S&P500、NASDAQ 的差異': 'The three major indexes: Dow, S&P 500, Nasdaq',
  美股基礎: 'US basics',
  'DJIA 價格加權 30 檔藍籌；S&amp;P 500 市值加權 500 大、法人首選基準；NASDAQ 科技導向，三者各有不同代表性。':
    'The DJIA is price-weighted across 30 blue chips; the S&amp;P 500 is cap-weighted across 500 large firms and the institutional benchmark of choice; the Nasdaq leans tech. Each represents something different.',
  'NYSE vs NASDAQ：兩大交易所的差異': 'NYSE vs. Nasdaq: how the two exchanges differ',
  'NYSE 歷史悠久、有實體交易大廳；NASDAQ 全電子化、科技新創聚集地。對散戶下單操作幾乎無差異。':
    'The NYSE is the storied exchange with a physical trading floor; the Nasdaq is fully electronic and home to tech and startups. For retail order entry the difference is negligible.',
  美股交易時間與台灣投資人的注意事項: 'US trading hours — notes for investors in Taiwan',
  '夏令台灣時間 21:30～04:00，冬令 22:30～05:00。盤前盤後流動性差，建議善用限價單。':
    'Taiwan time 21:30–04:00 in summer, 22:30–05:00 in winter. Pre- and post-market liquidity is thin — use limit orders.',
  '財報季 Earnings Season：每季驅動行情': 'Earnings season: the quarterly market driver',
  '一月、四月、七月、十月，公司集中公布季報。Beat/Miss 與 Guidance 往往比實際數字更影響股價。':
    'Quarterly reports cluster in January, April, July, and October. Beats, misses, and guidance often move the stock more than the numbers themselves.',
  'SEC 申報文件：10-K、10-Q、8-K 怎麼讀': 'SEC filings: how to read the 10-K, 10-Q, and 8-K',
  '10-K 年度完整財報、10-Q 季度報告、8-K 重大事件即時揭露，免費查閱於 SEC EDGAR。':
    'The 10-K is the full annual report, the 10-Q the quarterly report, and the 8-K discloses material events as they happen — all free on SEC EDGAR.',
  '聯準會（Fed）升降息對股市的影響': 'How Fed rate moves hit the stock market',
  "升息提高折現率，成長股首當其衝；降息寬鬆環境利好估值擴張。「Don't fight the Fed」是華爾街名言。":
    'Rate hikes raise the discount rate and hit growth stocks first; easing supports multiple expansion. "Don\'t fight the Fed," as Wall Street says.',
  '美股放空機制：融券、Put、反向 ETF': 'Shorting US stocks: short selling, puts, inverse ETFs',
  '融券理論損失無上限；Buy Put 損失有限但有時間成本；反向 ETF 每日重置不適合長期持有。':
    'Short selling has theoretically unlimited loss; buying puts caps the loss but pays for time; inverse ETFs reset daily and are unsuitable for long-term holding.',
  'ADR 美國存託憑證：外國股在美上市': 'ADRs: foreign stocks listed in the US',
  '台積電（TSM）1 ADR = 5 台股。存在存託費、匯率風險、股息雙重課稅，需與原股價格比較溢折價。':
    'One TSMC (TSM) ADR equals five Taiwan-listed shares. Mind depositary fees, currency risk, and double-layer dividend taxation, and compare the premium or discount to the home shares.',

  /* ── 公司估值 ───────────────────────────────────────── */
  '💰 公司估值方法': '💰 Company Valuation Methods',
  'P/E 本益比：最常見估值指標，如何判讀':
    'P/E ratio: the most common valuation metric, and how to read it',
  公司估值: 'Valuation',
  'S&amp;P 500 長期均值約 15–17 倍；科技成長股常見 30–60 倍。需同產業比較，不能跨業直接對比。':
    "The S&amp;P 500's long-run average is about 15–17x; tech growth names often trade at 30–60x. Compare within an industry — never straight across industries.",
  'Forward P/E vs Trailing P/E：前瞻與歷史本益比': 'Forward vs. trailing P/E',
  'Trailing 用過去 12 個月實際 EPS；Forward 用分析師預估未來盈餘，更具前瞻性但存在預估誤差。':
    'Trailing uses actual EPS from the past 12 months; forward uses analyst estimates — more forward-looking, but with estimation error.',
  'P/B 股價淨值比：資產密集型產業適用': 'P/B ratio: built for asset-heavy industries',
  '銀行股 P/B 低於 1 可能是資產品質問題；科技公司因無形資產不計入帳面，P/B 虛高並非代表高估。':
    "A bank below 1x book may signal asset-quality trouble; tech companies' intangibles sit off the books, so an inflated P/B does not mean overvaluation.",
  'EV/EBITDA：排除資本結構差異的估值法':
    'EV/EBITDA: valuation with capital structure stripped out',
  'EV = 市值＋淨負債；S&amp;P 500 均值約 12–15 倍。M&amp;A 併購分析首選，可排除槓桿與折舊差異。':
    'EV = market cap + net debt; the S&amp;P 500 average runs about 12–15x. The metric of choice in M&amp;A analysis, since it removes leverage and depreciation differences.',
  'P/S 股價營收比：虧損成長股怎麼估值': 'P/S ratio: valuing unprofitable growth companies',
  'P/E 無法用於虧損公司時的替代方案。高 P/S 的合理性取決於毛利率與成長率，利率升高時首當其衝。':
    'The fallback when P/E fails for loss-making firms. Whether a high P/S is justified depends on gross margin and growth — and it is first to get hit when rates rise.',
  'PEG Ratio：成長調整後的本益比': 'PEG ratio: P/E adjusted for growth',
  'PEG = P/E ÷ 盈餘成長率（%）。PEG &lt; 1 可能被低估，≈ 1 合理，&gt; 2 需確認高成長能持續。':
    'PEG = P/E ÷ earnings growth (%). PEG &lt; 1 may be undervalued, ≈ 1 fair, &gt; 2 demands proof that the growth can last.',
  'DCF 現金流折現：估值之王的原理與限制':
    'DCF: the king of valuation — how it works and where it breaks',
  '理論最嚴謹的估值法，但 WACC 差 1% 可能使估值變動 25–30%。過程中的思考框架比精確數字更有價值。':
    'The most rigorous method in theory, yet a one-point change in WACC can swing the value 25–30%. The thinking framework matters more than the precise number.',
  '市值 vs 企業價值（EV）：關鍵差異': 'Market cap vs. enterprise value (EV): the key difference',
  '市值只反映股東這方；EV = 市值＋負債－現金，代表「買下整家公司需付出的真實代價」。':
    'Market cap reflects only the equity side; EV = market cap + debt − cash — the true price of buying the whole company.',

  /* ── 財報深度解讀 ───────────────────────────────────── */
  '📋 財報深度解讀': '📋 Reading Financial Statements in Depth',
  '損益表 Income Statement：從營收到淨利的完整路徑':
    'The income statement: the full path from revenue to net income',
  財報分析: 'Financials',
  'Revenue → COGS → 毛利 → OpEx → EBIT → EBT → Net Income，每一層「漏出比例」都透露不同的商業問題。':
    'Revenue → COGS → gross profit → OpEx → EBIT → EBT → net income: the leakage at each layer reveals a different business problem.',
  '資產負債表 Balance Sheet：公司財務健康度快照':
    'The balance sheet: a snapshot of financial health',
  '資產＝負債＋股東權益。關注現金部位、商譽膨脹、應收帳款天數（DSO）與 SaaS 的遞延收入。':
    'Assets = liabilities + equity. Watch the cash position, goodwill bloat, days sales outstanding (DSO), and — for SaaS — deferred revenue.',
  '現金流量表 Cash Flow Statement：現金才是真正的王者':
    'The cash flow statement: cash is the real king',
  'OCF、ICF、FCF 三大區塊。OCF 長期低於淨利是盈利品質警訊；CapEx 強度反映行業資本密集度。':
    'Three sections: operating, investing, and financing cash flows. OCF persistently below net income is an earnings-quality warning; CapEx intensity reflects how capital-hungry the industry is.',
  'FCF 自由現金流：評估真實獲利能力的關鍵指標':
    'Free cash flow: the key gauge of true earning power',
  'FCF = OCF − CapEx。Apple、Microsoft FCF Margin 長期 25–30%，是回購股票與發股利的底氣。':
    'FCF = OCF − CapEx. Apple and Microsoft have long run 25–30% FCF margins — the muscle behind buybacks and dividends.',
  'EPS：GAAP vs Non-GAAP 的重要差異': 'EPS: GAAP vs. non-GAAP, and why the gap matters',
  'Non-GAAP 排除 SBC、重組費用、併購攤銷，通常比 GAAP 高看很多。若 Non-GAAP 高出 50%+ 需特別追問 SBC 佔比。':
    'Non-GAAP strips out SBC, restructuring, and acquisition amortization, so it usually looks much better than GAAP. If it runs 50%+ above GAAP, dig into the SBC share.',
  'Earnings Call 法說會：機構在聽什麼重點': 'Earnings calls: what institutions listen for',
  'Guidance 展望、Demand Environment、Margin Trajectory 是分析師最在意的三大主題，Q&amp;A 環節才是精華。':
    'Guidance, demand environment, and margin trajectory are the three themes analysts care most about — and the Q&amp;A is the best part.',
  '財報 Red Flags：這些數字出現要馬上警覺':
    'Financial red flags: numbers that demand immediate attention',
  'OCF 長期低於淨利、AR 成長超營收、商譽膨脹、CFO 離職、審計師更換——安隆、Wirecard 事前都有這些跡象。':
    'OCF persistently below net income, receivables growing faster than revenue, goodwill bloat, CFO departures, auditor changes — Enron and Wirecard showed these signs beforehand.',

  /* ── 績效指標 ───────────────────────────────────────── */
  '📈 績效指標 KPI': '📈 Performance Metrics (KPIs)',
  'ROE 股東權益報酬率：杜邦分析三分解': 'ROE: the three-way DuPont decomposition',
  績效指標: 'Metrics',
  'ROE = 淨利率 × 資產週轉率 × 財務槓桿。高 ROE 來源不同，靠高槓桿的比靠高利潤率的風險大很多。':
    'ROE = net margin × asset turnover × leverage. Not all high ROE is equal: leverage-driven ROE is far riskier than margin-driven ROE.',
  'ROA 與 ROIC：資產使用效率的深度比較': 'ROA and ROIC: a deeper look at asset efficiency',
  'ROIC &gt; WACC 代表公司在創造價值；ROIC &lt; WACC 代表即使有盈利，也在銷毀股東價值。':
    'ROIC &gt; WACC means the company creates value; ROIC &lt; WACC means it destroys shareholder value even while profitable.',
  '三大利潤率：毛利率、營業利潤率、淨利率': 'The three margins: gross, operating, net',
  'SaaS 毛利率 65–85%；零售業 20–40%。毛利率趨勢比絕對數字更重要，連續下滑是定價能力警訊。':
    'SaaS gross margins run 65–85%; retail 20–40%. The trend matters more than the level — consecutive declines warn of fading pricing power.',
  '負債比率：D/E、淨負債、利息覆蓋率': 'Leverage ratios: D/E, net debt, interest coverage',
  'Net Debt/EBITDA &lt; 2 穩健，&gt; 4 偏高；利息覆蓋率 &lt; 1.5 危險。升息周期中高負債公司財務壓力急劇放大。':
    'Net debt/EBITDA &lt; 2 is solid, &gt; 4 is stretched; interest coverage &lt; 1.5 is dangerous. Rate-hike cycles sharply amplify the strain on leveraged firms.',
  '流動性指標：Current Ratio 與 Quick Ratio': 'Liquidity metrics: current ratio and quick ratio',
  'Current Ratio &gt; 1.5 通常安全；Quick Ratio 排除存貨更保守。亞馬遜等平台因 CCC 為負，比率低卻代表商業模式優勢。':
    'A current ratio &gt; 1.5 is usually safe; the quick ratio excludes inventory and is stricter. Platforms like Amazon run low ratios because their cash conversion cycle is negative — a business-model advantage, not a weakness.',
  'SaaS/科技股特有指標：ARR、NRR、CAC、LTV': 'SaaS and tech metrics: ARR, NRR, CAC, LTV',
  'NRR &gt; 120% 是極佳信號；LTV/CAC &gt; 3 代表健康單位經濟。這些指標是評估訂閱制公司最重要的工具。':
    'NRR &gt; 120% is an excellent signal; LTV/CAC &gt; 3 marks healthy unit economics. These are the most important tools for evaluating subscription businesses.',
  'Rule of 40：SaaS 健康度黃金法則': 'Rule of 40: the SaaS health benchmark',
  '成長率（%）＋ FCF Margin（%）≥ 40 代表健康。得分越高，EV/Revenue 估值倍數通常越高。':
    'Growth rate (%) + FCF margin (%) ≥ 40 signals health. The higher the score, the higher the EV/revenue multiple tends to be.',
  '週期性行業指標：庫存週轉、DSO、現金轉換週期':
    'Cyclical-industry metrics: inventory turns, DSO, cash conversion cycle',
  'CCC = DIO + DSO − DPO。負 CCC（如 Amazon）代表「先收錢後付款」的超強商業模式。DIO 攀升是景氣降溫領先指標。':
    "CCC = DIO + DSO − DPO. A negative CCC (like Amazon's) means collecting cash before paying suppliers — a formidable model. Rising DIO is a leading indicator of a cooling cycle.",

  /* ── footer 與 UI ───────────────────────────────────── */
  'Static, no build step. / 純靜態，無建置流程。': 'Static, no build step.',
  '⚠️ 本頁內容僅供學習參考，不構成任何投資建議。投資有風險，請自行判斷。':
    '⚠️ This page is for learning only and is not investment advice. Investing carries risk — judge for yourself.',
  '← One More Step 全部筆記': '← All One More Step notes',
  '給家人的投資課（52 週）': 'Family Investing Course (52 weeks)',
  投資專欄: 'Investing column',
  '✕ 關閉': '✕ Close',
  相關頁面: 'Related pages',
  '顯示 ${count} 筆筆記': 'Showing ${count} notes',
  "顯示 ${document.querySelectorAll('.card').length} 筆筆記":
    "Showing ${document.querySelectorAll('.card').length} notes",
};

/*
 * 71 個 modal 的整段英文 HTML。key 與來源頁 MODALS／MODALS_EXTRA／MODALS_US
 * 一致（m1–m22、p1–p8、v1–v6、a1–a4、us1–us8、uv1–uv8、uf1–uf7、uk1–uk8）。
 * 值只放 html——modal 標題已在上面的 MAP。
 */
/* note-origin 註記的固定句式（與來源頁三種層級一一對應）：
     數值門檻／區間為業界慣例 → Numeric thresholds and ranges here are industry conventions
     論點出自市場常見說法     → The arguments reflect common market claims
     部分敘述未查得可靠出處   → Some statements have no reliable source found
   結尾統一：— compiled from June 2026 online commentary; not empirical research.
   Verify before relying on it. */
export const MODALS_EN = {
  m1: {
    html: `
      <p>The essence of investing is not "did I make money this time?" but rather:</p>
      <ul>
        <li>Can this method be <strong>repeated over the long run</strong>?</li>
        <li>Can I get <strong>the same return at lower risk</strong>?</li>
        <li>Is there <strong>a better alternative</strong>?</li>
      </ul>
      <div class="highlight">💡 Many people land one lucky win and think they have found a method — but if it cannot be repeated, that profit was luck, not edge.</div>
      <p>This is the base logic beneath every investment decision, and the antidote to the "one trick works forever" illusion.</p>
    `,
  },
  m2: {
    html: `
      <p>Futures are <strong>designed as hedging tools</strong>, letting holders of the underlying lock in costs. But the market widely uses them for speculation, which makes them extremely difficult.</p>
      <div class="risk">⚠️ Derivatives carry leverage. For beginners without long screen hours and deep experience, this is an unfriendly market.</div>
      <ul>
        <li>TAIEX futures: demand highly accurate short-term calls on the index</li>
        <li>Options: time decay and volatility shifts add extra variables</li>
        <li>Futures: one slip in money management can blow up the account</li>
      </ul>
      <p>Note to self: unless you are a professional or have ample research time, build experience in the stock market first.</p>
    `,
  },
  m3: {
    html: `
      <p><strong>Short-term trading (day trading, overnight flips)</strong> is close to a zero-sum card table:</p>
      <ul>
        <li>A few strong winners take most of the money</li>
        <li>When stronger new winners appear, they crowd out the old ones</li>
        <li>The day-trading and overnight-flip broker branches slowly rotate through new names</li>
      </ul>
      <div class="highlight">📊 Mid/long-term investing combines industry research with chart patterns; the candidate pool is wider, the market capacity larger, and you need not watch the tape all day.</div>
      <p>That does not make it easy — the entry barrier just takes a different form: industry-research skill rather than reaction speed.</p>
    `,
  },
  m4: {
    html: `
      <p>"Lower-right stocks" are names in a long downtrend that look cheap on a low base.</p>
      <div class="risk">⚠️ Without deep knowledge of the company and its industry, you are not qualified to judge that it is "cheap now."</div>
      <ul>
        <li>Respect the market's pricing mechanism — bad news is often priced in before it is public</li>
        <li>"The news gets announced two months later" is common; the chart may have finished falling first</li>
        <li>Only buy the bottom when you are convinced the market is wrong</li>
      </ul>
      <div class="highlight">💡 Real bottom-fishing opportunities rest on deep research, not on a "looks cheap" hunch.</div>
    `,
  },
  m5: {
    html: `
      <p>The market is efficient most of the time (news is already in the price), but in some stocks the inefficiency is observable:</p>
      <ul>
        <li><strong>Traits of inefficient names:</strong> low volume, no broker coverage, no margin trading, almost no investor-call communication</li>
        <li>They may only start moving after news comes out at an investor conference</li>
        <li>Some even post 40–50% YoY revenue growth for three to four straight months before anyone notices and piles in</li>
      </ul>
      <div class="highlight">💡 The inefficiency of neglected small caps is an opportunity for those who can research — and a trap for those who cannot.</div>
      <p>On the US side, the Q&A of earnings calls is a great place to see what analysts actually care about.</p>
          <p class="note-origin">📎 The arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  m6: {
    html: `
      <p>Sector rotation matters a great deal in Taiwan:</p>
      <ul>
        <li>A whole group starting to move at once → big money is boarding</li>
        <li>The leader charging ahead → the rest of the group may follow</li>
        <li>Watching <strong>turnover value, volume, and price action</strong> reveals where money is focusing</li>
      </ul>
      <div class="highlight">📌 Example: when Taiwan's probe-card names spiked, related US stocks played catch-up; when Taiwan's OEMs spiked, CLS caught up too.</div>
      <p>When an entire supply chain is moving, something significant is happening — dig in.</p>
    `,
  },
  m7: {
    html: `
      <p>Before Lunar New Year, margin traders commonly deleverage early for two reasons (this describes the mechanism, not the market's direction):</p>
      <ul>
        <li><strong>Avoiding being trapped:</strong> Taiwan's market closes for many days over the holiday; a leveraged position could open straight into a rout if global markets crash in the meantime, so investors cut leverage in advance</li>
        <li><strong>Funding cost:</strong> margin interest keeps accruing through the closure, raising the cost of carry</li>
      </ul>
      <div class="risk">⚠️ Note: formal tests point the other way from "pre-holiday selling" — Yuan &amp; Gupta (2014), studying six Asian markets including Taiwan, found <strong>significantly positive</strong> returns before Lunar New Year, and no empirical support was found for a "post-holiday rebound" either. Margin deleveraging is an observable behavior; do not extrapolate it into a falling market.</div>
      <a class="source-link" href="https://ideas.repec.org/a/eee/quaeco/v54y2014i4p529-537.html" target="_blank">→ Yuan &amp; Gupta (2014), Chinese Lunar New Year effect in Asian stock markets, QREF 54(4)</a>
    `,
  },
  m8: {
    html: `
      <p>Retail investors often read "investment-trust net buying" as a bullish signal, but you have to distinguish:</p>
      <ul>
        <li><strong>Passive ETF allocation:</strong> index ETFs buy mechanically when constituents rebalance — that is not active conviction</li>
        <li><strong>Trust prop desks vs. the buy side:</strong> buying differs in how deliberate it is</li>
      </ul>
      <div class="risk">⚠️ Sustained net buying that comes from mechanical ETF allocation says nothing about fundamentals and should not be read as a bullish signal outright.</div>
      <p>When watching investment trusts, check whether their futures long positions are rising in tandem, and which way their actively managed funds are actually trading.</p>
      <a class="source-link" href="https://quantpass.org/retail-investor-index/" target="_blank">→ Reading the three institutional investors' indicators (Quantpass, in Chinese)</a>
    `,
  },
  m9: {
    html: `
      <p>Foreign investors' influence on Taiwan's market has been fading, because:</p>
      <ul>
        <li>Accumulated household wealth has made <strong>domestic capital ever stronger</strong></li>
        <li>Foreign money moves like an ox cart — once direction is set it plods along — but a slight turn to buying does not mean they have flipped bullish</li>
      </ul>
      <div class="highlight">💡 Practical tip: foreign short positions carry more signal than foreign buying — the short book is where they genuinely bet on direction.</div>
      <p>One or two days of light buying → possibly just a pause before more selling. Curb the enthusiasm.</p>
    `,
  },
  m10: {
    html: `
      <p>The "mini-TAIEX retail long/short ratio" used to be a contrarian indicator, retail usually being on the wrong side. Things have changed:</p>
      <ul>
        <li>Heavy program trading (quant strategies) now hides in mini-TAIEX futures</li>
        <li>Well-known foreign banks' quant teams trade it too</li>
        <li>It can <strong>no longer be treated as a pure retail gauge</strong> for contrarian trades</li>
      </ul>
      <div class="risk">⚠️ Read mini-TAIEX data with extra care; the old "retail long = time to sell" logic no longer applies directly.</div>
      <a class="source-link" href="https://en.macromicro.me/charts/80666/tai-wan-san-hu-zhi-biao-da-pan-rong-zi-wei-chi-lyu" target="_blank">→ MacroMicro: retail indicators and margin maintenance ratio</a>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  m11: {
    html: `
      <p>Total margin balance is a key gauge of market leverage and retail sentiment. The thresholds below are <strong>personal rules of thumb, and clearly stale</strong> — as of August 2026 the TWSE reports listed-market margin balance around NT$547 billion, far past what was once considered the "high":</p>
      <ul>
        <li><strong>Around NT$330 billion</strong> (the old rule of thumb): leverage too high, retail chasing — read as a warning of a relative top</li>
        <li><strong>NT$220–180 billion</strong>: historically meant a retail exodus and a cleaned-up float, near a relative bottom</li>
        <li><strong>The lesson:</strong> absolute thresholds decay as the market grows; watching margin balance relative to market cap, or its rate of change, beats memorizing a number</li>
      </ul>
      <div class="highlight">📌 Note: in recent years even billion-dollar players use margin, and share pledging is widespread, so margin balance is no longer a purely retail gauge — weight it accordingly. (The thresholds above are personal observations, not empirical research.)</div>
      <div class="risk">⚠️ The "era of big borrowing": many now pledge shares instead of using margin, so headline margin balance may understate the market's true leverage.</div>
      <a class="source-link" href="https://www.twse.com.tw/zh/trading/margin/mi-margn.html" target="_blank">→ TWSE: margin trading statistics (in Chinese)</a>
      <a class="source-link" href="https://fmstudio.blog/market-margin-balance-analysis-2025/" target="_blank">→ A full breakdown of market margin balance (FM Studio, in Chinese)</a>
    `,
  },
  m12: {
    html: `
      <p><strong>Margin maintenance ratio</strong> = market value of all margin-bought shares ÷ total market margin balance</p>
      <p>As prices fall, the ratio falls:</p>
      <ul>
        <li>Below a set level → the broker issues a margin call</li>
        <li>Unable to top up → <strong>forced liquidation</strong></li>
      </ul>
      <div class="highlight">💡 When the market-wide maintenance ratio drops to a low (below 150–160%), it signals irrational selling or a wave of forced liquidations — often a relative bottom. Once weak hands are washed out, the base for a rebound is firmer.</div>
      <a class="source-link" href="https://en.macromicro.me/charts/80666/tai-wan-san-hu-zhi-biao-da-pan-rong-zi-wei-chi-lyu" target="_blank">→ MacroMicro: margin maintenance ratio chart</a>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  m13: {
    html: `
      <p>Why do foreign short positions carry more signal than foreign net buying?</p>
      <ul>
        <li>Foreign buying may be just a one- or two-day "brief repair" before the selling resumes</li>
        <li>But <strong>shorts carry holding costs and risk</strong> — they represent a genuine directional bet</li>
        <li>Steadily growing foreign shorts → a relatively credible bearish signal</li>
      </ul>
      <div class="highlight">📌 What to actually watch:
        <br>• Is the foreign net short position in futures still expanding?
        <br>• Do not over-read one or two days of light foreign buying
      </div>
    `,
  },
  m14: {
    html: `
      <p>A <strong>convertible bond (CB)</strong> is a special bond a company issues, which the holder can convert into common shares under set conditions.</p>
      <ul>
        <li><strong>Stock rises:</strong> convert at the agreed price and capture the upside</li>
        <li><strong>Stock falls:</strong> keep the bond and collect principal and interest at maturity</li>
      </ul>
      <div class="highlight">💡 "Attack upward, defend downward" is the CB's core trait: equity upside above, bond floor below.</div>
      <p>Why issue a CB instead of borrowing from a bank? Usually faster fundraising, possibly lower cost, or a specific need to expand the share base.</p>
      <a class="source-link" href="https://rich01.com/cb-asset-swap-cbas/" target="_blank">→ CB and CBAS explained (Mr. Market, in Chinese)</a>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  m15: {
    html: `
      <p>A cash capital increase issues new shares to raise funds — and its timing deserves special attention:</p>
      <div class="risk">⚠️ A sudden cash raise right after the stock has been ramped hard → very likely "printing shares for cash" at retail's expense, with major holders diluting and cashing out at the top.</div>
      <p>But there are exceptions:</p>
      <ul>
        <li>If the proceeds fund <strong>new plants or capacity expansion</strong>, the short-term dilution can turn into a mid/long-term positive</li>
        <li>The key is <strong>what the money is for</strong>: building plants vs. topping up liquidity vs. repaying debt are very different animals</li>
      </ul>
      <div class="highlight">📌 The test: read the prospectus for the use of proceeds — that matters more than the timing.</div>
    `,
  },
  m16: {
    html: `
      <p>A convertible-bond play usually unfolds in three clear phases:</p>
      <ol style="padding-left:1.2rem; margin:0.5rem 0;">
        <li style="margin-bottom:0.6rem"><strong>At announcement:</strong> old hands jump in early, driving the first leg</li>
        <li style="margin-bottom:0.6rem"><strong>Before pricing:</strong> the stock is deliberately pressed, sometimes below prior lows, so the conversion price is set lower (favoring holders) — this stretch is normal</li>
        <li style="margin-bottom:0.6rem"><strong>After pricing:</strong> the consensus move is to lift the stock toward the conversion price, forming the second leg</li>
      </ol>
      <div class="highlight">📌 Past the conversion price: heavy short selling floods in to lock the spread, with arbitrageurs long the stock and short on borrow. Be careful here — in hindsight it sometimes turns out to be only halfway up the hill.</div>
      <p>CBs issued at lows or during consolidation are usually lower-risk; CBs issued right after a sharp ramp deserve extra caution.</p>
          <p class="note-origin">📎 The arguments reflect common market claims, and some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  m17: {
    html: `
      <p>A <strong>convertible bond asset swap (CBAS)</strong> is a broker splitting a CB it holds and selling the pieces to two different kinds of investors:</p>
      <ul>
        <li><strong>The fixed-income leg:</strong> pay principal, collect an agreed coupon — higher yield than a plain corporate bond, but bearing the issuer's credit risk</li>
        <li><strong>The option leg (CBAS option):</strong> pay a smaller premium for the call on conversion, with leverage</li>
      </ul>
      <div class="highlight">💡 For those who want in on a CB play but missed the initial allocation, the CBAS option offers secondary-market entry from day six after issuance.</div>
      <div class="risk">⚠️ CBAS carries counterparty risk (it is an agreement with the broker, not exchange-listed) — understand the liquidity and early-termination constraints.</div>
      <a class="source-link" href="https://rich01.com/cb-asset-swap-cbas/" target="_blank">→ CBAS explained in full (Mr. Market, in Chinese)</a>
    `,
  },
  m18: {
    html: `
      <p>Disposition stocks are the TWSE/TPEX <strong>market-surveillance warning mechanism</strong>:</p>
      <ul>
        <li>A stock moving more than <strong>25%</strong> cumulatively over six trading days may be flagged as an "attention stock"</li>
        <li>Flagged three days in a row, or repeatedly within a short window → it enters "disposition"</li>
        <li>During disposition: order matching slows to once every 5 minutes (20 minutes on a second disposition)</li>
        <li>Trades require <strong>full pre-collection of funds and shares</strong>; margin trading is banned</li>
      </ul>
      <div class="highlight">📌 For holders of a runaway stock, entering disposition can read as a "certificate of strength" — big holders will not rush to unload during the disposition window, and if the stock holds up well it may keep climbing afterward, even into a second disposition.</div>
      <a class="source-link" href="https://www.ctee.com.tw/news/20240508700606-430201" target="_blank">→ Attention and disposition stocks explained (Commercial Times, in Chinese)</a>
    `,
  },
  m19: {
    html: `
      <p>With matching intervals stretched way out, a disposition stock trades in a distinctive <strong>liquidity vacuum</strong>:</p>
      <ul>
        <li>Ordinary investors find it hard to trade; volume shrivels</li>
        <li>"Disposition hunters" specialize in this window, trading the spread off the thin liquidity and the fixed band between upper and lower edges</li>
        <li>If the stock fails to hold during disposition, heavy sell orders land exactly when liquidity is worst, amplifying the damage</li>
      </ul>
      <div class="risk">⚠️ For ordinary investors: liquidity is poor during disposition — if you need out fast you may not get a decent price, so size the position accordingly.</div>
      <div class="highlight">💡 Hold up well → liquidity returns after disposition ends → the stock may resume its climb, even into a second round (the local saying: the more gauntlets it survives, the bigger it gets).</div>
    `,
  },
  m20: {
    html: `
      <p>Watching the five-level order book, this is a classic operator-accumulation pattern:</p>
      <ul>
        <li><strong>A thick ask wall at a round number:</strong> heavy sell orders parked at a round price (say 100) manufacture the look of resistance</li>
        <li><strong>Steady small buying on the left (lower bids):</strong> quietly absorbing the loose float</li>
        <li>Once enough shares are absorbed, the wall gets smashed → momentum chasers pile in</li>
      </ul>
      <div class="highlight">💡 The tell: <strong>is there sustained buying below?</strong> Buying underneath = genuine accumulation; no buying = maybe just resistance, and the wall may never break.</div>
          <p class="note-origin">📎 The arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  m21: {
    html: `
      <p>A common move the day after a limit-up lock:</p>
      <ul>
        <li>After yesterday's limit-up, large buy orders appear at <strong>bid 3 or bid 4</strong> at the next open</li>
        <li>It looks like someone is propping the stock, luring others into believing there is support</li>
        <li>In practice: when <strong>bids 1 and 2 get smashed</strong>, that "wall" retreats downward</li>
        <li>The goal is a fake "someone wants these shares" impression — so that you rush to buy at bids 1 and 2</li>
      </ul>
      <div class="risk">⚠️ Note: if the other side is determined to dump outright, the wall does get filled. Whether the trick works comes down to the relative size of the two sides' capital.</div>
      <div class="highlight">💡 This is advanced order-book reading — it takes substantial live-tape experience to identify reliably.</div>
    `,
  },
  m22: {
    html: `
      <p>How to judge the direction and strength of program trading (algos) intraday:</p>
      <ul>
        <li><strong>Place a real buy order</strong> and watch for orders that <strong>instantly chase the price upward</strong> (a buying algo is competing)</li>
        <li>Or the other side <strong>dumps shares straight into your bid</strong> (a selling algo is distributing)</li>
        <li>This "probe" reveals which way the algos lean, so you can work with it</li>
      </ul>
      <div class="highlight">💡 This is a live-fire test suited to experienced traders. For retail, the value of knowing it is recognition: instant price-chasing or sudden dumping is rarely manual order flow — an algo is probably behind it.</div>
      <div class="risk">⚠️ The method has real cost (the bid-ask spread) — weigh whether it fits your style.</div>
          <p class="note-origin">📎 The arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
};
