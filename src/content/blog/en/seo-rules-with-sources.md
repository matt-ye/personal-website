---
title: "Yet Another SEO Tool. The Difference: Every Rule Cites a Source"
description: "Learning SEO, I found that almost none of the advice in circulation cites any evidence. This is the record of turning what does have sources into 59 checkable rules — and four findings that contradicted what I expected."
pubDate: 2026-08-19
series: one-more-step
tags: [SEO, AI 可見度, 開源工具]
draft: false
lang: en
---

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
