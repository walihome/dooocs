---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java枚举

在Java中，枚举（Enumeration的缩写）是一种具有固定常量值集合的类型。我们使用`enum`关键字来声明枚举。例如，

```java
enum Size { 
   SMALL, MEDIUM, LARGE, EXTRALARGE 
}
```

这里，我们创建了一个名为Size的枚举。它包含了固定的值SMALL、MEDIUM、LARGE和EXTRALARGE。

大括号内的这些值被称为枚举常量（values）。

> **注意：** 枚举常量通常用大写表示。

---

### 示例1：Java枚举

```java
enum Size {
   SMALL, MEDIUM, LARGE, EXTRALARGE
}

class Main {
   public static void main(String[] args) {
      System.out.println(Size.SMALL);
      System.out.println(Size.MEDIUM);
   }
}
```

**输出**

```
SMALL
MEDIUM
```

从上面的示例中可以看到，我们使用枚举名称来访问常量值。

我们还可以创建枚举类型的变量。例如，

```java
Size pizzaSize;
```

这里，pizzaSize是Size类型的变量。它只能被分配4个值。

```java
pizzaSize = Size.SMALL;
pizzaSize = Size.MEDIUM;
pizzaSize = Size.LARGE;
pizzaSize = Size.EXTRALARGE;
```

---

### 示例2：带有switch语句的Java枚举

```java
enum Size {
 SMALL, MEDIUM, LARGE, EXTRALARGE
}

class Test {
 Size pizzaSize;
 public Test(Size pizzaSize) {
   this.pizzaSize = pizzaSize;
 }
 public void orderPizza() {
   switch(pizzaSize) {
     case SMALL:
       System.out.println("我点了一个小号比萨。");
       break;
     case MEDIUM:
       System.out.println("我点了一个中号比萨。");
       break;
     default:
       System.out.println("我不知道应该点哪个。");
       break;
   }
 }
}

class Main {
 public static void main(String[] args) {
   Test t1 = new Test(Size.MEDIUM);
   t1.orderPizza();
 }
}
```

**输出**

```
我点了一个中号比萨。
```

在上面的程序中，我们创建了一个Size类型的枚举。然后声明了一个名为pizzaSize的变量，类型为Size。

在这里，变量pizzaSize只能被分配4个值（SMALL、MEDIUM、LARGE、EXTRALARGE）。

注意语句：

```java
Test t1 = new Test(Size.MEDIUM);
```

它将调用Test类内的`Test()`构造函数。现在，变量pizzaSize被赋予了MEDIUM常量。

根据这个值，执行了其中一个[switch语句](https://www.dooocs.com/img/java-programming/switch-statement)的case。

---

## Java中的枚举类

在Java中，枚举类型被视为一种特殊类型的类。它是在Java 5发布时引入的。

枚举类可以像普通类一样包含方法和字段。

```java
enum Size {
    元素1, 元素2, …, 元素N;
    
    // 方法和字段	
}
```

当我们创建一个枚举类时，编译器会为每个枚举常量创建实例（对象）。此外，所有的枚举常量都是默认的`public static final`。

---

### 示例3：Java枚举类

```java
enum Size{
  SMALL, MEDIUM, LARGE, EXTRALARGE;

  public String getSize() {

    // this将引用对象SMALL
    switch(this) {
      case SMALL:
        return "小号";
  
      case MEDIUM:
        return "中号";
  
      case LARGE:
        return "大号";
  
      case EXTRALARGE:
        return "超大号";
  
      default:
        return null;
      }
   }

  public static void main(String[] args) {

    // 调用getSize()
    // 使用对象SMALL
    System.out.println("比萨的尺寸是" + Size.SMALL.getSize());
  }
}
```

**输出**

```
比萨的尺