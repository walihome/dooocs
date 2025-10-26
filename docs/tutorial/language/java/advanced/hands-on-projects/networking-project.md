---
title: 网络编程项目
description: 从零开始开发简单的聊天室、文件传输工具和HTTP服务器，掌握Java网络编程实战技巧。
order: 93
keywords: [Java, 网络编程, 聊天室, 文件传输, HTTP服务器]
---

# 网络编程项目

## 前置知识
> 在阅读本章前，你需要了解：Java基础语法、面向对象编程、异常处理和基本的输入输出（I/O）操作。

## 为什么需要网络编程项目？

想象一下，你正在开发一个多人在线聊天应用，用户可以互相发送消息，还能传输文件，甚至访问一个简单的网页服务器，不依赖于复杂的框架，只用Java的基础库来实现这些功能。网络编程正是实现这些功能的基石。

现实项目中，网络通信往往涉及诸多细节和挑战。光知道`Socket`是远远不够的，我们需要一步步理解后台发生了什么，才能写出稳定可靠的代码。本章会带你从最简单的聊天室开始，逐步深入，实现一个包含文件传输和HTTP服务的小型项目。这样的练习不仅锻炼编码能力，还帮你建立网络数据交互的直观认知。

## TCP聊天室：第一步的网络连接

先从基础做起——怎么让两台机器（或同一台机器上的两个程序）建立通信？Java里最直接的方式就是使用`Socket`和`ServerSocket`。

我们先实现一个非常简单的聊天室服务端和客户端，客户端可以发送消息，服务端接收并打印。

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

// 聊天室服务端示例
public class SimpleChatServer {
    public static void main(String[] args) throws Exception {
        // 监听端口12345，等待客户端连接
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            System.out.println("服务器启动，等待客户端连接...");
            try (Socket clientSocket = serverSocket.accept()) {
                System.out.println("客户端连接成功：" + clientSocket.getRemoteSocketAddress());

                // 读取客户端发送的信息
                BufferedReader reader = new BufferedReader(
                        new InputStreamReader(clientSocket.getInputStream()));

                // 用于回发消息给客户端（可选）
                PrintWriter writer = new PrintWriter(clientSocket.getOutputStream(), true);

                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println("收到消息: " + line);
                    writer.println("服务器确认收到: " + line); // 服务器回一个确认信息
                }
            }
            System.out.println("客户端断开连接，服务器关闭。");
        }
    }
}
```

这段代码做了什么呢：

1. 启动了一个`ServerSocket`，绑定端口12345，等待客户端连接。
2. 当一个客户端连接到服务器时，获取它的`Socket`。
3. 从客户端Socket的输入流中读取文本信息，一行一行地输出。
4. 同时向客户端回写确认消息。
5. 当客户端断开时，关闭连接和服务器。

**这里的运作流程就像电话接通后听对方说话，我们不停地听对方说什么，同时也可以随时回复一句。** 这就是TCP的基本通信模式。

___

我们再写一个简单的客户端，让你试试连接这个服务器。

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

// 简单聊天室客户端
public class SimpleChatClient {
    public static void main(String[] args) throws Exception {
        try (Socket socket = new Socket("localhost", 12345)) {
            System.out.println("成功连接服务器");

            // 发送到服务器
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);

            // 从服务器读取回复
            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            // 读取用户输入从命令行
            BufferedReader console = new BufferedReader(
                    new InputStreamReader(System.in));

            String input;
            System.out.println("输入消息，按回车发送（输入exit退出）：");
            while ((input = console.readLine()) != null) {
                if ("exit".equalsIgnoreCase(input)) {
                    break;
                }
                writer.println(input);  // 发送给服务端
                String response = reader.readLine();  // 读取服务端回复
                System.out.println("服务器回复: " + response);
            }
            System.out.println("客户端关闭");
        }
    }
}
```

**这段客户端程序做了什么？**

1. 连接到服务器的12345端口。
2. 从命令行读取用户输入。
3. 把输入发送给服务器。
4. 等待服务器回一个确认消息并打印。
5. 用户输入`exit`时退出程序。

---

### 这部分代码分析：

- `ServerSocket`和`Socket`组合是客户端-服务器通信的核心。
- 输入输出均用`BufferedReader`和`PrintWriter`做文本传输。
- `try-with-resources`自动关闭资源，防止泄露。
- 目前程序仅支持一个客户端连接，且没有线程处理多客户端。

---

:::tip 💡 实战建议
- 一开始，保证简单易懂是关键，慢慢让自己习惯Socket通信的流程。
- 生产环境中，服务端应支持多客户端连接，这通常用多线程或线程池实现。
- 发送和读取消息时需要考虑编码问题，默认使用UTF-8更安全。
:::

---

## 文件传输：让聊天不只是文字

基础通讯打通后，想让聊天更丰富，文件传输是常见需求。

我们设计一个简易文件发送程序，客户端选中文件，发送给服务端保存。这里我用TCP流传输，文件内容按字节读写。

```java
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

// 服务端：接收文件
public class FileReceiverServer {
    public static void main(String[] args) throws Exception {
        try (ServerSocket serverSocket = new ServerSocket(8888)) {
            System.out.println("文件接收服务器启动，等待连接...");
            try (Socket socket = serverSocket.accept()) {
                System.out.println("客户端已连接：" + socket.getRemoteSocketAddress());

                // 接收文件字节流
                InputStream in = socket.getInputStream();
                FileOutputStream fileOut = new FileOutputStream("received_file");

                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = in.read(buffer)) != -1) {
                    fileOut.write(buffer, 0, bytesRead);
                }
                fileOut.close();
                System.out.println("文件接收完成");
            }
        }
    }
}
```

这段代码做了：

1. 监听8888端口等待连接。
2. 建立连接后，读取客户端发送过来的字节数据。
3. 将数据写到本地文件`received_file`。
4. 当客户端结束发送，关闭文件流和连接。

---

客户端代码也很简单：

```java
import java.io.FileInputStream;
import java.io.OutputStream;
import java.net.Socket;

// 客户端：发送文件
public class FileSenderClient {
    public static void main(String[] args) throws Exception {
        try (Socket socket = new Socket("localhost", 8888);
             FileInputStream fileIn = new FileInputStream("send_this_file")) {
            System.out.println("连接服务器，开始发送文件");

            OutputStream out = socket.getOutputStream();

            byte[] buffer = new byte[4096];
            int bytesRead;

            while ((bytesRead = fileIn.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
            out.flush();
            System.out.println("文件发送完成");
        }
    }
}
```

这段代码：

1. 连接服务器端。
2. 读取本地文件`send_this_file`。
3. 把字节写入套接字输出流，给服务器发文件数据。

---

**这些代码的精妙之处在于，字节流让你不局限于文字，可以传输任何文件。** 但是请注意：

- 代码简单，不包含文件名或大小信息，你的服务器只能保存成固定名称。
- 缺少传输完整性校验（CRC、MD5等）。
- 没有断点续传、传输进度反馈。

这些都是进一步实战开发会考虑的小细节。

---

## 简单HTTP服务器：认识HTTP协议

网络编程里，HTTP协议几乎无处不在。了解HTTP协议处理，能大幅提升你对现代网络服务的理解。

我们来写一个特别简单的HTTP服务器，只能响应GET请求，返回固定的网页内容。

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

// 简单HTTP服务器
public class SimpleHttpServer {
    public static void main(String[] args) throws Exception {
        try (ServerSocket serverSocket = new ServerSocket(8080)) {
            System.out.println("HTTP服务器启动，监听端口8080...");
            while (true) {
                try (Socket clientSocket = serverSocket.accept()) {
                    BufferedReader in = new BufferedReader(
                            new InputStreamReader(clientSocket.getInputStream()));

                    OutputStream out = clientSocket.getOutputStream();

                    // 读取请求行（如：GET / HTTP/1.1）
                    String requestLine = in.readLine();
                    System.out.println("收到请求: " + requestLine);

                    // 简单响应，只响应GET请求
                    if (requestLine != null && requestLine.startsWith("GET")) {
                        String httpResponse =
                                "HTTP/1.1 200 OK\r\n" +
                                "Content-Type: text/html; charset=UTF-8\r\n" +
                                "\r\n" +
                                "<html><body><h1>你好，这是简单HTTP服务器！</h1></body></html>";

                        out.write(httpResponse.getBytes("UTF-8"));
                    } else {
                        String httpResponse =
                                "HTTP/1.1 405 Method Not Allowed\r\n" +
                                "\r\n";
                        out.write(httpResponse.getBytes("UTF-8"));
                    }
                    out.flush();
                }
            }
        }
    }
}
```

---

这段程序的执行流程：

1. 监听8080端口，等待浏览器或HTTP客户端请求。
2. 收到连接后，读取请求的第一行，通常是“GET / HTTP/1.1”。
3. 如果是GET请求，回应状态码200和一个简单的网页。
4. 否则返回405错误。
5. 关闭连接，等待下一个请求。

---

可以直接在浏览器输入`http://localhost:8080`看到返回的网页。

---

:::warning ⚠️ 常见陷阱
- 不要忽略HTTP请求中的多行Header，本示例只读了第一行，真实服务器要读完请求头才能正确处理请求体。
- 永远记得发送空行（`\r\n\r\n`）后再发送响应体，否则浏览器会一直等待。
- 端口号不要被其他应用占用，否则程序启动失败。
- 服务器要考虑多并发连接，本例单线程阻塞只能处理一个请求，无法应对高并发。
:::

---

## 小结

- **TCP聊天室**是网络编程的入门，理解Socket连接、输入输出数据流程是关键。
- **文件传输**展示流式处理，让聊天功能延伸到任意文件交互。
- **简单HTTP服务器**帮你理解网络协议，搭建网页服务的基础。
- 实际开发中，性能和多线程处理、协议完整实现是进阶方向。

---

## 延伸思考

- 如何让聊天服务器支持多个客户端同时在线？
- 如何在文件传输中增加传输进度显示或断点续传？
- 如何设计一个完整的HTTP服务器，支持动态内容和路由？

---

如果你按照示例动手实现，结合实际应用需求做改造，网络编程这条路会越走越宽。下一章，我们将继续探索面向生产环境优化的网络技术。努力了，网络世界等你来玩转！