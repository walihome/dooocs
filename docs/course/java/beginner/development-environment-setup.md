---
title: 开发环境搭建
category: Java
order: 1
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# 🎮 第1关：Java开发环境搭建 | Java Development Environment Setup

欢迎来到Java编程世界的第一关！在这一关，你将搭建自己的**Java Development Kit（Java开发工具包）**，这是你编程冒险的起点。记住，好的开始是成功的一半！

## 🎯 本关学习目标
- 理解**JDK（Java Development Kit）** 的作用
- 掌握Windows和Mac系统下的JDK安装
- 学会配置**环境变量 Environment Variables**
- 验证安装是否成功

---

## 🛠️ 第一步：下载JDK | Download JDK

### 为什么要安装JDK？
**JDK（Java Development Kit）** 就像你的编程工具箱，包含了：
- **Java编译器 Compiler**：将你写的代码翻译成计算机能懂的语言
- **Java运行时环境 JRE**：让编译后的代码能够运行
- **开发工具 Development Tools**：各种辅助编程的小工具

### 下载步骤 | Download Steps

**Windows系统：**
1. 访问Oracle官网：https://www.oracle.com/java/technologies/javase-downloads.html
2. 选择最新的**JDK 17**版本（这是长期支持版本）
3. 点击"Windows x64 Installer"下载

**Mac系统：**
1. 同样访问Oracle官网
2. 选择"macOS x64 DMG Installer"下载

> 💡 **专业提示**：你也可以选择OpenJDK，这是开源的免费版本！

---

## ⚙️ 第二步：安装JDK | Install JDK

### Windows系统安装

```bash
# 安装过程很简单，就像安装普通软件一样：
1. 双击下载的.exe文件
2. 点击"Next"直到安装完成
3. 记住安装路径，通常是：C:\Program Files\Java\jdk-17\
```

### Mac系统安装

```bash
# Mac安装更简单：
1. 双击下载的.dmg文件
2. 打开.pkg安装包
3. 按照向导完成安装
4. JDK会自动安装到：/Library/Java/JavaVirtualMachines/
```

---

## 🔧 第三步：配置环境变量 | Configure Environment Variables

### 为什么要配置环境变量？
**环境变量 Environment Variables** 就像是给操作系统的一张"地图"，告诉它：
"嘿！当我要运行Java程序时，请到这个位置找Java工具！"

### Windows系统配置

```cmd
# 步骤1：打开环境变量设置
1. 右键"此电脑" → "属性" → "高级系统设置"
2. 点击"环境变量"

# 步骤2：新建系统变量
1. 在"系统变量"区域点击"新建"
2. 变量名：JAVA_HOME
3. 变量值：C:\Program Files\Java\jdk-17（你的实际安装路径）

# 步骤3：编辑Path变量
1. 找到"Path"变量，点击"编辑"
2. 点击"新建"，添加：%JAVA_HOME%\bin
```

### Mac系统配置

```bash
# 步骤1：打开终端 Terminal
1. 按Command + 空格，搜索"终端"

# 步骤2：编辑配置文件
# 如果你使用zsh（macOS Catalina及以上）：
echo 'export JAVA_HOME=$(/usr/libexec/java_home)' >> ~/.zshrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zshrc

# 步骤3：使配置生效
source ~/.zshrc
```

---

## ✅ 第四步：验证安装 | Verify Installation

让我们用**费曼技巧**来检验你是否真正理解了环境配置！

```bash
# 打开命令行/终端，输入以下命令：
java -version
javac -version
```

### 期望的输出 | Expected Output
```bash
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)

javac 17.0.1
```

### 如果看到版本信息，恭喜你！🎉
- `java -version` 检查**Java运行时环境 JRE**
- `javac -version` 检查**Java编译器 Compiler**

---

## 🎓 本关知识点总结

| 英文术语 | 中文翻译 | 作用 |
|---------|---------|------|
| **JDK** | Java开发工具包 | 完整的Java开发环境 |
| **JRE** | Java运行时环境 | 运行Java程序的环境 |
| **Compiler** | 编译器 | 将源代码编译成字节码 |
| **Environment Variables** | 环境变量 | 告诉系统程序的位置 |
| **Terminal/Command Prompt** | 终端/命令提示符 | 与计算机交互的文本界面 |

---

## 🏆 闯关成功！

你已经成功搭建了Java开发环境！这是你成为Java程序员的第一步。记住：

> 💪 **二八定律应用**：环境搭建虽然只占学习时间的20%，但它支撑了你未来80%的编程工作！

**下一关预告**：我们将编写第一个Java程序——经典的"Hello World"！准备好迎接你的第一个编程成就了吗？

🎯 **快速回顾**：
- 下载并安装JDK ✅
- 配置环境变量 ✅  
- 验证安装成功 ✅

准备好进入下一关了吗？让我们继续冒险！ 🚀