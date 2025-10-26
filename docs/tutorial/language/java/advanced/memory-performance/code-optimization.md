---
title: 代码性能优化
description: 通过算法优化、合理选择数据结构和避免对象创建，提升 Java 程序性能
order: 56
keywords: [代码性能, 算法优化, 数据结构, 对象创建, Java性能]
---

# 代码性能优化

## 前置知识
> 在阅读本章前，你需要了解基本的 Java 语法、常用数据结构（如数组、集合等），以及对时间复杂度的初步认识。

## 为什么需要代码性能优化？

我们都遇到过程序反应慢、“卡顿”，或者突然跑不动的情况。尤其是在处理大量数据或者高并发场景，性能瓶颈就像一堵墙，阻挡了我们程序的流畅运行。你有没有想过，代码执行慢可能不仅仅是因为机器差，而更多是代码写得不够“优雅”？

代码性能优化，简单来说，就是让程序用更少的时间和更少的资源做更多的事。就像我们理财一样，同样的钱花得巧，才能花得好。

这章我们从“算法优化”、“选择合适数据结构”，再到“避免不必要对象创建”三个角度，逐步剖析如何写出既优雅又高效的 Java 代码。

## 具体章节

### 一、算法优化：把工作做到最少

算法优化，是性能提升的根本。想象你要找一本书，不是每一页都翻，而是先看目录，再决定查找范围，这就是算法优化最简单的思想——用更聪明的方法节省时间。

#### 什么是算法优化？

用更优的算法解决相同问题，减少执行的操作次数。它关系着程序的时间复杂度，我们希望让时间复杂度更低，比如从O(n²)降低到O(n log n)，这样程序能跑得快。

#### 简单示例：数组查找优化

假设我们要查找一个数字是否存在于数组中。最笨的方法是遍历所有元素，一直找，时间复杂度是 O(n)：

```java
import java.util.Random;

public class LinearSearchExample {
    public static boolean contains(int[] data, int target) {
        for (int number : data) {
            if (number == target) {
                return true; // 找到，立即返回
            }
        }
        return false; // 遍历完了没找到
    }

    public static void main(String[] args) {
        int[] numbers = {1, 3, 5, 7, 9};
        System.out.println(contains(numbers, 3));  // true
        System.out.println(contains(numbers, 4));  // false
    }
}
```

这段代码很直观，但如果数组非常大，性能会大打折扣。

#### 如何做得更好？

如果数组已经排好序，我们可以用二分查找，将时间复杂度降至 O(log n)：

```java
import java.util.Arrays;

public class BinarySearchExample {
    public static boolean contains(int[] sortedData, int target) {
        int left = 0;
        int right = sortedData.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (sortedData[mid] == target) {
                return true; // 找到了
            } else if (sortedData[mid] < target) {
                left = mid + 1; // 往右边找
            } else {
                right = mid - 1; // 往左边找
            }
        }
        return false; // 找不到
    }

    public static void main(String[] args) {
        int[] sortedNumbers = {1, 3, 5, 7, 9};
        System.out.println(contains(sortedNumbers, 3));  // true
        System.out.println(contains(sortedNumbers, 4));  // false
    }
}
```

**这段代码做了什么：**  
1. 利用数据有序的性质，反复将查找区间对半分割，让查找次数大幅减少  
2. 每次比较后缩小查找区间，直到找到或区间为空  

从线性查找改成二分查找，有时就是性能提升的关键一步。

---

### 二、选择合适的数据结构：用对“工具”，工作更轻松

数据结构，这名字听着挺正式，但生活中其实到处都是“数据结构”——书架、收纳盒、文件夹，它们决定你怎么存东西，怎么取东西。

同样的，我们用不同数据结构，效率差别可不小。

#### 基础介绍

- **数组**：访问速度快，适合大小固定的数据；但插入删除慢，因为要移动元素  
- **链表**：插入删除快，访问慢；适合频繁增删的场景  
- **哈希表（HashMap）**：根据键快速定位值，查找效率高  
- **树（TreeMap、TreeSet）**：有序存储，支持范围查找  

#### 示例：统计字符串中字符频率

我们想统计字符串中每个字符出现的次数。

做法一：使用普通数组存储频率（仅限ASCII码字符）

```java
public class CharFrequencyArray {
    public static void main(String[] args) {
        String text = "performance";
        int[] freq = new int[128];  // ASCII码大小

        for (char ch : text.toCharArray()) {
            freq[ch]++;  // 索引即字符的ASCII码
        }

        for (int i = 0; i < freq.length; i++) {
            if (freq[i] > 0) {
                System.out.println((char) i + ": " + freq[i]);
            }
        }
    }
}
```

这方法快速且简单，适合字符范围已知。

做法二：使用 HashMap，支持任意字符集

```java
import java.util.HashMap;
import java.util.Map;

public class CharFrequencyMap {
    public static void main(String[] args) {
        String text = "performance";
        Map<Character, Integer> freqMap = new HashMap<>();

        for (char ch : text.toCharArray()) {
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : freqMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```

**这段代码做了什么：**  
1. 用 HashMap 存储字符与频率的映射  
2. 每遇到一个字符就更新对应计数  

虽然更通用，但 HashMap 访问会比数组慢，特别是在频率统计这类简单统计里。

---

### 三、避免不必要的对象创建：少来点浪费，性能更好

Java 的内存管理和垃圾回收（GC）都很强大，但频繁创建对象会让回收器压力山大，拖慢程序。

减少临时对象，尤其是在循环或热点代码中，是性能优化中常被忽略但又关键的一步。

#### 示例：字符串拼接

最常见的性能杀手之一就是用 `+` 拼接字符串，尤其在循环里。

```java
public class StringConcatBad {
    public static void main(String[] args) {
        String result = "";
        for (int i = 0; i < 5_000; i++) {
            result += i;  // 每次都创建新字符串对象
        }
        System.out.println("Length: " + result.length());
    }
}
```

**问题点：** Java 中字符串是不可变的，每次用 `+` 拼接都会产生新对象，循环中这样用效率极低。

#### 优化方案：使用 StringBuilder

```java
public class StringConcatGood {
    public static void main(String[] args) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < 5_000; i++) {
            builder.append(i);  // 追加，不创建多余对象
        }
        String result = builder.toString();
        System.out.println("Length: " + result.length());
    }
}
```

这段优化代码明显减少了临时字符串对象，内存占用和 GC 压力都减轻了，代码执行速度也快了很多。

---

:::warning ⚠️ 常见陷阱  
- **陷阱一：盲目提前优化**  
有时候我们过早地去调整性能，反而浪费时间。建议先用简单直观的办法写代码，再用性能分析工具定位热点，针对性优化。  

- **陷阱二：错误选择数据结构**  
选错数据结构，代码逻辑复杂度会暴涨，性能反而下降。记住“用工具做工具该做的事”：数组用来快速访问；链表用来频繁增删；哈希表用来快速查找。

- **陷阱三：忽视内存回收压力**  
频繁创建、丢弃大量对象会频繁触发垃圾回收，导致程序时不时“停顿”，影响响应速度，尤其是内存敏感的环境下。
:::
---

:::tip 💡 实战建议  
- 优先写可读性强且正确的代码，后续再用 profiler（性能分析工具）找瓶颈。  
- 多使用 Java 标准库和高效数据结构，切忌重复造轮子。  
- 对于热路径代码，尽量减少内存消耗和临时对象创建。  
- 定期复盘代码，关注可能的算法优化和数据结构调整。  
:::
---

## 🔍 深入理解：性能优化的权衡艺术

性能优化往往伴随着权衡。最省内存的算法可能计算量大，最优算法代码可能复杂难懂。因此，理解业务需求和性能瓶颈，才能找到最佳平衡。

---

## 实战应用

假设你在开发一个电商库存系统，需要根据用户查询快速匹配大量商品库存信息。如果你使用简单的线性查找，会大幅影响用户体验。通过算法优化（比如使用二分查找），合适的数据结构（比如建立 HashMap 索引），并避免临时对象创建（减少垃圾回收压力），你能打造一个响应迅速且稳定的系统。

---

## 小结

- 算法优化能根本减少程序运算时间，降低时间复杂度至关重要  
- 选择合适的数据结构是性能的基石，不同场景用不同结构  
- 避免不必要的对象创建，减少垃圾收集对性能的影响  

代码性能优化是一个持续积累和调整的过程，需要结合业务场景和实际运行环境，合理应用上述策略。

---

这章我们从算法择优、数据结构运用到内存管理，打造了代码性能优化的“三板斧”。下一步，你可以结合业务诉求，尝试分析项目中的瓶颈，切实用代码实践这些原则。相信我，一旦掌握性能优化，你写出的程序就能让用户和你自己都满意许多。