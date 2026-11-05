---
title: "The Three Financial Statements: Where Every Investment Number Comes From"
description: "How the income statement, balance sheet and cash flow statement fit together: from top-line revenue and costs through to EPS, ROIC and P/E, plus a DuPont breakdown of ROE and a full glossary."
pubDate: 2026-06-20
series: family-investing
ymyl: true
tags: [財務報表, 損益表, 資產負債表, 現金流量表, 杜邦分析]
draft: false
lang: en
---

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
