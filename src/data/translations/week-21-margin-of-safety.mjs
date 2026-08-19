/*
 * 給家人的投資課 Week 21：估值三——敏感度、情境與安全邊際 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-21-margin-of-safety.html
 *
 * 沿用 week-01 的慣例。要注意的三件事：
 *
 * ⚠ 兩個計算機（九宮格、安全邊際）的數字全由 JS 算，對照表只換字串。
 *   每股價值沒有單位後綴（本來就是裸數字），所以不必處理「萬」；
 *   散文裡的金額照常換算：市場先生腳本的 2000 萬／800 萬 → NT$20 million／NT$8 million。
 *
 * ⚠ 書名與人名用既有英文，不自創：
 *     《智慧型股票投資人》 = The Intelligent Investor（Graham）
 *     Zweig、Damodaran、Graham、Porter's Five Forces（波特五力）原文即英文。
 *   「市場先生」是該書的 Mr Market，用原詞而不是直譯。
 *
 * ⚠ 九宮格的市價判讀句由多段字面值拼成，其中 ' ≈ 「WACC '、'%＋g ' 兩段
 *   只含全形標點與英數，不在 [一-鿿]，抽取器看不見也換不掉，會原樣留著。
 *   同一類殘留還有 <strong>…</strong> 後面單獨的「：」。這是抽取器的邊界，不是漏譯。
 *
 * 語域：寫給家人的教材。阿嬤買高麗菜、瘋鄰居報價這些比喻是本頁的重點，
 *   要留住那個溫度，不要改寫成 sell-side 研究報告。
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
  '給家人的投資課 · Q2 投資人季 · Week 21':
    "Family Investing Course · Q2 The Investor's Quarter · Week 21",
  '估值三——敏感度、情境與安全邊際':
    'Valuation Three — Sensitivity, Scenarios and the Margin of Safety',
  'W19 給了相對的尺、W20 給了絕對的尺，本週回答最後的問題：尺本身不準怎麼辦？':
    'W19 gave you the relative ruler and W20 the absolute one. This week answers the last question: what if the ruler itself is off?',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 20 週': 'Week 20',
  '52 週 · 第 21 週': '52 weeks · Week 21',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles:',
  'Graham 的百年智慧——把單點變區間、用安全邊際吸收誤差。這是價值投資的哲學核心，也是 W26 投資論文估值章的最終形態。':
    " A century-old idea of Graham's — turn a single number into a range, and let the margin of safety absorb the error. This is the philosophical core of value investing, and the final form of the valuation chapter in the W26 thesis.",
  '開始前 10 分鐘：': 'First 10 minutes:',
  '回顧上週分享「金蛋鵝」的反應——「目標價底下藏著假設」講通了嗎、兩把尺的比喻對方記住了嗎。':
    ' Think back to how the goose-that-lays-golden-eggs script landed last week — did "there are assumptions hiding under every target price" get through, and did the two-rulers image stick?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '上週的 DCF 算出每股 17.68。只把折現率和永續成長率各動 ±1%（每個假設都「聽起來合理」）——最保守和最樂觀的結果會差多少？':
    'Last week\'s DCF came out at 17.68 per share. Move the discount rate and the perpetual growth rate by just ±1% each — every one of those assumptions "sounds reasonable" — and how far apart do the most conservative and the most optimistic results end up?',
  '猜一個答案': 'Pick an answer',
  '差不到 2 成': 'Less than 20% apart',
  '差大約 5 成': 'About 50% apart',
  '差 2 倍': 'A factor of two',
  '答對了——最保守角 13.2、最樂觀角 26.7，剛好差 2 倍。而每一格的假設都「聽起來合理」。所以誠實的說法不是「它值 17.68」，是「大約 13–27，中心 18 附近」——本週學怎麼跟這個區間共處。':
    'Correct — 13.2 in the most conservative corner, 26.7 in the most optimistic one: exactly a factor of two. And the assumptions in every single cell "sound reasonable". So the honest statement is not "it is worth 17.68" but "roughly 13–27, centred near 18" — this week is about living with that range.',
  '更大——最保守角 13.2、最樂觀角 26.7，差了 2 倍。而每一格的假設都「聽起來合理」（折現率差 1%、永續成長差 1%，誰敢說哪個一定對？）。所以誠實的說法不是「它值 17.68」，是「大約 13–27」——本週學怎麼跟這個區間共處。':
    'Bigger than that — 13.2 in the most conservative corner and 26.7 in the most optimistic one, a factor of two. And every cell\'s assumptions "sound reasonable" (1% on the discount rate, 1% on perpetual growth — who would swear which one is right?). So the honest statement is not "it is worth 17.68" but "roughly 13–27" — this week is about living with that range.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 先親眼看看你的 DCF 有多脆弱：敏感度九宮格':
    '1. See for yourself how fragile your DCF is: the nine-cell sensitivity grid',
  '延用 W20 的算例（基準：WACC 9%、g 3% → 每股 17.68），只動兩個終值假設。':
    'Stay with the worked example from W20 (base case: WACC 9%, g 3% → 17.68 per share) and move only the two terminal-value assumptions. ',
  '點任一格看它的假設；拉「市價」滑桿反推市場的想法':
    'click any cell to see its assumptions, and drag the market-price slider to back out what the market is thinking',
  '敏感度九宮格（每股內在價值）':
    'Nine-cell sensitivity grid (intrinsic value per share)',
  '市價（反推市場預期）': 'Market price (backing out market expectations)',
  '市價': 'Market price',
  '練習第 1 步的驗證點：用講義參數應重現 13.2–26.7 這張表。綠底＝基準格；紅字＝最保守角、綠字＝最樂觀角。':
    'The check for step 1 of the exercise: with the parameters from the notes you should reproduce this table, 13.2 to 26.7. Green background = the base case; red = the most conservative corner; green text = the most optimistic one.',
  '九宮格的三個用法': 'Three things the grid is for',
  '誠實面對區間': 'Face the range honestly',
  '：你的估值不是 17.68，是「大約 13–27，中心 18 附近」②':
    ': your valuation is not 17.68, it is "roughly 13–27, centred near 18" ② ',
  '找出主導假設': 'Find the dominant assumption',
  '：沿對角線變化最劇——WACC 與 g 同時往樂觀走時價值爆增，代表兩者都要保守才穩 ③':
    ': the change is steepest along the diagonal — value explodes when WACC and g both move the optimistic way, which means both of them have to be conservative before the number is steady ③ ',
  '反推市場預期': 'Back out what the market expects',
  '：市價對到哪一格，就是市場隱含的假設——你同意嗎？不同意就是機會（或你錯了）。':
    ': whichever cell the market price lands on is the set of assumptions the market is implying. Do you agree? If not, that is your opportunity — or you are the one who is wrong.',
  /* 九宮格互動（script 內的字串字面值） */
  '（基準）': ' (base case)',
  '（最保守角）': ' (most conservative corner)',
  '（最樂觀角）': ' (most optimistic corner)',
  '% → 每股': '% → per share',
  '兩個假設同時往樂觀走——對角線是九宮格變化最劇的方向，也是「用 Excel 許願」最常發生的地方。':
    'Both assumptions moved the optimistic way at once — the diagonal is where the grid changes fastest, and where wishing in Excel most often happens.',
  '兩個假設都保守——安全邊際計算通常從這附近取「保守估值」。':
    'Both assumptions conservative — this is roughly where the margin-of-safety calculation takes its "conservative value" from.',
  '上週的單點估值。現在你知道：它只是九格裡的一格。':
    "Last week's single-point valuation. Now you know it is only one of nine cells.",
  '折現率與永續成長各差 1% 以內——「聽起來都合理」的假設，結果差這麼多。':
    'Discount rate and perpetual growth within 1% of each other — assumptions that all "sound reasonable", and look how far apart the results land.',
  '<b>市價': '<b>Market price',
  '：低於整張表的最保守角（13.2）。</b>市場的悲觀超出「合理假設」的範圍——可能是機會（明顯太便宜），也可能市場知道你不知道的事。先查，再撿。':
    'is below the most conservative corner of the whole table (13.2).</b> The market\'s pessimism runs past the range of "reasonable assumptions" — it may be an opportunity (obviously too cheap), or the market may know something you do not. Check first, then pick it up.',
  '：高於最樂觀角（26.7）。</b>市場隱含的假設比「8% 折現＋4% 永續成長」還樂觀——明顯太貴的區域，價值投資者的答案是等待。':
    'is above the most optimistic corner (26.7).</b> The assumptions the market is implying are more optimistic than "8% discount plus 4% perpetual growth" — obviously-too-expensive territory, and the value investor\'s answer there is to wait.',
  '%」那一格（': '% cell (',
  '）。</b>市場正在用這組假設定價——你同意嗎？不同意就是機會（或你錯了）。':
    ').</b> This is the set of assumptions the market is pricing on. Do you agree? If not, that is your opportunity — or you are the one who is wrong.',

  /* ── 三情境法 ── */
  '2. 三情境法：讓區間有商業故事':
    '2. Three scenarios: giving the range a business story',
  '九宮格只動財務參數；三情境法動':
    'The grid only moves financial parameters; the three-scenario method moves the ',
  '商業假設': 'business assumptions',
  '（營收成長、利潤率），每個情境是一個完整的故事：':
    ' — revenue growth, margins — and every scenario is a complete story:',
  '情境': 'Scenario',
  '故事要求': 'What the story has to do',
  '例（示意）': 'Example (illustrative)',
  '悲觀（bear）': 'Bear',
  '競爭惡化／掉單／衰退——':
    'Competition worsens, orders are lost, a downturn — ',
  '要具體到「什麼事發生」': 'be specific about what actually happens',
  '成長 2%、利潤率 −3pp → 每股 12': 'growth 2%, margin −3pp → 12 per share',
  '基準（base）': 'Base',
  '延續現況、略保守': 'Carry on as things are, slightly conservative',
  '每股 17.7': '17.7 per share',
  '樂觀（bull）': 'Bull',
  '新產品／擴產順利——同樣要具體':
    'A new product lands, the capacity build goes well — again, be specific',
  '成長 12%、利潤率 +2pp → 每股 25': 'growth 12%, margin +2pp → 25 per share',
  '兩個紀律：': 'Two disciplines: ',
  '悲觀情境不是「基準打 9 折」':
    'the bear case is not "the base case minus 10%"',
  '，要真的想一個壞劇本（W36 的事前驗屍在估值裡的前身）；可以為三情境配上主觀機率（如 25/50/25）算期望值——但機率本身也是假設，別假精確。':
    '. You have to actually write a bad script (the ancestor of the W36 pre-mortem, applied to valuation). You can attach subjective probabilities to the three scenarios, say 25/50/25, and compute an expected value — but the probabilities are assumptions too, so do not fake precision.',

  /* ── 安全邊際 ── */
  '3. 安全邊際：Graham 的核心發明':
    "3. The margin of safety: Graham's central invention",
  '買價上限 ＝ 保守估值 × (1 − 要求邊際)':
    'Buy limit = conservative value × (1 − required margin)',
  '「安全邊際」＝': 'A margin of safety means ',
  '只在價格顯著低於保守估值時才買':
    'buying only when the price sits well below your conservative valuation',
  '。不是預測它會跌到那裡，而是「不到這個價，這筆交易的容錯不夠」。':
    '. It is not a prediction that the price will fall that far; it is that below that price the trade does not carry enough room for error.',
  '安全邊際計算器': 'Margin-of-safety calculator',
  '保守估值（九宮格保守列）':
    'Conservative value (from the conservative row of the grid)',
  '要求邊際': 'Required margin',
  '目前市價': 'Current market price',
  '保守估值': 'Conservative value',
  '買價上限': 'Buy limit',
  '市價 vs 上限': 'Price vs limit',
  '上限': 'Limit',
  '邊際要求量級：穩定公用事業 15–20%、一般公司 30%、高不確定成長股 50% 以上——或誠實承認「這家我算不了」，跳過。跳過永遠是選項。講義例：14.8 × (1−30%) ＝ 買價上限 10.4。':
    'Rough orders of magnitude for the margin you should require: a stable utility 15–20%, an ordinary company 30%, a high-uncertainty growth stock 50% or more — or admit honestly that you cannot value this one, and skip it. Skipping is always an option. The worked example from the notes: 14.8 × (1 − 30%) = a buy limit of 10.4.',
  '安全邊際在吸收三種誤差：①':
    'The margin of safety is absorbing three kinds of error: ① ',
  '你算錯': 'you got it wrong',
  '（模型、假設、資料）②': ' (the model, the assumptions, the data) ② ',
  '世界變了': 'the world changed',
  '（技術、競爭、法規）③': ' (technology, competition, regulation) ③ ',
  '運氣不好': 'bad luck',
  '（對的決策也可能遇到壞結果，W38 的 resulting）。':
    ' (a right decision can still meet a bad outcome — resulting, in W38).',
  '<b>市價落在買價上限之內</b>——邊際條件成立。這不代表「衝」：回頭確認保守估值是真保守（不是湊出來的）、悲觀情境想過了、W18 的倉位上限還管著你。':
    '<b>The market price is inside your buy limit</b> — the margin condition holds. That is not a signal to charge in: go back and confirm the conservative value really is conservative and not reverse-engineered, that you have thought the bear case through, and that the W18 position cap still applies to you.',
  '<b>接近了，但還差': '<b>Close, but still',
  '%</b>——模糊區。Graham 的答案是等待：不是預測它會跌到':
    "%</b> — the fuzzy zone. Graham's answer is to wait: not because you are predicting it will fall to",
  '，而是「不到這個價，容錯不夠」。等不到就是市場先生沒給機會。':
    ', but because below that price there is not enough room for error. If it never gets there, Mr Market simply never offered you the chance.',
  '<b>市價高出上限': '<b>The market price is',
  '%</b>——這筆交易的容錯不夠。選項：等待、或把時間花在別的機會上。把要求降到「買得到」是本末倒置。':
    '% above your limit</b> — this trade does not carry enough room for error. Your options: wait, or spend the time on a different opportunity. Lowering the requirement until you can buy is putting the cart before the horse.',

  /* ── 市場先生 ── */
  '4. 市場先生：價格與價值的分離':
    '4. Mr Market: price and value come apart',
  'Graham 的寓言（《智慧型股票投資人》第 8 章，本週必讀原文）：你和「市場先生」合夥開公司，他每天報一個價要買你的股份或賣你他的——':
    'Graham\'s parable (chapter 8 of The Intelligent Investor, this week\'s required reading in the original): you and "Mr Market" are partners in a business, and every day he quotes a price at which he will buy your share or sell you his — ',
  '他情緒極不穩定': 'his moods are wildly unstable',
  '，亢奮時報天價、憂鬱時跳樓價。三個推論：':
    '. Elated, he quotes the sky; depressed, he quotes giveaway prices. Three things follow:',
  '報價是服務，不是指令': 'The quote is a service, not an instruction',
  '——你可以利用它（他憂鬱時買）、也可以無視它（價格不合理就不交易）':
    ' — you can use it (buy while he is depressed) or ignore it (no deal if the price makes no sense)',
  '價格波動不是風險，是機會的來源':
    'Price movement is not risk, it is where opportunity comes from',
  '——真正的風險是永久損失（付太貴、公司壞掉），這與 W15「σ 不等於風險全部」一脈相承':
    ' — the real risk is permanent loss, from overpaying or from the business breaking, which follows straight on from "σ is not the whole of risk" in W15',
  '但前提是': 'But only if ',
  '你對價值有獨立判斷': 'you have an independent view of value',
  '（W19–20 的兩把尺）——沒有價值錨的人，市場先生的情緒就會變成你的情緒（W23 的羊群）':
    " (the two rulers from W19–20) — without an anchor of your own, Mr Market's moods simply become your moods (the herd, in W23)",

  /* ── 模糊的正確 ── */
  '5. 「模糊的正確」勝過「精確的錯誤」':
    '5. Vaguely right beats precisely wrong',
  '估值訓練的終點': 'Where valuation training ends up',
  '你永遠不知道精確價值，但你經常能判斷「明顯太便宜」或「明顯太貴」。':
    'You will never know the precise value, but you can often tell "obviously too cheap" from "obviously too expensive".',
  '投資賺錢靠的是後者——在極端處行動、在模糊區等待。九宮格與三情境的功能，就是幫你畫出「明顯」的邊界。':
    'Making money in investing rests on the latter: act at the extremes, wait in the fuzzy middle. What the grid and the three scenarios do is draw the boundary of "obviously" for you.',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「安全邊際＝買低 P/E」': '"Margin of safety means buying a low P/E"',
  '不是；是「價格 vs 保守內在價值」的折扣。低 P/E 可能毫無邊際（價值陷阱，W19）。':
    'No. It is the discount of price against a conservative intrinsic value. A low P/E can carry no margin at all — a value trap, W19.',
  '「要求 50% 邊際就永遠買不到」':
    '"Demand a 50% margin and you\'ll never buy anything"',
  '對高不確定的公司，買不到就是正確結果；把要求降到「買得到」是本末倒置。':
    'For a highly uncertain company, not buying is the correct result. Lowering the requirement until you can buy is putting the cart before the horse.',
  '「三情境的期望值是科學」':
    '"The expected value across three scenarios is science"',
  '機率是你編的；期望值只是把主觀判斷結構化，別把它當定理。':
    'You made the probabilities up. Expected value only puts a structure around a subjective judgement; do not treat it as a theorem.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '80 分': '80 min',
  '《智慧型股票投資人》第 8 章（市場先生）＋第 20 章（安全邊際）':
    'The Intelligent Investor, chapter 8 (Mr Market) and chapter 20 (Margin of Safety)',
  '本週主菜，投資史上被引用最多的兩章；Zweig 註解版可連當代案例一起讀。':
    'The main course this week, and the two most-quoted chapters in the history of investing. The Zweig annotated edition lets you read the modern examples alongside them.',
  '30 分': '30 min',
  'Damodaran：估值不確定性相關講次 ↗':
    'Damodaran: the sessions on uncertainty in valuation ↗',
  '選讀 "uncertainty" 相關主題——學院派怎麼處理同一個問題。':
    'Pick the "uncertainty" topics — how the academic side handles the same problem.',
  '10 分': '10 min',
  '回顧 W20 你自己的 DCF ↗': 'Back to your own DCF from W20 ↗',
  '本週練習直接在它上面加工。':
    "This week's exercise builds straight on top of it.",

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '把你的 DCF 升級成估值區間': 'Turn your DCF into a valuation range',
  '延用 W20 為目標公司建的 DCF：':
    'Stay with the DCF you built for your target company in W20:',
  '九宮格': 'The grid',
  '：WACC ±1%、g ±1% 共九格，算出每股價值矩陣。':
    ': WACC ±1% and g ±1%, nine cells, and work out the matrix of per-share values. ',
  '驗證：講義參數下應重現 13.2–26.7':
    'Check: with the parameters from the notes you should reproduce 13.2 to 26.7',
  '（和上面互動格對答案）': ' (check it against the interactive grid above)',
  '三情境': 'Three scenarios',
  '：為悲觀／樂觀各寫一個 50 字的具體商業故事（什麼事發生了），對應調整成長與利潤率假設，得出三個每股價值':
    ': write a concrete 50-word business story for the bear case and the bull case (what actually happened), adjust the growth and margin assumptions to match, and get three per-share values',
  '安全邊際': 'Margin of safety',
  '：取保守估值、寫下你對這家公司要求的邊際 %（附一句理由），算出買價上限':
    ': take the conservative value, write down the margin you require for this company as a percentage with one line of reasoning, and work out the buy limit',
  '結論卡': 'Conclusion card',
  '估值區間 ＿–＿｜保守值 ＿｜要求邊際 ＿%｜買價上限 ＿｜現價 ＿｜行動：買進/等待/跳過':
    'Valuation range ＿–＿ | conservative value ＿ | required margin ＿% | buy limit ＿ | current price ＿ | action: buy / wait / skip',
  '寫 100 字：市價隱含了九宮格的哪一格？你同意市場的假設嗎？':
    "Write 100 words: which cell of the grid does the market price imply? Do you agree with the market's assumptions?",
  '驗收標準：': 'What counts as done: ',
  '九宮格驗證通過；悲觀情境有具體事件（不是基準打折）；結論卡完成且行動欄有明確選擇。':
    'the grid check passes; the bear case names concrete events rather than a discount off the base case; the conclusion card is complete with a definite choice in the action field.',
  '自我檢核': 'Check yourself',
  '九宮格驗證通過（講義參數下重現 13.2–26.7）':
    'The grid check passes (13.2 to 26.7 reproduced with the parameters from the notes)',
  '悲觀情境有具體事件（不是基準打折）':
    'The bear case names concrete events, not a discount off the base case',
  '結論卡完成且行動欄有明確選擇':
    'The conclusion card is complete, with a definite choice in the action field',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then expand to check)',
  '為什麼安全邊際對「越難預測的公司」要求越大？':
    'Why does a company that is harder to predict demand a bigger margin of safety?',
  '→ 邊際吸收的是': '→ What the margin absorbs is ',
  '預測誤差': 'forecast error',
  '——公司越難預測（新產業、高變動、無歷史），你的估值誤差分布越寬，需要越大的折扣才能讓「買貴」的機率降到可接受；穩定公司誤差窄，小邊際即可。':
    ' — the harder a company is to predict (a new industry, high volatility, no history), the wider the spread of your valuation error, and the bigger the discount you need before the odds of overpaying come down to something acceptable. A stable company has a narrow error, so a small margin will do.',
  '市場先生寓言裡，什麼時候該交易、什麼時候該無視他？':
    'In the Mr Market parable, when should you deal with him and when should you ignore him?',
  '該交易': 'Deal with him',
  '：他的報價與你的獨立估值出現極端偏離（跳樓價買進；瘋狂溢價時可考慮賣出）。':
    ': when his quote is wildly out of line with your own independent valuation — buy at the giveaway price, and consider selling at a crazy premium. ',
  '該無視': 'Ignore him',
  '：報價落在你的估值區間內——模糊區不行動。前提永遠是你有自己的估值錨。':
    ': when the quote sits inside your valuation range — no action in the fuzzy zone. The precondition is always that you have an anchor of your own.',
  '「跳過」在什麼情況下是最好的估值結論？':
    'When is "skip it" the best valuation conclusion?',
  '→ 當公司落在你的': '→ When the company falls outside your ',
  '能力圈外': 'circle of competence',
  '（商業模式看不懂、關鍵變數無法評估）——任何數字都是假精確，「我不知道」是最誠實也最賺錢的答案，因為它讓你把時間花在算得了的機會上。':
    ' — you cannot follow the business model, you cannot assess the variables that matter. Any number would be false precision. "I don\'t know" is the most honest answer and the most profitable one, because it frees your time for the opportunities you can actually value.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '阿嬤的買菜哲學': "Grandma's philosophy of buying vegetables",
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（買菜哲學）': 'Opening (buying vegetables)',
  '「阿嬤買菜有一個天生的投資智慧：她知道高麗菜『正常』大概多少錢一顆。颱風後一顆 150 她搖頭走開，盛產期一顆 20 她多買兩顆——':
    '"Grandma has a natural piece of investing wisdom when she shops for vegetables: she knows roughly what a cabbage \'normally\' costs. At 150 a head after a typhoon she shakes her head and walks away; at 20 in peak season she buys two extra — ',
  '她從不預測菜價，她只是知道什麼價格叫離譜。':
    'she never forecasts vegetable prices, she just knows which prices are ridiculous.',
  '核心觀念': 'The core idea',
  '「投資的最高境界跟阿嬤一樣：我們花三週學會估『合理價』（跟隔壁比、算金蛋），但最後一步是——':
    '"The highest form of investing is exactly Grandma\'s. We spent three weeks learning to estimate a \'fair price\' — comparing with the neighbours, counting the golden eggs — but the last step is this: ',
  '只在明顯便宜時出手，價格普通就等':
    'act only when it is obviously cheap, and wait when the price is ordinary',
  '。這個『打折才買』的折扣，就叫安全邊際：它保護我們算錯的時候。」':
    '. That \'only buy at a discount\' discount is what a margin of safety is, and it protects us for the times we get the sums wrong."',
  '互動（市場先生）': 'Interaction (Mr Market)',
  '「想像有個瘋瘋的鄰居，每天敲門報一個價要買你的房子：今天喊 2000 萬、明天心情差喊 800 萬。他喊 800 萬時你要賣嗎？」（不用——除非你自己知道房子值多少，他的情緒才傷不到你。）「股市就是這個鄰居，每天報價。':
    '"Imagine a slightly mad neighbour who knocks every day with a price for your house: NT$20 million today, and NT$8 million tomorrow when he is in a bad mood. Do you sell when he says NT$8 million?" (No — and it is only because you know for yourself what the house is worth that his moods cannot hurt you.) "The stock market is that neighbour, quoting every single day. ',
  '知道自己東西值多少的人，把他的瘋當機會；不知道的人，被他的瘋牽著走。':
    "People who know what their own things are worth treat his madness as an opportunity; people who don't get dragged along by it.",
  '預期反應與應對': 'What they will say, and what to answer',
  '「等打折等不到怎麼辦？」': '"What if the discount never comes?"',
  '「那就繼續持有原本的配置（W14–18 的系統）。安全邊際是給『加碼個股』用的高標準，不是叫你空手等待。」':
    '"Then you keep holding the allocation you already have — the system from W14–18. The margin of safety is a high bar for adding an individual stock, not an instruction to sit in cash and wait."',
  '「怎麼知道自己沒算錯？」': '"How do I know I haven\'t got the sums wrong?"',
  '「不知道，所以才要折扣——邊際就是『我可能錯 30%』的保險。」':
    '"You don\'t — which is exactly why you take the discount. The margin is insurance against being 30% wrong."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能做出九宮格並指出主導假設':
    'You can build the grid and point out the dominant assumption',
  '目標公司的估值區間＋結論卡完成':
    'The valuation range and the conclusion card for your target company are done',
  '能複述市場先生寓言與三個推論':
    'You can retell the Mr Market parable and the three things that follow from it',
  '分享環節完成（家人或朋友皆可），記錄卡住的點':
    'You have taught it to someone (family or friends) and noted where they got stuck',
  '本週心得記一行（下週回顧用）':
    "One line of notes on the week, for next week's review",
  '🎓 第 21 週完成——估值三部曲收官。下週見：護城河進階＋波特五力。':
    "🎓 Week 21 done — the valuation trilogy is closed. Next up: moats in depth, and Porter's Five Forces.",
  '下週預告 · Week 22：質化分析——護城河進階＋波特五力':
    "Next week · Week 22: qualitative analysis — moats in depth, and Porter's Five Forces",
  '——估值三部曲完成：comps（相對）＋DCF（絕對）＋區間與邊際（哲學）。下週補上質化的另一半：這家公司的護城河，撐得起你估值裡的那些假設嗎？':
    " — the valuation trilogy is complete: comps for the relative view, DCF for the absolute one, and range plus margin for the philosophy. Next week fills in the qualitative half: can this company's moat hold up the assumptions inside your valuation?",

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：DCF 基礎': 'Previous week: the basics of DCF',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
