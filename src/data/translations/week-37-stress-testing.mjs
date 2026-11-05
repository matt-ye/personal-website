/*
 * 給家人的投資課 Week 37：壓力測試與危機案例——2008、2020、2022 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-37-stress-testing.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 『萬』後綴翻空字串並把單位掛在欄位標籤（NT$10k）；JS 組句的『最壞是…』改成『…becomes…— a loss of…(all in NT$10k)』以免每個數字都帶單位；情境名統一為 2008-style／2020-style／2022-style（散文與 JS 共用同一 key）。
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
  '給家人的投資課 · Q3 操盤手季 · Week 37':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 37',
  '壓力測試與危機案例——2008、2020、2022':
    'Stress testing and crisis case studies — 2008, 2020, 2022',
  'W28 的風險儀表全是「回頭看」；本週補上「往前想」：把三場歷史風暴灌進你的模擬組合，看它和你的 IPS 撐不撐得住。對個人，壓測只回答一個問題：':
    'W28\'s risk dashboard is all "looking back"; this week adds "thinking forward": pour three historical storms into your paper portfolio and see whether it and your IPS can hold up. For an individual, a stress test answers just one question: ',
  '下一次崩盤來的那天早上，我會不會做蠢事。':
    'on the morning the next crash arrives, will I do something stupid?',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 12、28、31 週':
    'Prerequisites: Weeks 12, 28, and 31',
  '52 週 · 第 37 週':
    '52 weeks · Week 37',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '壓測是機構風控的核心儀式，也是 Q4 公司避險（W48）的前置。機構怕的是客戶贖回與監管；個人怕的是':
    'Stress testing is the central ritual of institutional risk control, and a prerequisite for Q4\'s corporate hedging (W48). Institutions fear client redemptions and regulators; an individual fears ',
  '自己':
    'themselves',
  '——「看到 −30% 的那個我」才是被測試的對象。':
    ' — the "me who sees −30%" is the one being tested.',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週的家庭事前驗屍——家人提出了什麼你沒想到的原因？':
    'Look back at last week\'s family premortem — what reasons did your family come up with that you hadn\'t thought of?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '2022 年是 60/40 股債組合幾十年來最糟的一年：股票跌、債券也跌。債券為什麼沒有發揮保護作用？':
    '2022 was the worst year in decades for a 60/40 stock-and-bond portfolio: stocks fell and bonds fell too. Why didn\'t bonds protect it?',
  '恐慌時大家搶現金，什麼都賣':
    'In a panic everyone grabs cash and sells everything',
  '病因是通膨，升息同時砸股與債':
    'The illness was inflation, and rate hikes hit stocks and bonds at once',
  '債券本來就沒有保護作用':
    'Bonds never offered protection in the first place',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 三場風暴的解剖：每場都是不同的病':
    '1. Dissecting three storms: each one is a different disease',
  '2008 金融海嘯':
    '2008 financial crisis',
  '2022 股債雙殺':
    '2022 stocks and bonds both crushed',
  '病因':
    'Root cause',
  '信用':
    'Credit',
  '：槓桿與房貸衍生品連環爆':
    ': a chain of blowups in leverage and mortgage derivatives',
  '流動性':
    'Liquidity',
  '：經濟急停，現金奪命搶':
    ': the economy stops short and everyone scrambles for cash',
  '通膨':
    'Inflation',
  '：央行暴力升息':
    ': central banks raise rates violently',
  '股票':
    'Stocks',
  '台股約 −46%、S&amp;P 約 −38%（全年）':
    'Taiwan stocks about −46%, S&amp;P about −38% (full year)',
  '一個月急跌約 30%（S&amp;P 峰谷 −34%）':
    'A 30% plunge in one month (S&amp;P peak to trough −34%)',
  'S&amp;P 約 −19%、台股約 −22%（全年）':
    'S&amp;P about −19%, Taiwan stocks about −22% (full year)',
  '投資級債':
    'Investment-grade bonds',
  '約 +5%（避險成功）':
    'About +5% (the hedge worked)',
  '短暫下跌後央行救回':
    'A brief fall, then the central bank rescued it',
  '約 −13%（避險失敗）':
    'About −13% (the hedge failed)',
  '形狀':
    'Shape',
  '深且長，回前高花數年':
    'Deep and long; it took years to get back to the prior high',
  '深但極短，V 型、數月收復':
    'Deep but very short — V-shaped, recovered within months',
  '溫水煮蛙式陰跌一整年':
    'A boiling-frog slide that lasted the whole year',
  '央行':
    'Central bank',
  '降息＋QE（救市）':
    'Rate cuts + QE (rescue)',
  '無限 QE（更快更猛）':
    'Unlimited QE (faster and harder)',
  '升息（央行就是跌的原因）':
    'Rate hikes (the central bank was the cause of the fall)',
  '數字為公認歷史量級，練習 A 會請你查證一次原始出處。':
    'The figures are the commonly cited historical orders of magnitude; Task A will ask you to verify them against the original source once.',
  '三個共同點':
    'Three things in common',
  '相關性上升':
    'Correlations rise',
  '——平時分散的資產一起跌（W15 分散侷限的實戰版）；②':
    ' — assets that normally diversify fall together (the real-life version of the limits of diversification in W15); ② ',
  '流動性蒸發':
    'Liquidity evaporates',
  '——賣得掉的先被賣，好資產也被砍，因為只有它賣得掉；③':
    ' — what can be sold gets sold first, and even good assets get dumped, because they are the only ones that can be sold; ③ ',
  '槓桿者被迫平倉':
    'Leveraged holders are forced to liquidate',
  '——跌勢的放大器，也是「IPS 禁用槓桿」的歷史依據。':
    ' — an amplifier of the decline, and the historical basis for the IPS\'s ban on leverage.',
  '最重要的差異':
    'The most important difference',
  '：2022 證明':
    ': 2022 proved that ',
  '股債蹺蹺板不是物理定律':
    'the stock-bond seesaw is not a law of physics',
  '。當病因是通膨，央行升息同時砸股（折現率上升）與債（W3 的反向關係）。避險工具有不有效，取決於':
    '. When the illness is inflation, rate hikes hit stocks (the discount rate goes up) and bonds (the inverse relationship from W3) at once. Whether a hedge works depends on ',
  '危機的類型':
    'the type of crisis',
  '2. 壓力測試方法：把歷史套進你的組合':
    '2. Stress-testing method: apply history to your portfolio',
  '情境損失 ＝ Σ（權重 × 該資產在情境中的報酬）':
    'Scenario loss = Σ (weight × that asset\'s return in the scenario)',
  '公式簡單到不需要軟體，難的是誠實面對結果。下面的壓測台預設是講義算例：70／30 股債組合，三情境假設分別是 2008 型（股 −45%／債 +5%）、2020 型（−30%／0%）、2022 型（−20%／−13%）。':
    'The formula is so simple you don\'t need software; the hard part is facing the results honestly. The defaults of the stress-test board below are the worked example from the notes: a 70/30 stock-bond portfolio, with three scenario assumptions — 2008-style (stocks −45% / bonds +5%), 2020-style (−30% / 0%), 2022-style (−20% / −13%).',
  '三場風暴壓測台':
    'Three-storm stress-test board',
  '拉你的配置與金額；剩下的比例算現金（名目 0%）。超過你 IPS 容忍度的情境會被標記。':
    'Drag your allocation and amount; whatever is left is cash (nominal 0%). Scenarios that exceed your IPS tolerance get flagged.',
  '70／30（講義算例）':
    '70/30 (the notes\' worked example)',
  '40／50／10（對照組）':
    '40/50/10 (comparison)',
  '全股票':
    'All stocks',
  '債券':
    'Bonds',
  '組合金額':
    'Portfolio amount (NT$10k)',
  '100 萬':
    '100',
  'IPS 可承受最大虧損':
    'Maximum loss the IPS can bear',
  '情境':
    'Scenario',
  '組合損失':
    'Portfolio loss',
  '剩下':
    'Remaining (NT$10k)',
  '回本年數':
    'Years to recover',
  '用兩個預設比一比，看懂兩件事：':
    'Compare the two presets and you\'ll see two things:',
  '2008 型':
    '2008-style',
  '下，債多的組合損失':
    ' scenario, the bond-heavier portfolio\'s loss is ',
  '減半':
    'cut in half',
  '（−15.5% 對 −30.0%）——債券在信用危機裡是真減震器':
    ' (−15.5% vs −30.0%) — bonds really are a shock absorber in a credit crisis',
  '2022 型':
    '2022-style',
  '下，兩種配置':
    ' scenario, the two allocations ',
  '幾乎一樣痛':
    'hurt almost the same',
  '（−14.5% 對 −17.9%）——通膨危機裡沒有傳統的躲處，而且現金的實質損失還沒算進去':
    ' (−14.5% vs −17.9%) — in an inflation crisis there is no traditional place to hide, and that is before counting the real loss on cash',
  '壓測的輸出不是預測，是三個行動問題':
    'The output of a stress test is not a prediction but three action questions',
  '最壞情境的':
    'For the worst scenario\'s ',
  '金額':
    'money amount',
  '（不是 %），我在 W14 寫下的心理承受度撐得住嗎？':
    ' (not the %), can the psychological tolerance I wrote down in W14 hold?',
  '回本要幾年？−30% 需要 +42.9% 才回得來，以每年 7% 約':
    'How many years to break even? −30% needs +42.9% to get back, which at 7% a year takes about ',
  '5.3 年':
    '5.3 years',
  '——這段時間我的人生用得到這筆錢嗎？':
    ' — can my life spare this money for that long?',
  '有沒有情境會迫使我「在谷底賣」？預備金夠嗎？收入穩嗎？':
    'Is there any scenario that would force me to "sell at the bottom"? Is the emergency fund big enough? Is my income stable?',
  '被迫賣出是唯一不可逆的傷。':
    'Being forced to sell is the only irreversible injury.',
  '3. 反向壓測與流動性壓測':
    '3. Reverse stress tests and liquidity stress tests',
  '反向壓測':
    'Reverse stress test',
  '：不問「情境造成多少損失」，而問「':
    ': instead of asking "how much does the scenario cost me," ask "',
  '什麼情境會讓我損失 40%':
    'what scenario would make me lose 40%',
  '」——我的毀滅劇本長什麼樣。這對集中持股的人特別有殺傷力：組合常有一個「單一故事」的死穴，例如台股＋科技＋出口，全綁在半導體景氣上。':
    '" — what does my doomsday script look like? This is especially lethal for people with concentrated holdings: a portfolio often has a "single-story" fatal weakness, such as Taiwan stocks + tech + exports, all tied to the semiconductor cycle.',
  '反向壓測：你的毀滅劇本':
    'Reverse stress test: your doomsday script',
  '假設債券與現金不動。股票部位裡，有一塊綁在同一個故事上（同產業、同題材）。要虧到目標，那個故事得跌多少？':
    'Assume bonds and cash stay put. Within the stock holdings, one block is tied to the same story (same industry, same theme). How far does that story have to fall for you to lose the target amount?',
  '股票佔組合':
    'Stocks as a share of the portfolio',
  '單一故事佔股票':
    'Single story as a share of stocks',
  '其他股票同時跌':
    'Other stocks fall at the same time',
  '毀滅門檻（組合虧損）':
    'Doomsday threshold (portfolio loss)',
  '股票整體需跌':
    'How far all stocks must fall',
  '不分故事、全面下跌':
    'Regardless of story — a broad-based fall',
  '單一故事需跌':
    'How far the single story must fall',
  '其他股票照設定跌':
    'Other stocks fall as set',
  '流動性壓測':
    'Liquidity stress test',
  '：假設明天必須變現 50%——哪些部位賣得掉？折價多少？這是 W34 市場衝擊的危機版：危機中成交量萎縮、買賣價差擴大好幾倍。':
    ': suppose you must turn 50% of the portfolio into cash tomorrow — which holdings can be sold? At what discount? This is the crisis version of W34\'s market impact: in a crisis, trading volume shrinks and bid-ask spreads widen several times over.',
  '4. 壓測後的行動選單（不是賣光）':
    '4. The action menu after a stress test (not selling everything)',
  '依嚴重度排序：':
    'In order of severity:',
  '確認預備金':
    'Confirm the emergency fund',
  '（6–12 個月生活費）——第一道防線永遠是它':
    ' (6–12 months of living expenses) — it is always the first line of defense',
  '調整配置':
    'Adjust the allocation',
  '——若最壞金額超出承受，代表 W14 的比例本來就寫錯了':
    ' — if the worst-case amount is more than you can bear, the W14 weights were written wrong in the first place',
  '檢查單一死穴':
    'Check for a single fatal weakness',
  '——反向壓測抓到的集中風險，回到 W18 的上限':
    ' — concentration risk caught by the reverse stress test goes back to W18\'s limits',
  '特定事件前的保險':
    'Insurance ahead of specific events',
  '——W33 的 put，現在你知道什麼時候值得買了':
    ' — W33\'s put; now you know when it is worth buying',
  '什麼都不做':
    'Do nothing',
  '——壓測通過的正確獎勵。把結論寫進 IPS 附錄，下次崩盤時拿出來讀':
    ' — the right reward for passing a stress test. Write the conclusion into an IPS appendix and read it the next time there is a crash.',
  '5. 常見誤解闢謠':
    '5. Common misconceptions, debunked',
  '「壓測通過就安全了。」':
    '"If it passes the stress test, I\'m safe."',
  '歷史情境是「至少要撐過已經發生的」下限；下一場危機必然有新病因——2019 年沒人壓測過「全球封城」。所以反向壓測比重演歷史更重要。':
    'Historical scenarios are a floor of "at least survive what has already happened"; the next crisis will certainly have a new cause — in 2019 no one had stress-tested a "global lockdown." That is why reverse stress tests matter more than replaying history.',
  '「危機時現金為王，全現金最安全。」':
    '"In a crisis cash is king, so all cash is safest."',
  '2022 年現金名目 0%、實質約 −8%（美國通膨）。「安全」的資產只是把風險換成通膨風險（W2）——沒有無風險，只有選哪一種風險。':
    'In 2022 cash returned 0% nominal and about −8% real (US inflation). A "safe" asset just swaps one risk for inflation risk (W2) — there is no risk-free, only a choice of which risk.',
  '「壓測是機構的事。」':
    '"Stress testing is for institutions."',
  '機構壓測怕的是贖回與監管；個人壓測怕的是自己。演習過的人，崩盤那天才不會踩踏。':
    'Institutions stress-test for fear of redemptions and regulators; an individual stress-tests for fear of themselves. People who have drilled don\'t stampede on the day of the crash.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '三場危機，各讀一篇好回顧':
    'Three crises, one good retrospective each',
  '60 分鐘':
    '60 min',
  '三場危機的深度回顧':
    'In-depth retrospectives on the three crises',
  '2008（搜「金融海嘯 回顧 成因」，選深度媒體或央行報告）、2020（「2020 三月 流動性危機」）、2022（「2022 股債雙殺」）。每場記三行：':
    '2008 (search "2008 financial crisis retrospective causes" and pick an in-depth media piece or a central bank report), 2020 ("March 2020 liquidity crisis"), 2022 ("2022 stock bond sell-off"). For each, write three lines: ',
  '病因／傳導／誰被迫賣':
    'cause / transmission / who was forced to sell',
  '30 分鐘':
    '30 min',
  'Howard Marks〈Nobody Knows〉（2008 年 9 月）':
    'Howard Marks, "Nobody Knows" (September 2008)',
  '雷曼倒閉那週即時寫下的判斷——不是事後諸葛。感受「資訊不全時怎麼決策」。':
    'A judgment written in real time in the week Lehman collapsed — not hindsight. Feel how decisions get made when information is incomplete.',
  '20 分鐘':
    '20 min',
  '《掌握市場週期》危機章節（選讀）':
    'Mastering the Market Cycle, the crisis chapters (optional)',
  'Marks 對「週期走到極端時，人們怎麼說服自己」的描述，正好是壓測要防的心理狀態。':
    'Marks\'s description of how people talk themselves into things when a cycle reaches an extreme is exactly the mindset a stress test is meant to guard against.',
  '10 分鐘':
    '10 min',
  '回顧 W12 兩次衰退檢驗＋W28 風險模組':
    'Review W12\'s two recession checks + the W28 risk module',
  '本週把它們合體：W12 看歷史、W28 看儀表，W37 把歷史灌進儀表。':
    'This week you combine them: W12 looks at history, W28 looks at the dashboard, and W37 pours the history into the dashboard.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '轟炸自己的組合':
    'Bombard your own portfolio',
  '任務 A｜量級查證（15 分鐘）':
    'Task A | Verify the magnitudes (15 minutes)',
  '查證講義表格的歷史量級：各指數當年／峰谷跌幅、當年債券報酬。來源可用指數官網、FRED 或年度回顧報導。修正你查到的差異並註明出處——':
    'Verify the historical magnitudes in the table in the notes: each index\'s full-year and peak-to-trough decline, and that year\'s bond return. Sources can be the index providers\' sites, FRED, or annual review articles. Correct any differences you find and cite the source — ',
  '數據紀律：講義給量級，你負責原始出處':
    'Data discipline: the notes give the order of magnitude; you are responsible for the original source',
  '任務 B｜三情境壓測（30 分鐘）':
    'Task B | Three-scenario stress test (30 minutes)',
  '用模擬組合':
    'Run the paper portfolio at its ',
  '現在的實際權重':
    'current actual weights',
  '跑三情境；股票部位可再細分台股／全球，套用不同跌幅':
    ' through the three scenarios; the stock holdings can be broken down further into Taiwan / global, applying different declines',
  '輸出各情境的損失 % 與':
    'Output each scenario\'s loss % and the ',
  '、對照 IPS 容忍值、回本年數':
    ', compare it with the IPS tolerance, and work out the years to recover',
  '跑一次反向壓測：寫下「什麼具體劇本會讓我 −40%」——上週事前驗屍的組合版':
    'Run one reverse stress test: write down "what specific script would take me to −40%" — last week\'s premortem, portfolio edition',
  '任務 C｜行動決定（15 分鐘）':
    'Task C | Decide your actions (15 minutes)',
  '依第 4 節的選單寫下你的行動（包括「什麼都不做」），再寫一段話存進 IPS 附錄：':
    'Following the menu in section 4, write down your actions (including "do nothing"), then write a paragraph to save in the IPS appendix: ',
  '「給下次崩盤時的我」':
    '"A note to me during the next crash"',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '壓測台預設（70／30、100 萬）必須是 2008 型 −30.0%（剩 70.0 萬、回本約 5.3 年）、2020 型 −21.0%、2022 型 −17.9%；按「40／50／10」後必須是 −15.5%、−12.0%、−14.5%。反向壓測預設（股 70%、單一故事 60%、其他跌 20%）：股票整體需跌 57.1%，單一故事需跌 81.9%。':
    'The stress-test board\'s defaults (70/30, NT$1,000,000) must show 2008-style −30.0% (NT$700,000 left, about 5.3 years to recover), 2020-style −21.0%, 2022-style −17.9%; after pressing "40/50/10" they must show −15.5%, −12.0%, −14.5%. The reverse stress test defaults (stocks 70%, single story 60%, others fall 20%): stocks overall must fall 57.1%, and the single story must fall 81.9%.',
  '歷史量級查證有出處':
    'Historical magnitudes verified with sources',
  '三情境＋反向壓測完成（用金額表述）':
    'Three scenarios + reverse stress test done (expressed in money)',
  '「給崩盤時的我」一段話寫入 IPS 附錄':
    'The "note to me during a crash" paragraph is in the IPS appendix',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼 2022 年債券沒有發揮保護作用？':
    'Why didn\'t bonds protect in 2022?',
  '→ 病因是':
    '→ The root cause was ',
  '：央行升息是跌勢的源頭，而利率上升直接壓低債券價格（W3 反向關係）——股債同一個敵人，蹺蹺板失效。2008 的病因是信用崩潰，央行':
    ': the central bank\'s rate hikes were the source of the decline, and rising rates push bond prices down directly (the inverse relationship from W3) — stocks and bonds shared the same enemy, so the seesaw failed. In 2008 the cause was a credit collapse, and the central bank ',
  '降息':
    'cut rates',
  '救市，債券因此上漲。保護是否有效，取決於危機類型。':
    ' to rescue the market, so bonds rose. Whether protection works depends on the type of crisis.',
  '壓測和 VaR（W28）的本質差異是什麼？':
    'What is the essential difference between a stress test and VaR (W28)?',
  '→ VaR 從「歷史分布」推機率——回頭看，而且在平靜期會低估；壓測直接問「':
    '→ VaR infers probabilities from the historical distribution — it looks backward, and underestimates in calm periods; a stress test asks directly, "',
  '特定極端情境':
    'how much do I lose under a specific extreme scenario',
  '下虧多少」——往前想，不管機率。VaR 是日常儀表、壓測是消防演習，互補而非取代。':
    '" — it looks forward and ignores probability. VaR is the everyday dashboard, a stress test is the fire drill; they complement rather than replace each other.',
  '「被迫賣出是唯一不可逆的傷」——哪三道防線在防它？':
    '"Being forced to sell is the only irreversible injury" — which three lines of defense guard against it?',
  '預備金':
    'Emergency fund',
  '：生活費不靠組合；②':
    ': living expenses don\'t depend on the portfolio; ② ',
  '配置符合真實承受度':
    'An allocation that matches your real tolerance',
  '：W14 三要素取最保守；③':
    ': take the most conservative of the three W14 factors; ③ ',
  '零槓桿':
    'Zero leverage',
  '：不會被追繳保證金。三道都寫在 IPS 裡——這正是 IPS 存在的意義。':
    ': you can never get a margin call. All three are written in the IPS — which is exactly what an IPS is for.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '我們家的投資消防演習':
    'Our family\'s investing fire drill',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（消防演習）':
    'Opening (the fire drill)',
  '「學校為什麼每年辦消防演習？不是因為快失火了，是':
    '"Why does school hold a fire drill every year? Not because a fire is about to start, but to ',
  '趁沒失火時把逃生路線走熟':
    'walk the escape route until it\'s familiar while there\'s no fire',
  '。今天我們家的投資做一次消防演習。」':
    '. Today our family\'s investments get a fire drill."',
  '核心演示':
    'The core demo',
  '秀壓測表：「如果 2008 重演，我們的 100 萬會變 70 萬；2020 重演變 79 萬；2022 那種變 82 萬。」（停頓，讓數字沉澱。）「重點來了：':
    'Show the stress-test table: "If 2008 repeated, our NT$1,000,000 would become NT$700,000; a repeat of 2020, NT$790,000; something like 2022, NT$820,000." (Pause and let the numbers sink in.) "Here\'s the point: ',
  '這些數字我們現在看著它、討論它，跟崩盤那天早上第一次看到它，是完全不同的兩件事':
    'looking at these numbers now and discussing them is completely different from seeing them for the first time on the morning of the crash',
  '。演習過的人不會踩踏。」':
    '. People who have drilled don\'t stampede."',
  '互動（家庭消防檢查）':
    'Interaction (the family fire inspection)',
  '三個檢查：①如果明年是 2008，我們家的生活費撐得住、不必賣股票嗎？（預備金）②這個數字誰會睡不著？（誠實舉手）③睡不著的話，是現在調低股票比例，還是記住「演習過了、照計畫走」？':
    'Three checks: ① If next year were 2008, could our living expenses hold up without having to sell stocks? (the emergency fund) ② Who would lose sleep over this number? (an honest show of hands) ③ If someone would lose sleep, do we lower the stock share now, or remember that "we\'ve drilled it, follow the plan"?',
  '把答案記下來——這就是家庭版的 IPS 附錄。':
    'Write the answers down — this is the family version of the IPS appendix.',
  '收尾（2022 的特別教訓）':
    'Closing (the special lesson of 2022)',
  '「以前說『股票跌、債券漲』互相保護——2022 年兩個一起跌，因為那次的病因是通膨。':
    '"We used to say \'stocks fall, bonds rise\' and protect each other — in 2022 both fell together, because that time the illness was inflation.',
  '沒有永遠有效的保護，只有事先想過的家庭。':
    'There is no protection that always works, only a family that has thought about it beforehand.',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那還是很可怕。」':
    '"That\'s still scary."',
  '「可怕的是意外，不是數字——我們現在做的，就是把意外變成劇本。而且歷史上每一次，照計畫留在場上的人都活得很好（W12 的證據）。」':
    '"What\'s scary is the surprise, not the numbers — what we\'re doing now is turning the surprise into a script. And every time in history, the people who stayed in the market per the plan came out fine (the evidence from W12)."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能講出三場危機的病因差異，以及 2022 的特殊教訓':
    'Can state how the causes of the three crises differ, and the special lesson of 2022',
  '模擬組合三情境＋反向壓測完成':
    'Three-scenario + reverse stress test done on the paper portfolio',
  '「給崩盤時的我」寫入 IPS 附錄；家庭消防檢查完成':
    '"A note to me during a crash" is in the IPS appendix; the family fire inspection is done',
  '回填 curriculum/01-overview.md 第 37 週進度欄':
    'Fill in the Week 37 progress column of curriculum/01-overview.md',
  '下週預告 · Week 38：交易日誌與複盤':
    'Next week · Week 38: the trading journal and review',
  '——Q3 的最後一塊拼圖：怎麼區分「做得對」和「運氣好」。':
    ' — the last piece of Q3: how to tell "done right" from "got lucky."',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：決策流程':
    'Previous week: the decision process',
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
  '股票比例':
    'Equity weight',
  '債券比例':
    'Bond weight',
  '可承受最大虧損':
    'Maximum loss you can bear',
  '其他股票跌幅':
    'Decline in other stocks',
  '毀滅門檻':
    'Doomsday threshold',
  '答對了——2022 的病因是通膨，央行升息同時砸股票（折現率上升）與債券（利率漲、債價跌）。2008 的病因是信用崩潰，央行降息救市，債券因此上漲。保護有沒有效，取決於危機的類型。':
    'Correct — the cause in 2022 was inflation, and the central bank\'s rate hikes hit stocks (the discount rate rises) and bonds (rates up, bond prices down) at the same time. The cause in 2008 was a credit collapse, and the central bank cut rates to rescue the market, so bonds rose. Whether protection works depends on the type of crisis.',
  '關鍵在病因：2022 是通膨，央行升息同時砸股票（折現率上升）與債券（利率漲、債價跌）。2008 的病因是信用崩潰，央行降息救市，債券因此上漲、成功避險。保護有沒有效，取決於危機的類型。':
    'The key is the cause: in 2022 it was inflation, and the central bank\'s rate hikes hit stocks (the discount rate rises) and bonds (rates up, bond prices down) at once. In 2008 the cause was a credit collapse, and the central bank cut rates to rescue the market, so bonds rose and the hedge worked. Whether protection works depends on the type of crisis.',
  '信用危機':
    'credit crisis',
  '2020 型':
    '2020-style',
  '流動性危機':
    'liquidity crisis',
  '通膨危機':
    'inflation crisis',
  '（現金':
    ' (cash',
  '萬':
    '',
  '｜股':
    ' | stocks',
  '%／債':
    '% / bonds',
  '萬</td><td>':
    '</td><td>',
  '約':
    'about',
  '年':
    'years',
  '<b>最壞是':
    '<b>The worst case is ',
  '萬變':
    'becomes',
  '萬，少了':
    '— a loss of',
  '萬。</b>':
    '(all in NT$10k).</b>',
  '以每年 7% 回本約':
    ' At 7% a year, it takes about',
  '年——這段時間，家裡用得到這筆錢嗎？':
    'years to break even — will the family need this money in that time?',
  '超過你寫下的':
    ' exceeded the',
  '% 容忍度。不是情境錯了，是配置或容忍度至少有一個要重寫。':
    '% tolerance you wrote down. The scenarios aren\'t wrong — at least one of the allocation and the tolerance needs rewriting.',
  '<br>三個情境都在':
    '<br>All three scenarios are within your',
  '% 容忍度內——把這張表存進 IPS 附錄，崩盤那天拿出來讀。':
    '% tolerance — save this table in the IPS appendix and read it on the day of the crash.',
  '不可能':
    'Impossible',
  '不必跌':
    'No fall needed',
  '<b>股票全部歸零也虧不到':
    '<b>Even if every stock went to zero you still couldn\'t lose',
  '%。</b>以這個配置，毀滅劇本不在市場下跌這條路上——該擔心的是通膨與被迫賣出。':
    '%.</b> With this allocation, the doomsday script isn\'t on the road of market declines — what to worry about is inflation and forced selling.',
  '<b>其他股票跌':
    '<b>Other stocks falling',
  '% 就已經夠了。</b>股票比例太高，不需要單一故事出事，一場普通熊市就會讓你虧到':
    '% is already enough.</b> Your stock share is too high — no single story needs to go wrong; an ordinary bear market will take you to a loss of',
  '<b>單一故事歸零也到不了':
    '<b>Even if the single story went to zero, it still wouldn\'t reach',
  '%。</b>集中度還在可控範圍——這條路上沒有毀滅劇本，但仍要看其他路。':
    '%.</b> Concentration is still under control — there\'s no doomsday script down this road, but you still need to look at the other roads.',
  '<b>你的毀滅劇本：那一個故事跌':
    '<b>Your doomsday script: that one story falls',
  '%，同時其他股票跌':
    '%, while other stocks fall',
  '單一產業跌八成以上並非天方夜譚——2000 年科技泡沫，那斯達克峰谷跌了約 78%。把這個劇本寫下來，對照 W18 的集中度上限。':
    ' A single industry falling 80% or more is not a fairy tale — in the 2000 tech bubble, the Nasdaq fell about 78% peak to trough. Write this script down and check it against W18\'s concentration limit.',
  '這需要接近歸零的崩跌，機率低——但寫下來，它就是你該監控的觸發條件。':
    ' This would take a near-total collapse and the probability is low — but write it down, and it becomes a trigger condition you should monitor.',
  '✓ 演習完成——下週學會分辨「做得對」和「運氣好」。':
    '✓ Drill complete — next week, learn to tell "done right" from "got lucky."',
};
