---
title: 继承
description: 探索 Java 继承机制，包括 extends 关键字、方法重写、super 用法、Object 类以及继承链的工作原理。
order: 10
keywords: [java, 继承, extends, 方法重写, super, Object类, 继承链]
---

# 继承

## 前置知识
> 在阅读本章前，你需要了解：  
> - Java 类和对象的基础  
> - 方法定义与调用  
> - 基本的访问修饰符（public、protected、private）

## 为什么需要继承？

想象一下，我们正在开发一个动物管理系统。我们发现“狗”和“猫”都有“吃饭”、“睡觉”等相似行为。如果每个类别都单独写一遍这些方法，代码就会重复，维护起来很麻烦。那么，有没有办法让“狗”和“猫”共享这些共同的行为和属性呢？这正是继承的价值所在。

继承让我们能够创建一个“基类”（父类），把大家共有的代码放进去，然后其他“子类”继承这个基类，同时可以增加它们特有的行为。这样代码不仅整洁，且更符合现实世界的层次结构。

---

## 继承的核心概念

### 什么是继承？

**继承**是面向对象编程中的机制，一个类（子类）可以从另一个类（父类）获得属性和方法。用一句话来说，子类**“是”**父类的一种特殊类型。

- **extends 关键字**用于声明继承。
- 子类自动拥有父类的非私有成员（属性和方法）。
- 子类可以重写父类的方法以实现不同的行为。
- Java 中所有类默认继承自 `Object` 类。

### 为什么需要继承？

1. **代码重用**：把公共代码放父类，减少重复。
2. **可扩展性**：方便添加新行为而不修改已有代码。
3. **多态性**（将在后续章节详细讲解）：基于继承，可以实现方法表现多态。

---

## 基础示例 - 用 extends 创建继承关系

我们先写一段简单的代码，让“动物”和“狗”之间发生继承。

```java
// 定义一个基类 Animal，表示动物
class Animal {
    void eat() {
        System.out.println("动物正在吃东西");
    }
}

// Dog 继承自 Animal，自动拥有 eat 方法
class Dog extends Animal {
    void bark() {
        System.out.println("狗正在叫");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();  // 继承自 Animal 类的方法
        dog.bark(); // Dog 类自己的方法
    }
}
```

这段代码做了什么？  
1. `Animal` 类定义了一个 `eat()` 方法。  
2. `Dog` 类用 `extends Animal` 表示继承了 `Animal`，因此 `Dog` 自动拥有 `eat()` 方法。  
3. 在 `main` 方法中，我们创建了 `Dog` 的实例，它既能调用 `eat()`，也能调用 `bark()`。

---

## 方法重写（Override）——让子类改变父类行为

默认情况下，子类继承父类的方法，但有时子类希望让某个方法表现得不一样，比如“狗吃东西”跟“动物吃东西”不太一样，这时就需要方法重写。

```java
class Animal {
    void eat() {
        System.out.println("动物吃食物");
    }
}

class Dog extends Animal {
    @Override
    void eat() {
        System.out.println("狗爱吃骨头");
    }

    void bark() {
        System.out.println("狗正在叫");
    }
}

public class MethodOverrideDemo {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Dog myDog = new Dog();

        myAnimal.eat(); // 调用 Animal 的 eat
        myDog.eat();    // 调用 Dog 重写的 eat
    }
}
```

这段代码做了什么？  
1. `Dog` 重写了父类 `Animal` 的 `eat` 方法，用自己的实现替代它。  
2. 当你调用 `myDog.eat()` 时，执行的是子类 `Dog` 中的新行为。  
3. 使用 `@Override` 注解帮助我们避免拼写错误，并明确表示重写关系。

---

## super 关键字——访问父类的成员

重写后，有时可能还想调用父类的方法，比如先执行父类的功能，再执行子类的额外逻辑。`super` 关键字就能帮我们做到这点。

```java
class Animal {
    void eat() {
        System.out.println("动物吃食物");
    }
}

class Dog extends Animal {
    @Override
    void eat() {
        super.eat(); // 调用父类的 eat
        System.out.println("狗爱吃骨头");
    }
}

public class SuperKeywordDemo {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();
    }
}
```

执行结果是：  
```
动物吃食物
狗爱吃骨头
```

解释：  
- 调用 `super.eat()` 让 `Dog` 先执行父类的 `eat` 方法。  
- 接着执行 `Dog` 的特殊逻辑。  
- 这样既复用了父类代码，又能扩展行为。

---

## 继承链与 Object 类

你可能疑惑，我们的代码里都没有写继承 `Object`，但为什么所有类都能调用 `toString()` 或 `equals()` 呢？

在 Java 里，所有类最终都继承自 `java.lang.Object` 类。这个类里定义了一些基础方法，比如：

- `toString()`：返回对象的字符串表示  
- `equals(Object o)`：判断两个对象是否相等  
- `hashCode()`：对象的哈希值  

继承链是父类关系的链条，例如：

```
Dog -> Animal -> Object
```

如果一个方法子类和父类里都没定义，它就会去祖先类那里找，直到 `Object`。

---

## 综合示例：继承链、多态与 super

我们稍微复杂一点，用继承链，更清楚 `super` 和方法重写的效果。

```java
class Animal {
    void eat() {
        System.out.println("动物正在吃东西");
    }
}

class Dog extends Animal {
    @Override
    void eat() {
        System.out.println("狗吃骨头");
    }

    void bark() {
        System.out.println("狗叫：汪汪");
    }
}

class Puppy extends Dog {
    @Override
    void eat() {
        super.eat();  // 调用 Dog 的 eat
        System.out.println("小狗还吃奶");
    }

    void weep() {
        System.out.println("小狗在哭泣");
    }
}

public class InheritanceChainDemo {
    public static void main(String[] args) {
        Puppy littlePuppy = new Puppy();

        littlePuppy.eat();   // 调用 Puppy 重写的 eat
        littlePuppy.bark();  // 继承自 Dog
        littlePuppy.weep();  // 自己的方法
    }
}
```

执行结果：
```
狗吃骨头
小狗还吃奶
狗叫：汪汪
小狗在哭泣
```

解析：  
1. `Puppy` 重写了 `eat()` 方法，但它先调用了 `super.eat()`，也就是 `Dog` 的 `eat()`。  
2. 接着执行 `Puppy` 自己的扩展。  
3. `Puppy` 能直接访问 `Dog` 的 `bark()` ，以及继承的 `Animal` 成员。  
4. 这体现了继承链的威力和层层叠加的行为。

---

:::warning ⚠️ 常见陷阱

- **父类私有成员不可继承**：`private` 方法和变量不能被子类直接访问，即使声明了继承。  
- **子类构造函数必须调用父类构造函数（默认或显式）**，否则编译器会报错。  
- **方法签名必须完全匹配才能算重写**，包括参数类型、数量和返回类型。  
- **避免滥用继承，组合优先原则**：如果只是想“使用”另一个类的功能，组合比继承更灵活。  
- **调用 `super` 时，注意父类方法行为，防止逻辑混乱**。

:::

---

## 实战建议

继承虽然强大，但千万别随便用。一个实用经验是：  
- 当多个类有共同行为时，才考虑继承；  
- 设计良好的父类，尽量只做稳定，通用的功能；  
- 子类专注扩展和特化，避免修改父类代码；  
- 用 `@Override` 注解保证正确重写方法；  
- 保持继承链简洁，不要超过三层，避免维护困难；  
- 深入理解 `Object` 提供的方法，尤其 `equals` 和 `hashCode`，它们对集合使用至关重要。

---

## 总结

- Java 通过 `extends` 支持类间继承，实现代码复用和行为扩展。  
- 子类继承父类公共和受保护成员，默认获得它们的方法和属性。  
- 子类可以重写父类方法，通过 `@Override` 标注，改变行为。  
- `super` 关键字可访问父类成员，调用被覆盖方法或构造函数。  
- 所有类隐式继承自 `java.lang.Object`，形成继承链。  
- 保持继承结构清晰，避免常见陷阱和过度设计。

---

## 延伸思考

- 如果一个类同时继承两个父类会怎样？（Java 为什么不支持多继承？）  
- 如果父类方法使用了私有成员，子类重写后会不会影响父类的行为？  
- 继承和接口有什么本质区别？什么时候该用接口替代继承？  

尝试自己设计一组基类和子类，体验继承的灵活性和潜在风险吧。

---

希望这章内容帮你真正理解了 Java 的继承基础。它是构建面向对象系统的基石，但掌握它的精髓比机械记忆关键。有什么问题或实际项目中的困惑，随时聊！