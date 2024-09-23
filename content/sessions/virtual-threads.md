---
title: 'Virtual Threads in Java - A Primer'
speakers:
  - vaibhavchoudhary
  - ram-bgl
topics:
  - workshop
date: 2017-03-23
weight: 5
---

In this talk, we will explore the intricacies of Java virtual threads, a revolutionary feature in modern Java development aimed at simplifying concurrency and improving performance. Unlike typical discussions that focus on how to use virtual threads, this session will take a deep dive into the internals of the Java runtime, shedding light on what happens under the hood when you work with virtual threads.

We will start by examining the traditional thread model in Java and its limitations, setting the stage for understanding the motivations behind the introduction of virtual threads. We will dissect the core design decisions that the Java development team made to enable virtual threads to scale effortlessly, providing lightweight concurrency while maintaining the familiar Java threading model.

The heart of this session will be a detailed exploration of the inner workings of virtual threads: how they differ from platform threads, how the Java runtime manages them, and how they interact with the underlying operating system and hardware. We will discuss the architecture and mechanisms that enable virtual threads to minimise overhead and optimise resource usage, including the role of continuations, thread scheduling, and task management.

By the end of this talk, attendees will gain a deeper understanding of the power and flexibility that virtual threads bring to the table, the design philosophies that guided their development, and how this knowledge can influence their approach to concurrency in Java applications. Whether you are a seasoned Java developer or just beginning to explore the world of concurrency, this session will provide valuable insights that go beyond surface-level usage, equipping you to make informed decisions about incorporating virtual threads into your projects.