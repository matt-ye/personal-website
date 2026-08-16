# Q3 Outline（W27-38）：付費成長與數據

> ⚠️ 骨架檔。廣告平台介面與政策變化極快，展開前必須做新鮮度研究。
> 展開後存入 `q3/` 資料夾，格式比照 `q1/` 模組檔。

## W27-29：Meta Ads

**學習目標**：能獨立開一個小預算（$5-10/日）Meta 廣告活動並解讀成效。

研究方向：
- 帳戶結構：Campaign → Ad Set → Ad；CBO vs ABO 現況
- Advantage+ 系列（AI 自動化投放）的現況與適用性
- 受眾策略：broad vs interest vs custom/lookalike audiences——2025 後 broad targeting 為主流的原因
- 素材策略：UGC 風格廣告、創意測試框架、AI 生成素材政策
- Pixel/CAPI 設定（與 GA4 並行的追蹤架構）
- 小預算實戰：最低可行測試預算、何時 scale
- Matt 實作素材：telaaurealab.com 有 pre-ad-spend 的 security obfuscation 待辦（見 memory），投廣告前需一併處理

## W30-31：Google Ads + TikTok Ads 概覽

研究方向：
- Google Search Ads：keyword match types、Quality Score、品牌字防禦
- Performance Max 的黑盒特性與適用場景
- TikTok Ads：Spark Ads（原生貼文加熱）、素材規格
- 三平台（Meta/Google/TikTok）預算分配決策框架

## W32-33：Landing Page 與 CRO

研究方向：
- Landing page 結構：hero、social proof、objection handling、CTA
- 文案框架：PAS、AIDA 應用、價值主張撰寫
- CRO 基礎：熱圖工具（Microsoft Clarity 免費）、session recording、表單優化
- 速度與行動版體驗（Core Web Vitals 商業影響）

## W34-35：A/B 測試方法論

研究方向：
- 統計基礎：樣本數、顯著性、常見誤判（peeking problem）
- 小流量網站的測試策略（sequential testing、大改動優先）
- 工具現況：Google Optimize 已死後的替代品（VWO、Optimizely、Posthog）

## W36-37：GA4 深化（銜接已完成的 ga4-guide 單元）

研究方向：
- 歸因模型實戰應用（data-driven attribution 門檻與解讀）
- Audiences 建立 → Google Ads 再行銷串接
- BigQuery export 實作：RFM 分析 SQL、留存查詢
- Looker Studio dashboard 製作
- Matt 已有基礎：`/projects/one-more-step/ga4-guide/` 涵蓋概念層，本階段做實作層

## W38：行銷自動化

研究方向：
- Email flows：welcome、abandoned cart、post-purchase、win-back
- 工具：Klaviyo（電商）、Kit（創作者）、n8n 自建（Matt 有技術能力）
- Lead scoring 與 lifecycle stage 概念
