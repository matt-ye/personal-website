---
title: 財務報表三表——所有投資數字的源頭
titleEn: "The Three Financial Statements: Where Every Investment Number Comes From"
description: 損益表、資產負債表、現金流量表的結構與關聯；從第一線的營收、成本，一路計算到 EPS、ROIC、本益比，並用杜邦分析拆解 ROE，附完整詞彙查對表。
descriptionEn: "How the income statement, balance sheet and cash flow statement fit together: from top-line revenue and costs through to EPS, ROIC and P/E, plus a DuPont breakdown of ROE and a full glossary."
pubDate: 2026-06-20
lang: zh
series: family-investing
ymyl: true
tags: [財務報表, 損益表, 資產負債表, 現金流量表, 杜邦分析]
draft: false
---

<div class="lang-zh" lang="zh-TW">

前幾篇用過 EPS、P/E、ROIC 這些詞——你可能注意到，這些數字都是從某處「計算來的」。

這篇把所有公式的血緣關係一次整理清楚：從公司賣產品收到的第一筆錢，到你在看盤軟體上看到的本益比，中間每個環節怎麼連起來。文章最後附一張**詞彙查對表**，所有英文縮寫都能隨時對照。

---

## 三張表，各回答一個問題

上市公司每季必須公開三份財務報表，分別回答三個不同的問題：

<div class="stmt-grid">
  <div class="stmt-card is">
    <div class="stmt-icon">📊</div>
    <div class="stmt-title">損益表</div>
    <div class="stmt-en">Income Statement</div>
    <div class="stmt-q">「這段期間，公司賺了多少錢？」</div>
    <div class="stmt-period">期間報表——一季或一年的累計</div>
  </div>
  <div class="stmt-card bs">
    <div class="stmt-icon">⚖️</div>
    <div class="stmt-title">資產負債表</div>
    <div class="stmt-en">Balance Sheet</div>
    <div class="stmt-q">「這個時間點，公司有什麼、欠什麼？」</div>
    <div class="stmt-period">時間點快照——每季末的靜止畫面</div>
  </div>
  <div class="stmt-card cf">
    <div class="stmt-icon">💧</div>
    <div class="stmt-title">現金流量表</div>
    <div class="stmt-en">Cash Flow Statement</div>
    <div class="stmt-q">「現金實際怎麼流進、流出的？」</div>
    <div class="stmt-period">期間報表——追蹤現金的實際移動</div>
  </div>
</div>

三張表不是獨立的。**損益表的淨利會流入資產負債表的股東權益；現金流量表的期末現金等於資產負債表的現金科目。** 拆開看是三份文件，合在一起是同一家公司的完整財務影像。

---

## 逐表拆解：每張表的關鍵數字

先一張一張看清楚每張表的重要科目，最後一個頁籤再看三表如何串成一個閉環。切換頁籤查看：

<div class="dtabs">
<div class="dtab-nav">
  <button class="dtab-btn dtab-active" data-panel="panel-is">📊 損益表</button>
  <button class="dtab-btn" data-panel="panel-bs">⚖️ 資產負債表</button>
  <button class="dtab-btn" data-panel="panel-cf">💧 現金流量表</button>
  <button class="dtab-btn" data-panel="panel-flow">🔗 三表關聯圖</button>
</div>

<div class="dtab-panel dtab-active" id="panel-is">
<div class="sdetail">
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">營業收入</span><span class="sdetail-en">Revenue</span></div>
    <div class="sdetail-desc">公司賣出產品或服務收到的總金額，損益表的第一行（俗稱 <b>top line</b>）。</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">減：銷貨成本</span><span class="sdetail-en">COGS</span></div>
    <div class="sdetail-desc">直接生產成本：原料、直接人工、製造費用。</div>
  </div>
  <div class="sdetail-row result">
    <div class="sdetail-term"><span class="sdetail-zh">＝ 毛利</span><span class="sdetail-en">Gross Profit</span></div>
    <div class="sdetail-desc">營收減直接成本後的利潤。<b>毛利率 = 毛利 ÷ 營收</b>，反映定價能力與生產效率。</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">減：營業費用</span><span class="sdetail-en">OpEx</span></div>
    <div class="sdetail-desc">銷售管理費用＋研發費用，經營公司的間接開銷。</div>
  </div>
  <div class="sdetail-row result">
    <div class="sdetail-term"><span class="sdetail-zh">＝ 營業利益 / EBIT</span><span class="sdetail-en">Operating Income</span></div>
    <div class="sdetail-desc">本業賺錢能力，剔除利息與稅的影響，方便跨公司比較。</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">± 業外損益、利息、所得稅</span><span class="sdetail-en">Non-op / Tax</span></div>
    <div class="sdetail-desc">轉投資、匯兌、利息支出、所得稅等本業以外的加減項。</div>
  </div>
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">＝ 淨利</span><span class="sdetail-en">Net Income</span></div>
    <div class="sdetail-desc">損益表最後一行（俗稱 <b>bottom line</b>），股東最終可分配的獲利，也是 EPS 的分子。</div>
  </div>
</div>
<p class="mermaid-note"><b>EBITDA</b>＝EBIT＋折舊攤銷，併購估值時常用，因為它不受各家折舊政策差異影響。</p>
</div><!-- end panel-is -->

<div class="dtab-panel" id="panel-bs">
<div class="sdetail">
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">總資產</span><span class="sdetail-en">Total Assets</span></div>
    <div class="sdetail-desc">公司擁有的一切：<b>流動資產</b>（現金、應收帳款、存貨）＋<b>非流動資產</b>（廠房、設備、無形資產）。</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">總負債</span><span class="sdetail-en">Total Liabilities</span></div>
    <div class="sdetail-desc">公司欠的一切：<b>流動負債</b>（應付帳款、短期借款）＋<b>非流動負債</b>（長期借款、公司債）。</div>
  </div>
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">股東權益</span><span class="sdetail-en">Equity</span></div>
    <div class="sdetail-desc">＝ 總資產 − 總負債，真正屬於股東的部分。＝ 股本＋資本公積＋<b>保留盈餘</b>（歷年淨利累積）＋…</div>
  </div>
</div>
<p class="mermaid-note"><b>會計恆等式：資產 = 負債 + 股東權益。</b> 這是資產負債表永遠「平衡」的原因——左邊列「有什麼」，右邊列「錢從哪來」。</p>
</div><!-- end panel-bs -->

<div class="dtab-panel" id="panel-cf">
<div class="sdetail">
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">營業活動現金流</span><span class="sdetail-en">Operating CF · OCF</span></div>
    <div class="sdetail-desc">本業實際收到的現金。間接法從<b>淨利</b>起算，加回折舊、再調整營運資金變動。</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">投資活動現金流</span><span class="sdetail-en">Investing CF</span></div>
    <div class="sdetail-desc">買賣長期資產的現金，最大宗通常是<b>資本支出 CapEx</b>（蓋廠、買設備）。</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">融資活動現金流</span><span class="sdetail-en">Financing CF</span></div>
    <div class="sdetail-desc">和資金來源有關的現金：借款、還款、發新股、發放股利。</div>
  </div>
  <div class="sdetail-row result">
    <div class="sdetail-term"><span class="sdetail-zh">自由現金流</span><span class="sdetail-en">Free Cash Flow · FCF</span></div>
    <div class="sdetail-desc">＝ OCF − CapEx，公司維持營運後真正「剩下」的現金，被稱為最誠實的指標。</div>
  </div>
</div>
<p class="mermaid-note">三大活動現金流加總 = 當期現金淨變動；<b>期末現金餘額會等於資產負債表的現金科目</b>，這就是三表勾稽的閉環。</p>
</div><!-- end panel-cf -->

<div class="dtab-panel" id="panel-flow">
<p style="font-size:0.85rem;color:var(--color-text-muted);margin:0 0 0.9rem;">三大報表為主節點（藍=損益表、橙=資產負債表、綠=現金流量表），跨表箭頭顯示數字的實際流向，底部為衍生指標。設計概念參考林明樟（MJ Lin）財報圖示化教學法。</p>
<div class="sflow-wrap">
  <div class="sflow-stmts">
    <div class="sflow-stmt is">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">📊</span>
        <span class="sflow-stmt-title">損益表</span>
        <span class="sflow-stmt-en">Income Statement</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line">營業收入 <span class="sflow-num">Revenue</span></div>
        <div class="sflow-line sub">− 銷貨成本 COGS</div>
        <div class="sflow-line result">毛利 <span class="sflow-num">Gross Profit</span></div>
        <div class="sflow-line sub">− 營業費用 OpEx</div>
        <div class="sflow-line result">EBIT</div>
        <div class="sflow-line sub">+ 折舊攤銷 D&amp;A</div>
        <div class="sflow-line result">EBITDA</div>
        <div class="sflow-sep"></div>
        <div class="sflow-line result key">淨利 Net Income →</div>
      </div>
    </div>
    <div class="sflow-stmt bs">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">⚖️</span>
        <span class="sflow-stmt-title">資產負債表</span>
        <span class="sflow-stmt-en">Balance Sheet</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line">總資產 <span class="sflow-num">Assets</span></div>
        <div class="sflow-line sub">流動資產（含現金）</div>
        <div class="sflow-line sub">非流動資產</div>
        <div class="sflow-line">總負債 <span class="sflow-num">Liabilities</span></div>
        <div class="sflow-sep"></div>
        <div class="sflow-line result key">股東權益 Equity</div>
        <div class="sflow-eq">資產 = 負債 + 股東權益</div>
      </div>
    </div>
    <div class="sflow-stmt cf">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">💧</span>
        <span class="sflow-stmt-title">現金流量表</span>
        <span class="sflow-stmt-en">Cash Flow Statement</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line sub">± 折舊 ± 營運資金變動</div>
        <div class="sflow-line result key">營業現金流 OCF</div>
        <div class="sflow-line sub">− 資本支出 CapEx</div>
        <div class="sflow-line result">自由現金流 FCF</div>
      </div>
    </div>
  </div>
  <div class="sflow-connections">
    <div class="sflow-conn">
      <span class="sflow-conn-badge is">損益表 · 淨利</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge bs">資產負債表 · 保留盈餘</span>
      <span class="sflow-conn-label">淨利轉入股東權益（每期末累計）</span>
    </div>
    <div class="sflow-conn">
      <span class="sflow-conn-badge is">損益表 · 淨利</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge cf">現金流量表 · OCF</span>
      <span class="sflow-conn-label">間接法：淨利為現金流量表起算點</span>
    </div>
    <div class="sflow-conn">
      <span class="sflow-conn-badge cf">現金流量表 · 期末現金</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge bs">資產負債表 · 現金科目</span>
      <span class="sflow-conn-label">期末現金餘額恆等於資產負債表現金（三表勾稽）</span>
    </div>
  </div>
</div>
</div><!-- end panel-flow -->

</div><!-- end .dtabs -->

### 損益表：獲利的階梯

**毛利率（Gross Margin）** 是第一個關鍵指標：

<div class="formula">
毛利率 = 毛利 ÷ 營業收入 = (營業收入 − 銷貨成本) ÷ 營業收入
</div>

毛利率反映定價能力和生產效率。台積電長年毛利率超過 50%，代表每賣 100 元只需花不到 50 元的直接生產成本——護城河的財務信號之一。一般製造業毛利率可能只有 15–25%。

**EBIT（稅前息前盈餘）** 把「借了多少錢（利息）」和「稅率」剔除，讓不同資本結構的公司更可比較。財報上常見的「營業利益（Operating Income）」在絕大多數情況下與 EBIT 相當接近，但 EBIT 嚴格上還包含業外損益，兩者可能有小差異——閱讀台灣上市公司財報時，看「營業利益」即可。

**EBITDA** 再加回折舊攤銷，常用於 M&A（企業併購）的估值，因為不同公司的折舊政策不同，加回後更可比。但 **EBITDA 不等於現金流**——因為公司仍需要真實的 CapEx 來維修和更新設備。

### 資產負債表：公司的家底

資產負債表永遠遵守**會計恆等式**：

<div class="formula">
總資產 = 總負債 + 股東權益
</div>

左邊是「公司有什麼」，右邊是「這些資產的錢從哪來」——一部分是借來的（負債），一部分是股東的（權益）。**折舊攤銷（D&A）** 也藏在這裡：工廠設備買的時候付了現金（資產），但費用是分幾十年「攤提」到損益表上。**折舊是費用，但不是當期的現金支出。** 這正是損益表淨利和現金流量表現金不一樣的主因之一。

股東權益裡最重要的科目是**保留盈餘**——它累積了歷年的淨利，這就是損益表和資產負債表的接點。

### 現金流量表：最誠實的一張

**自由現金流（FCF）** 是很多職業投資人最重視的指標，因為它代表公司在維持現有業務後真正「剩下」的現金：

<div class="formula">
FCF = 營業現金流（OCF）− 資本支出（CapEx）
</div>

護城河寬的公司不需要大量 CapEx 就能維持競爭地位，FCF 因此更高。FCF 也比淨利難以用會計手段美化——這就是為什麼它被稱為「最誠實的指標」。

---

## 為什麼「有獲利的公司」也可能倒閉？

這是財報最反直覺的地方，也是現金流量表存在的核心原因。

<div class="callout">
  <strong>應計制（Accrual Accounting）vs. 現金制</strong><br><br>
  損益表遵循「應計制」：收入在<strong>交貨或提供服務時</strong>認列，不管有沒有收到錢。<br><br>
  例：你在 12 月出貨給大客戶，發了 800 萬元的發票，但客戶 90 天後才付款——損益表上 12 月就認列了 800 萬收入，但現金要到隔年 3 月才進帳。<br><br>
  一家快速成長的公司，可能帳面獲利漂亮，但應收帳款暴增、庫存積壓、CapEx 過重，導致現金持續流出。公司倒閉不是因為「帳面虧損」，而是因為「付不出薪水」。
</div>

這就是為什麼要同時看淨利和 FCF。**淨利和 FCF 長期嚴重背離，是財報品質的警訊。**

---

## 杜邦分析：拆解 ROE 的三條路

介紹完三張表後，我們把最核心的報酬率指標 **ROE（股東權益報酬率）** 拿出來，用**杜邦分析（DuPont Analysis）** 拆開——這套框架把 ROE 拆成三個相乘的因子，每個因子再往下接到三張表的原始數字，是看懂「一家公司為什麼賺錢」最好用的地圖。

<div class="callout">
  <strong>杜邦三因子拆解</strong><br><br>
  <code>ROE = 淨利率 × 總資產周轉率 × 權益乘數（財務槓桿）</code><br>
  <code style="font-size:0.8rem;">= (淨利÷營收) × (營收÷總資產) × (總資產÷股東權益)</code><br><br>
  高 ROE 可以來自三條完全不同的路：(1) 高利潤率（台積電、奢侈品牌），(2) 高資產周轉率（零售商、快消品），(3) 高財務槓桿（銀行、高負債公司）。同樣的 ROE 數字，風險性質截然不同。
</div>

下面這張杜邦樹由上往下讀：樹頂用恆等式 P/B ＝ P/E × ROE 接上市場估值，往下拆成三因子，再分岔到三張表的第一線數字：

<div class="ftree-legend" style="margin-bottom:0.9rem;">
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#f43f5e"></span>市場價格</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#8b5cf6"></span>ROE（跨表）</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#64748b"></span>杜邦三因子（比率）</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#3b82f6"></span>損益表</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#f59e0b"></span>資產負債表</span>
</div>
<div class="dpt-scroll">
<div class="dpt">
  <div class="dpt-market">
    <div class="dpt-node mkt">
      <div class="dpt-name">P/E 本益比</div>
      <div class="dpt-formula">= 股價 ÷ EPS</div>
    </div>
    <div class="dpt-node mkt">
      <div class="dpt-name">P/B 股價淨值比</div>
      <div class="dpt-formula">= P/E × ROE</div>
    </div>
  </div>
  <div class="dpt-bridge">市場估值與經營績效在這裡接軌：P/B ＝ P/E × ROE</div>
  <div class="dpt-rootrow">
    <div class="dpt-node root">
      <div class="dpt-name">ROE 股東權益報酬率</div>
      <div class="dpt-formula">= 淨利 ÷ 股東權益 ＝ 下面三個因子相乘</div>
    </div>
  </div>
  <div class="dpt-down"></div>
  <div class="dpt-row">
    <div class="dpt-cell">
      <div class="dpt-node factor">
        <div class="dpt-role">賺錢能力</div>
        <div class="dpt-name">淨利率</div>
        <div class="dpt-formula">= 淨利 ÷ 營收</div>
      </div>
      <div class="dpt-down"></div>
      <div class="dpt-row">
        <div class="dpt-cell">
          <div class="dpt-node is">
            <div class="dpt-name">淨利</div>
            <div class="dpt-break">= 營收 − 成本費用<br>± 業外 − 所得稅</div>
          </div>
        </div>
        <div class="dpt-cell">
          <div class="dpt-node is">
            <div class="dpt-name">營業收入</div>
            <div class="dpt-break">第一線：賣出<br>產品與服務</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dpt-cell">
      <div class="dpt-node factor">
        <div class="dpt-role">經營效率</div>
        <div class="dpt-name">× 總資產周轉率</div>
        <div class="dpt-formula">= 營收 ÷ 總資產</div>
      </div>
      <div class="dpt-down"></div>
      <div class="dpt-row">
        <div class="dpt-cell">
          <div class="dpt-node is">
            <div class="dpt-name">營業收入</div>
            <div class="dpt-break">（與左側<br>同一數字）</div>
          </div>
        </div>
        <div class="dpt-cell">
          <div class="dpt-node bs">
            <div class="dpt-name">總資產</div>
            <div class="dpt-break">= 現金＋應收＋<br>存貨＋廠房設備…</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dpt-cell">
      <div class="dpt-node factor">
        <div class="dpt-role">財務槓桿</div>
        <div class="dpt-name">× 權益乘數</div>
        <div class="dpt-formula">= 總資產 ÷ 股東權益</div>
      </div>
      <div class="dpt-down"></div>
      <div class="dpt-row">
        <div class="dpt-cell">
          <div class="dpt-node bs">
            <div class="dpt-name">總資產</div>
            <div class="dpt-break">（與中間<br>同一數字）</div>
          </div>
        </div>
        <div class="dpt-cell">
          <div class="dpt-node bs">
            <div class="dpt-name">股東權益</div>
            <div class="dpt-break">= 股本＋資本公積＋<br>保留盈餘（歷年淨利累積）…</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<p class="mermaid-note">相鄰因子的分子與分母（營收、總資產）會互相約分，三個比率相乘剛好還原成「淨利 ÷ 股東權益」。注意右下角的「保留盈餘」：股東權益裡累積的正是損益表歷年的淨利——杜邦樹本身就把損益表和資產負債表縫在一起。</p>
<div class="dpt-extra">
  <div class="dpt-extra-title">杜邦樹之外的常用指標（同樣源自三張表，關聯見上方「三表關聯圖」）</div>
  <div class="dpt-extra-grid">
    <span class="sflow-chip is">EPS ＝ 淨利 ÷ 流通股數</span>
    <span class="sflow-chip cross">ROIC ＝ NOPAT ÷ 投入資本</span>
    <span class="sflow-chip cf">FCF ＝ OCF − CapEx</span>
    <span class="sflow-chip cross">EV/EBITDA</span>
    <span class="sflow-chip mkt">殖利率 ＝ 每股股息 ÷ 股價</span>
  </div>
</div>

把台積電 2023 年的數字套進杜邦樹：

<div class="formula">
台積電 2023 杜邦拆解（以期末數約略計算）<br>
淨利率　　　= 8,385億 ÷ 營收 2.16兆 ≈ 38.8%<br>
總資產周轉率 = 2.16兆 ÷ 總資產 5.53兆 ≈ 0.39<br>
權益乘數　　= 5.53兆 ÷ 股東權益 3.46兆 ≈ 1.6<br>
ROE ≈ 38.8% × 0.39 × 1.6 ≈ 24%
</div>

台積電的高 ROE 幾乎全部來自超高淨利率，財務槓桿貢獻很低——三條路中品質最好的一種。

**ROIC（投入資本回報率）** 比 ROE 更精準：ROE 可以用借錢（槓桿）人為拉高，ROIC 計算的是真正「投入的資本」賺了多少：

<div class="formula">
NOPAT = EBIT × (1 − 稅率)　　←剔除利息，只看本業回報<br>
投入資本 = 股東權益 + 有息負債（銀行借款＋公司債）<br>
ROIC = NOPAT ÷ 投入資本<br><br>
（分析師通常用「期初+期末投入資本 ÷ 2」的平均值作為分母，以反映全年平均水準）
</div>

ROIC 長期超過 15%，通常代表護城河存在（上一篇的核心論點）。

---

## 估值倍數：把財報接上市場價格

最後這層需要**市場股價**加入計算，是財務分析和市場情緒的交界點：

- **P/E（本益比）**：市場願意為每 1 元獲利付多少倍？（我們在第四篇已詳細討論）
- **P/B（股價淨值比）**：市場對公司資產的評價是帳面價值的幾倍？P/B < 1 通常表示市場預期該公司的 ROE 將低於資金成本，或資產存在減損疑慮——並非單純「公司資產不值帳面數字」。P/B ＝ P/E × ROE，正是杜邦樹樹頂與市場估值的接點。
- **EV/EBITDA**：常用於跨公司比較，因為剔除了資本結構差異。EV = 市值 + 有息負債（銀行借款＋公司債）− 現金及約當現金。注意：淨負債不是「總負債 − 現金」，而是「**有息負債** − 現金」，兩者差距可能很大。
- **殖利率**：每年發放的股息相對股價的比例，強調現金回報。

---

## 台積電 2023 年的數字對照

用前面的公式對照台積電 2023 年的實際數字：

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">2.16 兆</div>
    <div class="stat-label">營業收入<br>Revenue（TWD）</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">54.4%</div>
    <div class="stat-label">毛利率<br>Gross Margin</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">42.6%</div>
    <div class="stat-label">營業利益率<br>Operating Margin</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">8,385 億</div>
    <div class="stat-label">淨利<br>Net Income（TWD）</div>
  </div>
</div>

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">32.34 元</div>
    <div class="stat-label">EPS（TWD）</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">~24%</div>
    <div class="stat-label">ROIC</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">約 2,900 億</div>
    <div class="stat-label">自由現金流 FCF<br>（TWD）</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">~18 倍</div>
    <div class="stat-label">P/E<br>（2023 年底）</div>
  </div>
</div>

注意 FCF（約 2,900 億＝營業現金流 1.24 兆 − CapEx 約 9,500 億）遠低於淨利（8,385 億）——這不是壞事，而是台積電正在大規模擴廠，把大量現金投入未來的生產能力。判斷「FCF 低是好事還是壞事」，需要結合公司的成長計劃來看。

*資料來源：台積電 2023 年年報*

---

## 小結

- 三張表是同一個故事的不同切面：損益表看賺不賺、資產負債表看健不健康、現金流量表看有沒有真錢
- 所有投資指標都能追溯到最底層的營收和成本數字——三表關聯圖與杜邦樹是你的導航地圖
- **損益表的獲利 ≠ 現金流量表的現金**——長期背離是財報品質的警訊
- ROE ＝ **淨利率 × 資產周轉率 × 權益乘數**——同樣的 ROE 數字，來路不同，品質天差地遠
- ROIC 長期 > 15%，護城河通常存在；FCF 高且穩定，護城河最可靠
- EV/EBITDA 和 P/B 是 P/E 以外的常用估值角度，各有適用場景

下一篇，我們進入**選股實戰的初步健檢**：有了這些工具，如何在 20 分鐘內對一家公司做基本的財報診斷？

---

## 詞彙查對表

文章用到的英文縮寫一次對照，看不懂時隨時回來查：

<div class="gloss">
  <div class="gloss-cat">損益表 Income Statement</div>
  <div class="gloss-row">
    <div class="gloss-abbr">Revenue</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">營業收入</span> <span class="gloss-en">營收 / top line</span></div><div class="gloss-note">賣出產品或服務的總金額，損益表第一行。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">COGS</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">銷貨成本</span> <span class="gloss-en">Cost of Goods Sold</span></div><div class="gloss-note">直接生產成本：原料、直接人工、製造費用。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">OpEx</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">營業費用</span> <span class="gloss-en">Operating Expenses</span></div><div class="gloss-note">銷售管理費用＋研發費用等間接開銷。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EBIT</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">稅前息前盈餘</span> <span class="gloss-en">Earnings Before Interest &amp; Taxes</span></div><div class="gloss-note">約等於「營業利益」，衡量本業賺錢能力。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EBITDA</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">息稅折舊攤銷前盈餘</span> <span class="gloss-en">EBIT + Depreciation &amp; Amortization</span></div><div class="gloss-note">EBIT 再加回折舊攤銷，併購估值常用。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">D&amp;A</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">折舊與攤銷</span> <span class="gloss-en">Depreciation &amp; Amortization</span></div><div class="gloss-note">設備／無形資產分年攤提的費用，是費用但非當期現金支出。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">Net Income</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">淨利</span> <span class="gloss-en">淨利 / bottom line</span></div><div class="gloss-note">損益表最後一行，股東最終可分配的獲利。</div></div>
  </div>

  <div class="gloss-cat">資產負債表 Balance Sheet</div>
  <div class="gloss-row">
    <div class="gloss-abbr">Assets</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">總資產</span> <span class="gloss-en">Total Assets</span></div><div class="gloss-note">流動資產（現金、應收、存貨）＋非流動資產（廠房、設備）。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">Liabilities</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">總負債</span> <span class="gloss-en">Total Liabilities</span></div><div class="gloss-note">流動負債＋非流動負債（含有息負債）。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">Equity</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">股東權益</span> <span class="gloss-en">Shareholders' Equity</span></div><div class="gloss-note">＝ 總資產 − 總負債 ＝ 股本＋資本公積＋保留盈餘…</div></div>
  </div>

  <div class="gloss-cat">現金流量表 Cash Flow</div>
  <div class="gloss-row">
    <div class="gloss-abbr">OCF</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">營業活動現金流</span> <span class="gloss-en">Operating Cash Flow</span></div><div class="gloss-note">本業實際收到的現金，間接法從淨利起算。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">CapEx</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">資本支出</span> <span class="gloss-en">Capital Expenditures</span></div><div class="gloss-note">蓋廠、買設備等維持／擴張產能的現金支出。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">FCF</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">自由現金流</span> <span class="gloss-en">Free Cash Flow</span></div><div class="gloss-note">＝ OCF − CapEx，公司維持營運後真正剩下的現金。</div></div>
  </div>

  <div class="gloss-cat">報酬率 Return Metrics</div>
  <div class="gloss-row">
    <div class="gloss-abbr">EPS</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">每股盈餘</span> <span class="gloss-en">Earnings Per Share</span></div><div class="gloss-note">＝ 淨利 ÷ 流通股數，本益比的分母來源。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">ROE</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">股東權益報酬率</span> <span class="gloss-en">Return on Equity</span></div><div class="gloss-note">＝ 淨利 ÷ 股東權益，杜邦三因子相乘的結果。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">ROIC</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">投入資本回報率</span> <span class="gloss-en">Return on Invested Capital</span></div><div class="gloss-note">＝ NOPAT ÷ 投入資本，比 ROE 更不易被槓桿灌水。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">NOPAT</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">稅後淨營業利益</span> <span class="gloss-en">Net Operating Profit After Tax</span></div><div class="gloss-note">＝ EBIT × (1 − 稅率)，ROIC 的分子。</div></div>
  </div>

  <div class="gloss-cat">估值 Valuation</div>
  <div class="gloss-row">
    <div class="gloss-abbr">P/E</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">本益比</span> <span class="gloss-en">Price-to-Earnings</span></div><div class="gloss-note">＝ 股價 ÷ EPS，市場為每 1 元獲利付多少倍。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">P/B</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">股價淨值比</span> <span class="gloss-en">Price-to-Book</span></div><div class="gloss-note">＝ 股價 ÷ 每股淨值 ＝ P/E × ROE。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">BVPS</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">每股淨值</span> <span class="gloss-en">Book Value Per Share</span></div><div class="gloss-note">＝ 股東權益 ÷ 流通股數。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EV</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">企業價值</span> <span class="gloss-en">Enterprise Value</span></div><div class="gloss-note">＝ 市值 + 有息負債 − 現金，買下整間公司的代價。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EV/EBITDA</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">企業價值倍數</span> <span class="gloss-en">EV ÷ EBITDA</span></div><div class="gloss-note">剔除資本結構差異的跨公司估值倍數。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">DCF</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">現金流折現</span> <span class="gloss-en">Discounted Cash Flow</span></div><div class="gloss-note">用未來 FCF 折現估算公司內在價值的方法。</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">DuPont</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">杜邦分析</span> <span class="gloss-en">DuPont Analysis</span></div><div class="gloss-note">把 ROE 拆成淨利率 × 周轉率 × 權益乘數的框架。</div></div>
  </div>
</div>

---

## 參考資料

1. Aswath Damodaran, *"A Primer on Financial Statements"*, NYU Stern — https://pages.stern.nyu.edu/~adamodar/New_Home_Page/AccPrimer/accstate.htm
2. CFA Institute, *CFA Level I Curriculum: Financial Reporting and Analysis*, CFA Institute, 2024
3. Richard A. Brealey, Stewart C. Myers, Franklin Allen, Alex Edmans, *Principles of Corporate Finance*, 14th ed., McGraw-Hill, 2025
4. Aswath Damodaran, *Investment Valuation: Tools and Techniques for Determining the Value of Any Asset*, 4th ed., Wiley Finance, 2024
5. 台積電 2023 年年報（Annual Report 2023）— https://investor.tsmc.com/english/annual-reports
6. 林明樟（MJ Lin），《財報就像一本故事書》，天下雜誌，財務報表視覺化教學法——三表關聯圖的設計概念參考其圖示化框架
7. DuPont 分析（DuPont Analysis）——1910 年代由杜邦公司的 Donaldson Brown 提出、1920 年代起推廣普及的 ROE 分解框架；現代定義與三因子／五因子拆解見上列 CFA Level I 教材

</div>

<div class="lang-en" lang="en" hidden>

The last few pieces used terms like EPS, P/E and ROIC — and you may have noticed that all of those numbers are *calculated* from somewhere.

This piece traces the whole family tree in one go: from the first dollar a company receives for a product, all the way to the P/E ratio you see in a trading app, and how every link in between connects. A **glossary** at the end lets you look up any abbreviation at any time.

---

## Three statements, three questions

Every listed company must publish three financial statements each quarter, and each answers a different question:

<div class="stmt-grid">
  <div class="stmt-card is">
    <div class="stmt-icon">📊</div>
    <div class="stmt-title">Income statement</div>
    <div class="stmt-en">Income Statement</div>
    <div class="stmt-q">"How much did the company earn over this period?"</div>
    <div class="stmt-period">A period statement — the total for a quarter or a year</div>
  </div>
  <div class="stmt-card bs">
    <div class="stmt-icon">⚖️</div>
    <div class="stmt-title">Balance sheet</div>
    <div class="stmt-en">Balance Sheet</div>
    <div class="stmt-q">"At this moment, what does the company own and owe?"</div>
    <div class="stmt-period">A point-in-time snapshot — a still frame at each quarter end</div>
  </div>
  <div class="stmt-card cf">
    <div class="stmt-icon">💧</div>
    <div class="stmt-title">Cash flow statement</div>
    <div class="stmt-en">Cash Flow Statement</div>
    <div class="stmt-q">"How did cash actually move in and out?"</div>
    <div class="stmt-period">A period statement — tracking real cash movement</div>
  </div>
</div>

The three are not independent. **Net income from the income statement flows into shareholders' equity on the balance sheet; the closing cash on the cash flow statement equals the cash line on the balance sheet.** Read separately they are three documents; read together they are one complete financial picture of the same company.

---

## Statement by statement: the numbers that matter

Take each statement's key line items one at a time, then use the last tab to see how the three close into a single loop. Switch tabs to explore:

<div class="dtabs">
<div class="dtab-nav">
  <button class="dtab-btn dtab-active" data-panel="panel-is-en">📊 Income statement</button>
  <button class="dtab-btn" data-panel="panel-bs-en">⚖️ Balance sheet</button>
  <button class="dtab-btn" data-panel="panel-cf-en">💧 Cash flow</button>
  <button class="dtab-btn" data-panel="panel-flow-en">🔗 How they connect</button>
</div>

<div class="dtab-panel dtab-active" id="panel-is-en">
<div class="sdetail">
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">Revenue</span><span class="sdetail-en">Revenue</span></div>
    <div class="sdetail-desc">Total money received for products and services sold — the first line of the income statement (the <b>top line</b>).</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">Less: cost of goods sold</span><span class="sdetail-en">COGS</span></div>
    <div class="sdetail-desc">Direct production costs: materials, direct labour, manufacturing overhead.</div>
  </div>
  <div class="sdetail-row result">
    <div class="sdetail-term"><span class="sdetail-zh">= Gross profit</span><span class="sdetail-en">Gross Profit</span></div>
    <div class="sdetail-desc">Revenue less direct costs. <b>Gross margin = gross profit ÷ revenue</b>, reflecting pricing power and production efficiency.</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">Less: operating expenses</span><span class="sdetail-en">OpEx</span></div>
    <div class="sdetail-desc">Selling and administrative expenses plus R&amp;D — the indirect cost of running the company.</div>
  </div>
  <div class="sdetail-row result">
    <div class="sdetail-term"><span class="sdetail-zh">= Operating income / EBIT</span><span class="sdetail-en">Operating Income</span></div>
    <div class="sdetail-desc">Earning power of the core business, stripped of interest and tax so companies can be compared.</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">± Non-operating items, interest, income tax</span><span class="sdetail-en">Non-op / Tax</span></div>
    <div class="sdetail-desc">Investments, FX, interest expense, income tax and other items outside the core business.</div>
  </div>
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">= Net income</span><span class="sdetail-en">Net Income</span></div>
    <div class="sdetail-desc">The last line of the income statement (the <b>bottom line</b>) — profit ultimately attributable to shareholders, and the numerator of EPS.</div>
  </div>
</div>
<p class="mermaid-note"><b>EBITDA</b> = EBIT + depreciation and amortisation. It is common in M&amp;A valuation because it isn't distorted by differing depreciation policies.</p>
</div><!-- end panel-is-en -->

<div class="dtab-panel" id="panel-bs-en">
<div class="sdetail">
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">Total assets</span><span class="sdetail-en">Total Assets</span></div>
    <div class="sdetail-desc">Everything the company owns: <b>current assets</b> (cash, receivables, inventory) plus <b>non-current assets</b> (plant, equipment, intangibles).</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">Total liabilities</span><span class="sdetail-en">Total Liabilities</span></div>
    <div class="sdetail-desc">Everything the company owes: <b>current liabilities</b> (payables, short-term borrowing) plus <b>non-current liabilities</b> (long-term loans, corporate bonds).</div>
  </div>
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">Shareholders' equity</span><span class="sdetail-en">Equity</span></div>
    <div class="sdetail-desc">= total assets − total liabilities, the part that genuinely belongs to shareholders. = share capital + capital surplus + <b>retained earnings</b> (accumulated net income) + …</div>
  </div>
</div>
<p class="mermaid-note"><b>The accounting identity: assets = liabilities + equity.</b> This is why a balance sheet always balances — the left side lists what exists, the right side lists where the money came from.</p>
</div><!-- end panel-bs-en -->

<div class="dtab-panel" id="panel-cf-en">
<div class="sdetail">
  <div class="sdetail-row key">
    <div class="sdetail-term"><span class="sdetail-zh">Operating cash flow</span><span class="sdetail-en">Operating CF · OCF</span></div>
    <div class="sdetail-desc">Cash actually received by the core business. The indirect method starts from <b>net income</b>, adds back depreciation, and adjusts for working-capital changes.</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">Investing cash flow</span><span class="sdetail-en">Investing CF</span></div>
    <div class="sdetail-desc">Cash from buying and selling long-term assets; the largest item is usually <b>capital expenditure (CapEx)</b> — building fabs, buying equipment.</div>
  </div>
  <div class="sdetail-row">
    <div class="sdetail-term"><span class="sdetail-zh">Financing cash flow</span><span class="sdetail-en">Financing CF</span></div>
    <div class="sdetail-desc">Cash related to funding sources: borrowing, repayment, issuing shares, paying dividends.</div>
  </div>
  <div class="sdetail-row result">
    <div class="sdetail-term"><span class="sdetail-zh">Free cash flow</span><span class="sdetail-en">Free Cash Flow · FCF</span></div>
    <div class="sdetail-desc">= OCF − CapEx, the cash genuinely left over once the business is sustained. Often called the most honest number in the accounts.</div>
  </div>
</div>
<p class="mermaid-note">The three activity flows sum to the net change in cash for the period; <b>closing cash equals the cash line on the balance sheet</b>, and that is the loop that ties all three statements together.</p>
</div><!-- end panel-cf-en -->

<div class="dtab-panel" id="panel-flow-en">
<p style="font-size:0.85rem;color:var(--color-text-muted);margin:0 0 0.9rem;">The three statements are the main nodes (blue = income statement, orange = balance sheet, green = cash flow), the cross-statement arrows show where numbers actually travel, and derived metrics sit at the bottom. The visual approach draws on MJ Lin's method of teaching financial statements through diagrams.</p>
<div class="sflow-wrap">
  <div class="sflow-stmts">
    <div class="sflow-stmt is">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">📊</span>
        <span class="sflow-stmt-title">Income statement</span>
        <span class="sflow-stmt-en">Income Statement</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line">Revenue <span class="sflow-num">Revenue</span></div>
        <div class="sflow-line sub">− Cost of goods sold, COGS</div>
        <div class="sflow-line result">Gross profit <span class="sflow-num">Gross Profit</span></div>
        <div class="sflow-line sub">− Operating expenses, OpEx</div>
        <div class="sflow-line result">EBIT</div>
        <div class="sflow-line sub">+ Depreciation &amp; amortisation, D&amp;A</div>
        <div class="sflow-line result">EBITDA</div>
        <div class="sflow-sep"></div>
        <div class="sflow-line result key">Net income →</div>
      </div>
    </div>
    <div class="sflow-stmt bs">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">⚖️</span>
        <span class="sflow-stmt-title">Balance sheet</span>
        <span class="sflow-stmt-en">Balance Sheet</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line">Total assets <span class="sflow-num">Assets</span></div>
        <div class="sflow-line sub">Current assets (including cash)</div>
        <div class="sflow-line sub">Non-current assets</div>
        <div class="sflow-line">Total liabilities <span class="sflow-num">Liabilities</span></div>
        <div class="sflow-sep"></div>
        <div class="sflow-line result key">Shareholders' equity</div>
        <div class="sflow-eq">Assets = liabilities + equity</div>
      </div>
    </div>
    <div class="sflow-stmt cf">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">💧</span>
        <span class="sflow-stmt-title">Cash flow statement</span>
        <span class="sflow-stmt-en">Cash Flow Statement</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line sub">± Depreciation ± working-capital change</div>
        <div class="sflow-line result key">Operating cash flow, OCF</div>
        <div class="sflow-line sub">− Capital expenditure, CapEx</div>
        <div class="sflow-line result">Free cash flow, FCF</div>
      </div>
    </div>
  </div>
  <div class="sflow-connections">
    <div class="sflow-conn">
      <span class="sflow-conn-badge is">Income statement · net income</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge bs">Balance sheet · retained earnings</span>
      <span class="sflow-conn-label">Net income rolls into equity, accumulating each period</span>
    </div>
    <div class="sflow-conn">
      <span class="sflow-conn-badge is">Income statement · net income</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge cf">Cash flow · OCF</span>
      <span class="sflow-conn-label">Indirect method: net income is the starting point</span>
    </div>
    <div class="sflow-conn">
      <span class="sflow-conn-badge cf">Cash flow · closing cash</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge bs">Balance sheet · cash</span>
      <span class="sflow-conn-label">Closing cash always equals balance-sheet cash — the three statements tie out</span>
    </div>
  </div>
</div>
</div><!-- end panel-flow-en -->

</div><!-- end .dtabs -->

### The income statement: a staircase of profit

**Gross margin** is the first key metric:

<div class="formula">
gross margin = gross profit ÷ revenue = (revenue − COGS) ÷ revenue
</div>

Gross margin reflects pricing power and production efficiency. TSMC's gross margin has run above 50% for years, meaning every NT$100 of sales costs under NT$50 in direct production — one of the financial signatures of a moat. Ordinary manufacturing might manage only 15–25%.

**EBIT (earnings before interest and taxes)** removes the effects of how much was borrowed (interest) and the tax rate, making companies with different capital structures comparable. The "operating income" line you see in most reports is very close to EBIT in nearly all cases, though strictly EBIT also includes non-operating items, so the two can differ slightly — when reading Taiwanese filings, "operating income" is the line to use.

**EBITDA** adds depreciation and amortisation back on top, and is common in M&A valuation, because depreciation policies differ between companies and adding them back restores comparability. But **EBITDA is not cash flow** — the company still needs real CapEx to maintain and replace its equipment.

### The balance sheet: what the company is made of

The balance sheet always obeys the **accounting identity**:

<div class="formula">
total assets = total liabilities + shareholders' equity
</div>

The left side is what the company has; the right side is where the money for it came from — partly borrowed (liabilities), partly the shareholders' (equity). **Depreciation and amortisation (D&A)** hides here too: the cash for factory equipment was paid at purchase (an asset), but the expense is spread across decades on the income statement. **Depreciation is an expense, but not a cash outflow in the current period.** That is one of the main reasons net income and cash differ.

The most important line inside equity is **retained earnings** — the accumulation of every year's net income, and the joint where the income statement meets the balance sheet.

### The cash flow statement: the honest one

**Free cash flow (FCF)** is what many professional investors watch most closely, because it is the cash genuinely left over after sustaining the existing business:

<div class="formula">
FCF = operating cash flow (OCF) − capital expenditure (CapEx)
</div>

A company with a wide moat doesn't need heavy CapEx to hold its position, so its FCF is higher. FCF is also harder to dress up with accounting choices than net income — which is why it is called the most honest number.

---

## Why can a profitable company still go under?

This is the most counter-intuitive thing in the accounts, and the core reason the cash flow statement exists.

<div class="callout">
  <strong>Accrual accounting vs. cash accounting</strong><br><br>
  The income statement follows accrual accounting: revenue is recognised <strong>when goods are delivered or services rendered</strong>, whether or not the money has arrived.<br><br>
  Example: you ship to a large customer in December and invoice NT$8,000,000, but they pay 90 days later. The income statement books NT$8,000,000 of revenue in December; the cash doesn't arrive until March.<br><br>
  A fast-growing company can show beautiful accounting profit while receivables balloon, inventory piles up, and CapEx runs heavy — with cash flowing steadily out. Companies fail not because of a paper loss, but because they can't make payroll.
</div>

This is why you look at net income and FCF together. **A large, sustained divergence between the two is a warning sign about the quality of the accounts.**

---

## DuPont analysis: three roads to the same ROE

With the three statements covered, let's take the central return metric — **ROE (return on equity)** — and break it apart with **DuPont analysis**. The framework splits ROE into three multiplied factors, each of which connects down to raw numbers on the three statements. It is the best map there is for seeing *why* a company makes money.

<div class="callout">
  <strong>The three-factor breakdown</strong><br><br>
  <code>ROE = net margin × asset turnover × equity multiplier (financial leverage)</code><br>
  <code style="font-size:0.8rem;">= (net income ÷ revenue) × (revenue ÷ total assets) × (total assets ÷ equity)</code><br><br>
  A high ROE can come from three completely different roads: (1) high margins (TSMC, luxury brands), (2) high asset turnover (retailers, fast-moving consumer goods), (3) high leverage (banks, heavily indebted companies). The same ROE number can carry entirely different risk.
</div>

Read the DuPont tree below from the top down: the identity P/B = P/E × ROE joins market valuation at the top, then splits into the three factors, then branches out to the front-line numbers on the statements:

<div class="ftree-legend" style="margin-bottom:0.9rem;">
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#f43f5e"></span>Market price</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#8b5cf6"></span>ROE (cross-statement)</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#64748b"></span>The three DuPont factors (ratios)</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#3b82f6"></span>Income statement</span>
  <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#f59e0b"></span>Balance sheet</span>
</div>
<div class="dpt-scroll">
<div class="dpt">
  <div class="dpt-market">
    <div class="dpt-node mkt">
      <div class="dpt-name">P/E ratio</div>
      <div class="dpt-formula">= share price ÷ EPS</div>
    </div>
    <div class="dpt-node mkt">
      <div class="dpt-name">P/B ratio</div>
      <div class="dpt-formula">= P/E × ROE</div>
    </div>
  </div>
  <div class="dpt-bridge">Market valuation meets operating performance here: P/B = P/E × ROE</div>
  <div class="dpt-rootrow">
    <div class="dpt-node root">
      <div class="dpt-name">ROE, return on equity</div>
      <div class="dpt-formula">= net income ÷ equity = the three factors below, multiplied</div>
    </div>
  </div>
  <div class="dpt-down"></div>
  <div class="dpt-row">
    <div class="dpt-cell">
      <div class="dpt-node factor">
        <div class="dpt-role">Earning power</div>
        <div class="dpt-name">Net margin</div>
        <div class="dpt-formula">= net income ÷ revenue</div>
      </div>
      <div class="dpt-down"></div>
      <div class="dpt-row">
        <div class="dpt-cell">
          <div class="dpt-node is">
            <div class="dpt-name">Net income</div>
            <div class="dpt-break">= revenue − costs and expenses<br>± non-operating − tax</div>
          </div>
        </div>
        <div class="dpt-cell">
          <div class="dpt-node is">
            <div class="dpt-name">Revenue</div>
            <div class="dpt-break">The front line: products<br>and services sold</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dpt-cell">
      <div class="dpt-node factor">
        <div class="dpt-role">Operating efficiency</div>
        <div class="dpt-name">× Asset turnover</div>
        <div class="dpt-formula">= revenue ÷ total assets</div>
      </div>
      <div class="dpt-down"></div>
      <div class="dpt-row">
        <div class="dpt-cell">
          <div class="dpt-node is">
            <div class="dpt-name">Revenue</div>
            <div class="dpt-break">(the same number<br>as on the left)</div>
          </div>
        </div>
        <div class="dpt-cell">
          <div class="dpt-node bs">
            <div class="dpt-name">Total assets</div>
            <div class="dpt-break">= cash + receivables +<br>inventory + plant and equipment…</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dpt-cell">
      <div class="dpt-node factor">
        <div class="dpt-role">Financial leverage</div>
        <div class="dpt-name">× Equity multiplier</div>
        <div class="dpt-formula">= total assets ÷ equity</div>
      </div>
      <div class="dpt-down"></div>
      <div class="dpt-row">
        <div class="dpt-cell">
          <div class="dpt-node bs">
            <div class="dpt-name">Total assets</div>
            <div class="dpt-break">(the same number<br>as in the middle)</div>
          </div>
        </div>
        <div class="dpt-cell">
          <div class="dpt-node bs">
            <div class="dpt-name">Shareholders' equity</div>
            <div class="dpt-break">= share capital + capital surplus +<br>retained earnings (accumulated net income)…</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<p class="mermaid-note">Adjacent factors share a numerator and denominator (revenue, total assets) which cancel, so multiplying the three ratios reduces exactly to "net income ÷ equity". Note "retained earnings" at the bottom right: what accumulates inside equity is precisely the income statement's net income over the years — the DuPont tree itself stitches the income statement and balance sheet together.</p>
<div class="dpt-extra">
  <div class="dpt-extra-title">Common metrics outside the DuPont tree (also from the three statements; see "How they connect" above)</div>
  <div class="dpt-extra-grid">
    <span class="sflow-chip is">EPS = net income ÷ shares outstanding</span>
    <span class="sflow-chip cross">ROIC = NOPAT ÷ invested capital</span>
    <span class="sflow-chip cf">FCF = OCF − CapEx</span>
    <span class="sflow-chip cross">EV/EBITDA</span>
    <span class="sflow-chip mkt">Dividend yield = dividend per share ÷ price</span>
  </div>
</div>

Put TSMC's 2023 numbers into the DuPont tree:

<div class="formula">
TSMC 2023 DuPont breakdown (approximate, using period-end figures)<br>
Net margin　　　= NT$838.5bn ÷ revenue NT$2.16tn ≈ 38.8%<br>
Asset turnover　= NT$2.16tn ÷ total assets NT$5.53tn ≈ 0.39<br>
Equity multiplier = NT$5.53tn ÷ equity NT$3.46tn ≈ 1.6<br>
ROE ≈ 38.8% × 0.39 × 1.6 ≈ 24%
</div>

Almost all of TSMC's high ROE comes from an exceptional net margin, with very little contributed by leverage — the highest-quality of the three roads.

**ROIC (return on invested capital)** is more precise than ROE: ROE can be inflated artificially with borrowing, whereas ROIC measures what the capital genuinely committed actually earned:

<div class="formula">
NOPAT = EBIT × (1 − tax rate)　　← strips out interest, leaving core-business return<br>
invested capital = equity + interest-bearing debt (bank loans + corporate bonds)<br>
ROIC = NOPAT ÷ invested capital<br><br>
(Analysts usually use the average of opening and closing invested capital as the denominator, to reflect the level across the whole year)
</div>

ROIC sustained above 15% usually indicates a moat — the central argument of the previous piece.

---

## Valuation multiples: connecting the accounts to the market price

This final layer brings the **market price** into the calculation, and is where financial analysis meets market sentiment:

- **P/E**: how many times each dollar of earnings is the market willing to pay? (Covered in detail in part four)
- **P/B**: how many times book value does the market put on the company's assets? A P/B below 1 usually means the market expects ROE to fall below the cost of capital, or suspects the assets are impaired — not simply that "the assets aren't worth their book value". P/B = P/E × ROE is exactly the joint between the top of the DuPont tree and market valuation.
- **EV/EBITDA**: common for comparing across companies, because it removes differences in capital structure. EV = market cap + interest-bearing debt (bank loans + corporate bonds) − cash and equivalents. Note: net debt is not "total liabilities − cash" but "**interest-bearing** debt − cash", and the difference can be large.
- **Dividend yield**: the annual dividend relative to the share price, emphasising cash returns.

---

## TSMC's 2023 numbers, side by side

Checking the formulas above against TSMC's actual 2023 figures:

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">NT$2.16tn</div>
    <div class="stat-label">Revenue<br>Revenue (TWD)</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">54.4%</div>
    <div class="stat-label">Gross margin<br>Gross Margin</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">42.6%</div>
    <div class="stat-label">Operating margin<br>Operating Margin</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">NT$838.5bn</div>
    <div class="stat-label">Net income<br>Net Income (TWD)</div>
  </div>
</div>

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">NT$32.34</div>
    <div class="stat-label">EPS (TWD)</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">~24%</div>
    <div class="stat-label">ROIC</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">≈ NT$290bn</div>
    <div class="stat-label">Free cash flow, FCF<br>(TWD)</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">~18×</div>
    <div class="stat-label">P/E<br>(end of 2023)</div>
  </div>
</div>

Note that FCF (about NT$290bn = operating cash flow of NT$1.24tn − CapEx of roughly NT$950bn) is far below net income (NT$838.5bn). That isn't a bad thing: TSMC is building fabs at scale, pouring cash into future production capacity. Judging whether low FCF is good or bad requires reading it alongside the company's growth plans.

*Source: TSMC 2023 annual report*

---

## In short

- The three statements are different cross-sections of one story: the income statement shows whether it earns, the balance sheet whether it's healthy, the cash flow statement whether the money is real
- Every investment metric traces back to bottom-level revenue and cost figures — the connection diagram and the DuPont tree are your navigation maps
- **Profit on the income statement ≠ cash on the cash flow statement** — a sustained divergence is a warning about the quality of the accounts
- ROE = **net margin × asset turnover × equity multiplier** — the same ROE from different roads differs enormously in quality
- ROIC above 15% over time usually means a moat; high, stable FCF is the most reliable sign of one
- EV/EBITDA and P/B are useful valuation angles beyond P/E, each suited to different situations

Next: **a first-pass health check for stock selection** — with these tools in hand, how do you run a basic diagnostic on a company's accounts in twenty minutes?

---

## Glossary

Every abbreviation used in this article, in one place — come back and look any of them up:

<div class="gloss">
  <div class="gloss-cat">Income Statement</div>
  <div class="gloss-row">
    <div class="gloss-abbr">Revenue</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Revenue</span> <span class="gloss-en">turnover / top line</span></div><div class="gloss-note">Total money from products and services sold; the first line of the income statement.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">COGS</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Cost of goods sold</span> <span class="gloss-en">Cost of Goods Sold</span></div><div class="gloss-note">Direct production costs: materials, direct labour, manufacturing overhead.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">OpEx</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Operating expenses</span> <span class="gloss-en">Operating Expenses</span></div><div class="gloss-note">Selling and administrative expenses, R&amp;D, and other indirect costs.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EBIT</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Earnings before interest and taxes</span> <span class="gloss-en">Earnings Before Interest &amp; Taxes</span></div><div class="gloss-note">Roughly equal to "operating income"; measures core-business earning power.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EBITDA</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Earnings before interest, taxes, depreciation and amortisation</span> <span class="gloss-en">EBIT + Depreciation &amp; Amortization</span></div><div class="gloss-note">EBIT with D&amp;A added back; common in M&amp;A valuation.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">D&amp;A</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Depreciation and amortisation</span> <span class="gloss-en">Depreciation &amp; Amortization</span></div><div class="gloss-note">Equipment and intangibles expensed over years; an expense, but not a current-period cash outflow.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">Net Income</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Net income</span> <span class="gloss-en">net profit / bottom line</span></div><div class="gloss-note">The last line of the income statement; profit ultimately attributable to shareholders.</div></div>
  </div>

  <div class="gloss-cat">Balance Sheet</div>
  <div class="gloss-row">
    <div class="gloss-abbr">Assets</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Total assets</span> <span class="gloss-en">Total Assets</span></div><div class="gloss-note">Current assets (cash, receivables, inventory) plus non-current assets (plant, equipment).</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">Liabilities</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Total liabilities</span> <span class="gloss-en">Total Liabilities</span></div><div class="gloss-note">Current plus non-current liabilities, including interest-bearing debt.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">Equity</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Shareholders' equity</span> <span class="gloss-en">Shareholders' Equity</span></div><div class="gloss-note">= total assets − total liabilities = share capital + capital surplus + retained earnings…</div></div>
  </div>

  <div class="gloss-cat">Cash Flow</div>
  <div class="gloss-row">
    <div class="gloss-abbr">OCF</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Operating cash flow</span> <span class="gloss-en">Operating Cash Flow</span></div><div class="gloss-note">Cash actually received by the core business; the indirect method starts from net income.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">CapEx</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Capital expenditure</span> <span class="gloss-en">Capital Expenditures</span></div><div class="gloss-note">Cash spent building fabs, buying equipment — maintaining or expanding capacity.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">FCF</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Free cash flow</span> <span class="gloss-en">Free Cash Flow</span></div><div class="gloss-note">= OCF − CapEx; the cash genuinely left after sustaining operations.</div></div>
  </div>

  <div class="gloss-cat">Return Metrics</div>
  <div class="gloss-row">
    <div class="gloss-abbr">EPS</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Earnings per share</span> <span class="gloss-en">Earnings Per Share</span></div><div class="gloss-note">= net income ÷ shares outstanding; the denominator of the P/E ratio.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">ROE</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Return on equity</span> <span class="gloss-en">Return on Equity</span></div><div class="gloss-note">= net income ÷ equity; the product of the three DuPont factors.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">ROIC</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Return on invested capital</span> <span class="gloss-en">Return on Invested Capital</span></div><div class="gloss-note">= NOPAT ÷ invested capital; harder to inflate with leverage than ROE.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">NOPAT</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Net operating profit after tax</span> <span class="gloss-en">Net Operating Profit After Tax</span></div><div class="gloss-note">= EBIT × (1 − tax rate); the numerator of ROIC.</div></div>
  </div>

  <div class="gloss-cat">Valuation</div>
  <div class="gloss-row">
    <div class="gloss-abbr">P/E</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Price-to-earnings ratio</span> <span class="gloss-en">Price-to-Earnings</span></div><div class="gloss-note">= share price ÷ EPS; the multiple the market pays for each dollar of earnings.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">P/B</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Price-to-book ratio</span> <span class="gloss-en">Price-to-Book</span></div><div class="gloss-note">= share price ÷ book value per share = P/E × ROE.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">BVPS</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Book value per share</span> <span class="gloss-en">Book Value Per Share</span></div><div class="gloss-note">= equity ÷ shares outstanding.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EV</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Enterprise value</span> <span class="gloss-en">Enterprise Value</span></div><div class="gloss-note">= market cap + interest-bearing debt − cash; the cost of buying the whole company.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">EV/EBITDA</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Enterprise value multiple</span> <span class="gloss-en">EV ÷ EBITDA</span></div><div class="gloss-note">A cross-company valuation multiple that removes capital-structure differences.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">DCF</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">Discounted cash flow</span> <span class="gloss-en">Discounted Cash Flow</span></div><div class="gloss-note">Estimating intrinsic value by discounting future FCF.</div></div>
  </div>
  <div class="gloss-row">
    <div class="gloss-abbr">DuPont</div>
    <div class="gloss-body"><div class="gloss-term"><span class="gloss-zh">DuPont analysis</span> <span class="gloss-en">DuPont Analysis</span></div><div class="gloss-note">The framework splitting ROE into net margin × turnover × equity multiplier.</div></div>
  </div>
</div>

---

## References

1. Aswath Damodaran, *"A Primer on Financial Statements"*, NYU Stern — https://pages.stern.nyu.edu/~adamodar/New_Home_Page/AccPrimer/accstate.htm
2. CFA Institute, *CFA Level I Curriculum: Financial Reporting and Analysis*, CFA Institute, 2024
3. Richard A. Brealey, Stewart C. Myers, Franklin Allen, Alex Edmans, *Principles of Corporate Finance*, 14th ed., McGraw-Hill, 2025
4. Aswath Damodaran, *Investment Valuation: Tools and Techniques for Determining the Value of Any Asset*, 4th ed., Wiley Finance, 2024
5. TSMC Annual Report 2023 — https://investor.tsmc.com/english/annual-reports
6. MJ Lin, *Financial Statements Read Like a Storybook* (in Chinese), CommonWealth Magazine — a method for teaching financial statements visually; the connection diagram draws on its diagrammatic framework
7. DuPont analysis — the ROE decomposition framework devised by Donaldson Brown at DuPont in the 1910s and popularised from the 1920s; for the modern definition and the three- and five-factor breakdowns, see the CFA Level I material listed above

</div>
