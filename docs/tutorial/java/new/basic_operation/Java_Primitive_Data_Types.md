# Java 数据类型（基本类型）

## Java 数据类型

顾名思义，数据类型指定了可以存储在 [Java 变量]中的数据类型。

Java 是一种静态类型语言。这意味着在使用之前必须先声明所有变量。
```java
    int speed;
```
在这里，speed 是一个变量，变量的数据类型是 `int`。

`int` 数据类型决定了 speed 变量只能包含整数。

Java 中预定义了 8 种数据类型，称为原始数据类型。

> **注意**：除了原始数据类型外，还有引用类型（对象类型）。

---

## 8 种原始数据类型

### 1\. boolean 类型

  * `boolean` 数据类型有两个可能的值，即 `true` 或 `false`。
  * 默认值：`false`。
  * 它们通常用于 **真/假** 条件。

### 示例 1: Java boolean 数据类型

```java
class Main {
  public static void main(String[] args) {
        	
    boolean flag = true;
    System.out.println(flag);    // 打印 true
  }
}
```

---

### 2\. byte 类型

  * `byte` 数据类型的值范围为 **-128** 到 **127**（8 位带符号二进制补码整数）。
  * 如果某个变量的值将在 -128 到 127 之间，那么它会被用来节省内存，而不使用 `int`。
  * 默认值：0

### 示例 2: Java byte 数据类型

```java
class Main {
  public static void main(String[] args) {

    byte range;
    range = 124;
    System.out.println(range);    // 打印 124
  }
}
```

---

### 3\. short 类型

  * Java 中的 `short` 数据类型的值范围为 **-32768** 到 **32767**（16 位带符号二进制补码整数）。
  * 如果某个变量的值将在 -32768 和 32767 之间，那么它会被用来节省内存，而不使用其他整数数据类型（`int`、`long`）。
  * 默认值：0

### 示例 3: Java short 数据类型

```java
class Main {
  public static void main(String[] args) {
        	
    short temperature;
    temperature = -200;
    System.out.println(temperature);  // 打印 -200
  }
}
```

---

### 4\. int 类型

  * `int` 数据类型的值范围为 **-231** 到 **231-1**（32 位带符号二进制补码整数）。
  * 如果使用的是 Java 8 或更高版本，可以使用无符号 32 位整数。其最小值为 0，最大值为 232-1。了解更多信息。[如何使用 Java 8 中的无符号整数？](http://stackoverflow.com/questions/25556017/how-to-use-the-unsigned-integer-in-java-8)
  * 默认值：0

### 示例 4: Java int 数据类型

```java
class Main {
  public static void main(String[] args) {
        	
    int range = -4250000;
    System.out.println(range);  // 打印 -4250000
  }
}
```

---

### 5\. long 类型

  * `long` 数据类型的值范围为 **-263** 到 **263-1**（64 位带符号二进制补码整数）。
  * 如果使用的是 Java 8 或更高版本，可以使用无符号 64 位整数。其最小值为 **0**，最大值为 **264-1**。
  * 默认值：0

### 示例 5: Java long 数据类型

```java
class LongExample {
  public static void main(String[] args) {
        	
    long range = -42332200000L;
    System.out.println(range);    // 打印 -42332200000
  }
}
```

注意，在 `-42332200000` 结尾处使用了 `L`，表示这是一个 `long` 类型的整```
* * *

### 2. 过滤器

### Example 7: Java浮点数类型

```java
class Main {
  public static void main(String[] args) {
      
    float number = -42.3f;
    System.out.println(number);  // 输出结果为 -42.3
  }
}
```

注意，在上面的程序中，我们使用了 `-42.3f` 而不是 `-42.3`。这是因为 `-42.3` 是一个 `double` 文字。

要告诉编译器将 `-42.3` 视为 `float` 而不是 `double`，需要使用 f 或 F。

如果你想了解单精度和双精度。 [Java单精度和双精度浮点数](http://stackoverflow.com/questions/801117/whats-the-difference-between-a-single-precision-and-double-precision-floating-p)。

* * *

### 8. 字符类型

  * 它是一个16位的Unicode字符。
  * char 数据类型的最小值是 `'\u0000'` (0)，最大值是 `'\uffff'`。
  * 默认值：`'\u0000'`

### Example 8: Java字符类型

```java
class Main {
  public static void main(String[] args) {
      
    char letter = '\u0051';
    System.out.println(letter);  // 输出结果为 Q
  }
}
```

在这里，`Q` 的 Unicode 值是 **\u0051**。所以，我们得到 `Q` 作为输出结果。

下面是另一个例子：

```java
class Main {
  public static void main(String[] args) {
      
    char letter1 = '9';
    System.out.println(letter1);  // 输出结果为 9
      
    char letter2 = 65;
    System.out.println(letter2);  // 输出结果为 A

  }
}
```

在这里，我们将 `9` 分配为一个字符（由单引号指定）到变量 letter1。然而，letter2 变量被分配为整数数值 `65`（没有单引号）。

因此，`A` 被输出。这是因为 Java 将字符作为整数处理，`A` 的 ASCII 值是 65。要了解更多关于 ASCII 的内容。 [什么是 ASCII 码？](https://www.ascii-code.com/)。

* * *

### 字符串类型

Java 还通过 `java.lang.String` 类提供对字符字符串的支持。在Java中，字符串不是基本类型，它们是对象。例如，

```java
String myString = "Java编程";
```

在这里，myString 是 `String` 类的对象。要了解更多。 [Java字符串]。
```