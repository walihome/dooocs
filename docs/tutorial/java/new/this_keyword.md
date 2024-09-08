---
title: this 关键字
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 中的 this 关键字

## this 关键字

在 Java 中，this 关键字用于在方法或构造函数中引用当前对象。例如，

```java
class Main {
    int instVar;

    Main(int instVar){
        this.instVar = instVar;
        System.out.println("this reference = " + this);
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("object reference = " + obj);
    }
}
```

**输出**：

```
this reference = Main@23fc625e
object reference = Main@23fc625e
```

在上面的示例中，我们创建了一个名为 obj 的 Main 类对象。然后打印了对象 obj 和类的 `this` 关键字的引用。

在这里，我们可以看到 obj 和 `this` 的引用是相同的。这意味着 this 实际上就是指向当前对象的引用。

* * *

## 使用 this 关键字的情况

有许多常见情况下会使用 `this` 关键字。

## 使用 this 解决变量名歧义问题

在 Java 中，在同一作用域（类作用域或方法作用域）中不允许声明两个或更多具有相同名称的变量。但实例变量和参数可以具有相同的名称。例如，

```java
class MyClass {
    // 实例变量
    int age;

    // 参数
    MyClass(int age){
        age = age;
    }
}
```

在上面的程序中，实例变量和参数都具有相同的名称：age。这里，Java 编译器由于名称歧义而感到困惑。

在这种情况下，我们使用 this 关键字。例如，

首先，让我们看一个不使用 `this` 关键字的示例：

```java
class Main {

    int age;
    Main(int age){
        age = age;
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("obj.age = " + obj.age);
    }
}
```

**输出**：

```
obj.age = 0
```

在上面的示例中，我们向构造函数传递了值为 `8` 的参数。然而，我们输出的是 `0`。这是因为 Java 编译器由于实例变量和参数之间的名称歧义而感到困惑。

现在，让我们使用 `this` 关键字重写上面的代码。

```java
class Main {

    int age;
    Main(int age){
        this.age = age;
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("obj.age = " + obj.age);
    }
}
```

**输出**：

```
obj.age = 8
```

现在，我们得到了预期的输出。这是因为当调用构造函数时，构造函数内部的 `this` 被调用构造函数的对象 obj 替换。因此，将 age 变量赋值为 8。

此外，如果参数的名称和实例变量的名称不同，编译器会自动添加 this 关键字。例如，代码：

```java
class Main {
    int age;

    Main(int i) {
        age = i;
    }
}
```

与以下代码等效：

```java
class Main {
    int age;

    Main(int i) {
        this.age = i;
    }
}
```

* * *

### 用于 Getter 和 Setter 方法的 this 关键字

`this` 关键字在类的 _setter 和 getter 方法_ 中也经常使用。例如：

```java
class Main {
   String name;

   // 设置方法
   void setName( String name ) {
       this.name = name;
   }

   // 获取方法
   String getName(){
       return this.name;
   }

   public static void main( String[] args ) {
       Main obj = new Main();

       // 调用设置方法和获取方法
       obj.setName("Toshiba");
       System.out.println("obj.name: "+obj.getName());
   }
}
```

**输出**：

```
obj.name: Toshiba
```

在这里，我们使用了 `this` 关键字：

  * 在设置方法内部分配值