---
title: "85% Leaner: Cutting the Hidden Cost of AI Agents"
speakers:
- nishant-kumar-thakur
- aditya-sharma
topics:
- Enterprise Java
- Core Java
sessionType: Talk
year: 2026
---

As organizations move AI agents into production, they encounter an unexpected bottleneck: token overhead and tool discovery latency. Standard Model Context Protocol (MCP) implementations preload full JSON schemas for every available tool into the model's context window, consuming massive token budgets and degrading model reasoning precision before the agent even begins its task.

In this session, we present **Code Mode**, an architectural pattern developed at Adobe that achieves an **85% reduction in token consumption** while improving tool selection accuracy. Instead of heavy schema injections, Code Mode leverages typed API stubs and lazy discovery to keep context windows lean and execution fast.

We will walk through the problem space, token economics benchmarks, Java-based implementation patterns, and real-world results from Adobe's agentic platform infrastructure.
