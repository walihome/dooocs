# Java基本输入输出

## Java输出

在Java中，你可以简单地使用

```
System.out.println();
或者
System.out.print();
或者
System.out.printf();
```

来将输出发送到标准输出（屏幕）。

这里，

- `System`是一个类
- `out`是一个`public`的`static`字段：它接受输出数据。

如果你不理解这些内容，不要担心。我们会在以后的章节讨论`class`、`public`和`static`。

让我们通过一个例子来输出一行。

```java
class AssignmentOperator {
    public static void main(String[] args) {
        
        System.out.println("Java programming is interesting.");   
    }
}
```

**输出**：

```
Java programming is interesting.
```

这里，我们使用了`println()`方法来显示字符串。

---

### println()、print()和printf()之间的区别

- `print()` - 它打印引号内的字符串。
- `println()` - 它像`print()`方法一样打印引号内的字符串，然后光标移到下一行的开头。
- `printf()` - 它提供字符串格式化（类似于[C/C++编程中的printf](/cpp-programming/library-function/cstdio/printf "C/C++编程中的printf")）。

---

### 示例：print()和println()

```java
class Output {
    public static void main(String[] args) {
        
        System.out.println("1. println ");
        System.out.println("2. println ");
        
        System.out.print("1. print ");
        System.out.print("2. print");
    }
}
```

**输出**：

```
1. println 
2. println 
1. print 2. print
```

在上面的例子中，我们展示了`print()`和`println()`方法的工作原理。要了解有关`printf()`方法的更多信息，请访问[Java printf()](https://www.cs.colostate.edu/~cs160/.Summer16/resources/Java_printf_method_quick_reference.pdf "Java printf()")。

---

### 示例：打印变量和字面量

```java
class Variables {
    public static void main(String[] args) {
        
        Double number = -10.6;
        
        System.out.println(5);
        System.out.println(number);
    }
}
```

当你运行程序时，输出将是：

```
5
-10.6
```

这里，你可以看到我们没有使用引号。这是因为为了显示整数、变量等，我们不使用引号。

---

### 示例：打印连接的字符串

```java
class PrintVariables {
    public static void main(String[] args) {
        
        Double number = -10.6;
        
        System.out.println("I am " + "awesome.");
        System.out.println("Number = " + number);
    }
}
```

**输出**：

```
I am awesome.
Number = -10.6
```

在上面的例子中，注意以下一行代码，

```java
System.out.println("I am " + "awesome.");
```

这里，我们使用`+`运算符来连接（拼接）两个字符串："I am "和"awesome."。

还有一行代码，

```java
System.out.println("Number = " + number);
```

这里，首先计算变量number的值。然后，将该值与字符串"Number = "连接起来。

---

## Java输入

Java提供了不同的方式来从用户获取输入。但是，在本教程中，你将学习使用`Scanner`类的对象从用户获取输入。

为了使用`Scanner`类的对象，我们需要导入`java.util.Scanner`包。

```java
import java.util.Scanner;
```

要了解更多关于在Java中导入包的信息，请访问[Java导入包](/java-programming/packages-import "Java导入包")。

然后，我们需要创建`Scanner`类的对象。我们可以使用该对象从用户获取输入。

```java
// 创建Scanner的对象
Scanner input = new Scanner(System.in);

// 从用户获取输入
int number = input.nextInt();
```

---

### 示例：从用户获取整数输入

```java
import java.util.Scanner;

class Input {
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter an integer: ");
        int number