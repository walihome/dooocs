---
title: 单元测试基础
description: 了解测试金字塔、单元测试的核心原则及测试驱动开发（TDD），通过循序渐进的代码示例掌握实际使用方法。
order: 81
keywords: [单元测试, 测试金字塔, TDD, Java, 测试驱动开发]
---

# 单元测试基础

## 前置知识
> 在阅读本章前,你需要了解基本的 Java 语法和面向对象编程概念。

## 为什么需要单元测试？

假设你正在开发一个电商系统，有一个计算订单总价的功能。你写了代码后，上线了新版本，却发现老客户的订单金额出错了。你尝试调试，但一堆复杂的业务逻辑让你摸不着头脑。这时，如果你提前写好了单元测试，覆盖了订单计算的关键代码部分，就能快速校验功能是否正常，避免上线故障。

单元测试就像你代码的“健康检查工具”，帮助你在开发过程中快速发现问题，提高代码质量和维护效率。现代软件开发几乎离不开它，尤其是在大型项目和团队协作中更是不可或缺。

---

## 具体章节

### 1. 理解测试金字塔

单元测试只是整体软件测试中的一部分。测试金字塔形象地告诉我们如何合理分布测试资源：

- **单元测试（Unit Tests）**：底层、小粒度，测试单个类和方法  
- **集成测试（Integration Tests）**：中间层，测试模块之间的交互  
- **端到端测试（End-to-End Tests）**：顶部，模拟用户场景，测试整个应用流程  

想象一下：单元测试就是检测汽车发动机里每个零件的功能；集成测试保证发动机的零件组合能一起工作；端到端测试则是你开着车在路上真实驾驶的体验。发动机零件坏了，先靠单元测试发现，省得你开着车上路抛锚。

**为什么单元测试需要占据最多比例？**

因为它们执行快，覆盖面广，定位问题精准，且成本最低。上层测试虽然直接接触用户场景，但更慢、成本更高，且故障定位比较困难。

---

### 2. 单元测试的核心原则

简单来说，单元测试应该遵循以下原则：

- **快速**：测试执行要快，不然你不敢经常跑测试  
- **独立**：每个测试互不影响，顺序无关紧要  
- **可重复**：无论什么时候运行都得到相同结果  
- **自包含**：测试用例尽量完整，不依赖外部资源（网络、文件等）  
- **易读**：让代码和测试意图直观易懂  

这些原则听起来很“理想”，但实践中遇到的坑不少。我们后面会介绍实际项目中常踩的坑。

---

### 3. 测试驱动开发（TDD）简介

测试驱动开发，简单来说，就是“先写测试，再写代码”。一步步走：

1. 写一个失败的测试  
2. 写刚好能通过测试的代码  
3. 重构代码，保持测试通过  

听起来好像麻烦，但它能帮助你：

- 明确需求边界与输入输出  
- 保持代码可测试性和高质量  
- 预防未来改动引入bug  

我个人刚接触 TDD 也觉得不习惯，但实践了几个月后，写代码清晰多了，bugs少了很多。

---

## 代码示例

### 示例1：最简单的单元测试

我们先写一个简单方法，计算两个整数的和，并用 JUnit 写个测试。

```java
// 文件: Calculator.java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

对应的测试类：

```java
// 文件: CalculatorTest.java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 3);
        assertEquals(5, result);  // 验证结果是 2 + 3 = 5
    }
}
```

**这段代码做了什么**

1. `Calculator` 提供了一个加法方法  
2. `CalculatorTest` 通过注解 `@Test` 定义了一个测试方法  
3. 里面创建了 Calculator 实例，调用 `add` 方法，并用断言验证输出是否正确  

这就是最基本的单元测试写法，验证一个简单的功能。

---

### 示例2：带边界条件的测试

假设你改进 `Calculator`，增加减法方法，且希望对特殊输入也做测试。

```java
// 文件: Calculator.java
public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }
}
```

测试代码：

```java
// 文件: CalculatorTest.java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        assertEquals(5, calculator.add(2, 3));  // 正常测试
        assertEquals(-1, calculator.add(-2, 1)); // 负数测试
    }

    @Test
    public void testSubtract() {
        Calculator calculator = new Calculator();
        assertEquals(1, calculator.subtract(3, 2));      // 正常测试
        assertEquals(-5, calculator.subtract(-3, 2));    // 负数测试
        assertEquals(0, calculator.subtract(3, 3));      // 边界测试：结果为0
    }
}
```

**这段代码做了什么**

- 增加了减法逻辑，并对不同的输入场景进行了测试，包括负数和边界情况  
- 通过多组断言保证代码对多种输入都表现正确  

这体现了**测试覆盖边界条件**的好习惯。

---

### 示例3：应用测试驱动开发（TDD）写法

现在，试想我们要实现一个判断是否是质数的方法。使用 TDD，我们先写测试，再写实现。

测试代码：

```java
// 文件: PrimeCheckerTest.java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PrimeCheckerTest {

    @Test
    public void testIsPrime() {
        PrimeChecker primeChecker = new PrimeChecker();

        assertFalse(primeChecker.isPrime(1)); // 1 不是质数
        assertTrue(primeChecker.isPrime(2));  // 2 是质数
        assertTrue(primeChecker.isPrime(3));  // 3 是质数
        assertFalse(primeChecker.isPrime(4)); // 4 不是质数
        assertTrue(primeChecker.isPrime(13)); // 13 是质数
    }
}
```

注意，我们先写了一个完全失败的测试，因为 `PrimeChecker` 类还没实现。

接下来实现这个类：

```java
// 文件: PrimeChecker.java
public class PrimeChecker {

    public boolean isPrime(int number) {
        if (number <= 1) {
            return false; // 1及以下都不是质数
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false; // 能被整除，不是质数
            }
        }
        return true; // 没有因数，是质数
    }
}
```

**这段代码做了什么**

- 先写了测试覆盖常见质数判断的边界和典型数据  
- 再根据测试需求实现方法，保证测试通过  
- 代码清晰，且逻辑易于维护  

这就是《先写测试，再写实现》的实践，保证了代码质量。

---

:::tip 💡 实战建议

- 尽量让单元测试快速且稳定，避免依赖外部服务（数据库、网络）  
- 使用模拟（Mock）技术替代外部依赖，集中测试核心逻辑  
- 小而精悍的测试用例更易维护，尝试做到测试只专注于一个功能点  
- 在实际项目中，可以结合持续集成（CI）工具，自动执行单元测试，快速反馈问题  
- 习惯写测试能显著减少Bug，同时提升代码设计质量
:::
---

:::warning ⚠️ 常见陷阱

- **过度测试实现细节**：测试应关注方法的输入输出行为，而非私有方法或内部变量。否则代码一旦重构，测试也需大量改动。  
- **测试相互依赖**：让测试用例间共享状态会导致测试顺序影响结果，失去可重复性。  
- **忽视边界条件**：很多bug其实来源于边界数据，边界测试不可少。  
- **没有及时维护测试**：代码改动时忘了更新测试，会导致测试变成“死代码”，失去价值。  
:::
---

:::details 🔍 深入理解

### 为什么 TDD 会让设计更好？

- 强制解耦：先写测试需要代码易于测试，往往促使你设计更模块化的代码。  
- 明确接口：你在写测试时，先定义输入输出，就像在设计API，提前思考需求。  
- 快速反馈：小步快跑，减少调试痛苦。
:::
---

## 小结

- 单元测试是软件质量的第一道防线，承担快速且细粒度的测试任务  
- 测试金字塔告诉我们合理分配测试资源，底层大量单元测试最有效  
- 好的单元测试要快速、独立、易读、可重复，覆盖正常和边界场景  
- 测试驱动开发（TDD）通过先写测试保障代码质量，提升设计水平  
- 生产环境中，设计可测试代码，结合自动化工具是提高项目稳健性的关键

---

希望你已经感受到，单元测试并非额外负担，而是给你开发“护航”的强大助手。  
让我们在后续章节里，继续深化测试高级技巧，写出更加健壮且优雅的代码吧！

```