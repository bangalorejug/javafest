---
title: "Demystifying Primitives in Patterns from a Java Programmer's Perspective"
speakers:
- manoj-nalledathu
topics:
- Core Java
sessionType: Lightning Talk
year: 2026
---

Pattern matching in Java has evolved rapidly from `instanceof` patterns to record patterns and switch expressions. With recent Java releases, support for primitive types in patterns completes the picture, eliminating awkward boxing and unboxing ceremonies and enabling seamless matching across reference and primitive types alike.

This talk demystifies how primitives in patterns work under the hood from both language design and compiler perspectives:
- Why primitive patterns were needed and the ergonomics they unlock
- How the compiler translates primitive patterns into efficient bytecode
- Exhaustiveness, dominance, and scoping rules with primitive types
- Practical code examples demonstrating clean, idiomatic pattern matching in modern Java
