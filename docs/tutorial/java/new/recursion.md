---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 递归

在Java中，调用自身的方法被称为递归方法。这个过程被称为递归。

一个物理世界的例子是将两面平行的镜子相互对准。夹在它们之间的任何物体都会被递归地反射。

* * *

### 递归的工作原理？

![函数正在调用自己](https://cdn.programiz.com/sites/tutorial2program/files/java-recursive-call.jpg)  
Java 递归的工作原理

在上面的例子中，我们从`main`方法内部调用了`recurse()`方法（普通的方法调用）。而且，在`recurse()`方法内部，我们再次调用了相同的recurse方法。这是一个递归调用。

为了停止递归调用，我们需要在方法内部提供一些条件。否则，该方法将被无限调用。

因此，我们使用[if...else语句](https://www.dooocs.com/img/java-programming/if-else-statement "Java if...else")（或类似的方法）来终止方法内部的递归调用。

* * *

## 例子：使用递归计算阶乘

```java
class Factorial {
    
    static int factorial( int n ) {
        if (n != 0)  // 终止条件
            return n * factorial(n-1); // 递归调用
        else
            return 1;
    }

    public static void main(String[] args) {
        int number = 4, result;
        result = factorial(number);
        System.out.println(number + " 的阶乘 = " + result);
    }
}
```

**输出：**

```
4 的阶乘 = 24
```

在上面的例子中，我们有一个名为`factorial()`的方法。从`main()`方法中调用了`factorial()`，并传递了number变量作为参数。

这里要注意的是语句：

```
return n * factorial(n-1);
```

`factorial()`方法正在调用自身。初始时，`factorial()`内部的n的值为4。在下一次递归调用中，将3传递给`factorial()`方法。这个过程一直持续到n等于0为止。

当n等于0时，`if`语句返回false，因此返回1。最后，累积的结果被传递给`main()`方法。

* * *

## 阶乘程序的工作原理

下面的图片将更好地展示使用递归执行阶乘程序的过程。

![使用递归计算阶乘](https://cdn.programiz.com/sites/tutorial2program/files/how-recursion-works-java.jpg)  
使用递归计算阶乘的程序

* * *

## 递归的优缺点

当进行递归调用时，会在堆栈上为变量分配新的存储位置。随着每个递归调用的返回，旧的变量和参数会从堆栈中移除。因此，递归通常使用更多内存，并且通常较慢。

另一方面，递归解决方案更简单，编写、调试和维护所需的时间较短。

推荐阅读：[递归的优点和缺点是什么？](https://stackoverflow.com/questions/5250733/what-are-the-advantages-and-disadvantages-of-recursion)