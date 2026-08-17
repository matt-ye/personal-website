/*
 * BOPPPS 教學設計手冊的英文對照表。
 * 來源頁：src/data/static-pages/projects__one-more-step__boppps.html
 *
 * ⚠ 首字母被切出去的縮寫：SMART 與 ABCD 兩組，首字母（S/M/A/R/T、A/B/C/D）
 *   各自在獨立元素裡，抽出來的字串是沒有頭的「pecific 具體」「udience 對象」。
 *   英文半邊同樣不能補回首字母，否則會變成「SSpecific」。
 *
 * 術語定調：學習者 learner｜參與式學習 participatory learning｜
 *   前測 pre-assessment｜後測 post-assessment｜形成性評量 formative assessment
 */
export const MAP = {
  /* ── 導覽 ── */
  '模型': 'The model',
  '時間': 'Timing',
  '線上工具': 'Online tools',
  '課程範例': 'Worked example',
  '文獻': 'References',
  '教學設計手冊': 'An instructional design handbook',

  /* 片段：<h1>用 <span>BOPPPS</span> 設計<br>有效的工作坊與課程</h1>
     英文語序把「用」對應的 with 移到句尾，所以「用」清空、
     「設計」承載動詞、後半段接完整受詞。 */
  '用': '',
  '設計': 'Designing',
  '有效的工作坊與課程': 'workshops and courses that actually work',

  '基於 ISW（教學技能工作坊）的學習者中心教學框架，適用於各年齡層的線上課程與工作坊設計。':
    'A learner-centred teaching framework from the Instructional Skills Workshop (ISW), usable for online courses and workshops at any age level.',
  'ISW · 1979 起源於 UBC': 'ISW · began at UBC in 1979',
  '建構主義學習理論': 'Grounded in constructivism',
  '50% 參與式學習': '50% participatory learning',
  '44 項研究 Meta-analysis 驗證': 'Validated by a 44-study meta-analysis',

  /* ── 六大模組 ── */
  '核心模型': 'The core model',
  'BOPPPS 六大模組': 'The six BOPPPS components',
  'BOPPPS 是一個閉環教學設計框架：前測確認起點 → 參與式學習推進 → 後測驗收，每個模組相互呼應。':
    'BOPPPS is a closed loop: the pre-assessment establishes where learners start, participatory learning moves them forward, and the post-assessment checks they arrived. Every component answers to the others.',

  'Bridge-in　暖身 / 導言': 'Bridge-in — the hook',
  '吸引注意、建立動機、讓學習者知道「為什麼這堂課對我重要」。':
    'Catch attention, build motivation, and let learners see why this session matters to them.',
  '有趣圖片、驚人數據、新聞事件': 'A striking image, a surprising statistic, something in the news',
  '爭議問題、認知落差、個人經驗分享':
    'A contested question, a gap in what they assume, a personal story',
  '簡短影片（建議嵌入，勿跳外部連結）':
    'A short video — embed it rather than sending people to an external link',
  '課程回顧（第 2 堂以後）': 'A recap of the previous session (from session two onward)',
  '~10% 時間': '~10% of the time',
  '情意課程可更長': 'longer for affective subjects',
  '不要喧賓奪主': "don't let it upstage the lesson",

  'Objective　學習目標': 'Objective — what they will be able to do',
  '明確告知學習者「這堂課結束後你能做到什麼」。用可觀察、可衡量的行為動詞描述。':
    'Tell learners plainly what they will be able to do by the end, using verbs you can observe and measure.',
  '具體、可量化、可實現、切實、有期限':
    'Specific, measurable, achievable, relevant, time-bound',
  '技能目標參考 Simpson 層次（知覺→準備→引導→機械化→複合→適應→獨創）':
    "For skill objectives, use Simpson's levels (perception → set → guided response → mechanism → complex response → adaptation → origination)",
  '情意目標參考 Bloom 情意領域（接受→反應→重視→組織→品格）':
    "For affective objectives, use Bloom's affective domain (receiving → responding → valuing → organisation → characterisation)",

  /* ── SMART ── */
  '框架詳解': 'The frameworks in detail',
  '目標設定原則': 'Principles for setting objectives',
  '源自管理學（Doran, 1981），後廣泛用於教育目標設計。五個維度確保目標對學習者有可操作性，而非停留在「學生能了解…」的模糊陳述。':
    'From management (Doran, 1981) and since adopted widely in education. The five dimensions keep an objective actionable, rather than leaving it at "students will understand…".',
  /* 首字母 S/M/A/R/T 在別的元素裡，這裡不能補回去 */
  'pecific 具體': 'pecific',
  '清楚說明「誰在哪個情境下做什麼」，避免「了解」「認識」等無法觀察的動詞。':
    'State who does what, in what situation. Avoid verbs you cannot observe, like "understand" or "be aware of".',
  'easurable 可量化': 'easurable',
  '設定可觀察的指標，如「至少說出三個例子」或「完成率達 80%」。':
    'Set an observable marker — "name at least three examples", or "80% completion".',
  'chievable 可實現': 'chievable',
  '目標難度應落在 Vygotsky 的最近發展區（ZPD）內：夠挑戰，但可達成；太難讓人放棄，太易則無學習效益。':
    "Pitch it inside Vygotsky's zone of proximal development: demanding but reachable. Too hard and people give up; too easy and nothing is learned.",
  'elevant 切實相關': 'elevant',
  '與整體課程學習成果（Course Learning Outcomes）或學習者的真實需求對齊。':
    "Aligned with the course learning outcomes, or with what the learner actually needs.",
  'ime-bound 有期限': 'ime-bound',
  '明確指出「在本節課結束前」或「本週內」，幫助設計評量時間點。':
    'Say "by the end of this session" or "within the week" — it also tells you when to assess.',

  /* ── ABCD ── */
  '行為目標四要素（Robert Mager, 1962）': "The four parts of a behavioural objective (Robert Mager, 1962)",
  '由 Robert F. Mager 在《Preparing Instructional Objectives》（1962）提出，要求每條目標都應包含四個成分，讓評量者能清楚判斷「學生有沒有達到目標」。':
    'Robert F. Mager set these out in *Preparing Instructional Objectives* (1962). With all four parts present, an assessor can tell plainly whether the student got there.',
  'udience 對象': 'udience',
  '具體指出學習者是誰，如「國小五年級學生」「初入職護理師」。':
    'Name the learners: "fifth-graders", "newly qualified nurses".',
  'ehavior 行為': 'ehaviour',
  '使用可觀察的行動動詞（描述、計算、示範、分析）。':
    'Use an observable action verb — describe, calculate, demonstrate, analyse.',
  '禁用「了解」「知道」「欣賞」': 'Never "understand", "know" or "appreciate"',
  '等無法觀察的內隱動詞。': ' — internal states nobody can observe.',
  'ondition 條件': 'ondition',
  '學習者在什麼資源或限制下執行？如「在不看筆記的情況下」「使用 AI 工具協助」「給定資料集」。':
    'With what resources or constraints? "Without notes", "with an AI tool", "given this dataset".',
  'egree 程度': 'egree',
  '達成標準是什麼？如「正確率 90% 以上」「在 5 分鐘內」「無需提示即可完成」。':
    'What counts as success? "90% accuracy", "within five minutes", "unprompted".',

  '完整範例：': 'A complete example:',
  '「在課程結束後，': '"By the end of the session, ',
  '國小五年級學生（A）': 'a fifth-grade student (A)',
  '能夠不看筆記': ' will, without notes, ',
  '說出 AI agent 的兩個實際應用場景（B）': 'name two real uses for an AI agent (B)',
  '，至少舉出一個課堂以外的生活例子':
    ', including at least one example from outside the classroom',

  /* ── Simpson ── */
  '技能（心理動作）目標層次': 'Levels of psychomotor (skill) objectives',
  'Elizabeth Jane Simpson（1966）延伸 Bloom 的分類系統，專門描述':
    "Elizabeth Jane Simpson (1966) extended Bloom's taxonomy to describe ",
  '動作技能的習得歷程': 'how motor skills are acquired',
  '——從觀察模仿到自動化，最終能獨創新動作。適用於實驗操作、樂器演奏、手術技能、體育運動等領域的目標撰寫。':
    ' — from watching and copying, through automaticity, to inventing new movement. Useful for writing objectives in lab work, music, surgery and sport.',
  '知覺 Perception': 'Perception',
  '透過感官察覺動作線索（如觀看示範、聆聽節拍、感受力道）。':
    'Picking up cues through the senses — watching a demonstration, hearing the beat, feeling the pressure.',
  '準備 Set': 'Set',
  '身心預備就緒：正確姿勢、心理期待、情緒準備。':
    'Readiness of body and mind: the right stance, the expectation, the emotional preparation.',
  '引導反應 Guided Response': 'Guided response',
  '在指導下練習，允許犯錯與修正，靠模仿和試誤學習。':
    'Practising under guidance, free to make and correct mistakes, learning by imitation and trial.',
  '機械化 Mechanism': 'Mechanism',
  '動作漸趨自動化，不需刻意思考每個步驟，執行有一定信心。':
    'The movement becomes habitual — no longer thinking through each step, and performed with some confidence.',
  '複合外顯反應 Complex Overt Response': 'Complex overt response',
  '熟練、迅速、流暢，整合多個子動作，幾乎不費力。':
    'Skilled, quick and fluent, several sub-movements integrated, almost effortless.',
  '適應 Adaptation': 'Adaptation',
  '能修改習得的動作以因應新情境或特殊條件。':
    'Modifying a learned movement to suit a new situation or an unusual constraint.',
  '獨創 Origination': 'Origination',
  '創造全新動作模式，融合舊技能解決未曾遭遇的問題。':
    'Creating an entirely new pattern, combining old skills to solve something never met before.',
  '教學設計意義：': 'What this means for design:',
  '撰寫技能類目標時，先確認學習者目前在哪個層次，再設定本節課期望達到哪個層次。初學者的一堂課往往只能從「知覺」推進到「引導反應」，不必一次跳到「機械化」。':
    'Establish which level learners are at now, then decide which level this session should reach. A beginner session usually gets from perception to guided response — there is no need to leap to mechanism.',

  /* ── Krathwohl 情意 ── */
  'Bloom 情意': 'Affective domain',
  '情意目標層次（Krathwohl et al., 1964）': 'Levels of affective objectives (Krathwohl et al., 1964)',
  '由 Krathwohl、Bloom 與 Masia 於《Taxonomy of Educational Objectives, Handbook II: Affective Domain》（1964）提出。描述':
    'Set out by Krathwohl, Bloom and Masia in *Taxonomy of Educational Objectives, Handbook II: Affective Domain* (1964). It describes ',
  '態度、價值觀、情感的內化歷程': 'how attitudes, values and feelings become internalised',
  '，從被動接受到形成穩定的人格特質。情意目標通常較難評量，但在品格教育、醫學倫理、環境教育中至關重要。':
    ', from passive acceptance to a settled trait of character. Affective objectives are harder to assess, but they are central to character education, medical ethics and environmental education.',
  '接受 Receiving': 'Receiving',
  '願意留意、不抗拒；被動開放，意識到某事物的存在。':
    'Willing to attend and not resisting; passively open, aware that the thing exists.',
  '反應 Responding': 'Responding',
  '主動參與、願意回應；不只是旁觀，而是投入互動。':
    'Taking part and willing to reply — no longer a spectator.',
  '重視 Valuing': 'Valuing',
  '認為此事值得投入，自發行動，而非僅因外部要求。':
    'Judging it worth the effort and acting unprompted, not because someone asked.',
  '組織 Organization': 'Organisation',
  '將多種價值整合為一套個人系統，能處理不同價值間的衝突與優先順序。':
    'Bringing several values into one personal system, able to weigh them against each other.',
  '品格 Characterization': 'Characterisation',
  '價值觀完全內化為人格特質，行為一致且可預測，無需外部監督。':
    'The value is fully part of who they are — behaviour is consistent and predictable without supervision.',
  '一節 40 分鐘課很難超越「反應」層次，但透過多次課程積累、反思作業、真實情境，可逐步推進學習者到「重視」甚至「組織」層次。Bridge-in 的吸引設計，本質上是在催化第一層「接受」。':
    'A single 40-minute lesson rarely gets past responding. But across repeated sessions, reflective assignments and real situations, learners can be moved to valuing and even organisation. A well-made bridge-in is, in essence, catalysing that first level — receiving.',

  '&lt;5% 時間': '&lt;5% of the time',
  '1–3 個目標': '1–3 objectives',
  '學生中心': 'learner-centred',

  /* ── Pre-assessment ── */
  'Pre-assessment　前測': 'Pre-assessment — where they start',
  '診斷學習者的起點，讓講師即時校準深度與節奏。':
    'Read where learners are, so you can calibrate depth and pace on the spot.',
  '不是考試': 'Not a test',
  '，是讀取先備知識。': ' — a reading of prior knowledge.',
  '舉手投票 / Mentimeter / Zoom Poll': 'A show of hands, Mentimeter, a Zoom poll',
  '3–5 題選擇題（不計分）': 'Three to five multiple-choice questions, ungraded',
  'Think-Pair-Share 暖身討論': 'A think-pair-share warm-up',
  '課前問卷（上課時秀出統計結果）': 'A pre-class survey, with results shown in the session',
  '不計分': 'ungraded',
  '要有教學意圖': 'must serve a teaching purpose',

  /* ── Participatory ── */
  'Participatory Learning　參與式學習': 'Participatory learning — the heart of it',
  '課程的核心。學習者主動操作、討論、實作——講師是引導者，不是舞台主角。':
    'This is the centre of the session. Learners do, discuss and build; the instructor facilitates rather than performs.',
  '分組問題解決 / 案例分析': 'Group problem-solving, case analysis',
  'Think-Pair-Share / 角色扮演 / 模擬': 'Think-pair-share, role play, simulation',
  '同儕教學、協作建模': 'Peer teaching, collaborative modelling',
  '辯論、結構化討論': 'Debate, structured discussion',
  '翻轉課堂：課前看影片，課中做練習':
    'Flipped classroom — video before, practice during',
  '★ 50% 時間': '★ 50% of the time',
  '不可壓縮': 'not negotiable',
  '參與 ≠ 聽課': 'participating is not the same as listening',

  /* ── Post-assessment ── */
  'Post-assessment　後測': 'Post-assessment — did it land?',
  '確認目標是否達成，關閉學習回饋迴圈。通常是形成性評量（促進學習），不是總結性評量（打分數）。':
    'Check whether the objective was met, and close the feedback loop. Usually formative — meant to help learning, not to award a grade.',
  'Minute Paper：「最重要的一件事是什麼？還有什麼不清楚？」':
    'Minute paper: "What was the most important thing? What is still unclear?"',
  '應用挑戰：用今天學到的解一道新問題':
    'An application challenge — solve a fresh problem with what they just learned',
  '自評 Rubric 對照學習目標': 'A self-assessment rubric mapped to the objective',
  '呼應 Objective': 'answers to the objective',
  '餵回下一節 Bridge-in': 'feeds the next bridge-in',

  /* ── Summary ── */
  'Summary　總結': 'Summary — closing the loop',
  '鞏固學習、提供收尾感，並連接到下一個學習段落。':
    'Consolidate, give the session a sense of ending, and connect to what comes next.',
  '讓學習者自己說': 'Let learners say it',
  '比講師複誦更有效。': ' — far better than the instructor repeating it.',
  '3-2-1：3 件學到的事、2 個連結、1 個疑問':
    '3-2-1: three things learned, two connections, one question',
  '學習者兩人一組互相總結': 'Learners summarise to each other in pairs',
  '「So what?」討論：你接下來會怎麼做？':
    'A "so what?" discussion — what will you do next?',
  '預告下一堂課的 Bridge-in': "Trail the next session's bridge-in",
  '學習者主導': 'learner-led',
  '鋪墊下一堂': 'sets up the next session',

  '巢狀 BOPPPS（Nested BOPPPS）：': 'Nested BOPPPS:',
  '長工作坊可在宏觀層（整場）與微觀層（每個模組）各跑一套 BOPPPS，一個模組的 Summary 即是下一個模組的 Bridge-in。適合 90 分鐘以上的課程設計。':
    'A long workshop can run one BOPPPS at the macro level (the whole session) and another inside each block, where one block\'s summary becomes the next block\'s bridge-in. Worth doing from about 90 minutes upward.',

  /* ── 時間配置 ── */
  '時間配置': 'Timing',
  '建議時間分配': 'Suggested allocation',
  '50% 的參與式學習時間是不可壓縮的核心原則，其他模組依此為基準調整。':
    'The 50% for participatory learning is the one figure not to compromise; everything else flexes around it.',
  '模組': 'Component',
  '比例': 'Share',
  '30 分鐘': '30 min',
  '60 分鐘': '60 min',
  '90 分鐘': '90 min',
  '說明': 'Notes',
  '情意課程可延長': 'Longer for affective subjects',
  '愈短愈好': 'The shorter the better',
  '即時回饋給講師': 'Immediate feedback to the instructor',
  '關閉回饋迴圈': 'Closes the feedback loop',
  '學習者主導更佳': 'Better when learner-led',
  '換場、問答': 'Transitions and questions',
  '10–20 分鐘微課程做法：': 'For a 10–20 minute micro-lesson:',
  '只設 1 個目標、Bridge-in 壓縮到一個問題（1 min）、Pre-assessment 用舉手（1 min）、Participatory 做一個 Think-Pair-Share（8–10 min）、Post-assessment 用一個 chat 問題（1 min）、Summary 30 秒一句話。':
    'One objective only. Compress the bridge-in to a single question (1 min), take the pre-assessment by show of hands (1 min), run one think-pair-share (8–10 min), post-assess with one question in the chat (1 min), and summarise in a 30-second sentence.',

  /* ── ISW 背景 ── */
  '背景脈絡': 'Background',
  '什麼是 ISW？': 'What is the ISW?',
  'Instructional Skills Workshop（教學技能工作坊）是 BOPPPS 的誕生母體，也是全球最長期運作的高等教育教師培訓計畫之一。':
    'The Instructional Skills Workshop is where BOPPPS came from, and one of the longest-running faculty development programmes anywhere in higher education.',
  'Douglas Kerr 在英屬哥倫比亞（BC）省開始規劃，回應社區大學教師「有學科專業、但沒有教學訓練」的現實需求。':
    'Douglas Kerr began planning it in British Columbia, answering a real problem: community college instructors had subject expertise but no training in teaching.',
  '第一場 ISW 於 8 月在 UBC 由 Doug Kerr 與 Peter Renner 共同主持。BOPPPS 作為核心教案框架正式確立。':
    'The first ISW ran that August at UBC, co-facilitated by Doug Kerr and Peter Renner. BOPPPS was established as its lesson-planning framework.',
  'ISW Handbook 歷經多次改版（1982、1989、1993、2003、2006）。Pattison & Russell（2006）版本為目前學術引用最廣的版本。':
    'The ISW Handbook has been revised repeatedly (1982, 1989, 1993, 2003, 2006). Pattison & Russell (2006) is the edition most cited academically.',
  '現在': 'Today',
  '已在 7 個加拿大省份、10 個美國州、34+ 個國家推行。亞洲（尤其台灣、中國）高教社群活躍採用。ISW Network（iswnetwork.ca）負責全球協調。':
    'Running in seven Canadian provinces, ten US states and over 34 countries, with active uptake across Asian higher education — Taiwan and China especially. The ISW Network (iswnetwork.ca) coordinates globally.',

  'ISW 的格式': 'How an ISW runs',
  '傳統 ISW 是': 'The traditional ISW is a ',
  '24 小時密集工作坊': '24-hour intensive workshop',
  '（通常 3 天），每組約 1 位 Facilitator 對 5 位學員。\n      學員設計並實施':
    ' — usually over three days, with roughly one facilitator to five participants. Each participant designs and delivers ',
  '3 次 Mini-lesson': 'three mini-lessons',
  '，每次後都收到同儕和 Facilitator 的言語、書面、影像回饋。\n      整個 ISW 本身就是一個大型 BOPPPS——設計→實施→回饋→重新設計的閉環。':
    ', receiving spoken, written and video feedback from peers and the facilitator after each one. The ISW is itself one large BOPPPS: design, deliver, get feedback, redesign.',
  '理論根基：': 'Theoretical grounding:',
  '建構主義（學習者主動建構知識）＋成人學習理論 Andragogy（Knowles）——自主導向、與先備經驗連結、問題中心、立即應用。這些原則同樣適用於國小高年級學童：從自身經驗出發、做中學、即時看到成果。':
    "Constructivism (learners build knowledge actively) plus Knowles's andragogy — self-directed, connected to prior experience, problem-centred, immediately applicable. The same principles hold for upper-primary children: start from their own experience, learn by doing, see the result straight away.",

  /* ── 線上工具 ── */
  '數位應用': 'Online',
  '線上教學工具對應': 'Mapping the components to online tools',
  'BOPPPS 的邏輯與工具無關，可直接對應同步（Zoom / Meet）或非同步（LMS）場景。':
    'The logic of BOPPPS is tool-agnostic; it maps directly onto synchronous (Zoom, Meet) or asynchronous (LMS) settings.',
  '短影片、Zoom Poll「請問你有沒有試過…」、聊天室投問題、meme / 數據圖':
    'A short video, a Zoom poll ("have you ever tried…?"), a question in the chat, a meme or a chart',
  '投影片一句話、共享頁面、口頭陳述 + 聊天室文字留存':
    'One line on a slide, a shared page, said aloud and also posted in the chat so it stays',
  'Mentimeter、Slido、Zoom Poll、Google Form（課前發送，課中秀結果）':
    'Mentimeter, Slido, Zoom polls, a Google Form sent beforehand with results shown live',
  'Zoom 分組討論室、Miro / Jamboard、Padlet、協作 Google Docs':
    'Zoom breakout rooms, Miro or Jamboard, Padlet, a shared Google Doc',
  '聊天室水瀑（Chat Waterfall）、Mentimeter Exit Ticket、Google Form、一句話總結投票':
    'A chat waterfall, a Mentimeter exit ticket, a Google Form, a one-sentence summary poll',
  '學員在聊天室打總結、共筆文件、兩人互相告知「你學到什麼」、下堂課預告':
    'Participants type their summary in the chat, a shared document, pairs telling each other what they learned, a trailer for next time',
  '線上設計 5 個原則：': 'Five principles for online design:',
  '①Bridge-in 要更吸睛（競爭更多干擾）②前測秀統計創造社會認同感 ③參與式學習要明確鷹架（不然學員會靜音潛水）④後測要在模組內完成（不要課後再發問卷）⑤Summary 加上「接下來你會做什麼」延伸學習動機。':
    '① The bridge-in has to work harder — it is competing with more distraction. ② Showing pre-assessment results creates a sense of the room. ③ Participatory work needs explicit scaffolding, or people mute and disappear. ④ Post-assess inside the session, not with a survey afterwards. ⑤ End the summary with "what will you do next?" to carry the motivation out of the room.',

  /* ── 實戰範例 ── */
  '實戰範例': 'A worked example',
  '應用於國小 AI Agent 課程設計': 'Designing a primary-school lesson on AI agents',
  '以下是一堂 40 分鐘「國小四、五年級 AI Agent 初體驗」的 BOPPPS 設計範例，目標是讓學生第一次有意識地使用 AI agent 完成真實任務。':
    'A 40-minute BOPPPS design for fourth- and fifth-graders meeting an AI agent for the first time. The goal: that they deliberately use one to complete a real task.',
  '範例課程：40 min「我的 AI 小幫手——和 AI Agent 說話的第一堂課」　｜　適合：國小 4–5 年級':
    'Example lesson: 40 min — "My AI helper: a first conversation with an AI agent" | For: Years 4–5',
  '播放一段 15 秒短片：AI agent 用中文回答一道小學生的問題（例如「為什麼天空是藍色的？」）。':
    'Play a 15-second clip of an AI agent answering a child\'s question — "why is the sky blue?"',
  '接著老師問：「': 'Then ask the class: "',
  '你覺得剛才在說話的是人還是電腦？': 'Was that a person talking, or a computer?',
  '」——用 Mentimeter 或舉手投票，秀出結果引發討論。':
    '" — take it on Mentimeter or by show of hands, show the result, and let the discussion start.',
  '「今天我們就要來跟這個 AI 小幫手說說話！」':
    '"Today we\'re going to talk to that AI helper ourselves."',
  '「這 40 分鐘結束後，你能夠：': '"By the end of these 40 minutes you will be able to: ',
  '說出 AI agent 是什麼': 'say what an AI agent is',
  '、它能幫你做哪些事': ' and what it can help you with; ',
  '自己輸入一個問題': 'type a question yourself',
  '，讓 AI 幫你完成一個小任務': ' and have the AI help you finish a small task; and ',
  '判斷 AI 的回答': "judge the AI's answer",
  '是不是有用、要怎麼問得更好」': ' — was it useful, and how could you ask better?"',
  '舉手投票（或白板貼紙）：': 'A show of hands, or sticky notes on the board:',
  '「你有用過 AI 嗎？」（用過 ／ 沒有 ／ 不確定）':
    '"Have you used AI before?" (yes / no / not sure)',
  '「你覺得 AI 可以幫你做什麼？」——學生在小白板或便利貼寫下一個答案，老師快速掃視找代表作答。':
    '"What do you think AI could help you with?" — each child writes one answer on a mini-whiteboard or sticky note; the teacher scans them and picks a few to read out.',
  '老師據此判斷：是否需要補充「AI 是什麼」的基礎解釋。':
    'From that, decide whether the class needs the basic "what is AI" explanation first.',
  '5 min — 老師示範：': '5 min — teacher demonstrates:',
  '老師在大螢幕上操作 AI agent，輸入一個任務卡問題（例如「幫我想三個有趣的班遊活動」）。學生大聲喊出他們想問的下一句，老師照著輸入，觀察 AI 如何回應。':
    'Drive the AI agent on the big screen with a task-card prompt — "give me three fun ideas for the class trip". The children call out what to ask next, the teacher types it, and everyone watches how the AI responds.',
  '10 min — 分組實作：': '10 min — in groups:',
  '每組 2–3 人，共用一台平板或電腦，從「任務卡」中選一張：':
    'Two or three per group sharing a tablet or laptop, each group picking one task card:',
  '🎂 「幫我想一個生日派對遊戲」': '🎂 "Think of a game for a birthday party"',
  '🌿 「用簡單的話解釋光合作用」': '🌿 "Explain photosynthesis in simple words"',
  '🐶 「狗狗為什麼會搖尾巴？」': '🐶 "Why do dogs wag their tails?"',
  '✏️ 「幫我想一個作文的開頭」': '✏️ "Help me start my essay"',
  '輸入問題 → 看 AI 回答 → 討論「這個答案有沒有用？要怎麼問得更清楚？」':
    'Type the question → read the answer → discuss: was it useful, and how could we ask more clearly?',
  '5 min — 全班分享：': '5 min — share with the class:',
  '2–3 組各說「你們問了什麼、AI 說了什麼、你們覺得有幫助嗎？」':
    'Two or three groups report: what did you ask, what did the AI say, did it help?',
  '每人完成一張「': 'Everyone fills in one ',
  '我的 AI 任務卡': '"My AI task card"',
  '」（紙本或 Google 表單）：': ' — on paper or in a Google Form:',
  '・我問 AI 的問題是：＿＿＿＿': '· The question I asked the AI was: ____',
  '・AI 的回答讓我（有 ／ 沒有）達到目的':
    "· The AI's answer did / did not get me what I wanted",
  '・下次我想改問：＿＿＿＿': '· Next time I would ask: ____',
  'Mentimeter 快速票選：「用 AI 就像⋯⋯？」（查字典 ／ 問朋友 ／ 問老師 ／ 查 Google）——用圖像化結果帶出討論。':
    'A quick Mentimeter poll: "Using AI is like…" (looking it up in a dictionary / asking a friend / asking a teacher / googling) — then discuss the picture it makes.',
  '邀請 2–3 位學生說「今天你學到什麼」，老師補充一句話收尾：':
    'Ask two or three children what they learned today, then close with one line:',
  'AI agent 像一個超級助手——你問得愈清楚，它幫你愈好。':
    'An AI agent is like a super-helper — the clearer your question, the better it helps.',
  '它不會每次都對，但它永遠不會生氣、不會累，而且等你來問。」':
    "It won't always be right, but it never gets cross, never gets tired, and it's always there when you want to ask.\"",
  '預告：「下次我們要學怎麼問出更棒的問題——讓 AI 幫你做更難的事！」':
    'Trailer: "Next time we\'ll learn how to ask even better questions — so the AI can help with harder things."',
  '為什麼 BOPPPS 特別適合這個年齡層：': 'Why BOPPPS suits this age group:',
  'Bridge-in 用影片和投票立刻抓住注意力，降低「科技恐懼」；Pre-assessment 快速找出哪些學生已有 AI 使用經驗，讓老師即時調整；50% 的參與時間讓學生':
    'The video-and-poll bridge-in grabs attention immediately and takes the fear out of the technology. The pre-assessment finds who has used AI before, so the teacher can adjust on the spot. And the 50% participation means children ',
  '真正摸到 AI': 'actually get their hands on it',
  '，而非只看示範；「我的 AI 任務卡」後測把抽象的「學了嗎」轉化為具體行動，帶出教室繼續用。':
    ' rather than only watching. The "My AI task card" post-assessment turns the abstract question of whether they learned into something concrete they can carry out of the room.',

  /* ── 文獻 ── */
  '延伸閱讀': 'Further reading',
  '關鍵文獻 & 資源': 'Key literature and resources',
  '以下為 BOPPPS / ISW 的主要學術與實務參考，按重要性排序。':
    'The main academic and practical references for BOPPPS and the ISW, most important first.',
  'ISW Handbook for Participants（最核心一手資料）':
    'ISW Handbook for Participants (the core primary source)',
  'BOPPPS Systematic Review（最廣範圍、2024 最新）':
    'BOPPPS systematic review (broadest scope, 2024)',
  '全文 →': 'Full text →',
  'Blended Learning + BOPPPS Meta-analysis（44 篇研究）':
    'Blended learning + BOPPPS meta-analysis (44 studies)',
  'PMC11344447, 2024. 結論：顯著優於傳統講課，特別在知識、技能、自主學習三面向。':
    'PMC11344447, 2024. Finding: significantly better than conventional lecturing, particularly on knowledge, skills and self-directed learning.',
  'PMC 全文 →': 'Full text on PMC →',
  'BOPPPS + OBE 在高等教育（Nature 旗下期刊）':
    'BOPPPS + OBE in higher education (a Nature-family journal)',
  'BOPPPS 在護理教育 Meta-analysis（20+ RCT 研究）':
    'BOPPPS in nursing education — meta-analysis of 20+ RCTs',
  'BOPPPS 在商業溝通課程': 'BOPPPS in a business communication course',
  'Zhang et al. (2023). SHS Web of Conferences, ICHESS 2023. 非 STEM 領域應用案例。':
    'Zhang et al. (2023). SHS Web of Conferences, ICHESS 2023. An application outside STEM.',
  'U of Saskatchewan BOPPPS 實務指南':
    'University of Saskatchewan — practical BOPPPS guide',
  '含各模組詳細說明、設計工具和範本，適合教師直接使用。':
    'Detailed notes on each component, plus tools and templates ready to use.',
  '開啟 →': 'Open →',
  'McMaster University BOPPPS 框架': 'McMaster University — the BOPPPS framework',
  '含教案模板下載，可直接套用。': 'Includes a downloadable lesson-plan template.',
  'SJSU eCampus — BOPPPS 線上教學系列文':
    'SJSU eCampus — BOPPPS for online teaching (article series)',
  '詳細說明每個模組如何應用在線上課程設計（2019）。第 1 篇（Bridge-In）已被站方移除，這裡直接從第 2 篇進去，站內可再往 Part 3、4 走。':
    'How each component applies to online course design (2019). Part 1 (bridge-in) was removed by the site, so this link starts at part 2; parts 3 and 4 follow from there.',
  '系列文章 →': 'The series →',
  'ISW Network 官方網站（2025-08 存檔）': 'ISW Network official site (archived 2025-08)',
  '全球 ISW 活動查詢、Facilitator 認證資訊。官方站 iswnetwork.ca 自 2026-08 起源站無回應（網域仍有效，應為主機問題），這裡先接 Internet Archive 的 2025-08 快照；官方站恢復後可改回。':
    'ISW events worldwide and facilitator certification. The official site at iswnetwork.ca has not responded since August 2026 — the domain is still valid, so it looks like a hosting problem — and this link goes to the Internet Archive snapshot from August 2025 until it comes back.',
  'iswnetwork.ca（存檔）→': 'iswnetwork.ca (archived) →',
  '現行可用的權威說明：24 小時 ISW、40 小時 FDW 引導員認證（完成後發國際認可證書）與線上版 ISW 的差異。':
    'A currently reachable authoritative summary: the 24-hour ISW, the 40-hour FDW facilitator certification (internationally recognised on completion), and how the online ISW differs.',
  '整理自 ISW 文獻與學術 Meta-analysis · 基於 BOPPPS 教學設計框架':
    'Compiled from ISW literature and academic meta-analyses · built on the BOPPPS framework',
  '最後更新：2026-06-11 ·': 'Last updated 2026-06-11 ·',
};
