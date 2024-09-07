# Java TreeMap

Java集合框架中的`TreeMap`类提供了树数据结构的实现。

它实现了[NavigableMap接口](https://www.dooocs.com/img/java-programming/navigablemap "Java NavigableMap Interface")。

![Java TreeMap class implements the Map interface.](https://cdn.programiz.com/sites/tutorial2program/files/java-treemap.png)  


* * *

## 创建TreeMap

为了创建一个`TreeMap`，我们首先必须导入`java.util.TreeMap`包。一旦我们导入了这个包，在Java中可以这样创建一个`TreeMap`。
    
    
    TreeMap<Key, Value> numbers = new TreeMap<>();
    

在上面的代码中，我们创建了一个名为numbers的`TreeMap`，没有任何参数。在这种情况下，`TreeMap`中的元素按照自然顺序排序（升序）。

但是，我们可以通过使用`Comparator`接口来自定义元素的排序方式。我们将在本教程的后面学习它。

这里，

  * Key - 用于在地图中关联每个元素（值）的唯一标识符
  * Value - 由键在地图中关联的元素



* * *

## TreeMap的方法

`TreeMap`类提供了各种方法，可以对地图执行操作。

* * *

## 向TreeMap插入元素

  * `put()` - 将指定的键/值映射（条目）插入地图
  * `putAll()` - 将指定地图中的所有条目插入到此地图中
  * `putIfAbsent()` - 如果指定的键不在地图中，则将指定的键/值映射插入地图



例如，
    
    
    import java.util.TreeMap;
    
    class Main {
        public static void main(String[] args) {
            // 创建偶数TreeMap
            TreeMap<String, Integer> evenNumbers = new TreeMap<>();
    
            // 使用put()方法
            evenNumbers.put("Two", 2);
            evenNumbers.put("Four", 4);
    
            // 使用putIfAbsent()方法
            evenNumbers.putIfAbsent("Six", 6);
            System.out.println("偶数TreeMap: " + evenNumbers);
    
            // 创建数字TreeMap
            TreeMap<String, Integer> numbers = new TreeMap<>();
            numbers.put("One", 1);
    
            // 使用putAll()方法
            numbers.putAll(evenNumbers);
            System.out.println("数字TreeMap: " + numbers);
        }
    }
    

**输出**
    
    
    偶数TreeMap: {Four=4, Six=6, Two=2}
    数字TreeMap: {Four=4, One=1, Six=6, Two=2}
    

* * *

## 访问TreeMap元素

**1\. 使用entrySet()、keySet()和values()**

  * `entrySet()` - 返回树地图的所有键/值映射（条目）的集合
  * `keySet()` - 返回树地图的所有键的集合
  * `values()` - 返回树地图的所有值的集合



例如，
    
    
    import java.util.TreeMap;
    
    class Main {
        public static void main(String[] args) {
            TreeMap<String, Integer> numbers = new TreeMap<>();
    
            numbers.put("One", 1);
            numbers.put("Two", 2);
            numbers.put("Three", 3);
            System.out.println("TreeMap: " + numbers);
    
            // 使用entrySet()
            System.out.println("键/值映射: " + numbers.entrySet());
    
            // 使用keySet()
            System.out.println("键: " + numbers.keySet());
    
            // 使用values()
            System.out.println("值: " + numbers.values());
        }
    }
    

**输出**
    
    
    TreeMap: {One=1, Three=3, Two=2}
    键/值映射: [One=1, Three=3, Two=2]
    键: [One, Three, Two]
    值: [1, 3, 2]
    

**2\. 使用get()和getOrDefault()**

  * `get()` - 返回与指定键关联的值。如果未找到键，则返回null。
  * `getOrDefault()` - 返回与指定键关联的值。如果未找到键，则返回指定的默认* * *

### 2. Filters
### 2\. 过滤器

* * *

### 3. pollFirstEntry() and pollLastEntry() Methods
### 3\. pollFirstEntry() 和 pollLastEntry() 方法

The `pollFirstEntry()` method returns and removes the entry associated with the first key of the map.
`pollFirstEntry()` 方法返回并移除与 Map 的第一个键相关联的条目。

The `pollLastEntry()` method returns and removes the entry associated with the last key of the map.
`pollLastEntry()` 方法返回并移除与 Map 的最后一个键相关联的条目。

For example,
例如，

```java
import java.util.TreeMap;

class Main {
    public static void main(String[] args) {

        TreeMap<String, Integer> numbers = new TreeMap<>();
        numbers.put("First", 1);
        numbers.put("Second", 2);
        numbers.put("Third", 3);
        System.out.println("TreeMap: " + numbers);

        //Using the pollFirstEntry() method
        System.out.println("Using pollFirstEntry(): " + numbers.pollFirstEntry());

        // Using the pollLastEntry() method
        System.out.println("Using pollLastEntry(): " + numbers.pollLastEntry());

        System.out.println("Updated TreeMap: " + numbers);

    }
}
```

**Output**
**输出**

```shell
TreeMap: {First=1, Second=2, Third=3}
Using pollFirstEntry(): First=1
Using pollLastEntry(): Third=3
Updated TreeMap: {Second=2}
```

* * *

### 4. headMap(), tailMap() and subMap() Methods
### 4\. headMap()、tailMap() 和 subMap() 方法

**headMap(key, booleanValue)**
**headMap(key, booleanValue)**

The `headMap()` method returns all the key/value pairs of a treemap before the specified key (which is passed as an argument).
`headMap()` 方法返回指定键（作为参数传递）之前的 TreeMap 中所有键值对。

The booleanValue parameter is optional. Its default value is `false`.
booleanValue 参数是可选的。其默认值为 `false`。

If `true` is passed as a booleanValue, the method also includes the key/value pair of the `key` which is passed as an argument.
如果将 `true` 作为 booleanValue，该方法还包括作为参数传递的 `key` 的键/值对。

For example,
例如，

```java
import java.util.TreeMap;

class Main {
    public static void main(String[] args) {

        TreeMap<String, Integer> numbers = new TreeMap<>();
        numbers.put("First", 1);
        numbers.put("Second", 2);
        numbers.put("Third", 3);
        numbers.put("Fourth", 4);
        System.out.println("TreeMap: " + numbers);

        System.out.println("\nUsing headMap() Method:");
        // Using headMap() with default booleanValue
        System.out.println("Without boolean value: " + numbers.headMap("Fourth"));

        // Using headMap() with specified booleanValue
        System.out.println("With boolean value: " + numbers.headMap("Fourth", true));

    }
}
```

**Output**
**输出**

```shell
TreeMap: {First=1, Fourth=4, Second=2, Third=3}

Using headMap() Method: 
Without boolean value: {First=1}
With boolean value: {First=1, Fourth=4}
```

**tailMap(key, booleanValue)**
**tailMap(key, booleanValue)**

The `tailMap()` method returns all the key/value pairs of a treemap starting from the specified key (which is passed as an argument).
`tailMap()` 方法返回从指定键（作为参数传递）开始的 TreeMap 中所有键值对。

The booleanValue is an optional parameter. Its default value is `true`.
booleanValue 是一个可选参数。其默认值为 `true`。

If `false` is passed as a booleanValue, the method doesn't include the key/value pair of the specified `key`.
如果将 `false` 作为 booleanValue，该方法不包括指定 `key` 的键/值对。

For example,
例如，

```java
import java.util.TreeMap;

class Main {
    public static void main(String[] args) {

        TreeMap<String, Integer> numbers = new TreeMap<>();
        numbers.put("First", 1);
        numbers.put("Second", 2);
        numbers.put("Third", 3);
        numbers.put("Fourth", 4);
        System.out.println("TreeMap: " + numbers);

        System.out.println("\nUsing tailMap() Method:");
        // Using