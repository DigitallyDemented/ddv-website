---
title: "My AI Caught 5 Broken Files That the Plan Missed"
description: "During a 20-file architecture migration, my AI agent caught 5 broken files the plan missed — because it remembered a lesson from 9 days earlier."
date: 2026-04-09
tags:
  - post
  - ai
  - cognitive-architecture
  - persistent-memory
  - ai-systems-that-learn
  - knowledge-management
---


Plans are necessary. They're never sufficient.

I learned this the hard way — twice. And the second time, my AI system caught the mistake before I did. Not because I programmed it to. Because it remembered a lesson I'd already forgotten.

## What Happened: A 680-Line Migration

My central work tracker had grown to 680 lines across 9 priority tiers. It worked, but it was mixing two axes: urgency ("P1: This Week") and domain ("P2: Client Work", "P5: Community Events"). Items kept getting misclassified because "urgent" and "client-related" aren't the same dimension.

The fix: reorganize 100+ active items from 9 priority tiers into 5 domains with urgency as a separate tag. Simple in concept. The blast radius? 58+ files reference that work tracker. Touching the central file means touching skills, workflows, routing logic, and config that read from it.

My Chief of Staff agent (Lennier) designed a 10-step migration plan. My System Architect agent (Linus) executed it. The plan explicitly listed 15 files that needed updating.

All 15 got updated. Clean execution. No drama.

Then Linus ran a full codebase grep.

## The Grep Found 20 Files, Not 15

Five additional files had functional routing logic that pointed to the old structure:

| File | What Would Have Broken |
|------|----------------------|
| Monthly maintenance template | Would route security findings to "P1" — a section that no longer exists |
| Proactivity rules | Would tell me "I can show your P1 queue" — referencing a dead structure |
| System tour | Would teach new users "Items are prioritized P1 through P9" — completely wrong |
| 90-day plan | Would reference "personal queue P9" — a tier that was replaced by "Personal domain" |
| Session save template | Would show "P1 item #12" as example text — teaching the wrong vocabulary |

None of these would crash anything. They'd just be wrong. Silently wrong. The kind of wrong that erodes trust over weeks — you see "P1" in one place and "[NOW]" in another and start wondering which version is current.

## Why the AI Caught It: A Lesson From 9 Days Earlier

Here's where it gets interesting.

Nine days before this migration, Linus had executed a different structural change — splitting a monolithic handoff file into 20 individual agent inboxes. That plan listed roughly 38 files that needed updating. The post-migration verification found 18 more. A 47% miss rate.

Worse: the security scanners had been silently broken. They used `if not exists: return []` — they didn't error, they just returned empty results. Nobody noticed until the verification grep caught the orphaned references.

That lesson was captured in one line of persistent memory:

> "Path migrations need full codebase grep. F-082 plan listed ~38 files. Verification found 18 more functional refs. Always grep entire codebase after path changes."

This session, nine days later, the agent read that memory at startup. When it reached the verification step, it didn't just check the 15 files on the plan. It ran the orphan grep because the memory reinforced that the plan's file list is necessary but never sufficient.

## The Pattern: Miss Rates Improved Because the System Learned

| Migration | Plan Predicted | Grep Found | Delta | Miss Rate |
|-----------|---------------|------------|-------|-----------|
| Session S5: Handoff split (Feb 25) | ~38 files | 56 files | +18 | 47% |
| Session S9: Queue decomposition (Mar 4) | 15 files | 20 files | +5 | 33% |

The miss rate improved. Not because the planning got better — although it did. Because the verification pattern was established and reinforced by persistent memory. The system learned that plans undercount, and now it compensates automatically.

## Why This Matters More Than the Migration Itself

This isn't a story about file management. It's a story about how AI systems compound knowledge when you give them the right infrastructure.

Three things made this work:

1. **The lesson was stored in the right place.** Not a session log that might not get read. Not a handoff that expires. Persistent memory that loads automatically every session.
2. **The agent read it at startup.** Auto-memory loads every session, without being asked. The lesson didn't require me to remember to tell the agent about it.
3. **The lesson was actionable.** "Always grep entire codebase after path changes" is specific enough to execute. Not "be more careful" or "double-check things."

Dr. James Reason, author of *Human Error* and the Swiss Cheese Model, has argued for decades that human error is best mitigated by system design, not individual vigilance. That principle applies directly here. I didn't catch the 5 broken files. The system did. Because the system was designed to learn from its own mistakes and apply corrections automatically.

Information expires. Systems compound.

The lesson from Session S5 was information. Storing it in persistent memory and applying it automatically in Session S9 — that's the system compounding. I didn't remember the lesson. I didn't need to. The architecture remembered for me.

## How to Build a System That Learns

You don't need 19 agents to get this effect. You need three things:

**1. A persistent memory layer.** Something your AI reads at the start of every conversation. Not a chat history — a curated set of lessons, conventions, and constraints that you've validated as true.

**2. An actionable lesson format.** Vague lessons don't fire. "Be more careful with migrations" will never trigger a grep. "Always run a full codebase grep after path changes" will. Write lessons as specific instructions, not general advice.

**3. A verification habit.** After any structural change, verify that nothing was missed. Not a spot-check — a systematic sweep. The tool doesn't matter (grep, find, search). The discipline does.

| Component | What It Does | Why It Matters |
|-----------|-------------|----------------|
| Persistent memory | Carries lessons across sessions | Prevents relearning the same mistake |
| Actionable format | Converts experience into instructions | Makes lessons executable, not aspirational |
| Verification sweep | Catches what plans miss | Plans model intent; verification models reality |

Most people's AI setup doesn't have persistent memory. Every conversation starts from zero. Every mistake gets made again. The Stranger Loop — where your AI forgets you between sessions — isn't just annoying. It's architecturally expensive.

## The Bigger Implication

We're only capped by our thinking, not by the tools.

The grep was a standard tool. The migration plan was competent. What made the difference was a decision I made nine days earlier: to capture a lesson in persistent memory instead of just moving on. That's a thinking decision. A design decision. The kind of work that actually matters now.

Your value was never in running the grep. AI just made that obvious.

The question isn't whether your AI can catch broken files. It's whether your system is designed to learn from what it catches — and apply that learning next time, without you remembering to tell it.

That's the difference between a tool and an architecture. [One Person, Five AI Executives](/blog/one-person-five-ai-executives/) breaks down the full system. [How to Build an AI Chief of Staff](/blog/how-to-build-an-ai-chief-of-staff/) explains why persistent memory changes everything about how your AI operates.

---

## Frequently Asked Questions

### How much persistent memory does an AI agent need?

Less than you'd think. My system architect agent's critical memory is roughly 50 lines — not thousands. The key is curation, not volume. Every lesson stored in persistent memory should be actionable and validated. One well-formatted instruction beats twenty vague observations.

### Can ChatGPT or other consumer AI tools do this?

Some consumer tools have memory features, but they're typically unstructured and not systematically curated. The difference is design intent: a curated persistent memory layer where you deliberately store verified lessons is fundamentally different from an AI that occasionally remembers you mentioned something once.

### What happens when persistent memory gets too large?

You prune it. My system runs periodic memory reviews — checking for lessons that are outdated, superseded, or no longer relevant. Information expires. The memory layer only compounds if you maintain it. That's part of the maintenance work nobody talks about. See [Patch Notes for Your Business](/blog/patch-notes-for-your-business/).

### Isn't a 33% miss rate still bad?

It's not great. But the comparison point isn't perfection — it's what happens without verification. A 33% miss rate caught at verification means zero stale references ship to production. A 0% miss rate on the plan that doesn't get verified means every missed file goes live broken. I'll take the imperfect plan with the verification sweep every time.

### How long did the entire migration take?

About 45 minutes of execution plus review. The planning — the thinking work — happened in a separate session. The doing was the easy part. The thinking was the work.

---

*Last updated: March 2026*

**Want to build a system that remembers what you forget?** [Connected Intelligence on Skool](https://www.skool.com/connected-intelligence) teaches you how to design AI systems that learn and compound — not just execute and forget.
