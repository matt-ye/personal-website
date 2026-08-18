/*
 * 給家人的投資課 Week 19：估值一——相對估值深用 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-19-relative-valuation.html
 *
 * 沿用 week-01 的慣例。本週的單位是「億」而不是「萬」，處理方式同源：
 *
 * ⚠ EV 計算機的數字全由 JS 算（滑桿值直接進句子），對照表不能改算術。
 *   所以「億」不譯成 hundred million（"net debt of 50 hundred million" 不是英文），
 *   而是把單位收進計算機標題：'EV/EBITDA calculator (all figures in NT$100m)'，
 *   句子裡的數字保持裸值。裸值後面接的那一段一律以「單字」開頭而不是標點——
 *   抽取器會保留原字串的前後空白，若英文段落以逗號起頭會渲染成 "50 ,"。
 *
 * ⚠ 同理，EV 判讀句裡的「倍」是 gap.toFixed(1) 的後綴，譯成 'turns'
 *   （估值語境的標準說法：understates it by 0.4 turns），不譯成 'times' 以免
 *   讀成「40% 倍」。
 *
 * ⚠ 專有名詞照抄不自創：Damodaran、McKinsey、Buffett、EBITDA、comps、PEG。
 *   坪（買房比價的比喻）用台灣英文書寫的通用寫法 ping。
 *
 * ⚠ 純標點的文字節點（「：」「）」「、」等全形標點）不在 [一-鿿]，抽取器看不見，
 *   會原樣留在英文頁。這是抽取器的邊界，不是漏譯。
 *
 * 語域：寫給家人的教材。買房比價、凶宅、珍珠與爛掉的東西這些比喻要留住，
 *   不要改寫成賣方研究報告。
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
  '單元導航': 'Section navigation',
  '切換深淺主題': 'Toggle light / dark theme',

  /* ── 標題區 ── */
  '給家人的投資課 · Q2 投資人季 · Week 19':
    "Family Investing Course · Q2 The Investor's Quarter · Week 19",
  '估值一——相對估值深用': 'Valuation One — Relative Valuation in Depth',
  'W13 的健檢回答「這公司好不好」，估值回答「值多少、現在貴不貴」——投資決策的另一半。':
    'The W13 health check answers whether a company is any good. Valuation answers what it is worth and whether it is expensive right now — the other half of the decision.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 9': 'Weeks 9',
  '13 週': '13',
  '52 週 · 第 19 週': '52 weeks · Week 19',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles:',
  '相對估值是最常用的估值語言——Q2 投資論文的骨幹、Q4 週 47 併購定價的工具。本週學會選對倍數、找對同業、看穿溢價折價的原因。':
    ' Relative valuation is the most widely spoken valuation language — the backbone of the Q2 investment thesis, and the tool for pricing acquisitions in week 47. This week you learn to pick the right multiple, find the right peers, and see through the reasons behind a premium or a discount.',
  '開始前 10 分鐘：': 'First 10 minutes:',
  '回顧上週分享「果園修枝」的反應——修回比例的邏輯講通了嗎、IPS 那張卡對方看了什麼反應。':
    ' Think back to how the orchard-pruning script landed last week — did the logic of trimming back to target come across, and how did they react to the IPS card?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  'A 公司本益比 12 倍、B 公司 30 倍——哪家比較「便宜」？':
    'Company A trades at a P/E of 12, company B at 30. Which one is "cheaper"?',
  '猜一個答案': 'Pick an answer',
  'A——12 倍當然比 30 倍便宜': 'A — 12x is obviously cheaper than 30x',
  '光看這兩個數字，無法判斷': 'These two numbers alone cannot tell you',
  '答對了——倍數要配著「成長多快、賺錢品質多好、多穩」一起看。若 B 成長 20%、A 成長 3%，B 反而可能更便宜（PEG 的直覺）；而 A 的 12 倍也可能是市場對衰退的定價（價值陷阱）。孤立的倍數沒有意義——這就是本週的主題。':
    'Correct — a multiple has to be read alongside how fast the company grows, how good the profit is and how steady it is. If B grows at 20% and A at 3%, B may well be the cheaper one (the intuition behind PEG); and A\'s 12x may be the market pricing in decline (a value trap). An isolated multiple means nothing — which is this week\'s subject.',
  '直覺的答案——但孤立的倍數沒有意義。若 B 成長 20%、A 只有 3%，B 反而可能更便宜（PEG 的直覺）；A 的 12 倍也可能是市場對衰退的定價（價值陷阱）。「貴／便宜」要放在成長、品質、風險的脈絡裡看——這就是本週的主題。':
    'The intuitive answer — but an isolated multiple means nothing. If B grows at 20% and A at only 3%, B may well be the cheaper one (the intuition behind PEG); and A\'s 12x may be the market pricing in decline (a value trap). Expensive and cheap only mean something in the context of growth, quality and risk — which is this week\'s subject.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 相對估值的核心邏輯：用倍數比價':
    '1. The core logic: pricing by multiples',
  '相對估值＝「同類資產應該有相似的價格倍數」。跟買房看「每坪單價」一樣：不用從頭算房子值多少，看隔壁同社區成交價就有概念。':
    'Relative valuation says that similar assets should trade at similar multiples. It works the way price per ping does when you buy a home: you do not have to work out from scratch what the place is worth, because recent sales in the same complex already give you a feel.',
  '某倍數 ＝ 市場價格 ÷ 某個財務基準':
    'Some multiple = market price ÷ some financial base',
  '分母放不同的基準，就得到不同倍數，各有適用場景。相對估值的三步：':
    'Put a different base in the denominator and you get a different multiple, each suited to a different situation. Relative valuation in three steps: ',
  '①選對倍數 ②找對同業（comps）③解釋差異':
    '① pick the right multiple ② find the right peers (comps) ③ explain the differences',

  /* ── 四個倍數 ── */
  '2. 四個主要倍數與適用場景':
    '2. Four main multiples and where each one fits',
  '倍數': 'Multiple',
  '公式': 'Formula',
  '最適用': 'Best for',
  '陷阱': 'Traps',
  'P/E 本益比': 'P/E',
  '股價 ÷ EPS': 'Price ÷ EPS',
  '獲利穩定的成熟公司': 'Mature companies with steady profits',
  '虧損（EPS&lt;0）無意義；一次性損益扭曲 EPS（W5）':
    'Meaningless at a loss (EPS&lt;0); one-off items distort EPS (W5)',
  'P/B 股價淨值比': 'P/B',
  '股價 ÷ 每股淨值': 'Price ÷ book value per share',
  '銀行、重資產、淨值扎實者':
    'Banks, asset-heavy businesses, anywhere book value is solid',
  '輕資產公司淨值失真；商譽灌水的淨值（W6）':
    'Book value is distorted for asset-light companies; goodwill inflates it (W6)',
  '企業價值 ÷ EBITDA': 'Enterprise value ÷ EBITDA',
  '跨資本結構比較、併購':
    'Comparing across capital structures; pricing acquisitions',
  '忽略 CapEx 差異（W7 Buffett 的批評）':
    "Ignores differences in CapEx (Buffett's complaint, W7)",
  'P/S 股價營收比': 'P/S',
  '市值 ÷ 營收': 'Market cap ÷ revenue',
  '尚未獲利的成長股': 'Growth companies that are not profitable yet',
  '營收不等於獲利能力；最粗糙':
    'Revenue is not earning power; the crudest of the four',
  'P/E 與 P/B 的快速算例': 'A quick worked example of P/E and P/B',
  '：股價 90、EPS 6、每股淨值 40 → P/E ＝ 15.0x、P/B ＝ 2.25x。':
    ': price 90, EPS 6, book value per share 40 → P/E = 15.0x, P/B = 2.25x.',
  'EV 的計算最容易錯（回想 W6 的有息負債）——':
    'EV is the easiest one to get wrong (remember interest-bearing debt from W6) — ',
  '拉下面的計算機，順便看看兩種常見錯誤會差多少':
    'drag the calculator below and see how far the two common mistakes take you off',

  /* ── EV 計算機（單位收進標題，句子裡保持裸值，見檔頭） ── */
  'EV/EBITDA 計算機（單位：億）':
    'EV/EBITDA calculator (all figures in NT$100m)',
  '市值': 'Market cap',
  '有息負債': 'Interest-bearing debt',
  '現金': 'Cash',
  'EV 企業價值': 'EV, enterprise value',
  '✓ 正確：EV ÷ EBITDA': '✓ Correct: EV ÷ EBITDA',
  '✕ 常見錯誤：市值 ÷ EBITDA': '✕ Common mistake: market cap ÷ EBITDA',
  '為什麼用 EV 不用市值？EBITDA 是「還沒付利息給債主之前」的獲利，分子也要用「股東＋債主」的總價值（EV）才對稱——這也是 EV/EBITDA 能跨不同負債水準比較的原因。預設值即講義算例：EV＝1000＋200−150＝1050、EV/EBITDA＝7.0x。':
    'Why EV rather than market cap? EBITDA is profit measured before any interest is paid to lenders, so the numerator has to be the total value belonging to shareholders and lenders together — EV — for the two halves to match. That is also why EV/EBITDA can compare companies carrying very different amounts of debt. The default values are the worked example from the notes: EV = 1000 + 200 − 150 = 1050, EV/EBITDA = 7.0x.',
  '<b>兩者差不多</b>——因為有息負債與現金接近抵銷（淨負債':
    '<b>Much the same either way</b> — interest-bearing debt and cash nearly cancel out, leaving net debt of just',
  '億）。負債越重的公司，用錯分子的誤差越大——把有息負債拉高看看。':
    ' — and the heavier a company\'s debt, the bigger the error from using the wrong numerator. Drag interest-bearing debt higher and watch.',
  '<b>用市值算會低估': '<b>Using market cap understates it by',
  '倍</b>——這家公司淨負債':
    'turns</b> — this company carries net debt of',
  '億，債主的份沒被算進去；同樣的 EBITDA，你以為買得便宜，其實還背著債。負債越重，這個錯越致命。':
    ' and the lenders\' share never got counted. With the same EBITDA you think you are buying cheap, while still carrying the debt. The heavier the debt, the more fatal the mistake.',
  '<b>用市值算會高估': '<b>Using market cap overstates it by',
  '倍</b>——這家公司現金多於有息負債（淨現金':
    'turns</b> — this company holds more cash than interest-bearing debt, with net cash of',
  '億），滿手現金讓真實的企業價值更便宜；用市值算反而虧待了它。':
    ' and a pile of cash makes the true enterprise value cheaper. Market cap does the company a disservice here.',

  /* ── comps ── */
  '3. 找對同業（comps）：商業模式 &gt; 產業代碼':
    '3. Finding the right peers: business model &gt; industry code',
  'comps 選錯，後面全錯。選同業組的原則：':
    'Get the comps wrong and everything after them is wrong. Principles for picking the peer group:',
  '商業模式相似': 'A similar business model',
  '優先於「同產業分類」——一家「電子公司」可能其實是通路商，該跟通路商比，不是跟製造商比':
    ' comes before sharing an industry classification — an "electronics company" may really be a distributor, and should be compared with distributors, not manufacturers',
  '規模、成長階段、地區': 'Size, stage of growth and region',
  '盡量對齊': ' should line up as far as they can',
  '4–6 家': 'Four to six',
  '足矣，太多會納入雜訊': ' is enough; more than that only brings in noise',
  '加上': 'Add ',
  '公司自己的歷史區間': "the company's own historical range",
  '（historical band）：跟自己的 5–10 年 P/E 帶比，看現在處於高檔還低檔':
    ' (the historical band): compare it against its own 5–10 year P/E band and see whether it sits high or low right now',

  /* ── 三大解釋 ── */
  '4. 倍數差異的三大解釋：便宜通常有理由':
    '4. Three explanations for a gap in multiples: cheap usually has a reason',
  '倍數差異幾乎總能歸因到三件事：':
    'A difference in multiples almost always comes back to three things: ',
  '①成長性': '① growth',
  '（成長快的理應更高倍數）':
    ' (faster growth deserves a higher multiple) ',
  '②ROIC／資本報酬品質': '② ROIC, the quality of the return on capital',
  '（同樣成長，靠高 ROIC 達成的更值錢——W9 杜邦、專欄 #6 護城河）':
    ' (for the same growth, growth built on high ROIC is worth more — DuPont in W9, moats in column #6) ',
  '③風險／確定性': '③ risk and certainty',
  '（獲利穩定可預測 → 折現率低 → 倍數高）。':
    ' (steady, predictable profit → lower discount rate → higher multiple).',
  'PEG 比率': 'The PEG ratio',
  '（P/E ÷ 盈餘成長率）是「成長」這一項的粗略調整——拉兩家公司的數字比比看：':
    ' (P/E ÷ earnings growth rate) is a rough adjustment for the growth factor — drag the numbers for two companies and compare:',
  'PEG 天平：成長調整後誰便宜？':
    'The PEG scales: who is cheaper once you adjust for growth?',
  'A 公司': 'Company A',
  '🏆 調整後較便宜': '🏆 Cheaper after adjusting',
  '盈餘成長率': 'Earnings growth',
  'B 公司': 'Company B',
  'A 公司本益比': 'Company A P/E',
  'A 公司成長率': 'Company A growth rate',
  'B 公司本益比': 'Company B P/E',
  'B 公司成長率': 'Company B growth rate',
  'PEG 只是起點（成長預測本身不確定、高成長難持續），但它點出核心：':
    'PEG is only a starting point — growth forecasts are uncertain and high growth is hard to sustain — but it makes the central point: ',
  '「貴／便宜」要放在成長、品質、風險的脈絡裡看，孤立的倍數沒有意義':
    'expensive and cheap only mean something in the context of growth, quality and risk; an isolated multiple means nothing',
  '。「便宜」的股票常常便宜得有理由——成長停滯、ROIC 低落、或風險升高。':
    '. A "cheap" stock is very often cheap for a reason — growth has stalled, ROIC is poor, or risk has gone up.',
  '<b>成長調整後打成平手</b>——這時再往下比第二、三項：誰的 ROIC 高（W9）、誰的獲利更穩。':
    '<b>A tie once you adjust for growth</b> — now go down to the second and third factors: whose ROIC is higher (W9), and whose profit is steadier.',
  '公司調整後較便宜（PEG':
    'is cheaper after adjusting for growth (PEG',
  '——注意：表面上它的 P/E 比較高（':
    ' — note: on the face of it its P/E is the higher one (',
  'x），但成長把倍數「長回來」，調整後反而便宜。這就是孤立倍數會騙人的地方。':
    'x). But growth grows into that multiple, so after the adjustment it comes out cheaper. This is exactly where an isolated multiple lies to you.',
  '——兩家倍數一模一樣，但成長快的那家其實更便宜：市場還沒為它的成長付錢。下一個問題是：這個成長「持續得下去」嗎？':
    ' — the two multiples are identical, but the faster grower is really the cheaper one: the market has not paid for its growth yet. The next question is whether that growth can keep going.',
  '——它的倍數低、成長也不差，但先別急著下結論：問一句「為什麼市場給它低倍數」（風險？品質？），排除價值陷阱再說。':
    ' — its multiple is low and its growth is respectable, but do not conclude too quickly: ask why the market gives it a low multiple (risk? quality?) and rule out a value trap first.',

  /* ── 侷限 ── */
  '5. 相對估值的根本侷限': '5. The built-in limits of relative valuation',
  '它只告訴你「相對」貴賤，不告訴你「絕對」值多少':
    'It tells you what is dear relative to what, never what anything is worth in absolute terms',
  '——如果整個產業都在泡沫，comps 都很貴，相對估值會說「這檔不算貴」，但其實全部高估。這就是為什麼需要 W20 的 DCF（絕對估值）當交叉驗證':
    ' — if the whole industry is in a bubble and every comp is expensive, relative valuation will say "this one is not dear" while all of them are overvalued. That is why you need the DCF in W20, an absolute valuation, as a cross-check',
  '同業的倍數也是市場情緒的產物':
    'Peer multiples are themselves a product of market sentiment',
  '——用一群可能被高估的公司當錨，得到的結論也可能錯':
    ' — anchor on a group that may be overvalued and the conclusion can be wrong too',
  '倍數是果不是因': 'A multiple is an effect, not a cause',
  '——高 P/E 反映市場對成長的預期，不保證預期會實現':
    ' — a high P/E reflects what the market expects of growth; it is no guarantee the expectation is met',
  '正解': 'The right way to do it',
  '相對估值（快、直覺）＋絕對估值（DCF，慢、講假設）':
    'Relative valuation (fast, intuitive) and absolute valuation (DCF: slow, and honest about its assumptions), ',
  '交叉使用': 'used against each other',
  '，兩者都指向「便宜」時信心才夠——這是 W26 投資論文的估值章寫法。':
    '. Only when both point to "cheap" do you have enough confidence — and this is how the valuation chapter of the W26 investment thesis gets written.',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「P/E 低＝便宜」': '"Low P/E means cheap"',
  '低 P/E 常是市場對衰退／風險的定價（價值陷阱）；先問「為什麼低」再說。':
    'A low P/E is usually the market pricing in decline or risk — a value trap. Ask why it is low before anything else.',
  '「用 EV/EBITDA 就不會被資本結構騙」':
    '"Use EV/EBITDA and capital structure can\'t fool you"',
  '它中性化了負債，但忽略了 CapEx：兩家 EBITDA 相同但一家要狂砸 CapEx 維持，真實價值差很多（回 FCF）。':
    'It neutralises debt, but it ignores CapEx. Two companies with the same EBITDA, one of which has to pour money into CapEx just to stand still, are worth very different amounts (back to FCF).',
  '「跟同業比就客觀」': '"Comparing against peers makes it objective"',
  'comps 的選擇本身充滿主觀；換一組同業，結論可能翻轉。誠實列出你選的 comps 與理由。':
    'Choosing the comps is itself full of judgement; swap the peer group and the conclusion can flip. List the comps you picked, and why, honestly.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '40 分': '40 min',
  '《The Little Book of Valuation》相對估值章節':
    'The relative-valuation chapters of The Little Book of Valuation',
  'Damodaran 的倍數地圖——四個倍數的完整版。':
    "Damodaran's map of multiples — the full version of the four.",
  'Damodaran 線上課程：relative valuation 講次 ↗':
    "Damodaran's online course: the relative valuation sessions ↗",
  '選一講——大師親自講「倍數背後的隱含假設」。':
    'Pick one session — the master himself on the assumptions hidden inside a multiple.',
  '20 分': '20 min',
  'Damodaran — Data 頁 ↗': 'Damodaran — the Data page ↗',
  '下載產業別倍數資料表（P/E、EV/EBITDA by industry），看你追蹤產業的中位數倍數。':
    'Download the by-industry multiples tables (P/E and EV/EBITDA by industry) and look up the median multiple for the industry you follow.',
  '10 分': '10 min',
  '回顧 W6 ↗': 'Back to W6 ↗',
  'EV 的有息負債、杜邦的 ROIC——都是本週歸因的工具。':
    "Interest-bearing debt for EV, ROIC from DuPont — both are tools for this week's attribution.",
  '選讀': 'Optional',
  '《Valuation》(McKinsey) 相對估值章節':
    'The relative-valuation chapters of Valuation (McKinsey)',
  '機構版的嚴謹寫法。': 'The rigorous institutional treatment.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '建立 comps 表': 'Build a comps table',
  '延用 W13 健檢過的公司：':
    'Stay with the company you health-checked in W13:',
  '選 4–5 家同業（寫下你的選擇理由——商業模式哪裡像）':
    'Pick four or five peers (write down why you picked them — where the business models are alike)',
  '建 comps 表：各家的 P/E、P/B、EV/EBITDA（':
    'Build the comps table: P/E, P/B and EV/EBITDA for each (',
  '驗證你的 EV 算法': 'check your EV arithmetic',
  '：市值＋有息負債−現金——和上面計算機對答案）':
    ': market cap + interest-bearing debt − cash — check it against the calculator above)',
  '加一欄近 5 年盈餘成長率，算各家 PEG':
    "Add a column for the last five years of earnings growth and work out each company's PEG",
  '標出你的目標公司在每個倍數的相對位置（最貴／中間／最便宜）':
    'Mark where your target company sits on each multiple (most expensive / middle / cheapest)',
  '寫 200 字：它相對同業貴還是便宜？用成長、ROIC（W9）、風險三項解釋這個溢價／折價':
    'Write 200 words: is it expensive or cheap against its peers? Use growth, ROIC (W9) and risk to explain whether that premium or discount is ',
  '合不合理': 'justified',
  '——是「便宜有理由」還是「市場錯殺」？':
    ' — is this "cheap for a reason", or has the market got it wrong?',
  '驗收標準：': 'What counts as done: ',
  'comps 表完成、EV 算法正確（有息負債，非總負債）；溢價／折價有用三項歸因。':
    'the comps table is finished, the EV arithmetic is right (interest-bearing debt, not total liabilities), and the premium or discount is attributed to the three factors.',
  '自我檢核': 'Check yourself',
  'comps 表完成，EV 算法正確（有息負債，非總負債）':
    'The comps table is done and the EV arithmetic is right (interest-bearing debt, not total liabilities)',
  '溢價／折價有用「成長／品質／風險」三項歸因':
    'The premium or discount is attributed to growth, quality and risk',
  '能區分「便宜有理由」與「可能被錯殺」':
    'You can tell "cheap for a reason" from "possibly mispriced"',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then expand to check)',
  '為什麼 EV/EBITDA 的分子要用 EV 而不是市值？':
    'Why does EV/EBITDA put EV in the numerator rather than market cap?',
  '→ 因為 EBITDA 是「支付利息給債主': '→ Because EBITDA is profit measured ',
  '之前': 'before',
  '」的獲利，屬於股東＋債主共同的成果；分子必須用同樣涵蓋兩者的':
    ' any interest is paid to lenders, so it belongs to shareholders and lenders together. The numerator has to cover both in the same way:',
  'EV（市值＋有息負債−現金）': 'EV (market cap + interest-bearing debt − cash)',
  '才對稱。用市值配 EBITDA 是分子分母口徑不一致。':
    ' is what makes the two halves match. Pairing market cap with EBITDA puts two different scopes above and below the line.',
  'A 公司 P/E 12、B 公司 P/E 30，什麼情況下 B 其實比 A 便宜？':
    'Company A on a P/E of 12, company B on 30. When is B actually cheaper than A?',
  '→ 當': '→ When',
  'B 的成長顯著更快': 'B grows markedly faster',
  '（或 ROIC 更高、獲利更穩）——例：A 成長 3%、B 成長 20%，B 的 PEG 遠低於 A，未來獲利會把高倍數「長回來」；孤立看 P/E 會誤判。':
    ' (or has higher ROIC, or steadier profit). Say A grows 3% and B grows 20%: B\'s PEG is far below A\'s, and future earnings grow into the high multiple. Look at P/E on its own and you will call it wrong.',
  '相對估值最大的盲點是什麼？該用什麼方法補足？':
    'What is the biggest blind spot in relative valuation, and what fills it?',
  '→ 盲點：它只給':
    '→ The blind spot: it only ever tells you what is dear or cheap in ',
  '相對': 'relative',
  '貴賤，若整個產業／市場都高估，它會說「不算貴」但其實全錯。補足方法：用':
    ' terms. If the whole industry or market is overvalued it will say "not dear" and be completely wrong. To fill the gap, use',
  'W20 的 DCF（絕對估值）': 'the DCF in W20, an absolute valuation,',
  '交叉驗證，兩者都指向便宜才可信。':
    ' as a cross-check. Only when both point to cheap is it believable.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '買房比價': 'Comparing house prices',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（買房比價）': 'Opening (comparing house prices)',
  '「我們要買房，怎麼知道開價合不合理？」（引導：看同社區、同坪數最近成交多少。）「這就是相對估值——不用從零算房子值多少，看『隔壁賣多少』就有底。股票也一樣：看同業的『每元獲利賣幾倍』。」':
    '"We want to buy a flat. How do we know whether the asking price is reasonable?" (Steer them towards: look at what recently sold in the same complex, at the same size.) "That is relative valuation — you don\'t work out from zero what the place is worth, you look at what next door sold for. Stocks are the same: you look at how many times its earnings a peer sells for."',
  '核心觀念（便宜有理由）': 'The core idea (cheap has a reason)',
  '「但有個陷阱：隔壁那間便宜，可能是因為它是凶宅、或漏水。股票也是——P/E 特別低的公司，常常是市場已經知道它要衰退了。':
    '"But there is a catch: the cheap flat next door may be cheap because someone died in it, or because it leaks. Stocks work the same way — a company on an unusually low P/E is often one the market already knows is heading downhill. ',
  '看到便宜，先問一句『為什麼這麼便宜』':
    "when you see cheap, first ask why it is this cheap",
  '，而不是急著撿。」': ', instead of rushing to pick it up."',
  '互動': 'Interaction',
  '「兩家店都賣 20 倍價錢，一家生意每年成長 5%、另一家成長 15%——哪家其實比較划算？」（引導出「成長快的，同樣倍數其實更便宜」＝PEG 的直覺；可以打開上面的天平拉給對方看。）':
    '"Two shops both sell for 20 times earnings, but one grows 5% a year and the other 15%. Which is actually the better deal?" (Lead them to it: at the same multiple, the faster grower is really the cheaper one — the intuition behind PEG. You can open the scales above and drag it for them.)',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那看 P/E 低就對了？」': '"So I just look for a low P/E?"',
  '「低 P/E 有兩種：被錯殺的珍珠、和真的在爛掉的。分辨這兩種，就是我們花一整季學的東西。」':
    '"There are two kinds of low P/E: the pearl the market threw out by mistake, and the thing that really is rotting. Telling them apart is what a whole quarter of this course is for."',
  '「這些倍數我記不住」': '"I\'ll never remember all these multiples"',
  '「你只要記一個念頭：任何『幾倍』的數字，都要配著『它成長多快、賺錢品質多好、多穩』一起看，孤立的數字會騙人。」':
    '"Just hold on to one thought: any \'so many times\' number has to be read alongside how fast it grows, how good the profit is and how steady it is. A number on its own will lie to you."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能說出四個倍數的適用場景與陷阱':
    'You can say where each of the four multiples fits, and what its traps are',
  'comps 表完成且 EV 算法正確':
    'The comps table is done and the EV arithmetic is right',
  '能用成長／品質／風險解釋倍數差異':
    'You can explain a gap in multiples with growth, quality and risk',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '本週心得記一行（下週回顧用）':
    "One line of notes on the week, for next week's review",
  '🎓 第 19 週完成——倍數的語言已上手。下週見：DCF 基礎。':
    '🎓 Week 19 done — you speak the language of multiples now. Next up: the basics of DCF.',
  '下週預告 · Week 20：估值二——DCF 基礎':
    'Next week · Week 20: Valuation Two — the basics of DCF',
  '——相對估值靠「跟別人比」，DCF 是「從零算出這家公司到底值多少」。兩者交叉，才是完整的估值。':
    ' — relative valuation works by comparing with others; DCF works out from zero what the company is actually worth. Cross the two and you have a complete valuation.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：倉位管理與再平衡': 'Previous week: position sizing and rebalancing',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
