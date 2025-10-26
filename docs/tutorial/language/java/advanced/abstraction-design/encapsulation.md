---
title: 封装与访问控制
description: 通过理解和运用Java中的访问修饰符及封装机制，掌握如何保护对象内部状态，实现良好的面向对象设计。
order: 9
keywords: [Java, 封装, 访问控制, private, public, protected, getter, setter]
---

# 封装与访问控制

## 前置知识
> 在阅读本章前,你需要了解: Java的基本语法、类和对象的概念。

## 为什么需要封装与访问控制？

我们都经历过在代码里无意中误改了某个变量的值，导致程序莫名其妙地崩溃或者数据被破坏。尤其是在团队项目中，不是每个人都能完全知道哪些数据是“敏感”的，哪些可以随意更改。正因如此，Java 设计了访问控制和封装机制，来帮我们保护对象的内部状态，避免数据被随意访问或修改。简单来说，封装是一种让我们告诉代码“哪些东西是应该外界摸不到的”技巧。

设想一下，如果你家门口装了重重密码锁（private），家人（同一个包或子类）有钥匙（protected / package-private），访客只能站门外（public），这样你的家才安全，而且不要忘了，钥匙还得交给信得过的人（getter、setter作为访问和操作的方法），他们既能安全进出，也不会乱动你的私人物品。

接下来，我们一步步剖析Java的访问控制修饰符和封装实践。

---

## 访问修饰符概述

Java提供了4种主要的访问级别修饰符：

| 修饰符    | 访问范围                                         | 用途示例                                  |
| --------- | ------------------------------------------------ | ----------------------------------------- |
| `private` | 仅限当前类内部                                    | 隐藏数据，防止类外访问                     |
| (默认，即) `package-private`（无修饰符）| 同一个包内的类                                | 包内共享，较严格的封装                     |
| `protected` | 同包内 + 子类                                  | 子类访问父类成员，适合继承扩展             |
| `public`  | 全部访问                                         | API接口，任何类都能访问                     |

> 这里的“包”类似一个小社区，只有社区室友们彼此认识可以交流。

---

## 具体章节

### private - 私有的城堡

私有成员是我们封装的基石。把属性做成private后，外界不能直接访问或赋值，只能通过公开的方法间接操作——这也是所谓“控制访问”，让我们有机会对数据进行验证、过滤或维护内部一致性。

#### 示例1：最基础的私有属性与公开访问方法

```java
public class User {
    private String username; // 用户名，不能随便改

    // 构造器，初始化用户名
    public User(String username) {
        this.username = username;
    }

    // 允许外界查询用户名
    public String getUsername() {
        return username;
    }

    // 允许外界修改用户名，但加以校验防止为空
    public void setUsername(String username) {
        if (username != null && !username.trim().isEmpty()) {
            this.username = username;
        } else {
            System.out.println("用户名不能为空！");
        }
    }

    public static void main(String[] args) {
        User user = new User("Alice");
        System.out.println("初始用户名: " + user.getUsername());

        user.setUsername("  "); // 尝试设置非法用户名
        System.out.println("修改后用户名: " + user.getUsername());

        user.setUsername("Bob");
        System.out.println("最终用户名: " + user.getUsername());
    }
}
```

**这段代码做了什么：**

1. `username`属性用`private`隐藏起来，外部不能直接操作。
2. 通过`getUsername`方法获取值。
3. `setUsername`方法里加入简单校验，保证用户名不能是空或空白字符。
4. `main`方法用来测试访问和修改行为。

> 你可以把`username`看作房间里的保险箱，只有钥匙（getter/setter）才能打开，而且钥匙上还标记了“不允许空密码”的规则。

---

### 访问修饰符综合使用：包与继承中的视角

Java的`protected`和默认权限（也称为包访问权限）经常让人糊涂。这两者都是包内可访问的，但`protected`允许跨包的继承类访问。

#### 示例2：访问修饰符的继承示例

```java
package vehicles;

// 父类：交通工具
public class Vehicle {
    private String brand;          // 只有当前类访问
    String model;                  // 同包可访问
    protected int year;            // 同包和子类可访问
    public String color;           // 任何地方都能访问

    public Vehicle(String brand, String model, int year, String color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // 获取品牌
    public String getBrand() {
        return brand;
    }
}

package vehicles;

// 子类：汽车，继承Vehicle
public class Car extends Vehicle {

    public Car(String brand, String model, int year, String color) {
        super(brand, model, year, color);
    }

    public void printDetails() {
        // System.out.println("Brand: " + brand); // ❌ 编译错误，private不允许访问
        System.out.println("Brand: " + getBrand()); // 通过getter访问

        System.out.println("Model: " + model);       // 包内直接访问，允许
        System.out.println("Year: " + year);         // protected允许访问
        System.out.println("Color: " + color);       // public访问
    }

    public static void main(String[] args) {
        Car car = new Car("Toyota", "Corolla", 2018, "Red");
        car.printDetails();
    }
}
```

**这段代码做了什么：**

1. `Vehicle`类中定义了4种访问权限的成员变量。
2. `Car`作为子类，可以直接访问`model`（包内）和 `year`（protected）以及`color`（public），但无法直接访问`brand`（private）。
3. 通过getter方法访问`brand`。
4. `Car`的`printDetails`演示了这些访问限制。

> 想象`brand`是私人卧室，锁上门；`model`是社区走廊，社区里的人都可以经过；`year`是楼上的阳台，只允许家人（子类）进出；`color`是公共公告牌，所有人可见。

---

### Getter和Setter的高级使用：不可变对象与只读属性

某些情况下，我们希望对象部分数据可以被外界获取，但不能被更改。比如，用户ID一旦生成就不应该被修改。Setter方法可以选择不提供，以保证只读属性；或者只提供getter。

另外，有时setter中会加入更复杂的校验或逻辑。

#### 示例3：只读属性与复杂Setter

```java
public class BankAccount {
    private final String accountNumber; // 账户号，初始化后不可修改
    private double balance;              // 余额

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // 只提供getter，让外界读取账户号，但不能修改
    public String getAccountNumber() {
        return accountNumber;
    }

    // 余额的getter和setter
    public double getBalance() {
        return balance;
    }

    public void setBalance(double newBalance) {
        // 防止余额设置为负数
        if (newBalance < 0) {
            System.out.println("余额不能为负！");
        } else {
            this.balance = newBalance;
        }
    }

    // 模拟存钱
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("存入 " + amount + "元，当前余额：" + balance);
        } else {
            System.out.println("存入金额必须为正数");
        }
    }

    // 模拟取钱
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("取出 " + amount + "元，当前余额：" + balance);
        } else {
            System.out.println("取款金额无效或余额不足");
        }
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount("AC123456", 1000);
        System.out.println("账户号：" + account.getAccountNumber());

        account.deposit(500);
        account.withdraw(200);
        account.setBalance(-100);  // 非法余额，拒绝设置
        System.out.println("最终余额：" + account.getBalance());
    }
}
```

**这段代码做了什么：**

1. `accountNumber`用`final`和`private`修饰，只提供getter，不允许外部修改。
2. `balance`有完整getter和setter，但setter加了条件限制，防止负余额。
3. 增加了操作余额的业务方法（存款与取款）。
4. `main`中演示余额安全修改和非法操作的防护。

> 在实际项目中，我常见到很多新手直接把属性当公有变量用了，一旦缺少校验，bug就悄悄爬进来了。封装和访问控制就是给你的代码加了一层保险锁。

---

:::warning ⚠️ 常见陷阱

- **直接暴露public属性**  
  很多初学者喜欢把属性写成`public String name;`，省去getter/setter，代码看似简洁，其实剥夺了未来对属性逻辑的控制权。我们没法在赋值时校验，无法监控访问，导致后期扩展困难甚至隐患。

- **滥用`protected`**  
  `protected`允许跨包子类访问，很容易造成包之间的强耦合。除非确实需要继承设计，否则推荐用`private + getter/setter`来保护数据。

- **Getter/Setter失控**  
  Setter不加校验，或者直接对集合返回引用（修改原对象），很容易造成对象状态不一致。
:::
---

:::tip 💡 实战建议

- 属性优先声明为`private`。需要继承访问时才选择`protected`。
- 只有必须暴露的字段提供getter和setter，能只给getter就只给getter（常见于不可变对象）。
- 在setter中加入合理校验，防止异常数据进入对象。
- 对于集合属性，返回不可修改的副本或只读视图，防止外部修改内部状态。
- 记得，封装不仅是语法手段，更是设计理念，帮助实现“高内聚低耦合”的代码结构。
:::
---

## 深入理解 🔍

### 为什么Java没有`private protected`这样的组合？  
这源于设计理念：访问权限是单一方向的。`private`只允许本类访问，而`protected`是向子类开放，二者不兼容。通常设计上，如果想要“只有子类能访问”，用 `protected` 就好；想更严格一点就用 `private` + `getter/setter`。

### 包访问权限适合什么场景？  
它比`private`更宽松，但不暴露给外包，是实现“包内协作”的利器。大规模系统中不同模块通常放不同包，包访问帮助模块内部优化细节，避免API泄露。

---

## 小结

- 封装让我们保护对象状态，只暴露必要的操作接口。
- Java访问修饰符 `private`、默认包访问、`protected`、`public`分别对应不同访问范围。
- `private`成员通过getter和setter进行操作，setter中可以加入业务校验。
- `protected`主要用于继承和同包访问，工具要慎用，避免滥用破坏模块边界。
- 好的封装不仅让程序更安全，也使代码更易维护和演进。

学习封装与访问控制，就像给程序筑起一道安全的护城河，外人的访问被合理限制，我们可以安心专注于业务逻辑开发。慢下来，一步步掌握这些基础细节，写出靠谱又优雅的Java代码。

---

如果你想，接下来我们可以继续打造更复杂的封装案例，或者聊聊Java访问控制在多线程安全中的作用，你怎么看？