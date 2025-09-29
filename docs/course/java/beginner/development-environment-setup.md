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

# Java入门教程：开发环境搭建

## 课程大纲 Course Outline

1. **开发环境搭建 Development Environment Setup** ← 当前章节
2. Hello World程序 Hello World Program
3. 基本语法 Basic Syntax
4. 数据类型 Data Types
5. 基础运算 Basic Operations
6. 集合 Collections
7. 控制流 Control Flow
8. 类、属性、方法 Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

**Development Environment（开发环境）** 是程序员编写、测试和运行代码的工作平台。就像厨师需要准备好厨房、刀具和食材才能做菜一样，我们需要安装必要的软件工具才能开始Java编程。

Java开发环境主要包含：
- **JDK (Java Development Kit)（Java开发工具包）**：包含编译器和运行环境
- **IDE (Integrated Development Environment)（集成开发环境）**：代码编辑器，帮助我们更高效地编写代码

### 代码示例 Code Examples

#### 1. JDK安装验证命令

安装完成后，使用以下命令验证：

```bash
# Check Java version 检查Java版本
java -version

# Check Java compiler version 检查Java编译器版本
javac -version
```

#### 2. 创建第一个测试文件

```java
// TestSetup.java
public class TestSetup {
    public static void main(String[] args) {
        // Print setup success message 打印安装成功信息
        System.out.println("Java development environment setup successful!");
        System.out.println("Java开发环境安装成功！");
    }
}
```

#### 3. 编译