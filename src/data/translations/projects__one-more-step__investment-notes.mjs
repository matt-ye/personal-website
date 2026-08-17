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
  '投資先生', // 元大證券 App 品牌名，官方英文名未確認
  'e點通', // 富邦證券 App 品牌名，官方英文名未確認
];

export const ADDED = [];

export const INCOMPLETE = false;

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
  p1: {
    html: `
      <p>Buying a company's <strong>common stock</strong> makes you a shareholder, entitled to:</p>
      <ul>
        <li>Gains from the share price rising (capital gains)</li>
        <li>Annual <strong>dividends (cash or stock)</strong></li>
        <li>Voting at shareholder meetings and preemptive rights in capital raises</li>
      </ul>
      <div class="highlight">💡 Taiwan trades in "lots" of 1,000 shares. Odd lots (from a single share) are also available, lowering the entry bar further.</div>
      <p><strong>Maximum loss:</strong> your invested principal (the stock going to zero). Unlike futures, you cannot lose more than you put in.</p>
      <p><strong>Transaction tax:</strong> 0.3% on sales of Taiwan stocks, 0.15% for day trades (as of 2025).</p>
    `,
  },
  p2: {
    html: `
      <p>An <strong>ETF (exchange-traded fund)</strong> trades on the exchange like a stock but holds a whole basket of assets.</p>
      <p><strong>Three main types:</strong></p>
      <ul>
        <li><strong>Plain-vanilla ETFs:</strong> like 0050 and 0056 — index-tracking, diversified, suited to long-term holding</li>
        <li><strong>Leveraged ETFs:</strong> amplify the index's return, e.g. 2x products. Held long term, daily resets mean the return ≠ index move × 2</li>
        <li><strong>Inverse ETFs:</strong> ticker's sixth character is R (e.g. 00632R, commonly called the "inverse-1"); they target the inverse of the index's <strong>single-day</strong> return, profiting when the index falls. The TWSE states plainly that daily compounding makes long-run returns drift — they are not for long-term holding</li>
      </ul>
      <div class="risk">⚠️ Leveraged and inverse ETFs are unsuitable for long-term holding: in choppy markets, daily resets create asymmetric decay.</div>
      <div class="highlight">💡 Thematic ETFs (5G, semiconductors, etc.) construct their baskets very differently — read the index rules, or you may not be buying what you think.</div>
    `,
  },
  p3: {
    html: `
      <p><strong>Futures</strong> are contracts where buyer and seller agree to settle a commodity or index at a set price at a future date.</p>
      <p><strong>Common Taiwan futures products:</strong></p>
      <ul>
        <li>TAIEX futures (full-size) and mini-TAIEX futures</li>
        <li>Single-stock futures, electronics-sector futures, financial-sector futures</li>
      </ul>
      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Very low transaction cost (roughly 2–10% of trading the stock)</li>
        <li>Two-way trading — shorting is just as easy</li>
        <li>Usable for hedging (offsetting portfolio risk)</li>
      </ul>
      <div class="risk">⚠️ Risk notes:<br>• Daily settlement — losses beyond your margin trigger a margin call, or forced liquidation<br>• Contracts expire; you cannot hold indefinitely<br>• Keep at least 3–5x the required margin as buffer</div>
      <div class="highlight">💡 Foreign investors' open interest in TAIEX futures is a key reference, published daily after the close by the Taiwan Futures Exchange.</div>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  p4: {
    html: `
      <p>Options split into <strong>buyers</strong> and <strong>sellers</strong>, and the two could not be more different:</p>
      <ul>
        <li><strong>Buyer:</strong> pays a premium for the <em>right</em> — not the obligation — to buy (call) or sell (put) at a set price by a set time. Maximum loss = the premium; profit theoretically uncapped.</li>
        <li><strong>Seller:</strong> collects the premium but carries the <em>obligation</em> to deliver if exercised. Posts margin; losses theoretically uncapped.</li>
      </ul>
      <div class="highlight">💡 TAIEX weekly options expire every Thursday — well suited to short-term directional trades or volatility strategies, with calls and puts covering both directions.</div>
      <div class="risk">⚠️ Buyers have capped losses but low win rates; sellers win often but can blow up on a black swan. Neither suits beginners.</div>
      <p>TAIEX index options are far more liquid than Taiwan's single-stock options.</p>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  p5: {
    html: `
      <p><strong>Warrants</strong> are derivatives issued by securities firms and listed on the exchange. Holders can only be <strong>buyers</strong>, paying a premium to bet on the underlying rising (call warrants) or falling (put warrants).</p>
      <p><strong>Versus options:</strong></p>
      <ul>
        <li>With options you may take either side; with warrants, buyer only</li>
        <li>The issuing broker bears the obligation — no seller margin as with options</li>
        <li>Stock warrants reference individual stocks rather than the index</li>
      </ul>
      <div class="highlight">💡 Leverage typically runs 3–6x — higher than margin buying; transaction tax is only 0.1% (vs. 0.3% for stocks).</div>
      <div class="risk">⚠️ Risks:<br>• Time value decays daily, faster near expiry<br>• Falling implied volatility also deflates the warrant<br>• In thin trading, wide bid-ask spreads raise the real cost</div>
    `,
  },
  p6: {
    html: `
      <p>Margin trading means borrowing cash or shares from your broker:</p>
      <ul>
        <li><strong>Margin buying (borrowing cash):</strong> put up about 40% yourself and the broker lends the other 60% — roughly 2.5x leverage (the 60% financing cap for listed and OTC shares is set by FSC directive Jin-Guan-Zheng-Tou-Zi No. 10300406141). Margin interest applies — Yuanta Securities Finance, for example, posts 6.25% p.a.; each broker sets its own rate</li>
        <li><strong>Short selling (borrowing shares):</strong> borrow shares to sell now and buy back cheaper later, pocketing the difference. Requires collateral plus a borrow fee.</li>
      </ul>
      <div class="highlight">📌 Key mechanisms:
        <br>• <strong>Margin calls:</strong> if falling prices push the maintenance ratio below 130%, you must top up or be forcibly liquidated
        <br>• <strong>Forced short covering:</strong> shorts must be returned ahead of ex-dividend dates and shareholder meetings
      </div>
      <div class="risk">⚠️ The core risk of margin is that leverage magnifies losses. Using it properly presumes high conviction in the stock and ample spare capital.</div>
      <p>Some hot or small-cap names are <strong>closed to margin trading</strong> entirely.</p>
    `,
  },
  p7: {
    html: `
      <p>A <strong>bond</strong> is a security in which a government or company borrows from investors, promises periodic interest (the coupon), and repays principal at maturity.</p>
      <p><strong>Main kinds:</strong></p>
      <ul>
        <li><strong>Government bonds:</strong> issued by Taiwan's central government — near-zero default risk, low yield</li>
        <li><strong>Corporate bonds:</strong> higher yield, with credit (default) risk to bear</li>
        <li><strong>Convertible bonds (CB):</strong> corporate bonds convertible into stock (see the CB section)</li>
        <li><strong>Bond ETFs:</strong> like 00679B (US Treasuries), giving ordinary investors a low bar into bonds</li>
      </ul>
      <div class="highlight">💡 Bonds move inversely to rates: rates up, bond prices down; rates down, bond prices up.</div>
      <p>For most investors in Taiwan the easiest access is through <strong>bond ETFs</strong> — low minimums, good liquidity.</p>
    `,
  },
  p8: {
    html: `
      <p>A quick side-by-side of each product's core traits:</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead>
            <tr style="border-bottom:1px solid #3a3d50;">
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Product</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Leverage</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Max loss</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Expiry</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Suits</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#2bbfbf;">Stocks</td>
              <td style="padding:0.5rem 0.4rem;">None (1x)</td>
              <td style="padding:0.5rem 0.4rem;">Principal</td>
              <td style="padding:0.5rem 0.4rem;">None</td>
              <td style="padding:0.5rem 0.4rem;">Everyone</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#2bbfbf;">ETFs</td>
              <td style="padding:0.5rem 0.4rem;">1x (plain)</td>
              <td style="padding:0.5rem 0.4rem;">Principal</td>
              <td style="padding:0.5rem 0.4rem;">None</td>
              <td style="padding:0.5rem 0.4rem;">Steady / long-term</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:var(--accent);">Margin</td>
              <td style="padding:0.5rem 0.4rem;">~2.5x</td>
              <td style="padding:0.5rem 0.4rem;">Collateral + calls</td>
              <td style="padding:0.5rem 0.4rem;">6 months</td>
              <td style="padding:0.5rem 0.4rem;">Experienced</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#e0904a;">Futures</td>
              <td style="padding:0.5rem 0.4rem;">5–15x</td>
              <td style="padding:0.5rem 0.4rem;">Theoretically uncapped</td>
              <td style="padding:0.5rem 0.4rem;">Monthly/quarterly</td>
              <td style="padding:0.5rem 0.4rem;">Professionals</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#c49dff;">Option buyer</td>
              <td style="padding:0.5rem 0.4rem;">10x+</td>
              <td style="padding:0.5rem 0.4rem;">Premium</td>
              <td style="padding:0.5rem 0.4rem;">Weekly/monthly</td>
              <td style="padding:0.5rem 0.4rem;">Professionals</td>
            </tr>
            <tr>
              <td style="padding:0.5rem 0.4rem; color:#f08080;">Warrants</td>
              <td style="padding:0.5rem 0.4rem;">3–6x</td>
              <td style="padding:0.5rem 0.4rem;">Premium</td>
              <td style="padding:0.5rem 0.4rem;">Months to 1 year</td>
              <td style="padding:0.5rem 0.4rem;">Intermediate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="risk">⚠️ Higher leverage means bigger potential returns — and losses beyond what you expected. Beginners should start with stocks and plain ETFs.</div>
    `,
  },
  v1: {
    html: `
      <p>Two indicators that look alike but serve different purposes:</p>
      <ul>
        <li><strong>Volume:</strong> the number of lots traded that day (1 lot = 1,000 shares). It shows how much stock is changing hands and leads price action.</li>
        <li><strong>Turnover value:</strong> volume × price — the total money flowing through. It better reflects market heat and lets you compare stocks at different prices.</li>
      </ul>
      <div class="highlight">📌 When to use which:
        <br>• Judging a move's strength → <strong>volume</strong> (is it expanding vs. before?)
        <br>• Judging money heat → <strong>turnover value</strong> (is big money coming in?)
        <br>• Comparing activity across stocks → <strong>turnover rate</strong> (strips out share-count differences)
      </div>
      <p>Volume appears as bars under the candlestick chart — red for up days, green for down days (broker apps vary slightly).</p>
      <a class="source-link" href="https://www.stockfeel.com.tw/%E4%BB%80%E9%BA%BC%E6%98%AF%E6%88%90%E4%BA%A4%E9%87%8F%EF%BC%9F%E8%A6%81%E6%80%8E%E9%BA%BC%E7%9C%8B%EF%BC%9F/" target="_blank">→ Volume explained in full (StockFeel, in Chinese)</a>
    `,
  },
  v2: {
    html: `
      <p><strong>Turnover rate = volume ÷ shares outstanding × 100%</strong></p>
      <p>Why bother? Volume is an absolute number: 100,000 shares traded means wildly different things for a 1-million-share company versus a 100-million-share one. Turnover rate normalizes that away.</p>
      <p><strong>Reference bands:</strong></p>
      <ul>
        <li><strong>&lt; 1%:</strong> quiet — stable float, little attention</li>
        <li><strong>1–3%:</strong> normal trading activity</li>
        <li><strong>3–5%:</strong> relatively active, drawing some attention</li>
        <li><strong>&gt; 10%:</strong> hot — short-term money focused here, or an operator rotating the float</li>
        <li><strong>&gt; 20%:</strong> abnormally hot — possibly a pump or a major event</li>
      </ul>
      <div class="highlight">💡 Read turnover with price direction:<br>• High turnover + rising → strength confirmed, chasing has a basis<br>• High turnover + falling → distribution signal, be wary<br>• Low turnover + rising → stable float, holders reluctant to sell<br>• Low turnover + falling → volumeless grind lower, or consolidation</div>
          <p class="note-origin">📎 The arguments reflect common market claims, and some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  v3: {
    html: `
      <p>In the stock market, <strong>"chips"</strong> means the ownership picture — just as casino chips represent money, stock-market chips represent who holds how many shares.</p>
      <div class="highlight">💡 The core logic:
        <br>• Chips <strong>concentrated</strong> in a few hands (institutions, big holders) → strong control, the stock rises easily
        <br>• Chips <strong>scattered</strong> across many retail holders → jittery hands, the stock falls easily
      </div>
      <p><strong>What chip analysis has going for it:</strong></p>
      <ul>
        <li>Real money changed hands — it cannot be faked (unlike news, which can be rumor)</li>
        <li>Following institutions and big holders piggybacks on their research and information edge</li>
        <li>Taiwan is one of the few markets that opens ownership data to the general public</li>
      </ul>
      <div class="risk">⚠️ Its limits:<br>• Chip data is history — it records trades already made<br>• Institutional flows may be passive (ETF) allocation, not active conviction<br>• Combine with technicals and fundamentals</div>
      <a class="source-link" href="https://www.fincake.co/blog/chip-analysis" target="_blank">→ A primer on chip analysis (Fincake, in Chinese)</a>
    `,
  },
  v4: {
    html: `
      <p>Taiwan's <strong>three institutional investor groups</strong> together account for roughly 40% of the market. After every session, the TWSE and TAIFEX publish their net buy/sell figures.</p>
      <ul>
        <li><strong>Foreign investors (FINI):</strong> offshore institutions (the old QFII system was abolished in 2003 in favor of registration). Deep research resources; the biggest influence on large caps such as TSMC and Delta. Their futures open interest is especially worth watching.</li>
        <li><strong>Investment trusts:</strong> Taiwan's domestic fund houses — steady buyers, but distinguish "active conviction" from "passive ETF allocation" (see the Institutions &amp; the Market section).</li>
        <li><strong>Dealers:</strong> brokers trading their own book — quick to react, but often market-making or hedging, so their direction carries less signal.</li>
      </ul>
      <div class="highlight">📌 Where to look: twse.com.tw → Trading Data → the three institutional investors, or tools like Fincake and CMoney.</div>
      <p>Their futures open interest is published daily after the close by the <strong>Taiwan Futures Exchange (taifex.com.tw)</strong>.</p>
      <a class="source-link" href="https://quantpass.org/institutional-investors-tw/" target="_blank">→ The three institutional investors' open interest explained (Quantpass, in Chinese)</a>
          <p class="note-origin">📎 The arguments reflect common market claims, and some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  v5: {
    html: `
      <p>In chip analysis, <strong>"operators"</strong> broadly means deep-pocketed investors who can move a stock — the three institutional groups, plus <strong>big holders</strong> with over a thousand lots.</p>
      <ul>
        <li><strong>Thousand-lot holders:</strong> investors holding more than 1,000 lots of a single stock; the TDCC tallies holdings by bracket and publishes the breakdown weekly</li>
        <li><strong>Director and officer holdings:</strong> insiders — their buying and selling is an important ownership signal</li>
        <li><strong>Branch-level operators:</strong> watching order flow through specific broker branches lets you track particular operators' movements</li>
      </ul>
      <div class="highlight">💡 What to watch:<br>• Thousand-lot holdings rising for days on end → concentrating float, bullish<br>• Falling for days on end → loosening float, caution<br>• Persistence matters more than any single day's change</div>
      <div class="risk">⚠️ Branch data lags by a day (T+1), and operators may spread across multiple accounts — cross-check from several angles.</div>
    `,
  },
  v6: {
    html: `
      <p>Volume leads price. The four volume-price combinations each mean something different:</p>
      <div style="overflow-x:auto; margin:0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead>
            <tr style="border-bottom:1px solid #3a3d50;">
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Scenario</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Reading</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Implication</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#3bbf8a;">Rising on expanding volume</td>
              <td style="padding:0.5rem 0.4rem;">Buyers strong</td>
              <td style="padding:0.5rem 0.4rem;">Trend confirmed — the strongest signal</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#c9a96e;">Rising on shrinking volume</td>
              <td style="padding:0.5rem 0.4rem;">Holders reluctant to sell, stable float</td>
              <td style="padding:0.5rem 0.4rem;">Holding up short term, but watch whether volume follows</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#e06060;">Falling on expanding volume</td>
              <td style="padding:0.5rem 0.4rem;">Sellers strong, heavy pressure</td>
              <td style="padding:0.5rem 0.4rem;">Trend reversal or accelerating decline</td>
            </tr>
            <tr>
              <td style="padding:0.5rem 0.4rem; color:#7a7d8c;">Falling on shrinking volume</td>
              <td style="padding:0.5rem 0.4rem;">Volumeless grind lower</td>
              <td style="padding:0.5rem 0.4rem;">Possibly consolidation, or a market on the sidelines</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="highlight">💡 Special cases:<br>• Heavy volume at highs but no new high → distribution, money leaving<br>• Volume spike and rebound mid-decline → possibly a washed-out float, a bottoming signal</div>
      <p>Always compare a stock's volume to <em>its own history</em> — volume comparisons across different stocks are meaningless.</p>
          <p class="note-origin">📎 The arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  a1: {
    html: `
      <p><strong>SinoPac Securities' 大戶投 app</strong> has some of the most complete chip-analysis features of any broker app in Taiwan.</p>
      <p><strong>Four core tools:</strong></p>
      <ul>
        <li><strong>Price-volume distribution:</strong> shows traded volume by price band, revealing operators' cost zones</li>
        <li><strong>Big-holder vs. retail buy/sell pressure:</strong> tiers investors by trade size to show which scale of money is flowing which way</li>
        <li><strong>Capital distribution:</strong> shows which sectors or stocks the day's money is crowding into</li>
        <li><strong>Capital flows:</strong> watch money moving in or out in real time</li>
      </ul>
      <div class="highlight">📱 Where to find them:<br>• Stock page → Chips → big-holder/retail buy-sell pressure<br>• Stock page → Chips → price-volume distribution<br>• Home → capital distribution (market-wide)</div>
      <div class="risk">⚠️ Some advanced features require a SinoPac brokerage account. Free accounts get basic quotes, but the deeper chip tools need identity verification.</div>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  a2: {
    html: `
      <p>Important data you can check without opening an account, all free:</p>
      <ul>
        <li><strong>Taiwan Stock Exchange, twse.com.tw:</strong><br>→ institutional net buy/sell, margin balances, per-stock data, attention/disposition lists</li>
        <li><strong>Taipei Exchange, tpex.org.tw:</strong><br>→ the same for OTC stocks, plus credit-trading and ETF statistics</li>
        <li><strong>Taiwan Futures Exchange, taifex.com.tw:</strong><br>→ institutional futures open interest, options statistics, large-trader positions (the "mini-TAIEX retail long/short ratio" is not a TAIFEX-published figure — it is a folk indicator derived by subtracting institutional positions from total open interest)</li>
        <li><strong>Market Observation Post System, mops.twse.com.tw:</strong><br>→ company financials, material announcements, ownership structure, monthly revenue</li>
      </ul>
      <div class="highlight">📌 Handy third-party aggregators:<br>• <strong>Goodinfo:</strong> free and the most complete — margin, institutions, insiders, all of it<br>• <strong>CMoney:</strong> fundamentals + chips, partly free<br>• <strong>Yahoo Finance Taiwan:</strong> quick margin balances and live quotes</div>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  a3: {
    html: `
      <p>Advanced tools beyond the typical broker app:</p>
      <ul>
        <li><strong>XQ:</strong> Taiwan's most powerful charting + screening + backtesting platform, with direct order routing to 20+ brokers. The fullest feature set, but subscription-based. For intermediate investors and up.</li>
        <li><strong>MacroMicro:</strong> macro-indicator visualization par excellence — margin maintenance ratio, retail long/short ratio, foreign futures positions, all charted. Partly free.</li>
        <li><strong>Fincake:</strong> chip-analysis-first — the three institutional groups, branch-level operators, and thousand-lot holders at a glance. Free and paid tiers.</li>
        <li><strong>StockFeel:</strong> financial education plus per-stock fundamentals — good for the learning stage.</li>
        <li><strong>TradingView:</strong> the international standard for technical charting, supports Taiwan stocks, powerful drawing tools and a rich community.</li>
      </ul>
      <div class="highlight">💡 A beginner's path:<br>① Start with Goodinfo for the basic numbers (free)<br>② Add MacroMicro to understand the macro backdrop (partly free)<br>③ Consider paid Fincake or XQ only when you need deep chip analysis</div>
    `,
  },
  a4: {
    html: `
      <p>Taiwan's major broker apps each have their own character — a quick comparison:</p>
      <div style="overflow-x:auto; margin:0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; font-family:'Space Mono',monospace;">
          <thead>
            <tr style="border-bottom:1px solid #3a3d50;">
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Broker</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">App</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Chip tools</th>
              <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Notable for</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#7dba5a;">SinoPac</td>
              <td style="padding:0.5rem 0.4rem;">大戶投</td>
              <td style="padding:0.5rem 0.4rem;">★★★★★</td>
              <td style="padding:0.5rem 0.4rem;">The most complete chip data</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#7dba5a;">Yuanta</td>
              <td style="padding:0.5rem 0.4rem;">投資先生</td>
              <td style="padding:0.5rem 0.4rem;">★★★☆☆</td>
              <td style="padding:0.5rem 0.4rem;">Institutional flows, basic chip data</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#7dba5a;">Fubon</td>
              <td style="padding:0.5rem 0.4rem;">e點通 / AI PRO</td>
              <td style="padding:0.5rem 0.4rem;">★★★☆☆</td>
              <td style="padding:0.5rem 0.4rem;">Newer interface, Taiwan + US in one</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#7dba5a;">Cathay</td>
              <td style="padding:0.5rem 0.4rem;">Cathay Securities</td>
              <td style="padding:0.5rem 0.4rem;">★★☆☆☆</td>
              <td style="padding:0.5rem 0.4rem;">Friendly to younger users, strong recurring investment plans</td>
            </tr>
            <tr style="border-bottom:1px solid #252836;">
              <td style="padding:0.5rem 0.4rem; color:#7dba5a;">口袋證券</td>
              <td style="padding:0.5rem 0.4rem;">口袋證券</td>
              <td style="padding:0.5rem 0.4rem;">★★★☆☆</td>
              <td style="padding:0.5rem 0.4rem;">The freshest interface, institutional flows</td>
            </tr>
            <tr>
              <td style="padding:0.5rem 0.4rem; color:#7dba5a;">Fugle</td>
              <td style="padding:0.5rem 0.4rem;">Fugle</td>
              <td style="padding:0.5rem 0.4rem;">★★★☆☆</td>
              <td style="padding:0.5rem 0.4rem;">API-friendly, a developer favorite</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="highlight">💡 A sensible setup: place orders through your own broker's app, and check chip data on Goodinfo or Fincake — no single app needs to do everything.</div>
      <div class="risk">⚠️ Ratings reflect public information; apps update constantly — download and try before deciding.</div>
    `,
  },
  us1: {
    html: `
      <p>The three major US indexes are built on different logic and represent different things — you must know the differences to read market signals correctly.</p>
      <ul>
        <li><strong>Dow Jones Industrial Average (DJIA):</strong> 30 large blue chips, <strong>price-weighted</strong> — higher-priced stocks carry more weight. The oldest index (founded 1896), but with few constituents, limited representativeness, and a light tech weighting.</li>
        <li><strong>S&P 500:</strong> 500 <strong>leading companies selected by an index committee against eligibility criteria</strong> (the official language is "leading companies" — US-domicile tests, public float, four quarters of positive GAAP earnings; it is not simply the top 500 by market cap, and it actually holds about 504 share classes). <strong>Cap-weighted</strong>, covering roughly 80% of US <strong>float-adjusted</strong> market value — the benchmark of choice for institutions and index funds.</li>
        <li><strong>Nasdaq Composite:</strong> every <strong>common-stock-class</strong> security on the Nasdaq (ETFs, preferreds, and warrants excluded; currently 3,300+ names), heavily tilted to tech and biotech, more volatile than the S&P 500. The <strong>Nasdaq-100</strong> selects the 100 largest non-financials and is what QQQ tracks.</li>
        <li><strong>Russell 2000:</strong> the small-cap index — 2,000 smaller companies, a key read on the health of small and mid-sized American business.</li>
      </ul>
      <div class="highlight">💡 In practice, the S&P 500 is the most representative "overall US market" gauge. The Dow's price-weighting flaw relegates it to historical comparison; the Nasdaq mostly reflects the tech cycle. Long-run annualized returns (dividends reinvested): S&P 500 about <strong>10%</strong>, Nasdaq-100 about <strong>14%</strong> (with far bigger swings), Dow about <strong>9–10%</strong>.</div>
      <div class="risk">⚠️ Index highs do not mean every stock is doing well: the S&P 500's top ten constituents often exceed 30% of its value, with the tech giants steering the index — mind the concentration risk.</div>
    `,
  },
  us2: {
    html: `
      <p>America's two main stock exchanges differ visibly in mechanics, listing standards, and industry mix.</p>
      <ul>
        <li><strong>NYSE (New York Stock Exchange):</strong> founded 1792, the world's largest exchange by market value. A <strong>hybrid market</strong> with a physical trading floor plus electronic trading, traditionally kept orderly by Designated Market Makers (DMMs). Listings skew toward established giants — JP Morgan, Coca-Cola, Berkshire Hathaway (note: Walmart has moved to the Nasdaq, so don't copy old lists).</li>
        <li><strong>Nasdaq:</strong> founded 1971 — by its own account the world's first <strong>fully electronic quotation system</strong> (later an exchange), <strong>purely electronic matching</strong> with no floor. Multiple competing market makers provide liquidity. It attracts tech and biotech: Apple, Microsoft, Amazon, and Meta all list here.</li>
        <li><strong>Listing bars:</strong> the NYSE is stricter, requiring shareholders' equity of at least US$4 million; the Nasdaq's three tiers (Global Select, Global Market, Capital Market) set lower bars suited to growth companies.</li>
        <li><strong>Ticker conventions:</strong> historically the NYSE favored 1–3 letters (T, GE, IBM) and the Nasdaq 4–5 (AAPL, MSFT, GOOGL), but the rule loosened after the SEC approved unified cross-market assignment in 2008 — over a third of NYSE tickers now run four letters (ORCL, DELL, BABA), and the Nasdaq has hundreds of 1–3 letter symbols (ZM, ON). Ticker length no longer tells you the venue.</li>
      </ul>
      <div class="highlight">💡 For ordinary investors, stocks on both exchanges trade through the same brokerage account with essentially no operational difference. The venue says nothing about stock quality — fundamentals still decide.</div>
      <div class="risk">⚠️ Companies do switch exchanges. A transfer by itself signals nothing about quality, though it can affect near-term liquidity.</div>
    `,
  },
  us3: {
    html: `
      <p>US trading hours sit awkwardly against Taiwan's time zone — time management and overnight risk deserve real attention.</p>
      <ul>
        <li><strong>Regular hours:</strong> 09:30–16:00 Eastern Time, which in Taiwan (UTC+8) means:
          <ul>
            <li>Daylight time (mid-March to early November): Taiwan <strong>21:30–04:00</strong></li>
            <li>Standard time (early November to mid-March): Taiwan <strong>22:30–05:00</strong></li>
          </ul>
        </li>
        <li><strong>Pre-market:</strong> ET 04:00–09:30 — thin liquidity, wide spreads, big jumps after earnings.</li>
        <li><strong>After-hours:</strong> ET 16:00–20:00 — equally thin, and where major earnings often land.</li>
        <li><strong>Brokers Taiwan investors commonly use:</strong> sub-brokerage accounts (Yuanta, Fubon, Cathay) cost more but offer Chinese-language support; overseas brokers (Interactive Brokers) are cheaper but English-only, and US estate tax deserves attention.</li>
      </ul>
      <div class="highlight">💡 Use <strong>limit orders</strong> — market orders in thin pre/post sessions invite slippage. Most orders can be staged during Taiwan's daytime as conditional orders that execute automatically when the US opens.</div>
      <div class="risk">⚠️ In earnings season, your holdings can swing hard in Taiwan's dead of night. Know the announcement slots in advance (BMO = before market open, AMC = after market close) and avoid over-concentration.</div>
          <p class="note-origin">📎 The arguments reflect common market claims, and some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  us4: {
    html: `
      <p>Earnings season is one of the biggest catalysts in US equities: for about three weeks after each quarter ends, companies report en masse and volatility expands markedly.</p>
      <ul>
        <li><strong>The four seasons:</strong>
          <ul>
            <li>Q1 results (Jan–Mar): from mid-April</li>
            <li>Q2 results (Apr–Jun): from mid-July</li>
            <li>Q3 results (Jul–Sep): from mid-October</li>
            <li>Q4 results (Oct–Dec): from mid-January the following year</li>
          </ul>
        </li>
        <li><strong>What matters in a report:</strong>
          <ul>
            <li><strong>EPS:</strong> actual vs. the consensus estimate — beat, miss, or in line</li>
            <li><strong>Revenue:</strong> YoY and QoQ growth against expectations</li>
            <li><strong>Guidance:</strong> the company's forecast for next quarter or the full year — often moves the stock more than the quarter itself</li>
            <li><strong>Gross margin:</strong> pricing power and cost control</li>
          </ul>
        </li>
        <li><strong>The mega-cap ripple:</strong> results from Apple, Microsoft, Amazon, Alphabet, and Meta often steer the whole index.</li>
      </ul>
      <div class="highlight">💡 "Buy the rumor, sell the news" is routine in earnings season: prices front-run expectations, so even a shiny report can sell off. Watch the size of the beat and whether guidance exceeds expectations — not merely whether it beat. Earnings Whispers lists announcement times.</div>
      <div class="risk">⚠️ Options implied volatility balloons around announcements — option sellers beware. Even with sound fundamentals, guidance below expectations can knock a stock down 10–20% in a day; it is not rare.</div>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  us5: {
    html: `
      <p>The SEC requires listed companies to file periodic disclosures — the rawest, most reliable source for fundamental analysis, free on SEC EDGAR.</p>
      <ul>
        <li><strong>10-K (annual report):</strong> filed 60–90 days after fiscal year-end. Contains full financial statements, the business description, Risk Factors, and Management's Discussion &amp; Analysis (MD&amp;A). Usually 100–200 pages — the most complete picture of a company.</li>
        <li><strong>10-Q (quarterly report):</strong> filed 40–45 days after each quarter (the fourth quarter is folded into the 10-K). Unaudited in full, but tracks quarterly progress.</li>
        <li><strong>8-K (current report):</strong> filed within four business days of a material event. Mandated triggers include earnings releases (Item 2.02), mergers and acquisitions (2.01), and CEO changes (5.02); dividend declarations and litigation settlements often appear as voluntary Item 8.01 disclosures.</li>
        <li><strong>DEF 14A (proxy statement):</strong> filed before the shareholder meeting, with executive-pay details — a key governance reference.</li>
        <li><strong>S-1:</strong> the IPO registration — the full business story before listing, with risk factors and financial history.</li>
      </ul>
      <div class="highlight">💡 A reading order that works: 8-K for the latest developments → the 10-K's Risk Factors (management's honest disclosures) → MD&amp;A for their explanation of results → then the statements themselves. Most retail investors skip Risk Factors, yet it is often the most honest self-disclosure a company makes.</div>
      <div class="risk">⚠️ SEC filings are legal documents — management is legally liable for the numbers — but forward-looking MD&amp;A language can still be too optimistic. Cross-check with third-party analyst work.</div>
      <a class="source-link" href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany" target="_blank">→ SEC EDGAR company filings search</a>
          <p class="note-origin">📎 The arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  us6: {
    html: `
      <p>Federal Reserve monetary policy is one of the most important macro forces on US stocks — investors need the mechanics and the transmission path.</p>
      <ul>
        <li><strong>The federal funds rate:</strong> the Fed's target rate, set by the FOMC across eight scheduled meetings a year. In normal times moves come in 25-basis-point steps — but not in a rapid tightening cycle: of 2022's seven hikes, only one was 25bp; the rest were 50bp and 75bp.</li>
        <li><strong>What hikes do to stocks:</strong>
          <ul>
            <li>Borrowing costs rise → pressure on corporate profits</li>
            <li>The risk-free rate rises → stocks look relatively less attractive (higher DCF discount rates)</li>
            <li>Growth stocks (high P/E) take the biggest hit, since their distant cash flows shrink most when discounted</li>
            <li>Financials (banks) usually benefit as deposit-lending spreads widen</li>
          </ul>
        </li>
        <li><strong>What cuts do:</strong> looser liquidity → multiple expansion → tech and growth benefit most; but if the cuts come because of recession, stocks can fall anyway.</li>
        <li><strong>What to watch:</strong> the CME FedWatch Tool (market-implied odds of moves), CPI inflation, nonfarm payrolls (NFP), and Fed speeches — especially the Chair's.</li>
      </ul>
      <div class="highlight">💡 Historical reference: in 2022 the Fed hiked seven times for 425bp in one year (from 0–0.25% in January to 4.25–4.50% by December; the 5.50% upper bound only arrived in July 2023). The S&P 500 fell about 19.4% that year and the Nasdaq about 33%. After hikes stopped in July 2023, markets rebounded hard (2023: S&P 500 +24%, Nasdaq +43%). Shifts in rate expectations tend to move stocks earlier than the actual moves do.</div>
      <a class="source-link" href="https://www.federalreserve.gov/monetarypolicy/openmarket.htm" target="_blank">→ Fed official record: target-rate changes (Open Market Operations)</a>
      <div class="risk">⚠️ "Don't fight the Fed," as Wall Street says — policy direction correlates strongly with the market's long-run trend. But markets routinely over-react to Fed readings; short-term swings do not equal a change in trend.</div>
      <a class="source-link" href="https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html" target="_blank">→ CME FedWatch Tool rate expectations</a>
          <p class="note-origin">📎 The arguments reflect common market claims, and some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  us7: {
    html: `
      <p>US markets offer several ways to profit from falling prices — or to hedge. Each tool has a different risk profile; choose carefully.</p>
      <ul>
        <li><strong>Short selling:</strong> borrow shares from your broker, sell, and buy back cheaper to return them.
          <ul>
            <li>You pay a <strong>stock borrow rate</strong> — for heavily shorted names it can run 50%–100%+ annualized</li>
            <li>Theoretical loss is unlimited (a stock can rise without bound) — extremely high risk</li>
            <li><strong>Short squeezes:</strong> when short interest is extreme, a surging price forces shorts to cover. GME 2021 is the usual example — but note the SEC's own staff report concluded the squeeze was "not the main driver" of the rally, attributing the main leg to positive-sentiment buying. Cite the example knowing the official conclusion differs from the market narrative</li>
          </ul>
        </li>
        <li><strong>Buying puts:</strong> pay a premium for the right to sell at a set price. Maximum loss is the premium — good for directional shorts or hedging, at the cost of theta decay.</li>
        <li><strong>Inverse ETFs:</strong> track the inverse of an index — SQQQ (3x short Nasdaq-100), SH (1x short S&P 500). Simple to trade, but <strong>daily rebalancing</strong> erodes long-term returns; not for holding.</li>
      </ul>
      <div class="highlight">💡 The most common retail hedge: hold your stocks and buy puts on the corresponding index (QQQ puts against tech holdings) to soften a broad selloff — the cost is simply the insurance premium. Check the short interest ratio (days to cover) to size squeeze risk.</div>
      <div class="risk">⚠️ Naked short selling is, per the SEC, "not necessarily a violation" — Regulation SHO targets persistent failures to deliver and abusive naked shorting. Conventional short selling has theoretically unlimited loss; for beginners expressing a bearish view, buying a put caps the loss at the premium (which can itself go to zero).</div>
      <a class="source-link" href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-51" target="_blank">→ SEC Investor Bulletin: An Introduction to Short Sales</a>
      <a class="source-link" href="https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf" target="_blank">→ SEC staff report on the early-2021 GameStop episode (PDF)</a>
    `,
  },
  us8: {
    html: `
      <p>American Depositary Receipts (ADRs) let investors trade foreign companies in US dollars on US markets — the main route to TSMC (TSM), Alibaba (BABA), Toyota (TM), and other non-US names.</p>
      <ul>
        <li><strong>How they work:</strong> a US depositary bank (BNY Mellon, Citibank) holds the home-market shares and issues corresponding ADRs for US trading. One ADR can represent multiple shares or a fraction of one (ratios vary).</li>
        <li><strong>ADR levels:</strong>
          <ul>
            <li><strong>Level I:</strong> OTC only, minimal filing requirements, weaker liquidity</li>
            <li><strong>Levels II &amp; III:</strong> listed on the NYSE or Nasdaq with SEC filings (the 20-F annual report) and good liquidity</li>
          </ul>
        </li>
        <li><strong>TSMC's ADR (TSM):</strong> 1 ADR = 5 Taiwan common shares, NYSE-listed — one of the most liquid Asian tech ADRs.</li>
        <li><strong>Fees:</strong> ADR holders pay a <strong>depositary fee</strong> — the SEC's example is roughly $20–$50 per 1,000 ADRs (i.e. $0.02–$0.05 per share), usually deducted from dividends.</li>
      </ul>
      <div class="highlight">💡 ADRs trade at premiums or discounts to the home shares as currencies and the two markets move. A TSMC ADR–Taiwan share arbitrage exists in principle, but retail investors can rarely capture it directly — just watch the spread.</div>
      <div class="risk">⚠️ Beyond stock risk, ADRs carry <strong>currency risk</strong> (home currency vs. the dollar), <strong>geopolitical risk</strong> (e.g. delisting risk for China ADRs), and <strong>home-country dividend withholding</strong> — for TSMC's ADR, Taiwan withholds 21% on non-resident dividends, while the US generally does not tax foreign companies' dividends again (non-US-source income); actual liability depends on your status and treaties.</div>
    `,
  },
  uv1: {
    html: `
      <p>The price-to-earnings ratio (P/E) is the most widely used valuation metric: the price investors pay per dollar of earnings, reflecting the market's growth expectations.</p>
      <ul>
        <li><strong>Formula:</strong> P/E = price ÷ earnings per share (EPS)</li>
        <li><strong>Historical reference points:</strong>
          <ul>
            <li>S&P 500 long-run average: about <strong>15–17x</strong></li>
            <li>S&P 500 last-decade average (the low-rate era): about <strong>20–25x</strong></li>
            <li>Tech growth names: commonly <strong>30–60x</strong> or higher</li>
            <li>Traditional industry, utilities: <strong>10–15x</strong></li>
            <li>Financials: <strong>8–12x</strong></li>
          </ul>
        </li>
        <li><strong>Shiller P/E (CAPE):</strong> uses inflation-adjusted 10-year average earnings to smooth single-year swings; historical mean around <strong>16–17x</strong>, commonly used to judge whether the whole market is stretched.</li>
        <li><strong>P/E only means something against industry peers</strong> — baselines differ enormously. And if a cyclical trough has crushed EPS, the P/E will look artificially high.</li>
      </ul>
      <div class="highlight">💡 P/E's biggest flaws: useless for loss-makers (negative EPS), blind to capital-structure differences, and earnings can be massaged by accounting. Cross-check with EV/EBITDA and P/FCF.</div>
      <div class="risk">⚠️ For cyclicals (energy, mining), boom-time EPS spikes make the P/E look cheap and bust-time EPS collapses make it look extreme — the classic "P/E trap." Use cycle-averaged earnings (like CAPE) instead.</div>
    `,
  },
  uv2: {
    html: `
      <p>P/E splits into trailing and forward variants depending on which EPS you use — each with strengths in different situations.</p>
      <ul>
        <li><strong>Trailing P/E (TTM):</strong> actual EPS from the trailing twelve months. Pro: the number is settled fact. Con: backward-looking — it distorts for fast growers and fast decliners alike.</li>
        <li><strong>Forward P/E:</strong> analyst-estimated EPS for the next 12 months (or next fiscal year). Pro: forward-looking. Con: hostage to analyst estimates, which can miss badly. S&P 500 forward P/E historical mean: about <strong>15–18x</strong>.</li>
        <li><strong>NTM P/E:</strong> rolling next-twelve-months estimates — the comparison basis institutions use most.</li>
        <li><strong>Reading the gap:</strong>
          <ul>
            <li>Forward far below trailing → the market expects earnings to grow sharply (acceleration signal)</li>
            <li>Forward far above trailing → the market expects earnings to fall (warning signal)</li>
          </ul>
        </li>
      </ul>
      <div class="highlight">💡 Alongside forward P/E, watch <strong>earnings revisions</strong>: if analysts keep raising estimates, the growing denominator makes the valuation look ever cheaper; persistent cuts do the opposite.</div>
      <div class="risk">⚠️ In earnings season, a guidance cut sends analysts slashing forward EPS — the forward P/E balloons instantly and the stock usually slumps with it. Assess this risk before holding through a report.</div>
          <p class="note-origin">📎 The arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uv3: {
    html: `
      <p>The price-to-book ratio (P/B) measures price against net book assets — best suited to industries whose value is their assets: banks, insurance, real estate.</p>
      <ul>
        <li><strong>Formula:</strong> P/B = price ÷ book value per share</li>
        <li><strong>Book value:</strong> total assets − total liabilities, i.e. shareholders' equity</li>
        <li><strong>Typical reference values (they shift substantially with the cycle — these are historical conventions; as of August 2026 the S&P 500's overall P/B has reached about 6x, far past the old band — check current values in the Damodaran database below):</strong>
          <ul>
            <li>S&P 500 overall: historically <strong>3.5–4.5x</strong> (skewed high by the tech weighting; about 6x at the time of this update)</li>
            <li>Banks: <strong>0.8–1.5x</strong> (below 1x means the market doubts asset quality; large banks averaged about 1.6x in January 2026, slightly above the old band)</li>
            <li>Tech and asset-light firms: <strong>5–20x or higher</strong> (brands, IP, and talent never hit the books)</li>
            <li>REITs: usually near <strong>1–2x</strong></li>
          </ul>
        </li>
        <li><strong>What P/B &lt; 1 means:</strong> price below liquidation value — possibly undervaluation (the classic Graham buy signal), or deteriorating asset quality.</li>
        <li><strong>ROE and P/B:</strong> high-ROE firms deserve high P/B, since their book assets earn more. P/B ÷ ROE ≈ P/E — the three are tied by an identity.</li>
      </ul>
      <div class="highlight">💡 P/B says little about tech: Google's and Apple's core value lives in brands, algorithms, and ecosystems that GAAP barely books, so an inflated P/B does not mean overvaluation. P/B works best where assets are credible and liquid — finance.</div>
      <div class="risk">⚠️ Book value can be bloated by goodwill (acquisition premiums); an impairment makes P/B jump suddenly. For banks, watch the NPL ratio to judge true asset quality.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uv4: {
    html: `
      <p>EV/EBITDA is one of the multiples M&amp;A bankers and institutional analysts use most: comparing enterprise value to earnings before interest, taxes, depreciation, and amortization strips out capital-structure and depreciation effects, making cross-company and cross-industry comparison cleaner.</p>
      <ul>
        <li><strong>Enterprise value (EV):</strong> EV = market cap + interest-bearing debt − cash and equivalents. The total price of buying the whole company, debts included.</li>
        <li><strong>EBITDA:</strong> operating income (EBIT) + depreciation + amortization. Note: <strong>it is not a proxy for cash flow</strong> — Damodaran's MCI 1994 example (EBITDA $4,456M vs. actual FCFF of just $498M) warns that treating EBITDA as cash flow is "multiple magic," because real capital spending still has to be paid.</li>
        <li><strong>Typical reference values:</strong>
          <ul>
            <li>S&P 500 overall: about <strong>12–15x</strong></li>
            <li>Tech SaaS: <strong>20–40x</strong> (growth premium)</li>
            <li>Traditional manufacturing: <strong>6–10x</strong></li>
            <li>Telecom: <strong>5–8x</strong></li>
            <li>Private-equity buyout benchmarks: usually <strong>7–12x</strong></li>
          </ul>
        </li>
        <li><strong>Strengths:</strong> <strong>less affected</strong> by capital structure and comparable across leverage levels (Damodaran's phrasing is "allows comparisons across different financial leverage" — not fully immune, since the EV numerator still reflects tax shields and capital costs); removes D&amp;A; neutralizes tax-rate differences for multinationals. Central to LBO analysis.</li>
      </ul>
      <div class="highlight">💡 In LBO work, PE funds judge purchase price against the target's EV/EBITDA and set exit multiples the same way. Generally, EV/EBITDA below the industry mean can mean undervaluation — or a takeover candidate.</div>
      <div class="risk">⚠️ The EBITDA critique: Warren Buffett has derided EBITDA-based earnings because they ignore CapEx. For asset-heavy industries (airlines, mining), depreciation is a genuine economic cost — prefer EV/EBIT or EV/FCF there.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uv5: {
    html: `
      <p>The price-to-sales ratio (P/S) steps in when P/E fails (persistent losses), making it the key alternative for high-growth companies — widely used across SaaS, biotech, and e-commerce.</p>
      <ul>
        <li><strong>Formula:</strong> P/S = market cap ÷ annual revenue; or EV/Revenue = EV ÷ annual revenue (more common for comparisons)</li>
        <li><strong>Typical reference values:</strong>
          <ul>
            <li>S&P 500 overall: about <strong>2–3x</strong></li>
            <li>High-growth SaaS (ARR growth &gt; 30%): <strong>8–20x</strong></li>
            <li>Mature software firms: <strong>4–8x</strong></li>
            <li>Low-margin retail (groceries etc.): <strong>0.3–0.8x</strong> (careful — "retail" is not monolithic; general retail's industry average was already about 2x as of January 2026)</li>
            <li>At the 2021 bubble peak, some SaaS names hit <strong>50–100x</strong></li>
          </ul>
        </li>
        <li><strong>Precondition:</strong> the company loses money but its gross-margin structure is healthy (SaaS gross margin &gt; 70%), with losses coming from sales and R&amp;D spending rather than a broken business model.</li>
        <li><strong>Pair with the Rule of 40:</strong> the SaaS convention — revenue growth (%) + FCF margin (%) ≥ 40 — supports a higher P/S.</li>
      </ul>
      <div class="highlight">💡 Whether a high P/S is justified comes down to <strong>margins, growth, and risk (the discount rate)</strong> — the textbook derivation actually uses net margin, not gross margin, and ignoring risk is exactly why high-P/S stocks crater when rates rise. A 10x P/S SaaS at 80% gross margin can be more reasonable than a 2x P/S retailer at 10%, because their future profit pools differ completely.</div>
      <div class="risk">⚠️ P/S's greatest danger: it cannot tell "quality losses funding growth" from "a money pit." When rates rose, high-P/S growth stocks got hit first — Zoom's annual P/S compressed from about 67x in 2020 to about 4x by 2023, DocuSign from about 29x in 2020 to about 4x by 2022 (the derating started in 2021, not in a single year). The downside is severe.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions, and the arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uv6: {
    html: `
      <p>The PEG ratio, popularized by Peter Lynch, folds earnings growth into P/E — solving the problem of high-growth companies whose P/E looks expensive but is actually fair.</p>
      <ul>
        <li><strong>Formula:</strong> PEG = P/E ÷ annual EPS growth rate (%)</li>
        <li><strong>Example:</strong> company A at 30x P/E growing EPS 30% → PEG = 1.0; company B at 15x growing 5% → PEG = 3.0. Despite double the P/E, A screens cheaper on PEG.</li>
        <li><strong>Reading it (Lynch's guide):</strong>
          <ul>
            <li>PEG &lt; 1: possibly undervalued — worth digging into</li>
            <li>PEG ≈ 1: fair value</li>
            <li>PEG &gt; 2: clear premium — be very sure the growth can last</li>
          </ul>
        </li>
        <li><strong>Choosing the growth rate:</strong> trailing 3–5 year EPS growth (trailing PEG) or analyst-forecast 3–5 year growth (forward PEG) — the latter more forward-looking but noisier.</li>
        <li><strong>Where it applies:</strong> best for steady growers (10–30%); breaks down for hyper-growth (&gt;50%) or shrinking companies. Lynch leaned on it heavily while running Fidelity's Magellan fund (29% annualized).</li>
      </ul>
      <div class="highlight">💡 PEG marries static valuation (P/E) with dynamic growth — an efficient first screen for "growth at a reasonable price."</div>
      <div class="risk">⚠️ Its limits: growth estimates are highly subjective; it fails for cyclicals (energy, mining); and off a tiny EPS base, inflated growth rates make PEG look absurdly low while meaning nothing. Sustainability of growth is what matters.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uv7: {
    html: `
      <p>Discounted cash flow (DCF) is the most rigorous valuation method in theory. The core idea: a company's intrinsic value equals the sum of all its future free cash flows discounted to today.</p>
      <ul>
        <li><strong>Key inputs:</strong>
          <ul>
            <li><strong>Free cash flow (FCF):</strong> operating cash flow (CFO) − CapEx</li>
            <li><strong>Discount rate (r):</strong> usually WACC — around <strong>8–12%</strong> for a typical company</li>
            <li><strong>Forecast horizon:</strong> usually 5–10 years, then a terminal-value stage</li>
            <li><strong>Perpetual growth rate (g):</strong> for the terminal value, usually <strong>2–3%</strong> (near long-run GDP growth)</li>
          </ul>
        </li>
        <li><strong>The terminal value dominates:</strong> in most DCF models it accounts for 60–80% of total value — the model is acutely sensitive to long-run assumptions.</li>
        <li><strong>Sensitivity analysis:</strong> shifting WACC and perpetual growth by ±1% each can move intrinsic value 30–50% — the DCF's valuation range is very wide.</li>
        <li><strong>Where it fits:</strong> companies with stable, forecastable cash flows (consumer staples, utilities). Not for early-stage loss-makers, deeply uncertain industries, or cyclicals at the bottom of the cycle.</li>
      </ul>
      <div class="highlight">💡 DCF's real value is not the "precise number" but that it <strong>forces you to think about the business's core drivers</strong>: what powers cash-flow growth? How durable is the moat? How efficient is capital allocation? As Warren Buffett put it: better roughly right than precisely wrong.</div>
      <div class="risk">⚠️ The fatal flaw: garbage in, garbage out — small input errors swing the output wildly. Check with the perpetuity formula: cutting the discount rate from 10% to 8% raises the terminal value +25% at g=0, +33% at g=2%, +40% at g=3% — sensitivity scales with the (r−g) gap, and higher growth assumptions make it fiercer. Treat a DCF as a reasonable range, never as precise truth.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uv8: {
    html: `
      <p>Market capitalization and enterprise value (EV) are the two core valuation lenses; telling them apart is the foundation for using EV-based multiples (EV/EBITDA, EV/Revenue).</p>
      <ul>
        <li><strong>Market cap:</strong> price × shares outstanding — the market's price on the <strong>equity</strong> alone, ignoring debt and cash.</li>
        <li><strong>Enterprise value:</strong> EV = market cap + interest-bearing debt + minority interest + preferred stock − cash and equivalents. The actual all-in price of buying the whole company, debts assumed.</li>
        <li><strong>The intuition:</strong>
          <ul>
            <li>Company A: market cap 10 billion, 5 billion cash, no debt → EV = 5 billion (the real price is lower)</li>
            <li>Company B: market cap 10 billion, 8 billion debt, 1 billion cash → EV = 17 billion (the real price is higher)</li>
          </ul>
        </li>
        <li><strong>When to use which:</strong>
          <ul>
            <li>P/E, P/B, and P/S are built on <strong>market cap</strong> — shareholder-level metrics</li>
            <li>EV/EBITDA, EV/EBIT, and EV/Revenue are built on <strong>enterprise value</strong> — capital-structure-neutral, better for cross-company comparison</li>
          </ul>
        </li>
      </ul>
      <div class="highlight">💡 When sizing up an M&amp;A target, EV is the number that matters: the acquirer pays the equity premium and assumes all the debt (or pockets the cash).</div>
      <div class="risk">⚠️ "Interest-bearing debt" needs precision: include short- and long-term borrowings, bonds, and finance leases, but exclude operating liabilities like accounts payable. Analysts define EV slightly differently — confirm the definitions match before comparing.</div>
          <p class="note-origin">📎 Some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uf1: {
    html: `
      <p>The income statement shows a company's operating results over a period — the financial statement investors read most. US companies report it quarterly (10-Q) and annually (10-K).</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Line</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Term</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">What it is</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;"><strong>Revenue</strong></td><td style="padding:0.5rem 0.4rem;">Revenue / Net Sales</td><td style="padding:0.5rem 0.4rem;">Total income from products or services sold</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>Cost of goods sold</strong></td><td style="padding:0.5rem 0.4rem;">COGS</td><td style="padding:0.5rem 0.4rem;">Direct production costs — materials plus labor</td></tr>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>Gross profit</strong></td><td style="padding:0.5rem 0.4rem;">Gross Profit</td><td style="padding:0.5rem 0.4rem;">Revenue − COGS</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>Operating expenses</strong></td><td style="padding:0.5rem 0.4rem;">OpEx (R&D, S&M, G&A)</td><td style="padding:0.5rem 0.4rem;">Research, marketing, and administrative costs</td></tr>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>Operating income</strong></td><td style="padding:0.5rem 0.4rem;">Operating Income / EBIT</td><td style="padding:0.5rem 0.4rem;">Gross profit − OpEx</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>Pre-tax income</strong></td><td style="padding:0.5rem 0.4rem;">EBT</td><td style="padding:0.5rem 0.4rem;">EBIT ± net interest</td></tr>
            <tr><td style="padding:0.5rem 0.4rem; color:#e8c84a;"><strong>Net income</strong></td><td style="padding:0.5rem 0.4rem;">Net Income</td><td style="padding:0.5rem 0.4rem;">EBT − income tax</td></tr>
          </tbody>
        </table>
      </div>
      <div class="highlight">💡 When reading an income statement, focus on <strong>YoY revenue growth</strong> and <strong>margin trends</strong>, not single-quarter absolutes. Consecutive gross-margin declines <strong>may</strong> signal pricing or cost trouble — but can also come from mix shifts or a deliberate trade of margin for share; context decides. Industry ranges (Damodaran, January 2026): software gross margin about 72%, semiconductors about 59%, but computer hardware only about 38% — "tech companies run 60–80%" holds only for software and semis; retail's 25–40% roughly checks out. Compare across industries with care; this is a snapshot as of writing.</div>
      <a class="source-link" href="https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/margin.html" target="_blank">→ Damodaran: margins by industry (NYU Stern)</a>
      <div class="risk">⚠️ GAAP net income can include one-off items (impairments, litigation settlements) — read it against the non-GAAP figures and management's earnings-call commentary.</div>
    `,
  },
  uf2: {
    html: `
      <p>The balance sheet shows a company's financial position on a given date. The core identity: <strong>assets = liabilities + equity</strong>.</p>
      <ul>
        <li><strong>Assets:</strong>
          <ul>
            <li>Current assets: cash and equivalents, accounts receivable (AR), inventory</li>
            <li>Non-current assets: property, plant &amp; equipment (PP&amp;E), goodwill, intangibles</li>
          </ul>
        </li>
        <li><strong>Liabilities:</strong>
          <ul>
            <li>Current liabilities: accounts payable (AP), short-term borrowings, deferred revenue</li>
            <li>Long-term liabilities: long-term debt, lease liabilities</li>
          </ul>
        </li>
        <li><strong>Equity:</strong> common stock and retained earnings</li>
      </ul>
      <p><strong>What to watch:</strong></p>
      <ul>
        <li><strong>Cash position:</strong> tech leaders like Apple and Microsoft hold tens of billions — a safety cushion and buyback fuel</li>
        <li><strong>Goodwill bloat:</strong> heavy acquirers carry outsized goodwill; a future impairment slams net income</li>
        <li><strong>Days sales outstanding (DSO):</strong> a steadily climbing DSO means weakening collections or channel stuffing — a red flag</li>
        <li><strong>Deferred revenue:</strong> for SaaS, growing deferred revenue is future recognizable income in the bank — a positive signal</li>
      </ul>
      <div class="highlight">💡 Healthy signs: cash &gt; total debt (net cash), current ratio &gt; 1.5, goodwill under 30% of total assets. Apple's long-running cash-plus-buyback stance is an extreme but effective capital-allocation strategy.</div>
      <div class="risk">⚠️ If goodwill exceeds 100% of shareholders' equity, book value can evaporate the moment the core business turns — many banks hit technical insolvency this way after the 2008 crisis.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uf3: {
    html: `
      <p>The cash flow statement is the hardest of the three statements to fake, because cash movements are records of actual transactions. Even a profitable-looking income statement cannot save a company whose cash flow stays negative.</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Section</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Abbr.</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Contents</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;"><strong>Operating cash flow</strong></td><td style="padding:0.5rem 0.4rem;">OCF</td><td style="padding:0.5rem 0.4rem;">Cash from the core business: net income + non-cash charges (depreciation, SBC) ± working-capital changes</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>Investing cash flow</strong></td><td style="padding:0.5rem 0.4rem;">ICF</td><td style="padding:0.5rem 0.4rem;">CapEx, acquisitions, asset sales — usually negative</td></tr>
            <tr><td style="padding:0.5rem 0.4rem;"><strong>Financing cash flow</strong></td><td style="padding:0.5rem 0.4rem;">FCF</td><td style="padding:0.5rem 0.4rem;">Borrowing, repayment, share issuance, buybacks, dividends</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>OCF vs. net income:</strong> in a healthy company OCF runs at or above net income over time. OCF persistently below net income means receivables or inventory are eating the cash — poor earnings quality.</li>
        <li><strong>The SBC problem:</strong> tech companies add large stock-based compensation back into OCF; watch whether it dilutes shareholders, and check the conservative "FCF − SBC" view.</li>
        <li><strong>CapEx intensity:</strong> the old "asset-heavy vs. asset-light" contrast has been overturned by AI data centers — Damodaran's January 2026 net CapEx/revenue: software at a striking 17.8% (internet software 26%), semiconductors 4.4%, airlines 3.6%. "SaaS runs 1–3%" is pre-AI common knowledge; date-stamp it when citing.</li>
      </ul>
      <div class="highlight">💡 The formula investors love: free cash flow = OCF − CapEx. Only companies with positive, growing FCF have real freedom to buy back shares, pay dividends, or fund growth.</div>
      <div class="risk">⚠️ Trap: some companies park maintenance spending under investing activities to flatter OCF, even though it is required to keep the business running. Distinguish growth CapEx from maintenance CapEx as you read.</div>
    `,
  },
  uf4: {
    html: `
      <p>Free cash flow (FCF) is the cash a company can actually deploy after capital spending. Harder to manipulate than EPS, it is the core measure of "real earning power" — what Buffett calls owner earnings.</p>
      <p><strong>Main formulas:</strong></p>
      <ul>
        <li>Basic: <strong>FCF = operating cash flow − capital expenditures</strong></li>
        <li>FCFF (firm-level) = EBIT × (1 − tax rate) + D&amp;A − ΔWorking Capital − CapEx</li>
      </ul>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Dimension</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Metric</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Healthy benchmark</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;">FCF margin</td><td style="padding:0.5rem 0.4rem;">FCF / Revenue</td><td style="padding:0.5rem 0.4rem;">Tech &gt; 20% is excellent; manufacturing &gt; 8% is decent</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;">P/FCF valuation</td><td style="padding:0.5rem 0.4rem;">Market cap / annualized FCF</td><td style="padding:0.5rem 0.4rem;">&lt; 25x fairly reasonable; &gt; 50x needs high growth behind it</td></tr>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;">FCF yield</td><td style="padding:0.5rem 0.4rem;">FCF / Market cap</td><td style="padding:0.5rem 0.4rem;">&gt; 4% suggests an attractive valuation</td></tr>
            <tr><td style="padding:0.5rem 0.4rem;">FCF conversion</td><td style="padding:0.5rem 0.4rem;">FCF / Net income</td><td style="padding:0.5rem 0.4rem;">&gt; 80% marks high earnings quality</td></tr>
          </tbody>
        </table>
      </div>
      <div class="highlight">💡 In practice: Apple's FCF margin has run 24–28% for years (about 23.7% in FY2025); Microsoft once hit 33% but fell to about 25% in FY2025 as AI CapEx surged (US$64.4 billion) — even the giants' FCF margins get squeezed by investment cycles, so date your citations. Many "profitable-looking" businesses, by contrast, run negative FCF for years.</div>
      <div class="risk">⚠️ Note: SBC added back to OCF inflates FCF. Some analysts use "FCF − SBC" as the conservative view — especially apt for SBC-heavy growth stocks (early Palantir, Snowflake).</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uf5: {
    html: `
      <p>Earnings per share (EPS) is the most quoted number in the financial press, but US companies report both <strong>GAAP EPS</strong> and <strong>non-GAAP (adjusted) EPS</strong> — and the gap can be enormous.</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Aspect</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">GAAP EPS</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Non-GAAP EPS</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;">Basis</td><td style="padding:0.5rem 0.4rem;">US GAAP accounting standards</td><td style="padding:0.5rem 0.4rem;">Management-defined, with adjustments disclosed</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;">Common exclusions</td><td style="padding:0.5rem 0.4rem;">Everything included</td><td style="padding:0.5rem 0.4rem;">SBC, restructuring, acquisition amortization, one-offs</td></tr>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;">The number is usually</td><td style="padding:0.5rem 0.4rem;">Lower (conservative)</td><td style="padding:0.5rem 0.4rem;">Higher (optimistic)</td></tr>
            <tr><td style="padding:0.5rem 0.4rem;">Regulation</td><td style="padding:0.5rem 0.4rem;">SEC-mandated</td><td style="padding:0.5rem 0.4rem;">Optional, but adjustments must be itemized</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>Basic EPS:</strong> net income / weighted-average basic shares</li>
        <li><strong>Diluted EPS:</strong> net income / weighted-average diluted shares (counting options, convertibles, and other potential dilution)</li>
        <li><strong>Beat/miss dynamics:</strong> the market trades on performance <em>relative to expectations</em>. Beat by $0.05 with guidance cut → the stock often falls; miss by $0.02 with guidance raised → it often rises.</li>
      </ul>
      <div class="highlight">💡 A quick test: when non-GAAP EPS towers over GAAP EPS, interrogate the SBC share ("50% higher" as a threshold is a personal rule of thumb, not an authoritative line). And examples expire: Salesforce and Palantir were the standard "non-GAAP profitable, GAAP loss-making" teaching cases, but both have been GAAP-profitable for years (Salesforce's GAAP net income positive in each of the last five fiscal years; Palantir profitable every quarter since Q4 2022) — the SBC story today is dilution, not a profit-loss flip.</div>
      <div class="risk">⚠️ Trap: a "one-time charge" that shows up every year isn't one-time. Dressing results in non-GAAP terms is legal — judging whether the adjustments are reasonable is your job.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uf6: {
    html: `
      <p>The earnings call is the quarterly public session where the CEO and CFO explain results — anyone can listen live or read the transcript free afterward.</p>
      <p><strong>Structure:</strong></p>
      <ul>
        <li><strong>Opening remarks:</strong> the CEO covers highlights, the CFO the financial detail — about 15–20 minutes</li>
        <li><strong>Q&amp;A session:</strong> institutional analysts ask questions for 30–45 minutes — the meatiest part</li>
      </ul>
      <p><strong>What institutional analysts probe:</strong></p>
      <ul>
        <li><strong>Guidance:</strong> next-quarter and full-year revenue, EPS, and margin guidance — often moves the stock more than the quarter itself</li>
        <li><strong>Demand environment:</strong> is customer demand softening? Any deal push-outs?</li>
        <li><strong>Margin trajectory:</strong> where are gross and operating margins heading, and when does scale kick in?</li>
        <li><strong>Capital allocation:</strong> is cash going to buybacks, dividends, or M&amp;A?</li>
        <li><strong>Competition:</strong> how is the company answering rivals — AI entrants included?</li>
      </ul>
      <p><strong>Tone signals worth noting:</strong></p>
      <ul>
        <li>Confident and specific → positive signal</li>
        <li>Hedged language ("we expect... broadly...") → rising uncertainty</li>
        <li>The CFO volunteering "macro headwinds" → possibly previewing a guidance cut</li>
        <li>Analyst questions getting deflected → what is management avoiding?</li>
      </ul>
      <div class="highlight">💡 Free transcripts: Seeking Alpha, The Motley Fool, and company IR sites. Focus on the Q&amp;A and tune out the PR-polished opening — the stock's reaction is the market's honest vote.</div>
      <div class="risk">⚠️ Management naturally tilts positive, but the stock's reaction is the market's honest vote. A beat with cautious guidance, or worry surfacing in analyst questions, can still send the stock down after the call.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions, and the arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uf7: {
    html: `
      <p>Fraud and deterioration usually leave tracks. These are the red flags every investor should know — patterns that showed up before Enron, Wirecard, and Luckin Coffee blew up.</p>
      <p><strong>Income-statement red flags:</strong></p>
      <ul>
        <li><strong>Revenue growing while cash flow shrinks:</strong> possibly aggressive revenue recognition or ballooning receivables (channel stuffing)</li>
        <li><strong>A steadily widening GAAP vs. non-GAAP gap:</strong> more "one-time charges" every year</li>
        <li><strong>Gross margin suddenly improving with no good explanation:</strong> possibly a change in cost classification</li>
      </ul>
      <p><strong>Balance-sheet red flags:</strong></p>
      <ul>
        <li><strong>Receivables growing far faster than revenue:</strong> soaring DSO — possibly fabricated orders</li>
        <li><strong>Inventory piling up abnormally:</strong> products not selling while the company won't admit it — a big writedown may follow</li>
        <li><strong>Frequent related-party transactions:</strong> a breeding ground for tunneling</li>
      </ul>
      <p><strong>Cash-flow red flags:</strong></p>
      <ul>
        <li><strong>OCF persistently below net income:</strong> poor earnings quality — profits are not becoming cash</li>
        <li><strong>FCF persistently negative with no clear story:</strong> "burning cash for growth" needs an explicit payback timeline</li>
        <li><strong>Financing cash flow persistently large and positive:</strong> the company runs on share issuance and debt, not on its business</li>
      </ul>
      <p><strong>Other warnings:</strong></p>
      <ul>
        <li>Auditor changes, or a qualified opinion</li>
        <li>A CFO departing abruptly with no credible succession plan</li>
        <li>Heavy insider selling — note: the academic test (Lakonishok &amp; Lee 2001, RFS) found insider <strong>sales have no predictive power</strong> (mostly diversification or 10b5-1 preset plans); the information is in <strong>purchases</strong>. Treating sales as a warning sign is market habit, not an empirical finding</li>
        <li>Delayed filings (the company must file NT 10-K / NT 10-Q with the SEC)</li>
      </ul>
      <div class="highlight">💡 Tools: read the raw 10-K / 10-Q on SEC EDGAR; short-seller reports (Muddy Waters; Hindenburg Research disbanded in January 2025 but its archive remains readable) carry an agenda yet often point at genuine anomalies.</div>
      <div class="risk">⚠️ Principle: one red flag proves nothing, but several at once compound the risk sharply. When in doubt, trim first and watch — re-evaluate after management explains clearly.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions, and some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk1: {
    html: `
      <p>Return on equity (ROE) measures how much profit a company makes on shareholders' money — one of Buffett's favorite metrics. But the raw number misleads easily; <strong>DuPont analysis</strong> exposes its nature.</p>
      <p><strong>The three-factor decomposition: ROE = net margin × asset turnover × financial leverage</strong></p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Factor</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Formula</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Meaning</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;"><strong>Net margin</strong></td><td style="padding:0.5rem 0.4rem;">Net Income / Revenue</td><td style="padding:0.5rem 0.4rem;">Profit per dollar of revenue (earning efficiency)</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>Asset turnover</strong></td><td style="padding:0.5rem 0.4rem;">Revenue / Total Assets</td><td style="padding:0.5rem 0.4rem;">Revenue per dollar of assets (operating efficiency)</td></tr>
            <tr><td style="padding:0.5rem 0.4rem;"><strong>Financial leverage</strong></td><td style="padding:0.5rem 0.4rem;">Total Assets / Equity</td><td style="padding:0.5rem 0.4rem;">How much leverage amplifies the return (capital structure)</td></tr>
          </tbody>
        </table>
      </div>
      <p>The decomposition reveals where a high ROE comes from:</p>
      <ul>
        <li>From <strong>high margins</strong> (Apple, luxury goods) → a competitive moat, the most durable kind</li>
        <li>From <strong>high turnover</strong> (Walmart) → the thin-margin, high-volume model</li>
        <li>From <strong>high leverage</strong> (banks, some retail) → needs a risk assessment</li>
      </ul>
      <p><strong>Convention:</strong> ROE &gt; 15% is generally considered excellent; tech leaders (Apple, Microsoft) often exceed 30%.</p>
      <div class="highlight">💡 The screen commonly attributed to Buffett — "10 straight years of ROE &gt; 15% with low leverage" — <strong>is not Buffett's own words</strong>. Berkshire's annual-report acquisition criteria say only "good returns on equity while employing little or no debt," with no percentage and no year count; the numbers are secondhand interpretation. Coca-Cola, a long-time Berkshire holding, has run ROE around 38–43% in recent years.</div>
      <a class="source-link" href="https://www.berkshirehathaway.com/letters/letters.html" target="_blank">→ Berkshire Hathaway shareholder letters (the acquisition criteria in the original)</a>
      <div class="risk">⚠️ Note: heavy buybacks shrink equity (the denominator) and inflate ROE. Apple's sky-high ROE partly reflects years of buybacks driving book equity toward zero — read it alongside ROIC.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk2: {
    html: `
      <p>ROE bends easily to capital structure; ROA and ROIC offer more neutral views of how efficiently capital is actually deployed.</p>
      <ul>
        <li><strong>ROA (return on assets):</strong> net income / total assets. Strips out financing differences, but gets distorted by non-core assets (big cash piles, investments).</li>
        <li><strong>ROIC (return on invested capital):</strong> NOPAT / invested capital
          <ul>
            <li>NOPAT = EBIT × (1 − tax rate)</li>
            <li>Invested capital = equity + interest-bearing debt − cash</li>
            <li>The truest read on core-business capital efficiency — harder to compute, most meaningful</li>
          </ul>
        </li>
      </ul>
      <p><strong>ROIC vs. WACC — the comparison that matters most:</strong></p>
      <ul>
        <li>ROIC &gt; WACC → the company <strong>creates value</strong>: every dollar of capital earns an excess return</li>
        <li>ROIC &lt; WACC → the company <strong>destroys value</strong>: even with book profits, shareholders are losing</li>
        <li>WACC floats with industry and rates — Damodaran's January 2026 measurements: the all-market average is just 6.96%, software about 9.3–10.7%, semiconductors about 10.6%. "8–12% generally, 10–15% for tech" is a high-rate-era band; applying it today sets the discount rate too high and systematically undervalues</li>
      </ul>
      <p><strong>Convention:</strong> ROIC &gt; 15% marks a quality business; &gt; 20% marks an elite moat (Microsoft and Visa run above 25% long term). Asset-light platforms hold a natural ROIC advantage.</p>
      <div class="highlight">💡 McKinsey's research finds long-run stock performance correlates far more with ROIC than with EPS growth. Finding businesses that sustain high ROIC is the heart of value investing.</div>
      <div class="risk">⚠️ ROA's limit: cash-rich companies (Berkshire Hathaway) look worse than they are, since cash counts as assets but earns no operating return. ROIC excludes cash and fixes this — better for judging the business itself.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk3: {
    html: `
      <p>Profit margins measure how well revenue turns into profit. The three margins reflect different layers of cost control — compare <strong>against industry peers</strong> and <strong>along the trend</strong> to draw meaningful conclusions.</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Metric</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Formula</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">What it captures</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>Gross margin</strong></td><td style="padding:0.5rem 0.4rem;">(Revenue − COGS) / Revenue</td><td style="padding:0.5rem 0.4rem;">The product's own profitability — pricing power and cost structure</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>Operating margin</strong></td><td style="padding:0.5rem 0.4rem;">Operating Income / Revenue</td><td style="padding:0.5rem 0.4rem;">Real operating efficiency after R&D, marketing, and admin</td></tr>
            <tr><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>Net margin</strong></td><td style="padding:0.5rem 0.4rem;">Net Income / Revenue</td><td style="padding:0.5rem 0.4rem;">The final take after interest and taxes</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Typical margins by industry:</strong></p>
      <ul>
        <li><strong>Software / SaaS:</strong> gross margin 65–85% (Damodaran January 2026 industry average about 72% — consistent); the industry's aggregate operating margin is about 41% — but the giants drag that up and the median is far lower, so "15–35% (at maturity)" remains a reasonable band for a typical company; state the basis when citing</li>
        <li><strong>Semiconductors (fabless):</strong> gross margin 50–70%; NVIDIA has topped 70% in recent years</li>
        <li><strong>E-commerce / retail:</strong> gross margin 20–40%, net margin 2–5%</li>
        <li><strong>Airlines:</strong> gross margin only 15–25%, acutely sensitive to fuel and rates</li>
      </ul>
      <p>How the three relate: gross margin sets the ceiling, and each layer down subtracts more cost. <strong>High gross but low operating margin</strong> = weak expense control; <strong>good operating but poor net margin</strong> = usually heavy interest or tax problems.</p>
      <div class="highlight">💡 The core read: the direction of gross margin matters more than the level. Three straight quarters of decline mean weakening pricing power or rising input costs — find out why.</div>
      <div class="risk">⚠️ Trap: cutting R&amp;D lifts near-term margins while sacrificing long-term competitiveness. Track the absolute spend of each expense line, not just the ratios.</div>
          <p class="note-origin">📎 The arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk4: {
    html: `
      <p>Debt management is central to judging financial risk — and in a rate-hike environment, pressure on leveraged companies amplifies sharply. Assess it across <strong>debt structure, net debt level, and interest-paying ability</strong>.</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Metric</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Formula</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Healthy reference</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;"><strong>D/E ratio</strong></td><td style="padding:0.5rem 0.4rem;">Total Debt / Equity</td><td style="padding:0.5rem 0.4rem;">&lt; 1.0 for most companies; financials are the exception</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>Net debt</strong></td><td style="padding:0.5rem 0.4rem;">Total Debt − Cash</td><td style="padding:0.5rem 0.4rem;">Negative (net cash) means cash exceeds debt — extremely safe</td></tr>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;"><strong>Net Debt/EBITDA</strong></td><td style="padding:0.5rem 0.4rem;">Net Debt / EBITDA</td><td style="padding:0.5rem 0.4rem;">&lt; 2.0x solid; &gt; 4.0x elevated risk</td></tr>
            <tr><td style="padding:0.5rem 0.4rem;"><strong>Interest coverage</strong></td><td style="padding:0.5rem 0.4rem;">EBIT / Interest Expense</td><td style="padding:0.5rem 0.4rem;">&gt; 3x acceptable; &gt; 5x solid; &lt; 1.5x dangerous</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>Fixed vs. floating:</strong> in a hiking cycle, floating-rate debt raises interest costs immediately</li>
        <li><strong>Maturity profile:</strong> a near-term debt maturity wall brings refinancing risk</li>
        <li><strong>Industry differences:</strong> asset-heavy sectors (telecom, utilities, REITs) run naturally high debt — D/E above 2 can be normal; an asset-light tech company above 1 deserves scrutiny.</li>
      </ul>
      <div class="highlight">💡 A quality signal: net-cash companies (cash &gt; total debt) have superb downside defense and room for counter-cyclical M&amp;A. Meta and Alphabet both qualify.</div>
      <div class="risk">⚠️ Warning: in the 2022–2023 hiking cycle, companies above 5x Net Debt/EBITDA (including some LBO targets) faced severe strain — forced asset sales and even bankruptcy filings.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions, the arguments reflect common market claims, and some statements have no reliable source found — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk5: {
    html: `
      <p>Liquidity ratios measure whether a company can pay debts coming due within roughly 12 months — the first line of defense against a <strong>liquidity crisis</strong>.</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Metric</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Formula</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Notes</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;"><strong>Current ratio</strong></td><td style="padding:0.5rem 0.4rem;">Current assets / Current liabilities</td><td style="padding:0.5rem 0.4rem;">Short-term coverage including inventory; &gt; 1.5 usually safe</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>Quick ratio</strong></td><td style="padding:0.5rem 0.4rem;">(Current assets − Inventory) / Current liabilities</td><td style="padding:0.5rem 0.4rem;">Excludes less-liquid inventory; &gt; 1.0 is sturdier</td></tr>
            <tr><td style="padding:0.5rem 0.4rem;"><strong>Cash ratio</strong></td><td style="padding:0.5rem 0.4rem;">(Cash + Short-term investments) / Current liabilities</td><td style="padding:0.5rem 0.4rem;">The most conservative — only immediately deployable cash counts</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>Manufacturing / retail:</strong> inventory takes time to become cash — the quick ratio tells you more than the current ratio</li>
        <li><strong>SaaS / tech:</strong> inventory is near zero; check whether deferred revenue sits in current liabilities (it requires no cash outlay, so it understates true liquidity)</li>
        <li><strong>Special cases:</strong> Amazon and Walmart often run current ratios below 1 because they collect fast and pay slow (negative cash conversion cycle) — a business-model strength, not a risk.</li>
      </ul>
      <div class="highlight">💡 Practical tip: for retailers and manufacturers, track days inventory outstanding (DIO) too. Slowing inventory turns plus a falling current ratio is a double warning that the product itself may be losing.</div>
      <div class="risk">⚠️ Trap: a current ratio above 2 that is mostly inventory — with writedown risk (say, a semiconductor glut) — is far less liquid than the number suggests.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions, and the arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk6: {
    html: `
      <p>Traditional financial metrics often explain little about fast-growing SaaS and tech companies. These four SaaS metrics are the institutional toolkit for the category.</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Metric</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Full name</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Definition and healthy benchmark</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem; color:#ba68c8;"><strong>ARR</strong></td><td style="padding:0.5rem 0.4rem;">Annual Recurring Revenue</td><td style="padding:0.5rem 0.4rem;">Annualized subscription revenue — the scale of the recurring business; YoY growth &gt; 30% is excellent</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem; color:#ba68c8;"><strong>NRR / NDR</strong></td><td style="padding:0.5rem 0.4rem;">Net Revenue Retention</td><td style="padding:0.5rem 0.4rem;">Revenue retained from existing customers (upsell included); &gt; 120% superb, &gt; 110% good, &lt; 100% churning</td></tr>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem; color:#ba68c8;"><strong>CAC</strong></td><td style="padding:0.5rem 0.4rem;">Customer Acquisition Cost</td><td style="padding:0.5rem 0.4rem;">Average cost to win one new customer (S&M included)</td></tr>
            <tr><td style="padding:0.5rem 0.4rem; color:#ba68c8;"><strong>LTV</strong></td><td style="padding:0.5rem 0.4rem;">Customer Lifetime Value</td><td style="padding:0.5rem 0.4rem;">Gross profit a customer contributes over their lifetime; LTV/CAC &gt; 3x healthy, &gt; 5x excellent</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Other common SaaS metrics:</strong></p>
      <ul>
        <li><strong>Churn rate:</strong> annual churn &lt; 5% is healthy; enterprise SaaS usually &lt; 3%</li>
        <li><strong>Magic Number:</strong> = (this quarter's recurring revenue − last quarter's) × 4 ÷ <strong>the prior quarter's</strong> S&M spend (the ×4 annualizes the single-quarter increment; the common "new ARR × 4" formulation is wrong — ARR is already annualized, so multiplying by 4 annualizes twice and inflates the figure roughly fourfold). &gt; 0.75 marks good sales efficiency — a VC-circle convention (generally traced to a 2005 Scale Venture Partners analysis), not an authoritative definition</li>
        <li><strong>CAC payback period:</strong> months to recoup acquisition cost; &lt; 18 healthy, &lt; 12 excellent</li>
        <li><strong>RPO (Remaining Performance Obligations):</strong> contracted revenue not yet recognized — forward visibility</li>
      </ul>
      <div class="highlight">💡 Why NRR &gt; 100% matters: even with zero new customers, expanding existing subscriptions alone grows revenue — real net-expansion power. But the numbers decay: Snowflake ran above 130% for years, yet its official FY2026 figure is down to 125% — date any benchmark NRR you cite, and note Snowflake's is a consumption-based measure not directly comparable with subscription-ARR definitions.</div>
      <div class="risk">⚠️ Note: ARR and NRR are self-disclosed non-GAAP metrics and definitions vary. Check each company's investor-relations page for the calculation basis before comparing across companies.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions, and the arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk7: {
    html: `
      <p>The Rule of 40 is the SaaS world's favorite one-glance health check. The logic: growth and profitability trade off, and when the two sum to 40% or more, the company is in healthy shape.</p>
      <p><strong>Formula: revenue growth rate (%) + profit margin (%) ≥ 40%</strong></p>
      <p>The profit margin can be measured several ways: FCF margin (strictest), operating margin (GAAP), or EBITDA margin (loosest).</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Scenario</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Growth</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">FCF margin</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Score</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;">Early hyper-growth SaaS</td><td style="padding:0.5rem 0.4rem;">60%</td><td style="padding:0.5rem 0.4rem;">−15%</td><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>45% ✓</strong></td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;">Mature and profitable</td><td style="padding:0.5rem 0.4rem;">15%</td><td style="padding:0.5rem 0.4rem;">28%</td><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>43% ✓</strong></td></tr>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;">Troubled company</td><td style="padding:0.5rem 0.4rem;">20%</td><td style="padding:0.5rem 0.4rem;">−25%</td><td style="padding:0.5rem 0.4rem; color:#e06060;"><strong>−5% ✗</strong></td></tr>
            <tr><td style="padding:0.5rem 0.4rem;">Elite (Rule of 60+)</td><td style="padding:0.5rem 0.4rem;">40%</td><td style="padding:0.5rem 0.4rem;">30%</td><td style="padding:0.5rem 0.4rem; color:#81c784;"><strong>70% ✓✓</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p>Rule of 40 scores correlate loosely with EV/Revenue multiples, but <strong>the absolute multiples swing hard with the cycle</strong>: ">50% earns 15–20x" was 2021 bubble-peak pricing — the BVP Nasdaq Emerging Cloud Index's constituents averaged only about 8.2x revenue as of August 2026. Judging cheap or dear by a fixed multiple misfires systematically; check the index's current level. Also note provenance: the Rule of 40 comes from Brad Feld's 2015 post (he credits a late-stage investor), the original scoping it to "SaaS companies at or above $50 million in revenue," and with Profit measured variously as EBITDA, operating income, or FCF — scores are not comparable across data sources.</p>
      <a class="source-link" href="https://feld.com/archives/2015/02/rule-40-healthy-saas-company/" target="_blank">→ Brad Feld (2015), The Rule of 40% For a Healthy SaaS Company</a>
      <a class="source-link" href="https://cloudindex.bvp.com/" target="_blank">→ BVP Nasdaq Emerging Cloud Index (current revenue multiples)</a>
      <div class="highlight">💡 Recent shift: since 2022 the market has favored "quality of earnings," making the FCF version of the rule weightier than the EBITDA version. Some investors even screen with "Rule of 40 (FCF) × EV/Revenue" as a quick valuation sanity check.</div>
      <div class="risk">⚠️ Limits: the Rule of 40 is a screen, not analysis. A company can lift its score short term by cutting R&amp;D or sales spend at the cost of long-term competitiveness. Read it with NRR and ARR growth.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
  uk8: {
    html: `
      <p>For manufacturing, retail, and industrials, <strong>operating-efficiency metrics</strong> reveal more about real competitiveness than margins do. Three of them combine into the <strong>cash conversion cycle (CCC)</strong>.</p>
      <div style="overflow-x:auto; margin: 0.8rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; font-family:'Space Mono',monospace;">
          <thead><tr style="border-bottom:1px solid #3a3d50;">
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Metric</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Formula</th>
            <th style="padding:0.5rem 0.4rem; text-align:left; color:var(--muted);">Lower is better?</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #252836;"><td style="padding:0.5rem 0.4rem;"><strong>DIO (days inventory outstanding)</strong></td><td style="padding:0.5rem 0.4rem;">Inventory / COGS × 365</td><td style="padding:0.5rem 0.4rem;">Yes (but too low signals supply risk)</td></tr>
            <tr style="border-bottom:1px solid #252836; background:rgba(255,255,255,0.02);"><td style="padding:0.5rem 0.4rem;"><strong>DSO (days sales outstanding)</strong></td><td style="padding:0.5rem 0.4rem;">Accounts receivable / Revenue × 365</td><td style="padding:0.5rem 0.4rem;">Yes (faster collections)</td></tr>
            <tr><td style="padding:0.5rem 0.4rem;"><strong>DPO (days payable outstanding)</strong></td><td style="padding:0.5rem 0.4rem;">Accounts payable / COGS × 365</td><td style="padding:0.5rem 0.4rem;">No (higher means paying later, keeping cash)</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Cash conversion cycle (CCC) = DIO + DSO − DPO</strong></p>
      <p>The lower the CCC — even negative — the faster cash cycles through. A <strong>negative CCC</strong> is a formidable business-model moat: collect first, pay later, hold no stock.</p>
      <ul>
        <li><strong>Amazon (e-commerce + AWS):</strong> CCC long negative (−20 to −30 days) — customers pay first, suppliers wait</li>
        <li><strong>Walmart:</strong> CCC around −10 to 5 days — a powerful model</li>
        <li><strong>Typical manufacturing:</strong> CCC around 40–80 days, demanding heavy working capital</li>
        <li><strong>Semiconductor equipment makers:</strong> DIO can reach 120–180 days on long production cycles</li>
      </ul>
      <p><strong>Inventory turnover = COGS / average inventory</strong>: healthy retail runs 6–12x a year; autos 8–10x; luxury 2–4x (scarcity by design).</p>
      <div class="highlight">💡 The macro read: DIO is a leading cycle indicator. When semiconductor and electronics makers' DIO climbs sharply, demand decline and price cuts usually follow (as in the 2022 semiconductor inventory digestion).</div>
      <div class="risk">⚠️ Note: DPO past 120 days can damage supplier relationships — real financial strain for smaller vendors. Big buyers who squeeze too hard have faced retaliatory supply cuts in tight markets, as happened during the 2021 chip shortage.</div>
          <p class="note-origin">📎 Numeric thresholds and ranges here are industry conventions, and the arguments reflect common market claims — compiled from June 2026 online commentary; not empirical research. Verify before relying on it.</p>
    `,
  },
};
