/*
 * 給家人的投資課 Week 39：Q3 期末專題——模擬組合風險月報 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-39-q3-capstone-report.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 飲料店統一譯為 drinks shop（沿用 W3–W12 既有譯法）；JS 算出的「萬／億」後綴依 W17／W27 慣例清空並把單位掛到標籤上。
 */
export const KEEP = [];
export const ADDED = [];
export const INCOMPLETE = false;
export const MAP = {
  '← 課程首頁':
    '← Course home',
  '① 手冊':
    '① Handbook',
  '② 導讀':
    '② Reading',
  '③ 練習':
    '③ Exercise',
  '④ 分享':
    '④ Teach it',
  '⑤ 檢核':
    '⑤ Checklist',
  '給家人的投資課 · Q3 操盤手季 · Week 39 · 期末專題':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 39 · Capstone project',
  'Q3 期末專題——模擬組合風險月報':
    'Q3 Capstone Project — the Paper Portfolio\'s Monthly Risk Report',
  '十二週裝的每個模組——報酬、風險、比率、歸因、基準、執行、日誌——本週組裝成':
    'Every module you built over twelve weeks — returns, risk, ratios, attribution, benchmarks, execution, the journal — gets assembled this week into ',
  '一份專業格式的月度報告':
    'a professionally formatted monthly report',
  '。這是基金經理人每月對投資人交代的文件，也是你之後每月固定產出的紀律儀式。寫得出這份報告，「操盤手」三個字就從志向變成了技能。':
    '. This is the document a fund manager hands to investors every month, and it will be your regular monthly discipline ritual from now on. Once you can write this report, "portfolio manager" stops being an ambition and becomes a skill.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 27–38 週全部':
    'Prerequisites: all of Weeks 27–38',
  '52 週 · 第 39 週':
    '52 weeks · Week 39',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'Q3 的期末考。操盤手交出月報；投資人學會讀懂任何一份基金月報；說書人第一次以「經理人」身分向家人做正式報告。':
    'The Q3 final exam. The portfolio manager hands in the monthly report; the investor learns to read any fund\'s monthly report; the storyteller gives the family a formal report for the first time, as "the manager".',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的四象限審判——你找到自己的僥倖格了嗎？':
    'Look back at last week\'s four-quadrant courtroom — did you find your own dumb-luck boxes?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一份好的基金月報，第一頁最上面應該放什麼？':
    'What should go at the very top of the first page of a good fund monthly report?',
  '績效最好看的數字':
    'The best-looking performance number',
  '一段話摘要，壞消息先講':
    'A one-paragraph summary, with the bad news first',
  '完整的持股明細':
    'The full list of holdings',
  '區塊 ① ／ 月報組裝手冊 · 約 1 小時':
    'Block ① / Report assembly handbook · about 1 hour',
  '月報的定位：對投資人的誠實交代':
    'What the report is for: an honest account to your investors',
  '這裡的投資人，是家人，也是未來的自己。專業月報的靈魂不是炫耀績效，是':
    'The "investors" here are your family, and your future self. The soul of a professional report is not showing off performance, it is ',
  '讓讀者三分鐘內知道：錢怎麼樣了、為什麼、接下來看什麼':
    'letting the reader know within three minutes how the money is doing, why, and what to watch next',
  '。壞月報報喜藏憂、堆砌術語；好月報壞消息先講，每個數字都有對照——對基準、對上月、對容忍值。':
    '. A bad report announces good news and hides worries, and piles on jargon; a good report puts the bad news first and gives every number a comparison — against the benchmark, against last month, against the tolerance.',
  '七節結構：全部是舊零件':
    'Seven sections: all old parts',
  '節':
    'Section',
  '內容':
    'What it covers',
  '模組來源':
    'Source module',
  '① 組合快照':
    '① Portfolio snapshot',
  '目前配置 vs IPS 目標（表＋偏離百分點）；偏離超限了嗎？再平衡了嗎？':
    'Current allocation vs IPS target (table + deviation in percentage points); is any deviation over the limit? Did you rebalance?',
  '② 績效':
    '② Performance',
  '本月／累積報酬（時間加權）、基準、超額；五數字表（報酬／基準／超額／追蹤誤差／資訊比率）':
    'Monthly / cumulative return (time-weighted), benchmark, excess return; the five-number table (return / benchmark / excess / tracking error / information ratio)',
  '③ 風險':
    '③ Risk',
  '年化波動、最大回撤、95% VaR 金額，對照 IPS 容忍值':
    'Annualized volatility, maximum drawdown, 95% VaR in money terms, against the IPS tolerance',
  '④ 風險調整':
    '④ Risk-adjusted',
  'Sharpe／Sortino（累積期間）':
    'Sharpe / Sortino (cumulative period)',
  '⑤ 歸因':
    '⑤ Attribution',
  '本月超額 ＝ 配置 ＋ 選股 ＋ 交互（要勾稽）':
    'This month\'s excess return = allocation + selection + interaction (must reconcile)',
  '⑥ 操作與日誌摘要':
    '⑥ Trades and journal summary',
  '本月交易清單（含執行落差）、違規標記、四象限增量':
    'This month\'s trade list (with execution gap), rule-violation flags, new four-quadrant entries',
  '⑦ 展望與觀察清單':
    '⑦ Outlook and watch list',
  '溫度計讀數、下月觀察 3 件事、觸發條件監控狀態':
    'Thermometer reading, 3 things to watch next month, status of trigger-condition monitoring',
  '格式紀律':
    'Format discipline',
  '：2–3 頁、每節先結論後數字、壞消息不縮排不藏尾。第一頁頂部放':
    ': 2–3 pages, conclusion before numbers in every section, bad news neither indented nor buried at the end. At the top of page one, put ',
  '一段話摘要':
    'a one-paragraph summary',
  '：本月組合 ＿%（基準 ＿%），主因 ＿＿；風險狀態 ＿＿；下月關注 ＿＿。':
    ': this month the portfolio ____% (benchmark ____%), mainly because ____; risk status ____; next month\'s focus ____.',
  '下面這台工具做兩件事：檢查最容易出錯的':
    'The tool below does two things: it checks the thing most likely to go wrong — ',
  '勾稽':
    'reconciliation',
  '（數字之間必須對得起來），並替你起草那段摘要。':
    ' (the numbers must tie out) — and it drafts that summary for you.',
  '月報勾稽台＋摘要起草':
    'Monthly report reconciliation desk + summary drafter',
  '預設是一份範例月報的數字。換成你自己的，看哪一項對不起來。（單位：%，金額：萬）':
    'The defaults are the numbers of a sample report. Swap in your own and see which line fails to tie out. (Units: %; amounts in NT$10k)',
  '本月組合報酬':
    'Portfolio return this month',
  '本月基準報酬':
    'Benchmark return this month',
  '配置效果':
    'Allocation effect',
  '選股效果':
    'Selection effect',
  '交互效果':
    'Interaction effect',
  '股票權重':
    'Stock weight',
  '債券權重':
    'Bond weight',
  '現金權重':
    'Cash weight',
  'IPS 股票目標':
    'IPS stock target',
  '95% VaR（月，萬）':
    '95% VaR (monthly, NT$10k)',
  '最大回撤（%）':
    'Maximum drawdown (%)',
  'IPS 回撤容忍（%）':
    'IPS drawdown tolerance (%)',
  '主因（一句話）':
    'Main reason (one sentence)',
  '下月關注（一句話）':
    'Next month\'s focus (one sentence)',
  '自評 Rubric（10 分制）':
    'Self-assessment rubric (10-point scale)',
  '每項 0／1／2 分，':
    'Each item scores 0 / 1 / 2 points, ',
  '8 分以上＝Q3 畢業':
    '8 or more = Q3 graduate',
  '。分數會存在這個瀏覽器，下個月可以回來比較。':
    '. Your score is saved in this browser, so you can come back next month and compare.',
  'Rubric 自評表':
    'Rubric self-assessment',
  '七節齊全、數字互相勾稽（歸因加總＝超額；權重加總＝100%）':
    'All seven sections present, and the numbers reconcile (attribution total = excess return; weights total = 100%)',
  '每個數字都有對照物（基準／上月／容忍值），沒有裸數字':
    'Every number has something to compare against (benchmark / last month / tolerance); no bare numbers',
  '壞消息出現在第一頁（若有）':
    'Bad news appears on page one (if there is any)',
  '家人測試通過（見分享環節的三題）':
    'Passes the family test (the three questions in the teach-it block)',
  '30 分鐘內可重複產出（模板化完成，下月不用重新發明）':
    'Can be reproduced within 30 minutes (the template is finished, so next month you don\'t reinvent it)',
  '總分':
    'Total score',
  '8 分以上畢業':
    '8 or more to graduate',
  '逐項給分。':
    'Score each item.',
  '之後的節奏（寫進行事曆）':
    'The rhythm from here on (put it on your calendar)',
  '每月固定日':
    'A fixed day each month',
  '（建議月初第一個週末）：更新估值 → 跑模組 → 產出月報 → 月度小複盤（W38）→ 向家人 10 分鐘報告':
    ' (suggested: the first weekend of the month): update valuations → run the modules → produce the report → monthly mini-review (W38) → give your family a 10-minute report',
  '每季':
    'Every quarter',
  '：加跑大複盤（W38）＋溫度計更新（W25）＋壓測複驗（W37）':
    ': also run the deep review (W38) + thermometer update (W25) + stress-test recheck (W37)',
  '這個節奏持續到 W52 年度驗收——屆時你手上會有一疊自己的月報，那是任何課程都給不了的資產':
    'This rhythm carries on until the W52 annual review — by then you will have a stack of your own monthly reports, an asset no course can give you',
  '區塊 ② ／ 必讀導讀 · 約 30 分鐘':
    'Block ② / Required reading · about 30 minutes',
  '組裝前的盤點':
    'Inventory before assembling',
  '20 分鐘':
    '20 min',
  '回顧自己 W27–38 的所有模組':
    'Review all of your W27–38 modules',
  '逐一確認可用：報酬序列、風險模組、比率、歸因表、五數字、日誌——本週是組裝，不是新建。':
    'Confirm one by one that each is usable: return series, risk module, ratios, attribution table, five numbers, journal — this week is assembly, not building from scratch.',
  '10 分鐘':
    '10 min',
  '找一份真實基金月報當範本':
    'Find a real fund monthly report to use as a model',
  '從任一投信官網下載一檔基金的月報，看它的版面節奏——也順便用 W31 與 W35 的眼睛挑毛病：基準誠實嗎？費用揭露了嗎？':
    'Download one fund\'s monthly report from any fund house\'s website and look at the pace of its layout — and pick it apart with the eyes of W31 and W35: is the benchmark honest? Are the fees disclosed?',
  '區塊 ③ ／ 練習 · 約 2.5 小時':
    'Block ③ / Exercise · about 2.5 hours',
  '產出第一份月報':
    'Produce your first monthly report',
  '任務 A｜模板化（40 分鐘）':
    'Task A | Templating (40 minutes)',
  '建立月報模板（文件或試算表匯出）：七節框架＋固定表格。':
    'Build the report template (a document or a spreadsheet export): the seven-section framework plus fixed tables.',
  '目標是下個月只需要填數字。':
    'The goal is that next month you only need to fill in the numbers.',
  '任務 B｜首份月報（1.5 小時）':
    'Task B | The first report (1.5 hours)',
  '用模擬組合至今的真實數據跑齊七節。資料月數不足的指標（如年化 Sharpe）標註「期間過短，僅供追蹤」——':
    'Run all seven sections with the paper portfolio\'s real data so far. Mark any metric without enough months of data (such as annualized Sharpe) as "period too short, for tracking only" — ',
  '不要假裝有統計意義':
    'don\'t pretend it is statistically meaningful',
  '檢查勾稽：歸因加總＝超額；權重加總＝100%；最大回撤與估值頁一致':
    'Check the reconciliations: attribution total = excess return; weights total = 100%; maximum drawdown matches the valuation page',
  '寫一段話摘要（最後才寫）':
    'Write the one-paragraph summary (last)',
  'Rubric 自評':
    'Rubric self-assessment',
  '任務 C｜行事曆（10 分鐘）':
    'Task C | Calendar (10 minutes)',
  '設定每月產出日＋每季大複盤日的重複提醒。':
    'Set recurring reminders for the monthly report day and the quarterly deep-review day.',
  '紀律的最後一哩是行事曆，不是意志力。':
    'The last mile of discipline is the calendar, not willpower.',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '勾稽台預設的範例數字必須全部打勾：超額 +0.60%、歸因加總 +0.60%、權重 100%、股票偏離目標 −2 個百分點。把選股效果改成 0.5，歸因那一項必須亮紅燈（差 0.10 個百分點）。':
    'The sample numbers preset on the reconciliation desk must all show ticks: excess return +0.60%, attribution total +0.60%, weights 100%, stock weight −2 percentage points from target. Change the selection effect to 0.5 and the attribution line must light red (off by 0.10 percentage points).',
  '模板完成（下月可 30 分鐘重複產出）':
    'Template finished (next month\'s report can be produced in 30 minutes)',
  '月報 v1 完成且勾稽通過':
    'Report v1 finished and reconciled',
  '行事曆節奏設定完成':
    'Calendar rhythm set up',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '第一次基金經理人報告':
    'Your first fund manager\'s report',
  'Q3 的總驗收：用月報第一頁，向家人做 10 分鐘正式報告。':
    'The Q3 final check: use page one of the report to give your family a formal 10-minute report.',
  '開場定位':
    'Opening and positioning',
  '「我現在是我們家模擬基金的經理人，這是第一份月報。以後每個月一次。」':
    '"I am now the manager of our family\'s simulated fund, and this is the first monthly report. From now on, once a month."',
  '報告順序':
    'Order of the report',
  '一段話摘要 → 五數字表（翻譯成：賺多少／大盤多少／贏輸多少）→ 風險狀態（':
    'One-paragraph summary → five-number table (translated into: how much we made / how much the market made / who won and by how much) → risk status (',
  '用金額講':
    'speak in money',
  '）→ 本月做了什麼、為什麼 → 下月看什麼。':
    ') → what we did this month and why → what to watch next month.',
  '家人測試（Rubric 的一項）':
    'The family test (one item of the rubric)',
  '報告完請家人回答三題：①這個月是贏還是輸「那把尺」？②最大的風險數字是多少錢？③經理人下個月在關注什麼？':
    'After the report, ask your family three questions: (1) Did we beat or lose to "the yardstick" this month? (2) How much money is the biggest risk number? (3) What is the manager watching next month?',
  '三題全答對＝報告合格；答不出的部分＝你講太快或用了行話，重講。':
    'All three answered correctly = the report passes; any part they can\'t answer = you went too fast or used jargon, so say it again.',
  '結尾':
    'Closing',
  '「有任何問題，隨時可以查帳——日誌全部都在。」透明是經理人對投資人的第一美德；W35 的反面教材看多了，正面示範從自家開始。':
    '"If you have any questions, you can check the books at any time — the journal is all there." Transparency is the manager\'s first virtue toward investors; after seeing so many bad examples in W35, the good example starts at home.',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「才一個月看得出什麼？」':
    '"What can you possibly see in just one month?"',
  '「完全正確！所以報告裡短期指標都標了『僅供追蹤』——我們看的是十二個月後那疊報告的趨勢。這個月的重點是流程跑通。」':
    '"Exactly right! That is why every short-term metric in the report is marked \'for tracking only\' — what we watch is the trend of that stack of reports twelve months from now. This month\'s point is getting the process to run."',
  '「什麼時候用真錢？」':
    '"When do we use real money?"',
  '「等這套流程連續跑順幾個月，而且 Q4 學完稅務（W50）——工具都在了，剩下的是驗證紀律。」':
    '"When this process has run smoothly for several months in a row, and after we finish Q4\'s tax material (W50) — the tools are all there, and what remains is proving the discipline."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '月報 v1 完成（七節勾稽、Rubric ≥ 8）':
    'Report v1 finished (seven sections reconciled, rubric ≥ 8)',
  '模板化完成＋行事曆節奏設定':
    'Template finished + calendar rhythm set up',
  '家人測試三題通過':
    'Passed the three family-test questions',
  '回填 curriculum/01-overview.md 第 39 週進度欄＋里程碑打勾':
    'Fill in the Week 39 progress column of curriculum/01-overview.md and tick the milestone',
  'Q3 畢業 · 下週進入 Q4 財務長季':
    'Q3 graduate · next week we enter Q4 The CFO\'s Quarter',
  '——換到桌子的另一邊：從「評價公司的人」，變成「替公司做財務決策的人」。':
    ' — move to the other side of the table: from the person who "evaluates companies" to the person who "makes financial decisions for a company".',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：日誌與複盤':
    'Previous week: The journal and the review',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle light / dark theme',
  '猜一個答案':
    'Pick an answer',
  '選股貢獻為主，半導體持股優於大盤':
    'stock selection contributed most, with the semiconductor holdings beating the market',
  '兩檔持股財報、股票比例是否回到目標':
    'the two holdings\' earnings reports, and whether the stock weight is back at target',
  '答對了——讀者三分鐘內要知道：錢怎麼樣了、為什麼、接下來看什麼。壞消息先講、每個數字有對照，是好月報和行銷文件的分水嶺。':
    'Correct. The reader should know within three minutes how the money is doing, why, and what to watch next. Putting the bad news first and giving every number a comparison is the dividing line between a good monthly report and a marketing document.',
  '好月報的第一頁是一段話摘要：錢怎麼樣了、為什麼、接下來看什麼——而且壞消息先講。把最好看的數字放最上面，那是行銷文件，不是月報。':
    'The first page of a good monthly report is a one-paragraph summary: how the money is doing, why, and what to watch next — with the bad news first. Putting the best-looking number at the top is a marketing document, not a monthly report.',
  '歸因勾稽：配置 ＋ 選股 ＋ 交互 ＝':
    'Attribution check: allocation + selection + interaction =',
  '%，超額 ＝':
    '%, excess return =',
  '——差':
    ' — off by',
  '個百分點，回頭查歸因表':
    'percentage points; go back and check the attribution table',
  '權重加總 ＝':
    'Weights add up to',
  '——快照表必須是 100%':
    ' — the snapshot table must total 100%',
  '股票偏離 IPS 目標':
    'Stock weight vs IPS target:',
  '個百分點':
    'percentage points',
  '（再平衡帶 ±5 內）':
    ' (within the ±5 rebalancing band)',
  '——超出 ±5 再平衡帶，報告要寫是否已再平衡':
    ' — outside the ±5 rebalancing band; the report must say whether you have rebalanced',
  '最大回撤':
    'Maximum drawdown',
  '%，IPS 容忍':
    '%, IPS tolerance',
  '——已超過容忍值，這是第一頁的壞消息':
    ' — beyond the tolerance, which is the bad news for page one',
  '% 已超過 IPS 容忍值':
    '% has exceeded the IPS tolerance of',
  '%，在 IPS 容忍值':
    '%, within the IPS tolerance of',
  '% 之內':
    '%',
  '<b>一段話摘要：</b>本月組合':
    '<b>One-paragraph summary:</b> This month the portfolio returned',
  '%（基準':
    '% (benchmark',
  '超額':
    'ahead of the benchmark by',
  '落後':
    'behind the benchmark by',
  '個百分點，主因':
    'percentage points, mainly because ',
  '。風險狀態：':
    '. Risk status:',
  '；月 95% VaR 約':
    '; monthly 95% VaR is about',
  '萬。下月關注：':
    '(NT$10k). Next month\'s focus: ',
  '<br><span class=\\"muted\\">⚠ 還有':
    '<br><span class="muted">⚠',
  '項勾稽沒過——數字對不起來的月報，摘要寫得再好也不能發。</span>':
    'reconciliation line(s) failed — a report whose numbers don\'t tie out must not go out, however well the summary is written.</span>',
  '第':
    'Item',
  '項給':
    'score:',
  '分':
    'points',
  '分——Q3 畢業。</b>':
    'points — Q3 graduate.</b>',
  '項還有進步空間，下個月的月報先補它。':
    '— room to improve; tackle these first in next month\'s report.',
  '滿分。下個月的挑戰是：30 分鐘內再做一次。':
    'Full marks. Next month\'s challenge: do it again within 30 minutes.',
  '分，還差':
    'points,',
  '分。</b>先補分數最低的項目：第':
    'more to go.</b> Start with the weakest areas, listed here by item number:',
  '項。':
    '',
  '✓ Q3 畢業——你已具備管理一個組合的完整衡量與紀律體系。下週進入 Q4。':
    '✓ Q3 graduate — you now have a complete system of measurement and discipline for managing a portfolio. Next week we enter Q4.',
};
