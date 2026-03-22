---
title: "My AI CMO Knows My Voice Better Than I Do — Here's How I Built It"
description: "How to train AI on your writing voice using a mentor council, brand guardrails, and persistent context. Not paste-5-samples. An actual system."
date: 2026-03-01
tags:
  - post
  - ai
  - cognitive-architecture
  - ai-cmo
  - personal-brand
  - content-creation
  - train-ai-voice
series: ai-executives
seriesOrder: 3
ogImage: /images/og/your-ai-cmo-teaching-ai-your-voice-og.png
---


*Last updated: March 10, 2026*

My AI CMO can tell me when something I wrote doesn't sound like me. "Too corporate. Try again." And it's right every time.

That sounds like magic. It's not. It's architecture.

This is post 3 in my [AI Executives series](/blog/one-person-five-ai-executives/). The [previous post](/blog/how-to-build-an-ai-chief-of-staff/) covered how persistent context turns a basic AI assistant into a Chief of Staff. This post takes the same principle and applies it to content — how I built an AI that doesn't just write for me, but writes *like* me.

---

## Why "Paste 5 Writing Samples" Doesn't Work

Every "how to train AI on your voice" guide says the same thing: paste in five examples of your writing and ask the AI to match your style.

I tried it. Here's what happened: the AI averaged my voice into something that sounded vaguely like me on a bad day. It caught surface patterns — sentence length, some vocabulary preferences — but missed everything underneath. The confidence. The edge. The specific way I use metaphor.

The problem is structural. Giving an AI five writing samples is like showing someone five photos of you and asking them to predict how you'd react in a crisis. They have data about what you look like, but zero understanding of how you think.

A 2024 Stanford HAI study on AI-generated content found that human evaluators correctly identified AI-written text only 50% of the time — basically a coin flip. But when asked if the writing "felt authentic to a specific person," detection rates jumped to over 80%. People can't always tell if AI wrote something, but they can almost always tell if it sounds like a *specific human.*

That gap is exactly what most "voice training" approaches miss. They optimize for "sounds AI-ish" vs. "sounds human" when the real bar is "sounds like Daniel."

---

## What Is an AI Mentor Council?

Here's where it gets interesting. Instead of training my AI CMO on samples of *my* writing alone, I gave it mentors.

An AI Mentor Council is a set of named experts whose thinking frameworks are embedded in your AI's instructions. Not their writing style — their *approach to problems.*

My CMO's mentor council:

| Mentor | What They Bring | How I Use Their Lens |
|--------|----------------|---------------------|
| **Justin Welsh** | Personal brand growth, solopreneur systems | "How would Welsh approach this topic for a solo practitioner audience?" |
| **Amanda Natividad** | Audience research, zero-hype marketing | "What does Natividad's SparkToro methodology say about where this audience pays attention?" |
| **Wes Kao** | Rigorous thinking, contrarian frameworks | "Does this take have Kao-level reasoning, or am I being lazy with my argument?" |

These aren't role-play prompts. They're calibration tools. When I ask my CMO to review a LinkedIn post, it doesn't just check grammar. It checks whether my argument would survive Wes Kao's rigor test. It asks whether I'm building audience the way Justin Welsh would — through consistent, valuable content, not gimmicks. It flags when I'm making claims without the audience research Amanda Natividad would demand.

> "The best content doesn't come from trying to sound like someone else. It comes from developing your own point of view and pressure-testing it against people who think differently than you do." — Wes Kao, co-founder of Maven

The council doesn't replace my voice. It sharpens it.

---

## How I Built an AI CMO with a Council of Expert Voices

The build has three layers, and the order matters.

**Layer 1: Voice documentation.**

Not writing samples — a voice *guide*. Mine specifies:

- **Tone attributes:** Expert but accessible. Confident but not arrogant. Conversational, not corporate.
- **Sentence patterns I use:** "Here's the thing about [topic]..." / "What most people get wrong is..." / "In 15 years of doing this..."
- **Words I use vs. avoid:** Simple, clear, direct. Never: synergy, leverage, paradigm, game-changing.
- **My pet peeves:** Filler phrases, hedging language, corporate-speak, forced humor.
- **What I sound like sharp vs. phoning it in:** Sharp me uses specific examples and metaphors. Phoning-it-in me generalizes and over-qualifies.

This isn't a style guide for a brand. It's a diagnostic tool. My CMO uses it to catch when my writing drifts off-voice — whether that's because I'm tired, rushed, or just not thinking clearly.

**Layer 2: Mentor council integration.**

Each mentor is defined not by their writing style, but by their strategic lens. The CMO knows when to apply which lens:

- Drafting a personal brand post → Welsh lens (is this building long-term trust?)
- Evaluating a content angle → Natividad lens (where does my actual audience spend attention?)
- Making a contrarian claim → Kao lens (is the reasoning tight enough to survive pushback?)

**Layer 3: Values as guardrails.**

This is the layer most people skip, and it's the most important one. My CMO doesn't just know my tone. It knows my values: patient and attentive, sincere and safe, open-minded and invested, accountable and trustworthy.

Those aren't poster words. They're filters. If I draft a hot take that's attention-grabbing but not sincere, my CMO flags it. If I'm being provocative without being invested in the audience's growth, it pushes back.

Content is no longer king. Context is king. And the deepest context you can give an AI isn't your vocabulary preferences — it's what you actually stand for.

---

## The Difference Between Voice Matching and Voice Understanding

Voice matching is surface-level: sentence length, word choice, paragraph structure. Any AI can do it reasonably well with enough examples.

Voice understanding goes deeper: what topics you'd actually have an opinion on, how you build an argument, when you'd use a story vs. a framework, what you'd never say even if it performed well.

Here's a practical example. I wrote a LinkedIn post about the "overextension pattern" — my tendency to take on too much. A voice-matched AI would replicate the sentence structure and vocabulary. A voice-*understanding* AI would know that this topic connects to my AuDHD, my burnout history, and my values around accountability — and that the post should feel honest without being performatively vulnerable.

The voice understanding comes from the persistent context, not from writing samples. My CMO has read my brand voice guide, my values, my content philosophy, my series plans, and months of session history. It doesn't just know how I write. It knows why I write what I write.

That's why my LinkedIn sounds like me whether I post on Monday morning in a flow state or Friday afternoon when I'm fried. The CMO holds the standard even when I can't.

---

## How to Train Your AI to Sound Like You (Not Like AI)

Here's the actual process, simplified to what you can start this week:

1. **Write a voice document, not a sample bank.** Describe how you communicate: your tone, your go-to phrases, your pet peeves, your conversational patterns. 500 words minimum, but more is better. Think of it as explaining your communication style to a new teammate who's going to ghostwrite for you.

2. **Pick 2-3 mentor voices.** Not to copy — to calibrate. Choose people whose thinking you respect in specific domains. Define what lens each one provides. "When evaluating X, think like [mentor]."

3. **Add your values as hard guardrails.** What would you never say, even if it got engagement? What principles override performance? These are the lines your AI should enforce even when you're tempted to cross them.

4. **Use the AI as editor, not ghostwriter.** The best workflow isn't "write this for me." It's "I wrote this — does it sound like me?" The diagnostic mode is where voice understanding shows its value. Generative mode is where it tends to drift toward generic.

5. **Update your context monthly.** Your voice evolves. New pet peeves emerge. New topics become central. A static voice guide from six months ago is training your AI on someone you used to be.

The investment is a few hours upfront and a few minutes per month maintaining. The payoff is compounding brand equity — every piece of content sounds authentically like you, regardless of when or how you created it.

---

## Frequently Asked Questions

### Doesn't using AI for content make it less authentic?

It depends entirely on how you use it. If you hand AI a topic and publish whatever it generates, yes — that's not authentic. But using AI as an editor that catches when you're off-voice, suggests angles you hadn't considered, and pressure-tests your reasoning through a mentor council? That's more rigorous than what most people do without AI. My CMO doesn't make my content less authentic. It makes me more consistent with my *best* authentic voice. [One Person, Five AI Executives](/blog/one-person-five-ai-executives/) explains how the full system keeps authenticity at the center.

### How is a "mentor council" different from just role-playing?

Role-playing asks the AI to *be* someone else. A mentor council asks the AI to *evaluate through* someone else's framework while maintaining your voice. When my CMO applies the Wes Kao lens, it doesn't write like Wes Kao. It checks whether my argument meets the rigor standard Wes Kao would apply. The voice stays mine. The quality standard comes from the council.

### Can I do this with ChatGPT, or does it require Claude?

The principle works with any AI that supports persistent instructions. ChatGPT's custom instructions, Claude Projects, or even a context file you paste at session start. Claude Code's CLAUDE.md gives the deepest integration because it loads automatically and can include thousands of words of context. But a 500-word custom instruction in ChatGPT is better than no persistent context at all.

### What if I don't have a consistent voice yet?

Start with the mentor council approach first. Pick 2-3 creators whose communication style resonates with you and define what you admire about each one. Use AI to help you draft content through those lenses, then notice which outputs feel most like "you." Your voice document will emerge from that process. You don't need a polished brand voice to start — you need a starting point to iterate from.

---

*This is post 3 in the [AI Executives series](/blog/one-person-five-ai-executives/). Next up: the AI CFO — why money decisions are never just math, and how I built an AI that understands the psychology of pricing.*

*Want to build your own AI CMO with a mentor council? [Connected Intelligence](https://digitallydemented.com/courses) walks through the full setup — from voice documentation to multi-agent coordination.*
