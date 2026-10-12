---
title: "Running LLMs Natively on the JVM"
speakers:
- jayakrishnan
topics:
- Core Java
sessionType: Talk
year: 2026
---

Every Java shop that adds an LLM feature seems to inherit a second runtime along with it — a Python sidecar running vLLM or TGI, its own deploy pipeline, its own on-call surface. But that tax isn't actually mandatory anymore. Thanks to two OpenJDK Panama-project APIs — Foreign Function & Memory and the Vector API — Java can now run LLM inference natively, with no JNI hacks and no second language in your stack.

In this talk, we will see two demos. First, CPU inference straight from main() using jlama and llama3.java — memory-mapped GGUF weights, streamed tokens, zero external services. Then we'll move further with GPULlama3.java and TornadoVM, which JIT-compiles ordinary Java bytecode down to OpenCL, PTX, or SPIR-V at runtime — meaning GPU acceleration from Apple Silicon to NVIDIA RTX, without installing a CUDA toolkit or writing a single kernel by hand. 

This isn't a pitch to replace vLLM for large-scale serving. But for on-device inference, air-gapped environments, or teams who'd rather not operate a second runtime.

You'll leave knowing:

How the Foreign Function & Memory API and Vector API make native inference possible in plain Java
How to run CPU inference with jlama/llama3.java
How TornadoVM gets Java code onto a GPU without CUDA