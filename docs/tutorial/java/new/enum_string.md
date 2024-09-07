# Java枚举字符串

在学习Java枚举字符串之前，请确保了解[Java枚举](https://www.programiz.com/java-programming/enums)。

在Java中，我们可以使用`toString()`方法或`name()`方法获取枚举常量的字符串表示。例如，

```java
enum Size {
   SMALL, MEDIUM, LARGE, EXTRALARGE
}

class Main {
   public static void main(String[] args) {

      System.out.println("SMALL的字符串值是：" + Size.SMALL.toString());
      System.out.println("MEDIUM的字符串值是：" + Size.MEDIUM.name());

   }
}
```

**输出**
```java
SMALL的字符串值是：SMALL
MEDIUM的字符串值是：MEDIUM
```

在上面的示例中，我们看到枚举常量的默认字符串表示是相同常量的名称。

---

## 更改枚举的默认字符串值

我们可以通过重写`toString()`方法来更改枚举常量的默认字符串表示。例如，

```java
enum Size {
   SMALL {

      // 为SMALL重写toString()
      public String toString() {
        return "尺寸很小。";
      }
   },

   MEDIUM {

     // 为MEDIUM重写toString()
      public String toString() {
        return "尺寸适中。";
      }
   };
}

class Main {
   public static void main(String[] args) {
      System.out.println(Size.MEDIUM.toString());
   }
}
```

**输出**
```java
尺寸适中。
```

在上面的程序中，我们创建了一个Size枚举，并重写了枚举常量`SMALL`和`MEDIUM`的`toString()`方法。

> **注意：**我们无法重写`name()`方法。这是因为`name()`方法是`final`的。

了解更多信息，请访问[创建字符串枚举的最佳方式](https://stackoverflow.com/questions/3978654/best-way-to-create-enum-of-strings)。