/*
 * ATCC 決賽評審觀察筆記的英文對照表。
 * 來源頁：src/data/static-pages/projects__one-more-step__atcc-judges.html
 *
 * ⚠ 人名一律保留中文原字，不音譯。
 *
 *   第一版我寫了「Dr Peter Pai」「Liu Yi-cheng」這類英文名，但那是**我推測的**，
 *   不是查證過的官方英文名。這幾位是有公開身分的人，寫錯名字是實質錯誤而非風格問題，
 *   所以還原成中文原字，只翻譯頭銜（Dr／Vice Chairman／Founder）。
 *
 *   要補英文名的話，得先查各人所屬機構的官方英文頁——**未確認前不要填**。
 *
 *   這些是已公開在頁面上的評審與教授（公眾人物），不是可辨識的學生資料。
 *
 * 語域：這是 Matt 的第一人稱觀察筆記，不是報導。英文維持第一人稱與口語節奏，
 *   不要改寫成新聞體——那會把「我坐在台下想到什麼」變成「大會報導」。
 */
/* 允許留在英文值裡的中文：人名。加一條之前先問——這是「不該翻的專名」，
   還是「還沒翻」？只有前者能進來。 */
export const KEEP = ['白崇亮', '劉奕成', '馮博堅', '孫宗德', '林益全', '王意婷'];

export const MAP = {
  /* ── 標題與導言 ── */
  '四位評審教我的事': 'What Four Judges Taught Me',
  '一個職能治療師在商業競賽決賽現場的筆記':
    "An occupational therapist's notes from the final of a business case competition",
  '簡報教練': 'Presentation coach',
  '商業競賽': 'Business competition',
  '職能治療': 'Occupational therapy',

  '今天 (7/5) 下午，福華文教會館卓越堂。23rd ATCC 全國大專院校商業個案大賽決賽，五支隊伍、每隊十五分鐘提報加二十分鐘 Q&amp;A。':
    'This afternoon (5 July), Howard Civil Service International House. The final of the 23rd ATCC national collegiate business case competition — five teams, fifteen minutes to present and twenty minutes of Q&amp;A each.',
  '我曾協助的 HP 代表隊伍「愛P才會贏」以 SenseEase——一個解決長時間用電腦引發暈眩與視覺疲勞的 AI 輔助方案——拿下全國冠軍。':
    'The HP team I had worked with took the national title with SenseEase, an AI-assisted solution to the dizziness and visual fatigue that come from long hours at a screen.',
  '我為他們高興也感到與有榮焉，聽到他們得獎的瞬間莫名熱血，讓我想起過去自己參加競賽得獎時的經驗。':
    'I was delighted for them, and a little proud by association. Hearing their name called set something off in me — it took me straight back to my own competition days.',
  '坐在台下的那個下午，觀察各組的提案讓我更了解商業競賽的模式還有 ATCC 的偏好。此外，四位評審的提問，也讓我能提升思維，從更高的視角看提案。':
    'Sitting in the audience that afternoon, watching each pitch, I came to understand the shape of these competitions and what ATCC in particular rewards. And the four judges\' questions lifted my own thinking — they made me look at a pitch from further up.',

  /* ── 為什麼一個職能治療師在這裡 ── */
  '一個職能治療師，為什麼會出現在商業競賽？':
    'What is an occupational therapist doing at a business competition?',
  '我是職能治療師，出現在這個場合，似乎有點怪對吧？':
    "I'm an occupational therapist. Slightly odd place to find me, isn't it?",
  '過去我在三個全國簡報競賽獲獎後，開始持續分享競賽取向的簡報表達技巧。':
    'After winning three national presentation competitions, I started sharing what I had learned about competition-oriented presenting.',
  '而這一組的成員之一，剛好跟我一起修林益全教授在台大開設的【創業家思維與創業實務管理】。因為這個緣分，他邀請我進行專家訪談，並對他們簡報給予回饋。':
    'One member of this team happened to be taking Professor 林益全’s course on entrepreneurial thinking and practice at NTU alongside me. That is how he came to invite me in as an expert interviewee, and later for feedback on the pitch.',
  '第一次是六月初的專家訪談。他們的產品要處理「視覺誘發暈動症」（VIMS）——這正跟我的專業有關。那次我們做的事情，說起來不太像一般想像中的「顧問」：依照他們提供的訪綱，我進行一輪深度文獻搜尋，把「漸進式暴露」「習慣化」「視野遮罩」「靜止錨點」這些產品想強調的機制，逐一對回臨床與神經科學的證據。更重要的是，我們誠實劃出了一條紅線——':
    'The first was an expert interview in early June. Their product addresses visually induced motion sickness (VIMS) — squarely my field. What we actually did looks little like most people\'s idea of consulting: working from their interview guide, I ran a proper literature search and matched each mechanism the product wanted to claim — graded exposure, habituation, field-of-view masking, static anchors — back to the clinical and neuroscience evidence. More importantly, we drew an honest line: ',
  '哪些效果是 Demo 可以支持的（即時的舒適改善），哪些主張需要更嚴謹的驗證才能宣稱（長期的神經適應）':
    'which effects a demo can support (immediate comfort), and which claims need far more rigorous evidence before anyone says them out loud (long-term neural adaptation)',
  '除此之外，團隊進行了非常充足的使用者體驗訪談和專家訪問（除了我之外，還訪談一位醫師和視覺誘發暈動症專家）。這些充足的準備或許成為了他們的護身符。決賽 Q&amp;A 裡，沒有評審質疑「這是不是真痛點」或「這是不是真的能用的解決方法」。':
    'Beyond that, the team did a great deal of user research and expert interviewing — besides me, a physician and a VIMS specialist. That preparation may have been their armour: in the final Q&amp;A, not one judge questioned whether the pain point was real or whether the solution would work.',
  '因為團隊有足夠資料說明痛點，也把能證明的和還不能證明的分清楚、不過度推論，評審的提問火力反而都針對商業化層面。我想，':
    'Because they had the evidence for the problem, and had separated what they could prove from what they could not without overreaching, the judges\' fire went entirely to commercialisation. Which I think means: ',
  '當評審開始跟你認真討論怎麼把生意做大，代表你的產品已經過了生死關':
    'once judges start seriously discussing how to scale your business, your product has already survived the life-or-death questions',
  '第二次是準決賽前，他們再找我看一次簡報，一起調整了用詞準確度、敘事的順序和投影片的呈現。我覺得那次我的貢獻遠小於第一次——':
    'The second time was before the semi-final, when they brought the deck back for another look and we tightened the wording, the order of the narrative and the slides. My contribution there was far smaller than the first time. ',
  '他們把內容的地基打對了，簡報只是讓它被看見。':
    'They had laid the foundations right; the deck only had to let people see them.',

  /* ── 四面鏡子 ── */
  '四面鏡子：評審的提問不是隨機的':
    'Four mirrors: the questions were never random',
  '決賽二十分鐘的 Q&amp;A，是資訊密度極高的商業個案教學現場。':
    'Twenty minutes of Q&amp;A in a final is about the densest business-case teaching you will ever sit through.',
  '四位評審，完全不同的職業出身，像四面鏡子，各自照出一個提案的不同缺口。看完五組，這樣的覺察從腦中浮現：':
    'Four judges from entirely different careers, four mirrors, each catching a different gap in a pitch. After five teams, a realisation surfaced:',
  '每位評審的問題都不是隨機的，而是從他的職業本能長出來的。':
    "Nobody's questions were random. Each grew out of that judge's professional instinct.",

  '白崇亮博士': 'Dr 白崇亮',
  '前奧美行銷傳播集團董事長': 'Former chairman, Ogilvy Group Taiwan',
  '問的是「說服」': 'asks about persuasion',
  '他反覆問各隊同一個問題：「這到底是公部門服務、非營利組織、還是社會企業？」一開始我以為只是確認團隊是否知道自己的定位，後來才發現他在強調——':
    'He put the same question to team after team: is this a public service, a non-profit, or a social enterprise? At first I took it for a check on whether they knew their own positioning. Later I saw the real point: ',
  '定位一旦模糊，後面整套商業邏輯都會跟著鬆動':
    'blur the positioning and the entire commercial logic downstream comes loose',
  '，因為這三種定位的獲利方式完全不同。':
    ', because those three make money in completely different ways.',
  '他在講評時的一句話讓我印象深刻：「有技術做出產品不難，最難的是說服消費者改變、掏錢、並且重複購買。」這是做了一輩子品牌的人才有的洞察。':
    'One line in his summing-up stayed with me: having the technology to build the product is not the hard part — persuading a consumer to change, to pay, and then to pay again, is. That is the insight of someone who spent a career in brands.',

  '劉奕成副董事長': 'Vice Chairman 劉奕成',
  '和鼎創投': 'Hoding Venture Capital',
  '問的是「護城河」': 'asks about the moat',
  '創投的第一反射：「為什麼是你？為什麼是現在？為什麼別人還沒做？」有一隊提出建置媒合平台，他的回應直截了當：如果這個需求真的存在，現成的大平台開一個專區不就解決了？自己從零建置，經濟效益在哪裡？':
    'The venture capitalist\'s reflex: why you, why now, and why has nobody done it already? One team proposed building a matching platform, and his response was blunt — if the demand is genuinely there, wouldn\'t an existing large platform just open a section and be done? Where is the economics in building from scratch?',
  '他也提醒另一隊：想要做循環經濟，但當你的資產被拿在使用者手上，歸還率和回收成本要算得比想像中保守。':
    'He warned another team: if you want a circular model, remember your assets sit in other people\'s hands — budget the return rate and recovery costs far more conservatively than instinct suggests.',

  '馮博堅董事總經理': 'Managing Director 馮博堅',
  'BCG 全球合夥人': 'Global partner, BCG',
  '問的是「數字撐不撐得住」': 'asks whether the numbers hold',
  '他針對各組提出的市場大小、成本估算、預期獲利等進行提問，不斷確認這些數字的計算邏輯和真實性，這是他身在管理顧問業的專業職能，希望提出的每一個數字能有扎實證據支持。':
    'He went at market size, cost estimates and projected profit, checking again and again how each figure had been derived and whether it was real. That is the management consultant\'s discipline: every number should rest on something solid.',
  '此外，他的專業背景對參賽者來說很有挑戰性：馮博堅曾在 HTC 負責 Vive 的策略規劃與全球生態系——也就是說，SenseEase 要解的「螢幕暈眩」，正是他親手做過 VR 裝置市場中的常見問題。他對產品的提問不是泛泛而問，而是檢驗你的知識儲備和對產品的理解。這給我一個深刻的提醒：':
    'His background made him a difficult judge to face: he ran strategy and the global ecosystem for Vive at HTC — which means the screen-induced dizziness SenseEase set out to solve is a problem he has personally worked on in the VR market. His questions about the product were not generic; they tested how much you actually knew. Which left me with a sharp reminder: ',
  '永遠假設評審團裡和投資人中，有一位是你這個題目的業內老手。':
    'always assume that somewhere in the judging panel or the investor room sits a veteran of exactly your subject.',
  '另外，他在聽到其他團隊說想要做生態系時，他說「現在聽到『生態系』都會害怕」——很多團隊愛畫多方共贏的生態圈，但每一條連結的背後，都是要燒錢、要說服人的工作，這些事常常被提案者忽略。':
    'And when another team started talking about building an ecosystem, he said the word now frightens him. Teams love to draw everybody-wins diagrams, but behind every line on that chart is money to burn and people to convince — work the pitch usually skips.',

  '孫宗德創辦人': 'Founder 孫宗德',
  '牧羊人集團／汪喵星球': 'Shepherd Group / Wang Miao Planet',
  '問的是「真實」': 'asks whether it is real',
  '從零徒手創業、把一盆貓草做成年營收破十億集團的人。他的問題最不像「評審題」，他每一次都問：「給你一分鐘，你會怎麼跟你的朋友介紹這個產品？」他要聽的不是摘要、不是產品比競品好在哪，而是真誠感。':
    'Someone who started from nothing and turned a pot of cat grass into a group with over a billion in annual revenue. His questions were the least like judge questions. Every time he asked the same thing: you have one minute — how would you describe this product to a friend? He was not after a summary, or a competitive comparison. He was listening for sincerity.',
  '他還說「行銷上，認知才是事實」，如果使用者沒有認知到痛點存在，那麼產品和服務形同虛設。':
    'He also said that in marketing, perception is the fact. If the user has not registered that the problem exists, your product and service may as well not.',

  /* ── 工具 ── */
  '帶走的工具：四原型、五道生死題與五型死穴':
    'What I took away: four archetypes, five life-or-death questions, and five type-specific weak spots',
  '把四位評審的提問系統化之後，我整理成三個可以直接使用的工具。':
    'Systematising what the four of them asked, I ended up with three tools you can use directly.',
  '工具一：評審提問四原型。': 'Tool one: the four judge archetypes.',
  '大多數商業簡報比賽、投資 Demo Day、企業提案的評審，都能歸入四型或其組合。賽前研究評審背景、歸類原型，就能反推問題會從哪裡來，預先埋好答案。未來帶隊時，或許我能從這些觀察延伸進行 Mock QA，隨機扮演其中一型，用該型的問題連續往下追問三層。':
    'Judges at most pitch competitions, demo days and corporate proposals fall into one of four types, or a mix. Research their backgrounds beforehand, sort them into types, and you can work backwards to where the questions will come from and bury the answers in advance. When I next coach a team, I might extend this into mock Q&amp;A: pick a type at random and push three levels deep with that type\'s questions.',
  '品牌說服型': 'The brand persuader',
  '你要說服誰改變行為？定位是什麼？消費者為什麼掏錢、還重複購買？':
    'Whose behaviour are you changing? What is the positioning? Why would a consumer pay, and then pay again?',
  '創投資本型': 'The venture capitalist',
  '為什麼是你？為什麼是現在？錢從哪來？護城河在哪裡？':
    'Why you? Why now? Where does the money come from? Where is the moat?',
  '策略數字型': 'The strategy analyst',
  '數字撐得住嗎？計算邏輯是什麼？運營難度是不是被低估了？':
    'Do the numbers hold? How were they derived? Have you underestimated how hard this is to run?',
  '實戰創業型': 'The working founder',
  '痛點夠痛嗎？成本查過嗎？你會怎麼跟朋友介紹這個產品？':
    'Does the problem actually hurt? Have you checked the costs? How would you describe this to a friend?',

  '工具二：五道生死題。': 'Tool two: the five life-or-death questions.',
  '把五組提案收到的提問交叉比對，同樣幾個問題在不同隊伍身上反覆出現——這才是評審心中真正的隱形評分表：':
    'Cross-referencing the questions all five teams received, the same few came up again and again. That is the real, unwritten scoring sheet:',
  '買家是誰？他為什麼掏錢？': 'Who is the buyer, and why do they pay?',
  '付費者和受益者是同一人嗎？': 'Is the person paying the same person who benefits?',
  '你解決的是真問題，還是想像中的問題？':
    'Are you solving a real problem, or an imagined one?',
  '是否有訪談或問卷調查？是否有走訪現場？':
    'Have you interviewed anyone, run a survey, been to see it for yourself?',
  '為什麼是你？在位的大廠為什麼還沒做？':
    'Why you? Why have the incumbents not done this already?',
  '你是否真的看到別人沒看到的盲點？或是大廠無暇分身處理的問題？':
    'Have you genuinely seen a blind spot others missed, or found something the big players have no bandwidth for?',
  '成本與運營難度，是不是被低估了？':
    'Have you underestimated the costs and the difficulty of operating this?',
  '避免過度樂觀，沒有完整檢視可能的成本和費用。':
    'Optimism is easy; a full accounting of costs is not.',
  '這到底是什麼定位？': 'What is this, exactly?',
  '商業模式跟著定位走，公共服務／NPO／NGO／企業，團隊要很清楚自己的「錢」從哪來。':
    'The business model follows the positioning. Public service, NPO, NGO or company — the team has to be clear where the money comes from.',
  '上台前，五題自答。': 'Answer all five to yourself before you go on stage.',
  '答不出來的那題，就是競賽講台上的 Q&amp;A 刑場。':
    'The one you cannot answer is where the Q&amp;A will execute you.',

  '工具三：五型專屬死穴（第二層檢核）':
    'Tool three: five type-specific weak spots (the second layer)',
  '7/6 更新 · 與 Judy Wang 王意婷的現場筆記綜合提煉':
    'Updated 6 July · synthesised with Judy Wang 王意婷\'s notes from the day',
  '賽後，在現場偶遇的朋友 Judy Wang 王意婷分享了她的筆記。交叉比對她的紀錄和我的觀察後，浮現第二層規律：':
    'Afterwards, my friend Judy Wang, whom I ran into at the venue, shared her notes. Cross-referencing hers against mine, a second pattern emerged: ',
  '評審對每一隊的「補刀題」也有特定模式':
    'the follow-up questions that finish a team off also run to type',
  '——循環經濟被追問歸還率、平台被追問自建必要性、科技產品被追問技術授權金、社會企業被追問退路敘事、公部門案被追問議會預算檢驗。這些不是前五道共通生死題的變形，而是':
    ' — circular models get pressed on return rates, platforms on why they must be built at all, deep-tech products on licensing structures, social enterprises on their exit narrative, and public-sector proposals on how the council will scrutinise the budget. These are not variations on the five universal questions; they are ',
  '不同創業類型本身自帶的風險因素': 'the risks that come built into each type of venture',
  '所以，提案前最好要跑': 'So before pitching, run ',
  '雙層自我檢核': 'a two-layer self-check',
  '：第一層答五道生死題（不分類型必問）；第二層依照創業類型，回答特定清單。通用層過了、專屬層沒過，還是陣亡在 Q&amp;A。回答通用問題清單後，不要忘記檢視特定創業類型的潛在風險盲區。':
    ': first the five universal questions, then the list specific to your type. Passing the universal layer and failing the specific one still kills you in Q&amp;A. Having answered the general list, do not forget the blind spots your particular type carries.',
  '類型判斷只有一句話：你的錢和你的阻力從哪裡來？':
    'Working out your type takes one question: where does your money come from, and where does your resistance come from?',
  '混合型很常見（例如社企做平台），以「主要收入來源」定主型，次型清單當補充。':
    'Hybrids are common — a social enterprise running a platform, say. Let your main revenue source set the primary type and treat the secondary list as a supplement.',

  '① 實體循環資產型': '① Circular physical assets',
  '決賽對應：配客嘉「衣級方程式」': 'In this final: PackAge+ "Clothing Formula"',
  '錢': 'Money',
  '靠實體資產循環回本；': ' comes from cycling physical assets back into use;',
  '阻力': 'resistance',
  '＝資產在別人手上。': 'is that the assets are in someone else\'s hands.',
  '實體資產成本實查': 'Verify the real cost of the assets',
  '實體資產歸還率': 'Return rate',
  '用戶習慣改變成本': 'Cost of changing user habits',
  '② 平台媒合型': '② Matching platform',
  '決賽對應：Sound of Taipei': 'In this final: Sound of Taipei',
  '靠撮合抽成；': ' comes from a cut of each match;',
  '＝雙邊冷啟動。': 'is the two-sided cold start.',
  '自建平台必要性': 'Why build the platform at all',
  '維護成本／使用人數比': 'Maintenance cost per active user',
  '額度分配機制': 'How allocation is decided',
  '③ 科技產品商業化型': '③ Commercialising a technology',
  '決賽對應：HP「SenseEase」／系統電「SysBlade」':
    'In this final: HP\'s SenseEase and Systex\'s SysBlade',
  '靠產品毛利；': ' comes from product margin;',
  '＝技術到市場的最後一哩。': 'is the last mile from technology to market.',
  '2B／2C 路線銷售方式差異': 'How selling differs between B2B and B2C',
  '技術／專利授權金結構': 'Technology and patent licensing structure',
  '軟體的原創邊界確認': 'Where the originality of the software actually begins',
  '④ 社會企業型': '④ Social enterprise',
  '決賽對應：張老師「心室逃脫」': "In this final: Teacher Chang's \"Escape the Mind Room\"",
  '靠使命＋營收混合；': ' comes from a mix of mission and revenue;',
  '＝兩頭不到岸。': 'is falling between two stools.',
  '公部門／NPO／社企的定位三選一':
    'Pick one: public service, NPO, or social enterprise',
  '市場不因公益而降低商品標準':
    'The market does not lower its standards because your cause is good',
  '營利失敗時的退場和轉型敘事':
    'The exit and pivot narrative if the commercial side fails',
  '⑤ 公部門專案型': '⑤ Public-sector project',
  '決賽對應：青年局提案': 'In this final: the Youth Bureau proposal',
  '靠公務預算；': ' comes from a public budget;',
  '＝政治與預算週期。': 'is politics and the budget cycle.',
  '議會執行效益檢驗': 'How the council will scrutinise delivery',
  '預算轉換率': 'Budget conversion rate',
  '國家／縣市格局界定': 'Whether the scope is national or municipal',

  '三個工具怎麼一起用？賽前自查照這四步跑一遍：':
    'How the three tools work together — four steps before you pitch:',
  '先判斷類型': 'Identify your type',
  '你的錢和阻力從哪裡來？混合型以主要收入來源定主型。':
    'Where does your money come from, and your resistance? For hybrids, let the main revenue source decide.',
  '答五道生死題': 'Answer the five life-or-death questions',
  '通用層，不分類型必問，答不出來Q&amp;A就是刑場。':
    'The universal layer, asked of everyone. Whatever you cannot answer is where Q&amp;A becomes an execution.',
  '答本型專屬死穴': 'Answer your type\'s specific weak spots',
  '類型層，通用層過了、這層沒過一樣死在 Q&amp;A。':
    'The type layer. Passing the universal one and failing this still kills you.',
  '對照四原型演練': 'Rehearse against the four archetypes',
  '依評審背景預測誰會問哪題，Mock QA 預先埋答案。':
    'Predict from each judge\'s background which questions they will ask, and bury the answers in a mock Q&amp;A.',
  '註：五型不是商業模式的完備分類——它分的不是「模式機制」，而是「可能被檢驗的風險」。此清單會隨我的觀賽與帶隊經驗增加，並在未來持續擴增。':
    'Note: these five are not a complete taxonomy of business models. They classify not the mechanism but the risks likely to be examined. The list will grow as I watch and coach more of these.',

  /* ── 治療師與教練 ── */
  '治療師與教練，其實是同一份工作':
    'Therapist and coach turn out to be the same job',
  '常有人問我，職能治療師跑去做簡報教練、當商業競賽的顧問，跨度會不會太大？其實一點都不會，因為底層是同一份能力。':
    'People often ask whether the leap from occupational therapist to presentation coach and competition adviser is too wide. It isn\'t wide at all, because underneath it is one and the same capability.',
  '怎麼說呢？還是得先從定義談起：職能（occupation）常被翻譯為「職業能力」，但其實意義遠遠不只如此。':
    'Let me start with the definition. "Occupation" is often rendered in Chinese as vocational ability, but it means far more than that.',
  'Occupation 源自 occupy 字根，意指佔據人生活有意義的所有事務（食／衣／住／行／育／樂／工作／休憩）。':
    'It comes from the root *occupy*: everything meaningful that fills a person\'s life — eating, dressing, housing, moving about, learning, playing, working, resting.',
  '當人因為某種原因，無法去從事他原本的職能時，便需要職能治療師的協助。':
    'When something stops a person from engaging in their occupations, that is when an occupational therapist is needed.',
  '而職能治療的核心專業，就是先以人為中心了解真正的需求，用活動分析拆解問題，並找到合適解方。':
    'And the core of the profession is this: understand the real need, person first; take the problem apart through activity analysis; find a solution that fits.',
  '這讓我能用人本角度分析使用者的痛點，幫助團隊找到好的解決方法和論述方式。':
    'That lets me analyse a user\'s pain point from a human standpoint, and help a team find both a good solution and a good way to argue for it.',
  '我也能用同樣的模式分析商業競賽，幫助團隊找到提高勝率的方法。':
    'The same method applies to a competition, helping a team raise its odds.',
  '職能治療的視角讓我能站在不同角度思考，先對使用者「確認痛點、找對解方」，再協助團隊「調整敘事、優化表達」。':
    'The occupational therapy lens lets me work from both ends: confirm the user\'s problem and find the right solution first, then help the team shape the narrative and sharpen the delivery.',

  /* ── 總評與反思 ── */
  '評審總評與反思': 'Closing remarks, and what I took from them',
  '「粗糙的開始，就是最好的開始。」': '"A rough start is the best start."',
  '— 孫宗德': '— 孫宗德',
  '— 馮博堅的三個詞方法論': '— 馮博堅: a three-word method',
  '想做「能容忍失敗的創投」。': 'Wants to build "venture capital that can tolerate failure".',
  '— 劉奕成': '— 劉奕成',
  '最重要的是堅持與韌性。': 'What matters most is persistence and resilience.',
  '— 白崇亮': '— 白崇亮',
  '四個人，四個角度，說的是同一件事——世界不會照你的假設運作。':
    'Four people, four angles, one message: the world will not run on your assumptions.',
  '能快速迭代、找對痛點、真誠說服的人，遠比一份完美的提案重要。':
    'Someone who iterates fast, finds the real problem and persuades honestly matters far more than a flawless deck.',
  '恭喜「愛P才會贏」得到冠軍。也謝謝這場比賽，讓我重新上了一課，提升我的思維。':
    'Congratulations to the winning team. And thanks to the competition itself — I came away having been taught something.',
  '寫到這裡，回想起 William 老師曾在課堂中提到的「創業或許也是一種治療。」':
    'Writing this, I remembered something Professor William said in class: entrepreneurship might itself be a kind of therapy.',
  '這讓我想問：若把「創業（Entrepreneurship）」視為一種職能，我會怎麼拆解？必要的知能是什麼？必須準備好才能實行嗎？持續行動、挫折、適應是否才是創業本質呢？還是說，創業過程中，人持續看見自己能克服困難、能適應、勝任更難的任務而長出的自我效能感，正是療效的來源？':
    'Which makes me want to ask: if entrepreneurship were treated as an occupation, how would I take it apart? What knowledge and skills does it require? Must you be ready before you begin? Is its essence continued action, setback and adaptation? Or is the therapeutic effect the self-efficacy that grows as a person watches themselves overcome difficulty, adapt, and become equal to harder tasks?',
  '我還沒有答案，期待我在未來能分享更多洞察。':
    'I do not have an answer yet. I hope to have more to say about it.',
  '作者為職能治療師、簡報與教學表達教練，2026 年以專家顧問身分協助 ATCC 冠軍隊伍 SenseEase。':
    'The author is an occupational therapist and a coach in presentation and instructional communication. In 2026 he advised SenseEase, the winning ATCC team, as an expert consultant.',
  'One More Step · 葉淨維 Matt Ye — 把複雜的東西搞懂，然後寫下來。':
    'One More Step · Matt Ye — work out the complicated thing, then write it down.',
};
