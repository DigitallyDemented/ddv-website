---
title: "I Didn't Invent Cognitive Architecture — I'm Applying It in the Opposite Direction"
description: "Cognitive architecture has 40 years of academic history. Allen Newell coined it in 1990. I'm using the same concept in reverse — and that's what makes it powerful."
date: 2026-04-03
tags:
  - post
  - ai
  - cognitive-architecture
  - ai-history
  - soar
  - act-r
  - connected-intelligence
---


Allen Newell coined "cognitive architecture" in 1990. I'm not going to pretend I invented it.

What I am going to tell you is that the original researchers and I are solving the same problem from opposite directions — and the convergence happening right now is one of the most underreported developments in AI.

They built software that simulates minds. I design how my actual mind interfaces with AI. Same term. Same structural principles. Opposite direction.

## The 40-Year History of Cognitive Architecture

Cognitive architecture started as a research program in cognitive science and artificial intelligence. The core question was deceptively simple: *How does a mind work?*

Not "what does a mind know" — that's just data. The question was about *structure*. How does an intelligent system perceive, decide, learn, and act? What's the underlying architecture that makes cognition possible?

Allen Newell laid out the vision in his 1990 book *Unified Theories of Cognition* at Carnegie Mellon University. He argued that cognitive science needed unified theories — not just models of individual phenomena, but complete architectures that could explain how all the pieces of cognition fit together.

That idea spawned three major research programs that are still running today:

### SOAR (1983 — University of Michigan, later Carnegie Mellon)

John Laird, Allen Newell, and Paul Rosenbloom built SOAR as a general architecture for intelligent behavior. SOAR models how a mind decomposes goals into subgoals, selects operators to achieve them, and learns from every decision cycle.

The core insight: intelligence isn't about knowing things. It's about having a structure that turns knowledge into action through goal decomposition and learning.

SOAR is still actively maintained. Over 40 years later, John Laird still runs the SOAR lab at the University of Michigan.

### ACT-R (1993 — Carnegie Mellon)

John Anderson created ACT-R (Adaptive Control of Thought — Rational) with a different bet: that cognition has two fundamentally different memory systems.

**Declarative memory** — facts you know. "Paris is the capital of France." You can state them explicitly.

**Procedural memory** — skills you execute. How to ride a bike, how to multiply numbers, how to evaluate a business proposal. You can't articulate them fully, but you can do them.

ACT-R models how these two systems interact — how you retrieve facts, apply procedures, and learn from experience. It's so precise it predicts human reaction times in milliseconds.

### CLARION (circa 2002 — Rensselaer Polytechnic Institute)

Ron Sun built CLARION as a hybrid architecture that integrates what ACT-R separated: explicit reasoning (things you can articulate) and implicit reasoning (intuitions you can't fully explain).

CLARION's insight was that real human cognition isn't purely deliberate or purely intuitive. It's both, simultaneously. You make a decision based on gut instinct *and* rational analysis, and the two systems influence each other constantly.

| Architecture | Year | Institution | Core Innovation | Still Active? |
|-------------|------|------------|-----------------|---------------|
| **SOAR** | 1983 | U of Michigan / CMU | Goal decomposition + universal learning | Yes — John Laird's lab |
| **ACT-R** | 1993 | Carnegie Mellon | Declarative vs. procedural memory | Yes — major research community |
| **CLARION** | ~2002 | Rensselaer Polytechnic | Hybrid explicit/implicit reasoning | Yes — Ron Sun's ongoing research |

All three were built to answer the same question: *What is the structure of a mind?*

## Why I'm Honest About Where This Concept Comes From

There's a temptation in the AI content space to present borrowed concepts as original ideas. Rebrand something with a new name. Drop the attribution. Build a course around it.

I'm not doing that.

"Cognitive architecture" has four decades of rigorous academic research behind it. Thousands of papers. Multiple research communities. Real experimental validation. When I use the term, I'm standing on that foundation.

But I'm also doing something those researchers never intended.

They built computational models of cognition — software architectures that simulate how a mind processes information. The direction was: *observe human minds, build artificial ones.*

What I'm doing is the reverse: *take AI systems, and design how a human mind interfaces with them.* I'm not simulating cognition. I'm extending it.

Same structural concepts. Opposite direction of travel.

> Peter Drucker wrote: "The greatest danger in times of turbulence is not the turbulence; it is to act with yesterday's logic."

The original cognitive architectures used yesterday's logic — build AI that thinks like humans. Today's application is tomorrow's logic — design how humans think *with* AI. Both are valid. But the second one is what every professional needs right now.

## The Convergence: When the Researchers Caught Up

Here's where it gets interesting.

In 2025, John Laird — one of the original SOAR architects — published a paper called "Applying Cognitive Design Patterns to General LLM Agents" at the AGI 2025 conference. After 40 years of building architectures that simulate minds, the SOAR lab is now applying those same design patterns to LLM-based agents.

Meanwhile, researchers have built LLM-ACTR — a system that combines large language models with ACT-R's memory architecture. The declarative/procedural split that Anderson designed in 1993 is being used to structure how AI agents store and retrieve information.

The academic direction and the practitioner direction are converging. The researchers who spent decades building software that simulates minds are now building software that *works with* minds.

| Direction | Who | What They Build | Goal |
|-----------|-----|----------------|------|
| **Original** (1983-2020) | Newell, Laird, Anderson, Sun | Software that simulates human cognition | Understand how minds work |
| **Reversed** (2024-present) | Practitioners like me | Systems where human cognition interfaces with AI | Extend how minds work |
| **Converging** (2025+) | Laird (SOAR + LLM), LLM-ACTR researchers | LLM agents structured by cognitive architecture principles | AI agents that reflect cognitive science |

That convergence validates the framework. When the people who coined the term are now applying it to the same problem space that practitioners are — LLM-based agents that need memory, goal decomposition, and learning — it means the structural principles were right all along.

## What the Academic Framework Gives Practitioners

You don't need to read Newell's book. You don't need to understand SOAR's decision cycle or ACT-R's production system. But the structural insights from 40 years of research translate directly to how you design personal AI systems:

**From SOAR — Goal decomposition.** Complex work gets broken into subgoals. Each subgoal can be delegated to a different agent. When a subgoal can't be resolved, it escalates. My 19-agent system works exactly like this. When my content agent Pixel hits a brand positioning question, it doesn't guess — it escalates to Kennedy, my CMO agent.

**From ACT-R — Memory types matter.** Some knowledge is declarative (my client list, my 90-day goals, my values). Some is procedural (how to run a briefing, how to process an inbox, how to review a draft). My system separates these explicitly. Declarative memory lives in context files. Procedural memory lives in agent instructions. Mixing them up produces worse results.

**From CLARION — Explicit and implicit work together.** Not every decision in my system goes through a formal process. Some things my Chief of Staff agent just handles, based on patterns it's learned from months of context. The implicit layer — the accumulated understanding from 200+ sessions — matters as much as the explicit instructions.

How you solve a problem is now more important than actually solving the problem. And 40 years of cognitive architecture research gives us a vocabulary for describing *how* — not just *what*.

## What the Academic Community Misses About Practitioners

The gap goes both ways.

Academic cognitive architectures are built for controlled environments. Laboratory conditions. Defined problem spaces. The real world — where a consultant juggles seven client relationships, three active projects, a course launch, content production, and financial planning simultaneously — is messier than any lab setup.

The practitioners' contribution is the messy part. What happens when an agent hallucinates a client name. What happens when two agents contradict each other about a deadline. What happens when the values layer catches a decision that would have been technically correct but ethically misaligned.

That's the data the researchers don't have. And it's the data that matters most for building AI systems that actually work in professional practice.

I didn't invent cognitive architecture. But I might be generating the field data that the next generation of the concept needs. [LINK: Post 5 — What Is Cognitive Architecture?]

## FAQ

### Do I need to understand SOAR or ACT-R to build a personal AI system?

No. The academic frameworks provide useful mental models — especially goal decomposition and memory type separation — but you don't need to study the research to build a working system. Think of it like driving a car: you benefit from the engineering without needing to understand the combustion cycle.

### Is Daniel using the term "cognitive architecture" correctly?

Both the academic usage and Daniel's usage describe the structural design of how an intelligent system processes information, maintains memory, and makes decisions. The difference is direction: academics model human cognition computationally; Daniel extends human cognition using AI. Same structural principles, different application vector. [LINK: Post 5 — What Is Cognitive Architecture?]

### What's the relationship between SOAR and modern AI agents?

Direct. John Laird published "Applying Cognitive Design Patterns to General LLM Agents" at AGI 2025, explicitly connecting SOAR's design patterns to LLM-based agent architectures. The principles that made SOAR effective — goal decomposition, working memory, learning from experience — are now being applied to how we structure AI agent systems.

### Why does the 40-year history matter for someone building AI tools today?

Because it proves the structural principles work. Goal decomposition, memory separation, explicit/implicit reasoning — these aren't trends. They're validated patterns from decades of research. Building on that foundation means you're designing systems based on tested principles, not guesswork. Information expires. Systems compound. And a system built on 40 years of validated architecture compounds faster.

### How is what Daniel does different from what the researchers do?

The researchers build *down* — from cognitive theory to computational implementation. Daniel builds *up* — from real professional needs to system architecture. The researchers' output is academic papers and software models. Daniel's output is a living system that runs his consulting business daily. Same structural concepts, radically different contexts. [LINK: Post 7 — The Architecture]

---

*Last updated: March 2026*

**Want to learn how to apply cognitive architecture principles to your own work?** [Connected Intelligence on Skool](https://skool.com/connected-intelligence) teaches you how to build the system — not just understand the concept. From your first persistent context file to a coordinated multi-agent architecture.
