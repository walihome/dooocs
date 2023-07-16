# Java构造函数

## 什么是构造函数？

Java中的构造函数类似于在创建类的对象时调用的方法。

与[Java方法](/java-programming/methods)不同，构造函数的名称与类名相同，并且没有返回类型。例如，

```java
class Test {
  Test() {
    // 构造函数体
  }
}
```

这里，`Test()`是一个构造函数。它与类名相同并且没有返回类型。

**推荐阅读：** [为什么构造函数不返回值](https://stackoverflow.com/questions/1788312/why-do-constructors-not-return-values)

* * *

## 示例 1：Java构造函数

```java
class Main {
  private String name;

  // 构造函数
  Main() {
    System.out.println("Constructor Called:");
    name = "Programiz";
  }

  public static void main(String[] args) {

    // 创建Main类的对象时调用构造函数
    Main obj = new Main();
    System.out.println("The name is " + obj.name);
  }
}

**输出** :
```
Constructor Called:
The name is Programiz

在上面的示例中，我们创建了一个名为`Main()`的构造函数。在构造函数内部，我们初始化了name变量的值。

注意创建Main类对象的语句。

```java
Main obj = new Main();
```

在这里，当创建对象时，会调用`Main()`构造函数。然后，name变量的值被初始化。

因此，程序将打印出name变量的值为`Programiz`。

* * *

### 构造函数的类型

在Java中，构造函数可以分为3种类型：

1. 无参构造函数
2. 带参数的构造函数
3. 默认构造函数

* * *

## 1\. Java无参构造函数

与方法类似，Java构造函数可以有或者没有任何参数。

如果一个构造函数不接受任何参数，则称其为无参构造函数。例如，

```java
private Constructor() {
   // 构造函数体
}
```

* * *

### 示例 2：Java私有无参构造函数

```java
class Main {

  int i;

  // 无参构造函数
  private Main() {
    i = 5;
    System.out.println("Constructor is called");
  }

  public static void main(String[] args) {

    // 调用无参构造函数
    Main obj = new Main();
    System.out.println("Value of i: " + obj.i);
  }
}

**输出** :
```
Constructor is called
Value of i: 5

在上面的示例中，我们创建了一个名为`Main()`的构造函数。在这里，构造函数不接受任何参数，因此被称为无参构造函数。

**请注意我们将构造函数声明为私有。**

一旦构造函数被声明为`private`，就不能从类外部访问它。因此，使用私有构造函数禁止从类外部创建对象。

在这里，我们在同一个类内部创建了对象。因此，程序能够访问构造函数。要了解更多信息，请访问[Java实现私有构造函数](/java-programming/examples/private-constructor-implementation)。

但是，如果我们想在类外部创建对象，则需要将构造函数声明为`public`。

### 示例 3：Java公共无参构造函数

```java
class Company {
  String name;

  // 公共构造函数
  public Company() {
    name = "Programiz";
  }
}

class Main {
  public static void main(String[] args) {

    // 在另一个类中创建对象
    Company obj = new Company();
    System.out.println("Company name = " + obj.name);
  }
}

**输出** :
```
Company name = Programiz

**推荐阅读：** [Java访问修饰符](/java-programming/access-modifiers)

* * *

## 2\. Java带参数的构造函数

Java构造函数还可以接受一个或多个参数。此类构造函数称为带参数的构造函数（带参数的构造函数）。

### 示例 4：带参数