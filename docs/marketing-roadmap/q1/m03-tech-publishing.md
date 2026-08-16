# M03：技術人發文平台（W6-7）

> 研究日期：2026-07。平台規則會變（如 Reddit 官方 90/10 條文已下架），產出前驗證。
> 產出紀錄：2026-07-05 W6-7 → /projects/marketing/tech-publishing/（PR #82/#85）

**本模組核心觀念**：每個平台的反 spam 免疫系統不同，但原理相同——**社群先於促銷**。HN 看留言史、Reddit 看 promotional ratio、PH 看 engagement quality、GitHub 看真實使用訊號。

**標準 launch 鏈路**（貫穿兩週的大圖景）：
自家 blog（canonical）→ dev.to/Hashnode 跨發 → X build in public 蓄能 → GitHub README 就緒 → HN/PH/Reddit 同窗口引爆 → Indie Hackers postmortem 回收長尾

## Week 6：Hacker News + Product Hunt

**學習目標**：能為一個產品規劃完整的 Show HN 貼文與 PH launch campaign，並說出各平台的三大禁忌。

### Hacker News
- 核心價值是 intellectual curiosity，不是行銷；一句 marketing speak 就足以被 downvote 到消失
- **Show HN 硬門檻**：必須可實際試用——landing page、waitlist、募資頁全部不合格；盡量不用註冊就能試
- 標題規則（官方）：不可全大寫、驚嘆號、自誇詞；有效標題＝事實陳述+引發技術好奇
- 帳號要像「人」：不用公司名、不叫朋友灌 booster comments（投票環偵測會懲罰）
- 回覆每一則留言含負評——創辦人在 thread 的態度被當作產品的一部分
- 長期經營勝過單次 launch：每天一則基於實際經驗的留言
- **禁忌**：vote ring、行銷語言/superlatives、公司帳號發文、短期重複提交
- 案例：五年後二度 Show HN 上首頁的 postmortem（改變＝加入創辦故事與 code examples、從 launch 框架改成 lesson 框架），launch day 帶來 ~468 active users → [Indie Hackers postmortem](https://www.indiehackers.com/post/front-page-of-hn-the-full-postmortem-traffic-lessons-surprises-cbe9e0a7f6)
- 連結：[Show HN Guidelines（官方）](https://news.ycombinator.com/showhn.html) · [HN Guidelines（官方）](https://news.ycombinator.com/newsguidelines.html) · [Marc Lou: How to launch on HN](https://newsletter.marclou.com/p/how-to-launch-a-startup-on-hacker-news) · [Syften HN posting guide](https://syften.com/blog/hacker-news-marketing/)

### Product Hunt
- **Hunter 機制已弱化（2025-26）**：官方明講找第三方 hunter 無可見優勢；79% featured 是 self-hunted——**自己 hunt 自己即可**
- 演算法重 engagement quality（留言深度）> 純 upvote；前 4 小時 velocity 權重極高
- **準備清單**：提前 30 天上 Coming Soon 頁蓄 followers、準備短影片（#1 得主幾乎都有）、預寫 maker's first comment（70% 冠軍有）
- 時間：12:01 AM PT 開跑吃滿 24 小時；週二至四流量大競爭烈、週末門檻低曝光少
- Launch day：15 分鐘內回覆每則留言；請人「留 thoughtful feedback」而非「幫我 upvote」（直接討票違規）
- **把 launch 當 campaign 不當 event**：pre-launch 6 週 → launch day 全天 → 會後 nurture
- 常見失敗：launch 早上才開始行銷、產品與 PH 社群不對頻、頁面 3 秒看不懂、沒影片、選錯日子
- 案例：[分階段社群動員連續 3 天 Top 5 — Mind the Product](https://www.mindtheproduct.com/a-case-study-product-hunt-launch-strategy-how-we-made-it-to-the-top-5-products-3-days-running/)
- 連結：[PH Launch Guide（官方）](https://www.producthunt.com/launch) · [Preparing for launch（官方）](https://www.producthunt.com/launch/preparing-for-launch) · [awesome-product-hunt launch guide](https://github.com/fmerian/awesome-product-hunt/blob/main/product-hunt-launch-guide.md) · [Demand Curve playbook](https://www.demandcurve.com/playbooks/product-hunt-launch)

### 實作練習
- 為捕夢網生成器寫一份 Show HN 草稿（標題 + first comment，聚焦技術有趣點：canvas 生成演算法、SVG 雷切輸出）
- 列出 PH launch 前 30 天的週計畫表

## Week 7：Reddit、dev.to/Hashnode、Medium、Substack、Build in Public、GitHub

**學習目標**：能設計 canonical URL 跨發策略；能評估 build in public 的透明度取捨；理解各平台養成期。

### Reddit
- 每個 subreddit 是獨立國家——r/SideProject 受歡迎的內容發到 r/technology 會被永 ban
- **9:1 rule 現況**：官方 90/10 wiki 已下架，改為「genuine participant」原則性判斷；但 spam filter 實務仍看 promotional ratio，老手採 95:5
- 促銷友善區：r/SideProject（30 萬+）、r/EntrepreneurRideAlong（journey 敘事）、r/somethingimade；**r/InternetIsBeautiful 不允許需註冊的產品**
- Shadowban 機制：短時間跨 sub 貼同連結、低 karma 帶連結、高促銷比例 → 全站 spam filter；用 logged-out 視窗自檢
- 成功格式：誠實 journey post（做了 X、學到 Y、搞砸了 Z）>> 產品介紹；留言區才是主戰場（利益揭露前提下答題帶工具）
- 新帳號先 2-4 週純參與累積 karma
- **禁忌**：多帳號互推（永 ban）、同連結轟炸、假裝路人推自家產品
- 連結：[KarmaGuy Reddit rules 2026](https://karmaguy.io/en/blog/reddit-self-promotion-rules) · [Redship guide](https://redship.io/blog/reddit-self-promotion-rules) · [Vadim Kravcenko 實戰](https://vadimkravcenko.com/qa/self-promotion-on-reddit-the-right-way/) · [Hive Index 自推友善 sub 清單](https://thehiveindex.com/topics/self-promotion/platform/reddit/)

### dev.to / Hashnode
- 歡迎「帶產品的技術寫作」：技術含量是主菜、產品是配菜；「How I built X」與踩坑文表現最好
- **Canonical URL 是跨發命脈**：先發自家 blog → dev.to 設 `canonical_url`、Hashnode 設 `originalArticleURL`——SEO 權重歸自己、吃平台分發流量；不設則 Google 把平台版排在你原站之上
- 單一 markdown 源頭工作流：一份 md → 自家 blog + dev.to + Hashnode
- Hashnode 數據：含 code snippets 與 diagrams 的文互動率是純文字 2 倍
- 案例：[Draft.dev 客戶技術文上 HN 單日 5 個 demo requests](https://draft.dev/case-studies)
- 連結：[DEV Editor Guide（官方）](https://dev.to/p/editor_guide) · [Brian Morrison cross-post 工作流](https://brianmorrison.me/blog/how-i-cross-post-to-hashnode-and-devto)

### Medium（2025-26 現況）
- Partner Program 連續改版方向＝獎勵帶新流量/新會員的作者：外部流量 +5%、帶新 member 註冊有額外收益、2026 起未 Boost 文章分潤提高
- 社群共識：**當分發管道可以、當收入來源不行**——價值在 publication 既有訂閱群與 SEO 權重（同樣設 canonical）
- 禁忌：AI 量產文（無法進分潤）、純導購文
- 連結：[Partner Program update（官方）](https://medium.com/blog/partner-program-update-starting-february-17-were-rewarding-stories-that-bring-in-new-members-3e84d2eb6e68) · [Is Medium Still Worth It — Vocal](https://vocal.media/journal/is-medium-still-worth-it-in-2025)

### Substack
- 已是「有內建成長迴路的社交網路」：**40% 新訂閱來自 Substack 網路內部**（官方 2026 初）
- **Recommendation network 是最強引擎**：主動推薦別人的作者被回推機率 3 倍；實作＝找 10-15 個規模相近主題互補的刊互推
- Notes = 平台內 Twitter：有創作者 70% 新訂閱來自 Notes（每天 20-30 分鐘）
- 免費訂閱者先行，不要太早鎖 paywall
- 案例：[Amy Suto 經營到 $180K+ ARR 的拆解](https://www.amysuto.com/desk-of-amy-suto/how-to-grow-a-substack-for-your-business-or-personal-brand)
- 連結：[Substack Resources（官方）](https://substack.com/resources) · [Substack Grow（官方）](https://substack.com/grow) · [0 to 4,500 subscribers 2026](https://buildtolaunch.substack.com/p/how-to-grow-substack-from-zero-in-2026)

### Indie Hackers + X Build in Public
- IH 的貨幣是 transparency：公開 revenue、失敗、決策；$1K MRR 是最受重視門檻；附 timeline+channel breakdown+lessons 的 milestone 文互動是純數字的 3-5 倍
- **2025-26 轉折：頭部 indie hackers（levelsio、Danny Postma 等）已停止公開營收**——「radical transparency」退潮轉向「selective transparency」（安全與抄襲風險）；教材需提醒權衡
- Marc Lou 公式（170K followers）：「1. Launch tiny startups 2. Share results 3. Repeat」
- 賣鏟子策略：build in public 終局常是「教別人 build」變成產品（ShipFast 等）
- 內容門檻：對不是你的人也有趣才有傳播力——數據截圖、決策思路、失敗自嘲 >> 流水帳
- 鐵三角：X 養受眾 → PH/HN launch 收割 → IH 深度 postmortem 回流
- 連結：[What Is Building in Public — IH](https://www.indiehackers.com/post/what-is-building-in-public-explained-simply-6541c681e0) · [Marc Lou 成長公式原文](https://x.com/marc_louvion/status/1919409762653065670) · [Is this the end of Build in Public — IH](https://www.indiehackers.com/post/lifestyle/is-this-the-end-of-build-in-public-heres-why-top-indie-hackers-are-suddenly-disappearing-IhSJQBnXNuNwSuNTuz4t) · [OpenTweet BIP 指南](https://opentweet.io/blog/build-in-public-twitter-guide-saas-founders)

### GitHub 作為行銷管道
- 四套獨立 discovery：Trending 看 star velocity、Topics 看 tag、Search 看 README+總星數、Explore 個人化
- **README = landing page**：demo GIF、quick start、badges、清楚 value prop——轉換效率是簡陋 README 的 3-5 倍
- **Awesome lists 潛規則**：請朋友/早期用戶代為提交 PR——很多 maintainer 拒收自薦、歡迎第三方推薦
- 上 Trending 槓桿：集中一天引爆（搭配 HN/Reddit 同窗口灌 star velocity）
- **禁忌**：買星、star-for-star——GitHub 會清除，開發者受眾抓包後信譽歸零
- 案例：[一週 3,500+ stars 實戰 — freeCodeCamp](https://medium.com/free-code-camp/how-to-get-up-to-3500-github-stars-in-one-week-339102b62a8f)
- 連結：[awesome-readme](https://github.com/matiassingers/awesome-readme) · [Star History playbook](https://www.star-history.com/blog/playbook-for-more-github-stars/)

### 實作練習
- 把 dreamcatcher repo 的 README 依「landing page」標準重寫大綱（demo GIF、quick start、SVG 雷切賣點）
- 設計一條 canonical 跨發鏈：mattye.dev 文章 → dev.to → Medium，標出每站的 canonical 設定位置

### 產業備註
- SaaS/工具：本模組整條 launch 鏈路直接適用
- 電商/手作：r/somethingimade、r/crafts 是 process 內容的家；GitHub 不適用（除非開源工具）
- 教育：Substack + Medium 是知識型內容主場；HN 對教學文接受度高（lesson 框架）
- B2B：dev.to 技術文帶產品的路徑＝開發者信任→demo requests（見 Draft.dev 案例）
