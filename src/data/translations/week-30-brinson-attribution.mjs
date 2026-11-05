/*
 * 給家人的投資課 Week 30：績效歸因——Brinson 模型 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-30-brinson-attribution.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * JS 算出的數值後綴「萬」「元」翻成空字串，單位改掛在標籤上（如 NT$10k、NT$）。
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
  '給家人的投資課 · Q3 操盤手季 · Week 30':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 30',
  '績效歸因——Brinson 模型':
    'Performance Attribution: The Brinson Model',
  'W29 算出「贏基準 2.4 個百分點」，本週回答「':
    'W29 worked out that we "beat the benchmark by 2.4 percentage points." This week answers "',
  '贏在哪':
    'where the win came from',
  '」——是把錢押對類別（配置），還是在類別裡挑對標的（選股）？歸因是操盤手的復盤 X 光。':
    '" — did you put money into the right asset classes (allocation), or pick the right holdings within each class (selection)? Attribution is the portfolio manager\'s X-ray for looking back at what happened.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：':
    'Prerequisites: ',
  '第 27':
    'Weeks 27',
  '29 週':
    '29',
  '52 週 · 第 30 週':
    '52 weeks · Week 30',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '知道自己真正的優勢來源，才知道該加強什麼、放掉什麼。這也是把專欄引用的 Brinson 研究「還原成工具」的一週——順便修正那個被誤用最多的 90%。':
    'Knowing where your real edge comes from is how you know what to strengthen and what to let go. This is also the week that "turns into a tool" the Brinson research the column cited — and fixes the most misused 90% along the way.',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週「兩個司機」家人買不買單——他們學會問「晃得多兇」了嗎？':
    'Think back to the "two drivers" from last week. Did your family buy it? Have they learned to ask "how wildly does it swing?"',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '小孩月考總分贏了全班平均 24 分。你最想知道的下一件事是什麼？':
    'A child\'s monthly exam total beat the class average by 24 points. What is the next thing you most want to know?',
  '贏在哪一科':
    'Which subject the win came from',
  '全班平均是幾分':
    'What the class average is',
  '下次還會不會贏':
    'Whether they\'ll win again next time',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 歸因要回答的問題':
    '1. The question attribution answers',
  '你的組合贏了基準——但「贏」可能來自完全不同的技能：':
    'Your portfolio beat the benchmark — but "beating" can come from completely different skills:',
  '配置（allocation）':
    'Allocation',
  '：你把比基準更多的錢放在表現好的':
    ': you put a larger share of money than the benchmark into the ',
  '類別':
    'asset classes',
  '（如加碼股票、減碼債券）':
    ' that performed well (for example, overweighting stocks and underweighting bonds)',
  '選股（selection）':
    'Selection',
  '：在每個類別':
    ': ',
  '裡面':
    'within',
  '，你挑的標的贏過該類別的指數':
    ' each asset class, the holdings you picked beat that class\'s index',
  '兩種是不同的能力、不同的職涯（資產配置者 vs 選股者），也對應你這門課的兩條技能樹（W14–18 vs W19–26）。歸因把它們拆開計量。':
    'These are different abilities and different careers (asset allocators vs. stock pickers), and they map onto the two skill trees in this course (W14–18 vs. W19–26). Attribution separates them and measures each.',
  '2. Brinson 模型：完整算例':
    '2. The Brinson model: a complete worked example',
  '設定（兩類別簡化版；數字為教學設計）：':
    'Setup (a simplified two-class version; the numbers are designed for teaching):',
  '組合權重':
    'Portfolio weight',
  '基準權重':
    'Benchmark weight',
  '組合報酬':
    'Portfolio return',
  '類別基準報酬':
    'Class benchmark return',
  '股票':
    'Stocks',
  '債券':
    'Bonds',
  '第一步｜總報酬':
    'Step 1 | Total return',
  '：組合 R':
    ': Portfolio R',
  '；基準 R':
    '; benchmark R',
  '；超額 ＝':
    '; excess return = ',
  '——現在來拆。':
    ' — now let\'s split it up.',
  '第二步｜配置效果':
    'Step 2 | Allocation effect',
  '＝ Σ（權重差 × 該類別基準報酬相對整體基準的優劣）：':
    ' = Σ (weight difference × how much that class\'s benchmark return beats or lags the overall benchmark):',
  '股票：(70%−60%) × (8%−5.2%) ＝':
    'Stocks: (70%−60%) × (8%−5.2%) = ',
  '（加碼了跑贏整體的類別 → 加分）':
    ' (overweighted a class that beat the overall benchmark → bonus points)',
  '債券：(30%−40%) × (1%−5.2%) ＝':
    'Bonds: (30%−40%) × (1%−5.2%) = ',
  '（減碼了跑輸整體的類別 → 也是加分！）':
    ' (underweighted a class that lagged the overall benchmark → also bonus points!)',
  '小計':
    'Subtotal',
  '注意債券那行的巧思：':
    'Notice the clever bit in the bonds line: ',
  '減碼爛類別跟加碼好類別一樣是功勞':
    'underweighting a bad class earns as much credit as overweighting a good one',
  '——公式裡兩個負號相乘，負負得正。':
    ' — in the formula, two negative signs multiply, and a negative times a negative is a positive.',
  '第三步｜選股效果':
    'Step 3 | Selection effect',
  '＝ Σ（基準權重 × 你在該類別內的超額）：':
    ' = Σ (benchmark weight × your excess return within that class):',
  '股票：60% × (10%−8%) ＝':
    'Stocks: 60% × (10%−8%) = ',
  '；債券：40% × (2%−1%) ＝':
    '; Bonds: 40% × (2%−1%) = ',
  '；小計':
    '; subtotal ',
  '第四步｜交互項':
    'Step 4 | Interaction term',
  '＝ Σ（權重差 × 選股差）＝ 0.1×2% ＋ (−0.1)×1% ＝':
    ' = Σ (weight difference × selection difference) = 0.1×2% + (−0.1)×1% = ',
  '勾稽：0.70 ＋ 1.60 ＋ 0.10 ＝ 2.40pp ✓——三塊加總必等於超額。你的飲料店勾稽精神（W8），在組合層的再現。':
    'Cross-check: 0.70 + 1.60 + 0.10 = 2.40pp ✓ — the three pieces must add up to the excess return. It\'s the same spirit as reconciling the books at your drink shop (W8), now at the portfolio level.',
  '判讀':
    'Reading it',
  '：這個例子裡選股貢獻（1.6）是配置（0.7）的兩倍多——這位操盤手的優勢在挑標的，不在調股債比。但':
    ': in this example the selection contribution (1.6) is more than double the allocation (0.7) — this portfolio manager\'s edge is in picking holdings, not in adjusting the stock/bond mix. But ',
  '連續 4–8 季的歸因才能分辨技能與運氣':
    'only 4–8 straight quarters of attribution can tell skill from luck',
  '——單季什麼都證明不了（W38 的 resulting）。':
    ' — a single quarter proves nothing (the "resulting" trap in W38).',
  'Brinson 拆帳台':
    'Brinson splitter',
  '基準固定：股 60%／債 40%，類別基準報酬 8%／1%。拉你的權重與報酬，看三塊怎麼分帳、勾稽怎麼永遠成立。':
    'The benchmark is fixed: 60% stocks / 40% bonds, with class benchmark returns of 8% / 1%. Drag your weights and returns to see how the three pieces split the account and why the cross-check always holds.',
  '講義算例':
    'Notes example',
  '純配置型（選股平手）':
    'Pure allocation (selection a tie)',
  '純選股型（權重貼基準）':
    'Pure selection (weights hug the benchmark)',
  '你的股票權重':
    'Your stock weight',
  '你的股票部位報酬':
    'Your stock return',
  '你的債券部位報酬':
    'Your bond return',
  '基準 5.20%':
    'Benchmark 5.20%',
  '超額':
    'Excess',
  '要拆的帳':
    'The account to split',
  '配置效果':
    'Allocation effect',
  '押對類別':
    'Right asset-class bets',
  '選股效果':
    'Selection effect',
  '類別裡挑對':
    'Right picks within classes',
  '交互項':
    'Interaction',
  '兩個決策的加乘':
    'The two decisions compounding',
  '拉動滑桿或按預設。':
    'Drag a slider or press a preset.',
  '3. 重讀 Brinson 1986：那個被誤用最多的 90%':
    '3. Re-reading Brinson 1986: the most misused 90%',
  '現在你有工具了，回頭把專欄引用的研究讀精確：':
    'Now that you have the tool, let\'s go back and read the research the column cited precisely:',
  '它說的是：退休基金報酬的':
    'What it says: of retirement-fund returns, about 90% of the ',
  '時間序列變異':
    'time-series variance',
  '（波動）約 90% 由「政策配置」解釋':
    ' (volatility) is explained by "policy allocation"',
  '它':
    'It ',
  '不是':
    'does not',
  '說：報酬的「高低」90% 來自配置，也不是說選股無用':
    ' say that 90% of the "level" of returns comes from allocation, and it does not say that stock picking is useless',
  '正確的白話：':
    'In plain words: ',
  '你的組合「晃動的樣子」主要由股債比決定':
    'the way your portfolio "wiggles" is mainly determined by the stock/bond mix',
  '；但兩個同配置的組合，最終財富仍可因選股與成本差很多':
    '; but two portfolios with the same allocation can still end up with very different wealth because of stock picking and costs',
  '對個人的含義不變（配置是地基），但別再說「報酬的 90% 來自配置」——你現在是能分辨這兩句話差異的人了。':
    'What it means for individuals is unchanged (allocation is the foundation), but stop saying "90% of returns come from allocation" — you are now someone who can tell the difference between those two sentences.',
  '90% 判讀：這句話是原研究說的嗎？':
    'The 90% reading: did the original study say this?',
  '三句常見引用，判斷哪句忠於 Brinson 1986 的原意。':
    'Three commonly quoted lines — decide which ones are faithful to the original intent of Brinson 1986.',
  '第 1 / 3 題':
    'Question 1 / 3',
  '✓ 忠於原研究':
    '✓ Faithful to the study',
  '✕ 誤用':
    '✕ Misused',
  '目前答對 0 題':
    'Correct so far: 0',
  '4. 歸因的實務細節':
    '4. Practical details of attribution',
  '類別內基準要選對':
    'Choose the right benchmark within each class',
  '——股票部位對台股就用加權報酬指數、對全球用世界指數；選錯類別基準，選股效果會被灌水或冤枉':
    ' — for Taiwan stocks use the TAIEX total return index, for global stocks use a world index; pick the wrong class benchmark and the selection effect gets inflated or unfairly blamed',
  '多期歸因':
    'Multi-period attribution',
  '——單期公式直接相加會有複利誤差，實務有連結法（Carino 等）；個人使用知道「逐期算、趨勢看」即可':
    ' — simply adding single-period results produces a compounding error; in practice there are linking methods (Carino and others). For personal use, "calculate period by period, watch the trend" is enough',
  '交互項的處理':
    'Handling the interaction term',
  '——有些機構把它併入選股效果（Brinson-Fachler 慣例不同）；重點是三塊加總勾稽，歸類方式註明即可':
    ' — some institutions fold it into the selection effect (Brinson-Fachler conventions differ); the key is that the three pieces cross-check to the total, and you just note how you classified it',
  '費用也要歸因':
    'Fees need attribution too',
  '——毛報酬歸因完，記得超額還要扣掉交易成本（W10）；很多「有選股能力」的人，扣費後歸零':
    ' — after attributing gross returns, remember the excess return still has trading costs deducted (W10); many people who "have stock-picking skill" drop to zero after fees',
  '5. 常見誤解闢謠':
    '5. Common misconceptions, debunked',
  '「超額為正＝有技能。」':
    '"A positive excess return means skill."',
  '可能只是風格順風——W32 的因子會給更鋒利的透鏡：你的「選股 alpha」可能只是價值／小型股曝險。':
    'It may just be a style tailwind — W32\'s factors will give you a sharper lens: your "stock-picking alpha" may be nothing more than exposure to value / small caps.',
  '「配置效果小＝配置不重要。」':
    '"A small allocation effect means allocation doesn\'t matter."',
  '若你的配置':
    'If your allocation ',
  '貼著基準':
    'hugs the benchmark',
  '（權重差小），配置效果自然小——那是「沒下注」不是「沒能力」。效果大小要對照主動偏離的幅度（下週的 active share）。':
    ' (small weight differences), the allocation effect is naturally small — that means "you didn\'t place a bet," not "you lack ability." Read the size of the effect against the size of your active deviation (next week\'s active share).',
  '「歸因是機構才需要的。」':
    '"Attribution is only for institutions."',
  '個人版的價值更直接：發現自己選股效果長期為負的人，理性的行動是把選股外包給指數（W16）、保留配置決策——歸因就是找出「你該外包哪一半」的工具。':
    'The value for individuals is even more direct: if you find your selection effect is negative over the long run, the rational move is to outsource stock selection to an index (W16) and keep the allocation decision — attribution is the tool for finding "which half you should outsource."',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '第三次遇到 Brinson——這次讀原文':
    'The third time meeting Brinson — this time read the original',
  '40 分鐘':
    '40 min',
  '找到原文或詳細摘要，':
    'Find the original paper or a detailed summary, and ',
  '親自確認「90% 解釋的是變異」':
    'confirm for yourself that "the 90% explains the variance"',
  '——把關鍵句抄進筆記。這是你第三次遇到這研究：專欄引用它、W14 用它、本週精讀它。':
    ' — copy the key sentence into your notes. This is your third encounter with this research: the column cited it, W14 used it, and this week you read it closely.',
  '25 分鐘':
    '25 min',
  '歸因的一般框架與術語。':
    'The general framework and terminology of attribution. ',
  '5 分鐘':
    '5 min',
  '回顧 W18 IPS 的基準設定':
    'Revisit the benchmark setting in your W18 IPS',
  '歸因的前提是基準明確——「跟誰比」下週正式深化。':
    'Attribution presupposes a clear benchmark — "who are you comparing against" gets formal depth next week.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '第一次月度歸因':
    'Your first monthly attribution',
  '任務 A｜模擬組合歸因（40 分鐘）':
    'Task A | Attribution for the simulated portfolio (40 minutes)',
  '兩類別簡化：股票部位 vs 債券／現金部位':
    'Two classes, simplified: the stock position vs. the bond / cash position',
  '查同期類別基準報酬（台股加權報酬指數、你 IPS 指定的債券基準）':
    'Look up the class benchmark returns for the same period (the Taiwan TAIEX total return index, and the bond benchmark your IPS specifies)',
  '跑四步驟：總報酬 → 配置 → 選股 → 交互 →':
    'Run the four steps: total return → allocation → selection → interaction → ',
  '勾稽':
    'cross-check',
  '（加總必須等於超額，差 0.01pp 內可接受）':
    ' (the sum must equal the excess return; a difference within 0.01pp is acceptable)',
  '驗證手感':
    'Sanity check',
  '：先用講義算例手算一遍，確認能重現 0.70／1.60／0.10':
    ': first calculate the notes\' worked example by hand to confirm you can reproduce 0.70 / 1.60 / 0.10',
  '寫三行：這期超額主要來自哪裡？符合你對自己的預期嗎？':
    'Write three lines: where did this period\'s excess return mainly come from? Does it match what you expected of yourself?',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '拿上面的拆帳台當對答案機——講義算例必須出現 0.70／1.60／0.10、勾稽 2.40；你自己的歸因，三塊加總與超額的差要在 0.01pp 內。':
    'Use the splitter above as an answer key — the notes\' worked example must show 0.70 / 1.60 / 0.10 with a cross-check of 2.40; for your own attribution, the gap between the sum of the three pieces and the excess return must be within 0.01pp.',
  '講義算例手算重現成功（0.70／1.60／0.10）':
    'The notes\' worked example reproduced by hand (0.70 / 1.60 / 0.10)',
  '模擬組合第一次歸因完成且勾稽通過':
    'The first attribution for the simulated portfolio is done and the cross-check passes',
  '能一句話說出自己這期「贏／輸在哪」':
    'You can say in one sentence where you "won / lost" this period',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '減碼表現差的類別，在配置效果裡是加分還是扣分？公式怎麼做到的？':
    'Does underweighting a poorly performing class add or subtract in the allocation effect? How does the formula do that?',
  '加分':
    'It adds',
  '。公式（權重差）×（類別相對報酬）：減碼是負的權重差、爛類別是負的相對報酬——':
    '. The formula is (weight difference) × (class relative return): underweighting is a negative weight difference, and a bad class has a negative relative return — ',
  '負負得正':
    'a negative times a negative is a positive',
  '。直覺：把錢從爛類別移走，跟把錢放進好類別是同一枚硬幣的兩面。':
    '. Intuition: moving money out of a bad class and putting money into a good class are two sides of the same coin.',
  '你的「選股效果」連續八季為負——理性的結論與行動是什麼？':
    'Your "selection effect" has been negative for eight straight quarters — what is the rational conclusion and action?',
  '→ 結論：你在「類別內挑標的」上':
    '→ Conclusion: you have ',
  '沒有可辨識的優勢':
    'no identifiable edge',
  '（八季已扣除運氣的合理觀察期）。行動：類別內改用指數工具（W16），把時間投入你有正貢獻的環節（配置紀律、成本控制）。這不是認輸，是把自己當成一項資產來歸因後的理性配置。':
    ' in "picking holdings within a class" (eight quarters is a reasonable observation window after allowing for luck). Action: use index tools within each class (W16), and put your time into the parts where you contribute positively (allocation discipline, cost control). This isn\'t giving up — it\'s the rational allocation you get after attributing yourself as if you were an asset.',
  '「報酬波動的 90% 由配置決定」與「報酬高低的 90% 來自配置」差在哪？':
    'What is the difference between "90% of the volatility of returns is determined by allocation" and "90% of the level of returns comes from allocation"?',
  '→ 前者（正確版）講的是':
    '→ The former (the correct version) says that ',
  '淨值曲線起伏的形狀':
    'the shape of the ups and downs of the equity curve',
  '九成由股債比決定——波動的來源。後者（誤用版）暗示選股與成本幾乎不影響最終報酬——原研究沒有支持這個說法：長期財富差異裡，選股、成本、行為都有重大貢獻。':
    ' is ninety percent determined by the stock/bond mix — the source of the volatility. The latter (the misused version) implies that stock picking and costs barely affect the final return — the original study doesn\'t support that: in long-run wealth differences, stock picking, costs, and behavior all make major contributions.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '考卷拆分':
    'Splitting the exam paper',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（考卷拆分）':
    'Opening (splitting the exam paper)',
  '「小孩月考總分贏了全班平均 24 分。你想知道的下一件事是什麼？」（哪一科贏的。）「投資也一樣：這個月我們的模擬帳戶贏了大盤——但要拆開看：是因為我們':
    '"Your child\'s monthly exam total beat the class average by 24 points. What\'s the next thing you want to know?" (Which subject the win came from.) "Investing is the same: this month our simulated account beat the market — but let\'s take it apart: was it because we ',
  '股票放得比較多':
    'held more stocks',
  '（押對科目），還是':
    ' (we bet on the right subject), or because we ',
  '挑的股票比較強':
    'picked stronger stocks',
  '（該科考得好）？兩種是完全不同的本事。」':
    ' (we did well in that subject)? Those are two completely different skills."',
  '核心演示':
    'The core demo',
  '用講義算例的表格講一遍四步驟（家人只需要聽懂「押對類別」和「類別裡挑對」兩塊），最後亮出勾稽：「0.7 加 1.6 加 0.1，剛好等於 2.4——':
    'Walk through the four steps with the table from the notes (your family only needs to grasp two pieces: "right asset-class bets" and "right picks within classes"), and finish with the cross-check: "0.7 plus 1.6 plus 0.1 comes out to exactly 2.4 — ',
  '帳拆得乾乾淨淨':
    'the books split up cleanly',
  '，跟我們家飲料店對帳同一個精神。」':
    ', in the same spirit as reconciling the books at our family\'s drink shop."',
  '互動（自我認識）':
    'Interaction (self-knowledge)',
  '「如果連續兩年拆帳都發現：我們挑股票其實是扣分的，只有比例調得好——你覺得該怎麼辦？」':
    '"If two years in a row the breakdown showed that our stock picking actually subtracts value and only our mix adjustments were good — what do you think we should do?"',
  '引導出：挑股票的部分交給 ETF，專心顧比例——「承認自己哪裡不行，是投資裡最賺錢的誠實」。':
    'Draw out: hand the stock-picking part to ETFs and focus on the mix — "admitting what you\'re not good at is the most profitable honesty in investing."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「一個月的成績能看出什麼？」':
    '"What can a single month\'s result tell you?"',
  '「看不出來，跟一次月考看不出實力一樣——要連續拆一兩年才知道是實力還是運氣。所以我們每個月拆、每季回顧。」':
    '"Nothing, just as one monthly exam doesn\'t show real ability — we have to split it up for a year or two to know whether it\'s skill or luck. That\'s why we break it down every month and review every quarter."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫配置／選股／交互三公式並解釋直覺':
    'You can write out the allocation / selection / interaction formulas from memory and explain the intuition',
  '模擬組合月度歸因上線（此後每月隨月報跑）':
    'Monthly attribution for the simulated portfolio is live (from now on it runs with each monthly report)',
  '能精確轉述 Brinson 1986 的真正結論':
    'You can accurately restate the real conclusion of Brinson 1986',
  '分享環節完成，記錄卡住的點':
    'Teaching session done; note where you got stuck',
  '回填 curriculum/01-overview.md 第 30 週進度欄':
    'Fill in the Week 30 progress column in curriculum/01-overview.md',
  '下週預告 · Week 31：基準與追蹤誤差':
    'Next week\'s preview · Week 31: Benchmarks and tracking error',
  '——歸因的地基是「跟誰比」；選錯基準，整套歸因都是對空氣揮拳。':
    ' — the foundation of attribution is "who are you comparing against"; pick the wrong benchmark and the whole attribution is just punching at air.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：Sharpe 家族':
    'Previous week: The Sharpe family',
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
  '股票權重':
    'Stock weight',
  '股票部位報酬':
    'Stock return',
  '債券部位報酬':
    'Bond return',
  '對——贏在哪一科。總分只告訴你「贏了」，拆科目才知道「本事在哪」。投資的版本：贏大盤 2.4pp，是押對類別（配置）還是類別裡挑對（選股）？Brinson 模型就是那把拆考卷的刀。':
    'Right — which subject the win came from. The total only tells you "you won"; breaking it down by subject shows where the skill is. The investing version: beating the market by 2.4pp — was it the right asset-class bets (allocation) or the right picks within classes (selection)? The Brinson model is the knife that splits the exam paper.',
  '都想知道，但最有行動價值的是「贏在哪一科」——總分只說「贏了」，拆科目才知道本事在哪、該補哪。投資的版本：超額 2.4pp 要拆成配置與選股兩塊，Brinson 模型就是那把刀。':
    'You\'d want to know all of those, but the most actionable is "which subject the win came from" — the total only says "you won"; breaking it down by subject shows where the skill is and what to work on. The investing version: the 2.4pp excess return has to be split into allocation and selection, and the Brinson model is that knife.',
  '勾稽：':
    'Cross-check: ',
  '</b>權重貼基準、選股也平手——沒有下注就沒有超額。歸因不會獎勵「什麼都沒做」，它只是誠實。':
    '</b>Weights hug the benchmark and stock picking is a tie — no bets, no excess return. Attribution doesn\'t reward "doing nothing"; it\'s just honest.',
  '</b>這一期的本事主要在<strong>選股</strong>——類別裡挑的標的贏過類別指數。注意：連續 4–8 季都這樣，才能說是技能不是運氣。':
    '</b>This period\'s edge is mainly in <strong>selection</strong> — the holdings picked within classes beat the class indexes. Note: only when it holds for 4–8 straight quarters can you call it skill rather than luck.',
  '</b>這一期的本事主要在<strong>配置</strong>——押對（或躲對）了類別。減碼爛類別跟加碼好類別一樣是功勞：公式裡負負得正。':
    '</b>This period\'s edge is mainly in <strong>allocation</strong> — you were right (or avoided the wrong ones) on asset classes. Underweighting a bad class earns as much credit as overweighting a good one: in the formula, a negative times a negative is a positive.',
  '</b>配置與選股貢獻相當——兩條技能樹都有出力。單期先別下結論，逐月拆、看趨勢。':
    '</b>Allocation and selection contribute about equally — both skill trees pulled their weight. Don\'t draw conclusions from one period; break it down month by month and watch the trend.',
  '「退休基金淨值曲線的起伏（變異），約九成由股債配置政策解釋。」':
    '"The ups and downs (variance) of a retirement fund\'s equity curve are about ninety percent explained by its stock/bond allocation policy."',
  '這是原研究的結論：90% 解釋的是報酬的「時間序列變異」——組合晃動的樣子主要由配置決定。':
    'This is the original study\'s conclusion: the 90% explains the "time-series variance" of returns — the way a portfolio wiggles is mainly determined by its allocation.',
  '「你的報酬高低，90% 來自資產配置，選股幾乎不重要。」':
    '"90% of your return level comes from asset allocation; stock picking barely matters."',
  '最常見的誤用。原研究量的是波動的來源，不是報酬的高低；兩個同配置的組合，最終財富仍可因選股與成本差很多。':
    'The most common misuse. The original study measured the source of volatility, not the level of returns; two portfolios with the same allocation can still end up with very different wealth because of stock picking and costs.',
  '「配置是地基——先決定股債比，再談其他。」':
    '"Allocation is the foundation — decide the stock/bond mix first, then talk about everything else."',
  '這是合理的引申（W14 也是這樣用的）：配置決定你組合的風險樣貌，先把地基打對。注意它與「報酬九成來自配置」是兩回事——前者講風險形狀，後者是誤用。':
    'This is a reasonable extension (W14 uses it this way too): allocation determines your portfolio\'s risk profile, so get the foundation right first. Note that it is a different thing from "ninety percent of returns come from allocation" — the former is about the shape of risk, the latter is the misuse.',
  '第':
    'Question',
  '題':
    '',
  '重新開始——目前答對 0 題':
    'Starting over — correct so far: 0',
  '答對——':
    'Correct — ',
  '再想想——':
    'Think again — ',
  '這句忠於原研究。':
    'This line is faithful to the original study.',
  '這句是誤用。':
    'This line is a misuse.',
  '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">（點上面的「下一題」繼續）</span>':
    '<br><span style="font-size:.85em;color:var(--ink-3)">(tap "Next question" above to carry on)</span>',
  '<br><span style=\\"font-size:.85em;color:var(--ink-3)\\">（三題結束——想再練就點「再玩一次」）</span>':
    '<br><span style="font-size:.85em;color:var(--ink-3)">(all three done — tap "Play again" to practise more)</span>',
  '目前答對':
    'Correct so far:',
  '下一題 →':
    'Next question →',
  '再玩一次 ↺':
    'Play again ↺',
  '✓ 復盤 X 光就位——下週回到地基：跟誰比（基準與追蹤誤差）。':
    '✓ X-ray in place — next week we return to the foundation: who are you comparing against (benchmarks and tracking error).',
};
