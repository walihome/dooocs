# Java继承

继承是面向对象编程的重要特性之一，它允许我们从现有类创建一个新类。

被创建的新类称为**子类**（child或derived class），而从中派生子类的现有类称为**父类**（parent或base class）。

在Java中，使用`extends`关键字来实现继承。例如，

```java
class Animal {
  // 方法和字段
}

// 使用extends关键字
// 进行继承
class Dog extends Animal {

  // Animal类的方法和字段
  // Dog类的方法和字段
}
```

在上面的例子中，Dog类通过继承Animal类的方法和字段而创建。

在这里，Dog是子类，Animal是父类。

---

### 示例1：Java继承

```java
class Animal {

  // 父类的字段和方法
  String name;
  public void eat() {
    System.out.println("我能吃");
  }
}

// 从Animal继承
class Dog extends Animal {

  // 子类的新方法
  public void display() {
    System.out.println("我的名字是" + name);
  }
}

class Main {
  public static void main(String[] args) {

    // 创建子类的对象
    Dog labrador = new Dog();

    // 访问父类的字段
    labrador.name = "Rohu";
    labrador.display();

    // 使用子类的对象调用父类的方法
    labrador.eat();
  }
}
```

**输出**

```
我的名字是Rohu
我能吃
```

在上面的例子中，我们从父类Animal派生了一个子类Dog。注意以下语句，

```java
labrador.name = "Rohu";

labrador.eat();
```

这里，labrador是Dog的一个对象。然而，name和`eat()`是Animal类的成员。

由于Dog继承了Animal的字段和方法，我们能够使用Dog的对象来访问字段和方法。

![子类Dog可以访问父类Animal的字段和方法。](https://cdn.programiz.com/sites/tutorial2program/files/java-inheritance-implementation.png)  
Java继承实现

---

## is-a关系

在Java中，继承是一种**is-a**关系。也就是说，只有在两个类之间存在is-a关系时才会使用继承。例如，

  * **Car** 是 **Vehicle**
  * **Orange** 是 **Fruit**
  * **Surgeon** 是 **Doctor**
  * **Dog** 是 **Animal**

在这里，**Car** 可以继承自 **Vehicle**，**Orange** 可以继承自 **Fruit**，等等。

---

## Java继承中的方法重写

在**示例1**中，我们看到了子类的对象可以访问父类的方法。

**但是，如果父类和子类中都存在相同的方法，会发生什么呢？**

在这种情况下，子类中的方法会覆盖父类中的方法。这个概念在Java中被称为方法重写。

### 示例2：Java继承中的方法重写

```java
class Animal {

  // 父类中的方法
  public void eat() {
    System.out.println("我能吃");
  }
}

// Dog继承Animal
class Dog extends Animal {

  // 重写eat()方法
  @Override
  public void eat() {
    System.out.println("我吃狗粮");
  }

  // 子类中的新方法
  public void bark() {
    System.out.println("我会叫");
  }
}

class Main {
  public static void main(String[] args) {

    // 创建子类的对象
    Dog labrador = new Dog();

    // 调用eat()方法
    labrador.eat();
    labrador.bark();
  }
}
```

**输出**

```
我吃狗粮
我会叫
```

在上面的例子中，`eat()`方法同时存在于父类Animal和子类Dog中。

这里，我们创建了一个