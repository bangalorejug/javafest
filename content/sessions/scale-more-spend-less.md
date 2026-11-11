---
title: "Scale More, Spend Less: Modern Java to the Rescue in Production"
speakers:
- vaibhavchoudhary
- jsk
topics:
- Enterprise Java
- Core Java
sessionType: Talk
year: 2026
---
Can your Java application handle twice the traffic without doubling your infrastructure bill?

Whether you run hundreds of small microservices or one massive monolith, peak-time traffic tests your JVM in different ways—and scaling to meet that demand comes at a cost. 
In this talk, we’ll first define what “scaling efficiently” actually means by looking at the KPIs that matter in production: throughput, tail latency, GC pause times, startup and warmup times, memory footprint, and CPU efficiency. We’ll then connect these KPIs to infrastructure costs and score the JVM against each one. We’ll see how modern JDKs handle them compared with older releases, using features such as virtual threads, generational ZGC, CDS/AOT caching, compact object headers, and better container awareness. We’ll explore how these improvements can help applications handle more traffic with fewer cores, smaller memory footprints, and lower infrastructure costs, while being honest about the tradeoffs and where the JVM still needs tuning.

You’ll leave with a practical checklist for deciding what to tune, what to upgrade, and what to leave alone to scale more efficiently, reduce infrastructure costs, and prepare for the next traffic spike.
