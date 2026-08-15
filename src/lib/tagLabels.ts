/*
 * 文章標籤的中英對照。
 *
 * 為什麼放在共用模組而不是各頁自己一份：標籤同時出現在文章頁（PostLayout）
 * 與寫作列表（/writing/），兩份對照表遲早會走岔——這輪已經看過太多次
 * 「同一份資料兩個來源」的後果。
 *
 * 沒列到的標籤原樣通過（英文標籤、專有名詞如 ETF），不需要為它們補一行。
 */
export const TAG_EN: Record<string, string> = {
  // 投資
  投資基礎: 'Investing Basics', 心態: 'Mindset', 總體經濟: 'Macroeconomics',
  通膨: 'Inflation', 利率: 'Interest Rates', 股票: 'Stocks',
  公司治理: 'Corporate Governance', 定期定額: 'Dollar-Cost Averaging',
  指數投資: 'Index Investing', 投資心理: 'Investor Psychology',
  護城河: 'Economic Moat', 選股: 'Stock Picking', 競爭優勢: 'Competitive Advantage',
  巴菲特: 'Buffett', 財務報表: 'Financial Statements', 損益表: 'Income Statement',
  資產負債表: 'Balance Sheet', 現金流量表: 'Cash Flow Statement',
  杜邦分析: 'DuPont Analysis', 資產配置: 'Asset Allocation',
  資金分配: 'Capital Allocation', 投資策略: 'Investment Strategy', 再平衡: 'Rebalancing',
  // 簡報與表達
  簡報: 'Presentation', 認知科學: 'Cognitive Science', 職能治療: 'Occupational Therapy',
  表達: 'Communication',
  // 其他
  關於: 'About', 隨筆: 'Essays', 管理思維: 'Management', 發刊詞: 'Introduction',
};

/** 英文情境下取英文標籤；沒有對照的（ETF 這類）原樣回傳。 */
export const tagLabel = (t: string, isEn: boolean) => (isEn ? TAG_EN[t] ?? t : t);
