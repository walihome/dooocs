---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java Singleton Class

在Java中，Singleton是一种设计模式，确保一个类只能有一个对象。

要创建一个singleton类，该类必须实现以下属性：

  * 创建一个`private`构造函数以限制在类外部创建对象。
  * 创建一个类型为类的`private`属性，它指向单个对象。
  * 创建一个`public static`方法，允许我们创建和访问所创建的对象。在该方法内部，我们将创建一个条件，以限制我们不能创建多个对象。



* * *

### 示例：Java Singleton Class语法
    
    
    class SingletonExample {
    
       // 指向该类对象的私有字段
       private static SingletonExample singleObject;
                                                  
       private SingletonExample() {
          // SingletonExample类的构造函数
       }
    
       public static SingletonExample getInstance() {
          // 编写代码，使我们只能创建一个对象
          // 根据需要访问对象
       }
    }
    

在上面的示例中，

  * `private static SingletonExample singleObject` - 类的对象引用。
  * `private SingletonExample()` - 一个私有构造函数，禁止在类外部创建对象。
  * `public static SingletonExample getInstance()` - 此方法返回类的唯一对象的引用。由于该方法是静态的，可以使用类名访问。



* * *

## 在Java中使用Singleton

当与数据库一起工作时，可以使用Singleton。可以用它们创建一个连接池，用于访问数据库，同时为所有客户端重复使用相同的连接。例如，
    
    
    class Database {
       private static Database dbObject;
    
       private Database() {      
       }
    
       public static Database getInstance() {
    
          // 如果尚未创建对象，则创建对象
          if(dbObject == null) {
             dbObject = new Database();
          }
    
           // 返回singleton对象
           return dbObject;
       }
    
       public void getConnection() {
           System.out.println("您现在已连接到数据库。");
       }
    }
    
    class Main {
       public static void main(String[] args) {
          Database db1;
    
          // 引用Database的唯一对象
          db1= Database.getInstance();
          
          db1.getConnection();
       }
    }
    

运行程序后，输出将为：
    
    
    您现在已连接到数据库。
    

在上述示例中，

  * 我们创建了一个singleton类Database。
  * `dbObject`是一个类类型字段，它将引用类Database的对象。
  * 私有构造函数`Database()`防止在类外部创建对象。
  * 静态类类型方法`getInstance()`将类的实例返回给外界。
  * 在Main类中，我们有一个类类型变量`db1`。我们使用`db1`调用`getInstance()`以获取Database的唯一对象。
  * 方法`getConnection()`只能使用Database的对象访问。
  * 由于Database只能有一个对象，所有客户端都可以通过单个连接访问数据库。



> Singleton是一种设计模式，而不是Java特定的功能。设计模式就像我们的代码库，其中包含全球程序员共享的各种编码技术。

* * *

值得注意的是，只有在少数情况下（如日志记录）才有意义使用单例模式。如果不确定是否使用它们，请完全避免使用单例模式。了解更多：[为什么不使用Singleton？](https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons "Why not to use singletons?")