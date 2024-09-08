---
title: 字符串
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 字符串

在Java中，字符串是字符的序列。例如，"hello"是一个包含字符'h'、'e'、'l'和'o'的字符串。

我们使用**双引号**来表示Java中的字符串。例如，

```java
// 创建一个字符串
String type = "Java编程";
```

在这里，我们创建了一个名为type的字符串变量。该变量被初始化为字符串`Java编程`。

* * *

### 示例：在Java中创建一个字符串

```java
class Main {
  public static void main(String[] args) {
    
    // 创建字符串
    String first = "Java";
    String second = "Python";
    String third = "JavaScript";

    // 打印字符串
    System.out.println(first);   // 打印Java
    System.out.println(second);  // 打印Python
    System.out.println(third);   // 打印JavaScript
  }
}
```

在上面的示例中，我们创建了三个字符串，分别命名为first、second和third。在这里，我们直接像基本类型那样创建字符串。

然而，还有一种使用`new`关键字创建Java字符串的方式。我们将在本教程后面学习这种方法。

**注意**：Java中的字符串不是原始类型（如`int`、`char`等）。相反，所有的字符串都是预定义类`String`的对象。

并且，所有的字符串变量都是`String`类的实例。

* * *

## Java字符串操作

Java字符串提供了各种方法来执行不同的字符串操作。我们将介绍一些常用的字符串操作。

### 1\. 获取字符串的长度

要获取字符串的长度，我们使用String的`length()`方法。例如，

```java
class Main {
  public static void main(String[] args) {

    // 创建一个字符串
    String greet = "Hello! World";
    System.out.println("String: " + greet);



    // 获取greet的长度
    int length = greet.length();


    System.out.println("Length: " + length);
  }
}
```

**输出**

```
String: Hello! World
Length: 12
```

在上面的示例中，`length()`方法计算字符串中的字符总数并返回其长度。要了解更多信息，请访问[Java String length()](https://www.dooocs.com/img/java-programming/library/string/length)。

* * *

### 2\. 连接两个Java字符串

我们可以使用`concat()`方法在Java中连接两个字符串。例如，

```java
class Main {
  public static void main(String[] args) {

    // 创建第一个字符串
    String first = "Java ";
    System.out.println("First String: " + first);

    // 创建第二个字符串
    String second = "Programming";
    System.out.println("Second String: " + second);



    // 连接两个字符串
    String joinedString = first.concat(second);


    System.out.println("Joined String: " + joinedString);
  }
}
```

**输出**

```
First String: Java 
Second String: Programming     
Joined String: Java Programming
```

在上面的示例中，我们创建了两个字符串，命名为first和second。注意到以下语句，

```java
String joinedString = first.concat(second);
```

这里，`concat()`方法将第二个字符串连接到第一个字符串，并将结果赋值给joinedString变量。

我们还可以使用Java中的`+`运算符连接两个字符串。要了解更多信息，请访问[Java String concat()](https://www.dooocs.com/img/java-programming/library/string/concat)。

* * *

### 3\. 比较两个字符串

在Java中，我们可以使用`equals()`方法比较两个字符串。例如，

```java
class Main {
  public static void main(String[] args) {

    // 创建3个字符串
    String first = "java programming";
    String second = "java programming";
    String third = "python programming";



    // 比较第一个和第二个字符串
    boolean result1 = first.equals(second);


    System.out.println("Strings first and second are equal: " + result1);



    // 比较第一个和第三个字符串
    boolean result2 = first.equals(third);


    System.out.println("Strings first and third are equal: " + result2);
  }
}
```

**输出**

```
Strings first and second are equal:```
* * *

### 2\. Filters
```

对应的中文翻译为：

```
* * *

### 2\. 过滤器
```

思路一步步来，我们来翻译待翻译内容： 

```compareto) | compares two strings in the dictionary order  
[compareToIgnoreCase()](https://www.dooocs.com/img/java-programming/library/string/comparetoignorecase) | compares two strings ignoring case differences  
[trim()](https://www.dooocs.com/img/java-programming/library/string/trim) | removes any leading and trailing whitespaces  
[format()](https://www.dooocs.com/img/java-programming/library/string/format) | returns a formatted string  
[split()](https://www.dooocs.com/img/java-programming/library/string/split) | breaks the string into an array of strings  
[toLowerCase()](https://www.dooocs.com/img/java-programming/library/string/tolowercase) | converts the string to lowercase  
[toUpperCase()](https://www.dooocs.com/img/java-programming/library/string/touppercase) | converts the string to uppercase  
[valueOf()](https://www.dooocs.com/img/java-programming/library/string/valueof) | returns the string representation of the specified argument  
[toCharArray()](https://www.dooocs.com/img/java-programming/library/string/tochararray) | converts the string to a `char` array  
[matches()](https://www.dooocs.com/img/java-programming/library/string/matches) | checks whether the string matches the given regex  
[startsWith()](https://www.dooocs.com/img/java-programming/library/string/startswith) | checks if the string begins with the given string  
[endsWith()](https://www.dooocs.com/img/java-programming/library/string/endswith) | checks if the string ends with the given string  
[isEmpty()](https://www.dooocs.com/img/java-programming/library/string/isempty) | checks whether a string is empty of not  
[intern()](https://www.dooocs.com/img/java-programming/library/string/intern) | returns the canonical representation of the string  
[contentEquals()](https://www.dooocs.com/img/java-programming/library/string/contentequals) | checks whether the string is equal to charSequence  
[hashCode()](https://www.dooocs.com/img/java-programming/library/string/hashcode) | returns a hash code for the string  
[subSequence()](https://www.dooocs.com/img/java-programming/library/string/subsequence) | returns a subsequence from the string
```

翻译结果为：

```compareto) | 将两个字符串按照字典顺序进行比较  
[compareToIgnoreCase()](https://www.dooocs.com/img/java-programming/library/string/comparetoignorecase) | 忽略大小写，比较两个字符串  
[trim()](https://www.dooocs.com/img/java-programming/library/string/trim) | 移除字符串前后的空白字符  
[format()](https://www.dooocs.com/img/java-programming/library/string/format) | 返回格式化后的字符串  
[split()](https://www.dooocs.com/img/java-programming/library/string/split) | 将字符串分割成字符串数组  
[toLowerCase()](https://www.dooocs.com/img/java-programming/library/string/tolowercase) | 将字符串转换为小写  
[toUpperCase()](https://www.dooocs.com/img/java-programming/library/string/touppercase) | 将字符串转换为大写  
[valueOf()](https://www.dooocs.com/img/java-programming/library/string/valueof) | 返回指定参数的字符串表示形式  
[toCharArray()](https://www.dooocs.com/img/java-programming/library/string/tochararray) | 将字符串转换为字符数组  
[matches()](https://www.dooocs.com/img/java-programming/library/string/matches) | 检查字符串是否与给定的正则表达式匹配  
[startsWith()](https://www.dooocs.com/img/java-programming/library/string/startswith) | 检查字符串是否以给定的字符串开头  
[endsWith()](https://www.dooocs.com/img/java-programming/library/string/endswith) | 检查字符串是否以给定的字符串结尾  
[isEmpty()](https://www.dooocs.com/img/java-programming/library/string/isempty) | 检查字符串是否为空  
[intern()](https://www.dooocs.com/img/java-programming/library/string/intern) | 返回字符串的规范表示形式  
[contentEquals()](https://www.dooocs.com/img/java-programming/library/string/contentequals) | 检查字符串是否等于charSequence  
[hashCode()](https://www.dooocs.com/img/java-programming/library/string/hashcode) | 返回字符串的哈希码  
[subSequence()](https://www.dooocs.com/img/java-programming/library/string/subsequence) | 从字符串中返回一个子序列
```