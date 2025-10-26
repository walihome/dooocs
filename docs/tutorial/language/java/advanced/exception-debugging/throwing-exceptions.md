---
title: 异常抛出与声明
description: 探索 Java 中异常的抛出与声明机制，理解 throw 与 throws 的区别，掌握异常链及自定义异常的应用。
order: 42
keywords: [Java, 异常处理, throw, throws, 自定义异常, 异常链]
---

# 异常抛出与声明

## 前置知识
> 在阅读本章前，你需要了解：Java 的基本异常体系（Throwable、Exception、Error），try-catch 块的基本用法，以及方法的定义和调用。

## 为什么需要异常抛出与声明？

想象一下，你正在开发一个银行转账系统。当用户余额不足时，程序如何优雅地“报警”？你不能让程序无声无息地失败，也不能让所有代码都堆满复杂的错误处理。于是，Java 给了我们两个小帮手：`throw` 和 `throws`。

`throw` 是实际“发射火箭”将异常对象扔出去，告诉程序“这里出错了”；而 `throws` 是声明“我的方法可能会扔出这样的异常”，告诉调用者要准备接招。这两者真的是一对儿好搭档，各司其职，一起维护代码的健壮性。

本章，我们就来拆解这对“搭档”，顺便看看异常链怎么帮你捕捉异常背后的原因，还有如何定制“专属异常”，在项目里增添“个性”。

---

## 1. throw 和 throws 基础认知

### 什么是 throw？

`throw` 是一个语法关键字，用于在程序运行时主动抛出一个异常实例。

换句话说——当程序某处遭遇“无法招架”的情况时，你可以用 `throw` 把一个异常扔出来，程序结束当前执行流程，转向异常处理。

### 什么是 throws？

`throws` 是用在方法声明里的，它告诉调用者：“嘿，这个方法可能会抛出这些异常，你得考虑处理它们。”

可以把 `throws` 想象成房屋门口的挂牌：告诉来访者可能有风险，让他们做好准备。

### 为什么我们需要这两种机制？

- **清晰职责分工**：`throw` 负责“发射炸弹”，`throws` 告知“雷区在哪里”。
- **安全的异常处理**：编译器通过 `throws` 检查，确保你不会漏掉必须处理的异常。
- **代码可维护**：调用者知道哪些异常要处理，降低意外崩溃的风险。

---

## 2. 代码示例一：简单抛出和声明异常

```java
// 这是一个简单的示范
public class SimpleThrowExample {

    // 声明此方法会抛出 Exception
    public static void riskyMethod() throws Exception {
        // 主动抛出一个异常实例
        throw new Exception("这是一个简单的异常");
    }

    public static void main(String[] args) {
        try {
            riskyMethod(); // 调用时必须处理异常
        } catch (Exception e) {
            System.out.println("捕获异常: " + e.getMessage());
        }
    }
}
```

**这段代码做了什么?**  
1. 在 `riskyMethod` 里用 `throw` 抛出一个 `Exception` 对象。  
2. 方法声明用 `throws` 表明调用者必须处理这个异常。  
3. 在 `main` 方法中，我们用 `try-catch` 捕获并处理了异常，避免程序崩溃。  

---

## 3. 深入理解异常链 (Exception Chaining)

有时候问题没那么简单：底层操作失败了，为了让上层知道大致原因，我们需要“包裹”异常。异常链就像接力棒，一层层把原始异常传递出去，方便最终定位问题。

### 为什么需要异常链？

假设你的数据库操作失败，实际失败原因是一个网络错误。你不想把底层网络异常直接暴露出去，但又需要保存它的信息以备追踪。异常链可以帮你同时传递两个异常：外层业务异常 + 内层根因异常。

---

## 代码示例二：异常链实践

```java
import java.io.IOException;

public class ExceptionChainingExample {

    // 自定义方法，模拟抛出底层异常
    public static void dbOperation() throws IOException {
        throw new IOException("网络连接失败");
    }

    // 业务层方法封装底层异常，抛出新异常，并关联原异常
    public static void businessMethod() throws Exception {
        try {
            dbOperation();
        } catch (IOException e) {
            // 使用异常链: 在新异常中附加原始异常
            throw new Exception("业务操作失败，原因见下", e);
        }
    }

    public static void main(String[] args) {
        try {
            businessMethod();
        } catch (Exception e) {
            System.out.println("捕获异常: " + e.getMessage());
            System.out.println("原始异常是: " + e.getCause());
        }
    }
}
```

**这段代码做了什么?**  
1. `dbOperation` 抛出一个 `IOException`。  
2. `businessMethod` 捕获它后，抛出一个新的 `Exception`，并通过构造器把底层异常作为“原因”（cause）传入。  
3. 最终在 `main` 中捕获异常时，可以调用 `getCause()` 拿到底层异常，帮我们精确定位问题。  

---

## 4. 自定义异常

有些时候，你需要给你的应用定义“专属异常”，表达更丰富的业务含义。只要继承自 `Exception` 或 `RuntimeException`，写个小类就行了。

### 自定义异常的场景举例

银行系统里的“余额不足”异常，或者用户认证模块的“密码错误”异常。

---

## 代码示例三：自定义异常类

```java
// 自定义检查异常
public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

// 业务逻辑，检测余额
public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    // 如果余额不足则抛出自定义异常
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("余额不足，无法提款 " + amount);
        }
        balance -= amount;
        System.out.println("成功提款: " + amount + ", 剩余余额: " + balance);
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        try {
            account.withdraw(1200);
        } catch (InsufficientFundsException e) {
            System.out.println("操作失败: " + e.getMessage());
        }
    }
}
```

**这段代码做了什么?**  
1. 定义了专门的异常类 `InsufficientFundsException`，增强语义。  
2. `withdraw` 方法中检查余额，如果不够则抛出该异常。  
3. 调用者捕获并打印自定义异常信息，帮助用户理解失败原因。  

---

## 5. throw 和 throws 用法对比总结

| 关键字        | 用途                      | 位置              | 举例                      |
|---------------|---------------------------|-------------------|---------------------------|
| `throw`       | 发送一个异常（抛出异常）  | 方法内部          | `throw new Exception();`  |
| `throws`      | 声明方法可能抛出的异常    | 方法签名声明      | `void foo() throws Exception` |

- `throw` 是代码执行时使用的，实际扔出异常。
- `throws` 是编译时检查，声明接口风险。
- 异常链增强了异常信息的表达，方便定位和调试。
- 自定义异常结合这两者，可以构建完善的异常体系。

---

:::tip 💡 实战建议
- **避免滥用 `throws Exception`**。声明过于宽泛会增加调用者处理负担。尽量声明具体异常类型。
- 自定义异常应继承自合适的父类，检查异常 (`Exception`) 还是运行时异常 (`RuntimeException`)，根据业务需求权衡。
- 异常链（`cause`）是定位问题的重要利器，捕获异常后尽量传递原始异常，避免问题“被淹没”。
- 在实际项目中，异常信息要准确且不要暴露敏感信息，特别涉及安全和用户隐私。
:::

---

:::warning ⚠️ 常见陷阱
- **混淆 throw 和 throws**：`throw` 是关键字，后面跟异常对象；`throws` 是一段声明，后面跟异常类型列表。
- **遗漏异常声明**：声明需要抛出的受检异常，没有写 `throws` 会导致编译错误。
- **异常链忽略**：捕获异常后没有正确传递原始异常，导致调试困难。
- **过度捕获**：过早 catch 异常且不处理或简单打印，隐藏了潜在问题。
:::

---

## 小结

- `throw` 用来“扔”异常对象，是方法体内的实际操作。  
- `throws` 用来在方法声明中告诉调用者哪些异常必须处理。  
- 异常链帮助我们传递异常背后的真正原因，利于排查。  
- 自定义异常让业务错误表达更精准、有表述性。  
- 良好的异常设计能让代码更健壮、可维护。

---

## 延伸思考

- 你会如何设计一个分层调用的异常策略？业务层和底层各抛出哪些异常，如何包装？  
- 什么时候应该抛出运行时异常？什么时候强调检查异常更合适？  
- 如果设计一个异常日志模块，异常链中的哪些信息最关键，应该如何记录？

---

希望这章帮你理清了 Java 异常抛出和声明的全貌！等你动手写写这些代码，自然会感受到异常处理的妙处。我们下一章见！