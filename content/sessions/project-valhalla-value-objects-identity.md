---
title: "Project Valhalla: Value Objects, Identity, and Java’s Future"
speakers:
- ravi-gupta
topics:
- Core Java
sessionType: Lightning Talk
year: 2026
---

Java developers frequently model data using standard objects, even when that data has no meaningful identity. Project Valhalla bridges the historical divide between primitive and reference types by introducing value objects.

In this session, we will explore:
- The object/primitive split in Java and the motivation for value objects
- Comparing `final class`, `record`, and JDK 28 preview `value class`
- Bytecode inspection with `javap -v -p`: exploring `ACC_STRICT_INIT`, preview metadata, and constructor ordering
- Key JEPs including JEP 401 and JEP 539
- Methodologies for benchmarking memory layout, cache locality, and runtime performance
