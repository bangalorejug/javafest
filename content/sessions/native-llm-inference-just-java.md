---
title: "Native LLM Inference: No Python, No JNI, Just Java"
speakers:
- jayakrishnan
topics:
- Core Java
sessionType: Talk
year: 2026
---

Managing a Python sidecar just to run an LLM feature alongside your Java service creates extra infrastructure complexity, security overhead, and failure points.

In this talk, learn how to ditch the translation layer entirely! Using modern OpenJDK features (Foreign Function & Memory API, Vector API) and libraries like **jlama** and **TornadoVM**, we can execute LLM inference directly on the JVM.

What we will cover:
- **Under the Hood:** How FFM and Vector API enable Java to talk directly to native memory and SIMD hardware
- **Demo 1 (CPU Inference):** Running GGUF model weights and streaming tokens natively in pure Java
- **Demo 2 (GPU Acceleration):** Using TornadoVM to offload computation to Apple Silicon and NVIDIA GPUs without writing CUDA or C++

Learn how to build self-contained, air-gapped, and ultra-fast on-device AI applications exclusively in Java.
