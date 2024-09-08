---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java嵌套类和内部类

在Java中，你可以在一个类中定义另一个类。这样的类被称为“嵌套类”。例如：

```java
class OuterClass {
    // ...
    class NestedClass {
        // ...
    }
}
```

在Java中，有两种类型的嵌套类：

* 非静态嵌套类（内部类）
* 静态嵌套类

**推荐阅读：**

* [Java访问修饰符](https://www.dooocs.com/img/java-programming/access-modifiers "Java访问修饰符")
* [Java静态关键字](https://www.dooocs.com/img/java-programming/static-keyword "Java静态关键字")

首先我们来看一下非静态嵌套类。

## 非静态嵌套类（内部类）

非静态嵌套类是指位于另一个类内部的类。它可以访问外部类（外部类）的成员。它通常被称为“内部类”。

由于“内部类”存在于外部类内部，所以你必须首先实例化外部类，然后才能实例化内部类。

以下示例演示了如何在Java中声明内部类。

### 示例1：内部类

```java
class CPU {
    double price;
    // 嵌套类
    class Processor {

        // 嵌套类的成员
        double cores;
        String manufacturer;

        double getCache() {
            return 4.3;
        }
    }

    // 嵌套保护类
    protected class RAM {

        // 保护嵌套类的成员
        double memory;
        String manufacturer;

        double getClockSpeed() {
            return 5.5;
        }
    }
}

public class Main {
    public static void main(String[] args) {

        // 创建外部类CPU的对象
        CPU cpu = new CPU();

        // 使用外部类创建内部类Processor的对象
        CPU.Processor processor = cpu.new Processor();

        // 使用外部类CPU创建内部类RAM的对象
        CPU.RAM ram = cpu.new RAM();
        System.out.println("处理器缓存 = " + processor.getCache());
        System.out.println("内存时钟速度 = " + ram.getClockSpeed());
    }
}
```

**输出结果**：

```
处理器缓存 = 4.3
内存时钟速度 = 5.5
```

在上面的程序中，有两个嵌套类：Processor和RAM，它们位于外部类CPU内部。我们可以将内部类声明为protected。因此，我们将RAM类声明为protected。

在Main类内部，

* 首先创建了一个名为cpu的外部类CPU的实例。
* 然后使用外部类的实例创建了内部类的对象：

```java
CPU.Processor processor = cpu.new Processor;
CPU.RAM ram = cpu.new RAM();
```

> **注意** ：我们使用点号（`.`）运算符使用外部类创建内部类的实例。

### 访问内部类中的外部类成员

我们可以使用关键字`this`来访问外部类的成员。如果你想了解更多关于关键字`this`的内容，请访问[Java this关键字](https://docs.oracle.com/javase/tutorial/java/javaOO/thiskey.html)。

### 示例2：访问成员

```java
class Car {
    String carName;
    String carType;

    // 使用构造函数给变量赋值
    public Car(String name, String type) {
        this.carName = name;
        this.carType = type;
    }

    // 私有方法
    private String getCarName() {
        return this.carName;
    }

    // 内部类
    class Engine {
        String engineType;

        void setEngine() {

            // 访问Car的carType属性
            if (Car.this.carType.equals("4WD")) {

                // 调用Car的getCarName方法
                if (Car.this.getCarName().equals("Crysler")) {
                    this.engineType = "较小";
                } else {
                    this.engineType = "