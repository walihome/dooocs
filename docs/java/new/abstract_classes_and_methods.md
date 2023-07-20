
# Java抽象类和抽象方法

## Java抽象类

在Java中，抽象类不能被实例化（我们不能创建抽象类的对象）。我们使用`abstract`关键字来声明一个抽象类。例如，

```java
// 创建一个抽象类
abstract class Language {
  // 字段和方法
}
...

// 尝试创建Language对象
// 抛出错误
Language obj = new Language();
```

抽象类既可以有常规方法，也可以有抽象方法。例如，

```java
abstract class Language {

  // 抽象方法
  abstract void method1();

  // 常规方法
  void method2() {
    System.out.println("这是一个常规方法");
  }
}
```

要了解非抽象方法，请访问[Java方法](https://www.dooocs.com/img/java-programming/methods)。在这里，我们将学习抽象方法。

---

## Java抽象方法

没有方法体的方法称为抽象方法。我们使用相同的`abstract`关键字来创建抽象方法。例如，

```java
abstract void display();
```

这里，`display()`是一个抽象方法。`display()`的方法体被替换为`;`。

如果一个类包含一个抽象方法，则该类应该被声明为抽象。否则，将会生成错误。例如，

```java
// 错误
// 必须将类声明为抽象
class Language {

  // 抽象方法
  abstract void method1();
}
```

---

### 示例：Java抽象类和方法

虽然无法实例化抽象类，但我们可以从中创建子类。然后，我们可以使用子类的对象访问抽象类的成员。例如，

```java
abstract class Language {

  // 抽象类的方法
  public void display() {
    System.out.println("这是Java编程");
  }
}

class Main extends Language {

  public static void main(String[] args) {

    // 创建Main的对象
    Main obj = new Main();

    // 使用Main类的对象访问抽象类的方法
    obj.display();
  }
}
```

**输出**
```
这是Java编程
```

在上面的示例中，我们创建了一个名为Language的抽象类。该类包含一个常规方法`display()`。

我们创建了继承自抽象类的子类Main。请注意以下语句，

```java
obj.display();
```

这里，obj是子类Main的对象。我们使用对象obj来调用抽象类的方法。

---

## 实现抽象方法

如果抽象类包含任何抽象方法，则从抽象超类继承的所有子类都必须提供抽象方法的实现。例如，

```java
abstract class Animal {
  abstract void makeSound();

  public void eat() {
    System.out.println("我会吃东西。");
  }
}

class Dog extends Animal {

  // 提供抽象方法的实现
  public void makeSound() {
    System.out.println("汪汪汪");
  }
}

class Main {
  public static void main(String[] args) {

    // 创建Dog类的对象
    Dog d1 = new Dog();

    d1.makeSound();
    d1.eat();
  }
}
```

**输出**
```
汪汪汪
我会吃东西。
```

在上面的示例中，我们创建了一个抽象类Animal。该类包含一个抽象方法`makeSound()`和一个非抽象方法`eat()`。

我们从超类Animal继承了子类Dog。在这里，子类Dog为抽象方法`makeSound()`提供了实现。

然后，我们使用Dog类的对象d1来调用方法`makeSound()`和`eat()`。

> **注意**：如果Dog类不提供抽象方法`makeSound()`的实现，则Dog也应该声明为抽象。这是因为子类Dog从Animal继承了`makeSound()`。

---

### 访问抽象类的构造函数

抽象类可以像普通类一样拥有构造函数。我们可以使用`super`关键字从子类中访问抽象类的构造