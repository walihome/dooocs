# Java HashSet 类

Java Collections 框架的 `HashSet` 类提供了散列表数据结构的功能。

它实现了 [Set 接口](https://www.dooocs.com/img/java-programming/set "Java Set Interface")。

![Java HashSet 类实现了 Set 接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-hashset.png)  


* * *

## 创建 HashSet

要创建一个哈希集合，我们首先必须导入 `java.util.HashSet` 包。

一旦我们导入了包，下面是我们如何在 Java 中创建哈希集合的方法。
    
    
    // 容量为 8，负载因子为 0.75 的 HashSet
    HashSet<Integer> numbers = new HashSet<>(8, 0.75);
    

在这里，我们创建了一个名为 `numbers` 的哈希集合。

请注意，`new HashSet<>(8, 0.75)` 的部分。在这里，第一个参数是**容量**，第二个参数是**负载因子**。

  * **容量** \- 这个哈希集合的容量为 8。这意味着它可以存储 8 个元素。
  * **负载因子** \- 这个哈希集合的负载因子为 0.75。这意味着，当哈希集合被填充到 60% 时，元素将被移动到原始哈希表大小两倍的新哈希表中。



**默认容量和负载因子**

也可以创建一个没有定义容量和负载因子的哈希表。例如，
    
    
    // 默认容量和负载因子的 HashSet
    HashSet<Integer> numbers1 = new HashSet<>();
    

默认情况下，

  * 哈希集合的容量为 16
  * 负载因子为 0.75



* * *

## HashSet 的方法

`HashSet` 类提供了各种方法，允许我们对集合执行各种操作。

* * *

## 将元素插入 HashSet

  * `add()` \- 将指定的元素插入到集合中
  * `addAll()` \- 将指定集合的所有元素插入到集合中



例如，
    
    
    import java.util.HashSet;
    
    class Main {
        public static void main(String[] args) {
            HashSet<Integer> evenNumber = new HashSet<>();
    
            // 使用 add() 方法
            evenNumber.add(2);
            evenNumber.add(4);
            evenNumber.add(6);
            System.out.println("HashSet: " + evenNumber);
    
            HashSet<Integer> numbers = new HashSet<>();
            
            // 使用 addAll() 方法
            numbers.addAll(evenNumber);
            numbers.add(5);
            System.out.println("New HashSet: " + numbers);
        }
    }
    

**输出**
    
    
    HashSet: [2, 4, 6]
    New HashSet: [2, 4, 5, 6]
    

* * *

## 访问 HashSet 元素

要访问哈希集合的元素，我们可以使用 `iterator()` 方法。为了使用这个方法，我们必须导入 `java.util.Iterator` 包。例如，
    
    
    import java.util.HashSet;
    import java.util.Iterator;
    
    class Main {
        public static void main(String[] args) {
            HashSet<Integer> numbers = new HashSet<>();
            numbers.add(2);
            numbers.add(5);
            numbers.add(6);
            System.out.println("HashSet: " + numbers);
    
            // 调用 iterator() 方法
            Iterator<Integer> iterate = numbers.iterator();
            System.out.print("HashSet using Iterator: ");
            // 访问元素
            while(iterate.hasNext()) {
                System.out.print(iterate.next());
                System.out.print(", ");
            }
        }
    }
    

**输出**
    
    
    HashSet: [2, 5, 6]
    HashSet using Iterator: 2, 5, 6,
    

* * *

## 移除元素

  * `remove()` \- 从集合中移除指定的元素
  * `removeAll()` \- 从集合中移除所有元素



例如，
    
    
    import java.util.HashSet;
    
    class Main {
        public static void main(String[] args) {
            HashSet<Integer> numbers = new HashSet<>();
            numbers.add(2);
            numbers.add(