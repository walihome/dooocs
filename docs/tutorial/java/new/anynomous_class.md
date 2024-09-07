# Java匿名类

在Java中，一个类可以包含另一个称为嵌套类的类。可以创建一个没有名称的嵌套类。

没有名称的嵌套类被称为匿名类。

匿名类必须在另一个类内部定义。因此，它也被称为匿名内部类。其语法如下：

```java
class outerClass {

    // 定义匿名类
    object1 = new Type(parameterList) {
         // 匿名类的主体
    };
}
```

匿名类通常扩展子类或实现接口。

在这里，**Type** 可以是：

1. 一个匿名类扩展的超类
2. 一个匿名类实现的接口

上面的代码在运行时创建了一个名为 `object1` 的匿名类的对象。

**注意：** 匿名类在表达式内部定义。因此，在匿名类的末尾使用分号表示表达式的结束。

---

## 示例1：匿名类扩展类

```java
class Polygon {
   public void display() {
      System.out.println("Inside the Polygon class");
   }
}

class AnonymousDemo {
   public void createClass() {

      // 创建扩展类Polygon的匿名类
      Polygon p1 = new Polygon() {
         public void display() {
            System.out.println("Inside an anonymous class.");
         }
      };
      p1.display();
   }
}

class Main {
   public static void main(String[] args) {
       AnonymousDemo an = new AnonymousDemo();
       an.createClass();
   }
}
```

**输出：**

```
Inside an anonymous class.
```

在上面的示例中，我们创建了一个名为 `Polygon` 的类。它有一个名为 `display()` 的方法。

然后我们创建了一个匿名类，该类扩展了 `Polygon` 类并重写了 `display()` 方法。

当我们运行程序时，会创建匿名类的对象 `p1`。然后对象调用匿名类的 `display()` 方法。

---

## 示例2：匿名类实现接口

```java
interface Polygon {
   public void display();
}

class AnonymousDemo {
   public void createClass() {

      // 匿名类实现接口
      Polygon p1 = new Polygon() {
         public void display() {
            System.out.println("Inside an anonymous class.");
         }
      };
      p1.display();
   }
}

class Main {
   public static void main(String[] args) {
      AnonymousDemo an = new AnonymousDemo();
      an.createClass();
   }
}
```

**输出：**

```
Inside an anonymous class.
```

在上面的示例中，我们创建了一个匿名类，该类实现了 `Polygon` 接口。

---

## 匿名类的优势

在匿名类中，只有在需要时才创建对象。也就是说，对象被创建用于执行某些特定任务。例如：

```java
Object = new Example() {
   public void display() {
      System.out.println("Anonymous class overrides the method display().");
   }
};
```

在这里，当我们需要覆盖 `display()` 方法时，会动态地创建一个匿名类的对象。

匿名类还帮助我们使代码更简洁。