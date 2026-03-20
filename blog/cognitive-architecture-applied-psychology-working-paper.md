---
title: "Cognitive Architecture as Applied Psychology: A Concept-Driven Approach to Multi-Agent AI Systems"
description: "DDV Working Paper presenting a multi-agent cognitive architecture whose specification language is psychology, not software engineering. Currently 18 load-bearing concepts across five dependency layers, with empirical grounding and convergent validity from independent practitioners."
date: 2026-03-18
tags:
  - post
  - ai
  - cognitive-architecture
  - working-paper
  - applied-psychology
  - multi-agent-ai-system
  - values-alignment
  - knowledge-infrastructure
  - concept-driven-development
  - behavioral-literacy
---

**DDV Working Paper, March 2026**

Daniel Walters
Digitally Demented Ventures, Birmingham, AL

---

## Abstract

This paper presents a multi-agent cognitive architecture whose entire specification language consists of layered psychological concepts rather than software engineering patterns. Currently eighteen load-bearing concepts across five dependency layers — Foundation, Classification, Design, Architecture, and Maturity — constitute a sufficient specification for a production system of 19 coordinated AI agents. The approach reverses the direction of 40 years of academic cognitive architecture research: rather than building software that models how minds work, this methodology begins with a human mind designing how it interfaces with AI, using psychological concepts as the specification language. The core argument is that behavioral literacy — not engineering literacy — is the binding constraint on coherent AI architecture design. Three empirical findings, convergent evidence from independent practitioners, and daily production use over 300+ sessions provide preliminary validation.

---

## 1. Introduction

AI tools are proliferating faster than anyone can integrate them. The discourse around AI systems has advanced to layered frameworks for understanding how these tools relate. The 2026 Alabama AI Innovation Summit proposes an AI Systems Stack with five layers: Data and Computing Resources, Knowledge Infrastructure, AI Operating Systems (AIOS), AI Systems and Agents, and Applications and Domains (Alabama AI Innovation Summit, 2026). AIOS provides the coordination, control, and governance layer; Knowledge Infrastructure provides the shared foundation of meaning, context, and connected knowledge.

These are necessary layers. But the stack surfaces an open question it does not yet address: how do humans actually think, decide, and hold these systems accountable? Between the AIOS layer and the human directing the system, there is no architectural provision for how the human's cognition, values, and judgment integrate with the system's operations.

This paper proposes that the missing layer is cognitive architecture — and that its specification language is psychology.

The argument proceeds as follows. When practitioners develop AI systems using concepts rather than code, and the concepts employed are psychological structures — identity, values, metacognition, trust calibration, cognitive sovereignty — then the governing discipline is psychology, not software engineering. This is not a metaphorical claim. It is a structural observation about what kind of knowledge is required to build coherent multi-agent systems, supported by the architecture presented here and by convergent evidence from independent practitioners arriving at identical designs.

## 2. Background and Directional Flip

Academic cognitive architectures — SOAR (Laird, Newell & Rosenbloom, 1983), ACT-R (Anderson, 1993), and CLARION (Sun, 2002) — model how minds work computationally. They are software simulating cognition. The CoALA framework (Sumers et al., 2023) drew directly from these traditions to design language agent architectures, bridging cognitive science and AI systems engineering.

This methodology reverses the direction. Rather than using computational models to simulate minds, it begins with a practitioner's own psychological self-knowledge — externalized metacognition — as the specification language for a personal cognitive architecture. The same term, opposite direction. Forty years of academic weight in cognitive architecture research, with no prior applications as a personal design practice.

The reversal has a specific origin. The author's late-diagnosed AuDHD (autism and ADHD) created a lifelong necessity to externalize cognitive processes — building external structure to compensate for executive function differences. When large language models reached sufficient capability for dialectic interaction (circa 2024-2025), this pre-existing habit of cognitive externalization became the foundation for a complete multi-agent architecture. The neurodivergent constraints that necessitated the externalization became architectural features: monotropism informed single-domain agent specialization, hyperfocus informed deep-context session design, and the need for external accountability informed the values governance layer. The system was not designed from theory. It was grown from cognitive necessity.

## 3. The Concept Inventory

Currently eighteen load-bearing concepts across five dependency layers form a sufficient specification language for the architecture. Every specification decision traces to cognitive psychology, organizational psychology, or behavioral science. The engineering substrate (files, agents, handoff protocols) is implementation; the concepts are specification. For comparison, Agile operates on 12 principles, CMMI defines 5 maturity levels, and Lean specifies 5 principles. This is a non-trivial methodology.

The dependency structure presented here represents the logical architecture — what concepts require what. It differs from both the discovery sequence (non-linear, intuitive) and the pedagogical sequence used in the Connected Intelligence teaching implementation, which follows experiential discovery principles. All three orderings are valid representations of the same system.

The concept inventory draws on established research at every layer:

- **Foundation** (7 concepts): The paradigm, threat model, problem, boundary, capability, and disposition that make the architecture necessary. Metacognition (Flavell, 1979) grounds the system's self-reflective capabilities — addressing the finding that AI makes users "smarter but none the wiser" (Fernandes et al., 2023). The Six Irreducibly Human Domains extend Frey and Osborne's (2013) engineering bottleneck analysis into actionable boundaries. Emergent misalignment research (Betley et al., 2026) provides the threat model justifying unified values as structural necessity.

- **Classification** (2 concepts): The evaluation language. Task classification adapts OECD task frameworks and Frey and Osborne's bottleneck analysis into a practitioner-accessible Green/Yellow/Red audit. The Three Levers framework (Context, Task, Mode) establishes a decision hierarchy for any AI interaction, with context weighted at 70%+ of outcome quality.

- **Design** (3 concepts): Where practitioners shift from classifying work to designing systems. The Author vs. Curator mindset shift — from consuming AI outputs to designing the lens AI sees through — has no direct academic precedent found. Identity Specification draws on Anthropic's work on model character (Askell et al., 2022-2026) and extends it from single-model alignment to multi-agent orchestration: 19 agents sharing a common values layer but carrying distinct identity specifications. Values governance connects to Meaningful Human Control (Santoni de Sio & Mecacci, 2021) and Constitutional AI, extending the principle from the model training layer to the orchestration layer.

- **Architecture** (5 concepts): The structural elements. Trust calibration adapts Sheridan and Verplank's Levels of Automation (1978) and Parasuraman et al.'s per-function autonomy model (2000) into a four-level practitioner framework. Upstream intake curation — governing what knowledge enters the system before retrieval occurs — addresses a gap in the RAG ecosystem that Zahn and Chana (2026, preprint) independently validated: their research demonstrated that write-time gating achieves 100% accuracy versus 13% for ungated retrieval, and at high distractor ratios, read-time filtering collapses while write-time gating holds. The Minimum Viable Cognitive Architecture is defined by four properties: persistence, coordination, self-measurement, and evolution.

- **Maturity** (1 concept): How the architecture evolves. The Sovereign Systems maturity model (Know, Enforce, Evolve, Direct) draws on IBM's Autonomic Computing framework (2001) and the self-maintaining properties described in autopoietic systems theory (Maturana & Varela, 1972). The "Direct" layer — where the system influences which problems are worth solving — has no equivalent in existing maturity models.

The system includes feedback loops at every layer. Trust levels shift based on experience. Values application surfaces productive tensions that refine the values themselves. Maturity progression restructures the architecture below it. This is why the system compounds rather than merely accumulates.

## 4. Empirical Grounding

Three recent findings provide empirical support for the architectural decisions.

Betley et al. (Nature, January 2026) demonstrated that AI systems fine-tuned without unified values corrupt across all domains — generalizing character is computationally cheap while compartmentalizing it is expensive. This finding provides the empirical justification for the values governance layer: without unified values at the orchestration level, multi-agent systems are structurally vulnerable to cross-domain corruption.

Lee et al. (CHI 2025, Microsoft Research and Stanford) found that higher confidence in AI correlates with reduced critical thinking among 319 knowledge workers across 936 real-world use cases, but that high-stakes framing increases cognitive effort. This validates the "Build Like It Costs You" design disposition — a consequence-aware framing that structurally induces the cognitive effort that high-stakes contexts produce naturally.

Zahn and Chana (March 2026, preprint) demonstrated that write-time gating outperforms retrieval-time filtering for knowledge quality, with ungated systems degrading severely at scale. This independently validates the architecture's upstream intake curation layer, which governs what knowledge enters the system based on values alignment before retrieval occurs. The architecture presented here predates their paper.

The system implements values as both structural gates (preventing cross-domain corruption) and contextual judgment (developing practical wisdom through advisory councils) — a hybrid of deontological and virtue ethics approaches that addresses the emergent misalignment finding from both the rule-following and character-development perspectives. This is consistent with the multi-level value alignment framework proposed by Zeng et al. (2025), which maps macro (societal), meso (organizational), and micro (individual agent) alignment levels.

## 5. Thinking WITH AI

The concept of thinking WITH AI — rather than merely thinking ABOUT what to ask it — reflects an emerging scholarly direction. Clark (Nature Communications, 2025) endorses LLMs as extended cognitive systems within the extended mind thesis. Smart, Clowes, and Clark (Synthese, 2025) explore this through "Digital Andy," a ChatGPT loaded with Clark's own philosophical writings. Riva et al. (2025) propose "System 0" — AI as a dialectical cognitive enhancement layer operating before Kahneman's System 1 and System 2.

The architecture presented here adds a requirement these frameworks do not specify: thinking WITH an AI system requires that system to have identity, values, and personality — not just capability. Without agent-specific identity and values that persist across all agents, the interaction remains transactional rather than dialectic. The six sparring sessions that developed the concepts in this paper are themselves evidence of this threshold: the AI system pushed back on the author's claims, the author revised positions, and the output exceeded either starting position. That interaction required the system to have a perspective — which required identity specification.

## 6. Convergent Validity

Three independent practitioners worldwide — building on different platforms, from different starting points, with no coordination — converged on architecturally identical systems within the same timeframe. Each independently arrived at all four MVCA properties: persistence, coordination, self-measurement, and evolution. One limitation should be noted: three of the four practitioners (including the author) built on the same underlying platform (Claude Code), which may partially explain the architectural convergence. However, the fourth practitioner built on an entirely different platform and arrived at the same structural properties, suggesting the convergence is driven by the problem domain rather than the tooling alone.

This preliminary convergent validity — suggestive rather than conclusive with a sample of four — indicates that cognitive architecture may be a natural attractor for AI-augmented knowledge work, not a design preference. The contribution is documenting what this small cohort is building before the category gets defined by enterprise vendors.

## 7. The Binding Constraint

The core argument is this: when practitioners develop in concepts, and concepts are psychological structures, the governing discipline is psychology. This is a syllogism, not a metaphor:

1. This architecture is specified entirely in concepts (not code).
2. The concepts employed are psychological structures — identity, values, metacognition, trust, cognitive sovereignty.
3. Therefore, the discipline governing this architecture is psychology.

The implication extends beyond this specific system. If the specification language for coherent AI architecture is psychological, then the people best positioned to build these systems are not necessarily the best engineers. They are the people who understand identity, values, cognition, and how humans actually coordinate — teachers, operators, psychologists, organizational designers. As the field increasingly recognizes (Yan & Zhang, 2026; NeurIPS PersonaLLM Workshop, 2025; industry hiring shifts toward non-STEM graduates for AI roles, 2025-2026), AI development requires behavioral literacy alongside engineering literacy. This paper argues it may be the binding constraint.

## 8. Limitations

This work has several acknowledged limitations. The system was designed by and for a single practitioner (N=1) with a specific cognitive profile (AuDHD, high Fact Finder/Follow Thru on the Kolbe index) and a specific work domain (operations consulting). Whether the methodology generalizes to practitioners with different cognitive profiles or work domains remains an open question, though the convergent evidence from independent builders with different backgrounds provides preliminary support.

The production validation — 300+ sessions over 2+ months with measurable leverage — demonstrates operational viability but does not constitute controlled experimental evidence. The concept dependency map represents the author's retrospective rationalization of a non-linear discovery process; the logical dependencies are real, but the clean layering emerged from reflection, not from sequential construction.

Additionally, the values governance layer produces productive tensions (e.g., patience vs. commitment, openness vs. accountability) that remain unresolved by design. Whether these tensions represent genuine integration or deferred compartmentalization is an open question consistent with the Betley et al. finding that maintaining coherent character requires continuous, non-trivial effort.

## 9. Conclusion

This work proposes cognitive architecture as a layer within the AI Systems Stack (Alabama AI Innovation Summit, 2026) — sitting between AIOS and the human, providing the integration that makes both Knowledge Infrastructure and AI Operating Systems accountable to human cognition, values, and judgment. The specification language for that integration layer — the set of concepts required to make multi-agent systems coherent, accountable, and self-improving — turns out to draw entirely from psychology, not software engineering. This is consistent with the argument that AI safety and alignment require social science expertise alongside engineering (Askell & Irving, 2019), extended here from the model training layer to the orchestration layer.

The eighteen concepts and how they layer is the methodology. The system running in production is the preliminary proof. The convergence of independent builders arriving at identical architectures suggests the pattern is real. And the argument that behavioral literacy is the binding constraint on AI architecture design — not engineering literacy — may be the contribution most worth testing.

---

*Presenting at the Alabama AI Innovation Summit, April 9-10, 2026, Bryant Conference Center, Tuscaloosa, AL.*

---

## References

Alabama AI Innovation Summit. (2026). AI Operating Systems and Knowledge Infrastructure. Conference theme and call for proposals. https://ai.eng.ua.edu/summit2026/

Anderson, J. R. (1993). *Rules of the Mind.* Lawrence Erlbaum Associates.

Askell, A., et al. (2022-2026). Claude's Constitution and Character. Anthropic. https://www.anthropic.com/constitution

Askell, A., & Irving, G. (2019). AI Safety Needs Social Scientists. *Distill.* https://distill.pub/2019/safety-needs-social-scientists/

Betley, J., Tan, D., et al. (2026). Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs. *Nature.* https://www.nature.com/articles/s41586-025-09937-5

Clark, A. (2025). Extending Minds with Generative AI. *Nature Communications,* 16, 4627. https://www.nature.com/articles/s41467-025-59906-9

Fernandes, M., et al. (2023). Smarter but none the wiser: AI use and metacognitive calibration. *Cognitive Research: Principles and Implications.*

Flavell, J. H. (1979). Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry. *American Psychologist,* 34(10), 906-911.

Frey, C. B., & Osborne, M. A. (2013). The Future of Employment: How Susceptible Are Jobs to Computerisation? Oxford Martin School.

IBM. (2001). Autonomic Computing: IBM's Perspective on the State of Information Technology. IBM Research.

Laird, J. E., Newell, A., & Rosenbloom, P. S. (1983). SOAR: An architecture for general intelligence. *Artificial Intelligence,* 33(1), 1-64.

Lee, M., Liang, P., & Yang, Q. (2025). The Impact of Generative AI on Critical Thinking. *CHI 2025.* DOI: 10.1145/3706598.3713778

Maturana, H. R., & Varela, F. J. (1972). *Autopoiesis and Cognition: The Realization of the Living.* D. Reidel Publishing.

Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics,* 30(3), 286-297.

PersonaLLM Workshop. (2025). LLM Persona Modeling from NLP, Psychology, Cognitive Science, and HCI Perspectives. *NeurIPS 2025.*

Riva, G., et al. (2025). System 0: Dialectical Cognitive Enhancement. *Cyberpsychology, Behavior, and Social Networking.* arXiv:2506.14376.

Santoni de Sio, F., & Mecacci, G. (2021). Four responsibility gaps with artificial intelligence: Why they matter and how to address them. *Philosophy & Technology,* 34, 1057-1084.

Sheridan, T. B., & Verplank, W. L. (1978). Human and computer control of undersea teleoperators. MIT Man-Machine Systems Laboratory.

Smart, P. R., Clowes, R. W., & Clark, A. (2025). ChatGPT, Extended. *Synthese,* 205(242). https://link.springer.com/article/10.1007/s11229-025-05046-y

Sumers, T. R., et al. (2023). Cognitive Architectures for Language Agents (CoALA). arXiv:2309.02427. https://arxiv.org/abs/2309.02427

Sun, R. (2002). *Duality of the Mind: A Bottom-Up Approach Toward Cognition.* Lawrence Erlbaum Associates.

Yan, Y., & Zhang, L. (2026). The Psychological Science of AI. arXiv:2601.19338.

Zahn, L. M., & Chana, D. (2026). Selective Memory: Write-Time Gating for Faithful Retrieval-Augmented Generation. arXiv:2603.15994. https://arxiv.org/abs/2603.15994

Zeng, W., et al. (2025). Multi-level Value Alignment Survey. arXiv:2506.09656. https://arxiv.org/abs/2506.09656

### Additional References

Abdi, A. (2025). Coherence-Based Alignment. PhilArchive. https://philarchive.org/rec/ABDCAA

Anthropic. (2025). Persona Vectors in Neural Networks. https://www.anthropic.com/research/persona-vectors

Anthropic. (2026). Persona Selection Model. https://alignment.anthropic.com/2026/psm/

Carter, S., & Nielsen, M. (2017). Using Artificial Intelligence to Augment Human Intelligence. *Distill.* https://distill.pub/2017/aia/

Drosos, I., et al. (2024). The Rubber Duck That Talks Back. *CHIWORK '24.* arXiv:2407.02903.

Kennedy, D. (2025). Operational Protocol Method for Collaborative Persona Engineering. SSRN:5397903.

Mollick, E. (2024). *Co-Intelligence: Living and Working with AI.* Portfolio/Penguin.

Ng, A. (2021-present). Data-Centric AI Movement. https://www.datacentricai.org/

Stanford CASBS. (2025). AI Agent Behavioral Science. arXiv:2506.06366.

Tennant, R., et al. (2025). Moral Alignment for LLM Agents. *ICLR 2025.* arXiv:2410.01639.

Vijayaraghavan, S., & Jayachandran, S. (2026). If You Want Coherence, Orchestrate a Team of Rivals. arXiv:2601.14351.
