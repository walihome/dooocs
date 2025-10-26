---
title: 代码重构实战
description: 通过识别代码坏味道与应用重构技巧，提升 Java 代码质量与可维护性。
order: 98
keywords: [代码重构, 坏味道, 设计模式, java, 重构技巧]
---

# 代码重构实战

## 前置知识
> 在阅读本章前,你需要了解:  
> - Java基础语法  
> - 面向对象编程基础  
> - 常见集合类使用  
> - 简单的设计模式（如单例、工厂模式）了解更好

## 为什么需要代码重构?

想象一下，你加入了一个刚交付的 Java 项目团队。项目代码量庞大，功能看似完整，但你很快发现新增功能变得异常困难，甚至小改动都会引发一连串意外的错误。代码行之间像杂乱的线团，稳定性和可扩展性都没有保障。这时，代码重构的重要性变得非常明显了。

代码重构，就是我们清理和重组已有代码的过程，目的是改善代码结构、提高可读性和维护性，而不改变软件的外部行为。就像整理书桌，把堆积的文件分类归档，让事情进行得更顺畅。

本章我们将从识别代码中的“坏味道”出发，通过一步步重构示例，教你实战中如何优雅地改造代码。并且会穿插设计模式的应用，让你的代码更有章法，也更易复用。

---

## 代码坏味道识别

坏味道是指那些提示代码可能存在设计或实现问题的迹象。它们往往不会立即导致错误，但长远看会带来维护难题。常见的坏味道包括：

- **重复代码**：同样的逻辑被复制粘贴多处。
- **过长方法**：方法功能混杂，难以理解。
- **过多参数**：方法参数列表臃肿，调用复杂。
- **发散性修改**：改动需求需要修改多个地方。
- **数据泥团**（Data Clumps）：一组数据总是一起出现。

我们先从一个简单的例子入手，看看怎么识别重复代码和方法过长。

---

## 示例一：识别重复代码和长度过长的方法

```java
import java.util.ArrayList;
import java.util.List;

public class OrderProcessor {

    private List<String> fulfilledOrders = new ArrayList<>();

    // 处理网上订单
    public void processOnlineOrder(String orderId) {
        System.out.println("验证网上订单：" + orderId);
        System.out.println("处理支付");
        System.out.println("打包商品");
        System.out.println("发货");
        fulfilledOrders.add(orderId);
    }

    // 处理店内订单
    public void processStoreOrder(String orderId) {
        System.out.println("验证店内订单：" + orderId);
        System.out.println("处理支付");
        System.out.println("打包商品");
        System.out.println("发货");
        fulfilledOrders.add(orderId);
    }
}
```

**这段代码做了什么**  
这个类有两个方法，分别处理网上订单和店内订单。剖析下来你会发现，这两段代码除了“验证”的内容不一样，后面三步“处理支付”“打包商品”“发货”完全相同，而且这部分代码直接复制了。这种重复不仅违反了编程中的“不要重复自己（DRY）”原则，还会导致将来维护时可能遗漏同步更新，产生隐患。

---

## 重构步骤1：提炼公共方法

为了避免重复，我们可以把公共步骤提取出来，让流程更清晰。

```java
import java.util.ArrayList;
import java.util.List;

public class OrderProcessor {

    private List<String> fulfilledOrders = new ArrayList<>();

    public void processOnlineOrder(String orderId) {
        validateOnlineOrder(orderId);
        processPayment();
        packProduct();
        shipProduct();
        fulfilledOrders.add(orderId);
    }

    public void processStoreOrder(String orderId) {
        validateStoreOrder(orderId);
        processPayment();
        packProduct();
        shipProduct();
        fulfilledOrders.add(orderId);
    }

    private void validateOnlineOrder(String orderId) {
        System.out.println("验证网上订单：" + orderId);
    }

    private void validateStoreOrder(String orderId) {
        System.out.println("验证店内订单：" + orderId);
    }

    private void processPayment() {
        System.out.println("处理支付");
    }

    private void packProduct() {
        System.out.println("打包商品");
    }

    private void shipProduct() {
        System.out.println("发货");
    }
}
```

**这段代码做了什么**  
我们把“处理支付”“打包商品”“发货”封装成了独立方法，每个方法专注于一件事。这样，一旦有改动，比如“打包商品”流程更新，我们只需改一处，更安全、更易维护。

**为什么需要它?**  
方法提炼（Extract Method）是最经典的重构手法之一，使代码结构更清晰，逻辑更分明。也方便别人理解和复用。

---

## 示例二：使用模板方法模式避免冗余

虽然上面重构减少了重复代码，但仍有不少“重复调用顺序”的写法。我们能让流程固定，只让不同环节的验证逻辑变化吗？这就引入设计模式里的**模板方法**。

```java
public abstract class OrderProcessorTemplate {

    public final void processOrder(String orderId) { // final避免子类修改流程顺序
        validateOrder(orderId);
        processPayment();
        packProduct();
        shipProduct();
        recordOrder(orderId);
    }

    protected abstract void validateOrder(String orderId);

    private void processPayment() {
        System.out.println("处理支付");
    }

    private void packProduct() {
        System.out.println("打包商品");
    }

    private void shipProduct() {
        System.out.println("发货");
    }

    private void recordOrder(String orderId) {
        System.out.println("记录订单：" + orderId);
    }
}
```

```java
public class OnlineOrderProcessor extends OrderProcessorTemplate {

    @Override
    protected void validateOrder(String orderId) {
        System.out.println("验证网上订单：" + orderId);
    }
}
```

```java
public class StoreOrderProcessor extends OrderProcessorTemplate {

    @Override
    protected void validateOrder(String orderId) {
        System.out.println("验证店内订单：" + orderId);
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        OrderProcessorTemplate onlineOrder = new OnlineOrderProcessor();
        onlineOrder.processOrder("online-123");

        OrderProcessorTemplate storeOrder = new StoreOrderProcessor();
        storeOrder.processOrder("store-456");
    }
}
```

**这段代码做了什么**  
模板方法定义了一个固定的操作流程`processOrder`，将变化点留给子类具体实现。这样主流程得到了统一控制，流程顺序不会被错误修改，也极大的减少了重复代码和耦合度。

---

## 示例三：复杂场景下的重构——多责任拆分与策略模式

假设订单处理流程还需要根据支付方式不同走不同的支付逻辑，如果把支付逻辑硬塞到模板方法里，代码会越加臃肿。这时，责任拆分和策略模式能解放你的代码。

```java
// 支付策略接口
public interface PaymentStrategy {
    void pay(String orderId);
}

// 支付宝支付实现
public class AliPayStrategy implements PaymentStrategy {
    public void pay(String orderId) {
        System.out.println("使用支付宝支付订单：" + orderId);
    }
}

// 微信支付实现
public class WeChatPayStrategy implements PaymentStrategy {
    public void pay(String orderId) {
        System.out.println("使用微信支付订单：" + orderId);
    }
}

// 模板类里注入支付策略
public abstract class OrderProcessorWithStrategy {

    private PaymentStrategy paymentStrategy;

    public OrderProcessorWithStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public final void processOrder(String orderId) {
        validateOrder(orderId);
        paymentStrategy.pay(orderId);
        packProduct();
        shipProduct();
        recordOrder(orderId);
    }

    protected abstract void validateOrder(String orderId);

    private void packProduct() {
        System.out.println("打包商品");
    }

    private void shipProduct() {
        System.out.println("发货");
    }

    private void recordOrder(String orderId) {
        System.out.println("记录订单：" + orderId);
    }
}
```

```java
public class OnlineOrderProcessorWithPayment extends OrderProcessorWithStrategy {

    public OnlineOrderProcessorWithPayment(PaymentStrategy paymentStrategy) {
        super(paymentStrategy);
    }

    @Override
    protected void validateOrder(String orderId) {
        System.out.println("验证网上订单: " + orderId);
    }
}
```

```java
public class MainStrategy {
    public static void main(String[] args) {
        PaymentStrategy alipay = new AliPayStrategy();
        OrderProcessorWithStrategy onlineOrder = new OnlineOrderProcessorWithPayment(alipay);
        onlineOrder.processOrder("order-789");

        PaymentStrategy wechatPay = new WeChatPayStrategy();
        OrderProcessorWithStrategy onlineOrder2 = new OnlineOrderProcessorWithPayment(wechatPay);
        onlineOrder2.processOrder("order-101");
    }
}
```

**这段代码做了什么**  
通过引入支付策略接口，将支付相关的变动责任完全分离，一方面避免核心流程类臃肿，另一方面也增加了支付方法的灵活扩展性。用户可以自由切换支付策略而无需改动订单处理流程代码。

---

:::tip 💡 实战建议
- **小步迭代重构**：每次只重构一小部分，配合单元测试保证功能不变。
- **明显的代码坏味道优先处理**：先从重复代码、长方法、臃肿参数列表入手。
- **设计模式稳步引入**：不是所有场景都适合复杂模式，先用简单方法，复杂需求再用设计模式。
- **重构后要有回退方案**：使用版本管理工具，不管你自信多少，事故随时可能发生。
- **代码审查助力重构**：团队成员一起把关，避免单向设计。
:::

---

:::warning ⚠️ 常见陷阱
- **盲目重构**：没有单元测试或没有明确目标的重构，容易引入更多bug。
- **过度设计**：过早引入设计模式反而让代码复杂，适得其反。
- **改动过大**：突然整体重构，导致多人协作环境下冲突频繁，反而降低效率。
- **忽视性能影响**：有些重构可能引入额外层的调用，要关注最终性能需求。
:::

---

## 小结

- 重构是提升代码质量的必经之路，帮助代码更健壮、易扩展。
- 识别代码坏味道是重构的第一步，从重复代码和长方法开始最容易入手。
- 方法提炼、模板方法和策略模式是解决代码重复和复杂流程的有效手段。
- 实际项目中，重构要稳扎稳打，避免盲目和过度设计。
- 设计模式是重构中的利器，学会合理使用，让代码经得起时间考验。

---

代码重构听起来复杂，但只要你迈出了第一步，慢慢养成良好的规范和习惯，你会发现代码变得更有生命力，维护不再是噩梦。我们下一章将进一步讲解如何用重构提升测试覆盖率和代码健壮性，敬请期待！