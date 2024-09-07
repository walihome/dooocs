# Java方法覆盖

在上一篇教程中，我们学习了继承。继承是面向对象编程的一个特性，它允许我们从现有类（超类）派生出一个新类（子类）。子类会继承超类的属性和方法。

现在，如果超类和子类中都定义了同名的方法，那么子类中的方法将会覆盖超类中的方法。这就是方法覆盖。

* * *

### 示例1：方法覆盖

```java
class Animal {
   public void displayInfo() {
      System.out.println("我是一个动物。");
   }
}

class Dog extends Animal {
   @Override
   public void displayInfo() {
      System.out.println("我是一只狗。");
   }
}

class Main {
   public static void main(String[] args) {
      Dog d1 = new Dog();
      d1.displayInfo();
   }
}
```

**输出结果**：
```
我是一只狗。
```

在以上程序中，`displayInfo()` 方法同时存在于动物超类和狗子类中。

当我们使用d1对象（子类的对象）调用`displayInfo()`时，子类Dog中的方法被调用。子类中的`displayInfo()`方法覆盖了超类中同名的方法。

请注意例子中使用了`@Override`注解。在Java中，注解是用来向编译器提供元数据信息的。这里，`@Override`注解告诉编译器该注解后面的方法覆盖了超类中的方法。

使用`@Override`并不是强制性的。然而，当我们使用它时，方法必须遵循所有覆盖的规则，否则编译器会生成错误。

* * *

## Java覆盖规则

  * 超类和子类必须拥有相同的方法名称、返回类型和参数列表。
  * 不能覆盖声明为`final`和`static`的方法。
  * 我们应该始终覆盖超类的抽象方法（将在后续教程中讨论）。

* * *

## Java覆盖中的super关键字

在Java中进行覆盖时经常会出现一个问题：

**在覆盖后，我们能否访问超类中的方法？**

答案是**可以**。为了从子类中访问超类的方法，我们使用`super`关键字。

### 示例2：使用super关键字

```java
class Animal {
   public void displayInfo() {
      System.out.println("我是一个动物。");
   }
}

class Dog extends Animal {
   public void displayInfo() {
      super.displayInfo();
      System.out.println("我是一只狗。");
   }
}

class Main {
   public static void main(String[] args) {
      Dog d1 = new Dog();
      d1.displayInfo();
   }
}
```

**输出结果**：
```
我是一个动物。
我是一只狗。
```

在上面的例子中，子类Dog覆盖了超类Animal的`displayInfo()`方法。

当我们使用Dog子类的d1对象调用`displayInfo()`方法时，只会调用子类中的方法，不会调用超类中的方法。

在Dog子类的`displayInfo()`方法内部，我们使用了`super.displayInfo()`来调用超类的`displayInfo()`方法。

* * *

需要注意的是，Java中的构造函数是不会被继承的。因此，在Java中没有构造函数的覆盖概念。

然而，我们可以从子类中调用超类的构造函数。为此，我们使用`super()`。要了解更多信息，请访问[Java超类关键字](https://www.dooocs.com/img/java-programming/super-keyword "Java super keyword")。

* * *

## 方法覆盖中的访问修饰符

超类和其子类中相同的方法可以具有不同的访问修饰符。但是有一个限制。

我们只能在子类中使用比超类