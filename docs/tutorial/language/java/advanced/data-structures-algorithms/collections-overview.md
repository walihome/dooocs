---
title: 集合框架概述  
description: 了解 Java 集合框架的基础结构，包括 Collection 和 Map 两大体系，学习迭代器模式和如何根据实际需求选择合适的集合类型。  
order: 20  
keywords: [Java, 集合框架, Collection, Map, 迭代器, 数据结构]  
---

# 集合框架概述

## 前置知识
> 在阅读本章前，你需要了解：  
> - Java 基础语法  
> - 面向对象编程的概念（类、接口、继承）  
> - 基本的数据类型和数组使用  

## 为什么需要集合框架？

想象一下，在你的项目中需要存储大量的数据，比如用户信息、订单列表或者商品目录。你可能会下意识地使用数组，但数组有一个不小的缺陷——它的长度是固定的，扩展起来非常不方便。而且，处理这些数据时，常常需要进行搜索、排序、去重等操作，直接用数组你常常得自己写一堆繁琐的代码。  

这就是 Java 集合框架登场的理由。它给我们提供了一套灵活、高效、统一的工具，不管是想顺序存储，还是快速查找，或者是维护不重复元素，集合框架都能帮你搞定。这一章，我们就一起走进 Java 集合的世界，看看它是如何设计的，为什么它让程序员的工作变得轻松了不少。

---

## Collection 和 Map 两大体系

### 先说个大概念

Java 集合框架内部其实有两大“大家庭”：  
- **Collection 家族** —— 用来存储一组元素，像是一箱装满了书的盒子。  
- **Map 家族** —— 用来存储键值对，像一张身份证号对应姓名的表。

这些类别底下还有很多不同的实现，比如 `ArrayList`、`HashSet`、`HashMap` 等，它们各自有自己独特的使用场景和性能特点。

### Collection接口详解

`Collection` 是所有“收集元素”的超接口，它又细分为三大接口：  
- `List`：元素有顺序，可以重复，像排好队的列车，比如 `ArrayList` 和 `LinkedList`。  
- `Set`：元素无序，且不能重复，像一群独立的朋友，比如 `HashSet` 和 `TreeSet`。  
- `Queue`：先进先出，适合排队场景，比如 `LinkedList`（同时实现了 List 和 Queue）和 `PriorityQueue`（优先级队列）。

这些接口定义了集合应有的行为，比如增删改查，遍历等等。

### Map接口详解

`Map` 存储的是“键值对”，你给一串钥匙（键），它对应着一扇门（值）。每个钥匙是唯一的，但一扇门可能被不同钥匙指向。典型的实现有：  
- `HashMap`：基于哈希表，查找速度快但无序。  
- `TreeMap`：基于红黑树，保持键的自然顺序。  
- `LinkedHashMap`：保持插入顺序。

### 为什么这么分？

这就像是我们把不同的存储需求分门别类。你用箱子装东西用的是`Collection`，要做钥匙-房间匹配要用`Map`。每种数据结构都适合不同的“战场”，明白这点能帮我们选对工具，而不是“砸锤子当螺丝刀用”。

---

## 迭代器模式简介

在没有集合框架之前，Java 程序员遍历集合只能靠下标循环（数组）或者大量的条件判断，这很难维护，也容易出错。Java 集合框架引入了**迭代器模式**，让我们能用统一的方式遍历不同的集合。

迭代器就像一个指挥官，帮你一步步“访问”集合中的每个元素，而不需要关心集合内部是怎么存储的。你只需要问它：“下一个元素是什么？”它就能告诉你。

Java 提供了 `Iterator` 和 `ListIterator` 来完成这件事，分别适用于不同的集合类型。它们不仅让遍历更简洁，还支持在遍历过程中安全地删除元素。

---

## 代码示例

### 例 1 - 简单使用 ArrayList 和 Iterator 遍历

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class SimpleCollectionDemo {
    public static void main(String[] args) {
        // 创建一个动态数组，存储字符串
        List<String> fruitList = new ArrayList<>();
        fruitList.add("苹果");
        fruitList.add("香蕉");
        fruitList.add("橘子");

        // 使用迭代器遍历集合
        Iterator<String> iterator = fruitList.iterator();
        System.out.println("水果清单:");
        while (iterator.hasNext()) {
            String fruit = iterator.next(); // 获取下一个元素
            System.out.println(fruit);
        }
    }
}
```

这段代码做了什么？  
1. 初始化一个空的 `ArrayList` 用来存储水果名字。  
2. 往列表中添加三个元素。  
3. 通过迭代器依次访问列表里的元素并打印。

---

### 例 2 - 使用 HashSet 去重，结合增强 for 循环遍历

```java
import java.util.HashSet;
import java.util.Set;

public class HashSetDemo {
    public static void main(String[] args) {
        Set<String> citySet = new HashSet<>();
        citySet.add("北京");
        citySet.add("上海");
        citySet.add("广州");
        citySet.add("上海"); // 重复元素不会被添加

        System.out.println("城市集合:");
        for (String city : citySet) {
            System.out.println(city);
        }
    }
}
```

这段代码做了什么？  
1. 建立一个 `HashSet` 对象，自动帮你保证无重复。  
2. 添加四个城市，其中“上海”重复，`HashSet` 能自动忽略重复。  
3. 使用增强的 for 循环遍历集合元素，保证代码简洁。

这里我们看到，`Set` 能帮你轻松去重，以前你可能需要写判断逻辑，现在一行代码搞定。

---

### 例 3 - 使用 HashMap 存储键值对并遍历

```java
import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
    public static void main(String[] args) {
        Map<Integer, String> userMap = new HashMap<>();
        userMap.put(1001, "张三");
        userMap.put(1002, "李四");
        userMap.put(1003, "王五");

        System.out.println("用户信息:");
        // 遍历 map 的键值对
        for (Map.Entry<Integer, String> entry : userMap.entrySet()) {
            Integer userId = entry.getKey();
            String userName = entry.getValue();
            System.out.println("用户ID：" + userId + "，姓名：" + userName);
        }
    }
}
```

这段代码做了什么？  
1. 创建一个 `HashMap` 用于存储用户ID和姓名的对应关系。  
2. 通过`put`方法插入了三条数据。  
3. 使用 `entrySet` 和增强 for 循环遍历所有键值对，打印内容。

---

## 集合选择策略

选择合适的集合，关键是看你的需求：  

| 需求                         | 推荐类型            | 说明                                     |
|----------------------------|-----------------|----------------------------------------|
| 有序且可能重复的列表               | `ArrayList`/`LinkedList` | `ArrayList` 查找快，`LinkedList` 插入删除快          |
| 保证元素唯一                     | `HashSet`      | 无序，查询添加速度快                            |
| 需要排序                       | `TreeSet`      | 按自然顺序或比较器排序                          |
| 先进先出队列                     | `LinkedList`/`PriorityQueue` | `PriorityQueue` 支持优先级排序                        |
| 键值对存储，快速查找               | `HashMap`      | 无序，查找/插入速度快                            |
| 键值对存储，保持插入顺序            | `LinkedHashMap` | 保留插入顺序                                 |
| 键值对存储，需要排序               | `TreeMap`      | 保持键的排序，这样你可以做范围查询                     |

这张表基本涵盖了日常开发中大多数典型场景。别急着选，先想清楚你的数据特点和性能需求，再拿出“对症下药”的集合。

---

:::warning ⚠️ 常见陷阱  
很多新手程序员喜欢用 `ArrayList` 替代所有集合场景，但当元素数量变大时，频繁的插入和删除操作会导致性能大幅下降。因为 `ArrayList` 底层是数组，移除或插入中间元素时，需要移动后续所有元素。  

如果你的程序涉及大量此类操作，考虑使用 `LinkedList` 或合适的 `Set`/`Map` 实现，可以避免这个问题。  
:::

---

:::tip 💡 实战建议  
- **统一接口，灵活替换**：编程时尽量声明为接口类型（如 `List<String> list = new ArrayList<>();`），这样后续如果需要换 `LinkedList`，只需修改构造器即可。  
- **选择最合适的实现**：别一味追求花哨功能，牢记“简单高效”原则。  
- **线程安全需求**：默认集合不是线程安全的，如需并发访问，考虑使用 `Collections.synchronizedXXX` 或 JUC 包中的并发集合。  
- **掌握迭代器删除**：永远避免在循环中用普通 `for` 配合 `remove`，它会抛异常，要使用迭代器的 `remove()` 方法。  
:::

---

## 小结

- Java 集合框架分为两大体系：**Collection**（存储单元素）和 **Map**（存储键值对）。  
- 通过迭代器统一了各种集合的遍历方式，大大简化代码。  
- 根据不同需求选择合适的集合类型，可以让程序既高效又清晰。  
- 牢记常见坑，比如频繁对 `ArrayList` 删除元素带来的性能问题。  

---

### 课后思考

- 你遇到过哪些场景用错集合导致性能或者程序出错的问题？你是如何定位和解决的？  
- 如果需要一个同时支持元素唯一且按加入顺序遍历的集合，你会选择哪种实现？为什么？  
- 你能实现一个简单的迭代器模式示例吗？这对理解源码有帮助。  

---

这章内容，是你未来玩转 Java 集合的第一把钥匙。做几遍练习，相信你马上能从困惑走向熟练。下一章，我们会深入了解各个集合实现的底层数据结构及其性能特点，敬请期待！