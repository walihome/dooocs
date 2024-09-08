---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
## Java运算符

运算符是在变量和值上执行操作的符号。例如，`+`是用于加法的运算符，而`*`也是用于乘法的运算符。

Java中的运算符可以分为5种类型：

  1. 算术运算符
  2. 赋值运算符
  3. 关系运算符
  4. 逻辑运算符
  5. 一元运算符
  6. 位运算符



* * *

## 1\. Java算术运算符

算术运算符用于对变量和数据进行算术运算。例如，
    
    
    a + b;

这里，`+`运算符用于将两个变量a和b相加。类似地，Java中还有其他各种算术运算符。

运算符 | 操作  
---|---  
`+` | 加法  
`-` | 减法  
`*` | 乘法  
`/` | 除法  
`%` | 取模（求余）运算  
  
### 示例1：算术运算符
    
    
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

**输出**
    
    
    a + b = 17
    a - b = 7 
    a * b = 60
    a / b = 2 
    a % b = 2 

在上面的示例中，我们使用了`+`，`-`和`*`运算符来进行加法、减法和乘法运算。

**/ 除法运算符**

请注意我们程序中的`a / b`运算。`/`运算符是除法运算符。

如果我们将除法运算符用于两个整数，那么结果商也将是整数。而如果操作数中有一个浮点数，则结果也将是浮点数。
    
    
    在Java中,
    
    (9 / 2) 是4
    (9.0 / 2) 是4.5
    (9 / 2.0) 是4.5
    (9.0 / 2.0) 是4.5

**% 取模运算符**

取模运算符 `%` 计算余数。当 `a = 7` 被 `b = 4` 整除时，余数是 **3**。

> **注意**：`%` 运算符主要用于整数。

* * *

## 2\. Java赋值运算符

赋值运算符用于在Java中给变量赋值。例如，
    
    
    int age;
    age = 5;

这里，`=` 是赋值运算符。它将右侧的值赋给左侧的变量。也就是说，变量age被赋值为 **5**。

让我们看一些Java中可用的其他赋值运算符。

运算符 | 示例 | 等价于  
---|---|---  
`=` | `a = b;` | `a = b;`  
`+=` | `a += b;` | `a = a + b;`  
`-=` | `a -= b;` | `a = a - b;`  
`*=` | `a *= b;` | `a = a * b;`  
`/=` | `a /= b;` | `a = a / b;`  
`%=` | `a %= b;` | `a = a % b;`  
  
### 示例2：赋值运算符
    
    
    class Main {
      public static void main(String# Java instanceof

在Java中，`instanceof`运算符用于检查一个对象是否是某个特定类的实例或者是其子类的实例。

使用语法：
```java
result = object instanceof ClassName;
```

这里的`object`是需要检查的对象，`ClassName`是要比较的类名。如果`object`是`ClassName`类的实例或者其子类的实例，那么`instanceof`运算符返回`true`，否则返回`false`。

下面是一个示例：

```java
public class Java {
  public static void main(String[] args) {

    String str = "Hello";
    boolean result;

    // 检查str是否是String类的实例
    result = str instanceof String;
    System.out.println("str是String类的实例吗？" + result);
  }
}
```

**输出**
```
str是String类的实例吗？true
```

在上面的示例中，我们使用`instanceof`运算符检查了`str`是否是`String`类的实例。由于`str`确实是`String`类的实例，所以`instanceof`运算符返回`true`。

想要了解更多，请访问 [Java instanceof](https://www.dooocs.com/img/java-programming/instanceof)。

---

# Java三元运算符

Java的三元运算符（条件运算符）是`if-then-else`语句的简写形式。使用语法如下：

```java
variable = Expression ? expression1 : expression2;
```

它的工作原理如下：

  * 如果`Expression`为`true`，则将`expression1`赋值给变量。
  * 如果`Expression`为`false`，则将`expression2`赋值给变量。

下面是一个三元运算符的示例：

```java
public class Java {
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

在上面的示例中，我们使用三元运算符检查了年份是否为闰年。如果`februaryDays`等于28，那么结果为"不是闰年"，否则结果为"闰年"。

想要了解更多，请访问 [Java三元运算符](https://www.dooocs.com/img/java-programming/ternary-operator)。

---

现在你已经了解了Java运算符，是时候了解运算符的优先级顺序了。想要了解更多，请访问 [Java运算符优先级](https://www.dooocs.com/img/java-programming/operator-precedence)。