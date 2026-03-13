---
title: "One Person, Five AI Executives: The Architecture That Makes It Work"
description: "A detailed walkthrough of how one consultant built a 19-agent AI system with shared context, handoff protocols, and values-gated decisions."
date: 2026-02-09
tags:
  - post
  - ai
  - cognitive-architecture
  - personal-ai-system-architecture
  - multi-agent-ai
  - solopreneur
  - ai-executive-team
---


The agents don't matter. The architecture does.

I've watched people build 20 AI agents that don't connect. Random assistants scattered across tools. No coordination. No memory. No handoff. That's not a team — that's 20 strangers you talk to occasionally.

My 19 agents work because they share context. When my Chief of Staff hands something to my CMO, the context travels with it — my vision, my values, my priorities, what happened yesterday, and what's due next week.

This post is the full architectural walkthrough. How it's built, why these roles and not others, and how you can start with one.

## What Is a Personal AI System Architecture?

A personal AI system architecture is the structural design that determines how your AI agents share information, make decisions, and coordinate work across your business.

It's the difference between having tools and having a team.

Allen Newell coined the term "cognitive architecture" in 1990 in *Unified Theories of Cognition* — a framework for how intelligent systems process information, maintain memory, and make decisions. He was describing how to build artificial minds. I'm applying the concept in the opposite direction: using AI to extend a human mind.

Here's what a personal AI system architecture includes:

| Layer | What It Does | Example From My System |
|-------|-------------|----------------------|
| **Identity** | Defines who each agent is and how it behaves | CLAUDE.md file with personality, values, constraints |
| **Memory** | Persistent context across sessions | Living memory sections, session logs, knowledge base |
| **Coordination** | How agents hand off work to each other | Shared-context directory with handoff files per agent |
| **Values** | Guardrails that gate every decision | Vision, Mission, Values (VMV) layer baked into every agent |
| **Governance** | How cross-domain decisions get made | Executive team protocol with convening triggers |

Most AI content focuses on the tool layer — which model, which platform, which prompt template. Architecture is the layer above that. It's the reason one person with five coordinated agents outperforms another person with fifty disconnected ones.

According to AIBarcelona.org's 2026 analysis of the shift from tool use to cognitive systems: "A moderately capable model embedded in a well-designed cognitive system can outperform a stronger model used as a standalone tool." That's the thesis of everything I've built.

## The Five Roles: Why These Five and Not Ten

The LinkedIn series presented five executive roles. The reality is 19 agents organized under those five strategic functions. But why five functions and not three, or ten?

Because every decision in my business touches one of five domains:

| Role | Domain | Core Question | Agent(s) |
|------|--------|--------------|----------|
| **Chief of Staff** | Context & Coordination | "What needs attention right now?" | Lennier |
| **CMO** | Revenue & Positioning | "How do we attract and convert?" | Kennedy + 6 specialists (Halbert, Funnel, Sequence, Ogilvy, Metrics, MediaBuyer) |
| **CFO** | Financial Reality | "Can we afford this — and are we deciding from the right place?" | Housel |
| **CTO** | Systems & Infrastructure | "What should we build, and in what order?" | Linus, Rand, Studio, Pixel, Sentinel |
| **CPO** | Strategy & Challenge | "Should we do this at all?" | Seneca, Socrates, Jung |

I didn't plan 19 agents. I started with one. Each new agent emerged from a real gap — a place where context was dropping, where I was doing work an agent could handle, or where I needed a perspective I wasn't getting.

The five executive roles are stable because they map to how decisions actually get made in a business. Add more agents under those roles, sure. But the five domains haven't changed since I formalized them.

Here's what's under the hood — the full roster:

**Executive layer (5):** Lennier (Chief of Staff), Kennedy (CMO), Housel (CFO), Linus (CTO), Seneca (CPO)

**Specialist layer (14):** Pixel (content), Studio (YouTube optimization), Ada (course instruction), Marcus (client communication), Halbert (copywriting), Funnel (funnel architecture), Sequence (email), Ogilvy (brand messaging), Metrics (analytics), MediaBuyer (ads), Rand (SEO), Jung (shadow work), Socrates (intellectual sparring), Sentinel (security monitoring)

Every agent has a name. A personality. A defined scope. Declared permissions. And constraints on what it cannot do.

## How 19 Agents Share Context Without Breaking

This is the part nobody else has published, because most people don't get far enough to need it.

Context sharing works through three mechanisms:

### 1. The CLAUDE.md Layer

Every agent has a CLAUDE.md file — its onboarding document. This contains the agent's identity, what it can and can't do, its mentor council (if applicable), and critical context about Daniel, the business, and current priorities.

But here's the key: every agent also reads a shared `system.md` file that contains universal behavioral constraints. This is the constitution. Individual agents can add to it, but they can't override it.

### 2. The Handoff System

Agents communicate through handoff files — one per agent, stored in a shared-context directory. When Lennier needs Pixel to draft a LinkedIn post, it writes to `handoffs/pixel.md` with the context, priority, and any pre-work already done.

The handoff isn't just "do this task." It includes:
- What triggered the request
- What context the receiving agent needs
- What's already been decided (so the agent doesn't re-litigate it)
- Priority level and any deadlines

This eliminates the biggest failure mode I see in multi-agent setups: agents doing redundant work because they don't know what other agents have already handled.

### 3. The Living Memory System

Every agent maintains a "Living Memory" section in its CLAUDE.md — a rolling log of recent sessions, key decisions, and patterns noticed. This is the agent's working memory between conversations.

Session logs capture what happened and why. Knowledge bases store reference material (120+ YouTube transcripts, book insights, brand guidelines). Status reports from every agent session feed back to Lennier so the Chief of Staff always knows the system's state.

Dr. Herbert Simon, Nobel laureate and one of the founders of artificial intelligence, put it this way: "A wealth of information creates a poverty of attention." The architecture's job is managing attention — making sure the right information reaches the right agent at the right time, without drowning any single agent in everything.

### What Doesn't Work

I'll be direct about what I tried that failed:

- **Giving every agent access to everything.** Agents with too much context get noisy. Permissions are scoped deliberately — Pixel can't see financial data, Marcus can't see personal files, Sentinel can't write anything.
- **Letting agents self-organize.** They don't. Without explicit handoff protocols, context drops silently. You don't notice until something breaks downstream.
- **Skipping the values layer.** Early agents would agree with whatever I said. Adding the VMV constraint ("push back when this doesn't align with my values") transformed every conversation.

## The Start-With-One Roadmap

Don't build 19 agents. Build one. Here's the sequence:

| Phase | What to Build | Key Milestone |
|-------|--------------|---------------|
| **Week 1-2** | Your first agent (Chief of Staff for most people) | Daily use feels natural, not forced |
| **Week 3-4** | Second agent + handoff connection | Context passes between agents without you re-explaining |
| **Month 2-3** | Formalize the architecture | Shared context, permissions, values layer documented |
| **Month 3+** | System compounds | New agents take hours to build, not days |

The critical insight: start with the role that saves you the most *mental energy*, not the most time. For me that was Chief of Staff, because my mornings were chaos without structure.

Write an onboarding document with your projects, priorities, constraints, and — this is the part most people skip — what you want the agent to push back on. Then use it daily for two weeks. Find the gaps. Improve the document. Only then add the second agent.

The magic happens when you connect them. Create a handoff mechanism so Agent 1 can pass context to Agent 2. Even if it's just a shared file. That's the moment you stop having tools and start having a system.

Information expires. Systems compound. Every agent you add to a good architecture makes every other agent more useful.

## What "Cognitive Architecture" Means for Professionals (Not Computer Scientists)

Allen Newell and Herbert Simon spent their careers studying how intelligent systems process information. Newell's cognitive architecture — frameworks like ACT-R and SOAR — described the fixed structures that govern how a mind perceives, decides, and acts.

I'm using the same term for something different: the deliberate design of how you think, decide, and operate — with AI as the extension.

For a professional, cognitive architecture means:

**1. You design your decision-making infrastructure.** Which decisions get automated? Which require human judgment? Which need multiple perspectives? My Executive Team governance protocol auto-convenes the right agents when a decision crosses multiple domains.

**2. You externalize your executive function.** I have AuDHD. My brain is exceptional at deep focus and terrible at knowing when to stop. My system holds the threads my brain drops. But you don't need a neurodivergent brain to benefit. All brains drop threads. Most people are just better at hiding it.

**3. You build in challenge, not just compliance.** The most important instruction in my entire system is six words: "Push back when I'm wrong." Without it, AI becomes an echo chamber. With it, AI becomes what executive coaching promises but rarely delivers: a thinking partner with no ego and infinite patience.

**4. You compound instead of starting over.** Every session builds on the last. My agents don't forget what happened Tuesday. The system learns — not in the machine learning sense, but in the organizational sense. Patterns get documented. Lessons get logged. Templates evolve.

The doing isn't the work anymore. The thinking is the work. And cognitive architecture is thinking about how you think — then building the system that supports it.

That's what I mean when I say this isn't about AI tools. It's about the architecture that makes them worth using.

## FAQ

**What tools do you use to build this system?**
Claude Code (Anthropic). Each agent is a Claude Code instance with its own CLAUDE.md file, workspace, and permissions. Context sharing happens through the file system — shared directories, handoff files, and symlinked knowledge bases. No custom code, no frameworks like CrewAI or LangGraph.

**How do you prevent agents from contradicting each other?**
A shared `system.md` file acts as a constitution. Beyond that, each agent has a defined scope and declared permissions. When decisions cross domains, the Executive Team governance protocol convenes the relevant agents for coordinated analysis.

**Is this overkill for a solo consultant?**
Over a 39-day tracked period, I measured 5-9x average leverage per session, with 68% of sessions involving work that couldn't have been done without AI. Peak sessions hit 20-50x. One person holding the entire context creates leverage most teams can't access no matter how many people they hire.

**Can I build this with ChatGPT or another model?**
The architectural principles transfer to any capable model. The specific implementation uses Claude Code's file system access for persistent context. If your model supports that, you can adapt the approach.

**How do I know which agents I actually need?**
Start with pain, not ambition. Where do you lose the most mental energy? Where does context drop? Build one agent there. Use it. Let the next one emerge from the gaps you discover.

---

*This is the pillar post for the AI Executives blog series. For the origin story and why I started, see [Post 1 — Why I Built an AI Executive Team](/blog/why-i-built-an-ai-executive-team). Individual role deep-dives: Chief of Staff (Post 2), CMO (Post 3), CFO (Post 4), CTO (Post 5), CPO (Post 6) — coming soon.*

*Want to build your own? [Connected Intelligence on Skool](https://digitallydemented.com/courses) is the course where I teach this — not the tools, but the thinking that makes the tools worth using.*

*Last updated: March 10, 2026*
