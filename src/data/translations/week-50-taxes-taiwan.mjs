/*
 * 給家人的投資課 Week 50：稅務基礎——台灣投資人的稅務地圖 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-50-taxes-taiwan.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 稅務事實維持精確（28% 分離、8.5% 抵減上限 NT$80,000、2.11% 補充保費、單筆 NT$20,000、海外所得 NT$1 million 線、20%、5%）。JS 後綴「萬」＝空字串，單位掛標籤 (NT$10k)；「元」＝NT dollars。「100 萬」同 key 兩用（散文＝NT$1 million，滑桿由 JS 覆寫）。
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
  '給家人的投資課 · Q4 財務長季 · Week 50':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 50',
  '稅務基礎——台灣投資人的稅務地圖':
    'Tax Basics — A Tax Map for Taiwanese Investors',
  '報酬的最後一道濾網。你在 W16 算過費用的複利侵蝕——稅是同一類敵人，但':
    'The last filter on your returns. In W16 you worked out how fees erode compounding — tax is the same kind of enemy, but ',
  '合法的安排空間更大':
    'there is more legal room to arrange it',
  '。本週建立台灣投資人與公司的稅務地圖，核心交付：把自己和家人的「股利課稅二擇一」算清楚。':
    '. This week builds a tax map for Taiwanese investors and companies, with one core deliverable: working out the "combined or separate taxation of dividends" choice for yourself and your family.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 10、44 週':
    'Prerequisites: Weeks 10, 44',
  '52 週 · 第 50 週':
    '52 weeks · Week 50',
  '⚠ 特別聲明：':
    '⚠ Special notice: ',
  '稅法經常修訂。本頁的稅率與門檻是撰寫時的通則整理，':
    'Tax law is revised often. The rates and thresholds on this page are a general summary as of writing, and ',
  '實際申報以財政部、國稅局當年度公告為準':
    'actual filing is governed by the announcements the Ministry of Finance and the National Taxation Bureau make for that year',
  '；重大金額決策前建議諮詢會計師。目標是讓你「會算、會問對問題」，不是取代專業意見。':
    '; for any large financial decision, consult an accountant. The goal is to help you "know how to calculate and ask the right questions," not to replace professional advice.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的殺信使測試——家人記住「看它回應內容，還是攻擊動機」了嗎？':
    'Look back at last week\'s shoot-the-messenger test — has your family remembered to "look at whether it responds to the substance or attacks motives"?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一位綜所稅率 5% 的上班族，今年領了 50 萬股利，選擇合併計稅。他要多繳多少稅？':
    'A salaried worker with a 5% marginal income-tax rate receives NT$500,000 in dividends this year and chooses combined taxation. How much extra tax does he owe?',
  '多繳 2.5 萬':
    'NT$25,000 more',
  '多繳 14 萬':
    'NT$140,000 more',
  '不用繳，還退 1.75 萬':
    'Nothing — and he even gets NT$17,500 back',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 台灣投資稅制地圖（個人端）':
    '1. The map of Taiwan\'s investment taxes (individuals)',
  '稅目':
    'Tax item',
  '規則（通則）':
    'Rule (general)',
  '備註':
    'Notes',
  '證券交易稅':
    'Securities transaction tax',
  '賣出時 0.3%（股票）／0.1%（ETF）':
    'Charged on sales: 0.3% (stocks) / 0.1% (ETFs)',
  'W10 學過——買進不課':
    'Learned in W10 — no tax on purchases',
  '證券交易所得稅':
    'Securities transaction income tax',
  '現行':
    'Currently ',
  '停徵':
    'suspended',
  '（個人買賣上市股票的價差）':
    ' (individuals\' capital gains on listed stocks)',
  '台灣長期投資人最大的稅務紅利':
    'The biggest tax bonus for long-term investors in Taiwan',
  '股利所得':
    'Dividend income',
  '二擇一':
    'Choose one of two',
  '（下節詳算）':
    ' (worked out in the next section)',
  '每年報稅時選':
    'Chosen each year when you file',
  '二代健保補充保費':
    'Supplementary NHI premium',
  '單筆股利達 2 萬即收 2.11%':
    '2.11% charged on any single dividend payment of NT$20,000 or more',
  '領股息的隱藏成本':
    'The hidden cost of receiving dividends',
  '海外所得':
    'Overseas income',
  '年滿 100 萬計入最低稅負制':
    'Counted under the alternative minimum tax (basic income tax) once it reaches NT$1 million a year',
  '第 3 節':
    'Section 3',
  '先看懂全局':
    'First, the big picture',
  '：台灣稅制對「價差」極友善（停徵）、對「股息」相對重（所得稅＋補充保費）。這個不對稱是理解台灣投資稅務的鑰匙，也呼應 W44：':
    ': Taiwan\'s tax system is very friendly to "price gains" (suspended) and relatively heavy on "dividends" (income tax + supplementary premium). This asymmetry is the key to understanding investment taxes in Taiwan, and it echoes W44: ',
  '同樣的總報酬，「填息的價差」與「領到的股息」稅負不同':
    'for the same total return, the tax differs between "the price gain from recovering the dividend drop" and "dividends actually received"',
  '2. 股利課稅二擇一：本週的核心計算':
    '2. Choosing how dividends are taxed: this week\'s core calculation',
  '合併計稅':
    'Combined taxation',
  '：股利併入綜合所得課稅，但享有':
    ': dividends are added to your comprehensive income and taxed, but you get ',
  '股利 × 8.5% 的抵減稅額（上限 8 萬）':
    'a tax credit of dividends × 8.5% (capped at NT$80,000)',
  '分離課稅':
    'Separate taxation',
  '：股利單獨以':
    ': dividends are taxed on their own at ',
  '課稅，不進綜所稅':
    ' and are kept out of the individual income tax',
  '完整算例｜股利 50 萬':
    'Full worked example | dividends of NT$500,000',
  '（抵減 42,500，沒碰到 8 萬上限）：':
    ' (credit of NT$42,500, which does not reach the NT$80,000 cap):',
  '綜所稅邊際稅率':
    'Marginal income-tax rate',
  '合併淨稅負（稅 − 抵減）':
    'Net tax under combined taxation (tax − credit)',
  '分離（28%）':
    'Separate (28%)',
  '該選':
    'Better choice',
  '−17,500（退稅）':
    '−17,500 (refund)',
  '合併':
    'Combined',
  '分離':
    'Separate',
  '交叉點的數學':
    'The math of the crossover',
  '：合併划算的條件是 t × D − 8.5% × D 小於 28% × D →':
    ': combined taxation pays off when t × D − 8.5% × D is less than 28% × D → ',
  't 小於 36.5%':
    't is less than 36.5%',
  '。只有適用最高級距 40% 的人該選分離。但股利大到抵減觸頂 8 萬（約 94 萬以上）時，交叉點會往下移——要細算。':
    '. Only people in the top 40% bracket should choose separate taxation. But when dividends are large enough that the credit hits its NT$80,000 cap (from about NT$940,000 up), the crossover point moves lower — calculate carefully.',
  '簡化說明：這裡用「邊際稅率 × 股利」估算增加的稅；股利金額大到跨越級距時，實際稅負要分段計算。':
    'Simplified: this uses "marginal rate × dividends" to estimate the added tax; when dividends are large enough to cross brackets, the real tax has to be calculated bracket by bracket.',
  '二擇一計算機':
    'Dividend-choice calculator',
  '選你的綜所稅邊際稅率，輸入一年的股利。':
    'Pick your marginal income-tax rate and enter a year\'s dividends.',
  '一年股利':
    'Annual dividends (NT$10k)',
  '50 萬':
    '50',
  '稅 − 抵減（元）':
    'Tax − credit (NT$)',
  '28%（元）':
    '28% (NT$)',
  '你的交叉稅率':
    'Your crossover rate',
  '低於它選合併':
    'Choose combined below it',
  '補充保費':
    'Supplementary premium',
  '2.11%，兩種都要繳':
    '2.11%, payable under either option',
  '3. 海外投資的稅（全球配置者必修，接 W14）':
    '3. Taxes on overseas investing (a must for global allocators; follows W14)',
  '美股股息預扣 30%':
    '30% withholding on US dividends',
  '：台美沒有租稅協定，美國公司發的股息先扣三成（1,000 美元實收 700）。這是愛爾蘭註冊 ETF 受台灣投資人歡迎的主因：美股股息的預扣降到 15%，累積型也不產生每年的配息申報（W16 挑選清單第 5 點的稅務原因補完）':
    ': Taiwan and the US have no tax treaty, so dividends paid by US companies are withheld at 30% first (US$1,000 pays out US$700). This is the main reason Irish-domiciled ETFs are popular with Taiwanese investors: the withholding on US dividends drops to 15%, and an accumulating share class also produces no annual dividend filing (which completes the tax reason behind point 5 of W16\'s selection checklist)',
  '資本利得':
    'Capital gains',
  '：美國對外國人不課證券交易的資本利得稅——海外價差主要面對的是台灣端':
    ': the US does not tax foreigners\' capital gains on securities trading — the price gains on overseas holdings mainly face the Taiwan side',
  '台灣端的最低稅負制':
    'The alternative minimum tax on the Taiwan side',
  '：海外所得（含價差、股息）年滿':
    ': once overseas income (including price gains and dividends) reaches ',
  '100 萬':
    'NT$1 million',
  '須計入基本所得額；扣除免稅額度（數百萬級，以當年公告為準）後，超過部分與一般所得稅擇高、課 20%。多數中產投資人實際上課不到，但申報義務與成本紀錄要做好':
    ' a year, it must be counted in basic income. After deducting the exemption amount (in the millions of NT dollars; follow that year\'s announcement), the excess is taxed at 20%, and you pay whichever is higher — that or your regular income tax. Most middle-class investors never actually owe it, but the filing duty and the cost records still need to be handled',
  '紀錄紀律':
    'Record discipline',
  '：海外券商不會幫你報稅——每筆買賣的成本、日期、匯率自己留存（W27 的模擬組合記錄格式就是現成模板）':
    ': overseas brokers won\'t file your taxes for you — keep the cost, date and exchange rate of every trade yourself (the record format of W27\'s paper portfolio is a ready-made template)',
  '股息預扣稅的 20 年帳單':
    'The 20-year bill for dividend withholding tax',
  '同一個市場（總報酬 7%），只差在股息被預扣多少。示意比較：美國註冊配息型（預扣 30%）vs 愛爾蘭註冊累積型（基金層預扣 15%）。':
    'The same market (7% total return), differing only in how much of the dividends is withheld. An illustrative comparison: US-domiciled distributing fund (30% withheld) vs Irish-domiciled accumulating fund (15% withheld at the fund level).',
  '投入金額':
    'Amount invested (NT$10k)',
  '股息殖利率':
    'Dividend yield',
  '年數':
    'Years',
  '20 年':
    '20 years',
  '美國註冊（30%）':
    'US-domiciled (30%)',
  '終值':
    'End value (NT$10k)',
  '愛爾蘭註冊（15%）':
    'Irish-domiciled (15%)',
  '差距':
    'Gap (NT$10k)',
  '預扣稅的複利代價':
    'Compounding cost of withholding tax (NT$10k)',
  '4. 公司端速覽（CFO 視角收尾）':
    '4. Corporate side at a glance (closing from the CFO\'s view)',
  '營所稅 20%':
    'Corporate income tax 20%',
  '未分配盈餘加徵 5%':
    '5% surtax on undistributed earnings',
  '——賺 100、稅後 80，若全保留，次年再繳 4。這是台灣特有的「催吐條款」，也是高配發率文化的另一個制度推手（W44 的拼圖補完）；產創條例的實質投資可以扣除，是「保留下來蓋廠」的緩衝':
    ' — earn 100, 80 after tax; if all of it is retained, you pay 4 more the next year. This is Taiwan\'s own "forced-payout clause," and another institutional push behind the high-payout culture (completing the W44 puzzle); substantial investment under the Statute for Industrial Innovation can be deducted, which is the cushion for "retaining earnings to build a plant"',
  '研發投資抵減':
    'R&D investment credits',
  '：科技業有效稅率常低於 20% 的原因':
    ': one reason the effective tax rate of tech companies is often below 20%',
  '讀年報的「所得稅」附註：':
    'Read the "income tax" note in the annual report: ',
  '有效稅率調節表':
    'the effective tax rate reconciliation',
  '顯示法定 20% 與實繳的差距來自哪裡（抵減、海外稅率差、前年虧損扣抵）——CFO 的合法節稅成績單':
    ' shows where the gap between the statutory 20% and the tax actually paid comes from (credits, overseas rate differences, loss carryforwards) — the CFO\'s report card on legal tax saving',
  '5. 常見誤解闢謠':
    '5. Three things people get wrong',
  '「省稅最大化，就是最優投資。」':
    '"Maximizing tax savings means the best investment."',
  '順序永遠是：好投資 → 稅務優化。為了免稅扭曲配置——過度重押高股息或保險商品——是撿稅金的芝麻、丟報酬的西瓜（W16、W44 的總報酬視角）。':
    'The order is always: a good investment first, tax optimization second. Distorting your allocation to avoid tax — piling into high-dividend stocks or insurance products — is picking up sesame seeds of tax while throwing away the watermelon of return (the total-return view of W16 and W44).',
  '「海外所得反正查不到。」':
    '"Overseas income can\'t be found out anyway."',
  '金融帳戶資訊交換（CRS）已是國際常態；合法申報＋善用免稅額度，成本遠低於補稅加罰的尾部風險。用 W33 的語言說：逃稅是賣尾部風險。':
    'Automatic exchange of financial account information (CRS) is now the international norm; filing legally and using the exemption amounts well costs far less than the tail risk of back taxes plus penalties. In W33\'s language: tax evasion is selling tail risk.',
  '「股利會退稅，所以多領股利多賺。」':
    '"Dividends get a tax refund, so the more dividends the better."',
  '退的是抵減，本質是把公司已繳的稅部分還給你；投資決策仍看總報酬（W44），稅只是排序相近選項時的加分項。':
    'What is refunded is the credit, which in essence returns part of the tax the company already paid to you; investment decisions still look at total return (W44), and tax is only a tiebreaker when ranking close options.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '講義給框架，官方給數字':
    'The notes give the framework; the official sources give the numbers',
  '40 分鐘':
    '40 min',
  '財政部稅務入口網':
    'Ministry of Finance Tax Portal',
  '查「股利所得課稅」與「基本稅額（最低稅負制）」主題頁，':
    'Look up the topic pages on "taxation of dividend income" and "basic tax (alternative minimum tax)," and ',
  '驗證本頁的稅率與門檻是否為現行值':
    'check whether the rates and thresholds on this page are the current ones',
  '，註明查證日期。':
    ', noting the date you checked.',
  '財政部稅務入口網 ↗':
    'Ministry of Finance Tax Portal ↗',
  '30 分鐘':
    '30 min',
  '綠角：海外券商稅務系列':
    'Green Horn: the overseas-broker tax series',
  '台灣投資人海外稅務最完整的民間整理之一。':
    'One of the most complete independent write-ups of overseas taxes for Taiwanese investors, by the Taiwanese index-investing blogger.',
  '20 分鐘':
    '20 min',
  '實習公司年報的所得稅附註':
    'The income-tax note in your internship company\'s annual report',
  '找有效稅率調節表——它實際稅率幾 %？差異來自哪裡？':
    'Find the effective tax rate reconciliation — what is its actual tax rate, in %? Where do the differences come from?',
  '選讀':
    'Optional',
  '健保署「補充保險費」說明頁':
    'The National Health Insurance Administration\'s "supplementary premium" explainer page',
  '單筆門檻與費率的官方說明。':
    'The official explanation of the per-payment threshold and the rate.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '家庭稅務體檢（本週交付物）':
    'Family tax check-up (this week\'s deliverable)',
  '任務 A｜二擇一試算（25 分鐘）':
    'Task A | Two-option dividend calculation (25 min)',
  '用你（或家人）的實際邊際稅率與年股利金額跑二擇一；先重算講義 50 萬 × 五級距的表':
    'Run the choice with your (or your family\'s) actual marginal tax rate and annual dividend amount; first recompute the notes\' table of NT$500,000 × five brackets',
  '找出你家的正確選擇，以及一年差多少錢':
    'Find the right choice for your household, and how much it differs by in a year',
  '順手算補充保費：現有持股的配息，單筆超過 2 萬的有哪些？':
    'While you\'re at it, work out the supplementary premium: which of your current holdings pay a single dividend of more than NT$20,000?',
  '任務 B｜海外部位稅務盤點（20 分鐘）':
    'Task B | Overseas holdings tax inventory (20 min)',
  '若有（或規劃中）海外投資：確認工具類型的稅務差異（美國註冊 vs 愛爾蘭註冊）、估算距離「海外所得 100 萬申報線」多遠、成本紀錄是否齊全。':
    'If you hold (or plan to hold) overseas investments: confirm the tax differences between instrument types (US-domiciled vs Irish-domiciled), estimate how far you are from the "NT$1 million overseas income filing line," and check whether your cost records are complete.',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '二擇一計算機（股利 50 萬）：5% 級距合併是 −17,500（退稅）、分離 140,000；40% 級距合併 157,500、分離 140,000，結論翻成分離；交叉稅率 36.5%。股利拉到 150 萬，抵減觸頂 8 萬，交叉稅率降到 33.3%。預扣稅帳單（100 萬、殖利率 2%、20 年）：美國註冊 345.8 萬、愛爾蘭註冊 365.8 萬，差 20.0 萬。':
    'Dividend-choice calculator (dividends of NT$500,000): at the 5% bracket combined is −17,500 (a refund) and separate is 140,000; at the 40% bracket combined is 157,500 and separate is 140,000, so the conclusion flips to separate; the crossover rate is 36.5%. Push dividends up to NT$1.5 million and the credit hits its NT$80,000 cap, so the crossover rate drops to 33.3%. Withholding-tax bill (NT$1 million, yield 2%, 20 years): US-domiciled NT$3.458 million, Irish-domiciled NT$3.658 million, a gap of NT$200,000.',
  '講義五級距表重算通過＋自家二擇一結論':
    'Notes\' five-bracket table recomputed, plus a conclusion for your own household\'s choice',
  '稅率門檻已對照官方現行公告（註明查證日）':
    'Rates and thresholds checked against the current official announcement (date of check noted)',
  '海外部位（若有）稅務盤點完成':
    'Overseas holdings tax inventory (if any) done',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '為什麼低薪資所得者「領股利可能退稅」？':
    'Why might a low-wage earner "get a refund by receiving dividends"?',
  '→ 因為合併計稅的抵減（股利 × 8.5%）':
    '→ Because the combined-taxation credit (dividends × 8.5%) is ',
  '大於':
    'greater than',
  '低邊際稅率產生的稅額。稅率 5% 的人領 50 萬股利，增加的稅 25,000 小於抵減 42,500，差額 17,500 直接退還——制度等於補貼低所得的存股族。':
    ' the tax produced by a low marginal rate. A person at 5% who receives NT$500,000 in dividends adds NT$25,000 of tax, which is less than the NT$42,500 credit, and the NT$17,500 difference is refunded directly — the system effectively subsidizes low-income dividend holders.',
  '台灣稅制的哪兩條規則，共同解釋了高配息文化？':
    'Which two Taiwanese tax rules together explain the high-dividend culture?',
  '→ ①個人端：':
    '→ ① Individual side: ',
  '價差停徵、股息有抵減甚至退稅':
    'capital gains suspended, dividends carry a credit or even a refund',
  '——對廣大中低稅率散戶，領息的稅務體驗很好；②公司端：':
    ' — for the broad base of low- and middle-bracket retail investors, receiving dividends is a tax-friendly experience; ② corporate side: ',
  '——保留不發要多繳稅，推著公司把盈餘配出去。供需兩端都被制度推向配息。':
    ' — withholding earnings means paying more tax, which pushes companies to distribute them. Both the supply side and the demand side are pushed toward dividends by the system.',
  '愛爾蘭註冊累積型 ETF 對台灣投資人的兩個稅務優勢？':
    'What are the two tax advantages of Irish-domiciled accumulating ETFs for Taiwanese investors?',
  '→ ①美股股息的預扣稅率由 30% 降為':
    '→ ① The withholding tax on US dividends falls from 30% to ',
  '（愛爾蘭與美國有租稅協定）；②':
    ' (Ireland has a tax treaty with the US); ② ',
  '累積型':
    'Accumulating share classes',
  '把股息留在基金內再投入，不產生台灣端的年度配息申報，複利也不中斷。兩者疊加，長期持有的稅務摩擦明顯低於美國註冊配息型。':
    ' keep dividends inside the fund and reinvest them, so there is no annual dividend filing on the Taiwan side and compounding is never interrupted. Stacked together, the two leave the long-run tax friction clearly lower than with a US-domiciled distributing fund.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '報稅季的一個勾':
    'One tick box at tax time',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（報稅季的一個勾）':
    'Opening (one tick box at tax time)',
  '「每年報稅有個很多人亂勾的選項：股利要『合併』還是『分開』算稅。勾錯，多繳幾千到幾萬。今天教你怎麼勾——結論先講：':
    '"Every year when you file your taxes, there\'s an option a lot of people tick at random: whether dividends should be taxed \'combined\' or \'separately.\' Tick the wrong one and you overpay by thousands to tens of thousands. Today I\'ll teach you how to tick it — conclusion first: ',
  '我們家大概率選合併':
    'our family will most likely choose combined',
  '，因為有 8.5% 的抵減。」':
    ', because of the 8.5% credit."',
  '用家人的實際數字現場算——這 30 分鐘可能是全年「時薪」最高的教學。':
    'Work it out on the spot with your family\'s real numbers — these 30 minutes may be the highest "hourly pay" lesson of the whole year.',
  '核心觀念（稅是第三隻手）':
    'Core idea (tax is the third hand)',
  '「投資報酬有三隻手在分：市場給的、費用拿走的（W16 講過）、':
    '"Investment returns are split by three hands: what the market gives, what fees take away (covered in W16), and ',
  '稅拿走的':
    'what tax takes away',
  '。第三隻手的重點只有三句：①台灣賣股的價差':
    '. The third hand comes down to three sentences: ① the price gain from selling stocks in Taiwan is ',
  '不課稅':
    'not taxed',
  '（超級紅利）；②股息會課稅，還有健保補充保費；③海外的要自己記帳申報。」':
    ' (a super bonus); ② dividends are taxed, and there\'s the NHI supplementary premium; ③ for overseas holdings, you keep the records and file yourself."',
  '互動（防身題庫＋1）':
    'Interaction (the self-defense question set + 1)',
  '「防身題庫加到第四題：①最壞虧多少？②錢誰保管？③每年收多少 %？④':
    '"Our self-defense question set grows to a fourth question: ① What\'s the worst-case loss? ② Who holds the money? ③ What percentage a year do they take? ④ ',
  '稅後拿多少？':
    'What do I keep after tax?',
  '任何投資話術，四題問完再說。」':
    ' Whatever an investment pitch says, ask all four questions before deciding."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「這麼複雜，找人報就好。」':
    '"It\'s so complicated — just have someone file for us."',
  '「可以找，但':
    '"You can, but ',
  '會算的人才知道對方報得對不對':
    'only someone who can do the calculation knows whether the other person filed it right',
  '——就像看得懂帳的人請會計師，跟全信會計師，是兩種安全等級。」':
    ' — it\'s like someone who can read the books hiring an accountant versus someone who just trusts the accountant completely: two different levels of safety."',
  '「規則以後會改吧？」':
    '"The rules will change later, right?"',
  '「一定會——所以我們學的是『怎麼算』的框架，每年報稅前花十分鐘查最新數字就好。」':
    '"Definitely — so what we\'ve learned is the framework of \'how to calculate.\' Just spend ten minutes checking the latest numbers before you file each year."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能默寫二擇一的交叉點邏輯（t 對 36.5%）':
    'I can write out from memory the crossover logic of the dividend choice (t vs 36.5%)',
  '家庭稅務體檢完成（含官方查證日期）':
    'Family tax check-up done (with the date of the official check)',
  '能講出海外投資的三件稅務事（預扣、利得、最低稅負）':
    'I can state the three tax facts about overseas investing (withholding, gains, alternative minimum tax)',
  '分享環節完成（現場算自家的勾），記錄卡住的點':
    'The sharing session is done (working out our own tick box on the spot), and I\'ve noted where I got stuck',
  '回填 curriculum/01-overview.md 第 50 週進度欄':
    'Fill in the Week 50 progress column of curriculum/01-overview.md',
  '下週預告 · Week 51：投資人關係與資本市場溝通':
    'Next week · Week 51: investor relations and capital-market communication',
  '——CFO 面對分析師的那一面：法說會怎麼聽、財測怎麼讀。':
    '— the CFO\'s other side, facing analysts: how to listen to an earnings call, how to read guidance.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：公司治理與舞弊':
    'Previous week: governance and fraud',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議，亦非稅務建議。© Matt Ye':
    '·\n  Personal study material, not investment advice, and not tax advice. © Matt Ye',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle light / dark theme',
  '猜一個答案':
    'Pick an answer',
  '邊際稅率':
    'Marginal tax rate',
  '答對了——50 萬 × 5% ＝ 增加 2.5 萬的稅，但合併計稅有股利 × 8.5% ＝ 4.25 萬的抵減，抵完還多 1.75 萬，直接退稅。這是台灣高股息文化的稅制推手之一。':
    'Correct — NT$500,000 × 5% = NT$25,000 of added tax, but combined taxation carries a credit of dividends × 8.5% = NT$42,500, which more than covers it with NT$17,500 left over, refunded directly. This is one of the tax-system forces behind Taiwan\'s high-dividend culture.',
  '答案是不用繳，還退 1.75 萬：50 萬 × 5% ＝ 增加 2.5 萬的稅，但合併計稅有股利 × 8.5% ＝ 4.25 萬的抵減。選分離課稅才是 28%、14 萬。':
    'The answer is that you owe nothing and even get NT$17,500 back: NT$500,000 × 5% = NT$25,000 of added tax, but combined taxation carries a credit of dividends × 8.5% = NT$42,500. Choosing separate taxation would mean 28%, or NT$140,000.',
  '萬':
    '× NT$10k',
  '<b>選合併計稅，比分離省':
    '<b>Choosing combined taxation saves you',
  '元。</b>':
    'NT dollars.</b>',
  '抵減大於增加的稅，還退':
    ' The credit is bigger than the added tax, so you also get back',
  '元。':
    'NT dollars as a refund.',
  '<b>選分離課稅，比合併省':
    '<b>Choosing separate taxation saves you',
  '元。</b>邊際稅率':
    'NT dollars.</b> Your marginal rate of',
  '% 已經高過你的交叉稅率':
    '% is already above your crossover rate of',
  '<br>抵減已經觸頂 8 萬——股利越多，交叉稅率越往 28% 靠近。':
    '<br>The credit has already hit its NT$80,000 cap — the more dividends, the closer the crossover rate moves to 28%.',
  '<br>另外，單筆股利 2 萬以上要繳 2.11% 補充保費（約':
    '<br>Also, a single dividend payment of NT$20,000 or more incurs the 2.11% supplementary premium (about',
  '元，以單筆計），不管選哪一種。':
    'NT dollars, per single payment), whichever option you choose.',
  '年':
    'years',
  '<b>每年只差':
    '<b>The gap is only',
  '個百分點，':
    'percentage points a year, and after',
  '年後差':
    'years the difference is',
  '萬。</b>殖利率越高、時間越長，預扣稅的複利代價越大——這是 W16 費用侵蝕的稅務版。（示意模型：未計基金費用率差異與其他稅務細節。）':
    '(NT$10k).</b> The higher the yield and the longer the time, the bigger the compounding cost of withholding tax — this is the tax version of W16\'s fee erosion. (Illustrative model: it leaves out differences in fund expense ratios and other tax details.)',
  '✓ 第三隻手管好了——下週聽懂 CFO 對市場說的話。':
    '✓ The third hand is under control — next week we learn to understand what the CFO says to the market.',
};
