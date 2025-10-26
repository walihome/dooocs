---
title: 常用算法实战
description: 本章将带你一步步实现几种常见的排序、查找、字符串处理及图算法基础，掌握算法背后的思想和实战技巧。
order: 29
keywords: [排序算法, 查找算法, 字符串算法, 图算法, Java]
---

# 常用算法实战

## 前置知识
> 在阅读本章前，你需要了解：Java基础语法、数组和集合的使用、基本的控制流（循环、条件判断）。

---

## 为什么需要掌握常用算法？

还记得你第一次在项目中遇到需要对大量数据进行处理的场景吗？比如对用户列表排序，或者在社交网络中查找两人之间的关系路径。这些问题看似简单，但没有合适的算法支撑，代码很可能又慢又复杂，维护起来头疼。 

算法其实就是解决这类问题的“套路”和“工具箱”。掌握它们不仅能让程序运行得更快，还能让代码更简洁易懂。我们这章就用Java带你实现几种实用又典型的算法，从排序、查找，到字符串处理，再到图的基础操作，帮你打好算法基础。

---

## 章节结构

- 排序算法：冒泡排序、快速排序
- 查找算法：二分查找
- 字符串算法：最长公共子串
- 图算法基础：深度优先搜索（DFS）

---

## 排序算法入门：冒泡排序

### 什么是冒泡排序？用人话讲

想象你有一堆扑克牌，手里拿着一整叠牌。你想把牌按数字从小到大摆好。冒泡排序就像不断比较相邻两张牌，谁大谁往后“冒泡”，一趟下来最大牌就跑到最后。重复这个过程，直到所有牌都排好序。

这是最直观也最容易理解的排序方法——虽然不是最快，但它让我们明白排序的基本思想。

### 为什么要学冒泡排序？

- 它结构简单，易于理解排序的核心机制。
- 为后续学习更高效排序打基础。
- 在数据量小或对性能要求不高时仍然实用。

### 冒泡排序的代码实现

```java
import java.util.Arrays;

public class BubbleSortExample {

    public static void bubbleSort(int[] numbers) {
        int n = numbers.length;
        // 外层循环决定总共需要多少轮比较
        for (int i = 0; i < n - 1; i++) {
            // 内层循环实际进行相邻元素比较并交换
            for (int j = 0; j < n - 1 - i; j++) {
                // 如果前一个数比后一个大，交换它们
                if (numbers[j] > numbers[j + 1]) {
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] data = {5, 3, 8, 4, 2};
        System.out.println("排序前: " + Arrays.toString(data));
        bubbleSort(data);
        System.out.println("排序后: " + Arrays.toString(data));
    }
}
```

**这段代码做了什么？**  
1. `bubbleSort`函数通过两层循环不断比较数组中相邻的元素。  
2. 如果前面的元素比后面的大，就交换它们，让比较大的元素向右“冒泡”。  
3. 每做完一轮，最大的元素就固定在了数组末尾，下一轮比较时可以忽略它。  
4. `main`方法演示了如何调用排序函数并打印结果。

---

## 查找算法：二分查找

### 什么是二分查找？

想象你打开一本厚书去找某个字，翻页时不会一本本全翻，而是先翻到中间，如果字在中间页以后，下一次就在后半部分找。如同这样，每次都把范围减半，快速缩小查找范围。这就是二分查找的基本思路。

### 为什么要学二分查找？

- 它是查找的经典高效算法，时间复杂度从线性的O(n)降到对数的O(log n)。  
- 适合在已排序的数据中快速定位。  
- 很多高级算法和数据结构都基于二分查找思想。

### 二分查找的代码示例

```java
import java.util.Arrays;

public class BinarySearchExample {

    public static int binarySearch(int[] sortedArray, int target) {
        int left = 0, right = sortedArray.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2; // 防止溢出
            if (sortedArray[mid] == target) {
                return mid; // 找到目标元素，返回索引
            }
            if (sortedArray[mid] < target) {
                left = mid + 1; // 目标在右半边
            } else {
                right = mid - 1; // 目标在左半边
            }
        }
        return -1; // 未找到返回 -1
    }

    public static void main(String[] args) {
        int[] sortedData = {1, 3, 5, 7, 9, 12};
        int target = 7;
        int index = binarySearch(sortedData, target);

        if (index >= 0) {
            System.out.println("目标 " + target + " 在索引 " + index);
        } else {
            System.out.println("未找到目标 " + target);
        }
    }
}
```

**这段代码做了什么？**  
1. `binarySearch`利用`left`和`right`指针标记当前查找区间。  
2. 计算中点`mid`并与目标值比较。  
3. 根据比较结果缩小查找区间，直到找到目标或范围变空。  
4. `main`方法演示对有序数组进行查找的过程，并输出结果。

---

## 字符串算法：最长公共子串问题

### 什么是最长公共子串？

想象两个字符串是两条彩带，最长公共子串就是两条彩带上完全相同且连续的那部分颜色最长的段落。不同于最长公共子序列，子串要求字符必须连续。

### 为什么要研究最长公共子串？

- 它是字符串匹配和编辑距离计算的核心。  
- 在生物信息学、文本比较、数据去重等场景中非常实用。  
- 理解背后的动态规划思想，对学习其他算法大有裨益。

### 简单实现最长公共子串的代码

```java
public class LongestCommonSubstring {

    public static int longestCommonSubstring(String s1, String s2) {
        int maxLen = 0;
        int[][] dp = new int[s1.length() + 1][s2.length() + 1];

        // dp[i][j] 表示以 s1[i-1] 和 s2[j-1] 结尾的最长公共子串长度
        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    if (dp[i][j] > maxLen) {
                        maxLen = dp[i][j];
                    }
                } else {
                    dp[i][j] = 0;
                }
            }
        }
        return maxLen;
    }

    public static void main(String[] args) {
        String str1 = "abcdefg";
        String str2 = "xyzabcde";

        int length = longestCommonSubstring(str1, str2);
        System.out.println("最长公共子串长度为: " + length);
    }
}
```

**这段代码做了什么？**  
1. 用二维数组`dp`保存子问题结果，`dp[i][j]`代表以`s1[i-1]`和`s2[j-1]`结尾的最长公共子串长。  
2. 两个字符串的字符相同时，继承左上角的结果加1；否则清零。  
3. 遍历过程中更新最大值`maxLen`。  
4. 最后返回最长公共子串的长度。

---

## 图的基础算法：深度优先搜索（DFS）

### 什么是深度优先搜索？

想象你站在迷宫的入口，不断往深处走，直到无法继续才回溯，尝试另一个路径，这就是深度优先搜索。它用于遍历或搜索图（Vertex + Edge）结构，能帮助我们发现有向无向图中的连通性、路径等信息。

### 为什么学习DFS？

- 图结构在许多领域非常重要，如网络、地图、社交关系。  
- 常用来完成连通性检查、拓扑排序、路径搜索等任务。  
- 理解DFS是理解复杂图算法（如最短路径、环检测）的基础。

### 用邻接表的方式实现无向图的DFS

```java
import java.util.ArrayList;
import java.util.List;

public class GraphDFS {

    // 图的邻接表表示
    static class Graph {
        int vertices;
        List<List<Integer>> adjacencyList;

        public Graph(int vertices) {
            this.vertices = vertices;
            adjacencyList = new ArrayList<>();
            for (int i = 0; i < vertices; i++) {
                adjacencyList.add(new ArrayList<>());
            }
        }

        // 添加无向边
        public void addEdge(int v, int w) {
            adjacencyList.get(v).add(w);
            adjacencyList.get(w).add(v);
        }

        // DFS遍历的辅助函数
        public void dfsUtil(int v, boolean[] visited) {
            visited[v] = true;
            System.out.print(v + " ");

            // 访问所有未被访问的邻居
            for (int neighbor : adjacencyList.get(v)) {
                if (!visited[neighbor]) {
                    dfsUtil(neighbor, visited);
                }
            }
        }

        // 从指定顶点开始DFS遍历
        public void dfs(int start) {
            boolean[] visited = new boolean[vertices];
            dfsUtil(start, visited);
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph(5);

        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(1, 4);

        System.out.println("从顶点 0 开始的深度优先搜索遍历:");
        graph.dfs(0);
    }
}
```

**这段代码做了什么？**  
1. 创建一个邻接表存储图，添加无向边。  
2. 利用递归，访问当前顶点并标记为已访问。  
3. 递归访问所有未访问邻居，直到所有可达节点被访问。  
4. `main`里简单构造了一个5顶点的无向图并从顶点0开始DFS遍历。

---

:::warning ⚠️ 常见陷阱
- 冒泡排序效率低，处理大数据时千万别用。性能差异可能从毫秒到秒。更实用的是快速排序或归并排序。  
- 二分查找只能在**有序数组**中使用，否则结果错误。实际使用前请务必确认数据排序状态。  
- 字符串动态规划算法空间复杂度和时间复杂度默认是二维的，字符串太长时要注意性能和内存。  
- 图的遍历中没有标记访问过的节点，可能发生无限循环，造成栈溢出和程序崩溃。
:::

---

:::tip 💡 实战建议
- 排序时，尽量使用Java内置的`Arrays.sort()`和`Collections.sort()`，它们背后用了优化过的双轴快速排序，性能优异且稳定。  
- 二分查找适合频繁查询且数据静态的场景，动态数据推荐用平衡树或跳表。  
- 字符串算法大量用到动态规划与滑动窗口技巧，注意空间优化。  
- 图算法中，邻接表通常比邻接矩阵更节省空间，特别是稀疏图，用正确的数据结构很重要。  
- 代码走查时，尝试自己写递归模拟栈调用过程，有助于理解搜索和遍历的执行流程。
:::

---

## 小结

- 冒泡排序帮我们理解了排序的基础思路，但不适合大规模数据。  
- 二分查找是提升查找效率的黄金技巧，关键是数据必须排序。  
- 最长公共子串算法让我们了解了动态规划解决字符串问题的典型思路。  
- 深度优先搜索是图论算法中核心，掌握它为解锁更复杂的图算法奠定基础。

---

这章尽管内容丰富，但我相信我们一步步来，你完全可以掌握这些常用算法。同样的套路学会了，很多复杂算法也就变得亲切自如。下章将带你走进更实用的算法工程技巧，敬请期待！