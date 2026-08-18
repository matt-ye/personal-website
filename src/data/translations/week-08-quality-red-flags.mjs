/*
 * 給家人的投資課 Week 08：三表勾稽與財報品質紅旗 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-08-quality-red-flags.html
 *
 * 沿用 week-01 的慣例。本週沒有「萬」的單位問題（金額都是原始數字或「億」，
 * 散文裡的億照常換算成 NT$ billion）。要注意的是：
 *
 * ⚠ 專有名詞用官方英文名，不自創：
 *     博達（科技）      = Procomp Informatics（該公司在台交所的登記英文名，
 *                        2004 年案件，已查證）
 *     公開資訊觀測站    = Market Observation Post System (MOPS)
 *     金管會            = Financial Supervisory Commission
 *     財星 500          = Fortune 500
 *   Enron、Wirecard、MD&A 原文即英文，照抄。
 *
 * ⚠ 金額：63 億 → NT$6.3 billion、數十億 → several billion、10 億 → NT$1 billion。
 *   散文語境，照 week-01 的作法換算，不留「億」。
 *
 * ⚠ 遊戲的計分字串在 script 裡是「前綴 + 數字 + 分隔 + 數字」拼出來的，
 *   所以 '答對' 這條要譯成 'Correct:'（渲染成 "Correct: 3 / 4"），
 *   HTML 裡的初值 '答對 0 / 0' 也跟著寫成 'Correct: 0 / 0' 才不會兩處長不一樣。
 *
 * ⚠ 純標點的文字節點抽取器不視為中文，碰不到，會原樣留著。這是抽取器的邊界。
 *
 * 語域：寫給家人的教材。抓賊、相親的三份資料、護身咒這些比喻要留住，
 *   不要改寫成稽核報告。
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
  '給家人的投資課 · Q1 共同地基 · Week 08':
    'Family Investing Course · Q1 Common Ground · Week 08',
  '三表勾稽與財報品質紅旗':
    'Tying the Three Statements Together, and Red Flags in the Numbers',
  '三張表分開你都會讀了——本週把它們縫起來互相查核，並產出一份你會用很多年的工具。':
    'You can read each of the three statements on its own now. This week you stitch them together so they check each other, and come away with a tool you will use for years.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 4': 'Weeks 4',
  '7 週': '7',
  '52 週 · 第 8 週': '52 weeks · Week 8',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles:',
  '投資人靠紅旗清單避開地雷（Q2）、操盤手靠它驗證持股品質（Q3）、財務長視角則是理解「市場在防什麼」（Q4 治理篇會升級到 v2）。':
    ' The investor uses the red-flag list to step around landmines (Q2), the trader uses it to test the quality of what he holds (Q3), and from the CFO\'s seat it shows what the market is guarding against (the governance section in Q4 upgrades it to v2).',
  '開始前 10 分鐘：': 'First 10 minutes:',
  '回顧上週分享「三個水龍頭」時對方卡住的點——「哪個水龍頭的水最健康」有沒有講通。先用自己的話再講一次。':
    ' Think back to where the person you taught got stuck on the three taps last week — did "which tap runs the healthiest water" land? Say it again in your own words first.',

  /* ── 開場猜題 ── */
  '開始之前，先抓一次賊': 'Before we start, catch a thief',
  '一家店的老闆說今年生意翻倍。但你發現：倉庫堆滿賣不掉的貨、客人都賒帳沒付錢、銀行帳戶沒變多。你信嗎？':
    'A shop owner tells you business has doubled this year. But you notice the storeroom is full of goods nobody bought, the customers are all on credit and have not paid, and the bank account has not grown. Do you believe him?',
  '猜一個答案': 'Pick an answer',
  '信，帳面有成長就好': 'Yes — growth on the books is growth',
  '不信，數字兜不起來': "No — the numbers don't add up",
  '再查清楚才決定': 'Check further before deciding',
  '危險的答案。「生意翻倍」只是損益表的說法——倉庫（存貨）、賒帳（應收）、帳戶（現金）三個證據都在唱反調。你剛剛看到的，就是「勾稽」要抓的裂縫。':
    'A dangerous answer. "Business has doubled" is the income statement\'s version of events — the storeroom (inventory), the credit (receivables) and the account (cash) all say otherwise. What you just spotted is exactly the crack that tying out is meant to catch.',
  '好直覺。你剛剛做的事叫「勾稽」——把不同來源的數字互相核對。一張表可以化妝，三張表同時化妝很難不露餡。本週把這個直覺變成一份 10 項的檢查清單。':
    'Good instinct. What you just did is called tying out: checking numbers from different sources against each other. One statement can wear makeup; three at once almost always shows. This week turns that instinct into a ten-item checklist.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 勾稽三條線：用飲料店全部走一遍':
    '1. Three tie-out lines, walked through with the drinks shop',
  '「勾稽」＝不同報表之間互相核對。三條主線，你的飲料店帳全部能驗證：':
    'Tying out means checking one statement against another. There are three main lines, and your drinks-shop books can verify every one of them:',
  '線 1': 'Line 1',
  '淨利 → 保留盈餘': 'Net profit → retained earnings',
  '損益表 → 資產負債表': 'Income statement → balance sheet',
  '第 1 月淨利': 'Month 1 net profit',
  '＋ 第 2 月': '+ month 2',
  '＝ 保留盈餘': '= retained earnings',
  '（若有配息，則是「＋淨利−股利」）':
    '(with a dividend it becomes "+ net profit − dividends")',
  '線 2': 'Line 2',
  '淨利 → OCF 起算點': 'Net profit → the starting line for OCF',
  '損益表 → 現金流量表': 'Income statement → cash flow statement',
  '間接法第一行就是淨利':
    'The first line of the indirect method is net profit',
  '——上週你親手從它調整出 OCF':
    ' — last week you adjusted your way from it, by hand, to OCF of',
  '線 3': 'Line 3',
  '期末現金 → 現金科目': 'Closing cash → the cash line',
  '現金流量表 → 資產負債表': 'Cash flow statement → balance sheet',
  '第 1 月三活動合計': 'Month 1, the three activities combined',
  '＝ 月底資產負債表現金': '= cash on the month-end balance sheet',
  '為什麼勾稽是防弊的核心':
    'Why tying out is the heart of catching fraud',
  '：想在損益表灌水（虛增收入），應收帳款或存貨就會在資產負債表鼓起來，OCF 就會跟淨利背離——':
    ': inflate the income statement with fake revenue and receivables or inventory bulge on the balance sheet, while OCF pulls away from net profit — ',
  '一張表可以化妝，三張表同時化妝很難不露餡':
    'one statement can wear makeup; three at once almost always shows',
  '。歷史上的財報弊案，事後看幾乎都在勾稽關係上早有裂縫。':
    '. Look back at the accounting scandals of the past and almost all of them had cracks in these relationships long before anyone said so out loud.',

  /* ── 盈餘品質 ── */
  '2. 盈餘品質：好獲利與壞獲利':
    '2. Earnings quality: good profit and bad profit',
  '同樣是「淨利 10 億」，品質天差地遠。高品質盈餘的五個特徵：':
    'Two companies can both report "net profit of NT$1 billion" and be worlds apart in quality. Five marks of high-quality earnings:',
  '現金含量高': 'High cash content',
  '：長期 OCF÷淨利 ≥ 0.8（上週學的）':
    ': OCF ÷ net profit ≥ 0.8 over the long run (last week)',
  '應計項目少': 'Few accruals',
  '：獲利主要不是靠「還沒收到的錢」與「會計估計」堆出來':
    ': the profit is not mostly stacked out of money not yet received and accounting estimates',
  '來自本業': 'From the core business',
  '：營業利益貢獻為主，業外佔比低（第 5 週學的）':
    ': operating profit does most of the work and non-operating items are a small share (week 5)',
  '可重複': 'Repeatable',
  '：經常性收入，不靠一次性事件':
    ': recurring revenue, not one-off events',
  '會計政策保守': 'Conservative accounting policies',
  '：折舊年限、呆帳準備、資本化政策不比同業激進':
    ': useful lives, bad-debt provisions and capitalisation policies no more aggressive than peers',

  /* ── 紅旗清單 ── */
  '3. 紅旗檢查清單 v1（本週的交付物）':
    "3. Red-flag checklist v1 (this week's deliverable)",
  '以下 10 項，每項都給「怎麼查」與「為什麼」。這是你的工具——用你的話改寫、依產業增刪：':
    'Ten items, each with how to check it and why it matters. This is your tool — rewrite it in your own words, and add or drop items by industry:',
  '紅旗': 'Red flag',
  '怎麼查': 'How to check',
  '為什麼可疑': 'Why it is suspicious',
  '應收帳款增速 &gt; 營收增速（連 2 年）':
    'Receivables growth &gt; revenue growth (2 years running)',
  '兩者年增率並排': 'Put the two growth rates side by side',
  '塞貨或放寬收款條件換業績':
    'Channel stuffing, or looser credit terms buying the sales',
  '存貨增速 &gt; 營收增速（連 2 年）':
    'Inventory growth &gt; revenue growth (2 years running)',
  '同上': 'Same as above',
  '賣不動的前兆；下一步常是跌價損失':
    'A sign it is not selling; a write-down usually follows',
  'OCF÷淨利 長期 &lt; 0.8': 'OCF ÷ net profit &lt; 0.8 over the long run',
  '5 年平均': '5-year average',
  '獲利缺現金支撐，應計項目堆出來的':
    'Profit with no cash behind it, stacked out of accruals',
  '業外佔稅前淨利 &gt; 30%（經常性）':
    'Non-operating items &gt; 30% of pre-tax profit, year after year',
  '損益表結構': 'The shape of the income statement',
  '本業成色不足，靠處分資產／轉投資撐':
    'The core business is thin; disposals and investments are holding it up',
  '頻繁的「一次性」項目': 'Frequent "one-off" items',
  '逐年掃 MD&amp;A 與附註': 'Scan the MD&amp;A and the notes year by year',
  '年年都有的一次性＝經常性虧損被改名':
    'A one-off that happens every year is a recurring loss under a new name',
  '會計師意見非「無保留」': 'An audit opinion other than "unqualified"',
  '財報第一頁查核報告': 'The audit report on page one',
  '保留／否定意見＝專業把關者都不敢背書':
    'A qualified or adverse opinion means the professional gatekeeper would not sign off',
  '會計師事務所或 CFO 異常更換':
    'An unusual change of audit firm or CFO',
  '重大訊息': 'Material-information filings',
  '知道內情的人先跳船': 'The people who know are leaving first',
  '董監質押比高（&gt; 3–5 成）':
    'Heavy share pledging by directors and supervisors (&gt; 30–50%)',
  '公開資訊觀測站': 'Market Observation Post System (MOPS)',
  '大股東缺錢；股價跌→斷頭→惡性循環':
    'The big shareholders are short of cash; a falling price forces liquidation, which feeds the fall',
  '關係人交易金額大且說明模糊':
    'Large related-party transactions with vague explanations',
  '財報「關係人交易」附註': 'The related-party note in the statements',
  '利益輸送與虛增營收的經典通道':
    'The classic channel for siphoning value out and inflating revenue',
  '現金很多卻同時大量借款':
    'Plenty of cash and heavy borrowing at the same time',
  '現金 vs 有息負債並排': 'Put cash next to interest-bearing debt',
  '「現金」可能被限制、質押，或根本存疑':
    'The "cash" may be restricted, pledged, or simply not there',
  '使用規則：': 'How to use it: ',
  '單一紅旗 ≠ 有弊——每一項都可能有正當理由（例：擴產期存貨自然增加）。':
    'one flag is not fraud — every item can have a legitimate explanation (inventory naturally rises while capacity is being built, for instance). ',
  '兩支紅旗＝加倍查證；三支以上＝直接離開':
    'Two flags means double the checking; three or more means walk away',
  '——市場上公司很多，沒必要跟可疑的糾纏。':
    ' — there are plenty of companies out there; no need to get tangled up with a suspicious one.',

  /* ── 紅旗雷達 ── */
  '紅旗雷達：八個情境的判讀挑戰':
    'Red-flag radar: eight scenarios to call',
  '看到這個情境，你會「停下來查」還是「可正常繼續」？注意：有幾題是陷阱——單旗不定罪，正當理由存在。':
    'Faced with this scenario, do you stop and dig, or carry on as normal? Careful: some of these are traps — one flag is not a conviction, and legitimate explanations exist.',
  '情境 1 / 8': 'Scenario 1 / 8',
  '🚩 停下來查': '🚩 Stop and dig',
  '✅ 可正常繼續': '✅ Carry on',
  '答對 0 / 0': 'Correct: 0 / 0',
  '下一題 →': 'Next question →',
  '口訣：': 'The mantra: ',
  '單旗不定罪、兩旗加倍查、三旗直接走':
    'one flag is no conviction, two flags means double-check, three flags means leave',
  /* 雷達題庫（script 內的字串字面值） */
  '營收年增 30%，應收帳款連續兩年年增 80%，集中在三家海外客戶':
    'Revenue up 30% a year; receivables up 80% a year two years running, concentrated in three overseas customers',
  '紅旗 #1＋#9 的組合——塞貨或假銷貨的典型形狀，博達出事前就是這樣。就算有正當理由（放帳搶市佔），集中在少數海外客戶也必須查。':
    'Red flags #1 and #9 together — the classic shape of channel stuffing or fake sales, and exactly how Procomp Informatics looked before it blew up. Even with a legitimate explanation (loose terms to win share), concentration in a few overseas customers has to be checked.',
  '食品廠在中秋節前兩個月存貨大增 50%，往年同期也有同樣型態，旺季後消化':
    'A food maker\'s inventory jumps 50% two months before the Mid-Autumn Festival, the same pattern as previous years, and clears after the peak season',
  '單旗不定罪——季節性備貨是正當理由。判斷關鍵：跟「自己的歷史同期」比、看旺季後有沒有消化掉。':
    'One flag is no conviction — stocking up for a season is a legitimate reason. What decides it: compare against the same period in the company\'s own history, and check whether the stock cleared after the peak.',
  '淨利連續五年成長漂亮，但 OCF÷淨利五年平均只有 0.5':
    'Five straight years of handsome profit growth, but OCF ÷ net profit averages just 0.5 over those five years',
  '紅旗 #3——獲利長期缺現金支撐，一半以上是「還沒收到的錢」與會計估計堆的。長期背離是最強的單一警訊。':
    'Red flag #3 — profit with no cash behind it for years, more than half of it stacked out of money not yet received and accounting estimates. A long divergence is the strongest single warning there is.',
  '公司連續四年都出現「一次性」重組費用':
    'The company has reported a "one-off" restructuring charge four years in a row',
  '紅旗 #5——年年都有的一次性，就是經常性虧損被改名。把四年的「一次性」加回去重算獲利，成色立刻現形。':
    'Red flag #5 — a one-off that turns up every year is a recurring loss under a new name. Add the four years of "one-offs" back and recompute the profit; the real quality shows up immediately.',
  '科技公司負債比 60%，但拆開看全是應付帳款與客戶預收，零銀行借款':
    'A tech company with a 60% debt ratio — but broken down, it is all payables and customer prepayments, with zero bank borrowing',
  '上週學的——無息負債是營運的副產品，供應商和客戶免費借你錢。負債比要拆「有息 vs 無息」再下結論。':
    'Last week\'s lesson — non-interest-bearing liabilities are a by-product of operating, with suppliers and customers lending to you for free. Split the debt ratio into interest-bearing and not before drawing a conclusion.',
  '帳上現金 80 億，同時發行 30 億可轉債，公告說「充實營運資金」':
    'NT$8 billion of cash on the books, and a NT$3 billion convertible bond issued alongside it, announced as "strengthening working capital"',
  '紅旗 #10——現金若真實且自由，何必付成本借錢？可能被質押、限制用途、在海外拿不回，或根本存疑。博達的第一支旗。':
    'Red flag #10 — if the cash is real and unrestricted, why pay to borrow? It may be pledged, restricted in use, stuck overseas, or simply doubtful. This was the first flag Procomp Informatics flew.',
  '會計師出具「保留意見」，公司解釋是「與會計師對某項認列時點看法不同」':
    'The auditor issues a "qualified opinion", and the company explains it as "a difference of view with the auditor over the timing of one item"',
  '紅旗 #6——查核意見是最低門檻，連專業把關者都不敢背書就是大事。「看法不同」的輕描淡寫更要警惕。':
    'Red flag #6 — the audit opinion is the floor, and when even the professional gatekeeper will not sign off, that is a big deal. The breeziness of "a difference of view" is itself worth watching.',
  '擴產中的晶圓廠 FCF 連三年為負，但 OCF 強勁、CapEx 是折舊的三倍':
    'A fab in the middle of a capacity build has run negative FCF for three years, but OCF is strong and CapEx is three times depreciation',
  '上週學的——FCF 負來自擴張性 CapEx，不是本業失血（OCF 強勁）。該問的是擴產報酬率，不是急著貼紅旗。':
    'Last week\'s lesson — the negative FCF comes from expansion CapEx, not from a bleeding core business (OCF is strong). The question to ask is the return on that expansion, not how fast you can pin a flag on it.',
  '情境': 'Scenario',
  '✓ 答對。': '✓ Correct. ',
  '這要停下來查——': 'this one you stop and dig into — ',
  '這其實可以繼續——': 'this one you can actually carry on with — ',
  '答對': 'Correct:',
  '看結果': 'See the result',
  '全對——你的雷達已校準，包括「單旗不定罪」的陷阱題都沒踩。':
    'All correct — your radar is calibrated, traps included; you did not fall for the "one flag is no conviction" questions.',
  '不錯——錯的題目多半是陷阱題（正當理由存在），重讀「使用規則」再進實戰。':
    'Not bad — the ones you missed are mostly the traps, where a legitimate explanation exists. Re-read "how to use it" before taking this into the field.',
  '回頭把 10 項清單的「為什麼可疑」欄各讀一次，再來重測。':
    'Go back and read the "why it is suspicious" column of all ten items once more, then take this again.',
  '<b>雷達校準完成：': '<b>Radar calibrated: ',
  '<button style="font:inherit;font-size:.85rem;font-weight:700;padding:.35rem .9rem;border-radius:99px;cursor:pointer;border:1.5px solid var(--pine);background:transparent;color:var(--pine)" id="g-retry">再玩一次</button>':
    '<button style="font:inherit;font-size:.85rem;font-weight:700;padding:.35rem .9rem;border-radius:99px;cursor:pointer;border:1.5px solid var(--pine);background:transparent;color:var(--pine)" id="g-retry">Play again</button>',

  /* ── 博達案例 ── */
  '4. 台灣案例課：博達（2004）':
    '4. A Taiwan case study: Procomp Informatics (2004)',
  '真實案例 · 紅旗組合': 'A real case · a cluster of red flags',
  '台灣財報弊案的教科書案例。出事前的紅旗組合：':
    'The textbook accounting scandal in Taiwan. The flags already flying before it broke:',
  '帳上現金數十億，': 'Several billion NT dollars of cash on the books, ',
  '卻同時發可轉債借錢':
    'and convertible bonds being issued to borrow at the same time',
  '（紅旗 #10）': ' (red flag #10)',
  '營收高速成長，但': 'Revenue growing fast, but ',
  '應收帳款更快': 'receivables growing faster still',
  '、且集中在少數海外「客戶」（紅旗 #1＋#9——後來證實是假銷貨循環）':
    ', and concentrated in a handful of overseas "customers" (red flags #1 and #9 — later confirmed to be a fake sales loop)',
  'OCF 與亮眼獲利長期背離':
    'OCF pulling away from the glowing profits, year after year',
  '（紅旗 #3）': ' (red flag #3)',
  '2004 年 6 月無預警聲請重整，「帳上 63 億現金」被發現遭質押與虛構，投資人血本無歸。':
    'In June 2004 it filed for restructuring without warning; the "NT$6.3 billion of cash on the books" turned out to be pledged or fabricated, and investors lost everything. ',
  '教訓：現金科目也能造假，但勾稽的裂縫（OCF 背離、應收異常）在出事前就看得到。':
    'The lesson: even the cash line can be faked, but the cracks in the tie-out — OCF diverging, receivables behaving oddly — were visible beforehand.',
  '（案件細節以可靠報導為準。）':
    ' (For the details of the case, go to reliable reporting.)',

  /* ── 闢謠 ── */
  '5. 常見誤解闢謠': '5. Three things people get wrong',
  '「有會計師簽證就沒問題」': '"An auditor signed it, so it\'s fine"',
  '查核是抽樣與合理保證，不是保證無弊；博達、Wirecard 都有大所簽證。會計師意見是':
    'An audit is sampling and reasonable assurance, not a guarantee against fraud. Procomp Informatics and Wirecard were both signed off by big firms. An audit opinion is ',
  '最低門檻': 'the floor',
  '，不是品質證書。': ', not a certificate of quality.',
  '「大公司不會作假」': '"Big companies don\'t cook the books"',
  'Enron 出事前是財星 500 前十；規模只代表出事時傷害更大。':
    'Enron was in the Fortune 500 top ten right up to the collapse. Size only means the damage is larger when it goes.',
  '「紅旗清單掃過＝盡職調查完成」':
    '"Run the red-flag list and the due diligence is done"',
  '清單抓的是「明顯的可疑」，通過清單只代表「值得繼續研究」，不代表「可以買」。':
    'The list catches what is obviously suspicious. Passing it means the company is worth researching further, not that it is worth buying.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '40 分': '40 min',
  '把講義的紅旗對應到英文語境的分類：收入操縱／費用操縱／現金流化妝。':
    'Map the red flags from the notes onto the English categories: revenue manipulation, expense manipulation, cash-flow window dressing.',
  '30 分': '30 min',
  '博達案回顧（自行搜尋）':
    'A retrospective on the Procomp Informatics case (search for it yourself)',
  '搜「博達 假帳 掏空」，選金管會、司法判決報導或財經媒體深度回顧各一篇。教訓比細節重要：找出「事前可見的紅旗」。':
    'Search for Procomp Informatics, false accounts and asset stripping, and pick one piece each from the Financial Supervisory Commission, from reporting on the court judgment, and from an in-depth financial-media retrospective. The lesson matters more than the detail: find the flags that were visible in advance.',
  '10 分': '10 min',
  '專欄 #7 三表關聯圖重讀 ↗':
    'Re-read the three-statement diagram in column #7 ↗',
  '那張圖的三條跨表箭頭，就是本週的勾稽三條線。':
    "The three arrows crossing between statements in that diagram are this week's three tie-out lines.",

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '紅旗清單實戰': 'Putting the red-flag list to work',
  '任務 A｜建立你的清單（20 分鐘）':
    'Task A | Build your own list (20 minutes)',
  '把講義的 10 項紅旗抄進你自己的文件（試算表或筆記），每項加一欄「這家公司的狀況」與「結論（✅／⚠️／🚩）」。':
    'Copy the ten red flags into a document of your own (spreadsheet or notes), and add two columns to each: "what this company looks like" and "verdict (✅ / ⚠️ / 🚩)". ',
  '這份文件之後每分析一家公司就複製一份':
    'Duplicate this document every time you analyse a company from now on',
  '——第 13 週 capstone 與之後的投資分析都會用。':
    ' — the week 13 capstone and every analysis after it will use it.',
  '任務 B｜套用到追蹤公司（30 分鐘）':
    'Task B | Apply it to the company you follow (30 minutes)',
  '用前三週已下載的財報＋公開資訊觀測站補查（董監質押、關係人交易附註、查核意見）':
    'Use the statements you downloaded over the last three weeks, plus the Market Observation Post System for what they do not cover (share pledging by directors and supervisors, the related-party note, the audit opinion)',
  '逐項打勾／打叉，寫 100 字總結：「這家公司的財報品質我給 ＿/10，主要疑慮是＿＿，需要進一步查的是＿＿」':
    'Tick or cross each item, then write a 100-word summary: "I give this company\'s reporting quality ＿/10; my main concern is ＿＿; what I still need to check is ＿＿"',
  '本週工具驗證：': "This week's tool check: ",
  '飲料店三條勾稽線全通（98,334／60,000／360,000）——你的帳本經得起查核；真實公司查的就是同樣三條線。':
    'all three tie-out lines for the drinks shop hold (98,334 / 60,000 / 360,000) — your own books stand up to an audit, and real companies get checked on exactly these three lines.',
  '自我檢核': 'Check yourself',
  '紅旗清單 v1 成為獨立文件（可重複使用）':
    'Red-flag list v1 exists as its own document, ready to reuse',
  '追蹤公司 10 項全部查完（不是只查有資料的）':
    'All ten items checked for the company you follow, not only the ones with easy data',
  '100 字總結有具體疑慮或具體理由給高分':
    'The 100-word summary names a specific concern, or a specific reason for a high score',
  '任務 C｜快問快答三題（先答，再展開對答案）':
    'Task C | Three quick questions (answer first, then expand to check)',
  '營收 +30%、應收 +80%——給出兩種正當解釋與一種不正當解釋。':
    'Revenue +30%, receivables +80%. Give two legitimate explanations and one illegitimate one.',
  '正當': 'Legitimate',
  '：①放寬帳期搶市佔的策略性決定（要看毛利有沒有守住）②接了大客戶長帳期訂單（集中度風險另計）。':
    ': ① a deliberate decision to loosen payment terms and take market share (check whether gross margin held); ② a large customer\'s order on long terms (concentration risk is a separate question). ',
  '不正當': 'Illegitimate',
  '：季底塞貨給經銷商虛增營收，貨其實沒賣到終端。':
    ': stuffing distributors at quarter-end to inflate revenue, when the goods never reached an end customer.',
  '為什麼「帳上現金很多＋大量借款」矛盾？':
    'Why is "lots of cash on the books plus heavy borrowing" a contradiction?',
  '→ 現金若真實且自由，先還借款省利息才合理；':
    '→ If the cash is real and unrestricted, the sensible move is to repay the debt and save the interest. ',
  '不還': 'Not repaying',
  '代表現金可能被質押／限制用途／在海外拿不回，或根本不存在——資金成本上的矛盾就是可疑點。':
    ' means the cash may be pledged, restricted in use, unreachable overseas, or simply not there — the contradiction in funding costs is the suspicious part.',
  '勾稽三條線中，哪一條最難被同時造假？為什麼？':
    'Of the three tie-out lines, which is hardest to fake alongside the others? Why?',
  '線 3（期末現金）最難': 'Line 3, closing cash, is the hardest',
  '——現金餘額有銀行對帳單與函證把關，要造假需要外部共謀（博達正是買通了這關才撐了幾年，也因此一被戳破就全盤崩潰）；相較之下應收與存貨的「估計」空間大得多。':
    ' — the cash balance is guarded by bank statements and confirmations, so faking it takes collusion from outside (Procomp Informatics got past exactly this gate, which is how it lasted years, and why the whole thing collapsed the moment it was punctured). Receivables and inventory, by contrast, leave far more room for estimates.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '三份資料要對得上': 'Three documents that have to agree',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（說故事）': 'Opening (tell a story)',
  '「今天講一個台灣的真實故事：一家公司帳上有 63 億現金，股票是熱門科技股——某天突然宣布倒閉，錢全是假的。它叫博達，2004 年。」':
    '"Here is a true story from Taiwan. A company had NT$6.3 billion of cash on its books and a hot tech stock — then one day it announced it was going under, and the money turned out to be fake. It was called Procomp Informatics. 2004."',
  '核心比喻：相親的三份資料':
    'The core metaphor: three documents on a blind date',
  '「公司給你看三張報表，就像相親對象給你看三份資料：成績單（會賺錢）、健檢報告（有家底）、銀行流水（真有現金）。':
    '"A company shows you three statements the way a blind date hands you three documents: a report card (they earn), a health check (there is something behind them), and a bank statement (the money is really there). ',
  '騙子可以偽造一份，但三份要互相對得上非常難':
    'A liar can forge one of them, but getting all three to agree with each other is very hard',
  '——所以我們家看公司，永遠三張一起對。」':
    ' — which is why in this family we always read the three together."',
  '互動：抓賊遊戲': 'Interaction: catch the thief',
  '「一家店老闆說今年生意翻倍，但你發現：倉庫堆滿賣不掉的貨、客人都賒帳沒付錢、銀行帳戶沒變多。你信嗎？」':
    '"A shop owner says business has doubled this year. But you notice the storeroom is full of goods nobody bought, the customers are all on credit and have not paid, and the bank account has not grown. Do you believe him?"',
  '讓對方自己說出「帳面成長、現金沒跟上＝可疑」——他們剛剛完成了一次勾稽分析。（也可以打開上面的紅旗雷達一起玩。）':
    'Let them be the one to say "growth on paper with cash not keeping up is suspicious" — they have just done a tie-out analysis. (You can also open the red-flag radar above and play it together.)',
  '三句護身咒（給對方帶走）': 'Three charms to send them home with',
  '獲利要有現金跟著（OCF 跟上淨利）':
    'Profit should come with cash attached (OCF keeping up with net profit)',
  '別人欠的錢漲得比生意快，小心（應收 vs 營收）':
    'Be careful when what people owe grows faster than the business does (receivables vs revenue)',
  '說有很多現金卻一直借錢的，離遠一點':
    'Keep your distance from anyone who says they have plenty of cash and keeps borrowing anyway',
  '預期反應與應對': 'What they will say, and what to answer',
  '「那還敢投資嗎，都是騙子？」':
    '"Who would dare invest, then? Are they all crooks?"',
  '「弊案是極少數，但我們學會看，就能把極少數擋在門外——就像會看食品標示的人，不會因此不吃東西。」':
    '"Frauds are a tiny minority, but once we can read the signs we keep that tiny minority out — the way someone who reads food labels doesn\'t stop eating."',
  '「這些你查得到？」': '"Can you really look all this up?"',
  '展示公開資訊觀測站 30 秒：「全部免費公開，只是 99% 的人不看。」':
    'Show them the Market Observation Post System for 30 seconds: "All free, all public. It is just that 99% of people never look."',
  '本腳本可搭配專欄': 'Pair this script with column',
  '#7《財務報表三表》': '#7, "The three financial statements"',
  '服用。': ' and take them together.',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能用飲料店數字示範勾稽三條線':
    'You can demonstrate the three tie-out lines with the drinks-shop numbers',
  '紅旗清單 v1 完成並套用過一家真實公司':
    'Red-flag list v1 is finished and has been used on a real company',
  '能講出博達案的紅旗組合（至少三支）':
    'You can name the cluster of red flags in the Procomp Informatics case (at least three)',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）':
    "One line of notes on the week, for next week's review",
  '🎓 第 8 週完成——下週見：杜邦分析。':
    '🎓 Week 8 done — next up: DuPont analysis.',
  '下週預告 · Week 09：財務比率體系與杜邦分析':
    'Next week · Week 09: the ratio system and DuPont analysis',
  '——Q1 分析工具的最後一塊：把 ROE 拆成五個因子，看出兩家「同樣 ROE 15%」的公司，一家靠真本事、一家靠借錢撐。第 13 週的「20 分鐘財報健檢」會把週 5–9 的工具全部組裝起來。':
    ' — the last piece of the Q1 toolkit. Break ROE into five factors and you can see how two companies with "the same 15% ROE" can be one that earns it and one that borrows its way there. The 20-minute financial health check in week 13 assembles everything from weeks 5–9.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：現金流量表深讀': 'Previous week: reading the cash flow statement',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
