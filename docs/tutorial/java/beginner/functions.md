---
title: 函数与方法
category: Java
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 函数与方法

## 💡 什么是函数

函数(Function)就像一个专门做某件事的小机器。你给它一些材料,它帮你完成工作,然后返回结果。

比如:
- 计算器 → 输入两个数字 → 返回相加结果
- 榨汁机 → 输入水果 → 返回果汁

## 定义一个方法

### 📝 基础语法

```java{1}
public static void sayHello() {
    System.out.println("Hello!");
}
```

::: tip 术语说明
在 Java 中,我们通常把函数叫做 **方法(Method)**
:::

### 💡 语法组成

一个方法由这几部分组成:

```java
public static void sayHello() {
    // 方法体:要执行的代码
}
```

- `public static` - 暂时不用理解,每次都这样写
- `void` - 表示这个方法不返回任何结果
- `sayHello` - 方法的名字,你可以自己取
- `()` - 小括号,用来接收输入参数
- `{}` - 大括号,里面写要执行的代码

### 📝 完整示例

创建一个文件 `MethodDemo.java`:

```java{3-5,8}
public class MethodDemo {
    
    public static void sayHello() {
        System.out.println("Hello, World!");
    }
    
    public static void main(String[] args) {
        sayHello();  // 调用方法
    }
}
```

**运行结果:**
```
Hello, World!
```

::: tip 提示
`main` 方法是程序的入口,程序从这里开始执行
:::

## 带参数的方法

### 💡 什么是参数

**参数(Parameter)** 就是方法需要的输入材料。

```java{1,2}
public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}
```

- `String name` - 定义一个叫 `name` 的参数,类型是 `String`(文本)

### 📝 使用示例

```java{3-5,8-10}
public class MethodDemo {
    
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static void main(String[] args) {
        greet("Alice");  // 传入 "Alice"
        greet("Bob");    // 传入 "Bob"
    }
}
```

**运行结果:**
```
Hello, Alice!
Hello, Bob!
```

### 📝 多个参数

```java{3-6,9}
public class Calculator {
    
    public static void add(int a, int b) {
        int sum = a + b;
        System.out.println(a + " + " + b + " = " + sum);
    }
    
    public static void main(String[] args) {
        add(5, 3);   // 计算 5 + 3
        add(10, 20); // 计算 10 + 20
    }
}
```

**运行结果:**
```
5 + 3 = 8
10 + 20 = 30
```

## 返回值

### 💡 什么是返回值

有些方法不仅执行操作,还需要把结果返回给调用者。

```java{1,3}
public static int add(int a, int b) {
    int sum = a + b;
    return sum;  // 把结果返回
}
```

- 把 `void` 改成 `int`,表示返回一个整数
- 使用 `return` 关键字返回结果

### 📝 完整示例

```java{3-5,8-10}
public class Calculator {
    
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        int result = add(5, 3);  // 接收返回值
        System.out.println("结果是: " + result);
    }
}
```

**运行结果:**
```
结果是: 8
```

### 📝 直接使用返回值

```java{3-5,8-9}
public class Calculator {
    
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static void main(String[] args) {
        System.out.println("5 × 3 = " + multiply(5, 3));
        System.out.println("10 × 2 = " + multiply(10, 2));
    }
}
```

**运行结果:**
```
5 × 3 = 15
10 × 2 = 20
```

## 💪 练习题

### 练习 1: 计算面积

编写一个方法 `calculateArea`,接收长和宽两个参数,返回矩形面积。

<details>
<summary>点击查看答案</summary>

```java
public class Practice {
    
    public static int calculateArea(int length, int width) {
        return length * width;
    }
    
    public static void main(String[] args) {
        int area = calculateArea(5, 3);
        System.out.println("面积是: " + area);
    }
}
```

</details>

### 练习 2: 判断奇偶

编写一个方法 `isEven`,接收一个整数,如果是偶数返回 `true`,否则返回 `false`。

<details>
<summary>点击查看答案</summary>

```java
public class Practice {
    
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    public static void main(String[] args) {
        System.out.println("4 是偶数吗? " + isEven(4));
        System.out.println("7 是偶数吗? " + isEven(7));
    }
}
```

</details>

## 📌 小结

- 方法用 `public static 返回类型 方法名(参数)` 定义
- 用 `方法名(参数值)` 调用方法
- `void` 表示无返回值,其他类型(如 `int`)表示有返回值
- 使用 `return` 返回结果