# Java 方法

方法是执行特定任务的代码块。

假设您需要创建一个程序来绘制一个圆并为其上色。您可以创建两个方法来解决这个问题：

- 一个方法用于绘制圆
- 一个方法用于给圆上色

将复杂的问题分解为较小的块，使得程序易于理解和复用。

在Java中，有两种类型的方法：

- **用户自定义方法**：我们可以根据需求创建自己的方法。
- **标准库方法**：这些是Java中内置的可供使用的方法。

首先让我们学习用户自定义方法。

---

## 声明一个Java方法

声明方法的语法为：

```java
返回类型 方法名() {
  // 方法体
}
```

其中，

- **返回类型** - 指定方法返回的值的类型。例如，如果方法具有`int`返回类型，则返回一个整数值。  
如果方法不返回任何值，则其返回类型为`void`。
- **方法名** - 是程序中用来引用特定方法的标识符。
- **方法体** - 包含了用于执行某些任务的编程语句。方法体被大括号`{}`括起来。

举个例子：

```java
int addNumbers() {
  // 代码
}
```

在上面的例子中，方法的名称是`addNumbers()`。返回类型是`int`。我们将在本教程的后面部分更详细地了解返回类型。

这是声明一个方法的简单语法。然而，完整的方法声明语法如下：

```java
修饰符 static 返回类型 方法名(参数1, 参数2, ...) {
  // 方法体
}
```

其中，

- **修饰符** - 定义访问类型，例如方法是public、private等。要了解更多信息，请访问[Java 访问修饰符](/java-programming/access-modifiers)。
- **static** - 如果使用`static`关键字，可以在没有创建对象的情况下访问它。  
例如，标准 [Math 类](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html) 的`sqrt()`方法是静态的。因此，我们可以直接调用`Math.sqrt()`，而不需要创建`Math`类的实例。
- **参数1/参数2** - 这些是传递给方法的值。我们可以向方法传递任意数量的参数。

---

## 在Java中调用方法

在上面的例子中，我们声明了一个名为`addNumbers()`的方法。现在，要使用该方法，我们需要调用它。

以下是如何调用`addNumbers()`方法的示例：

```java
// 调用该方法
addNumbers();
```

![使用方法名后跟括号来调用Java方法](https://cdn.programiz.com/sites/tutorial2program/files/java-method-call.png)  
Java方法调用的工作原理

---

## 示例 1：Java方法

```java
class Main {

  // 创建一个方法
  public int addNumbers(int a, int b) {
    int sum = a + b;
    // 返回一个值
    return sum;
  }

  public static void main(String[] args) {
    
    int num1 = 25;
    int num2 = 15;

    // 创建Main类的对象
    Main obj = new Main();
    // 调用方法
    int result = obj.addNumbers(num1, num2);
    System.out.println("和为：" + result);
  }
}
```

**输出结果**

```
和为：40
```

在上面的示例中，我们创建了名为`addNumbers()`的方法。该方法接受两个参数`a`和`b`。注意以下行：

```java
int result = obj.addNumbers(num1, num2);
```

在这里，我们通过传递两个参数`num1`和`num2`调用了该方法。由于该方法返回一个值，我们将该值存储在变量`result`中。

> **注意**：该方法是非静态的。因此，我们使用类的对象来调用该方法