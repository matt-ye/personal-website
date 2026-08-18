/*
 * 給家人的投資課 Week 02：通膨與實質報酬 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-02-inflation.html
 *
 * 沿用 week-01 的慣例（值不動、單位進標籤；散文裡的金額照常換算；
 * 行內標記邊界補半形空白）。本週另有三件事值得記：
 *
 * ⚠ 行政院主計總處 → Directorate-General of Budget, Accounting and Statistics
 *   (DGBAS)。這是該機構自用的官方英文名，不是自創譯法，所以不進 KEEP。
 *   導讀那一條字數受限，用縮寫 DGBAS。
 *
 * ⚠ 「年」這一條同時出現在兩個語境：資料表的表頭 <th>年</th>，
 *   以及 JS 裡的 `s.N + " 年"`（滑桿讀數與半衰期）。一個 key 只能有一個值，
 *   所以取 'yrs'——表頭讀作 yrs 沒問題，滑桿讀數 "30 yrs" 也對。
 *   （week-01 這條給的是 'Year'，滑桿會變成 "30 Year"；那份不歸本檔改。）
 *
 * ⚠ 純標點的文字節點（例如 <strong>…</strong> 後面單獨一個「。」）
 *   抽取器不視為中文（U+3002 不在 [一-鿿]），對照表碰不到，會原樣留在英文頁。
 *   這是抽取器的邊界，不是漏譯。
 *
 * 語域：寫給家人的教材。雪球賽跑、口袋破洞、牛肉麵這些比喻要留住，
 *   不要改寫成央行報告。
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
  '給家人的投資課 · Q1 共同地基 · Week 02':
    'Family Investing Course · Q1 Common Ground · Week 02',
  通膨與實質報酬: 'Inflation and Real Returns',
  '上週學會「錢會長大」，這週學「錢同時在縮水」。':
    'Last week you learned that money grows. This week: it is shrinking at the same time.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 1 週': 'Week 1',
  '52 週 · 第 2 週': '52 weeks · Week 2',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles:',
  '實質報酬是投資人設定報酬目標的基準（Q2）、操盤手評估績效的底線（Q3）、財務長設定資金成本的背景參數（Q4）。':
    " Real return is the benchmark the investor sets return targets against (Q2), the floor the trader judges performance by (Q3) and the background parameter the CFO uses to set the cost of capital (Q4).",
  '開始前 10 分鐘：': 'First 10 minutes:',
  '回顧上週分享時對方卡住的點——是複利的「後段爆發」，還是 72 法則？先用自己的話再講一次，講順了再往下。':
    ' Think back to where the person you taught last week got stuck — the back-half surge, or the Rule of 72? Say it again in your own words, and only move on once it comes out smoothly.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '把 100 萬現金鎖進保險箱 30 年，期間通膨每年 2%——打開時，這 100 萬的購買力剩多少？':
    'You lock NT$1 million in cash in a safe for 30 years while inflation runs at 2% a year. When you open it, how much can that NT$1 million still buy?',
  猜一個答案: 'Pick an answer',
  '還是 100 萬啊': 'Still NT$1 million, surely',
  '大約 90 萬': 'About NT$900,000',
  '大約 75 萬': 'About NT$750,000',
  只剩一半多: 'Only a bit over half',
  萬元的購買力: 'in purchasing power (NT$10k)',
  '100 萬': 'NT$1M',
  '帳面數字（一毛沒少）': 'On paper, nothing is missing',
  '−44.8 萬': '−NT$448k',
  被通膨吃掉的購買力: 'Purchasing power eaten by inflation',
  '35 年': '35 years',
  '2% 通膨的購買力半衰期': 'Half-life of purchasing power at 2% inflation',
  '答對了。帳面上一毛都沒少，但它能買到的東西只剩一半多一點——這就是「反向複利」，本週的主角。':
    'Correct. Not a cent has gone from the paper number, but it buys only a little more than half of what it used to — that is compounding in reverse, the subject of this week.',
  '比你想的更嚴重：只剩 55.2 萬的購買力。帳面數字一毛沒少，縮水的是它能買到的東西——通膨是看不見的反向複利。':
    'Worse than you thought: NT$552,000 of purchasing power left. Not a cent has gone from the paper number; what shrank is what it buys — inflation is compounding in reverse, and it is invisible.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 通膨是「反向複利」': '1. Inflation is compounding in reverse',
  '上週的複利公式讓錢變多；通膨用':
    "Last week's compounding formula made money grow. Inflation uses ",
  同一條公式: 'the same formula',
  '讓錢的購買力變少：': ' to shrink what money buys:',
  '購買力 =': 'Purchasing power =',
  '：年通膨率': ': annual inflation rate',
  '：年數': ': number of years',
  '複利是你的資產在滾雪球，通膨是物價在滾雪球——':
    'Compounding is your assets rolling up a snowball; inflation is prices rolling up one of their own — ',
  兩顆雪球在賽跑: 'two snowballs in a race',
  購買力半衰期表: 'Half-life table for purchasing power',
  '（多少年後你的錢「只值一半」）：':
    ' (how many years until your money is "worth half"):',
  年通膨率: 'Annual inflation',
  購買力減半: 'Purchasing power halves',
  '30 年後購買力剩': 'Left after 30 years',
  '69.7 年': '69.7 yrs',
  '35.0 年': '35.0 yrs',
  '23.4 年': '23.4 yrs',
  '14.2 年': '14.2 yrs',
  '注意 2% 這一行：': 'Look at the 2% row: ',
  '2% 是多數央行（含美國 Fed）的通膨目標':
    '2% is the inflation target of most central banks, the US Fed included',
  '，代表「正常運作的經濟」也會讓你的現金每 35 年減半。通膨不是意外，是制度的預設值——這就是為什麼「不投資」本身是一個有成本的決定。':
    ', which means a "normally functioning economy" still halves your cash every 35 years. Inflation is not an accident, it is the default setting of the system — which is why "not investing" is itself a decision with a price on it.',

  '2. 名目 vs 實質：費雪方程式': '2. Nominal vs real: the Fisher equation',
  名目報酬: 'Nominal return',
  '（nominal）：帳戶數字的成長率。':
    ' (nominal): how fast the number in your account grows. ',
  實質報酬: 'Real return',
  '（real）：購買力的成長率——你真正變有錢的速度。':
    ' (real): how fast your purchasing power grows — the speed at which you actually get richer.',
  '精確式：(1 + r': 'Exact: (1 + r',
  實質: 'real',
  名目: 'nominal',
  '近似式：r': 'Approximation: r',
  '算例 1': 'Worked example 1',
  '名目 6%、通膨 2.5%：精確': 'Nominal 6%, inflation 2.5%. Exact:',
  '；近似': '; approximate',
  '低通膨時近似夠用；通膨大（例如 8%、10%）時兩者差距會明顯拉開，要用精確式。':
    'When inflation is low the approximation is good enough. When it is large (8%, 10% say) the two pull apart noticeably and you need the exact form.',
  '算例 2 ／ 定存的真相': 'Worked example 2 / what a term deposit really pays',
  '定存名目 1.5%、通膨 2% → 實質約':
    'A term deposit at a nominal 1.5% with 2% inflation gives a real return of about',
  '。錢在帳面上變多、在購買力上變少。':
    '. The number goes up; what it buys goes down. ',
  '「保本」保的是名目，不是購買力。':
    '"Capital preserved" preserves the nominal amount, not the purchasing power.',
  '算例 3': 'Worked example 3',
  '通膨 1.5% 走 20 年：今天的 100 萬，20 年後購買力只剩':
    'At 1.5% inflation over 20 years, NT$1 million today is left with the buying power of',
  '74.2 萬': 'NT$742k',
  '。規劃退休金時若忘了這一步，會系統性少準備 25–30%。':
    '. Skip this step when planning a retirement pot and you will under-prepare by 25–30%, systematically.',

  /* ── 互動計算機 ── */
  雙雪球賽跑: 'Two snowballs racing',
  '延續上週的計算機：每月投入 1 萬元，這次加入通膨——看「帳面數字」與「真實購買力」的差距怎麼拉開。':
    "Picking up last week's calculator: NT$10,000 a month, with inflation added this time. Watch the gap open up between the number on paper and what it actually buys.",
  名目年化報酬: 'Nominal annual return',
  名目年化報酬率: 'Nominal annual return',
  投資年數: 'Years invested',
  '30 年': '30 years',
  '名目終值（帳面數字）': 'Nominal value (the paper number)',
  '實質購買力（今日物價表示）': "Real purchasing power (in today's prices)",
  '名目終值與實質購買力隨年數變化的折線圖':
    'Line chart of nominal value and real purchasing power over time',
  '1,004.5 萬': 'NT$10.045M',
  /* 統計卡與表頭：儲存格是裸數字（單位後綴已剝掉），單位必須在標籤上 */
  名目終值: 'Nominal value (NT$10k)',
  '554.6 萬': 'NT$5.546M',
  實質購買力: 'Real purchasing power (NT$10k)',
  '實質報酬率（費雪精確式）': 'Real return (exact Fisher)',
  購買力半衰期: 'Half-life of purchasing power',
  '以表格檢視資料（每 5 年）': 'View the data as a table (every 5 years)',
  /* 表頭與 JS 讀數共用同一條，取 yrs（見檔頭） */
  年: 'yrs',
  差距: 'Gap',
  /* SVG 與表格裡的單位後綴：值留數字，單位在標籤（見檔頭） */
  '萬</text>': '</text>',
  '年</text>': '</text>',
  萬: '',
  "萬</td><td class='num'>": "</td><td class='num'>",
  "萬</td><td class='num'>−": "</td><td class='num'>−",
  '萬</td></tr>': '</td></tr>',
  "第 <span class='num'>": "Year <span class='num'>",
  "</span> 年<br>名目 <span class='num'>": "</span><br>Nominal <span class='num'>",
  "萬</span><br>實質 <span class='num'>": "</span><br>Real <span class='num'>",
  '萬</span>': '</span>',

  /* ── CPI ── */
  '3. CPI：通膨怎麼被測量': '3. CPI: how inflation gets measured',
  'CPI（消費者物價指數）＝追蹤一籃固定商品與服務的價格變化。台灣由':
    'CPI (the consumer price index) tracks the price of a fixed basket of goods and services. In Taiwan it is published by ',
  行政院主計總處:
    'the Directorate-General of Budget, Accounting and Statistics (DGBAS)',
  '每月 5 日左右發布上月數據。要知道的三件事：':
    ', around the 5th of each month, covering the month before. Three things worth knowing:',
  權重結構: 'The weights',
  '：食物、居住、交通是大宗——所以「感覺物價漲很兇」常常是因為你的個人消費籃（例如外食比重高）跟官方籃子不同':
    ': food, housing and transport dominate — so "it feels like prices are soaring" is usually because your own basket (a lot of eating out, say) is not the official one',
  '核心 CPI': 'Core CPI',
  '：剔除蔬果與能源（波動大的項目），央行看趨勢時更重視它':
    ': strips out fresh produce and energy, the volatile items. Central banks lean on it when they want the trend',
  侷限: 'The limits',
  '：CPI 是平均概念，抓不到個人差異；房價（資產價格）不直接計入，只透過房租間接反映——這是「CPI 低但買房痛苦」的原因':
    ': CPI is an average, so it cannot see individual differences. House prices are asset prices and do not go in directly, only indirectly through rent — which is why CPI can be low while buying a home hurts',
  '台灣的歷史量級（教學參考，精確數字以主計總處為準）：台灣長期屬於低通膨經濟體，多數年份 CPI 年增率在 0–2% 之間；2022 年受全球通膨影響升破 2.9%，是近十幾年高點——對照美國同年一度突破 9%，台灣相對溫和。':
    'Historical orders of magnitude for Taiwan (for teaching; take exact figures from the DGBAS): Taiwan has long been a low-inflation economy, with annual CPI growth between 0% and 2% in most years. In 2022 global inflation pushed it past 2.9%, the highest in more than a decade — mild next to the US, which briefly topped 9% that same year.',

  /* ── 通膨對資產的影響 ── */
  '4. 通膨對各類資產的影響': '4. What inflation does to each kind of asset',
  '（Q1 第 12 週景氣循環、Q2 資產配置的伏筆）':
    '(Groundwork for business cycles in week 12, and asset allocation in Q2)',
  資產: 'Asset',
  高通膨環境: 'In high inflation',
  原因: 'Why',
  '現金／定存': 'Cash / term deposits',
  最傷: 'Worst hit',
  '名目報酬固定且低，實質直接轉負':
    'The nominal return is fixed and low, so the real one goes straight to negative',
  名目債券: 'Nominal bonds',
  受損: 'Hurt',
  '固定票息的購買力被侵蝕；利率隨通膨上升 → 債價下跌（下週講為什麼）':
    'The fixed coupon loses purchasing power; rates rise with inflation → bond prices fall (why, next week)',
  股票: 'Stocks',
  長期尚可: 'All right long term',
  '好公司能漲價轉嫁成本（定價權＝護城河）；但升息會壓估值、短期會痛':
    'Good companies can raise prices and pass the cost on (pricing power = moat) — but rate rises compress valuations, and the short term hurts',
  '房地產／實質資產': 'Property / real assets',
  相對保值: 'Holds up relatively well',
  租金與重置成本跟著物價走: 'Rents and replacement costs move with prices',

  /* ── 闢謠 ── */
  '5. 常見誤解闢謠': '5. Three things people get wrong',
  '「通縮（物價下跌）不是更好嗎？」': '"Isn\'t deflation — falling prices — better?"',
  '對持有現金的人短期是，但通縮讓企業收入萎縮→裁員→需求更弱的惡性循環，對經濟整體比溫和通膨危險——這是央行寧可要 2% 通膨的原因。':
    'Short term, yes, if you are holding cash. But deflation shrinks company revenue → layoffs → weaker demand still, a vicious circle that is more dangerous to the economy as a whole than mild inflation. That is why central banks would rather have 2%.',
  '「黃金一定抗通膨」': '"Gold always beats inflation"',
  '黃金長期大致保值，但中短期與通膨的相關性並不穩定，不是自動避險器。':
    'Gold roughly holds its value over the long run, but over the short and medium term its correlation with inflation is unstable. It is not an automatic hedge.',
  '「薪水有調就不怕通膨」': '"A pay rise means inflation can\'t touch me"',
  '要比較的是調薪率 vs 通膨率；名目調薪 2%、通膨 3%，實質是減薪。':
    'What matters is the raise against the inflation rate. A nominal 2% raise with 3% inflation is a pay cut in real terms.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '15 分': '15 min',
  '專欄 #2《通貨膨脹》重讀 ↗': 'Re-read column #2, "Inflation" ↗',
  '已有的基礎。重點放在銜接：專欄講「為什麼」，本週補「怎麼算」。':
    'Ground you already have. Focus on the join: the column covers why, this week adds how to work it out.',
  '40 分': '40 min',
  '行政院主計總處 → 物價指數專區 ↗': 'DGBAS → price indices section ↗',
  '找到最新一期 CPI 新聞稿。讀法：先看年增率總數 → 再看七大類哪類漲最多 → 對照自己家的消費結構。預期收穫：第一次「用官方原始來源」取數據——這個習慣之後每週都用。':
    'Find the latest CPI press release. How to read it: start with the headline year-on-year figure → see which of the seven major categories rose most → compare that with what your own household actually spends on. You should come away having taken a number from the original official source for the first time — a habit you will use every week from here on.',
  '20 分': '20 min',
  '用英文材料驗證你對費雪方程式的理解。':
    'Check your grasp of the Fisher equation against an English-language source.',
  選讀: 'Optional',
  'FRED：美國 CPI（CPIAUCSL）↗': 'FRED: US CPI (CPIAUCSL) ↗',
  '把美國 CPI 畫成 50 年圖，找出 1970s 與 2021–22 兩段高通膨。':
    'Chart 50 years of US CPI and pick out the two high-inflation stretches: the 1970s and 2021–22.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  三個任務: 'Three tasks',
  '任務 A｜購買力還原（20 分鐘）':
    'Task A | Restoring purchasing power (20 minutes)',
  '到主計總處查「消費者物價指數及其年增率」歷年表':
    'Go to the DGBAS and find the historical table of the consumer price index and its annual rate of change',
  '取 20 年前與最新的指數值，計算：20 年前的 100 萬相當於今天多少購買力？':
    'Take the index value from 20 years ago and the latest one, then work out: what is NT$1 million from 20 years ago worth in purchasing power today?',
  '公式：': 'Formula: ',
  '100萬 × CPI': 'NT$1M × CPI',
  今: 'now',
  '20年前': '20 yrs ago',
  '（用指數相除，不要用年增率累乘，比較準）':
    ' (divide the index values rather than compounding the yearly rates — it is more accurate)',
  '任務 B｜升級上週的複利表（30 分鐘）':
    "Task B | Upgrading last week's compounding sheet (30 minutes)",
  '在第 1 週的試算表加參數格：':
    'Add a parameter cell to the week 1 spreadsheet: ',
  '通膨率 = 2%': 'Inflation = 2%',
  '新增兩欄：': 'Add two columns: ',
  實質報酬率: 'Real return rate',
  '（用費雪精確式）、': ' (with the exact Fisher form) and ',
  實質終值: 'Real final value',
  '（購買力表示）': ' (expressed as purchasing power)',
  '對照：月存 1 萬 30 年，名目千萬 vs 實質購買力是多少？寫下感想一句（可先用上面的雙雪球計算機對答案）':
    'Compare: NT$10,000 a month for 30 years — NT$10 million nominal, versus how much real purchasing power? Write down one line of reaction. (Get the answer from the two-snowball calculator above first if you like.)',
  '驗證點：': 'Check: ',
  '名目 6%／通膨 2.5% 時，實質報酬率欄應顯示':
    'at a nominal 6% with 2.5% inflation, the real-return column should read',
  自我檢核: 'Check yourself',
  '任務 A 用了官方指數原始值（不是新聞轉述）':
    'Task A used the official index values themselves, not a figure quoted in the news',
  '複利表新增欄位公式正確（驗證值 3.41% 通過）':
    'The new columns in the compounding sheet compute correctly (the 3.41% check passes)',
  '快問快答三題全對（見下）': 'All three quick questions right (below)',
  '任務 C｜快問快答三題（先心算，再展開對答案）':
    'Task C | Three quick questions (do them in your head, then expand to check)',
  '通膨 3%，你的錢幾年購買力減半？（用 72 法則的變形心算）':
    'At 3% inflation, how many years until your money buys half as much? (Use the Rule of 72 the other way round.)',
  '→ 約': '→ About',
  '23–24 年': '23–24 years',
  '（72÷3 = 24；精確 23.4 年）。': ' (72 ÷ 3 = 24; exactly, 23.4 years).',
  '定存 1.6%、通膨 2.2%，實質報酬近似是多少？':
    'A term deposit at 1.6% with 2.2% inflation — roughly what is the real return?',
  '（實質負報酬）。': ' (a negative real return).',
  '為什麼房價漲很兇的年份，CPI 可能還是很低？':
    'Why can CPI stay low in a year when house prices are soaring?',
  '→ 因為': '→ Because ',
  '房價是資產價格，不直接進 CPI':
    'house prices are asset prices and do not go into CPI directly',
  '；CPI 只透過「房租」間接反映居住成本，而房租漲幅通常遠比房價平緩。':
    '. CPI picks up housing costs only indirectly, through rent, and rents usually climb far more gently than prices.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  從一碗牛肉麵開始: 'Start with a bowl of beef noodles',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（體感提問）': 'Opening (make it something they can feel)',
  '「你記得 20 年前一碗牛肉麵多少錢？現在呢？」':
    '"Do you remember what a bowl of beef noodle soup cost 20 years ago? And now?"',
  '讓對方自己說出「差不多變兩倍」之類的答案——這就是通膨的體感版。':
    'Let them be the one to say "about double". That is inflation, felt rather than calculated.',
  '核心比喻：口袋破洞': 'The core metaphor: a hole in your pocket',
  '「通膨像一個': '"Inflation is like ',
  看不見的口袋破洞: 'an invisible hole in your pocket',
  '。錢放著不動，每年從洞裡漏掉 2%。一年感覺不到，但 35 年會漏掉一半。」':
    '. Leave money sitting still and 2% of it leaks out through the hole every year. You cannot feel it in one year, but over 35 years half of it is gone."',
  '互動：半衰期表': 'Interaction: the half-life table',
  '拿出上面的半衰期表——「所以銀行定存不是『安全』，是『慢慢變少的安全』。真正的比較不是『投資 vs 不動』，是':
    'Pull up the half-life table above. "So a bank deposit is not \'safe\', it is \'safe while quietly shrinking\'. The real comparison is not \'invest vs sit still\', it is ',
  '『雪球滾得快 vs 口袋漏得快』':
    "'how fast the snowball rolls vs how fast the pocket leaks'",
  連回上週: 'Tie it back to last week',
  '「上週說投資 6% 很好，但要誠實地扣掉通膨——實際變有錢的速度大概是 3.5–4%。聽起來變少了，但這才是真的數字，我們家做規劃都用真的數字。」':
    '"Last week I said 6% was good, but we should be honest and take inflation off — the speed you actually get richer at is about 3.5–4%. It sounds like less, but it is the real number, and in this family we plan with real numbers."',
  預期反應與應對: 'What they will say, and what to answer',
  '「那錢都拿去投資，急用怎麼辦？」':
    '"If it all goes into investments, what do I do in an emergency?"',
  '正好預告資金分配觀念：預備金要留，那部分「漏一點」是買安心的保費。':
    'A good cue for how to split your money: keep the emergency fund, and accept that this part "leaks a little" — that is the premium you pay for peace of mind.',
  '「政府數字不可信，我感覺漲更多」':
    '"Government numbers can\'t be trusted, it feels like more than that to me"',
  '承認個人籃子與官方籃子不同（外食族感受特別深），但趨勢方向官方數據仍是最可靠的。':
    'Grant the point: your basket is not the official basket, and people who eat out a lot feel it most. But on the direction of the trend, the official data is still the most reliable thing there is.',
  本腳本可搭配專欄: 'Pair this script with column',
  '#2《通貨膨脹》': '#2, "Inflation"',
  '一起給對方讀。': ' and read them together.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  本週完成的定義: 'What counts as done this week',
  能寫出費雪精確式並解釋何時近似式不夠用:
    'You can write the exact Fisher equation and explain when the approximation stops being good enough',
  '完成 20 年購買力還原（用官方 CPI 指數）':
    'The 20-year purchasing-power calculation is done, using the official CPI index',
  複利表已含實質報酬欄位: 'The compounding sheet now has real-return columns',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）':
    "One line of notes on the week, for next week's review",
  '🎓 第 2 週完成——下週見：利率與殖利率曲線。':
    '🎓 Week 2 done — next up: interest rates and the yield curve.',
  '下週預告 · Week 03：利率與殖利率曲線':
    'Next week · Week 03: interest rates and the yield curve',
  '——通膨的孿生兄弟。你會學「利率是錢的價格」、央行怎麼用它對抗通膨，以及為什麼利率上升時債券價格會下跌。':
    " — inflation's twin. You will learn that the interest rate is the price of money, how central banks use it to fight inflation, and why bond prices fall when rates rise.",

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：複利與時間價值': 'Previous week: compounding and the time value of money',
  專欄文章: 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
