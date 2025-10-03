---
title: 类、属性、方法
category: Java
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 类、属性、方法

## 💡 什么是类(Class)?

你有没有想过,如果要在程序里表示一辆汽车,应该怎么做呢?

汽车有很多特征:颜色、品牌、速度等,还有很多功能:启动、加速、刹车等。如果用单独的变量来存储这些信息,会非常混乱。这时候就需要**类(Class)**了!

**类就像是一张设计图纸**。就像建筑师画的房屋设计图,类定义了某种事物应该有什么特征和功能。根据这张图纸,你可以建造出无数个真实的房子(对象)。

::: tip 关键理解
- **类(Class)** = 设计图纸 = 定义模板
- **对象(Object)** = 根据图纸造出的实际东西 = 类的实例
- **属性(Field/Attribute)** = 事物的特征(比如汽车的颜色)
- **方法(Method)** = 事物能做的事情(比如汽车能启动)
:::

## 📝 定义你的第一个类

让我们从最简单的类开始。我们来创建一个表示"汽车"的类。

### 步骤 1: 创建文件

首先,创建一个名为 `Car.java` 的文件。

::: warning 重要规则
在 Java 中,**类名必须与文件名完全一致**,包括大小写!如果类名是 `Car`,文件名就必须是 `Car.java`。
:::

### 步骤 2: 编写最简单的类

```java
// 定义一个名为 Car 的类 define a class named Car
public class Car {
    // 类的内容写在这对花括号里 class content goes inside these curly braces
}
```

**代码解析**:
- `public` - **访问修饰符(Access Modifier)**,表示这个类可以被其他代码访问
- `class` - **关键字(Keyword)**,告诉 Java 我们要定义一个类
- `Car` - **类名(Class Name)**,必须以大写字母开头(这是 Java 的命名规范)
- `{ }` - **花括号(Curly Braces)**,类的所有内容都写在这对花括号里面

恭喜!你已经创建了一个类,虽然它现在还是空的,什么都不能做。

## 🏷️ 给类添加属性(Fields)

现在我们的类还是空的,就像一张空白的设计图。让我们给汽车添加一些特征吧!

### 什么是类字段?

**类字段(Field)** 也叫**属性(Attribute)** 或 **成员变量(Member Variable)**,用来存储对象的特征数据。就像汽车有颜色、品牌这些属性一样。

```java
// 定义一个有属性的 Car 类 define Car class with fields
public class Car {
    // 定义汽车的颜色属性 define color field
    String color;
    
    // 定义汽车的品牌属性 define brand field
    String brand;
    
    // 定义汽车的速度属性 define speed field
    int speed;
}
```

**代码解析**:
- `String color;` - 定义一个类型为 **字符串(String)** 的属性,名为 `color`,用来存储颜色
- `String brand;` - 存储汽车的品牌名称
- `int speed;` - 定义一个类型为 **整数(Integer)** 的属性,存储速度

::: tip 命名规范
- 类名:首字母大写,如 `Car`, `Student`, `BankAccount`
- 属性名:首字母小写,如 `color`, `userName`, `totalPrice`
- 多个单词连接时使用驼峰命名法:如 `currentSpeed`, `userName`
:::

## 🔒 类字段的访问等级(Access Levels)

你可能注意到,我们上面定义的属性前面没有写 `public` 或其他修饰符。这涉及到一个非常重要的概念:**访问控制(Access Control)**。

### 为什么需要访问控制?

想象你设计了一辆汽车,你会让任何人随意打开引擎盖、拆卸零件吗?当然不会!同样,在编程中,我们也需要控制哪些数据可以被外部访问,哪些应该保护起来。

Java 提供了四种访问等级:

| 访问修饰符 | 中文名称 | 能被访问的范围 |
|----------|---------|---------------|
| `public` | 公开的 | 任何地方都可以访问 |
| `private` | 私有的 | 只能在本类内部访问 |
| `protected` | 受保护的 | 本类、子类和同包可访问 |
| (不写修饰符) | 默认/包访问 | 同一个包内可访问 |

::: warning 重要原则
在实际开发中,我们通常遵循**最小权限原则**:
- **属性一般设为 `private`**(私有) - 保护数据不被随意修改
- **方法根据需要设为 `public`**(公开) - 提供对外的功能接口
:::

让我们改进 Car 类,使用正确的访问控制:

```java
// 改进后的 Car 类 improved Car class
public class Car {
    // private 修饰符表示这些属性只能在 Car 类内部访问
    // private modifier means these fields can only be accessed inside Car class
    private String color;
    private String brand;
    private int speed;
}
```

现在如果有人想直接修改 `speed`,Java 会阻止他们,除非通过我们提供的方法!

## 🎬 给类添加方法(Methods)

类有了属性后,还需要有**行为(Behavior)**。汽车不仅有颜色和品牌,还能启动、加速、刹车。这些行为就是通过**方法(Method)** 来实现的。

### 什么是方法?

**方法(Method)** 是类能执行的操作,就像函数一样。你可以把方法理解为"对象能做的事情"。

### 方法的基本结构

```java
访问修饰符 返回类型 方法名(参数列表) {
    // 方法体 - 要执行的代码
    // method body - code to execute
}
```

让我们给 Car 类添加一些方法:

```java
// 完整的 Car 类,包含属性和方法 complete Car class with fields and methods
public class Car {
    // 私有属性 private fields
    private String color;
    private String brand;
    private int speed;
    
    // 启动汽车的方法 method to start the car
    public void start() {
        System.out.println("汽车启动了!发动机轰鸣... The car started! Engine roaring...");
    }
    
    // 加速方法 method to accelerate
    public void accelerate(int increment) {
        speed = speed + increment;  // 增加速度 increase speed
        System.out.println("加速中!当前速度: " + speed + " km/h");
        System.out.println("Accelerating! Current speed: " + speed + " km/h");
    }
    
    // 刹车方法 method to brake
    public void brake() {
        speed = 0;  // 速度归零 reset speed to zero
        System.out.println("刹车!汽车停止了。Brake! Car stopped.");
    }
    
    // 显示汽车信息的方法 method to display car info
    public void displayInfo() {
        System.out.println("===== 汽车信息 Car Info =====");
        System.out.println("品牌 Brand: " + brand);
        System.out.println("颜色 Color: " + color);
        System.out.println("当前速度 Current Speed: " + speed + " km/h");
        System.out.println("==========================");
    }
}
```

**方法解析**:

1. **`public void start()`**
   - `public` - 公开方法,外部可以调用
   - `void` - **返回类型(Return Type)**,表示这个方法不返回任何值
   - `start` - 方法名
   - `()` - 参数列表为空,表示不需要传入任何参数

2. **`public void accelerate(int increment)`**
   - `int increment` - **参数(Parameter)**,表示需要传入一个整数,代表加速的幅度

3. 方法内部可以直接访问类的属性(`speed`, `color`, `brand`)

### 如何使用这个类?

创建一个新文件 `TestCar.java` 来测试我们的 Car 类:

```java
// 测试 Car 类的程序 program to test Car class
public class TestCar {
    public static void main(String[] args) {
        // 创建一个 Car 对象 create a Car object
        Car myCar = new Car();
        
        // 调用方法 call methods
        myCar.start();           // 启动汽车 start the car
        myCar.accelerate(50);    // 加速到 50 km/h accelerate to 50
        myCar.accelerate(30);    // 再加速 30 km/h accelerate by 30 more
        myCar.displayInfo();     // 显示信息 display info
        myCar.brake();           // 刹车 brake
    }
}
```

::: warning 但是有个问题!
运行上面的代码,你会发现 `brand` 和 `color` 显示的是 `null`(空值),因为我们没有设置它们!

这就引出了一个问题:如何初始化对象的属性?这需要用到**构造方法(Constructor)**,我们马上就会讲到。
:::

## 🏗️ 构造方法(Constructor) - 对象的初始化

**构造方法(Constructor)** 是一个特殊的方法,在创建对象时自动调用,用来初始化对象的属性。

### 构造方法的特点

1. **方法名必须与类名完全相同**
2. **没有返回类型**(连 `void` 都不写)
3. **在使用 `new` 创建对象时自动调用**

让我们给 Car 类添加构造方法:

```java
// 包含构造方法的完整 Car 类 complete Car class with constructor
public class Car {
    // 私有属性 private fields
    private String color;
    private String brand;
    private int speed;
    
    // 构造方法 - 创建对象时自动调用 constructor - automatically called when creating object
    public Car(String carBrand, String carColor) {
        brand = carBrand;  // 初始化品牌 initialize brand
        color = carColor;  // 初始化颜色 initialize color
        speed = 0;         // 新车速度为 0 new car speed is 0
        System.out.println("一辆 " + color + " 色的 " + brand + " 汽车已创建!");
        System.out.println("A " + color + " " + brand + " car has been created!");
    }
    
    // 启动方法 start method
    public void start() {
        System.out.println(brand + " 启动了!发动机轰鸣...");
        System.out.println(brand + " started! Engine roaring...");
    }
    
    // 加速方法 accelerate method
    public void accelerate(int increment) {
        speed = speed + increment;
        System.out.println("加速中!当前速度: " + speed + " km/h");
        System.out.println("Accelerating! Current speed: " + speed + " km/h");
    }
    
    // 刹车方法 brake method
    public void brake() {
        speed = 0;
        System.out.println("刹车!汽车停止了。");
        System.out.println("Brake! Car stopped.");
    }
    
    // 获取品牌信息的方法 method to get brand info
    public String getBrand() {
        return brand;  // 返回品牌属性的值 return the value of brand field
    }
    
    // 获取颜色信息的方法 method to get color info
    public String getColor() {
        return color;
    }
    
    // 获取速度信息的方法 method to get speed info
    public int getSpeed() {
        return speed;
    }
    
    // 设置颜色的方法 method to set color
    public void setColor(String newColor) {
        color = newColor;
        System.out.println("汽车已重新喷漆为 " + newColor + " 色");
        System.out.println("Car repainted to " + newColor);
    }
    
    // 显示汽车信息 display car info
    public void displayInfo() {
        System.out.println("===== 汽车信息 Car Info =====");
        System.out.println("品牌 Brand: " + brand);
        System.out.println("颜色 Color: " + color);
        System.out.println("当前速度 Current Speed: " + speed + " km/h");
        System.out.println("==========================");
    }
}
```

::: tip Getter 和 Setter 方法
因为属性是 `private` 的,外部无法直接访问。我们提供了:
- **Getter 方法**(`getBrand()`, `getColor()`) - 用来读取属性值
- **Setter 方法**(`setColor()`) - 用来修改属性值

这种方式叫做**封装(Encapsulation)**,是面向对象编程的核心原则之一!
:::

### 更新测试程序

```java
// 完整的测试程序 complete test program
public class TestCar {
    public static void main(String[] args) {
        // 创建第一辆车 - 现在必须提供品牌和颜色
        // create first car - now must provide brand and color
        Car car1 = new Car("Tesla", "红色");
        
        car1.start();
        car1.accelerate(60);
        car1.accelerate(40);
        car1.displayInfo();
        
        System.out.println("\n------- 分隔线 Separator -------\n");
        
        // 创建第二辆车 create second car
        Car car2 = new Car("BMW", "黑色");
        
        car2.start();
        car2.accelerate(80);
        car2.displayInfo();
        
        // 使用 setter 方法修改颜色 use setter method to change color
        car2.setColor("白色");
        car2.displayInfo();
    }
}
```

## ✅ 验证方法

### 编译和运行

1. **保存文件**:确保 `Car.java` 和 `TestCar.java` 在同一个文件夹

2. **编译代码**:
```bash
javac Car.java TestCar.java
```

如果成功,不会有任何输出,且会生成 `Car.class` 和 `TestCar.class` 文件。

3. **运行程序**:
```bash
java TestCar
```

4. **预期输出**:
```
一辆 红色 色的 Tesla 汽车已创建!
A 红色 Tesla car has been created!
Tesla 启动了!发动机轰鸣...
Tesla started! Engine roaring...
加速中!当前速度: 60 km/h
Accelerating! Current speed: 60 km/h
加速中!当前速度: 100 km/h
Accelerating! Current speed: 100 km/h
===== 汽车信息 Car Info =====
品牌 Brand: Tesla
颜色 Color: 红色
当前速度 Current Speed: 100 km/h
==========================

------- 分隔线 Separator -------

一辆 黑色 色的 BMW 汽车已创建!
A 黑色 BMW car has been created!
BMW 启动了!发动机轰鸣...
BMW started! Engine roaring...
加速中!当前速度: 80 km/h
Accelerating! Current speed: 80 km/h
===== 汽车信息 Car Info =====
品牌 Brand: BMW
颜色 Color: 黑色
当前速度 Current Speed: 80 km/h
==========================
汽车已重新喷漆为 白色 色
Car repainted to 白色
===== 汽车信息 Car Info =====
品牌 Brand: BMW
颜色 Color: 白色
当前速度 Current Speed: 80 km/h
==========================
```

::: danger 常见错误
**错误 1**: `Car.java:1: error: class Car is public, should be declared in a file named Car.java`
- **原因**: 类名和文件名不匹配
- **解决**: 确保文件名是 `Car.java`,不是 `car.java` 或其他

**错误 2**: `cannot find symbol - variable color`
- **原因**: 属性名拼写错误
- **解决**: 检查属性名的大小写和拼写

**错误 3**: `error: constructor Car in class Car cannot be applied to given types`
- **原因**: 创建对象时没有提供构造方法需要的参数
- **解决**: `Car myCar = new Car("品牌", "颜色");`
:::

## 💪 练习题

### 练习 1: 创建 Student 类(基础)

创建一个 `Student` 类,要求:
- 包含属性:`name`(姓名), `age`(年龄), `grade`(年级)
- 所有属性都是 `private`
- 提供一个构造方法来初始化这些属性
- 提供一个 `introduce()` 方法,输出学生的自我介绍

**提示**:模仿 Car 类的结构。

### 练习 2: 添加方法(进阶)

在上面的 `Student` 类基础上:
- 添加一个 `study(String subject)` 方法,输出学生正在学习某个科目
- 添加 getter 和 setter 方法
- 创建至少 2 个学生对象并测试

### 练习 3: 银行账户类(挑战)

创建一个 `BankAccount` 类:
- 属性:`accountNumber`(账号), `balance`(余额), `ownerName`(户主姓名)
- 方法:
  - `deposit(double amount)` - 存款
  - `withdraw(double amount)` - 取款(如果余额不足,输出错误信息)
  - `checkBalance()` - 查询余额
  - `transfer(BankAccount target, double amount)` - 转账给另一个账户

::: tip 练习提示
- 余额应该是 `private`,不能直接修改
- 取款前要检查余额是否足够
- 转账需要同时修改两个账户的余额
:::

## 📌 本章小结

让我们回顾一下学到的核心概念:

1. **类(Class)** 是对象的模板,定义了对象应该有什么属性和方法

2. **属性(Field)** 存储对象的状态数据,通常设为 `private` 保护数据安全

3. **方法(Method)** 定义对象的行为,可以操作对象的属性

4. **访问修饰符(Access Modifier)** 控制类成员的访问范围:
   - `public` - 公开的,任何地方可访问
   - `private` - 私有的,只能在类内部访问
   - 原则:属性私有化,方法根据需要公开

5. **构造方法(Constructor)** 是特殊的方法,用于初始化对象:
   - 名称必须与类名相同
   - 没有返回类型
   - 使用 `new` 创建对象时自动调用

6. **封装(Encapsulation)** 通过私有属性 + 公开方法的组合,保护数据安全:
   - Getter 方法读取属性
   - Setter 方法修改属性

7. **对象(Object)** 是类的实例,通过 `new` 关键字创建:
   ```java
   Car myCar = new Car("Tesla", "红色");
   ```

::: tip 记住这个比喻
- **类** = 汽车设计图纸
- **对象** = 根据图纸生产的实际汽车
- **属性** = 汽车的特征(颜色、品牌)
- **方法** = 汽车的功能(启动、加速)
- **封装** = 只能通过方向盘、油门等接口操作汽车,不能直接拆卸引擎
:::

你现在已经掌握了面向对象编程的基础!下一步可以尝试创建更复杂的类,并让多个对象之间互动。编程的乐趣才刚刚开始!