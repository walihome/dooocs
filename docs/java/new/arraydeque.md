# Java ArrayDeque

在Java中，我们可以使用`ArrayDeque`类来使用数组实现队列和双端队列数据结构。

* * *

## `ArrayDeque`实现的接口

`ArrayDeque`类实现了以下两个接口：

  * [Java Queue Interface](https://www.programiz.com/java-programming/queue "Java Queue Interface")
  * [Java Deque Interface](https://www.programiz.com/java-programming/deque "Java Deque Interface")



![ArrayDeque in Java implements two interfaces: Queue and Deque](https://cdn.programiz.com/sites/tutorial2program/files/java-arraydeque-class.png)  


* * *

## 创建ArrayDeque

为了创建一个ArrayDeque，我们必须导入`java.util.ArrayDeque`包。

以下是如何在Java中创建一个ArrayDeque的示例：
    
    
    ArrayDeque<Type> animal = new ArrayDeque<>();
    

这里，Type表示ArrayDeque的类型。例如，
    
    
    // 创建String类型的ArrayDeque
    ArrayDeque<String> animals = new ArrayDeque<>();
    
    // 创建Integer类型的ArrayDeque
    ArrayDeque<Integer> age = new ArrayDeque<>();
    

* * *

## ArrayDeque的方法

`ArrayDeque`类提供了对`Queue`和`Deque`接口中所有方法的实现。

* * *

### 向Deque插入元素

**1\. 使用add()、addFirst()和addLast()添加元素**

  * `add()`- 在数组Deque的末尾插入指定的元素
  * `addFirst()`- 在数组Deque的开头插入指定的元素
  * `addLast()`- 在数组Deque的末尾插入指定的元素（等同于`add()`）



> **注意：** 如果数组Deque已满，所有这些方法`add()`、`addFirst()`和`addLast()`都会抛出`IllegalStateException`异常。

例如，
    
    
    import java.util.ArrayDeque;
    
    class Main {
        public static void main(String[] args) {
            ArrayDeque<String> animals= new ArrayDeque<>();
    
            // 使用add()
            animals.add("Dog");
    
            // 使用addFirst()
            animals.addFirst("Cat");
    
            // 使用addLast()
            animals.addLast("Horse");
            System.out.println("ArrayDeque: " + animals);
        }
    }
    

**输出**
    
    
    ArrayDeque: [Cat, Dog, Horse]
    

**2\. 使用offer()、offerFirst()和offerLast()插入元素**

  * `offer()`- 在数组Deque的末尾插入指定的元素
  * `offerFirst()`- 在数组Deque的开头插入指定的元素
  * `offerLast()`- 在数组Deque的末尾插入指定的元素



> **注意：** 如果成功插入了元素，则`offer()`、`offerFirst()`和`offerLast()`返回`true`；如果数组Deque已满，则这些方法返回`false`。

例如，
    
    
    import java.util.ArrayDeque;
    
    class Main {
        public static void main(String[] args) {
            ArrayDeque<String> animals= new ArrayDeque<>();
            // 使用offer()
            animals.offer("Dog");
    
            // 使用offerFirst()
            animals.offerFirst("Cat");
    
            // 使用offerLast()
            animals.offerLast("Horse");
            System.out.println("ArrayDeque: " + animals);
        }
    }
    

**输出**
    
    
    ArrayDeque: [Cat, Dog, Horse]
    

**注意：** 如果数组Deque已满

  * `add()`方法将抛出异常
  * `offer()`方法返回`false`



* * *

### 访问ArrayDeque元素

**1\. 使用getFirst()和getLast()访问元素**

  * `getFirst()`- 返回数组Deque的第一个元素
  * `getLast()`- 返回数组Deque的最后一个元素



> **注意：** 如果数组Deque为空，则`getFirst()`和`getLast()`会抛出`NoSuchElementException`异常。

例如，
    
    
    import java.util.ArrayDeque;
    
    class Main {
        public static void main(String[] args) {
            ArrayDeque<String> animals= new ArrayDeque<>();
            animals.add("Dog");
            animals.add("Cat");
            animals.add("Horse");
            System.out.println("ArrayDeque: " + animals);
    
            // 获取第一个元素
            String firstElement = animals.getFirst();
            System.out.println("First Element: " + firstElement);
    
            // 获取最后一个元素
            String last```
## 遍历ArrayDeque

  * `iterator()` - 返回一个可用于遍历数组双端队列的迭代器
  * `descendingIterator()` - 返回一个可用于以相反顺序遍历数组双端队列的迭代器

为了使用这些方法，我们必须导入`java.util.Iterator`包。例如，
    
    import java.util.ArrayDeque;
    import java.util.Iterator;
    
    class Main {
        public static void main(String[] args) {
            ArrayDeque<String> animals= new ArrayDeque<>();
            animals.add("Dog");
            animals.add("Cat");
            animals.add("Horse");

            System.out.print("ArrayDeque: ");

            // 使用iterator()
            Iterator<String> iterate = animals.iterator();
            while(iterate.hasNext()) {
                System.out.print(iterate.next());
                System.out.print(", ");
            }

            System.out.print("\nArrayDeque in reverse order: ");
            // 使用descendingIterator()
            Iterator<String> desIterate = animals.descendingIterator();
            while(desIterate.hasNext()) {
                System.out.print(desIterate.next());
                System.out.print(", ");
            }
        }
    }

**输出**
    
    ArrayDeque: [Dog, Cat, Horse]
    ArrayDeque in reverse order: [Horse, Cat, Dog]

### 其他方法

方法 | 描述  
---|---  
`element()` | 返回数组双端队列头部的元素。 
`contains(element)` | 在数组双端队列中查找指定元素。
如果找到该元素，则返回`true`，否则返回`false`。
`size()` | 返回数组双端队列的长度。
`toArray()` | 将数组双端队列转换为数组并返回。
`clone()` | 创建数组双端队列的副本并返回。

## ArrayDeque作为堆栈使用

在Java中实现一个**LIFO（后进先出）**堆栈时，推荐使用deque来代替[Stack类](/java-programming/stack "Java Stack Class")。`ArrayDeque`类比`Stack`类更快。

`ArrayDeque`提供了以下方法，可用于实现堆栈。

  * `push()` - 将元素添加到堆栈顶部
  * `peek()` - 返回堆栈顶部的元素
  * `pop()` - 返回并删除堆栈顶部的元素

例如，
    
    import java.util.ArrayDeque;
    
    class Main {
        public static void main(String[] args) {
            ArrayDeque<String> stack = new ArrayDeque<>();

            // 添加元素到堆栈
            stack.push("Dog");
            stack.push("Cat");
            stack.push("Horse");
            System.out.println("Stack: " + stack);

            // 访问堆栈顶部的元素
            String element = stack.peek();
            System.out.println("Accessed Element: " + element);

            // 从堆栈顶部删除元素
            String remElement = stack.pop();
            System.out.println("Removed element: " + remElement);
        }
    }

**输出**
    
    Stack: [Horse, Cat, Dog]
    Accessed Element: Horse
    Removed Element: Horse

## ArrayDeque与LinkedList类的区别

`ArrayDeque`和[Java LinkedList](/java-programming/linkedlist "Java LinkedList")都实现了`Deque`接口。然而，它们之间存在一些差异。

  * `LinkedList`支持`null`元素，而`ArrayDeque`不支持。
  * 链表中的每个节点都包括指向其他节点的链接。这就是为什么`LinkedList`需要比`ArrayDeque`更多的存储空间。
  * 如果您正在实现队列或双端队列数据结构，则`ArrayDeque`比`LinkedList`更快。

```