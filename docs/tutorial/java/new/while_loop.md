---
title: while循环
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java while和do...while循环

在计算机编程中，循环用于重复执行一段代码。例如，如果您想要显示一个消息100次，可以使用循环。这只是一个简单的例子，您可以利用循环做更多的事情。

在之前的教程中，您已经学习了[Java for循环](https://www.dooocs.com/img/java-programming/for-loop "Java for Loop")。在这里，您将学习关于`while`和`do...while`循环。

* * *

## Java while循环

Java `while`循环用于在满足特定条件之前运行特定的代码。`while`循环的语法如下：
    
    
    while (testExpression) {
        // 循环体
    }

这里：

1. `while`循环会在括号`()`内对**testExpression**进行求值。
2. 如果**testExpression**的求值结果为`true`，则执行`while`循环内的代码。
3. 再次对**testExpression**进行求值。
4. 这个过程会一直持续，直到**testExpression**的求值结果为`false`。
5. 当**testExpression**的求值结果为`false`时，循环停止。

要了解更多有关条件的信息，请访问[Java关系运算符](https://www.programiz.com/java-programming/operators#equality-relational "Java Relational Operator")和[逻辑运算符](https://www.programiz.com/java-programming/operators#logical "Java Logical Operator")。

* * *

## while循环的流程图

![Java中while循环的流程图](https://cdn.programiz.com/sites/tutorial2program/files/java-while-loop.png)  
Java while循环的流程图

* * *

### 示例1：显示从1到5的数字
    
    
    // 程序用于显示从1到5的数字
    
    class Main {
      public static void main(String[] args) {
    
        // 声明变量
        int i = 1, n = 5;
    
        // while循环从1到5
        while(i <= n) {
          System.out.println(i);
          i++;
        }
      }
    }

**输出**
    
    
    1
    2
    3
    4
    5

这个程序的工作原理如下。

迭代 | 变量 | 条件：i <= n | 动作  
---|---|---|---  
第1次 | `i = 1`  
`n = 5` | `true` | 打印1。  
将i增加到**2**。  
第2次 | `i = 2`  
`n = 5` | `true` | 打印2。  
将i增加到**3**。  
第3次 | `i = 3`  
`n = 5` | `true` | 打印3。  
将i增加到**4**。  
第4次 | `i = 4`  
`n = 5` | `true` | 打印4。  
将i增加到**5**。  
第5次 | `i = 5`  
`n = 5` | `true` | 打印5。  
将i增加到**6**。  
第6次 | `i = 6`  
`n = 5` | `false` | 循环终止  
  
* * *

### 示例2：仅对正数求和
    
    
    // Java程序用于计算正数的和
    import java.util.Scanner;
    
    class Main {
      public static void main(String[] args) {
          
        int sum = 0;
    
        // 创建Scanner类的对象
        Scanner input = new Scanner(System.in);
    
        // 从用户输入整数
        System.out.println("输入一个数字");
        int number = input.nextInt();
    	   
        // while循环持续 
        // 直到输入的数字为正数
        while (number >= 0) {
          // 仅添加正数
          sum += number;
    
          System.out.println("输入一个数字");
          number = input.nextInt();
        }
    	   
        System.out.println("和 = " + sum);
        input.close();
      }
    }

**输出**