---
title: "How AI Coding Agents Actually Work?"
speakers:
- thamaraip
topics:
- Core Java
sessionType: Deep Talk
year: 2026
---

What happens when an AI assistant can do more than answer questions—when it can access enterprise data, invoke tools, remember conversations, and take actions on behalf of a user? More importantly, who ensures it is allowed to do so?

As organizations move generative AI from experimentation into enterprise applications, new security risks are emerging at the boundaries between models, business data, tools, and real-world actions. Real-world security incidents and published vulnerabilities demonstrate why traditional application security must evolve alongside AI capabilities.

In this session, we’ll follow a Java-based Engineering Copilot as it evolves from a simple LLM integration into a RAG-powered assistant, a tool-using agent, and an application connected through the Model Context Protocol (MCP). At every stage, we’ll explore a critical question: Can we trust what the model sees, what it decides, and what it does?

Through real-world security evidence, architecture discussions, and focused Java demos, we’ll explore how to control sensitive data sent to models, enforce authorization before retrieved content enters the context, validate and restrict model-requested tool calls, isolate agent memory, and require approval for high-impact actions. We’ll connect these challenges to practical engineering patterns using Java, Spring Boot, Spring AI, and Spring Security, supported by repeatable security tests.

Attendees will leave with a practical framework for identifying AI trust boundaries, implementation patterns they can apply to their own applications, and a working Git repository to continue experimenting beyond the session.

The goal isn’t to stop building AI. It’s to ensure that as AI gains capabilities, our applications—not the prompts—remain in control.
