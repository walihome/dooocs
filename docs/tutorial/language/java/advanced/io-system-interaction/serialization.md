---
title: 对象序列化
description: 探索 Java 中对象序列化的核心机制，了解 Serializable 接口、对象流、transient 关键字及版本控制的实战用法。
order: 34
keywords: [Java, 对象序列化, Serializable, ObjectInputStream, transient, 版本控制]
---

# 对象序列化

## 前置知识
> 在阅读本章前，你需要了解基本的 Java 类和对象概念，以及简单的文件读写操作。

## 为什么需要对象序列化？

想象一下，你在写一个游戏应用，玩家的进度需要保存下来，下次再打开时还能继续。问题来了：如何把 Java 中的那个“游戏角色”的对象状态保存成文件？简单地写入字段不就行了吗？这里就涉及了一个核心问题——**如何把复杂的对象转换成二进制数据存储，并且能准确恢复**。这就是**对象序列化**要解决的实战场景。

简而言之，"序列化"就是将内存中的对象转换成一连串字节，方便存储、网络传输等；"反序列化"则是将这些字节流重新恢复成原始对象。Java 提供了内置支持，但用法和细节并不完全直观。我们这章就带着疑问一步步弄懂它。

---

## 1. 什么是 Serializable 接口？

最简单的定义：如果你想让你的对象能被 Java 自动序列化和反序列化，你必须让它实现一个特殊的“标记接口”——`java.io.Serializable`。它不含任何方法（空接口），只是告诉 JVM：“嘿，我是可以被序列化的！”

### 为什么需要 Serializable？

假如没有它，Java 会拒绝序列化你的类。就好像参加一个聚会，你得拿到“入场券”才能进去。实现 `Serializable` 就是给你的类发一张这样的“入场券”。

### 基础用法示例

```java
import java.io.Serializable;

// 简单的 User 类，实现了 Serializable，表示可以被序列化
public class User implements Serializable {
    private String username;
    private int age;

    // 构造器
    public User(String username, int age) {
        this.username = username;
        this.age = age;
    }

    // 方便打印信息
    @Override
    public String toString() {
        return "User{username='" + username + "', age=" + age + "}";
    }
}
```

这段代码告诉我们：只要给类加上`implements Serializable`，Java 就能帮你搞定后续的序列化工作。

**这段代码做了什么？**

- 定义了一个能被序列化的 `User` 类。
- 没有写任何序列化相关的额外代码，却已经具备序列化资格。

---

## 2. ObjectOutputStream 与 ObjectInputStream：序列化和反序列化的主力军

`Serializable` 是入场券，真正帮你执行“变字节”和“还原对象”的是 Java IO 包里的 `ObjectOutputStream` 和 `ObjectInputStream`。

我们先看一个简单的例子，演示怎样把一个对象写到文件里，再从文件读回来。

```java
import java.io.*;

public class SerializationDemo {
    public static void main(String[] args) {
        User user = new User("Alice", 30);

        // 序列化：把对象写入文件
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("user.ser"))) {
            oos.writeObject(user);  // 写入对象
            System.out.println("序列化成功: " + user);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 反序列化：从文件读出对象
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("user.ser"))) {
            User deserializedUser = (User) ois.readObject();
            System.out.println("反序列化成功: " + deserializedUser);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**

1. 新建一个 User 对象。
2. 通过 `ObjectOutputStream` 写入 `user.ser` 文件，实现序列化。
3. 再用 `ObjectInputStream` 从 `user.ser` 中读取对象，实现反序列化。
4. 打印出反序列化后的对象，确认数据一致。

**执行流程的文字“视觉化”描述：**

- 当 `oos.writeObject(user)` 执行时，JVM 会把 `user` 所包含的所有非瞬态字段转换成字节流，写到文件系统。
- 反过来，`ois.readObject()` 读到字节流后，会重新分配内存，创建一个新的 `User` 对象，通过填充之前保存的字段值来还原它。

---

## 3. transient 关键字：告诉 JVM 某些字段不要被序列化

有时候，不是所有字段都适合被序列化。比如密码、敏感信息，或者一些运行时临时数据。这时候就需要用 `transient` 来标记它们。

试着看看下面的代码：

```java
import java.io.Serializable;

public class Employee implements Serializable {
    private String name;
    private transient String password; // 不想被保存的敏感信息

    public Employee(String name, String password) {
        this.name = name;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Employee{name='" + name + "', password='" + password + "'}";
    }
}
```

配合同样的序列化和反序列化代码操作：

```java
import java.io.*;

public class TransientDemo {
    public static void main(String[] args) {
        Employee employee = new Employee("Bob", "secret123");

        // 序列化
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("employee.ser"))) {
            oos.writeObject(employee);
            System.out.println("序列化前: " + employee);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 反序列化
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("employee.ser"))) {
            Employee deserializedEmployee = (Employee) ois.readObject();
            System.out.println("反序列化后: " + deserializedEmployee);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

**运行结果你会看到：**

```
序列化前: Employee{name='Bob', password='secret123'}
反序列化后: Employee{name='Bob', password='null'}
```

这说明：`transient` 标记的字段不会被保存，也不会被恢复。

**这段代码做了什么？**

- 演示字段 `password` 被标记为 `transient` 后，不参与序列化。
- 反序列化后该字段会被重置为默认值（此处是 `null`）。

---

## 4. 版本控制（serialVersionUID）：确保类的兼容性

假设我们序列化了一个对象，存到文件里。过几天，我们对类做了修改（比如改了字段）。这时候再去反序列化旧文件，就可能抛出 `InvalidClassException`。

为什么？Java 序列化机制要判断读取的二进制数据对应的类版本，避免读取和当前类定义不匹配的数据导致数据错乱。

这里就有一个重要概念：

```java
private static final long serialVersionUID = 1L;
```

这是一个版本号，用来标识类的版本。只要你写了这条，Java 就会用它来判断版本。

### 示例

```java
import java.io.Serializable;

public class Product implements Serializable {
    private static final long serialVersionUID = 100L; // 显式声明版本号

    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}
```

如果你修改了 `Product` 类的结构，但没更改 `serialVersionUID`，有时候旧文件还能继续反序列化（但是要保证兼容）；如果不声明，Java 会自动根据类生成版本号，修改结构会变化，导致反序列化失败。

---

## 5. 对比总结：序列化 vs. 其他持久化方式

| 方案           | 优点                               | 缺点                             | 适用场景                      |
|----------------|----------------------------------|--------------------------------|-----------------------------|
| Java 序列化     | 简单，Java 内置支持，保存对象完整状态 | 生成的字节流不容易跨语言使用；不易读；版本兼容复杂 | 快速存盘和网络传输Java对象    |
| JSON/XML 序列化 | 可跨语言，易读，结构清晰               | 不支持对象的完整状态如方法、复杂引用       | 对外API，日志，配置文件       |
| 数据库持久化     | 结构化存储，易于查询和管理               | 需要ORM，较复杂                    | 大型应用数据管理               |

---

:::tip 💡 实战建议
- 总是为你的可序列化类显式声明 `serialVersionUID`，避免未来类结构变更时产生无意义的异常。
- 警惕 `transient` 字段，不要随意标记，否则会导致数据丢失。
- 只对真正需要跨 JVM 传输或持久化的对象使用 Java 序列化，不然考虑 JSON 等更通用格式。
- 尽量避免序列化包含大量动态状态或外部资源的类（如`Socket`、`Thread`）。
:::

---

:::warning ⚠️ 常见陷阱
- **未实现 Serializable**:对象没有实现 `Serializable`，直接序列化会抛异常。
- **序列化静态字段**:静态字段不属于实例状态，不会被序列化，容易被误解。
- **版本不匹配**:类结构修改后没有同步更新 `serialVersionUID`，导致反序列化错误。
- **忽略了父类实现**:如果父类未实现 Serializable，子类序列化时父类状态不会被保存。
:::

---

## 小结

- `Serializable` 是对象序列化的“入场券”，必须实现才能被序列化。
- `ObjectOutputStream` 和 `ObjectInputStream` 真正负责写出和读入字节流。
- `transient` 关键字用于标记不要序列化的字段。
- `serialVersionUID` 是版本控制关键，避免类结构变动带来的反序列化异常。
- 明白不同持久化方案的差异，合理选用。

---

感谢你坚持到这里！接下来你可以尝试把自己项目中的配置对象用序列化保存一下，感受把内存对象变成数据的魔法。对了，序列化时别忘了考虑版本管理和安全性，这两点往往是实战中绊脚石。

如果你想更深入，可以思考：

- 复杂对象中含有非 Serializable 成员时，怎么办？
- 如何自定义序列化过程，比如控制哪些字段被保存，怎么保存？

下章我们可以接着聊聊这些高级话题。到时候，欢迎继续和我一起探索！

