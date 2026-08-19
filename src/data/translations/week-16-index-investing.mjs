/*
 * 給家人的投資課 Week 16：指數化投資與成本侵蝕 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-16-index-investing.html
 *
 * 沿用 week-01 的慣例（值不動、單位進標籤；行內標記邊界留半形空白；
 * 語域維持家庭教材的口語溫度）。本週有兩處要交代：
 *
 * ⚠ 金額單位「萬」——**值不動，單位進標籤**
 *   計算器的數字是 JS 算的（以「萬」為單位），對照表不能改算術。所以：
 *       值的後綴「萬」→ 空字串｜統計卡標籤 → 補 (NT$10k)
 *       散文裡的金額照常換算（100 萬 → NT$1M、263 萬 → NT$2.63M）
 *
 *   例外說明：判詞句（「低成本區：30 年被吃掉 31 萬（4.1%）」）夾著一個
 *   JS 算出的「萬」值，換算不了、又是完整句子。兩種慣例在這裡撞在一起，
 *   選了表格那一套——數字後面接 (NT$10k)，因為它正上方的統計卡標籤
 *   已經宣告過同一個單位，讀者接得上；硬把它寫成 NT$310,000 才是造假。
 *
 * ⚠ 「＿ 萬」的填空（分享腳本）翻成 NT$＿：英文沒有「萬」這個位數，
 *   保留填空語意、換掉位數單位，是這句唯一讀得通的處理。
 *
 * ⚠ 已知限制（非本對照表可處理）：<a> 之間的頓號「、」與句末的「。」」
 *   不含漢字，抽取器抓不到，英文頁上會保留全形符號。要改得動原始碼。
 *
 * 書名用原著英文名：《約翰柏格投資常識》= John Bogle,
 * The Little Book of Common Sense Investing。人名（Sharpe、Bogle）用原名。
 * KEEP 因此是空的。
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
  '給家人的投資課 · Q2 投資人季 · Week 16':
    "Family Investing Course · Q2 The Investor's Quarter · Week 16",
  '指數化投資與成本侵蝕': 'Index Investing and the Erosion of Costs',
  'Q2 的「預設答案」週：為什麼「買下整個市場＋壓低成本」，是連專業者都難以打敗的策略。':
    'The "default answer" week of Q2: why owning the whole market and keeping costs down is a strategy even professionals struggle to beat.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisites: ',
  '第 10': 'Weeks 10',
  '15 週': '15',
  '52 週 · 第 16 週': '52 weeks · Week 16',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '基準線週。之後你做的每一次主動選股（W19 起），都該先問「我憑什麼贏過這個預設」——這個問題會貼在 Q2 後半每一週的門口。':
    'The baseline week. From here on, every active stock pick you make (starting W19) should begin with the question "what makes me able to beat this default?" — a question pinned to the door of every week in the second half of Q2.',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週「同一家店」家庭資產健檢的結果——房子、薪水、股票是不是幾乎全押「台灣景氣」這家店？雨傘店與冰淇淋店的比喻講通了嗎。':
    'Look back at last week\'s "same shop" family asset check-up — are the house, the salaries and the stocks nearly all bets on the one shop called "the Taiwanese economy"? And did the umbrella shop and ice-cream shop land?',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '全世界的基金經理人——名校畢業、全職研究、有團隊有彭博機——拉長到 10–15 年，你猜幾成輸給「什麼都不選、直接買整個市場」？':
    'Fund managers the world over — top-school graduates, researching full time, with teams and Bloomberg terminals — over 10 to 15 years, what share of them do you think lose to "pick nothing, just buy the whole market"?',
  '猜一個答案': 'Pick an answer',
  '大約三成': 'About 30%',
  '大約一半': 'About half',
  '八九成': 'Eighty or ninety per cent',
  '答對了——SPIVA 記分卡長期顯示，10–15 年期常見 80–90% 的主動基金落後基準指數，期間越長比例越高。所以「無腦買整個市場」其實是最聰明的預設——本週講為什麼這不是巧合，是算術。':
    'Correct — the SPIVA scorecard has long shown that over 10 to 15 years it is commonly 80–90% of active funds that lag their benchmark, and the longer the period the higher the share. Which makes "brainlessly buy the whole market" the smartest default there is — and this week is about why that is arithmetic rather than coincidence.',
  '比這更多——SPIVA 記分卡長期顯示，10–15 年期常見 80–90% 的主動基金落後基準指數，期間越長比例越高。「無腦買整個市場」其實是最聰明的預設——本週講為什麼這不是巧合，是算術。':
    'More than that — the SPIVA scorecard has long shown that over 10 to 15 years it is commonly 80–90% of active funds that lag their benchmark, and the longer the period the higher the share. "Brainlessly buy the whole market" turns out to be the smartest default there is — and this week is about why that is arithmetic rather than coincidence.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 主動管理的算術（Sharpe, 1991）：不需要數據的證明':
    '1. The arithmetic of active management (Sharpe, 1991): a proof that needs no data',
  '把所有投資人分兩群：指數投資人（持有整個市場）與主動投資人（互相買賣）。五步走完：':
    'Split every investor into two groups: index investors (who hold the whole market) and active investors (who trade with each other). Five steps and it is done:',
  '市場報酬 ＝': 'Market return = the weighted average return of',
  '所有投資人': 'all investors',
  '的加權平均報酬（會計恆等式，不是統計）':
    ' (an accounting identity, not a statistic)',
  '指數投資人拿到市場報酬（扣極低費用）':
    'Index investors get the market return (less a very small fee)',
  '所以': 'So ',
  '主動投資人整體': 'active investors as a group',
  '也恰好拿到市場報酬——扣費用之前': ' also get exactly the market return — before fees',
  '主動的費用（管理費、交易成本、稅）遠高於被動 ←':
    'Active costs (management fees, trading costs, tax) are far higher than passive ones ← ',
  '這一步才引入事實': 'this is the step that brings in a fact',
  '∴ 扣費後，': '∴ after fees, ',
  '主動投資人整體必定輸給被動': 'active investors as a group must lose to passive',
  '——邏輯必然，不是經驗巧合': ' — a logical necessity, not an empirical coincidence',
  '注意它沒說「沒有人能贏」——它說贏家的超額必然來自另一個主動輸家的口袋（零和），而':
    'Note that it does not say "nobody can win" — it says the winner\'s excess must come out of another active loser\'s pocket (zero sum), which means ',
  '你得先回答：憑什麼我是贏的那邊？':
    'you have to answer this first: what makes me the one on the winning side?',

  '2. 經驗證據：SPIVA 的成績單': '2. The empirical evidence: the SPIVA scorecard',
  'S&amp;P 每年發布的 SPIVA 記分卡長期顯示：':
    'The SPIVA scorecard S&amp;P publishes every year has long shown that ',
  '拉長到 10–15 年，絕大多數（常見 80–90% 級）主動股票基金落後其基準指數':
    'over 10 to 15 years the great majority of active equity funds — commonly 80–90% of them — lag their benchmark index',
  '，且期間越長比例越高；前段班的':
    ', and the longer the period the higher the share. The ',
  '持續性': 'persistence',
  '也差（過去十年的贏家，下個十年多半不再是）。':
    " of the front-runners is poor too: most of the past decade's winners are not the next decade's.",
  '兩層謙卑': 'Two layers of humility',
  '這是「全職、有團隊、有彭博機」的專業者的成績。個人投資者的合理起點是：':
    'That is the record of professionals with a full-time job, a team and a Bloomberg terminal. So a sensible starting point for an individual investor is: ',
  '核心指數化，主動只放在自己真正有優勢的小範圍':
    'index the core, and keep active bets to the small patch where you genuinely have an edge',
  '（核心–衛星，W18 再談比例）。':
    ' (core and satellite; W18 comes back to the proportions).',

  /* ── 反向雪球計算器 ── */
  '3. 成本的複利：反向的雪球': '3. Costs compound too: the snowball in reverse',
  '費用每年扣一次，跟報酬一樣': 'Fees come out once a year, and just like returns they ',
  '複利成長': 'compound',
  '。拉動費率，看 100 萬在毛報酬 7% 下被吃掉多少：':
    '. Drag the fee rate and see how much of NT$1 million a 7% gross return loses to it:',
  '反向雪球：費用侵蝕計算器（投入 100 萬 · 毛報酬 7%）':
    'The reverse snowball: fee erosion calculator (NT$1M invested · 7% gross return)',
  '0.1% 低成本指數級': '0.1%, low-cost index level',
  '1.5% 傳統主動基金級': '1.5%, traditional active fund level',
  '年費用率': 'Annual fee rate',
  '投資年期': 'Investment horizon',
  '30 年': '30 years',
  '年': 'years',
  '你拿到': 'You keep',
  '費用': 'Fees',
  /* 統計卡：儲存格是裸數字（單位後綴已剝掉），單位必須在標籤 */
  '0% 費用的終值（對照）': 'Final value at 0% fees, for reference (NT$10k)',
  '你的終值': 'Your final value (NT$10k)',
  '被費用吃掉': 'Eaten by fees (NT$10k)',
  '佔終值比例': 'Share of the final value',
  '萬': '',
  '<small> 萬</small>': '<small></small>',
  '<b>0% 費用是理論值</b>——現實中最低成本的指數工具約 0.03–0.1%。拉到 1.5% 看看傳統主動基金的量級。':
    '<b>0% fees is a theoretical figure</b> — in the real world the cheapest index tools run about 0.03–0.1%. Drag it up to 1.5% to see the scale of a traditional active fund.',
  '<b>低成本區：</b>': '<b>Low-cost zone:</b> over ',
  '年被吃掉': 'years, fees eat',
  '萬（': '(NT$10k), or ',
  '%）——這是「把選股外包給市場」的合理價格，核心工具的當代量級就在這一帶。':
    '% — a fair price for outsourcing stock selection to the market, and where core tools sit today.',
  '<b>中間地帶：</b>': '<b>Middle ground:</b> over ',
  '萬。超過 0.5% 的「指數」工具要問憑什麼——同樣的市場報酬，你付了好幾倍的價錢。':
    '(NT$10k). Any "index" product charging more than 0.5% owes you an explanation — the same market return at several times the price.',
  '<b>傳統主動基金級：</b>': '<b>Traditional active fund territory:</b> over ',
  '%）——成本是確定的，超額報酬是不確定的；付 15 倍的費用，買的是「大概率落後」的服務。':
    '% — the cost is certain, the excess return is not. Paying fifteen times the fee buys you a service that will most likely lag.',
  '模型：淨報酬 ＝ 7% − 費率，逐年複利。完整成本＝經理費＋保管費＋周轉的隱性成本＋（境外）稅務拖累——公開說明書的「費用率」常常只是起點。歷史量級假設，非預測。':
    'The model: net return = 7% − fee, compounded year by year. The full cost is the management fee plus custody fees plus the hidden cost of turnover plus, for offshore holdings, tax drag — the "expense ratio" in a prospectus is usually only the starting point. Order-of-magnitude assumptions, not forecasts.',
  '1.5% 的費率，30 年吃掉超過三分之一的終值':
    'A 1.5% fee eats more than a third of the final value over 30 years',
  '——跟 W10 的過路費算例互相呼應：成本是確定的，超額報酬是不確定的；付 15 倍的費用，買的是「大概率落後」的服務。':
    ' — which rhymes with the toll-fee worked example in W10: the cost is certain, the excess return is not. Paying fifteen times the fee buys you a service that will most likely lag.',

  /* ── ETF 六檢核點 ── */
  '4. 指數工具（ETF）挑選清單': '4. A checklist for picking index tools (ETFs)',
  '同樣「指數化」，工具良莠不齊。點六個檢核點：':
    'Not everything labelled "index" is built the same. Tap through the six checkpoints:',
  'ETF 六檢核點': 'Six ETF checkpoints',
  '① 追蹤什麼指數': '① Which index does it track',
  '核心 vs 戰術': 'Core vs tactical',
  '全市場／大盤加權（本課綱的核心工具）≠ 產業／主題／槓桿型——後者是戰術工具，常見「發行在題材最熱時」的反指標問題。':
    'Whole-market or cap-weighted (the core tool of this syllabus) is not the same as sector, thematic or leveraged. The latter are tactical instruments, and they have the familiar contrarian-indicator problem of being launched when the story is hottest.',
  '檢查法：打開公開說明書第一頁，看標的指數的全名。':
    'How to check: open the first page of the prospectus and read the full name of the underlying index.',
  '② 總費用率': '② Total expense ratio',
  '核心工具的當代合理量級 0.03–0.4%；超過 0.5% 的「指數」工具要問憑什麼。':
    'A reasonable level for a core tool today is 0.03–0.4%; any "index" product above 0.5% owes you an explanation.',
  '檢查法：發行商官頁或公開說明書「費用」章——記得保管費也算。':
    'How to check: the issuer\'s own page or the "fees" chapter of the prospectus — and remember custody fees count too.',
  '③ 追蹤差': '③ Tracking difference',
  '比費用率誠實': 'More honest than the fee',
  '③ 追蹤差（tracking difference）': '③ Tracking difference',
  '實際報酬 vs 指數的長期差距——比費用率更誠實，因為它含了所有隱性成本（周轉、借券收入、稅務效率）。':
    'The long-run gap between actual return and the index — more honest than the expense ratio, because it takes in every hidden cost (turnover, securities-lending income, tax efficiency).',
  '檢查法：對照基金月報的「基金 vs 指數」長期報酬表。':
    'How to check: the "fund vs index" long-run return table in the monthly factsheet.',
  '④ 規模與流動性': '④ Size and liquidity',
  '清算風險': 'Liquidation risk',
  '資產規模太小有清算風險；日均量與價差影響進出成本（W10 的五檔功課）。':
    'Too small a fund carries liquidation risk, and average daily volume and the spread drive your cost of getting in and out (the order-book homework from W10).',
  '檢查法：規模看發行商官頁；價差開盤中看五檔報價。':
    "How to check: size on the issuer's page; the spread from the five best bids and offers during trading hours.",
  '⑤ 配息 vs 累積': '⑤ Distributing vs accumulating',
  '長期累積者': 'For long-term accumulators',
  '海外累積型（配息自動再投入）對長期累積者稅務與紀律上常更有利——細節 Q4 週 50。':
    'For someone accumulating over the long run, an overseas accumulating class (distributions reinvested automatically) is often better on both tax and discipline — the details come in Q4, week 50.',
  '檢查法：名稱或說明書的 Acc（累積）/ Dist（配息）標記。':
    'How to check: the Acc (accumulating) / Dist (distributing) marker in the name or the prospectus.',
  '⑥ 發行商與結構': '⑥ Issuer and structure',
  '實體 vs 合成': 'Physical vs synthetic',
  '實體持有 vs 合成複製；大型發行商的核心產品通常是安全牌。':
    'Physical holdings versus synthetic replication; the core products of a large issuer are usually the safe bet.',
  '檢查法：說明書「投資策略」章看 physical / synthetic replication。':
    'How to check: the "investment strategy" chapter of the prospectus, looking for physical or synthetic replication.',
  '警語：': 'A warning: ',
  '「ETF」三個字不等於指數化——市面上大量主題型、槓桿型、反向型 ETF 是交易工具，與本週的長期核心邏輯無關。':
    'The three letters "ETF" do not mean index investing — the market is full of thematic, leveraged and inverse ETFs that are trading instruments and have nothing to do with the long-term core logic of this week.',

  /* ── 誠實邊界 ── */
  '5. 指數化的誠實邊界': '5. The honest limits of indexing',
  '拿到的是市場報酬': 'you get the market return',
  '——包含每一次 −40%（它不保護下檔，配置才保護，W14）':
    ' — including every −40% along the way (it does not protect the downside; allocation does, W14)',
  '市值加權的集中度': 'a cap-weighted index has its own concentration',
  '：台股大盤工具單一權值股佔比極高、美股前十大科技佔比也高——「買指數」仍有結構性押注，要知道自己買了什麼':
    ': a Taiwan market tracker carries an extremely high weight in one single stock, and the US market carries a heavy weight in the ten largest tech names — "buying the index" is still a structural bet, so know what you are buying',
  '不是所有市場都一樣有效率': 'not every market is equally efficient',
  '：大型股市場最難打敗；小型股、新興市場的主動空間理論上較大（但費用也更高，SPIVA 顯示多數仍輸）':
    ': large-cap markets are the hardest to beat, while small caps and emerging markets leave more theoretical room for active management (though fees are higher there too, and SPIVA shows most still lose)',
  '指數化解決「選股」問題，': 'Indexing solves the "which stock" problem, ',
  '不解決「配置」與「行為」問題':
    'it does not solve the "allocation" or "behaviour" problems',
  '——後兩者仍是你的功課（W14、W23）': ' — those two stay on your homework list (W14, W23)',

  /* ── 闢謠 ── */
  '6. 常見誤解闢謠': '6. Three things people get wrong',
  '「指數化＝躺平不用學」': '"Indexing means lying flat and learning nothing"',
  '你正在上的 52 週課就是反證：配置、成本、行為、稅務全是主動決定；指數化只是把「選股」這一項外包給市場。':
    'The 52-week course you are taking is the counter-example: allocation, cost, behaviour and tax are all active decisions. Indexing only outsources the "which stock" part to the market.',
  '「熊市時主動基金會保護你」': '"Active funds will protect you in a bear market"',
  'SPIVA 的熊市年度數據多次顯示多數主動基金跌得不比指數少；「下檔保護」靠配置，不靠經理人。':
    "SPIVA's bear-market years have repeatedly shown that most active funds fall no less than the index. Downside protection comes from allocation, not from a manager.",
  '「我買的基金去年贏大盤」': '"The fund I bought beat the market last year"',
  '一年是雜訊；看 10 年＋看它贏的年份是否只是風格順風（W32 因子週會給你更精確的透鏡）。':
    'One year is noise. Look at ten, and look at whether the years it won were just a style tailwind (the factor week, W32, hands you a sharper lens).',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '60 分': '60 min',
  '《約翰柏格投資常識》前半':
    'John Bogle, The Little Book of Common Sense Investing, first half',
  '本週主菜；Bogle 用五十年數據把第 1–3 節講成一本書。':
    'The main course this week; Bogle turns sections 1 to 3 into a whole book on fifty years of data.',
  '20 分': '20 min',
  'SPIVA 最新報告 ↗': 'The latest SPIVA report ↗',
  '把 W12 抄的數字更新成表：1／5／10／15 年落後比例各多少。':
    'Turn the numbers you copied down in W12 into a table: the share lagging over 1, 5, 10 and 15 years.',
  '15 分': '15 min',
  '兩頁的原典（史丹佛網站公開版）——親自讀一次「不需要數據的證明」。':
    'Two pages of the original (the public copy on the Stanford site) — read "the proof that needs no data" for yourself.',
  '10 分': '10 min',
  '專欄 #5 重讀 ↗': 'Column #5, reread ↗',
  'ETF 與定期定額；本週補上它背後的完整論證。':
    'ETFs and regular investing; this week fills in the full argument behind it.',
  '選讀': 'Optional',
  '台灣在地指數化著作任選章節':
    'Any chapter of a Taiwanese book on index investing',
  '台灣工具與制度的落地細節。':
    'The on-the-ground detail of Taiwanese products and rules.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '家庭基金總體檢（本週交付物）':
    "A full check-up on the family's funds (this week's deliverable)",
  '任務 A｜費用盤點（30 分鐘）': 'Task A | fee inventory (30 minutes)',
  '列出你與家人目前持有的': 'List ',
  '所有': 'every single',
  '基金／ETF／投資型保單（品名、金額）':
    ' fund, ETF and investment-linked policy you and your family currently hold (name and amount)',
  '逐一查總費用率：台灣投信基金查公開說明書「費用」章；ETF 查發行商官頁；投資型保單查保單條款（注意：保單常有':
    'Look up the total expense ratio of each: for Taiwanese mutual funds the "fees" chapter of the prospectus, for ETFs the issuer\'s own page, for investment-linked policies the policy terms (careful — policies often carry ',
  '多層': 'several layers of',
  '費用）': ' fees)',
  '算加權平均費用率：Σ(金額×費率) ÷ 總金額':
    'Work out the weighted average fee rate: Σ(amount × rate) ÷ total amount',
  '任務 B｜侵蝕試算（20 分鐘）': 'Task B | the erosion sum (20 minutes)',
  '用 W1 的複利表（或上面的計算器）：以目前總金額、假設毛報酬 7%、目前的加權費率 vs 0.2% 低成本方案，各拉 20 年——':
    'Use the W1 compounding sheet (or the calculator above): take your current total, assume a 7% gross return, and run your current weighted fee against a 0.2% low-cost alternative over 20 years each — then ',
  '寫下差額金額': 'write the difference down as an amount of money',
  '（不是百分比），並對照講義的 30 年表驗證量級。':
    ' (not a percentage), and check the order of magnitude against the 30-year table in the notes.',
  '驗收標準：': 'What counts as done: ',
  '家庭持有清單與加權費率算出（含投資型保單）；20 年侵蝕差額以金額寫出。':
    'The family holdings list and the weighted fee rate are worked out, investment-linked policies included, and the 20-year erosion gap is written down as an amount.',
  '自我檢核': 'Check yourself',
  '家庭持有清單與加權費率算出（含投資型保單）':
    'The family holdings list and the weighted fee rate are worked out (investment-linked policies included)',
  '20 年侵蝕差額以金額寫出': 'The 20-year erosion gap is written down as an amount',
  '若發現高費率部位，寫下「處理或保留」的一行決定與理由':
    'If you found a high-fee position, write one line on whether to deal with it or keep it, and why',

  /* ── 快問快答 ── */
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '「主動整體扣費後必輸被動」的論證，哪一步是會計恆等式、哪一步引入了費用？':
    'In the argument that active as a group must lose to passive after fees, which step is the accounting identity and which step brings the fees in?',
  '→ 「市場報酬＝全體加權平均」是': '→ "Market return = the weighted average of everyone" is an ',
  '會計恆等式': 'accounting identity',
  '（第 1–3 步，費用前成立）；第 4 步引入「主動費用 &gt; 被動費用」的事實，第 5 步得出扣費後必輸——前半是邏輯，後半只需要一個無爭議的事實。':
    ' (steps 1 to 3, and it holds before fees). Step 4 brings in the fact that active fees &gt; passive fees, and step 5 concludes that active must lose after fees — the first half is pure logic, the second half needs only one uncontested fact.',
  '為什麼「追蹤差」比「費用率」更誠實？':
    'Why is "tracking difference" more honest than "expense ratio"?',
  '→ 費用率只列': '→ The expense ratio lists only the ',
  '明示': 'stated',
  '收費；追蹤差＝實際拿到 vs 指數的全部差距，把周轉成本、借券收入、稅務效率等':
    ' charges. Tracking difference is the entire gap between what you actually received and the index, so turnover costs, securities-lending income and tax efficiency are all ',
  '隱性項全部結算': 'hidden items it settles up',
  '——它是「你實際少賺多少」的最終成績。':
    ' — it is the final score for "how much you really lost out on".',
  '一檔「半導體主題 ETF」符合本週的核心指數化邏輯嗎？':
    'Does a "semiconductor theme ETF" fit this week\'s core indexing logic?',
  '不符合': 'It does not',
  '——它是產業押注（單一非系統性主題），放棄了跨產業分散；且主題 ETF 常在題材最熱（最貴）時發行。它可以是衛星倉的戰術工具，但不是核心。':
    ' — it is an industry bet on a single unsystematic theme, giving up diversification across industries, and thematic ETFs tend to launch when the story is hottest, which is to say dearest. It can be a tactical satellite holding, but not a core one.',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '每年抽成的仲介': 'The middleman who takes a cut every year',
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。本週用自家的真數字講，是全 52 週最「值錢」的一次分享。':
    "You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). This week you use your family's real numbers, which makes it the most valuable sharing session of all 52.",
  '開場（猜謎）': 'Opening (the guessing game)',
  '「全世界的基金經理人——名校畢業、全職研究、領高薪——拉長十年，你猜幾成輸給『什麼都不選、直接買整個市場』的無腦策略？」（揭曉：八九成。「所以無腦的那個，其實是最聰明的預設。」）':
    '"Fund managers the world over — top-school graduates, researching full time, handsomely paid — over ten years, what share of them do you think lose to the brainless strategy of just buying the whole market?" (The reveal: eighty or ninety per cent. "So the brainless one turns out to be the smartest default.")',
  '核心比喻': 'The core metaphor',
  '「基金費用像': '"Fund fees are like a ',
  '：不管你賺賠，他先抽 1.5%。一年看是小錢——但複利也替他工作：三十年下來，他抽走的可能是你最後財產的三分之一。」（秀 263 萬那格。）':
    ': win or lose, he takes his 1.5% first. In one year it looks like small change — but compounding works for him too, and over thirty years what he takes may be a third of everything you end up with." (Show them the NT$2.63M cell.)',
  '互動：家庭體檢揭曉': 'Interaction: the family check-up reveal',
  '拿出任務 A 的盤點結果：「我們家目前平均年費率 ＿%，二十年差額大約 ＿ 萬。」（用自家的真數字講。）':
    'Bring out the results of Task A: "our family currently pays an average annual fee of ＿%, and over twenty years the difference comes to about NT$＿." (Use your family\'s real numbers.)',
  '預期反應與應對': 'What they will say, and what to answer',
  '「銀行理專說那檔基金很會賺」': '"The adviser at the bank says that fund does really well"',
  '「理專的收入來自你買的那檔的抽成，不來自你的報酬——聽建議前先看誰付他薪水。」（W35 會深談利益衝突。）':
    '"The adviser\'s income comes from the commission on what you buy, not from your return — before you take advice, look at who pays their salary." (W35 goes into conflicts of interest properly.)',
  '「那全部賣掉換指數？」': '"So do we sell it all and switch to index funds?"',
  '「不急著動作：有些有解約成本、稅務問題，我們列出來一項一項評估——':
    '"No rush to act: some of them carry surrender charges or tax consequences, so let us list them and go through them one at a time — ',
  '先看清楚，再慢慢調': 'see clearly first, then adjust slowly',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '能複述 Sharpe 算術的五步邏輯':
    "You can retell the five steps of Sharpe's arithmetic",
  '家庭基金體檢完成（清單＋加權費率＋侵蝕金額）':
    'The family fund check-up is done (list + weighted fee rate + erosion amount)',
  '能說出 ETF 六檢核點與指數化的四個誠實邊界':
    'You can name the six ETF checkpoints and the four honest limits of indexing',
  '分享環節完成（用自家數字），記錄卡住的點':
    "You have taught it using your family's own numbers and noted where they got stuck",
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 16 週完成——預設答案已確立。下週見：入場策略（Lump Sum vs DCA）。':
    '🎓 Week 16 done — the default answer is settled. Next up: entry strategy, lump sum vs DCA.',
  '下週預告 · Week 17：入場策略（Lump Sum vs DCA）':
    'Next week · Week 17: entry strategy (lump sum vs DCA)',
  '——手上有一筆錢，該一次進場還是分批？用數據回答，不用感覺回答。':
    ' — you have a lump of money: in all at once, or in instalments? Answer it with data, not with feelings.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：MPT 入門': 'Previous week: MPT, a first look',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
