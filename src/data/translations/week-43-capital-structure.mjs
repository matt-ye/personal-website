/*
 * 給家人的投資課 Week 43：資本結構——MM 理論與實務槓桿 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-43-capital-structure.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * 金額：借 100 億 → NT$10 billion；0.6 億 → NT$60 million（散文內換算）。
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
  '給家人的投資課 · Q4 財務長季 · Week 43':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 43',
  '資本結構——MM 理論與實務槓桿':
    'Capital structure — the MM theorem and leverage in practice',
  '三大決策的第二個：錢從哪來——債與股的比例怎麼定？起點是財務學最優雅的定理（MM：完美世界裡比例根本不重要），終點是實務的權衡藝術。':
    'The second of the three big decisions: where does the money come from — how do you set the ratio of debt to equity? The starting point is the most elegant theorem in finance (MM: in a perfect world the ratio doesn\'t matter at all); the destination is the practical art of trade-offs.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 6、9、42 週':
    'Prerequisites: Weeks 6, 9, 42',
  '52 週 · 第 43 週':
    '52 weeks · Week 43',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'W9 學過的「權益乘數」、W37 學過的「槓桿者被迫平倉」，本週從 CFO 的座位再看一次——這次你是決定要借多少的人。':
    'The "equity multiplier" you learned in W9 and the "leveraged players forced to liquidate" you learned in W37 — this week we look at them again from the CFO\'s chair. This time you\'re the one deciding how much to borrow.',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的「股東的錢更貴」——家人買單了嗎？':
    'Looking back at last week\'s "shareholders\' money is more expensive" — did the family buy it?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一家公司資產不變，只是把一半的股本換成借款。公司的總價值會怎樣？':
    'A company keeps its assets unchanged but swaps half of its equity for borrowing. What happens to the total value of the company?',
  '變大，借錢能提高報酬率':
    'It rises — borrowing raises the return',
  '變小，負債越多越危險':
    'It falls — the more debt, the more dangerous',
  '完美世界裡不變；現實要看稅與破產成本':
    'Unchanged in a perfect world; in the real world it depends on taxes and bankruptcy costs',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 先看槓桿的雙面刃':
    '1. First, the double-edged sword of leverage',
  '同一家公司（資產 100、稅率 20%），兩種資本結構：':
    'The same company (assets 100, tax rate 20%), two capital structures: ',
  '全權益':
    'all equity',
  '50 債 50 股':
    '50 debt / 50 equity',
  '（債息 3%，每年利息 1.5）。三種年景：':
    ' (interest rate on debt 3%, so interest of 1.5 a year). Three kinds of year:',
  '全權益 ROE':
    'All-equity ROE',
  '50% 槓桿 ROE':
    '50% leverage ROE',
  '15（好年）':
    '15 (good year)',
  '（放大）':
    '(amplified)',
  '3（平年）':
    '3 (average year)',
  '2.4%（不加不減）':
    '2.4% (no gain, no loss)',
  '0（壞年）':
    '0 (bad year)',
  '（反咬）':
    '(bites back)',
  '好年':
    'Good year',
  '：資產賺 15%、債主只拿 3%，差額全歸股東 → ROE 幾乎翻倍':
    ': the assets earn 15%, the lenders take only 3%, and the difference all goes to shareholders → ROE nearly doubles',
  '平年':
    'Average year',
  '：EBIT 3 恰好是「資產報酬率＝債息」的損益兩平點。':
    ': an EBIT of 3 is exactly the break-even point where "return on assets = interest rate." ',
  '槓桿放大的是「資產報酬與債息的差」':
    'Leverage amplifies the gap between the asset return and the interest rate',
  '，差為零時放大零':
    ', and amplifying a gap of zero gives zero',
  '壞年':
    'Bad year',
  '：資產賺不到債息，利息照付 → 股東倒貼':
    ': the assets don\'t even earn the interest, but the interest is still due → shareholders pay out of their own pocket',
  '這正是 W9 杜邦分析「權益乘數」的展開，也是 W37「危機中槓桿者被迫平倉」的和平時期版。':
    'This is exactly the expansion of the "equity multiplier" in the W9 DuPont analysis, and the peacetime version of W37\'s "leveraged players forced to liquidate in a crisis."',
  '槓桿雙面刃實驗台':
    'Leverage double-edged sword lab',
  '資產 100、稅率 20%。拉負債比例與利率，看四種年景下股東的報酬怎麼被放大。':
    'Assets 100, tax rate 20%. Drag the debt ratio and the interest rate, and watch how shareholders\' returns get amplified across four kinds of year.',
  '負債佔資產':
    'Debt as a share of assets',
  '債息':
    'Interest rate on debt',
  '年景（EBIT）':
    'Year type (EBIT)',
  '有槓桿 ROE':
    'Levered ROE',
  '利息保障倍數':
    'Interest coverage ratio',
  '損益兩平 EBIT':
    'Break-even EBIT',
  '高於它，槓桿才幫你':
    'Above it, leverage helps you',
  '好壞年 ROE 差距':
    'Good-year vs bad-year ROE gap',
  '全權益只有 12.0':
    'All-equity is only 12.0',
  '2. MM 定理：「比例不重要」為什麼是重要的起點':
    '2. The MM theorem: why "the ratio doesn\'t matter" is such an important starting point',
  'Modigliani 與 Miller（1958）證明：在':
    'Modigliani and Miller (1958) proved that in a ',
  '完美市場':
    'perfect market',
  '（無稅、無破產成本、無資訊不對稱）中，':
    ' (no taxes, no bankruptcy costs, no information asymmetry), ',
  '公司價值與資本結構無關':
    'firm value is independent of capital structure',
  '切披薩論證：公司價值來自資產產生的現金流；債與股只是把披薩切給不同人的刀法——切法不會改變披薩的大小。':
    'The pizza argument: a company\'s value comes from the cash flow its assets produce; debt and equity are just different ways of cutting the pizza for different people — how you cut it doesn\'t change the size of the pizza.',
  '上面的實驗台看似「槓桿提高 ROE」，但 MM 指出：那是用更高的風險換來的（四種年景的差距變大了）。用 W29 的眼睛做風險調整後，股東並沒有更好。':
    'The lab above seems to show "leverage raises ROE," but MM points out that this was bought with more risk (the gap across the four kinds of year got wider). Adjust for risk through W29\'s eyes, and shareholders are no better off.',
  'MM 的真正用法':
    'MM\'s real use',
  '：它不是說比例真的不重要，而是把問題問對——':
    ': it doesn\'t say the ratio truly doesn\'t matter, but rather teaches us to ask the right question — ',
  '現實世界的哪些不完美，讓比例變得重要？':
    'Which imperfections in the real world make the ratio matter?',
  '答案有三個，構成現代資本結構理論。':
    ' There are three, and together they make up modern capital structure theory.',
  '3. 三個不完美＝實務的權衡':
    '3. Three imperfections = the practical trade-off',
  '①稅盾（債的好處）':
    '① The tax shield (the upside of debt)',
  '：利息可抵稅、股利不行。借 100 億、利率 3%、稅率 20% → 每年省稅 100 × 3% × 20% ＝':
    ': interest is tax-deductible, dividends are not. Borrow NT$10 billion at a 3% interest rate and a 20% tax rate → tax saved each year = 10 billion × 3% × 20% = ',
  '0.6 億':
    'NT$60 million',
  '——政府補貼了債務融資（W42 WACC 公式裡那個「1 − 稅率」的來歷）。':
    ' — the government is subsidizing debt financing (this is where the "1 − tax rate" in the W42 WACC formula comes from).',
  '②財務困境成本（債的壞處）':
    '② Financial distress costs (the downside of debt)',
  '：借越多，破產機率越高，而破產很貴——直接成本（律師、清算折價），加上更大的間接成本：客戶不敢買、人才逃離、供應商要現金交易、被迫賤賣資產（W37 的死亡螺旋）。':
    ': the more you borrow, the higher the chance of bankruptcy, and bankruptcy is expensive — direct costs (lawyers, liquidation discounts), plus larger indirect costs: customers dare not buy, talent flees, suppliers demand cash payment, assets get dumped at fire-sale prices (the W37 death spiral).',
  '③代理與資訊問題':
    '③ Agency and information problems',
  '：適度的債是紀律（強制吐出現金，管理層不敢亂花）；但債太多時，股東反而想賭大的——反正輸了的損失大半歸債主。':
    ': a moderate amount of debt is discipline (it forces cash out, so management can\'t spend carelessly); but with too much debt, shareholders actually want to gamble big — if it goes wrong, most of the loss falls on the lenders anyway.',
  '抵換理論':
    'Trade-off theory',
  '：最適槓桿，在「稅盾的邊際好處＝困境成本的邊際增加」那一點。不同產業的答案天差地遠：':
    ': the optimal leverage sits at the point where "the marginal benefit of the tax shield = the marginal increase in distress costs." The answer varies enormously across industries:',
  '最適槓桿示意圖':
    'Optimal-leverage chart',
  '示意模型：公司價值 ＝ 無槓桿價值 100 ＋ 稅盾 − 困境成本。困境成本隨負債加速上升，上升速度取決於現金流穩不穩、資產賣不賣得掉。':
    'An illustrative model: firm value = unlevered value 100 + tax shield − distress costs. Distress costs rise at an accelerating pace as debt grows; how fast depends on how stable the cash flow is and how easily the assets can be sold.',
  '公用事業・電信':
    'Utilities · Telecom',
  '一般製造業':
    'General manufacturing',
  '科技・製藥':
    'Tech · Pharma',
  '困境成本敏感度':
    'Distress-cost sensitivity',
  '稅率':
    'Tax rate',
  '最適負債比例':
    'Optimal debt ratio',
  '佔無槓桿價值':
    'as a share of unlevered value',
  '最適點的公司價值':
    'Firm value at the optimum',
  '無槓桿＝100':
    'Unlevered = 100',
  '產業型態':
    'Industry type',
  '合理槓桿':
    'Reasonable leverage',
  '原因':
    'Why',
  '公用事業、電信':
    'Utilities, telecom',
  '高':
    'High',
  '現金流穩定如年金，撐得起利息':
    'Cash flow is stable like an annuity, so it can carry the interest',
  '科技、製藥':
    'Tech, pharma',
  '低（常近零負債）':
    'Low (often close to zero debt)',
  '現金流波動大，資產是人與研發、倒閉時賣不掉——困境成本巨大':
    'Cash flow swings widely, and the assets are people and R&D that can\'t be sold if the company fails — distress costs are huge',
  '金融業':
    'Financials',
  '極高（本業即槓桿）':
    'Very high (leverage is the business itself)',
  '另一套框架（W6 的提醒）':
    'A different framework (the W6 reminder)',
  '融資順位理論':
    'Pecking order theory',
  '：實務上 CFO 的偏好順序是':
    ': in practice a CFO\'s order of preference is ',
  '內部資金 → 借債 → 最後才增資':
    'internal funds → borrowing → issuing new shares last',
  '。因為增資會對市場放出「管理層覺得自家股價貴了」的訊號，常伴隨股價下跌。這也解釋了為什麼賺錢的公司反而負債低——內部資金夠用，輪不到借。':
    '. Because issuing shares sends the market a signal that "management thinks its own stock is expensive," the price often falls. This also explains why profitable companies tend to carry little debt — internal funds are enough, so there\'s no need to borrow.',
  '4. 實務儀表板：槓桿健康的三個數字':
    '4. The practical dashboard: three numbers for leverage health',
  '淨負債 ÷ EBITDA':
    'Net debt ÷ EBITDA',
  '：幾年的現金獲利能還清淨負債？（小於 1 保守、1–3 常態、大於 4 警戒，依產業浮動）':
    ': how many years of cash earnings would it take to repay the net debt? (below 1 is conservative, 1–3 is normal, above 4 is a warning sign; it varies by industry)',
  '＝EBIT ÷ 利息費用：獲利是利息的幾倍？（大於 5 安心、小於 2 危險——W6 的老朋友，現在是你的經營指標）':
    ' = EBIT ÷ interest expense: how many times over do earnings cover the interest? (above 5 is comfortable, below 2 is dangerous — an old friend from W6, now your operating metric)',
  '長短債結構':
    'Long-term vs short-term debt structure',
  '：W6 的錯配課——長期資產配長期負債。「短債長投」是台灣中小企業最常見的猝死姿勢':
    ': the W6 lesson on mismatches — match long-term assets with long-term liabilities. "Borrowing short to invest long" is the most common way Taiwanese small and mid-sized companies drop dead overnight',
  '台灣現象一問':
    'A question about a Taiwan phenomenon',
  '：科技大廠帳上千億現金、幾乎零負債——太保守嗎？兩面論：保守結構是景氣劇烈產業的生存保費（2008 年誰活得好？）；但長期囤積超額現金，等於股東的錢以 1% 閒置（W42）——這正是下週股利政策的入口。':
    ': big tech firms sit on hundreds of billions of NT dollars in cash with almost no debt — too conservative? Both sides: a conservative structure is the survival premium in violently cyclical industries (who came through 2008 best?); but hoarding excess cash for years means shareholders\' money sitting idle at 1% (W42) — and that is exactly the doorway to next week\'s dividend policy.',
  '5. 常見誤解闢謠':
    '5. Three things people get wrong',
  '「零負債就是好公司。」':
    '"Zero debt means a good company."',
  '可能只是不敢用稅盾的過度保守；適度負債的公司 WACC 更低。最健康的身體不是零負重，是能負重的身體。':
    'It may just be overcaution — too timid to use the tax shield; a company with a moderate amount of debt has a lower WACC. The healthiest body isn\'t one carrying no weight, it\'s one that can carry weight.',
  '「槓桿提高 ROE，所以借錢就是創造價值。」':
    '"Leverage raises ROE, so borrowing creates value."',
  'MM 的當頭棒喝：ROE 上升伴隨風險同步上升，':
    'MM\'s wake-up call: ROE rises, but risk rises right alongside it, so ',
  '價值沒變':
    'value hasn\'t changed',
  '——除非稅盾大於困境成本。用 W9 的話說：靠權益乘數拉高的 ROE，品質最低。':
    ' — unless the tax shield exceeds the distress costs. In W9\'s terms: ROE pumped up by the equity multiplier is the lowest-quality ROE.',
  '「增資是利多，公司要擴張了。」':
    '"A share issue is good news — the company is about to expand."',
  '順位理論的訊號效果：管理層傾向在股價貴的時候賣新股，實證上增資公告平均伴隨股價下跌。擴張是不是利多，要看投的案子 NPV（W41），不是看融資動作。':
    'The signalling effect from pecking order theory: management tends to sell new shares when the price is high, and empirically the average share price falls after an issue announcement. Whether expansion is good news depends on the NPV of the projects (W41), not on the financing move.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '從定理到三家公司':
    'From a theorem to three companies',
  '70 分鐘':
    '70 min',
  '《Principles of Corporate Finance》資本結構兩章':
    'Principles of Corporate Finance: the two capital-structure chapters',
  'MM 定理＋抵換理論與順位理論——本週主幹。':
    'The MM theorem plus trade-off theory and pecking order theory — the backbone of this week.',
  '15 分鐘':
    '15 min',
  '讀教科書的轉述版即可：知道這篇讓兩人拿了諾貝爾獎，以及「無關」為何是革命性的起點。':
    'The textbook\'s retelling is enough: know that this paper earned both men a Nobel Prize, and why "irrelevance" was such a revolutionary starting point.',
  '30 分鐘':
    '30 min',
  '實習公司＋兩家對照':
    'Your case-study company plus two comparisons',
  '抓三家不同產業的公司（例如科技／電信／傳產），算淨負債／EBITDA 與利息保障倍數——親眼看產業的槓桿哲學差異。':
    'Pick three companies from different industries (for example tech / telecom / traditional), and calculate net debt / EBITDA and the interest coverage ratio — see the industries\' different leverage philosophies with your own eyes.',
  '選讀':
    'Optional',
  '一篇「短債長投」出事的台灣企業案例':
    'A Taiwanese case of a company undone by "borrowing short to invest long"',
  '對照第 4 節第 3 點，找出它在哪一步錯配。':
    'Compare it against point 3 of section 4 and find the step where the mismatch happened.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '槓桿分析三連發':
    'Three leverage-analysis tasks',
  '任務 A｜雙面刃重演（20 分鐘）':
    'Task A | Replaying the double-edged sword (20 minutes)',
  '用試算表重建講義的三年景算例，再把債息改成 5%——損益兩平的 EBIT 變成多少？體會「利率上升把兩平點推高」（連回 W3）。':
    'Rebuild the lecture\'s three-scenario example in a spreadsheet, then change the interest rate to 5% — what does the break-even EBIT become? Feel how "a higher interest rate pushes the break-even point up" (this connects back to W3).',
  '任務 B｜三公司槓桿對照（25 分鐘）':
    'Task B | Comparing the leverage of three companies (25 minutes)',
  '用必讀第 3 項的三家公司算淨負債／EBITDA、利息保障倍數、有息負債／權益，排成表；每家寫一行「它的槓桿哲學，以及為什麼合理（或不合理）」。':
    'Using the three companies from reading item 3, calculate net debt / EBITDA, the interest coverage ratio and interest-bearing debt / equity, and lay them out in a table; for each company write one line: "its leverage philosophy, and why it is reasonable (or not)."',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '實驗台預設（負債 50%、債息 3%）的有槓桿 ROE 必須是 21.6%／2.4%／−2.4%，損益兩平 EBIT 是 3.0；債息拉到 5%，兩平點變 5.0。最適槓桿示意圖：「公用事業」的最適負債比例 66.7%、「科技・製藥」只有 16.7%——同一套理論，參數不同、答案不同。':
    'With the lab\'s defaults (debt 50%, interest rate 3%), levered ROE must be 21.6% / 2.4% / −2.4% and the break-even EBIT must be 3.0; push the interest rate to 5% and the break-even point becomes 5.0. In the optimal-leverage chart, the optimal debt ratio is 66.7% for "Utilities" and only 16.7% for "Tech · Pharma" — same theory, different parameters, different answers.',
  '三年景驗證＋利率敏感版完成':
    'Finished the three-scenario check plus the interest-rate-sensitive version',
  '三公司對照表完成（有產業脈絡判讀）':
    'Finished the three-company comparison table (with industry context)',
  '能複述稅盾算例（0.6 億）與抵換理論':
    'Can retell the tax shield example (NT$60 million) and trade-off theory',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  'MM 說資本結構無關——那 CFO 為什麼還要煩惱它？':
    'MM says capital structure doesn\'t matter — so why does a CFO still lose sleep over it?',
  '→ 因為現實不是完美市場。MM 的價值在指出「煩惱的正確標的」：':
    '→ Because the real world isn\'t a perfect market. The value of MM is that it points to the right thing to worry about: ',
  '稅盾、困境成本、訊號':
    'the tax shield, distress costs and signalling',
  '這三個不完美，而不是比例本身；CFO 管理的是三者的權衡。':
    ' — these three imperfections, rather than the ratio itself. A CFO manages the trade-off among the three.',
  '為什麼科技公司負債低、電信公司負債高，兩者都「理性」？':
    'Why do tech companies carry little debt while telecom companies carry a lot, and both are "rational"?',
  '→ 槓桿的承受力取決於':
    '→ How much leverage a company can bear depends on the ',
  '現金流的穩定度與資產的可變賣性':
    'stability of its cash flow and how easily its assets can be sold',
  '。電信月費如年金、基地台有殘值 → 撐得起高負債，也該用稅盾；科技業現金流隨景氣劇烈波動、核心資產是留不住的人才與過時很快的設備 → 困境成本巨大，低負債是保命符。同一理論、不同參數、都理性。':
    '. Telecom bills arrive monthly like an annuity and cell towers keep a salvage value → they can carry heavy debt, and should use the tax shield; tech cash flow swings violently with the cycle, and its core assets are talent that can\'t be locked in and equipment that goes obsolete fast → distress costs are huge, so low debt is a life-saver. Same theory, different parameters, both rational.',
  '「公司宣布現金增資」——你的第一反應該是什麼？':
    '"A company announces a cash capital increase (a share issue)" — what should your first reaction be?',
  '→ 先問「':
    '→ First ask: "',
  '為什麼不用內部資金或借債？':
    'Why not use internal funds or borrow?',
  '」增資是順位最後的選項。管理層越過前兩者直接賣股，可能是：①投資需求大到前兩者不夠（查案子的 NPV 故事）；②管理層認為股價高估（對你是警訊）；③借不到錢了（更大的警訊）。增資本身中性，跳過順位的理由才是資訊。':
    '" A share issue is the last option in the pecking order. If management skips the first two and goes straight to selling shares, it may be because: (1) the investment need is so large that the first two aren\'t enough (check the story behind the project\'s NPV); (2) management thinks the stock is overvalued (a warning sign for you); (3) it can\'t borrow any more (an even bigger warning sign). The issue itself is neutral; the reason for skipping the order is the information.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '買房就是資本結構決策':
    'Buying a home is a capital structure decision',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（買房的智慧）':
    'Opening (the wisdom of buying a home)',
  '「我們家早就做過資本結構決策——':
    '"Our family has already made a capital structure decision — ',
  '買房':
    'buying a home',
  '：全現金買，還是貸七成？」（讓家人說各自的理由——他們會自然講出利息負擔、風險、彈性。）':
    ': pay all cash, or take a mortgage for seventy percent?" (Let family members each give their reasons — they\'ll naturally bring up the interest burden, the risk and the flexibility.)',
  '核心演示（雙面刃表）':
    'The core demo (the double-edged table)',
  '「同一家店，借一半錢經營：生意好的年份，老闆報酬率從 12% 跳到 21.6%；普通年份沒差；生意差的年份':
    '"Same shop, but borrow half the money to run it: in a good year, the owner\'s return jumps from 12% to 21.6%; in an ordinary year, no difference; in a bad year it goes ',
  '從 0 變成倒虧':
    'from 0 to a loss',
  '。槓桿是放大鏡——放大獲利，也放大虧損，':
    '. Leverage is a magnifying glass — it magnifies profit and it magnifies loss, and ',
  '唯一不變的是利息照付':
    'the one thing that never changes is that the interest is still due',
  '互動（家庭槓桿健檢）':
    'Interaction (a family leverage check-up)',
  '「公司有個指標叫『利息保障倍數』：獲利是利息的幾倍。我們家的版本：':
    '"Companies have a metric called the \'interest coverage ratio\': how many times over earnings cover the interest. Our family\'s version: ',
  '月收入是月房貸的幾倍？':
    'how many times our monthly income is the monthly mortgage payment?',
  '現場算，順便討論「幾倍會睡不著」——這就是家庭的資本結構政策。':
    'Work it out on the spot, and talk about "how many times would keep you up at night" — this is the family\'s capital structure policy.',
  '收尾（一句帶走）':
    'Wrap-up (one line to take home)',
  '「欠錢不是罪，欠到『壞年份付不出利息』才是——公司和家庭同一條命。」':
    '"Owing money isn\'t a sin; owing so much that you can\'t pay the interest in a bad year is — companies and families share the same fate."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那到底該借多少？」':
    '"So how much should we borrow?"',
  '「沒有萬用答案，只有原則：收入越穩，可以借越多（電信和科技的差別）；以及永遠先想壞年份，不是好年份。」':
    '"There\'s no universal answer, only principles: the steadier your income, the more you can borrow (the difference between telecom and tech); and always think about the bad year first, not the good one."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能講出 MM 定理與「三個不完美」':
    'Can state the MM theorem and the "three imperfections"',
  '三年景算例與三公司對照完成':
    'Finished the three-scenario example and the three-company comparison',
  '能默寫槓桿健康三數字與量級':
    'Can write from memory the three leverage-health numbers and their typical ranges',
  '分享環節完成（家庭利息保障倍數），記錄卡住的點':
    'Finished the sharing session (the family interest coverage ratio) and noted where I got stuck',
  '回填 curriculum/01-overview.md 第 43 週進度欄':
    'Fill in the Week 43 progress column of curriculum/01-overview.md',
  '下週預告 · Week 44：股利政策':
    'Next week · Week 44: Dividend policy',
  '——三大決策的最後一個：賺來的錢，發還是留？現金股利 vs 庫藏股，以及台灣特有的高配息文化。':
    ' — the last of the three big decisions: when you\'ve earned money, do you pay it out or keep it? Cash dividends vs share buybacks, and Taiwan\'s distinctive high-payout culture.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：資金成本':
    'Previous week: the cost of capital',
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
  '負債比例':
    'Debt ratio',
  '公司價值隨負債比例變化的曲線':
    'Curve of firm value as the debt ratio changes',
  '答對了——這就是 MM 定理：完美世界裡，公司價值來自資產的現金流，債與股只是切披薩的刀法。現實中比例會影響價值，是因為三個不完美：稅盾（債的好處）、困境成本（債的壞處）、資訊與代理問題。':
    'Correct — that\'s the MM theorem: in a perfect world, a company\'s value comes from the cash flow of its assets, and debt and equity are just different ways of cutting the pizza. In reality the ratio affects value because of three imperfections: the tax shield (the upside of debt), distress costs (the downside of debt), and information and agency problems.',
  'MM 定理的答案是：完美世界裡不變——公司價值來自資產的現金流，債與股只是切披薩的刀法。借錢提高的報酬率是用更高的風險換的。現實中比例會影響價值，是因為稅盾、困境成本、資訊問題這三個不完美。':
    'The MM answer is: unchanged in a perfect world — a company\'s value comes from the cash flow of its assets, and debt and equity are just different ways of cutting the pizza. The higher return you get from borrowing is paid for with higher risk. In reality the ratio affects value because of three imperfections: the tax shield, distress costs, and information problems.',
  '危機年':
    'Crisis year',
  '無利息':
    'No interest',
  '倍':
    '×',
  '<b>全權益：四種年景的 ROE 就是資產報酬扣稅。</b>沒有利息要付，也沒有放大。':
    '<b>All equity: in all four kinds of year, ROE is just the asset return after tax.</b> There\'s no interest to pay, and no amplification.',
  '<b>負債':
    '<b>Debt at',
  '%：好壞年的 ROE 差距從 12.0 擴大到':
    '%: the ROE gap between good and bad years widens from 12.0 to',
  '個百分點。</b>EBIT 高於':
    'percentage points.</b> Leverage helps you when EBIT is above',
  '時槓桿幫你、低於它時反咬你——利率越高，這條線越難跨。':
    '(and bites back below it) — the higher the rate, the harder this line is to clear.',
  '負債這麼高，壞年連利息都付不出：這就是困境成本開始收費的地方。':
    'With debt this high, you can\'t even pay the interest in a bad year: this is where distress costs start charging their fee.',
  '<b>沒有稅盾，借錢只剩壞處：最適負債是 0。</b>這就是 MM 的完美世界加上困境成本。':
    '<b>With no tax shield, borrowing has only downsides: the optimal debt is 0.</b> This is MM\'s perfect world plus distress costs.',
  '<b>虛線是只有稅盾的世界（越借越值錢），實線扣掉困境成本後，在':
    '<b>The dashed line is a world with only the tax shield (the more you borrow, the more it\'s worth); the solid line, after subtracting distress costs, peaks at',
  '% 達到頂點。</b>':
    '%.</b>',
  '現金流穩如年金的產業，困境成本上升得慢，撐得起高槓桿。':
    'In industries where cash flow is as steady as an annuity, distress costs rise slowly, so they can carry high leverage.',
  '現金流波動大、資產是人才與研發的產業，困境成本來得又快又兇——低負債是保命符。':
    'In industries with violent cash-flow swings, whose assets are talent and R&D, distress costs arrive fast and hard — low debt is a life-saver.',
  '過了頂點再借，每多借一塊錢，困境成本的增加都大於省下的稅。':
    'Borrow beyond the peak and every extra dollar adds more in distress costs than it saves in tax.',
  '✓ 槓桿的兩面都看過了——下週處理最後一個決策：賺的錢怎麼分。':
    '✓ You\'ve seen both sides of leverage — next week we tackle the last decision: how to split what the company earns.',
};
