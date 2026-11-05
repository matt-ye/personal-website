/*
 * 給家人的投資課 Week 36：投資決策流程——檢查清單與事前驗屍 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-36-decision-process.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 可監控／可預防／純運氣在標記文字與 JS 計數句共用同一 key，統一譯成首字大寫名詞，JS 句為『Monitorable N item(s): …』；下拉選項的值（熱門推薦、新聞／社群、考慮後不買）與 JS 比對字串同 key，譯文一致以保持比對成立。
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
  '給家人的投資課 · Q3 操盤手季 · Week 36':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 36',
  '投資決策流程——檢查清單與事前驗屍':
    'The investment decision process — checklist and premortem',
  '把散落在 W8（紅旗）、W23（偏誤對策）、W26（反方論證）的紀律零件，組裝成一條':
    'Take the pieces of discipline scattered across W8 (red flags), W23 (countermeasures for biases), and W26 (the counter-argument) and assemble them into ',
  '制度化的決策生產線':
    'an institutionalized decision production line',
  '：買入前檢查清單＋事前驗屍＋決策記錄。':
    ': a pre-purchase checklist + a premortem + a decision record.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 8、23、26 週':
    'Prerequisites: Weeks 8, 23, and 26',
  '52 週 · 第 36 週':
    '52 weeks · Week 36',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '個人投資者一人分飾機構裡的提案人、風控與投委會——本週學會怎麼在自己腦中把這三個角色拆開。':
    'An individual investor plays the proposer, risk control, and the investment committee all alone — this week you learn how to separate those three roles inside your own head.',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週的自保三問——家人能背出「我的錢放在誰名下、誰保管」了嗎？':
    'Look back at last week\'s three self-protection questions — can your family recite "where is my money held — in whose name, and under whose custody"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '飛行員飛了一萬小時，起飛前還是要拿出清單一項項唸。為什麼？':
    'A pilot with ten thousand hours of flying still takes out a checklist and reads it item by item before takeoff. Why?',
  '法規規定，做做樣子':
    'The regulations require it; it\'s for show',
  '怕新手副駕漏掉':
    'To catch what a novice co-pilot might miss',
  '人在壓力下一定會漏東西':
    'People under stress are bound to miss things',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 為什麼專家也需要清單':
    '1. Why even experts need checklists',
  'Gawande《清單革命》的原始場景是外科手術與飛航：':
    'The original setting of Gawande\'s The Checklist Manifesto is surgery and aviation: ',
  '專家失誤的主因不是無知（不知道），是疏忽（知道但在壓力下漏掉）':
    'the main cause of expert error isn\'t ignorance (not knowing) but oversight (knowing, and missing it under stress)',
  '。手術清單讓死亡率大幅下降，機制毫不神奇——把「每次都該做的事」從記憶體搬到紙上。':
    '. Surgical checklists cut mortality sharply, and the mechanism is not magic — they move "what should be done every time" from memory onto paper.',
  '投資恰好是「壓力下決策」的重災區（W23：情緒高張時系統二離線）。檢查清單是把前面 35 週學的判斷力，在關鍵時刻':
    'Investing is exactly a hot spot for "decisions under stress" (W23: when emotions run high, System 2 goes offline). A checklist is a machine that, at the critical moment, ',
  '強制上線':
    'forces online',
  '的機器。Buffett 的搭檔 Munger 是最著名的清單主義者——他的「多元思維模型」本質上就是一張超大型清單。':
    ' the judgment you learned over the previous 35 weeks. Buffett\'s partner Munger is the most famous checklist devotee — his "latticework of mental models" is essentially one giant checklist.',
  '2. 買入前檢查清單 v1：組裝你已有的零件':
    '2. The pre-purchase checklist v1: assembling the parts you already have',
  '三段式、12 項——每項都指回你已完成的課程工具。這不是新知識，是舊知識的':
    'Three sections, 12 items — each item points back to a course tool you have already finished. This isn\'t new knowledge; it\'s the ',
  '強制執行':
    'enforcement',
  '。下面就是一台可以直接試跑的清單：':
    ' of old knowledge. Below is a checklist you can try out right away:',
  '買入前清單試跑台':
    'Pre-purchase checklist test run',
  '拿一筆你正在考慮的交易，誠實地逐項勾。沒過的那幾項會被點名。':
    'Take a trade you are actually considering and tick each item honestly. The ones that fail get called out by name.',
  'A｜這家公司過關嗎（事實層）':
    'A | Does the company pass? (the facts)',
  '20 分鐘健檢通過':
    '20-minute health check passed',
  '紅旗 ≤ 1 支，且沒有待查項':
    'No more than 1 red flag, and nothing left to look into',
  '護城河有財務證據（ROIC 趨勢），且沒有變窄':
    'The moat has financial evidence (ROIC trend) and hasn\'t narrowed',
  '能用三句話向家人解釋它怎麼賺錢':
    'Can explain to the family in three sentences how it makes money',
  'B｜這筆交易過關嗎（價格與部位層）':
    'B | Does the trade pass? (price and position)',
  '估值區間做了，現價低於保守值 ×（1 − 安全邊際）':
    'Valuation range done, and the current price is below the conservative value × (1 − margin of safety)',
  '說得出市價隱含的假設、我為什麼不同意':
    'Can state the assumptions implied by the market price, and why I disagree',
  '部位與產業集中度都符合 IPS 上限':
    'Position size and sector concentration both within the IPS limits',
  '執行計畫定了（限價、分批天數）':
    'Execution plan set (limit order, number of days to scale in)',
  'C｜我自己過關嗎（行為層）':
    'C | Do I pass? (behavior)',
  '反方論證寫了，而且讓我動搖過':
    'Counter-argument written, and it made me waver',
  '想法來源清楚（熱門推薦 → 已過 48 小時冷靜期）':
    'The source of the idea is clear (hot tip → already past the 48-hour cooling-off period)',
  '事前驗屍做了':
    'Premortem done',
  '本週 §3':
    'This week §3',
  '決策記錄卡寫了':
    'Decision record card written',
  '本週 §4':
    'This week §4',
  'A 事實層':
    'A Facts',
  '公司':
    'The company',
  'B 交易層':
    'B Trade',
  '價格與部位':
    'Price and position',
  'C 行為層':
    'C Behavior',
  '我自己':
    'Me',
  '從第一項開始勾。':
    'Start ticking from the first item.',
  '使用規則':
    'Rules of use',
  '：12 項全過才下單；':
    ': all 12 must pass before you place the order; ',
  '任何一項想跳過的衝動，本身就是警訊':
    'any urge to skip an item is itself a warning sign',
  '——最想跳過清單的時刻，正是最需要清單的時刻。這是一張':
    ' — the moment you most want to skip the checklist is exactly when you most need it. This is a ',
  '確認清單':
    'confirmation checklist',
  '（做完才勾），不是執行清單（照著做）。':
    ' (you tick after the work is done), not a do-list (one you follow step by step).',
  '3. 事前驗屍（premortem）：從「會不會失敗」到「已經失敗了，為什麼」':
    '3. The premortem: from "will it fail?" to "it has already failed — why?"',
  'Gary Klein 發明、Kahneman 稱為對抗過度自信最有效的單一技術：':
    'Invented by Gary Klein, and called by Kahneman the single most effective technique against overconfidence: ',
  '想像一年後這筆投資已經虧了 40%。這是既成事實。現在寫下：它是怎麼發生的？':
    'Imagine that a year from now this investment has lost 40%. It is a done deal. Now write down: how did it happen?',
  '它和「風險分析」的差別在心理開關：問「有什麼風險」時，大腦在':
    'How it differs from "risk analysis" is a psychological switch: when asked "what are the risks?", the brain is ',
  '防守論點':
    'defending its thesis',
  '（找得少、找得輕）；設定「已經失敗」後，大腦轉為':
    ' (finding few, finding them mild); once you set "it has already failed," the brain switches to ',
  '解釋事實':
    'explaining a fact',
  '（想像力全開）。實務三步：':
    ' (imagination at full power). Three steps in practice:',
  '設定失敗場景（虧 40%／論點破產）':
    'Set the failure scenario (down 40% / the thesis is bankrupt)',
  '限時 10 分鐘，寫出至少':
    'Time-box it to 10 minutes and write at least ',
  '5 條':
    '5 reasons',
  '「事後看顯而易見」的原因':
    ' that look "obvious in hindsight"',
  '每條標記：':
    'Tag each one: ',
  '可監控':
    'Monitorable',
  '（→ 進 W26 觸發條件）、':
    ' (→ goes into the W26 trigger conditions), ',
  '可預防':
    'Preventable',
  '（→ 縮部位或調整執行）、':
    ' (→ shrink the position or adjust the execution), ',
  '純運氣':
    'Pure luck',
  '（→ 接受，並確認部位大小承受得起）':
    ' (→ accept it, and confirm the position size is one you can bear)',
  '事前驗屍板':
    'Premortem board',
  '一年後，這筆投資虧了 40%。寫下五個原因並分類——板子會告訴你每一類該做什麼。（內容只存在這個瀏覽器。）':
    'A year from now, this investment is down 40%. Write down five reasons and classify them — the board tells you what to do about each category. (Content is stored only in this browser.)',
  '標的／決定':
    'Holding / decision',
  '已寫':
    'Written',
  '至少五條':
    'At least five',
  '→ 觸發條件':
    '→ Trigger conditions',
  '→ 縮部位／改執行':
    '→ Shrink position / change execution',
  '→ 部位承受得起嗎':
    '→ Can you afford the position?',
  '先寫第一條。':
    'Write the first one.',
  '4. 決策記錄：寫給未來複盤的自己':
    '4. The decision record: written for your future self to review',
  '每筆買賣——':
    'Every trade — ',
  '包括「認真考慮後不買」':
    'including "seriously considered, decided not to buy"',
  '——都記一張卡：':
    ' — gets one card:',
  '欄位':
    'Field',
  '寫什麼':
    'What to write',
  '日期｜標的｜動作｜股價':
    'Date | holding | action | share price',
  '動作含「不買」':
    'Action includes "didn\'t buy"',
  '論點':
    'Thesis',
  '三行以內':
    'Three lines or fewer',
  '預期':
    'expectations',
  '多久、什麼結果':
    'How long, what result',
  '反方最強一擊':
    'Strongest counter-argument',
  '一行':
    'One line',
  '觸發條件':
    'Trigger conditions',
  '可驗證的事實（W26）':
    'Verifiable facts (W26)',
  '情緒自評 1–10｜想法來源':
    'Emotion self-rating 1–10 | source of the idea',
  'W38 複盤的原料':
    'Raw material for the W38 review',
  '兩個設計的用意：':
    'Why two of the design choices: ',
  '「不買」也記錄':
    '"Didn\'t buy" gets recorded too',
  '：一年後回看「錯過的」與「躲過的」，才能校準判斷。多數人只複盤買了的——這是樣本偏差':
    ': looking back a year later at what you "missed" and what you "dodged" is how you calibrate your judgment. Most people only review what they bought — that is sample bias',
  '情緒自評':
    'Emotion self-rating',
  '：日後統計「情緒 8 分以上時做的決策」的品質。多數人會發現，高情緒決策有系統性偏差':
    ': later you can tally the quality of "decisions made at emotion 8 or above." Most people find that high-emotion decisions are systematically biased',
  '5. 一人投委會：三頂帽子':
    '5. A one-person investment committee: three hats',
  '帽子':
    'Hat',
  '機構角色':
    'Institutional role',
  '個人版做法':
    'Individual version',
  '提案人':
    'Proposer',
  '研究員：陳述論點':
    'Analyst: states the thesis',
  '寫投資論文（W26）——書面化強制完整':
    'Write an investment thesis (W26) — putting it in writing forces completeness',
  '魔鬼代言人':
    'Devil\'s advocate',
  '指定唱反調者':
    'A designated dissenter',
  '反方論證＋事前驗屍——換位到「說服自己不買」':
    'Counter-argument + premortem — switch sides to "persuading yourself not to buy"',
  '投票者':
    'Voter',
  '委員會：隔日表決':
    'Committee: votes the next day',
  '48 小時規則':
    'The 48-hour rule',
  '：清單全過後仍隔兩天下單':
    ': after the whole checklist passes, still wait two days before placing the order',
  '核心原理與 W23 一脈相承：':
    'The core principle runs straight from W23: ',
  '好流程長得像機場安檢——不信任任何人的當下直覺，包括自己的。':
    'a good process looks like airport security — it trusts nobody\'s in-the-moment intuition, including your own.',
  '6. 常見誤解闢謠':
    '6. Three things people get wrong',
  '「清單會讓我錯過時機。」':
    '"A checklist will make me miss the timing."',
  '長期投資裡「非現在不可」的機會極少（W24：沒有必須揮棒的好球帶）。真因為清單慢了兩天而「錯過」的標的，多半是你本來就不該追的動能。':
    'Truly "must act now" opportunities are rare in long-term investing (W24: there\'s no pitch you must swing at). What you "miss" because the checklist slowed you down by two days is mostly momentum you shouldn\'t have been chasing anyway.',
  '「我都想過了，寫下來多此一舉。」':
    '"I\'ve already thought it through; writing it down is redundant."',
  '腦中的「想過」是霧，紙上的「寫下」是照妖鏡——寫不出來的部分，就是沒想過的部分（W26 論文的教訓）。':
    'The "I thought about it" in your head is fog; "writing it down" on paper is a lie detector — the parts you can\'t write are the parts you never thought through (the lesson of the W26 thesis).',
  '「清單做完就可以放心。」':
    '"Once the checklist is done, I can relax."',
  '清單擋的是':
    'A checklist blocks ',
  '已知的疏忽':
    'known oversights',
  '，擋不住未知（W21 安全邊際仍是最後防線）。它把犯錯率降低，不降到零。':
    ', but it can\'t block the unknown (W21\'s margin of safety is still the last line of defense). It lowers the error rate; it doesn\'t take it to zero.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '決策心理學與清單方法論':
    'Decision psychology and checklist methodology',
  '50 分鐘':
    '50 min',
  '《高勝算決策》（Annie Duke）選章':
    'Thinking in Bets (Annie Duke), selected chapters',
  '讀「決策與結果分離」與「跟未來的自己對賭」兩章——事前驗屍的心理學基礎：好決策可能壞結果，壞決策可能好結果，只看結果會學錯東西。':
    'Read the chapters on separating decisions from outcomes and on betting against your future self — the psychological foundation of the premortem: a good decision can have a bad result and a bad decision a good one, and judging only by results teaches you the wrong lessons.',
  '30 分鐘':
    '30 min',
  '找一篇談決策流程的 memo（例如〈Dare to Be Great〉系列），萃取 3 條行為指令，併入你的原則清單 → v1.2。':
    'Find a memo on the decision process (for example the "Dare to Be Great" series), extract 3 behavioral commands, and fold them into your list of principles → v1.2.',
  '20 分鐘':
    '20 min',
  'Atul Gawande《清單革命》概要':
    'Atul Gawande, The Checklist Manifesto — summary',
  '讀書摘或演講摘要即可，抓「執行清單 vs 確認清單」的區分——投資用的是確認清單：做完才勾，不是照著做。':
    'A book summary or a talk summary is enough; catch the distinction between a "do-list" and a "confirmation checklist" — investing uses the confirmation checklist: you tick after you\'ve done it, not as you go.',
  '10 分鐘':
    '10 min',
  '回顧零件倉庫':
    'Review your parts depot',
  '翻出自己的 W8 紅旗清單、W23 對策節、W26 反方論證——本週要組裝的零件全在這裡。':
    'Pull out your own W8 red-flag list, the W23 countermeasures section, and the W26 counter-argument — every part you will assemble this week is here.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '清單裝機與首航':
    'Installing the checklist and its maiden flight',
  '任務 A｜清單 v1 落地（25 分鐘）':
    'Task A | Landing checklist v1 (25 minutes)',
  '把講義 12 項改寫成':
    'Rewrite the 12 items from the notes in ',
  '你自己的語言':
    'your own words',
  '，每項附「去哪查」的捷徑（連結或檔案位置），存成獨立文件——與紅旗清單、IPS、原則清單並列為你的':
    ', each with a shortcut for "where to look it up" (a link or a file location), and save it as a standalone document — alongside your red-flag list, IPS, and list of principles, it becomes one of your ',
  '四大常備文件':
    'four standing documents',
  '任務 B｜首航＋事前驗屍（25 分鐘）':
    'Task B | Maiden flight + premortem (25 minutes)',
  '對模擬組合的下一筆調整（沒有就假設「把某持股加碼一倍」）跑完 12 項清單，誠實記錄哪幾項最想跳過':
    'Run the 12-item checklist on the next adjustment to the paper portfolio (if there isn\'t one, pretend you are "doubling up on one of the holdings"), and honestly record which items you most wanted to skip',
  '做一次完整事前驗屍：10 分鐘寫 5 條失敗原因，逐條標記［監控／預防／運氣］':
    'Do one full premortem: write 5 failure reasons in 10 minutes, and tag each one [Monitorable / Preventable / Pure luck]',
  '用下方產生器開第一張決策記錄卡':
    'Use the generator below to open your first decision record card',
  '決策記錄卡產生器':
    'Decision record card generator',
  '填完即生成一張可複製的卡片。「不買」也是一個動作。':
    'Fill it in and a copyable card is generated. "Didn\'t buy" is also an action.',
  '標的':
    'Holding',
  '動作':
    'Action',
  '買入':
    'Buy',
  '加碼':
    'Add',
  '減碼':
    'Trim',
  '賣出':
    'sell',
  '考慮後不買':
    'Considered, didn\'t buy',
  '反方一擊':
    'Counter-argument',
  '想法來源':
    'Source of the idea',
  '自己研究':
    'Own research',
  '熱門推薦':
    'Hot tip',
  '新聞／社群':
    'News / social media',
  '親友':
    'Friends and family',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '清單試跑台勾滿 12 項時，結論必須是「可以下單，但先等 48 小時」而不是「立刻下單」；事前驗屍板寫滿 5 條、且至少一條標成「可監控」，才會出現「轉成觸發條件」的提示；決策卡的情緒自評拉到 8 以上、或來源選「熱門推薦」，卡片要自動加註警示。':
    'With all 12 items ticked in the checklist test run, the conclusion must be "OK to place the order, but wait 48 hours first," not "place the order now"; once the premortem board has 5 reasons and at least one is tagged "Monitorable," the "turn into trigger conditions" prompt must appear; if the decision card\'s emotion self-rating is pulled to 8 or above, or the source is "Hot tip," the card must add a warning automatically.',
  '清單 v1 成為獨立文件（用自己的話、有查找捷徑）':
    'Checklist v1 is a standalone document (in your own words, with lookup shortcuts)',
  '首航完成：清單＋事前驗屍＋決策卡三件套':
    'Maiden flight done: the trio of checklist + premortem + decision card',
  '能說出三頂帽子各對應的工具':
    'Can name the tool that corresponds to each of the three hats',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '事前驗屍為什麼比「列出風險」有效？（一句話說心理機制）':
    'Why is a premortem more effective than "listing the risks"? (the psychological mechanism in one sentence)',
  '→ 它把大腦從':
    '→ It switches the brain from ',
  '辯護模式':
    'defense mode',
  '（我的決定有什麼風險 → 傾向淡化）切換到':
    ' (what are the risks of my decision? → a tendency to play them down) to ',
  '解釋模式':
    'explanation mode',
  '（失敗已成事實，怎麼發生的 → 傾向窮盡）。確定性的假設解除了自我防衛，想像力才會誠實。':
    ' (the failure is a fact, so how did it happen? → a tendency to be exhaustive). A certain hypothesis lifts the self-defense, and only then does the imagination become honest.',
  '為什麼「認真考慮後不買」也要記錄？':
    'Why record the decisions where you "seriously considered and decided not to buy" too?',
  '→ 判斷力的校準需要':
    '→ Calibrating judgment needs a ',
  '完整樣本':
    'complete sample',
  '。只複盤買了的，看不見「躲過的地雷」（該給自己加分）與「錯過的十倍股」（該檢討的保守）。不買的決策卡讓兩者都留下證據，而且幾乎零成本——不用真的花錢。':
    '. If you only review what you bought, you can\'t see the "landmines you dodged" (which deserve credit) or the "ten-baggers you missed" (the conservatism to review). A no-buy card leaves evidence of both, at almost zero cost — you don\'t have to spend any real money.',
  '清單的哪一項在牛市最容易被跳過？恐慌時呢？':
    'Which checklist item gets skipped most easily in a bull market? And in a panic?',
  '→ 牛市：':
    '→ Bull market: ',
  '第 5 項估值邊際':
    'item 5, the valuation margin',
  '（「再不上車就晚了」，FOMO 直接衝撞安全邊際）與第 10 項想法來源（熱門推薦滿天飛）。恐慌時：':
    ' ("if I don\'t get on now it\'s too late" — FOMO crashes straight into the margin of safety) and item 10, the source of the idea (hot tips are flying everywhere). In a panic: ',
  '第 1–4 項基本面確認':
    'items 1–4, the fundamentals check',
  '（「跌這麼多一定超值」，把便宜當論點、跳過健檢）。兩種市場，清單擋的是不同的門。':
    ' ("it\'s fallen so much, it must be a bargain" — treating cheapness as the thesis and skipping the health check). In the two kinds of market, the checklist guards different doors.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '機長的清單與家庭事前驗屍':
    'The captain\'s checklist and the family premortem',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（機長的清單）':
    'Opening (the captain\'s checklist)',
  '「飛行員飛了一萬小時，起飛前還是要拿出清單一項項唸。是他記性差嗎？」（不是——是知道':
    '"A pilot with ten thousand hours of flying still takes out a checklist and reads it item by item before takeoff. Is his memory bad?" (No — he just knows one thing: ',
  '。）「投資最大的敵人不是不懂，是懂了但當下忘了。所以我把這半年學的，全部做成一張起飛清單。」（秀清單 v1。）':
    '.) "The biggest enemy in investing isn\'t not understanding; it\'s understanding and forgetting in the moment. So I turned everything I\'ve learned in these six months into one takeoff checklist." (Show checklist v1.)',
  '核心演示（家庭事前驗屍）':
    'The core demo (a family premortem)',
  '「來玩一個聰明人的遊戲：假裝我們家一年後做了一個超後悔的財務決定——':
    '"Let\'s play a game for smart people: pretend that a year from now our family made a financial decision we regret terribly — ',
  '已經發生了':
    'it has already happened',
  '。現在每人說一個『當初怎麼會沒想到』的原因。」（拿真實的家庭決策來玩：換車、裝修、某筆投資。）「先假裝失敗，反而最能避免失敗——這招叫事前驗屍，開刀房和機艙都在用。」':
    '. Everyone takes a turn naming a reason why \'we never saw it coming.\'" (Use a real family decision: changing the car, a renovation, some investment.) "Pretending to fail first is the best way to avoid failure — the trick is called a premortem, and operating rooms and cockpits both use it."',
  '家人提出的原因記下來——這是本週完成檢核的一項。你會驚訝家人的想像力。':
    'Write down the reasons your family comes up with — this is one of the items on this week\'s completion checklist. You\'ll be surprised by your family\'s imagination.',
  '互動（48 小時規則）':
    'Interaction (the 48-hour rule)',
  '「以後聽到任何『快來不及了、現在不買就沒了』的投資機會，我們家的標準動作是什麼？」（引導：等 48 小時。）「真正的好機會等得起兩天；等不起兩天的，是話術。」':
    '"From now on, when we hear any investment opportunity that says \'hurry, it\'s about to be too late, if you don\'t buy now it\'s gone,\' what\'s our family\'s standard move?" (Guide them: wait 48 hours.) "A truly good opportunity can wait two days; one that can\'t wait two days is a sales pitch."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「這麼麻煩，乾脆不要投資了。」':
    '"It\'s such a hassle — we might as well not invest at all."',
  '「清單只在『要出手』時用，平常的定期定額全自動（W17）——麻煩是保留給大決定的，日常其實更省心。」':
    '"The checklist is only for when you\'re about to act; the regular automatic contributions run entirely on their own (W17) — the hassle is reserved for the big decisions, and everyday life is actually easier."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '四大常備文件到齊（紅旗清單／IPS／原則清單／買入清單）':
    'All four standing documents in hand (red-flag list / IPS / list of principles / pre-purchase checklist)',
  '首航三件套完成（清單、事前驗屍、決策卡）':
    'Maiden-flight trio done (checklist, premortem, decision card)',
  '家庭事前驗屍玩過一次，記下家人提出的原因':
    'Played the family premortem once and noted the reasons the family came up with',
  '回填 curriculum/01-overview.md 第 36 週進度欄':
    'Fill in the Week 36 progress column of curriculum/01-overview.md',
  '下週預告 · Week 37：壓力測試':
    'Next week · Week 37: stress testing',
  '——用 2008、2020、2022 三場歷史風暴轟炸你的模擬組合，看它（和你的 IPS）撐不撐得住。':
    ' — bombard your paper portfolio with three historical storms (2008, 2020, 2022) and see whether it (and your IPS) can hold up.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：基金實務':
    'Previous week: the fund industry',
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
  '例：加碼 A 公司一倍':
    'e.g. double up on Company A',
  '標的或決定':
    'Holding or decision',
  'A 公司':
    'Company A',
  '可驗證的事實':
    'A verifiable fact',
  '答對了——專家失誤的主因不是不知道，是知道但在壓力下漏掉。清單把「每次都該做的事」從記憶體搬到紙上。投資正是壓力下決策的重災區，所以本週要做一張起飛清單。':
    'Correct — the main cause of expert error isn\'t not knowing; it\'s knowing but missing it under stress. A checklist moves "what should be done every time" from memory onto paper. Investing is exactly a hot spot for decisions under stress, which is why this week you build a takeoff checklist.',
  '其實是因為人在壓力下一定會漏東西——專家失誤的主因不是不知道，是知道但當下漏掉。清單把「每次都該做的事」從記憶體搬到紙上。投資正是壓力下決策的重災區，所以本週要做一張起飛清單。':
    'Actually it\'s because people under stress are bound to miss things — the main cause of expert error isn\'t not knowing; it\'s knowing but missing it in the moment. A checklist moves "what should be done every time" from memory onto paper. Investing is exactly a hot spot for decisions under stress, which is why this week you build a takeoff checklist.',
  '<b>12／12 全過——可以下單，但先等 48 小時。</b>投票者的帽子還沒戴：讓系統二值完班，兩天後想法沒變再送出限價單。':
    '<b>12/12 passed — you can place the order, but wait 48 hours first.</b> The voter\'s hat isn\'t on yet: let System 2 finish its shift, and if your view hasn\'t changed two days later, send the limit order.',
  '／12，不下單。</b>還沒過的：<br>':
    '/12 — don\'t place the order.</b> Still failing:<br>',
  '<br><span class=\\"muted\\">只差一兩項時最想跳過——那份衝動本身就是警訊。</span>':
    '<br><span class="muted">It\'s when only one or two items are missing that you most want to skip — and that urge is itself the warning sign.</span>',
  '</span><input type="text" aria-label="失敗原因':
    '</span><input type="text" aria-label="Failure reason',
  '" placeholder="它是怎麼虧掉 40% 的？"><select aria-label="原因':
    '" placeholder="How did it lose 40%?"><select aria-label="Reason',
  '的分類"><option value="">分類…</option><option value="m">可監控</option><option value="p">可預防</option><option value="l">純運氣</option></select>':
    'category"><option value="">Category…</option><option value="m">Monitorable</option><option value="p">Preventable</option><option value="l">Pure luck</option></select>',
  '<b>還差':
    '<b>Still need',
  '條。</b>寫不出來的時候，試試這幾個方向：產業變了、管理層出事、我付太貴、我太早加碼、我忍不住在低點賣掉。':
    'more.</b> Stuck? Try these angles: the industry changed, something went wrong with management, I paid too much, I added too early, I couldn\'t resist selling at the low.',
  '<b>五條到齊。</b>':
    '<b>All five are in.</b>',
  '有':
    'Still',
  '條還沒分類。':
    'left to classify.',
  '條 → 轉成觸發條件，寫進論文的「我會在什麼情況下認錯」（W26）。':
    'item(s): turn them into trigger conditions and write them into the thesis under "Under what circumstances will I admit I\'m wrong?" (W26).',
  '條 → 現在就處理：縮小部位、分批進場，或改執行計畫。':
    'item(s): deal with them now: shrink the position, scale in, or change the execution plan.',
  '條 → 不能預防，只能確認：若真的發生，這個部位虧 40% 你承受得起嗎？':
    'item(s): can\'t be prevented, only confirmed: if it really happened, could you bear this position losing 40%?',
  '<span class=\\"muted\\">幾乎全歸給運氣？回頭看一次——事後看「顯而易見」的原因，通常不是運氣。</span>':
    '<span class="muted">Almost all put down to luck? Look again — reasons that look "obvious" in hindsight are usually not luck.</span>',
  '⚠ 情緒':
    '⚠ Emotion score:',
  '分：高情緒決策，48 小時後重看':
    '— a high-emotion decision, look at it again after 48 hours',
  '⚠ 外部來源：先過 48 小時冷靜期':
    '⚠ External source: let the 48-hour cooling-off period pass first',
  '⚠ 反方一擊空白：魔鬼代言人還沒上場':
    '⚠ Counter-argument is blank: the devil\'s advocate hasn\'t spoken yet',
  '日期':
    'Date:',
  '論點：':
    'Thesis: ',
  '反方最強一擊：':
    'Strongest counter-argument: ',
  '觸發條件：':
    'Trigger conditions: ',
  '情緒':
    'Emotion',
  '/10｜來源：':
    '/10 | Source: ',
  '<b>「不買」的卡最常被省略，也最有價值。</b>一年後回看，它會告訴你躲過了地雷，還是錯過了機會。':
    '<b>The "didn\'t buy" card is the one most often skipped, and the most valuable.</b> A year from now it will tell you whether you dodged a landmine or missed an opportunity.',
  '<b>把卡片複製進你的決策日誌。</b>W38 複盤時，會統計「情緒 8 分以上」那幾張卡的成績。':
    '<b>Copy the card into your decision journal.</b> At the W38 review, you\'ll tally how the cards with "emotion 8 or above" performed.',
  '✓ 生產線裝好了——下週用三場歷史風暴測試它。':
    '✓ The production line is installed — next week, test it against three historical storms.',
};
