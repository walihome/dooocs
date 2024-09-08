---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java switch语句

`switch`语句允许我们在多个选择之间执行一段代码。

Java中`switch`语句的语法如下：

```java
switch (表达式) {

  case 值1:
    // 代码
    break;
  
  case 值2:
    // 代码
    break;
  
  ...
  ...
  
  default:
    // 默认语句
}
```

**switch-case语句如何工作？**

表达式只会被计算一次，并与每个case的值进行比较。

  * 如果表达式与值1匹配，则执行`case 值1`的代码。类似地，如果表达式与值2匹配，则执行`case 值2`的代码。
  * 如果没有匹配项，则执行**default case**的代码。

> **注意**：switch-case语句的工作原理与[Java if...else...if梯形结构](https://www.dooocs.com/img/java-programming/if-else-statement#if-else-ladder)类似。然而，switch语句的语法更清晰，更易读和编写。

---

## 示例：Java switch语句

```java
// 使用switch...case语句检查大小的Java程序

class Main {
  public static void main(String[] args) {

    int number = 44;
    String size;

    // switch语句检查大小
    switch (number) {

      case 29:
        size = "小号";
        break;

      case 42:
        size = "中号";
        break;

      // 匹配week的值
      case 44:
        size = "大号";
        break;

      case 48:
        size = "超大号";
        break;
      
      default:
        size = "未知";
        break;

    }
    System.out.println("尺寸: " + size);
  }
}
```

**输出结果**：

```
尺寸: 大号
```

在上面的示例中，我们使用了switch语句来找到尺寸。这里，我们有一个变量number。该变量与每个case语句的值进行比较。

由于值与**44**匹配，因此执行`case 44`的代码块。

```java
size = "大号";
break;
```

在这里，尺寸变量被赋值为`"大号"`。

**推荐阅读**：[使用Java switch语句创建一个简单的计算器](https://www.dooocs.com/img/java-programming/examples/calculator-switch-case)

---

## switch语句的流程图

![Java switch语句的流程图](https://cdn.programiz.com/sites/tutorial2program/files/java-switch-case-implementation.png)  
Java switch语句的流程图

---

## Java switch...case中的break语句

请注意，我们在每个case块中都使用了`break`语句。

```java
...
case 29:
  size = "小号";
  break;
...
```

`break`语句用于终止**switch-case**语句。如果不使用`break`，匹配的case之后的所有case也会被执行。例如，

```java
class Main {
  public static void main(String[] args) {

    int expression = 2;

    // switch语句检查大小
    switch (expression) {
      case 1:
        System.out.println("Case 1");

        // 匹配的case
      case 2:
        System.out.println("Case 2");

      case 3:
        System.out.println("Case 3");

      default:
        System.out.println("Default case");
    }
  }
}
```

**输出结果**

```
Case 2
Case 3      
Default case
```

在上面的示例中，表达式与`case 2`匹配。这里，在每个case之后我们没有使用break语句。

因此，`case 2`之后的所有case也会被执行。

这就是为什么需要使用`break`语句以终止匹配的case之后的**switch-case**语句。要了解更多信息，请访问[Java break语句](https://www.dooocs.com/img/java-programming/break-statement)。

---

## Java switch-case中的默认case

switch语句还包括一个**可选