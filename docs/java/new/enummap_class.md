# Java EnumMap

Java集合框架的`EnumMap`类为枚举元素提供了映射实现。

在`EnumMap`中，枚举元素被用作**键**。它实现了[Map接口](https://www.dooocs.com/img/java-programming/map "Java Map Interface")。

![Java EnumMap实现了Map接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-enummap.png)  

在学习`EnumMap`之前，请确保了解[Java Enums](https://www.dooocs.com/img/java-programming/enums "Java Enums")。

## 创建EnumMap

要创建一个EnumMap，我们必须首先导入`java.util.EnumMap`包。一旦我们导入了这个包，就可以按照以下方式在Java中创建EnumMap。
    
    
    enum Size {
        SMALL, MEDIUM, LARGE, EXTRALARGE
    }
    
    EnumMap<Size, Integer> sizes = new EnumMap<>(Size.class);
    

在上面的示例中，我们创建了一个名为sizes的EnumMap。

这里：

- Size - 枚举的**键**，与相应的值相关联
- Integer - 与枚举映射中的相应键关联的**值**

## EnumMap的方法

`EnumMap`类提供了许多方法，允许我们对枚举映射执行各种操作。

## 向EnumMap插入元素

- `put()` - 将指定的键/值映射（条目）插入到枚举映射中
- `putAll()` - 将指定映射的所有条目插入到此映射中

例如，
    
    
    import java.util.EnumMap;
    
    class Main {
    
        enum Size {
            SMALL, MEDIUM, LARGE, EXTRALARGE
        }
        public static void main(String[] args) {
    
            // 创建Size枚举的EnumMap
            EnumMap<Size, Integer> sizes1 = new EnumMap<>(Size.class);
    
            // 使用put()方法
            sizes1.put(Size.SMALL, 28);
            sizes1.put(Size.MEDIUM, 32);
            System.out.println("EnumMap1: " + sizes1);
    
            EnumMap<Size, Integer> sizes2 = new EnumMap<>(Size.class);
    
            // 使用putAll()方法
            sizes2.putAll(sizes1);
            sizes2.put(Size.LARGE, 36);
            System.out.println("EnumMap2: " + sizes2);
        }
    }
    

**输出**
    
    
    EnumMap1: {SMALL=28, MEDIUM=32}
    EnumMap2: {SMALL=28, MEDIUM=32, LARGE=36}
    

在上面的示例中，我们使用`putAll()`方法将enum map sizes1的所有元素插入到sizes2的enum map中。

还可以使用`putAll()`将来自其他映射（如HashMap、TreeMap等）的元素插入到enum map中。但是，所有映射都应该是相同枚举类型的。

## 访问EnumMap元素

### 1. 使用entrySet()、keySet()和values()

- `entrySet()` - 返回枚举映射的所有键/值映射（条目）的集合
- `keySet()` - 返回枚举映射的所有键的集合
- `values()` - 返回枚举映射的所有值的集合

例如，
    
    
    import java.util.EnumMap;
    
    class Main {
    
        enum Size {
            SMALL, MEDIUM, LARGE, EXTRALARGE
        }
        public static void main(String[] args) {
    
            // 创建Size枚举的EnumMap
            EnumMap<Size, Integer> sizes = new EnumMap<>(Size.class);
            sizes.put(Size.SMALL, 28);
            sizes.put(Size.MEDIUM, 32);
            sizes.put(Size.LARGE, 36);
            sizes.put(Size.EXTRALARGE, 40);
            System.out.println("EnumMap: " + sizes);
    
            // 使用entrySet()方法
            System.out.println("键/值映射: " + sizes.entrySet());
    
            // 使用keySet()方法
            System.out.println("键: " + sizes.keySet());
    
            // 使用values()方法
            System.out.println("值: " + sizes.values());
        }