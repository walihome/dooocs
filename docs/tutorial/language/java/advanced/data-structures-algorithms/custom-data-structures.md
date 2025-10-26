---
title: 数据结构实现
description: 学习如何从零手动实现经典数据结构：栈、队列、链表、二叉树和哈希表，深入理解它们的工作原理和应用场景。
order: 27
keywords: [Java, 数据结构, 栈, 队列, 链表, 二叉树, 哈希表]
---

# 数据结构实现

## 前置知识
> 在阅读本章前,你需要了解:
> - Java基础语法
> - 类和对象的概念
> - 基本的数组操作

## 为什么需要手动实现数据结构？

想象一下你正在开发一个复杂的系统，遇到性能瓶颈，或者标准库刚好不满足某些特殊需求。这时，如果你对数据结构的内部实现一无所知，就很难对程序做出高效调整。虽然 Java 标准库提供了丰富而高效的数据结构，但作为一名高级开发者，手动实现基本数据结构是打基础的关键。只有了解它们的原理，你才能选择合适的工具、优化代码、甚至创新。

市面上有很多开源库和框架，但它们隐藏了实现细节。学习手写数据结构，不仅是为了写代码，更是为了培养解决问题的思维。接下来，我们将一步步实现栈、队列、链表、二叉树，乃至哈希表，逐渐深入。

## 栈（Stack）的实现

### 什么是栈？

栈就像叠盘子，你只能从顶端拿或者放新的盘子，后放进的先拿出（后进先出，LIFO）。它常用来处理函数调用、表达式求值和撤销操作。

### 为什么需要自己实现栈？

标准库里有 `java.util.Stack` 和基于 `Deque` 的实现，但自己写一遍，可以更好理解底层原理和指针操作。

### 简单栈的实现 —— 基于数组

```java
import java.util.EmptyStackException;

public class ArrayStack {
    private int[] elements;       // 存储栈元素的数组
    private int size = 0;         // 栈中元素个数

    private static final int DEFAULT_CAPACITY = 16;

    public ArrayStack() {
        elements = new int[DEFAULT_CAPACITY];  // 初始化固定大小数组
    }

    // 入栈
    public void push(int value) {
        if (size == elements.length) {
            throw new IllegalStateException("栈满了，不能再push");
        }
        elements[size++] = value;   // 把元素放到数组末尾，并增大size
    }

    // 出栈
    public int pop() {
        if (size == 0) {
            throw new EmptyStackException();
        }
        return elements[--size];    // 减少size后返回栈顶元素
    }

    // 查看栈顶元素
    public int peek() {
        if (size == 0) {
            throw new EmptyStackException();
        }
        return elements[size - 1];
    }

    // 栈是否为空
    public boolean isEmpty() {
        return size == 0;
    }
}
```

**这段代码做了什么？**
1. 用数组模拟存储空间，`size` 代表下一个空位置索引。
2. `push` 时把数字放入 `elements[size]` 并自增。
3. `pop` 时先减少 `size`，然后访问该位置的元素来返回。
4. `peek` 获取顶端元素但不修改栈。
5. 代码用异常保护空栈操作，防止非法访问。

---

## 队列（Queue）的实现

### 队列是啥？

跟排队买早餐一样，先来的人先服务（先进先出，FIFO）。队列适合缓冲数据、消息传递等场景。

### 用数组实现循环队列（环形缓冲）

数组实现普通队列插入删除效率低，连续操作会造成数据搬移。循环队列利用数组首尾连接，避免搬移，提升性能。

```java
import java.util.NoSuchElementException;

public class CircularQueue {
    private int[] elements;    // 存放数据的数组
    private int head = 0;      // 指向队头元素
    private int tail = 0;      // 指向队尾后一个位置
    private int size = 0;      // 当前元素个数

    private static final int DEFAULT_CAPACITY = 16;

    public CircularQueue() {
        elements = new int[DEFAULT_CAPACITY];
    }

    // 入队
    public void enqueue(int value) {
        if (size == elements.length) {
            throw new IllegalStateException("队列已满");
        }
        elements[tail] = value;
        tail = (tail + 1) % elements.length;   // 环绕前进
        size++;
    }

    // 出队
    public int dequeue() {
        if (size == 0) {
            throw new NoSuchElementException("队列为空");
        }
        int value = elements[head];
        head = (head + 1) % elements.length;   // 环绕前进
        size--;
        return value;
    }

    // 查看队首元素
    public int peek() {
        if (size == 0) {
            throw new NoSuchElementException("队列为空");
        }
        return elements[head];
    }

    public boolean isEmpty() {
        return size == 0;
    }
}
```

**这段代码做了什么？**
1. 用 `head` 和 `tail` 两个指针追踪队列边界。
2. 每次插入 `tail` 指向的数组位置，然后 `tail` 循环往前走，超出数组长度回头。
3. 删除的时候 `head` 指针同样循环前进。
4. 通过 `size` 判断队列满或空。
5. 这样避免了数组搬移，效率大幅提升。

---

## 链表（LinkedList）的实现

### 链表是啥？

链表就是一串手拉手的人，每个节点知道下一个是谁。和数组不一样，链表插入删除特别灵活，适合频繁改动场景。

### 单链表实现

代码里会定义 `Node` 内部类，来存节点和指针。

```java
public class SimpleLinkedList {
    private static class Node {
        int value;
        Node next;
        Node(int value) {
            this.value = value;
        }
    }

    private Node head;   // 链表头
    private int size;

    // 在链表头插入新节点（入栈操作类似）
    public void addFirst(int value) {
        Node newNode = new Node(value);
        newNode.next = head;  // 新节点指向旧头结点
        head = newNode;       // 头指针指向新节点
        size++;
    }

    // 删除链表头节点并返回值
    public int removeFirst() {
        if (head == null) throw new IllegalStateException("链表为空");
        int value = head.value;
        head = head.next;     // 将头指针移向下一个节点
        size--;
        return value;
    }

    // 查找指定值是否存在
    public boolean contains(int target) {
        Node current = head;
        while (current != null) {
            if (current.value == target) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public int size() {
        return size;
    }
}
```

**这段代码做了什么？**
1. `Node` 是链表的基本单元，保存元素值和指向下一个节点的引用。
2. `addFirst` 在头部插入，时间复杂度O(1)。
3. `removeFirst` 删除第一个元素，快速更新头节点。
4. 用指针移动实现查找元素，理解链表遍历。

---

## 常见陷阱：链表操作时的空指针

编写链表相关代码时，最容易犯的错误是忽视空指针（`null`）。比如`head`为`null`时访问`head.next`就会抛异常。初学者常忘记检查链表是否为空，导致程序崩溃。

**小技巧：** 操作前都先判断：`if (head == null)`，坚决杜绝盲目访问。遇到链表操作问题时，先排查null指针缺陷。

---

## 实战建议：选择合适数据结构

- 如果你只需要后进先出，栈是最简单直接的解决方案。
- 需要先进先出时，优先考虑循环队列，避免数据搬移性能损失。
- 如果数据动态变化频繁，使用链表能减少大量数据复制成本。
- 复杂树形或映射场景，继续往后学二叉树和哈希表。

学会根据具体需求和数据特点，挑选正确结构，在性能和代码维护间取得平衡。

---

## 小结

- 数据结构是把抽象问题具体化的利器，掌握它们能令你代码更优雅高效
- 手写栈、队列和链表，帮助你理解指针引用、容量管理、边界情况的重要性
- 小心处理空指针和边界检查，写出健壮的代码
- 逐渐掌握不同结构，灵活应对不同场景需求

---

如果你准备好了，我们可以继续探讨更复杂的二叉树和哈希表实现，进一步打造你的数据结构宝库。需要我现在帮你写这些吗？