---
title: Mockito框架
description: 探索Mockito框架的核心用法，掌握Mock对象创建、when/then、verify、spy及参数匹配器等技巧，提升单元测试实战能力。
order: 83
keywords: [Mockito, Java, 单元测试, Mock对象, Spy, 参数匹配器]
---

# Mockito框架

## 前置知识
> 在阅读本章前，你需要了解：Java基础语法、面向对象编程和JUnit单元测试框架的基础使用。

## 为什么需要Mockito?

想象一下，你正在开发一个复杂的Java应用，里面有许多方法调用外部系统、数据库或者第三方服务。你想给核心逻辑写单元测试，但这些依赖很难或者不适合在测试环境中直接调用。怎么办？

这时候，Mockito框架就像你的好帮手，帮你“模拟”那些外部依赖，创造出“假”的对象（Mock），让你专注测试自己写的代码，而不用依赖外部环境。

我们先抛开技术细节，只讲大白话：

- **Mock对象**：就是提前帮你“伪造”的假对象，它听你的话，返回你想给它的结果。
- **why**：让测试专注、快速、可靠，不被外部那些“难搞”的东西拖累。

接下来，我们一步步来认识Mockito到底怎么玩。

---

## 1. Mock对象创建和基本用法

Mockito的核心，就是帮你轻松创建Mock对象。

### 简单定义

- **mock()方法**：告诉Mockito，“请给我一个假的对象”，这个对象会模拟你指定类的行为。

### 为什么需要它？

写测试时，你不想让真实对象的复杂逻辑影响测试结果，Mock就帮你把依赖隔离开。

### 基础示例

```java
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import java.util.List;

public class SimpleMockTest {

    @Test
    public void testMockList() {
        // 1. 创建一个 List 接口的 Mock 对象
        List<String> mockedList = mock(List.class);

        // 2. 设置当调用 mockedList.get(0) 时返回 "hello"
        when(mockedList.get(0)).thenReturn("hello");

        // 3. 调用 get(0), 应该返回 "hello"
        String result = mockedList.get(0);
        System.out.println(result); // 输出 hello

        // 4. 调用 get(1), 因为没指定行为，默认返回 null
        System.out.println(mockedList.get(1)); // 输出 null
    }
}
```

这段代码做了什么？

1. 通过`mock(List.class)`生成了一个假的`List`对象。
2. 利用`when(...).thenReturn(...)`告诉它调用`get(0)`时返回“hello”。
3. 调用`get(0)`得到了我们预期的返回值。
4. 调用未被模拟的方法`get(1)`返回了默认值null。

这就像你请了个临时演员，告诉他“你一上场就说‘hello’”，他就会照做；没有提醒的就保持沉默。

---

## 2. 验证行为 - verify的魔法

除了“告诉Mock对象返回什么”，你有时候还想“确认它到底有没有被调用”，这时用`verify`！

### 简单定义

`verify`用于验证mock对象的方法是否被调用，调用次数是多少。

### 例子继续沿用List

```java
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import java.util.List;

public class VerifyMockTest {

    @Test
    public void testVerifyCalls() {
        List<String> mockedList = mock(List.class);

        mockedList.add("one");
        mockedList.clear();

        // 验证 add("one") 是否被调用过一次
        verify(mockedList).add("one");

        // 验证 clear() 是否被调用过一次
        verify(mockedList).clear();

        // 如果没调用就验证会失败，比如:
        // verify(mockedList).add("two"); // 会抛异常
    }
}
```

这段代码做了什么？

1. 创建了一个假的List。
2. 调用了它的`add("one")`和`clear()`。
3. 通过`verify`去确认这两个方法确实被调用了。

这样，你不仅能告诉Mock做什么，还能保证它有没有真的动作，是“表演对了还是白跑一场”。

---

## 3. Spy与参数匹配器——更灵活地控制

### Spy——真假结合体

有时你想对真实对象进行“部分mock”，真实对象的大部分功能保持原样，只对某些方法做控制。

这时用`spy`，它让你在真实对象基础上“偷看”它的行为，或者改写某些方法。

### 参数匹配器——方法参数不必完全固定

Mockito的`when`和`verify`里，调用的方法参数不一定要完全死板地写死，可以用一些“通配符”，灵活匹配。

---

### Spy示例

```java
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;

public class SpyTest {

    @Test
    public void testSpy() {
        List<String> realList = new ArrayList<>();
        // 创建 realList 的部分Mock对象 Spy
        List<String> spyList = spy(realList);

        spyList.add("one");
        spyList.add("two");

        // 调用真实方法size()，应该是 2
        System.out.println(spyList.size()); // 输出2

        // 伪造 get(0) 方法，返回 "spy"
        when(spyList.get(0)).thenReturn("spy");

        System.out.println(spyList.get(0)); // 输出 spy
        System.out.println(spyList.get(1)); // 输出 two，真实调用
    }
}
```

这段代码做了什么？

1. 创建了一个真实的`ArrayList`。
2. 用`spy`包装它，变成既能真实调用又能部分伪造的对象。
3. 添加了两个元素，真实逻辑照常执行，`size()`输出2。
4. 但通过`when(...).thenReturn(...)`改变了`get(0)`的返回，改成了“spy”。

这就像这位演员平时是自己表演，但你能随时给他下“剧本”，让他改演一段指定台词。

---

### 参数匹配器示例

```java
import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

import org.junit.jupiter.api.Test;
import java.util.List;

public class ArgumentMatcherTest {

    @Test
    public void testArgumentMatchers() {
        List<String> mockedList = mock(List.class);

        when(mockedList.get(anyInt())).thenReturn("element");

        System.out.println(mockedList.get(999)); // 输出 element
        System.out.println(mockedList.get(0));   // 输出 element

        // 验证是否调用过get，参数是任意整数
        verify(mockedList, times(2)).get(anyInt());
    }
}
```

这段代码做了什么？

1. 用`anyInt()`告诉Mockito不管传什么数字给`get()`，都返回“element”。
2. 验证`get`被调用了两次，且参数不必完全匹配。

参数匹配器让你的测试写起来更通用灵活。

---

## 常见陷阱 ⚠️

:::warning
- **当你对Spy对象用`when(spy.method())`时，真实方法会被调用一遍！**  
  这容易造成副作用甚至出现空指针异常。改用`doReturn(...).when(spy).method()`，可以规避这个问题。

- **不要对`final`类和`final`方法进行Mock（默认情况下），Mockito无法Mock这些。**  
  除非使用额外配置或工具，不然会失败。

- **忽视参数匹配器**：调用参数部分用匹配器，全部参数就都需要用匹配器，不然会异常。

- **验证多次调用时，缺省`times(1)`，需要明确次数时勿忘加注。**

:::

---

## 实战建议 💡

:::tip
- 在单元测试中，优先Mock外部依赖（网络、数据库、服务等），减少不确定因素干扰，提高测试稳定性和速度。
- 使用Spy时，谨慎对真实对象调用改写，避免非预期副作用。
- 参数匹配器可以大幅简化测试，特别是复杂参数时，帮助关注测试逻辑本身而不是参数细节。
- 在团队中统一Mock规范，减少写测试时的迷惑和bug。
:::

---

## 小结

- Mockito帮你轻松创建Mock对象，隔离外部依赖。
- `when/thenReturn`是最核心的行为控制方式。
- `verify`让你确定Mock对象被正确调用。
- `spy`是“半真实”Mock，适合想局部控制真实对象的场景。
- 参数匹配器大大提升测试写作灵活性。
- 留意Spy的特殊调用陷阱，合理用`doReturn`代替`when`。
- Mock技术让测试更专注、高效、稳定，是高手写单元测试的必备神器。

---

## 延伸思考 🔍

- 你会怎么设计一套Mock策略，保证测试既快又不失真实感？
- Mock过度会让测试变得脱离实际，如何判断Mock多少才合适？
- 试比较Mockito与其他Mock框架（如EasyMock、JMockit）的设计思路，哪个好用？

---

希望这章深入浅出地帮你理解了Mockito的实战核心。让我们在实际项目中多多练习，熟悉这些强大功能，成为测试圈的“Mock大师”吧！