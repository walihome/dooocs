# Java if...else语句

在编程中，我们使用`if..else`语句在多个选择中运行一段代码。

例如，根据学生获得的百分比给予成绩（A、B、C）。

- 如果百分比高于90，给予A级
- 如果百分比高于75，给予B级
- 如果百分比高于65，给予C级

## 1. Java if (if-then)语句

**if-then**语句的语法为：

```java
if (条件) {
  // 代码块
}
```

这里，条件是一个布尔表达式，如`age >= 18`。

- 如果条件评估为`true`，则执行代码块
- 如果条件评估为`false`，则跳过代码块

### if语句的工作原理

![如果数字大于0，则执行if块中的代码；否则跳过](https://cdn.programiz.com/sites/tutorial2program/files/java-if-working.png)
Java if语句的工作原理

### 示例1：Java if语句

```java
class IfStatement {
  public static void main(String[] args) {

    int number = 10;

    // 检查number是否小于0
    if (number < 0) {
      System.out.println("The number is negative.");
    }

    System.out.println("Statement outside if block");
  }
}
```

**输出结果**

```
Statement outside if block
```

在程序中，`number < 0`的值为`false`。因此，if语句体内的代码被**跳过**执行。

> **注意：**如果想了解更多关于测试条件的内容，请访问[Java关系运算符](/java-programming/operators#relational)和[Java逻辑运算符](/java-programming/operators#logical)。

我们还可以使用[Java字符串](/java-programming/string)作为测试条件。

### 示例2：Java if与字符串

```java
class Main {
  public static void main(String[] args) {
    // 创建字符串变量
    String language = "Java";

    // if语句
    if (language == "Java") {
      System.out.println("Best Programming Language");
    }
  }
}
```

**输出结果**

```
Best Programming Language
```

在上面的示例中，我们在`if`块中比较了两个字符串。

## 2. Java if...else (if-then-else)语句

`if`语句在测试表达式评估为`true`时执行一段代码。然而，如果测试表达式评估为`false`，则不执行任何操作。

在这种情况下，我们可以使用可选的`else`块。只有当测试表达式评估为`false`时，才会执行`else`块中的语句。这就是Java中的**if-...else**语句。

**if...else**语句的语法为：

```java
if (条件) {
  // if块中的代码
}
else {
  // else块中的代码
}
```

这里，如果条件为`true`，程序将执行一项任务（if块中的代码），如果条件为`false`，程序将执行另一项任务（else块中的代码）。

### if...else语句的工作原理

![如果条件为true，则执行if块内的代码；否则执行else块内的代码](https://cdn.programiz.com/sites/tutorial2program/files/java-if-else-working.png)
Java if-else语句的工作原理

### 示例3：Java if...else语句

```java
class Main {
  public static void main(String[] args) {
    int number = 10;

    // 检查number是否大于0
    if (number > 0) {
      System.out.println("The number is positive.");
    }
    
    // 如果number不大于0，则执行此块
    else {
      System.out.println("The number is not positive.");
    }

    System.out.println("Statement outside if...else block");
  }
}
```

**输出结果**

```
The number is positive.
Statement outside if...else block
```

在上面的示