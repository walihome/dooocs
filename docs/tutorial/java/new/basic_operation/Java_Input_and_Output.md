---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java基本输入输出

## Java输出

在Java中，你可以简单地使用以下方式将输出发送到标准输出（屏幕）：

```java
System.out.println();
System.out.print();
System.out.printf();
```

这里，

- `System` 是一个类
- `out` 是一个`public` `static`字段：它接受输出数据。

如果你不理解这些内容，不用担心。我们会在后面的章节中介绍`class`、`public`和`static`。

让我们通过一个示例来输出一行：

```java
class AssignmentOperator {
    public static void main(String[] args) {
        System.out.println("Java编程有趣。");   
    }
}
```

**输出**：
```
Java编程有趣。
```

在这个示例中，我们使用了`println()`方法来显示字符串。

---

### `println()`、`print()`和`printf()`之间的区别

- `print()`：打印引号内的字符串。
- `println()`：与`print()`方法类似，它会打印引号内的字符串，并将光标移到下一行的开头。
- `printf()`：提供字符串格式化（类似于[C/C++编程中的printf]）。

---

### 示例：`print()`和`println()`

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

在上面的示例中，我们展示了`print()`和`println()`方法的工作方式。如果想了解更多关于`printf()`方法的内容。[Java printf()](https://www.cs.colostate.edu/~cs160/.Summer16/resources/Java_printf_method_quick_reference.pdf "Java printf()")。

---

### 示例：打印变量和字面值

```java
class Variables {
    public static void main(String[] args) {
        Double number = -10.6;
        
        System.out.println(5);
        System.out.println(number);
    }
}
```

当你运行程序时，输出将会是：

```
5
-10.6
```

在这里，你可以看到我们没有使用引号。这是因为要显示整数、变量等内容时，我们不需要使用引号。

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

在上面的示例中，注意到以下代码行：

```java
System.out.println("I am " + "awesome.");
```

这里，我们使用`+`运算符将两个字符串"我是"和"很厉害"连接起来。

以及以下代码行：

```java
System.out.println("Number = " + number);
```

这里，首先计算变量`number`的值，然后将该值与字符串"Number ="连接起来。

---

## Java输入

Java提供了多种获取用户输入的方式。但是，在本教程中，你将学习使用`Scanner`类的对象从用户处获取输入。

为了使用`Scanner`类的对象，我们需要导入`java.util.Scanner`包。

```java
import java.util.Scanner;
```

要了解更多关于在Java中导入包的内容。[Java导入包]。

然后，我们需要创建一个`Scanner`类的对象。我们可以使用该对象从用户处接收输入。

```java
// 创建一个Scanner对象
Scanner input = new Scanner(System.in);

// 从用户处接收输入
int number = input.nextInt();
```### 示例：从用户获取整数输入

```java
import java.util.Scanner;

class Input {
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        
        System.out.print("请输入一个整数：");
        int number = input.nextInt();
        System.out.println("您输入的是：" + number);

        // 关闭扫描器对象
        input.close();
    }
}
```

**输出结果**：
    
请输入一个整数：23
您输入的是：23

在上面的示例中，我们创建了一个名为`input`的`Scanner`类对象。然后，我们调用`Scanner`类的`nextInt()`方法来从用户获取整数输入。

类似地，我们可以使用`nextLong()`、`nextFloat()`、`nextDouble()`和`next()`方法分别从用户获取`long`、`float`、`double`和`String`类型的输入。

> **注意**：我们使用了`close()`方法来关闭对象。建议在获取输入后关闭`Scanner`对象。

---

### 示例：获取浮点数、双精度和字符串输入

```java
import java.util.Scanner;

class Input {
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        
        // 获取浮点数输入
        System.out.print("请输入浮点数：");
        float myFloat = input.nextFloat();
        System.out.println("浮点数输入为：" + myFloat);
        
        // 获取双精度输入
        System.out.print("请输入双精度：");
        double myDouble = input.nextDouble();
        System.out.println("双精度输入为：" + myDouble);
        
        // 获取字符串输入
        System.out.print("请输入文本：");
        String myString = input.next();
        System.out.println("文本输入为：" + myString);
    }
}
```

**输出结果**：
```java
请输入浮点数：2.343
浮点数输入为：2.343
请输入双精度：-23.4
双精度输入为：-23.4
请输入文本：Hey!
文本输入为：Hey!
```

如上所述，还有其他几种从用户获取输入的方法。要了解更多关于`Scanner`的信息。 [Java Scanner]。