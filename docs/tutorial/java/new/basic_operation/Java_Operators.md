---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java运算符

运算符是用于对变量和值执行操作的符号。例如，`+`是用于加法的运算符，而`*`也是用于乘法的运算符。

Java中的运算符可以分为5种类型：

1. 算术运算符
2. 赋值运算符
3. 关系运算符
4. 逻辑运算符
5. 一元运算符
6. 位运算符

---

## 1\. Java算术运算符

算术运算符用于对变量和数据执行算术运算。例如，

```java
a + b;
```

这里，`+`运算符用于将两个变量a和b相加。同样，在Java中还有其他各种算术运算符。

运算符 | 运算  
---|---  
`+` | 加法  
`-` | 减法  
`*` | 乘法  
`/` | 除法  
`%` | 取模运算（除法后的余数）  

### 示例1：算术运算符

```java
class Main {
  public static void main(String[] args) {
    
    // 声明变量
    int a = 12, b = 5;

    // 加法运算符
    System.out.println("a + b = " + (a + b));

    // 减法运算符
    System.out.println("a - b = " + (a - b));

    // 乘法运算符
    System.out.println("a * b = " + (a * b));

    // 除法运算符
    System.out.println("a / b = " + (a / b));

    // 取模运算符
    System.out.println("a % b = " + (a % b));
  }
}
```

**输出**

```
a + b = 17
a - b = 7 
a * b = 60
a / b = 2 
a % b = 2 
```

在上面的示例中，我们使用`+`、`-`和`*`运算符来进行加法、减法和乘法运算。

**除法运算符**

注意我们程序中的`a / b`操作。`/`运算符是除法运算符。

如果我们将除法运算符用于两个整数，则结果商也将是整数。如果其中一个操作数是浮点数，则结果也将是浮点数。

在Java中，

(9 / 2) 等于 4
(9.0 / 2) 等于 4.5
(9 / 2.0) 等于 4.5
(9.0 / 2.0) 等于 4.5

**取模运算符**

取模运算符 `%` 计算余数。当 a = 7 被 b = 4 整除时，余数是 **3**。

> **注意**：`%` 运算符主要用于整数。

---

## 2\. Java赋值运算符

赋值运算符用于在Java中为变量赋值。例如，

```java
int age;
age = 5;
```

这里，`=` 是赋值运算符。它将右侧的值赋给左侧的变量。也就是说，**5** 被赋给了变量 age。

让我们看看Java中还有哪些其他赋值运算符。

运算符 | 示例 | 等价于  
---|---|---  
`=` | `a = b;` | `a = b;`  
`+=` | `a += b;` | `a = a + b;`  
`-=` | `a -= b;` | `a = a - b;`  
`*=` | `a *= b;` | `a = a * b;`  
`/=` | `a /= b;` | `a = a / b;`  
`%=` | `a %= b;` | `a = a % b;`  

### 示例2：赋值运算符

```java
class Main {
  public static void main(String[] args) {
    
    // 创建变量
    int```
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    
        // increment operator
        result1 = ++a;
        System.out.println("After incrementing a, a = " + a);
        System.out.println("result1 = " + result1);
    
        // decrement operator
        result2 = --b;
        System.out.println("After decrementing b, b = " + b);
        System.out.println("result2 = " + result2);
      }
    }
```

**Working of Program**

  * `++a` increases the value of `a` by 1, so `a` becomes 13. The value of `result1` is also 13.
  * `--b` decreases the value of `b` by 1, so `b` becomes 11. The value of `result2` is also 11.

In this example, we have initialized the variables `a` and `b` with the same value of 12. After applying the increment and decrement operators, we can see the changes in the values of `a` and `b`.```
Value of a: 12
After increment: 13
Value of b: 12     
After decrement: 11

在上面的程序中，我们使用了++和--运算符作为前缀 (++a, --b)。当这些运算符作为前缀使用时，与作为后缀使用时存在一些细微差别。

要了解更多关于这些运算符的信息。[增量和减量运算符（前缀和后缀之间的区别）]。

* * *

## 6\. Java位运算符

Java中的位运算符用于对单个位执行操作。例如，

对35进行按位取反操作：

35 = 00100011（二进制）

~ 00100011 
  ________
   11011100  = 220（十进制）

这里，`~`是一个位运算符。它反转每个位的值（从0到1，从1到0）。

Java中常见的位运算符有：

运算符 | 描述  
---|---  
`~` | 按位取反  
`<<` | 左移  
`>>` | 右移  
`>>>` | 无符号右移  
`&` | 按位与  
`^` | 按位异或  
  
这些运算符在Java中通常不常用。要了解更多信息。[Java位运算符和位移运算符]。

* * *

## 其他运算符

除了这些运算符外，Java还有其他额外的运算符。

### Java instanceof 运算符

`instanceof`运算符用于检查一个对象是否是某个特定类的实例。例如，

```java
class Main {
  public static void main(String[] args) {

    String str = "Programiz";
    boolean result;

    // 检查str是否是String类的实例
    result = str instanceof String;
    System.out.println("str是否为String类的对象？" + result);
  }
}
```

**输出**
```
str是否为String类的对象？true
```

在这里，str是`String`类的实例。因此，`instanceof`运算符返回`true`。要了解更多信息。[Java instanceof]。

* * *

### Java三元运算符

三元运算符（条件运算符）是`if-then-else`语句的简写形式。例如，

```java
variable = Expression ? expression1 : expression2
```

它的工作原理如下。

   - 如果`Expression`为`true`，则将`expression1`赋给变量。
   - 如果`Expression`为`false`，则将`expression2`赋给变量。

我们来看一个三元运算符的例子。

```java
class Java {
  public static void main(String[] args) {

    int februaryDays = 29;
    String result;

    // 三元运算符
    result = (februaryDays == 28) ? "不是闰年" : "闰年";
    System.out.println(result);
  }
}
```

**输出**
```
闰年
```

在上面的例子中，我们使用三元运算符来判断年份是否为闰年。要了解更多信息。[Java三元运算符]。

* * *

现在你已经了解了Java运算符，是时候了解运算符的求值顺序了。要了解更多信息。[Java运算符优先级]。
```