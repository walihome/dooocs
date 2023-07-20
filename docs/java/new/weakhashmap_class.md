# Java WeakHashMap

Java中的`WeakHashMap`类是Java集合框架提供的一种散列表数据结构。

它实现了[Map接口](https://www.dooocs.com/img/java-programming/map "Java Map Interface")。

![Java WeakHashMap实现了Map接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-weakhashmap.png)  


> **注意**：WeakHashMap的键是**WeakReference**类型。

弱引用类型的对象在Java中如果引用不再在程序中使用，可以被垃圾回收。

让我们先学习如何创建一个弱哈希映射。然后，我们将学习它与哈希映射的区别。

* * *

## 创建WeakHashMap

为了创建一个弱哈希映射，我们首先必须导入`java.util.WeakHashMap`包。一旦我们导入了该包，以下是我们如何在Java中创建弱哈希映射的方法。
    
    
    //WeakHashMap创建容量为8，负载因子为0.6
    WeakHashMap<Key, Value> numbers = new WeakHashMap<>(8, 0.6);
    

在上面的代码中，我们创建了一个名为numbers的弱哈希映射。

这里，

  * Key - 用于关联映射中每个元素（值）的唯一标识符
  * Value - 由键在映射中关联的元素



请注意部分 `new WeakHashMap<>(8, 0.6)`。 这里，第一个参数是**容量**，第二个参数是**负载因子**。

  * **容量** - 此映射的容量为8。 这意味着它可以存储8个条目。
  * **负载因子** - 这个映射的负载因子为0.6。 这意味着当我们的哈希表被填满60％时，条目将移动到原始哈希表大小两倍的新哈希表中。



**默认容量和负载因子**

可以在不定义容量和负载因子的情况下创建弱哈希映射。例如，
    
    
    //具有默认容量和负载因子的WeakHashMap
    WeakHashMap<Key, Value> numbers1 = new WeakHashMap<>();
    

默认情况下，

  * 映射的容量将为16
  * 负载因子将为0.75



* * *

## HashMap和WeakHashMap之间的区别

让我们看一下Java中弱哈希映射的实现。
    
    
    import java.util.WeakHashMap;
    
    class Main {
        public static void main(String[] args) {
            // 创建数字的WeakHashMap
            WeakHashMap<String, Integer> numbers = new WeakHashMap<>();
    
            String two = new String("Two");
            Integer twoValue = 2;
            String four = new String("Four");
            Integer fourValue = 4;
    
            // 插入元素
            numbers.put(two, twoValue);
            numbers.put(four, fourValue);
            System.out.println("WeakHashMap: " + numbers);
    
            // 将引用设置为null
            two = null;
    
            // 执行垃圾回收
            System.gc();
    
            System.out.println("垃圾收集后的WeakHashMap：" + numbers);
        }
    }
    

**输出**
    
    
    WeakHashMap: {Four=4, Two=2}
    垃圾收集后的WeakHashMap：{Four}
    

正如我们所看到的，当弱哈希映射的键`two`设置为`null`并执行垃圾回收时，该键被删除。

这是因为与哈希映射不同，弱哈希映射的键是**弱引用**类型。这意味着如果映射中的键不再使用，则映射的条目将由垃圾回收器移除。这对于节省资源非常有用。

现在让我们在哈希映射中看相同的实现。```
* * *

## 其他WeakHashMap的方法

方法 | 描述  
---|---  
`clear()` | 从映射中移除所有条目  
`containsKey()` | 检查映射是否包含指定的键，并返回一个布尔值  
`containsValue()` | 检查映射是否包含指定的值，并返回一个布尔值  
`size()` | 返回映射的大小  
`isEmpty()` | 检查映射是否为空，并返回一个布尔值  

* * *

更多信息，请访问[Java WeakHashMap（官方Java文档）](https://docs.oracle.com/javase/7/docs/api/java/util/WeakHashMap.html)。
```

```java
import java.util.WeakHashMap;

class Main {
    public static void main(String[] args) {
        // 创建偶数的WeakHashMap
        WeakHashMap<String, Integer> numbers = new WeakHashMap<>();

        String one = new String("One");
        Integer oneValue = 1;
        numbers.put(one, oneValue);

        String two = new String("Two");
        Integer twoValue = 2;
        numbers.put(two, twoValue);

        System.out.println("WeakHashMap: " + numbers);

        // 使用remove()方法，传入一个参数
        int value = numbers.remove("Two");
        System.out.println("被移除的值：" + value);

        // 使用remove()方法，传入两个参数
        boolean result = numbers.remove("One", 3);
        System.out.println("是否移除了{One=3}这个条目？" + result);

        System.out.println("更新后的WeakHashMap：" + numbers);
    }
}
```

**输出**

```
WeakHashMap: {Two=2, One=1}
被移除的值：2
是否移除了{One=3}这个条目？false
更新后的WeakHashMap：{One=1}
```

```