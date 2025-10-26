---
title: 算法基础
description: 了解时间复杂度和空间复杂度，掌握递归、分治、贪心与动态规划等核心算法思想。
order: 28
keywords: [算法基础, 时间复杂度, 动态规划, 递归, Java]
---

# 算法基础

## 前置知识

> 在阅读本章前,你需要了解:  
> - Java 基础语法  
> - 基本的数据结构（数组、列表）  
> - 面向对象编程基础  

## 为什么需要算法基础？

想象一下，你写了一个程序来处理大数据，结果程序运行得非常慢，或者内存溢出了。你是不是会想，为什么相似的功能，别人写的程序就快那么多？这往往和你选择什么算法和数据结构有关。算法基础就像给你的代码打下坚实的基础，让你的程序跑得更快，占用更少的资源。

让我们从最关键的“算法效率”指标开始，逐步认识四大算法思想，真正学会用它们解决问题。

---

## 算法效率：时间复杂度与空间复杂度

简单来说，时间复杂度衡量算法执行需要多少时间，空间复杂度衡量算法运行时需要多少内存。这就像不同的任务，你选择不同的工具，好的工具既快速又省空间。

通常我们用大写的 O 表示复杂度，比如说 O(n) 就表示执行时间随着输入数据量 n 线性增长。

举个生活中的例子：  
- 时间复杂度 O(1)，就像你有一本电话簿，知道号码的页码，直接翻到那页；  
- 时间复杂度 O(n)，则像你要一页页地翻，直到找到号码。

理解了时间和空间复杂度，我们才能在写代码的时候做到心中有数，不走弯路。

---

## 代码示例 1：计算数组元素和的时间复杂度

```java
import java.util.Random;

public class SumArray {
    public static int sum(int[] numbers) {
        int total = 0;
        for (int number : numbers) {  // 遍历数组，累加每个元素
            total += number;
        }
        return total;
    }

    public static void main(String[] args) {
        int n = 10000;
        int[] numbers = new int[n];
        Random random = new Random();

        for (int i = 0; i < n; i++) {
            numbers[i] = random.nextInt(100);
        }

        int sumResult = sum(numbers);
        System.out.println("Sum is: " + sumResult);
    }
}
```

这段代码做了什么：  
1. 创建了一个长度为 n 的数组，随机填充数字。  
2. 用一个循环将数组中所有数字求和。  

**时间复杂度分析**：因为我们必须访问数组中的每个元素一次，所以时间复杂度是 O(n)。空间复杂度是 O(n)，用于存储数组。

---

## 递归（Recursion）

递归有点像俄罗斯套娃，一个问题里面套着一个更小的相同问题。递归函数自己调用自己，每次调用处理一点工作，直到达到终止条件停止。

为什么要用它？  
有些问题天生适合拆成子问题，比如斐波那契数、树遍历。递归让代码优雅且符合思维习惯。

### 递归示例：计算阶乘

```java
public class Factorial {
    public static long factorial(int n) {
        if (n <= 1) {    // 基础条件，阶乘1或0为1
            return 1;
        }
        return n * factorial(n - 1);  // 递归调用
    }

    public static void main(String[] args) {
        int number = 5;
        long fact = factorial(number);
        System.out.println(number + "! = " + fact);
    }
}
```

这段代码做了什么：  
1. 定义了一个递归函数计算阶乘。  
2. 当 n <= 1 时停止递归，返回1。  
3. 否则返回 n 乘以 (n-1) 的阶乘。  

**递归过程可视化**：  
调用 factorial(5) 时，它会调用 factorial(4)，然后 factorial(3)...直到 factorial(1)，最后从最深调用返回结果开始计算。

**时间复杂度**：O(n)，因为函数调用了 n 次。空间复杂度也是 O(n)，因为每次递归调用都会在调用栈上占用空间。

---

## 分治（Divide and Conquer）

分治思想是把大问题拆成小问题，解决后再合并结果。排序算法里的快速排序、归并排序和搜索算法都属于分治。

这和幼儿拼积木有点像，把大积木拆成小块搭好，再拼回去。

---

## 代码示例 2：归并排序（Divide and Conquer）

```java
import java.util.Arrays;

public class MergeSort {
    public static int[] mergeSort(int[] array) {
        if (array.length <= 1) {
            return array;
        }

        int mid = array.length / 2;
        int[] left = mergeSort(Arrays.copyOfRange(array, 0, mid));      // 左半部分排序
        int[] right = mergeSort(Arrays.copyOfRange(array, mid, array.length));  // 右半部分排序

        return merge(left, right);
    }

    private static int[] merge(int[] left, int[] right) {
        int[] merged = new int[left.length + right.length];
        int l = 0, r = 0, idx = 0;

        while (l < left.length && r < right.length) {
            if (left[l] <= right[r]) {
                merged[idx++] = left[l++];
            } else {
                merged[idx++] = right[r++];
            }
        }
        while (l < left.length) {
            merged[idx++] = left[l++];
        }
        while (r < right.length) {
            merged[idx++] = right[r++];
        }
        return merged;
    }

    public static void main(String[] args) {
        int[] data = {38, 27, 43, 3, 9, 82, 10};
        int[] sorted = mergeSort(data);

        System.out.println("Sorted array: " + Arrays.toString(sorted));
    }
}
```

这段代码做了什么：  
1. 将数组不断折半，直到拆成单元素数组。  
2. 两两合并排序的子数组，最后合成一个有序数组。  

**时间复杂度**：O(n log n)，因为拆分过程是对数级别，合并是线性的。

---

## 贪心算法（Greedy Algorithm）

贪心算法像行走迷宫时每步都选看起来最优的方向，不回头。它用局部最优解尝试推导全局最优，有些问题能用，有些不能。

### 贪心示例：零钱兑换（贪心策略）

```java
import java.util.Arrays;

public class CoinChange {
    public static int minCoins(int[] coins, int amount) {
        Arrays.sort(coins);  // 先排序，准备从大到小用硬币
        int count = 0;
        int remaining = amount;

        for (int i = coins.length - 1; i >= 0 && remaining > 0; i--) {
            count += remaining / coins[i];       // 先用最大面额硬币
            remaining %= coins[i];              // 剩余金额递减
        }

        if (remaining != 0) {
            return -1; // 无法找零
        }
        return count;
    }

    public static void main(String[] args) {
        int[] coins = {1, 5, 10, 25};
        int amount = 63;
        int minCoinCount = minCoins(coins, amount);

        System.out.println("Minimum coins needed: " + minCoinCount);
    }
}
```

这段代码做了什么：  
1. 将硬币按面额排序。  
2. 从最大面额开始，尽量用多硬币，减少剩余值。  
3. 如果剩余不能被硬币整除，返回失败。

**适用场景**: 钱币面额满足“贪心属性”的情况下有效，比如美金硬币。若硬币面额不合理，贪心解不一定最优。

---

## 动态规划（Dynamic Programming）

动态规划像你记笔记，解决复杂问题时，把子问题的答案存下来，重复用，避免重新计算。就像备忘录。

它适用于有“重叠子问题”和“最优子结构”的问题。

---

## 代码示例 3：斐波那契数列（动态规划）

```java
public class FibonacciDP {
    public static long fibonacci(int n) {
        if (n <= 1) {
            return n;
        }

        long[] dp = new long[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];  // 利用已计算过的值求当前值
        }
        return dp[n];
    }

    public static void main(String[] args) {
        int n = 50;
        long fibValue = fibonacci(n);
        System.out.println("Fibonacci number at position " + n + " is " + fibValue);
    }
}
```

这段代码做了什么：  
1. 定义数组存储斐波那契数列的每个位置的值。  
2. 从小到大计算直到第 n 个位置。  
3. 重复子问题只计算一次，节约时间。

**相比递归**：递归版本会多次计算相同子问题，时间复杂度为 O(2^n)，而动态规划是 O(n)。

---

:::warning 常见陷阱

- **递归未设置终止条件**：这会导致无限递归，程序崩溃。写递归函数时，务必保证终止条件正确且一定会被触发。  
- **贪心算法并非总是最优**：尽管思路简单，部分问题贪心策略给不出最优解，比如零钱换成某些面额组合时。要判断问题是否适合用贪心。  
- **动态规划空间耗费**：使用数组记忆通常会带来额外空间开销，注意是否可以用状态压缩减少空间。
:::
---

:::tip 💡 实战建议

- 选算法之前，先分析问题是否有重复子问题或者特殊结构，帮助你选用递归、分治、贪心还是动态规划。  
- 时间复杂度和空间复杂度需要权衡，有时牺牲一点空间可以大幅度节省时间。  
- 养成用注释和简洁代码表达算法思想的习惯，方便自己和团队维护。  
- 对于大数据量，优先考虑 O(n log n) 甚至 O(n) 的算法，避免 O(n²) 及以上复杂度。
:::
---

## 小结

- 时间复杂度和空间复杂度帮助你预测算法效率，挑对算法很关键。  
- 递归将大问题拆小，优雅但要防止栈溢出。  
- 分治通过分割合并高效处理问题，比如归并排序。  
- 贪心策略贪图每步局部最优，不总是全局最优。  
- 动态规划利用重叠子问题，将重复计算转化为查表，大幅提升效率。

每个算法思想都有适用场景和限制，理解它们背后的逻辑，才能写出既高效又可靠的代码。期待你在项目中遇到问题时，能轻松拿出合适的“法宝”。

---

## 深入思考

- 你能设计一个非递归版本的阶乘算法吗？它的空间和时间复杂度怎么样？  
- 在现实项目中，如何权衡算法效率和代码可读性？这两者有冲突时你会如何选择？  
- 动态规划有时也会有状态爆炸问题，你会考虑哪些方法避免或缓解这一点？

---

期待你带着这些问题，动手写写代码，慢慢成为算法高手！