---
title: 开发环境搭建
category: Java
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # Hello World —— 你的第一个 Java 程序

你有没有想过,程序员写的第一行代码是什么?在编程世界里,有一个延续了几十年的传统:无论学习什么编程语言,第一个程序都是让计算机输出"Hello World"。这不仅是一个简单的问候,更是你向编程世界迈出的第一步。

## 💡 为什么是 Hello World?

想象一下,你刚买了一部新手机,第一件事是什么?当然是开机看看能不能正常使用!写 Hello World 程序就是在验证:

- ✅ 你的 Java 开发环境安装正确了吗?
- ✅ 你能成功编写、编译、运行一个程序吗?
- ✅ 你理解了程序的基本结构吗?

这个简单的程序包含了 Java 编程的核心要素,麻雀虽小,五脏俱全。

## 📝 你的第一个 Java 程序

让我们先看完整的代码,然后逐行解释:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

::: tip 提示
这段代码只有 5 行,但它是一个完整的、可以运行的 Java 程序!
:::

### 🔍 逐行理解代码

让我们像拆解乐高积木一样,看看每一行是什么意思:

**第 1 行:**
```java
public class HelloWorld {
```
- **public**: 公开的(public)—— 表示这个类可以被其他程序访问
- **class**: 类(class)—— Java 中所有代码都必须写在类里面,可以把类想象成一个"容器"
- **HelloWorld**: 这是你给这个类起的名字,就像你给宠物起名字一样
- **`{`**: 左花括号 —— 表示类的内容从这里开始

::: warning 注意
类名 HelloWorld 必须和文件名完全一致!如果类名是 HelloWorld,文件就必须命名为 `HelloWorld.java`(包括大小写)。
:::

**第 2 行:**
```java
    public static void main(String[] args) {
```

这一行看起来复杂,但它是 Java 程序的"启动按钮"。让我们拆解一下:

- **main**: 主方法(main method)—— 这是程序的入口,Java 程序从这里开始执行
- **public**: 公开的 —— 让 Java 虚拟机能够调用这个方法
- **static**: 静态的(static)—— 表示这个方法属于类本身,而不是某个具体的对象(现在不用深究,记住就好)
- **void**: 无返回值(void)—— 表示这个方法执行完不需要返回任何结果
- **String[] args**: 字符串数组参数(String array arguments)—— 用于接收命令行参数(现在可以忽略)

::: tip 记忆技巧
把 `public static void main(String[] args)` 当成一个"魔法咒语",每个 Java 程序都需要它。就像开车时必须插入钥匙一样,这是固定的格式。
:::

**第 3 行:**
```java
        System.out.println("Hello World");
```

这是程序真正"做事"的那一行!

- **System.out**: 系统输出(System output)—— 代表控制台输出
- **println**: 打印并换行(print line)—— 在控制台显示内容后自动换行
- **"Hello World"**: 双引号内的内容是**字符串(String)**,会原样输出
- **`;`**: 分号 —— Java 中每条语句必须以分号结尾,就像中文的句号

**第 4-5 行:**
```java
    }
}
```
两个右花括号分别关闭 main 方法和 HelloWorld 类,表示内容结束。

## 🛠️ 动手操作:创建并运行程序

### 步骤 1: 创建 Java 文件

1. 打开你的文本编辑器(记事本、VS Code、Notepad++ 等都可以)
2. 创建一个新文件,输入上面的完整代码
3. 保存文件,命名为 `HelloWorld.java`

::: danger 警告
- 文件扩展名必须是 `.java`,不是 `.txt` 或其他
- 文件名的大小写必须和类名完全一致
- 保存时选择 **UTF-8 编码**
:::

**Windows 保存路径示例:**
```
C:\JavaProjects\HelloWorld.java
```

**macOS 保存路径示例:**
```
/Users/你的用户名/JavaProjects/HelloWorld.java
```

### 步骤 2: 编译程序

打开命令行工具:
- **Windows**: 按 `Win + R`,输入 `cmd`,回车
- **macOS**: 按 `Cmd + Space`,输入 `Terminal`,回车

使用 `cd` 命令进入你保存文件的目录:

**Windows:**
```bash
cd C:\JavaProjects
```

**macOS/Linux:**
```bash
cd /Users/你的用户名/JavaProjects
```

然后执行编译命令:
```bash
javac HelloWorld.java
```

::: tip 什么是编译?
编译(Compile)就是把人类能读懂的 Java 代码翻译成计算机能理解的机器语言。`javac` 就是 Java 编译器(Java Compiler)的缩写。
:::

### 步骤 3: 检查编译结果

如果编译成功,命令行不会显示任何信息(没有消息就是好消息!)。

此时,在同一目录下会生成一个新文件:`HelloWorld.class`

你可以用 `dir`(Windows)或 `ls`(macOS/Linux)命令查看:

**Windows:**
```bash
dir
```

**macOS/Linux:**
```bash
ls
```

你应该看到:
```
HelloWorld.java
HelloWorld.class
```

::: warning 常见编译错误
如果看到错误信息,检查以下几点:
1. **错误: 找不到或无法加载主类** → 类名和文件名不一致
2. **错误: 需要 ';'** → 某行代码末尾缺少分号
3. **错误: 非法字符** → 可能使用了中文标点(必须用英文标点)
:::

### 步骤 4: 运行程序

编译成功后,使用 `java` 命令运行程序:

```bash
java HelloWorld
```

::: warning 注意
- 运行时不要加 `.class` 扩展名
- 类名的大小写必须正确
:::

### ✅ 成功标志

如果一切顺利,你会在命令行看到:

```
Hello World
```

🎉 恭喜你!你刚刚成功运行了你的第一个 Java 程序!

## 🔄 完整流程图示

让我们回顾一下整个过程:

```
1. 编写代码
   HelloWorld.java (人类可读的源代码)
         ↓
2. 编译 (javac HelloWorld.java)
   HelloWorld.class (计算机可读的字节码)
         ↓
3. 运行 (java HelloWorld)
   输出: Hello World
```

::: tip Java 的特殊之处
Java 程序需要经过"编译"这个步骤,这和 Python、JavaScript 等脚本语言不同。但这也是 Java 跨平台的秘密武器 —— 同一个 `.class` 文件可以在 Windows、macOS、Linux 上运行!
:::

## 💪 动手练习

完成以下练习,巩固你的理解:

### 练习 1: 修改输出内容(模仿)

把 "Hello World" 改成你的名字,比如:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, I am Zhang San");
    }
}
```

**验证步骤:**
1. 保存文件
2. 重新编译:`javac HelloWorld.java`
3. 运行:`java HelloWorld`
4. 你应该看到:`Hello, I am Zhang San`

### 练习 2: 多行输出(组合)

尝试使用多个 `println` 语句输出多行内容:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println("Welcome to Java");
        System.out.println("This is my first program");
    }
}
```

**提示:** 每个 `println` 都会在新的一行输出内容。

**预期输出:**
```
Hello World
Welcome to Java
This is my first program
```

### 练习 3: 创建新程序(创新)

创建一个新文件 `Welcome.java`,输出你自己设计的欢迎信息(至少 3 行)。

**要求:**
- 类名必须是 `Welcome`
- 文件名必须是 `Welcome.java`
- 包含至少 3 行不同的输出

::: danger 新手易错点
如果创建新类 Welcome,记得把 `public class HelloWorld` 改成 `public class Welcome`,否则会编译错误!
:::

## 🐛 常见问题排查

### 问题 1: "javac 不是内部或外部命令"

**原因:** Java 环境变量未配置  
**解决:** 确保已正确安装 JDK,并配置了 PATH 环境变量

**快速验证:**
```bash
java -version
```

如果显示版本号,说明 Java 已安装。

### 问题 2: 编译通过但运行出错

**错误信息:** `错误: 找不到或无法加载主类 HelloWorld`

**可能原因:**
1. 类名拼写错误(区分大小写)
2. 不在正确的目录下
3. 文件名和类名不匹配

**解决步骤:**
```bash
# 1. 确认当前目录
pwd  # macOS/Linux
cd   # Windows

# 2. 确认文件存在
ls HelloWorld.class  # macOS/Linux
dir HelloWorld.class # Windows

# 3. 确认类名拼写
java HelloWorld  # 注意大小写
```

### 问题 3: 中文输出乱码

**原因:** 字符编码不匹配  
**解决:** 
- 保存文件时选择 UTF-8 编码
- Windows 用户可在命令行执行:`chcp 65001`

## 📌 本章小结

通过这个简单的 Hello World 程序,你已经掌握了:

1. **Java 程序的基本结构** —— 类(class)和主方法(main method)是必需的
2. **Java 开发流程** —— 编写(.java) → 编译(.class) → 运行
3. **核心命令** —— `javac` 用于编译,`java` 用于运行
4. **输出语句** —— `System.out.println()` 用于在控制台显示信息
5. **文件命名规则** —— 文件名必须与公共类名完全一致

### 🎯 重要术语回顾

- **类(Class)**: Java 程序的基本单位,所有代码都在类中
- **主方法(Main Method)**: `public static void main(String[] args)` —— 程序的入口
- **编译(Compile)**: 将源代码翻译成字节码的过程
- **字节码(Bytecode)**: `.class` 文件,可在任何安装了 JVM 的平台运行
- **语句(Statement)**: 程序中的一行指令,必须以分号结尾

::: tip 下一步建议
现在你已经成功运行了第一个程序,建议你:
1. 多做几次完整流程,熟悉编译和运行的步骤
2. 尝试修改输出内容,观察结果
3. 故意制造一些错误(比如删除分号),看看编译器会报什么错

记住:编程是一门实践的技能,动手操作比看十遍理论更有效!
:::