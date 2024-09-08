---
title: Java continue 语句
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java continue 语句

在使用循环时，有时您可能希望跳过某些语句或终止循环。在这种情况下，会使用 `break` 和 `continue` 语句。

要了解有关 `break` 语句的信息，请访问 [Java break](https://www.dooocs.com/img/java-programming/break-statement)。在本文中，我们将学习有关 `continue` 语句的内容。

* * *

## Java continue

`continue` 语句跳过当前循环的迭代（`for`、`while`、`do...while` 等）。

在 `continue` 语句之后，程序移动到循环的末尾。并且，测试表达式将被评估（对于 `for` 循环而言，将评估更新语句）。

以下是 `continue` 语句的语法。
    
    
    continue;

> **注意**：`continue` 语句几乎总是在决策语句（[if...else 语句](https://www.dooocs.com/img/java-programming/if-else-statement)）中使用。

* * *

## Java continue 语句的工作原理

![Java while、do...while 和 for 循环中 continue 语句的工作原理。](https://cdn.programiz.com/sites/tutorial2program/files/java-continue.png)  
Java continue 语句的工作原理

* * *

### 示例 1：Java continue 语句
    
    
    class Main {
      public static void main(String[] args) {
    
        // for 循环
        for (int i = 1; i <= 10; ++i) {
    
          // 如果 i 的值在 4 和 9 之间
          // 执行 continue
          if (i > 4 && i < 9) {
            continue;
          }
          System.out.println(i);
        }
      }
    }

**输出**：
    
    
    1
    2
    3
    4
    9
    10

在上面的程序中，我们使用 `for` 循环来打印每次迭代中 i 的值。要了解 `for` 循环的工作原理，请访问 [Java for 循环](https://www.dooocs.com/img/java-programming/for-loop)。请注意以下语句，
    
    
    if (i > 4 && i < 9) {
        continue;
    }

在这里，当 i 的值变为大于 **4** 且小于 **9** 时，执行 `continue` 语句。

然后跳过这些值的打印语句。因此，输出跳过了值 **5**、**6**、**7** 和 **8**。

* * *

### 示例 2：计算 5 个正数的和
    
    
    import java.util.Scanner;
    
    class Main {
      public static void main(String[] args) {
    
        Double number, sum = 0.0;
        // 创建一个 Scanner 对象
        Scanner input = new Scanner(System.in);
    
        for (int i = 1; i < 6; ++i) {
          System.out.print("输入第 " + i + " 个数字：");
          // 从用户获取输入
          number = input.nextDouble();
    
          // 如果数字为负数
          // 执行 continue 语句
          if (number <= 0.0) {
            continue;
          }
    
          sum += number;
        }
        System.out.println("和为：" + sum);
        input.close();
      }
    }

**输出**：
    
    
    输入第 1 个数字：2.2
    输入第 2 个数字：5.6
    输入第 3 个数字：0
    输入第 4 个数字：-2.4
    输入第 5 个数字：-3
    和为：7.8

在上面的示例中，我们使用 `for` 循环来打印 5 个正数的和。请注意以下行，
    
    
    if (number <= 0.0) {
        continue;
    }

在这里，当用户输入一个负数时，将执行 `continue` 语句。这将跳过循环的当前迭代，并将程序控制转移到循环的更新表达式。

>