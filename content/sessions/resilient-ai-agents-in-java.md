---
title: "Resilient AI Agents in Java: A Production Framework for When Reasoning Isn't Enough"
speakers:
- varsha-das
topics:
- Enterprise Java
- Spring AI
sessionType: Talk
year: 2026
---

AI agents fail in production in ways traditional services don't: non-deterministic outputs, cascading tool failures, context window exhaustion, and hallucinations that pass unit tests. Most tutorials stop at simple agent execution, but deploying agents into enterprise environments requires a completely different architectural mindset.

This talk presents a battle-tested production framework for building resilient, enterprise-grade AI agents using Java and Spring AI. We cover:
- **Circuit breakers & fallback chains** for agent reasoning steps
- **Context window management** and dynamic token budgeting
- **Tool call validation** and runtime guardrails
- **Observability and tracing** for multi-step agent decisions using OpenTelemetry and Spring AI observation APIs

Attendees will leave with actionable design patterns, architecture blueprints, and a concrete mental model for taking Java AI agents from prototype to production with confidence.
