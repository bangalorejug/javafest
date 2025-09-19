---
title: 'Inside the JVM: Debugging, Profiling, and the AI Code Trap'
speakers:
  - vaibhavchoudhary
topics:
  - Core Java
time: 10:20 AM - 11:05 AM
weight: 1
sessionType: Talk
---

Modern enterprise applications live and die by performance. In large-scale production systems, even small inefficiencies in the Java Virtual Machine can cascade into major slowdowns, outages, or spiraling costs. This session takes you inside the JVM to explore how performance challenges surface in real-world software development.

We will dive into:
Garbage Collection (GC) pitfalls — when memory management becomes a bottleneck.
The Hot Method Trap — why highly optimized code can still burn CPU cycles.
CPU profiling — finding the real culprits behind usage spikes.
APT (Application Performance Tuning) techniques — what works in production vs. lab conditions.
AI-generated code — how blindly trusting code from tools like Cursor or ChatGPT can introduce subtle inefficiencies, and why profiling, benchmarking, and deep understanding remain essential.


Through production case studies, live analysis, and examples of auto-generated code, you’ll see how even “working” code can hurt scalability and performance if not carefully reviewed and tested. You’ll also learn practical debugging and profiling strategies using tools like Java Flight Recorder, JMC, async-profiler, and system metrics.
Expect to walk away with actionable insights to spot problems faster, tune smarter, and keep your Java services running fast and reliable in production.