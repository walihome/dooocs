---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 表达式、语句和块

在前面的章节中，我们使用了表达式、语句和块，但没有对它们进行详细解释。现在你已经了解了变量、运算符和字面值，理解这些概念将更加容易。

* * *

## Java 表达式

Java 表达式由[变量](https://www.dooocs.com/img/java-programming/variables-primitive-data-types#variables "Java Variables")、[运算符](https://www.dooocs.com/img/java-programming/operators "Java Operators")、[字面值](https://www.dooocs.com/img/java-programming/variables-primitive-data-types#literals "Java Literals")和方法调用组成。要了解有关方法调用的更多信息，请访问[Java 方法](https://www.dooocs.com/img/java-programming/methods "Java Methods")。例如，
    
    
    int score; 
    score = 90;
    

在上述代码中，`score = 90` 是一个返回 `int` 类型的表达式。考虑另一个例子，
    
    
    Double a = 2.2, b = 3.4, result;
    result = a + b - 3.4;
    

在上述代码中，`a + b - 3.4` 是一个表达式。
    
    
    if (number1 == number2)
        System.out.println("Number 1 is larger than number 2");
    

在上述代码中，`number1 == number2` 是返回布尔值的表达式。类似地，`"Number 1 is larger than number 2"` 是一个字符串表达式。

* * *

## Java 语句

在 Java 中，每个语句都是一个完整的执行单元。例如，
    
    
    int score = 9*5;
    

在上述代码中，我们有一个语句。这个语句的完整执行过程包括将整数 `9` 和 `5` 相乘，然后将结果赋给变量 `score`。

在上述语句中，我们有一个表达式 `9 * 5`。在 Java 中，表达式是语句的一部分。

* * *

### 表达式语句

我们可以通过在表达式后面加上分号 `;` 将表达式转换为语句。这些被称为表达式语句。例如，
    
    
    // 表达式
    number = 10
    // 语句
    number = 10;
    

在上述代码中，我们有一个表达式 `number = 10`。在这里，通过添加分号 (`;`)，我们将表达式转换为了语句 (`number = 10;`)。

再考虑另一个例子，
    
    
    // 表达式
    ++number
    // 语句
    ++number;
    

同样，`++number` 是一个表达式，而 `++number;` 是一个语句。

* * *

### 声明语句

在 Java 中，声明语句用于声明变量。例如，
    
    
    Double tax = 9.5;
    

上述代码声明了一个名为 `tax` 的变量，并将其初始化为 `9.5`。

> **注意**：Java 中有用于决策和循环的控制流语句。你将在后面的章节中学习有关控制流语句的内容。

* * *

## Java 块

块是由花括号 `{ }` 括起来的一组语句（零个或多个）。例如，
    
    
    class Main {
        public static void main(String[] args) {
        	
            String band = "Beatles";
        	
            if (band == "Beatles") { // 块的开始
                System.out.print("Hey ");
                System.out.print("Jude!");
            } // 块的结束
        }
    }
    

**输出**：
    
    
    Hey Jude!
    

在上述代码中，我们有一个块 `if {....}`。

在块内部，我们有两个语句：

  * `System.out.print("Hey ");`
  * `System.out.print("Jude!");`



然而，一个块可能没有任何语句。考虑以下例子，
    
    
    
    class Main {
        public static void main(String[] args)