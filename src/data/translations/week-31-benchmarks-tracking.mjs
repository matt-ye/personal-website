/*
 * 給家人的投資課 Week 31：基準與追蹤誤差——跟誰比，決定一切 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-31-benchmarks-tracking.html
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
  '給家人的投資課 · Q3 操盤手季 · Week 31':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 31',
  '基準與追蹤誤差——跟誰比，決定一切':
    'Benchmarks and Tracking Error: Who You Compare Against Decides Everything',
  'W29 的 IR、W30 的歸因，全部建立在一個前提上：「跟誰比」選對了。選錯基準，好成績是假的、壞成績也是冤的。本週也拆穿基金業最隱蔽的產品——':
    'W29\'s IR and W30\'s attribution all rest on one premise: that you picked the right "who to compare against." Pick the wrong benchmark and a good result is fake, and a bad result is unfair. This week we also expose the best-hidden product in the fund industry — ',
  '櫃子裡的指數基金':
    'closet index funds',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 29–30 週':
    'Prerequisites: Weeks 29–30',
  '52 週 · 第 31 週':
    '52 weeks · Week 31',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '基準是操盤手的座標原點。本週交付的「月報五數字」（報酬／基準／超額／TE／IR），會讓兩三年後的你，第一次誠實面對「我的主動操作付不付得起自己的機會成本」。':
    'The benchmark is the portfolio manager\'s coordinate origin. This week\'s deliverable, the "five numbers in the monthly report" (return / benchmark / excess / TE / IR), will let you, two or three years from now, face honestly for the first time the question "does my active management pay for its own opportunity cost?"',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週「考卷拆分」——家人聽懂「押對科目」和「該科考得好」是兩種本事了嗎？':
    'Think back to last week\'s "splitting the exam paper." Did your family get that "betting on the right subject" and "doing well in that subject" are two different skills?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '某人說：「我的台股組合今年贏加權指數 3%。」他最可能其實……？':
    'Someone says: "My Taiwan stock portfolio beat the TAIEX by 3% this year." What is the most likely reality...?',
  '真的很會選股':
    'They\'re really good at picking stocks',
  '只是剛好打平':
    'They just about broke even',
  '運氣好，明年會輸':
    'Lucky — and will lose next year',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 好基準的三個條件':
    '1. Three conditions for a good benchmark',
  '可投資':
    'Investable',
  '——你能用低成本工具直接買到它。「打敗一個買不到的東西」沒有意義':
    ' — you can buy it directly with low-cost tools. "Beating something you can\'t buy" is meaningless',
  '事先指定':
    'Specified in advance',
  '——開始操作前就寫進 IPS（W18 已做）。事後挑一個輸給自己的指數來比，是自欺的第一名手法':
    ' — written into the IPS before you start investing (already done in W18). Picking an index afterward that your portfolio happens to beat is the number-one way of fooling yourself',
  '與策略一致':
    'Consistent with the strategy',
  '——投資全球股票卻拿台股加權比，漲跌全是匯率與市場差異的雜訊，不是你的能力':
    ' — if you invest in global stocks but compare against the TAIEX, the ups and downs are all noise from currency and market differences, not your skill',
  '台灣投資人的經典陷阱':
    'A classic trap for Taiwanese investors',
  '拿「加權指數」（':
    'Using the "TAIEX" price index (',
  '不含息':
    'which excludes dividends',
  '）當基準。台股殖利率長期 3–4%，含息的「發行量加權股價報酬指數」每年天生多 3–4 個百分點——用不含息指數比，人人都是股神。你的模擬組合基準必須用':
    ') as the benchmark. Taiwan stocks have yielded 3–4% over the long run, so the dividend-inclusive "TAIEX total return index" naturally gains an extra 3–4 percentage points a year — compare against the index without dividends and everyone is a stock-market genius. Your paper portfolio\'s benchmark must use the ',
  '報酬指數':
    'total return index',
  '鋸短的尺：含息 vs 不含息':
    'The sawed-off ruler: with vs. without dividends',
  '拉殖利率與年數，看「不含息指數」把真實報酬低估多少——以及一份「贏大盤 3%」的成績單，換成正版尺還剩多少。':
    'Drag the yield and the number of years to see how much the "index without dividends" understates the real return — and how much of a "beat the market by 3%" report card is left when you switch to the genuine ruler.',
  '價格年報酬':
    'Annual price return',
  '殖利率':
    'Dividend yield',
  '期間':
    'Period',
  '10 年':
    '10 years',
  '你宣稱「贏加權指數」（每年）':
    'You claim to "beat the TAIEX" (per year)',
  '不含息累積':
    'Cumulative, excluding dividends',
  '被鋸短的尺':
    'The sawed-off ruler',
  '含息累積':
    'Cumulative, including dividends',
  '正版尺':
    'The genuine ruler',
  '對正版尺的真實超額':
    'Real excess return vs. the genuine ruler',
  '每年':
    'Per year',
  '拉動滑桿。':
    'Drag a slider.',
  '2. 追蹤誤差：主動程度的尺':
    '2. Tracking error: a ruler for how active you are',
  '追蹤誤差（TE）＝超額報酬序列的標準差（年化）。算例：某組合 12 個月的月超額報酬（%）0.3、−0.2、0.5、0.1、−0.4、0.2、0.6、−0.1、0.3、0.0、−0.3、0.4——月標準差 ≈ 0.32%，年化 TE ＝ 0.32% × √12 ≈':
    'Tracking error (TE) = the standard deviation of the excess-return series (annualized). Worked example: a portfolio\'s monthly excess returns (%) over 12 months are 0.3, −0.2, 0.5, 0.1, −0.4, 0.2, 0.6, −0.1, 0.3, 0.0, −0.3, 0.4 — monthly standard deviation ≈ 0.32%, annualized TE = 0.32% × √12 ≈ ',
  '；全年累積超額 ≈ +1.4%，IR ≈ 1.4 ÷ 1.11 ≈':
    '; full-year cumulative excess return ≈ +1.4%, IR ≈ 1.4 ÷ 1.11 ≈ ',
  '（相當漂亮——但只有一年，先別頒獎）。':
    ' (quite pretty — but it\'s only one year, so hold off on handing out medals).',
  '年化 TE':
    'Annualized TE',
  '這是什麼':
    'What this is',
  '指數基金（追蹤品質好壞看這裡）':
    'Index funds (this is where you judge tracking quality)',
  '增強指數／「櫃子裡的指數基金」出沒區':
    'Enhanced index / where "closet index funds" lurk',
  '一般主動基金':
    'Typical active funds',
  '高度主動／集中持股／風格強烈':
    'Highly active / concentrated holdings / strong style tilt',
  'TE 本身':
    'TE by itself ',
  '無關好壞':
    'is neither good nor bad',
  '——它量的是「你偏離地圖多遠」；偏離得值不值，要配 IR 看（每單位偏離換到多少超額）。':
    ' — it measures "how far you stray from the map"; whether the straying is worth it has to be read together with IR (how much excess return you earn per unit of deviation).',
  '3. Active Share：另一把主動尺':
    '3. Active Share: another ruler for how active you are',
  'TE 看':
    'TE looks at the deviation in ',
  '結果':
    'results',
  '的偏離，Active Share 看':
    ', while Active Share looks at the deviation in ',
  '持股':
    'holdings',
  '的偏離：組合持股與基準成分的不重疊比例（0% ＝ 完全複製、100% ＝ 完全不同）。':
    ': the share of the portfolio\'s holdings that do not overlap with the benchmark\'s constituents (0% = a perfect copy, 100% = entirely different).',
  '櫃子裡的指數基金（closet indexer）':
    'Closet index funds (closet indexers)',
  '＝ Active Share 低（如 &lt;60%）＋ TE 低，卻收 1.5% 主動管理費。它的數學宿命：報酬 ≈ 指數 − 高費用 ＝ 長期必輸（W16 的算術）；投資人付費買到的只是心理安慰。檢查方法：打開基金月報的前十大持股，跟指數前十大對照——重疊率一眼可見。':
    ' = low Active Share (say &lt;60%) + low TE, yet charging a 1.5% active-management fee. Their mathematical fate: return ≈ index − high fees = a certain long-run loss (the arithmetic from W16); what investors pay for is only psychological comfort. How to check: open the fund\'s monthly report, take its top ten holdings, and compare them with the index\'s top ten — the overlap is visible at a glance.',
  '核心真被動、衛星真主動——最該避開的是中間：半主動的費用、被動的成績。':
    'A truly passive core, truly active satellites — the one to avoid is the middle: the fees of active, the results of passive.',
  '櫃子稽查器':
    'Closet-indexer inspector',
  '輸入一檔基金的 Active Share、追蹤誤差與經理費，看它落在光譜的哪一格——以及十年下來費用吃掉多少。':
    'Enter a fund\'s Active Share, tracking error, and management fee to see which slot of the spectrum it falls in — and how much fees eat up over ten years.',
  '年化追蹤誤差':
    'Annualized tracking error',
  '年費用率':
    'Annual fee rate',
  '判定':
    'Verdict',
  '光譜位置':
    'Position on the spectrum',
  '10 年費用拖累':
    '10-year fee drag (NT$10k)',
  '100 萬、指數年 7% 為例':
    'Example: NT$1,000,000, index returning 7% a year',
  '4. 給自己的組合定座標':
    '4. Setting coordinates for your own portfolio',
  '你的模擬組合基準（依 W18 IPS，例：70% 全球股＋30% 債）應是':
    'Your paper portfolio\'s benchmark (per the W18 IPS, e.g. 70% global stocks + 30% bonds) should be a ',
  '複合基準':
    'composite benchmark',
  '＝ 0.7 × 全球股票報酬指數 ＋ 0.3 × 債券指數。每月月報固定揭露':
    ': Rb = 0.7 × global equity total return index + 0.3 × bond index. Every monthly report always discloses the ',
  '五個數字':
    'five numbers',
  '：組合報酬、複合基準報酬、超額、累積 TE、IR——讓「自我感覺」無所遁形。':
    ': portfolio return, composite benchmark return, excess return, cumulative TE, and IR — leaving "self-perception" nowhere to hide.',
  '個人投資者做這件事的真正目的：兩三年後，你會有一份誠實的紀錄回答「我的主動操作，到底有沒有付得起自己的機會成本」——絕大多數人一輩子沒讓自己面對這個數字。':
    'The real purpose of doing this as an individual investor: two or three years from now you will have an honest record that answers "does my active management actually pay for its own opportunity cost?" — most people never in their lives make themselves face this number.',
  '5. 常見誤解闢謠':
    '5. Common misconceptions, debunked',
  '「贏大盤就是厲害。」':
    '"Beating the market means you\'re great."',
  '先問：哪個大盤？含息嗎？同幣別嗎？風險調整後呢（W29）？連續幾年（W38）？五關全過才算數。':
    'First ask: which market? Does it include dividends? Is it in the same currency? What about after adjusting for risk (W29)? How many years in a row (W38)? Only if it passes all five checks does it count.',
  '「TE 低＝安全。」':
    '"Low TE means safe."',
  'TE 量的是相對基準的偏離，不是絕對風險；基準本身崩 40% 時，TE 0.1% 的指數基金一樣崩 40%。相對安穩 ≠ 絕對安穩——絕對風險歸 W28 的 MDD 管。':
    'TE measures deviation relative to the benchmark, not absolute risk; when the benchmark itself falls 40%, an index fund with a TE of 0.1% falls 40% too. Relatively steady ≠ absolutely steady — absolute risk is handled by W28\'s MDD.',
  '「高 Active Share＝會贏。」':
    '"High Active Share means you\'ll win."',
  '它只是「有贏的可能」的必要條件（不偏離就不可能超額），不是充分條件——偏離的方向還得對。':
    'It is only a necessary condition for "having a chance to win" (with no deviation there can be no excess return), not a sufficient one — the direction of the deviation has to be right too.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '持續性才是稀有財':
    'Persistence is the scarce commodity',
  '35 分鐘':
    '35 min',
  '30 分鐘':
    '30 min',
  '專看「持續性」：過去五年前 25% 的基金，之後五年還留在前 25% 的比例——接近隨機。「連續贏」比「贏過」稀有得多。':
    'Look only at "persistence": of the funds in the top 25% over the past five years, what share stayed in the top 25% over the next five — close to random. "Winning repeatedly" is far rarer than "having won."',
  '15 分鐘':
    '15 min',
  '證交所指數頁：找到「發行量加權股價報酬指數」':
    'TWSE index page: find the "TAIEX Total Return Index"',
  '對照普通加權指數同期差距，親眼確認含息差 3–4 個百分點／年的量級。':
    'Compare it with the ordinary TAIEX over the same period and confirm with your own eyes the 3–4 percentage points a year that dividends add. ',
  '臺灣證券交易所 ↗':
    'Taiwan Stock Exchange ↗',
  '選讀':
    'Optional',
  'Active Share 的原始研究——它把「主動」拆成選股與因子押注兩個維度。':
    'The original research on Active Share — it splits "active" into two dimensions: stock picking and factor bets.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '座標定位三連發':
    'A three-part coordinates workout',
  '任務 A｜模擬組合的正式基準（25 分鐘）':
    'Task A | The paper portfolio\'s formal benchmark (25 minutes)',
  '依 IPS 權重寫下複合基準公式——成分指數要':
    'Write out the composite-benchmark formula from your IPS weights — the component indexes must be the ',
  '含息':
    'dividend-inclusive',
  '版本，註明代號與查詢處':
    ' versions, with the ticker and where you looked it up noted',
  '回算組合上線以來的累積超額、TE（資料短就用週頻）、IR':
    'Back-calculate the cumulative excess return, TE (use weekly frequency if the data is short), and IR since the portfolio went live',
  '用講義算例的 12 個月序列手算一次，重現 TE ≈ 1.11%、IR ≈ 1.26':
    'Calculate by hand the 12-month series from the notes\' worked example and reproduce TE ≈ 1.11% and IR ≈ 1.26',
  '把五個數字加進月報模板':
    'Add the five numbers to the monthly report template',
  '任務 B｜櫃子稽查（20 分鐘）':
    'Task B | Closet inspection (20 minutes)',
  '挑一檔台灣的主動型台股基金：月報抓前十大持股，與台灣 50 指數前十大對照重疊度、查經理費，丟進上面的稽查器，寫三行判決':
    'Pick an actively managed Taiwan stock fund: take its top ten holdings from the monthly report, compare the overlap with the top ten of the Taiwan 50 index, look up its management fee, drop them into the inspector above, and write a three-line verdict',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '算例用樣本標準差：0.3215% × √12 ＝ 1.114%；1.4 ÷ 1.114 ＝ 1.257。用母體標準差會得到 1.07%——差異不大，但要知道自己用的是哪個。':
    'The worked example uses the sample standard deviation: 0.3215% × √12 = 1.114%; 1.4 ÷ 1.114 = 1.257. The population standard deviation would give 1.07% — not a big difference, but know which one you used.',
  '複合基準寫入月報模板（含息指數、有出處）':
    'The composite benchmark is written into the monthly report template (dividend-inclusive indexes, with sources)',
  '講義 TE／IR 算例手算重現':
    'The notes\' TE / IR worked example reproduced by hand',
  '櫃子稽查完成且有判決理由':
    'The closet inspection is done, with reasons for the verdict',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼「事先指定」是基準的鐵律？':
    'Why is "specified in advance" an iron rule for benchmarks?',
  '→ 因為':
    '→ Because ',
  '事後':
    'after the fact',
  '永遠找得到一個輸給自己的指數——比較就失去證偽能力。事先寫進 IPS 的基準是「賭注下定」：贏了才算數、輸了逃不掉。':
    ' you can always find an index that your portfolio loses to — and then the comparison loses its power to be proven wrong. A benchmark written into the IPS in advance is a "bet placed": if you win it counts, and if you lose there\'s no escaping.',
  '一檔 TE 5%、IR −0.3，另一檔 TE 0.8%、IR 0.2——各說明什麼？':
    'One fund has a TE of 5% and an IR of −0.3; another has a TE of 0.8% and an IR of 0.2 — what does each tell you?',
  '→ 前者：':
    '→ The former: ',
  '大幅偏離且偏錯方向':
    'strays far and in the wrong direction',
  '——主動而無能，最貴的組合。後者：幾乎不偏離、小贏——可能是優秀的增強指數，也可能只是低費率加一點運氣；先查費用與期間再判斷。':
    ' — active and incompetent, the most expensive combination. The latter: barely strays and wins a little — it may be an excellent enhanced index, or just low fees plus a bit of luck; check the fees and the period before judging.',
  '為什麼台股績效比較必須用報酬指數？差多少量級？':
    'Why must Taiwan stock performance comparisons use the total return index? By how much does it differ?',
  '→ 現金股利在除息日從價格指數中消失（W10 的除息機制），但投資人實際拿到了——不含息指數系統性低估真實報酬。每年 3–4 個百分點，十年複利下來是 34–48 個百分點的差距。':
    '→ Cash dividends vanish from the price index on the ex-dividend date (the ex-dividend mechanism from W10), but investors really received them — an index without dividends systematically understates the true return. At 3–4 percentage points a year, compounded over ten years that is a gap of 34–48 percentage points.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '量身高的尺':
    'The ruler for measuring height',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（量身高的尺）':
    'Opening (the ruler for measuring height)',
  '「小孩說『我籃球贏了隔壁小學的』——你會先問什麼？」（對方幾年級？）「比較要有意義，':
    '"Your child says, \'I beat the kids from the elementary school next door at basketball\' — what do you ask first?" (What grade were they in?) "For a comparison to mean anything, ',
  '對手要選對':
    'you have to pick the right opponent',
  '。投資成績也一樣：說『我贏大盤』的人，要先看他拿哪把尺量。」':
    '. Investment results work the same way: when someone says \'I beat the market,\' first look at which ruler they measured with."',
  '核心揭祕（含息的把戲）':
    'The core reveal (the dividend trick)',
  '「台股有兩個大盤指數：一個不算股利、一個算。差多少？':
    '"Taiwan has two market indexes: one that leaves out dividends and one that counts them. How big is the gap? ',
  '每年差 3 到 4%':
    'About 3 to 4% a year',
  '。所以有人拿不含股利的那個來比，年年『打敗大盤』——其實只是把尺鋸短了。我們家的模擬帳戶，用的是算股利的那把正版尺。」':
    '. So someone who compares against the one without dividends \'beats the market\' every year — when really they\'ve just sawed the ruler short. Our family\'s simulated account uses the genuine ruler, the one that counts dividends."',
  '互動（櫃子裡的指數基金）':
    'Interaction (the closet index fund)',
  '「還有一種基金：收你昂貴的『主動管理費』，但打開一看，買的跟大盤前十名幾乎一樣。這像什麼？」':
    '"There\'s another kind of fund: it charges you an expensive \'active-management fee,\' but when you open it up, what it holds is almost the same as the market\'s top ten. What does that remind you of?"',
  '讓家人接——像付私廚的錢吃到便利商店便當。防身術：看基金前十大持股，跟 0050 對一下，三分鐘識破。':
    'Let your family take it from here — like paying for a private chef and getting a convenience-store lunch box. Self-defense: look at the fund\'s top ten holdings, compare with 0050, and you can see through it in three minutes.',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那基金經理人都在騙？」':
    '"So are fund managers all cheating?"',
  '「不是都，但結構誘因存在：貼著指數不會大輸（保住工作），費用照收——所以要自己看，不能只聽。」':
    '"Not all of them, but the structural incentive exists: hugging the index means you never lose big (you keep your job) while the fees keep coming — so you have to look for yourself, not just listen."',
  '「我們的模擬帳戶現在贏還輸？」':
    '"Is our simulated account winning or losing right now?"',
  '誠實揭露五數字，並強調「一個月看不出什麼，我們看的是兩年後的累積紀錄」。':
    'Disclose the five numbers honestly, and stress: "A single month doesn\'t tell us much; what we look at is the cumulative record two years from now."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能背出好基準三條件':
    'You can recite the three conditions for a good benchmark',
  '模擬組合五數字（報酬／基準／超額／TE／IR）入月報模板':
    'The paper portfolio\'s five numbers (return / benchmark / excess / TE / IR) are in the monthly report template',
  '能解釋 TE 與 Active Share 各量什麼、櫃子基金為何必輸':
    'You can explain what TE and Active Share each measure, and why closet index funds must lose',
  '分享環節完成（含息尺＋櫃子防身術），記錄卡住的點':
    'Teaching session done (the dividend ruler + closet-index self-defense); note where you got stuck',
  '回填 curriculum/01-overview.md 第 31 週進度欄':
    'Fill in the Week 31 progress column in curriculum/01-overview.md',
  '下週預告 · Week 32：因子投資':
    'Next week\'s preview · Week 32: Factor investing',
  '——你的「選股 alpha」有沒有可能只是「買了便宜股／小型股」的系統性曝險？Fama-French 給你一副更鋒利的眼鏡。':
    ' — could your "stock-picking alpha" just be systematic exposure to having "bought cheap stocks / small caps"? Fama-French gives you a sharper pair of glasses.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：Brinson 歸因':
    'Previous week: Brinson attribution',
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
  '宣稱超額':
    'Claimed excess return',
  '追蹤誤差':
    'Tracking error',
  '答對了——「加權指數」不含股利，而台股殖利率長期 3–4%。拿不含息的指數來比，3% 的「超額」幾乎就是股利本身。換成含息的報酬指數，他大概只是打平。':
    'Correct — the "TAIEX" leaves out dividends, while Taiwan stocks have yielded 3–4% over the long run. Compare against an index without dividends and a 3% "excess" is almost entirely just the dividends. Switch to the total return index and he has probably just about broken even.',
  '先別急著下結論：「加權指數」不含股利，而台股殖利率長期 3–4%。拿不含息的指數比，3% 的「超額」幾乎就是股利本身——換成含息的報酬指數，他大概只是打平。尺錯了，什麼結論都不成立。':
    'Don\'t jump to conclusions yet: the "TAIEX" leaves out dividends, while Taiwan stocks have yielded 3–4% over the long run. Compare against an index without dividends and a 3% "excess" is almost entirely just the dividends — switch to the total return index and he has probably just about broken even. With the wrong ruler, no conclusion holds.',
  '年':
    'years',
  '<b>沒有股利時兩把尺一樣長。</b>把殖利率拉上去，看差距怎麼複利放大。':
    '<b>With no dividends, the two rulers are the same length.</b> Raise the yield and watch the gap compound.',
  '年下來，兩把尺差了':
    'years in, the two rulers differ by',
  '個百分點。</b>':
    'percentage points.</b>',
  '扣掉股利後仍有':
    'After stripping out dividends, there is still a real excess return of',
  '% 的真實超額——這才是能拿出來講的成績。':
    '% — this is the result you can actually stand behind.',
  '宣稱的「贏':
    'The claimed "win of',
  '%」換成正版尺其實是輸':
    '%" turns out, on the genuine ruler, to be a loss of',
  '%——只是把尺鋸短了。':
    '% — you just sawed the ruler short.',
  '宣稱的超額幾乎全部是股利——換成正版尺，大概只是打平。':
    'The claimed excess return is almost entirely dividends — on the genuine ruler, you\'ve probably just about broken even.',
  '真被動':
    'Truly passive',
  '貴的被動':
    'Expensive passive',
  '<b>好的核心持股長這樣。</b>幾乎完全複製、費用低廉——你買到的就是指數本身。':
    '<b>This is what a good core holding looks like.</b> Almost a perfect copy, with low fees — what you buy is the index itself.',
  '<b>複製得很像，費用卻偏高。</b>同樣的指數暴露，市面上通常有更便宜的版本。':
    '<b>A close copy, but the fees are on the high side.</b> For the same index exposure, there is usually a cheaper version on the market.',
  '櫃子指數':
    'Closet index fund',
  '增強指數':
    'Enhanced index',
  '<b>收主動的費、做被動的事。</b>持股跟指數大量重疊、偏離又小——報酬 ≈ 指數 − 費用，長期的數學宿命是輸。這是光譜上最該避開的中間地帶。':
    '<b>Charging active fees to do passive work.</b> Holdings overlap heavily with the index and the deviation is small — return ≈ index − fees, and the mathematical fate over the long run is to lose. This is the middle ground on the spectrum that you most want to avoid.',
  '<b>偏離小、費用也低——可以接受的增強指數。</b>它不承諾大贏，也沒收大錢。':
    '<b>Small deviation and low fees too — an acceptable enhanced index.</b> It doesn\'t promise a big win, and it doesn\'t charge big money either.',
  '真主動':
    'Truly active',
  '<b>大幅偏離指數——至少給了自己贏的可能。</b>但高 Active Share 只是必要條件不是充分條件：偏離的方向對不對，要看 IR 與多年的紀錄（W38）。適合放在衛星部位。':
    '<b>Strays far from the index — at least giving itself a chance to win.</b> But a high Active Share is a necessary condition, not a sufficient one: whether the direction of the deviation is right depends on IR and a multi-year record (W38). A good fit for the satellite portion.',
  '萬':
    '',
  '✓ 座標定好了——下週戴上因子眼鏡，看你的 alpha 是不是只是風格。':
    '✓ Coordinates are set — next week we put on the factor glasses and see whether your alpha is just a style.',
};
