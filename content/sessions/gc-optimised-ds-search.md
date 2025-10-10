---
title: 'GC Optimized Data Structures for Search'
speakers:
  - atrisharma
topics:
  - Core Java
time: 10:20 AM - 11:05 AM
weight: 1
sessionType: Talk
duration: 30 min
---

In large-scale search engines, the enemy is often the JVM garbage collector. Millions of objects per second, long-lived postings data, and heavy vector processing can stall even the best-tuned system.

In large-scale search engines, the enemy is often the JVM garbage collector. Millions of objects per second, long-lived postings data, and heavy vector processing can stall even the best-tuned system. Over the last year, I’ve had to redesign core Lucene components to survive this pressure.

This session dives into how to build GC-friendly data structures for real-time systems. I’ll cover when to avoid object graphs entirely, how to use off-heap storage safely, and why sun.misc.Unsafe, VarHandle, or Panama aren’t just low-level tricks but essential tools. You’ll see concrete optimizations: replacing boxed collections with primitive arrays, pre-sizing with ArrayUtil, and pooling byte buffers to cut allocations.

We’ll also look at failure cases — places where clever structures backfired and made GC pauses worse. By the end, you’ll have a set of proven approaches for reducing GC pressure and keeping your Java system responsive under real load.
