# M05：不露臉（Faceless）短影音 Pipeline（W11-12）

> 研究日期：2026-07。**時效敏感**：Sora 消費端已於 2026-04 關閉（API 2026-09 終止）；YouTube inauthentic content 政策 2025-07-15 生效；TikTok C2PA 自動偵測 2025-01 起。產出前必驗證。
> 產出紀錄：2026-07-05 W11-12 → /projects/marketing/faceless-pipeline/

## Week 11：Faceless 類型 + AI 工具鏈（語音/畫面）

**學習目標**：能為自己選定 faceless 類型並組出一條「腳本→語音→畫面」工具鏈；理解中文 TTS 的選型邏輯。

### 知識點

**1. 五種 faceless 頻道類型**
- 螢幕錄製教學（軟體/AI 工具 demo）——螢幕即畫面
- AI 旁白+素材（歷史、財經、科普解說）
- 動畫解說（The Infographics Show 模式，可建角色 IP）
- Kinetic typography（金句/勵志/語錄）
- **ASMR/過程影片（process video）**——手作、烹飪、陶藝；拍手與作品即可，**對手作工藝類最相關**
- 統計：YouTube 前 1000 大頻道**超過 40% 從不露臉**
- 選 niche 誤區：只看 CPM 不看能否持續產出；「faceless=零特色」（聲音、視覺、口吻仍需一致品牌識別）

**2. AI 語音（中文品質是重點）**
- **ElevenLabs**：品質最高（v3 停頓/呼吸/語調最自然），中文可直接用但輕聲偏軟、捲舌音偏硬；最貴（~$0.30/千字元）
- **MiniMax TTS**：**國語與粵語支援特別強**，2025-26 多篇評測列為亞洲語言首選
- **Azure Speech / Google Cloud TTS**：有 zh-TW 台灣腔 voices、穩定便宜（~$30/百萬字元），適合批量
- **OpenAI TTS**：便宜清晰但情緒深度不如 ElevenLabs
- 選型邏輯：品牌主聲音用 ElevenLabs/MiniMax（品質）；批量旁白用 Azure/Google（成本，價差可達 10 倍）
- 誤區：用英文評測選中文工具；不做斷句與多音字校正（「行」「得」「了」常唸錯）

**3. 畫面來源**
- Stock：免費 Pexels/Pixabay；付費 Storyblocks（$30/月起）、Artgrid（較不撞片）——stock 勝在真實感（微表情、景深）
- **AI 影片生成 2026 現況**：**Sora 已關閉消費端（2026-04-26），API 2026-09-24 終止——不可再列為可用工具**；Runway Gen-4/4.5（品牌一致性與編輯工作流，$95/月級距）；Kling 3.0（人物動作與多語 lip-sync，最長 180 秒）；Pika（$35/月無限生成，性價比）
- 最佳策略：**stock 打底、AI 補特殊鏡頭**（超現實、抽象、拍不到的情境）
- Screen recording：OBS 免費，教學類零成本
- 模板：Canva（快速）、After Effects 模板市場（品質高需技能）

### 參考連結
- [Descript Faceless 頻道 30+ 類型](https://www.descript.com/blog/article/faceless-youtube-channel-ideas)
- [OutlierKit 100 個 faceless niche + CPM 數據](https://outlierkit.com/resources/faceless-youtube-channels/)
- [Speechmatics TTS API 12 家比較](https://www.speechmatics.com/company/articles-and-news/best-tts-apis-in-2025-top-12-text-to-speech-services-for-developers)
- [Google vs Azure vs ElevenLabs 中文實測](https://ttsforfree.com/en/blogs/google-vs-azure-vs-elevenlabs-tts-comparison/)
- [Sora 關閉官方說明 — OpenAI（官方）](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)
- [Runway/Kling/Sora 比較 — M Studio](https://mstudio.ai/insights/best-ai-video-generator-2026)
- [AI B-Roll vs Stock — VFX AI](https://www.vfxai.com/blog/ai-b-roll-vs-stock-footage)

### 實作練習
- 用各家免費額度，以同一段捕夢網中文腳本（100 字）實測 ElevenLabs / MiniMax / Azure zh-TW，記錄品質與價格比較表

## Week 12：自動化 pipeline + 平台政策 + 手作實戰

**學習目標**：理解全自動產片的架構與紅線；能設計一條合規的 process video 生產線。

### 知識點

**1. n8n 自動化工具鏈（Matt 有技術能力，直接適用）**
- 典型流程：Google Sheet 選題 → LLM 寫腳本分鏡 → Flux/Leonardo 生圖 → Kling 生片段 → ElevenLabs 配音 → Creatomate/Shotstack 模板合成 → 自動發布
- n8n 官方模板庫有現成 workflow 可匯入；可自架省訂閱費
- 一站式替代：Revid.ai（連結轉影片）、Creatify（UGC 風廣告 avatar）、HeyGen（最擬真 avatar、175+ 語言 lip-sync）
- 規模現實：可做到每日 2-3 支，但**全自動 ≠ 免審**——建議自動化「產」（草稿/配音/合成/排程）、人工把關「選題與終審」
- 誤區：100% 無人審直發（量產低質被判 inauthentic）；低估 API 成本疊加（LLM+生圖+生片+TTS 單支成本比想像高數倍）；workflow 綁死單一供應商（綁 Sora 的流程 2026 全數重寫）

**2. 平台 AI 內容政策（⚠️ 避免 demonetize 的關鍵，兩層別混淆）**
- **YouTube 揭露義務**：上傳時用 altered/synthetic content 開關揭露「可能誤導以為真實」的內容；未揭露平台可能強制加不可移除標籤
- **YouTube 變現資格（2025-07-15 重大更新）**：repetitious content 改名 **inauthentic content**——大量重複無原創觀點的 AI 影片被拒於 YPP；**AI 本身不違規，低原創性才違規**
- **TikTok**：擬真 AI 內容須加 AI-generated label；**2025-01 起 C2PA Content Credentials 自動偵測**（自動標記不可移除）；未標記→移除+降觸及+記 strike（2025 下半年移除 5 萬+ 支）
- **重要豁免**：AI 寫腳本/caption/hashtag/字幕等「工作流 AI」不需標記——規範對象是畫面與聲音本身
- 合規三步：真實素材優先 → 擬真 AI 元素主動標 → 每支有原創觀點/加工
- 誤區：以為「用 AI 就會被 demonetize」；把揭露標籤和變現資格混為一談

**3. 手作/工藝品的特殊機會：Process Video（Matt 主場）**
- **天生 faceless**：拍手、材料、工具、成品——不需 AI 畫面、不碰政策紅線、真實性是賣點
- ASMR 手法：**保留原始環境音**（切割/揉捏/刷塗聲）並投資收音；慢動作、重複動作、特寫營造 hypnotic 效果
- 結構套 M04 框架：hook 用最戲劇性瞬間（脫模/上釉/成品 reveal）放開頭 1-2 秒 → 倒敘過程 → payoff 成品展示
- Hashtag 生態：#satisfying #asmr #process #handmade + 利基 tag
- 變現直接：影片即產品展示 → 導流商店
- 參考帳號：[@saygeceramics 陶藝 ASMR（TikTok）](https://www.tiktok.com/@saygeceramics)
- 誤區：配樂蓋掉原始聲音（ASMR 觀眾為聲音而來）；按時間平鋪直敘（高潮要前置）；過度加速（satisfying 價值在節奏感，關鍵動作原速或慢放）

**4. 成功案例**
- **Lofi Girl**（1500 萬+ 訂閱，月收 $20K-45K 估計）：單一視覺 IP + 無限重複格式 → [youtube.com/@LofiGirl](https://www.youtube.com/@LofiGirl)
- **The Infographics Show**（1500 萬訂閱）：純動畫+旁白 → [youtube.com/@TheInfographicsShow](https://www.youtube.com/@TheInfographicsShow)
- **Cal AI**：純 faceless 解說影片 34 天做到 $1.5M MRR（無創辦人出鏡、無網紅）
- 共同因子：**格式、語調、主題、品質的極度一致性**——觀眾訂閱的是「可預期的體驗」而非人

### 參考連結
- [n8n faceless 影片 workflow（官方模板）](https://n8n.io/workflows/6014-create-faceless-videos-with-gemini-elevenlabs-leonardo-ai-and-shotstack/)
- [n8n 全自動生成+多平台發布模板](https://n8n.io/workflows/3442-fully-automated-ai-video-generation-and-multi-platform-publishing/)
- [YouTube altered/synthetic content 揭露（官方）](https://support.google.com/youtube/answer/14328491)
- [YouTube 揭露標籤說明（官方）](https://support.google.com/youtube/answer/15447836?hl=en)
- [TikTok AI 標籤（官方 Newsroom）](https://newsroom.tiktok.com/en-us/new-labels-for-disclosing-ai-generated-content)
- [TikTok Creator Academy AI label（官方）](https://www.tiktok.com/creator-academy/en/article/ai-generated-content-label)
- [YouTube Inauthentic Content 解析 — Influencer Marketing Hub](https://influencermarketinghub.com/youtube-inauthentic-content/)
- [各平台 AI 揭露規則總表 — IMH](https://influencermarketinghub.com/ai-disclosure-rules/)
- [12 個成功 faceless 頻道 — Vidpros](https://vidpros.com/top-faceless-youtube-channels/)

### 實作練習
- 設計捕夢網的 process video 生產線：①雷切機切割 SVG 圖案的過程（聲音是主角）②編織過程縮時+關鍵步驟原速 ③成品在光下的 reveal——寫出 3 支的分鏡與收音計畫
- 評估：哪個環節值得用 n8n 自動化（字幕？排程？多平台發布？），哪些必須人工

### 產業備註
- 電商/手作：process video 是**零合規風險 + 最高真實感**的路線，優先於任何 AI 生成方案
- 教育：螢幕錄製 + AI 旁白是最低成本組合；注意原創觀點要足（inauthentic 紅線）
- SaaS/工具：product demo 螢幕錄製天然 faceless；HeyGen avatar 適合多語言市場
- B2B：kinetic typography + 數據視覺化適合 LinkedIn 影片
