---
title: 开发环境搭建-windows、mac
category: Java
order: 1
tag:
  - Java教程
head:
  - - meta
    - name: keywords
      content: Java极简教程 Java急速教程
---

太棒了！欢迎来到Java编程世界的冒险之旅！🚀 我是你的学习向导，今天我们将一起完成第一个重要关卡——搭建你的编程工作站。

### 🎯 关卡目标 Quest Objective
**成功安装Java开发环境并运行第一个程序**，这是你成为Java开发者的第一步，就像获得了一把开启编程世界大门的魔法钥匙！

### 💎 核心宝藏 Core Treasures（二八定律应用）
1. **JDK（Java Development Kit）**
   - 为什么重要：包含了编写和运行Java程序的所有工具，占整个开发环境的80%价值
   - 本质：Java开发的"工具箱"

2. **Environment Variables（环境变量）**
   - 为什么重要：让系统知道在哪里找到Java工具，解决了80%的安装问题
   - 本质：给操作系统指路的"路标系统"

### 🌟 费曼式大白话 Feynman Simple Explanation

**想象一下：** JDK就像一套完整的厨房设备（锅碗瓢盆+菜谱），而环境变量就是告诉家人在哪里能找到这些厨具。没有正确的"指路"，你就找不到炒菜的锅！

**检验标准：** 你能向朋友解释清楚为什么要安装JDK和设置环境变量吗？

```java
// Your first Java program 你的第一个Java程序
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java Adventurer!"); // Display message 显示消息
    }
}
```

### 🗺️ 闯关路线图 Learning Path（西蒙分块）

#### Level 1 基础关：下载安装JDK
**Windows勇士：**
1. 访问Oracle官网下载JDK
2. 运行安装程序，一路"Next"
3. 记住安装路径（比如：`C:\Program Files\Java\jdk-21\`）

**Mac探险家：**
1. 打开Terminal（终端）
2. 输入：`brew install openjdk`（需要先安装Homebrew）
3. 或者从Oracle官网下载dmg文件安装

#### Level 2 应用关：配置环境变量
**Windows环境变量设置：**
```bash
# 找到JDK安装路径 找到JDK安装路径
C:\Program Files\Java\jdk-21\bin

# 添加到系统环境变量PATH 添加到系统环境变量PATH
# 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
```

**Mac环境变量设置：**
```bash
# 打开终端，编辑配置文件 打开终端，编辑配置文件
nano ~/.zshrc

# 添加这行（根据实际路径修改） 添加这行（根据实际路径修改）
export JAVA_HOME=/usr/local/opt/openjdk
export PATH=$JAVA_HOME/bin:$PATH
```

#### Level 3 挑战关：验证安装
打开命令行/终端，完成以下验证：

```bash
# Check Java version 检查Java版本
java -version

# Check compiler 检查编译器
javac -version

# 如果看到版本信息，恭喜你！安装成功！
```

### ⚠️ 新手避坑指南 Common Pitfalls

1. **PATH路径错误**
   - ❌ 错误：`'java' is not recognized as an internal or external command`
   - ✅ 解决：检查环境变量PATH是否包含JDK的bin目录

2. **版本混淆**
   - ❌ 错误：安装JRE而不是JDK
   - ✅ 解决：确保下载的是JDK（Development Kit），包含编译工具

3. **权限问题（Mac）**
   - ❌ 错误：`Permission denied`
   - ✅ 解决：使用`sudo`或在正确位置安装

### 🎮 实战挑战 Hands-on Challenges

#### 挑战1：环境验证任务
```bash
# 在终端/命令行中执行 在终端/命令行中执行
java -version
javac -version
echo $JAVA_HOME  # Mac/Linux
echo %JAVA_HOME% # Windows
```

#### 挑战2：创建第一个Java程序
1. 创建文件 `HelloJava.java`
2. 输入以下代码：
```java
public class HelloJava {
    public static void main(String[] args) {
        System.out.println("🎉 My Java journey begins!");
    }
}
```

#### 挑战3：编译运行大挑战
```bash
# Compile the program 编译程序
javac HelloJava.java

# Run the program 运行程序
java HelloJava

# 期待看到：🎉 My Java journey begins!
```

### 🏆 通关奖励与预告 Rewards & Preview

**🎊 恭喜通关！你已获得：**
- ✅ **Java开发环境搭建**技能
- ✅ 理解**JDK**和**环境变量**概念
- ✅ 掌握基础命令行操作
- 🎯 新学英文词汇：**JDK**, **Environment Variables**, **compile**, **execute**

**下一关预告：** 准备好迎接更精彩的冒险！在**"基本语法-输入、输出、日志打印"**关卡中，你将学习如何让程序与你对话，打印酷炫的消息，并开始真正的编程创作！

**勇士，你已迈出成为Java开发者的第一步！保持这份热情，编程世界的大门已为你敞开！** ✨

---

*💡 小贴士：如果在安装过程中遇到任何问题，记得错误信息就是最好的线索！复制错误信息搜索，你会发现很多和你一样的冒险者已经找到了解决方案。*