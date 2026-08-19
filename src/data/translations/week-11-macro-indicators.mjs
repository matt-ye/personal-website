/*
 * 給家人的投資課 Week 11：總經指標判讀 — 英文對照表。
 * 來源頁：src/data/course-weeks/week-11-macro-indicators.html
 *
 * 沿用 week-01 的慣例（金額單位進標籤、行內標記邊界留半形空白、
 * 台灣機構名用官方英文名、語域保持家庭教材的口語溫度）。
 *
 * 這一週沒有金額計算機，「萬」的問題不出現；本頁的特別之處是機構名密度高：
 *   主計總處 → DGBAS｜國發會 → NDC（National Development Council）
 *   中經院 → CIER｜經濟部 → Ministry of Economic Affairs
 *   中央銀行 → Central Bank of the Republic of China (Taiwan)
 *   景氣對策信號 → NDC 官方英文用 "Monitoring Indicators"，
 *     單獨出現對英文讀者太模糊，句子裡補一個限定詞寫成
 *     "business-cycle Monitoring Indicator"，表格裡用 "Monitoring indicator"。
 *   Howard Marks《掌握市場週期》→ 原著書名 Mastering the Market Cycle。
 * 全部查得到官方英文名，所以 KEEP 是空的。
 *
 * ⚠ 已知限制（非本對照表可處理）：<strong> 之後單獨成為文字節點的全形
 *   「：」不含漢字，抽取器抓不到，英文頁上會保留全形冒號。要改得動原始碼。
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
  '給家人的投資課 · Q1 共同地基 · Week 11':
    'Family Investing Course · Q1 Common Ground · Week 11',
  '總經指標判讀': 'Reading the Macro Indicators',
  '個股分析是顯微鏡，總經是氣象台——本週交付一個你會每月更新的儀表板。':
    'Picking apart one company is a microscope; macro is the weather station — and this week you deliver a dashboard you will actually keep updating every month.',
  '⏱ 預估 3–5 小時': '⏱ About 3–5 hours',
  '前置：': 'Prerequisite: ',
  '第 3 週': 'Week 3',
  '52 週 · 第 11 週': '52 weeks · Week 11',
  '本週在三個角色中的定位：': 'Where this week sits across the three roles: ',
  '投資人用它理解估值環境（Q2）、操盤手用它做風險定位與配置傾斜（Q3）、財務長用它做預算假設與資金調度（Q4）。':
    'The investor uses it to read the valuation environment (Q2), the trader to set risk posture and tilt the allocation (Q3), the CFO to set budget assumptions and plan funding (Q4).',
  '開始前 10 分鐘：': 'First 10 minutes: ',
  '回顧上週分享「過路費」時對方卡住的點——T+2 後天扣款、永遠用限價，兩個防身知識還記得嗎。先用自己的話再講一次。':
    'Look back at where people got stuck when you explained last week\'s "toll fees" — the money leaves your account on T+2, and always use a limit order. Do you still have both pieces of self-defence? Say them again in your own words first.',

  /* ── 開場猜題 ── */
  '開始之前，先猜一題': 'Before we start, take a guess',
  '國發會每月幫台灣經濟亮一個燈：':
    "Every month the National Development Council lights a lamp for Taiwan's economy: ",
  '藍燈＝景氣最差、紅燈＝景氣最熱': 'blue = conditions at their worst, red = conditions at their hottest',
  '。歷史上，在哪種燈號買股票，長期報酬通常比較好？':
    '. Historically, buying stocks under which light has tended to give the better long-run return?',
  '紅燈（景氣正好）': 'Red (things are good)',
  '綠燈（穩穩的）': 'Green (nice and steady)',
  '藍燈（景氣最差）': 'Blue (things are worst)',
  '猜一個答案': 'Pick an answer',
  '答對了——而且這很反直覺。藍燈代表景氣最差、新聞最悲觀，但也代表價格最便宜；紅燈人人樂觀，價格早就漲上去了。「便宜在壞消息裡」——前提是有紀律和閒錢，這正是整套課程在練的。':
    'Correct — and it is deeply counter-intuitive. A blue light means conditions at their worst and the news at its gloomiest, but it also means prices at their cheapest; under a red light everyone is optimistic and prices ran up long ago. The cheap prices come wrapped in bad news — provided you have the discipline and the spare cash, which is exactly what this whole course is training.',
  '直覺的答案——但歷史經驗相反：藍燈（景氣最差）區間買進的長期報酬通常更好。因為藍燈時新聞最悲觀、價格最便宜；紅燈時人人樂觀、價格早已反映。「便宜在壞消息裡」——前提是紀律和閒錢。':
    'The intuitive answer — but history says the opposite: buying during the blue-light stretches (conditions at their worst) has usually paid better over the long run. Under a blue light the news is gloomiest and prices cheapest; under a red light everyone is optimistic and the price already reflects it. The cheap prices come wrapped in bad news — provided you have the discipline and the spare cash.',

  /* ── 區塊 ① 講義 ── */
  '區塊 ① ／ 講義 · 約 2 小時': 'Block ① / Notes · about 2 hours',
  '1. 先建座標：領先、同時、落後':
    '1. Set up the coordinates first: leading, coincident, lagging',
  '總經指標不是都一樣「新」——它們報告的是':
    'Macro indicators are not all equally "fresh" — what they report on is ',
  '不同時間點的經濟': 'the economy at different points in time',
  '類型': 'Type',
  '含義': 'What it tells you',
  '代表指標': 'Typical indicators',
  '領先': 'Leading',
  '預告未來 3–12 個月': 'Points to the next 3–12 months',
  'PMI、殖利率曲線（第 3 週）、股價指數本身、建照／新訂單':
    'PMI, the yield curve (week 3), the stock index itself, building permits / new orders',
  '同時': 'Coincident',
  '描述現在': 'Describes the present',
  'GDP、工業生產、零售銷售': 'GDP, industrial production, retail sales',
  '落後': 'Lagging',
  '確認已發生的事': 'Confirms what has already happened',
  '失業率、CPI（政策反應慢半拍）、企業財報':
    'Unemployment, CPI (policy reacts half a beat late), company earnings',
  最常見的判讀錯誤就是把落後指標當領先用:
    'The most common misreading is using a lagging indicator as a leading one',
  '：「失業率創新低」常出現在景氣頂部（因為它落後），「失業率飆高」常出現在股市已觸底回升之後。看到指標，先問一句：':
    ': "unemployment hits a record low" usually shows up at the top of a cycle (because it lags), and "unemployment spikes" usually shows up after the market has already bottomed and turned. Whenever you meet an indicator, ask one question first: ',
  '「它在報告過去、現在、還是未來？」':
    '"is it reporting the past, the present, or the future?"',

  /* ── 六張指標卡 ── */
  '2. 六個核心指標的判讀卡': '2. Six core indicators, one card each',
  '經濟的總成績單。看': "The economy's overall report card. Watch ",
  '年增率的趨勢': 'the trend in the year-on-year rate',
  '（連兩季負成長＝技術性衰退的慣用定義）。台灣 GDP 高度綁出口，全球景氣的 beta 很大。':
    " (two negative quarters in a row is the working definition of a technical recession). Taiwan's GDP is tightly bound to exports, so its beta to the global cycle is large.",
  '第 2 週學過編製；重點是它跟央行的連動：CPI 高於目標越多越久 → 升息壓力越大 → 第 3 週的整條傳導鏈啟動。':
    'Week 2 covered how it is compiled; what matters here is its link to the central bank. The further and longer CPI runs above target, the more pressure to raise rates, and the whole transmission chain from week 3 fires up. ',
  '看 CPI 不是看物價，是看央行的下一步。':
    "Reading CPI is not about prices, it is about the central bank's next move.",
  '失業率': 'Unemployment rate',
  '確認衰退用。搭配「初領失業救濟金人數」（美國，週頻）可以稍微變快。':
    'Use it to confirm a recession. Pairing it with initial jobless claims (US, weekly) makes it a little quicker.',
  'PMI 採購經理人指數': "PMI, the purchasing managers' index",
  '每月問採購經理「訂單、生產、僱用比上月好嗎」。':
    'Every month it asks purchasing managers whether orders, production and hiring were better than last month. ',
  '50 為榮枯線': '50 is the dividing line',
  '：&gt;50 擴張、&lt;50 收縮；「從 55 滑向 51」的':
    ': &gt;50 is expansion, &lt;50 is contraction. On a slide from 55 to 51, the ',
  '方向': 'direction',
  '比水平更重要。台灣看中經院、美國看 ISM——本儀表板的主角。':
    ' matters more than the level. In Taiwan follow CIER, in the US the ISM — the lead actor of this dashboard.',
  '殖利率曲線': 'Yield curve',
  '第 3 週學過：10Y−2Y 倒掛是歷史上可靠（但時點模糊）的衰退領先信號。FRED 代碼':
    'Covered in week 3: a 10Y−2Y inversion is a historically reliable leading signal of recession, though vague about timing. FRED code',
  '台灣特色組': 'The Taiwan set',
  '外銷訂單年增率': 'Export orders, year on year',
  '（經濟部，領先出口 2–3 個月）＝台灣經濟的體溫計；':
    " (Ministry of Economic Affairs; leads exports by 2–3 months) is Taiwan's thermometer. The ",
  '景氣對策信號': 'business-cycle Monitoring Indicator',
  '（國發會）9–45 分的燈號系統——歷史經驗上「藍燈區間」常是長期投資人的貪婪時刻（前提：敢在壞消息裡執行）。':
    ' (National Development Council) is a 9–45 point light system, and historically the blue-light stretches have been the long-term investor\'s moment to be greedy — provided you dare to act while the news is bad.',

  /* ── 央行與預期 ── */
  '3. 央行怎麼用這些數字': '3. How the central bank uses these numbers',
  '央行的反應函數（簡化版）：': "The central bank's reaction function, simplified: ",
  '通膨高於目標＋就業強 → 升息；通膨受控＋成長失速 → 降息':
    'inflation above target plus a strong job market → raise rates; inflation under control plus stalling growth → cut rates',
  '。所以市場的遊戲是「猜央行」：每次 CPI、就業數據公布，市場在重新定價「央行下一步」——這就是為什麼':
    '. So the market\'s game is guessing the central bank: every CPI and jobs release has the market repricing "what it does next" — which is exactly how you get ',
  '數據好、股市卻跌': 'good data and a falling market',
  '會發生（好數據 → 升息預期升溫 → 折現率預期上升）。':
    ' (good data → hotter rate-hike expectations → higher expected discount rates).',

  '4. 「預期 vs 現實」：總經交易的核心機制':
    '4. "Expectation vs reality": the core mechanism of macro trading',
  '市場價格永遠': 'Market prices always ',
  '先反映共識預期': 'price in the consensus expectation first',
  '，數據公布時真正交易的是': '; what actually gets traded on release day is the ',
  '驚奇（surprise）': 'surprise',
  '市場反應 ≈ f（實際值 − 預期值）': 'Market reaction ≈ f(actual − expected)',

  /* ── 驚奇模擬器 ── */
  '驚奇模擬器：CPI 公布日': 'Surprise simulator: CPI release day',
  '拉兩個滑桿，看市場大概率的反應——重點永遠是':
    'Drag the two sliders and watch the likely market reaction. What matters is always the ',
  '與預期的差': 'gap versus expectations',
  '，不是絕對值。先按兩個經典情境。':
    ', never the absolute level. Try the two classic scenarios first.',
  '通膨 8.2%，市場卻大漲？': 'Inflation at 8.2% and the market rallies?',
  '通膨才 3.1%，市場卻下跌？': 'Inflation only 3.1% and the market falls?',
  '市場預期 CPI 年增率': 'Expected CPI, year on year',
  '市場預期 CPI': 'Expected CPI',
  '實際公布 CPI 年增率': 'Actual CPI, year on year',
  '實際公布 CPI': 'Actual CPI',
  '驚奇（實際 − 預期）': 'Surprise (actual − expected)',
  '符合預期：市場大概率平靜': 'In line: the market most likely shrugs',
  '數字早就在價格裡了——「沒有驚奇」本身就是資訊，市場把注意力轉向下一個數據。':
    'The number was already in the price — "no surprise" is itself information, and the market turns to the next release.',
  '通膨驚奇：股債大概率下跌': 'Inflation surprise: stocks and bonds most likely fall',
  '實際比預期熱': 'Hotter than expected by',
  'pp → 市場上調升息（或延後降息）預期 → 折現率預期上升、壓低估值。注意：就算絕對值不高，只要比預期熱，反應方向就是這樣。':
    'pp → the market marks up its rate-hike (or delayed-cut) expectations → expected discount rates rise and valuations get squeezed. Note that even a low absolute number points the reaction this way, so long as it came in hotter than expected.',
  '涼爽驚奇：股債大概率上漲': 'Cool surprise: stocks and bonds most likely rise',
  '實際比預期涼': 'Cooler than expected by',
  'pp → 市場下調升息預期 → 折現率預期下降、估值鬆一口氣。就算絕對值很高（例如 8.2%），只要比預期低，也是「利多」。':
    'pp → the market marks down its rate-hike expectations → expected discount rates fall and valuations breathe out. Even a high absolute number (8.2%, say) counts as good news so long as it came in below expectations.',
  '「大概率」不是保證——同日還有其他數據、財報與市場情緒。這台機器教的是機制，不是預測。':
    '"Most likely" is not a guarantee — the same day carries other data, earnings and mood. This machine teaches the mechanism, not the forecast.',

  '對本課程的含義': 'What this means for the course',
  '：你的優勢不在「比市場早知道數據」（不可能），而在':
    ': your edge is not knowing the data before the market does (impossible), it is ',
  '紀律': 'discipline',
  '——理解機制後，就不會被「數據好股市跌」的新聞嚇到亂動（連回上週：亂動＝付過路費）。':
    ' — once you understand the mechanism, a "good data, falling market" headline will not scare you into fiddling with the portfolio (back to last week: fiddling = paying tolls).',

  /* ── 闢謠 ── */
  '5. 常見誤解闢謠': '5. Three things people get wrong',
  '「GDP 成長好，股市就會好」': '"Strong GDP growth means a strong stock market"',
  '長期兩者相關性出乎意料地弱（股市反映的是上市公司獲利與折現率，不是全體經濟）；短期更是被預期主導。':
    'Over the long run the correlation is surprisingly weak (the market reflects listed-company earnings and discount rates, not the whole economy); over the short run expectations dominate outright.',
  '「總經大師能預測市場」': '"Macro gurus can forecast the market"',
  '連央行自己的預測都經常大幅修正；儀表板的目的是':
    "Even the central bank's own forecasts get revised hard. The point of the dashboard is ",
  '定位': 'orientation',
  '（現在大概在週期哪裡）不是': ' (roughly where we are in the cycle), not ',
  '預測': 'prediction',
  '（下個月漲跌）。': ' (whether next month goes up or down).',
  '「指標越多越好」': '"The more indicators the better"',
  '超過一頁的儀表板不會被持續更新；六到八個指標、每月 30 分鐘，勝過五十個指標的一次性熱情。':
    'A dashboard longer than one page never keeps getting updated. Six to eight indicators and 30 minutes a month beats fifty indicators of one-off enthusiasm.',

  /* ── 區塊 ② 導讀 ── */
  '區塊 ② ／ 必讀導讀 · 約 2 小時，與講義穿插':
    'Block ② / Required reading · about 2 hours, interleaved with the notes',
  '讀什麼、抓什麼': 'What to read, what to take from it',
  '30 分': '30 min',
  '主計總處 ↗': 'DGBAS ↗',
  '最新 GDP 統計新聞稿': 'latest GDP statistics press release',
  '只讀前兩頁摘要，找出：年增率、對全年的預測值、上修還是下修。':
    'Read only the summary on the first two pages and pull out three things: the year-on-year rate, the full-year forecast, and whether it was revised up or down.',
  '20 分': '20 min',
  '國發會 景氣指標查詢系統 ↗': 'NDC business indicators database ↗',
  '查當前景氣對策信號燈號與分數、近 24 個月的燈號序列——台灣官方領先／同時指標的家。':
    "Look up the current monitoring-indicator light and score, plus the last 24 months of lights — this is where Taiwan's official leading and coincident indicators live.",
  '中經院 ↗': 'CIER ↗',
  '台灣製造業 PMI 最新月報': 'latest monthly Taiwan manufacturing PMI report',
  '看總指數與「新增訂單」分項。': 'Look at the headline index and the "new orders" sub-index.',
  '複習第 3 週的利差；把失業率疊上衰退帶，親眼看它的「落後」性格。':
    'Revisit the spread from week 3, then overlay unemployment on the recession bands and watch its lagging character with your own eyes.',
  '選讀': 'Optional',
  'Howard Marks《掌握市場週期》前兩章':
    'Howard Marks, Mastering the Market Cycle, first two chapters',
  '「定位 vs 預測」的哲學——本週的靈魂註解。':
    'The philosophy of orientation versus prediction — the spiritual footnote to this week.',

  /* ── 區塊 ③ 練習 ── */
  '區塊 ③ ／ 練習 · 約 1 小時': 'Block ③ / Exercise · about 1 hour',
  '建立你的總經儀表板（本週交付物，之後每月更新）':
    "Build your macro dashboard (this week's deliverable, updated monthly from here on)",
  '建一張表（試算表），欄位：': 'Open a spreadsheet with these columns: ',
  '指標｜類型｜最新值｜前值｜方向（↑↓→）｜資料來源｜更新日':
    'Indicator | type | latest | previous | direction (↑↓→) | source | date updated',
  '。必收錄的八個：': '. Eight of them are compulsory:',
  '指標': 'Indicator',
  '來源／頻率': 'Source / frequency',
  '台灣 GDP 年增率': 'Taiwan GDP, year on year',
  '主計總處，季': 'DGBAS, quarterly',
  '台灣 CPI 年增率': 'Taiwan CPI, year on year',
  '主計總處，月': 'DGBAS, monthly',
  '台灣製造業 PMI': 'Taiwan manufacturing PMI',
  '中經院，月': 'CIER, monthly',
  '經濟部，月': 'Ministry of Economic Affairs, monthly',
  '景氣對策信號分數與燈號': 'Monitoring indicator score and light',
  '綜合': 'Composite',
  '國發會，月': 'NDC, monthly',
  '央行重貼現率': 'Central bank rediscount rate',
  '政策': 'Policy',
  '中央銀行': 'Central Bank of the Republic of China (Taiwan)',
  '美國 10Y−2Y 利差': 'US 10Y−2Y spread',
  'FRED，日': 'FRED, daily',
  '美國 CPI 年增率': 'US CPI, year on year',
  '落後（驅動 Fed）': 'Lagging (drives the Fed)',
  'FRED，月': 'FRED, monthly',
  '全部填入': 'Fill in ',
  '本月實際值': "this month's actual values",
  '（親手查一輪官方來源——這就是練習的主體）':
    ' (look every one of them up at the official source yourself — that is the bulk of the exercise)',
  '表底寫三行「本月定位」：偏熱／中性／偏冷＋一句依據':
    'At the bottom of the sheet write three lines of "where we are this month": running hot / neutral / running cold, plus one line of reasoning',
  '行事曆設定每月固定一天（建議 CPI 公布後的週末）花 30 分鐘更新':
    'Put a fixed day each month in your calendar — the weekend after the CPI release works well — and spend 30 minutes updating it',
  '驗收標準：': 'What counts as done: ',
  '八個指標全部有值、有來源、有日期——查不到的不能空著，要找到官方頁面為止（這正是本週要建立的能力）。':
    'All eight indicators have a value, a source and a date. Nothing may be left blank because you could not find it — keep digging until you land on the official page, which is precisely the skill this week builds.',
  '自我檢核': 'Check yourself',
  '八個指標全部有值、有來源、有日期': 'All eight indicators have a value, a source and a date',
  '能對每個指標說出它是領先／同時／落後、為什麼':
    'You can say of each indicator whether it leads, coincides or lags, and why',
  '「本月定位」三行完成': 'The three "where we are this month" lines are written',

  /* ── 快問快答 ── */
  '快問快答三題（先答，再展開對答案）':
    'Three quick questions (answer first, then open them up)',
  'PMI 從 58 降到 53——經濟在擴張還是收縮？該注意什麼？':
    'PMI drops from 58 to 53 — is the economy expanding or contracting? What should you watch?',
  '仍在擴張': 'still expanding',
  '（&gt;50），但': ' (&gt;50), but the ',
  '動能減速': 'momentum is slowing',
  '（方向向下）——領先指標的方向轉變常是週期轉折的第一個訊號，該開始留意而非恐慌。':
    ' (the direction has turned down) — a change of direction in a leading indicator is often the first sign of a turn in the cycle. Time to start paying attention, not to panic.',
  '為什麼「失業率創歷史新低」不是進場的好理由？':
    'Why is "unemployment at an all-time low" not a good reason to buy?',
  '→ 失業率是': '→ Unemployment is a ',
  '落後指標': 'lagging indicator',
  '——「創新低」描述的是已經走完的好日子，歷史上常出現在景氣頂部附近；它適合用來「確認衰退結束」，不適合當進場鈴。':
    ' — a record low describes good days already spent, and historically it shows up near cycle peaks. It is good for confirming that a recession has ended, useless as an entry bell.',
  '美國 CPI 公布 3.1%、市場原預期 2.9%，當天股市大概率怎麼反應？為什麼？':
    'US CPI comes in at 3.1% against an expected 2.9%. How does the market most likely react that day, and why?',
  '→ 大概率': '→ Most likely ',
  '下跌': 'down',
  '——實際 &gt; 預期是「通膨驚奇」，市場上調升息（或延後降息）預期 → 折現率上升壓估值；重點永遠是與預期的差，不是絕對值。（拿上面的模擬器對一次。）':
    ' — actual &gt; expected is an inflation surprise, so the market marks up its rate-hike (or delayed-cut) expectations → discount rates rise and squeeze valuations. What matters is always the gap versus expectations, not the absolute level. (Check it against the simulator above.)',

  /* ── 區塊 ④ 分享 ── */
  '區塊 ④ ／ 分享這個概念 · 費曼學習法 · 約 30 分鐘':
    'Block ④ / Teach it · the Feynman technique · about 30 minutes',
  '經濟的紅綠燈': "The economy's traffic lights",
  '講到別人聽懂，才算真的懂——這是檢驗學習最快的方法（費曼學習法）。以下腳本以家人為對象設計，講給朋友、同事聽同樣適用。':
    'You only understand it once someone else does — the fastest way to test your own learning (the Feynman technique). The script below is written for family, but works just as well on friends and colleagues.',
  '開場（紅綠燈）': 'Opening (traffic lights)',
  '打開國發會景氣燈號頁面：「政府每個月幫台灣經濟打一個分數、亮一個燈——紅燈是發燒、藍燈是著涼、綠燈剛剛好。你猜現在亮什麼燈？」（看實際燈號、講當前定位。）':
    'Open the NDC light-signal page: "every month the government scores Taiwan\'s economy and lights a lamp — red means a fever, blue means a chill, green is just right. Guess which one is lit now?" (Look at the actual light and talk through where we are.)',
  '核心比喻：氣象台': 'The core metaphor: a weather station',
  '「總經指標是氣象預報，不是命運。氣象台說可能有颱風（藍燈、倒掛），我們做的是':
    '"Macro indicators are a weather forecast, not fate. When the station says a typhoon may be coming (a blue light, an inverted curve), what we do is ',
  '檢查門窗': 'check the doors and windows',
  '（預備金、配置），不是把房子賣掉逃難；說天氣很好（紅燈），反而要小心大家都出門了、風景區在最擠的時候（估值最貴）。」':
    ' (emergency fund, allocation) — not sell the house and run. And when the forecast is lovely (a red light), that is when to be careful: everyone is out, and the scenic spots are at their most crowded, which is to say valuations are at their most expensive."',
  '互動：反直覺時刻': 'Interaction: the counter-intuitive moment',
  '「猜猜看：歷史上台灣亮': '"Guess: historically in Taiwan, buying stocks while the ',
  '藍燈': 'blue light',
  '（景氣最差）的時候買股票，跟亮': ' was on (conditions at their worst) versus while the ',
  '紅燈': 'red light',
  '（景氣最好）的時候買，長期哪個賺比較多？」——引導出「便宜在壞消息裡」，並誠實補充：這需要紀律和閒錢，正是我們家在學的東西。':
    ' was on (conditions at their best) — which made more over the long run?" Steer them to "the cheap prices come wrapped in bad news", and add honestly that it takes discipline and spare cash, which is exactly what our family is here to learn.',
  '預期反應與應對': 'What they will say, and what to answer',
  '「新聞說 GDP 很好，可以買股票嗎？」': '"The news says GDP is strong — should I buy stocks?"',
  '「GDP 說的是現在，股價說的是未來——而且大家都看得到的好消息，通常已經變成價格了。」':
    '"GDP talks about the present, share prices talk about the future — and good news everyone can see has usually already turned into price."',
  '「那到底什麼時候買？」': '"So when should I actually buy?"',
  '「下季會學：與其猜時機，不如定期定額＋壞時候不逃跑。氣象台是拿來『不慌』的，不是拿來『算命』的。」':
    '"Next quarter covers it: rather than guess the timing, put in a fixed amount on a schedule and do not run away in the bad stretches. The weather station is there to keep you calm, not to tell your fortune."',

  /* ── 區塊 ⑤ 檢核 ── */
  '區塊 ⑤ ／ 完成檢核': 'Block ⑤ / Completion checklist',
  '本週完成的定義': 'What counts as done this week',
  '總經儀表板建立且填滿本月實值（八個指標）':
    "The macro dashboard is built and filled with this month's actual values (all eight indicators)",
  '每月更新的行事曆提醒已設定': 'The monthly update reminder is in your calendar',
  '能解釋「預期 vs 現實」機制與一個實例':
    'You can explain the "expectation vs reality" mechanism and give one example',
  '分享環節完成（家人或朋友皆可），記下對方聽不懂的點（下週單元開頭回補）':
    'You have taught it to someone (family or friends) and noted what they did not follow, to revisit at the start of next week',
  '本週心得記一行（下週回顧用）': "One line of notes on the week, for next week's review",
  '🎓 第 11 週完成——下週見：景氣循環與資產輪動。':
    '🎓 Week 11 done — next up: the business cycle and asset rotation.',
  '下週預告 · Week 12：景氣循環與資產輪動':
    'Next week · Week 12: the business cycle and asset rotation',
  '——儀表板建好了，下週學怎麼用它：景氣的四個季節、各季節誰漲誰跌、為什麼「錯過最好的十天」代價巨大——以及為什麼答案還是「留在場上」。':
    ' — the dashboard is built, so next week you learn to use it: the four seasons of the cycle, who rises and who falls in each, why "missing the ten best days" costs so much — and why the answer is still to stay in the market.',

  /* ── 頁尾 ── */
  '← 給家人的投資課': '← Family Investing Course',
  '上一週：台股交易制度與成本': 'Previous week: Taiwan market mechanics and trading costs',
  '專欄文章': 'Column',
  '·\n  本頁為個人學習教材，非投資建議。© Matt Ye':
    '·\n  Personal study material, not investment advice. © Matt Ye',
};
