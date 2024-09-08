---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java多态性

多态性是面向对象编程中的一个重要概念，它简单地意味着多种形式。

也就是说，在不同的场景下，同一实体（方法、运算符或对象）可以执行不同的操作。

* * *

## 示例：Java多态性

```java
class Polygon {

  // 渲染形状的方法
  public void render() {
    System.out.println("渲染多边形...");
  }
}

class Square extends Polygon {

  // 渲染正方形
  public void render() {
    System.out.println("渲染正方形...");
  }
}

class Circle extends Polygon {

  // 渲染圆形
  public void render() {
    System.out.println("渲染圆形...");
  }
}

class Main {
  public static void main(String[] args) {
    
    // 创建一个正方形的对象
    Square s1 = new Square();
    s1.render();

    // 创建一个圆形的对象
    Circle c1 = new Circle();
    c1.render();
  }
}
```

**输出**

```
渲染正方形...
渲染圆形...
```

在上面的示例中，我们创建了一个超类Polygon和两个子类Square和Circle。注意到了`render()`方法的使用。

`render()`方法的主要目的是渲染形状。然而，渲染正方形的过程与渲染圆形的过程不同。

因此，`render()`方法在不同的类中表现出不同的行为。或者，我们可以说`render()`是多态的。

* * *

### 为什么要使用多态性？

多态性允许我们创建一致的代码。在前面的示例中，我们也可以创建不同的方法:`renderSquare()`和`renderCircle()`来分别渲染正方形和圆形。

这样也能够正常工作。然而，对于每个形状，我们需要创建不同的方法。这会使我们的代码不一致。

为了解决这个问题，在Java中的多态性允许我们创建一个单一的方法`render()`，它会根据不同的形状表现出不同的行为。

> **注意**：`print()`方法也是多态性的一个例子。它用于打印不同类型的值，如`char`、`int`、`string`等。

* * *

在Java中，我们可以通过以下几种方式实现多态性：

  1. [方法重写](https://www.dooocs.com/img/java-programming/method-overriding)
  2. [方法重载](https://www.dooocs.com/img/java-programming/method-overloading)
  3. 运算符重载



* * *

## Java方法重写

在Java中的继承中，如果超类和子类中存在相同的方法。那么，子类中的方法将覆盖超类中的相同方法。这被称为方法重写。

在这种情况下，同一方法在超类中执行一种操作，在子类中执行另一种操作。例如，

### 示例1：使用方法重写的多态性

```java
class Language {
  public void displayInfo() {
    System.out.println("普通英语语言");
  }
}

class Java extends Language {
  @Override
  public void displayInfo() {
    System.out.println("Java编程语言");
  }
}

class Main {
  public static void main(String[] args) {

    // 创建一个Java类的对象
    Java j1 = new Java();
    j1.displayInfo();

    // 创建一个Language类的对象
    Language l1 = new Language();
    l1.displayInfo();
  }
}
```

**输出**：

```
Java编程语言
普通英语语言
```

在上面的示例中，我们创建了一个名为Language的超类和一个名为Java的子类。在这里，`displayInfo()`方法同时存在于Language和Java中。

`displayInfo()`的作用是打印信息。然而，在Language和Java中，它分别打印不同的信息。

根据调用方法的对象，打印相应的信息。

![当