/*
 * 給家人的投資課 Week 09：財務比率體系與杜邦五因子 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-09-dupont-ratios.html
 *
 * 沿用 week-01 的慣例（金額單位、行內標記空白、語域）。本週特有的幾件事：
 *
 * ⚠ 這頁沒有金額欄位，「萬」的規則用不到；果汁機的數字全是 JS 算的比率與倍數，
 *   對照表只換文字（jalert 那串是 "文字 " + 數字 + " 文字" 拼出來的，
 *   抽取器把每一段都 trim 過，所以片段兩端不補空白——原字串裡本來就有）。
 *
 * ⚠ 台灣專有名詞用官方英文名，都查得到，所以 KEEP 為空：
 *   台積電 = TSMC｜聯電 = UMC（United Microelectronics Corporation）
 *   公開資訊觀測站 = MOPS（Market Observation Post System，證交所官方英文名）
 *   財報狗 = Statementdog（該站自己的英文品牌名）
 *   「大樹製造」是課文自己虛構的公司（原文就寫「虛構」），照字面譯成
 *   Bigtree Manufacturing——它不是真實機構，不受「不自創英譯」那條限制。
 *
 * ⚠ ①②③④⑤ 這些圈號在原文是黏著詞的（①稅負效應），英文照樣保留圈號，
 *   但加半形空白（① Tax burden）——英文字母黏在圈號上讀不出來。
 *
 * 語域：果汁機、加水的果汁、放大鏡不分方向——這些比喻是這一週的骨架，
 *   英文要保住它們的口語感，不要改寫成 ROE decomposition 的技術說明。
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
  '給家人的投資課 · Q1 共同地基 · Week 09':
    'Family Investing Course · Q1 Common Ground · Week 09',
  財務比率體系與杜邦五因子:
    'A system for financial ratios, and the five-factor DuPont breakdown',
  'Q1 分析工具的最後一塊：把 ROE 拆開，看出「同樣賺 20%」背後完全不同的體質。':
    'The last piece of the Q1 toolkit: pull ROE apart and see the very different businesses hiding behind the same 20%.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 5': 'weeks 5',
  '8 週': '8',
  '52 週 · 第 9 週': '52 weeks · Week 9',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '投資人用比率跨公司比較（Q2 comps 的前身）、操盤手用它篩選與監控（Q3）、財務長用它對董事會解釋績效（Q4）。學完本週，第 13 週 capstone 的工具就齊了。':
    'The investor uses ratios to compare companies (the forerunner of Q2 comps), the trader uses them to screen and monitor (Q3), and the CFO uses them to explain performance to the board (Q4). After this week the toolkit for the week 13 capstone is complete.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「三句護身咒」時對方卡住的點——還背得出來嗎（現金跟上、應收別超速、有錢還借錢的離遠點）。先用自己的話再講一次。':
    'Look back at where your listener got stuck on last week\'s "three protective chants" — can you still recite them (cash keeps up, receivables do not outrun sales, stay away from anyone borrowing while sitting on cash)? Say them once more in your own words first.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '巷口兩家店，去年都讓老闆的錢賺了':
    'Two shops on your street both made their owners',
  '。一家是精品店：東西貴、客人少、零借款；一家是自助餐：便宜、翻桌快、跟銀行借了不少錢。你比較想當哪家的股東？':
    ' last year. One is a boutique: expensive goods, few customers, no debt. The other is a buffet: cheap, tables turn fast, and a fair amount borrowed from the bank. Which one would you rather own a share of?',
  猜一個答案: 'Pick an answer',
  精品店: 'The boutique',
  自助餐: 'The buffet',
  '一樣，反正都賺 17.3%': 'Same thing — they both made 17.3%',
  '這正是本週要打破的想法——同樣 17.3%，一家靠產品真賺錢、一家靠借錢放大。升息或景氣反轉時，兩家的命運完全不同。杜邦拆解就是把這件事看穿的工具，往下用果汁機拆給你看。':
    'That is exactly the idea this week takes apart — the same 17.3%, but one earns it by genuinely making money on its product and the other by borrowing to magnify. When rates rise or the cycle turns, the two end up in completely different places. The DuPont breakdown is the tool that sees through this, and the juicer below will take it apart for you.',
  '多數人的直覺——精品店的 17.3% 是「真材實料」賺的，零借款、不怕升息。但先別急：答案取決於價格與護城河，本週先學會「把 17.3% 拆開看配方」這個動作。':
    'Most people\'s instinct — the boutique earns its 17.3% with "real ingredients", carries no debt and has nothing to fear from rising rates. But hold on: the answer depends on price and on the moat. What this week teaches is the move itself, "break the 17.3% open and read the recipe".',
  '有趣的選擇——自助餐的 17.3% 有一部分是借錢放大出來的：賺放大、虧也放大，升息還會直接咬獲利。不是不能選，但你得知道自己買的是「加了水的果汁」。往下拆給你看。':
    'Interesting choice — part of the buffet\'s 17.3% is borrowed magnification: gains get bigger and so do losses, and rising rates bite into profit directly. You can still pick it, but you have to know you are buying "juice with water in it". Let us take it apart below.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',

  '1. 比率的體系感：四個抽屜': '1. A system for ratios: four drawers',
  '散落的比率背不完，裝進四個抽屜就永遠不會亂：':
    'You will never memorise a scattered pile of ratios. Put them in four drawers and they stay in order:',
  抽屜: 'Drawer',
  回答的問題: 'The question it answers',
  代表比率: 'Ratios that live there',
  獲利能力: 'Profitability',
  '賺得多不多？': 'Is it earning much?',
  '毛利率、營業利益率、淨利率、ROE、ROIC':
    'Gross margin, operating margin, net margin, ROE, ROIC',
  經營效率: 'Efficiency',
  '資產用得勤不勤？': 'Are the assets working hard?',
  '總資產周轉率、存貨／應收周轉天數':
    'Total asset turnover, inventory days, receivable days',
  償債能力: 'Solvency',
  '撐不撐得住？': 'Can it take the strain?',
  '流動比、速動比、有息負債／權益、利息保障倍數':
    'Current ratio, quick ratio, interest-bearing debt / equity, interest coverage',
  估值: 'Valuation',
  '市場開價貴不貴？': 'Is the market asking a high price?',
  'P/E、P/B、EV/EBITDA、殖利率（Q2 深談）':
    'P/E, P/B, EV/EBITDA, dividend yield (covered properly in Q2)',
  '前三個抽屜你在第 5–8 週已各學了一半。':
    'You already learned half of each of the first three drawers in weeks 5–8. ',
  '使用鐵律（烙在腦裡）：比率永遠要「跟自己比（5 年趨勢）＋跟同業比（相對位置）」，單一時點的單一比率沒有資訊量。':
    'The iron rule, and burn it in: a ratio is always read "against itself (a five-year trend) plus against its peers (where it sits)". One ratio at one moment in time carries no information at all.',

  '2. 先用飲料店驗證三因子': '2. Test the three factors on the drinks stand first',
  '專欄 #7 學過三因子，用你自己的店驗證一次（第 2 個月，月頻）：':
    'Column #7 covered the three factors; run them once on your own shop (month 2, monthly figures):',
  '飲料店 ROE 拆解': 'The drinks stand, ROE broken down',
  '淨利率 47.8% × 周轉率 0.218 × 權益乘數 1.15 ＝':
    'Net margin 47.8% × turnover 0.218 × equity multiplier 1.15 =',
  '飲料店是「超高利潤率、低周轉、幾乎無槓桿」——精品店的賺法。（一個月 12% 是剛開業基期小，別當常態。）':
    'The drinks stand runs on "very high margin, low turnover, almost no leverage" — the boutique\'s way of earning. (12% in a single month comes from a tiny opening base; do not treat it as normal.)',

  '3. 五因子：把「利息」和「稅」也拆出來':
    '3. Five factors: pulling "interest" and "tax" out as well',
  '三因子的淨利率混雜了本業、利息、稅三件事。五因子把它拆乾淨：':
    'Net margin in the three-factor version mixes three things together: the core business, interest and tax. The five-factor version separates them cleanly:',
  淨利: 'Net income',
  稅前淨利: 'Pre-tax income',
  營收: 'Revenue',
  總資產: 'Total assets',
  股東權益: 'Equity',
  '①稅負效應 × ②利息負擔 × ③營業利益率 × ④資產周轉率 × ⑤權益乘數':
    '① Tax burden × ② Interest burden × ③ Operating margin × ④ Asset turnover × ⑤ Equity multiplier',
  '①稅負效應': '① Tax burden',
  '（≤1）：留下幾成給股東？0.8 ＝ 有效稅率 20%':
    ' (≤1): what share is left for shareholders? 0.8 = a 20% effective tax rate',
  '②利息負擔': '② Interest burden',
  '（≤1）：EBIT 被利息咬掉多少？1 ＝ 無借款；越小＝債越重':
    ' (≤1): how much of EBIT does interest eat? 1 = no borrowing; the smaller it is, the heavier the debt',
  '：就是三因子的本業版（分子換成 EBIT 更純粹）':
    ': the operating-side version of the three factors (EBIT as the numerator makes it purer)',
  '完整算例｜虛構「大樹製造」': 'Full worked example | the fictional "Bigtree Manufacturing"',
  '營收 1,000、EBIT 150、利息 20、稅率 20%、總資產 800、權益 500 → 稅前淨利 130、淨利 104':
    'Revenue 1,000; EBIT 150; interest 20; tax rate 20%; total assets 800; equity 500 → pre-tax income 130, net income 104',
  '判讀：本業（③×④）打底 18.75% 的資產報酬，槓桿（⑤）放大 1.6 倍，但利息（②）咬回 13%、稅（①）再咬 20%。':
    'Reading it: the core business (③ × ④) lays down an 18.75% return on assets, leverage (⑤) magnifies that 1.6 times, but interest (②) takes back 13% and tax (①) another 20%. ',
  '同樣 ROE 20%，五因子組成不同，體質與風險完全不同。':
    'Same 20% ROE, different five-factor mix, completely different health and risk.',

  /* ── ROE 果汁機 ── */
  'ROE 果汁機：五個因子連乘的實驗台':
    'The ROE juicer: a bench for multiplying the five factors together',
  '先按預設鍵看「精品店」和「自助餐」——':
    'Start with the "boutique" and "buffet" presets — ',
  '同樣 17.3%，配方完全不同': 'same 17.3%, completely different recipe',
  '。再自己拉滑桿，感受每個因子的力量。':
    '. Then drag the sliders yourself and get a feel for how much each factor can do.',
  '自助餐（有槓桿）': 'Buffet (with leverage)',
  大樹製造: 'Bigtree Manufacturing',
  '① 稅負效應': '① Tax burden',
  留給股東的成數: 'The share left for shareholders',
  '② 利息負擔': '② Interest burden',
  被利息咬剩的: 'What survives interest',
  '③ 營業利益率': '③ Operating margin',
  本業賺錢力: 'Earning power of the core business',
  '④ 資產周轉率': '④ Asset turnover',
  資產轉速: 'How fast the assets spin',
  '⑤ 權益乘數': '⑤ Equity multiplier',
  槓桿放大鏡: 'The leverage magnifier',
  '看 ROE 的變化，先問一句：': 'When ROE moves, ask one question first: ',
  '「哪個因子動了？」': '"Which factor moved?"',
  '——來自⑤的上升，品質遠低於來自③。':
    ' — a rise that comes from ⑤ is far lower quality than one that comes from ③.',
  '<b>放大鏡警示：</b>權益乘數': '<b>Magnifier warning:</b> an equity multiplier of',
  '倍——這杯果汁加了不少水。升息會咬小②（現在':
    'times — that is a lot of water in this juice. A rate rise will shrink ② (right now',
  '）、景氣反轉時虧損同樣被放大':
    '), and when the cycle turns your losses are magnified by the same',
  '倍。': 'times.',

  /* ── 三條路 ── */
  '4. 三條路的風險畫像': '4. Three routes, three risk profiles',
  '高 ROE 的來源': 'Where the high ROE comes from',
  典型產業: 'Typical industries',
  風險本質: 'What the risk really is',
  '高利潤率（③）': 'High margin (③)',
  '晶圓龍頭、精品、軟體': 'Leading foundries, luxury goods, software',
  '護城河被侵蝕（技術追趕、品牌老化）':
    'The moat erodes (rivals catch up technically, the brand ages)',
  '高周轉率（④）': 'High turnover (④)',
  '超商、量販、快時尚': 'Convenience stores, hypermarkets, fast fashion',
  '薄利模式，成本些微失控就轉虧':
    'A thin-margin model — costs slipping slightly is enough to tip it into a loss',
  '高權益乘數（⑤）': 'High equity multiplier (⑤)',
  '銀行、營建、高槓桿股': 'Banks, construction, heavily leveraged stocks',
  '景氣反轉時虧損同樣被放大；升息直接咬②':
    'When the cycle turns the losses are magnified just as much; rising rates bite ② directly',

  /* ── 周轉天數 ── */
  '5. 周轉天數：效率抽屜的顯微鏡':
    '5. Turnover days: the microscope in the efficiency drawer',
  '應收天數 ＝': 'Receivable days =',
  應收帳款: 'Receivables',
  '存貨天數 ＝': 'Inventory days =',
  存貨: 'Inventory',
  銷貨成本: 'Cost of goods sold',
  注意存貨天數的分母是: 'Note that the denominator for inventory days is ',
  成本: 'cost',
  '不是營收——存貨以成本計價。這兩個天數是上週紅旗 #1、#2 的精確化：':
    ', not revenue — inventory is carried at cost. These two day counts are last week\'s red flags #1 and #2 made precise: ',
  '天數逐年拉長＝收錢變慢／貨賣變慢':
    'days stretching out year after year = money coming in slower, goods selling slower',
  '，比「增速比較」更早出現訊號。':
    ', and that signal shows up earlier than comparing growth rates does.',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「ROE 高就是好公司」': '"A high ROE means a good company"',
  '先拆五因子看來源；再看它能不能': 'First break it into five factors and see where it comes from; then ask whether it can ',
  持續: 'last',
  '（護城河問題，Q2）；最後才是「用什麼價格買」（估值問題）。':
    ' (a moat question, Q2); and only then, at what price you buy it (a valuation question).',
  '「比率可以跨產業排名」': '"Ratios can be ranked across industries"',
  '超商周轉 2.5 vs 晶圓廠 0.5 沒有優劣，是商業模式；只有同業比較有意義。':
    'A convenience store\'s turnover of 2.5 against a foundry\'s 0.5 is not better or worse, it is a different business model. Only comparison with peers means anything.',
  '「數字自己會說話」': '"The numbers speak for themselves"',
  '比率只會提出好問題，不會給答案；答案在年報的文字裡（MD&amp;A、附註）。':
    'Ratios raise good questions; they do not hand you answers. The answers are in the words of the annual report (MD&amp;A and the notes).',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '10 分': '10 min',
  '專欄 #7 杜邦樹重讀 ↗': 'Column #7, the DuPont tree, re-read ↗',
  '三因子的樹狀圖；本週在中段插入②①兩層就是五因子。':
    'The three-factor tree diagram; slot layers ② and ① into the middle of it and you have the five-factor version.',
  '30 分': '30 min',
  '對照英文的 5-step decomposition，確認每因子的英文名（tax burden / interest burden / operating margin / asset turnover / equity multiplier）。':
    'Read it against the English 5-step decomposition and pin down the standard name of each factor (tax burden / interest burden / operating margin / asset turnover / equity multiplier).',
  '40 分': '40 min',
  '財報狗 ↗': 'Statementdog ↗',
  或: 'or',
  實戰: 'in practice',
  '找到追蹤公司的「ROE 拆解」頁（多數工具內建三因子），核對工具算的跟你手算是否一致——':
    'Find the "ROE breakdown" page for a company you follow (most tools build in the three-factor version) and check what the tool calculates against what you worked out by hand — ',
  '工具是加速器，手算過才有資格用工具。':
    'a tool is an accelerator; doing the sums by hand once is what earns you the right to use one.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '台積電 vs 聯電：五因子對決': 'TSMC vs UMC: a five-factor face-off',
  '同產業、同市場、規模不同的兩家公司，是杜邦拆解最好的教材。':
    'Two companies in the same industry and the same market but at very different scale make the best teaching material for a DuPont breakdown.',
  '從公開資訊觀測站（或財報狗輔助）取兩家最新年度：營收、EBIT（營業利益近似）、利息費用、稅前淨利、淨利、總資產、股東權益':
    'Pull the latest year for both from MOPS (with Statementdog as a helper): revenue, EBIT (operating income is close enough), interest expense, pre-tax income, net income, total assets, shareholders\' equity',
  '建五因子對照表（2 公司 × 5 因子 × 直接 ROE 驗算）':
    'Build the five-factor comparison table (2 companies × 5 factors, plus a direct ROE cross-check)',
  '驗算：五因子相乘要等於 淨利÷權益（誤差 &lt; 1%；不合就檢查「歸屬母公司」口徑是否一致）':
    'Cross-check: the five factors multiplied together must equal net income ÷ equity (within 1%; if they do not, check that both sides use the same "attributable to the parent" basis)',
  '寫 200 字：兩家 ROE 的差距':
    'Write 200 words: the gap between the two ROEs comes ',
  主要: 'mainly',
  '來自哪個因子？這個因子差距的商業原因是什麼（製程領先→定價權→③？）':
    ' from which factor? And what is the business reason behind the gap in that factor (a process lead → pricing power → ③?)',
  '加做：算兩家的應收天數與存貨天數，順手檢查紅旗 #1、#2':
    'Extra: work out receivable days and inventory days for both, and check red flags #1 and #2 while you are in there',
  '本週工具驗證：': 'This week\'s check: ',
  '大樹製造五因子相乘 ＝': 'Bigtree Manufacturing, five factors multiplied =',
  '＝ 104÷500；飲料店三因子 ＝':
    '= 104 ÷ 500; the drinks stand, three factors =',
  '＝ 71,667÷598,334——你的表也要這樣勾稽通過。':
    '= 71,667 ÷ 598,334 — your own table has to tie out the same way.',
  自我檢核: 'Check yourself',
  '兩家五因子相乘皆與直接 ROE 相符':
    'For both companies the five factors multiply out to the ROE calculated directly',
  '200 字歸因有指出主導因子與商業解釋':
    'The 200 words name the dominant factor and give a business explanation',
  '周轉天數計算用對分母（存貨÷成本）':
    'The turnover-day sums use the right denominator (inventory ÷ cost)',

  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up to check)',
  '兩家公司 ROE 都是 15%：A 是 ③高④低⑤低，B 是 ③低④中⑤高——升息環境下誰危險？':
    'Two companies both show an ROE of 15%: A is high ③, low ④, low ⑤; B is low ③, medium ④, high ⑤ — which one is in danger when rates rise?',
  'B 危險': 'B is the dangerous one',
  '——⑤高＝債重，升息直接推高利息、咬小②，且景氣反轉時槓桿反向放大虧損；A 的風險在護城河長期侵蝕，但對利率不敏感。':
    ' — a high ⑤ means heavy debt: rising rates push interest costs straight up and shrink ②, and when the cycle turns, leverage magnifies the losses just as hard in the other direction. A\'s risk is slow erosion of its moat, but it is not sensitive to interest rates.',
  '某公司 ROE 從 12% 升到 18%，但營業利益率持平、周轉持平——發生什麼事？該開心嗎？':
    'A company\'s ROE climbs from 12% to 18%, but its operating margin and turnover are both flat — what happened? Should you be pleased?',
  '→ ROE 上升來自': '→ The rise in ROE came from ',
  '⑤權益乘數': '⑤ the equity multiplier',
  '（加槓桿）或①（減稅優惠）——本業（③④）沒變好；謹慎大於開心，去資產負債表查有息負債是否明顯增加。':
    ' (more leverage) or from ① (a tax break) — the core business (③④) has not improved. Be wary rather than pleased: go to the balance sheet and check whether interest-bearing debt has jumped.',
  '為什麼五因子的②「利息負擔」永遠 ≤ 1（正常情況下）？':
    'Why is ② "interest burden" always ≤ 1 in the five-factor version (under normal conditions)?',
  '→ 因為稅前淨利＝EBIT−利息（正常無大額業外時），有借款利息就有 稅前淨利 &lt; EBIT；等於 1 表示零借款（如帳上無債的公司）。':
    '→ Because pre-tax income = EBIT − interest (when there are no large non-operating items). Any interest at all makes pre-tax income &lt; EBIT; exactly 1 means no borrowing, as in a company with no debt on the books.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  把果汁倒回去看原料: 'Pour the juice back and look at what went in',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（兩家店的謎題）': 'Opening (the two-shop puzzle)',
  '「巷口有兩家店，去年都讓老闆的錢賺了 17.3%。一家是精品店：東西貴、客人少；一家是自助餐：便宜、翻桌快、而且跟銀行借了不少錢。':
    '"There are two shops on our street, and last year both made their owners 17.3% on their money. One is a boutique: expensive goods, few customers. The other is a buffet: cheap, tables turn fast, and it has borrowed a fair amount from the bank. ',
  '同樣 17.3%，你比較想當哪家的股東？':
    'Same 17.3% — which one would you rather own a share of?',
  '」（可以打開上面的果汁機，按兩個預設鍵給對方看配方差多少。）':
    '" (You can open the juicer above and hit the two presets to show them how different the recipes are.)',
  '核心比喻：果汁機': 'The core metaphor: a juicer',
  '「ROE 像一台果汁機的產出，杜邦拆解是把果汁倒回去看原料：幾分是':
    '"ROE is what comes out of a juicer, and the DuPont breakdown pours the juice back to look at what went in: how much of it is ',
  真材實料: 'real fruit',
  '（產品賺錢）、幾分是': ' (the product genuinely makes money), how much is ',
  轉速快: 'sheer speed',
  '（薄利多銷）、幾分是': ' (thin margins, high volume), and how much is ',
  加水: 'added water',
  '（借錢放大）。加水的果汁，一停電（升息、景氣反轉）就露餡。」':
    ' (borrowing to magnify). Watered-down juice gets found out the moment the power goes off — rates rise, or the cycle turns."',
  互動: 'Interaction',
  '指著五個因子問：「銀行的 ROE 主要靠哪一格？精品靠哪一格？」——讓對方把產業對號入座，對了就代表懂了。':
    'Point at the five factors and ask: "which box does a bank\'s ROE lean on? And a luxury brand?" Let them slot industries into place — if they get it right, they have understood it.',
  預期反應與應對: 'What they will say, and what to answer',
  '「借錢放大不好嗎？賺更多耶」':
    '"What is wrong with borrowing to magnify? You earn more that way"',
  '「放大鏡不分方向：賺放大、虧也放大。所以看到高 ROE，我們家的第一句話永遠是『它怎麼賺的？』」':
    '"A magnifying glass does not pick a direction: it enlarges the gains and the losses alike. So when we see a high ROE in this house, the first thing we ask is always: how did it earn that?"',
  '「這些你都手算？」': '"Do you really work all this out by hand?"',
  '「網站一鍵就有，但手算過一次才知道網站有沒有騙我——就像會心算的人用計算機更安心。」':
    '"A website gives it to me in one click, but doing it by hand once is how I know the website is not fooling me — the same way someone who can do mental arithmetic is more comfortable using a calculator."',
  本腳本可搭配專欄: 'Pair this script with column piece',
  '#7《財務報表三表》': '#7, "The three financial statements"',
  '的杜邦樹一起用。': ' and its DuPont tree.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  本週完成的定義: 'What counts as done this week',
  能默寫五因子公式並解釋每個因子的含義:
    'You can write the five-factor formula from memory and explain what each factor means',
  '台積電 vs 聯電對照表完成且驗算通過':
    'The TSMC vs UMC comparison table is finished and the cross-check ties out',
  '能說出「ROE 上升但品質變差」的至少一種情境':
    'You can describe at least one situation where ROE rises while quality falls',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）':
    'One line of notes on the week, for next week\'s review',
  '🎓 第 9 週完成——Q1 分析工具全數到齊。下週見：台股交易制度與成本。':
    '🎓 Week 9 done — the Q1 analysis toolkit is complete. Next up: how Taiwan\'s market trades, and what it costs.',
  '里程碑 · 下週預告 · Week 10：台股交易制度與成本':
    'Milestone · Next week · Week 10: how Taiwan\'s stock market trades, and what it costs',
  '——第 5–9 週的五樣工具（利潤率趨勢、體質比率、三線表、紅旗清單、杜邦拆解）已經到齊，第 13 週 capstone 會把它們組裝成「20 分鐘財報健檢」限時演出。下週先換個場景：錢進市場之前，先搞懂交易怎麼運作、過路費有多貴。':
    ' — the five tools from weeks 5–9 (margin trends, health ratios, the three-line table, the red-flag checklist, the DuPont breakdown) are all in place, and the week 13 capstone assembles them into a timed "20-minute financial check-up". Next week changes the scene: before any money goes into the market, work out how trading actually happens and how expensive the tolls are.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：三表勾稽與財報紅旗':
    'Previous week: tying the three statements together, and red flags in the accounts',
  專欄文章: 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
