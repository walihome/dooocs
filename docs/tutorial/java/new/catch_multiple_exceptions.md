---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
## Java catch Multiple Exceptions

在Java 7之前，即使存在代码冗余，我们也需要为不同类型的异常编写多个异常处理代码。

让我们来看一个例子。

### 示例1：多个catch块

```java
class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (ArithmeticException e) {
      System.out.println(e.getMessage());
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println(e.getMessage());
    } 
  }
}
```

**输出**

```
/ by zero
```

在这个例子中，可能会发生两种异常：

- `ArithmeticException`，因为我们试图将一个数除以0。
- `ArrayIndexOutOfBoundsException`，因为我们声明了一个新的整数数组，其索引范围是0到9，但我们试图给索引10赋值。

我们在两个`catch`块中都打印出异常消息，即存在重复的代码。

赋值运算符`=`的结合性是从右到左的，因此首先抛出带有消息“/ by zero”的`ArithmeticException`。

---

## 在catch块中处理多个异常

在Java SE 7及更高版本中，我们现在可以在单个`catch`块中捕获多种类型的异常。

每种可以由`catch`块处理的异常类型之间使用竖线或者管道符号`|`分隔。

其语法如下：

```java
try {
  // 代码
} catch (ExceptionType1 | Exceptiontype2 ex) { 
  // catch块
}
```

### 示例2：多重捕获块

```java
class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {
      System.out.println(e.getMessage());
    }
  }
}
```

**输出**

```
/ by zero
```

在单个`catch`块中捕获多个异常可以减少代码冗余并提高效率。

编译此程序时生成的字节码将比具有多个`catch`块的程序更小，因为没有代码冗余。

**注意：**如果一个`catch`块处理多个异常，则catch参数隐式为`final`。这意味着我们不能给catch参数赋值。

---

## 捕获基本异常类

当在单个`catch`块中捕获多个异常时，规则是一般化到特殊化。

这意味着如果在`catch`块中存在异常的继承结构，我们只能捕获基本异常，而不是捕获多个特定的异常。

让我们来看一个例子。

### 示例3：仅捕获基本异常类

```java
class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
```

**输出**

```
/ by zero
```

我们知道所有的异常类都是`Exception`类的子类。因此，我们可以简单地捕获`Exception`类，而不是捕获多个特定的异常。

---

如果在`catch`块中已经指定了基本异常类，请不要在同一个`catch`块中使用子异常类。否则，将会得到编译错误。

让我们来看一个例子。

### 示例4：捕获基本和子异常类

```java
class Main {
  public static void main(String[] args) {
    try {
      int array[] = new int[10];
      array[10] = 30 / 0;
    } catch (Exception | ArithmeticException | ArrayIndexOutOfBoundsException e) {
      System.out.println(e.getMessage());
    }
  }
}
```

**输出**

```
Main.java:6: error: Alternatives in a multi-catch statement cannot be related by subclassing
```

在这个例子