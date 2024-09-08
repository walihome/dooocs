---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java for-each 循环

在Java中，**for-each**循环用于遍历[数组](https://www.dooocs.com/img/java-programming/arrays "Java Arrays")和集合（如[ArrayList](https://www.dooocs.com/img/java-programming/arraylist)）的元素。它也被称为增强型for循环。

* * *

## for-each 循环语法

Java **for-each** 循环的语法是：
    
    
    for(dataType item : array) {
        ...
    }

这里，

  * **array** \- 一个数组或者集合
  * **item** \- 将数组/集合的每个项分配给此变量
  * **dataType** \- 数组/集合的数据类型



* * *

## 示例 1: 打印数组元素
    
    
    // 打印数组元素 
    
    class Main {
      public static void main(String[] args) {
          
        // 创建一个数组
        int[] numbers = {3, 9, 5, -5};
        
        // for-each 循环 
        for (int number: numbers) {
          System.out.println(number);
        }
      }
    }

**输出**
    
    
    3
    9
    5
    -5
    

在这个示例中，我们使用 **for-each** 循环逐个打印了numbers数组的每个元素。

  * 在第一次迭代中，item为3。
  * 在第二次迭代中，item为9。
  * 在第三次迭代中，item为5。
  * 在第四次迭代中，item为-5。



* * *

## 示例 2: 数组元素求和
    
    
    // 计算数组所有元素的和
    
    class Main {
     public static void main(String[] args) {
      
       // 一个数字数组
       int[] numbers = {3, 4, 5, -5, 0, 12};
       int sum = 0;
    
       // 遍历数组的每个元素 
       for (int number: numbers) {
         sum += number;
       }
      
       System.out.println("Sum = " + sum);
     }
    }

**输出** :
    
    
    Sum = 19

在上面的程序中，`for each` 循环的执行如下所示：

迭代 | 变量  
---|---  
1 | number = 3  
sum = 0 + 3 = 3  
2 | number = 4  
sum = 3 + 4 = 7  
3 | number = 5  
sum = 7 + 5 = 12  
4 | number = -5  
sum = 12 + (-5) = 7  
5 | number = 0  
sum = 7 + 0 = 7  
6 | number = 12  
sum = 7 + 12 = 19  
  
可以看到，在循环的每次迭代中，我们将numbers数组的每个元素加到sum变量中。

* * *

## for循环 vs for-each 循环

让我们看看 `for-each` 循环与普通[Java for循环](https://www.dooocs.com/img/java-programming/for-loop)之间的区别。

### 1\. 使用for循环
    
    
    class Main {
     public static void main(String[] args) {
        
       char[] vowels = {'a', 'e', 'i', 'o', 'u'};
    
       // 使用for循环遍历数组
       for (int i = 0; i < vowels.length; ++ i) {
         System.out.println(vowels[i]);
       }
     }
    }

**输出** :
    
    
    a
    e
    i
    o
    u

### 2\. 使用for-each 循环
    
    
    class Main {
     public static void main(String[] args) {
    
       char[] vowels = {'a', 'e', 'i', 'o', 'u'};
      
       // 使用for-each 循环遍历数组
       for (char item: vowels) {
         System.out.println(item);
       }
     }
    }

**输出** :
    
    
    a
    e
    i
    o
    u

在这里，两个程序的输出都是相同的。然而，**for-each** 循环更容易编写和理解。

这就是为什么在处理数组和集合时，优先选择 **for-each** 循环而不是 **