---
title: Java 断言
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java断言

Java中的断言有助于通过测试我们认为是正确的代码来检测错误。

使用`assert`关键字进行断言。

其语法如下：
```
assert condition;
```

这里，`condition`是一个布尔表达式，我们在程序执行时假设其为真。

---

## 启用断言

默认情况下，断言是被禁用并在运行时被忽略的。

要启用断言，我们可以使用以下命令：
```
java -ea:arguments
```

或者
```
java -enableassertions:arguments
```

当断言被启用且条件为`true`时，程序会正常执行。

但是，如果条件在启用断言时评估为`false`，JVM会抛出`AssertionError`并立即停止程序。

---

### 示例1：Java断言
```java
class Main {
  public static void main(String args[]) {
    String[] weekends = {"Friday", "Saturday", "Sunday"};
    assert weekends.length == 2;
    System.out.println("There are " + weekends.length + " weekends in a week");
  }
}
```

**输出**
```
There are 3 weekends in a week
```

上述输出是因为该程序没有编译错误，并且默认情况下，断言是被禁用的。

在启用断言后，我们会得到以下输出：
```
Exception in thread "main" java.lang.AssertionError
```

---

## 另一种形式的断言语句

```
assert condition : expression;
```

在这种形式的断言语句中，一个表达式被传递给`AssertionError`对象的构造函数。如果条件为`false`，则该表达式的值将作为错误的详细信息显示。

详细的消息用于捕获和传输断言失败的信息，以帮助调试问题。

---

### 示例2：带有表达式的Java断言

```java
class Main {
  public static void main(String args[]) {
    String[] weekends = {"Friday", "Saturday", "Sunday"};
    assert weekends.length==2 : "There are only 2 weekends in a week";
    System.out.println("There are " + weekends.length + " weekends in a week");
  }
}
```

**输出**
```
Exception in thread "main" java.lang.AssertionError: There are only 2 weekends in a week
```

从上面的示例可以看出，该表达式被传递给了`AssertionError`对象的构造函数。如果我们的假设是`false`并且启用了断言，则会抛出异常并显示相应的消息。

该消息有助于诊断和修复导致断言失败的错误。

---

## 为特定类和包启用断言

如果我们不向断言命令行开关提供任何参数：
```
java -ea
```

这将在除系统类之外的所有类中启用断言。

我们还可以使用参数来为特定的类和包启用断言。这些命令行开关可以提供以下参数：

**在类名中启用断言**

要为程序的所有类启用断言，我们可以使用以下命令：
```
java -ea Main
```

要仅启用一个类的断言，请使用以下命令：
```
java -ea:AnimalClass Main
```

这将只在`Main`程序中的`AnimalClass`启用断言。

**在包名中启用断言**

要仅为`com.animal`包及其子包启用断言，请使用以下命令：
```
java -ea:com.animal... Main
```

**在无名包中启用断言**

要在当前工作目录中的无名包（不使用包语句）中启用断言，请使用以下命令：
```
java -ea:... Main
```

**在系统类中启用断言**

要在系统类中启用断言，我们使用不同的命令行开关：
```
java -esa:arguments
```

或者
```
java -enablesystemassertions:arguments
```

这些开关可以提供的参数与前面的开关相同。

---

##