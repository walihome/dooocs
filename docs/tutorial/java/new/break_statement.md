---
title: Java break语句
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java break语句

在使用循环时，有时候希望跳过循环内的某些语句或者立即终止循环而不检查测试表达式。

这种情况下，使用`break`和`continue`语句。你将在下一个教程中了解到关于[Java continue语句](https://www.dooocs.com/img/java-programming/continue-statement "Java continue Statement")。

* * *

在Java中，`break`语句立即终止循环，并且程序控制转移到循环后面的下一条语句。

它几乎总是与决策语句([Java if...else语句](https://www.dooocs.com/img/java-programming/if-else-statement))一起使用。

以下是Java中`break`语句的语法：

```java
break;
```

## break语句的工作原理？

![Java编程中break语句的工作原理？](https://cdn.programiz.com/sites/tutorial2program/files/java-break-statement-works.jpg)  
Java break语句的工作原理

* * *

### 示例1：Java break语句

```java
class Test {
    public static void main(String[] args) {
      
        // for循环
        for (int i = 1; i <= 10; ++i) {

            // 如果i的值等于5，则终止循环  
            if (i == 5) {
                break;
            }      
            System.out.println(i);
        }   
    }
}

**输出结果** :

```
1
2
3
4
```

在上面的程序中，我们使用`for`循环来打印每次迭代中的i的值。要了解`for`循环的工作原理，请访问[Java for循环](https://www.dooocs.com/img/java-programming/for-loop "Java for Loop")。注意这行代码：

```java
if (i == 5) {
    break;
}
```

这意味着当i的值等于5时，循环终止。因此，我们只得到小于5的值。

* * *

### 示例2：Java break语句

以下程序计算用户输入的数字的总和，直到用户输入负数为止。

我们使用`Scanner`对象获取用户输入。要了解更多关于`Scanner`的信息，请访问[Java Scanner](https://www.dooocs.com/img/java-programming/scanner "Java Scanner")。

```java
import java.util.Scanner;

class UserInputSum {
    public static void main(String[] args) {
      
        Double number, sum = 0.0;

        // 创建Scanner对象
        Scanner input = new Scanner(System.in);
      
        while (true) {
            System.out.print("请输入一个数字: ");

            // 获取用户输入的double类型数据
            number = input.nextDouble();
         
            // 如果数字是负数，则循环终止
            if (number < 0.0) {
                break;
            }
         
           sum += number;
        }
        System.out.println("总和 = " + sum);
    }
}

**输出结果** :

```
请输入一个数字: 3.2
请输入一个数字: 5
请输入一个数字: 2.3
请输入一个数字: 0
请输入一个数字: -4.5
总和 = 10.5
```

在上面的程序中，`while`循环的测试表达式始终为`true`。注意这行代码：

```java
if (number < 0.0) {
    break;
}
```

这意味着当用户输入负数时，循环终止。

* * *

## Java break和嵌套循环

对于[嵌套循环](https://www.dooocs.com/img/java-programming/nested-loop "Java nested Loop")，`break`语句会终止内部循环。

![在嵌套循环中，break语句终止最内层while循环。](https://cdn.programiz.com/sites/tutorial2program/files/nested-while-loop-break.jpg)  
带有嵌套循环的break语句的工作原理

在这里，`break`语句终止了最内层的`while`循环，并且控制跳转到外层循环