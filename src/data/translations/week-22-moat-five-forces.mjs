/*
 * 給家人的投資課 Week 22：質化分析（護城河進階＋波特五力） — 英文對照表。
 * 來源頁：src/data/course-weeks/week-22-moat-five-forces.html
 *
 * 沿用 week-01 的慣例。本週沒有金額單位問題（分數全是 1–5 與 /25），要注意的是：
 *
 * ⚠ 既有框架用它本來的英文名，不回譯
 *   波特五力 = Porter's Five Forces（Rivalry / New entrants / Substitutes /
 *   Buyer power / Supplier power）；均值回歸 = mean reversion；
 *   護城河的五種來源用 Dorsey 原書的說法。
 *
 * ⚠ 五力的標籤有三套長度，各有各的位置，不能混用
 *   雷達圖的 SVG 標籤（data）最短：「② 新進入者」→ "② New entrants"
 *   表格列與滑桿標籤（text）較長：「② 新進入者威脅」→ "② Threat of new entrants"
 *   aria-label（attr）不帶編號：「新進入者威脅」→ "Threat of new entrants"
 *   三者是不同的 key，長度差異照原文保留。
 *
 * ⚠ 台灣專有名詞一律用官方英文名
 *   台積電 TSMC｜中華電信 Chunghwa Telecom｜全聯 PX Mart｜健保卡 the NHI card。
 *   書名用原著名：Dorsey《護城河投資優勢》= The Little Book That Builds Wealth。
 *
 * ⚠ 已知限制（與 week-01 相同，非本對照表可解）
 *   全形標點自成文字節點時抽取器看不見（不在 CJK 範圍內），例如：
 *     · 前置那格的頓號「第 13、19–21 週」
 *     · 雷達 verdict 裡 weak.join("、") 的分隔號
 *     · Q2 答案開頭的 `→ 「`（只有下引號那半在對照表裡）
 *   最後一項因為只換得掉一半，譯文刻意也用「」收尾，讓兩個引號至少成對，
 *   而不是一邊全形一邊半形，看起來像壞掉。
 *
 * 語域：寫給家人的教材。巷口手搖飲、葡式蛋塔、城堡外那圈水要保住口語感。
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
  '給家人的投資課 · Q2 投資人季 · Week 22':
    'Family Investing Course · Q2 The Investor · Week 22',
  '質化分析——護城河進階＋波特五力':
    "Qualitative Analysis — Moats in Depth, plus Porter's Five Forces",
  '估值三部曲全是數字，但數字的假設（成長能不能持續、利潤率守不守得住）要靠質化分析回答。':
    'The valuation trilogy is all numbers — but the assumptions behind those numbers (can the growth last, will the margin hold) can only be answered qualitatively.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 13': 'Week 13',
  '19–21 週': 'Weeks 19–21',
  '52 週 · 第 22 週': '52 weeks · Week 22',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '把專欄 #6 的護城河從「有／沒有」升級到「來源×寬度×趨勢」，加上 Porter 五力當產業掃描儀——這是 W26 投資論文的質化章，也是 W20 終值假設的品質保證。':
    "This takes the moat from column #6 beyond a yes-or-no question and up to source × width × trend, then adds Porter's Five Forces as an industry scanner. It becomes the qualitative chapter of the W26 investment thesis, and the quality control on the terminal-value assumption from W20.",
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「阿嬤買菜哲學」的反應——「只在離譜便宜時出手」講通了嗎、瘋鄰居的比喻對方記住了嗎。':
    'Think back to how people reacted to "grandma\'s way of buying vegetables" last week — did "only move when it is absurdly cheap" land, and did they remember the crazy neighbour?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '檢驗一家公司有沒有護城河，最好的「單一問題」是哪個？':
    'If you could ask only one question to test whether a company has a moat, which would it be?',
  '猜一個答案': 'Pick an answer',
  '它是市佔第一嗎？': 'Is it number one by market share?',
  '它敢漲價嗎？漲了客戶還在嗎？': 'Can it raise prices — and do the customers stay?',
  '它的產品是最好的嗎？': 'Does it have the best product?',
  '答對了——定價權一個行為就檢驗了整個競爭結構：敢漲價且客戶不跑，代表對手搶不走、替代品不夠好、客戶離不開；而且它直接反映在毛利率上，可以用財報驗證。市佔和產品都只是「結果」，本週講為什麼。':
    'Correct — pricing power is a single behaviour that tests the entire competitive structure. If it can raise prices and keep its customers, then rivals cannot poach them, substitutes are not good enough, and customers cannot leave. Better still, it shows up directly in the gross margin, so the financial statements can confirm it. Market share and product are only results, and this week explains why.',
  '常見的答案——但市佔是結果不是原因、產品會被模仿。最好的試金石是「它敢漲價嗎？漲了客戶還在嗎？」：一個行為就檢驗了整個競爭結構，而且直接反映在毛利率上、可用財報驗證。本週講為什麼。':
    'A common answer — but market share is a result rather than a cause, and products get copied. The best test is "can it raise prices, and do the customers stay?": one behaviour that tests the entire competitive structure, and one that shows up directly in the gross margin so the financial statements can confirm it. This week explains why.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 為什麼估值需要質化：終值的品質保證':
    '1. Why valuation needs the qualitative side: quality control on the terminal value',
  'W20 的 DCF 裡，終值假設公司「永續」產出現金；W21 的九宮格顯示 g 差 1% 價值差一大截。但經濟學的預設是':
    'In the W20 DCF, the terminal value assumes the company throws off cash forever; the nine-box grid in W21 showed that 1% on g moves the value a very long way. But economics starts from the opposite premise: ',
  '高獲利會被競爭侵蝕': 'high profits get eroded by competition',
  '（資本湧入 → 殺價 → ROIC 回落到資金成本）——這叫':
    ' (capital floods in → prices get cut → ROIC falls back to the cost of capital). That is called ',
  '均值回歸': 'mean reversion',
  '護城河的估值意義': 'What a moat means for valuation',
  '護城河越寬，高 ROIC 能撐越久、均值回歸越慢':
    'The wider the moat, the longer a high ROIC lasts and the slower mean reversion does its work',
  '——你的 DCF 用比較高的 g、比較長的優勢期才站得住腳。沒有護城河的公司套用高成長假設，是用 Excel 說謊。':
    ' — which is what lets your DCF stand up with a higher g and a longer advantage period. Putting high-growth assumptions on a company with no moat is lying in a spreadsheet.',

  /* ── 護城河 2.0 ── */
  '2. 護城河 2.0：從「有沒有」到「來源×寬度×趨勢」':
    '2. Moats 2.0: from "does it have one" to source × width × trend',
  '專欄 #6 的五種來源（無形資產、轉換成本、網路效應、成本優勢、有效規模）是第一層。進階分析加兩個維度：':
    'The five sources from column #6 — intangible assets, switching costs, network effects, cost advantage, efficient scale — are the first layer. The advanced version adds two more dimensions:',
  '寬度': 'Width',
  '——優勢能撐多久？（Morningstar 的粗略標準：wide ≈ 20 年+、narrow ≈ 10 年）判斷依據不是故事，是':
    " — how long can the advantage hold? (Morningstar's rough standard: wide ≈ 20 years or more, narrow ≈ 10 years.) You judge it on evidence rather than on a story, and the evidence is ",
  '財務證據': 'in the financials',
  '：ROIC 高於 WACC 的幅度與年數（W9＋Q4 W42）。':
    ': how far ROIC sits above WACC, and for how many years (W9 plus Q4 W42).',
  '趨勢': 'Trend',
  '——變寬還是變窄？這比「現在有沒有」更值錢，看三個訊號：':
    ' — widening or narrowing? This is worth more than knowing whether it has one today. Look at three signals:',
  '訊號': 'Signal',
  '變寬': 'Widening',
  '變窄': 'Narrowing',
  'ROIC 趨勢': 'ROIC trend',
  '高檔持平或上升': 'High and flat, or still rising',
  '逐年下滑向資金成本靠攏': 'Sliding year by year towards the cost of capital',
  '定價權': 'Pricing power',
  '敢漲價、客戶不跑（毛利率守住）':
    'Raises prices and keeps its customers (gross margin holds)',
  '只能跟進殺價（毛利率被侵蝕，W5）':
    'Can only follow the price cuts (gross margin erodes, W5)',
  '市佔與客戶黏性': 'Market share and customer stickiness',
  '市佔穩中有升、回購率高': 'Share steady or edging up, high repeat rate',
  '被新進者一口口咬掉': 'Being nibbled away by new entrants',
  '經典警示': 'The classic warning',
  '：曾經的寬護城河也會乾涸——底片（數位化）、傳統媒體（網路）、實體零售（電商）。護城河分析是':
    ': moats that were once wide do dry up — photographic film (digitisation), traditional media (the internet), physical retail (e-commerce). Moat analysis is ',
  '動態監控': 'ongoing monitoring',
  '，不是一次性認證。': ', not a one-off certification.',

  /* ── 真假護城河快篩 ── */
  '3. 先玩一輪：真假護城河快篩': '3. Play a round first: the real-or-fake moat screen',
  'Dorsey 的「假護城河」清單是質化分析的第一道濾網——六個說法，逐一判斷：':
    "Dorsey's list of fake moats is the first filter in qualitative analysis. Six claims — judge each one:",
  '真假護城河快篩': 'Real-or-fake moat screen',
  '「我們的產品比對手好用得多。」': '"Our product is far easier to use than theirs."',
  '假護城河——產品會被模仿、被超越；護城河是結構（成本、網路、轉換成本），不是單一產品。iPhone 的護城河是生態系轉換成本，不是某一代手機。':
    "A fake moat — products get copied and overtaken. A moat is a structure (cost, network, switching costs), not a single product. The iPhone's moat is the switching cost of the ecosystem, not any one generation of handset.",
  '「客戶要換掉我們，得重寫整套系統、重訓全部員工。」':
    '"To replace us, a customer would have to rewrite the whole system and retrain every employee."',
  '真護城河——轉換成本。客戶離開的代價高到寧可留下，這直接壓制了客戶議價力（五力的④）。':
    'A real moat — switching costs. Leaving costs so much that customers would rather stay, which directly suppresses buyer bargaining power (④ of the five forces).',
  '「我們是市佔率第一。」': '"We are number one by market share."',
  '假護城河——市佔是結果不是原因；沒有結構保護的第一名，只是還沒被追上。檢查法：它敢漲價嗎？':
    'A fake moat — market share is a result, not a cause. A leader with no structural protection has simply not been caught yet. The check: can it raise prices?',
  '「用的人越多，這個服務對每個人越好用。」':
    '"The more people use it, the better the service gets for everyone."',
  '真護城河——網路效應。規模自我強化，後進者難以冷啟動，同時削弱既有競爭與替代品（①③）。':
    'A real moat — network effects. Scale reinforces itself, latecomers struggle with a cold start, and both rivalry and substitutes are weakened (① and ③).',
  '「我們團隊執行力超強、比誰都拚。」':
    '"Our team executes brilliantly and outworks everybody."',
  '假護城河——執行力值得敬佩，但可以被模仿、也會隨人員流動枯竭；Dorsey 明確把它列入假護城河清單。':
    'A fake moat — execution deserves respect, but it can be copied and it drains away as people leave. Dorsey puts it explicitly on his fake-moat list.',
  '「我們的規模讓單位成本壓到全行業最低。」':
    '"Our scale puts our unit cost at the lowest in the industry."',
  '真護城河——成本優勢。同樣售價下利潤更厚、殺價戰打得起，直接嚇阻新進入者（②）。':
    'A real moat — cost advantage. At the same selling price the margin is fatter and it can afford a price war, which directly deters new entrants (②).',
  '<div class="fbtns"><button data-a="true">真護城河</button><button data-a="false">假護城河</button></div>':
    '<div class="fbtns"><button data-a="true">Real moat</button><button data-a="false">Fake moat</button></div>',
  '<b>答對。</b>': '<b>Correct.</b> ',
  '<b>不是——</b>': '<b>No.</b> ',
  '完成：': 'Done: ',
  '——全對！記住口訣：護城河是「結構」，不是產品、市佔或努力。':
    ' — all correct. Remember the rule of thumb: a moat is a structure, not a product, not market share, and not effort.',
  '——回頭看錯的那幾題：共同點是把「結果或努力」誤認成「結構」。':
    ' — go back over the ones you got wrong. They all make the same mistake: taking a result or an effort for a structure.',
  '已答': 'Answered',

  /* ── Porter 五力 ── */
  '4. Porter 五力：產業的地形圖': "4. Porter's Five Forces: a terrain map of the industry",
  '護城河看「這家公司」，五力看「這家公司站的戰場」——再強的公司在爛戰場也難賺（Porter, 2008）：':
    'A moat is about this company; the five forces are about the battlefield it is standing on. Even a strong company struggles to make money on bad terrain (Porter, 2008):',
  '力': 'Force',
  '問的問題': 'The question it asks',
  '力量大（產業難賺）的特徵':
    'Signs the force is strong, and the industry hard to profit in',
  '① 既有競爭': '① Rivalry',
  '同業打得多兇？': 'How hard are the rivals fighting?',
  '玩家多、產品無差異、退出成本高（殺價循環）':
    'Many players, undifferentiated products, high exit costs — a price-cutting spiral',
  '② 新進入者威脅': '② Threat of new entrants',
  '進場門檻高嗎？': 'How high is the barrier to entry?',
  '資本／技術／法規門檻低，賺錢就有人湧入':
    'Low capital, technology and regulatory barriers — the moment it makes money, people pile in',
  '③ 替代品威脅': '③ Threat of substitutes',
  '客戶有別的解法嗎？': 'Do customers have another way to solve this?',
  '替代方案更便宜方便（高鐵之於國內線航空）':
    'The substitute is cheaper and more convenient (high-speed rail against domestic flights)',
  '④ 客戶議價力': '④ Buyer bargaining power',
  '客戶敢壓你價嗎？': 'Can customers push your price down?',
  '客戶集中、轉單容易（單一大客戶佔營收過半）':
    'Concentrated customers who can switch easily (a single large customer is over half of revenue)',
  '⑤ 供應商議價力': '⑤ Supplier bargaining power',
  '上游敢漲你價嗎？': 'Can suppliers raise the price on you?',
  '關鍵投入被少數供應商壟斷':
    'A critical input is controlled by a handful of suppliers',
  '用下面的評分器幫目標公司掃一次戰場（練習第 1 步會正式做，每力要附證據句）：':
    'Use the scorer below to sweep the battlefield for your target company (step 1 of the exercise does it properly, with a line of evidence for each force):',
  '五力雷達評分器（5 分＝該力對公司有利）':
    'Five Forces radar scorer (5 = the force favours the company)',
  '五力雷達圖': 'Five Forces radar chart',
  '既有競爭': 'Existing rivalry',
  '新進入者威脅': 'Threat of new entrants',
  '替代品威脅': 'Threat of substitutes',
  '客戶議價力': 'Buyer bargaining power',
  '供應商議價力': 'Supplier bargaining power',
  /* 雷達 SVG 的軸標籤：位置窄，用最短的一組（見檔頭） */
  '② 新進入者': '② New entrants',
  '③ 替代品': '③ Substitutes',
  '④ 客戶力': '④ Buyer power',
  '⑤ 供應商力': '⑤ Supplier power',
  '<b>五力平盤（': '<b>All five level (',
  '/25）：</b>還沒開始評——逐力拉動滑桿；正式做練習時，每力要附一句證據（年報「市場概況」章、產業新聞），不是憑感覺打分。':
    '/25):</b> you have not started scoring yet — drag each slider in turn. When you do this for real in the exercise, every force needs a line of evidence (the "market overview" section of the annual report, industry news), not a gut feeling.',
  '<b>好戰場（': '<b>Good terrain (',
  '/25）：</b>五力多數對公司有利——但記得問：這是產業結構使然，還是公司自己的護城河擋出來的？兩者對「別家公司也能複製嗎」的答案不同。':
    '/25):</b> most of the five forces favour the company — but remember to ask whether that comes from the structure of the industry or from the company\'s own moat. The two give very different answers to "could anyone else copy this?"',
  '<b>普通戰場（': '<b>Ordinary terrain (',
  '/25）：</b>最弱的一環是「': '/25):</b> the weakest link is "',
  '」——它就是你「最大質化風險」欄的頭號候選，也是估值該保守的理由。':
    '" — that is the leading candidate for your "biggest qualitative risk" line, and the reason to be conservative in the valuation.',
  '<b>爛戰場（': '<b>Bad terrain (',
  '/25）：</b>再強的公司在這種地形也難賺——五力全開的產業，高獲利很難撐過均值回歸。DCF 的 g 與優勢期都該從嚴，或者直接跳過。':
    '/25):</b> even a strong company struggles to make money on terrain like this. In an industry where all five forces are firing, high profits rarely survive mean reversion. Be strict with both g and the advantage period in your DCF — or simply skip the company.',
  '五力與護城河的關係：護城河本質上就是「讓五力對你失效的結構」——轉換成本壓制④、成本優勢嚇阻②、網路效應削弱①③。台灣視角：晶圓代工（②極高門檻、但④大客戶集中）、手搖飲（②幾乎無門檻→靠品牌撐①）、超商（①雙寡頭默契、⑤對供應商強勢）。':
    'How the two fit together: a moat is essentially a structure that stops the five forces working on you — switching costs suppress ④, cost advantage deters ②, network effects weaken ① and ③. From a Taiwan perspective: wafer foundries (② very high barriers, but ④ highly concentrated customers), bubble tea chains (② almost no barrier at all, so the brand has to hold off ①), convenience stores (① a comfortable duopoly, ⑤ a strong hand over suppliers).',

  /* ── 一頁質化分析模板 ── */
  '5. 質化分析的輸出格式（一頁）':
    '5. The output format for qualitative analysis (one page)',
  '一頁質化分析': 'One-page qualitative analysis',
  '複製模板': 'Copy template',
  '已複製 ✓': 'Copied ✓',
  '複製失敗，請手動選取': 'Copy failed — please select it by hand',
  '【公司】＿＿＿  【產業戰場評分】五力各 1–5 分（5=對公司有利）\n① 既有競爭 ＿ ② 新進者 ＿ ③ 替代品 ＿ ④ 客戶力 ＿ ⑤ 供應商力 ＿\n【護城河】來源：＿＿（五選）｜寬度證據：ROIC ＿% > WACC ＿%，持續 ＿年\n【趨勢】變寬/持平/變窄——三訊號各一句（ROIC 趨勢／定價權／市佔）\n【對估值的含義】支持 g ＝＿%？優勢期估 ＿年？（回填 W20-21 的假設）\n【最大質化風險】一句話（＝W26 論文反方論證的種子）':
    '[Company] ＿＿＿  [Battlefield score] each force 1–5 (5 = favours the company)\n① Rivalry ＿ ② New entrants ＿ ③ Substitutes ＿ ④ Buyer power ＿ ⑤ Supplier power ＿\n[Moat] Source: ＿＿ (one of the five) | Width evidence: ROIC ＿% > WACC ＿%, sustained ＿ years\n[Trend] widening / flat / narrowing — one line per signal (ROIC trend / pricing power / market share)\n[What it means for the valuation] Does it support g = ＿%? Advantage period ＿ years? (Feed back into the W20-21 assumptions)\n[Biggest qualitative risk] One sentence (= the seed of the counter-argument in the W26 thesis)',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「好產品＝護城河」': '"A good product is a moat"',
  '產品會被模仿；護城河是': 'Products get copied. A moat is a ',
  '結構': 'structure',
  '（成本、網路、轉換成本），不是單一產品。iPhone 的護城河是生態系轉換成本，不是某一代手機。':
    " — cost, network, switching costs — not a single product. The iPhone's moat is the switching cost of the ecosystem, not any one generation of handset.",
  '「市佔第一＝有護城河」': '"Number one by market share means it has a moat"',
  '市佔是結果不是原因；沒有結構保護的第一名，只是還沒被追上（檢查：它敢漲價嗎？）。':
    'Market share is a result, not a cause. A leader with no structural protection has simply not been caught yet. (The check: can it raise prices?)',
  '「五力分析做一次就好」': '"You only need to do a five-forces analysis once"',
  '技術變遷會重畫地形（串流之於有線電視）；每年年報季重掃一次，特別注意②和③。':
    'Technology redraws the terrain (streaming against cable TV). Rescan every year at results season, paying particular attention to ② and ③.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '50 分': '50 min',
  '《護城河投資優勢》（Dorsey）選章':
    'The Little Book That Builds Wealth (Dorsey) — selected chapters',
  '五種來源的深化；特別讀「假護城河」章——好產品、市佔、執行力為什麼不算。':
    'A deeper treatment of the five sources. Read the fake-moat chapter especially — why a good product, market share and execution do not count.',
  '40 分': '40 min',
  '原典；讀不完全文就精讀每一力的定義段。':
    'The original. If you cannot get through the whole piece, read the definition paragraph for each force closely.',
  '10 分': '10 min',
  '專欄 #6 重讀 ↗': 'Column #6 — reread ↗',
  '五來源＋台積電案例，本週在其上加寬度與趨勢。':
    'The five sources plus the TSMC case; this week adds width and trend on top of them.',
  '選讀': 'Optional',
  'Buffett 1995 年信 ↗': "Buffett's 1995 letter ↗",
  '談 See\'s Candies 定價權的段落（搜 "See\'s"）——定價權作為護城河試金石的原始出處。':
    'The passage on See\'s Candies and pricing power (search for "See\'s") — the original source for pricing power as the test of a moat.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '目標公司的一頁質化分析':
    'A one-page qualitative analysis of your target company',
  '延用 W13/W19–21 的目標公司：':
    'Keep the same target company you used in W13 and W19–21:',
  '五力評分': 'Score the five forces',
  '：逐力給 1–5 分，每力寫一句證據（從年報「市場概況」章、產業新聞找）——上面的雷達可以先草擬':
    ': give each force 1–5 and write one line of evidence for it (from the "market overview" section of the annual report, or from industry news) — the radar above is a good place to draft it',
  '護城河三問': 'Three questions about the moat',
  '：來源是五種中的哪種（可複選但要排序）？寬度的財務證據（拉 W9 的 ROIC 數據，對照估計的資金成本 ~8–10%）？趨勢三訊號各判一次？':
    ': which of the five sources is it (more than one is allowed, but rank them)? What is the financial evidence for its width (pull the ROIC data from W9 and compare it against an estimated cost of capital of ~8–10%)? And what is your verdict on each of the three trend signals?',
  '回填估值': 'Feed it back into the valuation',
  '：這份質化分析支持你 W20 用的成長假設嗎？需要下修 g 或縮短優勢期嗎？（若需要，回去改 DCF——這就是質化與量化的迴圈）':
    ': does this qualitative analysis support the growth assumption you used in W20? Do you need to cut g, or shorten the advantage period? (If so, go back and change the DCF — that loop between the qualitative and the quantitative is the whole point)',
  '一句話風險': 'The one-sentence risk',
  '：寫下最可能讓護城河失效的單一情境':
    ': write down the single scenario most likely to break the moat',
  '驗收標準：': 'What counts as done: ',
  '五力各有證據句（不是憑感覺打分）；護城河寬度有 ROIC 數字支撐；完成「質化→回填估值假設」的迴圈。':
    'every force has a line of evidence rather than a gut score; the width of the moat is backed by ROIC numbers; and the loop from qualitative analysis back into the valuation assumptions is closed.',
  '自我檢核': 'Check yourself',
  '五力各有證據句（不是憑感覺打分）':
    'Every force has a line of evidence, not a gut score',
  '護城河寬度有 ROIC 數字支撐': 'The width of the moat is backed by ROIC numbers',
  '完成「質化→回填估值假設」的迴圈':
    'The loop from qualitative analysis back into the valuation assumptions is closed',
  '一頁分析存檔（W26 論文直接取用）':
    'The one-page analysis is filed away (the W26 thesis will use it directly)',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then expand to check)',
  '為什麼「定價權」是護城河最好的單一試金石？':
    'Why is pricing power the single best test of a moat?',
  '→ 因為定價權': '→ Because pricing power ',
  '直接檢驗了所有五力的合力':
    'tests all five forces at once, as one combined effect',
  '：敢漲價且客戶不跑，代表競爭者無法趁機搶客（①②）、替代品不夠好（③）、客戶離不開（④）——一個行為驗證了整個結構；且它直接反映在毛利率上（W5），可用財報驗證。':
    ': raising prices without losing customers means rivals cannot poach them (① and ②), substitutes are not good enough (③), and customers cannot leave (④) — one behaviour verifies the entire structure. And because it shows up directly in the gross margin (W5), the financial statements can confirm it.',
  '一家 ROIC 25% 的公司，DCF 卻只敢給 g=2%——什麼質化判斷會導致這個組合？':
    'A company earns 25% ROIC, yet the DCF only dares use g = 2%. What qualitative judgement produces that combination?',
  '現在很賺，但護城河在變窄':
    'very profitable right now, but the moat is narrowing',
  '」——例如技術典範轉移在即、專利即將到期、大客戶正在扶植第二供應商；高 ROIC 是過去式，質化判斷它撐不了太久，所以永續成長只敢給低值（甚至縮短優勢期）。':
    '" — for instance a technology paradigm shift is close, key patents are about to expire, or a major customer is cultivating a second supplier. The high ROIC is a fact about the past; the qualitative judgement is that it will not hold for long, so you only dare put a low number on perpetual growth, and perhaps shorten the advantage period too.',
  '五力中哪一力對台灣電子代工業通常最不利？':
    "Which of the five forces is usually most hostile to Taiwan's electronics contract manufacturers?",
  '→ 通常是': '→ Usually it is',
  '④客戶議價力': '④ buyer bargaining power',
  '——代工模式客戶高度集中（少數國際品牌佔營收大宗），客戶掌握訂單與規格主導權，可要求年降（cost down）；這是同樣製造業中「品牌廠 vs 代工廠」利潤率差距的結構性原因。':
    ' — in a contract manufacturing model the customers are highly concentrated (a handful of international brands account for most of revenue), they control both the orders and the specifications, and they can demand an annual cost down. That is the structural reason for the margin gap between brand owners and contract manufacturers in the same industry.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '巷口兩家店': 'Two shops on the corner',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（巷口兩家店）': 'Opening (two shops on the corner)',
  '「巷口的手搖飲店生意超好，你猜半年後會發生什麼事？」（對面開第二家、隔壁開第三家——然後大家都賺不到錢。）「這就是商業的地心引力：':
    '"The bubble tea shop on the corner is doing a roaring trade — guess what happens six months from now?" (A second one opens across the street, a third opens next door — and then nobody makes any money.) "That is the gravity of business: ',
  '好賺的生意會把競爭者吸過來，直到大家都不好賺':
    'a profitable business pulls competitors in until nobody is making a profit',
  '核心觀念': 'The core idea',
  '「所以真正值錢的公司，不是『現在很賺』的，是『別人搶不走』的。搶不走靠什麼？護城河——像城堡外面那圈水。」（用家人熟的例子：全聯的成本優勢、健保卡綁定的系統轉換成本、LINE 的網路效應。）':
    '"So the companies really worth owning are not the ones making money right now, they are the ones nobody can take it away from. What stops them? A moat — the ring of water around a castle." (Use examples they already know: PX Mart\'s cost advantage, the switching cost of systems tied to the NHI card, LINE\'s network effect.)',
  '互動（試金石遊戲）': 'Interaction (the litmus-test game)',
  '「檢驗一家店有沒有護城河，問一個問題就夠：':
    '"To test whether a shop has a moat, one question is enough: ',
  '它敢漲價嗎？漲了你還會去嗎？': 'can it raise prices — and would you still go?',
  '」（讓對方輪流出題：中華電信漲月租費？巷口麵店漲 10 元？台積電漲代工價？——判斷誰敢誰不敢，就是在做定價權分析。）':
    '" (Take turns setting each other questions: Chunghwa Telecom putting up the monthly fee? The noodle shop on the corner adding NT$10? TSMC raising its foundry prices? Working out who can and who cannot is exactly what pricing power analysis is.)',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那現在最紅的那家不就最有護城河？」':
    '"So doesn\'t the hottest one right now have the biggest moat?"',
  '「紅是結果，要問『為什麼別人抄不走』——葡式蛋塔當年也很紅。」':
    '"Being hot is a result. The question is why nobody can copy it — Portuguese egg tarts were very hot once too."',
  '「護城河的公司就可以隨便買？」':
    '"So can I just buy anything with a moat?"',
  '「好公司＋壞價格＝壞投資（上週的安全邊際）；護城河只回答『值得排隊』，價格回答『現在上車嗎』。」':
    '"A good company at a bad price is a bad investment — last week\'s margin of safety. The moat only answers \'is this worth queueing for\'; the price answers \'do I get on now\'."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能說出護城河的「來源×寬度×趨勢」三維與各自證據':
    'You can lay out the three dimensions of a moat — source, width, trend — and the evidence for each',
  '能逐力解釋五力並舉台灣產業實例':
    'You can explain each of the five forces and give a Taiwanese industry example',
  '目標公司一頁質化分析完成且回填了估值假設':
    'The one-page qualitative analysis of your target company is finished and fed back into the valuation assumptions',
  '分享環節完成（定價權試金石遊戲），記錄卡住的點':
    'You have taught it, including the pricing-power litmus-test game, and noted where they got stuck',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 22 週完成——質化的另一半補齊了。下週見：行為財務學，面對你自己的大腦。':
    '🎓 Week 22 done — the qualitative half is filled in. Next up: behavioural finance, and facing your own brain.',
  '下週預告 · Week 23：行為財務學——認知偏誤與對策工程':
    'Next week · Week 23: behavioural finance — cognitive biases and engineering around them',
  '——工具都齊了：健檢、估值、質化。下週面對最後一個、也是最難的敵人：你自己的大腦。':
    ' — the toolkit is complete: health check, valuation, qualitative analysis. Next week you face the last opponent, and the hardest: your own brain.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：敏感度與安全邊際': 'Previous week: sensitivity and margin of safety',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
