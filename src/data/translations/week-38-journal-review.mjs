/*
 * 給家人的投資課 Week 38：投資紀律——交易日誌與複盤 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-38-journal-review.html
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
  '給家人的投資課 · Q3 操盤手季 · Week 38':
    'Family Investing Course · Q3 The Portfolio Manager\'s Quarter · Week 38',
  '投資紀律——交易日誌與複盤':
    'Investing Discipline — the Trading Journal and the Review',
  '儀表都裝了（W27–31）、流程都建了（W36）、風暴也演習了（W37）。最後一個問題：':
    'The gauges are installed (W27–31), the process is built (W36), and we have drilled for the storm (W37). One last question: ',
  '怎麼知道自己有沒有在進步？':
    'how do you know whether you are getting better?',
  '答案是職業選手的共同習慣——日誌與複盤。核心心法只有一句：分開評價「決策品質」與「結果品質」。':
    'The answer is a habit all professionals share — the journal and the review. The core idea fits in one sentence: judge decision quality and outcome quality separately.',
  '⏱ 預估 3–5 小時':
    '⏱ About 3–5 hours',
  '前置：第 23、36 週':
    'Prerequisites: Weeks 23 and 36',
  '52 週 · 第 38 週':
    '52 weeks · Week 38',
  '本週在三個角色中的定位：':
    'Where this week sits across the three roles:',
  'Q3 的最後一塊知識拼圖。操盤手靠複盤進步；投資人靠複盤避免把牛市當成自己的腦子；說書人靠它講清楚「運氣」和「能力」的差別。':
    'The last piece of knowledge in Q3. The portfolio manager improves through reviews; the investor uses reviews to avoid mistaking a bull market for their own brains; the storyteller uses them to explain the difference between "luck" and "skill".',
  '開始前 10 分鐘：':
    'First 10 minutes:',
  '回顧上週的家庭消防演習——三個檢查，家人怎麼回答？':
    'Look back at last week\'s family fire drill — three checks. How did your family answer?',
  '開始之前，先猜一題':
    'Before we start, take a guess',
  '朋友聽了群組明牌，沒做任何功課就重押一檔股票，三週後賺了 40%。這是一個好決策嗎？':
    'A friend heard a hot tip in a group chat, did no homework, put a big bet on one stock, and made 40% three weeks later. Was that a good decision?',
  '是，賺錢就是好決策':
    'Yes, making money means it was a good decision',
  '不是，而且這是最危險的情況':
    'No, and this is the most dangerous case',
  '要看他之後有沒有賣':
    'It depends on whether he sold afterwards',
  '區塊 ① ／ 講義 · 約 2 小時':
    'Block ① / Notes · about 2 hours',
  '1. Resulting：用結果評價決策的謬誤':
    '1. Resulting: the fallacy of judging decisions by their outcomes',
  '職業撲克冠軍 Annie Duke（《高勝算決策》）最重要的貢獻，是給這個謬誤起了名字——':
    'Poker champion Annie Duke ("Thinking in Bets") made her most important contribution by giving this fallacy a name — ',
  '酒駕平安到家，不代表酒駕是對的；繫了安全帶還是出車禍，不代表繫安全帶是錯的。':
    'Driving drunk and getting home safely does not make driving drunk right; wearing a seat belt and still crashing does not make wearing a seat belt wrong.',
  '投資是':
    'Investing is a ',
  '機率遊戲':
    'game of probabilities',
  '：好決策（期望值為正、依據當時可得的資訊）也會有壞結果；爛決策也常有好結果，尤其在牛市——「別把牛市當成自己的腦子」。於是有四個象限：':
    ': a good decision (positive expected value, based on the information available at the time) can still have a bad outcome; a bad decision often has a good outcome, especially in a bull market — "don\'t mistake a bull market for your own brains". That gives us four quadrants:',
  '好結果':
    'Good outcome',
  '壞結果':
    'Bad outcome',
  '好決策':
    'Good decision',
  '應得的（繼續）':
    'Deserved (keep going)',
  '運氣差（別改流程！）':
    'Bad luck (don\'t change the process!)',
  '爛決策':
    'Bad decision',
  '僥倖（最危險的格子）':
    'Dumb luck (the most dangerous box)',
  '教訓（最容易學的格子）':
    'Lesson (the easiest box to learn from)',
  '最危險的是「爛決策＋好結果」':
    'The most dangerous one is "bad decision + good outcome"',
  '：僥倖賺錢會強化爛行為（W23 的過度自信＋近因偏誤），直到某次市場把學費全部收回。複盤的第一個功能，就是把每筆交易放進正確的格子——':
    ': getting lucky reinforces bad behavior (W23\'s overconfidence plus recency bias), until one day the market takes all the tuition back. The first job of a review is to put every trade in the right box — ',
  '用「決策當時可得的資訊」評價，不用事後的股價':
    'judge it by "the information available at the time of the decision", not by the share price afterwards',
  '四象限審判庭':
    'The Four-Quadrant Courtroom',
  '先只看「當時的資訊」判斷決策好壞，再揭曉結果、放進格子。七筆模擬交易。':
    'Judge each decision using only "the information at the time", then reveal the outcome and place it in a box. Seven simulated trades.',
  '第 1／7 筆':
    'Trade 1/7',
  '下一筆 →':
    'Next trade →',
  '應得':
    'Deserved',
  '運氣差':
    'Bad luck',
  '僥倖':
    'Dumb luck',
  '教訓':
    'Lesson',
  '目前判對 0 筆':
    'Correct so far: 0',
  '2. 日誌：複盤的原料':
    '2. The journal: raw material for the review',
  'W36 的決策記錄卡是「決策時」的快照；日誌把它延伸成':
    'The W36 decision card is a snapshot taken "at the time of the decision"; the journal extends it into a ',
  '全程紀錄':
    'complete record',
  '。模擬組合的交易表已經有雛形（日期／動作／理由／執行落差），本週補齊三個關鍵欄位：':
    '. The paper portfolio\'s trade table already has the basics (date / action / reason / execution gap); this week we add three key columns:',
  '情緒分（1–10）':
    'Emotion score (1–10)',
  '：下單當下的情緒強度。之後統計「高情緒決策」的品質——幾乎人人會發現系統性偏差':
    ': how strong your emotion was at the moment you placed the order. Later you can measure the quality of your "high-emotion decisions" — almost everyone finds a systematic bias',
  '當時的市場環境':
    'Market conditions at the time',
  '（一句話）：溫度計讀數（W25）、大盤位置。複盤時還原「當時的天氣」':
    ' (one sentence): the thermometer reading (W25) and where the index stood. When you review, you reconstruct "the weather back then"',
  '預期 vs 實際':
    'Expected vs actual',
  '（複盤時回填）：當初預期什麼？發生了什麼？差異來自論點錯誤，還是運氣？':
    ' (filled in at review time): what did you expect, and what happened? Did the difference come from a wrong thesis, or from luck?',
  '沒有日誌的複盤是回憶，而回憶會被結果污染。':
    'A review without a journal is just memory, and memory gets contaminated by outcomes.',
  '這叫後見之明偏誤：賺錢的交易，你會「記得」自己當初很篤定。所以日誌必須在':
    'This is hindsight bias: for a trade that made money, you will "remember" being very sure back then. So the journal has to be written ',
  '下單當下':
    'at the moment you place the order',
  '寫，不能事後補。':
    ', not filled in afterwards.',
  '3. 複盤的兩個節奏':
    '3. Two rhythms of review',
  '月度小複盤（30 分鐘）':
    'Monthly mini-review (30 minutes)',
  '季度大複盤（2 小時）':
    'Quarterly deep review (2 hours)',
  '查什麼':
    'What to check',
  '執行':
    'Execution',
  '判斷':
    'Judgment',
  '問題':
    'Questions',
  '每筆交易符合 IPS 與買入清單嗎？執行落差平均多少（W34）？情緒分超過 7 的有幾筆？該做沒做的事（再平衡、漏記）？':
    'Did each trade comply with the IPS and the buy checklist? What was the average execution gap (W34)? How many trades had an emotion score above 7? Anything that should have been done but wasn\'t (rebalancing, missed entries)?',
  '每筆決策放進四象限（含「不買」）；對照投資論文（W26）——觸發條件被碰到而我裝沒看見嗎？哪條原則被違反、違反的那筆結果如何？':
    'Put every decision in the four quadrants (including "didn\'t buy"); check against the investment thesis (W26) — was a trigger condition hit and I pretended not to see it? Which principle was broken, and how did that trade turn out?',
  '輸出':
    'Output',
  '違規標記、隨 W39 月報':
    'Rule-violation flags, included in the W39 monthly report',
  '下季改一件事':
    'Change one thing next quarter',
  '（只改一件——改十件等於沒改）':
    ' (only one — changing ten things is the same as changing nothing)',
  '4. 運氣有多大？用數字感受「一季的樣本」':
    '4. How big is luck? Feel the size of "one quarter\'s sample"',
  '為什麼「下季只改一件事」、為什麼不能從一季成績大改流程？因為':
    'Why "change just one thing next quarter", and why shouldn\'t you overhaul the process because of one quarter\'s results? Because ',
  '樣本太小時，運氣的聲音比能力大':
    'when the sample is small, the voice of luck is louder than the voice of skill',
  '。下面這台模擬器假設每筆交易獨立、勝率固定，算出一季下來「看起來像高手」和「看起來很差」的機率：':
    '. The simulator below assumes each trade is independent with a fixed win rate, and works out the chance that a quarter makes you "look like a master" or "look terrible":',
  '運氣放大鏡':
    'The Luck Magnifier',
  '預設是一個「完全沒有本事」（真實勝率 50%）的人，一季做 8 筆交易。':
    'The default is someone with "no skill at all" (true win rate 50%) making 8 trades in a quarter.',
  '沒本事・8 筆':
    'No skill · 8 trades',
  '真高手・8 筆':
    'Real master · 8 trades',
  '真高手・40 筆':
    'Real master · 40 trades',
  '交易筆數':
    'Number of trades',
  '8 筆':
    '8 trades',
  '真實勝率':
    'True win rate',
  '「看起來像高手」門檻（勝率）':
    '"Looks like a master" threshold (win rate)',
  '看起來像高手':
    'Looks like a master',
  '勝場 ≥ 門檻':
    'Wins ≥ threshold',
  '看起來很差':
    'Looks terrible',
  '勝率低於五成':
    'Win rate below 50%',
  '5. 複盤最常見的發現（先打預防針）':
    '5. The most common findings from reviews (a vaccination first)',
  '最好的操作常是「沒有操作」':
    'The best action is often "no action"',
  '：多數人複盤後發現，整季什麼都不動績效反而更好——過度交易的自我審判（W10 的過路費＋W34 的執行落差）':
    ': most people discover after a review that doing nothing all quarter would have given better results — the self-judgment of overtrading (W10\'s toll plus W34\'s execution gap)',
  '賣出的品質遠差於買入':
    'Sells are much worse than buys',
  '：買入有清單把關（W36），賣出常是情緒（跌怕了／漲到「夠了」）——處分效應（W23）在自己身上的樣子':
    ': buys are guarded by the checklist (W36), while sells are often emotional (scared by the drop, or "that\'s enough" after a rally) — this is what the disposition effect (W23) looks like in you',
  '高情緒分交易的勝率明顯較低':
    'High-emotion trades have a clearly lower win rate',
  '：這是「48 小時規則」最有力的個人化證據':
    ': this is the strongest personal evidence for the "48-hour rule"',
  '違規操作偶爾大賺':
    'Rule-breaking trades occasionally pay off big',
  '——僥倖格。複盤的成熟度測試就在這裡：你能對一筆賺錢的交易寫下「這是爛決策，下不為例」嗎？':
    ' — the dumb-luck box. This is where the maturity test of a review lies: can you write, next to a winning trade, "this was a bad decision, never again"?',
  '6. 職業選手的共性':
    '6. What the professionals have in common',
  'Schwager 在《金融怪傑》訪談數十位頂尖操盤手，方法南轅北轍（技術面、基本面、總經），紀律結構卻驚人一致：':
    'Schwager interviewed dozens of top traders in "Market Wizards". Their methods were worlds apart (technical, fundamental, macro), yet the structure of their discipline was strikingly alike: they ',
  '都有某種形式的記錄與複盤':
    'all keep some form of record and review',
  '都把虧損視為成本而非恥辱':
    ', they all treat losses as a cost rather than a disgrace',
  '（快速認錯）、':
    ' (admit mistakes fast), and they ',
  '都在系統內行動':
    'all act within a system',
  '（規則先於情緒）——和你這 12 週建立的東西同構。天才的方法學不來，紀律的結構可以照抄。':
    ' (rules before emotions) — the same structure as what you have built over these 12 weeks. You cannot copy a genius\'s method, but you can copy the structure of their discipline.',
  '7. 常見誤解闢謠':
    '7. Three things people get wrong',
  '「複盤就是檢討虧損。」':
    '"A review means going over my losses."',
  '賺錢的交易更需要複盤——僥倖格藏在那裡；虧損的交易反而常是好決策＋壞運氣，錯改流程才是二次傷害。':
    'Winning trades need a review even more — the dumb-luck box hides there. Losing trades are often a good decision plus bad luck, and changing the process by mistake is a second injury.',
  '「記錄好麻煩，憑感覺就好。」':
    '"Keeping records is a hassle; I\'ll just go by feel."',
  '「感覺」正是被 W23 六大偏誤污染的通道；日誌是唯一不會說謊的證人。而且量很小：一筆交易 2 分鐘、一個月 30 分鐘。':
    '"Feel" is exactly the channel contaminated by the six biases of W23; the journal is the only witness that does not lie. And it takes little time: 2 minutes per trade, 30 minutes a month.',
  '「複盤後要大改特改。」':
    '"After a review I should change a lot."',
  '樣本太小就大改，是把雜訊當信號（上面的放大鏡：一季的結果大半是運氣）。「下季只改一件事」是刻意的保守——流程的進化該像 IPS：慢，而且有理由。':
    'Making big changes on a small sample means treating noise as signal (see the magnifier above: most of one quarter\'s result is luck). "Change one thing next quarter" is deliberately conservative — the process should evolve like the IPS: slowly, and for a reason.',
  '區塊 ② ／ 必讀導讀 · 約 2 小時':
    'Block ② / Required reading · about 2 hours',
  '決策與結果分開看':
    'Separate decisions from outcomes',
  '60 分鐘':
    '60 min',
  '《高勝算決策》核心章':
    '"Thinking in Bets", the core chapters',
  'resulting 與「用打賭的心態思考」——本週的理論主幹。讀完試著用自己的話解釋：為什麼「我確定」比「我有七成把握」更危險。':
    'Resulting and "thinking in bets" — the theoretical backbone of this week. After reading, try to explain in your own words why "I\'m sure" is more dangerous than "I\'m 70% confident".',
  '40 分鐘':
    '40 min',
  '《金融怪傑》任選兩篇訪談':
    '"Market Wizards", any two interviews',
  '邊讀只抓一件事：這位操盤手的「紀律結構」是什麼——記錄什麼、怎麼認錯、規則是什麼。寫成兩行筆記。':
    'While reading, look for just one thing: what is this trader\'s "discipline structure" — what do they record, how do they admit mistakes, what are their rules? Write it as two lines of notes.',
  '10 分鐘':
    '10 min',
  '回顧自己的 W23 任務 A':
    'Revisit your own W23 Task A',
  '三個真實決策的偏誤標記——本週的四象限是它的升級版。':
    'The bias labels on three real decisions — this week\'s four quadrants are its upgrade.',
  '區塊 ③ ／ 練習 · 約 1 小時':
    'Block ③ / Exercise · about 1 hour',
  '第一次正式複盤':
    'Your first formal review',
  '任務 A｜日誌補齊（15 分鐘）':
    'Task A | Complete the journal (15 minutes)',
  '模擬組合交易表補上三欄：情緒分／市場環境／預期回填。回填至今所有紀錄（情緒分憑印象補，之後即時記）。':
    'Add three columns to the paper portfolio\'s trade table: emotion score / market conditions / expectation backfill. Backfill all records so far (estimate the emotion scores from memory; from now on record them in real time).',
  '任務 B｜四象限審判（30 分鐘）':
    'Task B | Four-quadrant judgment (30 minutes)',
  '把模擬組合至今每筆決策（含記錄過的「不買」）列出來，':
    'List every decision in the paper portfolio so far (including any "didn\'t buy" you recorded), then ',
  '先遮住結果':
    'cover the outcome',
  '，只讀當時的論點與資訊，評決策品質（好／爛＋一句理由）':
    ', read only the thesis and information at the time, and rate the decision quality (good / bad + one sentence of reason)',
  '再看結果，放進格子':
    'Then look at the outcome and place it in a box',
  '找出你的僥倖格——有嗎？誠實嗎？':
    'Find your dumb-luck boxes — are there any? Were you honest?',
  '輸出「下季改一件事」：一句話，寫進 IPS 附錄':
    'Output "change one thing next quarter": one sentence, written into the IPS appendix',
  '怎麼知道做對了：':
    'How to know you got it right: ',
  '運氣放大鏡預設（勝率 50%、8 筆、門檻 75%）必須是「看起來像高手」14.5%、「看起來很差」36.3%；按「真高手・8 筆」後分別是 31.5% 與 17.4%——真高手一季裡仍有將近兩成機率看起來很差。四象限審判庭的七筆，應該有兩筆落在僥倖格。':
    'With the Luck Magnifier at its defaults (50% win rate, 8 trades, 75% threshold) you must see "looks like a master" 14.5% and "looks terrible" 36.3%; after pressing "Real master · 8 trades" they become 31.5% and 17.4% — even a real master has nearly a 20% chance of looking terrible in one quarter. Of the seven trades in the Four-Quadrant Courtroom, two should land in the dumb-luck box.',
  '日誌三欄補齊，且此後即時記':
    'The three journal columns are complete, and from now on filled in real time',
  '四象限審判完成（有誠實找僥倖格）':
    'The four-quadrant judgment is done (and you honestly looked for dumb luck)',
  '「下季改一件事」寫入 IPS 附錄':
    '"Change one thing next quarter" is written into the IPS appendix',
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open the answer)',
  '一筆完全符合清單、論點扎實的交易虧了 15%——該改什麼？':
    'A trade that matched the checklist perfectly, with a solid thesis, lost 15% — what should you change?',
  '什麼都不改':
    'Nothing at all',
  '（好決策＋壞結果＝運氣成本）。需要確認的只有：觸發條件有沒有被碰到——碰到就照 W26 執行認錯，那是論點錯誤不是運氣；沒碰到就繼續持有、繼續記錄。因為一次壞結果改掉好流程，是複盤最常見的自傷。':
    ' (good decision + bad outcome = the cost of luck). The only thing to confirm is whether a trigger condition was hit — if it was, follow W26 and admit the mistake, because that is a wrong thesis, not luck; if it was not, keep holding and keep recording. Changing a good process because of one bad outcome is the most common self-inflicted wound in reviews.',
  '為什麼日誌必須「下單當下」寫？':
    'Why must the journal be written "at the moment you place the order"?',
  '→ 因為':
    '→ Because ',
  '記憶會被結果重寫':
    'memory is rewritten by outcomes',
  '（後見之明偏誤）：賺錢後你會「記得」當初很篤定，虧錢後會「記得」當初就有疑慮。事後補的日誌記的是故事，不是決策；只有當下的紀錄能當複盤的可信證據。':
    ' (hindsight bias): after a win you will "remember" being very sure, and after a loss you will "remember" having doubts. A journal filled in afterwards records a story, not the decision; only a record made at the time is credible evidence for a review.',
  '「別把牛市當成自己的腦子」用四象限翻譯是什麼意思？':
    'What does "don\'t mistake a bull market for your own brains" mean in terms of the four quadrants?',
  '→ 牛市把大量爛決策送進':
    '→ A bull market sends a large number of bad decisions into the ',
  '那一欄（僥倖格），讓人把市場的 beta 誤認成自己的 alpha——W30–32 的歸因與因子正是拆穿的工具。潮水退了，爛決策回到該去的格子，而習慣已經養成。':
    ' "good outcome" column (the dumb-luck box), letting people mistake the market\'s beta for their own alpha — the attribution and factors of W30–32 are exactly the tools that expose this. When the tide goes out, the bad decisions go back to the box where they belong, but the habit has already formed.',
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '酒駕悖論與家庭四象限':
    'The drunk-driving paradox and the family four quadrants',
  '講到別人聽懂，才算真的懂。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only really understand it once someone else does. The script below is written for family, but works just as well on friends and colleagues.',
  '開場（酒駕悖論）':
    'Opening (the drunk-driving paradox)',
  '「有人酒駕平安到家，說『你看沒事吧』——他說得對嗎？」（不對，結果好不代表決定對。）「反過來：有人繫了安全帶還是受傷——繫安全帶錯了嗎？」（也不對。）「':
    '"Someone drives drunk, gets home safely, and says, \'See? Nothing happened.\' Is he right?" (No — a good outcome does not mean the decision was right.) "And the reverse: someone wore a seat belt and still got hurt. Was the seat belt wrong?" (No again.) "',
  '決定的好壞，要看做決定當下知道什麼，不是看後來發生什麼。':
    'Whether a decision is good depends on what you knew when you made it, not on what happened afterwards.',
  '這是投資裡最難學的一課，今天用一個表格學會它。」':
    ' This is the hardest lesson in investing, and today we\'ll learn it with one table."',
  '核心演示（四象限）':
    'Core demonstration (the four quadrants)',
  '畫 2×2：「我們模擬帳戶的每筆買賣都會放進這四格。最可怕的不是虧錢那格，是':
    'Draw a 2×2: "Every trade in our simulated account goes into one of these four boxes. The scariest box is not the one where we lose money; it is ',
  '『亂做卻賺錢』那格':
    'the one where we \'did something reckless and made money\'',
  '——它會讓人以為自己很厲害，然後越賭越大。賭場最喜歡的，就是第一次就贏錢的新手。」':
    ' — it makes people think they are brilliant, and then they bet bigger and bigger. What a casino loves most is a beginner who wins the first time."',
  '互動（家庭版複盤）':
    'Interactive (the family review)',
  '「回想我們家過去一個大決定——買車、搬家、某筆投資。用當時知道的資訊看，它是好決定嗎？結果呢？放哪一格？」':
    '"Think of a big decision our family made in the past — buying a car, moving house, some investment. Using what we knew at the time, was it a good decision? And the outcome? Which box does it go in?"',
  '多數人一輩子沒把「決定」和「結果」分開看過——這是家人第一次。':
    'Most people have never separated "the decision" from "the outcome" in their whole lives — this is the first time for your family.',
  '收尾（Q3 將完）':
    'Wrap-up (the end of Q3)',
  '「這一季我們把模擬帳戶從開張練到全套儀表：會算報酬、會量風險、會拆成績、會演習風暴、會寫日誌。下週我要交這一季的期末報告——一份正式的基金月報，講給你們聽。」':
    '"This quarter we took the simulated account from opening day to a full set of gauges: we can calculate returns, measure risk, break results apart, drill for storms, and keep a journal. Next week I will hand in this quarter\'s final report — a formal fund monthly report, which I will present to you."',
  '預期反應與應對':
    'What they will say, and what to answer',
  '「賺錢還要被罵喔？」':
    '"I make money and still get scolded?"',
  '「不是罵，是誠實：僥倖的錢是市場暫借的，習慣不改，遲早連本帶利收回去。」':
    '"It is not a scolding, it is honesty: money won by luck is a loan from the market. If the habit does not change, sooner or later it gets collected back with interest."',
  '區塊 ⑤ ／ 完成檢核':
    'Block ⑤ / Completion checklist',
  '本週完成的定義':
    'What counts as done this week',
  '能畫四象限並解釋「僥倖格最危險」':
    'I can draw the four quadrants and explain why "the dumb-luck box is the most dangerous"',
  '日誌升級＋第一次四象限複盤完成':
    'The journal is upgraded and the first four-quadrant review is done',
  '月度／季度複盤節奏排入行事曆':
    'The monthly / quarterly review rhythm is on the calendar',
  '分享環節完成（決定與結果分開），記錄卡住的點':
    'The teach-it step is done (decisions and outcomes separated); I noted where I got stuck',
  '回填 curriculum/01-overview.md 第 38 週進度欄':
    'Fill in the Week 38 progress column of curriculum/01-overview.md',
  '下週預告 · Week 39：Q3 期末專題':
    'Next week · Week 39: the Q3 capstone project',
  '——把十二週的模組組裝成一份專業格式的月度風險報告，並向家人做第一次「基金經理人報告」。':
    ' — assemble the twelve weeks of modules into a professionally formatted monthly risk report, and give your family the first "fund manager\'s report".',
  '← 給家人的投資課':
    '← Family Investing Course',
  '上一週：壓力測試':
    'Previous week: Stress testing',
  '專欄文章':
    'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·',
  '單元導航':
    'Section navigation',
  '切換深淺主題':
    'Toggle light / dark theme',
  '猜一個答案':
    'Pick an answer',
  '四象限':
    'Four quadrants',
  '高手門檻':
    'Master threshold',
  '答對了——沒做功課、重押、聽明牌，用當時的資訊看是爛決策；賺錢只是結果好。「爛決策＋好結果」是最危險的格子：它會強化爛行為，讓人越押越大，直到市場把學費全部收回。':
    'Correct. With no homework, a big bet, and a tip from a friend, it was a bad decision judged on the information at the time; making money was only a good outcome. "Bad decision + good outcome" is the most dangerous box: it reinforces bad behavior and makes people bet bigger and bigger, until the market takes all the tuition back.',
  '決策的好壞要看當時知道什麼：沒做功課、重押、聽明牌，是爛決策；賺 40% 只是結果好。「爛決策＋好結果」是最危險的格子——它會強化爛行為，讓人越押越大，直到市場把學費全部收回。':
    'Whether a decision is good depends on what you knew at the time: no homework, a big bet, and a tip from a friend make a bad decision; the 40% gain was just a good outcome. "Bad decision + good outcome" is the most dangerous box — it reinforces bad behavior and makes people bet bigger and bigger, until the market takes all the tuition back.',
  '買入清單 12 項全過、估值有 30% 安全邊際、部位 5%、分批限價。':
    'All 12 items on the buy checklist passed, valuation has a 30% margin of safety, the position is 5%, bought in tranches with limit orders.',
  '一年後漲 25%。':
    'Up 25% a year later.',
  '流程完整、結果也好——這是應得的。繼續，但別把 25% 全算成自己的本事，大盤可能也漲了（W30 歸因）。':
    'A complete process and a good outcome — this is deserved. Keep going, but don\'t credit all 25% to your own skill; the market may have risen too (W30 attribution).',
  '朋友在群組報明牌，隔天沒做健檢就投入組合的 30%。':
    'A friend shared a hot tip in the group chat; the next day, with no health check, he put 30% of the portfolio into it.',
  '三週後漲 40%。':
    'Up 40% three weeks later.',
  '僥倖格。沒做功課、超過 IPS 部位上限、想法來源是熱門推薦——三個清單項目同時失守。賺錢會強化這個行為，這正是最危險之處。':
    'Dumb-luck box. No homework, above the IPS position limit, and the idea came from a popular recommendation — three checklist items failed at once. Making money reinforces this behavior, which is exactly why it is the most dangerous.',
  '論點扎實、清單全過、部位 5%。持有期間，該產業突然遭到出口禁令。':
    'Solid thesis, full checklist pass, 5% position. During the holding period, the industry was suddenly hit by an export ban.',
  '半年後跌 15%，事先寫好的觸發條件沒有被碰到。':
    'Down 15% after six months; the trigger conditions written in advance were not hit.',
  '運氣差。決策當時無法預知禁令；觸發條件沒碰到，就照計畫持有、繼續記錄。這時候改流程，才是二次傷害。':
    'Bad luck. The ban could not have been foreseen at the time of the decision; since no trigger condition was hit, hold as planned and keep recording. Changing the process now would be the second injury.',
  '股市大漲後股票比例超出 IPS 目標 8 個百分點，依規則再平衡：賣一部分股票、買債券。':
    'After a big stock rally, the equity share was 8 percentage points above the IPS target, so by the rules he rebalanced: sold some stocks and bought bonds.',
  '之後股市又漲了 20%，少賺了一截。':
    'The stock market then rose another 20%, and he earned less than he could have.',
  '運氣差。再平衡是事先寫好的紀律，不是預測。「少賺」不是錯，下次照樣執行。':
    'Bad luck. Rebalancing is a discipline written down in advance, not a prediction. "Earning less" is not a mistake — do it again next time.',
  '某天大盤跌 8%，看了整晚新聞，情緒分 9，隔天開盤全部賣出。':
    'One day the index fell 8%; after watching the news all night with an emotion score of 9, he sold everything at the next open.',
  '隔週市場又跌了 10%，「躲過一劫」。':
    'The following week the market fell another 10%, and he "dodged a bullet".',
  '僥倖格——而且特別陰險。違反了 48 小時規則與 IPS，卻被結果獎勵；下一次恐慌，這個人會更快按下賣出鍵，而多數時候市場會反彈。':
    'Dumb-luck box — and a particularly sneaky one. He broke the 48-hour rule and the IPS, yet was rewarded by the outcome; at the next panic he will hit the sell button even faster, and most of the time the market rebounds.',
  '為了「攤平」，在虧損 20% 的持股上加碼，部位因此超過 IPS 上限一倍。':
    'To "average down", he added to a holding that was down 20%, which pushed the position to double the IPS limit.',
  '之後再跌 30%。':
    'It then fell another 30%.',
  '教訓格。違反部位上限、用攤平代替重新評估論點——結果壞，學得也最快。寫進原則清單。':
    'Lesson box. He broke the position limit and used averaging down instead of re-examining the thesis — a bad outcome, and also the fastest way to learn. Write it into the list of principles.',
  '認真研究後，估值遠高於保守值，決定不買，並寫了一張「不買」的決策卡。':
    'After careful research, valuation was far above the conservative value, so he decided not to buy and wrote a "didn\'t buy" decision card.',
  '之後一年漲了 50%。':
    'It rose 50% over the following year.',
  '運氣差（錯過）。用當時的資訊，不買是有紀律的決定。正因為有寫卡，複盤時才看得到這筆——也才能檢討：估值假設是否太保守？':
    'Bad luck (a missed opportunity). Given the information at the time, not buying was a disciplined decision. Because the card was written, this trade is visible at review time — and you can ask: were the valuation assumptions too conservative?',
  '第':
    'Trade 44	Next trade →',
  '筆':
    '',
  '重新開始——目前判對 0 筆':
    'Restart — correct so far: 0',
  '判對了':
    'Correct',
  '再想想':
    'Think again',
  '——這是':
    ' — verdict: ',
  '。</b>結果：':
    '.</b> Outcome: ',
  '<br>落點：<b>':
    '<br>Landed in: <b>',
  '重新開始 ↺':
    'Restart ↺',
  '目前判對':
    'Correct so far:',
  '——七筆裡有兩筆落在僥倖格，你都抓到了嗎？':
    ' — two of the seven landed in the dumb-luck box; did you catch them both?',
  '勝':
    'At least',
  '筆以上':
    'wins',
  '<b>完全沒本事的人，有':
    '<b>Someone with no skill at all has a',
  '的機率交出「勝':
    'chance of posting the great-looking record "',
  '」的漂亮成績單。</b>':
    ' wins".</b>',
  '樣本這麼小，好成績說明不了什麼——這就是為什麼一季的結果不能拿來大改流程。':
    'With a sample this small, a good record proves nothing — that is why one quarter\'s results should not be used to overhaul the process.',
  '筆數夠多，運氣就很難冒充能力了。':
    'With enough trades, luck can hardly pass for skill any more.',
  '<b>真實勝率':
    '<b>Someone with a true win rate of',
  '% 的人，仍有':
    '% still has a',
  '的機率在這':
    'chance of a win rate below 50% across these',
  '筆裡勝率低於五成。</b>':
    'trades.</b>',
  '如果他因此改掉流程，就是把壞運氣當成壞能力——典型的 resulting。':
    'If he changes his process because of it, he is treating bad luck as bad skill — classic resulting.',
  '樣本變大，真本事才開始浮現。複盤要看的是累積多季的紀錄，不是單季。':
    'As the sample grows, real skill starts to show. A review should look at records accumulated over many quarters, not one quarter.',
  '✓ 會分辨運氣與能力了——下週交出 Q3 的期末報告。':
    '✓ You can now tell luck from skill — next week, hand in the Q3 final report.',
};
