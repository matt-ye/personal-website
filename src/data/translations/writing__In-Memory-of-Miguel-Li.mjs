/*
 * 懷念 Miguel 李維晏老師紀念頁的英文對照表。
 * 來源頁：src/data/static-pages/writing__In-Memory-of-Miguel-Li.html
 *
 * ══ 這一份和其他頁不同，先讀完再改 ══
 *
 * ⚠ 具名留言是**別人寫給逝者的話**，不是 Matt 的文章。
 *   把它們譯成英文，等於用譯者的話重述那些字句、並掛在原作者名下。
 *   這裡照譯了，但上線前建議擇一處理：
 *     ① 在英文頁標明「translated from the Chinese original」
 *     ② 中英並陳，讓原文留在旁邊
 *     ③ 留言保持中文，只用英文版呈現站台文案與課程綜述
 *   這是 Matt 的決定，不是譯者的。
 *
 * ⚠ 姓名一律保留原字，不音譯、不編造英文名（同 atcc-judges 的處理）。
 *
 * ⚠ 留言板 #boardWall 從 Google Sheet 即時抓取，不在版控也不在翻譯範圍。
 *   那裡面是還在陸續增加的留言，含姓名，本來就刻意不寫進 HTML。
 *
 * 語域：這是紀念頁。英文要保住原文的溫度與口語感——
 *   學生寫「笑到肚子痛」「推爆」就不要改成 "highly recommended"。
 *   把悼念文字改寫成訃聞體，是這份翻譯最容易犯、也最傷的錯。
 */
/* 還沒翻完：具名長留言（26 條 / 約 1 萬字）待 Matt 決定要不要譯——見上方說明。 */
export const INCOMPLETE = true;

export const KEEP = [
  '李維晏', '黃翊晟', '蔡璨鴻', '許哲榮', '劉于榕', '顏競廷', '林澄', '七七',
  '林咕基', '陳承鴻', '林偉明', '梁筠敏', '蘇以文', '匿名',
];

export const MAP = {
  /* ── 導覽與標題 ── */
  '懷念 Miguel': 'Remembering Miguel',
  '李維晏老師': '李維晏',
  '生平': 'Her life',
  '留言板': 'Message board',
  '紀念文章': 'In memoriam',
  '學生的聲音': 'In their own words',
  '課程回憶': 'By course',
  '著作與資源': 'Work and resources',
  '教育是分享快樂的志業': 'Teaching is the work of sharing joy',
  '李維晏': '李維晏',
  '國立臺灣大學寫作教學中心副教授兼中心主任':
    'Associate Professor and Director, Academic Writing Education Center, National Taiwan University',
  '????.03.24 — 2026.05.20（Miguel：才不告訴你哩）':
    '????.03.24 — 2026.05.20 (Miguel: "I\'m not telling you")',
  '「教育是分享快樂的志業。」': '"Teaching is the work of sharing joy."',
  '104 — 113 學年': 'Academic years 104–113',

  /* ── 生平 ── */
  '李維晏（Miguel）是國立臺灣大學寫作教學中心副教授兼中心主任。她是排灣族，個性樂觀、談吐幽默，在共同教育領域開設「小故事，大世界」「框架外的思考：五分鐘英文講台」「工程學術英文寫作與口頭報告」「學術英文論文寫作與發表」「英文寫作基礎」等課程，選課人數動輒五、六百人，是台大學生口耳相傳、在 PTT 上「推爆」的傳奇教師。':
    '李維晏 — Miguel — was Associate Professor and Director of the Academic Writing Education Center at National Taiwan University. Paiwan, cheerful, and very funny, she taught general education courses including "Small Stories, Big World", "Thinking Outside the Box: Five Minutes on the English Stage", "Academic English Writing and Oral Presentation for Engineering", "Academic English Paper Writing and Publication" and "Fundamentals of English Writing". Five or six hundred students would sign up. Word of mouth made her a legend at NTU, and the recommendations on PTT ran off the page.',
  '她畢業於美國奧馬市大學共同教育系，後赴英國杜倫大學取得英語及語言學碩士與教育學博士，曾任教於國立臺北教育大學、銘傳大學與東吳大學，最後落腳台大寫作教學中心。專長橫跨英語教學、學術寫作與口頭發表、英語教學法、師資培訓與溝通表達；她三度獲頒台大教學優良教師，並榮獲教學傑出教師。':
    'She graduated in general education from the University of Nebraska at Omaha, then took an MA in English language and linguistics and a doctorate in education at Durham University in the UK. She taught at National Taipei University of Education, Ming Chuan University and Soochow University before settling at NTU\'s writing centre. Her expertise spanned English language teaching, academic writing and oral presentation, pedagogy, teacher training, and communication. She was named an NTU Distinguished Teacher three times, and received the university\'s highest teaching award.',
  'Miguel 的教學不靠取悅學生。她言詞犀利、評論一針見血，卻有一顆柔軟的心——她說，她發現台大學生其實很寂寞，於是開設「小故事，大世界」，讓每個學生都試著用英語說出一個故事、被好好地聽見。她相信「重點不在 what，而在 why」，要解決學生的問題，得先問對問題；她不相信單一一種教學法能教會所有人，於是翻轉教室、混合式教學、用色紙分組、設計「無痛換組」，只為讓每個學生都能在課堂裡找到自己的位置。':
    "Miguel did not teach by pleasing students. She was sharp-tongued and her comments went straight to the point — and underneath was a very soft heart. NTU students, she said, were lonely, so she created \"Small Stories, Big World\" to have every one of them tell a story in English and be properly heard. She believed the point was never the *what* but the *why*: to solve a student's problem you first have to ask the right question. She did not believe any one method could teach everyone, so she flipped the classroom, blended her formats, sorted groups with coloured paper and designed a painless way to switch groups — all so that every student could find their own place in the room.",
  '她總能把艱深的知識，用最白話、最好懂的方式傳遞——這份本領，來自她自己的人生。赴英深造前夕家中遭逢變故，她回台擔任雙語幼兒園的英語老師，學著把複雜的東西講給連中文都還說不清楚的孩子聽。也許正因如此，無論面對的是幼兒、大學生還是博士生，她都能讓人聽懂、讓人想聽。':
    'She could take difficult knowledge and hand it over in the plainest, most understandable words — a skill that came out of her own life. On the eve of leaving to study in Britain, something happened at home, and she came back to Taiwan to teach English at a bilingual kindergarten, learning to explain complicated things to children who could not yet manage Chinese. Perhaps that is why, whether she faced a five-year-old, an undergraduate or a doctoral candidate, they understood her — and wanted to keep listening.',
  '在她的課堂上，笑聲幾乎沒有停過；下課後，學生帶走的不只是寫作與演講的技巧，還有看待人生的角度與勇氣。2026 年 5 月 20 日，Miguel 老師離開了我們。這個網站，收錄了十多年來、橫跨數十個學期、數百位學生留下的聲音——願這些故事，繼續被說下去。':
    'In her classroom the laughter barely stopped. What students carried out afterwards was not only technique in writing and speaking, but a way of looking at life, and the nerve to try. On 20 May 2026, Miguel left us. This site gathers the voices of several hundred students across more than a decade and dozens of semesters — may these stories go on being told.',
  '專長': 'Expertise',
  '英語教學・學術寫作與口頭發表・英語教學法・師資培訓・溝通與表達':
    'English language teaching · academic writing and oral presentation · pedagogy · teacher training · communication',
  '學歷': 'Education',
  '美國奧馬市大學共同教育系學士｜英國杜倫大學英語及語言學碩士、教育學博士':
    'BA in general education, University of Nebraska at Omaha | MA in English language and linguistics and EdD, Durham University',
  '榮譽': 'Honours',
  '台大教學優良教師（三度獲獎）・台大教學傑出教師':
    'NTU Distinguished Teacher (three times) · NTU Outstanding Teaching Award',
  '代表課程': 'Signature courses',
  '小故事，大世界｜框架外的思考：五分鐘英文講台｜工程學術英文寫作與口頭報告':
    'Small Stories, Big World | Thinking Outside the Box: Five Minutes on the English Stage | Academic English Writing and Oral Presentation for Engineering',

  /* ── 留言板 UI ── */
  '想對 Miguel 老師說的話，仍在繼續。歡迎在這裡留下你的思念。':
    'People are still finding things to say to Miguel. You are welcome to leave yours here.',
  '✍️ 我要留言': '✍️ Leave a message',
  '留言經主辦人員審核後刊出': 'Messages appear after review',
  '載入留言中…': 'Loading messages…',
  '深淺色': 'Light / dark',
  '李維晏 Miguel 老師': '李維晏 (Miguel)',
  '搜尋留言內容、姓名…': 'Search messages and names…',
  '搜尋留言板': 'Search the message board',
  '搜尋留言內容、姓名或課程…': 'Search messages, names or courses…',
  '搜尋留言': 'Search messages',
  '點擊更換留言': 'Click for another message',
  '相關頁面': 'Related pages',

  /* ── 紀念文章（寫作教學中心同仁） ── */
  '「沒有什麼事情是難的」——紀念李維晏老師':
    '"Nothing is difficult" — remembering 李維晏',
  '臺大寫作教學中心同仁': 'Colleagues of the NTU Academic Writing Education Center',
  '我們敬愛的李維晏老師，大家口中最棒的 Miguel，也是一路帶領寫作教學中心前行的主任，在這個夏日永遠離開了我們。':
    'Our much-loved 李維晏 — the Miguel everyone called the best — the director who carried this centre forward, left us for good this summer.',
  '我們總說Miguel是一個肩膀很寬的人。':
    'We always said Miguel had broad shoulders.',
  '她總會下意識地側過身，替身旁的人多擋一點風雨。學校交付的新任務，她率先承擔；教學的新方向，她率先摸索。當學生陷入迷惘、找不出癥結時，她總會耐心傾聽、細心觀察，再給出犀利而中肯的建議。':
    'She would turn without thinking to take a little more of the weather off whoever stood beside her. A new task from the university, and she took it first; a new direction in teaching, and she went first to find out what it was. When a student was lost and could not name the problem, she listened patiently, watched closely, and then said something sharp and exactly right.',
  '面對挑戰，Miguel向來從容篤定。當年參加寫作教學中心面試時，創立中心的蘇以文主任問及工作上可能遭遇的難處，她毫不猶豫地回答：「我覺得沒有什麼事情是難的。」':
    'Miguel met a challenge calmly. At her interview for the centre, its founding director 蘇以文 asked what she thought the difficulties of the job would be. She answered without hesitating: "I don\'t think anything is difficult."',
  '這句回應，反映出她性格中直率與堅毅的一面，也成為她日後工作的寫照。幾年之後，Miguel接下寫作教學中心主任的重任。蘇以文主任任內，奠定了寫作教學中心的基礎，而 Miguel 則承續蘇主任的理念，帶領中心成長，不斷拓展服務的深度與廣度，陪伴更多師生在教學與學習的路上前行。':
    'That answer showed the directness and the toughness in her, and it turned out to describe the years that followed. Some time later she took on the directorship herself. 蘇以文 had laid the centre\'s foundations; Miguel carried her thinking forward, grew the centre, widened and deepened what it offered, and walked alongside a great many more teachers and students.',
  '而她，也用十幾年的時間，實踐了當年她對蘇主任說的那句話。每當學校交付新任務，她的第一反應永遠是「我們可以試試看」，總是率先站到中心同仁前面，把未知與不確定留給自己。直到真的遇到難以突破的困境，她才會轉身邀請大家攜手面對，說：「我們一起試試看。」正是這份慣於主動擔當的姿態，讓身邊的所有人都感到踏實、安心。':
    'Over more than a decade she made good on what she had said. Whenever the university handed down something new, her first reaction was always "we can give it a go", and she would step out in front of her colleagues, keeping the unknown for herself. Only when something truly would not yield did she turn round and ask everyone in: "let\'s try it together." It was that habit of taking things on first that made everyone around her feel steady.',
  'Miguel 是一個藏不住創意的人，也是一個藏不住「在意」的人。她願意用盡一切力氣讓學生依靠，多年來，她辦公室的大門永遠為所有人敞開。她相信學英語不應該是孤獨的、焦慮的、也不該只侷限於課堂與課本。所以她創辦Fun with English，培養一批各有所長的輔導員，以一對一的方式陪伴同學，希望透過語言學習的樂趣，點燃學生持續精進的熱情。與此同時，她看見了學生「不敢開口」背後的困惑與迷茫，因此，她也帶領中心建立多元的寫作支援服務，讓學生在寫論文、交報告前能獲得專業的建議，有人一路相伴，一起梳理思路、琢磨文字。':
    'Miguel could not hide her ideas, and she could not hide how much she cared. She would spend everything she had to be something a student could lean on, and for years her office door stood open to anyone. Learning English, she believed, should not be lonely or anxious, and should not be confined to a classroom and a textbook. So she founded Fun with English, training a group of tutors with different strengths to sit with students one to one, hoping the pleasure of the language would light something that kept burning. She also saw the confusion behind a student\'s reluctance to speak, and built out the centre\'s writing support so that anyone facing a thesis or a report could get expert advice — and have company while they untangled their thinking and worked on the words.',
  '這些活動的背後都有著Miguel一貫的教學理念：學習的形式可以是充滿創意、多元的。她從不接受刻板、規律的課程，總是反覆問自己，還能怎麼讓它更有趣、更有效、更讓人想留下來。':
    'Behind all of it was one conviction: that learning can take many forms, and inventive ones. She would not accept a rigid, routine course, and kept asking herself how it could be made more interesting, more effective, more worth staying for.',
  '課堂上的她有著另一面——犀利、好玩、讓人措手不及。':
    'In class there was another side of her — sharp, playful, and liable to catch you off guard.',
  '「小故事，大世界」這門課融合了歐美大學廣泛運用的故事敘事（storytelling）教學理念，Miguel 則是臺大首位將這套理念系統化引入課堂的老師。課程從故事架構、舞台表達等層面展開訓練，帶領大家把個人的經歷轉化為大眾的話題，培養兼具感染力與能在台上獨當一面的表達者。她充滿創意的教學方式，讓課程在每學期選課時都湧入大量慕名前來的人潮，期末也讓許多學生不捨離去，網路上詢問選課攻略的聲音更是始終不絕。':
    '"Small Stories, Big World" drew on the storytelling pedagogy widely used in Western universities, and Miguel was the first at NTU to bring it into a classroom systematically. The course trained students in story structure and stage presence, turning personal experience into something an audience could hold, and producing speakers who could carry a room on their own. Her inventiveness meant registration filled with students who had heard about it; at the end of term many did not want to leave; and the requests online for advice on how to get in never stopped.',
  '「框架外的思考：五分鐘英文講台」的課程設計同樣能體現她的用心。她鼓勵學生先觀察生活難題，用創意設計解決方案，透過實際驗證與修正落實為企劃書，再以團隊形式完成簡報與英文演講，練習在有限的時間內清晰有力地傳達觀點。在她的引導下，學生跳出課堂邊界，憑藉課程所學參加各類競賽，不僅斬獲獎項，更有幸獲得國際企管大師的指點。或許，她的學生最終都會發覺，Miguel 想教的從來不只是溝通表達，更有推著學生走向未來，逼著他們突破思維框架、勇敢迎向挑戰的韌性。':
    '"Thinking Outside the Box" shows the same care. Students began by observing a real problem, designed something inventive to solve it, tested and revised it into a proposal, then presented and spoke in English as a team, practising how to make a point clearly and forcefully in very little time. Under her guidance they went beyond the classroom, entered competitions on the strength of what they had learned, won prizes, and in some cases were coached by internationally known figures in management. Sooner or later her students realised that what Miguel was teaching was never only communication — it was the resilience to break the frame you think inside, and to walk toward what comes next.',
  '若教學是一場肩並肩的遠行，那麼，做研究對Miguel而言，就是為了幫學生提前探路所點上的燈。':
    'If teaching was a long walk taken shoulder to shoulder, then research, for Miguel, was the lamp she lit to scout the path ahead for her students.',
  '她不相信「憑感覺教學」這回事。對Miguel 而言，她要知道學生真正卡在哪裡，她想知道教學究竟是只流於形式，還是能讓學生真正累積能力？當 AI 浪潮襲來，教育又該如何回應科技帶來的改變？帶著來自課堂的困惑與靈感，她紮紮實實地投入研究，將日常教學淬鍊成可被檢驗、傳遞的方法。對她而言，研究背後的數據與文獻，來自於一個純粹的念頭——想為學生們撥開迷霧。一如她的教學初衷：先蹲下來，看清楚學生在哪裡，才知道自己該站在哪裡。':
    'She did not believe in teaching by feel. She wanted to know where a student was actually stuck, and whether teaching was going through the motions or genuinely building capability. When AI arrived, she wanted to know how education should answer it. Carrying her questions and her hunches out of the classroom, she did the research properly, refining everyday teaching into methods that could be tested and passed on. Behind the data and the literature was one plain motive: to clear the fog for her students. It was the same instinct as her teaching — crouch down first, see exactly where the student is, and only then work out where you should stand.',
  '從每一門課程的用心準備，到一次次研究成果的累積，她的視線始終緊跟著學生的需求。正是這份不願放手的愛與執著，逼著她必須看得比別人遠、走得比別人快，她要確保當大時代的浪潮拍打過來時，她的學生擁有前瞻性的視野與應對能力。':
    'From the care she put into preparing each course to the research that accumulated year on year, her eye never left what students needed. It was that refusal to let go that made her look further ahead than others and move faster than them: she wanted her students to have the perspective and the means to meet whatever wave was coming.',
  '正因如此，早在 2022 年 AI 還未大規模改變世界前，敏銳的她就已經率先推行 Writing with AI 的活動，大膽讓科技成為學生學習的第一份助力，搭配輔導員的實體諮詢，讓學習的速度與品質兼顧。':
    'Which is why, in 2022, before AI had changed the world at scale, she was already running Writing with AI — boldly making the technology a student\'s first assistant, paired with in-person tutoring so that speed did not cost quality.',
  '而她大力推動，如今席捲各大校園的 3MT（三分鐘英語學術簡報）比賽，更是她送給全臺灣研究生的禮物。她堅信研究不該孤芳自賞，表達的力量與研究的深度同等重要，因此，這個活動從三所學校（臺大、臺師大、臺科大）一路推廣至全臺，讓學生能夠分享其學術研究成果，與不同背景的聽眾交流。直至 2025 年，敏銳的她再度跨出新的一步，透過視覺化展示的訓練，鼓勵學生打破學科的邊界、鍛鍊創新的思維，只為讓學生提升跨文化溝通的技巧，獲得與國際接軌的絕佳機會。':
    'And the 3MT — the three-minute thesis competition in English that now runs across campuses everywhere — was her gift to graduate students throughout Taiwan. Research, she insisted, should not admire itself in private: the power to express it matters as much as its depth. The event grew from three universities (NTU, NTNU and NTUST) to the whole country, giving students a way to share their work with audiences from other backgrounds. In 2025 she took another step, adding training in visual presentation to push students across disciplinary boundaries and sharpen how they think — all so they could communicate across cultures and meet the world on equal terms.',
  'Miguel曾獲頒三次臺大教學優良教師，更榮獲教學傑出教師的最高肯定。然而對 Miguel 而言，真正重要的是那些課堂結束多年後仍推開門找她敘舊的學生，是那些因為她的陪伴終於找到研究方向、找到表達的勇氣與樂趣的每一個學生。':
    'She was named an NTU Distinguished Teacher three times and received the university\'s highest teaching award. But what mattered to Miguel were the students who pushed her door open years after the course had ended just to catch up — and every student who, because she stayed with them, finally found a direction for their research, and the nerve and the pleasure of speaking.',
  '「教育是分享快樂的志業。」這是 Miguel常掛在嘴邊的一句話，也是她一生始終相信的信念。而要分享快樂，意味著要先願意毫無保留地敞開自己。這一生，Miguel都在努力打造能夠承接他人的所在，並且希望能再擴大一點，只為了能裝進更多人，擋下更多風雨。':
    '"Teaching is the work of sharing joy." She said it often, and she believed it all her life. To share joy you first have to be willing to open yourself completely. All her life Miguel worked at building somewhere that could hold other people — and wanted it a little bigger still, so it could hold more of them and keep more of the weather off.',
  '寫作教學中心的同仁將會記得Miguel說的，沒有什麼事是難的。':
    'Her colleagues at the centre will remember what Miguel said: nothing is difficult.',
  '而直到她離開之後，我們才明白，原來那些事情之所以沒有那麼難，是因為一直都是她走在前面。':
    'And only after she was gone did we understand why so little had been difficult: she had been walking in front the whole time.',
  '如今，我們將帶著她留下的信念，繼續陪伴每一位學生，讓這份對教育的熱忱、溫暖延續下去。':
    'We will carry what she believed and go on walking beside every student, so that the warmth and the conviction keep going.',
  '本文由臺大寫作教學中心同仁共同整理資料、撰寫，部分內容引用自《臺大教學傑出教師的故事》及寫作教學中心歷年活動紀錄。':
    'Written and compiled by colleagues at the NTU Academic Writing Education Center, drawing in part on *Stories of NTU\'s Outstanding Teachers* and the centre\'s records of past events.',
  '更多懷念 Miguel 老師的生平側寫與紀念文字，整理中，將陸續刊登。':
    'More recollections and tributes are being gathered and will be published as they come in.',

  /* ── 學生的聲音（區塊文案） ── */
  '這些是學生願意公開分享的留言與故事，不分課程。點一下卡片，換一則來讀。':
    'Messages and stories students were willing to share publicly, from any course. Click a card for another.',
  '‹ 上一則': '‹ Previous',
  '下一則 ›': 'Next ›',
  '🔀 隨機': '🔀 Random',
  '點卡片或按「下一則」即可閱讀更多留言':
    'Click a card or press Next to read more',
  '依課程整理學生的回饋：每門課先是綜合心得，下方為學生願意公開分享的具名留言。':
    'Feedback organised by course: a summary of the responses first, then the named messages students were willing to share.',
  '匿名': 'Anonymous',
  '匿名　小故事，大世界': 'Anonymous — Small Stories, Big World',
  '匿名　109-2　PTT/Dcard 課程心得彙整':
    'Anonymous — semester 109-2 — compiled from PTT and Dcard course reviews',
  '匿名　113-2　人生畢業典禮留言板':
    'Anonymous — semester 113-2 — from the graduation message board',
  '匿名　PTT/Dcard 課程心得彙整': 'Anonymous — compiled from PTT and Dcard course reviews',
  'PTT/Dcard 課程心得彙整': 'Compiled from PTT and Dcard course reviews',
  '黃翊晟　107-1（2018年）　人生畢業典禮留言板':
    '黃翊晟 — semester 107-1 (2018) — from the graduation message board',
  '蔡璨鴻　113-1　人生畢業典禮留言板':
    '蔡璨鴻 — semester 113-1 — from the graduation message board',
  'Bella　114-1　人生畢業典禮留言板':
    'Bella — semester 114-1 — from the graduation message board',
  '我的快樂大計畫　107-1　人生畢業典禮留言板':
    '"My Big Happiness Project" team — semester 107-1 — from the graduation message board',
  '許哲榮　108-1　人生畢業典禮留言板':
    '許哲榮 — semester 108-1 — from the graduation message board',
  '劉于榕　103-1；103-2　人生畢業典禮留言板':
    '劉于榕 — semesters 103-1 and 103-2 — from the graduation message board',

  /* ── 課程區塊 ── */
  '小故事，大世界': 'Small Stories, Big World',
  '250 則回饋': '250 responses',
  '這是 Miguel 最具代表性的通識課，自 106 學年起十年間累積了數百則回饋。學生最常提到的，是她說故事的魅力——每堂課穿插的人生故事讓人「笑到肚子痛」，卻又在歡笑中學會 Story of Self／Us／Now 的敘事架構。許多人形容這是「大學生涯最愛、最想一修再修」的一門課；她對故事（甚至對人生）「一針見血」的講評、用心設計的分組與每週貼心的提醒信，都讓人難忘。':
    "Miguel's signature general education course, with several hundred responses gathered over the decade since 2017. What students mention most is how she told a story — the pieces of her own life dropped into each class left people laughing until their sides hurt, and somewhere in the laughter they picked up the Story of Self / Us / Now structure. Many call it the course they loved most at university and would take again and again. Her comments on a story — and on life — went straight to the point; the group design was thought through; and the weekly reminder emails are still remembered.",
  '框架外的思考：五分鐘英文講台': 'Thinking Outside the Box: Five Minutes on the English Stage',
  '123 則回饋': '123 responses',
  '工程學術英文寫作與口頭報告':
    'Academic English Writing and Oral Presentation for Engineering',
  '46 則回饋': '46 responses',
  '英文寫作基礎': 'Fundamentals of English Writing',
  '24 則回饋': '24 responses',
  '在這門小班寫作課裡，Miguel 用清楚、有架構又有趣的方式，帶學生打好英文寫作的地基。學生稱讚她的簡報精緻、診斷問題「一針見血」、課後還會撥空一對一輔導，也欣賞她把邏輯思考與批判帶進寫作。':
    'In this small writing class Miguel laid the foundations of English writing clearly, structurally and enjoyably. Students praised the polish of her slides, how precisely she diagnosed a problem, and the one-to-one time she made after class — and valued the way she brought logic and criticism into writing.',
  '自我探索寫作系列：履歷自薦信與自我行銷':
    'Writing for Self-Discovery: CVs, Cover Letters and Selling Yourself',
  '11 則回饋': '11 responses',
  '這是一門非常貼近大學生需求的實用課：從完全不懂 Resume／CV，到能寫出一篇得到老師肯定的文章，還有模擬面試的經驗。有同學因老師的協助順利錄取了管院的產學計畫。課程氣氛輕鬆有趣、緊湊不冷場，許多人直呼六週實在太短、意猶未盡，希望能跟著老師上得更久。':
    'A course pitched squarely at what undergraduates actually need: from no idea what a résumé or CV is, to a document she would sign off on, plus a mock interview. One student got onto a business school industry placement with her help. The atmosphere was relaxed and funny and never flagged; many said six weeks was far too short, and wished they could have kept going with her.',
  '自我探索寫作系列：自傳與自我行銷':
    'Writing for Self-Discovery: Personal Statements and Selling Yourself',
  '在自傳與自我行銷的課堂上，學生學到的不只是寫作技巧。許多人印象最深的，是 Miguel 給的一個提問——「你有沒有走在自己想要走的路上？」這句話讓人時時自省、對未來有了更清楚的規劃。課程實用、老師魅力十足，同學們普遍希望課程時數能再長一些，也期待醫學院區能開設類似的課。':
    'What students took from this class was more than technique. What stayed with most of them was a question Miguel asked: are you walking the road you actually want to walk? It kept coming back to them, and it made the future clearer. A practical course with a magnetic teacher — most wished it ran longer, and hoped something like it might be offered on the medical campus too.',
  '深造規劃英文寫作': 'English Writing for Graduate Study Applications',
  '7 則回饋': '7 responses',
  '這門幫助學生規劃出國深造的課，教 CV、SOP 的寫法，更像一場心靈探索——帶大家檢視自己的人生規劃、釐清自己是怎樣的人。小班制讓師生能一對一諮詢、彼此認識，被不少同學列為「大學以來最喜歡、最有收穫」的一門課。':
    'A course for students planning to study abroad, teaching how to write a CV and a statement of purpose — and functioning rather more like an inward search, having everyone examine their own plans and work out what kind of person they are. The small class allowed one-to-one advice and let people actually get to know each other. Several list it as the course they loved most, and got most from, in their whole degree.',
  '讀中生智：英文批判閱讀': 'Reading to Connect: Critical Reading in English',
  '5 則回饋': '5 responses',
  '這是一門扎實的英文批判閱讀課。學生說 Miguel 教學認真、風格有趣，擅長帶動討論氣氛，課程規劃結合實務、不流於理論，讓人確實培養出批判性閱讀的能力。':
    'A solid course in critical reading. Students describe Miguel as serious about the teaching and entertaining in style, good at getting a discussion going, with a syllabus tied to practice rather than floating in theory — and they came out able to read critically.',
  '學術英文論文寫作與發表': 'Academic English Paper Writing and Publication',
  '4 則回饋': '4 responses',
  '在這門論文寫作課裡，Miguel 教學脈絡清晰、三次作業都仔細批改，學生從她的修改中學到很多，連中文寫作也一併受惠。她也為學生爭取資源、犧牲下班時間協助諮詢改稿。':
    'Miguel taught this one with a clear through-line and marked all three assignments carefully; students learned a great deal from her edits, and their Chinese writing improved too. She also found resources for them, and gave up her own evenings to sit with drafts.',
  '經濟學英文寫作基礎': 'Fundamentals of English Writing for Economics',
  '3 則回饋': '3 responses',
  '雖然回饋不多，但都很真摯：學生說「Miguel 絕對是台大最棒的老師之一」，稱讚她認真地想把所會的都交給學生，能把有脈絡、有邏輯的文法與寫作知識連貫起來，讓人耳目一新。':
    'Few responses, but all of them heartfelt. Miguel is "absolutely one of the best teachers at NTU", students say, praising how seriously she tried to hand over everything she knew, and how she connected grammar and writing into something coherent and logical that felt new.',
  '科學研究與寫作': 'Scientific Research and Writing',
  '這是 Miguel 在 113 學年開設的課。學生說她「很有料」，教的東西讓人大開眼界——當他們與在美國讀書的同學分享課堂所學，才發現自己已經被訓練出國際與研究上的競爭力。師生互動良好、氣氛幽默。':
    'A course Miguel opened in 2024. Students say she had real substance, and what she taught opened their eyes — when they compared notes with friends studying in the US, they realised they had already been trained to compete internationally and in research. Good rapport, plenty of humour.',
  '醫學研究與論文發表': 'Medical Research and Publication',
  '1 則回饋': '1 response',
  '僅有一則回饋，但精準地道出了她的課堂特質：舉例實用、上課有趣、吸引人。':
    'Only one response, but it catches the class exactly: useful examples, interesting to sit in, and hard to look away from.',
  '學術英文寫作': 'Academic English Writing',
  'Miguel 是寫作教學中心主任，她的學術英文寫作課（含在東吳開設的寫作課）廣受好評。學生形容她個人風格獨特、開朗有活力，給的寫作建議一針見血、又懂得因材施教，「給的東西都很有用，但不會一次太多讓人無法吸收」；課堂幽默到讓人「上課又好笑、學得到東西」，更有人直呼她根本是自己的生涯導師。':
    'As director of the writing centre, Miguel\'s academic writing courses — including the one she taught at Soochow — were widely praised. Students describe a distinctive style, bright and full of energy, advice that went straight to the point, and a real gift for pitching to the individual: "everything she gave was useful, but never so much at once that you couldn\'t take it in." The class was funny enough that people said they laughed and learned at the same time, and more than one called her their career mentor outright.',
  'Miguel根本生涯導師哈哈哈笑瘋 愛死她':
    'Miguel is basically a life mentor lol I love her',
  '有Miguel就推爆啦！覺得是一位很會因材施教的老師，給的東西都很有用，但不會一次太多資訊量讓人沒辦法吸收，只要每週有複習她上課的重點，基本上作業都沒問題，可以收穫很多！':
    "If Miguel's teaching it, take it, no question. She's really good at teaching to the person in front of her — everything she gives you is useful, and never so much at once that you can't absorb it. Review the week's key points and the assignments are fine. You get a lot out of it.",
  '老師個人風格獨特，是開朗、有活力的老師。他給學生的寫作建議是一針見血，對於學生的問題很能夠給出完整的答案。':
    'A very distinctive teacher, bright and energetic. Her writing advice goes straight to the point, and she gives complete answers to whatever you ask.',

  /* ── 著作與資源 ── */
  '老師留下的著作、研究與公開課程——想再聽她上一堂課，隨時都可以。所有連結均經查證。':
    'The writing, research and open courses she left behind — one more class with her, whenever you want. Every link has been checked.',
  'NTU Scholars 個人檔案': 'NTU Scholars profile',
  '臺大電子報紀念文': 'NTU newsletter memorial piece',
  '學術著作': 'Publications',
  '博士論文（2013，Durham University）：The Investigation of Effectiveness and Practicality of English Language Teacher Education Programs in Taiwan':
    'Doctoral thesis (2013, Durham University): The Investigation of Effectiveness and Practicality of English Language Teacher Education Programs in Taiwan',
  '《卓越TA帶你飛：助教培訓手冊》（2022，臺大出版中心）':
    'Flying with an Excellent TA: A Teaching Assistant Training Handbook (2022, NTU Press)',
  '《卓越TA帶你飛：助教培訓手冊（第二版）》（2023，臺大出版中心）':
    'Flying with an Excellent TA: A Teaching Assistant Training Handbook, 2nd edition (2023, NTU Press)',
  '研究計畫': 'Research projects',
  '大班級中團體去惰化教學實踐——小故事、大世界（教育部教學實踐研究計畫，2020–2021，成果報告全文）':
    'Countering social loafing in large classes — Small Stories, Big World (Ministry of Education teaching practice research grant, 2020–2021; full report)',
  '讀中生智：大班級英文閱讀「意義化」（教育部教學實踐研究計畫，2022–2023；111 年度績優計畫）':
    'Reading to Connect: making large-class English reading meaningful (Ministry of Education teaching practice research grant, 2022–2023; named an outstanding project for 2022)',
  '探討生成式 AI SciSpace 對學生邏輯思考之影響（國科會專題研究計畫，114 年度）':
    'The effect of the generative AI tool SciSpace on students\' logical thinking (National Science and Technology Council research grant, 2025)',
  '開放式課程（臺大 OCW）': 'Open courseware (NTU OCW)',
  '英文寫作基礎 Fundamentals of English Writing（完整 9 講）':
    'Fundamentals of English Writing (all nine lectures)',
  '英文寫作基礎 YouTube 播放清單': 'Fundamentals of English Writing — YouTube playlist',
  '讀中生智：英文批判閱讀 Reading to Connect（15 講，第 1 講由老師主講）':
    'Reading to Connect: Critical Reading in English (15 lectures; she gives the first)',
  'Reading to Connect（英語授課版）': 'Reading to Connect (English-taught version)',
  '新生講座：閱讀寫作能力——批判性閱讀之養成':
    'Freshman lecture: reading and writing — how critical reading is built',
  '演講與影音': 'Talks and video',
  '椰林講堂：教學改進 (SoTL) 研究成果（2016）':
    'Yeh-Lin Lecture: findings from scholarship of teaching and learning research (2016)',
  'NTU 3MT 賽前講堂：組織你的三分鐘簡報（2015）':
    'NTU 3MT pre-competition workshop: organising your three minutes (2015)',
  '遠哲 3mT4S 教師增能工作坊：英語短講技巧與簡報製作（2024）':
    'Yuan T. Lee Foundation 3mT4S teacher workshop: short talks in English, and building the slides (2024)',
  '遠哲 3mT4S 決賽評審講評（2023）':
    "Yuan T. Lee Foundation 3mT4S final — judge's remarks (2023)",
  'LTTC 70 週年祝賀影片（2021）': 'LTTC 70th anniversary message (2021)',
  '北科大創新教學工作坊：讓學生懷疑你是讀心術高手的教學設計（2025）':
    'Taipei Tech innovative teaching workshop: designing a class that makes students suspect you read minds (2025)',
  '多走一哩路 03——教學實踐計畫短片（2024，老師主講）':
    'One More Mile 03 — teaching practice project film (2024, presented by her)',
  '本網站留言彙整自學生的課程回饋、人生畢業典禮留言板與追思會留言。匿名回饋以「綜合意見」方式呈現，不公開個別內容；具名留言依其公開意願收錄，仍在持續確認與校訂中。':
    'The messages on this site are gathered from course feedback, the graduation message board and the memorial service. Anonymous feedback appears only in summary, never individually; named messages are included according to what each person was willing to make public, and are still being confirmed and corrected.',
  '← 回到 Matt Ye 的寫作列表': "← Back to Matt Ye's writing",
  '← 所有文章': '← All articles',
  '關於本站作者': 'About the author',
  '回首頁': 'Home',
};
