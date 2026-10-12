---
title: "How AI Coding Agents Actually Work?"
speakers:
- manukumar-vs
topics:
- Core Java
sessionType: Lightning Talk
year: 2026
---

AI coding agents can inspect a repository, edit multiple files, run builds, diagnose failures, and revise their own changes. Yet the language model at their centre generates tokens. What turns token generation into apparently purposeful engineering work—and where does human judgment still matter?
This 30-minute session gives Java developers a practical mental model of that journey. We will demystify tokens, transformers, context, and attention without deep mathematics, then distinguish an LLM from an assistant, an agent, and a coding agent. We will explore how instructions, tools, observations, and feedback enable an agent to work through a development task.
Using Codex as a concrete reference and a small, public Java teaching example, we will examine a convincing change that compiles and passes existing tests—but violates an important engineering contract. The example shows why making requirements, constraints, and independent checks explicit matters more than simply asking an agent to “write better code.”
Attendees will leave with the Five Cs—Contract, Context, Constraints, Checks, and Control—for working more effectively with coding agents. The central lesson: an LLM generates candidates, an agent acts through tools and feedback, and the engineer defines success and decides what evidence is sufficient.