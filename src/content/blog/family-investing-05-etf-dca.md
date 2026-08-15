---
title: ETF 與定期定額：讓市場幫你工作，讓紀律保護你的心智
titleEn: "ETFs and Dollar-Cost Averaging: Let the Market Work, Let Discipline Protect You"
description: 什麼是 ETF？為什麼 80% 的主動基金長期跑輸大盤？定期定額為何打敗「等最低點再買」？文獻數據與 0050 回測一次說清楚。
descriptionEn: "What an ETF is, why 80% of active funds lag the index over the long run, and why dollar-cost averaging beats waiting for the bottom — with the research and a backtest on Taiwan's 0050."
pubDate: 2026-06-16
lang: zh
series: family-investing
ymyl: true
tags: [ETF, 定期定額, 指數投資, 投資心理]
draft: false
---

上一篇說到：股票是公司所有權，但要挑對一家公司，需要深入研究財報、產業、競爭優勢……這對大多數人來說門檻太高。

ETF 的出現，讓這件事變得不再必要。

---

## ETF 是什麼：買一籃子，不賭單一

**ETF（Exchange-Traded Fund，指數股票型基金）**，就是把很多股票打包成一個「籃子」，你買一單位，等於同時持有裡面所有的公司。

以台灣最知名的 **0050（元大台灣 50）** 為例：

<div class="etf-basket">
  <div class="etf-basket-label">0050 ETF — 你買一股，等於同時持有以下公司</div>
  <div class="etf-basket-grid">
    <span class="etf-stock main">台積電 TSMC ≈33%</span>
    <span class="etf-stock main">鴻海</span>
    <span class="etf-stock main">聯發科</span>
    <span class="etf-stock main">台達電</span>
    <span class="etf-stock main">廣達</span>
    <span class="etf-stock">中華電</span>
    <span class="etf-stock">富邦金</span>
    <span class="etf-stock">國泰金</span>
    <span class="etf-stock">南亞</span>
    <span class="etf-stock">台塑</span>
    <span class="etf-stock more">+ 40 家台灣大型企業</span>
  </div>
</div>

Nokia 倒了，但台灣 50 強整體沒倒——這就是分散的力量。你們觀察手機行業二十幾年，看過多少曾經強大的品牌消失。ETF 不靠預測誰會贏，靠的是「讓強者自然留下來」的機制：當某家公司市值下滑，它在指數裡的比重自動降低，甚至被剔除；新崛起的公司則會加入。

---

## 台灣三大 ETF 比較

<div class="funding-grid">
  <div class="funding-card">
    <div class="funding-card-head">
      <div class="funding-card-icon">🇹🇼</div>
      <div class="funding-card-title">0050</div>
      <div class="funding-card-en">元大台灣 50</div>
    </div>
    <div class="funding-card-body">
      <div class="funding-row">
        <span class="funding-row-label">追蹤</span>
        <span class="funding-row-val">台灣市值前 50 大</span>
      </div>
      <div class="funding-row">
        <span class="funding-row-label">費用率</span>
        <span class="funding-row-val">0.43%／年</span>
      </div>
      <div class="funding-row">
        <span class="funding-row-label">特色</span>
        <span class="funding-row-val">最老牌、流動性最佳，2003 年成立</span>
      </div>
    </div>
  </div>
  <div class="funding-card">
    <div class="funding-card-head">
      <div class="funding-card-icon">💸</div>
      <div class="funding-card-title">006208</div>
      <div class="funding-card-en">富邦台 50</div>
    </div>
    <div class="funding-card-body">
      <div class="funding-row">
        <span class="funding-row-label">追蹤</span>
        <span class="funding-row-val">同樣追蹤台灣前 50 大</span>
      </div>
      <div class="funding-row">
        <span class="funding-row-label">費用率</span>
        <span class="funding-row-val"><strong>0.15%／年</strong>（台灣最低之一）</span>
      </div>
      <div class="funding-row">
        <span class="funding-row-label">特色</span>
        <span class="funding-row-val">與 0050 幾乎相同，費用更低</span>
      </div>
    </div>
  </div>
  <div class="funding-card">
    <div class="funding-card-head">
      <div class="funding-card-icon">💰</div>
      <div class="funding-card-title">0056</div>
      <div class="funding-card-en">元大高股息</div>
    </div>
    <div class="funding-card-body">
      <div class="funding-row">
        <span class="funding-row-label">追蹤</span>
        <span class="funding-row-val">預測高股息的 30 家公司</span>
      </div>
      <div class="funding-row">
        <span class="funding-row-label">費用率</span>
        <span class="funding-row-val">0.34%／年</span>
      </div>
      <div class="funding-row">
        <span class="funding-row-label">特色</span>
        <span class="funding-row-val">配息高但長期總報酬不一定優於 0050</span>
      </div>
    </div>
  </div>
</div>

### 破解迷思：高股息 ≠ 好投資

0056 在台灣很流行，許多人買它是因為「每年配息多」。但這裡有個常見誤解：

<div class="callout">
  公司配出 1 元股息，股價就會下調 1 元（除息）。<br>
  <strong>總財富 = 股價 + 累積股息</strong>，不是只看配息率。<br><br>
  衡量 ETF 真正的表現，要看<strong>含息總報酬（Total Return）</strong>，而不是「每年配了多少」。
  長期回測顯示，0050 的含息總報酬通常優於 0056。
</div>

---

## 為什麼主動管理基金長期跑輸大盤？

有一個問題很多人沒想過：**既然有專業基金經理人整天研究股票，他們應該比指數更厲害才對，為什麼還要買 ETF？**

答案是數據：

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">88%</div>
    <div class="stat-label">美國大型股主動基金<br>15 年跑輸 S&P 500 指數<br><span style="font-size:0.68rem">（S&P SPIVA 2023 年報）</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">80%</div>
    <div class="stat-label">台灣境外基金<br>10 年跑輸對應指數<br><span style="font-size:0.68rem">（金管會統計）</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">1.5%</div>
    <div class="stat-label">一般主動基金<br>年均費用率<br><span style="font-size:0.68rem">（台灣市場均值）</span></div>
  </div>
</div>

原因很簡單：費用、交易成本、人為判斷失誤。基金經理人不是不聰明，而是他們要長期**持續**打敗市場幾乎不可能——而每年的費用卻是確定要扣的。

---

## 費用率：看起來小，30 年後差很大

假設你投入 100 萬元，年均市場報酬 7%，持有 30 年：

<div class="chart-bars">
  <div class="chart-row">
    <span class="chart-label" style="min-width:6rem;font-size:0.75rem">費用 0.15%</span>
    <div class="chart-track"><div class="chart-fill" style="width:100%"></div></div>
    <span class="chart-value">約 729 萬</span>
  </div>
  <div class="chart-row">
    <span class="chart-label" style="min-width:6rem;font-size:0.75rem">費用 0.43%</span>
    <div class="chart-track"><div class="chart-fill" style="width:94%"></div></div>
    <span class="chart-value">約 682 萬</span>
  </div>
  <div class="chart-row">
    <span class="chart-label" style="min-width:6rem;font-size:0.75rem">費用 1.50%</span>
    <div class="chart-track"><div class="chart-fill" style="width:68%;opacity:0.5"></div></div>
    <span class="chart-value" style="color:#d97706">約 498 萬</span>
  </div>
  <div class="chart-row">
    <span class="chart-label" style="min-width:6rem;font-size:0.75rem">費用 2.00%</span>
    <div class="chart-track"><div class="chart-fill" style="width:59%;opacity:0.4"></div></div>
    <span class="chart-value" style="color:#dc2626">約 432 萬</span>
  </div>
</div>

費用率差 1.85%，30 年後少了將近 **300 萬**。費用是投資唯一確定的成本，選低費用 ETF 是最穩定的「獲利」方式之一。

---

## 美股 ETF 簡介

台灣 ETF 集中在台灣市場，若想分散到全球，美股 ETF 是選項：

| ETF | 追蹤指數 | 費用率 | 內含股票數 |
|-----|----------|--------|------------|
| **VOO** | S&P 500（美國前 500 大） | 0.03% | 約 500 支 |
| **VTI** | 全美股市 | 0.03% | 約 3,700 支 |
| **QQQ** | NASDAQ 100（科技為主） | 0.20% | 100 支 |

VOO 和 VTI 費用率極低，台積電的 ADR 也包含在 S&P 500 內。如果你相信美國整體經濟長期成長，VTI 是最廣的分散選項。

---

## 定期定額：解決「不知道什麼時候買」的問題

有了 ETF，還有一個問題：**什麼時候買？**

答案是：**每個月固定買，不管價格**。這叫做**定期定額（Dollar-Cost Averaging，DCA）**。

邏輯很簡單：
- 股價低的月份，同樣的錢買到更多股
- 股價高的月份，買到較少股
- 長期下來，自動拉低平均成本

以 0050 為例（元大投信回測）：從 2022 年 4 月每月固定投入，持續到 2026 年 4 月，**定期定額 4 年，總報酬達 123.95%**——而單筆 All-in 需要你「猜對進場那一天」。

---

## 最大的迷思：「我要等最低點再買」

這是摧毀最多投資人報酬的心態。讓我用數據說話。

### 數據一：連「神」都贏不了定期定額

理財作家 Nick Maggiulli（《Of Dollars and Data》）做了一個思想實驗：假設有一個**全知全能的投資人**，每次都能精準買在歷史最低點。

<div class="callout">
  <strong>結論：即便是完美預知未來、每次精準買在底部，定期定額仍然贏過「等最低點策略」70% 的時間。</strong><br><br>
  若預測稍有偏差（底部前後各 2 個月），「等最低點」的策略勝率僅剩 <strong>3%</strong>。<br><br>
  原因：市場大多數時候在上漲。等在場外的代價，往往超過精準進場的好處。
  <br><br>
  <span style="font-size:0.78rem;color:var(--color-text-muted)">來源：Nick Maggiulli, "Even God Couldn't Beat Dollar-Cost Averaging", ofdollarsanddata.com</span>
</div>

### 數據二：Charles Schwab 20 年研究

以每年投入 2,000 美元到 S&P 500（2003–2022 年）：

| 策略 | 最終資產 |
|------|----------|
| 完美擇時（每年精準買在最低點） | 約 $138,000 |
| 年初立刻投入（DCA 變體） | 約 $127,000 |
| 最差擇時（每年買在最高點） | 約 $121,000 |
| 完全不投資，放在現金 | 約 $66,000 |

**幾個驚人結論：**
- 完美擇時 vs 最差擇時，相差只有 **$17,000（約 14%）**
- 完全不投資比任何策略都糟，差距高達 **2 倍**
- 擇時的影響遠小於「有沒有投資」

### 數據三：0050 買哪天都差不多

元大投信對 0050 做回測：不論每月哪一天買進（月初、月底、高點、低點），**長期年化報酬率差距僅 0.x 個百分點**。

<div class="callout">
  <strong>最大的風險不是「買貴了」，是「沒有買」。</strong>
</div>

---

## 進階：逢低加碼——紀律比直覺更重要

純粹定期定額很好，但有一個可以提升的做法：**逢低加碼（Value Averaging）**。

**重點在於：靠規則，不靠感覺。**

學術根據來自 Michael Edleson（哈佛商學院）1988 年的研究《Value Averaging》：
- 設定「目標價值路徑」，市場跌時多買，漲時少買
- 歷史回測 IRR 約 **12%／年**，純定期定額約 **10%／年**

台灣 0050 的實際回測（聯合新聞網報導）也顯示：系統性逢低加碼的平均持股成本約 **114 元**，比純定期定額的 **141 元** 低了近兩成，波段報酬相差約 **40 個百分點**。

**怎麼做？預先訂好規則，不靠臨時決策：**

<div class="scenario-grid">
  <div class="scenario-card hike">
    <div class="scenario-head">
      <span class="scenario-icon">❌</span>
      <div>
        <div class="scenario-title">感覺式逢低加碼</div>
        <div class="scenario-sub">靠情緒判斷，幾乎沒人做得到</div>
      </div>
    </div>
    <ul class="scenario-items">
      <li class="down">「好像差不多低了…再等等？」</li>
      <li class="down">市場大跌時更害怕，反而停扣</li>
      <li class="down">每次都等「更低」，永遠沒進場</li>
      <li class="down">心理壓力極大，難以持續</li>
    </ul>
  </div>
  <div class="scenario-card cut">
    <div class="scenario-head">
      <span class="scenario-icon">✅</span>
      <div>
        <div class="scenario-title">規則式逢低加碼</div>
        <div class="scenario-sub">預先設定，機械執行，移除情緒</div>
      </div>
    </div>
    <ul class="scenario-items">
      <li class="up">平時：每月定額 5,000 元</li>
      <li class="up">跌 10%：當月加碼至 8,000 元</li>
      <li class="up">跌 20%：當月加碼至 12,000 元</li>
      <li class="up">不需判斷「還會不會更低」</li>
    </ul>
  </div>
</div>

這個方法的心理挑戰在於：**最需要加碼的時候，恰好是市場最恐慌的時候。** 這也是為什麼「寫下規則、預先承諾」比「到時候再說」重要——人在恐慌中做的決定往往是錯的。

---

## 全美股市場 vs 台灣市場

一個實際的問題：應該買台灣 ETF（0050/006208）還是美股 ETF（VOO/VTI）？

沒有絕對答案，考量點：

| | 台灣 ETF | 美股 ETF |
|--|----------|----------|
| 幣別 | 台幣 | 美元（有匯率風險） |
| 稅務 | 股利所得需申報 | 海外所得，需注意最低稅負制 |
| 操作門檻 | 台灣券商，熟悉 | 需開複委託或海外帳戶 |
| 分散程度 | 台灣市場集中度高 | 全球最大市場，分散更廣 |

一個務實的出發點：**先把台灣 ETF（0050/006208）搞熟，建立定期定額習慣，之後再視需求配置美股 ETF。**

---

## 小結：三件事就夠

<div class="callout">
  <strong>第一：選低費用指數 ETF</strong>（0050 或 006208 都可以，費用差異不大）<br><br>
  <strong>第二：定期定額，不管市場漲跌</strong>（最大的風險是沒有買）<br><br>
  <strong>第三：逢低時加碼，但要靠規則不靠感覺</strong>（預先訂好加碼條件，市場恐慌時機械執行）
</div>

下一篇，我們來談**如何讀財務報表的三個核心數字**：損益表、資產負債表、現金流量表——看懂這些，你才能判斷一家公司值不值得長期持有。

---

*參考來源：*
*· Vanguard Research (2012): [Dollar-cost averaging just means taking risk later](https://static.twentyoverten.com/5980d16bbfb1c93238ad9c24/rJpQmY8o7/Dollar-Cost-Averaging-Just-Means-Taking-Risk-Later-Vanguard.pdf)*
*· Nick Maggiulli (2021): [Even God Couldn't Beat Dollar-Cost Averaging](https://ofdollarsanddata.com/even-god-couldnt-beat-dollar-cost-averaging/)*
*· Edleson, M.E. (2007): [Value Averaging](https://www.amazon.com/Value-Averaging-Strategy-Investment-Returns/dp/0470049774)*
*· 聯合新聞網 (2024): [0050 逢低加碼回測，分批進場差了近 40% 報酬](https://udn.com/news/story/123006/8356292)*
*· 旺得富 (2026): [0050 定期定額 vs 單筆 All-in 四年回測](https://wantrich.chinatimes.com/news/20260502900003-420401)*
