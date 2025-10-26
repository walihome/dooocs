---
title: 泛型编程
description: 深入浅出 Java 泛型编程，理解泛型类、泛型方法、类型擦除及通配符的核心概念和用法。
order: 18
keywords: [Java, 泛型, 泛型类, 泛型方法, 类型擦除, 通配符, ? extends, ? super, 泛型限制]
---

# 泛型编程

## 前置知识
> 在阅读本章前,你需要了解:
> - Java 类和接口的基本概念
> - 面向对象编程（OOP）基础
> - 基本的集合类（如 List、Map）的使用

## 为什么需要泛型编程？

想象一下，你写了一个存储不同类型对象的容器，比如一个盒子（Box），你可以放一个苹果，也可以放一本书，但取出来的时候，你要额外判断类型，或者频繁进行强制类型转换（cast）。这不仅繁琐，还极易出错，特别是在大型项目中，类型错误很难快速被发现。

泛型的诞生，就是为了解决这类问题。它让代码在编译阶段就能检查类型安全，避免了运行时出错，还让代码更加简洁和复用性更强。今天，我们就来一起拆解 Java 泛型编程的秘密。

---

## 1. 泛型类：让类变聪明，能“装”各种类型

泛型类，简单来说，就是类的定义中引入了类型参数。这样，类的使用者可以指定实际的类型，编译器帮你保证类型安全。我们举个最直观的例子：一个“盒子”类（Box），能够装任何类型的东西。

### 基础定义

```java
// 导入必需包
import java.util.Objects;

/**
 * 一个简单的泛型盒子类
 *
 * @param <T> 表示盒子中存放的对象类型
 */
public class Box<T> {
    private T content;

    public Box(T content) {
        this.content = content;
    }

    public T getContent() {
        return content;
    }

    public void setContent(T content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Box{" +
                "content=" + content +
                '}';
    }
}

public class BoxDemo {
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>("Hello Generics");
        System.out.println(stringBox.getContent());  // Hello Generics

        Box<Integer> integerBox = new Box<>(123);
        System.out.println(integerBox.getContent());  // 123
    }
}
```

**这段代码做了什么？**  
1. 定义一个带有类型参数 `T` 的类 `Box<T>`，这意味着 Box 可以存放任何类型的对象，使用时确定具体类型。  
2. `content` 字段类型是 `T`，构造器和 getter/setter 都使用了 `T`，保证存取时类型一致。  
3. 在 `main` 方法中，分别创建了装字符串和装整数的盒子。编译器在编译时帮助校验类型安全，比如你不能把一个 `Integer` 放到 `Box<String>` 中。

### 为什么用泛型类？  
- 避免了强制类型转换，代码更安全  
- 增强代码复用性，不同类型共用一份代码  
- 提升可读性，开发时一眼看出操作的具体类型

---

## 2. 泛型方法：方法也能“泛型”，更灵活

既然类能泛型，方法当然也能。泛型方法允许你在方法定义中引入类型参数，跟泛型类类似，但它独立于类的类型参数。它能让方法更灵活，接受不同类型并保证类型安全。

```java
public class GenericMethodDemo {

    /**
     * 泛型方法：打印数组的所有元素
     * @param array 泛型数组，元素类型为 T
     * @param <T> 类型参数
     */
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4};
        String[] stringArray = {"Java", "Generics", "Rocks"};

        printArray(intArray);       // 1 2 3 4 
        printArray(stringArray);    // Java Generics Rocks 
    }
}
```

**这段代码做了什么？**  
1. `printArray` 是一个泛型方法，定义了类型参数 `<T>`，可以接受任何类型的数组。  
2. 通过增强型 `for` 循环打印数组，每个元素都是 `T` 类型。  
3. `main` 中调用时，自动推断类型，无需额外转换。  

### 理解泛型方法  
你可以把它想象成一把灵活的工具，能针对不同类型做相似操作，类型安全又通用。

---

## 3. 类型擦除（Type Erasure）：幕后操作员

泛型虽然看起来像是在运行时有“不同的类型”，实际上 JVM 并不保存泛型的具体类型信息，所有泛型信息都会在编译后被“擦除”（Type Erasure）。这一步听起来有点抽象，让我们来拆开说说。

### 为什么要擦除类型？

Java 设计时考虑到了兼容性——兼容旧版不支持泛型的 JVM。为了让泛型编译后的代码能够在旧 JVM 上运行，类型参数会被擦除，替换成它的限定类型（通常是 `Object`），同时编译器会插入必要的类型转换代码保证安全。

### 简单示例

```java
public class TypeErasureDemo {
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>("Hello");
        Box<Integer> integerBox = new Box<>(42);

        // 编译后大致等同于：
        // Box stringBox = new Box("Hello");
        // Box integerBox = new Box(42);

        // 只能强制转换才能取得具体类型
        String content = (String) stringBox.getContent();
        Integer number = (Integer) integerBox.getContent();
    }
}
```

虽然我们在代码里写的 `Box<String>` 和 `Box<Integer>`，但编译生成的字节码中，`Box` 只剩一个没有泛型参数的类，所有类型转换都是编译器帮忙加上的。

这种设计让泛型既安全，又兼容，但也带来一些限制，比如不能直接操作泛型的具体类型或创建泛型数组。

---

## 4. 通配符 `?`：灵活又安全的泛型边界

当我们使用泛型容器时，经常碰到需要接受多种不同的泛型类型，但又需要限制范围，让类型安全与灵活共存。这个时候，通配符（wildcard）就登场了。

### `? extends T` 和 `? super T` 的区别

- `? extends T`：代表某种 `T` 的子类型或 `T` 本身。适合读取，但通常你无法安全写入。  
- `? super T`：代表某种 `T` 的父类型或 `T` 本身。适合写入，但读取时只保证是 `Object` 类型。

> 你可以把这俩理解成“读取协变”（extends）和“写入逆变”（super）。

### 用例示范

```java
import java.util.ArrayList;
import java.util.List;

public class WildcardDemo {

    // 读取容器，接受所有类型为 Number 或其子类的 List
    public static void printNumbers(List<? extends Number> list) {
        for (Number num : list) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // 向容器写入，接受所有类型为 Integer 或其父类的 List
    public static void addIntegers(List<? super Integer> list) {
        list.add(10);
        list.add(20);
    }

    public static void main(String[] args) {
        List<Integer> intList = new ArrayList<>();
        intList.add(1);
        intList.add(2);

        List<Double> doubleList = new ArrayList<>();
        doubleList.add(3.14);
        doubleList.add(2.71);

        printNumbers(intList);      // 1 2 
        printNumbers(doubleList);   // 3.14 2.71

        List<Number> numberList = new ArrayList<>();
        addIntegers(numberList);

        for (Object obj : numberList) {
            System.out.print(obj + " ");  // 10 20
        }
        System.out.println();
    }
}
```

**这段代码做了什么？**  
1. `printNumbers` 接受所有 `Number` 的子类列表，安全读取，但不能写入（否则类型不安全）。  
2. `addIntegers` 接受 `Integer` 或其父类列表，可以安全写入。  
3. 通过两个方法演示了通配符的读写权限限制。

---

## 5. 泛型限制：让泛型“更聪明”

有时，我们希望泛型不仅能接受任何类型，还要限定范围，比如只能是“数字”类型或实现了某接口的类型。泛型限制（bounded type parameters）帮我们实现这一点。

### 示例：限定泛型参数为 Number 的子类

```java
public class BoundedGeneric<T extends Number> {
    private T number;

    public BoundedGeneric(T number) {
        this.number = number;
    }

    public double doubleValue() {
        // Number 有 doubleValue 方法，可以调用
        return number.doubleValue();
    }

    public static void main(String[] args) {
        BoundedGeneric<Integer> boundedInteger = new BoundedGeneric<>(123);
        System.out.println(boundedInteger.doubleValue());  // 123.0

        BoundedGeneric<Double> boundedDouble = new BoundedGeneric<>(45.67);
        System.out.println(boundedDouble.doubleValue());   // 45.67

        // 编译错误：String 不是 Number 子类
        // BoundedGeneric<String> boundedString = new BoundedGeneric<>("abc");
    }
}
```

**这段代码做了什么？**  
- 类型参数 `T` 限制为 `Number` 或其子类，所以只能传入支持数字操作的类型。  
- 在方法内部，可以直接调用 `Number` 的方法，比如 `doubleValue()`，不用担心类型错误。  

---

:::warning ⚠️ 常见陷阱

- **不能用基本类型作为泛型参数**：比如不能写 `Box<int>`，必须用包装类 `Box<Integer>`，这是由于 Java 泛型限制和类型擦除导致的。  
- **泛型数组不能直接创建**：`T[] array = new T[10];` 会编译失败。解决方案通常是创建 `Object[]`，然后强制转换，或者使用集合类代替数组。  
- **泛型与继承的奇怪表现**：`List<String>` 不是 `List<Object>` 的子类，不能直接赋值，这容易让人混淆。  
- **擦除后类型信息丢失**：运行时无法判断泛型具体类型，导致某些操作受限，比如不能使用 `instanceof` 判断带泛型的类型。
:::
---

:::tip 💡 实战建议

- **优先使用泛型集合代替原始类型集合，确保编译时类型安全**。这能大大降低运行时异常发生的概率。  
- **通配符的灵活使用**：当你只读容器内容时，尽量用 `? extends T`；当你需要写入时，用 `? super T`。这可以避免类型转换错误，写出可维护代码。  
- **泛型限制让代码更具语义化，也能调用限定类型的特有方法，避免强制转换**。  
- **避免在接口定义中滥用泛型，保留合理抽象层级**，防止复杂泛型签名使接口难以使用。  
- **结合 Java 8+ 的 Stream API，泛型配合函数式编程简化代码**，提高表现力和可读性。
:::
---

:::details 🔍 深入理解：泛型与类型擦除的技术细节

泛型的实现中，类型擦除会做以下两件事：

1. **类型参数替换**：用限定类型替换所有类型参数。如果没有显式限制，替换为 `Object`。  
2. **桥接方法生成**：编译器为保证重写兼容性，生成“桥接方法”。比如，泛型类重写父类方法时，不同泛型擦除类型导致的签名差异，需要桥接方法保持调用一致。

理解这背后的机制，也是阅读和维护大型 Java 泛型代码的基础。  
:::
---

## 小结

- 泛型让类和方法可以针对不同类型重用代码，避免强制类型转换，实现更安全的类型检查。  
- 类型擦除是 Java 泛型背后的实现机制，运行时泛型类型信息不可用。  
- 通配符 `? extends` 和 `? super` 管理泛型的读取和写入权限，保证灵活又安全。  
- 泛型限制用来约束类型参数，赋予泛型更多能力。  
- 使用泛型时注意常见陷阱，结合实战建议能写出稳健、优雅的代码。

---

感谢你一起探索 Java 泛型编程的奥秘！泛型看似复杂，但理解了本质和设计理念后，你会发现它是 Java 里最强大又好用的工具之一。继续练习和积累经验，你会在项目中感受到它带来的巨大便利。

```java
// 最后的练习：写一个泛型方法，实现两个数组元素的合并
public class ArrayUtils {
    public static <T> T[] concatenateArrays(T[] first, T[] second) {
        // 创建一个长度为两个数组长度之和的新数组
        T[] result = java.util.Arrays.copyOf(first, first.length + second.length);
        System.arraycopy(second, 0, result, first.length, second.length);
        return result;
    }

    public static void main(String[] args) {
        Integer[] ints1 = {1, 2, 3};
        Integer[] ints2 = {4, 5};
        Integer[] combined = concatenateArrays(ints1, ints2);
        for (int num : combined) {
            System.out.print(num + " ");
        }
        // 输出结果：1 2 3 4 5 
    }
}
```

这段代码练习了泛型方法的创建和数组操作，尝试自己修改合并逻辑，加深印象吧！

---
```
