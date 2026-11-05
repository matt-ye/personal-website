/*
 * 給家人的投資課 Week 44：股利政策與庫藏股——發還是留？ — 英文對照表。
 * 來源頁：src/data/course-weeks/week-44-dividend-policy.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 模型中的「元」不加幣別（買回價格／金額標籤改掛 (NT$)，JS 後綴「元」為空字串）；散文中的具體股利（發 2 元）換成 NT$2。
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
  '給家人的投資課 · Q4 財務長季 · Week 44':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 44',
  '股利政策與庫藏股——發還是留？':
    'Dividend policy and share buybacks — pay it out or keep it?',
  '三大決策的最後一個：賺來的錢，發還是留？台灣投資人對這題最有感——高配息文化全球罕見——也最容易被感性帶偏。本週的判準只有一條，而且你早就會了：':
    'The last of the three big decisions: when you\'ve earned money, do you pay it out or keep it? Taiwanese investors feel this one most strongly — a high-payout culture that is rare anywhere in the world — and are also the most easily led astray by emotion. This week\'s test is just one, and you already know it: ',
  '留下的錢，賺得到高於 WACC 的報酬嗎？':
    'Will the money you keep earn a return higher than WACC?',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 10、40、42 週':
    'Prerequisites: Weeks 10, 40, 42',
  '52 週 · 第 44 週':
    '52 weeks · Week 44',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'W9 的 ROIC、W42 的 WACC 在此合流。CFO 用它決定配發率；投資人用它判斷「高殖利率」是禮物還是警訊。':
    'W9\'s ROIC and W42\'s WACC come together here. The CFO uses them to set the payout ratio; the investor uses them to judge whether a "high dividend yield" is a gift or a warning sign.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的家庭利息保障倍數——月收入是月房貸的幾倍？':
    'Looking back at last week\'s family interest coverage ratio — how many times is monthly income the monthly mortgage payment?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '台積電只把約三成獲利發成股利，七成留著蓋廠。如果有一天它宣布改發九成，你該怎麼想？':
    'TSMC pays out only about 30% of its earnings as dividends and keeps 70% to build fabs. If one day it announced it would pay out 90%, what would you think?',
  '太好了，領更多現金':
    'Great, I get more cash',
  '要緊張：可能是沒地方投了':
    'Be nervous: maybe there\'s nowhere left to invest',
  '沒差，反正是同一家公司':
    'No difference — it\'s the same company anyway',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 股利的判準：一條決策樹':
    '1. The test for dividends: one decision tree',
  'CFO 面前的保留盈餘，正確的流向順序（Buffett 的資本配置論，W24、W40 的落地版）：':
    'The correct order of flow for the retained earnings in front of the CFO (Buffett\'s capital allocation thesis, the applied version of W24 and W40):',
  '公司賺到錢':
    'The company earns money',
  '內部有 ROIC 高於 WACC 的投資機會嗎？':
    'Does it have internal investments with ROIC above WACC?',
  '有':
    'Yes',
  '→ 留下來投（台積電模式：低配發率＋高再投資報酬）':
    '→ Keep the money and invest it (the TSMC model: low payout ratio + high return on reinvestment)',
  '沒有':
    'No',
  '→ 還給股東。':
    '→ Give it back to shareholders.',
  '用什麼方式還？':
    'How to give it back?',
  '現金股利（承諾性強、稅務即時）':
    'Cash dividends (a strong commitment, taxed immediately)',
  '庫藏股買回（彈性大，而且只在股價低於內在價值時才划算）':
    'Share buybacks (flexible, and worth it only when the price is below intrinsic value)',
  '核心恆等式':
    'The core identity',
  '（W46 預告）：':
    ' (a preview of W46): ',
  '可持續成長率 ＝ ROE ×（1 − 配發率）':
    'Sustainable growth rate = ROE × (1 − payout ratio)',
  '。ROE 15%、配發 60% → 不增資、不加槓桿下，公司最快每年長':
    '. With ROE of 15% and a 60% payout ratio → with no new equity and no added leverage, the company can grow at most ',
  '。配發率是成長與回饋的水龍頭——這條式子把「發多少」和「長多快」鎖在一起。':
    ' a year. The payout ratio is the tap between growth and giving back — this formula locks "how much to pay out" and "how fast to grow" together.',
  '果樹模擬器：發還是留':
    'Fruit tree simulator: pay out or keep?',
  '公司淨值 100，每年賺 ROE。留下的錢以 ROE 再投資；發出來的股利，股東自己再投資只賺得到 WACC（市場要求報酬）。10 年後，股東總財富＝公司淨值＋累積的股利。':
    'The company\'s book value is 100, and it earns ROE every year. Money kept is reinvested at ROE; dividends paid out can only earn WACC (the market\'s required return) when shareholders reinvest them themselves. After 10 years, total shareholder wealth = the company\'s book value + accumulated dividends.',
  'ROE 15%・配發 60%':
    'ROE 15% · payout 60%',
  'ROE 15%・全部留下':
    'ROE 15% · keep everything',
  'ROE 5%・全部留下':
    'ROE 5% · keep everything',
  'ROE 5%・全部發掉':
    'ROE 5% · pay everything out',
  'ROE（留下的錢賺多少）':
    'ROE (what the retained money earns)',
  'WACC（股東自己能賺多少）':
    'WACC (what shareholders can earn themselves)',
  '配發率':
    'Payout ratio',
  '股利稅率':
    'Dividend tax rate',
  '可持續成長率':
    'Sustainable growth rate',
  'ROE ×（1 − 配發率）':
    'ROE × (1 − payout ratio)',
  '10 年後公司淨值':
    'Book value after 10 years',
  '留下來的果樹':
    'The orchard you kept',
  '累積股利（含再投資）':
    'Accumulated dividends (with reinvestment)',
  '吃掉的果子':
    'The fruit you ate',
  '股東總財富':
    'Total shareholder wealth',
  '兩者合計':
    'Sum of both',
  '2. MM 又來了：股利無關論與三個現實偏離':
    '2. MM again: the dividend irrelevance theorem and three real-world departures',
  'MM 的孿生定理：完美市場中，':
    'MM\'s twin theorem: in a perfect market, ',
  '股利政策也不影響公司價值':
    'dividend policy doesn\'t affect firm value either',
  '。發 2 元股利，除息日股價掉 2 元（W10 學過的除息機制），股東總財富不變——只是左口袋（股價）換右口袋（現金）。但現實有三個偏離：':
    '. Pay a NT$2 dividend, and on the ex-dividend date the share price drops NT$2 (the ex-dividend mechanism you learned in W10); shareholders\' total wealth is unchanged — just the left pocket (share price) swapping into the right pocket (cash). But the real world departs from this in three ways:',
  '稅':
    'Tax',
  '：股利的課稅時點與稅率不同於資本利得。台灣的股利可併入所得或分離課稅 28%，還有二代健保補充保費；證券交易所得目前停徵——':
    ': dividends are taxed at a different time and rate than capital gains. In Taiwan, dividends can be added to ordinary income or taxed separately at 28%, plus the supplementary health insurance premium; gains on securities trading are currently exempt — ',
  '留在公司內複利 vs 發出來被課一刀':
    'compounding inside the company vs being cut by the taxman when paid out',
  '，稅務上常是留者勝（W50 詳算；上面模擬器的稅率滑桿可以先試）':
    ', and on tax grounds keeping often wins (W50 works it out in detail; try the tax-rate slider in the simulator above first)',
  '訊號':
    'Signal',
  '：管理層用股利「說話」。調升股利＝對未來現金流的公開承諾，不敢輕易調回，否則市場重懲——所以股利政策黏性極強，「穩定股利」本身成為品質訊號':
    ': management "speaks" through dividends. Raising the dividend = a public commitment on future cash flow, one that can\'t easily be reversed or the market punishes it hard — so dividend policy is extremely sticky, and a "stable dividend" is itself a quality signal',
  '客群效應':
    'Clientele effect',
  '：退休族偏好現金流、成長型投資人偏好再投資。公司的政策會吸引對應的股東群，':
    ': retirees prefer cash flow, growth investors prefer reinvestment. A company\'s policy attracts the matching group of shareholders, so ',
  '改變政策等於換股東':
    'changing the policy means changing the shareholders',
  '，成本高昂':
    ', which is costly',
  '3. 庫藏股：另一種還錢方式，與它的 EPS 魔術':
    '3. Share buybacks: another way to give money back, and their EPS magic',
  '公司用現金買自家股票註銷 → 股數變少。':
    'The company uses cash to buy its own shares and cancels them → fewer shares outstanding. ',
  'EPS 魔術':
    'EPS magic',
  '：淨利 100、股數 100 → EPS 1.00；買回 10 股 → EPS ＝ 100 ÷ 90 ＝':
    ': net income 100, shares 100 → EPS 1.00; buy back 10 shares → EPS = 100 ÷ 90 = ',
  '。獲利能力一分未變，EPS 憑空漲一成——W5 的 EPS 操縱警告、W40「不是極大化 EPS」，在此合流。':
    '. Earning power hasn\'t changed one bit, yet EPS rises 10% out of thin air — W5\'s warning about EPS manipulation and W40\'s "don\'t maximise EPS" come together here.',
  '庫藏股照妖鏡':
    'Buyback truth-teller',
  '公司淨利 100、股數 100、每股內在價值 10 元（總值 1,000）。拿 100 元現金買回自家股票——買在什麼價位，決定留下來的股東變富還是變窮。':
    'A company has net income of 100, 100 shares, and an intrinsic value of 10 per share (1,000 in total). It spends 100 in cash buying back its own shares — the price it buys at decides whether the remaining shareholders get richer or poorer.',
  '買在 8 元（便宜）':
    'Buy at 8 (cheap)',
  '買在 10 元（合理）':
    'Buy at 10 (fair)',
  '買在 15 元（昂貴）':
    'Buy at 15 (expensive)',
  '買回價格':
    'Buyback price (NT$)',
  '10 元':
    '10',
  '買回金額':
    'Buyback amount (NT$)',
  '100 元':
    '100',
  '買回股數':
    'Shares bought back',
  '股':
    'shares',
  '新 EPS':
    'New EPS',
  '原本 1.00':
    'Was 1.00',
  '每股內在價值':
    'Intrinsic value per share',
  '原本 10.00':
    'Was 10.00',
  '現金股利':
    'Cash dividend',
  '庫藏股':
    'Share buyback',
  '承諾性':
    'Commitment',
  '高（黏性；調降是重大負訊號）':
    'High (sticky; cutting it is a major negative signal)',
  '低（可隨時停，彈性工具）':
    'Low (can stop any time; a flexible tool)',
  '稅務':
    'Tax',
  '立即課稅':
    'Taxed immediately',
  '不賣的股東不課稅（等於自選時點）':
    'Shareholders who don\'t sell aren\'t taxed (they choose the timing)',
  '價值判準':
    'Value test',
  '中性':
    'Neutral',
  '只有股價低於內在價值時，買回才創造價值':
    'A buyback creates value only when the share price is below intrinsic value',
  'Buffett 的兩條件':
    'Buffett\'s two conditions',
  '（1984、2011 年致股東信）：買回只該在①公司留有充足營運資金後、②':
    ' (from his 1984 and 2011 shareholder letters): buy back shares only after (1) the company has kept enough working capital and (2) ',
  '股價顯著低於保守估計的內在價值':
    'the share price is well below a conservative estimate of intrinsic value',
  '時進行。實證的殘酷對照：企業整體的買回時機紀錄很差——牛市高點大買（現金多、股價貴）、熊市低點停手（現金緊、股價便宜），與價值原則完全相反。':
    '. The empirical contrast is harsh: companies as a whole have a poor record on buyback timing — buying heavily at bull-market highs (lots of cash, expensive shares) and stopping at bear-market lows (tight cash, cheap shares), the exact opposite of the value principle. ',
  '一家公司的買回紀錄對照其後股價，是檢驗管理層資本配置紀律的照妖鏡':
    'A company\'s buyback record set against the share price that followed is the truth-teller for testing management\'s capital allocation discipline',
  '（W41 事後查核的姊妹篇）。':
    ' (a sister exercise to W41\'s after-the-fact audit).',
  '4. 台灣的高配息文化：兩面讀':
    '4. Taiwan\'s high-dividend culture: read it both ways',
  '台灣上市公司的平均配發率長期偏高，成因包括：稅制歷史（兩稅合一時代的遺產）、散戶對「現金流」的偏好（W23 心理帳戶——股利感覺是「收入」，賣股感覺是「動老本」，儘管財務上等價），以及高股息 ETF 的巨大需求回頭形塑公司行為。':
    'The average payout ratio of Taiwan-listed companies has long been high. The causes include: tax history (a legacy of the imputation-credit era), retail investors\' preference for "cash flow" (the W23 mental accounts — a dividend feels like "income," selling shares feels like "dipping into the principal," though they\'re equivalent financially), and the huge demand for high-dividend ETFs feeding back into company behaviour.',
  'CFO 視角':
    'The CFO\'s view',
  '：高配發是雙面刃——迎合股東偏好、支撐股價；但成長期公司高配發＝一邊發錢一邊增資，左手發、右手要回來，還各付一次成本與稅':
    ': a high payout is a double-edged sword — it caters to shareholder preferences and supports the share price; but a growth-stage company with a high payout is paying out money with one hand while raising capital with the other: given with the left hand, asked back with the right, with the cost and the tax paid once each',
  '投資人視角':
    'The investor\'s view',
  '：殖利率高低不是重點，':
    ': the level of the dividend yield isn\'t the point; ',
  '「配出來的錢，是不是公司留著也賺不到 WACC 的錢」':
    '"is the money being paid out money the company couldn\'t have earned WACC on if it had kept it?"',
  '才是。高 ROIC 公司高配發反而可惜':
    ' is. A high-ROIC company paying a high dividend is actually a pity',
  '5. 常見誤解闢謠':
    '5. Three things people get wrong',
  '「股利是公司送的錢。」':
    '"A dividend is money the company gives you."',
  'W10 的除息機制：股價同額扣掉，是自己的錢換口袋。領股息的真報酬，要看':
    'The W10 ex-dividend mechanism: the share price is reduced by the same amount, so it\'s your own money changing pockets. The real return on collecting a dividend depends on ',
  '填息':
    'whether the price fills the gap again',
  '——公司的體質。':
    ' — the strength of the company.',
  '「高殖利率就是好股票。」':
    '"A high dividend yield means a good stock."',
  '殖利率＝股利 ÷ 股價，':
    'Dividend yield = dividend ÷ share price, so ',
  '分母崩跌也會推高殖利率':
    'a collapsing denominator also pushes the yield up',
  '——衰退公司的「價值陷阱殖利率」。配發率超過 100% 是吃老本發錢，不可持續。':
    ' — the "value-trap yield" of a declining company. A payout ratio above 100% means paying out by eating into the principal, which isn\'t sustainable.',
  '「庫藏股就是利多。」':
    '"A buyback is good news."',
  '要問買回價和內在價值（W21）：便宜時買回替股東創造價值；昂貴時買回是毀值，而且常常只是為了抵銷員工配股的稀釋或護盤。看動機與價位，不是看動作。':
    'Ask about the buyback price against intrinsic value (W21): buying back when cheap creates value for shareholders; buying back when expensive destroys it, and is often just offsetting the dilution from employee stock grants or propping up the price. Look at the motive and the price, not the action.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '原典與你的實習公司':
    'The primary sources and your practice company',
  '50 分鐘':
    '50 min',
  '《Principles of Corporate Finance》股利政策章':
    'Principles of Corporate Finance: the dividend policy chapter',
  'MM 無關論與現實偏離的正式版。':
    'The formal version of MM irrelevance and its real-world departures.',
  '30 分鐘':
    '30 min',
  'Buffett 談庫藏股：1984 與 2011 年致股東信':
    'Buffett on buybacks: the 1984 and 2011 shareholder letters',
  '在信中搜「repurchase」，讀原典裡的兩條件。':
    'Search the letters for "repurchase" and read the two conditions in the original.',
  'Berkshire 股東信 ↗':
    'Berkshire shareholder letters ↗',
  '實習公司近 10 年股利史':
    'Your practice company\'s dividend history for the past 10 years',
  '從 Goodinfo 抓 EPS、每股股利、配發率、除息後填息天數——本週練習的原料。':
    'From Goodinfo, pull EPS, dividend per share, payout ratio and the number of days it took to fill the gap after the ex-dividend date — the raw material for this week\'s exercise.',
  '選讀':
    'Optional',
  '綠角談高股息迷思的文章一篇':
    'One article by Green Horn on the high-dividend myth',
  '對照第 4 節的兩面讀。':
    'Compare it with the two-sided reading in section 4.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '實習公司的股利政策評鑑':
    'Dividend policy review of your practice company',
  '建表：年度 × EPS × 每股股利 × 配發率 × 當年 ROE':
    'Build a table: year × EPS × dividend per share × payout ratio × that year\'s ROE',
  '判讀三問：配發率的':
    'Three questions to read it with: the ',
  '趨勢':
    'trend',
  '（上升＝成長機會變少的自白？）；配發率與 ROE 的搭配合理嗎（高 ROE＋低配發＝理想再投資；低 ROE＋低配發＝錢囤著做什麼？）；有沒有「EPS 衰退但股利硬撐」的年份':
    ' of the payout ratio (rising = an admission that growth opportunities are shrinking?); is the pairing of payout ratio and ROE sensible (high ROE + low payout = ideal reinvestment; low ROE + low payout = what is the hoarded cash for?); are there years when "EPS fell but the dividend was propped up"',
  '若有庫藏股紀錄：對照買回年份的股價位置——管理層買在便宜還是貴？':
    'If there is a buyback record: compare the buyback years against where the share price stood — did management buy cheap or expensive?',
  '手算 EPS 魔術（100 ÷ 90 ＝ 1.111）與可持續成長率（15% × 0.4 ＝ 6%）':
    'Work out the EPS magic by hand (100 ÷ 90 = 1.111) and the sustainable growth rate (15% × 0.4 = 6%)',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '果樹模擬器預設（ROE 15%、WACC 8%、配發 60%）：成長率 6.0%、股東總財富 344.7；按「全部留下」變 404.6——ROE 高於 WACC 時，留越多越富。按「ROE 5%・全部留下」只有 162.9，「全部發掉」是 172.4——ROE 低於 WACC 時，發出來反而比較好。庫藏股照妖鏡：三個價位的新 EPS 都上升（1.143／1.111／1.071），但每股內在價值分別是 10.29／10.00／9.64。':
    'With the fruit tree simulator\'s defaults (ROE 15%, WACC 8%, payout 60%): growth rate 6.0%, total shareholder wealth 344.7; press "keep everything" and it becomes 404.6 — when ROE is above WACC, the more you keep the richer you are. Press "ROE 5% · keep everything" and it\'s only 162.9, while "pay everything out" gives 172.4 — when ROE is below WACC, paying out is actually better. Buyback truth-teller: the new EPS rises at all three prices (1.143 / 1.111 / 1.071), but intrinsic value per share is 10.29 / 10.00 / 9.64 respectively.',
  '十年體檢表完成，三問有答案':
    'Finished the 10-year health-check table; the three questions have answers',
  'EPS 魔術與成長率公式手算通過':
    'EPS magic and the growth-rate formula worked out by hand and checked',
  '能畫出股利決策樹':
    'Can draw the dividend decision tree',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  'ROIC 25% 的成長公司把配發率從 30% 提高到 80%——利多還是警訊？':
    'A growth company with an ROIC of 25% raises its payout ratio from 30% to 80% — good news or a warning sign?',
  '警訊成分居多':
    'Mostly a warning sign',
  '。ROIC 25% 的公司每保留一塊錢都在高效複利，大幅提高配發率等於管理層自白「找不到夠多 25% 的機會了」——成長期結束的訊號。除非它同時說明產業成熟、估值也已反映，否則成長股投資人該重新檢視論點（W26 觸發條件的素材）。':
    '. Every dollar a 25%-ROIC company retains compounds efficiently; a big jump in the payout ratio is management admitting "we can\'t find enough 25% opportunities any more" — a sign that the growth phase is over. Unless it also explains that the industry has matured and the valuation already reflects it, a growth-stock investor should revisit the thesis (material for the W26 trigger conditions).',
  '「買回庫藏股讓 EPS 上升，所以創造了價值」——錯在哪？':
    '"A buyback lifts EPS, so it creates value" — what\'s wrong with that?',
  '→ EPS 上升是':
    '→ EPS rising is ',
  '算術':
    'arithmetic',
  '（分母變小），不是價值創造：總獲利能力與總價值沒變，只是切成較少份。':
    ' (the denominator gets smaller), not value creation: total earning power and total value haven\'t changed, they\'ve just been cut into fewer slices. ',
  '只有買回價低於每股內在價值時':
    'Only when the buyback price is below intrinsic value per share',
  '，留下的股東才真正變富——等於用便宜價買下離開股東的份額；高於內在價值的買回，是反向的財富移轉。':
    ', do the remaining shareholders really get richer — it amounts to buying the departing shareholders\' stake at a cheap price; a buyback above intrinsic value is a wealth transfer in the opposite direction.',
  '用心理帳戶解釋：為什麼「領股息」和「自己賣 2% 持股」感受完全不同？':
    'Use mental accounting to explain: why do "receiving a dividend" and "selling 2% of your holdings yourself" feel so completely different?',
  '→ 心理帳戶替錢貼標籤：股利進「收入帳戶」（可以花，爽），賣股動到「本金帳戶」（虧損感，痛）——即使兩者對總財富的影響一模一樣。高股息產品販賣的正是「不動本金的現金流」的':
    '→ Mental accounting puts labels on money: a dividend goes into the "income account" (spendable, feels great), while selling shares dips into the "principal account" (feels like a loss, painful) — even though the effect on total wealth is exactly the same. What high-dividend products sell is precisely the ',
  '感受':
    'feeling',
  '，投資人為這個感受付出稅務與總報酬的代價（W16、W32 的高股息拆解）。':
    ' of "cash flow without touching the principal," and investors pay for that feeling in tax and in total return (the high-dividend breakdowns in W16 and W32).',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '果樹的選擇':
    'The fruit tree\'s choice',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（果樹的選擇）':
    'Opening (the fruit tree\'s choice)',
  '「我們家有一棵果樹，今年結了 100 顆果子。兩個選擇：全部吃掉，或留一部分當種子種新樹。怎麼選？」（引導：看種下去長不長得出新樹——土地肥沃就多種，土地滿了就多吃。）「公司賺的錢一模一樣：發股利＝吃果子，保留＝種樹。':
    '"Our family has a fruit tree, and this year it bore 100 fruits. Two choices: eat them all, or keep some as seeds to plant new trees. How do we choose?" (Guide: look at whether planting would actually grow new trees — if the soil is fertile, plant more; if the land is full, eat more.) "A company\'s money works exactly the same way: paying a dividend = eating the fruit, retaining it = planting trees. ',
  '判斷標準不是想不想吃，是土地還肥不肥。':
    'The test isn\'t whether you feel like eating, it\'s whether the soil is still fertile.',
  '核心闢謠（左口袋右口袋）':
    'The core myth-buster (left pocket, right pocket)',
  '「很多人以為股利是公司『多送的』。記得除息那課嗎？發 2 元，股價當天扣 2 元——':
    '"Many people think a dividend is something the company \'gives you extra.\' Remember the ex-dividend lesson? Pay NT$2 and the share price drops NT$2 that day — ',
  '是自己的錢換口袋':
    'it\'s your own money changing pockets',
  '。所以看到『殖利率 8%』先別衝動，要問兩件事：①它填得回來嗎（果樹健康嗎）②它是不是把種子都吃了（配發率超過 100% ＝ 吃老本）。」':
    '. So when you see a \'8% yield,\' don\'t get excited yet; ask two things: (1) will it fill the gap again (is the tree healthy?) (2) is it eating all the seeds (a payout ratio above 100% = living off the principal)?"',
  '互動（台積電問題）':
    'Interaction (the TSMC question)',
  '「台積電只把三成獲利發出來，七成留著蓋廠——小氣嗎？」（引導：它留著的錢每年賺 20% 以上，發給我們，我們自己賺得到嗎？）「反過來：如果有一天它宣布改發九成——你該高興還是緊張？」（緊張——那是它承認「沒地方投了」的訊號。）':
    '"TSMC pays out only 30% of its earnings and keeps 70% to build fabs — is that stingy?" (Guide: the money it keeps earns more than 20% a year; if it paid that out to us, could we earn that ourselves?) "Flip it around: if one day it announced it would pay out 90%, should you be happy or nervous?" (Nervous — that\'s the signal that it\'s admitting "there\'s nowhere left to invest.")',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「可是我就是喜歡領現金的感覺。」':
    '"But I just like the feeling of receiving cash."',
  '「合理！心理需求是真的需求——但要知道自己付的代價（稅＋放棄複利），然後':
    '"Fair enough! A psychological need is a real need — but know the price you\'re paying (tax + giving up compounding), and then ',
  '刻意地':
    'deliberately',
  '選，而不是被『領錢好爽』騙著選。」':
    ' choose it, rather than being tricked into choosing by \'getting paid feels so good.\'"',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能畫股利決策樹，說出唯一判準（ROIC vs WACC）':
    'Can draw the dividend decision tree and state the single test (ROIC vs WACC)',
  '實習公司十年股利體檢完成':
    'Finished the 10-year dividend check-up of the practice company',
  '能解釋庫藏股的 EPS 魔術與 Buffett 兩條件':
    'Can explain the EPS magic of buybacks and Buffett\'s two conditions',
  '分享環節完成（果樹＋台積電問題），記錄卡住的點':
    'Finished the sharing session (fruit tree + the TSMC question) and noted where I got stuck',
  '回填 curriculum/01-overview.md 第 44 週進度欄':
    'Fill in the Week 44 progress column of curriculum/01-overview.md',
  '三大決策集齊':
    'The three big decisions complete',
  '：投資（W41）、融資（W42–43）、股利（W44）。':
    ': investing (W41), financing (W42–43), dividends (W44).',
  '下週預告 · Week 45：營運資金':
    'Next week · Week 45: Working capital',
  '——進入 CFO 的日常營運面：錢卡在存貨與應收帳款裡，也是一種投資。':
    ' — into the CFO\'s day-to-day operations: money stuck in inventory and receivables is also a kind of investment.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：資本結構':
    'Previous week: capital structure',
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
  '答對了——留下的錢每年賺 20% 以上，發給股東，股東自己很難賺到這個數字。大幅提高配發率，等於管理層承認「找不到夠多好機會了」，是成長期結束的訊號。':
    'Correct — the money it keeps earns 20%+ a year, which shareholders would find very hard to match on their own. A big jump in the payout ratio means management admits it "can\'t find enough good opportunities," a sign that the growth phase is over.',
  '其實該緊張：它留下的錢每年賺 20% 以上，發給股東，股東自己很難賺到這個數字。大幅提高配發率，等於管理層承認「找不到夠多好機會了」，是成長期結束的訊號。':
    'You should actually be nervous: the money it keeps earns 20%+ a year, which shareholders would find very hard to match on their own. A big jump in the payout ratio means management admits it "can\'t find enough good opportunities," a sign that the growth phase is over.',
  '% 高於 WACC':
    '% is above WACC',
  '%：土地肥沃，留越多越富。</b>全部留下是':
    '%: the soil is fertile, so the more you keep the richer you get.</b> Keeping everything gives',
  '，全部發掉只有':
    ', while paying everything out gives only',
  '。高 ROE 公司高配發，是把會長大的種子吃掉了。':
    '. A high-ROE company with a high payout is eating the seeds that would have grown.',
  '% 低於 WACC':
    '% is below WACC',
  '%：土地貧瘠，發出來比較好。</b>全部留下只有':
    '%: the soil is poor, so paying out is better.</b> Keeping everything gives only',
  '，全部發掉是':
    ', while paying everything out gives',
  '——留著的錢賺不到股東自己能賺的，硬留就是在毀滅價值。':
    ' — the retained money can\'t earn what shareholders could earn themselves, and forcing it to stay just destroys value.',
  '<b>ROE 等於 WACC：發或留幾乎沒差。</b>這就是 MM 股利無關論的世界——直到稅出現。':
    '<b>ROE equals WACC: paying out or keeping makes almost no difference.</b> This is the world of MM\'s dividend irrelevance — until taxes show up.',
  '<br>股利稅':
    '<br>A dividend tax of',
  '% 讓發出來的每一塊錢先被課一刀——稅務上，留者勝。':
    '% means every dollar paid out gets cut by the taxman first — on tax grounds, keeping wins.',
  '元':
    '',
  '<b>EPS 從 1.00 變':
    '<b>EPS goes from 1.00 to',
  '%）——不管買在什麼價位，EPS 都會上升。</b>':
    '%) — whatever price you buy at, EPS goes up.</b>',
  '但真正的好消息在每股內在價值：+':
    'But the real good news is in the intrinsic value per share: +',
  '%。用低於價值的價格買下離開股東的份額，留下的股東變富了。':
    '%. Buying the departing shareholders\' stake below its value makes the remaining shareholders richer.',
  '但每股內在價值掉了':
    'But intrinsic value per share fell',
  '%：用高於價值的價格買回，等於拿留下股東的錢，送給賣出的股東。EPS 上升只是算術。':
    '%: buying back above value means using the remaining shareholders\' money to hand a gift to the sellers. The EPS rise is just arithmetic.',
  '每股內在價值不變：用合理價買回，只是把現金還給股東的另一種方式。':
    'Intrinsic value per share is unchanged: buying back at a fair price is just another way of returning cash to shareholders.',
  '✓ 三大決策集齊——下週進入 CFO 的日常：營運資金。':
    '✓ The three big decisions are complete — next week we move into the CFO\'s day-to-day: working capital.',
};
