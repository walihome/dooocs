---
title: 方法重载
colla: true
order: 50
head:
  - - meta
    - name: dooocs
    - content: 最详细的文档库
---
# Java 方法重载

在Java中，如果两个或多个[方法](https://www.dooocs.com/img/java-programming/methods "Java Methods")在参数上有所不同（参数数量不同、参数类型不同或两者都不同），则它们可以拥有相同的名称。这些方法被称为重载方法，这个特性被称为方法重载。例如：

```java
void func() { ... }
void func(int a) { ... }
float func(double a) { ... }
float func(int a, float b) { ... }
```

在这里，`func()` 方法是被重载的。这些方法有相同的名称，但接受不同的参数。

> **注意**：上述方法的返回类型是不同的。这是因为方法重载与返回类型无关。重载方法可以具有相同或不同的返回类型，但它们必须在参数上有所区别。

* * *

## 为什么使用方法重载？

假设你需要对给定的数字进行加法运算，但可能会有任意数量的参数（为了简单起见，假设只有2个或3个参数）。

为了完成这个任务，你可以分别创建两个方法 `sum2num(int, int)` 和 `sum3num(int, int, int)`，用于处理两个和三个参数。然而，其他程序员以及将来的你可能会因为这两个方法的行为相同但名称不同而感到困惑。

更好的方法是通过方法重载来完成这个任务。根据传入的参数，会调用其中一个重载的方法。这有助于提高程序的可读性。

* * *

## 如何在Java中执行方法重载？

以下是执行方法重载的不同方式：

### 1\. 通过改变参数数量来进行重载

```java
class MethodOverloading {
    private static void display(int a){
        System.out.println("Arguments: " + a);
    }

    private static void display(int a, int b){
        System.out.println("Arguments: " + a + " and " + b);
    }

    public static void main(String[] args) {
        display(1);
        display(1, 4);
    }
}
```

**输出**：
```
Arguments: 1
Arguments: 1 and 4
```

### 2\. 通过改变参数的数据类型来进行重载

```java
class MethodOverloading {

    // 这个方法接受 int 类型的参数
    private static void display(int a){
        System.out.println("Got Integer data.");
    }

    // 这个方法接受 String 对象作为参数
    private static void display(String a){
        System.out.println("Got String object.");
    }

    public static void main(String[] args) {
        display(1);
        display("Hello");
    }
}
```

**输出**：
```
Got Integer data.
Got String object.
```

在这里，两个重载的方法都接受一个参数。然而，一个接受 `int` 类型的参数，而另一个接受 `String` 对象作为参数。

* * *

让我们看一个真实的例子：

```java
class HelperService {

    private String formatNumber(int value) {
        return String.format("%d", value);
    }

    private String formatNumber(double value) {
        return String.format("%.3f", value);
    }

    private String formatNumber(String value) {
        return String.format("%.2f", Double.parseDouble(value));
    }

    public static void main(String[] args) {
        HelperService hs = new HelperService();
        System.out.println(hs.formatNumber(500));
        System.out.println(hs.formatNumber(89.9934));
        System.out.println(hs.formatNumber("550"));
    }
}
```

当你运行这个程序时，输出结果将会是：

```
500
89.993
550.00
```

* * *

> **注意**：在Java中，你也可以像方法一样重载构造函数。

**推荐阅读：**[Java 构造函数重载](https://www.dooocs.com/img/java-programming/constructors#overloading "Java Constructor Overloading")

* * *

### 重要的要点

  * 如果两个或多个方法在同一个类内部具有相同的名称但接受不同的参数，则被称为方法重载。
  *