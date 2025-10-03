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

## 💡 什么是类(Class)

类是创建对象的模板。你可以把类想象成"建筑图纸"，而对象就是根据图纸建造出来的"房子"。

在Java中，所有代码都必须写在类里面。

## 📝 创建你的第一个类

```java
public class Dog {
    
}
```

::: tip 提示
- `public` 表示这个类可以被其他代码访问
- `class` 是定义类的关键字
- `Dog` 是类名,首字母必须大写
- `{}` 里面是类的内容
:::

## 💡 什么是属性(Field/Attribute)

属性是类中存储数据的变量。比如一只狗有名字、年龄、颜色等特征。

```java
public class Dog {
    String name;      // 名字
    int age;          // 年龄
    String color;     // 颜色
}
```

## 💡 什么是方法(Method)

方法是类中定义的功能。比如狗可以叫、跑、吃东西。

```java
public class Dog {
    String name;
    int age;
    
    void bark() {
        System.out.println("汪汪汪!");
    }
    
    void eat(String food) {
        System.out.println("正在吃" + food);
    }
}
```

::: tip 提示
- `void` 表示这个方法不返回任何值
- `bark()` 中的 `()` 表示不需要传入参数
- `eat(String food)` 中的 `(String food)` 表示需要传入一个字符串参数
:::

## 📝 完整示例：创建和使用类

创建一个名为 `Dog.java` 的文件:

```java
public class Dog {
    String name;
    int age;
    
    void bark() {
        System.out.println(name + "说:汪汪汪!");
    }
    
    void introduce() {
        System.out.println("我叫" + name + ",今年" + age + "岁");
    }
}
```

创建另一个名为 `Main.java` 的文件:

```java
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();     // 创建一个Dog对象
        myDog.name = "旺财";        // 设置属性
        myDog.age = 3;
        
        myDog.bark();              // 调用方法
        myDog.introduce();
    }
}
```

## ✅ 运行验证

在终端运行:

```bash
javac Dog.java Main.java
java Main
```

你会看到:

```
旺财说:汪汪汪!
我叫旺财,今年3岁
```

## 💡 属性的访问级别(Access Level)

Java有四种访问级别,现在先了解两种:

```java
public class Dog {
    public String name;      // public: 任何地方都可以访问
    private int age;         // private: 只能在类内部访问
    
    public void setAge(int newAge) {
        age = newAge;        // 类内部可以访问private属性
    }
    
    public int getAge() {
        return age;
    }
}
```

**为什么要用 private?**

```java
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.name = "旺财";          // ✅ 可以访问public属性
        // myDog.age = 3;             // ❌ 错误! 不能直接访问private属性
        
        myDog.setAge(3);              // ✅ 通过方法设置private属性
        System.out.println(myDog.getAge());  // 输出: 3
    }
}
```

::: warning 注意
使用 `private` 可以保护数据,防止被随意修改。这是一个好习惯。
:::

## 💪 练习题

### 练习1: 创建一个人类
创建一个 `Person` 类,包含:
- 属性: `name`(姓名), `height`(身高)
- 方法: `sayHello()` 打印 "你好,我是{姓名}"

### 练习2: 使用private
修改练习1,将 `height` 改为 `private`,并添加 `getHeight()` 和 `setHeight()` 方法。

### 练习3: 添加功能
为 `Person` 类添加一个方法 `grow()`,每次调用时身高增加1。

<details>
<summary>参考答案</summary>

```java
public class Person {
    public String name;
    private int height;
    
    public void sayHello() {
        System.out.println("你好,我是" + name);
    }
    
    public void setHeight(int h) {
        height = h;
    }
    
    public int getHeight() {
        return height;
    }
    
    public void grow() {
        height = height + 1;
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.name = "小明";
        person.setHeight(170);
        
        person.sayHello();
        System.out.println("身高:" + person.getHeight());
        
        person.grow();
        System.out.println("长高后:" + person.getHeight());
    }
}
```

</details>

## 📌 小结

- **类(Class)** 是创建对象的模板,类名首字母大写
- **属性(Field)** 是类中存储的数据,用来描述对象的特征
- **方法(Method)** 是类中定义的功能,用来描述对象的行为
- **public** 属性可以在任何地方访问,**private** 属性只能在类内部访问