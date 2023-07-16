# Java throw和throws

在Java中，异常可以分为两种类型：

* **未经检查的异常：**它们在编译时不被检查，而是在运行时检查。例如：`ArithmeticException`，`NullPointerException`，`ArrayIndexOutOfBoundsException`，`Error`类下的异常等。
* **已检查的异常：**它们在编译时被检查。例如：`IOException`，`InterruptedException`等。

请参考[Java异常](https://www.programiz.com/java-programming/exceptions)以详细了解已检查和未经检查的异常。

通常情况下，我们不需要处理未经检查的异常。因为未经检查的异常是由于编程错误而引起的。而且，更好的做法是纠正这些错误而不是处理它们。

本教程将重点介绍如何使用`throw`和`throws`来处理已检查的异常。

# Java throws关键字

我们使用`throws`关键字在方法声明中声明可能在其中发生的异常的类型。

语法如下：
```
访问修饰符 返回类型 方法名() throws 异常类型1, 异常类型2 … {
  // 代码
}
```

从上面的语法可以看出，我们可以使用`throws`来声明多个异常。

### 示例1：Java throws关键字

```java
import java.io.*;
class Main {
  public static void findFile() throws IOException {
    // 可能会产生IOException的代码
    File newFile = new File("test.txt");
    FileInputStream stream = new FileInputStream(newFile);
  }

  public static void main(String[] args) {
    try {
      findFile();
    } catch(IOException e) {
      System.out.println(e);
    }
  }
}
```

**输出**
```
java.io.FileNotFoundException: test.txt (No such file or directory)
```

当我们运行这个程序时，如果文件`test.txt`不存在，`FileInputStream`会抛出一个继承自`IOException`类的`FileNotFoundException`。

如果一个方法没有处理异常，那么在它内部可能发生的异常类型必须在`throws`子句中进行指定，以便调用堆栈中的上层方法可以处理它们或者使用`throws`关键字自身进行指定。

`findFile()`方法指定了可能抛出`IOException`。`main()`方法调用这个方法并处理抛出的异常。

### 抛出多个异常

下面是如何使用`throws`关键字来抛出多个异常的示例。
```java
import java.io.*;
class Main {
  public static void findFile() throws NullPointerException, IOException, InvalidClassException {

    // 可能会产生NullPointerException的代码
    … … … 

    // 可能会产生IOException的代码
    … … … 

    // 可能会产生InvalidClassException的代码
    … … … 
  }

  public static void main(String[] args) {
    try {
      findFile();
    } catch(IOException e1) {
      System.out.println(e1.getMessage());
    } catch(InvalidClassException e2) {
      System.out.println(e2.getMessage());
    }
  }
}
```

这里，`findFile()`方法在其`throws`子句中指定了它可以抛出`NullPointerException`、`IOException`和`InvalidClassException`。

注意我们没有处理`NullPointerException`。这是因为它是一个未经检查的异常。不需要在`throws`子句中指定它并进行处理。

### throws关键字 vs. try...catch...finally

可能会有几种方法导致异常。为每个方法编写`try...catch`将会很繁琐，代码变得冗长且难以阅读。

当你有一个需要处理的已检查异常（必须处理的异常），而你不想在当前方法中捕获它时，`throws`也是有用的。

# Java throw关键字

`throw`关键字用于显式地抛出一个单个异常。

当抛出异常时，程序执行的流程会从`try`块转移到`catch`块。我们在方法内部使用`throw`关键字。

语法如