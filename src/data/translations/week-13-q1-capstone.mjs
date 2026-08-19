/*
 * 給家人的投資課 Week 13：Q1 Capstone——20 分鐘財報健檢 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-13-q1-capstone.html
 *
 * 沿用 week-01 的慣例（金額單位、行內標記空白、語域）。本週特有的幾件事：
 *
 * ⚠ 這一週沒有金額欄位與計算機，所以「萬」的規則用不到；
 *   時間單位「分」在這頁一律是「分鐘」（時間軸與導讀的閱讀時間），統一譯 min。
 *
 * ⚠ 台灣機構用官方英文名：
 *   公開資訊觀測站 = MOPS（Market Observation Post System，TWSE 官方英文名）
 *   財報狗 = Statementdog（該站自己的英文品牌名）
 *   兩者都查得到官方英文，所以 KEEP 為空。
 *
 * ⚠ 一頁報告模板（<pre>）：中文用【】與全形符號，英文改成 [ ] 與半形 % ＝ ｜，
 *   但保留全形底線 ＿ 當填空格——它比半形寬，貼進筆記工具時欄位才對得齊。
 *
 * ⚠ 行內標記邊界：本週有多處 <strong> 把一句話切三段（三條紀律的 ①②③、
 *   Rubric 的「8 分以上＝」、分享腳本的三個比喻）。片段結尾補了半形空白。
 *   `①` 這個編號本身沒有中文、抽取器沒抓，所以 ②③ 後面也不加空白，
 *   才跟未翻譯的 ① 對齊。
 *
 * 語域：這是 Q1 的期末，寫給家人的教材。健檢／掛專科／相親第一印象這些
 *   比喻要保住，不要改寫成分析師的初篩流程文件。
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
  單元導航: 'Section navigation',
  切換深淺主題: 'Toggle light / dark theme',

  /* ── 標題區 ── */
  '給家人的投資課 · Q1 共同地基 · Week 13':
    'Family Investing Course · Q1 Common Ground · Week 13',
  'Q1 Capstone——20 分鐘財報健檢': 'Q1 Capstone — the 20-minute financial check-up',
  '期末考考的不是記憶，是組裝：把週 5–9 的五樣工具，組成一條可重複執行的流程。':
    'The final exam is not about memory, it is about assembly: turning the five tools from weeks 5–9 into one routine you can run again and again.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：週 4–12 全部': 'Prerequisites: weeks 4–12, all of them',
  '52 週 · 第 13 週': '52 weeks · Week 13',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '這條流程是你未來的日常裝備——投資人用它初篩（Q2）、操盤手用它定期複檢持股（Q3）、財務長視角則是「別人會這樣快篩我的公司」（Q4）。':
    'This routine becomes your everyday kit: the investor screens with it (Q2), the trader re-checks holdings with it on a schedule (Q3), and from the CFO\'s chair it reads as "this is how other people will screen my company" (Q4).',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「經濟四季」時對方卡住的點——「股市的春天在經濟的隆冬開始」講通了嗎、擲硬幣的 36% 對方算得出來嗎。然後直接進手冊。':
    'Look back at where your listener got stuck on last week\'s "four seasons of the economy" — did "the market\'s spring starts in the economy\'s deep winter" land, and could they work out the 36% coin-toss figure? Then go straight into the handbook.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '20 分鐘財報健檢，回答的「唯一問題」是哪一個？':
    'What is the one question a 20-minute financial check-up answers?',
  猜一個答案: 'Pick an answer',
  這支股票該不該買: 'Should I buy this stock',
  '值不值得再花 20 小時深入研究': 'Is it worth another 20 hours of digging',
  它明年會不會漲: 'Will it go up next year',
  '答對了——健檢回答的唯一問題是「值不值得再花 20 個小時深入研究」。它的輸出只有三種：通過／不通過／待釐清。「該不該買」是下一季估值的工作，「會不會漲」則沒有人答得出來。':
    'Correct — the only question the check-up answers is "is this worth another 20 hours of digging?" It has just three outputs: pass, fail, needs clarifying. "Should I buy it" is next quarter\'s valuation work, and "will it go up" is something nobody can answer.',
  '不是——「該不該買」與「會不會漲」都不是初篩能回答的。健檢的唯一問題是「值不值得再花 20 個小時深入研究」，輸出只有：通過／不通過／待釐清。把問題縮小，20 分鐘才夠用。':
    'Not that one — neither "should I buy it" nor "will it go up" is something a first screen can answer. The check-up asks one question only: "is this worth another 20 hours of digging?" And the outputs are just pass, fail, needs clarifying. Shrink the question and 20 minutes is enough.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義（流程手冊） · 約 1 小時讀完＋演練':
    'Block ① / Notes (the process handbook) · about 1 hour to read and rehearse',
  '1. 健檢的定位：初篩，不是深度研究':
    '1. What the check-up is for: a first screen, not deep research',
  '20 分鐘健檢的輸出只有三種：': 'A 20-minute check-up has only three outputs: ',
  '通過（繼續研究）／不通過（離開）／待釐清（列出具體疑點再決定）':
    'pass (keep researching) / fail (walk away) / needs clarifying (list the specific doubts, then decide)',
  '。它不回答「該不該買」——那是 Q2 估值與投資論文的工作。就像健康檢查不動手術，只決定要不要掛專科。':
    '. It does not answer "should I buy this" — that is the job of valuation and the investment thesis in Q2. A health check does not perform surgery; it only decides whether you need to see a specialist.',

  '2. 六步驟流程（總計 20 分鐘）': '2. The six-step routine (20 minutes in total)',
  '事前準備（不計時）': 'Preparation (off the clock)',
  '：下載最新年報＋近 5 年關鍵數據（公開資訊觀測站或財報狗）；印出／開啟你的紅旗清單 v1（W8）；設好計時器。':
    ': download the latest annual report plus five years of key figures (from MOPS or Statementdog); print or open your red-flag checklist v1 (W8); set a timer.',
  '點下面的時間軸走一遍流程——每一步都標了它用的是哪一週打造的工具：':
    'Click through the timeline below and walk the whole routine — every step is labelled with the tool you built that week:',

  /* ── 六步驟時間軸 ── */
  '六步驟 · 20 分鐘時間軸': 'Six steps · a 20-minute timeline',
  六個步驟: 'Six steps',
  '0 分': '0 min',
  '10 分': '10 min',
  '20 分': '20 min',
  '← 上一步': '← Previous step',
  '下一步 →': 'Next step →',

  'Step 1｜三表五年掃描': 'Step 1 | Five-year scan of the three statements',
  '第 0–3 分鐘（3 分）': 'Minutes 0–3 (3 min)',
  '工具：W4–7 三表地圖': 'Tool: the W4–7 map of the three statements',
  '只看方向，不算細節：營收 5 年趨勢（成長／持平／衰退）？淨利跟上營收嗎？總資產膨脹速度 vs 營收（資產效率惡化？）？股東權益有沒有異常跳動（增資？虧損侵蝕？）':
    'Direction only, no arithmetic: what is the five-year revenue trend (growing / flat / shrinking)? Is net income keeping up with revenue? Are total assets swelling faster than revenue (asset efficiency getting worse)? Does equity jump around oddly (a share issue? losses eating into it?)',
  '三行「第一印象」': 'Three lines of "first impressions"',

  'Step 2｜利潤率瀑布': 'Step 2 | The margin waterfall',
  '第 3–7 分鐘（4 分）': 'Minutes 3–7 (4 min)',
  '工具：W5': 'Tool: W5',
  '算最新年度三率（毛利率／營業利益率／淨利率）＋與 5 年前對照。三率同向上＝體質變好；毛利率守住但營業利益率掉＝費用問題；淨利率獨強＝查業外。':
    'Work out the three margins for the latest year (gross / operating / net) and set them against five years ago. All three rising = the business is getting healthier; gross margin holding while operating margin falls = an expense problem; net margin strong on its own = go look at non-operating items.',
  '三率表＋一句歸因': 'A three-margin table plus one sentence saying why',

  'Step 3｜杜邦拆解': 'Step 3 | The DuPont breakdown',
  '第 7–11 分鐘（4 分）': 'Minutes 7–11 (4 min)',
  '工具：W9': 'Tool: W9',
  '三因子版即可（時間不夠就跳過五因子）：ROE ＝ 淨利率 × 周轉 × 乘數。跟 5 年前比，哪個因子在動？靠加槓桿撐 ROE 的直接標記警示。':
    'The three-factor version is enough (skip the five-factor one if time is short): ROE = net margin × turnover × leverage. Compared with five years ago, which factor is moving? If ROE is being held up by more leverage, flag it on the spot.',
  '因子對照＋品質判斷（真本事／薄利快跑／借錢撐）':
    'A factor-by-factor comparison plus a quality call (real skill / thin margins at speed / propped up by debt)',

  'Step 4｜現金流三線': 'Step 4 | The three cash-flow lines',
  '第 11–15 分鐘（4 分）': 'Minutes 11–15 (4 min)',
  '工具：W7': 'Tool: W7',
  '近 5 年淨利 vs OCF vs FCF：OCF/淨利 ≥ 0.8？FCF 為負的話是擴張還是失血（對照 CapEx vs 折舊）？三大活動正負組合是哪種人生階段？':
    'Net income vs OCF vs FCF over the last five years: is OCF / net income ≥ 0.8? If FCF is negative, is that expansion or bleeding (compare CapEx with depreciation)? And which stage of life does the plus/minus pattern across the three activities point to?',
  '三線結論＋現金流組合定位':
    'A verdict on the three lines plus where the cash-flow pattern places the company',

  'Step 5｜紅旗快掃': 'Step 5 | The quick red-flag sweep',
  '第 15–18 分鐘（3 分）': 'Minutes 15–18 (3 min)',
  '工具：W8': 'Tool: W8',
  '清單 v1 的 10 項快速打勾。時間內查不到的（董監質押、關係人）標記「待查」，不要略過。':
    'Tick off the 10 items on checklist v1. Anything you cannot look up in the time (pledged director shares, related parties) gets marked "to check" — do not just skip it.',
  '紅旗計數（含待查項）': 'A red-flag count (including the items still to check)',

  'Step 6｜結論': 'Step 6 | The conclusion',
  '第 18–20 分鐘（2 分）': 'Minutes 18–20 (2 min)',
  '工具：一頁模板': 'Tool: the one-page template',
  '一頁紙寫下：通過／不通過／待釐清＋三個理由＋（若通過）下一步要深挖的兩個問題。':
    'On one page write: pass / fail / needs clarifying, plus three reasons, plus — if it passes — the two questions to dig into next.',
  健檢結論卡: 'A check-up conclusion card',
  '<p class="sd-out">→ <b>產出：</b>': '<p class="sd-out">→ <b>Output:</b> ',

  /* ── 一頁報告模板 ── */
  '3. 一頁健檢報告模板': '3. The one-page check-up report template',
  '每步的產出最後收攏成一頁——複製下面的模板到你的筆記工具：':
    'Every step\'s output collects onto a single page — copy the template below into your notes app:',
  一頁健檢報告: 'One-page check-up report',
  複製模板: 'Copy template',
  '已複製 ✓': 'Copied ✓',
  '複製失敗，請手動選取': 'Copy failed — select it by hand',
  /* 全形底線 ＿ 保留：它比半形寬，貼進筆記工具時填空欄位才對得齊 */
  '【公司】＿＿＿＿（代號＿＿＿）    【健檢日】＿＿＿＿  【用時】＿＿分\n【第一印象】（Step 1，三行）\n【三率】毛利率＿％ 營業利益率＿％ 淨利率＿％｜五年方向：↑↓→\n【杜邦】ROE＿％ ＝ 淨利率＿ × 周轉＿ × 乘數＿｜主導因子：＿＿\n【現金流】OCF/淨利＿｜FCF：正/負（原因：擴張/失血）｜組合：＿/＿/＿\n【紅旗】＿支（待查＿項）：＿＿＿＿＿＿\n【結論】通過 / 不通過 / 待釐清\n【理由】1.＿＿ 2.＿＿ 3.＿＿\n【若通過，下一步深挖】1.＿＿ 2.＿＿':
    '[Company] ＿＿＿＿ (ticker ＿＿＿)    [Check date] ＿＿＿＿  [Time taken] ＿＿ min\n[First impression] (Step 1, three lines)\n[Margins] gross ＿% operating ＿% net ＿% | five-year direction: ↑↓→\n[DuPont] ROE ＿% = net margin ＿ × turnover ＿ × leverage ＿ | lead factor: ＿＿\n[Cash flow] OCF/net income ＿ | FCF: positive/negative (expansion or bleeding?) | pattern: ＿/＿/＿\n[Red flags] ＿ found (＿ still to check): ＿＿＿＿＿＿\n[Conclusion] pass / fail / needs clarifying\n[Reasons] 1.＿＿ 2.＿＿ 3.＿＿\n[If it passes, dig into] 1.＿＿ 2.＿＿',

  /* ── 三條紀律 ── */
  流程的三條紀律: 'Three rules for the routine',
  限時: 'Keep to the clock',
  '——超時代表你在做深度研究，不是初篩；②':
    ' — going over means you have slipped into deep research, not screening; ②',
  書面產出: 'Write it down',
  '——每步寫下來，不是在腦中「有感覺」；③':
    ' — every step gets written; "having a feeling" in your head does not count; ③',
  '查不到就標「待查」': 'Mark what you cannot find as "to check"',
  '——不要略過，也不要當場掉進兔子洞。':
    ' — do not skip it, and do not fall down the rabbit hole there and then.',

  /* ── Rubric ── */
  '4. 自評 Rubric（10 分制）': '4. Self-assessment rubric (out of 10)',
  '做完練習後回來打分——8 分以上＝':
    'Come back and score yourself after the exercise — 8 or more = ',
  'Q1 畢業': 'Q1 graduation',
  '；6–7 分＝流程再演練一次；&lt; 6 分＝回頭補弱的那一週。計分器在下面（練習做完再勾）：':
    '; 6–7 = run the routine once more; &lt; 6 = go back and shore up the week you are weakest on. The scorer is below (tick it after the exercise):',
  自評計分器: 'Self-assessment scorer',
  '六步驟全部完成、無跳步': 'All six steps done, none skipped',
  '30 分鐘內完成（第一次放寬到 30 分）':
    'Finished inside 30 minutes (30 is the allowance for a first run)',
  '每步有書面產出（不是只在腦中）':
    'Every step has something written down (not just held in your head)',
  '紅旗清單 10 項全查或標記待查':
    'All 10 red-flag items checked, or marked "to check"',
  '結論有三個具體理由（引用數字，非印象）':
    'The conclusion gives three concrete reasons (quoting numbers, not impressions)',
  '做完任務 A、B 再回來打分。': 'Do tasks A and B, then come back and score yourself.',
  '<b>🎓 Q1 畢業！</b>流程已成裝備——之後每次初篩都走這條線。':
    '<b>🎓 Q1 graduation!</b> The routine is part of your kit now — every screen from here runs down this line.',
  '<b>差一步：</b>流程再演練一次（換一家公司重跑 30 分鐘場）。':
    '<b>One step short:</b> run the routine once more (pick another company and redo the 30-minute round).',
  '<b>先別急：</b>回頭補最弱的那一週——卡在哪一步，就回哪一週。':
    '<b>Not yet:</b> go back and shore up the weakest week — whichever step you stall on tells you which week to return to.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 導讀 · 約 30 分鐘': 'Block ② / Reading · about 30 minutes',
  '本週不讀新材料——回顧自己的產出':
    'No new material this week — review what you have made',
  '5 分': '5 min',
  'W5 利潤率趨勢表 ↗': 'W5 margin trend table ↗',
  '重看你算過的三率與共同比——Step 2 的工具，確認能立刻上手。':
    'Look again at the three margins and common-size figures you worked out — the tool for Step 2. Make sure you can pick it up without hesitating.',
  'W6 體質比率 ↗': 'W6 balance-sheet health ratios ↗',
  '流動比、速動比、有息負債比——Step 1 掃資產負債表時的背景知識。':
    'Current ratio, quick ratio, interest-bearing debt ratio — the background you need when Step 1 sweeps the balance sheet.',
  'W7 三線表 ↗': 'W7 three-line table ↗',
  '淨利 vs OCF vs FCF、八種現金流組合——Step 4 的工具。':
    'Net income vs OCF vs FCF, and the eight cash-flow combinations — the tool for Step 4.',
  'W8 紅旗清單 v1 ↗': 'W8 red-flag checklist v1 ↗',
  'Step 5 的工具。': 'The tool for Step 5. ',
  '特別重讀「使用規則」段：單旗不定罪、三旗直接離開':
    'Re-read the "how to use it" section in particular: one flag is not a conviction, three flags and you walk',
  '——這是整個健檢的判斷哲學。':
    ' — that is the judgement philosophy behind the whole check-up.',
  'W9 杜邦對決 ↗': 'W9 DuPont face-off ↗',
  '三因子拆解與「真本事／薄利快跑／借錢撐」的品質判斷——Step 3 的工具。':
    'The three-factor breakdown and the quality call between "real skill", "thin margins at speed" and "propped up by debt" — the tool for Step 3.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習（正式實戰） · 約 2.5 小時':
    'Block ③ / Exercise (the real thing) · about 2.5 hours',
  三個任務: 'Three tasks',
  '任務 A｜限時健檢（30 分鐘 × 1 家）':
    'Task A | Timed check-up (30 minutes, one company)',
  選一家: 'Pick a Taiwan-listed company you have ',
  從未分析過: 'never analysed before',
  '的台股公司（避開金融股——框架不同；建議從你生活中用得到的品牌／熟悉的產業挑）':
    ' (steer clear of financials — different framework; go for a brand you actually use or an industry you know)',
  '計時開跑，六步驟走完，填一頁模板':
    'Start the timer, work through all six steps, fill in the one-page template',
  '記錄實際用時與卡住的步驟——':
    'Note how long it really took and where you got stuck — ',
  '卡住點＝該回頭複習的週次': 'the sticking point is the week to go back and revise',
  '任務 B｜不限時報告（約 1.5 小時）':
    'Task B | Untimed write-up (about 1.5 hours)',
  '把 30 分鐘的草稿擴寫成完整一頁健檢報告：數字補齊、待查項查完、結論理由寫成完整句子。':
    'Expand the 30-minute draft into a complete one-page report: fill in the missing numbers, look up the items you marked "to check", and write the reasons out as full sentences. ',
  '這份報告就是「選股 20 分鐘健檢」專欄文章的素材。':
    'This report is the raw material for the column piece "the 20-minute stock check-up".',
  '任務 C｜自評（15 分鐘）': 'Task C | Self-assessment (15 minutes)',
  回到上面的: 'Go back to the ',
  '打分；低於 8 分的項目寫一行改進計畫。':
    ' above and score yourself; for anything under 8, write one line on how to fix it.',
  '驗收標準：': 'What counts as done: ',
  '一頁健檢報告完成（一家新公司）＋有用時紀錄＋ Rubric 分數出爐。':
    'a one-page check-up report on a new company, a record of the time it took, and a rubric score.',
  自我檢核: 'Check yourself',
  限時場完成且有用時紀錄: 'The timed run is finished and the time is written down',
  完整報告一頁完成: 'The full one-page report is written',
  'Rubric 自評 ≥ 8 或有改進計畫':
    'Rubric self-score is 8 or more, or there is an improvement plan',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '現場演示：把健檢結論講出來，5 分鐘':
    'A live run-through: say your check-up conclusion out loud, 5 minutes',
  '這週的分享是 Q1 的總驗收——不是講概念，是把你剛做完的健檢結論講給對方聽。':
    'This week\'s share is the final test of Q1 — not explaining a concept, but telling someone the conclusion of the check-up you have just done.',
  開場: 'Opening',
  '「我用 20 分鐘檢查了 ＿＿ 公司，像做健康檢查一樣——不動手術，只看要不要掛專科。」':
    '"I spent 20 minutes checking over ＿＿, the way a health check works — no surgery, just deciding whether to book a specialist."',
  '三個發現（用聽過的比喻）': 'Three findings (in metaphors they already know)',
  '用三個比喻報告三個發現：': 'Report three findings with three metaphors: ',
  成績單: 'the school report',
  '（損益表：三率往上還是往下）、':
    ' (the income statement: are the three margins heading up or down), ',
  健檢報告: 'the health check',
  '（資產負債表：欠的錢多不多、撐不撐得住）、':
    ' (the balance sheet: how much is owed, and can it take the strain), ',
  血液循環: 'the blood circulation',
  '（現金流：賺的是真錢還是帳面數字）——對方這 12 週都聽過這些比喻。':
    ' (cash flow: is the profit real money or just an entry on paper) — they have heard all three of these over the past 12 weeks.',
  結論: 'The conclusion',
  '「所以我': '"So I ',
  '會／不會': 'will / will not',
  '繼續研究它，因為＿＿＿。」（三個理由，講數字不講感覺。）':
    ' keep researching it, because ＿＿＿." (Three reasons, in numbers rather than feelings.)',
  關鍵指標: 'The test that matters',
  '對方能不能複述你的結論與理由？':
    'Can they repeat your conclusion and your reasons back to you?',
  '能＝你真的懂了；不能＝找出哪一句是行話，換成人話再講一次。':
    ' Yes = you really do understand it. No = find the sentence that was jargon, put it in plain words, and say it again.',
  預期反應與應對: 'What they will say, and what to answer',
  '「所以可以買嗎？」': '"So can I buy it?"',
  '「健檢通過只代表『值得繼續了解』，就像相親第一印象不錯不等於結婚——下一季我學怎麼算它值多少錢。」':
    '"Passing the check-up only means it is worth getting to know better. A good first impression on a blind date is not a wedding — next quarter I learn how to work out what it is actually worth."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  本週完成的定義: 'What counts as done this week',
  '一頁健檢報告完成（一家新公司）':
    'The one-page check-up report on a new company is finished',
  'Rubric ≥ 8 分（或有改進計畫）': 'Rubric score of 8 or more (or an improvement plan)',
  '分享環節完成：對方能複述健檢結論':
    'You have taught it to someone, and they can repeat the conclusion back',
  '本週心得記一行（下週回顧用）':
    'One line of notes on the week, for next week\'s review',
  '🎓 第 13 週完成——Q1 畢業！下週進入 Q2 投資人季：資產配置。':
    '🎓 Week 13 done — Q1 graduation! Next week opens Q2, the investor\'s quarter: asset allocation.',
  '下週預告 · Week 14：資產配置——股債現金與風險承受度':
    'Next week · Week 14: asset allocation — stocks, bonds, cash and your tolerance for risk',
  '——🎓 Q1 畢業，下週進入 Q2 投資人季。第一課就是把鏡頭從「單一公司」拉遠到「整體資金怎麼擺」：Brinson 研究說配置解釋組合波動的九成，你要做出自己的目標配置——全年最重要的單一決定。':
    ' — 🎓 Q1 graduation; next week starts Q2, the investor\'s quarter. The first lesson pulls the camera back from "one company" to "where all the money sits": the Brinson study says allocation explains about ninety per cent of a portfolio\'s swings, and you will set your own target allocation — the single most important decision of the year.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：景氣循環與資產輪動': 'Previous week: business cycles and asset rotation',
  專欄文章: 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
