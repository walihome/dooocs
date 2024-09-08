---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java接口

接口是一个完全抽象的类。它包括一组没有实现体的抽象方法。

我们使用`interface`关键字在Java中创建接口。例如：

```java
interface Language {
  public void getType();

  public void getVersion();
}
```

在上面的例子中，

- `Language`是一个接口。
- 它包含抽象方法：`getType()`和`getVersion()`。

---

## 实现接口

与抽象类类似，我们不能创建接口的对象。

要使用一个接口，其他类必须实现它。我们使用`implements`关键字来实现一个接口。

### 示例1：Java接口

```java
interface Polygon {
  void getArea(int length, int breadth);
}

// 实现Polygon接口
class Rectangle implements Polygon {

  // 实现抽象方法
  public void getArea(int length, int breadth) {
    System.out.println("矩形的面积是 " + (length * breadth));
  }
}

class Main {
  public static void main(String[] args) {
    Rectangle r1 = new Rectangle();
    r1.getArea(5, 6);
  }
}
```

**输出**

```
矩形的面积是 30
```

在上面的例子中，我们创建了一个名为`Polygon`的接口。该接口包含一个抽象方法`getArea()`。

这里，`Rectangle`类实现了`Polygon`接口，并提供了`getArea()`方法的实现。

---

### 示例2：Java接口

```java
// 创建接口
interface Language {
  void getName(String name);
}

// 类实现接口
class ProgrammingLanguage implements Language {

  // 实现抽象方法
  public void getName(String name) {
    System.out.println("编程语言：" + name);
  }
}

class Main {
  public static void main(String[] args) {
    ProgrammingLanguage language = new ProgrammingLanguage();
    language.getName("Java");
  }
}
```

**输出**

```
编程语言：Java
```

在上面的例子中，我们创建了一个名为`Language`的接口。该接口包含一个抽象方法`getName()`。

这里，`ProgrammingLanguage`类实现了该接口，并为该方法提供了实现。

---

## 实现多个接口

在Java中，一个类也可以实现多个接口。例如：

```java
interface A {
  // A的成员
}

interface B {
  // B的成员
}

class C implements A, B {
  // A的抽象成员
  // B的抽象成员
}
```

---

## 扩展接口

与类类似，接口也可以扩展其他接口。使用`extends`关键字来扩展接口。例如：

```java
interface Line {
  // Line接口的成员
}

// 扩展接口
interface Polygon extends Line {
  // Polygon接口的成员
  // Line接口的成员
}
```

这里，`Polygon`接口扩展了`Line`接口。现在，如果任何类实现`Polygon`接口，它应该对`Line`和`Polygon`的所有抽象方法提供实现。

---

### 扩展多个接口

一个接口可以扩展多个接口。例如：

```java
interface A {
  ...
}
interface B {
  ... 
}

interface C extends A, B {
  ...
}
```

---

## Java接口的优势

现在我们知道了什么是接口，让我们了解一下为什么在Java中使用接口。

- 与抽象类类似，接口帮助我们实现了**Java中的抽象**。

  在这里，我们知道`getArea()`计算多边形的面积，但是不同多边形的计算方法可能不同。因此，`getArea()`的实现是彼此独立的。
  
- 接口**提供了类（实现它的类）必须遵循的规范**。

  在我们之前的例子中，我们在接口`Polygon`中使用`getArea()`作为规范。这就像设定一个规则，我们应该能```上面的程序中，我们创建了一个名为Polygon的接口。它包括一个默认方法`getPerimeter()`和一个抽象方法`getArea()`。

我们可以以相同的方式计算所有多边形的周长，因此我们在Polygon中实现了`getPerimeter()`的具体代码。

现在，实现了Polygon接口的所有多边形都可以使用`getPerimeter()`来计算周长。

然而，不同多边形的计算面积规则是不同的。因此，`getArea()`只是一个没有具体实现的抽象方法。

任何实现了Polygon接口的类都必须提供`getArea()`的具体实现。```