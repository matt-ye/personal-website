/*
 * 給家人的投資課 Week 20：估值二——DCF 基礎 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-20-dcf.html
 *
 * 沿用 week-01 的慣例（行內標記邊界留半形空白、專有名詞用原文、
 * 語域保持家庭教材的口語溫度）。
 *
 * 本週沒有「萬」——組裝台的數字是無單位的模型值（FCF₁ ＝ 100、每股 17.68），
 * 中英一樣不帶幣別，照抄即可。
 *
 * 兩處被原始碼綁住的處理：
 *
 * ⚠ 公式裡的下標 `終值<sub>第5年末</sub>`：中文不需空白、英文兩側是字母就會被
 *   邊界守衛擋下。下標譯成 "(end of year 5)"（以括號開頭），既保住原意
 *   也不會在 "Terminal value" 後面黏出一個怪字。
 *
 * ⚠ 判詞句裡的 "</b>（" 與句末 "%。" 這兩段 JS 字串不含漢字，抽取器抓不到、
 *   永遠是全形。所以配對的右括號也刻意保留全形（'%）'）——半形／全形混用
 *   會變成明顯的錯括號，一致的全形對至少讀得下去。
 *
 * 人名與書名一律用原文：Damodaran、The Little Book of Valuation、
 * Valuation (McKinsey)、Graham。KEEP 因此是空的。
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
  '給家人的投資課 · Q2 投資人季 · Week 20':
    "Family Investing Course · Q2 The Investor's Quarter · Week 20",
  '估值二——DCF 基礎': 'Valuation II — the basics of DCF',
  '不靠跟別人比，直接從公司未來的現金流算出它值多少——「內在價值」這顆投資的北極星。':
    'No comparing with the neighbours — work out what a company is worth straight from its future cash flows. Intrinsic value is the north star of investing.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 1': 'Weeks 1',
  '19 週': '19',
  '52 週 · 第 20 週': '52 weeks · Week 20',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  'DCF 是 W1 折現的終極應用、W7 自由現金流的去處、Q4 週 41 資本預算 NPV 的孿生兄弟。':
    'DCF is the ultimate use of the discounting from W1, the destination of the free cash flow from W7, and the twin brother of capital-budgeting NPV in Q4, week 41.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「買房比價／凶宅」的討論——「便宜先問為什麼」對方記住了嗎、PEG 的兩家店比喻講通了嗎。':
    'Look back at last week\'s conversation about comparing house prices and stigmatised properties — did "when something looks cheap, ask why first" stick? And did the two-shops metaphor for PEG land?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '一個典型的「預測 5 年」DCF 估值裡，「5 年後的那一大包」（終值）通常佔總價值的幾成？':
    'In a typical DCF that forecasts five years, what share of the total value does "the big parcel after year five" — the terminal value — usually account for?',
  '猜一個答案': 'Pick an answer',
  '兩三成——重點在看得見的 5 年': '20–30% — the five years you can see are what matter',
  '大約一半': 'About half',
  '六到八成': 'Sixty to eighty per cent',
  '答對了——大多數 DCF 的終值佔 60–80%（講義算例是 77%）。你的估值主要由「5 年後、你最看不清的部分」決定——這就是為什麼 DCF 被稱為「假設的放大器」，也是本週最重要的一個觀察。':
    'Correct — in most DCFs the terminal value is 60–80% of the total (77% in the worked example). Your valuation is decided mostly by the part beyond year five, the part you can see least clearly — which is why DCF gets called an amplifier for assumptions, and it is the single most important observation of the week.',
  '直覺會以為重點在看得見的 5 年——但大多數 DCF 的終值佔 60–80%（講義算例是 77%）。估值主要由「5 年後、你最看不清的部分」決定——這就是為什麼 DCF 被稱為「假設的放大器」，也是本週最重要的一個觀察。':
    'Intuition says the five visible years are what matter — but in most DCFs the terminal value is 60–80% of the total (77% in the worked example). The valuation is decided mostly by the part beyond year five, the part you can see least clearly — which is why DCF gets called an amplifier for assumptions, and it is the single most important observation of the week.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. DCF 的一句話': '1. DCF in one sentence',
  '公司值它未來能生出的所有現金，折現到今天。':
    'A company is worth all the cash it can produce in future, discounted back to today. ',
  '回到 W1 的核心：未來的錢要折現。一家公司的內在價值，就是它未來每一年能產出的自由現金流（FCF，W7），各自折回今天、全部加總：':
    "Back to the core of W1: money in the future has to be discounted. A company's intrinsic value is the free cash flow (FCF, W7) it can produce in each future year, each one discounted back to today and then added up:",
  '企業價值 ＝ Σ FCF': 'Enterprise value = Σ FCF',
  '＋ 終值 ÷ (1+r)': '+ terminal value ÷ (1+r)',
  '三個零件：': 'Three parts: ',
  '①預測期的 FCF ②折現率 r ③終值':
    '① FCF over the forecast period ② the discount rate r ③ the terminal value',
  '。DCF 難不在公式，在這三個零件的假設——所以它被稱為「假設的放大器」。':
    '. The hard part of a DCF is not the formula, it is the assumptions behind those three parts — which is why it gets called an amplifier for assumptions.',

  '2. 三個零件': '2. The three parts',
  '零件一｜預測期 FCF（通常 5–10 年）':
    'Part one | FCF over the forecast period (usually 5–10 years)',
  '：從營收出發一路推到 FCF——營收成長 → 利潤率 → 稅後營業利益 → 減再投資（CapEx＋營運資金增額）→ FCF。這正是 W5–7 的三表在「未來」的延伸。':
    ': start at revenue and work all the way down to FCF — revenue growth → margin → after-tax operating profit → less reinvestment (capex plus the increase in working capital) → FCF. This is exactly the three statements from W5–7, extended into the future.',
  '零件二｜折現率 r（用 WACC，概念版）':
    'Part two | the discount rate r (WACC, in concept)',
  '：反映「這些未來現金的風險」——越不確定，折現率越高、現值越低。本週先用給定值 r ＝ 9%；完整的 WACC 估算是 Q4 週 42 的主題。直覺檢查：9% 意味著「這家公司的風險，讓投資人要求每年 9% 才願意持有」。':
    ': it stands for the risk in those future cash flows — the less certain they are, the higher the discount rate and the lower the present value. This week simply takes r = 9% as given; estimating WACC properly is the subject of Q4, week 42. A sanity check: 9% means "the risk of this company is such that investors demand 9% a year before they will hold it".',
  '零件三｜終值（Terminal Value）': 'Part three | terminal value',
  '：預測期之後所有現金流的打包現值，用永續成長模型：':
    ': the present value of every cash flow after the forecast period, bundled into one number using the perpetual growth model:',
  '終值': 'Terminal value',
  '第5年末': '(end of year 5)',
  '永續成長率 g 必須 &lt; 長期經濟成長率':
    'The perpetual growth rate g must be &lt; the long-run growth rate of the economy',
  '（否則公司終將大過整個經濟）——通常取 2–3%。算出的是「第 5 年末」的值，還要再折回今天。':
    ' (otherwise the company eventually grows larger than the whole economy) — 2–3% is the usual choice. What comes out is the value at the end of year 5, which still has to be discounted back to today.',

  /* ── DCF 組裝台 ── */
  '3. 親手組一次：DCF 組裝台': '3. Assemble one yourself: the DCF workbench',
  '預設值就是講義算例（FCF 第 1 年 100、成長 8%、r 9%、g 3%、淨負債 200、股數 100）。':
    'The defaults are the worked example from the notes (year-1 FCF 100, growth 8%, r 9%, g 3%, net debt 200, 100 shares). ',
  '拉動三個假設，看每股價值和終值佔比怎麼跳':
    'Drag the three assumptions and watch the per-share value and the terminal-value share jump about',
  'DCF 組裝台（FCF₁ ＝ 100 · 預測 5 年）':
    'The DCF workbench (FCF₁ = 100 · five-year forecast)',
  'FCF 年成長率（第 2–5 年）': 'Annual FCF growth (years 2–5)',
  'FCF 成長率': 'FCF growth rate',
  '折現率 r': 'Discount rate r',
  '折現率': 'Discount rate',
  '永續成長率 g': 'Perpetual growth rate g',
  '永續成長率': 'Perpetual growth rate',
  '<div class="fc"><div class="yn">第': '<div class="fc"><div class="yn">Year',
  '年</div><div class="yv">': '</div><div class="yv">',
  '明確期': 'Explicit period',
  '▲ 企業價值的組成：明確期 5 年（綠）vs 終值（金）':
    '▲ What enterprise value is made of: the explicit five years (green) vs the terminal value (gold)',
  '企業價值 EV': 'Enterprise value EV',
  '權益價值（減淨負債 200）': 'Equity value (less net debt of 200)',
  '每股內在價值（÷100 股）': 'Intrinsic value per share (÷ 100 shares)',
  '終值佔 EV': 'Terminal value as a share of EV',
  '<b>分母爆炸：r − g ≈': '<b>The denominator explodes: r − g ≈',
  'pp。</b>永續成長率逼近折現率時，終值趨向無限大——數學在告訴你這組假設不合理（公司不可能永遠以接近資本成本的速度成長）。把 g 降回 2–3%。':
    'pp.</b> As the perpetual growth rate closes in on the discount rate, the terminal value heads for infinity — the maths is telling you this set of assumptions is unreasonable, because no company can grow forever at close to its cost of capital. Bring g back down to 2–3%.',
  '終值 → ∞': 'Terminal value → ∞',
  '<b>講義算例：每股 17.68。</b>接著做一件事：把 r 降 1 個百分點、或把 g 加 1 個百分點——看每股價值跳多少。這就是「假設的放大器」。':
    '<b>The worked example: 17.68 per share.</b> Now do one thing: drop r by one percentage point, or add one to g, and see how far the per-share value jumps. That is the amplifier for assumptions.',
  '同一家公司、同一個公式，每股從 17.68 變成 <b>':
    'Same company, same formula, and the value per share goes from 17.68 to <b>',
  '%）——你只動了假設。<b>誠實的 DCF 是「保守假設下仍便宜」，不是「湊出便宜的假設」。</b>終值目前佔':
    '%) — and all you moved was an assumption. <b>An honest DCF says "still cheap under conservative assumptions", not "assumptions cobbled together until it looks cheap".</b> The terminal value currently stands at',
  '練習第 1 步的驗證點就是預設值：EV＝1968.3、每股＝17.68、終值佔比＝77%。不合就檢查：終值是否忘了折現、分母是否用 r−g。（g 的合理上限是 2–3%；滑桿故意開到 5.5%，是為了讓你親眼看見 g 逼近 r 時分母怎麼爆炸。）':
    'The checkpoint for step 1 of the exercise is the default setting: EV = 1968.3, per share = 17.68, terminal value 77%. If it does not match, check two things: did you forget to discount the terminal value, and is the denominator r−g? (The sensible ceiling for g is 2–3%; the slider deliberately runs to 5.5% so that you can watch the denominator explode as g closes in on r.)',

  '致命觀察': 'The killer observation',
  '終值佔了 EV 的 77%': 'The terminal value is 77% of EV',
  '——這不是本例特例，大多數 DCF 的終值都佔 60–80%。意思是：':
    ' — and this example is nothing unusual; in most DCFs the terminal value is 60–80%. Which means: ',
  '你的估值主要由「5 年後、你最看不清的部分」決定':
    'your valuation is decided mostly by the part beyond year five, the part you can see least clearly',
  '，而終值又高度受 g 和 r 的微小變化牽動。這就是為什麼 DCF 是「假設的放大器」——也是為什麼下週（W21）要用敏感度與情境把單一數字變成區間。':
    ', and the terminal value itself swings hard on tiny changes in g and r. This is why a DCF is an amplifier for assumptions — and why next week (W21) uses sensitivity and scenarios to turn a single number into a range.',

  /* ── 組裝明細表 ── */
  '4. 組裝明細（講義算例）': '4. The assembly line by line (the worked example)',
  '項目': 'Item',
  '值': 'Value',
  '明確期 5 年 FCF 折現值加總':
    'Sum of the discounted FCF over the explicit five years',
  '終值（2335.5）折現值': 'Discounted value of the terminal value (2335.5)',
  '企業價值（EV）': 'Enterprise value (EV)',
  '減：淨負債（有息負債−現金）': 'Less: net debt (interest-bearing debt − cash)',
  '權益價值': 'Equity value',
  '÷ 流通股數 100 ＝ 每股內在價值':
    '÷ 100 shares outstanding = intrinsic value per share',
  '拿 17.68 跟市價比：市價 &lt; 17.68 且有安全邊際（W21）＝ 可能低估。':
    'Hold 17.68 up against the market price: a price &lt; 17.68 with a margin of safety (W21) means it may be undervalued.',

  /* ── 正確心態 ── */
  '5. DCF 的正確心態': '5. The right frame of mind for a DCF',
  'DCF 的價值不在那個「精確」的 17.68':
    'The value of a DCF is not in that "precise" 17.68',
  '——那是假精確。它的價值在': ' — that is false precision. Its value is that it ',
  '逼你把假設攤開講清楚': 'forces you to lay your assumptions out in the open',
  '：你對成長、利潤率、風險的看法，每一個都要寫成數字、都要能被質疑':
    ': your views on growth, margins and risk each have to be written down as a number, and each has to be open to challenge',
  '垃圾進、垃圾出（GIGO）': 'garbage in, garbage out (GIGO)',
  '：微調成長率和折現率就能得到任何你想要的答案；誠實的 DCF 是「保守假設下仍便宜」，不是「湊出便宜的假設」':
    ': nudge the growth rate and the discount rate and you can produce any answer you want. An honest DCF says "still cheap under conservative assumptions", not "assumptions cobbled together until it looks cheap"',
  '與相對估值交叉': 'cross it with relative valuation',
  '（W19）：DCF（絕對）與 comps（相對）都指向低估時，信心才夠':
    ' (W19): only when the DCF (absolute) and the comps (relative) both point to undervaluation is your confidence earned',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「DCF 算出 17.68，所以它就值 17.68」':
    '"The DCF says 17.68, so it is worth 17.68"',
  '假精確；它是「在我這組假設下」的估計，換個合理假設可能是 14 或 22（下週的敏感度）。':
    'False precision. It is an estimate under one particular set of assumptions; another perfectly reasonable set might give 14 or 22 (next week\'s sensitivity work).',
  '「終值佔比高是模型有問題」': '"A high terminal-value share means the model is broken"',
  '不是，這是 DCF 的常態；正確的回應是對 g、r 做敏感度，不是忽略終值。':
    'It is not; it is the normal condition of a DCF. The right response is to run sensitivities on g and r, not to look away from the terminal value.',
  '「成長率調高一點沒差」': '"Nudging the growth rate up a little makes no difference"',
  '差很多：g 從 3% 到 4%、或 r 從 9% 到 8%，終值（佔 77%）會大幅跳動——用上面的組裝台試一次，下週再看九宮格的完整跨度。':
    'It makes a great deal of difference: g from 3% to 4%, or r from 9% to 8%, and the terminal value — 77% of the whole — moves sharply. Try it on the workbench above, then see the full spread in next week\'s nine-box grid.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '40 分': '40 min',
  '《The Little Book of Valuation》DCF 章節':
    'The Little Book of Valuation, the DCF chapters',
  'Damodaran 的 DCF 入門，最好讀的版本。':
    "Damodaran's introduction to DCF, and the most readable version of it.",
  'Damodaran 線上課程：DCF 入門講次 ↗':
    'Damodaran online course: the introductory DCF lecture ↗',
  '大師示範一次完整 DCF；注意他花多少時間在「假設」而非「公式」。':
    'A master runs a full DCF end to end; notice how much of his time goes on assumptions rather than formulas.',
  '15 分': '15 min',
  '回顧 W1 ↗': 'Revisit W1 ↗',
  '折現公式與 FCF 定義——DCF 的兩塊地基。':
    'The discounting formula and the definition of FCF — the two foundation stones of a DCF.',
  '10 分': '10 min',
  '回顧 W19 ↗': 'Revisit W19 ↗',
  '相對估值，本週的交叉驗證夥伴。':
    "Relative valuation, this week's cross-checking partner.",
  '選讀': 'Optional',
  '《Valuation》(McKinsey) 現金流折現章節':
    'Valuation (McKinsey), the discounted cash flow chapters',
  '機構級的嚴謹版。': 'The institutional-grade, rigorous version.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '建你的第一個 DCF': 'Build your first DCF',
  '用試算表（延用複利表檔案，新分頁）：':
    'Use a spreadsheet (reuse the compounding file, new tab):',
  '複製講義的算例，': 'Reproduce the worked example from the notes and ',
  '驗證：EV ＝ 1968.3、每股 ＝ 17.68、終值佔比 ＝ 77%':
    'check that EV = 1968.3, per share = 17.68, terminal value = 77%',
  '（不合就檢查終值是否忘了折現、或分母用 r−g——也可和上面組裝台對答案）':
    ' (if it does not match, check whether you forgot to discount the terminal value, or whether the denominator is r−g — you can also check your answer against the workbench above)',
  '為 W13/W19 的目標公司建一個簡化 DCF：用它近年實際 FCF（W7 取得）當起點；自估未來 5 年成長率（保守一點；參考歷史成長但打折）；折現率先用 9%（或你查到的產業量級）；g 用 2.5%':
    'Build a simplified DCF for the target company from W13/W19: start from its actual FCF in recent years (which you pulled in W7); estimate the next five years of growth yourself (keep it conservative — take the historical rate and haircut it); use 9% for the discount rate to begin with, or whatever level you find for the industry; use 2.5% for g',
  '算出每股內在價值，跟現在的市價比：折價還溢價？':
    "Work out the intrinsic value per share and compare it with today's market price: at a discount, or a premium?",
  '寫 100 字：你的 DCF 對哪個假設最敏感？（先感覺一下，下週正式做敏感度）':
    'Write 100 words: which assumption is your DCF most sensitive to? (Just get a feel for it; next week you do it properly.)',
  '驗收標準：': 'What counts as done: ',
  '講義算例驗證通過（17.68、77%）；目標公司 DCF 跑出每股價值並與市價對比。':
    "The worked example checks out (17.68, 77%), and the target company's DCF produces a per-share value you have set against the market price.",
  '自我檢核': 'Check yourself',
  '講義算例驗證通過（17.68、77%）': 'The worked example checks out (17.68, 77%)',
  '目標公司 DCF 跑出每股價值並與市價對比':
    "The target company's DCF gives a per-share value, compared with the market price",
  '能指出自己模型中「終值佔比」有多高':
    'You can say how large the terminal-value share is in your own model',

  /* ── 快問快答 ── */
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼永續成長率 g 不能設得比長期經濟成長率高？':
    'Why can the perpetual growth rate g not be set higher than the long-run growth rate of the economy?',
  '→ 因為永續成長是「直到永遠」——若 g &gt; 經濟成長率，這家公司終將大過整個經濟體，數學上不可能。所以 g 的上限是長期名目 GDP 成長（約略等於長期通膨＋實質成長，常取 2–3%）。':
    '→ Because perpetual growth means for ever. If g &gt; the growth rate of the economy, the company eventually grows larger than the entire economy, which is mathematically impossible. So the ceiling on g is long-run nominal GDP growth (roughly long-run inflation plus real growth, commonly taken as 2–3%).',
  '終值佔 EV 的 77%，這對「該把力氣花在哪」有什麼提示？':
    'The terminal value is 77% of EV. What does that suggest about where your effort should go?',
  '→ 估值主要由「最遙遠、最不確定」的部分決定——提示：':
    '→ The valuation is decided mostly by the most distant and least certain part, which is a hint that ',
  '力氣要花在檢驗終值的假設（g 與 r）上':
    'your effort belongs in testing the terminal-value assumptions, g and r',
  '，對它們做敏感度分析（W21），而不是糾結前 5 年 FCF 的第二位小數。':
    ', running sensitivity analysis on them (W21) rather than agonising over the second decimal place of the first five years of FCF.',
  'DCF 和 W19 相對估值，各自最大的優點與盲點是什麼？':
    'DCF and the relative valuation of W19 — what is the biggest strength and the biggest blind spot of each?',
  '：優點＝絕對估值、逼你攤開假設；盲點＝終值主導、對假設極敏感、易假精確。':
    ': strength = an absolute valuation that forces you to lay your assumptions out; blind spot = dominated by the terminal value, extremely sensitive to assumptions, and prone to false precision. ',
  '相對估值': 'Relative valuation',
  '：優點＝快、直覺、貼市場；盲點＝只給相對貴賤、產業泡沫時集體失真。兩者交叉使用互補。':
    ': strength = fast, intuitive and close to the market; blind spot = it only tells you dear or cheap relative to others, and in an industry bubble the whole set is distorted together. Used across each other they complement.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '會生金蛋的鵝': 'The goose that lays golden eggs',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（會生金蛋的鵝）': 'Opening (the goose that lays golden eggs)',
  '「有人要賣你一隻鵝，每年會生一顆金蛋，你願意付多少錢買？」（引導：要看牠每年生幾顆、能生幾年、還有你要求的報酬率——把未來的蛋『折算』成今天的價值。）':
    '"Someone wants to sell you a goose that lays one golden egg a year. How much would you pay for it?" (Steer them: it depends on how many eggs a year, how many years it keeps laying, and the return you demand — you discount the future eggs back into what they are worth today.)',
  '核心觀念': 'The core idea',
  '「這就是 DCF——公司就是那隻鵝，未來每年生出的『現金』（金蛋）折算到今天，加起來就是它該值多少。跟隔壁賣多少無關，是從頭算出它的『真價值』。」':
    '"That is a DCF. The company is the goose; the cash it lays each year, discounted back to today and added up, is what it should be worth. It has nothing to do with what the neighbours are asking — you work out its real value from scratch."',
  '互動（假設的力量）': 'Interaction (the power of assumptions)',
  '「但這裡有個陷阱：如果我假設這隻鵝能活 100 年、每年多生 10%——我可以把牠估到天價。所以看到別人給的『目標價』，要問一句：':
    '"But here is the trap: if I assume the goose lives 100 years and lays 10% more every year, I can value it at anything I like. So whenever somebody hands you a target price, ask one question: ',
  '你假設牠能生多久、生多快？':
    'how long do you assume it keeps laying, and how fast?',
  '換個假設，價錢差好幾倍。」（可以打開上面的組裝台拉給對方看。）':
    ' Change the assumptions and the price moves several times over." (Open the workbench above and drag the sliders in front of them.)',
  '收尾（兩把尺）': 'Closing (two rulers)',
  '「所以我們家看一家公司值多少，會用兩把尺：一把跟隔壁比（上週的），一把從頭算（這週的）。':
    '"So when our family works out what a company is worth, we use two rulers: one that compares it with the neighbours (last week\'s) and one that works it out from scratch (this week\'s). ',
  '兩把尺都說便宜，才比較敢相信。':
    'Only when both rulers say cheap do we dare believe it.',
  '預期反應與應對': 'What they will say, and what to answer',
  '「未來怎麼算得準？」': '"How can anyone work out the future accurately?"',
  '「算不準，這正是重點——DCF 不是水晶球，是逼我們把『憑什麼看好』講清楚。下週學怎麼把一個數字變成一個範圍。」':
    '"You cannot, and that is exactly the point — a DCF is not a crystal ball, it forces us to spell out why we like the thing. Next week we learn how to turn one number into a range."',
  '「那分析師的目標價可信嗎？」': '"So can you trust an analyst\'s target price?"',
  '「先看他的假設。目標價底下藏著成長率和折現率——假設太樂觀的目標價，是用 Excel 許願。」':
    '"Look at their assumptions first. There is a growth rate and a discount rate hiding under every target price — a target price built on assumptions that are too rosy is just wishing in Excel."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能說出 DCF 的三個零件與公式':
    'You can name the three parts of a DCF and write down the formula',
  '手建 DCF 並驗證講義算例（17.68、終值佔 77%）':
    'You built a DCF by hand and verified the worked example (17.68, terminal value 77%)',
  '理解「終值主導」與「假設放大器」的意義':
    'You understand what "the terminal value dominates" and "an amplifier for assumptions" mean',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 20 週完成——內在價值的北極星已點亮。下週見：敏感度、情境與安全邊際。':
    '🎓 Week 20 done — the north star of intrinsic value is lit. Next up: sensitivity, scenarios and the margin of safety.',
  '下週預告 · Week 21：估值三——敏感度、情境與安全邊際':
    'Next week · Week 21: Valuation III — sensitivity, scenarios and the margin of safety',
  '——把 DCF 的單一數字，用敏感度九宮格與三情境變成「估值區間」，再套上 Graham 的安全邊際。':
    " — take the single number a DCF gives you, turn it into a valuation range with a nine-box sensitivity grid and three scenarios, then lay Graham's margin of safety over the top.",

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：相對估值深用': 'Previous week: relative valuation in depth',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
