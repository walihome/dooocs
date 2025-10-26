---
title: Set接口与实现  
description: 详细讲解Java中Set接口的主要实现类HashSet、LinkedHashSet和TreeSet，探讨它们的去重机制和排序原理。  
order: 22  
keywords: [Java, Set接口, HashSet, LinkedHashSet, TreeSet, 去重, 排序]  
---

# Set接口与实现

## 前置知识  
> 在阅读本章前,你需要了解: Java集合框架的基础知识，尤其是Collection接口，和基本的泛型使用。

## 为什么需要 Set 接口?

想象你正在写一个社交网络应用，需要存储一批用户的好友列表。显然，好友不能重复出现，对吧？这时候，普通的List就不太合适，因为它允许重复元素。Java中，Set接口出现正是为了解决“去重”这一常见需求。

但Set不只有去重，它还有不同的实现带来不同的性能和排序特性。你可能会好奇：到底该选哪个Set？它们背后有什么原理？让我们一步步揭开Set家族的神秘面纱。

---

## Set接口与三大常用实现简介

先用“人话”说明Set接口和它的三大常用实现：

- **Set接口**：表示无序且不重复的元素集合。
- **HashSet**：基于哈希表实现，提供最快的元素存取速度，但不保证顺序。
- **LinkedHashSet**：继承自HashSet，保持元素的插入顺序。
- **TreeSet**：基于红黑树（自平衡二叉搜索树）实现，自动排序，遍历时按自然顺序或自定义比较器顺序。

### 为什么需要它们？

每个实现满足不同应用需求：  
- 如果你只关心“去重”和“快速查找”，用HashSet。  
- 如果你还想“记住元素加入的顺序”，用LinkedHashSet。  
- 如果你需要“排序后的结果”，用TreeSet。

接下来，我们用代码来见识它们的具体表现。

---

## 代码示例 1：HashSet去重演示

```java
import java.util.HashSet;
import java.util.Set;

public class HashSetDemo {
    public static void main(String[] args) {
        Set<String> usernames = new HashSet<>();
        usernames.add("alice");
        usernames.add("bob");
        usernames.add("alice"); // 重复元素，添加不会生效

        for (String name : usernames) {
            System.out.println(name);
        }
    }
}
```

这段代码做了什么：  
1. 创建了一个HashSet集合用来存放用户名。  
2. 添加了两个元素"alice"和"bob"，又尝试添加重复的"alice"。  
3. 通过for-each遍历，打印集合中的元素。

**解释:**  
- HashSet利用元素的`hashCode()`和`equals()`方法判断重复。  
- 这里“alice”重复添加时，第二次被忽略。  
- 输出结果中只会看到“alice”和“bob”，顺序是不确定的。

---

## 代码示例 2：LinkedHashSet保持插入顺序

```java
import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetDemo {
    public static void main(String[] args) {
        Set<String> usernames = new LinkedHashSet<>();
        usernames.add("charlie");
        usernames.add("bob");
        usernames.add("alice");
        usernames.add("bob"); // 重复元素，不会添加

        for (String name : usernames) {
            System.out.println(name);
        }
    }
}
```

这段代码做了什么：  
1. 使用LinkedHashSet代替HashSet。  
2. 添加了若干用户名，包括重复的"bob"。  
3. 遍历并打印结果。

**解释:**  
- LinkedHashSet内部维护了一个双向链表，保证元素遍历时顺序和插入顺序一致。  
- 仍然通过`hashCode()`和`equals()`判断重复。  
- 输出顺序必定是 `"charlie", "bob", "alice"`，重复的"bob"被过滤。

---

## 代码示例 3：TreeSet自动排序和自定义比较器

```java
import java.util.Comparator;
import java.util.Set;
import java.util.TreeSet;

public class TreeSetDemo {
    public static void main(String[] args) {
        // 使用默认自然排序（字符串字典序）
        Set<String> defaultSorted = new TreeSet<>();
        defaultSorted.add("banana");
        defaultSorted.add("apple");
        defaultSorted.add("pear");

        System.out.println("默认排序:");
        for (String fruit : defaultSorted) {
            System.out.println(fruit);
        }

        // 使用自定义比较器，按字符串长度排序
        Set<String> lengthSorted = new TreeSet<>(Comparator.comparingInt(String::length));
        lengthSorted.add("banana");
        lengthSorted.add("apple");
        lengthSorted.add("kiwi");

        System.out.println("\n按长度排序:");
        for (String fruit : lengthSorted) {
            System.out.println(fruit);
        }
    }
}
```

这段代码做了什么：  
1. 创建了一个TreeSet，默认按照字符串自然顺序排序。  
2. 创建另一个TreeSet，使用自定义比较器按字符串长度排序。  
3. 分别打印两种排序结果。

**解释:**  
- TreeSet底层是红黑树结构，通过`compareTo()`或比较器结果判断元素顺序和是否重复（注意这点与HashSet不同）。  
- 默认排序结果是 `"apple", "banana", "pear"`（字典序）  
- 自定义排序结果是 `"kiwi", "apple", "banana"`（按长度）

---

## 深入理解Set三个实现的差异

| 实现类         | 底层数据结构            | 是否排序 | 是否保证顺序 | 查找效率 | 去重依据           |
| -------------- | --------------------- | -------- | ------------ | -------- | ------------------ |
| HashSet        | Hash表                 | 否       | 否           | O(1)     | `.hashCode()` + `.equals()` |
| LinkedHashSet  | Hash表 + 双向链表       | 否       | 是（插入顺序）| O(1)     | `.hashCode()` + `.equals()` |
| TreeSet        | 红黑树（二叉搜索树）     | 是       | 是（排序顺序）| O(log n) | `compareTo()` 或比较器返回值  |

### 去重机制关键点对比：

- HashSet和LinkedHashSet判断元素是否重复，依据元素的`hashCode()`和`equals()`是否相等。  
- TreeSet依赖元素的`compareTo()`或比较器，判断结果为零才认为是重复元素。

> 这里有个常见坑：如果TreeSet的比较器逻辑和`equals()`不一致，可能导致行为异常。（后面再详细说）

---

:::warning ⚠️ 常见陷阱：HashSet中的hashCode()与equals()

很多小伙伴以为只要重写`equals()`就够了，殊不知，HashSet判断是否重复，先看`hashCode()`，再看`equals()`。

- 如果`hashCode()`没有正确重写，可能导致不同实例被放入相同的桶中，或冲突过多，性能下降。  
- 更糟的是，`hashCode()`和`equals()`不一致，会导致Set无法正确识别重复元素。

> 如果你重写了一个类的`equals()`方法，一定也要重写`hashCode()`，保持两者的一致性。
:::
---

:::warning ⚠️ TreeSet使用比较器时的坑

TreeSet依靠比较器判断元素顺序和重复，如果比较器逻辑不一致（相比`equals()`），会带来“元素重复判断失误”的问题：

比如：如果比较器根据某些字段排序，忽略另一些字段，可能两个实际上不等的对象被认为相等，导致其中一个被丢弃。

```java
import java.util.Set;
import java.util.TreeSet;

class Person {
    String name;
    int age;
    // 构造和getter略

    // equals和hashCode按name和age实现
    @Override
    public boolean equals(Object o) { /*...*/ }
    @Override
    public int hashCode() { /*...*/ }
}

public class TreeSetPitfall {
    public static void main(String[] args) {
        Set<Person> people = new TreeSet<>(
            Comparator.comparing(p -> p.name) // 只比较名字，忽略年龄
        );

        // 添加两个同名不同年龄的Person，会被认为元素重复
    }
}
```

这里，如果你不注意，可能丢失真正应该保留的多个元素。
:::
---

:::tip 💡 实战建议

1. **选择实现类时，明确需求：**  
   - 仅去重且关注性能，选HashSet。  
   - 需要有序遍历，选LinkedHashSet。  
   - 需要排序输出，且元素具备比较能力，选TreeSet。

2. **重写hashCode和equals是HashSet和LinkedHashSet正确工作的基础。**

3. **对比TreeSet时，确保比较器和equals保持语义一致，避免元素丢失和逻辑混乱。**

4. **多线程环境请慎重使用这些非线程安全集合，考虑用ConcurrentSkipListSet或同步包装。**
:::
---

## 代码解析小结

以第二个示例的LinkedHashSet为例，执行时内存结构可想象为：

- 当执行 `usernames.add("charlie")` 时，  
  - Hash函数计算位置，元素放入对应桶，并插入双向链表尾部。  
- 重复添加"bob"时，HashSet发现元素已存在，跳过。  
- 遍历时，双向链表保证按插入顺序输出。

这一点和HashSet不同，后者遍历顺序无序，因其仅依赖Hash表。

---

## 小结  

- Set接口本质是“无重复元素集合”，适合需要去重数据存储的场景。  
- HashSet提供最快的增删查操作，但不保证顺序。  
- LinkedHashSet在HashSet基础上保持插入顺序，适合需要顺序性场景。  
- TreeSet基于红黑树实现，自动排序，遍历有序，但性能相对低。  
- 正确重写hashCode、equals和比较器是保证Set使用正确和高效的关键。  
- 了解各实现的内部机制，有助于写出内存和性能表现良好的代码。

---

## 延伸思考 🔍

- 如果想自己实现一个支持去重且自定义排序规则的Set，应该重点关注哪些设计部分？  
- 在海量数据、并发环境下，如何确保Set集合既高效又线程安全？  
- 有没有办法组合Set特性实现，兼顾快速查找、顺序遍历和自动排序？

欢迎你带着这些问题去实验和探索，相信体验过背后的机制后，你会写出更优雅和健壮的代码。

---

感谢你陪我一起迈入Set的世界, 希望你享受这个探索过程! 如果你有任何疑惑，我们可以接着聊。