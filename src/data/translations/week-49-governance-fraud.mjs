/*
 * 給家人的投資課 Week 49：公司治理與財報舞弊案例 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-49-governance-fraud.html
 * 沿用 week-27 的慣例（行內標記邊界留半形空白、術語固定譯法、家庭教材的口語溫度、金額換算規則）。
 * 產製方式（2026-11-05）：T2 模型初翻，經 tcheck 四道守衛（漏譯／殘留中文／script 可解析／行內邊界空白）驗證。
 * Procomp＝博達；「殺信使」譯 shoot the messenger；JS 提示句「X 支／項」用 flagged／item(s) 避免單複數錯。
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
  '給家人的投資課 · Q4 財務長季 · Week 49':
    'Family Investing Course · Q4 The CFO\'s Quarter · Week 49',
  '公司治理與財報舞弊案例':
    'Corporate Governance and Financial Fraud: Case Studies',
  'W8 的紅旗清單抓「報表的可疑」，本週往上一層：抓「':
    'The red-flag checklist from W8 catches "suspicious financial statements"; this week goes one level up and catches "',
  '制度的可疑':
    'suspicious systems',
  '」——當看門的人集體失靈，再漂亮的報表都可能是劇本。三個世紀級案例當教材，產出紅旗清單 v2。':
    '" — when the gatekeepers all fail together, even the prettiest statements can be a script. Three once-in-a-century cases serve as the teaching material, and the output is red-flag checklist v2.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 8、35 週':
    'Prerequisites: Weeks 8, 35',
  '52 週 · 第 49 週':
    '52 weeks · Week 49',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  '投資人的防身課，也是 CFO 職涯的倫理課——歷史上最大的弊案，幾乎都有一位「太配合的 CFO」。':
    'A self-defense course for investors, and an ethics course for a CFO\'s career — almost every one of history\'s biggest frauds had a "too-cooperative CFO."',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的「問下限」——家人的防身三題記熟了嗎？':
    'Look back at last week\'s "ask about the floor" — has your family memorized the three self-defense questions?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '一家公司被做空機構指控財報造假。哪一種回應最該讓你警覺？':
    'A short seller accuses a company of falsifying its financial statements. Which kind of response should alarm you most?',
  '公布銀行函證與帳戶明細':
    'Publishing bank confirmations and account statements',
  '控告對方、指責記者收錢抹黑':
    'Suing the other side and accusing journalists of being paid to smear the company',
  '邀請第三方會計師專案查核':
    'Inviting a third-party accounting firm to run a special audit',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. 治理是什麼：代理問題的防火牆':
    '1. What governance is: a firewall against the agency problem',
  '公司的原罪（W35 受託義務的根源）：':
    'The company\'s original sin (the root of the fiduciary duty in W35): ',
  '出錢的人不管事，管事的人沒出多少錢':
    'the people who put up the money don\'t run things, and the people who run things haven\'t put up much money',
  '——利益天然不對齊。治理就是為此設計的防火牆：':
    '— their interests are naturally misaligned. Governance is the firewall designed for exactly this:',
  '防火牆':
    'Firewall',
  '功能':
    'Function',
  '失靈的樣子':
    'What failure looks like',
  '董事會／獨立董事':
    'Board of directors / independent directors',
  '代股東監督經營層':
    'Oversee management on behalf of shareholders',
  '全是老闆的牌友；獨董從不投反對票':
    'Everyone is the boss\'s card-playing buddy; the independent directors never vote against',
  '審計委員會＋外部會計師':
    'Audit committee + external auditors',
  '把關財報品質':
    'Safeguard the quality of the financial statements',
  '會計師收入依賴單一客戶；頻繁換事務所':
    'The auditor depends on a single client for its income; the company keeps switching firms',
  '薪酬設計':
    'Compensation design',
  '讓經營層與股東利益綁定':
    'Tie management\'s interests to the shareholders\'',
  '綁短期 EPS／股價 → 誘發 W5 的操縱與 W47 的帝國建造':
    'Tied to short-term EPS or share price → invites W5\'s manipulation and W47\'s empire building',
  '股東行動與市場':
    'Shareholder action and the market',
  '投票、出售、被併購的威脅':
    'Voting, selling, the threat of being acquired',
  '股權結構讓小股東無力（雙重股權、交叉持股）':
    'The ownership structure leaves minority shareholders powerless (dual-class shares, cross-shareholdings)',
  '吹哨與監理':
    'Whistleblowing and regulation',
  '最後防線':
    'The last line of defense',
  '三大案例裡，吹哨者都曾被忽視多年':
    'In all three big cases, the whistleblowers were ignored for years',
  '台灣特色':
    'Taiwan\'s particularity',
  '：家族企業佔比高——優點是長期經營視角，風險在「大股東 vs 小股東」的利益衝突（關係人交易、集團內利益輸送）取代了教科書的「股東 vs 經理人」。所以 W8 的紅旗 #8（董監質押）與 #9（關係人交易），其實早就是治理紅旗。':
    ': family businesses make up a high share — the upside is a long-term view; the risk is that the conflict of interest between "major shareholders and minority shareholders" (related-party transactions, profit-shifting within the group) replaces the textbook "shareholders vs managers." So W8\'s red flags #8 (pledged shares of directors and supervisors) and #9 (related-party transactions) were really governance red flags all along.',
  '2. 三個案例，三種失靈':
    '2. Three cases, three kinds of failure',
  'Enron（2001，美國）——複雜度做為武器。':
    'Enron (2001, US) — complexity as a weapon.',
  '能源交易巨頭用特殊目的實體把巨額負債藏到表外，用市值計價把想像中的未來利潤提前入帳。會計師事務所 Andersen 同時收鉅額顧問費，審計獨立性崩壞，事後倒閉陪葬。':
    ' The energy-trading giant used special purpose entities to hide huge debts off the balance sheet, and used mark-to-market accounting to book imagined future profits early. The accounting firm Arthur Andersen collected huge consulting fees at the same time, so audit independence collapsed, and the firm went under with Enron afterward. ',
  '事前可見的紅旗':
    'Red flags visible in advance',
  '：財報複雜到分析師公開承認看不懂、高層連續拋售持股、營業現金流與帳面獲利長期背離（W8 紅旗 #3）。':
    ': the statements were so complicated that analysts publicly admitted they didn\'t understand them; senior executives sold shares one after another; operating cash flow diverged from book profit for years (W8 red flag #3).',
  'Wirecard（2020，德國）——現金也能是假的。':
    'Wirecard (2020, Germany) — cash can be fake too.',
  '德國支付新星宣稱存在海外信託帳戶的':
    ' The German payments star claimed its cash sat in overseas trust accounts, but ',
  '19 億歐元現金根本不存在':
    'the €1.9 billion in cash did not exist at all',
  '。《金融時報》記者追了五年，德國監理機關反過來查記者。':
    '. The Financial Times reporter chased the story for five years, and German regulators turned around and investigated the reporter instead. ',
  '：獲利高速成長但現金總是「在別的地方」（第三方收單、海外信託——查證困難的結構）、做空報告與媒體質疑被公司用訴訟壓制、會計師多年未實際函證關鍵帳戶。':
    ': profits growing fast but the cash always "somewhere else" (third-party acquirers, overseas trusts — structures that are hard to verify); short-seller reports and media doubts suppressed by the company through lawsuits; the auditor not actually confirming the key accounts for years.',
  '博達（2004，台灣）——W8 的複習與深化。':
    'Procomp Informatics (2004, Taiwan) — a review and deepening of W8.',
  '假銷貨循環虛增營收、帳上 63 億現金遭質押與虛構。本週新增的視角：董事會被大股東完全掌控、海外子公司與「客戶」實為一手安排——':
    ' A circular chain of fake sales inflated revenue, and NT$6.3 billion of cash on the books was pledged and fabricated. The new angle this week: the board was completely controlled by the major shareholder, and the overseas subsidiaries and "customers" were in fact arranged by the same hand — ',
  '報表紅旗之外，治理紅旗（一言堂結構）早就亮了。':
    'beyond the red flags in the financial statements, the governance red flags (a one-man-show structure) had already been lit.',
  '三案的共同結構':
    'The common structure of the three cases',
  '：①好到不像真的的成長曲線（W29「完美曲線」的公司版）；②複雜且說不清的商業或財務結構；③看門人被收買、恫嚇或催眠；④質疑者先被羞辱、後被證明正確。':
    ': ① a growth curve too good to be true (the corporate version of W29\'s "perfect curve"); ② a complex business or financial structure no one can explain; ③ gatekeepers who are bought off, intimidated or hypnotized; ④ doubters humiliated first, proven right later.',
  '殺信使測試':
    'Shoot-the-messenger test',
  '六則公司回應質疑的聲明。它回應的是':
    'Six statements in which a company responds to doubts. Is it responding to the ',
  '內容':
    'substance',
  '（拿出可查證的證據），還是':
    ' (by producing verifiable evidence), or is it ',
  '攻擊提問的人':
    'attacking the person who asked',
  '第 1／6 則':
    'Statement 1/6',
  '回應內容':
    'Responds on substance',
  '攻擊信使':
    'Shoots the messenger',
  '下一則 →':
    'Next →',
  '目前答對 0 題':
    'Correct so far: 0',
  '3. 紅旗清單 v2：加上治理層':
    '3. Red-flag checklist v2: adding the governance layer',
  'W8 的 10 項報表紅旗裡，#7（會計師或 CFO 異常更換）、#8（董監質押）、#9（關係人交易）已經碰到治理面。v2 再加 5 項':
    'Of the 10 financial-statement red flags in W8, #7 (an unusual change of auditor or CFO), #8 (pledged shares of directors and supervisors) and #9 (related-party transactions) already touch on governance. v2 adds 5 more ',
  '不重複':
    'non-overlapping',
  '的治理紅旗，專看「說謊的成本低不低」：':
    ' governance red flags, looking specifically at "how cheap is it to lie":',
  '治理紅旗':
    'Governance red flag',
  '怎麼查':
    'How to check',
  '對應案例':
    'Matching case',
  '董事會一言堂：董事長兼總經理、獨董席次少、從無反對票紀錄':
    'A rubber-stamp board: chairman is also CEO, few independent seats, no record of ever voting against',
  '年報董事會運作情形、議事錄重訊':
    'The board-operations section of the annual report; meeting minutes and material-information filings',
  '博達':
    'Procomp',
  '獨立董事異常辭任（理由「個人因素」連發）':
    'Unusual resignations of independent directors (a run of "personal reasons")',
  '重大訊息':
    'Material-information filings',
  '知道內情的人先跳船':
    'The people who know are leaving first',
  '高層薪酬強掛鉤短期股價／EPS，且高層同時大量拋股':
    'Executive pay tightly tied to the short-term share price or EPS, while executives also sell large amounts of stock',
  '年報薪酬揭露＋內部人持股轉讓申報':
    'Pay disclosure in the annual report + insider share-transfer filings',
  '結構複雜、現金「在別的地方」：大量海外子公司、第三方代收、信託帳戶':
    'A complex structure, with the cash "somewhere else": many overseas subsidiaries, third-party collection agents, trust accounts',
  '財報合併範圍、現金附註':
    'Scope of consolidation in the financial statements; the cash note',
  '對質疑者的反應是訴訟與人身攻擊，而非數據':
    'The response to doubters is lawsuits and personal attacks rather than data',
  '新聞、公司聲明':
    'News coverage, company statements',
  '三案皆有':
    'All three cases',
  '使用規則升級':
    'Rule upgrade',
  '：報表紅旗（1–10）看「數字說謊了嗎」，治理紅旗（11–15）看「說謊的成本低嗎」——':
    ': the financial-statement red flags (1–10) ask "are the numbers lying?"; the governance red flags (11–15) ask "is lying cheap?" — ',
  '兩層都亮，離場不需要第三個理由。':
    'both layers lit, and you don\'t need a third reason to walk away.',
  '紅旗清單 v2 掃描器':
    'Red-flag checklist v2 scanner',
  '對你的實習公司逐項給分：✅ 沒問題、⚠️ 待查、🚩 亮紅旗。結果存在這個瀏覽器。':
    'Score each item for your practice company: ✅ no problem, ⚠️ needs checking, 🚩 red flag. Results are saved in this browser.',
  '報表層 🚩':
    'Financial-statement layer 🚩',
  '治理層 🚩':
    'Governance layer 🚩',
  '待查 ⚠️':
    'Needs checking ⚠️',
  '要補資料':
    'Data still needed',
  '逐項給分。':
    'Score each item.',
  '4. CFO 的倫理位置':
    '4. The CFO\'s ethical position',
  '三大案例的 CFO 全數入獄或身敗名裂——Enron 的 CFO 本人就是表外結構的設計者。結構性教訓：CFO 是':
    'The CFOs in all three big cases went to prison or were disgraced — Enron\'s CFO personally designed the off-balance-sheet structures. The structural lesson: the CFO is ',
  '唯一同時看得到全貌、又有簽名義務':
    'the only person who both sees the whole picture and has a duty to sign',
  '的人。「對老闆忠誠」與「對公司及股東的受託義務」（W40）衝突時，法律與歷史都站在後者。實務上的自保：決策留痕、界線先講（哪些帳不做），以及一個樸素的判準：':
    '. When "loyalty to the boss" conflicts with "fiduciary duty to the company and its shareholders" (W40), both the law and history side with the latter. Practical self-protection: leave a paper trail for decisions, state your boundaries up front (which books you won\'t cook), and one plain test:',
  '這筆處理若上了報紙頭版，我敢解釋嗎？':
    'If this treatment made the front page of the newspaper, would I dare to explain it?',
  '5. 常見誤解闢謠':
    '5. Three things people get wrong',
  '「治理是大股東的事，散戶管不著。」':
    '"Governance is the big shareholders\' business; small investors can\'t do anything about it."',
  '散戶最強的治理工具是':
    'The strongest governance tool a small investor has is their ',
  '腳':
    'feet',
  '：治理紅旗兩支以上就離場。「治理折價」是真實的——同樣獲利，治理差的公司市場給更低倍數，這是理性定價。':
    ': leave once there are two or more governance red flags. The "governance discount" is real — for the same earnings, the market gives a poorly governed company a lower multiple, and that is rational pricing.',
  '「獨董多，治理就好。」':
    '"More independent directors means good governance."',
  '看的是':
    'What matters is ',
  '行為':
    'behavior',
  '不是人數：反對票紀錄、辭任模式、專業背景與出席率。形式合規是最便宜的化妝。':
    ', not headcount: voting-against record, resignation patterns, professional background and attendance. Formal compliance is the cheapest makeup.',
  '「弊案是黑天鵝，防不了。」':
    '"Fraud is a black swan; you can\'t defend against it."',
  '三大案事後看，紅旗全部':
    'Looking back at the three big cases, every red flag was ',
  '事前可見、而且持續多年':
    'visible in advance, and for years',
  '。防不了的是精確的爆炸時點，防得了的是「持有它到爆炸那天」——這正是清單的功能（W36：擋已知的疏忽）。':
    '. What you can\'t defend against is the exact moment of the blow-up; what you can defend against is "holding it until the day it blows up" — which is exactly what the checklist is for (W36: guarding against known oversights).',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '三個案子，三篇回顧':
    'Three cases, three retrospectives',
  '30 分鐘':
    '30 min',
  'Enron 案深度回顧':
    'In-depth retrospective on Enron',
  '搜「Enron 安隆案 始末」，聚焦表外藏債與 Andersen 的角色。':
    'Search "Enron scandal full story" and focus on the off-balance-sheet debt and Arthur Andersen\'s role.',
  'Wirecard 案深度回顧':
    'In-depth retrospective on Wirecard',
  '搜「Wirecard 弊案」，聚焦《金融時報》記者五年追蹤與「現金去哪了」。':
    'Search "Wirecard fraud" and focus on the Financial Times reporters\' five-year investigation and "where did the cash go?"',
  '20 分鐘':
    '20 min',
  '博達案：用治理框架重讀':
    'The Procomp case: rereading it through the governance framework',
  '把 W8 讀過的材料，用第 2 節的四步驟模式重讀一次。':
    'Take the material you read in W8 and reread it using the four-step pattern from section 2.',
  '15 分鐘':
    '15 min',
  'CFA Institute 治理準則概觀':
    'Overview of the CFA Institute governance guidelines',
  '「應然」的清單。':
    'The "what ought to be" checklist.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '紅旗清單 v2 實戰':
    'Red-flag checklist v2 in practice',
  '任務 A｜清單升級（15 分鐘）':
    'Task A | Upgrade the checklist (15 min)',
  '把 5 項治理紅旗併入你的紅旗清單文件（v1 →':
    'Merge the 5 governance red flags into your red-flag checklist document (v1 → ',
  '，四大常備文件之一的正式升級）。':
    ', a formal upgrade of one of the four standing documents).',
  '任務 B｜實習公司治理掃描（30 分鐘）':
    'Task B | Governance scan of your practice company (30 min)',
  '對實習公司跑 #11–15：年報查董事會運作與薪酬、重大訊息查獨董異動、財報查合併範圍與現金附註、新聞查公司如何回應質疑。每項給 ✅／⚠️／🚩＋一行證據，用上面的掃描器記錄。':
    'Run #11–15 on the practice company: check board operations and pay in the annual report, director changes in the material-information filings, the scope of consolidation and the cash note in the financial statements, and in the news how the company responds to doubters. Give each item ✅ / ⚠️ / 🚩 plus one line of evidence, and record it in the scanner above.',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '殺信使測試六則裡，有三則是攻擊信使、三則是回應內容。掃描器：報表層與治理層各標一支 🚩，結論必須是「兩層都亮——離場不需要第三個理由」；只有一層亮，結論是「加強追蹤」。':
    'Of the six in the shoot-the-messenger test, three attack the messenger and three respond on substance. Scanner: mark one 🚩 each in the financial-statement layer and the governance layer, and the conclusion must be "both layers lit — you don\'t need a third reason to walk away"; with only one layer lit, the conclusion is "keep a closer watch."',
  '紅旗清單 v2 成形（15 項）':
    'Red-flag checklist v2 in place (15 items)',
  '實習公司治理掃描完成':
    'Governance scan of the practice company done',
  '能各用三句話講完三大案例（病因＋紅旗＋教訓）':
    'I can explain each of the three cases in three sentences (cause + red flags + lesson)',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '三大案例的共同前兆中，哪一項最容易被一般投資人即時觀察到？':
    'Of the warning signs the three cases share, which is easiest for an ordinary investor to observe in real time?',
  '對質疑者的反應模式（殺信使）':
    'The pattern of response to doubters (shooting the messenger)',
  '。它發生在公開場合——新聞稿、法說會、訴訟——不需要任何財報功力就能觀察。營業現金流背離等紅旗需要分析，但「用訴訟回應做空報告」人人看得見。':
    '. It happens in public — press releases, earnings calls, lawsuits — and you don\'t need any skill with financial statements to see it. Red flags such as diverging operating cash flow take analysis, but "answering a short-seller report with a lawsuit" is visible to everyone.',
  '為什麼「會計師同時收顧問費」會摧毀審計品質？':
    'Why does an auditor "also collecting consulting fees" wreck audit quality?',
  '→ 審計費是固定的小生意、顧問費是成長的大生意。當事務所的顧問收入依賴這個客戶，「簽下保留意見」等於燒掉自己的金雞母（W35：看誰付錢給誰）。獨立性在誘因面已經死亡——Enron 之後，法規因此強制審計與顧問分離。':
    '→ Audit fees are a small, fixed business; consulting fees are a big, growing one. When a firm\'s consulting income depends on this client, "issuing a qualified opinion" means burning its own golden goose (W35: see who pays whom). Independence is dead on the incentive side — which is why, after Enron, regulation forced audit and consulting to be separated.',
  '台灣的治理檢查為什麼要特別看關係人交易？':
    'Why should a Taiwanese governance check look especially closely at related-party transactions?',
  '→ 因為台灣的主要代理問題是「':
    '→ Because Taiwan\'s main agency problem is "',
  '大股東 vs 小股東':
    'major shareholders vs minority shareholders',
  '」。控制股東可以低價賣資產給自家私人公司、高價向關係企業採購，把上市公司的錢以合法外觀搬走；關係人交易附註是這類輸送唯一的強制揭露窗口，金額、對象、定價依據都要攤在那一頁。':
    '". A controlling shareholder can sell assets cheaply to a private company of their own and buy from affiliates at high prices, moving the listed company\'s money out under a legal appearance; the related-party-transaction note is the only mandatory disclosure window for this kind of siphoning, and the amounts, counterparties and pricing basis all have to be laid out on that page.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '三個故事，一個模式':
    'Three stories, one pattern',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（三個故事一個模式）':
    'Opening (three stories, one pattern)',
  '「今天講三個世界級的騙局：美國的安隆——把債藏在看不見的口袋；德國的 Wirecard——說有 19 億歐元現金，其實不存在；還有我們講過的博達。三個案子相隔二十年、三個國家——':
    '"Today I\'ll tell you about three world-class frauds: Enron in the US — hiding debt in invisible pockets; Germany\'s Wirecard — claiming €1.9 billion in cash that didn\'t exist; and Procomp, which we\'ve already covered. Three cases, twenty years apart, in three countries — ',
  '劇本卻一模一樣':
    'the script was exactly the same',
  '核心模式（四步驟）':
    'Core pattern (four steps)',
  '「①成長好到不像真的；②生意複雜到說不清；③守門的人睡著或被收買；④':
    '"① Growth too good to be true; ② a business too complicated to explain; ③ gatekeepers who are asleep or bought off; ④ ',
  '有人質疑時，公司的反應是告他，而不是拿出證據':
    'when people raise doubts, the company\'s reaction is to sue them rather than produce evidence',
  '。第四點最好用——正常公司面對質疑會回應數據；心虛的公司攻擊提問的人。」':
    '. The fourth is the most useful — a normal company answers doubts with data; a guilty one attacks the person asking."',
  '互動（殺信使測試）':
    'Interaction (the shoot-the-messenger test)',
  '「以後看到公司對做空報告或記者的回應，我們家看什麼？」（引導：它回應的是':
    '"From now on, when we see how a company responds to a short-seller report or a journalist, what does our family look at?" (Hint: is it responding to the ',
  '還是':
    ' or the ',
  '動機':
    'motive',
  '——「那個記者收錢黑我們」＝紅旗；「這是我們的帳戶函證」＝正常。）':
    '? "That journalist was paid to smear us" = red flag; "Here are our account confirmations" = normal.)',
  '收尾（安慰）':
    'Closing (reassurance)',
  '「聽起來很可怕，但記住：這些案子的警訊都亮了':
    '"It sounds scary, but remember: the warning signs in these cases were lit for ',
  '好幾年':
    'several years',
  '。我們這一年學的清單，就是為了不留在裡面——騙局騙的是不看的人。」':
    '. The checklist we\'ve learned this year exists so you don\'t end up inside one — fraud fools the people who don\'t look."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「那大公司、有政府監管的也會出事？」':
    '"So even big companies under government regulation can blow up?"',
  '「會——Wirecard 出事前是德國三十大企業。所以我們從不因為『它很大、有監管』就免檢查；清單對所有人適用。」':
    '"Yes — Wirecard was one of Germany\'s thirty biggest companies before it blew up. That\'s why we never skip the check just because \'it\'s big and regulated\'; the checklist applies to everyone."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '紅旗清單 v2（15 項）完成並套用實習公司':
    'Red-flag checklist v2 (15 items) done and applied to the practice company',
  '能講出三案例的共同四步驟模式':
    'I can state the common four-step pattern of the three cases',
  '能說出 CFO 的倫理判準（頭版測試）':
    'I can state the CFO\'s ethical test (the front-page test)',
  '分享環節完成（殺信使測試），記錄卡住的點':
    'The sharing session is done (shoot-the-messenger test), and I\'ve noted where I got stuck',
  '回填 curriculum/01-overview.md 第 49 週進度欄':
    'Fill in the Week 49 progress column of curriculum/01-overview.md',
  '下週預告 · Week 50：稅務基礎':
    'Next week · Week 50: tax basics',
  '——投資人生的最後一塊拼圖：股利所得二擇一怎麼選、海外投資的稅、公司端的稅制地圖。':
    ' — the last piece of an investing life: how to choose between the two ways of taxing dividend income, taxes on overseas investments, and a map of the corporate tax system.',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：資金調度與避險':
    'Previous week: funding and hedging',
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
  '答對了——攻擊提問的人，而不是拿出證據，是 Enron、Wirecard、博達三案共同的前兆。正常公司面對質疑會回應數據；心虛的公司才需要讓提問的人閉嘴。':
    'Correct — attacking the person who asks, instead of producing evidence, is the shared warning sign of Enron, Wirecard and Procomp. A normal company answers doubts with data; only a guilty one needs the questioner to shut up.',
  '其實最該警覺的是「控告對方、指責記者收錢抹黑」。攻擊提問的人而不是拿出證據，是 Enron、Wirecard、博達三案共同的前兆；公布函證、請第三方查核，是在回應內容。':
    'Actually, the one that should alarm you most is "suing the other side and accusing journalists of being paid to smear the company." Attacking the questioner instead of producing evidence is the shared warning sign of Enron, Wirecard and Procomp; publishing confirmations and asking a third party to audit are responses on substance.',
  '「該報告出自意圖做空獲利的機構，動機可議，本公司已委任律師提告。」':
    '"The report comes from an organization that intends to profit by shorting the stock, so its motives are questionable; the company has retained lawyers to sue."',
  '只談對方的動機，沒有回答任何一項指控。做空者有利益不代表他說錯——要回應的是內容。':
    ' It only talks about the other side\'s motives and answers none of the allegations. A short seller having an interest doesn\'t mean they\'re wrong — what needs answering is the substance.',
  '「附上三家往來銀行的帳戶函證結果，以及第三方會計師對現金餘額的專案查核報告。」':
    '"Attached are the account confirmation results from our three partner banks, and a special audit report on our cash balance from a third-party accounting firm."',
  '拿出可獨立查證的證據——Wirecard 正是在這一步拿不出來。':
    ' Evidence that can be independently verified — and this is exactly the step Wirecard couldn\'t deliver.',
  '「本公司是國家級的成功企業，散播不實謠言者是在傷害國家形象。」':
    '"Our company is a nationally successful enterprise, and anyone spreading false rumors is damaging the nation\'s image."',
  '用愛國與規模當擋箭牌。Wirecard 出事前，德國監理機關也是這樣保護它的。':
    ' It uses patriotism and size as a shield. Before Wirecard blew up, German regulators protected it the same way.',
  '「針對應收帳款增加的疑問，以下是前十大客戶的帳齡分析與期後收款紀錄。」':
    '"On the question about rising receivables, here is the aging analysis and post-period collection record for our ten largest customers."',
  '直接回應指控的具體數字（W8 紅旗 #1），而且給了可以驗證的資料。':
    ' It responds directly to the specific numbers behind the allegation (W8 red flag #1), and gives data that can be verified.',
  '「那位記者過去曾寫過不利我們的報導，顯然是長期針對本公司。」':
    '"That journalist has written unfavorable pieces about us before, so they are obviously targeting our company in the long term."',
  '攻擊記者的過去，而不是證明這次的報導錯在哪。《金融時報》追 Wirecard 五年，期間一直被這樣指控。':
    ' It attacks the journalist\'s past instead of proving what is wrong with this report. The Financial Times chased Wirecard for five years and was accused of exactly this the whole time.',
  '「關係人交易的定價依據已補充揭露於財報附註，並由審計委員會逐筆審議通過。」':
    '"The pricing basis of the related-party transactions has been added to the disclosures in the financial-statement notes, and the audit committee has reviewed and approved each transaction."',
  '回應的是內容，而且把揭露放進有簽名責任的正式文件裡（本週的台灣重點）。':
    ' It responds on substance, and puts the disclosure into a formal document that carries a signature obligation (this week\'s Taiwan focus).',
  '第':
    'Statement',
  '則':
    '',
  '重新開始——目前答對 0 題':
    'Starting over — correct so far: 0',
  '答對——':
    'Correct — ',
  '再想想——':
    'Think again — ',
  '這是攻擊信使。':
    'this is shooting the messenger.',
  '這是回應內容。':
    'this is a response on substance.',
  '重新開始 ↺':
    'Restart ↺',
  '目前答對':
    'Correct so far:',
  '題':
    '',
  '應收帳款增速大於營收增速（連 2 年）':
    'Receivables growing faster than revenue (2 years in a row)',
  '存貨增速大於營收增速（連 2 年）':
    'Inventory growing faster than revenue (2 years in a row)',
  '營業現金流 ÷ 淨利長期小於 0.8':
    'Operating cash flow ÷ net income persistently below 0.8',
  '業外佔稅前淨利超過 30%（經常性）':
    'Non-operating items over 30% of pre-tax profit (recurring)',
  '頻繁的「一次性」項目':
    'Frequent "one-off" items',
  '會計師意見非「無保留」':
    'An audit opinion other than "unqualified"',
  '會計師事務所或 CFO 異常更換':
    'An unusual change of audit firm or CFO',
  '董監質押比高（超過 3–5 成）':
    'High pledge ratio among directors and supervisors (over 30–50%)',
  '關係人交易金額大且說明模糊':
    'Large related-party transactions with vague explanations',
  '現金很多卻同時大量借款':
    'Plenty of cash and heavy borrowing at the same time',
  '董事會一言堂（董事長兼總經理、無反對票紀錄）':
    'A rubber-stamp board (chairman is also CEO, no record of voting against)',
  '獨立董事異常辭任':
    'Unusual resignations of independent directors',
  '高層薪酬綁短期股價，且高層大量拋股':
    'Executive pay tied to the short-term share price, with executives selling large amounts of stock',
  '結構複雜、現金「在別的地方」':
    'A complex structure, with the cash "somewhere else"',
  '用訴訟與人身攻擊回應質疑':
    'Responding to doubts with lawsuits and personal attacks',
  '<p class="rfh">報表層（W8 v1）</p>':
    '<p class="rfh">Financial-statement layer (W8 v1)</p>',
  '<p class="rfh">治理層（本週新增）</p>':
    '<p class="rfh">Governance layer (new this week)</p>',
  '</span><span class="seg"><button type="button" data-v="0" aria-label="第':
    '</span><span class="seg"><button type="button" data-v="0" aria-label="Item',
  '項沒問題">✅</button><button type="button" data-v="1" aria-label="第':
    'is fine">✅</button><button type="button" data-v="1" aria-label="Item',
  '項待查">⚠️</button><button type="button" data-v="2" aria-label="第':
    'needs checking">⚠️</button><button type="button" data-v="2" aria-label="Item',
  '項亮紅旗">🚩</button></span></div>':
    'has a red flag">🚩</button></span></div>',
  '<b>兩層都亮——離場不需要第三個理由。</b>數字可能在說謊（報表層':
    '<b>Both layers lit — you don\'t need a third reason to walk away.</b> The numbers may be lying (financial-statement layer:',
  '支），而且說謊的成本很低（治理層':
    'flagged), and lying is cheap (governance layer:',
  '支）。':
    'flagged).',
  '<b>只有':
    '<b>Only the ',
  '報表層':
    'financial-statement layer',
  '治理層':
    'governance layer',
  '亮紅旗（':
    ' shows red flags (',
  '支）：加強追蹤。</b>':
    'in total): keep a closer watch.</b>',
  '數字有疑點，但制度面還在把關——查清楚疑點的成因。':
    ' The numbers look suspicious, but the system is still doing its job of guarding — find out what is behind the doubts.',
  '制度面鬆了，數字暫時還看不出問題——說謊的成本低，就要更常檢查數字。':
    ' The system has gone slack and the numbers don\'t show a problem yet — when lying is cheap, check the numbers more often.',
  '治理紅旗已經兩支以上，散戶最有效的治理工具是腳。':
    'With two or more governance red flags already, the most effective governance tool a small investor has is their feet.',
  '<b>目前沒有紅旗</b>，還有':
    '<b>No red flags so far</b>, and there are still',
  '項沒給分。':
    'item(s) not yet scored.',
  '<b>15 項掃完，沒有紅旗。</b>':
    '<b>All 15 items scanned, no red flags.</b>',
  '有':
    ' Also,',
  '項待查——待查不是通過，補完資料再下結論。':
    'item(s) need checking — "needs checking" is not a pass; fill in the data before you conclude.',
  '✓ 紅旗清單升級到 v2——下週處理投資人生的最後一塊：稅。':
    '✓ Red-flag checklist upgraded to v2 — next week we deal with the last piece of an investing life: tax.',
};
