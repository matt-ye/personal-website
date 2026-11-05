/*
 * 給家人的投資課 Week 32：因子投資——Fama-French 與風格的科學 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-32-factor-investing.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * JS 算出的數值後綴「萬」「元」翻成空字串，單位改掛在標籤上（如 NT$10k、NT$）。
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
  '給家人的投資課 · Q3 操盤手季 · Week 32':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 32',
  '因子投資——Fama-French 與風格的科學':
    'Factor Investing: Fama-French and the Science of Styles',
  'W30 拆出「選股效果」、W31 定好座標——本週給你最後一副眼鏡：你引以為傲的選股超額，會不會只是':
    'W30 split out the "selection effect" and W31 set the coordinates — this week gives you the last pair of glasses: could the stock-picking excess return you\'re so proud of just be ',
  '系統性地買了某種風格':
    'a systematic purchase of some style',
  '（便宜的、小的、會漲的）？':
    ' (cheap, small, rising)?',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 15、31 週':
    'Prerequisites: Weeks 15, 31',
  '52 週 · 第 32 週':
    '52 weeks · Week 32',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '因子是學術界對「報酬從哪來」六十年研究的結晶，也是看穿各種 smart beta 行銷話術的解碼器——把你手工做的判斷，變成可量產的規則。':
    'Factors are the distilled result of sixty years of academic research into "where returns come from," and also a decoder for seeing through all kinds of smart beta marketing — they turn the judgment you make by hand into rules that can be mass-produced.',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週「鋸短的尺」與櫃子稽查的結果——你查的那檔基金是真主動還是櫃子裡的指數？':
    'Think back to last week\'s "sawed-off ruler" and the closet-index inspection. Was the fund you checked truly active, or an index in the closet?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一位經理人十年年化贏大盤 2%。用 Fama-French 三因子一跑，最常見的結果是？':
    'A manager has beaten the market by 2% a year, annualized, for ten years. Run through the Fama-French three-factor model, what is the most common result?',
  'α 還是 2%，真本事':
    'α is still 2% — real skill',
  'α 接近 0，超額被因子認領':
    'α is close to 0 — the excess return is claimed by the factors',
  'α 變得更大':
    'α gets even bigger',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 從 CAPM 到三因子：市場解釋不完的部分':
    '1. From CAPM to three factors: what the market can\'t explain',
  'W15 的 MPT 之後，學界用':
    'After W15\'s MPT, academia summed things up with ',
  '總結：個股期望報酬只由「對市場的敏感度（β）」決定——一個因子解釋一切。但實證不斷打臉：有兩群股票':
    ': a stock\'s expected return is determined only by its "sensitivity to the market (β)" — one factor explains everything. But the evidence kept contradicting it: two groups of stocks ',
  '長期系統性地':
    'have, systematically and over the long run,',
  '跑贏 CAPM 的預測——':
    ' beaten CAPM\'s predictions — ',
  '小型股':
    'small-cap stocks',
  '（規模效應）與':
    ' (the size effect) and ',
  '便宜股':
    'cheap stocks',
  '（帳面市值比高，即低 P/B——價值效應）。':
    ' (a high book-to-market ratio, i.e. low P/B — the value effect).',
  'Fama 與 French（1992／1993）把它們正式收編為因子，成為':
    'Fama and French (1992/1993) formally adopted them as factors, forming the ',
  '三因子模型':
    'three-factor model',
  '：市場因子（股市整體超額報酬）':
    ': the market factor (the stock market\'s overall excess return)',
  '（Small Minus Big）：小型股組合 − 大型股組合':
    ' (Small Minus Big): small-cap portfolio − large-cap portfolio',
  '（High Minus Low）：高帳面市值比（價值股）− 低帳面市值比（成長股）':
    ' (High Minus Low): high book-to-market (value stocks) − low book-to-market (growth stocks)',
  '讀法':
    'How to read it',
  '：一檔基金的報酬先讓三個因子「認領」，剩下的才是 α（真本事）。許多「傳奇選股人」被三因子一跑，α 縮水成雜訊——他們的超額其實是長期持有小型價值股的系統性曝險，而這個曝險你可以用低成本因子 ETF 買到。':
    ': a fund\'s return is first "claimed" by the three factors, and what\'s left over is α (real skill). Run through the three factors, many "legendary stock pickers" see their α shrink to noise — their excess return was really systematic exposure from holding small-cap value stocks over the long run, and that exposure you can buy with low-cost factor ETFs.',
  '這就是本週對你的意義：把 W30 的「選股效果」再拆一層。':
    'This is what this week means for you: split W30\'s "selection effect" one layer further.',
  '因子拆帳台：你的超額是本事，還是風格？':
    'Factor attribution table: is your excess return skill, or style?',
  '輸入一檔基金的年超額報酬（相對無風險利率）與三個因子曝險。因子年溢酬用教學假設：MKT 6%、SMB 2%、HML 3%。':
    'Enter a fund\'s annual excess return (over the risk-free rate) and its three factor exposures. The annual factor premiums use teaching assumptions: MKT 6%, SMB 2%, HML 3%.',
  '傳奇選股人':
    'Legendary stock picker',
  '真有 α 的人':
    'Someone with real α',
  '指數基金':
    'Index fund',
  '基金年超額報酬（R − Rf）':
    'Fund\'s annual excess return (R − Rf)',
  '市場曝險 βM':
    'Market exposure βM',
  '規模曝險 βS（正＝偏小型）':
    'Size exposure βS (positive = small-cap tilt)',
  '價值曝險 βV（正＝偏便宜）':
    'Value exposure βV (positive = cheap tilt)',
  '市場認領':
    'Claimed by the market',
  '規模＋價值認領':
    'Claimed by size + value',
  'α（剩下的）':
    'α (what\'s left)',
  '真本事':
    'Real skill',
  '拉動滑桿或按預設。':
    'Drag a slider or press a preset.',
  '2. 主要因子家族與其邏輯':
    '2. The main factor families and their logic',
  '因子':
    'Factor',
  '定義（做多 − 做空）':
    'Definition (long − short)',
  '風險補償 vs 行為錯價':
    'Risk compensation vs. behavioral mispricing',
  '規模 SMB':
    'Size (SMB)',
  '小型 − 大型':
    'Small − large',
  '小公司資訊少、流動性差、倒閉險高（風險）／被研究員忽略（錯價）':
    'Small companies have little information, poor liquidity, and a high risk of failure (risk) / are ignored by analysts (mispricing)',
  '價值 HML':
    'Value (HML)',
  '便宜 − 昂貴':
    'Cheap − expensive',
  '價值股常是困境公司（風險）／市場過度外推壞消息（錯價，W23 近因）':
    'Value stocks are often distressed companies (risk) / the market over-extrapolates bad news (mispricing, the recency bias from W23)',
  '動能 MOM':
    'Momentum (MOM)',
  '近 12 月贏家 − 輸家':
    'Past-12-month winners − losers',
  '幾乎純行為解釋：反應不足＋羊群追漲——學術上最尷尬也最強韌的因子':
    'Almost purely a behavioral explanation: underreaction plus herd-chasing — academically the most awkward and also the most resilient factor',
  '品質 QMJ':
    'Quality (QMJ)',
  '高獲利穩健 − 低品質':
    'Highly profitable and sound − low quality',
  '市場低估「無聊的好公司」（W22 護城河的量化影子）':
    'The market undervalues "boring good companies" (the quantitative shadow of W22\'s moat)',
  '低波動':
    'Low volatility',
  '低 β − 高 β':
    'Low β − high β',
  '槓桿受限的投資人追逐高 β 彩券股，壓低其未來報酬':
    'Leverage-constrained investors chase high-β lottery stocks, pushing down their future returns',
  '與你既有課程的對位':
    'How it maps onto what you\'ve already learned',
  '：價值因子＝W19「便宜」的系統化；品質因子＝W9 ROIC 與 W22 護城河的系統化；動能＝W23 行為偏誤的鏡像。因子把手工判斷變成可量產的規則——這是它的力量，也是它的天花板（規則讀不了年報附註）。':
    ': the value factor = a systematized version of W19\'s "cheap"; the quality factor = a systematized version of W9\'s ROIC and W22\'s moat; momentum = the mirror image of W23\'s behavioral biases. Factors turn hand-made judgment into rules that can be mass-produced — that is their strength and also their ceiling (rules can\'t read the footnotes of an annual report).',
  '3. 因子的殘酷面：飄移的十年':
    '3. The brutal side of factors: the lost decade',
  '因子溢酬是':
    'A factor premium is a ',
  '長期平均':
    'long-run average',
  '，不是穩定年金。價值因子在 2007–2020 經歷漫長的失落期——成長股狂潮下 HML 累積深度回撤，長到大量價值基金清盤、教授寫論文問「價值死了嗎」——然後 2021–2022 強力回歸。':
    ', not a steady annuity. The value factor went through a long lost period from 2007 to 2020 — during the growth-stock frenzy HML suffered a deep cumulative drawdown, so long that many value funds shut down and professors wrote papers asking "is value dead?" — and then in 2021–2022 it came roaring back.',
  '如果因子年年正報酬，套利者早把它買到消失。溢酬能長存，恰恰因為持有它痛苦到多數人拿不住——痛苦本身就是門票錢。':
    'If a factor earned a positive return every year, arbitrageurs would have bought it until it vanished. A premium can last precisely because holding it is so painful that most people can\'t stick with it — the pain itself is the price of admission.',
  '實務結論：買因子＝簽一張「可能落後大盤十年」的心理契約。沒讀過這段歷史就買 smart beta 的人，幾乎注定在最低點棄守（W23 全家出動）。':
    'Practical conclusion: buying a factor = signing a psychological contract that you "may trail the market for ten years." Anyone who buys smart beta without having read this history is almost certain to give up at the lowest point (W23 with the whole family).',
  '4. Smart Beta 解碼器':
    '4. The smart beta decoder',
  '市面上的「策略型 ETF」——高股息、低波動、品質、動能、ESG 加權——本質幾乎都是':
    'The "strategy ETFs" on the market — high dividend, low volatility, quality, momentum, ESG-weighted — are almost all, in essence, ',
  '因子曝險的包裝':
    'packaging for factor exposure',
  '。三步解碼：①它其實在買哪個因子？②費用比純市值型貴多少？③我拿得住它的失落期嗎？':
    '. Decode them in three steps: (1) Which factor is it actually buying? (2) How much more does it cost than a plain cap-weighted fund? (3) Can I hold on through its lost period?',
  '台灣視角':
    'The Taiwan angle',
  '：高股息 ETF 熱潮是全球罕見的現象級規模。用因子眼鏡看：它給的是價值＋低波動曝險與「現金流的心理帳戶」（W23），代價是市值型的長期總報酬期望與較高費用。不是不能買，是要知道自己買了什麼——並回到 W31：跟正確的含息基準比。':
    ': the high-dividend ETF craze is a phenomenon of rare scale worldwide. Through the factor glasses: it gives you value + low-volatility exposure and a "mental account for cash flow" (W23), at the cost of a cap-weighted fund\'s long-run total-return expectation and higher fees. It\'s not that you can\'t buy one — you should know what you\'ve bought — and go back to W31: compare against the right dividend-inclusive benchmark.',
  '解碼四檔 smart beta':
    'Decoding four smart beta funds',
  '每檔產品，主要在買哪一種因子曝險？':
    'For each product, which kind of factor exposure is it mainly buying?',
  '第 1 / 4 題':
    'Question 1 / 4',
  '價值＋低波動':
    'Value + low volatility',
  '動能':
    'Momentum',
  '品質':
    'Quality',
  '大型股（市值）':
    'Large caps (cap-weighted)',
  '目前答對 0 題':
    'Correct so far: 0',
  '5. 常見誤解闢謠':
    '5. Common misconceptions, debunked',
  '「因子被發表就失效了。」':
    '"Once a factor is published, it stops working."',
  '部分溢酬確實在發表後縮小（套利），但規模、價值、動能在樣本外與多國市場仍存活——縮小 ≠ 消失。倒是「新發現」的花俏因子多數是資料探勘：幾百次回測總會挖到金線。':
    'Some premiums really did shrink after publication (arbitrage), but size, value, and momentum still survive out of sample and across many countries\' markets — shrinking ≠ disappearing. It is the fancy "newly discovered" factors that are mostly data mining: run a few hundred backtests and you\'ll always dig up some gold.',
  '「我信價值投資，所以買價值因子 ETF 就好。」':
    '"I believe in value investing, so I\'ll just buy a value factor ETF."',
  '因子價值（機械式便宜）≠ Graham／Buffett 價值（便宜於內在價值，W19–21）。前者買「統計上的便宜組」，後者逐家判斷「為什麼便宜、是否錯殺」——互補而非等價。':
    'Factor value (mechanical cheapness) ≠ Graham / Buffett value (cheap relative to intrinsic value, W19–21). The former buys a "statistically cheap bucket"; the latter judges company by company "why is it cheap, and has it been wrongly punished?" — complementary, not equivalent.',
  '「多因子組合＝穩賺。」':
    '"A multi-factor portfolio means a sure win."',
  '因子間低相關確實平滑（W15 邏輯），但 smart beta 全家也可能同時落後市值型好幾年——分散的是因子風險，不是落後風險。':
    'Low correlation between factors does smooth things out (the W15 logic), but the whole smart beta family can also trail the cap-weighted market together for years — what you diversify is factor risk, not the risk of lagging.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '業界最會寫因子科普的機構＋原始資料':
    'The institution best at writing popular explanations of factors, plus the raw data',
  '50 分鐘':
    '50 min',
  'AQR：因子投資入門＋價值因子失落期':
    'AQR: introduction to factor investing + the value factor\'s lost period',
  '搜 factor investing 入門篇，再加一篇談價值失落期的（如 "Is (Systematic) Value Investing Dead?"）。':
    'Search for an introductory piece on factor investing, plus one about value\'s lost period (such as "Is (Systematic) Value Investing Dead?").',
  '30 分鐘':
    '30 min',
  '實際下載 "Fama/French 3 Factors" 月資料——練習的原料。先看懂欄位：Mkt-RF、SMB、HML、RF。':
    'Actually download the monthly "Fama/French 3 Factors" data — the raw material for the exercise. First understand the columns: Mkt-RF, SMB, HML, RF. ',
  '選讀':
    'Optional',
  '摘要與結論——原典的口氣值得感受一次。':
    'The abstract and conclusions — the tone of the original classic is worth feeling once.',
  '10 分鐘':
    '10 min',
  '回顧 W16、W30':
    'Revisit W16 and W30',
  '指數化的算術與選股效果——本週是兩者之間的橋。':
    'The arithmetic of indexing and the selection effect — this week is the bridge between the two.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '親手摸因子資料':
    'Get your hands on factor data',
  '任務 A｜失落期考古（30 分鐘）':
    'Task A | Lost-period archaeology (30 minutes)',
  '把 HML 月報酬累乘成淨值曲線':
    'Compound HML\'s monthly returns into an equity curve',
  '找出 HML 的':
    'Find HML\'s ',
  '最深回撤區間':
    'deepest drawdown period',
  '（起訖年月、深度）——親眼看那個著名的失落期':
    ' (start and end month, depth) — see that famous lost period with your own eyes',
  '同法看 SMB：規模因子近幾十年的溢酬還明顯嗎？':
    'Look at SMB the same way: is the size factor\'s premium over recent decades still noticeable?',
  '寫 150 字：「如果我從＿年開始持有價值因子，要等幾年才回正？我拿得住嗎？」（對照 W14 的心理承受）':
    'Write 150 words: "If I had started holding the value factor in year ___, how many years would I have waited to get back to positive? Could I have held on?" (compare with the psychological tolerance in W14)',
  '任務 B｜幫自己的組合戴眼鏡（20 分鐘）':
    'Task B | Put glasses on your own portfolio (20 minutes)',
  '把模擬組合的股票部位按大／小型、便宜／昂貴粗分類——有沒有':
    'Roughly classify the simulated portfolio\'s stock positions by large / small and cheap / expensive — is there an ',
  '不自覺的因子傾斜':
    'unintended factor tilt',
  '？（台股散戶常見小型＋高股息傾斜。）寫兩行：這個傾斜是刻意的嗎？':
    '? (Taiwan retail investors commonly tilt toward small caps plus high dividends.) Write two lines: is this tilt deliberate?',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  'Ken French 的資料是':
    'Ken French\'s data is in ',
  '百分比':
    'percent',
  '單位（1.23 代表 1.23%），累乘前要先除以 100——忘了這步，淨值曲線會在幾個月內爆到天文數字。':
    ' units (1.23 means 1.23%), so divide by 100 before compounding — skip this step and the equity curve will blow up to astronomical numbers within a few months.',
  'HML 淨值曲線畫出、失落期找到（有起訖與深度）':
    'The HML equity curve is plotted and the lost period found (with start, end, and depth)',
  '自己組合的因子傾斜檢視完成':
    'The factor tilt review of your own portfolio is done',
  '能說出三因子模型每個符號的意思':
    'You can say what each symbol in the three-factor model means',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼「因子溢酬的存在」反而需要它經歷痛苦的失落期？':
    'Why does the very existence of a factor premium require it to go through painful lost periods?',
  '→ 若因子穩定年年賺，理性資金會蜂擁買入，把價格推高到溢酬消失（W16 算術的因子版）。溢酬能長存的前提是':
    '→ If a factor earned steadily every year, rational money would pile in and push prices up until the premium disappeared (the factor version of W16\'s arithmetic). The premium can last only if ',
  '持有體驗夠痛苦':
    'holding it is painful enough',
  '，讓多數資金拿不住——痛苦本身就是門票錢，也解釋了為什麼它能在發表後存活。':
    ' that most money can\'t hold on — the pain itself is the price of admission, which also explains why it survived after publication.',
  '經理人 10 年年化贏大盤 2%，三因子回歸後 α≈0 且 HML 曝險高——怎麼評價？該付主動費嗎？':
    'A manager beats the market by 2% a year over 10 years; after a three-factor regression α ≈ 0 and HML exposure is high — how do you judge it? Should you pay the active fee?',
  '→ 他的超額是':
    '→ Their excess return was ',
  '價值因子曝險的搬運':
    'value-factor exposure carried over',
  '，不是選股 α。這個曝險如今可用低費用因子 ETF 取得，付 1.5% 主動費等於用私廚價買量販包。他不是騙子（確實提供了曝險與紀律），但':
    ', not stock-picking α. That exposure can now be had through low-fee factor ETFs, and paying a 1.5% active fee is like paying private-chef prices for a bulk-store pack. They\'re not a fraud (they did deliver exposure and discipline), but ',
  '定價錯了':
    'it\'s priced wrong',
  '——這正是三因子模型對基金業最大的殺傷力。':
    ' — and that is exactly the three-factor model\'s greatest destructive power against the fund industry.',
  '高股息 ETF 用因子語言拆解，大約是什麼曝險的組合？':
    'Break a high-dividend ETF down in factor language — roughly what mix of exposures is it?',
  '→ 大約＝':
    '→ Roughly = ',
  '價值傾斜＋低波動傾斜＋（台灣特色）金融與傳產超配':
    'a value tilt + a low-volatility tilt + (a Taiwan specialty) an overweight in financials and traditional industries',
  '，再加一層「現金流心理帳戶」的行為包裝；代價是放棄部分成長股曝險與市值型的長期總報酬期望，費用通常也較高。':
    ', plus a behavioral wrapper of the "cash-flow mental account"; the cost is giving up some growth-stock exposure and the long-run total-return expectation of cap-weighted funds, and fees are usually higher too.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '水果攤的規律':
    'The pattern at the fruit stand',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（醜蘋果）':
    'Opening (the ugly apples)',
  '「菜市場有些規律：醜蘋果比漂亮蘋果便宜，但甜度常常一樣——長期買醜蘋果的人，同樣的錢吃到更多蘋果。股市也有這種規律：':
    '"The market has some patterns: ugly apples are cheaper than pretty ones, but they\'re often just as sweet — people who buy ugly apples over the long run get more apples for the same money. The stock market has a pattern like this too: ',
  '長期而言，便宜的、小的、最近在漲的這幾類股票，平均多賺一點':
    'over the long run, cheap stocks, small stocks, and stocks that have recently been rising earn a bit more on average',
  '——學者花六十年證明了這件事，還因此拿了諾貝爾獎。」':
    ' — scholars spent sixty years proving it, and even won a Nobel Prize for it."',
  '核心觀念（但是）':
    'The core idea (the "but")',
  '「但這個『平均多賺』有個殘酷條件：':
    '"But this \'earning a bit more on average\' comes with a brutal condition: ',
  '中間可能連續十年落後':
    'you may trail for ten years straight in the middle',
  '。撐不過去的人，剛好在最便宜的時候放棄。所以這種投資法賺的其實是『耐心財』——賺的是別人拿不住的錢。」':
    '. The people who can\'t make it through give up at exactly the cheapest moment. So what this style of investing really earns is an \'impatience premium\' — you earn the money other people can\'t hold on to."',
  '互動（高股息解碼）':
    'Interaction (decoding the high-dividend ETF)',
  '「台灣人超愛的高股息 ETF，用今天的眼鏡看，它其實是在買哪種蘋果？」':
    '"The high-dividend ETFs that Taiwanese people love so much — through today\'s glasses, which kind of apple is it actually buying?"',
  '引導：偏便宜、偏穩、會固定給現金的那種——「知道自己買了什麼，比買什麼更重要」。':
    'Guide them: the kind that\'s on the cheap side, on the steady side, and pays cash regularly — "knowing what you bought matters more than what you bought."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那到底要不要買因子 ETF？」':
    '"So should we buy factor ETFs or not?"',
  '「我們家的核心還是整個市場（W16 的預設）；因子是進階選配——買之前先過一個測試：你能接受它連輸大盤五年嗎？不能就別碰。」':
    '"Our family\'s core is still the whole market (W16\'s default); factors are an advanced option — before buying, pass one test: can you accept it trailing the market for five years in a row? If not, don\'t touch it."',
  '「諾貝爾獎的方法還會輸？」':
    '"A Nobel Prize method can still lose?"',
  '「獎是頒給『解釋過去』的嚴謹，不是保證未來——這正是投資跟物理不一樣的地方。」':
    '"The prize is for the rigor of \'explaining the past,\' not a guarantee about the future — and that is exactly where investing differs from physics."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能寫出三因子模型並解釋 SMB／HML 的建構方式':
    'You can write out the three-factor model and explain how SMB / HML are constructed',
  'HML 失落期考古完成（親手摸過資料）':
    'The HML lost-period archaeology is done (you\'ve handled the data yourself)',
  '能用因子語言解碼一檔 smart beta ETF':
    'You can decode a smart beta ETF in factor language',
  '分享環節完成，記錄卡住的點':
    'Teaching session done; note where you got stuck',
  '回填 curriculum/01-overview.md 第 32 週進度欄':
    'Fill in the Week 32 progress column in curriculum/01-overview.md',
  '下週預告 · Week 33：衍生性商品與避險':
    'Next week\'s preview · Week 33: Derivatives and hedging',
  '——期貨與選擇權的「保險」用法：不是為了賭，是為了給組合買保單。':
    ' — using futures and options as "insurance": not for gambling, but for buying a policy on your portfolio.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：基準與追蹤誤差':
    'Previous week: Benchmarks and tracking error',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle dark/light theme',
  '猜一個答案':
    'Pick a guess',
  '基金年超額報酬':
    'Fund\'s annual excess return',
  '市場曝險':
    'Market exposure',
  '規模曝險':
    'Size exposure',
  '價值曝險':
    'Value exposure',
  '答對了——許多「傳奇選股人」被三因子一跑，超額幾乎全被規模與價值因子認領，α 縮成雜訊。他們確實賺到了，但賺的是長期持有小型價值股的風格溢酬——那個曝險今天用低費用因子 ETF 就買得到。':
    'Correct — run through the three factors, many "legendary stock pickers" see their excess return almost entirely claimed by the size and value factors, and their α shrinks to noise. They really did make money, but what they earned was the style premium from holding small-cap value stocks over the long run — and today that exposure can be bought with a low-fee factor ETF.',
  '最常見的結果其實是 α 接近 0：超額幾乎全被規模與價值因子認領。他們確實賺到了，但賺的是長期持有小型價值股的風格溢酬——那個曝險今天用低費用因子 ETF 就買得到。下面的拆帳台讓你親手看。':
    'The most common result is actually α close to 0: the excess return is almost entirely claimed by the size and value factors. They really did make money, but what they earned was the style premium from holding small-cap value stocks over the long run — and today that exposure can be bought with a low-fee factor ETF. The attribution table below lets you see it for yourself.',
  '<b>贏大盤':
    '<b>Beat the market by',
  '%，但 α 幾乎是零。</b>超額被風格因子認領——這是可以用低費用因子 ETF 買到的曝險，不值得付主動管理費。':
    '%, but α is almost zero.</b> The excess return is claimed by the style factors — this is exposure you can buy with a low-fee factor ETF, and it is not worth paying an active management fee for.',
  '<b>扣掉三個因子之後還剩':
    '<b>After subtracting the three factors, there is still',
  '% 的 α。</b>這才是因子解釋不了的部分——但一定要看夠長的期間（W38），並確認 α 大於他收的費用。':
    '% of α.</b> That is the part the factors cannot explain — but always look at a long enough period (W38), and confirm that α is bigger than the fees he charges.',
  '<b>α 是負的。</b>連承擔的風格曝險都沒被充分補償——選股不只沒加分，還在扣分。':
    '<b>α is negative.</b> Even the style exposure taken on wasn\'t adequately compensated — stock picking not only added nothing, it subtracted value.',
  '<b>表現跟市場曝險差不多。</b>沒有明顯的風格傾斜也沒有 α——這是指數基金應該長的樣子。':
    '<b>Performs about the same as its market exposure.</b> No obvious style tilt and no α — this is what an index fund should look like.',
  '台灣某高股息 ETF：挑殖利率最高、波動較低的成分股，季配息。':
    'A Taiwan high-dividend ETF: picks the highest-yielding, lower-volatility constituents and pays dividends quarterly.',
  '高殖利率的股票通常估值偏低（價值），再加上挑低波動——是價值＋低波動的混血，外加「現金流心理帳戶」的包裝。':
    'High-yield stocks usually have low valuations (value), and picking for low volatility on top of that makes this a hybrid of value + low volatility, plus the wrapper of a "mental account for cash flow."',
  '某 ETF 每季把過去 12 個月漲最多的股票換進來。':
    'An ETF that, every quarter, swaps in the stocks that rose the most over the past 12 months.',
  '買近期贏家、賣近期輸家——教科書級的動能因子。學術上最強韌，也最常在反轉時急跌。':
    'Buy recent winners, sell recent losers — a textbook momentum factor. Academically the most resilient, and also the one that most often drops sharply at reversals.',
  '某 ETF 挑 ROE 高、負債低、獲利穩定的公司。':
    'An ETF that picks companies with high ROE, low debt, and stable earnings.',
  '高獲利＋穩健＝品質因子（QMJ）——W9 的 ROIC 與 W22 護城河的量化影子。':
    'High profitability + soundness = the quality factor (QMJ) — the quantitative shadow of W9\'s ROIC and W22\'s moat.',
  '某「特選權值」ETF：挑市值前 30 大、行業領先的公司。':
    'A "selected heavyweights" ETF: picks the top 30 companies by market cap that lead their industries.',
  '名字聽起來很主動，本質是大型股曝險——跟市值型指數高度重疊。先查費用，再想它比 0050 多給了你什麼。':
    'The name sounds very active, but in essence it is large-cap exposure — it overlaps heavily with the cap-weighted index. Check the fees first, then think about what it gives you that 0050 doesn\'t.',
  '第':
    'Question',
  '題':
    '',
  '重新開始——目前答對 0 題':
    'Starting over — correct so far: 0',
  '答對——':
    'Correct — ',
  '再想想——':
    'Think again — ',
  '主要是':
    'It\'s mainly ',
  '目前答對':
    'Correct so far:',
  '下一題 →':
    'Next question →',
  '再玩一次 ↺':
    'Play again ↺',
  '✓ 因子眼鏡戴上了——下週學怎麼給組合買保單。':
    '✓ Factor glasses on — next week we learn how to buy an insurance policy for the portfolio.',
};
