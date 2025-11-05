---
title: 'Pinning issues with Virtual Threads: Differences between JDK21 and JDK24'
speakers:
  - sreevidhya
topics:
  - Core Java
time: 02:15 PM - 03:00 PM
weight: 3
sessionType: Talk
duration: 45 min
---

JDK 21 introduced the concept of virtual threads based on JEP 444. They provide scale(higher throughput) and not speed(lower latency). The threads can be categorized into 2 types – virtual and platform. The platform threads are the traditional threads which are a thin wrapper around the OS threads. These are also called carrier thread as well because the virtual thread run on top of or mounts on these threads. Virtual threads are used in use cases which requires blocking I/O operations and need to wait. The idea is that the virtual thread gets suspended when it encounters an I/O operation or when it sleeps, and the carrier thread is free to work on other virtual threads.

However there is a known issue of ‘pinning’ in JDK 21 which if not coded correctly, would end up blocking the carrier threads until the virtual thread itself is complete. This usually ends up in production issues when the application doesn’t scale as expected. As per the JDK documentation pinning happens in 2 cases –

    The virtual thread runs some code inside a synchronized block or method.
    The virtual thread runs a native method or a foreign function(code outside the JVM).

One has to be careful with replacing the ExecutorService thread pool with virtual thread pool because of the above 2 points.

JDK 24 addressed the issue with the synchronized block or method however when calling native methods and foreign functions, it could still happen.

This talk looks into the thread level detail of jdk 21 and jdk 24 and compares the state to understand ‘pinning’ more. It would also look into a few concurrent collections and classes at a thread level by looking a the thread dump.
