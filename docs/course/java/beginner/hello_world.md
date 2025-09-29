---
title: hello world
category: Java
order: 2
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# 🎮 第2关：Hello World - 你的第一个Java程序！

欢迎来到编程世界的第一个里程碑！在这一关，你将学会编写经典的**Hello World**程序，这是每个程序员的起点！

## 🎯 学习目标
- 理解Java程序的基本结构
- 学会使用**print statement（打印语句）**输出信息
- 掌握**main method（主方法）**的作用

## 🚀 核心知识点（二八定律）
掌握这20%的内容，你将获得80%的入门效果：
- **main method（主方法）**：程序的入口点
- **System.out.println()（系统输出打印）**：向控制台输出文本

## 💡 费曼技巧应用
用最简单的话解释：**Java程序就像给计算机写菜谱** - `main`方法是厨房，`println`是大声念出菜谱的步骤！

---

## 🛠️ 实战演练：Hello World程序

```java
// HelloWorld.java - 我们的第一个Java程序
public class HelloWorld {  // 定义一个公共类 定义一个公共类
    
    // main method - 程序执行的起点 主方法 - 程序执行的起点
    public static void main(String[] args) {
        // Print "Hello, World!" to console 打印"Hello, World!"到控制台
        System.out.println("Hello, World!");  // 系统输出打印
        
        // Let's add some more greetings! 让我们添加更多问候！
        System.out.println("Welcome to Java Programming!");  // 欢迎来到Java编程！
        System.out.println("You just wrote your first program!");  // 你刚刚写了第一个程序！
    }
}
```

## 🧩 西蒙分块解析

让我们把程序分解成容易理解的小块：

### 块1：**Class Declaration（类声明）**
```java
public class HelloWorld {
```
- `public`：这个类可以被其他代码访问
- `class`：定义一个类（Java的基本组织单元）
- `HelloWorld`：类名，必须与文件名一致

### 块2：**Main Method（主方法）**
```java
public static void main(String[] args) {
```
- 这是程序的**entry point（入口点）**
- Java虚拟机从这里开始执行

### 块3：**Print Statement（打印语句）**
```java
System.out.println("Hello, World!");
```
- `System.out`：标准输出流
- `println`：打印并换行
- `"Hello, World!"`：要显示的文本（字符串）

---

## 🎪 游戏化挑战

### 关卡任务1：基础输出
✅ **任务**：运行上面的程序，看到控制台输出三行问候语

### 关卡任务2：个性化问候
```java
// Add your name to the greeting 在问候语中添加你的名字
System.out.println("Hello, I'm learning Java!");  // 你好，我正在学习Java！
```

### 关卡任务3：创意输出
```java
// Create your own message 创建你自己的消息
System.out.println("🌟 Java is awesome! 🌟");  // Java太棒了！
```

---

## 📝 运行步骤

1. **Save file（保存文件）**：将代码保存为 `HelloWorld.java`
2. **Compile（编译）**：打开终端，输入 `javac HelloWorld.java`
3. **Run（运行）**：输入 `java HelloWorld`
4. **Celebrate（庆祝）**：🎉 看到输出就成功了！

---

## 🏆 成就解锁
恭喜！你刚刚：
- ✅ 编写了第一个Java程序
- ✅ 理解了**main method（主方法）**的概念
- ✅ 掌握了**System.out.println()（系统输出打印）**的使用
- ✅ 学会了基本的Java程序结构

## 🎯 下一关预告
准备好进入第3关"基本语法"了吗？我们将学习**variables（变量）**、**data types（数据类型）**，让你的程序变得更强大！

**记住：每个伟大的程序员都是从"Hello World"开始的！** 🚀