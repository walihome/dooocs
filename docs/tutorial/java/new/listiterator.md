---
title: ListIterator
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java ListIterator 接口

Java 集合框架的 `ListIterator` 接口提供了访问列表元素的功能。

它是双向的。这意味着它允许我们在列表中以两个方向迭代元素。

它继承了 `Iterator` 接口。

![ListIterator 接口扩展了 Java Iterator 接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-iterator-interface.png)  

`List` 接口提供了一个 `listIterator()` 方法，返回一个 `ListIterator` 接口的实例。

* * *

## ListIterator 的方法

`ListIterator` 接口提供了一些方法，可以用于对列表元素执行各种操作。

  * `hasNext()` - 如果列表中存在元素则返回 true
  * `next()` - 返回列表的下一个元素
  * `nextIndex()` 返回 `next()` 方法将返回的元素的索引
  * `previous()` - 返回列表的前一个元素
  * `previousIndex()` - 返回 `previous()` 方法将返回的元素的索引
  * `remove()` - 删除 `next()` 或 `previous()` 返回的元素
  * `set()` - 用指定的元素替换 `next()` 或 `previous()` 返回的元素


* * *

### 示例 1：ListIterator 的实现

在下面的示例中，我们使用数组列表实现了 `ListIterator` 接口的 `next()`、`nextIndex()` 和 `hasNext()` 方法。
    
    
    import java.util.ArrayList;
    import java.util.ListIterator;
    
    class Main {
        public static void main(String[] args) {
            // 创建一个 ArrayList
            ArrayList<Integer> numbers = new ArrayList<>();
            numbers.add(1);
            numbers.add(3);
            numbers.add(2);
            System.out.println("ArrayList: " + numbers);
    
            // 创建 ListIterator 的实例
            ListIterator<Integer> iterate = numbers.listIterator();
    
            // 使用 next() 方法
            int number1 = iterate.next();
            System.out.println("下一个元素: " + number1);
    
            // 使用 nextIndex()
            int index1 = iterate.nextIndex();
            System.out.println("下一个元素的位置: " + index1);
    
            // 使用 hasNext() 方法
            System.out.println("是否还有下一个元素？" + iterate.hasNext());
        }
    }
    

**输出**
    
    
    ArrayList: [1, 3, 2]
    下一个元素: 1
    下一个元素的位置: 1
    是否还有下一个元素？true
    

* * *

### 示例 2：ListIterator 的实现

在下面的示例中，我们使用数组列表实现了 `ListIterator` 接口的 `previous()` 和 `previousIndex()` 方法。
    
    
    import java.util.ArrayList;
    import java.util.ListIterator;
    
    class Main {
        public static void main(String[] args) {
            // 创建一个 ArrayList
            ArrayList<Integer> numbers = new ArrayList<>();
            numbers.add(1);
            numbers.add(3);
            numbers.add(2);
            System.out.println("ArrayList: " + numbers);
    
            // 创建 ListIterator 的实例
            ListIterator<Integer> iterate = numbers.listIterator();
            iterate.next();
            iterate.next();
    
            // 使用 previous() 方法
            int number1 = iterate.previous();
            System.out.println("上一个元素: " + number1);
    
            // 使用 previousIndex()
            int index1 = iterate.previousIndex();
            System.out.println("上一个元素的位置: " + index1);
        }
    }
    

**输出**
    
    
    ArrayList: [1, 3, 2]
    上一个元素: 3
    上一个元素的位置: 0
    

在上面的示例中，初始时 `Iterator` 实例位于 1 之前。由于 1 之前没有元素，所以调用 `previous()` 方法会抛出异常。

然后我们使用了 `next()` 方法两次。现在 `Iterator` 实例将位于 3 和 2 之间。

因此，`previous()` 方法返回 3。