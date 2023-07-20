# Java 访问修饰符

## 什么是访问修饰符？

在Java中，访问修饰符用于设置类、接口、变量、方法、构造函数、数据成员和setter方法的可访问性（可见性）。例如，

```java
class Animal {
    public void method1() {...}

   private void method2() {...}
}
```

在上面的例子中，我们声明了两个方法：method1()和method2()。在这里：

* method1是`public` - 这意味着它可以被其他类访问。
* method2是`private` - 这意味着它不能被其他类访问。

请注意关键字`public`和`private`。它们是Java中的访问修饰符。它们也被称为可见性修饰符。

> **注意**：您无法设置getter方法的访问修饰符。

---

## 访问修饰符的类型

在了解访问修饰符的类型之前，请确保您了解[Java Packages](https://www.dooocs.com/img/java-programming/packages-import "Java Packages")。

Java有四个访问修饰符关键字，它们是：

**修饰符** | **描述**  
---|---  
默认 | 声明只在包内可见（包私有）  
私有 | 声明只在类内可见  
受保护 | 声明在包内或所有子类中可见  
公共 | 声明在任何地方都可见  

---

## 默认访问修饰符

如果我们没有明确为类、方法、变量等指定任何访问修饰符，那么默认情况下将考虑默认访问修饰符。例如，

```java
package defaultPackage;
class Logger {
    void message(){
        System.out.println("This is a message");
    }
}
```

在这里，Logger类具有默认访问修饰符。并且该类对于属于defaultPackage包的所有类都是可见的。但是，如果我们尝试在defaultPackage之外的另一个类中使用Logger类，将会得到编译错误。

---

## 私有访问修饰符

当变量和方法被声明为`private`时，它们无法在类外部访问。例如，

```java
class Data {
    // private variable
    private String name;
}

public class Main {
    public static void main(String[] main){

        // create an object of Data
        Data d = new Data();

        // access private variable and field from another class
        d.name = "Programiz";
    }
}
```

在上面的例子中，我们声明了一个名为name的私有变量。当我们运行程序时，将得到以下错误：

```
Main.java:18: error: name has private access in Data
        d.name = "Programiz";
         ^
```

产生错误的原因是我们尝试从Main类访问Data类的私有变量。

您可能会想知道如果我们需要访问那些私有变量怎么办。在这种情况下，我们可以使用getter和setter方法。例如，

```java
class Data {
    private String name;

    // getter method
    public String getName() {
        return this.name;
    }
    // setter method
    public void setName(String name) {
        this.name= name;
    }
}
public class Main {
    public static void main(String[] main){
        Data d = new Data();

        // access the private variable using the getter and setter
        d.setName("Programiz");
        System.out.println(d.getName());
    }
}

**输出**:
```
The name is Programiz

在上面的例子中，我们有一个名为name的私有变量。为了从外部类访问该变量，我们使用了方法：`getName()`和`setName()`。这些方法在Java中被称为getter和setter。

在这里，我们在setName()内部使用了this关键字来引用类的变量。要了解更多关于this关键字的内容，请访问[Java this 关键