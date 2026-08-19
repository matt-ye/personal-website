---
title: 又一個 SEO 工具。差別是每條規則都附出處
titleEn: "Yet Another SEO Tool. The Difference: Every Rule Cites a Source"
description: 學 SEO 時發現坊間建議幾乎都沒有依據。這篇記錄我把查得到出處的部分整理成 59 條檢核規則的過程，以及四件跟原本想的不一樣的事。
descriptionEn: "Learning SEO, I found that almost none of the advice in circulation cites any evidence. This is the record of turning what does have sources into 59 checkable rules — and four findings that contradicted what I expected."
pubDate: 2026-08-19
lang: zh
series: one-more-step
tags: [SEO, AI 可見度, 開源工具]
draft: false
---

<div class="lang-zh" lang="zh-TW">

我在學習優化自己的網站。動手之前先做功課，把坊間講 SEO 的文章、課程、工具說明讀了一輪，想知道哪些做法是真的有用。

讀完的結論不是「學會了什麼」，而是「幾乎沒有人講依據」。

「加上 FAQ schema 可以提升 30% 點擊率。」這類數字到處都是。往回追出處，追到的常常是另一篇引用它的文章，再往回是第三篇，最後斷在一個沒有連結的段落。那個 30% 查不到源頭。

所以這件事從「學 SEO」變成「把查得到依據的那一部分整理出來」。YAEO 就是那份整理：59 條可以逐條檢查的規則，每一條都寫明依據哪份文件。要嘛來自 Google 官方文件，要嘛來自同行評審論文，要嘛明白標示「從業共識，證據弱」。查不到依據的，寧可標弱，不給數字。

## 四個縮寫在問同一件事

SEO、AEO、GEO、LLMO。縮寫每季都在增加，但它們問的其實是同一個問題：那台機器看不看得見你的內容、讀不讀得懂、願不願意引用。差別只在那台機器是搜尋引擎、問答引擎，還是語言模型。

所以這個 repo 叫 Yet Another Engine Optimization，名字本身就是在說：我不打算再發明一個縮寫。規則也按「看不看得見、讀不讀得懂、願不願意引用」分類，不按縮寫分。

**SEO 看機器認不認得出這頁在講什麼。** 標題、摘要、大小標，還有一段專門給機器讀的結構標記。這些不是寫給人看的。

**AEO 看它撈不撈得到你。** 網站層級的幾份設定檔，等於門口的告示牌。這裡最常被搞混的是：來抓資料去訓練模型的機器人，和使用者提問時跑來查資料的機器人，是兩種不同的東西。很多人一次全擋掉，結果連被引用的機會也一起關掉。

**GEO 看撈到之後會不會挑你來引用。** 2024 年那篇經典論文列了五件事：標出處、放數據、放直接引述、語氣有把握、句子順。

**LLMO 我們寫了 0 條規則。** 不是漏掉。學術文獻裡根本沒有人用這個詞指「優化網站內容」——arXiv 上的 LLMO 是「用語言模型做最佳化」的方法，跟網站可見度無關；一篇回顧 45 篇研究的綜述全文沒出現過這個詞。這樣用它的全是廠商部落格。查不到依據的，我不寫成規則。

## 四件跟我原本想的不一樣的事

整理過程中最有價值的不是「印證了什麼」，是這幾件推翻我預期的。

### 一、那些最不起眼的欄位，是唯一被證明有效的

標題、摘要、大小標、結構標記——這些老掉牙的東西，我原本以為只是「照規矩做」。

2026 年[有研究把它們單獨拉出來測](https://arxiv.org/abs/2602.12187)：只是把這一批寫好，被 AI 撈進候選名單的機率就高出 22%。相對的，只去改正文的各種做法一律變差。

這件事的份量在於：[那篇回顧 45 篇研究的綜述](https://arxiv.org/abs/2607.14035)明確說過，過去所有 GEO 研究都只能證明「已經被撈進來之後會不會被引用」，**碰不到「會不會被撈到」這一步**。這篇碰到了，而且量的正好是最基本的那批欄位。

### 二、讓 AI 幫你改寫正文，反而更看不見

市面上有一類工具，做法是問 AI「你喜歡什麼樣的文章」，再照它的回答把你的正文重寫一遍。聽起來很合理。

在完整的搜尋流程裡[實測](https://arxiv.org/abs/2602.12187)，這套做法讓被撈到的機率掉了 36%。

它改的是表面文字，代價卻付在更前面那一步：連候選名單都進不去，後面寫得再好也沒用。

這也解釋了一個我原本看不懂的矛盾——有研究說「改格式沒用」，有研究說「改結構有效」。它們根本不在講同一件事：

| 你動的東西 | 影響哪一步 | 有沒有用 |
|---|---|---|
| 換句話、調字詞、表面改寫 | 引用 | 幾乎沒用，有時有害 |
| 標題、摘要、大小標、結構標記 | 被撈到 | 有用 |
| 有沒有標出處、有沒有具體數字 | 引用 | 有用 |

分層不是為了看起來嚴謹，是因為**三層的證據強度不一樣，能下的判斷就不一樣**。所以第一、二層敢報 error，第三層只提醒、不給目標數字，第四層交給人判讀。

### 三、報告全綠，不代表你會被引用

這條寫在自家工具的說明裡不好看，但不寫更糟。

[AI 回答時引用的來源](https://arxiv.org/abs/2509.08919)，七到九成來自「別人寫你」的第三方報導，不是你自己的網站。還有[研究發現](https://arxiv.org/abs/2601.00912)，各種 GEO 分數跟實際有沒有被找到，完全沒有相關。真正有預測力的是「有多少網站連到你」和「社群有沒有人在講你」。

所以這支工具能幫的，是確保**別人想引用你的時候不會被技術問題擋住**。剩下的是內容與關係的工作，不在一份 HTML 裡。

順帶一條紅線。行銷公司常見的做法是讓手上客戶的網站互相連結，把「有多少網站連到你」拉高。這不是「未來可能被罰」的灰色手法——[Google 垃圾內容政策](https://developers.google.com/search/docs/essentials/spam-policies)的〈Link spam〉一節已經明文列舉「過度的連結交換」與「純粹為了互連而存在的合作頁」。而且對個人來說這條路本來也走不通，它需要一批可控的網站。

### 四、我原本以為沒用的那個檔案，對特定的人有用

`llms.txt` 是一份給 AI 讀的網站目錄。我原本的結論是「放了無妨，別期待效果」。

實測資料支持前半段，而且比我想的更極端。三份研究、三種方法：[有人掃了 13 萬多個網域](https://ahrefs.com/blog/llmstxt-study/)，發現有放這個檔的網站裡，97% 整個月完全沒被抓取過；[有人分析約 30 萬個網域](https://seranking.com/blog/llms-txt/)，找不到它跟被引用有任何關聯；[有人在自己站上記了 90 天日誌](https://otterly.ai/blog/the-llms-txt-experiment/)，六萬多次 AI 機器人請求裡只有 84 次碰到它。

但同一份資料裡有個例外，推翻了我的後半段：在少數真的被抓取的檔案中，**抓最兇的是編碼工具**，其中 Claude Code 的抓取量超過所有 AI 搜尋爬蟲加起來。

所以答案不是「有用」或「沒用」，是**看你的讀者是誰**。寫給開發者看的文件站，這個檔有可量測的用途；一般的商業網站，放了幾乎沒人會讀。

這條線索是從另一個 SEO 工具的說明檔看到的，但那份檔案只寫了結論、沒附出處。我回去查了原始研究，發現結論成立，而且能引的樣本比它引的更大。**線索可以來自別人，出處必須自己查。**

## 用英文的門檻檢查中文網站

`<title>` 60 字元、description 160 字元，這是英文的經驗值。套到中文會把一整批正常的標題判成過長，因為中文的資訊密度不同。YAEO 偵測頁面裡中日韓字元的比例，超過門檻就換一套標準：description 中文 90 字元、英文 160 字元。

這個差異在我自己的網站上就踩到過。agent-skills 頁面的中文 description 原本 88 字元，加上第三個 skill 之後變成 101，超過 90；同一句的英文直譯是 163，超過 160。中文的門檻也跟著低，所以「中文比較短，應該還有空間」這個直覺是錯的。兩個數字都得實際去量。

## 檢核的是爬蟲看到的東西

我的網站有一頁，經歷描述是用字串插值輸出的。人打開頁面看到的是正常的連結，可以點。但 HTML 裡那段是 `&lt;a href=...&gt;` 的字面文字，JS 載入後才重繪成真的連結。爬蟲拿到的是轉義後的純文字，那 9 個外連對它們等於不存在。

從原始碼看不出來，從瀏覽器也看不出來。所以 YAEO 檢核的是 build 之後的產物。

順著同一個立場還有一條：這支腳本不執行 JS。這是特性不是限制，因為爬蟲與多數 LLM 也不執行。腳本看到空的，它們就看到空的。

## 誤判要回頭修腳本

`SITE-DEAD-INTERNAL-LINK` 在採用 clean URL 的靜態主機上誤判率 67%。連結寫 `/gallery`、輸出檔是 `gallery.html`，永遠對不上。Cloudflare Pages、Netlify、GitHub Pages 全部預設支援 clean URL，而這條規則是 error 級。

一條 error 整批誤判比漏報更糟。漏報只是少看到一個問題，整批誤判會讓人不再相信整份報告。

它能潛伏那麼久有一個原因：開發時用的網站是 directory 輸出，那是唯一它本來就正確的模式。在唯一測過的環境裡，它從第一版起就是對的。

**一條規則能潛伏多久，取決於你只在一種環境測它。**

修法不是把門檻調寬到不再觸發。原本的邏輯在猜「連結應該長什麼樣」；改成先算出每個輸出檔實際到得了的所有網址形式，再看連結有沒有命中。前者要窮舉使用者的寫法，後者只要窮舉主機的行為。後者的集合小得多，而且是查得到的事實。

## 修完之後，我會告訴你哪些驗不了

一份檢核報告最容易造成的誤解，是重跑一次、看到訊息消失，就當成有效果。

那是兩件事。訊息消失只代表**建置產物裡的事實改掉了**；搜尋引擎或 AI 的行為有沒有變，是另一個問題。

大多數項目可以往下追：改了標題、補了結構標記，Search Console 的收錄與爬取資料過幾天到幾週會反映出來。但 AI 引用那一類不行。[有研究連續量了 45 天](https://arxiv.org/abs/2604.07585)，發現 AI 搜尋回答引用的來源**每天大約有 65% 會換掉**；同一天內重複問同一個問題，來源重疊度也只有三成多。作者建議至少一天問 7 次、觀察 2 到 4 週，才談得上看出趨勢。

在那種雜訊底下，「改完再查一次」不是驗證，是自我安慰。所以報告會直接寫「這一類你驗不了」，而不是給一個看起來很負責的假驗法。

這件事我用測試守著：新增規則卻沒標明「怎麼確認」，測試就會失敗並指名。宣稱要做而沒有機制保證，跟沒做差別不大。

## 最貴的一課跟 SEO 無關

規則索引第一版寫著「一條不漏」。實際漏了 4 條。

抽取索引的腳本只認 `add('warn', 'CODE')` 這種寫法，於是所有嚴重度隨條件變動的規則整類看不見。問題在於，驗證那份索引的腳本共用同一個假設。兩支腳本對彼此完全同意，而且都錯。

**用有相同盲點的工具驗證，等於沒驗。**

現在有一支測試守著這件事，而它抓過三次同類錯誤：規則索引漏列、小節標題的數字沒跟著改、中英文件裡的出處筆數停在舊值。文件裡有幾個地方寫了數字，就要驗幾個地方。

有趣的是，補這支守衛的時候我自己又犯了一次同樣的病：檔名的比對樣式寫得比實際檔名窄，於是一個含數字的檔名被漏掉，守衛報「文件沒列這支測試」而文件明明列了。一支專門抓漏配的測試，自己犯了漏配。

## 拿去用

先 build，再檢核建置產物：

```bash
npm run build
node skills/seo-aeo-audit/scripts/seo-check.mjs --dir ./dist --site https://example.com
```

零相依，不需要 `npm install`。在 Claude Code 裡把 `skills/seo-aeo-audit/` 放進 `~/.claude/skills/`，之後說「檢查這個網站的 SEO」就會觸發。

MIT。原始碼與完整規則索引在 [github.com/matt-ye/yaeo](https://github.com/matt-ye/yaeo)。

</div>

<div class="lang-en" lang="en" hidden>

I was learning how to optimise my own site. Before touching anything I did the reading — articles, courses, tool documentation — trying to work out which practices actually do something.

What I came away with wasn't a set of techniques. It was that almost nobody states their evidence.

"Adding FAQ schema lifts click-through by 30%." Numbers like that are everywhere. Trace one back and you usually land on another article citing it, and behind that a third, until the trail ends in a paragraph with no link at all. That 30% has no source.

So the project turned from "learn SEO" into "write down the part that does have sources". YAEO is that write-up: 59 rules you can check one at a time, each naming the document it rests on. Either Google's own documentation, or peer-reviewed work, or an explicit label reading "practitioner consensus, weak evidence". When a rule is uncertain, label it weak rather than attach a number to it.

## Four acronyms, one question

SEO, AEO, GEO, LLMO. A new acronym every quarter, but they all ask the same thing: can the machine see your content, understand it, and cite it. The only variable is which machine — a search engine, an answer engine, or a language model.

Hence Yet Another Engine Optimization. The name is the argument: I am not adding another acronym. The rules are filed by "can it be seen, can it be understood, will it be cited", not by acronym.

**SEO is about whether the machine can tell what the page is about.** Title, description, headings, and a block of markup written for machines rather than people.

**AEO is about whether it can reach you at all.** A few site-level configuration files, the signage at your front door. The thing most often confused here: the bot that collects data to train a model and the bot that fetches pages when a user asks a question are two different things. Block them in one sweep and you close off being cited along with everything else.

**GEO is about whether it picks you once it has you.** The 2024 paper that started this lists five things: cite sources, include statistics, quote directly, write with authority, write fluently.

**LLMO has zero rules here.** Not an oversight. In the peer-reviewed literature nobody uses the term to mean "optimising web content" — on arXiv, LLMO is a method that *uses* a language model to optimise something, unrelated to website visibility, and a survey covering 45 studies never uses the word at all. Everything using it in the marketing sense is a vendor blog. What I cannot source, I do not turn into a rule.

## Four things that turned out differently than I expected

The valuable part was not confirmation. It was these.

### 1. The least glamorous fields are the only ones shown to work

Title, description, headings, structured markup. I assumed these were box-ticking.

In 2026 [a study pulled them out and tested them on their own](https://arxiv.org/abs/2602.12187): optimising just that set raised the chance of being retrieved into the candidate pool by 22%. Meanwhile every approach that edited body text alone made things worse.

Why that matters: [the survey of 45 studies](https://arxiv.org/abs/2607.14035) states plainly that all previous GEO research could only show effects on "whether an already-retrieved source gets cited" — **it never reached the question of whether you get retrieved at all**. This study reached it, and what it measured was the most basic set of fields on the page.

### 2. Having an AI rewrite your body text makes you less visible

There is a class of tool that asks an AI "what kind of writing do you prefer?" and rewrites your text to match. It sounds reasonable.

[Measured inside a full search pipeline](https://arxiv.org/abs/2602.12187), that approach cost 36% of retrieval performance.

It edits the surface, and pays for it one step earlier: the page never enters the candidate pool, and nothing downstream can save it.

This also dissolved a contradiction I could not previously make sense of — some studies say formatting changes do nothing, others say structural changes work. They are not talking about the same thing:

| What you change | Which stage it affects | Does it help |
|---|---|---|
| Rewording, lexical tweaks, surface edits | Citation | Barely, sometimes harmful |
| Title, description, headings, structured markup | Retrieval | Yes |
| Whether sources and concrete numbers are present | Citation | Yes |

Splitting the checks into layers is not decoration. **The three layers have different evidence strength, so they license different verdicts.** Layers one and two may raise an error; layer three only ever prompts, and never states a target number; layer four is left to a human.

### 3. A clean report does not mean you will be cited

This one is awkward to put in your own tool's documentation, and worse to leave out.

[Seven to nine tenths of the sources AI answers cite](https://arxiv.org/abs/2509.08919) are third-party coverage — other people writing about you, not your own site. And [one study found](https://arxiv.org/abs/2601.00912) that GEO scores have no correlation at all with whether something actually gets found. What did predict it: how many sites link to you, and whether communities are talking about you.

So what this tool can do is make sure **nothing technical is in the way when someone does want to cite you**. The rest is content and relationships, and it is not in an HTML file.

One red line while we are here. A common agency tactic is to cross-link the sites of every client on the books to inflate the referring-domain count. This is not a grey-area move that *might* be penalised later — [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies) already list "excessive link exchanges" and "partner pages exclusively for the sake of cross-linking" under Link spam. And for an individual it is not available anyway: it takes a stable of sites you control.

### 4. The file I assumed was useless turns out to matter to a specific audience

`llms.txt` is an index of your site written for AI to read. My working conclusion was "harmless to publish, expect nothing".

The data supports the first half, more strongly than I expected. Three studies, three methods: [one crawl of 137,000 domains](https://ahrefs.com/blog/llmstxt-study/) found that among sites publishing the file, 97% saw it fetched zero times all month; [an analysis of roughly 300,000 domains](https://seranking.com/blog/llms-txt/) found no relationship with citation frequency; [90 days of server logs on one site](https://otterly.ai/blog/the-llms-txt-experiment/) recorded 84 hits out of more than 62,000 AI bot requests.

But the same dataset contains an exception that overturns the second half: among the files that *were* fetched, **coding agents fetched hardest** — Claude Code alone out-fetching every AI search crawler combined.

So the answer is not "useful" or "useless". It is **who reads you**. For a developer documentation site the file has a measurable purpose; for a general business site almost nobody will read it.

I picked this thread up from another SEO tool's notes, but those notes stated the conclusion without a source. I went back to the original research: the conclusion holds, and the samples I could cite were larger than the ones it cited. **A lead can come from someone else. The source has to be one you checked yourself.**

## Judging Chinese pages by English thresholds

Sixty characters for `<title>`, 160 for the description — these are English rules of thumb. Applied to Chinese they flag a whole batch of perfectly normal titles as too long, because the information density is different. YAEO measures the proportion of CJK characters on the page and switches thresholds: 90 characters for a Chinese description, 160 for English.

I hit this on my own site. The Chinese description on the agent-skills page was 88 characters; adding a third skill took it to 101, over the 90 limit. The direct English translation of the same sentence came to 163, over 160. The Chinese threshold drops too, so the instinct that "Chinese is shorter, there must be room" is wrong. Both numbers have to be measured.

## What gets checked is what the crawler sees

One page on my site rendered its experience descriptions through string interpolation. A human opening the page saw working links. But the HTML contained the literal text `&lt;a href=...&gt;`, and JavaScript only turned it into real links after load. Crawlers received escaped plain text, so nine outbound links effectively did not exist for them.

You cannot see this in the source, and you cannot see it in the browser. So YAEO checks the build output.

The same position has a corollary: this script does not execute JavaScript. That is a feature, not a limitation, because crawlers and most language models do not either. What the script sees empty, they see empty.

## When a rule misfires, fix the script

`SITE-DEAD-INTERNAL-LINK` had a 67% false-positive rate on static hosts using clean URLs. A link written `/gallery` against an output file named `gallery.html` will never match. Cloudflare Pages, Netlify and GitHub Pages all support clean URLs by default — and this rule was error-level.

One error firing across the board is worse than missing something. A miss costs you one issue; a batch of false positives costs you the reader's trust in the entire report.

It stayed hidden as long as it did for one reason: the site used during development produced directory output, which happens to be the single mode where the rule was correct all along.

**How long a rule can stay broken depends on how few environments you test it in.**

The fix was not widening the threshold until it stopped firing. The original logic guessed what a link should look like; the replacement computes every URL form each output file is actually reachable at, then checks whether the link hits one. The first requires enumerating how users write links; the second only requires enumerating how hosts behave. The second set is far smaller, and it is a fact you can look up.

## After you fix something, I will tell you what you cannot verify

The easiest way to misread an audit report is to re-run it, see the finding disappear, and take that as an effect.

Those are two different things. The finding disappearing means **the fact in the build output changed**. Whether a search engine or an AI behaved differently is a separate question.

For most items you can follow through: change a title, add structured markup, and Search Console's indexing and crawl data will reflect it over days to weeks. For the AI-citation group you cannot. [One study measured continuously for 45 days](https://arxiv.org/abs/2604.07585) and found that **roughly 65% of the sources cited in AI answers turn over daily**; ask the same question twice in one day and source overlap is only around a third. The authors suggest at least seven runs a day over a two-to-four week window before you can speak of a trend.

Under that much noise, "check again after the fix" is not verification, it is reassurance. So the report states directly that this group cannot be verified, rather than offering a responsible-looking method that does not work.

A test enforces this: add a rule without labelling how it can be confirmed and the test fails, naming it. Claiming to do something with no mechanism behind it is not far from not doing it.

## The most expensive lesson had nothing to do with SEO

The first version of the rule index said "nothing left out". Four rules were missing.

The extraction script only recognised the form `add('warn', 'CODE')`, so every rule whose severity varies by condition was invisible to it. The problem was that the script verifying the index shared the same assumption. The two agreed completely with each other, and both were wrong.

**Verifying with a tool that has the same blind spot is not verification.**

A test guards this now, and it has caught three instances of the same class: rules missing from the index, section-heading counts not updated, and the source count in the documentation left at an old value. However many places in your documentation state a number, that is how many places you have to verify.

The entertaining part: while writing that guard I made the same mistake again. The pattern matching test filenames was narrower than the actual filenames, so one containing a digit was skipped, and the guard reported "the docs do not list this test" when the docs plainly did. A test written to catch missed matches, missing a match.

## Take it

Build first, then check the build output:

```bash
npm run build
node skills/seo-aeo-audit/scripts/seo-check.mjs --dir ./dist --site https://example.com
```

Zero dependencies, no `npm install`. Inside Claude Code, drop `skills/seo-aeo-audit/` into `~/.claude/skills/` and saying "check this site's SEO" will trigger it.

MIT. Source and the full rule index at [github.com/matt-ye/yaeo](https://github.com/matt-ye/yaeo).

</div>
