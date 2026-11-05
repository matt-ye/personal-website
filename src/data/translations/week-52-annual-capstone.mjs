/*
 * 給家人的投資課 Week 52：年度期末專題——CFO＋投資人雙報告 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-52-annual-capstone.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 單位：JS 算出的「億」值一律寫成「× 100 million」（原文無幣別，不補）；靜態散文照 billion 換算。「元」＝dollars。「第」在此是項目編號，覆寫成 Item。
 */
export const KEEP = [];
export const ADDED = [];
export const INCOMPLETE = false;
export const MAP = {
  '← 課程首頁':
    '← Course home',
  '① 手冊':
    '① Handbook',
  '② 導讀':
    '② Reading',
  '③ 練習':
    '③ Exercise',
  '④ 分享':
    '④ Teach it',
  '⑤ 檢核':
    '⑤ Checklist',
  '給家人的投資課 · Q4 財務長季 · Week 52 · 年度期末專題':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 52 · Annual Capstone Project',
  '年度期末專題——CFO＋投資人雙報告':
    'Annual Capstone Project — The CFO + Investor Double Report',
  '52 週的總驗收。同一家公司、兩張桌子：':
    'The final test of 52 weeks. One company, two tables: ',
  '報告 A':
    'Report A',
  '用財務長的眼睛做財務健檢與建議，':
    'uses the eyes of a CFO to run a financial health check and make recommendations,',
  '報告 B':
    'Report B',
  '用投資人的眼睛評估值與買賣。兩份報告的張力——CFO 想守住的、投資人想看穿的——就是你這一年學會的完整判斷力。':
    'uses the eyes of an investor to estimate value and decide whether to buy or sell. The tension between the two reports — what the CFO wants to protect and what the investor wants to see through — is the complete judgment you\'ve learned this year.',
  '⏱ 預估 3–5 小時＋年度回顧':
    '⏱ About 3–5 hours + the year-in-review',
  '前置：第 1–51 週全部':
    'Prerequisites: all of Weeks 1–51',
  '52 週 · 第 52 週':
    '52 weeks · Week 52',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  '投資人、操盤手、財務長的第一年目標，全部在這兩份報告裡達陣。':
    'The first-year goals of investor, portfolio manager and CFO all land in these two reports.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的法說三招——家人聽出「審慎樂觀」的空洞了嗎？':
    'Look back at last week\'s three earnings-call moves — did your family hear how hollow "cautiously optimistic" is?',
  '開始之前，先看一眼這一年':
    'Before we start, take a look at your year',
  '下面是你在這台裝置上勾過的每週「完成檢核」。綠色是全部完成，黃色是做到一半。':
    'Below are the weekly "completion checklists" you\'ve ticked on this device. Green means fully done; yellow means half done.',
  '區塊 ① ／ 雙報告組裝手冊＋年度回顧指南 · 約 1 小時':
    'Block ① / Double-report assembly handbook + year-in-review guide · about 1 hour',
  '雙報告的設計哲學':
    'The design philosophy of the double report',
  '同一組事實，兩個問題：':
    'The same set of facts, two questions:',
  '報告 A（CFO）':
    'Report A (CFO)',
  '問：這家公司的財務':
    ' asks: how this company\'s finances ',
  '該怎麼管得更好':
    'should be managed better',
  '？你是內部人，輸出是':
    '? You are an insider, and the output is ',
  '建議':
    'a recommendation',
  '報告 B（投資人）':
    'Report B (investor)',
  '問：這家公司':
    ' asks: what this company is ',
  '值多少、現在買嗎':
    'worth, and whether to buy now',
  '？你是外部人，輸出是':
    '? You are an outsider, and the output is ',
  '決策':
    'a decision',
  '建議沿用實習公司——W40–51 的素材直接可用。兩份各 2–3 頁，':
    'Using your internship company is recommended — the material from W40–51 is directly usable. Two reports of 2–3 pages each, ',
  '先寫 A 再寫 B':
    'write A first, then B',
  '：當過 CFO 再當投資人，你會發現自己讀年報的眼神完全不同了。':
    ': once you\'ve been the CFO and then the investor, you\'ll find you read annual reports with completely different eyes.',
  '報告 A｜CFO 視角財務健檢（素材全在 Q4）':
    'Report A | A financial health check from the CFO\'s view (all material from Q4)',
  '節':
    'Section',
  '內容':
    'What it covers',
  '素材':
    'Material',
  '① 資本結構評估':
    '① Capital structure assessment',
  '槓桿三數字 vs 產業；稅盾用足了嗎、太冒險嗎':
    'The three leverage numbers vs the industry; is the tax shield fully used, or too risky?',
  '② 資金成本':
    '② Cost of capital',
  '自算 WACC＋ROIC 對照——創造還是毀滅價值':
    'Your own WACC calculation vs ROIC — creating or destroying value',
  '③ 資本配置紀錄':
    '③ Capital allocation record',
  '近年大型投資的事後成績；股利與庫藏股政策評鑑':
    'Hindsight results on large recent investments; assessment of dividend and buyback policy',
  '④ 營運資金與規劃':
    '④ Working capital and planning',
  'CCC 五年趨勢；g* 與實際成長的資金缺口':
    'Five-year CCC trend; the funding gap between g* and actual growth',
  '⑤ 風險與治理':
    '⑤ Risk and governance',
  '避險政策體檢；治理紅旗掃描結果':
    'Hedging-policy check-up; results of the governance red-flag scan',
  '⑥ 給管理層的三個建議':
    '⑥ Three recommendations for management',
  '每條：問題（數字佐證）→ 建議 → 預期效果':
    'Each one: problem (backed by numbers) → recommendation → expected effect',
  '全部':
    'All',
  '⑥ 是報告 A 的靈魂——寫成「若我是 CFO，明年最優先改的三件事」，每條都要有 Q4 工具的量化支撐。例：「CCC 較同業長 25 天，可釋放約 X 億——建議應收帳期紀律化。」':
    '⑥ is the soul of Report A — write it as "the three things I\'d fix first next year if I were the CFO," each backed by a quantified Q4 tool. Example: "The CCC is 25 days longer than peers\', which could free up about X × 100 million — recommend putting receivables terms under discipline."',
  '報告 B｜投資人視角估值報告（素材全在 Q1–Q3）':
    'Report B | An investor\'s valuation report (all material from Q1–Q3)',
  '① 一句話論點':
    '① One-sentence thesis',
  '市場錯在哪、我的預期':
    'Where the market is wrong, and my expectation',
  'W26 格式':
    'W26 format',
  '② 商業模式與護城河':
    '② Business model and moat',
  '五力＋三維護城河，更新到最新':
    'Five forces + the three-dimension moat, updated to the latest',
  '③ 財報健檢摘要':
    '③ Financial-statement check-up summary',
  '20 分鐘健檢流程的最新一跑':
    'The latest run of the 20-minute check-up routine',
  '④ 估值':
    '④ Valuation',
  '相對估值＋DCF（折現率用報告 A 的自算 WACC）＋九宮格區間＋安全邊際':
    'Relative valuation + DCF (using Report A\'s self-computed WACC as the discount rate) + the nine-box range + margin of safety',
  '⑤ 風險與反方論證':
    '⑤ Risks and the counter-argument',
  '含報告 A 發現的內部問題——雙報告的交叉引用':
    'Includes the internal problems found in Report A — the cross-reference between the two reports',
  '⑥ 結論':
    '⑥ Conclusion',
  '買／等／跳過＋倉位（IPS 內）＋觸發條件':
    'Buy / wait / skip + position size (within the IPS) + trigger conditions',
  '張力測試：讓兩份報告互相餵養':
    'Tension test: let the two reports feed each other',
  '成熟度的檢驗：報告 A 的三個建議若被採納，報告 B 的估值會怎麼變？能把兩份報告':
    'A test of maturity: if Report A\'s three recommendations were adopted, how would Report B\'s valuation change? Being able to make the two reports ',
  '互相餵養':
    'feed each other',
  '，就是「換過兩張桌子」的證明。下面用一家示意公司把三個典型建議翻譯成每股價值：':
    ' is the proof that you\'ve "switched tables." Below, an illustrative company translates three typical recommendations into value per share:',
  '張力測試台':
    'Tension test bench',
  '示意公司：營收 1,000 億、自由現金流 50 億、WACC 8%、永續成長 3%、股數 25 億股 → 每股價值 40.00 元（永續成長模型）。勾選報告 A 的建議，看報告 B 的估值怎麼動。':
    'Illustrative company: revenue of 100 billion, free cash flow of 5 billion, WACC 8%, perpetual growth 3%, 2.5 billion shares → value per share 40.00 (perpetuity growth model). Tick Report A\'s recommendations and watch how Report B\'s valuation moves.',
  '建議一：應收帳期紀律化，CCC 縮短':
    'Recommendation 1: put receivables terms under discipline, shortening the CCC by ',
  '天（一次性釋放現金）':
    'days (a one-time release of cash)',
  '建議二：資本結構調整，WACC 下降':
    'Recommendation 2: adjust the capital structure, with WACC falling by ',
  '個百分點':
    'percentage points',
  '建議三：停掉 ROIC 低於 WACC 的投資，自由現金流增加':
    'Recommendation 3: stop investments whose ROIC is below WACC, raising free cash flow by ',
  '原本每股價值':
    'Original value per share',
  '元':
    'dollars',
  '採納建議後':
    'After adopting the recommendations',
  '變化':
    'Change',
  '報告 B 的上修空間':
    'Upside for Report B',
  '自評 Rubric（10 分制）':
    'Self-assessment rubric (10-point scale)',
  '每項 0／1／2 分，8 分以上＝完課。分數存在這個瀏覽器。':
    'Each item scores 0 / 1 / 2 points; 8 or more = course complete. Scores are stored in this browser.',
  '雙報告 Rubric':
    'Double-report rubric',
  'A：六節齊全、三個建議有量化支撐':
    'A: all six sections present, the three recommendations backed by numbers',
  'B：估值區間用自算 WACC、有反方論證與觸發條件':
    'B: valuation range uses the self-computed WACC, with a counter-argument and trigger conditions',
  '交叉引用：A 的發現出現在 B 的風險節（或反向）':
    'Cross-reference: A\'s findings appear in B\'s risk section (or the reverse)',
  '數字紀律：每個主張有出處；報表數據為最新一季':
    'Number discipline: every claim has a source; financial data is from the latest quarter',
  '家人聽證會通過（見分享環節）':
    'Passed the family hearing (see the sharing section)',
  '總分':
    'Total score',
  '8 分以上完課':
    '8 or more = course complete',
  '逐項給分。':
    'Score each item.',
  '年度回顧：雙報告之後的最後一件事':
    'Year in review: the last thing after the double report',
  '重讀 W1 的自己':
    'Reread your W1 self',
  '：打開第 1 週的複利試算表與筆記——量測這一年的距離':
    ': open the compounding spreadsheet and notes from Week 1 — measure how far you\'ve come this year',
  '盤點資產':
    'Take stock of your assets',
  '：四大常備文件（紅旗清單 v2／IPS／原則清單 v1.2／買入清單）、模擬組合與月報、健檢流程、投資論文、雙報告、總經儀表板、市場溫度計、52 次教家人的紀錄——':
    ': the four standing documents (red-flag checklist v2 / IPS / principles list v1.2 / buy list), the paper portfolio and monthly reports, the check-up routine, the investment thesis, the double report, the macro dashboard, the market thermometer, and the record of 52 times you taught your family — ',
  '這些不是作業，是你的操作系統':
    'these aren\'t homework, they\'re your operating system',
  '回填 01-overview.md':
    'Fill in 01-overview.md',
  '：52 週全勾＋里程碑＋一段年度心得':
    ': all 52 weeks ticked + milestones + a paragraph of year-end reflections',
  '第二年方向':
    'Direction for year two',
  '（候選）：CFA 一級正式備考（本課綱已覆蓋大半主題的直覺版）／量化工具（Python 回測、自動化月報）／真錢帳戶的漸進轉換（W39 的條件）／房地產與另類資產／家族財務治理（把「教家人」升級成家庭財務會議制度）':
    ' (candidates): formal CFA Level I prep (this curriculum already covers most topics in intuitive form) / quantitative tools (Python backtests, automated monthly reports) / a gradual switch to a real-money account (the conditions from W39) / real estate and alternative assets / family financial governance (upgrading "teaching the family" into a family finance meeting system)',
  '區塊 ② ／ 必讀導讀 · 約 30 分鐘':
    'Block ② / Required reading · about 30 minutes',
  '本週不讀新材料':
    'No new material to read this week',
  '15 分鐘':
    '15 min',
  '重讀自己的 W26 投資論文與 W39 月報':
    'Reread your own W26 investment thesis and W39 monthly report',
  '雙報告的文體基準。':
    'The style benchmark for the double report.',
  '5 分鐘':
    '5 min',
  '重讀 W40 的三大決策地圖':
    'Reread W40\'s three big decision maps',
  '報告 A 的目錄雛形。':
    'The skeleton of Report A\'s table of contents.',
  '10 分鐘':
    '10 min',
  '翻一遍課程首頁的 52 週列表':
    'Flip through the 52-week list on the course home page',
  '寫報告時「工具想不起來在哪週」的索引——上面的年度看板也可以直接點進去。':
    'An index for when you\'re writing and "can\'t remember which week a tool is in" — you can also click straight in from the annual board above.',
  '區塊 ③ ／ 練習 · 約 3 小時':
    'Block ③ / Exercise · about 3 hours',
  '完成雙報告':
    'Complete the double report',
  '任務 A｜報告 A（1.5 小時）':
    'Task A | Report A (1.5 hours)',
  '六節組裝——大部分是 W40–51 練習產出的整理更新；新寫的只有「三個建議」。':
    'Assemble the six sections — most of it is tidying and updating what the W40–51 exercises produced; only the "three recommendations" are newly written.',
  '任務 B｜報告 B（1 小時）':
    'Task B | Report B (1 hour)',
  '在 W26 論文的基礎上全面更新：最新財報、自算 WACC、納入報告 A 的交叉發現。':
    'Fully update on the basis of your W26 thesis: the latest financial statements, your own WACC, and the cross-findings from Report A.',
  '任務 C｜張力測試＋Rubric（30 分鐘）':
    'Task C | Tension test + rubric (30 min)',
  '寫半頁「若 A 的建議被採納，B 的估值怎麼變」，然後自評打分。':
    'Write half a page on "if A\'s recommendations are adopted, how does B\'s valuation change," then score yourself.',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '張力測試台三個建議分別勾選：CCC 縮短 10 天 → 每股 +1.10 元；WACC 降 0.3 個百分點 → +2.55 元；自由現金流 +5% → +2.00 元。三個全勾 → 每股 45.78 元（+14.4%），比三者單獨相加還多——因為現金流增加，又被更低的 WACC 放大了。':
    'On the tension test bench, tick each of the three recommendations separately: shorten the CCC by 10 days → +1.10 per share; cut WACC by 0.3 percentage points → +2.55; free cash flow +5% → +2.00. Tick all three → 45.78 per share (+14.4%), more than the three added up separately — because the extra cash flow is amplified by the lower WACC.',
  '雙報告完成（各 2–3 頁）':
    'Double report done (2–3 pages each)',
  '張力測試半頁完成':
    'Tension-test half page done',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '年度聽證會':
    'The annual hearing',
  '52 週的最後一場，形式升級——家人是評審。':
    'The last session of the 52 weeks, with an upgraded format — your family are the judges.',
  '雙報告簡報（15 分鐘）':
    'Double-report presentation (15 min)',
  '先用 CFO 身分報告「這家公司的錢管得如何、我有三個建議」；再換投資人身分報告「它值多少、我買不買」——中間明確說一句：「':
    'First report as the CFO, "how well this company manages its money, and my three recommendations"; then switch to the investor and report "what it\'s worth and whether I\'d buy" — and in between, say one line out loud: "',
  '現在我換桌子了。':
    'Now I\'ve switched tables.',
  '家人質詢（10 分鐘）':
    'Family questioning (10 min)',
  '邀請家人用這一年學過的所有武器提問：三張報表的比喻、護城河試金石、防身四題、殺信使測試……':
    'Invite your family to ask questions using every weapon learned this year: the three-statements metaphor, the moat litmus test, the four self-defense questions, the shoot-the-messenger test...',
  '他們問得出好問題，就是你教學成功的終極證明。':
    'If they can ask good questions, that is the ultimate proof your teaching worked.',
  '年度總結（5 分鐘）':
    'Year-end wrap-up (5 min)',
  '「一年前的第一課，我讓你們猜『月存一萬、三十年變多少』。今天我交出了兩份專業報告。謝謝你們當了 52 週的學生——其實你們是我最好的老師：':
    '"In the very first lesson a year ago, I had you guess \'save NT$10,000 a month — what is it worth after thirty years?\' Today I\'ve handed in two professional reports. Thank you for being my students for 52 weeks — really you\'re my best teachers: ',
  '講不到你們懂的地方，就是我沒真懂的地方。':
    'wherever I can\'t get you to understand is where I haven\'t truly understood myself.',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「所以到底要不要買？」':
    '"So should we buy or not?"',
  '照報告 B 誠實回答——包括「跳過」（W21：跳過拿滿分）。':
    'Answer honestly according to Report B — including "skip" (W21: skipping earns full marks).',
  '「明年還教嗎？」':
    '"Will you teach again next year?"',
  '「教——而且我們家已經有自己的投資系統了：規則卡、防身題、每月報告。明年的新主題，我們一起挑。」':
    '"Yes — and our family already has its own investing system: the rule cards, the self-defense questions, the monthly report. We\'ll pick next year\'s new topics together."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '雙報告＋張力測試完成，Rubric ≥ 8':
    'Double report + tension test done, rubric ≥ 8',
  '年度聽證會完成（家人至少提出三個「內行」問題）':
    'Annual hearing done (your family raised at least three "insider" questions)',
  '四大文件與所有持續性工具盤點歸檔':
    'The four standing documents and all ongoing tools inventoried and filed',
  '回填 curriculum/01-overview.md：第 52 週＋全部里程碑＋年度心得':
    'Fill in curriculum/01-overview.md: Week 52 + all milestones + year-end reflections',
  '決定第二年方向，更新學習者檔案的目標節':
    'Decide the direction for year two and update the goals section of the learner profile',
  '52 週完課 🎓':
    '52 weeks complete 🎓',
  '——投資人、操盤手、財務長的第一年基礎全部建成。這不是課程的結束，是你的操作系統 v1.0 的發布日。':
    '— the first-year foundations of investor, portfolio manager and CFO are all in place. This is not the end of the course; it is the release day of your operating system v1.0.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：投資人關係':
    'Previous week: investor relations',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle light / dark theme',
  '52 週完成情況':
    'Completion status across the 52 weeks',
  'CCC 縮短天數':
    'Days the CCC is shortened',
  'WACC 下降':
    'WACC reduction',
  '自由現金流增加':
    'Increase in free cash flow',
  '/" title="第':
    '/" title="Week',
  '週">':
    '">',
  'Q1 共同地基':
    'Q1 Foundations',
  'Q2 投資人':
    'Q2 Investor',
  'Q3 操盤手':
    'Q3 Portfolio Manager',
  'Q4 財務長':
    'Q4 CFO',
  '52 週全部完成。這一頁，是你的操作系統 v1.0 的發布日。':
    'All 52 weeks complete. This page is the release day of your operating system v1.0.',
  '這台裝置上還沒有勾過任何一週的完成檢核——也許你是在別的裝置上學的。點任何一格，都能回到那一週。':
    'No weekly completion checklist has been ticked on this device yet — maybe you studied on another device. Click any cell to go back to that week.',
  '已完成':
    'Completed',
  '週。點任何一格，都能回到那一週補完。':
    'weeks. Click any cell to go back to that week and finish it.',
  'CCC 釋放':
    'CCC frees up cash of',
  '億現金（每股':
    '× 100 million of cash (per share',
  'WACC 從 8.0% 降到':
    'WACC falls from 8.0% to',
  '自由現金流從 50 億增加到':
    'Free cash flow rises from 50 × 100 million to',
  '億':
    '× 100 million',
  '<b>報告 A 的建議，讓報告 B 的估值上修':
    '<b>Report A\'s recommendations lift Report B\'s valuation by',
  '元。</b>':
    'dollars per share.</b> ',
  '三者一起時效果比單獨相加更大：更多的現金流，被更低的折現率放大了。':
    ' All three together do better than adding them up separately: more cash flow, amplified by a lower discount rate.',
  '勾選報告 A 的建議。每一條建議，都應該能翻譯成報告 B 裡的一個數字。':
    'Tick Report A\'s recommendations. Every recommendation should translate into a number in Report B.',
  '第':
    'Item',
  '項給':
    'score:',
  '分':
    'points',
  '分——完課。</b>':
    'points — course complete.</b> ',
  '項還有進步空間，那就是第二年的起點。':
    '— room to improve, and that is where year two starts.',
  '滿分。':
    'Full marks.',
  '分，還差':
    'points,',
  '分。</b>先補分數最低的項目：第':
    'more to go.</b> Start with the lowest-scoring item(s) —',
  '項。':
    'in the rubric above.',
  '🎓 52 週完課——操作系統 v1.0 發布。':
    '🎓 52 weeks complete — operating system v1.0 released.',
};
