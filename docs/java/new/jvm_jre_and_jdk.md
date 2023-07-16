# Java JDK, JRE 和 JVM

## 什么是JVM？

JVM（Java虚拟机）是一台抽象的计算机，使您的计算机能够运行Java程序。

当您运行Java程序时，Java编译器首先将您的Java代码编译成字节码。然后，JVM将字节码转换为本地机器代码（一组直接由计算机CPU执行的指令）。

Java是一种平台无关的语言。这是因为当您编写Java代码时，它实际上是为JVM而不是物理机器（计算机）编写的。由于JVM执行的Java字节码是与平台无关的，所以Java也是平台无关的。

![Java程序如何工作？](https://cdn.programiz.com/sites/tutorial2program/files/how-java-program-runs.jpg)  
Java程序的工作原理

如果您有兴趣了解JVM架构，请访问[深入解析JVM架构](https://dzone.com/articles/jvm-architecture-explained)。

* * *

## 什么是JRE？

JRE（Java运行环境）是一个软件包，提供Java类库、Java虚拟机（JVM）和其他必需的组件来运行Java应用程序。

JRE是JVM的超集。

![JRE包含JVM和其他Java类库。](https://cdn.programiz.com/sites/tutorial2program/files/java-realtime-enviornment_0.jpg)  
Java运行环境

如果您需要运行Java程序但不开发它们，那么您需要的是JRE。您可以从[Java SE Runtime Environment 8 Downloads](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)页面下载JRE。

* * *

## 什么是JDK？

JDK（Java开发工具包）是开发Java应用程序所需的软件开发工具包。当您下载JDK时，JRE也会随之下载。

除了JRE，JDK还包含许多开发工具（编译器、Java文档、Java调试器等）。

![JDK包含JRE和其他工具来开发Java应用程序。](https://cdn.programiz.com/sites/tutorial2program/files/java-development-kit.jpg)  
Java开发工具包

如果您想开发Java应用程序，请下载[JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)。

* * *

## JVM、JRE 和 JDK之间的关系。

![JRE包含JVM和类库，JDK包含JRE、编译器、调试器和Java文档。](https://cdn.programiz.com/sites/tutorial2program/files/jdk-jre-jvm.jpg)  
JVM、JRE 和 JDK之间的关系