# Java枚举的构造函数

在学习枚举构造函数之前，请确保了解[Java枚举](https://www.dooocs.com/img/java-programming/enums)。

在Java中，枚举类可以像普通类一样包含构造函数。这些枚举构造函数可以是：

  * **private** - 在类内部可访问
或者
  * **包私有** - 在包内可访问


## 示例：枚举构造函数
    
    
    enum Size {
    
       // 枚举常量调用枚举构造函数
       SMALL("尺寸小"),
       MEDIUM("尺寸中"),
       LARGE("尺寸大"),
       EXTRALARGE("尺寸超大");
    
       private final String pizzaSize;
    
       // 私有枚举构造函数
       private Size(String pizzaSize) {
          this.pizzaSize = pizzaSize;
       }
    
       public String getSize() {
          return pizzaSize;
       }
    }
    
    class Main {
       public static void main(String[] args) {
          Size size = Size.SMALL;
          System.out.println(size.getSize());
       }
    }
    
    

**输出**
    
    
    尺寸小
    

在上面的示例中，我们创建了一个枚举`Size`。它包含一个`private`枚举构造函数。该构造函数接受一个字符串参数，并将值赋给变量`pizzaSize`。

由于构造函数是`private`的，我们无法从类外访问它。但是，我们可以使用枚举常量来调用构造函数。

在`Main`类中，我们将`SMALL`赋给一个枚举变量`size`。然后，常量`SMALL`使用字符串作为参数调用了`Size`的构造函数。

最后，我们使用`size`调用了`getSize()`方法。