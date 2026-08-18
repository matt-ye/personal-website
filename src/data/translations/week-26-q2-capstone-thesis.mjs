/*
 * 給家人的投資課 Week 26：Q2 Capstone——個股投資論文 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-26-q2-capstone-thesis.html
 *
 * 沿用 week-01 的慣例。本週特有的幾件事：
 *
 * ⚠ 這頁沒有金額欄位與計算機，「萬」的規則用不到；散文裡唯一的金額
 *   「目標價 185 元」照常換算成 NT$185，其餘 150–210／135 是同一段的價格區間，
 *   原文就沒重複幣別，照抄不加。
 *
 * ⚠ 兩個 key 在不同地方共用，值必須同時讀得通，所以刻意選了中性的寫法：
 *   ①「②商業模式」既是表格章名也是 rubric 項名 → '② Business model'，
 *     後接的「用自己的話重寫」改成 ': rewrite it in your own words'，
 *     這樣 rubric 顯示乾淨、練習條目也是完整句。
 *   ②「更新到最新一季」同時當表格 src 標註與練習祈使句 → 'updated to the
 *     latest quarter'（被動式在兩邊都成立）。
 *
 * ⚠ 抽取器抓不到、因此英文頁會留下的中文標點（不在對照表職權內）：
 *   ① 前置 chip 的分隔號「、」（第 13、19–25 週）
 *   ② 觸發條件健檢的 `「」`（JS 用 "「" + cur.t + "」" 包住題目）
 *      與答案回饋的 `。</b><br>`
 *   ③ rubric 弱項清單的 join("、") 與句尾「。」
 *   ④ 幾處 <strong> 收尾後單獨成節點的「。」
 *   這些節點整段沒有漢字，抽取器不收，改不到。
 *
 * ⚠ 原文自帶的不一致，照抄不修（不是譯者該動的）：
 *   h2 寫「8 分才算 Q2 畢業」，內文與計分器卻是「16 分滿分、13 分過關」；
 *   任務 C 也寫「低於 8 分的章節補強」。英文版照樣寫 8。
 *
 * 語域：這是半年的期末，寫給家人的教材。市場先生鬧脾氣、阿嬤買菜、
 *   「寫到自己會動搖」——這些要保住，不要改寫成 sell-side 的 thesis template。
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
  '給家人的投資課 · Q2 投資人季 · Week 26':
    "Family Investing Course · Q2 The Investor's Quarter · Week 26",
  'Q2 Capstone——個股投資論文': 'Q2 Capstone — an investment thesis on one stock',
  'W13 的健檢問「值得研究嗎」；投資論文問的是':
    'The W13 check-up asked "is this worth researching?" An investment thesis asks ',
  '買不買、多少錢買、什麼情況下我認錯':
    'whether to buy, at what price, and what would make me admit I was wrong',
  '。素材你其實都寫好了——本週的工作是組裝、補強，和最難的那一章。':
    '. You have already written most of the material — this week is assembly, reinforcement, and the one chapter that is genuinely hard.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 13': 'weeks 13',
  '25 週': '25',
  '52 週 · 第 26 週': '52 weeks · Week 26',
  'Q2 結業驗收': 'Q2 final assessment',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  'Q2 的期末考，也是半年學習的總驗收。投資論文是專業機構的標準文件——寫得出來，代表你已具備「獨立分析一家公司並做出附帶認錯機制的決策」的能力。':
    'The Q2 final exam, and the overall test of six months of study. An investment thesis is the standard document at professional firms — being able to write one means you can analyse a company on your own and make a decision that carries its own mechanism for admitting error.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週的市場溫度計，家人這個「情緒感測器」給了什麼讀數——那個讀數會影響你論文第⑦章的部署節奏，但不該影響第①章的論點本身。':
    'Look back at last week\'s market thermometer, and at what reading your family — that "sentiment sensor" — gave you. The reading affects the pace of deployment in chapter ⑦ of your thesis, but it should not touch the argument in chapter ① at all.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '一份投資論文裡，最難寫、也最值錢的是哪一章？':
    'Which chapter of an investment thesis is the hardest to write, and the most valuable?',
  '猜一個答案': 'Pick an answer',
  '估值——算出它到底值多少': 'Valuation — working out what it is actually worth',
  '反方論證——為什麼聰明人正在賣': 'The counter-case — why a smart person is selling',
  '商業模式——把生意講清楚': 'The business model — explaining the business clearly',
  '答對了——反方論證。估值和商業模式都有現成方法可循，但反方論證要求你主動攻擊自己的結論，這違反人的本能（W23 確認偏誤）。它也最值錢：它決定你的倉位該多大，以及你錯的時候還剩多少。':
    'Correct — the counter-case. Valuation and the business model both come with ready-made methods to follow, but the counter-case asks you to attack your own conclusion, which cuts against instinct (confirmation bias, W23). It is also the most valuable: it decides how big your position should be, and how much is left when you turn out to be wrong.',
  '這一章確實重要，但不是最難的——它有現成方法可循。最難的是第⑥章反方論證：你必須寫出「一個聰明人為什麼此刻正在賣」的最強版本，強到自己讀了會動搖。它違反本能，卻決定了你的倉位該多大。':
    'That chapter does matter, but it is not the hardest — there is a ready-made method for it. The hardest is chapter ⑥, the counter-case: you have to write the strongest possible version of "why a clever person is selling right now", strong enough that reading it back shakes you. It cuts against instinct, and it decides how big your position should be.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 1 小時': 'Block ① / Notes · about 1 hour',
  '論文的定位：一份寫給「一年後的自己」的合約':
    'What the thesis is: a contract written to the you of a year from now',
  '投資論文（investment thesis）不是報告作業，是':
    'An investment thesis is not a homework report, it is a ',
  '決策合約': 'decision contract',
  '。它記錄三件事：你買入（或不買）的完整理由、你付的價格隱含了什麼假設、以及':
    '. It records three things: the full reasoning behind buying (or not buying), the assumptions baked into the price you pay, and ',
  '什麼證據出現時你承認自己錯了':
    'what evidence would make you admit you were wrong',
  '一年後回頭讀它（W38 季度複盤、W52 年度驗收都會回來對照），你評價的':
    'Reading it back a year later — the W38 quarterly review and the W52 annual assessment both come back to it — what you judge is ',
  '不是賺賠': 'not whether you made or lost money',
  '，是「當時的推理成不成立」。這正是 W23 講的 resulting——用結果評價決策，是投資最常見的認知錯誤之一。賺錢的爛決策和賠錢的好決策都存在，只有寫下來的推理能讓你分辨。':
    ', but whether the reasoning held up. This is exactly the "resulting" from W23 — judging a decision by its outcome, one of the most common cognitive errors in investing. Bad decisions that made money and good decisions that lost money both exist, and only reasoning written down at the time lets you tell them apart.',
  '寫不出來，就是還沒想清楚。一句話說不明白的論點，通常是自己也不確定的論點。':
    'If you cannot write it, you have not thought it through. An argument you cannot state in one sentence is usually one you are not sure of yourself.',

  /* ── 七章結構 ── */
  '七章結構與素材來源': 'Seven chapters, and where the material comes from',
  '好消息是：七章裡有四章的素材，你在過去十三週已經寫完了。本週真正要新寫的只有①⑥⑦——而其中⑥是主戰場。':
    'The good news: you wrote the material for four of the seven chapters over the past thirteen weeks. Only ①, ⑥ and ⑦ are genuinely new — and ⑥ is where the battle is.',
  '章': 'Ch.',
  '內容': 'Contents',
  '素材來源': 'Where the material comes from',
  '頁幅': 'Length',
  '一句話論點': 'Thesis in one line',
  '「以 ＿ 價格買入 ＿，因為市場低估了 ＿；預期 ＿ 年內 ＿」':
    '"Buy ＿ at a price of ＿, because the market is underpricing ＿; expect ＿ within ＿ years"',
  '新寫': 'New',
  '最後才寫': 'write it last',
  '2 行': '2 lines',
  '商業模式': 'Business model',
  '這家公司怎麼賺錢：賣什麼、賣給誰、憑什麼收錢':
    'How the company makes money: what it sells, who it sells to, and why anyone pays',
  'W13 健檢＋年報': 'W13 check-up + annual report',
  '第 13 週': 'Week 13',
  '0.3 頁': '0.3 pages',
  '護城河與五力': 'Moat and five forces',
  '來源 × 寬度 × 趨勢，加上產業地形':
    'Source × width × trend, plus the shape of the industry',
  'W22 一頁質化分析': 'W22 one-page qualitative analysis',
  '第 22 週': 'Week 22',
  '0.5 頁': '0.5 pages',
  '財務健檢摘要': 'Financial check-up summary',
  '三率、杜邦、現金流三線、紅旗掃描結論':
    'The three margins, DuPont, the three cash-flow lines, and the red-flag sweep',
  'W13 健檢報告': 'W13 check-up report',
  '更新到最新一季': 'updated to the latest quarter',
  '0.4 頁': '0.4 pages',
  '估值': 'Valuation',
  'comps 相對位置＋DCF 區間＋安全邊際＋買價上限':
    'Where comps place it, a DCF range, the margin of safety, and a buy-price ceiling',
  'W19 comps＋W21 結論卡': 'W19 comps + W21 conclusion card',
  '第 19': 'weeks 19',
  '21 週': '21',
  '風險與反方論證': 'Risk and the counter-case',
  '一個聰明人為什麼此刻正在賣出': 'Why a smart person is selling right now',
  '本週主戰場': 'the main battle this week',
  '結論與觸發條件': 'Conclusion and triggers',
  '行動（買／等／跳過）＋倉位＋認錯觸發條件':
    'The action (buy / wait / skip), the position size, and the triggers for admitting error',
  '倉位受': 'position size limited by the',
  '上限約束': 'cap',

  /* ── 反方論證 ── */
  '反方論證：最難也最值錢的一章':
    'The counter-case: the hardest chapter, and the most valuable',
  '規則只有一條：': 'There is only one rule: ',
  '你必須寫出「一個聰明、消息靈通的人為什麼此刻正在賣出這檔股票」的最強版本':
    'you have to write the strongest possible version of "why a clever, well-informed person is selling this stock right now"',
  '——寫到你自己讀了會動搖，才算合格。':
    ' — and it only counts once reading it back shakes you.',
  '草稿的強度直接反映你確認偏誤（W23）的程度。如果你的反方論證看起來像稻草人——「風險是總體經濟可能不好」這種誰都能說的話——那不是反方論證，是形式主義。':
    'How strong the draft is tells you directly how much confirmation bias (W23) you are carrying. If your counter-case looks like a straw man — "the risk is that the economy might be weak", the sort of line anyone can produce — then it is not a counter-case, it is a formality.',
  '三個找反方的來源': 'Three places to find the counter-case',
  '來源': 'Source',
  '問法': 'The question to ask',
  '為什麼有效': 'Why it works',
  '市價反推': 'Work back from the market price',
  '如果市場是對的，它在擔心什麼？':
    'If the market is right, what is it worried about?',
  '估值偏低通常不是市場瞎了，是它':
    'A low valuation rarely means the market has gone blind; it usually means the market has ',
  '給某個風險定了價': 'put a price on some risk',
  '。找出那個風險。': '. Go and find that risk.',
  '五力與趨勢': 'Five forces and trends',
  '護城河三訊號裡最弱那個，往壞處推演兩年會怎樣？':
    'Take the weakest of the three moat signals and run it two years in the wrong direction — what happens?',
  '護城河是動態的。最弱的一環兩年後可能已經破了。':
    'A moat is a moving thing. The weakest link may already be broken two years from now.',
  '賣方視角': "The seller's point of view",
  '誰在賣？大股東申讓？外資連續賣超？':
    'Who is selling? Insiders filing to sell? Foreign investors selling day after day?',
  '他們可能知道或相信什麼你不知道的事。':
    'They may know, or believe, something you do not.',
  '寫完反方後，問自己一個決定性的問題：':
    'Once the counter-case is written, ask yourself the decisive question: ',
  '「我的買入論點在反方成立時還剩多少？」':
    '"if the counter-case turns out to be right, how much of my reason to buy is left?"',
  '答案是「': 'The answer is "',
  '全毀': 'nothing at all',
  '」→ 倉位該縮小，或直接放棄':
    '" → shrink the position, or drop the idea altogether',
  '傷但不死': 'hurt but not killed',
  '」（因為估值已含安全邊際）→ 論點才夠強壯':
    '" (because the valuation already carries a margin of safety) → now the argument is strong enough',
  '「我有寫風險章節啊——市場波動、政策不確定性、匯率風險。」':
    '"But I did write a risk section — market volatility, policy uncertainty, currency risk."',
  '這是免責聲明，不是反方論證。差別在於：':
    'That is a disclaimer, not a counter-case. The difference: ',
  '反方論證必須具體到能被驗證，而且針對這家公司':
    'a counter-case has to be specific enough to be checked, and it has to be about this company',
  '。「匯率風險」適用於所有出口商；「最大客戶正在自建產線，佔營收 38% 的訂單兩年內可能歸零」才是反方。':
    '. "Currency risk" applies to every exporter. "The largest customer is building its own production line, and the orders that make up 38% of revenue could go to zero within two years" — that is a counter-case.',

  /* ── 觸發條件 ── */
  '觸發條件：把「認錯」寫成合約條款':
    'Triggers: writing "I was wrong" into the contract',
  '模糊的「看情況再說」是死抱虧損的溫床——這正是 W23 處分效應最愛的土壤。觸發條件必須':
    'A vague "let us see how it goes" is the breeding ground for clinging to losses — exactly the soil the disposition effect from W23 loves. A trigger has to be ',
  '可驗證': 'checkable',
  '，而且': ', and it has to be ',
  '不能是純價格': 'more than just a price',
  '為什麼不能用價格？因為價格下跌本身':
    'Why not price? Because a falling price, in itself, is ',
  '不是論點錯誤的證據': 'not evidence that your argument is wrong',
  '。它可能只是市場先生在鬧脾氣——而市場先生鬧脾氣的時候，正是你該買更多的時候，不是認錯的時候。用價格當觸發條件，等於把裁判權交給你原本要利用的那個情緒。':
    '. It may just be Mr Market throwing a tantrum — and when Mr Market throws a tantrum, that is when you should be buying more, not when you should be conceding. Using price as your trigger hands the whistle to the very emotion you set out to exploit.',
  '同場要寫「': 'While you are there, write an "',
  '加碼條件': 'add-more condition',
  '」：什麼證據出現時值得加碼（在 W18 上限內）。這一條的作用是防止你在下跌時的加碼是':
    '": what evidence would justify adding to the position, inside the W18 cap. Its job is to stop your buying on the way down from being ',
  '攤平': 'averaging down',
  '（情緒），而不是': ' (emotion) rather than a ',
  '決策': 'decision',
  '（論點更便宜了）。': ' (the same argument, now cheaper).',

  /* ── 互動 1：觸發條件健檢 ── */
  '觸發條件健檢：這條寫得合格嗎？': 'Trigger health check: does this one pass?',
  '合格的標準只有兩個：': 'There are only two standards: ',
  '（有明確數字或事件，不是感覺）＋':
    ' (a specific number or event, not a feeling) plus ',
  '非純價格': 'not purely price-based',
  '（不是靠股價漲跌來判斷論點對錯）。六題。':
    ' (you do not decide whether the argument is right by watching the share price). Six questions.',
  '第 1 / 6 題': 'Question 1 / 6',
  '第': 'Question',
  '題': '',
  '✓ 合格': '✓ Passes',
  '✕ 不合格': '✕ Fails',
  '目前答對 0 題': 'Correct so far: 0',
  '目前答對': 'Correct so far:',
  '重新開始——目前答對 0 題': 'Starting over — correct so far: 0',
  '答對——': 'Correct — ',
  '再想想——': 'Think again — ',
  '這條': 'this one ',
  '合格': 'passes',
  '不合格': 'does not pass',
  '下一題 →': 'Next question →',
  '再玩一次 ↺': 'Play again ↺',
  '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">（點上面的「下一題」繼續）</span>':
    '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">(tap "Next question" above to carry on)</span>',
  '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">（六題結束——想再練一次就點「再玩一次」）</span>':
    '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">(that is all six — tap "Play again" for another run)</span>',
  '股價從我的成本價下跌 20%': 'The share price falls 20% below what I paid',
  '純價格。價格下跌不是論點錯誤的證據——可能只是市場先生鬧脾氣，而那正是該考慮加碼的時候。用它認錯，等於把裁判權交給你原本要利用的情緒。':
    'Pure price. A falling price is not evidence that the argument is wrong — it may just be Mr Market in a mood, and that is exactly when you should be thinking about adding. Using it to concede hands the whistle to the very emotion you meant to exploit.',
  '毛利率連續兩季低於 32%': 'Gross margin below 32% for two consecutive quarters',
  '可驗證（打開財報五分鐘就能判定）、非價格、而且針對這家公司的核心假設。「連續兩季」這個限定也很好——避免單季雜訊誤觸發。':
    'Checkable — open the financials and you can settle it in five minutes — not price-based, and aimed straight at this company\'s core assumption. The "two consecutive quarters" qualifier is a nice touch too: it stops one noisy quarter from tripping the trigger.',
  '公司的基本面明顯轉壞': "The company's fundamentals clearly deteriorate",
  '不可驗證。「明顯轉壞」沒有標準，一年後的你會用當下的情緒去解釋它——想賣的時候什麼都是轉壞，捨不得賣的時候什麼都是暫時。必須換成具體指標。':
    'Not checkable. "Clearly deteriorate" has no standard, so the you of a year from now will read it through whatever mood you are in — when you want to sell, everything looks like deterioration; when you cannot bear to, everything looks temporary. Swap it for a specific measure.',
  '最大客戶佔營收比重突破 45%': 'The largest customer passes 45% of revenue',
  '可驗證（年報有揭露）、非價格。而且它直接對應一個真實風險：集中度過高時，失去一個客戶就足以推翻整個論點。':
    'Checkable — the annual report discloses it — and not price-based. It also maps straight onto a real risk: at that concentration, losing one customer is enough to overturn the entire argument.',
  '本益比跌到 10 倍以下': 'The P/E falls below 10',
  '仍然是價格驅動。本益比下跌可能是因為股價跌（市場情緒），也可能是因為 E 上升（基本面變好）——它不能告訴你論點對錯。這比較適合當「加碼條件」的參考，不是認錯條件。':
    'Still price-driven. A P/E can fall because the price dropped (market sentiment) or because E rose (fundamentals improving) — it cannot tell you whether the argument is right. It belongs in an "add more" condition, not in a trigger for admitting error.',
  '新廠稼動率連兩季低於 60%':
    'Utilisation at the new plant below 60% for two quarters running',
  '可驗證（法說會與財報會揭露）、非價格。它檢驗的正是當初買入論點裡「Capex 會帶來報酬」這個假設——假設被推翻，論點就該重新檢視。':
    'Checkable — disclosed at earnings calls and in the accounts — and not price-based. It tests exactly the assumption the original case rested on, that the capex would earn a return. If the assumption falls, the argument has to be reopened.',

  /* ── 互動 2：Rubric ── */
  '自評 Rubric：13 分才算 Q2 畢業':
    'Self-assessment rubric: 13 points and you graduate Q2',
  '寫完之後自己打分。': 'Score yourself once it is written. ',
  '七章各一項，加上「全文」一項，共八項':
    'one item for each of the seven chapters plus one for the document as a whole, eight in total',
  '；每項 0–2 分，滿分 16 分，': '; 0–2 points each, 16 at most, and ',
  '13 分以上算過關': '13 or more is a pass',
  '（沿用原本 80% 的標準）。': ' (the same 80% bar as before).',
  '②③④是組裝既有素材的章節，看似最容易，但也最容易因為「素材沒更新到最新一季」而失分——它們一樣要評分，否則整份論文的地基可以是空的。':
    'Chapters ②③④ only assemble material you already have, which makes them look like the easy part — and they are exactly where marks get lost, because the material never got updated to the latest quarter. They are scored like everything else; otherwise the whole thesis can rest on nothing.',
  '最重要的一句': 'The single most important line',
  '結論寫「跳過」的論文，一樣可以拿滿分。':
    'A thesis that concludes "skip it" can still score full marks. ',
  '「以此價格不買」是完全合法、而且非常常見的專業結論（W21）。Rubric 評的是':
    '"Not at this price" is a perfectly legitimate and very common professional conclusion (W21). What the rubric scores is ',
  '推理品質': 'the quality of the reasoning',
  '，不是你有沒有下單。分析師寫 sell 或 hold 的報告，跟寫 buy 的一樣專業。':
    ', not whether you placed an order. An analyst who writes sell or hold is being every bit as professional as one who writes buy.',
  'Rubric 自評計分器': 'Rubric self-scorer',
  '照你剛寫完的論文誠實給分。低分的項目就是你這週剩下時間該補的地方。':
    'Score honestly against the thesis you have just written. Whatever comes out low is what the rest of the week is for.',
  '／ 16 分': '/ 16',
  '↑ 虛線＝13 分及格線': '↑ The dashed line is the pass mark at 13',
  '先給每一項打分。': 'Score each item first.',
  '先給每一項打分（還有': 'Score each item first —',
  '項未評）。': 'still to go.',
  '①一句話論點': '① Thesis in one line',
  '具體，而且說得出「市場錯在哪」':
    'Specific, and able to say where the market has it wrong',
  '②商業模式': '② Business model',
  '用自己的話寫清楚賣什麼、賣給誰、憑什麼收錢——家人聽得懂':
    'In your own words: what it sells, who to, and why anyone pays — clear enough for your family',
  '③護城河與五力': '③ Moat and five forces',
  '來源 × 寬度 × 趨勢，每個判斷附證據而非形容詞':
    'Source × width × trend, with evidence behind every judgement rather than adjectives',
  '④財務健檢摘要': '④ Financial check-up summary',
  '三率、杜邦、現金流三線、紅旗結論，數據為最新一季':
    'The three margins, DuPont, the three cash-flow lines and the red-flag verdict, on latest-quarter figures',
  '⑤估值': '⑤ Valuation',
  '有區間、有安全邊際、有買價上限（不是單點目標價）':
    'A range, a margin of safety and a buy-price ceiling — not a single target price',
  '⑥反方論證': '⑥ The counter-case',
  '強到自己讀了會動搖': 'Strong enough that reading it back shakes you',
  '⑦結論與觸發條件': '⑦ Conclusion and triggers',
  '行動與倉位明確；觸發條件可驗證、非純價格':
    'Action and position size are explicit; the triggers are checkable and not purely price-based',
  '全文': 'The whole document',
  '每個主張都有數字或出處，不是形容詞堆疊':
    'Every claim has a number or a source behind it, not a pile of adjectives',
  '<button data-v="0">0 分 · 沒做到</button>':
    '<button data-v="0">0 · not done</button>',
  '<button data-v="1">1 分 · 部分做到</button>':
    '<button data-v="1">1 · partly done</button>',
  '<button data-v="2">2 分 · 完全做到</button>':
    '<button data-v="2">2 · fully done</button>',
  '分 · Q2 畢業。</b>你已經具備「獨立分析一家公司並做出附帶認錯機制的決策」的能力。':
    '· Q2 graduation.</b> You can now analyse a company on your own and make a decision that carries its own mechanism for admitting error. ',
  '行有餘力可再補強：': 'If you have time, these could still be stronger: ',
  '八項全部紮實，把論文存好——W38 複盤會回來對照它。':
    'All eight are solid. File the thesis somewhere safe — the W38 review comes back to check it.',
  '分 · 差一點。</b>把這幾項補到 2 分就過關：':
    '· so close.</b> Get these up to 2 and you are through: ',
  '。通常最快的補強是⑥反方論證——它一強，⑦觸發條件會跟著具體起來。':
    '. The quickest fix is usually ⑥, the counter-case — once that is strong, the triggers in ⑦ get concrete on their own.',
  '分 · 還要再一輪。</b>弱項：': '· one more round needed.</b> Weak spots: ',
  '。建議順序：先把⑥反方論證寫到自己會動搖，再回頭修⑤估值的區間與買價上限，②③④若弱多半是素材沒更新到最新一季，最後重寫①。①永遠最後寫。':
    '. Suggested order: first write ⑥, the counter-case, until it shakes you; then go back and fix the range and the buy-price ceiling in ⑤; if ②③④ are weak it is usually because the material was never updated to the latest quarter; and rewrite ① last. ① always goes last.',

  /* ── 三個自我欺騙 ── */
  '三個常見的自我欺騙': 'Three ways people fool themselves',
  '「估值我寫了一個目標價 185 元。」':
    '"For valuation I wrote a target price of NT$185."',
  '單點目標價是': 'A single-point target price is ',
  '假精確': 'false precision',
  '。DCF 對假設極度敏感（W20 的 r−g 分母），給區間才誠實：「合理區間 150–210，我的買價上限 135（含 30% 邊際）。」買價上限比目標價有用得多——它是':
    '. A DCF is wildly sensitive to its assumptions (the r − g denominator from W20), and only a range is honest: "fair range 150–210, my buy-price ceiling is 135, with a 30% margin." A ceiling is far more useful than a target — it is ',
  '可執行的紀律': 'a piece of discipline you can actually act on',
  '「觸發條件我寫：如果基本面轉壞就賣。」':
    '"For the trigger I wrote: sell if the fundamentals deteriorate."',
  '「基本面轉壞」不可驗證，等於沒寫。改成：「毛利率':
    '"Fundamentals deteriorate" cannot be checked, which is the same as writing nothing. Try: "gross margin below 32% ',
  '連兩季': 'for two quarters running',
  '低於 32%」「最大客戶佔比突破 45%」——一年後的你可以打開財報，用五分鐘判定它有沒有發生。':
    '" or "the largest customer passes 45% of revenue" — a year from now you can open the accounts and settle it in five minutes.',
  '「反方論證我請 AI 幫我寫了三點。」':
    '"I had an AI write three counter-arguments for me."',
  '可以用來找盲點，但': 'Useful for finding blind spots, but ',
  '不能取代你自己想': 'no substitute for thinking it through yourself',
  '。反方論證的價值在於它會改變你的倉位決策——如果你讀完自己寫的反方毫無感覺，那代表你根本沒相信它，那一章就白寫了。標準始終是：':
    '. The value of a counter-case is that it changes how big your position is. If reading your own counter-case leaves you unmoved, you never believed it, and the chapter was wasted. The standard never changes: ',
  '寫到自己會動搖': 'write it until it shakes you',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 30 分鐘':
    'Block ② / Required reading · about 30 minutes',
  '本週要讀的，是你自己寫的東西': 'This week you read your own writing',
  'Capstone 週沒有新知識。閱讀清單就是你過去十三週的產出——這也是一次檢查：當初寫的東西，現在還站得住嗎？':
    'A capstone week has no new material. The reading list is everything you produced over the past thirteen weeks — and it doubles as a check: does what you wrote back then still stand up?',
  '各 5 分鐘': '5 min each',
  '重讀你的 W13 健檢、W19 comps、W21 結論卡、W22 質化分析':
    'Re-read your W13 check-up, W19 comps, W21 conclusion card and W22 qualitative analysis',
  '重點不是複習，是': 'The point is not revision, it is ',
  '查核數據是否需要更新到最新一季':
    'checking whether the figures need bringing up to the latest quarter',
  '。財報每季更新，三個月前的三率可能已經變了——用過期數字寫論文，第④⑤章直接失效。':
    '. Accounts come out every quarter, and the three margins from three months ago may already have moved. Write the thesis on stale numbers and chapters ④ and ⑤ are void.',
  '5 分鐘': '5 min',
  '重讀 W24–25 的原則清單 v1.1':
    'Re-read your principles list v1.1 from W24–25',
  '論文結論': 'The conclusion of the thesis ',
  '不得違反自己的原則': 'must not break your own principles',
  '。如果違反了，必須改其中一邊——要嘛改結論，要嘛改原則並寫下為什麼。兩者都可以，但不能假裝沒看到。':
    '. If it does, one of the two has to change: either the conclusion, or the principle — and if the principle, write down why. Both are allowed. Pretending you did not notice is not.',
  '選讀': 'Optional',
  '大師對單一投資的完整論證，當作文體範本':
    "A master's full argument for a single investment, as a model for the form",
  'Buffett 1988 年關於可口可樂的段落是經典範例：商業模式、護城河、價格、以及他為什麼願意重壓。注意他':
    "Buffett's 1988 passage on Coca-Cola is the classic example: business model, moat, price, and why he was willing to bet heavily. Notice ",
  '用多少篇幅講生意、多少篇幅講數字':
    'how much space he gives the business and how much he gives the numbers',
  '——比例可能跟你想的不一樣。': ' — the ratio may not be what you expect.',
  '1988 年股東信 ↗': 'the 1988 shareholder letter ↗',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 2.5 小時': 'Block ③ / Exercise · about 2.5 hours',
  '寫出你的第一份投資論文': 'Write your first investment thesis',
  '對象可以沿用 W13 的健檢公司，也可以換一家新的（換新的話，②③④要重做，會花比較久）。':
    'You can stay with the company from your W13 check-up, or pick a new one — a new one means redoing ②③④, which takes longer.',
  '任務 A｜組裝與補強（1 小時）': 'Task A | Assemble and reinforce (1 hour)',
  '按七章結構把既有素材貼進來，先求齊全不求好看':
    'Paste the existing material into the seven-chapter structure — complete first, presentable later',
  '④⑤的財務數據': 'The financial figures in ④ and ⑤ must be ',
  /* 「②商業模式」是表格章名與 rubric 項名共用的 key（見檔頭），
     所以練習條目靠這一段接成完整句：② Business model: rewrite it… */
  '用自己的話重寫': ': rewrite it in your own words',
  '——禁止複製公司官網說法，寫到家人能懂的程度':
    " — no copying the company's own website, and write it so your family can follow it",
  '任務 B｜反方論證與觸發條件（1 小時）':
    'Task B | The counter-case and the triggers (1 hour)',
  '用三來源法寫反方：': 'Write the counter-case with the three sources: ',
  '至少兩個具體反方論點，各自附證據':
    'at least two concrete counter-arguments, each with its own evidence',
  '寫 3–5 條認錯觸發條件——每一條都要通過上面健檢的兩個標準':
    'Write 3–5 triggers for admitting error — each one has to pass both standards from the health check above',
  '寫 1–2 條加碼條件': 'Write 1–2 conditions for adding to the position',
  '回答那個決定性問題：反方成立時，我的論點還剩多少？把答案寫進⑦的倉位決定裡':
    'Answer the decisive question — if the counter-case is right, how much of my argument survives? — and write the answer into the position decision in ⑦',
  '任務 C｜收尾（30 分鐘）': 'Task C | Finishing off (30 minutes)',
  '最後': 'Only at the very end',
  '才寫①一句話論點——前面都想清楚了，這句話會自己浮出來':
    ' do you write ① the one-line thesis — once everything before it is clear, the sentence writes itself',
  '跑一次 Rubric 自評': 'Run the rubric self-assessment once',
  '拿 0–1 分的章節補強': 'Reinforce whatever sections scored 0-1',
  '怎麼知道做對了：': 'How to know you got it right: ',
  '把論文給一個沒讀過這家公司的人看五分鐘，他能複述出「這家公司怎麼賺錢」和「作者可能錯在哪」。如果他只記得目標價，代表你把論文寫成了推薦函。':
    'give the thesis to someone who has never read about the company, let them look at it for five minutes, and they should be able to tell you back how the company makes money and where the author might be wrong. If all they remember is the target price, you have written a sales letter.',
  '產出請存成': 'Save the output as a ',
  '獨立文件': 'standalone document',
  '——W38 季度複盤與 W52 年度驗收都會回來對照它。可轉為專欄文章；發布版建議去除具體買賣建議、保留分析框架。':
    ' — the W38 quarterly review and the W52 annual assessment both come back to compare against it. It can be turned into a column piece; for a published version, strip out the specific buy and sell advice and keep the analytical framework.',
  '七章齊全，且④⑤數據為最新一季':
    'All seven chapters are there, and the figures in ④ and ⑤ are from the latest quarter',
  '反方論證讓自己動搖過': 'The counter-case shook you at least once',
  '觸發條件可驗證、非純價格（3–5 條）':
    'The triggers are checkable and not purely price-based (3–5 of them)',
  '加碼條件 1–2 條': '1–2 conditions for adding to the position',
  'Rubric 自評 ≥ 13 分（滿分 16）': 'Rubric self-score of 13 or more out of 16',

  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up to check)',
  '為什麼「跌 20% 就停損」對長期投資人是壞的觸發條件？':
    'Why is "cut it at −20%" a bad trigger for a long-term investor?',
  '→ 因為價格下跌': '→ Because a falling price is ',
  '。它可能只是市場先生鬧脾氣——而那正是你該考慮加碼的時候。用價格當認錯依據，等於把裁判權交給你原本要利用的情緒。好的觸發條件應該問「我當初的':
    '. It may just be Mr Market in a mood — and that is precisely when you should be thinking about adding. Using price as the basis for conceding hands the whistle to the very emotion you meant to exploit. A good trigger asks whether the original ',
  '推理': 'reasoning',
  '被推翻了嗎」，例如毛利率連兩季低於某個水準、最大客戶流失，這些才是論點的地基。':
    ' has been overturned — gross margin below some level for two quarters running, say, or the largest customer walking away. Those are the foundations the argument stands on.',
  '反方論證寫完後，發現「反方成立我的論點就全毀」，該怎麼辦？':
    'You finish the counter-case and realise that if it is right, nothing of your argument survives. What now?',
  '→ 這代表論點': '→ It means the argument is ',
  '脆弱': 'fragile',
  '，不代表一定不能買，但倉位必須縮小（甚至放棄）。健康的狀態是「傷但不死」——因為買價已含安全邊際（W21），就算反方部分成立，你付的價格仍留有緩衝。':
    ', which does not necessarily mean you cannot buy, but the position has to shrink — possibly to nothing. The healthy state is "hurt but not killed": because the buy price already carries a margin of safety (W21), even if part of the counter-case comes true, the price you paid leaves you a cushion. ',
  '安全邊際的真正用途就在這裡': 'This is what a margin of safety is really for',
  '：它不是讓你賺更多，是讓你在判斷錯了一部分時還活著。':
    ': not to make you more money, but to keep you alive when part of your judgement turns out to be wrong.',
  '結論是「跳過，不買」，這份論文算失敗嗎？':
    'The conclusion is "skip it, do not buy". Has the thesis failed?',
  '→ 完全不算，而且可以拿滿分。「以此價格不買」是專業分析最常見的結論之一。Rubric 評的是':
    '→ Not at all, and it can score full marks. "Not at this price" is one of the most common conclusions in professional analysis. What the rubric scores is ',
  '不是有沒有下單。真正的失敗是：分析完得出「不該買」卻還是買了（W23 的沉沒成本＋確認偏誤），或是寫不出買價上限所以永遠在等。':
    ', not whether an order was placed. The real failure is analysing your way to "do not buy" and buying anyway (sunk cost plus confirmation bias, W23), or never managing to write a buy-price ceiling and therefore waiting forever.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '五分鐘電梯簡報': 'A five-minute elevator pitch',
  '講到別人聽懂，才算真的懂。這一週的分享是 Q2 總驗收——規則同 W13 但升級了：':
    'You only understand it once someone else does. This week\'s share is the overall test of Q2 — the same rules as W13, but a level up: ',
  '檢驗重點是反方論證': 'what gets tested is the counter-case',
  '五分鐘的順序': 'The order to use for five minutes',
  '這家公司怎麼賺錢（②）→ 為什麼別人搶不走（③）→ 值多少、現在貴嗎（⑤）→':
    'How the company makes money (②) → why nobody can take that away (③) → what it is worth and whether it is expensive today (⑤) →',
  '我可能錯在哪': 'where I might be wrong',
  '（⑥）→ 所以我打算怎麼做（⑦）': ' (⑥) → and so what I intend to do (⑦)',
  '注意順序：先講生意，最後才講數字和決定。反過來講會變成推銷。':
    'Note the order: the business first, the numbers and the decision last. The other way round turns it into a sales pitch.',
  '檢驗方式（本週的重點）': 'How to test it (the point of this week)',
  '講完之後，請家人': 'When you have finished, ask them to ',
  '複述「你可能錯在哪」': 'repeat back where you might be wrong',
  '如果家人記得住你的反方論證，代表你講得誠實又清楚——那是這半年最值得驕傲的一件事。如果他們只記得「你說會漲」，那第⑥章要重寫。':
    'If your family can remember your counter-case, you explained it honestly and clearly — and that is the thing worth being proudest of in these six months. If all they remember is "you said it would go up", chapter ⑥ needs rewriting.',
  '聽不懂的地方＝要重寫的地方': 'Wherever they lose you is what needs rewriting',
  '家人卡住的每一處都記下來，回論文把那段重寫。':
    'Note every place your family got stuck, then go back to the thesis and rewrite that passage. ',
  '聽不懂通常不是家人的問題，是你用行話掩蓋了沒想透的地方。':
    'Not following you is usually not their problem; it is jargon covering a spot you never thought all the way through.',
  '收尾': 'Closing',
  '「這就是我這半年學的東西的樣子——從看懂報表，到敢寫下自己可能錯在哪。」':
    '"This is what six months of learning looks like — from being able to read a set of accounts to being willing to write down where I might be wrong."',
  '預期反應與應對': 'What they will say, and what to answer',
  '「所以到底買不買？」': '"So are you buying it or not?"',
  '照論文⑦誠實回答，含倉位上限。若結論是「等待」，解釋買價上限的邏輯——就像阿嬤買菜，看到喜歡的菜也要等它降到合理價（W21）。':
    'Answer honestly from chapter ⑦, position cap included. If the conclusion is "wait", explain the logic of a buy-price ceiling — like Grandma at the market, who waits even for the vegetables she likes to come down to a sensible price (W21).',
  '「你講得頭頭是道，萬一還是錯了呢？」':
    '"You sound very sure of yourself — what if you are wrong anyway?"',
  '「所以才有第⑥章和觸發條件——':
    '"Which is exactly why chapter ⑥ and the triggers exist — ',
  '錯不可恥，錯了不認才燒錢':
    'being wrong is no disgrace; refusing to admit it is what burns money',
  '。我已經先寫好什麼情況下我要承認自己錯，這樣到時候才不會找藉口。」':
    '. I have already written down what would make me admit I was wrong, so that when the time comes I cannot start making excuses."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '投資論文 2–3 頁完成並獨立存檔':
    'The 2–3 page investment thesis is written and saved as its own file',
  '七章齊全，反方論證含至少兩個具體論點':
    'All seven chapters are there, and the counter-case holds at least two concrete arguments',
  '認錯觸發條件 3–5 條，全部可驗證且非純價格':
    '3–5 triggers for admitting error, all checkable and none purely price-based',
  'Rubric ≥ 13 分（或已列出補強計畫）':
    'A rubric score of 13 or more (or a written plan to close the gaps)',
  '家人／朋友能複述你的反方論證':
    'A family member or friend can repeat your counter-case back to you',
  '🎓 Q2 投資人季完課——你已經能獨立分析一家公司，並寫下自己可能錯在哪。下週進入 Q3 操盤手季。':
    "🎓 Q2, the investor's quarter, is complete — you can analyse a company on your own and write down where you might be wrong. Next week opens Q3, the trader's quarter.",
  '下週預告 · Week 27：Q3 操盤手季開場——模擬組合上線':
    "Next week · Week 27: Q3, the trader's quarter, opens — the paper portfolio goes live",
  '——鏡頭要從「一家公司」換成「一個組合」。你寫完了單一標的的完整判斷，下一季要面對的問題完全不同：這些標的放在一起會怎樣？風險怎麼量？績效怎麼歸因？第一件事——讓你的模擬組合正式上線開始記錄。':
    ' — the camera swings from "one company" to "one portfolio". You have just finished a complete judgement on a single holding; next quarter\'s questions are entirely different. What happens when these holdings sit together? How do you measure the risk? How do you attribute the performance? First job: get your paper portfolio officially live and recording.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：大師心法——Marks 備忘錄':
    "Previous week: how the masters think — Marks's memos",
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
