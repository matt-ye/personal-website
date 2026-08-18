/*
 * 給家人的投資課 Week 07：現金流量表深讀 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-07-cash-flow.html
 *
 * 沿用 week-01 的慣例。本週沒有「萬」的單位問題（金額全是原始數字，
 * 三張表的數字一律照抄不換算），要注意的是另外三件事：
 *
 * ⚠ 台灣機構名用官方英文名：公開資訊觀測站 = Market Observation Post System
 *   (MOPS)，台積電 = TSMC。《財報就像一本故事書》查不到官方英文書名，
 *   照規則保留中文原字並列進 KEEP——不音譯、不自創譯名。
 *
 * ⚠ 「長期」同時出現在兩個位置（盈餘品質速檢的句首、Q3 答案的 <strong>），
 *   一個 key 只能有一個值，所以取不帶標點的 'Long term'：
 *   「Long term OCF ÷ net profit ≥ 0.8–1 is healthy」與「Long term: equipment ages」
 *   兩邊都成立。「短期」同理。
 *
 * ⚠ 純標點的文字節點（<strong>…</strong> 後面單獨的「）」「」」）抽取器不視為
 *   中文（全形括號與引號不在 [一-鿿]），對照表碰不到，會原樣留在英文頁。
 *   這是抽取器的邊界，不是漏譯。
 *
 * 語域：寫給家人的教材。偵探、血液循環、三個水龍頭、牙仙這些比喻要留住。
 */

export const KEEP = ['《財報就像一本故事書》'];
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
  '給家人的投資課 · Q1 共同地基 · Week 07':
    'Family Investing Course · Q1 Common Ground · Week 07',
  現金流量表深讀: 'Reading the Cash Flow Statement',
  '「最誠實的一張表」——本週你會親手編出一張現金流量表，多數投資人一輩子沒做過這件事。':
    'The most honest of the three statements. This week you build one by hand — something most investors never do in their lives.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 4': 'Weeks 4',
  '6 週': '6',
  '52 週 · 第 7 週': '52 weeks · Week 7',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles:',
  '投資人靠 FCF 估值（Q2 DCF 的直接輸入）、操盤手用 OCF/淨利比驗證盈餘品質（Q3）、財務長的資金調度就是在管理這張表（Q4）。':
    ' The investor values companies on FCF (the direct input to the DCF in Q2), the trader uses the OCF/net-profit ratio to test earnings quality (Q3), and the CFO managing cash is managing exactly this statement (Q4).',
  '開始前 10 分鐘：': 'First 10 minutes:',
  '回顧上週分享「好債 vs 壞債」時對方卡住的點——「要付利息的有多少？」有沒有變成反射。先用自己的話再講一次。':
    ' Think back to where the person you taught got stuck on good debt versus bad debt last week — has "how much of it pays interest?" become a reflex yet? Say it again in your own words first.',

  /* ── 開場猜題 ── */
  '開始之前，先當一次偵探': 'Before we start, play detective',
  '飲料店第二個月：淨利': 'Month two at the drinks shop: net profit of',
  '，但現金只多了': ', but cash only went up by',
  '。少掉的 11,667 是被誰動了手腳？':
    '. Who made off with the missing 11,667?',
  被客戶欠著: 'Customers still owe it',
  變成存貨堆著: 'It turned into inventory',
  折舊吃掉的: 'Depreciation ate it',
  好幾筆加減的淨結果: 'The net result of several plus and minus items',
  猜一個答案: 'Pick an answer',
  '答對了——前三個選項都有份，還有兩筆反方向的（欠供應商的、客人預付的）在幫忙。差額要一筆筆對帳才找得回來，這正是「間接法」在做的事。往下當偵探吧。':
    'Correct — the first three all play a part, and two more run the other way and help out (what you owe suppliers, and what customers paid in advance). The gap only comes back item by item, which is exactly what the indirect method does. Read on and play detective.',
  '有猜中一部分——但真相是好幾筆加減的淨結果：客戶欠 5 萬、存貨吃 5 千、折舊其實要加回 3,333，還有欠供應商與客人預付的兩筆在幫忙。往下當偵探，一筆筆對帳。':
    'Partly right — but the truth is the net result of several items: 50,000 owed by customers, 5,000 tied up in inventory, 3,333 of depreciation that actually gets added back, plus two helping items (owed to suppliers, prepaid by customers). Read on and reconcile them one at a time.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 為什麼需要第三張表': '1. Why a third statement is needed',
  '第 4 週的飲料店已經示範過：第 2 個月':
    'The drinks shop in week 4 already showed you this. In month two, ',
  '淨利 71,667、現金卻只多 60,000': 'net profit was 71,667 but cash rose only 60,000',
  '。損益表（應計制）與現金是兩本帳，現金流量表就是那座橋——它回答：「':
    '. The income statement (accrual basis) and cash are two separate books; the cash flow statement is the bridge between them. It answers: "',
  '淨利跟現金的差距，去哪了？': 'where did the gap between profit and cash go?',

  '2. 三大活動：現金的三個閘門':
    '2. Three activities: the three gates cash passes through',
  活動: 'Activity',
  內容: 'What it covers',
  '飲料店第 1 個月': 'Drinks shop, month 1',
  '營業活動（OCF）': 'Operating (OCF)',
  '本業收付：賣貨收現、付原料、付房租薪水':
    'Money in and out of the core business: sales collected, ingredients paid for, rent and wages',
  投資活動: 'Investing',
  '買賣長期資產：設備、廠房、金融資產':
    'Buying and selling long-term assets: equipment, plant, financial assets',
  融資活動: 'Financing',
  '跟資金提供者的往來：借還款、增資、發股利':
    'Dealings with whoever funds you: borrowing and repaying, raising capital, paying dividends',
  當期現金淨變動: 'Net change in cash',
  '三者加總＝當期現金淨變動＝第 1 個月月底現金 360,000。':
    'The three added together = the net change in cash = the 360,000 of cash at the end of month 1. ',
  期末現金回到資產負債表的現金科目:
    'Closing cash goes back into the cash line on the balance sheet',
  '——三表勾稽的第三條線，你自己的帳就能驗證。':
    ' — the third tie-line between the statements, and one you can check in your own books.',

  '3. 間接法：從淨利「調整」回現金':
    '3. The indirect method: adjusting net profit back to cash',
  '實務上 99% 的公司用間接法編 OCF：從淨利出發，':
    'In practice 99% of companies build OCF the indirect way, starting from net profit: ',
  '①加回非現金費用': '① add back non-cash expenses',
  '（折舊、攤銷——記過費用但沒付錢）':
    ' (depreciation and amortisation — booked as expenses, never paid out) ',
  '②調整營運資金變動': '② adjust for changes in working capital',
  '（方向心法：': ' (the rule for direction: ',
  '資產增加吃現金、負債增加省現金':
    'assets going up eat cash, liabilities going up save cash',
  '③剔除非營業項目': '③ strip out non-operating items',
  '（處分資產利得等，挪去投資活動）。':
    ' (gains on disposals and the like, which move to investing).',
  '與其背，不如親手編一次——下面這個對帳遊戲用的全是你第 4 週記的分錄：':
    'Rather than memorise this, build one by hand. The reconciliation game below uses nothing but the journal entries you wrote in week 4:',

  /* ── 間接法偵探 ── */
  '間接法偵探：編出你的第一張現金流量表':
    'Indirect-method detective: build your first cash flow statement',
  '從淨利 71,667 出發，逐筆判斷：這件事讓現金':
    'Start from net profit of 71,667 and judge each item in turn: does this leave cash ',
  比帳面多: 'higher than the books say',
  '（加回）還是': ' (add it back), or ',
  比帳面少: 'lower than the books say',
  '（扣掉）？答完五題，橋會剛好搭到現金增加的 60,000。':
    ' (subtract it)? Answer all five and the bridge lands exactly on the 60,000 increase in cash.',
  '從淨利調整到營業現金流的橋型圖':
    'Bridge chart from net profit to operating cash flow',
  '第 1 筆 / 5': 'Item 1 of 5',
  '＋ 加回現金': '+ Add back to cash',
  '− 從現金扣掉': '− Subtract from cash',
  '答對 0 / 0': 'Correct: 0 / 0',
  '下一筆 →': 'Next item →',
  '心法：': 'The rule: ',
  '；折舊是記了費用但沒付錢，加回來。':
    '; depreciation is an expense you booked but never paid, so add it back.',
  /* 遊戲題庫（script 內的字串字面值） */
  '折舊費用 3,333': 'Depreciation expense 3,333',
  '上月記了折舊費用，但錢一毛都沒付出去':
    'Last month booked a depreciation expense, but not a cent left the account',
  '折舊是「非現金費用」——帳面扣了、現金沒少，所以往現金調整時加回來。':
    'Depreciation is a non-cash expense — the books took it off, the cash did not go down, so it comes back on when you adjust towards cash.',
  '應收帳款增加 50,000': 'Accounts receivable up 50,000',
  '企業客戶月結，貨交了、錢還沒收到':
    'Corporate customers settle monthly: the goods went out, the money has not come in',
  '收入已認列（推高淨利），現金卻沒進來——資產增加吃現金，扣掉。':
    'The revenue is already recognised (pushing net profit up) but no cash arrived — assets going up eat cash, so subtract.',
  '存貨增加 5,000': 'Inventory up 5,000',
  '倉庫的原料從 2 萬變 2.5 萬':
    'Ingredients in the storeroom went from 20,000 to 25,000',
  '錢變成珍珠和茶葉堆在倉庫——資產增加吃現金，扣掉。':
    'The money turned into tapioca pearls and tea leaves sitting in the storeroom — assets going up eat cash, so subtract.',
  '應付帳款增加 10,000': 'Accounts payable up 10,000',
  '欠供應商的貨款從 5 萬變 6 萬':
    'What you owe suppliers went from 50,000 to 60,000',
  '成本已入帳、錢還沒付出去——負債增加省現金，加回。':
    'The cost is on the books but the money has not gone out — liabilities going up save cash, so add it back.',
  '預收收入增加 30,000': 'Deferred revenue up 30,000',
  '客人預付的團購訂金，貨還沒做':
    'A deposit customers paid up front for a group order; the drinks are not made yet',
  '錢先進口袋、收入還不能認——負債增加省現金，加回。（W4 的老朋友又立功了）':
    'The money is in your pocket first and the revenue cannot be recognised yet — liabilities going up save cash, so add it back. (An old friend from week 4 earns its keep again.)',
  /* 橋型圖的 SVG 標籤：欄位很窄，縮寫優先 */
  '" font-family="ui-monospace,Menlo,monospace">目標：現金增加 60,000</text>':
    '" font-family="ui-monospace,Menlo,monospace">Target: cash up 60,000</text>',
  淨利: 'Net profit',
  '">勾稽 ✓</text>': '">Ties out ✓</text>',
  '＋折舊': '+Depr.',
  '−應收': '−AR',
  增加: 'up',
  '−存貨': '−Inventory',
  '＋應付': '+AP',
  '＋預收': '+Deferred',
  第: 'Item',
  '筆 /': 'of',
  '✓ 答對。': '✓ Correct. ',
  '✗ 方向相反——': '✗ Wrong direction — ',
  '<b>目前累計：': '<b>Running total: ',
  答對: 'Correct:',
  看結果: 'See the result',
  '五筆全對——方向心法已經長在你身上了。':
    ' All five right — the direction rule is part of you now.',
  '方向錯的那幾筆再默念一次心法：資產增加吃現金、負債增加省現金。':
    ' For the ones you got backwards, say the rule to yourself once more: assets going up eat cash, liabilities going up save cash.',
  '<b>對帳完成：71,667': '<b>Reconciled: 71,667',
  '調整 ＝ OCF 60,000</b>，與現金變動（360,000 → 420,000）<b>分毫不差</b>。你剛剛編完人生第一張現金流量表。（答對':
    'adjustments = OCF 60,000</b>, matching the change in cash (360,000 → 420,000) <b>to the cent</b>. You have just built the first cash flow statement of your life. (Correct:',
  '<button style="font:inherit;font-size:.85rem;font-weight:700;padding:.35rem .9rem;border-radius:99px;cursor:pointer;border:1.5px solid var(--pine);background:transparent;color:var(--pine)" id="g-retry">再玩一次</button>':
    '<button style="font:inherit;font-size:.85rem;font-weight:700;padding:.35rem .9rem;border-radius:99px;cursor:pointer;border:1.5px solid var(--pine);background:transparent;color:var(--pine)" id="g-retry">Play again</button>',

  /* ── 八種組合 ── */
  '4. 八種現金流組合：判讀公司的人生階段':
    "4. The eight cash-flow combinations: reading a company's stage of life",
  '三大活動的正負號組合是快速定位工具（依序：營業／投資／融資）：':
    'The signs of the three activities, read together, place a company quickly (in order: operating / investing / financing):',
  組合: 'Combination',
  典型身分: 'Typical profile',
  解讀: 'What it says',
  成熟金牛: 'Mature cash cow',
  '本業賺錢、持續投資、還債配息——最理想':
    'The core business earns, it keeps investing, it repays debt and pays dividends — the ideal',
  成長期: 'Growth phase',
  '本業賺但不夠擴張，再借／增資加碼——看擴張的報酬率':
    'The core business earns, but not enough to expand, so it borrows or raises capital on top — look at the return on that expansion',
  '轉型／收縮': 'Turnaround / shrinking',
  '賣資產＋還債——瘦身中，問為什麼':
    'Selling assets and repaying debt — slimming down; ask why',
  燒錢新創: 'Cash-burning startup',
  '本業虧、還在投資、靠融資續命——看跑道還剩幾個月':
    'The core business loses money, it is still investing, and financing keeps it alive — count the months of runway left',
  警訊: 'Warning sign',
  '本業失血、變賣資產、四處借錢——距離出事通常不遠':
    'The core business is bleeding, assets are being sold off, money is being borrowed everywhere — trouble is usually close',
  大警訊: 'Serious warning sign',
  '本業虧還在還債，靠賣資產撐——倒數計時':
    'Losing money in the core business while still repaying debt, propped up by asset sales — the clock is running down',
  '其餘兩種組合罕見。練習時把追蹤公司近 5 年的組合寫出來，看它「人生階段」有沒有移動。':
    'The other two combinations are rare. In the exercise, write out the combination for each of the last 5 years for the company you follow, and see whether its stage of life has moved.',

  /* ── FCF 與 CapEx ── */
  '5. FCF 與 CapEx 的兩張臉': '5. FCF, and the two faces of CapEx',
  'FCF 是估值之王（Q2 的 DCF 直接折現它），但判讀 CapEx 要分兩種：':
    'FCF is the king of valuation (the DCF in Q2 discounts it directly), but CapEx comes in two kinds: ',
  維持性: 'maintenance',
  '（不花機器就壞、店就舊——真實的營運成本）與':
    ' (spend nothing and the machines break and the shop looks tired — a genuine operating cost) and ',
  擴張性: 'expansion',
  '（蓋新廠、開新店——是投資未來，不是成本）。':
    ' (a new plant, a new branch — an investment in the future, not a cost).',
  '財報不會幫你分，粗略作法：拿 CapEx 跟':
    'The statements will not split them for you. A rough approach: compare CapEx with ',
  折舊: 'depreciation',
  '比——CapEx ≈ 折舊，大致是維持；CapEx 遠大於折舊，在擴張（回想專欄 #7 的台積電：FCF 被壓低是因為巨額擴張性 CapEx，不是本業惡化）。':
    ' — CapEx ≈ depreciation is roughly maintenance; CapEx far above depreciation means expansion. (Remember TSMC in column #7: its FCF was held down by enormous expansion CapEx, not by a deteriorating core business.)',
  盈餘品質速檢: 'A quick test of earnings quality',
  長期: 'Long term',
  'OCF ÷ 淨利 ≥ 0.8–1': 'OCF ÷ net profit ≥ 0.8–1',
  '算健康（獲利有現金支撐）；長期 &lt; 0.8，獲利是「紙上富貴」的成分高——這是下週紅旗清單的主力指標。':
    'is healthy: the profit is backed by cash. A long-run reading below 0.8 means a lot of that profit is paper wealth — this is the headline indicator on next week\'s red-flag list.',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「OCF 為正＝公司沒問題」': '"Positive OCF means the company is fine"',
  'OCF 可以靠「拖欠供應商貨款」「狂收預收款」暫時做大；要看組成，不只看總數。':
    'OCF can be inflated for a while by dragging out supplier payments or hoovering up prepayments. Look at what it is made of, not just the total.',
  '「FCF 負＝爛公司」': '"Negative FCF means a bad company"',
  '高速擴張期的好公司 FCF 常年為負（早期亞馬遜、擴產期台積電）；問題不是負，是「投下去的錢報酬率如何」（ROIC，Q2 深化）。':
    'Good companies in fast expansion run negative FCF for years (early Amazon; TSMC while building capacity). The question is not the minus sign, it is what return that money earns (ROIC, taken further in Q2).',
  '「折舊加回來，所以折舊不重要」':
    '"Depreciation gets added back, so it doesn\'t matter"',
  '間接法加回折舊只是會計調整；設備真的會壞、真的要換，':
    'Adding depreciation back in the indirect method is only an accounting adjustment. Equipment really does wear out and really does need replacing, and ',
  '長期而言維持性 CapEx 是真成本':
    'over the long run maintenance CapEx is a real cost',
  '——這就是 Buffett 批評 EBITDA 的原因（「難道牙仙會幫忙付 CapEx？」）。':
    ' — which is why Buffett attacks EBITDA ("Does the tooth fairy chip in for CapEx?").',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '40 分': '40 min',
  '《財報就像一本故事書》現金流量表章節':
    'The cash flow chapters of 《財報就像一本故事書》',
  'MJ 的「現金是血液」框架。': 'MJ\'s "cash is the blood supply" framing.',
  '50 分': '50 min',
  '公開資訊觀測站 實戰 ↗': 'Market Observation Post System (MOPS), hands-on ↗',
  '下載追蹤公司最新年度「合併現金流量表」逐行讀。用間接法骨架把每一行歸類：非現金調整？營運資金變動？找出：折舊攤銷金額（跟 CapEx 比大小）、「取得不動產、廠房及設備」（＝CapEx 主體）。':
    'Download the latest annual consolidated statement of cash flows for the company you follow, and read it line by line. Use the indirect-method skeleton to sort every line: non-cash adjustment, or change in working capital? Find two figures: depreciation and amortisation (compare it against CapEx), and "acquisition of property, plant and equipment" (which is the bulk of CapEx).',
  '10 分': '10 min',
  '專欄 #7「為什麼有獲利的公司也可能倒閉」段落重讀 ↗':
    'Re-read the "why a profitable company can still go under" section of column #7 ↗',
  '應計制與現金的落差——你現在能自己編表證明它。':
    'The gap between accrual accounting and cash — you can now build the statement that proves it.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '三線表＋人生階段判讀': 'A three-line chart, plus a read on the stage of life',
  '任務 A｜五年三線表（40 分鐘）':
    'Task A | Five-year three-line chart (40 minutes)',
  '對追蹤公司整理近 5 年：':
    'For the company you follow, pull together five years of ',
  '淨利、OCF、FCF': 'net profit, OCF and FCF',
  '（FCF＝OCF−「取得不動產、廠房及設備」，簡化版可接受）':
    ' (FCF = OCF − "acquisition of property, plant and equipment"; the simplified version is fine)',
  '畫成三條線（試算表折線圖）': 'Plot them as three lines (a spreadsheet line chart)',
  計算每年: "Work out each year's",
  'OCF÷淨利': 'OCF ÷ net profit',
  '，標出 &lt; 0.8 的年份': ', and mark the years that fall below 0.8',
  '寫 150 字：三線的形狀說了什麼故事？背離年份的原因（查該年報的營運資金變動明細）？':
    "Write 150 words: what story do the three shapes tell? And where they diverge, why (look up the working-capital detail in that year's annual report)?",
  '任務 B｜人生階段（10 分鐘）': 'Task B | Stage of life (10 minutes)',
  '寫出該公司近 5 年每年的「三活動正負組合」，判斷它在八種組合的哪一格、有沒有移動。':
    'Write out the sign combination of the three activities for each of the last 5 years, decide which of the eight boxes the company sits in, and whether it has moved.',
  '本週工具驗證：': "This week's tool check: ",
  '飲料店第 2 個月間接法應勾稽出 OCF ＝':
    'the indirect method on month 2 of the drinks shop should tie out to OCF =',
  '（現金 360,000 → 420,000 分毫不差）——上面的偵探遊戲就是驗證器。':
    ' (cash 360,000 → 420,000, to the cent) — the detective game above is the checker.',
  自我檢核: 'Check yourself',
  '三線表完成且 OCF/淨利比標記完成':
    'The three-line chart is done and the OCF/net-profit ratios are marked',
  能說出公司目前的現金流組合與階段:
    "You can state the company's current cash-flow combination and stage",
  '快問快答全對（見下）': 'All the quick questions right (below)',
  '任務 C｜快問快答三題（先答，再展開對答案）':
    'Task C | Three quick questions (answer first, then expand to check)',
  '應收帳款大增，在間接法裡是加還是減？為什麼？':
    'Receivables jump. In the indirect method, is that an addition or a subtraction? Why?',
  減: 'A subtraction',
  '——損益表已認列收入（推高淨利），但現金沒進來，所以從淨利往現金調整時要扣掉。':
    ' — the income statement has already recognised the revenue (pushing net profit up), but no cash came in, so it comes off when you adjust from profit towards cash.',
  '一家公司 OCF 很漂亮，但主因是「應付帳款大增」——該高興嗎？':
    'A company\'s OCF looks great, but mostly because payables shot up. Is that good news?',
  半喜半憂: 'Half good, half worrying',
  '——現金確實留住了，但這是「拖著不付錢」擠出來的一次性效果，不可持續；供應商也可能因此縮短給你的帳期。':
    ' — the cash really did stay put, but it was squeezed out by not paying, a one-off that cannot be repeated. Suppliers may well shorten your terms in response.',
  'CapEx 連續三年只有折舊的一半，代表什麼？短期獲利會怎樣？長期呢？':
    'CapEx has been half of depreciation for three years running. What does that mean? What happens to profit in the short run, and in the long run?',
  '→ 投資不足（低於資產耗損速度）。':
    '→ Under-investment: it is below the rate at which the assets wear out. ',
  短期: 'Short term',
  '：折舊仍高但現金流出少，獲利與 FCF 都好看；':
    ': depreciation stays high but little cash goes out, so profit and FCF both look good. ',
  '：設備老化、競爭力下滑——是「吃老本」的財務特徵，資本密集業尤其危險。':
    ': equipment ages and competitiveness slips — the financial signature of living off past investment, and especially dangerous in capital-intensive industries.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  當一次偵探: 'Play detective for once',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（回到飲料店）': 'Opening (back to the drinks shop)',
  '「上次我們的店帳面賺 71,667，但現金只多 6 萬。今天來當偵探，把差額一筆筆找回來。」（打開上面的偵探遊戲，一筆筆對：「5 萬被客戶欠著、5 千變成珍珠堆在倉庫、我們欠供應商 1 萬先不用付、客人先付了 3 萬訂金……」）':
    '"Last time our shop made 71,667 on paper, but cash only went up by 60,000. Today we play detective and find the difference, one item at a time." (Open the detective game above and work through them: "50,000 the customers still owe us, 5,000 turned into tapioca pearls in the storeroom, 10,000 we owe suppliers that we don\'t have to pay yet, 30,000 the customers paid us up front…")',
  '核心比喻：血液循環': 'The core metaphor: blood circulation',
  '「損益表是成績單、資產負債表是健檢報告，現金流量表是':
    '"The income statement is a report card, the balance sheet is a health check, and the cash flow statement is ',
  血液循環: 'the blood circulating',
  '。成績再好、體格再壯，血液不流就會出事——公司倒閉從來不是因為虧損，是因為':
    '. However good the grades and however strong the build, if the blood stops moving something goes badly wrong. Companies never go under because they made a loss; they go under because they ',
  付不出下個月的薪水: "cannot make next month's payroll",
  '互動：三個水龍頭': 'Interaction: three taps',
  '「公司的現金有三個水龍頭：做生意賺的、買賣家當的、跟銀行股東拿的。哪一個水龍頭的水最健康？」——引導：第一個，自己賺的。靠第三個活著的公司，水龍頭隨時會被關。':
    '"A company\'s cash comes out of three taps: what it earns doing business, what it gets from buying and selling its things, and what it takes from banks and shareholders. Which tap runs the healthiest water?" Steer them to the first — the money it earns itself. A company living off the third can have that tap turned off at any moment.',
  預期反應與應對: 'What they will say, and what to answer',
  '「這太專業了吧」': '"Isn\'t this a bit technical?"',
  '「家裡也一樣：薪水（營業）、賣車換現金（投資）、跟銀行借（融資）。月底錢變多，要看是哪個水龍頭來的。」':
    '"It works the same at home: your salary (operating), selling the car for cash (investing), borrowing from the bank (financing). If there is more money at the end of the month, the question is which tap it came out of."',
  '「那看公司只看現金流就好？」':
    '"So can I just look at cash flow and skip the rest?"',
  '「三張表是三個角度，單看任何一張都會被騙——下週教你怎麼三張一起對，抓出說謊的公司。」':
    '"The three statements are three angles, and any one of them alone can fool you. Next week I\'ll show you how to tie all three together and catch a company that is lying."',
  本腳本可搭配專欄: 'Pair this script with column',
  '#7《財務報表三表》': '#7, "The three financial statements"',
  '服用。': ' and take them together.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  本週完成的定義: 'What counts as done this week',
  '能不看講義用間接法編出飲料店第 2 個月 OCF（勾稽 60,000）':
    "You can build month 2's OCF for the drinks shop by the indirect method without the notes, tying out to 60,000",
  '能背出調整方向心法（資產增吃現金、負債增省現金）':
    'You can recite the direction rule from memory (assets up eat cash, liabilities up save cash)',
  '三線表＋人生階段判讀完成':
    'The three-line chart and the stage-of-life reading are done',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）':
    "One line of notes on the week, for next week's review",
  '🎓 第 7 週完成——三張表都會讀了。下週見：三表勾稽與紅旗清單。':
    '🎓 Week 7 done — you can read all three statements now. Next up: tying them together, and the red-flag list.',
  '下週預告 · Week 08：三表勾稽與財報品質紅旗':
    'Next week · Week 08: tying the three statements together, and red flags in the numbers',
  '——三張表你都會讀了，下週把它們接起來互相查核：淨利→保留盈餘、期末現金→資產負債表、OCF vs 淨利……然後建立你的第一份「財報紅旗清單」，抓出說謊的公司。':
    ' — you can read all three statements now. Next week you wire them together so they check each other: net profit → retained earnings, closing cash → balance sheet, OCF vs net profit… and then build your first red-flag list for catching a company that is lying.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：資產負債表深讀': 'Previous week: reading the balance sheet',
  專欄文章: 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
