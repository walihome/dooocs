---
title: JUnit 5
description: 深入掌握 JUnit 5 的核心注解与功能，包括@Test、断言、生命周期注解、参数化测试和嵌套测试，让你写出高质量的 Java 测试代码。
order: 82
keywords: [JUnit 5, 单元测试, Java测试, 测试注解, 参数化测试, 断言]
---

# JUnit 5

## 前置知识

> 在阅读本章前，你需要了解：Java 基础语法、类和方法的基本结构，以及为什么单元测试在软件开发中是重要环节。

## 为什么需要 JUnit 5？

我们都知道，写测试代码在项目中可不是简单的“额外负担”，它能帮我们保证功能正确，减少上线后 bug 的出现。不过，测试框架如果用起来太复杂，反而容易让人望而却步。

假设你正在开发一个功能，每次都要手动运行程序，检查输出结果是否符合预期，效率低还容易出错。这时单元测试框架出现了，它可以自动帮你验证代码行为。

JUnit 5 是 Java 生态下一个全面升级的单元测试框架，它消除了以前版本的局限，功能更强，结构更清晰，也更灵活。我们这章就从基础的注解开始，逐步揭开它的神秘面纱。

## 核心内容：JUnit 5 基础注解与功能介绍

### 什么是 @Test 注解？

用最通俗的话说，`@Test` 就是告诉测试运行器：“嘿，这个方法是个测试用例，帮我运行起来看看对不对”。这非常直观：你写了测试代码，打上 `@Test`；执行时，JUnit 就会自动识别并跑它。

为什么需要 `@Test`？没有它，Java 类里一个普通方法和测试方法没区别，测试框架不知道该执行哪些方法。`@Test` 就是我们显式的“入场券”。

### 断言（Assertions）

写测试的核心其实是“验证”——你的代码是不是按预期行为？`Assertions` 就是我们验证的工具箱。

JUnit 5 提供了几种常用断言：

- `assertEquals(expected, actual)`: 期待的值和实际值是否相等。
- `assertTrue(condition)`: 条件是否为真。
- `assertThrows(Exception.class, () -> { ... })`: 是否抛出了指定异常。

你可能想，“断言不就是 if 语句吗？”理论上是，但有断言的好处是，失败时它能给你详细的失败信息和位置，而不是静默地崩溃或你自己写一堆打印语句。

---

### 生命周期注解

单元测试里，通常会在每个测试方法执行前做点准备工作（比如初始化数据），完成后清理。JUnit 5 提供了几个注解帮我们做这事：

- `@BeforeEach`：每个测试方法执行前运行。
- `@AfterEach`：每个测试方法后运行。
- `@BeforeAll`：所有测试开始前，只运行一次。
- `@AfterAll`：所有测试结束后，只运行一次。

它们帮我们清晰地组织测试的准备和清理逻辑，而不用每次都重复代码。

---

### 参数化测试

我们经常会遇到同样的测试逻辑，只是输入数据不同。写很多类似的测试代码既重复又容易漏测。

参数化测试帮我们自动化这个过程，只需要写一套测试逻辑，输入多组数据，就能帮你跑一遍遍。

JUnit 5 的参数化测试用了 `@ParameterizedTest` 注解，并配合 `@ValueSource`、`@CsvSource`、`@MethodSource` 等来源注解来传递数据。

---

### 嵌套测试

写复杂的测试时，把相关测试用例分组，逻辑层次清晰很重要。JUnit 5 支持 `@Nested` 注解，让测试类里还能包裹测试类，就像一棵树一样组织测试，方便管理。

---

## 代码示例

### 示例一：最简单的 @Test 和断言

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SimpleTest {

    @Test
    void additionShouldWork() {
        int result = 2 + 3; // 计算结果
        assertEquals(5, result, "2 + 3 应该等于 5"); // 验证结果
    }
}
```

这段代码做了什么：

1. 定义了一个测试方法 `additionShouldWork()`，打了 `@Test` 表明这是个测试。
2. 执行简单的加法计算。
3. 用 `assertEquals` 验证结果是否符合预期。

---

### 示例二：生命周期注解的使用

```java
import org.junit.jupiter.api.*;

import java.util.ArrayList;
import java.util.List;

public class LifecycleTest {

    private List<String> messages;

    @BeforeEach
    void setUp() {
        messages = new ArrayList<>(); // 每个测试前初始化
        messages.add("start");
    }

    @Test
    void testOne() {
        messages.add("testOne");
        Assertions.assertEquals(2, messages.size(), "List 应该有两个元素");
    }

    @Test
    void testTwo() {
        messages.add("testTwo");
        Assertions.assertTrue(messages.contains("start"), "List 应该包含 start");
    }

    @AfterEach
    void tearDown() {
        messages.clear(); // 清理，避免影响其他测试
    }
}
```

这段代码做了什么：

1. `@BeforeEach` 初始化 `messages` 列表，每个测试开始时都会执行。
2. 两个测试方法分别对列表进行了不同操作和验证。
3. `@AfterEach` 清空列表，确保测试之间数据不互相污染。

---

### 示例三：参数化测试和嵌套测试结合示例

```java
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ParameterizedAndNestedTest {

    @Nested
    class EvenNumberTests {

        @ParameterizedTest(name = "测试数字 {0} 是否是偶数")
        @ValueSource(ints = {2, 4, 6, 8, 10})
        void shouldBeEven(int number) {
            assertTrue(number % 2 == 0, number + " 应该是偶数");
        }
    }

    @Nested
    class OddNumberTests {

        @ParameterizedTest(name = "测试数字 {0} 是否是奇数")
        @ValueSource(ints = {1, 3, 5, 7, 9})
        void shouldBeOdd(int number) {
            assertTrue(number % 2 != 0, number + " 应该是奇数");
        }
    }
}
```

这段代码做了什么：

1. 把测试分成了两个嵌套类，分别测试偶数和奇数。
2. 使用参数化测试，将多组数字依次传入测试方法。
3. 用断言验证传入的数字到底是偶数还是奇数。

---

## 对比总结

| 特性           | JUnit 4                                  | JUnit 5                             | 适用场景                                |
| -------------- | --------------------------------------- | ---------------------------------- | ------------------------------------- |
| 注解              | `@Test`, `@Before`, `@After`等             | 新版 `@Test`, `@BeforeEach`等           | 简单测试环境，JUnit 4 兼容场景                |
| 参数化测试         | 依赖第三方扩展或 `@RunWith`              | 原生支持 `@ParameterizedTest`             | 数据驱动测试，非常推荐使用 JUnit 5               |
| 嵌套测试           | 不支持                                  | 原生支持 `@Nested`                      | 复杂测试逻辑分组，层次清晰                         |
| 扩展模型           | 日志和运行器等，较为繁琐                    | 模块化扩展，灵活且易用                     | 定制测试执行流程和上下文                              |

简言之，JUnit 5 更现代、更强大，也更适合未来项目。如果你还是在用 JUnit 4，强烈建议试试新版本。

---

:::tip 💡 实战建议

- 用 `@BeforeEach` 和 `@AfterEach` 清理状态，避免测试间数据耦合，保持测试独立。
- 参数化测试用起来简单，别再写大堆重复的测试代码了。
- 嵌套测试能帮你理清逻辑关系，尤其适合复杂边界条件测试。
- 养成写清晰断言消息的习惯，这样一旦断言失败，排查更快。

:::

:::warning ⚠️ 常见陷阱

- 不要在测试方法里写复杂业务代码，应保持“Arrange-Act-Assert”（准备-执行-断言）步骤简单明了。
- 参数化测试时一定要保证测试数据覆盖充分，否则可能漏测边界情况。
- 依赖静态状态或者共享资源，容易引发测试“蒙蔽症”，导致偶尔成功偶尔失败的“测试异味”。

:::

## 延伸思考

- 你会如何结合 JUnit 5 的扩展机制，定制自己的测试行为？
- 在团队协作中，如何通过参数化和嵌套测试改善测试代码的可读性和维护性？
- 你有没有想过，写测试时如何设计输入数据，才能最大化覆盖各种异常和边界？

## 小结

- `@Test` 是告诉 JUnit 方法是“测试”，它让方法被自动执行。
- 断言是验证代码行为的关键，能帮助我们自动判断结果是否正确。
- 生命周期注解让测试准备和清理更方便，保持测试隔离。
- 参数化测试减少重复代码，让测试更灵活。
- 嵌套测试帮你理清复杂测试逻辑，结构更合理。

掌握这些基础，单元测试不再枯燥，而是成为保障代码质量的得力助手。下次写测试时，试试这些技巧，你会惊喜地发现测试的乐趣。