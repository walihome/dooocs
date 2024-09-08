---
title: Java 变量和字面值
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java变量和字面值

## Java变量

变量是内存中的一个位置（存储区域），用于保存数据。

为了表示存储区域，每个变量都应该有一个唯一的名称（标识符）。了解更多关于[Java标识符]的信息。

* * *

### 在Java中创建变量

以下是我们在Java中创建变量的方式，

```java
int speedLimit = 80;
```

这里，`speedLimit`是一个`int`数据类型的变量，并且我们给它赋了值**80**。

`int`数据类型表示变量只能保存整数。要了解更多信息。[Java数据类型]。

在示例中，我们在声明时赋值给了变量。然而，这并不是强制性的。

你可以分别声明和赋值变量。例如，

```java
int speedLimit;
speedLimit = 80;
```

> **注意**：Java是一种静态类型语言。这意味着在使用之前必须先声明所有变量。

* * *

### 更改变量的值

程序中的变量值可以被修改，因此称为**变量**。例如，

```java
int speedLimit = 80;
... .. ...
speedLimit = 90;
```

在这里，最初`speedLimit`的值是**80**。后来，我们将其改为了**90**。

但是，在Java中无法在同一作用域内更改变量的数据类型。

什么是变量的作用域？

暂时不要担心。只需记住我们不能这样做：

```java
int speedLimit = 80;
... .. ...
float speedLimit;
```

要了解更多信息。：[我能在Java中更改变量的声明类型吗？](http://stackoverflow.com/questions/27092245/can-i-change-declaration-type-for-a-variable-in-java)

* * *

## Java变量命名规则

Java编程语言有其自己的变量命名规则和惯例。以下是你需要知道的内容：

  * Java区分大小写。因此，`age`和`AGE`是两个不同的变量。例如，

    ```java
    int age = 24;
    int AGE = 25;
    
    System.out.println(age);  // 输出 24
    System.out.println(AGE);  // 输出 25
    ```

  * 变量必须以字母、下划线`_`或美元符号`$`开头。例如，

    ```java
    int age;  // 有效命名，良好的实践
    int _age;  // 有效但不好的实践
    int $age;  // 有效但不好的实践
    ```

  * 变量名不能以数字开头。例如，

    ```java
    int 1age;  // 无效的变量
    ```

  * 变量名不能包含空格。例如，

    ```java
    int my age;  // 无效的变量
    ```

  * 如果需要使用由多个单词组成的变量名，首个单词使用小写字母，后续每个单词的首字母大写。例如，`myAge`。
  * 创建变量时，选择一个有意义的名称。例如，`score`、`number`、`level`比`s`、`n`和`l`更有意义。
  * 如果你选择使用单词变量名，则使用全部小写字母。例如，最好使用`speed`而不是`SPEED`或`sPEED`。

* * *

Java编程语言有4种类型的变量：

  * 实例变量（非静态字段）
  * 类变量（静态字段）
  * 局部变量
  * 参数

如果你对此感兴趣，现在就访问[Java变量类型](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html)了解更多信息。

* *### 2. 整数字面量

整数字面量是指在数字中没有任何小数或指数部分的数值。在Java中有四种类型的整数字面量：

1. 二进制（基数为2）
2. 十进制（基数为10）
3. 八进制（基数为8）
4. 十六进制（基数为16）

例如：

```java
// 二进制
int binaryNumber = 0b10010;
// 八进制
int octalNumber = 027;

// 十进制
int decNumber = 34;

// 十六进制
int hexNumber = 0x2F; // 0x表示十六进制
// 二进制
int binNumber = 0b10010; // 0b表示二进制
```

在Java中，二进制以 **0b** 开头，八进制以 **0** 开头，十六进制以 **0x** 开头。

> **注意**：整数字面量用于初始化 `byte`、`short`、`int` 和 `long` 类型的变量。

---

### 3. 浮点数字面量

浮点数字面量是具有小数形式或指数形式的数值字面量。例如：

```java
class Main {
  public static void main(String[] args) {
        	
    double myDouble = 3.4;
    float myFloat = 3.4F;
 
    // 3.445*10^2
    double myDoubleScientific = 3.445e2;

    System.out.println(myDouble);  // 输出 3.4
    System.out.println(myFloat);   // 输出 3.4
    System.out.println(myDoubleScientific);   // 输出 344.5
  }
}
```

> **注意**：浮点数字面量用于初始化 `float` 和 `double` 类型的变量。

---

### 4. 字符字面量

字符字面量是指将Unicode字符放在单引号中。例如：

```java
char letter = 'a';
```

这里，`a` 是字符字面量。

我们还可以使用转义序列作为字符字面量，例如 **\b**（退格）、**\t**（制表符）、**\n**（换行符）等。

---

### 5. 字符串字面量

字符串字面量是指被双引号括起来的字符序列。例如：

```java
String str1 = "Java编程";
String str2 = "Programiz";
```

这里，`Java编程` 和 `Programiz` 是两个字符串字面量。