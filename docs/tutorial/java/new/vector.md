# Java向量

`Vector`类是`List`接口的一种实现，允许我们创建类似于[ArrayList](https://www.dooocs.com/img/java-programming/arraylist "Java ArrayList")类的可调整大小的数组。

* * *

## Java向量 vs. ArrayList

在Java中，`ArrayList`和`Vector`都实现了`List`接口并提供相同的功能。然而，它们之间存在一些差异。

`Vector`类为每个操作进行同步处理。这意味着无论何时我们想要对向量执行某个操作，`Vector`类会自动对该操作应用锁定。

这是因为当一个线程正在访问一个向量时，同时另一个线程试图访问它时，会生成一个名为`ConcurrentModificationException`的异常。因此，对于每个操作连续使用锁会使向量的效率降低。

然而，在数组列表中，方法没有同步。相反，它使用`Collections.synchronizedList()`方法将整个列表同步化。

> **注意：**建议使用`ArrayList`代替`Vector`，因为向量的效率较低。

* * *

## 创建向量

下面是我们如何在Java中创建向量的方法。
    
    
    Vector<Type> vector = new Vector<>();
    

这里，Type表示链表的类型。例如，
    
    
    // 创建整数类型链表
    Vector<Integer> vector= new Vector<>();
    
    // 创建字符串类型链表
    Vector<String> vector= new Vector<>();
    

* * *

## 向向量中添加元素

  * `add(element)` - 向向量中添加一个元素
  * `add(index, element)` - 向指定位置添加一个元素
  * `addAll(vector)` - 将一个向量的所有元素添加到另一个向量中



例如，
    
    
    import java.util.Vector;
    
    class Main {
        public static void main(String[] args) {
            Vector<String> mammals= new Vector<>();
    
            // 使用add()方法
            mammals.add("Dog");
            mammals.add("Horse");
    
            // 使用索引号
            mammals.add(2, "Cat");
            System.out.println("Vector: " + mammals);
    
            // 使用addAll()
            Vector<String> animals = new Vector<>();
            animals.add("Crocodile");
    
            animals.addAll(mammals);
            System.out.println("New Vector: " + animals);
        }
    }
    

**输出**
    
    
    Vector: [Dog, Horse, Cat]
    New Vector: [Crocodile, Dog, Horse, Cat]
    

* * *

## 访问向量元素

  * `get(index)` - 返回由索引指定的元素
  * `iterator()` - 返回一个迭代器对象，用于顺序访问向量元素



例如，
    
    
    import java.util.Iterator;
    import java.util.Vector;
    
    class Main {
        public static void main(String[] args) {
            Vector<String> animals= new Vector<>();
            animals.add("Dog");
            animals.add("Horse");
            animals.add("Cat");
    
            // 使用get()
            String element = animals.get(2);
            System.out.println("Element at index 2: " + element);
    
            // 使用iterator()
            Iterator<String> iterate = animals.iterator();
            System.out.print("Vector: ");
            while(iterate.hasNext()) {
                System.out.print(iterate.next());
                System.out.print(", ");
            }
        }
    }
    

**输出**
    
    
    Element at index 2: Cat
    Vector: Dog, Horse, Cat,
    

* * *

## 删除向量元素

  * `remove(index)` - 从指定位置删除一个元素
  * `removeAll()` - 删除所有元素
  * `clear()` - 删除所有元素。该方法比`removeAll()`更高效



例如，
    
    
    import java.util.Vector;
    
    class Main {
        public static void main(String[] args) {
            Vector<String> animals= new Vector<>();
            animals.add("Dog");
            animals.add("Horse");
            animals.add("Cat");
    
            System.out.println("Initial Vector: " + animals);
    
            // 使用remove()
            String element = animals.remove(1);
            System.out.println("Removed Element: " + element);
            System.out.println("New Vector: " + animals);
    
            // 使用clear()
            animals.clear();
            System.out.println("Vector after clear(): " + animals);
        }
    }
    

**输出**