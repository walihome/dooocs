# Java for循环

在计算机编程中，循环用于重复执行一段代码。例如，如果你想要显示一条消息100次，而不是重复输入相同的代码100次，你可以使用循环。

在Java中，有三种类型的循环：

  * for循环
  * [while循环](https://www.programiz.com/java-programming/do-while-loop#syntax-while "Java while循环")
  * [do...while循环](https://www.dooocs.com/img/java-programming/do-while-loop#do-while-loop "Java do...while循环")

本教程重点介绍for循环。你将在接下来的教程中学习其他类型的循环。

* * *

## Java for循环

Java `for`循环用于多次执行一段代码。`for`循环的语法如下：
    
    for (initialExpression; testExpression; updateExpression) {
        // 循环体
    }

这里，

  1. **initialExpression**用于初始化和/或声明变量，并且仅执行一次。
  2. **condition**被评估。如果**condition**为`true`，则执行`for`循环的循环体。
  3. **updateExpression**更新**initialExpression**的值。
  4. 再次评估**condition**。此过程持续进行，直到**condition**为`false`。

要了解更多关于条件的内容，请访问[Java关系运算符](https://www.dooocs.com/img/java-programming/operators#equality-relational "Java关系运算符")和[逻辑运算符](https://www.dooocs.com/img/java-programming/operators#logical "Java逻辑运算符")。

* * *

![Java for循环的流程图](https://cdn.programiz.com/sites/tutorial2program/files/java-for-loop.png)  
Java for循环的流程图

* * *

### 示例1：显示文本五次
    
    
    // 打印文本5次的程序
    
    class Main {
      public static void main(String[] args) {
    
        int n = 5;
        // for循环  
        for (int i = 1; i <= n; ++i) {
          System.out.println("Java很有趣");
        }
      }
    }

**输出**
    
    
    Java很有趣
    Java很有趣
    Java很有趣
    Java很有趣
    Java很有趣

以下是这个程序的工作原理。

迭代 | 变量 | 条件: i <= n | 动作  
---|---|---|---  
第一次 | `i = 1`  
`n = 5` | `true` | 打印"Java很有趣"。  
将i增加到**2**。  
第二次 | `i = 2`  
`n = 5` | `true` | 打印"Java很有趣"。  
将i增加到**3**。  
第三次 | `i = 3`  
`n = 5` | `true` | 打印"Java很有趣"。  
将i增加到**4**。  
第四次 | `i = 4`  
`n = 5` | `true` | 打印"Java很有趣"。  
将i增加到**5**。  
第五次 | `i = 5`  
`n = 5` | `true` | 打印"Java很有趣"。  
将i增加到**6**。  
第六次 | `i = 6`  
`n = 5` | `false` | 循环终止。  
  
* * *

### 示例2：显示1到5的数字
    
    
    // 打印从1到5的数字的程序
    
    class Main {
      public static void main(String[] args) {
      
        int n = 5;
        // for循环  
        for (int i = 1; i <= n; ++i) {
          System.out.println(i);
        }
      }
    }

**输出**
    
    
    1
    2
    3
    4
    5

以下是程序的工作原理。

迭代 | 变量 | 条