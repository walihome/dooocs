# Java EnumSet

Java集合框架中的`EnumSet`类提供了对单个枚举元素的集合实现。

在学习`EnumSet`之前，请确保了解[Java Enums](https://www.dooocs.com/img/java-programming/enums "Java枚举")。

它实现了[Set接口](https://www.dooocs.com/img/java-programming/set "Java集合接口")。

![Java EnumSet类实现了Java Set接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-enumset.png)  


* * *

## 创建EnumSet

要创建一个枚举集合，我们首先必须导入`java.util.EnumSet`包。

与其他集合实现不同，枚举集合没有公共构造函数。我们必须使用预定义的方法来创建枚举集合。

### 1. 使用allOf(Size)

`allOf()`方法创建一个包含指定枚举类型Size的所有值的枚举集合。例如，
    
    
    import java.util.EnumSet;
    
    class Main {
        // 一个名为Size的枚举
        enum Size {
            SMALL, MEDIUM, LARGE, EXTRALARGE
        }
        
        public static void main(String[] args) {
    
            // 使用allOf()创建一个EnumSet
            EnumSet<Size> sizes = EnumSet.allOf(Size.class);
    
            System.out.println("EnumSet: " + sizes);
        }
    
    }
    

**输出**
    
    
    EnumSet: [SMALL, MEDIUM, LARGE, EXTRALARGE]
    

注意语句，
    
    
    EnumSet<Size> sizes = EnumSet.allOf(Size.class);
    

这里，Size.class表示我们创建的Size枚举。

* * *

### 2. 使用noneOf(Size)

`noneOf()`方法创建一个空的枚举集合。例如，
    
    
    import java.util.EnumSet;
    
    class Main {
    
         // 一个名为Size的枚举
        enum Size {
            SMALL, MEDIUM, LARGE, EXTRALARGE
        }
    
        public static void main(String[] args) {
    
            // 使用noneOf()创建一个EnumSet
            EnumSet<Size> sizes = EnumSet.noneOf(Size.class);
    
            System.out.println("Empty EnumSet: " + sizes);
        }
    }
    

**输出**
    
    
    Empty EnumSet : []
    

在这里，我们创建了一个名为sizes的空枚举。

> **注意**：我们只能在上面的程序中插入enum类型Size的元素。这是因为我们使用Size枚举创建了空的枚举集合。

* * *

### 3. 使用range(e1, e2)方法

`range()`方法创建一个包含e1和e2之间（包括两个值）所有枚举值的枚举集合。例如，
    
    
    import java.util.EnumSet;
    
    class Main {
    
        enum Size {
            SMALL, MEDIUM, LARGE, EXTRALARGE
        }
    
        public static void main(String[] args) {
    
            // 使用range()创建一个EnumSet
            EnumSet<Size> sizes = EnumSet.range(Size.MEDIUM, Size.EXTRALARGE);
    
            System.out.println("EnumSet: " + sizes);
        }
    }
    

**输出**
    
    
    EnumSet: [MEDIUM, LARGE, EXTRALARGE]
    

* * *

### 4. 使用of()方法

`of()`方法创建一个包含指定元素的枚举集合。例如，
    
    
    import java.util.EnumSet;
    
    class Main {
    
        enum Size {
            SMALL, MEDIUM, LARGE, EXTRALARGE
        }
    
        public static void main(String[] args) {
    
            // 使用单个参数的of()
            EnumSet<Size> sizes1 = EnumSet.of(Size.MEDIUM);
            System.out.println("EnumSet1: " + sizes1);
    
            EnumSet<Size> sizes2 = EnumSet.of(Size.SMALL, Size.LARGE);
            System.out.println("EnumSet2: " + sizes2);
        }
    }
    

**输出**
    
    
    EnumSet1: [MEDIUM]
    EnumSet2: [SMALL, LARGE]
    

* * *

## EnumSet的方法

`EnumSet`类提供了一些方法，允许我们对枚举集合执行各种操作。

* * *

## 向EnumSet插入元素

  * `add()` - 向枚