# Java变量和字面量

## Java变量

变量是内存中的一个位置（存储区域），用于保存数据。

为了表示存储区域，每个变量都应该被赋予一个唯一的名字（标识符）。查看更多关于[Java标识符](https://www.dooocs.com/img/java-programming/keywords-identifiers)的信息。

* * *

### 在Java中创建变量

以下是我们在Java中创建变量的方法，
    
    
    int speedLimit = 80;

这里，speedLimit是int数据类型的变量，我们将值80赋给它。

int数据类型表示该变量只能保存整数。要了解更多，请访问[Java数据类型](https://www.dooocs.com/img/java-programming/variables-primitive-data-types)。

在示例中，我们在声明时给变量赋了值。但这不是强制性的。

您可以分别声明和赋值变量。例如，
    
    
    int speedLimit;
    speedLimit = 80;

> **注意**：Java是一种静态类型语言。这意味着所有变量在使用之前必须先声明。

* * *

### 更改变量的值

程序中的变量的值是可以更改的，因此称其为**变量**。例如，
    
    
    int speedLimit = 80;
    ... .. ...
    speedLimit = 90; 

在这里，初始时speedLimit的值为**80**。后来，我们将其更改为**90**。

但是，在同一作用域内无法更改变量的数据类型。

什么是变量作用域？

暂时不要担心。只需记住我们不能这样做：
    
    
    int speedLimit = 80;
    ... .. ...
    float speedLimit;

要了解更多，请访问：[我可以在Java中更改变量的声明类型吗？](http://stackoverflow.com/questions/27092245/can-i-change-declaration-type-for-a-variable-in-java)

* * *

## Java变量命名规则

Java编程语言有自己的变量命名规则和约定。以下是您需要知道的内容：

  * Java区分大小写。因此，age和AGE是两个不同的变量。例如，  

    
        int age = 24;
    int AGE = 25;
    
    System.out.println(age);  // 输出 24
    System.out.println(AGE);  // 输出 25

  * 变量必须以字母或下划线（_）或美元符号（$）开头。例如，  

    
        int age;  // 有效名称和良好实践
    int _age;  // 有效但不好的实践
    int $age;  // 有效但不好的实践

  * 变量名不能以数字开头。例如，  

    
        int 1age;  // 无效变量

  * 变量名不能包含空格。例如，  

    
        int my age;  // 无效变量

  
  
如果需要使用由多个单词组成的变量名，请使用所有小写字母表示第一个单词，并将每个后续单词的第一个字母大写。例如，myAge。
  * 在创建变量时，请选择一个有意义的名称。例如，score、number、level比s、n和l更有意义的变量名。
  * 如果选择使用单词变量名，请使用全部小写字母。例如，最好使用speed而不是SPEED或sPEED。



* * *

Java编程语言中有4种类型的变量：

  * 实例变量（非静态字段）
  * 类变量（静态字段）
  * 局部变量
  * 参数



如果您现在对此感兴趣，请访问[Java变量类型](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html)。

* * *

## Java字面量

字面量是用于表示固定值的数据。它们可以直接在代码中使用。例如，
    
    
    int a = 1;
    float b = 2.5;
    char c = 'F';

这里的`1