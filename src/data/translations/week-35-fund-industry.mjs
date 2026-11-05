/*
 * 給家人的投資課 Week 35：基金實務——結構、費用、法規與利益衝突 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-35-fund-industry.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * JS 算出的『萬』後綴翻空字串，單位掛在標籤（Amount invested (NT$10k) 等）；『尾隨佣金』在散文與清單共用同一 key，故句子改成冒號後接大寫名詞（under one name: Trailing commission）。
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
  '給家人的投資課 · Q3 操盤手季 · Week 35':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 35',
  '基金實務——結構、費用、法規與利益衝突':
    'The fund industry in practice — structure, fees, regulation, and conflicts of interest',
  '想成為操盤手，就得懂這個行業的':
    'To become a portfolio manager you have to understand the industry\'s ',
  '管線':
    'plumbing',
  '：錢怎麼進來、費用怎麼分、誰對誰負責、誘因在哪裡歪掉。同一份知識反過來用，就是投資人的自保手冊。':
    ': how money comes in, how fees are split, who answers to whom, and where the incentives go crooked. The same knowledge used in reverse is an investor\'s self-defense handbook.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 16、31 週':
    'Prerequisites: Weeks 16 and 31',
  '52 週 · 第 35 週':
    '52 weeks · Week 35',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles: ',
  '操盤手要懂自己身處的產業結構；投資人要懂對面的薪水結構——「理專推薦的基金，錢怎麼分」本週有完整答案。':
    'A portfolio manager has to understand the industry structure they sit in; an investor has to understand the pay structure across the table — this week gives a full answer to "when a wealth adviser recommends a fund, how is the money split?"',
  '開始前 10 分鐘：':
    'First 10 minutes: ',
  '回顧上週的三條執行鐵律——家人記住「永遠限價、不搶開盤、先看熱不熱絡」了嗎？':
    'Look back at last week\'s three iron rules of execution — did your family remember "always use limit orders, don\'t rush the open, check how actively it trades first"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '銀行理專推薦你一檔基金。他的薪水，最終是誰付的？':
    'A bank wealth adviser recommends a fund to you. Who ultimately pays his salary?',
  '銀行付的，跟我無關':
    'The bank pays, nothing to do with me',
  '基金公司付的':
    'The fund company pays',
  '我付的，而且每年持續付':
    'I pay, and I keep paying every year',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 產品結構地圖：錢裝在什麼容器裡':
    '1. A map of product structures: what container your money sits in',
  '容器':
    'Container',
  '結構重點':
    'Key structural points',
  '監管與門檻':
    'Regulation and entry requirements',
  '公募共同基金':
    'Public mutual fund',
  '投信發行、每日以淨值申贖、資產由':
    'Issued by a fund house (investment trust company), bought and redeemed daily at net asset value; the assets are held by the ',
  '保管銀行':
    'custodian bank',
  '獨立保管':
    ', separately from the fund house',
  '散戶可買；公開說明書強制揭露':
    'Retail investors can buy; prospectus disclosure is mandatory',
  '在交易所買賣、實物申贖機制使市價貼近淨值':
    'Traded on an exchange; the in-kind creation and redemption mechanism keeps the market price close to net asset value',
  '同上；盤中即時交易（W16 的載具）':
    'Same as above; trades in real time during the day (the vehicle in W16)',
  '私募／對沖基金':
    'Private funds / hedge funds',
  '向少數合格投資人募集，策略彈性大（放空、槓桿、衍生品）':
    'Raised from a small number of qualified investors; strategies are flexible (short selling, leverage, derivatives)',
  '門檻高、揭露少、流動性差（鎖定期）':
    'High minimums, little disclosure, poor liquidity (lock-up periods)',
  '全權委託（代操）':
    'Discretionary account (managed account)',
  '你的帳戶、經理人代為操作':
    'Your account, traded on your behalf by a manager',
  '高門檻；資產在自己名下':
    'High minimum; assets stay in your own name',
  '投資型保單':
    'Investment-linked insurance policy',
  '保險外殼＋基金內裡':
    'An insurance wrapper with funds inside',
  '多層費用':
    'Multiple layers of fees',
  '的重災區':
    ' — this is where they pile up the worst',
  '關鍵保護機制':
    'The key protection',
  '：公募基金的資產放在':
    ': a public fund\'s assets sit with the ',
  '、不在投信手上——投信倒閉，基金資產無恙。這是「買基金」與「把錢交給某人操盤」的天壤之別，也是假投資盤永遠繞過的一環。':
    ', not in the fund house\'s hands — if the fund house goes under, the fund\'s assets are unharmed. This is the world of difference between "buying a fund" and "handing your money to someone to trade," and it is the one link that fake investment schemes always bypass.',
  '自保鐵則：錢永遠只進自己名下，或有獨立保管的帳戶。':
    'Self-protection rule: money only ever goes into accounts in your own name, or into an independently custodied account.',
  '2. 費用解剖：2／20 與台灣公募的帳單':
    '2. Anatomy of fees: 2-and-20 and the bill for Taiwan\'s public funds',
  '對沖基金的 2／20':
    'A hedge fund\'s 2-and-20',
  '：2% 管理費（不論賺賠）＋ 20% 績效費（賺的抽兩成）。算例：毛報酬 20% 的一年——管理費 −2% → 18%；績效費 20% × 18% ＝ −3.6% →':
    ': a 2% management fee (win or lose) + a 20% performance fee (a fifth of what\'s earned). Worked example: a year with a 20% gross return — management fee −2% → 18%; performance fee 20% × 18% = −3.6% → ',
  '投資人淨得 14.4%':
    'investors net 14.4%',
  '；費用合計 5.6 個百分點 ＝ 毛報酬的':
    '; total fees of 5.6 percentage points = ',
  '。虧損年（−10%）呢？管理費照收 → 投資人':
    ' of the gross return. And a losing year (−10%)? The management fee is still charged → the investor gets ',
  '，經理人照樣有收入——':
    ', and the manager still collects an income — ',
  '報酬共享、風險不共享':
    'returns are shared, risk is not',
  '好的基金會加兩道修正：':
    'A good fund adds two corrections: ',
  '（報酬超過門檻才抽績效費）與':
    ' (a performance fee is charged only on returns above a threshold) and ',
  '（淨值回到歷史高點之前不再抽）。看到沒有這兩個機制的 2／20，要加倍警惕。':
    ' (no more performance fees until net asset value gets back to its previous high). A 2-and-20 without these two mechanisms deserves double the suspicion.',
  '台灣公募股票基金的典型帳單':
    'A typical bill for a Taiwan public equity fund',
  '：經理費約 1.5%／年 ＋ 保管費約 0.15% ＋ 藏在淨值裡的周轉交易成本 ＋ 申購手續費——全部加總常見 2% 上下／年。對照 W16 的侵蝕表：30 年吃掉三分之一終值的那一列。':
    ': management fee of about 1.5% a year + custody fee of about 0.15% + turnover trading costs hidden in the net asset value + the sales charge on purchase — added up, around 2% a year is common. Compare it with the erosion table in W16: the row where 30 years eats a third of the final value.',
  '2／20 解剖台':
    '2-and-20 anatomy lab',
  '拉毛報酬與費率結構，看投資人實拿多少、費用吃掉毛報酬的幾成。':
    'Drag the gross return and the fee structure to see what the investor actually keeps and what share of the gross return the fees eat.',
  '毛報酬':
    'Gross return',
  '管理費':
    'Management fee',
  '績效費':
    'Performance fee',
  '投資人淨得':
    'Investor\'s net',
  '扣完兩層費用':
    'After both layers of fees',
  '費用合計':
    'Total fees',
  '管理費＋績效費':
    'Management fee + performance fee',
  '費用佔毛報酬':
    'Fees as a share of gross return',
  '經理人分走的比例':
    'The share the manager takes',
  '拉動滑桿。':
    'Drag the sliders.',
  '3. 利益衝突的管線圖：理專的薪水誰付的':
    '3. The conflict-of-interest pipeline: who pays the bank wealth adviser\'s salary',
  '錢的流向：你付的':
    'Where the money flows: the ',
  '申購手續費':
    'sales charge',
  '→ 銀行／通路；你每年付的':
    ' you pay on purchase → the bank / distributor; the ',
  '經理費':
    'management fee',
  '→ 投信 → 其中一大塊以':
    ' you pay every year → the fund house → a large share of it is rebated to the distributor, year after year, under one name: ',
  '尾隨佣金':
    'Trailing commission',
  '持續回扣給通路。三個結構性歪斜：':
    '. Three structural tilts:',
  '——通路每年從你付的經理費裡分成，所以有動機推薦高經理費的基金，並':
    ' — the distributor takes a cut of the management fee you pay every year, so it has an incentive to recommend funds with high management fees and to ',
  '勸你轉換':
    'urge you to switch',
  '（新申購費再收一次）而非長抱':
    ' (collecting a new sales charge again) rather than hold for the long term',
  '新基金偏好':
    'New-fund bias',
  '——新募集的行銷獎勵高。「熱門主題新基金」常是通路運動，而主題最熱＝估值最貴（W25 溫度計、W32 smart beta 解碼）':
    ' — marketing rewards for newly launched funds are high. A "hot-theme new fund" is often a distributor campaign, and the hotter the theme, the more expensive the valuation (W25\'s thermometer, W32\'s smart beta decoding)',
  '績效排名的短期化':
    'Short-termism in performance rankings',
  '——年度排名壓力 → 抱團、追風格、貼指數（W31 櫃子基金的誘因根源）':
    ' — pressure from annual rankings → herding, chasing styles, hugging the index (the root of the incentives behind W31\'s closet funds)',
  '受託義務':
    'Fiduciary duty',
  '的意義：法律上經理人須把受益人利益放第一——但通路端的「適合性義務」標準低得多（推薦「適合」的，不必是「最好」的）。':
    ' is what matters here: legally the manager must put the beneficiary\'s interest first — but the distributor\'s "suitability duty" is a much lower standard (recommending something "suitable" doesn\'t have to be the "best").',
  '知道對面的義務等級，就知道該打幾折聽。':
    'Know the level of duty on the other side, and you will know how much of the advice to discount.',
  '費差的 20 年帳單':
    'The 20-year bill for a fee difference',
  '同樣的市場報酬，一檔收得貴、一檔收得便宜。拉金額、年數與兩邊的總費用率。':
    'Same market return, but one fund charges a lot and the other charges little. Drag the amount, the number of years, and each side\'s total expense ratio.',
  '投入金額':
    'Amount invested (NT$10k)',
  '100 萬':
    '100',
  '年數':
    'Years',
  '20 年':
    '20 years',
  '主動基金總費用':
    'Active fund\'s total expense ratio',
  'ETF 總費用':
    'ETF\'s total expense ratio',
  '主動基金終值':
    'Active fund\'s final value (NT$10k)',
  '市場年報酬 7% 為例':
    'Assuming a 7% annual market return',
  'ETF 終值':
    'ETF\'s final value (NT$10k)',
  '同一個市場':
    'The same market',
  '差距':
    'Gap (NT$10k)',
  '費差的代價':
    'The cost of the fee difference',
  '4. 公開說明書：十分鐘讀懂一檔基金':
    '4. The prospectus: understand a fund in ten minutes',
  '費用表':
    'The fee table',
  '——經理費、保管費、申購／轉換費，跟同類比':
    ' — management fee, custody fee, sales and switching charges, compared with similar funds',
  '投資目標與限制':
    'Investment objectives and restrictions',
  '——能不能放空？衍生品上限？持股集中度上限？這是它「會做什麼」的合約':
    ' — can it short? What is the cap on derivatives? What is the cap on concentration? This is the contract for "what it will do"',
  '風險揭露':
    'Risk disclosure',
  '——法定套話居多，但「特殊風險」段（單一產業、匯率、流動性）值得看':
    ' — mostly boilerplate required by law, but the "special risks" section (single sector, currency, liquidity) is worth reading',
  '歷史績效與基準':
    'Historical performance and benchmark',
  '——用 W31 的眼睛：基準選得誠實嗎？含息嗎？':
    ' — with W31\'s eyes: is the benchmark chosen honestly? Does it include dividends?',
  '加一個場外動作：查':
    'Add one step from outside the document: check ',
  '經理人任期':
    'the manager\'s tenure',
  '——績效是現任做的，還是前任留的？台灣公募經理人更替頻繁，十年績效可能換了四手。':
    ' — was the performance produced by the current manager, or inherited from the previous one? Taiwan\'s public fund managers change often; a ten-year record may have passed through four hands.',
  '5. 常見誤解闢謠':
    '5. Three things people get wrong',
  '「銀行賣的基金比較安全。」':
    '"Funds sold by banks are safer."',
  '銀行是':
    'A bank is a ',
  '通路':
    'distributor',
  '不是保證人；基金的安全來自保管機制，跟在哪買無關。在銀行買的差別，主要是多付一層通路費。':
    ', not a guarantor; a fund\'s safety comes from the custody mechanism and has nothing to do with where you buy it. Buying at a bank mostly means paying one extra layer of distribution fees.',
  '「基金公司大＝基金好。」':
    '"A big fund company means a good fund."',
  '規模大的投信有資源，但單檔基金的好壞看策略、費用、經理人——W16 與 W31 的工具照用。':
    'A large fund house has resources, but whether any single fund is good depends on its strategy, fees, and manager — use the tools from W16 and W31 as usual.',
  '「私募／對沖基金是有錢人的好東西。」':
    '"Private funds and hedge funds are good things for rich people."',
  '平均而言扣費後未勝公募指數。門檻篩選的是「你的錢」不是「它的能力」——高費、低透明、鎖定期，需要的盡職調查遠超散戶能力。':
    'On average they don\'t beat public index funds after fees. The minimum investment screens for "your money," not "its ability" — high fees, low transparency, and lock-up periods demand due diligence far beyond a retail investor\'s capability.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '主菜：精讀一份真實的公開說明書':
    'The main course: read a real prospectus closely',
  '60 分鐘':
    '60 min',
  '實戰精讀：一檔你家實際持有（或被推銷過）的基金':
    'Close reading in practice: a fund your family actually holds (or has been pitched)',
  '下載公開說明書與最新月報（投信官網或公開資訊觀測站基金專區），用第 4 節的四章節法精讀做筆記。':
    'Download the prospectus and the latest monthly report (from the fund house\'s website or the fund section of MOPS, the Market Observation Post System), and read closely using the four-section method from section 4, taking notes.',
  '30 分鐘':
    '30 min',
  'Investopedia：12b-1 Fee 與 High-Water Mark':
    'Investopedia: 12b-1 Fee and High-Water Mark',
  '12b-1 是美國版的尾隨佣金。':
    'The 12b-1 fee is the US version of the trailing commission.',
  '15 分鐘':
    '15 min',
  '掃一遍專業自律準則的目錄——知道「應然」長什麼樣，才看得出「實然」歪在哪。':
    'Skim the table of contents of a professional code of conduct — knowing what "should be" looks like is how you see where "what is" is bent.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '一檔真實基金的完整成本拆解':
    'A full cost breakdown of one real fund',
  '任務 A｜成本拆解表（40 分鐘）':
    'Task A | The cost breakdown table (40 minutes)',
  '列出全部費用層：申購費（實付折後）、經理費、保管費、可查到的話用周轉率推估的隱性成本':
    'List every layer of fees: sales charge (what you actually paid after discounts), management fee, custody fee, and — if you can find it — the hidden costs estimated from the turnover rate',
  '算':
    'Work out the ',
  '總持有成本 %／年':
    'total cost of ownership, % per year',
  '（申購費按預計持有年限攤提）':
    ' (with the sales charge spread over the expected holding period)',
  '找一檔同曝險的 ETF 對照——費用差幾倍？':
    'Find an ETF with the same exposure to compare — how many times cheaper is it?',
  '丟進上面的 20 年帳單：這個費差、你的實際金額、20 年 ＝ 多少錢':
    'Put it into the 20-year bill above: this fee gap, your actual amount, 20 years = how much money',
  '手算講義的 2／20 算例（14.4% 與 28%）':
    'Work out the notes\' 2-and-20 example by hand (14.4% and 28%)',
  '怎麼知道做對了：':
    'How you know you got it right: ',
  '2／20 解剖台預設值必須是淨得 14.4%、費用 5.6、佔 28%；把毛報酬拉到 −10%，淨得必須是 −12%（管理費照收、績效費為零）。':
    'The 2-and-20 anatomy lab\'s defaults must show a net of 14.4%, total fees of 5.6, and a 28% share; drag the gross return to −10% and the net must be −12% (management fee still charged, performance fee zero).',
  '真實基金成本拆解表完成（含 20 年金額換算）':
    'Real fund cost breakdown table done (including the 20-year money conversion)',
  '2／20 算例手算通過':
    '2-and-20 example worked by hand and checked',
  '公開說明書四章節筆記完成':
    'Notes on the four sections of the prospectus done',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  '為什麼「保管銀行」機制是判斷詐騙盤的第一道濾網？':
    'Why is the "custodian bank" mechanism the first filter for spotting a scam fund?',
  '→ 合法基金的資產':
    '→ A legitimate fund\'s assets ',
  '不經過操盤者的手':
    'never pass through the trader\'s hands',
  '（獨立保管、投信只有指令權）；詐騙盤的共同結構是「把錢匯進他們控制的帳戶」。問「誰保管」直接打中要害——答不出獨立保管機制的「投資機會」，直接離開。':
    ' (held independently; the fund house only has the power to give instructions); the shared structure of scam schemes is "wire your money into an account they control." Asking "who holds the custody?" hits the heart of it — if an "investment opportunity" can\'t answer with an independent custody mechanism, walk away.',
  '尾隨佣金如何解釋「理專常勸你轉換基金」？':
    'How does the trailing commission explain why "wealth advisers keep urging you to switch funds"?',
  '→ 轉換 ＝ 新的申購手續費＋可能轉進尾隨更高的新基金——':
    '→ A switch = a new sales charge + possibly moving into a new fund with a higher trailing commission — ',
  '你的每次轉換都是通路的營收事件':
    'every switch you make is a revenue event for the distributor',
  '；長抱一檔低費基金對通路是最差劇本。判斷方法：他勸你換入的，費用更高還是更低？':
    '; holding one low-fee fund for the long term is the worst script for a distributor. How to judge: is the fund he urges you to switch into higher-fee or lower-fee?',
  '沒有 high-water mark 的績效費，會發生什麼荒謬情境？':
    'What absurd situation arises with a performance fee that has no high-water mark?',
  '→ 第一年 +30%（抽績效費）、第二年 −30%（不退還）、第三年 +20% 又從頭抽——投資人來回原地附近，卻被抽了兩輪績效費。high-water mark 要求淨值先回到歷史高點，之後的獲利才能再抽；沒有它，等於獎勵波動而非累積報酬。':
    '→ Year one +30% (performance fee charged), year two −30% (not refunded), year three +20% and it is charged again from scratch — the investor ends up near where they started, yet has paid two rounds of performance fees. A high-water mark requires net asset value to first get back above its previous peak before further gains can be charged again; without it, volatility is rewarded rather than cumulative return.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '解謎：理專的薪水誰付的':
    'Solving the puzzle: who pays the wealth adviser\'s salary',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（解謎時刻）':
    'Opening (the reveal)',
  '「之前留了一個問題：銀行理專推薦基金，他的薪水誰付？」（畫管線圖：你付的手續費 → 銀行；你每年付的經理費 → 投信 → 每年回扣一塊給銀行。）「所以答案是：':
    '"I left you a question earlier: when a bank wealth adviser recommends a fund, who pays his salary?" (Draw the pipeline: the sales charge you pay → the bank; the management fee you pay every year → the fund house → a slice rebated to the bank every year.) "So the answer is: ',
  '你付的，而且是每年持續付':
    'you pay it, and you pay it every year',
  '——這就是為什麼他隔一陣子就打來勸你『換一檔更好的』：換一次，手續費再收一次。」':
    ' — which is why he calls every so often to urge you to \'switch to a better one\': every switch, the sales charge is collected again."',
  '自保三問（給家人帶走的卡片）':
    'Three self-protection questions (a card for the family to take away)',
  '①「這檔':
    '① "How much does this fund charge me ',
  '每年':
    'every year',
  '收我多少 %？」（不是只問申購費）②「跟直接買 0050／全球 ETF 比，貴幾倍？貴的理由是什麼？」③「我的錢放在':
    ', in %?" (Not just the sales charge.) ② "Compared with just buying 0050 or a global ETF, how many times more expensive is it, and what is the reason it costs more?" ③ "Where is my money held — in ',
  '誰名下、誰保管':
    'whose name, and under whose custody',
  '聽不到「保管銀行」四個字就離開——這一問同時能擋掉九成假投資詐騙。':
    'If you don\'t hear the words "custodian bank," walk away — this one question also blocks 90% of fake investment scams.',
  '互動（實戰）':
    'Interaction (in practice)',
  '拿出任務 A 拆解的那檔基金：「我們家這檔，每年總成本＿%，同樣內容的 ETF 只要＿%——20 年差＿萬。」自家數字永遠最有說服力。':
    'Take out the fund you broke down in Task A: "Our fund costs _% a year in total; an ETF with the same holdings costs only _% — over 20 years, the gap is NT$____." Your own family\'s numbers are always the most persuasive.',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「理專人很好耶。」':
    '"But the wealth adviser is such a nice person."',
  '「人好和誘因歪不衝突——他也是制度裡的員工。不怪人，但要懂制度：聽建議前先想他的薪水結構。」':
    '"Being nice and having bent incentives don\'t conflict — he\'s an employee inside a system too. Don\'t blame the person, but do understand the system: before you take advice, think about his pay structure."',
  '「那基金都不能買？」':
    '"So we can\'t buy funds at all?"',
  '「不是——費用合理、策略你懂、基準誠實的基金可以買。壞的不是基金，是不明不白地買。」':
    '"No — funds with reasonable fees, a strategy you understand, and an honest benchmark are fine to buy. What\'s bad isn\'t the fund; it\'s buying without knowing what you\'re buying."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能畫出基金業的錢流管線圖（含尾隨佣金）':
    'Can draw the money-flow pipeline of the fund industry (including trailing commission)',
  '真實基金拆解完成、能對家人講出自保三問':
    'Real fund breakdown done, and can tell the family the three self-protection questions',
  '能解釋 2／20、hurdle、high-water mark':
    'Can explain 2-and-20, the hurdle rate, and the high-water mark',
  '分享環節完成，記錄卡住的點':
    'Teaching session done; note where you got stuck',
  '回填 curriculum/01-overview.md 第 35 週進度欄':
    'Fill in the Week 35 progress column of curriculum/01-overview.md',
  '下週預告 · Week 36：決策流程':
    'Next week · Week 36: the decision process',
  '——把 W8 紅旗、W23 對策、W26 反方論證組裝成「買入前檢查清單」，並學會機構的事前驗屍（premortem）。':
    ' — assemble W8\'s red flags, W23\'s countermeasures, and W26\'s counter-argument into a "pre-purchase checklist," and learn the institutional premortem.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：交易執行':
    'Previous week: trade execution',
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
  '答對了——你付的申購手續費進通路，你每年付的經理費有一大塊以尾隨佣金持續回扣給通路。所以他有動機推高費的基金、勸你轉換：換一次，手續費再收一次。':
    'Correct — the sales charge you pay goes to the distributor, and a big chunk of the management fee you pay every year is rebated to the distributor as a trailing commission. So he has an incentive to push high-fee funds and urge you to switch: every switch, the sales charge is collected again.',
  '表面上是，但錢的源頭是你：你付的申購手續費進通路，你每年付的經理費有一大塊以尾隨佣金持續回扣給通路。所以他有動機推高費的基金、勸你轉換——換一次，手續費再收一次。':
    'On the surface, yes, but the source of the money is you: the sales charge you pay goes to the distributor, and a big chunk of the management fee you pay every year is rebated to the distributor as a trailing commission. So he has an incentive to push high-fee funds and urge you to switch — every switch, the sales charge is collected again.',
  '<b>虧損年，管理費照收。</b>市場給你':
    '<b>In a losing year, the management fee is still charged.</b> The market gave you',
  '，你拿到':
    ', and you got',
  '——經理人依然有收入。報酬共享、風險不共享。':
    ' — the manager still earns an income. Returns are shared; risk is not.',
  '<b>毛報酬還不夠付管理費。</b>市場給了正報酬，你卻是負的——費用吃掉了全部。':
    '<b>Gross return isn\'t even enough to pay the management fee.</b> The market gave a positive return, yet yours is negative — fees ate all of it.',
  '<b>市場給':
    '<b>The market gave',
  '%，你拿':
    '%, and you got',
  '%。</b>經理人分走毛報酬的':
    '%.</b> The manager took',
  '%——在最好的年份，費用結構才看起來合理；問題永遠在平淡和虧損的年份。':
    '% of the gross return — fees only look reasonable in the best years; the problem is always in the flat and losing years.',
  '萬':
    '',
  '年':
    'years',
  '<b>每年只差':
    '<b>A fee gap of just',
  '個百分點，':
    'percentage points a year adds up: after',
  '年後差':
    'years the gap is',
  '萬——相當於 ETF 終值的':
    '(NT$10k) — equal to',
  '%。</b>主動基金必須每年多賺回這個費差，才只是打平。':
    '% of the ETF\'s final value.</b> The active fund has to earn back this fee gap every year just to break even.',
  '✓ 管線看懂了——下週把散落的工具組裝成買入前檢查清單。':
    '✓ The pipeline makes sense — next week, assemble the scattered tools into a pre-purchase checklist.',
};
