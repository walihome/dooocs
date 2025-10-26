---
title: HTTP客户端
description: 从HttpURLConnection到Java 11 HttpClient，掌握Java中HTTP客户端的使用与RESTful API调用技巧
order: 38
keywords: [HTTP客户端, HttpURLConnection, Java 11 HttpClient, RESTful API, Java网络编程]
---

# HTTP客户端

## 前置知识

> 在阅读本章前，你需要了解：Java基础语法，异常处理，基础I/O知识，以及基本的面向对象思想。

## 为什么需要 HTTP 客户端？

想象一下，你正在开发一个Java应用，需要去访问远程的Web服务，比如调用天气API获取当天天气，或者访问某个数据库的REST接口获取用户数据。在这种场景下，程序怎么与服务器建立连接，发送请求，接收响应，将网络数据转为Java对象，这些问题非常关键。

Java本身提供了多种方式完成HTTP通信。从最传统的`HttpURLConnection`到Java 11引入的全新`HttpClient`，再到结合RESTful设计思想的API调用方式，每种方案都有自己的优劣和适用场景。理解这些工具的用法和选型，是Java开发中不可或缺的一项技能。

## 具体章节

### 1. 使用 HttpURLConnection 发送简单 GET 请求

Java自带的`HttpURLConnection`是最经典的HTTP客户端实现。虽然代码相对冗长，但它是理解HTTP通信流程的基础。

让我们从一个简单的GET请求开始，访问一个公开的API获取内容。

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class SimpleHttpGet {

    public static void main(String[] args) {
        try {
            // 1. 创建URL对象，指向请求地址
            URL url = new URL("https://jsonplaceholder.typicode.com/posts/1");

            // 2. 打开连接，转换为HttpURLConnection
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // 3. 设置请求方法为GET
            connection.setRequestMethod("GET");

            // 4. 打开连接并获取响应码
            int responseCode = connection.getResponseCode();
            System.out.println("Response Code : " + responseCode);

            // 5. 读取响应数据
            try (BufferedReader in = new BufferedReader(
                    new InputStreamReader(connection.getInputStream()))) {
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }

                System.out.println("Response Body: " + response.toString());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**

1. 我们先创建了一个`URL`对象，指明要访问的HTTP地址。
2. 通过`openConnection()`方法获取到连接对象，并强转为`HttpURLConnection`。
3. 显式设置请求方法为`GET`，因为默认是`GET`，但这里写出来更直观。
4. 连接后通过`getResponseCode()`获取服务器返回的状态码。
5. 利用输入流读出服务器返回的内容，拼成字符串打印。

这就是HTTP通信的基本步骤：建立连接、设置请求、发请求、拿结果。

### 2. 使用 Java 11 HttpClient 做异步 POST 请求

从Java 11开始，官方推出了一个更加现代、强大的HTTP客户端工具，`java.net.http.HttpClient`。相比起`HttpURLConnection`，它支持异步操作，API设计更简洁友好。

接下来，我们试着用`HttpClient`发送一个POST请求，向一个REST接口提交JSON数据。

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.concurrent.CompletableFuture;

public class AsyncHttpPostExample {

    public static void main(String[] args) {
        try {
            // 1. 创建HttpClient实例
            HttpClient client = HttpClient.newHttpClient();

            // 2. 创建HttpRequest，设置URI和POST请求体（JSON）
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
                    .header("Content-Type", "application/json")
                    .POST(BodyPublishers.ofString("{\"title\":\"foo\",\"body\":\"bar\",\"userId\":1}"))
                    .build();

            // 3. 发送异步请求，获取CompletableFuture
            CompletableFuture<HttpResponse<String>> responseFuture =
                    client.sendAsync(request, BodyHandlers.ofString());

            // 4. 注册回调处理结果
            responseFuture.thenAccept(response -> {
                System.out.println("Status Code: " + response.statusCode());
                System.out.println("Response Body: " + response.body());
            }).join(); // 等待完成

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**

1. 我们创建了一个`HttpClient`实例，这通常是线程安全且可复用的。
2. 用`HttpRequest.newBuilder()`方法构建POST请求，设置请求地址、头信息和JSON请求体。
3. 使用`sendAsync()`发起异步请求，返回`CompletableFuture`，方便异步编程。
4. 注册回调函数，在请求完成后打印状态码和响应体。
5. 最后调用`join()`保持主线程等待异步完成。

相较于`HttpURLConnection`，这里代码更简洁，逻辑更清晰，也很适合应对高并发场景。

### 3. 实战：调用 RESTful API 并解析 JSON 响应

调用RESTful API时，除了发送请求和拿响应，最常见的是我们需要把返回的JSON映射成Java对象。Java生态中常用`Jackson`或`Gson`来做JSON序列化和反序列化。

这里我们用Java 11的`HttpClient`，配合`Jackson`库读取一个公开API响应并解析。

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

// POJO，和JSON响应结构对应
class Post {
    public int userId;
    public int id;
    public String title;
    public String body;

    @Override
    public String toString() {
        return "Post{" +
                "userId=" + userId +
                ", id=" + id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                '}';
    }
}

public class RestApiJsonParsing {

    public static void main(String[] args) {
        try {
            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
                    .GET()
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            String jsonBody = response.body();

            // 创建Jackson ObjectMapper实例
            ObjectMapper mapper = new ObjectMapper();

            // 把JSON字符串转换为Post对象
            Post post = mapper.readValue(jsonBody, Post.class);

            System.out.println("Parsed Java Object: " + post);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**

1. 通过`HttpClient`同步发送GET请求。
2. 拿到返回的JSON字符串。
3. 利用`Jackson`的`ObjectMapper`把JSON字符串反序列化为Java的`Post`对象。
4. 打印Java对象，方便我们在代码中操作。

这就是典型的Java访问REST API的流程：HTTP客户端请求 + JSON序列化。

---

:::tip 💡 实战建议

- **HttpClient实例复用**：`HttpClient`是线程安全的，建议项目中创建单例，避免频繁创建销毁资源。
- **超时和异常控制**：无论是`HttpURLConnection`还是`HttpClient`，都要配置合理的超时设置，避免请求卡死。
- **使用异步API提升吞吐**：特别是高并发场景，优先考虑Java 11的异步`sendAsync()`方法。
- **合理选择JSON库**：Jackson功能强大且性能好，常被作为反序列化工具。
- **安全性**：如果访问HTTPS接口，要额外关注证书和信任管理。

:::

:::warning ⚠️ 常见陷阱

- `HttpURLConnection`默认不会自动跟踪重定向，需要手动设置 `setInstanceFollowRedirects(true)` 。
- 读取响应流时，如果发生错误（如400/500），`getInputStream()`会抛异常，请使用`getErrorStream()`获取错误响应。
- 使用`HttpClient`时，忘记调用`join()`或`get()`等待异步结果，程序可能直接退出。
- JSON对象字段和Java类属性名称不匹配会导致解析失败，需确保字段命名一致或用注解调整。

:::

## 小结

- Java中HTTP客户端进化史：从`HttpURLConnection`到Java 11的`HttpClient`提升了开发效率和性能。
- `HttpURLConnection`虽然相对复杂，但帮助我们理解底层HTTP动作流程。
- `HttpClient`支持同步和异步调用，简洁且功能丰富，推荐新项目使用。
- 打通HTTP调用与JSON解析，是调用RESTful API的关键技能。
- 合理处理异常、超时及安全配置，保证程序健壮稳定。

---

希望这章内容能帮你把Java里的HTTP客户端掌握起来，写出又简洁又高效的网络交互代码。遇到真实需求时，我们就能更自然地挑选合适方案，避免常见坑，写出让自己满意的代码。下次我们就来看看如何构建更智能的REST客户端，支持缓存、重试和更复杂的请求配置。敬请期待！