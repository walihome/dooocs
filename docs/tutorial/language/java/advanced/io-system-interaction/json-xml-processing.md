---
title: JSON与XML处理
description: 通过实操学习Java中常用的JSON与XML处理库，包括Gson、Jackson以及DOM、SAX、StAX解析技术，帮助你高效安全地处理两种主流数据交换格式。
order: 39
keywords: [Java, JSON, XML, Gson, Jackson, DOM, SAX, StAX]
---

# JSON与XML处理

## 前置知识

> 在阅读本章前，你需要了解Java基本语法、面向对象基础及文件读写操作。

## 为什么需要JSON与XML处理？

想象一下，你正在开发一个电商平台，后台系统需要和前端页面、第三方服务交换大量数据。如何把Java对象转成通用格式，方便别的系统理解？而当你接收到外部服务发来的配置信息时，怎么去解析它？这都是数据交换格式的核心问题。

目前，JSON和XML是最常用的两种数据格式。掌握它们的处理方式，是后端开发中不可绕开的必修课。不论是微服务通讯，还是持久化存储，解析和生成JSON、XML都极为频繁。

但是，这背后有很多坑：格式转换是否安全、高效？如何选择合适的解析器？代码如何保持简单又健壮？别担心，我们接下来一步步拆解，用真实代码帮你理清思路。

---

## JSON处理：Gson与Jackson

### 什么是JSON？

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，长得像JavaScript里的对象，但其实它和语言无关，非常容易读写。

### 为什么要用Gson或Jackson？

手写JSON字符串复杂且容易出错，特别是结构复杂时。Gson和Jackson是Java领域最流行的两个JSON库，它们帮我们实现Java对象与JSON相互转换，省心又高效。Jackson性能好，功能全；Gson轻量且易用。

### Gson基础示例

先来个Gson最简单的用法，看看怎么把Java对象变成JSON字符串：

```java
import com.google.gson.Gson;

public class GsonBasicExample {
    public static void main(String[] args) {
        Gson gson = new Gson();

        User user = new User("Alice", 30);

        // 把Java对象转为JSON字符串
        String json = gson.toJson(user);
        System.out.println(json);

        // 把JSON字符串转为Java对象
        User parsedUser = gson.fromJson(json, User.class);
        System.out.println("Name: " + parsedUser.name + ", Age: " + parsedUser.age);
    }

    static class User {
        String name;
        int age;

        User(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }
}
```

这段代码做了什么：

1. 定义了一个简单的`User`类，包含姓名和年龄字段。
2. 通过Gson把对象转换成JSON字符串，再把字符串解析回对象。
3. 打印结果让你看到转换前后的内容一样。

如果你执行程序，会看到：

```
{"name":"Alice","age":30}
Name: Alice, Age: 30
```

### Jackson进阶使用

Jackson更强大且高效，尤其适合需要处理复杂数据或批量转换的场景。我们来写个示例，把对象转为JSON，并格式化输出：

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class JacksonExample {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        // 开启漂亮的JSON输出
        mapper.enable(SerializationFeature.INDENT_OUTPUT);

        Product product = new Product("Notebook", 799.99);

        String json = mapper.writeValueAsString(product);
        System.out.println(json);

        Product parsedProduct = mapper.readValue(json, Product.class);
        System.out.println("Product Name: " + parsedProduct.productName + ", Price: " + parsedProduct.price);
    }

    static class Product {
        public String productName;
        public double price;

        public Product() { } // 必须要有无参构造器！

        public Product(String productName, double price) {
            this.productName = productName;
            this.price = price;
        }
    }
}
```

这段代码做了什么：

1. 使用Jackson的`ObjectMapper`完成JSON的序列化与反序列化。
2. 开启了`INDENT_OUTPUT`功能，让输出更好看。
3. 注意类需要无参构造器，Jackson反序列化需要用到。

执行结果：

```
{
  "productName" : "Notebook",
  "price" : 799.99
}
Product Name: Notebook, Price: 799.99
```

---

## XML处理：DOM、SAX与StAX解析

### 为什么还要学习XML？

虽然JSON越来越流行，但在很多企业级、遗留系统和配置文件中，XML依然占据重要位置。了解XML处理技术，能让你应对多样的项目需求。

### DOM解析——全部加载到内存

DOM解析是一种把整个XML文件读进内存，形成一棵树的方式。优点是方便操作节点，缺点是对于大文件内存消耗大。

下面用DOM解析一个简单的XML文件，找出所有的书名：

```java
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.*;
import java.io.ByteArrayInputStream;

public class DomParsingExample {
    public static void main(String[] args) throws Exception {
        String xml = """
            <library>
                <book><title>Effective Java</title></book>
                <book><title>Clean Code</title></book>
            </library>
            """;

        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();

        // 把字符串转成输入流，再解析为文档对象
        Document doc = builder.parse(new ByteArrayInputStream(xml.getBytes()));

        NodeList bookNodes = doc.getElementsByTagName("book");

        for (int i = 0; i < bookNodes.getLength(); i++) {
            Element bookElement = (Element) bookNodes.item(i);
            String title = bookElement.getElementsByTagName("title").item(0).getTextContent();
            System.out.println("Book title: " + title);
        }
    }
}
```

这段代码做了什么：

1. 创建一个DOM解析器，加载XML字符串转成文档树对象。
2. 查找所有`book`节点，遍历并读取其中`title`的文本。
3. 打印出书名。

输出为：

```
Book title: Effective Java
Book title: Clean Code
```

### SAX解析——基于事件流

对于大XML文件，DOM会很耗内存。SAX是一种基于事件的解析方式，会一边读一边触发事件，允许你按需处理，大幅减少内存占用。

下面示范用SAX解析相同的XML，过滤所有书名：

```java
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.*;
import org.xml.sax.helpers.DefaultHandler;

public class SaxParsingExample {
    public static void main(String[] args) throws Exception {
        String xml = """
            <library>
                <book><title>Effective Java</title></book>
                <book><title>Clean Code</title></book>
            </library>
            """;

        SAXParserFactory factory = SAXParserFactory.newInstance();
        SAXParser saxParser = factory.newSAXParser();

        DefaultHandler handler = new DefaultHandler() {
            boolean isTitle = false;

            @Override
            public void startElement(String uri, String localName, String qName, Attributes attributes) {
                if ("title".equals(qName)) {
                    isTitle = true; // 标记接下来文本是title内容
                }
            }

            @Override
            public void characters(char[] ch, int start, int length) {
                if (isTitle) {
                    String title = new String(ch, start, length);
                    System.out.println("Book title: " + title);
                }
            }

            @Override
            public void endElement(String uri, String localName, String qName) {
                if ("title".equals(qName)) {
                    isTitle = false;
                }
            }
        };

        saxParser.parse(new InputSource(new java.io.StringReader(xml)), handler);
    }
}
```

这段代码做了什么：

1. 通过事件处理器捕获XML开始、文本、结束事件。
2. 遇到`title`标签时标记，读取标签内的字符文本并打印。
3. 事件驱动方式，节省内存。

执行效果和DOM类似，但更适合大文件。

### StAX解析——拉取式流解析

StAX结合了DOM和SAX优点，既能按需拉取数据又不用全部加载内存，更灵活。

示例中，我们用StAX读取所有`title`：

```java
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamReader;
import java.io.StringReader;

public class StaxParsingExample {
    public static void main(String[] args) throws Exception {
        String xml = """
            <library>
                <book><title>Effective Java</title></book>
                <book><title>Clean Code</title></book>
            </library>
            """;

        XMLInputFactory factory = XMLInputFactory.newInstance();
        XMLStreamReader reader = factory.createXMLStreamReader(new StringReader(xml));

        while(reader.hasNext()) {
            int event = reader.next();
            if (event == XMLStreamConstants.START_ELEMENT && "title".equals(reader.getLocalName())) {
                reader.next(); // 移动到文本节点
                String title = reader.getText();
                System.out.println("Book title: " + title);
            }
        }
        reader.close();
    }
}
```

这里，我们主动拉取事件，遇到`title`标签，就读取文本。这种方式灵活，也方便中途停止或跳过不关心的部分。

---

## 对比总结

| 技术       | 优点                      | 缺点                      | 适用场景                 |
|------------|---------------------------|---------------------------|--------------------------|
| Gson       | 轻量便捷，易上手          | 功能较Jackson简单          | 简单项目、快速开发       |
| Jackson    | 功能强大，性能优秀        | 配置较多，需要学习成本      | 复杂项目、性能敏感场景   |
| DOM        | 操作方便，树形结构易理解  | 占用内存大，不适合大文件    | 小文件完整操作           |
| SAX        | 内存占用少，速度快        | 编程复杂，事件驱动不直观    | 大文件顺序扫描           |
| StAX       | 兼顾灵活性和性能          | 需要手动管理解析流程        | 复杂场景流式处理         |

---

:::tip 💡 实战建议

- 优先用Jackson作为JSON处理首选，遇到简单任务Gson也是不错的帮手。
- 遇到XML，千万不要盲目用DOM解析大文件，容易OOM。若只读不写且文件大，选SAX或StAX。
- 避免对JSON/XML手写拼串操作，推荐用库提供的API，防止格式错误和安全漏洞。
- 一定要熟悉目标格式的schema或结构，解析时才能准确提取所需数据。
:::

:::warning ⚠️ 常见陷阱

- **无参构造器**：Jackson反序列化时Java类必须有无参构造器，否则会失败。
- **编码问题**：用流读写JSON/XML时，要确认字符编码一致，避免乱码。
- **性能误区**：DOM优点是直接操作树，但大文件会导致性能和内存瓶颈。
- **事件状态维护**：SAX的事件驱动方式容易忘记标记标签状态，导致读取数据失败。
:::

---

## 延伸思考

- 对于异构系统，JSON和XML经常混用。你如何设计系统，确保转换的兼容性和数据完整性？
- 如果需要在内存非常有限的嵌入式环境中解析巨大的JSON或XML文件，你会考虑哪些策略？
- 在并发环境下处理JSON数据，如何保证线程安全和性能？

---

## 小结

- JSON是轻量、现代的数据交换格式，Gson和Jackson是主流处理工具。
- XML用于复杂结构和遗留系统，DOM、SAX、StAX各有优缺点，适用不同场景。
- 理解各个处理库的原理和局限，能帮你写出高效、稳定的代码应对日常开发挑战。

---
```

这份教程通过真实场景引入，结合Gson/Jackson和DOM/SAX/StAX具体例子，循序渐进地带你掌握Java中JSON与XML处理的核心技能。并以拟人化语气和生动语言让学习过程更亲切。你可以在自己的IDE中一步步尝试示例，体会代码运行的内存和执行流程变化。需要时切换解析器，别忘了关注内存和性能的权衡。祝你玩转JSON和XML处理！有什么疑问随时问我。