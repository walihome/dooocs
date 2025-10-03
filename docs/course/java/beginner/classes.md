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

在Java中，我们用**类(Class)**来描述事物。你可以把类想象成一个"模板"或"图纸"——就像建筑师画房子的设计图一样。

## 为什么需要类?

假设你要在程序中管理一只宠物狗的信息：名字、年龄、颜色。如果没有类，你需要分别定义很多变量，很容易混乱。有了类，就能把相关的信息组织在一起。

## 定义你的第一个类

### 💡 概念讲解

**类(Class)**是一个模板,用来定义某一类事物的特征和行为。类名通常使用**大驼峰命名法(PascalCase)**——每个单词首字母大写。

### 📝 代码示例

创建一个名为 `Dog.java` 的文件：

```java
public class Dog {
    // 这里是类的内容
}
```

::: tip 提示
- `public` 表示这个类可以被其他代码访问
- `class` 是定义类的关键字
- `Dog` 是类名,必须和文件名相同
- 大括号 `{}` 里面是类的内容
:::

### ✅ 验证方法

1. 保存文件为 `Dog.java`
2. 在命令行编译：

```bash
javac Dog.java
```

3. 如果没有报错，说明类定义成功！会生成一个 `Dog.class` 文件

::: warning 注意
如果看到 `error: class Dog is public, should be declared in a file named Dog.java`，说明文件名和类名不一致。
:::

### 💪 练习题

1. 创建一个名为 `Cat` 的类
2. 创建一个名为 `Book` 的类

## 给类添加属性(字段)

### 💡 概念讲解

**字段(Field)**也叫**属性(Attribute)**，用来存储对象的特征数据。比如狗有名字、年龄、颜色，这些就是字段。

### 📝 代码示例

修改 `Dog.java`：

```java
public class Dog {
    // 定义三个字段
    String name;    // 名字
    int age;        // 年龄
    String color;   // 颜色
}
```

::: tip 字段命名规范
- 使用**小驼峰命名法(camelCase)**：第一个单词小写，后续单词首字母大写
- 例如：`userName`、`totalPrice`、`dogAge`
:::

### 完整可运行示例

创建 `DogTest.java` 来使用这个类：

```java
public class DogTest {
    public static void main(String[] args) {
        // 创建一个Dog对象
        Dog myDog = new Dog();
        
        // 给字段赋值
        myDog.name = "旺财";
        myDog.age = 3;
        myDog.color = "黄色";
        
        // 打印信息
        System.out.println("狗的名字: " + myDog.name);
        System.out.println("狗的年龄: " + myDog.age);
        System.out.println("狗的颜色: " + myDog.color);
    }
}
```

### ✅ 验证方法

```bash
# 编译两个文件
javac Dog.java DogTest.java

# 运行测试程序
java DogTest
```

**期望输出:**
```
狗的名字: 旺财
狗的年龄: 3
狗的颜色: 黄色
```

### 💪 练习题

1. 给 `Cat` 类添加字段：`name`(名字)、`weight`(体重，使用 `double` 类型)
2. 创建一个 `Book` 类，添加字段：`title`(书名)、`author`(作者)、`pages`(页数)
3. 创建测试程序，创建对象并打印信息

## 给类添加方法

### 💡 概念讲解

**方法(Method)**用来定义对象的行为——它能做什么。比如狗会叫、会跑，这些行为可以用方法实现。

方法的基本结构：
```
访问修饰符 返回类型 方法名(参数列表) {
    // 方法体
}
```

### 📝 代码示例

修改 `Dog.java`，添加方法：

```java
public class Dog {
    // 字段
    String name;
    int age;
    String color;
    
    // 方法1: 狗叫
    public void bark() {
        System.out.println(name + "在叫: 汪汪汪!");
    }
    
    // 方法2: 自我介绍
    public void introduce() {
        System.out.println("我叫" + name + ", 今年" + age + "岁, 是" + color + "的.");
    }
    
    // 方法3: 过生日(年龄加1)
    public void birthday() {
        age = age + 1;
        System.out.println(name + "过生日了! 现在" + age + "岁了!");
    }
}
```

::: tip 方法类型说明
- `void` 表示这个方法不返回任何值
- `public` 表示这个方法可以被外部调用
- 方法名使用小驼峰命名法
:::

### 完整可运行示例

修改 `DogTest.java`：

```java
public class DogTest {
    public static void main(String[] args) {
        // 创建Dog对象
        Dog myDog = new Dog();
        myDog.name = "旺财";
        myDog.age = 3;
        myDog.color = "黄色";
        
        // 调用方法
        myDog.introduce();    // 自我介绍
        myDog.bark();         // 叫唤
        myDog.birthday();     // 过生日
        myDog.introduce();    // 再次介绍(年龄变了)
    }
}
```

### ✅ 验证方法

```bash
javac Dog.java DogTest.java
java DogTest
```

**期望输出:**
```
我叫旺财, 今年3岁, 是黄色的.
旺财在叫: 汪汪汪!
旺财过生日了! 现在4岁了!
我叫旺财, 今年4岁, 是黄色的.
```

### 带参数和返回值的方法

方法可以接收**参数(Parameter)**并返回**返回值(Return Value)**：

```java
public class Dog {
    String name;
    int age;
    String color;
    
    // 方法4: 计算狗龄(狗的1岁相当于人的7岁)
    public int calculateHumanAge() {
        int humanAge = age * 7;
        return humanAge;  // 返回计算结果
    }
    
    // 方法5: 改名字(接收一个参数)
    public void rename(String newName) {
        System.out.println(name + "改名为" + newName);
        name = newName;
    }
}
```

测试代码：

```java
public class DogTest {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.name = "旺财";
        myDog.age = 3;
        
        // 调用有返回值的方法
        int humanAge = myDog.calculateHumanAge();
        System.out.println(myDog.name + "相当于人类" + humanAge + "岁");
        
        // 调用有参数的方法
        myDog.rename("小黄");
        System.out.println("新名字: " + myDog.name);
    }
}
```

### 💪 练习题

1. 给 `Cat` 类添加方法 `meow()`，打印"喵喵喵"
2. 给 `Book` 类添加方法 `getInfo()`，返回书籍的完整信息(字符串)
3. 给 `Dog` 类添加方法 `eat(String food)`，打印"{狗名}在吃{food}"

## 访问等级控制

### 💡 概念讲解

**访问修饰符(Access Modifier)**控制字段和方法能被谁访问。这就像给房间上锁——有些信息只能自己知道，有些可以分享给别人。

Java有四种访问等级：

| 修饰符 | 类内部 | 同包 | 子类 | 任何地方 |
|--------|--------|------|------|----------|
| `private` | ✅ | ❌ | ❌ | ❌ |
| 默认(不写) | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

::: tip 最佳实践
- 字段通常设为 `private`(私有的)
- 提供 `public` 方法来访问和修改字段
- 这叫**封装(Encapsulation)**，是面向对象的重要概念
:::

### 📝 代码示例

修改 `Dog.java`，使用 `private` 保护字段：

```java
public class Dog {
    // 私有字段 - 只能在Dog类内部访问
    private String name;
    private int age;
    private String color;
    
    // 公开方法 - 用来获取字段值(Getter)
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // 公开方法 - 用来设置字段值(Setter)
    public void setName(String name) {
        this.name = name;  // this表示当前对象
    }
    
    public void setAge(int age) {
        // 可以在这里添加验证逻辑
        if (age > 0) {
            this.age = age;
        } else {
            System.out.println("年龄必须大于0!");
        }
    }
    
    public void setColor(String color) {
        this.color = color;
    }
    
    // 其他方法
    public void introduce() {
        System.out.println("我叫" + name + ", 今年" + age + "岁, 是" + color + "的.");
    }
}
```

::: warning 注意
`this` 是一个特殊关键字，表示"当前对象"。当参数名和字段名相同时，用 `this.字段名` 来区分。
:::

### 完整可运行示例

修改 `DogTest.java`：

```java
public class DogTest {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        
        // 不能直接访问: myDog.name = "旺财";  // 这会报错!
        
        // 必须通过公开方法访问
        myDog.setName("旺财");
        myDog.setAge(3);
        myDog.setColor("黄色");
        
        // 获取信息
        System.out.println("狗的名字: " + myDog.getName());
        System.out.println("狗的年龄: " + myDog.getAge());
        
        myDog.introduce();
        
        // 尝试设置非法年龄
        myDog.setAge(-5);  // 会被拒绝
    }
}
```

### ✅ 验证方法

```bash
javac Dog.java DogTest.java
java DogTest
```

**期望输出:**
```
狗的名字: 旺财
狗的年龄: 3
我叫旺财, 今年3岁, 是黄色的.
年龄必须大于0!
```

### 为什么要用 private?

对比两种方式：

**不使用 private (不好的方式):**
```java
Dog dog = new Dog();
dog.age = -100;  // 可以设置不合理的值!
```

**使用 private (推荐方式):**
```java
Dog dog = new Dog();
dog.setAge(-100);  // 会被setAge方法拒绝
```

::: danger 常见错误
如果你写了：
```java
Dog myDog = new Dog();
myDog.name = "旺财";  // 错误!
```

会看到错误信息：
```
error: name has private access in Dog
```

解决方法：使用 `setName()` 方法。
:::

### 💪 练习题

1. 修改 `Cat` 类，将所有字段改为 `private`，添加对应的 getter 和 setter 方法
2. 在 `setWeight()` 方法中添加验证：体重必须大于0且小于50
3. 创建 `Student` 类，包含私有字段 `name`、`age`、`score`，提供公开方法访问这些字段

## 构造方法

### 💡 概念讲解

每次创建对象时都要调用一堆 `set` 方法很麻烦。**构造方法(Constructor)**可以在创建对象时直接初始化字段。

构造方法的特点：
- 方法名和类名完全相同
- 没有返回类型(连 `void` 都不写)
- 创建对象时自动调用

### 📝 代码示例

修改 `Dog.java`，添加构造方法：

```java
public class Dog {
    private String name;
    private int age;
    private String color;
    
    // 构造方法
    public Dog(String name, int age, String color) {
        this.name = name;
        this.age = age;
        this.color = color;
        System.out.println("创建了一只狗: " + name);
    }
    
    // getter和setter方法
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void introduce() {
        System.out.println("我叫" + name + ", 今年" + age + "岁, 是" + color + "的.");
    }
}
```

### 完整可运行示例

```java
public class DogTest {
    public static void main(String[] args) {
        // 使用构造方法创建对象
        Dog dog1 = new Dog("旺财", 3, "黄色");
        Dog dog2 = new Dog("小黑", 5, "黑色");
        
        dog1.introduce();
        dog2.introduce();
    }
}
```

### ✅ 验证方法

```bash
javac Dog.java DogTest.java
java DogTest
```

**期望输出:**
```
创建了一只狗: 旺财
创建了一只狗: 小黑
我叫旺财, 今年3岁, 是黄色的.
我叫小黑, 今年5岁, 是黑色的.
```

### 💪 练习题

1. 给 `Cat` 类添加构造方法，接收 `name` 和 `weight` 参数
2. 给 `Book` 类添加构造方法，接收 `title`、`author`、`pages` 参数
3. 创建3个不同的 `Book` 对象并打印它们的信息

## 📌 本章小结

1. **类(Class)**是描述事物的模板，使用 `public class 类名 {}` 定义
2. **字段(Field)**存储对象的数据，应该设为 `private` 保护
3. **方法(Method)**定义对象的行为，格式是 `public 返回类型 方法名(参数) {}`
4. **访问修饰符**控制访问权限：`private`(私有) < `public`(公开)
5. **Getter/Setter**方法用于安全地访问和修改私有字段
6. **构造方法(Constructor)**在创建对象时初始化字段，方法名必须和类名相同
7. **this**关键字表示当前对象，用于区分字段和参数

::: tip 最佳实践总结
- 类名用大驼峰：`Dog`、`StudentInfo`
- 字段和方法名用小驼峰：`userName`、`calculateAge()`
- 字段设为 `private`，方法设为 `public`
- 使用构造方法初始化对象
:::

现在你已经掌握了面向对象编程的基础！试着创建一个完整的类来描述你感兴趣的事物吧。