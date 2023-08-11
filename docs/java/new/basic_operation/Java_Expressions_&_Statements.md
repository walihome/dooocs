# Java 表达式、语句和代码块

在之前的章节中，我们使用过表达式、语句和代码块，但并没有详细解释它们。现在你已经了解了变量、运算符和字面值，将更容易理解这些概念。

* * *

## Java 表达式

Java 表达式由[变量]、[运算符]、[字面值]和方法调用组成。想要了解更多关于方法调用的内容。 [Java 方法]。例如，
```java

    int score; 
    score = 90;
```
在这里，`score = 90` 是一个返回 `int` 类型的表达式。再看一个例子，
```java
    Double a = 2.2, b = 3.4, result;
    result = a + b - 3.4;
```
在这里，`a + b - 3.4` 是一个表达式。
```java
    if (number1 == number2)
        System.out.println("Number 1 is larger than number 2");
```
在这里，`number1 == number2` 是返回布尔值的表达式。类似地，`"Number 1 is larger than number 2"` 是一个字符串表达式。

* * *

## Java 语句

在 Java 中，每个语句都是一个完整的执行单元。例如，

    int score = 9*5;

在这里，我们有一个语句。该语句的完整执行涉及将整数 `9` 和 `5` 相乘，并将结果赋值给变量 `score`。

在上面的语句中，我们有一个表达式 `9 * 5`。在 Java 中，表达式是语句的一部分。

* * *

### 表达式语句

我们可以通过在表达式后加上分号 `;` 来将一个表达式转换为语句。这些被称为表达式语句。例如，

    // 表达式
    number = 10
    // 语句
    number = 10;

在上面的例子中，我们有一个表达式 `number = 10`。在这里，通过添加分号 (`;`)，我们将该表达式转换为语句 (`number = 10;`)。

再看一个例子，

    // 表达式
    ++number
    // 语句
    ++number;

类似地，`++number` 是一个表达式，而 `++number;` 是一个语句。

* * *

### 声明语句

在 Java 中，声明语句用于声明变量。例如，

    Double tax = 9.5;

上面的语句声明了一个变量 `tax`，它的初始值为 `9.5`。

> **注意**：Java 中有控制流语句，用于决策和循环。你将在后面的章节中学习有关控制流语句的内容。

* * *

## Java 代码块

代码块是由花括号 `{ }` 括起来的一组语句（可以是零个或多个）。例如，

    class Main {
        public static void main(String[] args) {
        	
            String band = "Beatles";
        	
            if (band == "Beatles") { // 代码块开始
                System.out.print("Hey ");
                System.out.print("Jude!");
            } // 代码块结束
        }
    }

**输出**：
    
    Hey Jude!

在上面的例子中，我们有一个代码块 `if {....}`。

在代码块内部，我们有两个语句：

  * `System.out.print("Hey ");`
  * `System.out.print("Jude!");`

然而，一个代码块可能不包含任何语句。考虑以下示例，
    
    class Main {
        public static void main(String[] args) {
        	
            if (10 > 5) { // 代码