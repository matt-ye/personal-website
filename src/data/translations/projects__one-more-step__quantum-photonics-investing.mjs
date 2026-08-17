/*
 * 矽光子 × 量子電腦 × PQC 投資觀念地圖的英文對照表。
 * 來源頁：src/data/static-pages/projects__one-more-step__quantum-photonics-investing.html
 *
 * ⚠ 頁面的 TERMS 陣列裡已經有一個 en 欄位，但那是**縮寫的英文全稱**（CPO →
 *   Co-Packaged Optics），不是翻譯。cat／def／analogy／example 四個欄位都是中文。
 *   遷移時要另加 catEn／defEn／analogyEn／exampleEn，不要覆寫既有的 en。
 *
 * ⚠ 公司名、代號、標準編號（FIPS 203、CNSA 2.0）、論文題名一律不動。
 *   台廠中文名（上詮、聯亞、波若威、華星光、光聖…）保留原字並附代號——
 *   我沒有查證它們的官方英文名，不編造（同 atcc-judges 的處理）。
 *
 * 術語定調：矽光子 silicon photonics｜光互連 optical interconnect｜流片 tape-out｜
 *   代工 foundry｜賽道 track｜曝險 exposure｜純概念股 pure-play｜
 *   量子位元 qubit｜邏輯合成 logic synthesis｜繞線 routing｜鋪排 placement
 */
export const KEEP = ['上詮', '聯亞', '波若威', '華星光', '光聖', '梁峻瑋', '聯鈞', '全新', '眾達', '前鼎', '環宇', '中華資安國際', '安碁資訊', '中信關鍵半導體', '復華台灣科技優息', '台新臺灣IC設計動能', '富邦台灣核心半導體'];

export const MAP = {
  /* ── 導覽與 hero ── */
  '概念地圖': 'Concept map',
  '術語字卡': 'Term cards',
  '矽光子': 'Silicon photonics',
  '量子電腦': 'Quantum computing',
  'Deep Tech · 2026/6/25（2026/6 更新：光互連物理層）':
    'Deep tech · 25 June 2026 (updated June 2026: the optical-interconnect physical layer)',
  '矽光子 × 量子電腦 ×': 'Silicon photonics × quantum computing ×',
  '從 AppWorks AW#32、AW#33 的 PQC 與矽光子議題，加上與業界矽光子晶片專家交流趨勢時延伸整理出的觀念地圖：光、量子、密碼學如何在下一個十年交織成一個產業賽道，以及台股、美股的對應投資標的。':
    'A concept map built out of the PQC and silicon-photonics threads at AppWorks AW#32 and AW#33, extended through conversations with silicon-photonics chip specialists: how light, quantum and cryptography braid into a single industry track over the next decade, and which Taiwanese and US listings sit on it.',
  '矽光子 Silicon Photonics': 'Silicon photonics',
  '量子電腦 Quantum Computing': 'Quantum computing',
  '後量子密碼 PQC': 'Post-quantum cryptography (PQC)',
  '光子 EDA': 'Photonic EDA',

  /* ── 一條邏輯線 ── */
  '四個領域，一條邏輯線': 'Four fields, one causal chain',
  '業界一個常被提起的觀察是：矽光子若要發展長遠，除了資料中心的光傳輸應用，下一步是走向量子電腦；反過來說，量子電腦五大主流硬體路線中，也有三條本質上跟「操控光」有關。PQC、矽光子、量子電腦、光子 EDA 這四件事看似各自獨立，其實被同一條因果鏈串起來，且這條因果鏈有公開、可查證的依據（見文末 References）：量子電腦一旦具備足夠規模的容錯量子位元，就能用':
    'A observation you hear often in the industry: if silicon photonics is to go the distance, the step after data-centre optical transport is quantum computing. Read the other way, three of the five main quantum hardware routes are fundamentally about controlling light. PQC, silicon photonics, quantum computing and photonic EDA look like four separate things; in fact one causal chain runs through all of them, and that chain rests on public, checkable sources (see the references at the end). Once a quantum computer has enough fault-tolerant qubits, ',
  'Shor 演算法': "Shor's algorithm",
  '在多項式時間內分解大數，使 RSA、ECC 等現行公鑰加密失效；攻擊者不必等到那一天才行動，現在就能攔截、儲存加密資料，等量子電腦成熟後再回頭解密（HNDL，':
    ' factors large numbers in polynomial time, and RSA and ECC public-key encryption stop working. An attacker need not wait for that day: they can intercept and store encrypted data now and decrypt it later (harvest now, decrypt later — ',
  'CISA/NSA/NIST 已將此列為現實威脅':
    'CISA, the NSA and NIST all treat this as a present threat',
  '），因此美國政府已要求各機關依時程遷移至「後量子密碼」(PQC)（':
    '), which is why the US government has put agencies on a timetable to migrate to post-quantum cryptography (',
  '）。而要造出能執行 Shor 演算法的量子電腦，五大硬體路線中有三條（離子陷阱、光子、中性原子）的核心操控機制都是「光」（':
    '). And to build a quantum computer capable of running Shor, three of the five hardware routes — trapped ion, photonic and neutral atom — control their qubits with light (',
  '五大 qubit 路線綜述': 'a review of the five qubit routes',
  '）；而能在晶片或光路上精準產生、導引、調變光，正是矽光子產業多年來在資料中心通訊領域磨練出的工程能力——但矽光子產業裡，只有「通用 PIC 代工」這條分支才真正銜接得上量子硬體的客製化需求（細節見下方③），光子 EDA 設計工具則是讓這些光子電路「可被設計、可被驗證」的工具鏈。':
    '). Generating, steering and modulating light precisely on a chip or in an optical path is exactly the engineering the silicon photonics industry has spent years honing in data-centre communications — though only one branch of it, general-purpose PIC foundry, actually meets the customisation quantum hardware needs (see ③ below). Photonic EDA is the toolchain that makes those circuits designable and verifiable in the first place.',

  '矽光子：通用 PIC 代工': 'Silicon photonics: general-purpose PIC foundry',
  '開放式流片平台（對應卡 ③）': 'Open tape-out platforms (see card ③)',
  '光子 EDA 設計工具': 'Photonic EDA tools',
  '電路設計與驗證（對應卡 ④）': 'Circuit design and verification (see card ④)',
  '雷射 / 光學操控': 'Lasers and optical control',
  '精準產生、導引、調變光': 'Generating, steering and modulating light precisely',
  '這些是光基量子硬體的共同基礎': 'The shared foundation of all light-based quantum hardware',
  '光子': 'Photonic',
  '靠光：光子即 qubit': 'Light-based: the photon *is* the qubit',
  '離子陷阱': 'Trapped ion',
  '靠光：雷射驅動能階躍遷': 'Light-based: lasers drive the energy-level transitions',
  '中性原子': 'Neutral atom',
  '靠光：光鑷捕捉原子': 'Light-based: optical tweezers hold the atoms',
  '超導': 'Superconducting',
  '不靠光：微波脈衝': 'Not light: microwave pulses',
  '拓樸': 'Topological',
  '不靠光：拓樸準粒子': 'Not light: topological quasiparticles',
  '五條路線匯流到量子電腦': 'Five routes converging on the quantum computer',
  '具備執行 Shor 演算法所需的容錯量子位元規模（對應卡 ②）':
    'Enough fault-tolerant qubits to run Shor (see card ②)',
  '威脅：破解 RSA / ECC 公鑰加密': 'The threat: RSA and ECC public-key encryption break',
  'HNDL：現在攔截、未來解密': 'HNDL: intercept now, decrypt later',
  '應對：PQC 後量子密碼': 'The answer: post-quantum cryptography',
  'NIST FIPS 203/204/205/206 標準遷移（對應卡 ①）':
    'Migration to NIST FIPS 203/204/205/206 (see card ①)',
  '一張圖看懂彼此的關係：上層是使能技術，往下匯流到量子電腦，再向下延伸出加密威脅與 PQC 的應對。節點顏色對應下方四張概念卡（紫＝PQC、teal＝量子電腦、amber＝矽光子、pink＝光子 EDA），無對應卡片的節點為中性灰。':
    'The whole relationship in one diagram: enabling technologies at the top, converging on the quantum computer, then flowing down into the encryption threat and the PQC response. Node colours match the four concept cards below (purple = PQC, teal = quantum computing, amber = silicon photonics, pink = photonic EDA); nodes without a card are neutral grey.',

  /* ── 卡 ① PQC ── */
  '① PQC 後量子密碼': '① Post-quantum cryptography',
  'RSA 等公鑰加密的安全性，建立在「大數分解很難」這個假設上：傳統電腦只能一個一個組合慢慢試。量子電腦的':
    'The security of RSA and its relatives rests on one assumption: factoring large numbers is hard. A classical computer can only work through the combinations one at a time. A quantum computer\'s ',
  '則繞過暴力嘗試，利用量子疊加態同時探索一個週期函數的所有可能值，把「分解大數」轉換成「找週期」這個量子電腦能高效解的問題，使破解時間從天文數字降到可行範圍；而 Grover 演算法對 AES 等對稱式加密的影響小很多，只把安全強度打對折（用更長金鑰即可應對）。即使能破解 RSA 的量子電腦還沒出現，威脅已經存在：':
    ' sidesteps brute force entirely: superposition lets it explore every value of a periodic function at once, converting "factor this number" into "find this period" — something quantum computers solve efficiently. The time to break drops from astronomical to feasible. Grover\'s algorithm, by contrast, does far less damage to symmetric ciphers such as AES: it merely halves the effective security, which a longer key answers. And even though no RSA-breaking quantum computer exists yet, the threat already does: ',
  '是指攻擊者現在就攔截、儲存加密資料，等未來量子電腦成熟後再回頭解密——對國家機密、病歷、金融紀錄這類「保密期限本來就要拉很長」的資料來說，換密碼演算法是現在就要做的事，不是等量子電腦出現才開始。':
    ' means an attacker intercepts and stores your encrypted traffic today and decrypts it once the hardware matures. For state secrets, medical records and financial history — data whose confidentiality has to hold for decades anyway — changing algorithm is a thing to do now, not when the machine arrives.',
  'NIST 標準：FIPS 203(ML-KEM/Kyber)、204(ML-DSA/Dilithium)、205(SLH-DSA/SPHINCS+) 已定案，206(FN-DSA/FALCON) 仍在審定中，HQC 作為備援 KEM（2025/3 選定）':
    'NIST standards: FIPS 203 (ML-KEM/Kyber), 204 (ML-DSA/Dilithium) and 205 (SLH-DSA/SPHINCS+) are final; 206 (FN-DSA/FALCON) is still under review; HQC was selected as a backup KEM in March 2025',
  'NSA CNSA 2.0：2025-2027 起依系統類別陸續「優先採用」，2030/2033 強制全面換裝':
    'NSA CNSA 2.0: preferred adoption phases in by system class from 2025–2027, with full replacement mandatory by 2030/2033',
  '與 QKD（量子金鑰分發，需要專用硬體/光纖）是不同路線：PQC 是純軟體換算法，QKD 是硬體建網':
    'A different route from QKD (quantum key distribution, which needs dedicated hardware and fibre): PQC swaps algorithms in software, QKD builds a network in hardware',

  /* ── 卡 ② 量子硬體 ── */
  '② 量子電腦五大硬體路線': '② The five quantum hardware routes',
  '量子電腦需要「製備、操控、讀出」量子位元（qubit），五種主流硬體方案中，三種的核心操控機制都是「光」：':
    'A quantum computer has to prepare, control and read out qubits. In three of the five mainstream approaches, that control is done with light:',
  '超導 Superconducting': 'Superconducting',
  '（不靠光，靠微波脈衝操控）— IBM、Google、Rigetti':
    '(not light — microwave pulses) — IBM, Google, Rigetti',
  '離子陷阱 Trapped Ion': 'Trapped ion',
  '（靠光：用精準頻率的雷射脈衝驅動離子的電子能階躍遷，藉此操控與讀出量子態）— IonQ、Quantinuum':
    '(light: precisely tuned laser pulses drive transitions between the ion\'s electronic energy levels, which is how the state is both set and read) — IonQ, Quantinuum',
  '光子 Photonic': 'Photonic',
  '（靠光：光子本身就是 qubit，用分光器、相位調變器在晶片上引導光子做運算）— PsiQuantum、Xanadu、ORCA':
    '(light: the photon itself is the qubit, steered through beam splitters and phase modulators on chip) — PsiQuantum, Xanadu, ORCA',
  '中性原子 Neutral Atom': 'Neutral atom',
  '（靠光：用聚焦雷射形成的「光鑷」像鑷子一樣抓取、排列中性原子）— QuEra、Pasqal、Atom Computing':
    '(light: focused lasers form optical tweezers that pick up and arrange neutral atoms) — QuEra, Pasqal, Atom Computing',
  '拓樸 Topological': 'Topological',
  '（不靠光，靠特殊準粒子的拓樸態）— Microsoft Majorana':
    '(not light — the topological states of exotic quasiparticles) — Microsoft Majorana',
  '這三條靠光的路線共同需要的能力，是「在晶片或光路上精準產生、導引、調變光」——這正是矽光子產業在資料中心通訊領域已經磨練多年的工程能力。':
    'What those three share is the ability to generate, steer and modulate light precisely on a chip or in an optical path — exactly the engineering silicon photonics has spent years perfecting for data-centre communications.',

  /* ── 卡 ③ 矽光子 ── */
  '③ 矽光子 Silicon Photonics — 其實是兩條不同賽道':
    '③ Silicon photonics — actually two different tracks',
  '核心元件：': 'The core components: ',
  '波導 Waveguide': 'the waveguide',
  '（像電路板上的銅線一樣，把光侷限在一條路徑裡導引，差別是導的是光不是電流）、':
    ' (like copper on a board, confining light to one path — except it carries light rather than current); ',
  '微環諧振器 MRR': 'the micro-ring resonator (MRR)',
  '（一個環形波導，只允許特定波長的光在環內共振、被選擇性截留或濾除，像收音機的調頻電路）、':
    ' (a ring waveguide in which only one wavelength resonates, so it can be selectively trapped or filtered out — the tuning circuit of a radio); and ',
  '馬赫－曾德爾干涉儀 MZI': 'the Mach-Zehnder interferometer (MZI)',
  '（把光分成兩條路徑，其中一條用熱光、PN 接面電光或 GeSi 電吸收方式微調相位，再讓兩束光重新匯合，靠路徑差造成的干涉把相位變化轉成可偵測的強度訊號，類似兩條賽道長度被悄悄調整後，看誰先抵達）。矽是間接能隙材料不能自己發光，因此仍需混合整合 III-V 族雷射。':
    ' (light is split down two paths, one of them phase-shifted thermo-optically, through a PN junction, or by GeSi electro-absorption; recombining them turns that phase difference into a detectable change in intensity — as if two lanes of a racetrack were quietly re-measured and you watched who arrived first). Silicon is an indirect-bandgap material and cannot emit light on its own, so a III-V laser still has to be hybrid-integrated.',
  '必須先說清楚一個常被混為一談的誤區：「矽光子晶圓代工」其實分裂成兩條不同的路。':
    'One conflation needs clearing up first: "silicon photonics foundry" actually splits into two quite different roads.',
  '賽道 A · 通用型 PIC 代工（General-purpose PIC Foundry）': 'Track A · general-purpose PIC foundry',
  '：UMC + imec iSiPP300（2025/12/08 簽署授權，2026-2027 風險試產）、GlobalFoundries GF Fotonix、Tower Semiconductor PH18，都是開放式多專案晶圓（MPW）平台，客戶能拿來流片做收發器、感測、LiDAR、生醫光子等不同應用的客製 PIC——這條分支才是真正能延伸到「量子光子晶片」這類客製化、小量、多樣應用的代工模式，因為量子晶片需要的是製程彈性，而不是被綁定在單一系統架構裡。':
    ': UMC with imec\'s iSiPP300 (licence signed 8 December 2025, risk production 2026–2027), GlobalFoundries\' GF Fotonix, and Tower Semiconductor\'s PH18 are all open multi-project wafer (MPW) platforms. Customers tape out custom PICs on them for transceivers, sensing, LiDAR, biophotonics and more. This is the branch that genuinely extends to quantum photonic chips — customised, low volume, highly varied — because what a quantum chip needs is process flexibility, not to be locked into one system architecture.',
  '賽道 B · CPO / 光學互連（Co-Packaged Optics）': 'Track B · CPO / optical interconnect',
  '：台積電 COUPE 是把光引擎（PIC）與電子 IC 透過 SoIC/CoWoS 先進封裝整合在一起的方案，本質是解決「資料怎麼快速進出自家高效能運算封裝」這個特定問題，緊密綁定 TSMC 自己的先進封裝與 AI 算力生態系，並不是一個開放、誰都能拿來流片任意光子電路的代工平台。':
    ": TSMC's COUPE integrates the optical engine (a PIC) with electronic ICs through SoIC/CoWoS advanced packaging. It exists to solve one specific problem — how data gets in and out of TSMC's own high-performance computing package quickly — and it is tied tightly to TSMC's packaging and AI compute ecosystem. It is not an open platform anyone can tape out an arbitrary photonic circuit on.",
  '概念澄清：': 'To be clear:',
  '矽光子常被當成單一賽道討論，但 CPO 互連（賽道 B）服務的是「資料中心光通訊」這個現金流場景；真正通向量子運算/量子感測晶片的，是賽道 A「通用 PIC 代工」，因為量子光子晶片需要的是「客製化光子電路的代工彈性」，而非「先進封裝內的光 I/O 方案」。例如 GlobalFoundries 與 PsiQuantum 合作建造全規模光子量子電腦，採用的正是開放式晶圓代工模式而非先進封裝光 I/O 方案（':
    'Silicon photonics is usually discussed as one track, but CPO interconnect (track B) serves data-centre optical communications, which is where the cash flow is. The road to quantum computing and quantum sensing chips runs through track A, the general-purpose foundry, because a quantum photonic chip needs foundry flexibility for a bespoke circuit rather than an optical I/O scheme inside somebody\'s package. GlobalFoundries and PsiQuantum, for instance, are building a full-scale photonic quantum computer through exactly the open-foundry model, not through packaged optical I/O (',
  'GlobalFoundries 官方新聞稿': 'GlobalFoundries press release',

  /* ── 卡 ④ 光子 EDA ── */
  '④ 光子 EDA × 數位光學運算': '④ Photonic EDA × digital optical computing',
  '先了解 EDA 的由來：': 'Where EDA came from: ',
  '傳統矽晶片因為能持續 scaling，設計複雜度爆炸後催生了 EDA（電子設計自動化）。EDA 流程分兩段：前端的':
    'as silicon kept scaling, design complexity exploded and electronic design automation was born to manage it. The flow has two halves. At the front, ',
  '邏輯合成': 'logic synthesis',
  '——把 Verilog 描述語言像 compiler 一樣自動轉換成邏輯閘電路，輸出 GDS-II 格式；後端的':
    ' compiles a hardware description language such as Verilog into a gate-level circuit, much as a compiler would, and emits GDS-II. At the back, ',
  '實體設計': 'physical design',
  '——把邏輯閘在晶片上做 placement（鋪排）與 routing（繞線）。':
    ' places those gates on the die and routes the connections between them.',
  '光子 EDA 就是把這套流程搬到光子電路':
    'Photonic EDA is that same flow moved onto photonic circuits',
  '，用 MZI、波導、微環諧振器等光子元件取代電晶體。':
    ', with MZIs, waveguides and micro-ring resonators standing in for transistors.',
  '「光學運算（optical computing）」內部其實有兩種截然不同的範式——':
    'Optical computing itself contains two quite distinct paradigms. ',
  '類比光學運算': 'Analogue optical computing',
  '用光的連續物理量（振幅、相位）做矩陣乘法與 Fourier 運算，是 Lightmatter、Lightelligence 等 AI 加速器的路線；':
    ' uses continuous physical quantities — amplitude, phase — to do matrix multiplication and Fourier transforms, and is the route taken by AI accelerators such as Lightmatter and Lightelligence. ',
  '數位光學運算': 'Digital optical computing',
  '則用電光調變器與干涉儀組合出布林邏輯閘，在光子基材上實現傳統數位電路的功能。':
    ' assembles Boolean logic gates from electro-optic modulators and interferometers, implementing conventional digital circuits on a photonic substrate.',
  '真正的交集在這裡：數位光學運算電路本身也需要 EDA 工具':
    'The real intersection is this: digital optical circuits themselves need EDA tools',
  '——邏輯合成從邏輯需求自動合成光學閘電路，繞線最佳化讓訊號在 MZI mesh 上高效排布。這兩件事是疊合的，不是對立的。台大團隊近期三篇論文正落在這個交集上：':
    ' — logic synthesis to turn a Boolean requirement into an optical gate circuit, and routing optimisation to lay signals out efficiently across an MZI mesh. The two overlap rather than compete. Three recent papers from an NTU group sit squarely in that overlap:',
  '（ACM TODAES 2026）：光子 EDA 實體設計側——WDM 波分多工感知繞線，類比矽晶片後端的 routing 最佳化。':
    '(ACM TODAES 2026): the physical-design side of photonic EDA — WDM-aware routing, the analogue of back-end routing optimisation in a silicon chip.',
  '（DAC 2025）：同時跨兩側——光子 EDA 前端（邏輯合成：把布林需求轉換成光學閘電路，類比 logic synthesis compiler）＋ 數位光學運算（目標是在光子基材上實現數位邏輯）。':
    '(DAC 2025): spans both — the front end of photonic EDA (logic synthesis: turning Boolean requirements into optical gate circuits, the analogue of a synthesis compiler) plus digital optical computing (implementing digital logic on a photonic substrate).',
  '（ASP-DAC 2026）：同時跨兩側——光子 EDA 後端（在可程式化光子電路上用繞線演算法校正訊號品質）＋ 數位光學運算（在 MZI mesh 上執行數位計算）。':
    '(ASP-DAC 2026): also spans both — the back end of photonic EDA (using routing algorithms to correct signal quality on a programmable photonic circuit) plus digital optical computing (running digital computation on an MZI mesh).',
  '（以上三項定位依公開論文標題與摘要整理，正式定義以原始論文為準。）':
    '(These three characterisations are drawn from the published titles and abstracts; the papers themselves are authoritative.)',
  '類比光學運算路線：Lightmatter、Lightelligence（矩陣加速）、Celestial AI（已於 2025/12 被 Marvell 以最高 55 億美元收購）':
    'On the analogue route: Lightmatter, Lightelligence (matrix acceleration), and Celestial AI, acquired by Marvell in December 2025 for up to $5.5bn',
  '光子 EDA 商業工具：Synopsys OptoCompiler、Cadence Photonic IC Design；可程式化光子電路：iPronics':
    'Commercial photonic EDA: Synopsys OptoCompiler, Cadence Photonic IC Design. Programmable photonic circuits: iPronics',
  '主要學術發表場域：DAC、ICCAD、ASP-DAC、DATE':
    'Where the academic work appears: DAC, ICCAD, ASP-DAC, DATE',

  '一句話總結：': 'In one paragraph:',
  '矽光子裡真正練出「在晶片上精準操控光」這個底層能力、並且通用到能延伸至量子硬體的，是「通用 PIC 代工」這條賽道，而非綁定先進封裝的 CPO 互連賽道；這個能力正好是量子電腦三種主流路線（光子、離子陷阱、中性原子）共同需要的東西。PQC 則是「在量子電腦真正威脅到現有加密之前」必須先完成的軟體層遷移。光子 EDA 提供邏輯合成與實體設計工具，讓光子電路（包括數位光學運算電路）能系統化地被設計、最佳化與驗證。四者時間軸不同步，但互為因果。':
    'Within silicon photonics, the branch that has genuinely built the underlying capability — controlling light precisely on a chip — in a form general enough to reach quantum hardware is the general-purpose PIC foundry, not the CPO interconnect track bound to advanced packaging. That capability happens to be what three of the five quantum routes (photonic, trapped ion, neutral atom) all require. PQC is the software-layer migration that has to finish before quantum computers actually threaten today\'s encryption. Photonic EDA supplies the synthesis and physical-design tools that let photonic circuits — including digital optical ones — be designed, optimised and verified systematically. The four run on different clocks, but they cause one another.',

  /* ── 術語卡區 ── */
  'Part 1.5 · 術語': 'Part 1.5 · terminology',
  '術語學習字卡': 'Term flashcards',
  '點擊卡片展開完整定義、類比與範例。後續投資標的章節會直接使用這些術語。':
    'Click a card for the full definition, analogy and example. The holdings section below uses these terms directly.',

  /* ── Part 2 投資標的 ── */
  'Part 2 · 投資標的': 'Part 2 · what is listed',
  '矽光子 / 光互連 / CPO': 'Silicon photonics / optical interconnect / CPO',
  '資料中心 AI 算力需求帶動光互連與 CPO 的近期營收成長，是矽光子目前最具體的變現場景；但如 Part 1 所說，這不是唯一賽道。下表「賽道」欄位區分三條路線：':
    'Demand for AI compute in the data centre is driving near-term revenue in optical interconnect and CPO — the most concrete way silicon photonics currently makes money. But as Part 1 argued, it is not the only track. The "track" column below separates three:',
  'CPO 互連': 'CPO interconnect',
  '（綁定先進封裝、服務資料中心現金流）、':
    ' (tied to advanced packaging, serving data-centre cash flow); ',
  '通用 PIC 代工': 'general-purpose PIC foundry',
  '（開放式流片平台，較有機會延伸到量子光子晶片），以及這次新增的':
    ' (open tape-out platforms, with a better chance of reaching quantum photonic chips); and, new in this revision, ',
  '光纖/連接器物理層': 'the fibre and connector physical layer',
  '（光真正傳輸與耦合進晶片的最底層——光纖、纜線、連接器、光纖陣列單元 FAU）。':
    ' (the very bottom, where light actually travels and couples into the chip — fibre, cable, connectors, and the fibre array unit).',
  '2026 年的關鍵訊號：輝達把錢砸進「光」。':
    'The signal of 2026: Nvidia is pouring money into light.',
  '自 2026/3 起，Nvidia 在半年內對矽光子／光互連投入':
    'Since March 2026, Nvidia has committed ',
  '逾 65 億美元': 'over $6.5bn',
  '，這條資本軌跡本身就是上面那條因果鏈最有力的市場佐證——當銅線互連的功耗與頻寬撐不住 AI 算力擴張，光成為唯一解，而且投資對象從「晶片層」一路延伸到「光纖物理層」：':
    ' to silicon photonics and optical interconnect inside six months. That capital trail is the strongest market evidence for the chain above: once copper interconnect can no longer carry the power and bandwidth AI compute demands, light is the only answer — and the money has run all the way from the chip layer down to the fibre itself:',
  'Coherent (COHR) 投資 20 億美元（普通股）＋ Lumentum (LITE) 20 億美元（A 系列可轉換特別股）':
    '$2bn into Coherent (COHR) in common stock, and $2bn into Lumentum (LITE) in Series A convertible preferred',
  'Marvell (MRVL) 20 億美元（A 系列可轉換特別股）＋ NVLink Fusion 整合':
    '$2bn into Marvell (MRVL) in Series A convertible preferred, plus NVLink Fusion integration',
  'Corning (GLW) 最高約 32 億美元（5 億美元認股權證＋多年期採購協議），將美國光連接製造產能拉到':
    'Up to roughly $3.2bn into Corning (GLW) — a $500m warrant plus a multi-year purchase agreement — taking US optical connectivity manufacturing capacity to ',
  '10 倍': '10×',
  '、光纖產能 +50%，於北卡與德州新建 3 廠':
    ' and fibre capacity up 50%, with three new plants in North Carolina and Texas',
  '另參與 Ayar Labs（光互連 chiplet）5 億美元 E 輪':
    'Also participated in Ayar Labs\' $500m Series E (optical interconnect chiplets)',
  '值得注意的是：前三筆都還在「晶片／模組／雷射」層，第四筆 Corning 才首度把投資延伸到':
    'Worth noticing: the first three all sit at the chip, module and laser layer. The Corning investment is the first to reach ',
  '光纖與連接器這個物理層': 'the physical layer of fibre and connectors',
  '——這正是本文這次擴充要補上的一塊。':
    ' — which is exactly the piece this revision adds.',
  '下圖把光互連的供應鏈由下而上分層，看 Corning 與既有公司各自站在哪一層：物理層（光纖／玻璃／連接器）→ 耦合層（FAU／edge coupler）→ 晶片層（PIC／光引擎）→ 封裝層（CPO）→ 系統層（交換器）。':
    'The diagram below stacks the optical interconnect supply chain from the bottom up, showing where Corning and the incumbents each sit: physical layer (fibre, glass, connectors) → coupling layer (FAU, edge coupler) → chip layer (PIC, optical engine) → packaging layer (CPO) → system layer (switches).',
  '系統層 · 交換器 / AI Factory': 'System layer · switches / AI factory',
  'Nvidia Spectrum-X / Quantum-X CPO 交換器':
    'Nvidia Spectrum-X and Quantum-X CPO switches',
  '封裝層 · CPO 共同封裝': 'Packaging layer · co-packaged optics',
  '把光引擎與電子 IC 封在一起（台積電 COUPE）':
    'Optical engine packaged together with the electronic IC (TSMC COUPE)',
  '晶片層 · PIC / 光引擎': 'Chip layer · PIC / optical engine',
  '通用 PIC 代工：GlobalFoundries、聯電、Tower':
    'General-purpose PIC foundries: GlobalFoundries, UMC, Tower',
  '光要從光纖「耦合」進晶片': 'Light has to couple from fibre into the chip',
  '耦合層 · FAU / Edge Coupler': 'Coupling layer · FAU / edge coupler',
  '光纖陣列、可拆卸連接器：Corning GlassBridge、上詮':
    'Fibre arrays and detachable connectors: Corning GlassBridge, 上詮 (3363)',
  '物理層 · 光纖 / 玻璃 / 纜線': 'Physical layer · fibre / glass / cable',
  '多芯光纖 MCF、抗彎光纖：Corning（輝達 2026/5 投資對象）':
    'Multicore and bend-insensitive fibre: Corning (which Nvidia invested in, May 2026)',
  '由下而上：光在最底層的光纖／玻璃裡傳輸，經 FAU／edge coupler 耦合進矽光子晶片（PIC），再透過 CPO 封裝接上交換器系統。文章原本詳述的是中上層（PIC、CPO、交換器），這次補上最底下兩層的物理層與耦合層。':
    'Bottom to top: light travels through fibre and glass at the base, couples into the silicon photonic chip through an FAU or edge coupler, and reaches the switch system through CPO packaging. The article originally covered the upper layers — PIC, CPO, switches — and this revision fills in the two beneath them.',

  /* ── 表格欄位 ── */
  '美股': 'US listings',
  '公司': 'Company',
  '代號': 'Ticker',
  '賽道': 'Track',
  '角色 / 定位': 'Role',
  'CPO 與光引擎龍頭供應商之一，與輝達/超微等資料中心客戶深度合作':
    'One of the leading CPO and optical-engine suppliers, working closely with data-centre customers including Nvidia and AMD',
  '推動 CPO 導入自家 GPU 互連架構（如 Quantum-X / Spectrum-X 交換器），帶動整條供應鏈需求':
    'Driving CPO into its own GPU interconnect architecture (Quantum-X, Spectrum-X switches), pulling the whole supply chain with it',
  '資料中心互連 ASIC/DSP，2025/12 宣布收購 Celestial AI（光子互連 IP，2026/2 完成）強化布局':
    'Data-centre interconnect ASICs and DSPs; announced the acquisition of Celestial AI (photonic interconnect IP) in December 2025, completed February 2026',
  '網通設備龍頭，矽光子收發模組大客戶與布局者':
    'The networking equipment leader — both a major customer for silicon photonic transceivers and a player in its own right',
  '光通訊網路設備與相關元件': 'Optical networking equipment and components',
  '雷射與光學元件，收購 Finisar 後成為光收發模組重要供應商':
    'Lasers and optical components; became a major transceiver supplier after acquiring Finisar',
  '光學元件與模組，資料中心與電信兩用':
    'Optical components and modules, serving both data centre and telecom',
  '垂直整合光收發模組/雷射供應商，800G 模組 2026Q1 放量':
    'Vertically integrated transceiver and laser supplier; 800G modules ramped in Q1 2026',
  '光子互連平台新創（已上市），主打光引擎整合方案':
    'A photonic interconnect platform startup, now listed, focused on optical engine integration',
  '電光聚合物（EO polymer）調變器材料技術新創，授權／材料平台模式，與 Tower 等代工廠合作整合進矽光子平台':
    'An electro-optic polymer modulator materials startup running a licensing and materials-platform model, integrating into silicon photonics platforms with foundries such as Tower',
  '高速互連 IC（含光相關 DSP/SerDes），AI 資料中心受惠股':
    'High-speed interconnect ICs including optical DSP and SerDes; a beneficiary of AI data-centre build-out',
  'PCIe/CXL Retimer 與智慧連接模組，資料中心互連生態系':
    'PCIe/CXL retimers and smart connectivity modules within the data-centre interconnect ecosystem',
  '類比與光通訊半導體，LPO（線性直驅光學）技術供應商':
    'Analogue and optical communications semiconductors; a supplier of linear pluggable optics (LPO)',
  '矽光子研發資歷最久，2023 年將可插拔光收發模組業務出售予 Jabil（2024 為內部 IPS 部門整併進 DCAI，非 2025 撤資）':
    'The longest track record in silicon photonics R&D; sold its pluggable transceiver business to Jabil in 2023 (the 2024 change was an internal reorganisation folding IPS into DCAI, not a 2025 exit)',
  'GF Fotonix 為開放式矽光子代工平台，官方明確列出資料中心互連、光學網路、光運算、FTTH、CPO 等多元應用場景，是少數可單獨流片的通用 PIC 平台；2025/9 與 Corning 合作，將其 GlassBridge 玻璃波導 edge-coupler 整合進 GF Fotonix（物理層↔通用 PIC 代工的交叉點）':
    'GF Fotonix is an open silicon photonics foundry platform, with data-centre interconnect, optical networking, optical computing, FTTH and CPO all listed officially as target applications — one of the few general-purpose PIC platforms you can tape out on independently. In September 2025 it partnered with Corning to integrate the GlassBridge glass-waveguide edge coupler into GF Fotonix, the crossing point between the physical layer and the general-purpose foundry',
  '光互連最底層的玻璃／光纖／連接器供應商：多芯光纖 MCF（同 125μm 包層 4 核心，單纖 4× 容量）、可拆卸光纖陣列單元 FAU 連接器、端到端 CPO 系統、GlassBridge 玻璃波導 edge-coupler（相容 GF 矽光子 v-groove）。2026/5 獲 Nvidia 投資擴產':
    'The glass, fibre and connector supplier at the very bottom of optical interconnect: multicore fibre (four cores in a standard 125μm cladding, 4× capacity per fibre), detachable fibre array unit connectors, end-to-end CPO systems, and the GlassBridge glass-waveguide edge coupler (compatible with GF\'s silicon photonics v-groove). Received Nvidia investment to expand capacity in May 2026',
  '未公開上市但常被提及：Lightmatter、Ayar Labs（光互連 chiplet，獲超微/輝達等策略投資）。':
    'Frequently mentioned but still private: Lightmatter, and Ayar Labs (optical interconnect chiplets, with strategic investment from AMD and Nvidia).',

  '台股': 'Taiwan listings',
  '台積電': 'TSMC',
  'COUPE 是把光引擎與電子 IC 透過 SoIC/CoWoS 封裝整合的光 I/O 方案，綁定自家先進封裝與 AI 算力生態系，非開放式 PIC 代工平台':
    'COUPE is an optical I/O scheme integrating the optical engine with electronic ICs through SoIC/CoWoS packaging. It is bound to TSMC\'s own advanced packaging and AI compute ecosystem, not an open PIC foundry platform',
  '聯電': 'UMC',
  '2025/12/08 與 imec 簽署 iSiPP300 矽光子製程授權，屬開放式 MPW 平台，目標 2026-2027 風險試產':
    'Signed the iSiPP300 silicon photonics process licence with imec on 8 December 2025 — an open MPW platform, targeting risk production in 2026–2027',
  '日月光': 'ASE',
  'CPO 互連／封裝': 'CPO interconnect / packaging',
  '先進封裝大廠，CPO 模組封裝測試潛在受惠者（下游封測，兩條賽道皆可能受惠）':
    'A major advanced packaging house and a potential beneficiary of CPO module assembly and test — downstream OSAT, and exposed to both tracks',
  '鴻海': 'Hon Hai',
  '透過子公司／策略佈局切入 AI 資料中心光通訊模組組裝':
    'Entering AI data-centre optical module assembly through subsidiaries and strategic positioning',
  '廣達': 'Quanta',
  'AI 伺服器與資料中心系統整合，光互連模組導入的下游應用方':
    'AI server and data-centre system integration — the downstream adopter of optical interconnect modules',
  '光纖陣列單元 FAU／光連接器，與 Corning 同屬物理層；FAU 出貨放大、握多項矽光專利，LPO FAU 製程難度高（最貼近本文新增物理層的台廠）':
    'Fibre array units and optical connectors — the same physical layer as Corning. FAU shipments are scaling, it holds several silicon-photonics patents, and LPO-grade FAUs are difficult to make. The Taiwanese name closest to the physical layer this revision adds',
  '上游光源': 'Upstream light source',
  '磊晶／雷射二極體（III-V 族），矽光子無法自體發光所需的光源上游':
    'Epitaxy and laser diodes (III-V) — the upstream light source silicon photonics needs, since silicon cannot emit on its own',
  '光收發模組，黃仁勳 GTC 點名為光收發模組平台合作夥伴':
    'Optical transceivers; named by Jensen Huang at GTC as a transceiver platform partner',
  '光收發模組／矽光封裝相關': 'Optical transceivers and silicon photonics packaging',
  '光纖連接器／纜線，美系資料中心客戶，毛利率長期維持 60% 以上':
    'Fibre connectors and cable, with US data-centre customers; gross margin has held above 60% for years',
  '純度提醒：': 'A note on purity:',
  '上表台廠多被市場歸類為「矽光子／CPO 概念股」，但各家矽光子相關營收佔比、認列時程差異大，部分尚未經公開財報充分驗證（資料多來自媒體報導與法人估計，見文末 References）。請以「題材曝險」而非「純概念股」看待，個股佔比與時程務必自行查證。其餘常被點名者尚有聯鈞、全新(2455)、眾達-KY、前鼎、環宇-KY 等，定位與上游磊晶／模組重疊度高，暫不逐一列入。':
    'The Taiwanese names above are widely labelled silicon photonics or CPO plays, but the share of revenue actually attributable to silicon photonics, and when it will be recognised, varies enormously — and some of it has not been adequately verified in published financials (much of it comes from media reports and sell-side estimates; see the references). Treat these as thematic exposure, not pure-plays, and check the percentages and timelines yourself. Others frequently named — 聯鈞, 全新 (2455), 眾達-KY, 前鼎, 環宇-KY — overlap heavily with upstream epitaxy and modules and are not listed individually here.',

  /* ── 量子電腦標的 ── */
  '純硬體玩家多為小型股、波動大；大型科技公司則以雲端服務（QaaS）形式間接參與。台股目前沒有真正的量子電腦純概念股，多為材料/設備供應鏈的間接受惠者。':
    'The pure hardware players are mostly small caps and volatile; the large technology companies participate indirectly, through quantum-as-a-service. Taiwan has no genuine quantum computing pure-play at all — only indirect beneficiaries in materials and equipment.',
  '硬體路線 / 定位': 'Hardware route / position',
  '離子陷阱，純量子電腦上市公司代表': 'Trapped ion; the representative listed quantum pure-play',
  '量子退火（非通用閘式量子電腦）': 'Quantum annealing, not a universal gate-model machine',
  '光子（小型，投機性高）': 'Photonic; small and speculative',
  '量子加密 / PQC 解決方案（跨入下一節主題）':
    'Quantum-safe encryption and PQC solutions (which spills into the next section)',
  '超導，量子雲端服務龍頭之一': 'Superconducting; one of the leaders in quantum cloud services',
  '超導（Willow 晶片），內部研發為主': 'Superconducting (the Willow chip), largely internal R&D',
  '拓樸路線（Majorana）+ Azure Quantum 雲端服務':
    'The topological route (Majorana), plus Azure Quantum cloud services',
  '離子陷阱，Quantinuum 已於 2026/6/4 獨立上市（代號 QNT）':
    'Trapped ion; Quantinuum listed separately on 4 June 2026 under QNT',
  '不直接做量子硬體，但 CUDA-Q 平台與量子-古典混合運算生態系是重要間接受惠者':
    'Does not build quantum hardware, but CUDA-Q and the hybrid quantum-classical ecosystem make it a significant indirect beneficiary',
  '未公開上市：PsiQuantum、Xanadu（規劃 SPAC 上市）、QuEra、Pasqal、Atom Computing。':
    'Still private: PsiQuantum, Xanadu (planning a SPAC listing), QuEra, Pasqal, Atom Computing.',
  '截至目前，台股': 'As things stand, Taiwan ',
  '沒有純量子電腦概念股': 'has no quantum computing pure-play',
  '；主要是低溫設備、特殊材料、半導體製程供應鏈在量子硬體興起後可能間接受惠（與既有半導體供應鏈標的重疊度高，暫無獨立可辨識的台廠量子電腦標的可單獨列出）。':
    '. What exists is cryogenic equipment, specialty materials and the semiconductor process supply chain, which may benefit indirectly as quantum hardware grows — and those overlap so heavily with existing semiconductor names that no separately identifiable Taiwanese quantum listing can be singled out.',

  /* ── PQC 標的 ── */
  'PQC / 量子安全資安': 'PQC and quantum-safe security',
  '這個賽道的特性是：多數真正做 PQC 演算法與金鑰管理的公司仍是私有公司，目前可投資的多是「把 PQC 當作既有資安/網路產品的升級項目」的上市公司。':
    'The character of this track: most companies genuinely building PQC algorithms and key management are still private. What is investable today is mostly listed companies treating PQC as an upgrade to an existing security or networking product.',
  '網路資安平台，逐步導入 PQC 加密模組':
    'A network security platform, phasing in PQC encryption modules',
  '端點資安，量子威脅情資與防護路線圖':
    'Endpoint security, with a quantum threat intelligence and protection roadmap',
  '已大規模在邊緣網路部署後量子加密（PQC TLS）':
    'Has deployed post-quantum TLS across its edge network at scale',
  'CDN/邊緣安全，PQC 相關白皮書與服務':
    'CDN and edge security, with PQC white papers and services',
  'z系列主機與雲端服務內建 PQC 支援，亦是 NIST 標準主要貢獻者之一':
    'PQC support built into z-series mainframes and cloud services; also a major contributor to the NIST standards',
  '量子加密金鑰分發服務（QaaS 形式，非典型硬體 QKD）':
    'Quantum key distribution offered as a service, rather than conventional QKD hardware',
  '歐股 HO.PA（無美股 ADR 純粹對應）':
    'Listed in Europe as HO.PA; no clean US ADR equivalent',
  'HSM／金鑰管理硬體大廠，PQC 遷移方案供應商':
    'A major HSM and key-management hardware vendor, and a supplier of PQC migration solutions',
  '未公開上市：SandboxAQ（Alphabet 衍生）、DigiCert、Entrust — 均為 PQC 憑證/金鑰管理的重要私有公司。':
    'Still private: SandboxAQ (spun out of Alphabet), DigiCert and Entrust — all significant in PQC certificates and key management.',
  '資安服務整合商，逐步將後量子密碼納入服務項目':
    'A security services integrator, gradually folding post-quantum cryptography into its offering',
  '資安監控服務，潛在 PQC 升級需求受惠者':
    'Security monitoring services; a potential beneficiary of PQC upgrade demand',
  '台廠在 PQC 演算法本身的角色非常有限（這是密碼學標準制定與軟體層的賽道），主要機會在「資安服務商導入 PQC 後的升級銷售」與「硬體安全模組（HSM）/ 安全晶片」供應鏈的間接受惠。':
    'Taiwanese companies play a very limited role in PQC algorithms themselves — that track belongs to standards bodies and software. The opportunity is indirect: upgrade sales once security integrators adopt PQC, and the HSM and secure-element supply chain.',

  /* ── ETF ── */
  '主題型 ETF（分散持股）': 'Thematic ETFs (diversified)',
  '若不想單押個股波動，主題 ETF 是更分散的入場方式，但要注意持股中「真正的純概念股」佔比往往不高。':
    'If you would rather not carry single-stock volatility, a thematic ETF spreads the entry — but note that genuine pure-plays are usually a small share of the holdings.',
  '美股 ETF': 'US ETFs',
  '主題': 'Theme',
  '量子運算 + 機器學習（本篇量子主題最相關的分散標的）':
    'Quantum computing plus machine learning — the diversified holding closest to this article\'s quantum theme',
  '自動化/機器人為主，含少量量子曝險，與本篇主題關聯較弱':
    'Mostly automation and robotics with a little quantum exposure; only loosely related here',
  '半導體供應鏈，間接含矽光子相關公司':
    'The semiconductor supply chain, which indirectly contains silicon photonics names',
  '半導體龍頭股，間接曝險': 'Semiconductor large caps; indirect exposure',
  '台股 ETF': 'Taiwan ETFs',
  '半導體供應鏈，間接曝險': 'Semiconductor supply chain; indirect exposure',
  '科技股優息，間接曝險': 'High-dividend technology; indirect exposure',
  '聚焦台灣 IC 設計，半導體供應鏈間接曝險':
    'Focused on Taiwanese IC design; indirect semiconductor supply-chain exposure',
  '台灣核心半導體（台積電、聯發科權重高），間接曝險':
    'Core Taiwanese semiconductors, heavily weighted to TSMC and MediaTek; indirect exposure',
  '台股目前沒有「矽光子／量子／PQC」專屬主題 ETF，上表為半導體或科技類 ETF 的間接曝險選項，純度低於美股的 QTUM。（註：美股 QPUX 為 2 倍槓桿的每日做多純量子 ETF，波動與耗損風險高，不屬於本篇「分散持股」用途，故不列入。）':
    'Taiwan has no ETF dedicated to silicon photonics, quantum or PQC. The table above lists semiconductor and technology ETFs offering indirect exposure, at lower purity than QTUM in the US. (Note: QPUX in the US is a 2× daily leveraged long quantum ETF — high volatility and decay risk, and not what this section means by diversified, so it is not included.)',

  /* ── 附註與參考 ── */
  '附註': 'Notes',
  '資料範圍與聲明': 'Scope and disclaimer',
  '2026/6 更新：': 'June 2026 update:',
  '本次擴充已將台股被動光元件／物理層供應鏈（上詮、聯亞、波若威、華星光、光聖等）依公開報導與法人估計納入上方台股表格，並新增「光纖/連接器物理層」賽道。惟各家矽光子營收佔比與認列時程仍有不確定性，資料多來自媒體與法人，請以「題材曝險」看待、自行查證；聯鈞、全新、眾達-KY、前鼎、環宇-KY 等與上游磊晶／模組重疊度高者暫未逐一列入。':
    'This revision adds Taiwan\'s passive optical component and physical-layer supply chain (上詮, 聯亞, 波若威, 華星光, 光聖 and others) to the table above, drawn from public reporting and sell-side estimates, together with a new fibre-and-connector physical layer track. The share of revenue attributable to silicon photonics and when it will be recognised remain uncertain, and much of the data comes from media and analysts — treat it as thematic exposure and verify it yourself. Names overlapping heavily with upstream epitaxy and modules (聯鈞, 全新, 眾達-KY, 前鼎, 環宇-KY) are not itemised.',
  '本文為產業研究筆記整理，非投資建議，個股與 ETF 之配置請自行評估風險與盡職調查。':
    'These are industry research notes, not investment advice. Assess the risk and do your own due diligence on any individual holding or ETF.',
  '致謝': 'Acknowledgement',
  '感謝 梁峻瑋博士 提供專業建議與校訂方向。':
    'With thanks to Dr 梁峻瑋 for expert advice and direction on the corrections.',
  '參考資料': 'References',
  '以下連結為撰文時查證所用之主要來源，建議讀者自行開啟確認最新內容。':
    'The main sources checked while writing. Readers are encouraged to open them and confirm the current position.',
  'PQC / 密碼學標準': 'PQC and cryptographic standards',
  'NIST 選定 HQC 為備援 KEM（2025/3） —': 'NIST selects HQC as a backup KEM (March 2025) —',
  'NIST, "Post-Quantum Cryptography FAQs"（Shor 演算法破解 RSA/ECC、Grover 演算法僅二次加速） —':
    'NIST, "Post-Quantum Cryptography FAQs" (Shor breaks RSA/ECC; Grover gives only a quadratic speed-up) —',
  'CISA / NSA / NIST, "Quantum-Readiness: Migration to Post-Quantum Cryptography" 聯合 factsheet（HNDL 為官方認定之現實威脅） —':
    'CISA / NSA / NIST joint factsheet, "Quantum-Readiness: Migration to Post-Quantum Cryptography" (HNDL officially recognised as a present threat) —',
  'OMB, "M-23-02: Migrating to Post-Quantum Cryptography"（美國政府機關遷移時程） —':
    'OMB, "M-23-02: Migrating to Post-Quantum Cryptography" (the US federal migration timetable) —',
  'NSA, "Quantum Computing and Post-Quantum Cryptography FAQs"（PQC 與 QKD 路線差異，NSA 不背書 QKD） —':
    'NSA, "Quantum Computing and Post-Quantum Cryptography FAQs" (how PQC and QKD differ; the NSA does not endorse QKD) —',
  '量子硬體與光子量子': 'Quantum hardware and photonic quantum',
  '"An elementary review on basic principles and developments of qubits for quantum computing," Nano Convergence（Springer，列舉五大 qubit 硬體路線） —':
    '"An elementary review on basic principles and developments of qubits for quantum computing," Nano Convergence (Springer — sets out the five qubit routes) —',
  'National Academies, "Manipulating Quantum Systems"（離子陷阱以雷射操控與讀出量子態） —':
    'National Academies, "Manipulating Quantum Systems" (trapped ions controlled and read out with lasers) —',
  '"A tweezer array with 6,100 highly coherent atomic qubits," Nature（中性原子以光鑷操控） —':
    '"A tweezer array with 6,100 highly coherent atomic qubits," Nature (neutral atoms held by optical tweezers) —',
  'GlobalFoundries, "PsiQuantum and GlobalFoundries to Build the World\'s First Full-scale Quantum Computer"（矽光子／PIC 製造是光子量子電腦量產的關鍵） —':
    'GlobalFoundries, "PsiQuantum and GlobalFoundries to Build the World\'s First Full-scale Quantum Computer" (silicon photonics and PIC manufacturing as the key to producing photonic quantum computers at volume) —',
  '矽光子製程平台': 'Silicon photonics platforms',
  'UMC 官方新聞稿（2025/12/08） —': 'UMC press release, 8 December 2025 —',
  'Tower Semiconductor, PH18 製程平台公告 —': 'Tower Semiconductor, PH18 platform announcement —',
  '光互連物理層 / Nvidia 光子投資': 'Optical interconnect physical layer / Nvidia photonics investments',
  'Corning, "Corning To Launch AI Innovations in Fiber, Cable, and Connectivity at OFC 2026"（多芯光纖 MCF／CPO 系統） —':
    'Corning, "Corning To Launch AI Innovations in Fiber, Cable, and Connectivity at OFC 2026" (multicore fibre and CPO systems) —',
  '台股光通訊供應鏈（媒體報導／法人估計）':
    'Taiwan optical communications supply chain (media reports and sell-side estimates)',
  '今周刊, "上詮(3363)、波若威(3163)…矽光子與 CPO 台廠迎獲利爆發期"（2026/3） —':
    'Business Today (in Chinese), on 上詮 (3363), 波若威 (3163) and the earnings inflection for Taiwan\'s silicon photonics and CPO names (March 2026) —',
  '鉅亨網, "矽光族群抱團風光 波若威年漲近 3 倍 上詮封關寫新高"（2025 封關） —':
    'Anue (in Chinese), on the silicon photonics cluster — 波若威 up nearly 3× on the year, 上詮 closing 2025 at a high —',
  '財報狗新聞, "矽光子族群續創新高！聯亞、上詮、華星光…" —':
    'Statementdog News (in Chinese), on the silicon photonics group making new highs — 聯亞, 上詮, 華星光 —',
  '註：台股供應鏈段落之個股定位整理自上述媒體與法人報導，非經官方財報逐項核實，僅供題材理解，不構成投資建議。':
    'Note: the positioning of individual Taiwanese names above is compiled from those media and analyst reports, not verified line by line against audited financials. It is offered to help understand the theme, not as investment advice.',
  '產業併購 / 上市': 'M&A and listings',
  '光子 EDA / 學術來源': 'Photonic EDA and academic sources',
  '"Harrow: Synthesis of Optical Logic Circuits via Harmonic Mean and Integer Partition," DAC（2025）— 收錄於 ACM Digital Library':
    '"Harrow: Synthesis of Optical Logic Circuits via Harmonic Mean and Integer Partition," DAC (2025) — in the ACM Digital Library',
  '"DCPPC: Digital Computation in Programmable Photonic Circuits," ASP-DAC（2026, pp. 413–419）— 收錄於 ACM Digital Library':
    '"DCPPC: Digital Computation in Programmable Photonic Circuits," ASP-DAC (2026, pp. 413–419) — in the ACM Digital Library',
  '註：部分學術連結因發行方阻擋自動化存取，未能逐字覆核摘要原文，內容以可公開檢索之標題、作者、會議資訊與搜尋摘要為準，建議讀者自行開啟連結確認。':
    'Note: some publishers block automated access, so a few abstracts could not be verified word for word. What is stated here rests on publicly searchable titles, authors, venues and summaries — readers should open the links and confirm.',
  'One More Step · 葉淨維 Matt Ye — 把複雜的東西搞懂，然後寫下來。':
    'One More Step · Matt Ye — work out the complicated thing, then write it down.',

  /* ══ 術語字卡的資料（TERMS 陣列） ══ */
  '矽光子製程/平台': 'Silicon photonics process / platform',
  '把光收發引擎直接整合進交換器/處理器封裝內，而不是用外接的可插拔模組，藉此縮短電訊號傳輸距離、降低功耗。':
    'Integrating the optical transceiver engine inside the switch or processor package rather than using a pluggable module outside it, which shortens the electrical path and cuts power.',
  '把家裡的數據機從客廳搬進路由器機殼裡，訊號不用再跑一段長長的網路線。':
    'Moving the modem out of the living room and into the router\'s own case, so the signal no longer has to run down a long cable.',
  '輝達的 Quantum-X / Spectrum-X 交換器、Broadcom 的 CPO 交換器產品線都是資料中心導入 CPO 的代表案例。':
    "Nvidia's Quantum-X and Spectrum-X switches and Broadcom's CPO switch line are the representative data-centre deployments.",
  'Compact Universal Photonic Engine（TSMC 官方名稱）':
    'Compact Universal Photonic Engine (TSMC\'s official name)',
  '台積電的光子引擎封裝整合方案，把光子積體電路（PIC）與電子 IC 透過 SoIC/CoWoS 先進封裝堆疊在一起，解決高效能運算封裝的光 I/O 問題。':
    "TSMC's optical engine packaging scheme, stacking the photonic integrated circuit with electronic ICs through SoIC/CoWoS advanced packaging to solve optical I/O for high-performance computing packages.",
  '像把光纖網路的『轉接頭』直接焊死在主機板上，而不是留一個外接孔。':
    'Like soldering the fibre adapter directly onto the motherboard instead of leaving a socket on the outside.',
  '台積電在技術研討會上展示 COUPE 用於 HPC（高效能運算）的光子引擎異質整合方案。':
    'TSMC has demonstrated COUPE at technology symposia as a heterogeneous optical-engine integration scheme for HPC.',
  '光子元件/架構': 'Photonic component / architecture',
  '把雷射、調變器、波導、光偵測器等多個光學元件整合在同一塊晶片上的積體電路，是光子產業的『晶片』概念。':
    'An integrated circuit combining lasers, modulators, waveguides and photodetectors on one die — photonics\' equivalent of the chip.',
  '就像電子 IC 把電晶體整合在矽晶片上，PIC 是把『操控光』的元件整合在一塊晶片上。':
    'Where an electronic IC integrates transistors onto silicon, a PIC integrates the components that manipulate light.',
  '資料中心用的 400G/800G 同調光收發模組，核心就是一顆 PIC。':
    'At the heart of a 400G or 800G coherent data-centre transceiver is a PIC.',
  'Triangular and Hexagonal norm-based Timing-driven Optical routing with WDM-awareness（依論文標題整理，暫定）':
    'Triangular and Hexagonal norm-based Timing-driven Optical routing with WDM-awareness (reconstructed from the paper title; provisional)',
  '光子EDA': 'Photonic EDA',
  '台大團隊提出的演算法，用三角形與六角形的時序模型，解決晶片上光子互連的『波分多工感知繞線』問題，讓繞線結果更貼近實際訊號延遲。':
    'An algorithm from an NTU group using triangular and hexagonal timing models to solve WDM-aware routing for on-chip photonic interconnect, so the routing result tracks real signal delay more closely.',
  '像在設計捷運路網時，不只算『距離』，還要精準算出『不同班次（波長）共用同一條軌道時的實際通過時間』。':
    'Like planning a metro network where you cost not just distance but the real transit time when different services — different wavelengths — share a track.',
  '發表於 ACM TODAES（2026），屬於光子電路設計自動化（EDA）裡的繞線最佳化研究，而非製造光運算硬體本身。':
    'Published in ACM TODAES (2026). It is routing-optimisation research within photonic design automation, not the manufacture of optical computing hardware.',
  '光學邏輯電路合成演算法（依論文標題整理，暫定）':
    'An optical logic circuit synthesis algorithm (reconstructed from the paper title; provisional)',
  '用調和平均數與整數拆分法，把邏輯運算需求自動轉換成最佳化的光學邏輯電路結構，是光子電路的『邏輯合成』工具。':
    'Uses harmonic means and integer partition to turn a logic requirement automatically into an optimised optical logic circuit — logic synthesis for photonics.',
  '類似把一段程式碼自動編譯、最佳化成最精簡的電路圖，只是這裡的『電路』是光路。':
    'Rather like compiling code down to the leanest possible circuit diagram, except the circuit is optical.',
  '發表於 DAC（2025），是光子 EDA 工具鏈中『設計工具』的一環，不是運算晶片本身。':
    'Published at DAC (2025). It is part of the photonic EDA toolchain, not a computing chip.',
  'Digital Computation in Programmable Photonic Circuits（依論文標題整理，暫定）':
    'Digital Computation in Programmable Photonic Circuits (reconstructed from the paper title; provisional)',
  '在可程式化光子電路（MZI mesh）上實現數位邏輯運算的方法，並用自動繞線演算法校正、最大化通過特定可調單元的訊號品質。':
    'A method for running digital logic on a programmable photonic circuit (an MZI mesh), using automated routing to correct and maximise signal quality through particular tunable units.',
  '把一塊『萬用光學麵包板』透過軟體設定，組出不同的邏輯電路，而不是每次都重新流片做一顆新晶片。':
    'Configuring a universal optical breadboard in software to form different logic circuits, instead of taping out a new chip each time.',
  '發表於 ASP-DAC（2026），同時碰觸『電路合成』與『訊號校正』兩個 EDA 問題。':
    'Published at ASP-DAC (2026), touching both circuit synthesis and signal correction.',
  'Micro-Ring Resonator（微環諧振器）': 'Micro-ring resonator',
  '一個環形波導結構，只允許特定波長的光在環內共振、被選擇性截留或濾除，常用於調變或波長選擇。':
    'A ring waveguide in which only one wavelength resonates, so it can be selectively trapped or filtered — commonly used for modulation or wavelength selection.',
  '像收音機的調頻電路，只『鎖定』某一個頻率的訊號，其他頻率直接通過不受影響。':
    "Like a radio's tuning circuit: it locks onto one frequency and leaves the rest untouched.",
  '矽光子收發模組常用 MRR 做高密度波分多工（DWDM）的濾波與調變。':
    'Silicon photonic transceivers often use MRRs for filtering and modulation in dense WDM.',
  'Mach-Zehnder Interferometer（馬赫－曾德爾干涉儀）': 'Mach-Zehnder interferometer',
  '把一束光分成兩條路徑，其中一條路徑用熱光、電光或吸收效應微調相位，再讓兩束光重新匯合，相位差透過干涉轉換成強度變化，藉此編碼訊號。':
    'Splits a beam down two paths, shifts the phase of one thermo-optically, electro-optically or by absorption, then recombines them, so interference turns the phase difference into a change in intensity that encodes the signal.',
  '兩條賽道的長度被悄悄調整後，看誰先抵達終點線，抵達的時間差就是被編碼的訊號。':
    'Two lanes of a racetrack are quietly re-measured; who arrives first, and by how much, is the encoded signal.',
  '幾乎所有同調光收發模組與可程式化光子電路（MZI mesh）的核心調變元件都是 MZI。':
    'Nearly every coherent transceiver and programmable photonic circuit uses the MZI as its core modulating element.',
  '密碼學': 'Cryptography',
  '攻擊者現在就攔截、儲存加密資料，等未來量子電腦成熟後再回頭解密的威脅模型，被 NSA / NIST 列為現實威脅。':
    'The threat model in which an attacker intercepts and stores encrypted data now and decrypts it once quantum computers mature. The NSA and NIST both treat it as a present threat.',
  '小偷現在先把你家保險箱整個搬走，反正以後遲早會弄到能開鎖的工具。':
    'The thief carries off your whole safe today, confident that the tools to open it will turn up eventually.',
  '國家機密、病歷、金融長期紀錄這類『保密期限本來就很長』的資料，是 HNDL 攻擊的主要目標，也是現在就要導入 PQC 的原因。':
    'State secrets, medical records and long-lived financial history — data that has to stay confidential for decades — are the prime targets, and the reason to adopt PQC now.',
  'Module-Lattice-Based Key-Encapsulation Mechanism（FIPS 203，前身為 Kyber）':
    'Module-Lattice-Based Key-Encapsulation Mechanism (FIPS 203, formerly Kyber)',
  'NIST 在 2024/8 正式定案的後量子金鑰交換演算法，取代 RSA / ECDH 用來在雙方之間安全地建立共用金鑰。':
    'The post-quantum key exchange NIST finalised in August 2024, replacing RSA and ECDH for establishing a shared key between two parties.',
  '像把過去『靠質因數分解的密碼鎖』換成『靠格數學難題的密碼鎖』，後者目前還沒有已知的量子捷徑可破解。':
    'Swapping a lock whose security rests on factoring for one that rests on hard lattice problems — for which no quantum shortcut is currently known.',
  'Google 已在 Chrome 與部分服務中部署 ML-KEM 做後量子金鑰交換。':
    'Google has deployed ML-KEM for post-quantum key exchange in Chrome and some of its services.',
  'NSA 公布的下一代密碼演算法清單，涵蓋對稱加密（AES-256）、後量子金鑰交換（ML-KEM）與簽章（ML-DSA、SLH-DSA），並訂出國安系統的換裝時程。':
    "The NSA's list of next-generation algorithms — symmetric encryption (AES-256), post-quantum key exchange (ML-KEM) and signatures (ML-DSA, SLH-DSA) — with a replacement timetable for national security systems.",
  '像政府機關公告的『新版保險箱規格清單』，並規定各機關幾年內一定要換裝完畢。':
    'A government-issued specification for the new safes, with a deadline by which every department must have swapped theirs.',
  '美國國安系統依 CNSA 2.0 時程，2025-2027 起依系統類別陸續優先採用，2030/2033 強制全面換裝。':
    'Under CNSA 2.0, US national security systems phase in preferred adoption by system class from 2025–2027, with full replacement mandatory by 2030/2033.',
  'United Microelectronics Corporation（聯華電子）': 'United Microelectronics Corporation (UMC)',
  '台灣半導體晶圓代工廠，2025/12/08 與 imec 簽署 iSiPP300 矽光子製程授權，跨入通用 PIC 代工領域。':
    'A Taiwanese wafer foundry that licensed imec\'s iSiPP300 silicon photonics process on 8 December 2025, stepping into general-purpose PIC foundry work.',
  '原本專注做電子晶片代工的工廠，新增了一條『做光晶片』的產線。':
    'A fab that made electronic chips adding a line that makes optical ones.',
  '聯電（2303）規劃 2026-2027 年進行 iSiPP300 平台的風險試產。':
    'UMC (2303) plans risk production on the iSiPP300 platform in 2026–2027.',
  '比利時的國際半導體研發機構，長期投入矽光子製程研發，iSiPP300 是其矽光子平台技術，授權給 UMC 量產化。':
    'The Belgian international semiconductor research institute, a long-standing developer of silicon photonics processes. iSiPP300 is its platform, licensed to UMC for volume production.',
  '像是半導體界的『研發實驗室』，把實驗室成果授權給工廠真正大量生產。':
    "The semiconductor industry's research laboratory, licensing what it develops to fabs that make it at scale.",
  'imec 官方新聞稿宣布將 iSiPP300 技術授權予 UMC，以擴展矽光子能力。':
    "imec's press release announcing the iSiPP300 licence to UMC to broaden silicon photonics capacity.",
  'imec 開發的 300mm 矽光子製程平台，授權給 UMC 做為通用型 PIC 代工的技術基礎。':
    "imec's 300mm silicon photonics platform, licensed to UMC as the technical basis for general-purpose PIC foundry work.",
  '像一套經過驗證的『建築設計圖』，授權給營造廠依此圖大量蓋房子。':
    'A proven set of architectural drawings, licensed to a builder to construct from at scale.',
  'UMC 取得 iSiPP300 授權後，預計 2026-2027 年進入風險試產階段。':
    'Having licensed iSiPP300, UMC expects to enter risk production in 2026–2027.',
  'GlobalFoundries 的開放式矽光子代工平台，官方列出資料中心互連、光學網路、光運算、FTTH、CPO 等多元應用場景。':
    "GlobalFoundries' open silicon photonics foundry platform, with data-centre interconnect, optical networking, optical computing, FTTH and CPO all listed officially as applications.",
  '像一間開放給各種客戶下單的光晶片代工廠，不限定單一應用。':
    'An optical chip foundry open to any customer, not tied to a single application.',
  'PsiQuantum 與 GlobalFoundries 合作建造全規模光子量子電腦，即運用此類矽光子製造能力。':
    'PsiQuantum and GlobalFoundries are building a full-scale photonic quantum computer on exactly this kind of manufacturing capability.',
  'Tower Semiconductor 的矽光子製程平台，提供多專案晶圓（MPW）服務供客戶流片客製光子電路。':
    "Tower Semiconductor's silicon photonics platform, offering multi-project wafer service for customers taping out custom photonic circuits.",
  '另一間提供『共乘流片』服務的光晶片代工廠，多家客戶共用一片晶圓降低成本。':
    'Another optical foundry offering shared tape-outs, with several customers on one wafer to bring the cost down.',
  'Tower Semiconductor 於官網公告 PH18 平台供研究機構與新創流片使用。':
    'Tower Semiconductor lists PH18 on its site as available to research institutes and startups for tape-out.',
  'Multi-Project Wafer（多專案晶圓）': 'Multi-project wafer',
  '多個客戶的設計共用同一片晶圓進行製造，藉此分攤高昂的流片成本，常用於少量、客製化的晶片開發階段。':
    'Several customers\' designs share one wafer, splitting the considerable cost of a tape-out. Common for low-volume, customised development.',
  '像多人合租一輛貨車的運費，而不是每人各自包一輛車，大幅降低個別成本。':
    'Sharing the hire of one van rather than each booking your own.',
  '通用型 PIC 代工平台（如 iSiPP300、GF Fotonix、PH18）多以 MPW 模式服務研究機構與新創公司。':
    'General-purpose PIC platforms — iSiPP300, GF Fotonix, PH18 — mostly serve research institutes and startups through MPW.',
  '台積電的先進封裝技術，把多顆晶片（如運算晶片與記憶體）堆疊整合在同一基板上，是 AI 晶片常用的封裝方式。':
    "TSMC's advanced packaging technology, integrating several dies — compute and memory, say — onto one substrate. The standard packaging for AI chips.",
  '把好幾個獨立的零件，先組裝成一個模組，再裝到主機板上，而不是分開焊接。':
    'Assembling several separate parts into one module first, rather than soldering each to the board.',
  'COUPE 光子引擎透過 CoWoS／SoIC 先進封裝與電子 IC 整合在一起。':
    'The COUPE optical engine is integrated with electronic ICs through CoWoS and SoIC packaging.',
  '台積電的 3D 晶片堆疊封裝技術，把多顆裸晶垂直堆疊並用矽穿孔等技術互連，密度比 CoWoS 更高。':
    "TSMC's 3D die-stacking technology, stacking bare dies vertically and connecting them with through-silicon vias — denser than CoWoS.",
  '把房子從平面擴建改成蓋成大樓，垂直堆疊節省土地（晶片面積）。':
    'Building upward instead of outward: stacking saves land — here, die area.',
  'COUPE 方案結合 SoIC 與 CoWoS 封裝技術，將光引擎與運算晶片緊密整合。':
    'COUPE combines SoIC and CoWoS to integrate the optical engine tightly with the compute die.',
  'III-V 族半導體': 'III-V semiconductors',
  '由週期表第 III 族（如鎵、銦）與第 V 族（如砷、磷）元素組成的半導體材料，因屬於直接能隙材料，能有效發光，常用於雷射與發光元件。':
    'Semiconductors formed from group III elements (gallium, indium) and group V (arsenic, phosphorus). Being direct-bandgap, they emit light efficiently, which makes them the material of choice for lasers and emitters.',
  '矽是『不太會發光的建材』，III-V 族材料則是『天生會發光的建材』，兩者混合使用各取所長。':
    'Silicon is a building material that barely glows; III-V materials glow by nature. Mixing them plays to both strengths.',
  '矽光子晶片因矽本身無法有效發光，需混合整合 III-V 族雷射光源。':
    'Because silicon cannot emit efficiently, silicon photonic chips need a hybrid-integrated III-V laser.',
  '光波導': 'Optical waveguide',
  '把光侷限在一條路徑裡導引的結構，類似電路板上的銅線，差別是導引的是光而非電流。':
    'A structure that confines light to a single path — the analogue of copper on a circuit board, carrying light rather than current.',
  '像光纖或水管，把光（或水）限制在固定路徑中傳輸，不會四散逸失。':
    'Like an optical fibre or a pipe, keeping light (or water) on a fixed path instead of letting it scatter.',
  '矽光子晶片上所有光學元件（MRR、MZI 等）都是透過波導彼此連接。':
    'Every optical component on a silicon photonic chip — MRRs, MZIs and the rest — is connected by waveguides.',
  '可程式化光子電路': 'Programmable photonic circuit',
  '由大量 MZI 單元網格化組成的光子電路，可透過軟體設定動態改變光路與運算功能，而不需重新流片。':
    'A mesh of MZI units whose optical paths and computational function can be changed in software, without a new tape-out.',
  '像一塊『萬用麵包板』，透過程式設定就能組出不同電路，不必每次重新焊接。':
    'A universal breadboard: reconfigure it in software rather than re-soldering.',
  'DCPPC 論文即是在這類可程式化光子電路（MZI mesh）上實現數位邏輯運算。':
    'The DCPPC paper implements digital logic on exactly this kind of MZI mesh.',
  '把多個不同波長的光訊號同時送進同一條光纖或波導傳輸，藉此大幅提升單一通道的傳輸容量。':
    'Sending several wavelengths down the same fibre or waveguide at once, multiplying the capacity of a single channel.',
  '像同一條高速公路上，用不同顏色的車道同時跑多種車流，互不干擾。':
    'One motorway carrying several streams of traffic in differently coloured lanes, none interfering with another.',
  'TriHOT 論文處理的『波分多工感知繞線』，正是為了讓晶片內的光子互連支援 WDM。':
    'The WDM-aware routing in the TriHOT paper exists precisely so on-chip photonic interconnect can support WDM.',
  '光學運算': 'Optical computing',
  '用光子進行運算的硬體技術，內部分兩種範式：（1）類比光學運算——用光的連續物理量（振幅、相位）做矩陣乘法與 Fourier 運算，是 AI 加速器的主流路線；（2）數位光學運算——用電光調變器與干涉儀組合出布林邏輯閘，在光子基材上實現傳統數位電路功能。數位光學運算與光子 EDA 高度疊合，因為設計數位光子電路本身也需要邏輯合成與布局繞線工具。':
    'Computing in hardware with photons, in two paradigms. (1) Analogue: continuous quantities — amplitude, phase — do matrix multiplication and Fourier transforms; the mainstream route for AI accelerators. (2) Digital: electro-optic modulators and interferometers assemble Boolean gates, implementing conventional digital circuits on a photonic substrate. Digital optical computing overlaps heavily with photonic EDA, because designing such circuits itself needs synthesis, placement and routing tools.',
  '類比光學運算像用光做『計算機』（連續模擬量）；數位光學運算像用光做『電腦』（布林邏輯閘），後者需要 EDA 工具輔助設計。':
    'Analogue optical computing is a calculator made of light, working in continuous quantities; digital optical computing is a computer made of light, working in Boolean gates — and the latter needs EDA tools to design.',
  'Lightmatter、Lightelligence（類比，AI 矩陣加速）；Harrow/DCPPC 論文（數位光學運算 × 光子 EDA）。':
    'Lightmatter and Lightelligence on the analogue side (AI matrix acceleration); the Harrow and DCPPC papers at the digital-optical-computing / photonic-EDA intersection.',
  'Electronic Design Automation（電子設計自動化）': 'Electronic design automation',
  '管理晶片設計複雜度的自動化工具鏈，分兩大段：前端邏輯合成（把 Verilog 等描述語言像 compiler 一樣自動轉換成邏輯閘電路，輸出 GDS-II）；後端實體設計（把邏輯閘在晶片上做 placement 鋪排與 routing 繞線）。光子 EDA 是把這套流程搬到光子電路。':
    'The toolchain that manages chip design complexity, in two halves: front-end logic synthesis (compiling Verilog or similar into a gate-level circuit and emitting GDS-II), and back-end physical design (placing those gates on the die and routing between them). Photonic EDA is the same flow applied to photonic circuits.',
  'EDA 就是蓋晶片的『設計軟體套裝』——先有人把功能需求轉成施工圖（邏輯合成），再有人把施工圖轉成實際配置（實體設計），最後輸出製造用的格式（GDS-II）。':
    'EDA is the design software suite for building a chip: someone turns the requirement into working drawings (synthesis), someone turns the drawings into an actual layout (physical design), and the result is emitted in the format the fab needs (GDS-II).',
  '商業 EDA 龍頭包含 Synopsys（含 OptoCompiler 光子版）、Cadence、Mentor（Siemens）；台大團隊的 TriHOT、Harrow、DCPPC 論文都是光子 EDA 的學術研究。':
    'The commercial leaders are Synopsys (including the photonic OptoCompiler), Cadence and Mentor (Siemens). The NTU group\'s TriHOT, Harrow and DCPPC papers are academic photonic EDA.',
  '邏輯合成': 'Logic synthesis',
  'EDA 前端的核心步驟：把 Verilog/VHDL 等硬體描述語言寫的功能需求，自動轉換成最佳化的邏輯閘電路（gate-level netlist），是晶片設計流程中的「compiler」。光子 EDA 的邏輯合成則是把布林邏輯需求轉換成光學邏輯電路（用 MZI、調變器組成的光子閘）。':
    'The core front-end step: automatically converting a requirement written in Verilog or VHDL into an optimised gate-level netlist. It is the compiler of chip design. In photonic EDA, synthesis converts a Boolean requirement into an optical logic circuit built from MZIs and modulators.',
  '就像把人類寫的程式碼（Verilog）自動翻譯並最佳化成機器可以執行的電路圖，工程師不需要手動設計每一個邏輯閘。':
    'Like compiling human-written code into an optimised circuit the machine can run, so no engineer has to draw each gate by hand.',
  'Harrow 論文做的就是光子版邏輯合成：把布林需求自動轉換成光學閘電路，是數位光學運算 × 光子 EDA 的交集。':
    'The Harrow paper is exactly photonic synthesis — turning Boolean requirements into optical gate circuits, at the intersection of digital optical computing and photonic EDA.',
  '積體電路版圖的標準儲存格式，包含晶片所有層次的幾何圖形資訊，是 EDA 實體設計完成後交給代工廠製造的最終格式（tape-out 用），光子晶片同樣需要輸出 GDS-II 給矽光子代工廠。':
    'The standard format for IC layout, holding the geometry of every layer. It is what physical design hands the foundry at tape-out — and photonic chips emit GDS-II to a silicon photonics foundry in exactly the same way.',
  'GDS-II 就像蓋大樓的全套施工圖——所有尺寸、圖層、位置都精確標注，建設公司按圖施工。設計工程師只需確認『圖畫對』，後面就交給工廠。':
    'GDS-II is the complete set of construction drawings: every dimension, layer and position marked precisely, and the builder works from it. The designer only has to be sure the drawings are right.',
  'UMC、GF Fotonix、Tower PH18 等矽光子代工廠接受客戶的 GDS-II 檔案後，才能進行流片製造。':
    'UMC, GF Fotonix and Tower PH18 all take a customer\'s GDS-II before a tape-out can be manufactured.',
  '數位光學運算': 'Digital optical computing',
  '用電光調變器與光學干涉儀（如 MZI）組合出布林邏輯閘（AND、OR、XOR），在光子基材上實現傳統數位電路的運算功能，與類比光學運算（做矩陣乘法）是不同的路線。設計此類電路需要光子 EDA 的邏輯合成與繞線工具輔助。':
    'Building Boolean gates (AND, OR, XOR) from electro-optic modulators and interferometers such as MZIs, implementing conventional digital computation on a photonic substrate. A different route from analogue optical computing, which does matrix multiplication — and designing these circuits needs photonic EDA synthesis and routing.',
  '如果把光子晶片想成一塊可以重新佈線的電路板，數位光學運算就是讓這塊板子做 1+1=2 這種布林邏輯；類比光學運算則是讓它做大型矩陣乘法。':
    'If a photonic chip is a re-wireable board, digital optical computing makes it do Boolean arithmetic; analogue optical computing makes it do large matrix multiplications.',
  'Harrow（光學邏輯合成）與 DCPPC（可程式化光子電路上的數位計算）論文是數位光學運算 × 光子 EDA 交集的代表性學術工作。':
    'Harrow (optical logic synthesis) and DCPPC (digital computation on programmable photonic circuits) are the representative academic work at that intersection.',
  '類比光學運算': 'Analogue optical computing',
  '用光的連續物理量（振幅、相位、波長）做矩陣乘法、Fourier 運算等類比計算，特別適合加速神經網路推論（矩陣向量乘法是深度學習的核心運算）。與數位光學運算（實現布林邏輯閘）是不同的路線。':
    'Using continuous physical quantities of light — amplitude, phase, wavelength — for matrix multiplication and Fourier transforms. Particularly suited to accelerating neural network inference, where matrix-vector multiplication is the core operation. A different route from digital optical computing.',
  '把光學干涉效應當成『天然的矩陣乘法器』——光通過一組特定排列的光學元件後，出口的光強分布就直接對應矩陣乘法的結果，比電子電路更省能。':
    'Interference as a natural matrix multiplier: pass light through a particular arrangement of optical components and the intensity distribution at the far end *is* the product — and at lower energy than an electronic circuit.',
  'Lightmatter、Lightelligence 開發類比光子 AI 加速器；Celestial AI 已於 2025/12 被 Marvell 收購並轉向互連市場。':
    'Lightmatter and Lightelligence build analogue photonic AI accelerators; Celestial AI was acquired by Marvell in December 2025 and turned toward interconnect.',
  'Linear Pluggable Optics（線性直驅光學）': 'Linear pluggable optics',
  '一種簡化的光收發模組設計，省略部分數位訊號處理（DSP）電路，直接以類比訊號驅動，藉此降低功耗與延遲。':
    'A simplified transceiver design that drops some of the digital signal processing and drives the optics with the analogue signal directly, cutting power and latency.',
  '省去中間的『翻譯機』，讓訊號直接傳遞，速度更快但對線路品質要求更高。':
    'Removing the interpreter in the middle: faster, but far more demanding of link quality.',
  'MACOM 是 LPO 技術的供應商之一，鎖定資料中心高速互連市場。':
    'MACOM is among the LPO suppliers, aimed at high-speed data-centre interconnect.',
  '量子位元': 'Qubit',
  '量子': 'Quantum',
  '量子電腦的基本運算單位，與傳統位元（0 或 1）不同，量子位元可處於疊加態，同時代表 0 與 1 的機率組合。':
    'The basic unit of quantum computation. Unlike a classical bit, which is 0 or 1, a qubit can be in superposition — a probabilistic combination of both at once.',
  '傳統位元像是只能朝上或朝下的硬幣；量子位元則像是正在旋轉中、同時帶有正反兩面機率的硬幣。':
    'A classical bit is a coin lying heads or tails; a qubit is a coin still spinning, carrying the probability of both.',
  '五大主流硬體路線（超導、離子陷阱、光子、中性原子、拓樸）都是製備與操控 qubit 的不同方式。':
    'The five mainstream routes — superconducting, trapped ion, photonic, neutral atom, topological — are different ways of preparing and controlling qubits.',
  '量子演算法，能在多項式時間內找出大數的質因數，把「分解大數」轉換成「找週期」這個量子電腦能高效解的問題，是威脅 RSA/ECC 加密的核心原因。':
    'A quantum algorithm that finds the prime factors of a large number in polynomial time by converting factoring into period-finding, which quantum computers solve efficiently. It is the reason RSA and ECC are at risk.',
  '傳統電腦解密像在無窮長的走廊裡一間一間開門找答案；Shor 演算法則像是同時打開所有門，直接看出規律所在的那一間。':
    'A classical computer opens every door along an endless corridor one at a time; Shor opens them all at once and sees which one holds the pattern.',
  '一旦量子電腦具備足夠規模執行 Shor 演算法，現行 RSA、ECC 公鑰加密將失效，這正是 PQC 遷移的根本動機。':
    'Once a quantum computer is large enough to run Shor, RSA and ECC stop working — which is the whole motivation for migrating to PQC.',
  'Grover 演算法': "Grover's algorithm",
  '量子演算法，對無結構資料庫搜尋提供「二次方」加速，對 AES 等對稱式加密的影響遠小於 Shor 演算法，僅需加長金鑰即可因應。':
    'A quantum algorithm giving a quadratic speed-up on unstructured search. Its effect on symmetric ciphers such as AES is far smaller than Shor\'s, and a longer key answers it.',
  '像是把『大海撈針』的時間從一年縮短到一個月，但不是瞬間找到，仍需要等待。':
    'It shortens the needle-in-a-haystack search from a year to a month — faster, but not instant.',
  '因 Grover 演算法影響有限，對稱加密（如 AES-256）不需要像 RSA/ECC 那樣全面替換演算法，只需使用更長金鑰。':
    'Because the impact is limited, symmetric encryption such as AES-256 needs longer keys rather than the wholesale algorithm replacement RSA and ECC require.',
  'Quantum Key Distribution（量子金鑰分發）': 'Quantum key distribution',
  '利用量子力學特性（如測量會改變量子態）在通訊雙方間建立金鑰的硬體技術，需要專用光纖或衛星鏈路，與純軟體層的 PQC 是不同路線。':
    'A hardware technique that establishes a key between two parties using quantum mechanics — measurement disturbs the state — and requires dedicated fibre or a satellite link. A different route from PQC, which is purely software.',
  'PQC 是換一把更難被破解的『鎖』（純軟體換算法）；QKD 則是蓋一條全新的『運鈔通道』（需要建置專用硬體基礎設施）。':
    'PQC fits a harder lock, in software. QKD builds an armoured transport tunnel, in hardware.',
  'NSA 官方 FAQ 明確指出不建議將 QKD 作為國家安全系統的加密解決方案，PQC 才是官方建議路線。':
    "The NSA's FAQ states plainly that it does not recommend QKD for national security systems; PQC is the official route.",
  '拓樸量子 / Majorana': 'Topological quantum / Majorana',
  '利用特殊準粒子（Majorana 費米子）的拓樸態來編碼量子資訊的硬體路線，理論上對環境雜訊有較強的天然抗性，不依賴光學操控。':
    'A hardware route encoding quantum information in the topological states of exotic quasiparticles (Majorana fermions). In theory it is naturally more resistant to environmental noise, and it does not rely on optical control.',
  '像是把訊息編碼在繩結的『打結方式』而非繩子本身的位置，就算繩子被輕微拉扯，繩結的拓樸特性也不會改變。':
    'Encoding the message in how the rope is knotted rather than where the rope lies: tug the rope and the topology of the knot is unchanged.',
  '微軟主推拓樸路線，2025 年發表 Majorana 晶片研究成果。':
    'Microsoft champions this route and published Majorana chip results in 2025.',
  '輝達推出的量子-古典混合運算開發平台，讓開發者能在同一套框架中整合傳統 GPU 運算與量子硬體/模擬器。':
    "Nvidia's development platform for hybrid quantum-classical computing, letting developers combine GPU computation with quantum hardware or simulators in one framework.",
  '像是一座『雙語翻譯橋樑』，讓量子電腦與傳統超級電腦能用同一套語言協同工作。':
    'A bilingual bridge, letting quantum machines and conventional supercomputers work in one language.',
  '輝達雖不直接製造量子硬體，但透過 CUDA-Q 生態系成為量子運算產業鏈的重要間接受惠者。':
    'Nvidia builds no quantum hardware, but CUDA-Q makes it a significant indirect beneficiary of the industry.',
  '最廣泛使用的公鑰加密演算法之一，安全性建立在「大數分解很難」這個數學假設上，是量子電腦 Shor 演算法的主要威脅對象。':
    'One of the most widely used public-key algorithms, resting on the assumption that factoring large numbers is hard — and the principal casualty of Shor.',
  '像一把鎖，鑰匙的形狀取決於兩個很大質數的乘積，傳統電腦要從乘積反推回兩個質數極為困難。':
    'A lock whose key is shaped by the product of two very large primes, which a classical computer cannot practically work backwards from.',
  '目前網路 HTTPS、VPN 等大量基礎設施仍依賴 RSA 或 ECC 做金鑰交換與身分驗證。':
    'A great deal of internet infrastructure — HTTPS, VPNs — still relies on RSA or ECC for key exchange and authentication.',
  'Elliptic Curve Cryptography（橢圓曲線密碼學）': 'Elliptic curve cryptography',
  '另一種公鑰加密技術，安全性建立在橢圓曲線上的「離散對數問題」，同樣會被 Shor 演算法破解，但金鑰長度比 RSA 短、效率更高。':
    'Another public-key technique, resting on the discrete logarithm problem over elliptic curves. Shor breaks it too, but its keys are shorter and it is more efficient than RSA.',
  '和 RSA 一樣是一把數學鎖，只是鎖的設計原理換成另一種更精巧、更省鑰匙材料的幾何結構。':
    'The same kind of mathematical lock as RSA, built on a more elegant geometry that needs less key material.',
  '許多現代 TLS 連線、加密貨幣錢包採用 ECC（如 ECDSA、ECDH）做簽章與金鑰交換。':
    'Modern TLS connections and cryptocurrency wallets widely use ECC (ECDSA, ECDH) for signatures and key exchange.',
  '美國 NIST 訂定的聯邦資訊處理標準，PQC 相關標準如 FIPS 203（ML-KEM）、204（ML-DSA）、205（SLH-DSA）、206（FN-DSA）皆屬此體系。':
    "The US federal information processing standards issued by NIST. The PQC standards — FIPS 203 (ML-KEM), 204 (ML-DSA), 205 (SLH-DSA) and 206 (FN-DSA) — all belong to this series.",
  '像政府訂定的『國家標準規格』，所有聯邦機關採購與使用的密碼技術都必須符合這套規格。':
    'A national specification that every federal agency must meet in the cryptography it buys and uses.',
  'NIST 已於 2024/8 正式發布 FIPS 203、204、205 三項後量子密碼標準。':
    'NIST published FIPS 203, 204 and 205 in August 2024.',
  'Module-Lattice-Based Digital Signature Algorithm（FIPS 204，前身為 Dilithium）':
    'Module-Lattice-Based Digital Signature Algorithm (FIPS 204, formerly Dilithium)',
  'NIST 定案的後量子數位簽章標準，用於驗證訊息或軟體的來源真實性與完整性，取代 RSA/ECDSA 簽章。':
    'The finalised post-quantum signature standard, used to verify the origin and integrity of a message or a piece of software, replacing RSA and ECDSA signatures.',
  '像是換一種更難被偽造的『簽名筆跡辨識系統』，確保文件確實出自本人。':
    'A harder-to-forge system for recognising a signature, confirming the document really came from that person.',
  'FIPS 204 與 ML-KEM（FIPS 203）並列為 NIST 2024/8 同批發布的核心 PQC 標準。':
    'FIPS 204 and ML-KEM (FIPS 203) were published together in August 2024 as the core PQC standards.',
  'Stateless Hash-Based Digital Signature Algorithm（FIPS 205，前身為 SPHINCS+）':
    'Stateless Hash-Based Digital Signature Algorithm (FIPS 205, formerly SPHINCS+)',
  '另一種 NIST 定案的後量子簽章標準，基於雜湊函數而非格密碼學，作為 ML-DSA 之外的備援簽章方案，安全性假設更為保守。':
    'A second finalised post-quantum signature standard, built on hash functions rather than lattices. It backs up ML-DSA on a more conservative security assumption.',
  '像是除了主鎖之外，再裝一道原理完全不同的備用鎖，即使主鎖的設計被攻破，備用鎖仍然安全。':
    'A second lock working on an entirely different principle, so that breaking the first leaves the second intact.',
  'NIST 同時定案 ML-DSA 與 SLH-DSA 兩種簽章標準，避免單一數學假設被攻破時無備援方案。':
    'NIST finalised both ML-DSA and SLH-DSA so that breaking one mathematical assumption does not leave the system without a signature scheme.',
  'NIST 仍在審定中的第三種後量子簽章標準，前身為 FALCON，特色是簽章長度較短，適合頻寬受限的應用場景。':
    'A third post-quantum signature standard still under NIST review, formerly FALCON. Its signatures are shorter, which suits bandwidth-constrained settings.',
  '和 ML-DSA、SLH-DSA 一樣是數位簽名方案，但簽出來的『簽名』比較短小，適合塞進空間有限的封包裡。':
    'The same kind of scheme as ML-DSA and SLH-DSA, but with a shorter signature that fits into a tight packet.',
  'FIPS 206（FN-DSA/FALCON）截至撰文時仍在 NIST 審定流程中，尚未如 FIPS 203-205 正式定案。':
    'As of writing, FIPS 206 (FN-DSA/FALCON) is still in NIST review and has not been finalised alongside 203–205.',
  'NIST 於 2025/3 選定的備援後量子金鑰封裝機制（KEM），數學基礎與 ML-KEM 不同（基於糾錯碼而非格密碼學），用於分散單一數學假設的風險。':
    'The backup key encapsulation mechanism NIST selected in March 2025, built on error-correcting codes rather than lattices, so the system does not rest on a single mathematical assumption.',
  '如果 ML-KEM 仰賴的數學假設未來被找到漏洞，HQC 就是用完全不同原理打造的『備用鑰匙』。':
    'If a flaw is ever found in the assumption ML-KEM depends on, HQC is a spare key cut on a different principle entirely.',
  'NIST 選定 HQC 作為備援 KEM，與 ML-KEM 採用不同數學基礎以降低系統性風險。':
    'NIST selected HQC as a backup KEM on a different mathematical basis from ML-KEM, to reduce systemic risk.',
  'Hardware Security Module（硬體安全模組）': 'Hardware security module',
  '專用的實體安全裝置，用來產生、儲存與管理加密金鑰，並執行加解密運算，避免金鑰外洩到一般伺服器環境。':
    'A dedicated physical device that generates, stores and manages cryptographic keys and performs the operations itself, so keys never reach an ordinary server.',
  '像銀行金庫裡的保險箱，金鑰永遠鎖在裡面運作，不會被搬到外面風險較高的環境使用。':
    'A vault in which the key stays locked and working, never carried out into a riskier environment.',
  'Thales 等廠商提供 HSM／金鑰管理硬體，是企業導入 PQC 遷移時的重要基礎設施供應商。':
    'Thales and others supply HSM and key-management hardware — important infrastructure for any enterprise migrating to PQC.',
  '互連IC': 'Interconnect IC',
  '把多條低速並列訊號轉換成單一高速序列訊號傳輸（或反向轉換）的電路，是高速資料互連的核心元件。':
    'A circuit that turns several slow parallel signals into one fast serial stream, and back again — the core component of high-speed interconnect.',
  '像把好幾條車道的車流，先合併成一條高速公路快速通過，到了目的地再重新分流。':
    'Merging several lanes onto one fast motorway, then splitting them again at the destination.',
  'Credo Technology 等公司的高速互連 IC 產品線包含光相關的 SerDes 技術。':
    "Credo Technology's high-speed interconnect line includes optically related SerDes.",
  '訊號重定時器': 'Retimer',
  '在高速傳輸線路中重新整形、重新計時訊號的晶片，用以補償長距離傳輸造成的訊號衰減與抖動，確保資料完整性。':
    'A chip that reshapes and re-times a signal mid-link, compensating for the attenuation and jitter of a long run so the data survives.',
  '像接力賽跑中段的選手，把逐漸模糊、變形的訊號重新「跑」清楚再交給下一棒。':
    'The runner in the middle of a relay, carrying a fading signal back up to speed before handing it on.',
  'Astera Labs 的 PCIe/CXL Retimer 產品是資料中心高速互連生態系的重要一環。':
    "Astera Labs' PCIe/CXL retimers are a significant part of the data-centre interconnect ecosystem.",
  '伺服器與資料中心常用的高速匯流排標準，PCIe 是通用元件互連介面，CXL 在其基礎上進一步支援記憶體共享與一致性互連。':
    'The high-speed bus standards used across servers and data centres. PCIe is the general component interconnect; CXL builds on it to add memory sharing and cache coherence.',
  'PCIe 像是一般的高速道路系統，CXL 則像是新增了「共用停車場」功能，讓不同設備能共享資源而非各自獨占。':
    'PCIe is the motorway network; CXL adds shared car parks, so devices can pool resources instead of each hoarding its own.',
  'Astera Labs 的智慧連接模組即圍繞 PCIe/CXL 標準，服務 AI 資料中心互連需求。':
    "Astera Labs' smart connectivity modules are built around PCIe and CXL for AI data-centre interconnect.",
  '小晶片': 'Chiplet',
  '把原本做成單一大晶片的功能，拆分成多顆較小的晶粒分別製造，再透過先進封裝技術互連整合，藉此提升良率與設計彈性。':
    'Splitting what would have been one large die into several smaller ones, manufactured separately and reconnected through advanced packaging — better yield, more design flexibility.',
  '像把一台大型機器拆成幾個模組化零件分別製造、再組裝，比起整台機器一次成型更有彈性、出錯成本更低。':
    'Building a large machine from modular parts rather than casting it whole: more flexible, and a mistake costs less.',
  'Ayar Labs 開發的光互連 chiplet 即是把光學 I/O 做成獨立小晶片，供其他晶片廠商整合使用。':
    "Ayar Labs' optical interconnect chiplet packages optical I/O as a separate die for other chipmakers to integrate.",
  '透過雲端提供量子運算資源的服務模式，使用者不需自建量子硬體，即可透過 API 存取量子電腦或模擬器進行運算。':
    'Quantum computing delivered as a cloud service: users reach a quantum machine or simulator through an API without owning hardware.',
  '像雲端運算的 IaaS，只是這次租用的不是傳統伺服器，而是量子電腦的運算時間。':
    'Infrastructure-as-a-service, except what you rent is time on a quantum computer.',
  'IBM、Microsoft Azure Quantum 等大型科技公司主要以 QaaS 形式間接參與量子運算市場。':
    'IBM and Microsoft Azure Quantum participate in the market mainly this way.',
  'Multicore Fiber（多芯光纖）': 'Multicore fibre',
  '光互連物理層': 'Optical interconnect physical layer',
  '在同一條光纖的單一包層（如標準 125μm）裡放入多個獨立的纖芯，讓一條光纖同時傳輸多路訊號，藉此在不增加佈線體積的前提下倍增傳輸密度。':
    'Several independent cores inside one cladding (the standard 125μm, say), so a single fibre carries several signals at once — multiplying density without adding bulk to the cabling.',
  '把原本單線道的隧道，在同樣的外徑內重劃成四線道，車流量翻倍但隧道沒變粗。':
    'Re-striping a single-lane tunnel into four within the same bore: far more traffic, no wider tunnel.',
  'Corning 在 2026 OFC／GTC 期間推出的多芯光纖，可在同一 125μm 包層內提供 4 個纖芯、單纖 4 倍容量，鎖定 AI 資料中心的高密度佈線。':
    'The multicore fibre Corning launched around OFC and GTC in 2026 puts four cores in a 125μm cladding for 4× capacity per fibre, aimed at dense AI data-centre cabling.',
  'Fiber Array Unit（光纖陣列單元）': 'Fibre array unit',
  '把多條光纖以極高精度排列、固定成一個陣列模組，再對準耦合到矽光子晶片（PIC）的波導上，是「光纖↔晶片」之間的關鍵連接元件，對準精度直接決定耦合損耗。':
    'Several fibres held in a precisely aligned array and coupled onto the waveguides of a silicon photonic chip. It is the critical fibre-to-chip connector, and alignment accuracy directly sets the coupling loss.',
  '像把一束電線整理進一個精準的排線接頭，插上主機板時每一根都剛好對到對應的金手指。':
    'Dressing a bundle of wires into one precise connector, so every conductor lands exactly on its contact.',
  'Corning 與台廠上詮(3363) 都是 FAU／光連接器供應商；LPO 等高速應用對 FAU 對準精度的要求更高，製程難度與單價同步上升。':
    'Corning and Taiwan\'s 上詮 (3363) both supply FAUs and optical connectors. High-speed applications such as LPO demand tighter alignment, raising both difficulty and price.',
  '邊緣耦合器': 'Edge coupler',
  '讓光從晶片邊緣的波導端面與外部光纖之間高效率進出的耦合結構，是把光「送進／帶出」矽光子晶片的兩大耦合方式之一（另一種為頂部的光柵耦合 grating coupler）。':
    'A structure that moves light efficiently between an external fibre and the waveguide facet at the chip edge — one of the two ways light gets into and out of a silicon photonic chip (the other being a grating coupler on top).',
  '像隧道的入口匝道，設計得好車流（光）就能順暢進出、不堵車（低損耗）。':
    'The slip road onto a tunnel: designed well, traffic — light — flows in and out without a jam, meaning low loss.',
  'Corning 的 GlassBridge 就是一種玻璃波導 edge-coupler，設計成相容 GlobalFoundries 矽光子平台所用的 v-groove。':
    "Corning's GlassBridge is a glass-waveguide edge coupler, designed to be compatible with the v-groove used on GlobalFoundries' silicon photonics platform.",
  'Corning 開發的玻璃波導 edge-coupler 技術，用來把光纖低損耗地耦合進矽光子 PIC，並設計成相容 GlobalFoundries 矽光子平台的 v-groove 結構，是 Corning 切入晶片級光耦合（而不只是長距光纖）的代表技術。':
    "Corning's glass-waveguide edge coupler, coupling fibre into a silicon photonic PIC at low loss and built to fit GlobalFoundries' v-groove. It is how Corning moved from long-haul fibre into chip-level coupling.",
  '像一段量身訂做的『轉接橋』，把外面的光纖管線精準接到晶片門口的接口上，水（光）流過去幾乎不漏。':
    'A bespoke bridge joining the outside pipework precisely to the port at the chip\'s door, so almost nothing leaks on the way through.',
  'GlobalFoundries 與 Corning 於 2025/9 宣布合作，將 GlassBridge 整合進 GF Fotonix 平台，並於 ECOC 2025 展示，是物理層與通用 PIC 代工的交叉點。':
    'GlobalFoundries and Corning announced in September 2025 that GlassBridge would be integrated into GF Fotonix, demonstrated at ECOC 2025 — the crossing point between the physical layer and the general-purpose foundry.',
  '<strong>定義：</strong>': '<strong>Definition:</strong>',
  '<strong>類比：</strong>': '<strong>Analogy:</strong>',
  '<strong>範例：</strong>': '<strong>Example:</strong>',
  /* ── 表格「公司」欄的台廠與 ETF 名稱 ──
     這些是專名不是句子。我沒有查證它們的官方英文名，所以原樣保留，
     只在 ETF 名稱補上代號讓英文讀者對得上（代號本來就在隔壁欄）。 */
  '上詮': '上詮 (3363)',
  '聯亞': '聯亞 (3081)',
  '波若威': '波若威 (3163)',
  '華星光': '華星光 (4979)',
  '光聖': '光聖 (6442)',
  '中華資安國際': '中華資安國際 (6702)',
  '安碁資訊': '安碁資訊 (6690)',
  '中信關鍵半導體': '中信關鍵半導體 (00891)',
  '復華台灣科技優息': '復華台灣科技優息 (00929)',
  '台新臺灣IC設計動能': '台新臺灣IC設計動能 (00947)',
  '富邦台灣核心半導體': '富邦台灣核心半導體 (00892)',

  /* 術語卡的搜尋框 placeholder（純文字語境，遷移時改成「中文 / English」） */
  '搜尋術語…': 'Search terms…',
};
