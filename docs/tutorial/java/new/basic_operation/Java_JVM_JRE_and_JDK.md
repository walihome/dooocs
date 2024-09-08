---
title: Java JDK, JRE 和 JVM
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java JDK, JRE 和 JVM

## 什么是 JVM？

JVM（Java 虚拟机）是一台抽象的计算机，使得你的计算机能够运行 Java 程序。

当你运行 Java 程序时，Java 编译器首先将你的 Java 代码编译为字节码。然后，JVM 将字节码转换为本机机器码（一组计算机 CPU 直接执行的指令集）。

Java 是一种平台无关的语言。这是因为当你编写 Java 代码时，它最终是为 JVM 编写的，而不是为你的物理机器（计算机）编写的。由于 JVM 执行的 Java 字节码是平台无关的，所以 Java 是平台无关的。

![Java 程序如何工作？](https://cdn.programiz.com/sites/tutorial2program/files/how-java-program-runs.jpg)  
Java 程序的工作原理

如果你有兴趣了解 JVM 架构。[《JVM 架构解析》](https://dzone.com/articles/jvm-architecture-explained)。

* * *

## 什么是 JRE？

JRE（Java 运行环境）是一个软件包，提供了 Java 类库、Java 虚拟机 (JVM) 和其他运行 Java 应用程序所需的组件。

JRE 是 JVM 的超集。

![JRE 包含 JVM 和其他 Java 类库。](https://cdn.programiz.com/sites/tutorial2program/files/java-realtime-enviornment_0.jpg)  
Java 运行环境

如果你需要运行 Java 程序，而不是开发它们，那么你就需要 JRE。你可以从[Java SE Runtime Environment 8 下载](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)页面下载 JRE。

* * *

## 什么是 JDK？

JDK（Java 开发工具包）是开发 Java 应用程序所需的软件开发工具包。当你下载 JDK 时，JRE 也会随之下载。

除了 JRE 外，JDK 还包含许多开发工具（编译器、JavaDoc、Java 调试器等）。

![JDK 包含 JRE 和其他工具来开发 Java 应用程序。](https://cdn.programiz.com/sites/tutorial2program/files/java-development-kit.jpg)  
Java 开发工具包

如果你想开发 Java 应用程序，请[下载 JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)。

* * *

## JVM、JRE 和 JDK 之间的关系

![JRE 包含 JVM 和类库，JDK 包含 JRE、编译器、调试器和 JavaDoc](https://cdn.programiz.com/sites/tutorial2program/files/jdk-jre-jvm.jpg)  
JVM、JRE 和 JDK 之间的关系