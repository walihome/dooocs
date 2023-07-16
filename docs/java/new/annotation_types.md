# Java注解类型

Java注解是我们程序源代码的元数据（关于数据的数据）。Java SE提供了几个预定义的注解。此外，我们还可以根据需要创建自定义注解。

如果不知道什么是注解，请访问[Java注解](/java-programming/annotations "Java Annotations")教程。

这些注解可以分为以下几类：

1. **预定义注解**

   - `@Deprecated`
   - `@Override`
   - `@SuppressWarnings`
   - `@SafeVarargs`
   - `@FunctionalInterface`

2. **自定义注解**

3. **元注解**

   - `@Retention`
   - `@Documented`
   - `@Target`
   - `@Inherited`
   - `@Repeatable`

* * *

## 预定义注解类型

### 1. @Deprecated

`@Deprecated`注解是一个标记注解，表示该元素（类、方法、字段等）已被废弃，并已被新元素取代。

其语法为：

```java
@Deprecated
accessModifier returnType deprecatedMethodName() { ... }
```

当程序使用已声明为过期的元素时，编译器会生成警告。

我们使用Javadoc中的`@deprecated`标签来记录已过期元素。

```java
/**
 * @deprecated
 * why it was deprecated
 */
@Deprecated
accessModifier returnType deprecatedMethodName() { ... }
```

### 示例1：@Deprecated注解示例

```java
class Main {
  /**
   * @deprecated
   * This method is deprecated and has been replaced by newMethod()
   */
  @Deprecated
  public static void deprecatedMethod() { 
    System.out.println("Deprecated method"); 
  } 

  public static void main(String args[]) {
    deprecatedMethod();
  }
}
```

**输出**

```
Deprecated method
```

* * *

### 2. @Override

`@Override`注解指示子类的方法覆盖了与父类相同的方法名称、返回类型和参数列表的方法。

在重写方法时，使用`@Override`不是强制性的。然而，如果使用它，编译器会在重写方法时发现问题（如错误的参数类型）时生成错误。

### 示例2：@Override注解示例

```java
class Animal {

  // 被重写的方法
  public void display(){
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {

  // 重写的方法
  @Override
  public void display(){
    System.out.println("I am a dog");
  }

  public void printMessage(){
    display();
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printMessage();
  }
}
```

**输出**

```
I am a dog
```

在这个示例中，通过创建Dog类的对象dog1，我们可以调用其printMessage()方法，该方法执行`display()`语句。

由于`display()`在两个类中都定义了，所以子类Dog的方法重写了父类Animal的方法。因此，调用子类的`display()`方法。

* * *

### 3. @SuppressWarnings

如其名称所示，`@SuppressWarnings`注解指示编译器在程序执行时抑制生成的警告。

我们可以指定要抑制的警告类型。可以抑制的警告是特定于编译器的，但有两类警告：**过时**和**未检查**。

要抑制特定类别的警告，使用以下语法：

```java
@SuppressWarnings("warningCategory")
```

例如，

```java
@SuppressWarnings("deprecated")
```

要抑制多个警告类别，使用以下语法：

```java
@SuppressWarnings({"warningCategory1", "warningCategory2"})
```

例如，

```java
@SuppressWarnings({"deprecated", "unchecked"})
```

类别`deprecated`指示编译器在使用已过时元素时抑制警告。

类别`unchecked`指示编译器在使用原始类型时抑制警告。

未定义的警告将被忽略。例如，

```java
@SuppressWarnings("someundefinedwarning")
```

### 示例3：@SuppressWarnings注解示例

```java
class Main {
  @Deprecated```RetentionPolicy.SOURCE** \- 此注解仅在源级别可用，并且编译器会忽略它。
  * **RetentionPolicy.CLASS** \- 此注解在编译时可用于编译器，但Java虚拟机（JVM）会忽略它。
  * **RetentionPolicy.RUNTIME** \- 此注解对JVM可用。



例如，
    
    
    @Retention(RetentionPolicy.RUNTIME)
    public @interface MyCustomAnnotation{ ... }
    

* * *

### 2\. @Documented

默认情况下，自定义注解不包含在[官方Java文档](https://www.oracle.com/technetwork/articles/java/index-137868.html)中。要在Javadoc文档中包含我们的注解，我们使用`@Documented`注解。

例如，
    
    
    @Documented
    public @interface MyCustomAnnotation{ ... }
    

* * *

### 3\. @Target

我们可以使用`@Target`注解来限制注解应用的特定目标。

其语法是：
    
    
    @Target(ElementType)
    

`ElementType`可以是以下类型之一：

元素类型 | 目标  
---|---  
`ElementType.ANNOTATION_TYPE` | 注解类型  
`ElementType.CONSTRUCTOR ` | 构造函数  
`ElementType.FIELD ` | 字段  
`ElementType.LOCAL_VARIABLE ` | 局部变量  
`ElementType.METHOD ` | 方法  
`ElementType.PACKAGE ` | 包  
`ElementType.PARAMETER ` | 参数  
`ElementType.TYPE ` | 类的任何元素  
  
例如，
    
    
    @Target(ElementType.METHOD)
    public @interface MyCustomAnnotation{ ... }
    

在这个例子中，我们限制了此注解仅可用于方法。

> **注意：**如果未定义目标类型，则可以在任何元素中使用该注解。

* * *

### 4\. @Inherited

默认情况下，注解类型不能从超类继承。然而，如果我们需要将注解从超类继承到子类中，我们使用`@Inherited`注解。

其语法是：
    
    
    @Inherited
    

例如，
    
    
    @Inherited
    public @interface MyCustomAnnotation { ... }
    
    @MyCustomAnnotation
    public class ParentClass{ ... }
    
    public class ChildClass extends ParentClass { ... }
    

* * *

### 5\. @Repeatable

已标记为`@Repeatable`的注解可以多次应用于同一声明。
    
    
    @Repeatable(Universities.class)
    public @interface University {
      String name();
    }
    

`@Repeatable`注解中定义的值是容器注解。容器注解具有上述可重复注解的数组类型的变量值。在这里，`Universities`是包含注解类型。
    
    
    public @interface Universities {
      University[] value();
    }
    

现在，`@University`注解可以在同一声明上多次使用。
    
    
    @University(name = "TU")
    @University(name = "KU")
    private String uniName;
    

* * *

如果我们需要检索注解数据，可以使用[反射API](/java-programming/reflection "Java Reflection")。

要检索注解值，我们使用Reflection API中定义的`getAnnotationsByType()`或`getAnnotations()`方法。```