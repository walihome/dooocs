---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 日志记录

Java允许我们通过日志记录来创建和捕获日志消息和文件。

在Java中，日志记录需要使用框架和API。Java在`java.util.logging`包中提供了一个内置的日志记录框架。

我们还可以使用第三方框架，如Log4j、Logback等，用于日志记录目的。

* * *

## Java 日志记录组件

下图表示Java日志记录API（`java.util.logging`）的核心组件和控制流。

![Java日志记录API的控制流](https://cdn.programiz.com/sites/tutorial2program/files/java-logging.png)  
Java 日志记录

### 1\. Logger

`Logger`类提供了用于日志记录的方法。我们可以从`Logger`类实例化对象，并调用其方法进行日志记录。

让我们来看一个例子。
    
    
    Logger logger = Logger.getLogger("newLoggerName");
    

`Logger`类的`getLogger()`方法用于查找或创建新的`Logger`。字符串参数定义了日志记录器的名称。

这里，它创建一个新的`Logger`对象，或返回具有相同名称的现有`Logger`。

按照惯例，使用`class.getName()`在当前类之后定义一个`Logger`。
    
    
    Logger logger = Logger.getLogger(MyClass.class.getName());
    

> **注意:** 如果传递的名称为`null`，此方法会抛出`NullPointerException`。

每个`Logger`都有一个级别，确定日志消息的重要性。有7个基本的日志级别：

日志级别（按降序排列） | 用途  
---|---  
**SEVERE** | 严重错误  
**WARNING** | 警告消息，潜在问题  
**INFO** | 通用运行时信息  
**CONFIG** | 配置信息  
**FINE** | 一般的开发者信息（跟踪消息）  
**FINER** | 详细的开发者信息（跟踪消息）  
**FINEST** | 高度详细的开发者信息（跟踪消息）  
**OFF** | 关闭所有级别的日志记录（不记录任何内容）  
**ALL** | 开启所有级别的日志记录（记录所有内容）  
  
除了两个特殊的日志级别`OFF`和`ALL`，每个日志级别都有一个确定其严重性的整数值。

* * *

### 记录消息

默认情况下，前三个日志级别总是被记录。要设置不同的级别，我们可以使用以下代码：
    
    
    logger.setLevel(Level.LogLevel);
    
    // 示例
    logger.setLevel(Level.FINE);
    

在此示例中，仅设置了级别为`FINE`及以上的日志记录。所有其他日志消息都将被丢弃。

现在，要记录一个消息，我们使用`log()`方法。
    
    
    logger.log(Level.LogLevel, "log message");
    
    // 示例
    logger.log(Level.INFO, "这是INFO级别的日志消息");
    

还有一些缩写方法可用于记录所需级别的日志。
    
    
    logger.info("这是INFO级别的日志消息");
    logger.warning("这是WARNING级别的日志消息");
    

所有传递了设置的日志级别的日志请求都将被转发给**LogRecord**。

> **注意:** 如果日志记录器的级别设置为`null`，则其级别将从其父级继承，依此类推。

* * *

### 2\. 过滤器

如果存在过滤器，则过滤器确定是否应将**LogRecord**转发。顾名思义，它根据特定的条件筛选日志消息。

只有当**LogRecord**满足指定的条件时，它才会从记录器传递到日志处理程序，再从日志处理程序传递到外部系统。
    
    
    // 设置过滤器
    logger.setFilter(filter);
    
    // 获取过滤器
    Filter filter = logger.getFilter();
    

* * *

### 3\. 处理程序（App