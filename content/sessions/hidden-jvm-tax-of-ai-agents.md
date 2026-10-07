---
title: "The Hidden JVM Tax of Running AI Agents in Java: A Production Survival Guide"
speakers:
- prabal-rakshit
topics:
- Core Java
- Enterprise Java
sessionType: Talk
year: 2026
---

AI Agents built on the JVM look like microservices from the outside, but behave unlike anything you have operated before. Long-running LLM streams pin carrier threads, complex multi-step reasoning creates spiky heap allocation profiles, and high-frequency tool invocations expose latency vulnerabilities in standard thread pools and HTTP client configurations.

This talk provides a production survival guide for engineers running AI agent workloads on the JVM:
- **Thread & I/O dynamics:** How SSE/streaming LLM responses interact with Virtual Threads and Netty event loops
- **Memory & GC pressures:** Taming short-lived prompt/token allocations and off-heap memory usage
- **Observability:** Profiling agent internals with eBPF flamegraphs and OpenLit distributed tracing
- **Kubernetes tuning:** Sizing CPU/memory requests and limits for unpredictable agent workloads

Attendees will leave with practical tuning parameters and monitoring strategies to keep JVM-based AI agents performant and reliable at scale.
