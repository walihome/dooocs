---
title: 包与模块
description: 理解 Java 中的包（package）、导入（import）、CLASSPATH 以及 Java 9 模块系统的基础
order: 16
keywords: [Java, 包, package, import, CLASSPATH, 模块系统, Java 9]
---

# 包与模块

## 前置知识
> 在阅读本章前，你需要了解：Java 基础语法、类的定义、基本的面向对象编程概念。

## 为什么需要包与模块？

当你的项目刚开始只有几个类时，代码结构可以非常简单。但随着代码量爆炸般增加，类名冲突、代码管理混乱、不清晰的依赖关系都会成为开发的绊脚石。你可能会遇到这样的困扰：

- 有两个不同的类，名字竟然一样，编译报错不知如何处理？
- 你的代码项目越来越大，导入类的时候到底哪里来的？`CLASSPATH`是啥，为什么报找不到类？
- Java 9 新出了“模块系统”，它和“包”有什么区别？我要不要用模块呢？

这章我们就从最常用的包（package）开始，慢慢揭开 Java 程序结构背后的神秘面纱，并带你初探 Java 9 模块系统。

---

## 了解 package：你的代码的“家族姓氏”

### 什么是 package？

简单来说，**package 就好比你家门口的姓氏牌**，告诉大家“这是属于哪个家族的成员”。它是 Java 里组织类的一种方式，用来避免类名冲突、提升代码结构的清晰度。

举个日常类比：

> 你叫“张伟”，这名字全国都有很多，路上可能遇到一大堆“张伟”。如果你告诉大家你是“北京张家”的，那别人就能区分你和“上海张伟”。

在 Java 里，`package` 的作用和这个姓氏类似。它指导编译器和 JVM，类属于哪个目录（包），管理命名空间。

---

### 为什么要用 package？

- **避免命名冲突**：不同包可以有同名类，例如 `com.companyA.User` 和 `com.companyB.User`，互不干扰。
- **方便代码管理**：按功能、模块划分文件夹和包，项目更清晰。
- **访问控制**：包对类的访问权限起到保护作用，方便封装。

---

### 如何定义和使用 package？

只需在 Java 文件开头加上一条声明：

```java
package com.example.utilities;

public class StringUtils {
    public static boolean isEmpty(String str) {
        return str == null || str.isEmpty();
    }
}
```

这告诉编译器，这个类属于 `com.example.utilities` 包。接下来如果你想用这个类，需要导入它（稍后讲）。

---

### 代码示例 1：最简单的包使用

先试试定义一个包，再在另一个类里导入它使用。

```java
// 文件路径: com/example/demo/HelloWorld.java
package com.example.demo;

public class HelloWorld {
    public static void sayHello() {
        System.out.println("Hello from package com.example.demo!");
    }
}
```

```java
// 文件路径: TestPackage.java (默认包)
import com.example.demo.HelloWorld;

public class TestPackage {
    public static void main(String[] args) {
        HelloWorld.sayHello();  // 调用包内类的方法
    }
}
```

> 这段代码做了什么  
> 1. `HelloWorld` 类定义在 `com.example.demo` 包下。  
> 2. `TestPackage` 类在默认包（没声明包），通过 `import` 引入并调用 `HelloWorld`。  
> 3. 运行 `TestPackage.main` 会打印问候信息。

---

## 探秘 import：让你不写全路径名

你可能想问：“我必须写 `com.example.demo.HelloWorld` 才能调用吗？”当然不会这么麻烦。

`import` 就像是你给包和类起的一个小昵称，写代码时用它才方便。

```java
import com.example.demo.HelloWorld;
```

这句就是告诉编译器，“我这个文件里会用到 `HelloWorld`，帮我找到它。”

如果没有 import，你就得像这样写：

```java
com.example.demo.HelloWorld.sayHello();
```

虽然没错，但长了很多。

---

## 认识 CLASSPATH：Java 找类的导航图

你可能会遇到 `ClassNotFoundException`，就是当 Java 找不到类文件的时候。

这时候要知道：

> **CLASSPATH** 是 Java 运行时搜索类文件的位置列表。

比喻来说：

> 你现在手里有一张城市地铁图，CLASSPATH 就是地图里那些站点和线路，Java 要找的类文件像要去的站点，如果地图里没这条线，就找不到。

通常你会用命令行启动 Java 程序时指定：

```bash
java -classpath /path/to/classes TestPackage
```

或者用环境变量 `CLASSPATH` 来配置。这告诉 Java 惠找到你的类文件。

---

## 代码示例 2：如何从命令行正确运行多包 Java 程序

假设你的目录结构如下：

```
project/
├── com/
│   └── example/
│       └── demo/
│           └── HelloWorld.java
└── TestPackage.java
```

步骤：

1. 编译所有 Java 文件：

```bash
javac com/example/demo/HelloWorld.java TestPackage.java
```

2. 运行时指定 `CLASSPATH=.`（当前目录）：

```bash
java -classpath . TestPackage
```

输出：

```
Hello from package com.example.demo!
```

这说明：

- `-classpath .` 告诉 JVM 当前目录是根路径，包路径从这里开始查找类文件。
- 若不指定，JVM 用默认值，有时可能找不到类。

---

## Java 9 模块系统：包的进化版“大管家”

### 背景

包帮我们组织代码，但当项目越来越大时，你会遇到：

- 依赖关系乱糟糟，不知道谁依赖谁。
- 类访问控制只靠包划分不够灵活。
- 打包部署成堆“大杂烩”，不利于维护和安全。

Java 9 引入了**模块系统（Module System）**，就是给包套上了一级“集团总部”的管理，让代码组织更高效、更安全。

---

### 模块和包的区别

- **包**是文件夹和命名的逻辑组织单位
- **模块**是包含包的更高层次的结构，一个模块包含多个包，并且声明模块暴露哪些包给外界

简单比方：

- 包是你家的门牌号，楼层和房间号
- 模块是整栋大厦，不同大厦之间要明确哪些门对外开放

---

### 如何定义模块？

在项目根目录创建 `module-info.java` 文件：

```java
module com.example.hellomodule {
    exports com.example.demo;    // 声明向外暴露的包
}
```

这段代码告诉 Java：

- 这是一个名叫 `com.example.hellomodule` 的模块
- 模块暴露 `com.example.demo` 这个包

其他模块才能访问被 `exports` 出去的包，没导出的包对外不可见。

这给了我们更细粒度的访问控制。

---

## 代码示例 3：模块基础用法

假设你有两个模块：

- `com.example.hellomodule`，包含包 `com.example.demo`
- `com.example.consumer`，需要使用前一个模块的内容

示例文件结构：

```
hellomodule/
├── module-info.java
└── com/example/demo/HelloWorld.java

consumer/
├── module-info.java
└── com/example/consumer/App.java
```

`hellomodule/module-info.java`

```java
module com.example.hellomodule {
    exports com.example.demo;
}
```

`hellomodule/com/example/demo/HelloWorld.java`

```java
package com.example.demo;

public class HelloWorld {
    public static void greet() {
        System.out.println("Hello from hellomodule!");
    }
}
```

`consumer/module-info.java`

```java
module com.example.consumer {
    requires com.example.hellomodule;  // 声明依赖模块
}
```

`consumer/com/example/consumer/App.java`

```java
package com.example.consumer;

import com.example.demo.HelloWorld;

public class App {
    public static void main(String[] args) {
        HelloWorld.greet();
    }
}
```

---

### 这段代码做了什么？

1. 第一个模块暴露了 `com.example.demo` 包，其他模块可以访问。
2. 第二个模块声明依赖第一个模块。
3. 应用模块调用导入的包中的类，输出问候语。

---

## 对比总结：包 vs 模块

| 特性        | 包（package）                              | 模块（module）                                |
|-----------|----------------------------------------|-------------------------------------------|
| 概念        | 类的逻辑组织单元，目录结构                     | 包的集合，项目或库的更高级组织                     |
| 作用范围     | 强调命名空间管理，避免类名冲突                  | 细粒度依赖管理，访问控制，封装                     |
| 访问控制     | 包内访问权限控制（默认、protected）               | 模块级别的包暴露声明，未导出包对外隐藏                |
| 依赖管理     | 依赖管理由开发者自行维护和文档化                   | 模块声明依赖关系，JVM强制检查                     |
| 适用场景     | 小到中型项目、库                             | 大型项目、平台、复杂组件                            |

---

## 实战建议

:::tip 💡 实战建议
- **小项目或简单程序**，用包管理代码，配合合理的 CLASSPATH 设置，已经够用。
- **中大型项目**，考虑用 Java 模块系统提高项目层次结构和安全性。
- 记住：模块不是魔法，开始用的时候建议逐步迁移，先梳理清楚代码包边界再建模块。
- 命令行编译与运行模块代码复杂许多，实际项目里建议使用 Maven、Gradle 等构建工具。
- 保持包命名规范（反域名形式），方便识别和维护。
:::

---

## 常见陷阱

:::warning ⚠️ 常见陷阱
- **忘记指定 CLASSPATH 导致找不到类**  
  无论用包还是模块，`java`命令都需要正确指定根路径，否则会报错 `ClassNotFoundException`。  
- **模块导出包不全**  
  模块内的包如果没有声明 `exports`，即使其他模块依赖了它，也无法访问包内类，导致编译错误。  
- **模块间循环依赖**  
  模块声明 `requires` 时不能出现循环依赖关系，否则构建失败。  
- **默认包不能被模块引用**  
  尽量避免使用默认包（无 `package` 声明），否则无法通过模块机制管理，其访问极其有限。  
:::

---

## 延伸思考 🔍

- Java 模块系统对传统企业级项目的依赖管理带来了哪些改变？会有什么潜在的挑战？
- 在多模块项目中，如何设计合理的模块边界，避免“模块膨胀”或“碎片化”？
- 结合构建工具（Maven/Gradle），如何高效管理模块依赖和版本？

---

## 小结

- **包**是 Java 中组织类的基础单位，规范代码结构、避免类名冲突。
- **import** 使得代码引入外部包里的类变得简洁便捷。
- **CLASSPATH** 决定 JVM 在哪里寻找类文件，设置不当会导致找不到类。
- **Java 9 模块系统**为包带来了更高层次的组织和访问控制，支持显式依赖声明。
- 学会合理使用包和模块，对写出可维护、健壮的 Java 程序大有裨益。

---

通过对包、import、CLASSPATH，以及模块系统的逐步介绍和示例，相信你对 Java 项目结构的全貌会有更清晰的理解。遇到项目越来越大时，别忘了这些神奇却实用的组织法宝都在你手中。

如果你对模块的深入功能和多模块构建有兴趣，后面章节会继续展开，欢迎持续关注！