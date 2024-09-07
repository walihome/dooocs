# Java命令行参数

在Java中，**命令行参数**允许我们在程序执行时传递参数。

如其名称所示，参数通过命令行传递。

* * *

### 示例：命令行参数

```java
class Main {
  public static void main(String[] args) {
    System.out.println("命令行参数是");

    // 循环遍历所有参数
    for(String str: args) {
      System.out.println(str);
    }
  }
}
```

让我们尝试使用命令行运行这个程序。

**1\. 编译代码**

```
javac Main.java
```

**2\. 运行代码**

```
java Main
```

现在假设我们在运行程序时想要传递一些参数，我们可以在类名后面传递这些参数。例如，

```
java Main apple ball cat
```

这里的apple, ball和cat是通过命令行传递给程序的参数。现在，我们将得到以下输出。

```
命令行参数是
apple
ball
cat
```

在上面的程序中，`main()`方法将一个名为args的字符串数组作为参数。

```java
public static void main(String[] args) {...}
```

字符串数组存储了通过命令行传递的所有参数。

> **注意**：参数始终以字符串形式存储，并且始终由**空格**分隔。

* * *

## 传递数值类型的命令行参数

每个Java程序的`main()`方法只接受字符串参数。因此，通过命令行传递数值类型的参数是不可能的。

然而，我们可以稍后将字符串参数转换为数值类型。

### 示例：数值类型的命令行参数

```java
class Main {
  public static void main(String[] args) {

    for(String str: args) {
      // 转换为整数类型
      int argument = Integer.parseInt(str);
      System.out.println("以整数形式的参数：" + argument);
    }

  }
}
```

让我们尝试通过命令行运行程序。

```
// 编译代码
javac Main.java

// 运行代码
java Main 11 23
```

这里的11和23是命令行参数。现在，我们将得到以下输出。

```
以整数形式的参数：
11
23
```

在上面的示例中，注意以下行：

```java
int argument = Integer.parseInt(str);
```

这里，`Integer`类的`parseInt()`方法将字符串参数转换为整数。

类似地，我们可以使用`parseDouble()`和`parseFloat()`方法将字符串转换为`double`和`float`。

> **注意**：如果无法将参数转换为指定的数值类型，则会发生名为`NumberFormatException`的异常。