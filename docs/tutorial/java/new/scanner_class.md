---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java Scanner 类

`java.util` 包中的 `Scanner` 类用于从不同来源（如输入流、用户、文件等）读取输入数据。让我们来看一个例子。

* * *

## 示例 1：使用 Scanner 读取一行文本

```
import java.util.Scanner;

class Main {
  public static void main(String[] args) {

    // 创建 Scanner 对象
    Scanner input = new Scanner(System.in);

    System.out.print("请输入您的姓名：");

    // 从键盘获取输入
    String name = input.nextLine();

    // 打印姓名
    System.out.println("我的名字是：" + name);

    // 关闭 Scanner
    input.close();
  }
}
```

**输出**

```
请输入您的姓名：Kelvin
我的名字是：Kelvin
```

在上面的示例中，注意以下行：

```
Scanner input = new Scanner(System.in);
```

在这里，我们创建了一个名为 `input` 的 `Scanner` 对象。

`System.in` 参数用于从标准输入获取输入。它的工作方式类似于从键盘获取输入。

然后，我们使用 `Scanner` 类的 `nextLine()` 方法从用户那里读取一行文本。

现在，你对 `Scanner` 有了一些了解，让我们更深入地探讨它。

* * *

## 导入 Scanner 类

正如我们从上面的示例中看到的，我们需要在使用 `Scanner` 类之前导入 `java.util.Scanner` 包。

```
import java.util.Scanner;
```

要了解有关导入包的更多信息，请访问[Java 包](https://www.dooocs.com/img/java-programming/packages-import)。

* * *

## 在 Java 中创建 Scanner 对象

一旦导入了该包，我们可以这样创建 `Scanner` 对象。

```
// 从输入流中读取输入
Scanner sc1 = new Scanner(InputStream input);

// 从文件中读取输入
Scanner sc2 = new Scanner(File file);

// 从字符串中读取输入
Scanner sc3 = new Scanner(String str);
```

在这里，我们创建了 `Scanner` 类的对象，分别从 [InputStream](https://www.dooocs.com/img/java-programming/inputstream)、[File](https://www.dooocs.com/img/java-programming/file) 和 [String](https://www.dooocs.com/img/java-programming/string) 中读取输入。

* * *

## Java Scanner 方法来获取输入

`Scanner` 类提供了各种方法，允许我们读取不同类型的输入。

方法 | 描述  
---|---  
`nextInt()` | 从用户读取一个 `int` 值  
`nextFloat()` | 从用户读取一个 `float` 值  
`nextBoolean()` | 从用户读取一个 `boolean` 值  
`nextLine()` | 从用户读取一行文本  
`next()` | 从用户读取一个单词  
`nextByte()` | 从用户读取一个 `byte` 值  
`nextDouble()` | 从用户读取一个 `double` 值  
`nextShort()` | 从用户读取一个 `short` 值  
`nextLong()` | 从用户读取一个 `long` 值  

* * *

### 示例 2：Java Scanner nextInt()

```
import java.util.Scanner;

class Main {
  public static void main(String[] args) {

    // 创建 Scanner 对象
    Scanner input = new Scanner(System.in);

    System.out.println("请输入一个整数：");

    // 读取一个 int 值
    int data1 = input.nextInt();

    System.out.println("使用 nextInt()：" + data1);

    input.close();
  }
}
```

**输出**

```
请输入一个整数：
22
使用 nextInt()：22
```

在上面的示例中，我们使用 `nextInt()` 方法来读取一个整数值。

* * *

### 示例 3：Java Scanner nextDouble()

```
import java.util.Scanner;

class Main {
  public static void main(String[] args) {

    // 创建 Scanner 对象
    Scanner input = new Scanner(System.in);
    System.out.print("请输入 Double 值：");

    // 读取 double 值
    double value = input.nextDouble();
    System.out.println("使用 nextDouble()：" + value);

    input.close();
  }
}
```

**输出**

```
请输入 Double 值：33.33
使用 nextDouble()：33.33
```

在上面的示例中