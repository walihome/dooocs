---
title: 网络编程基础
description: 介绍 Java 中 TCP/UDP 协议基础，Socket 和 ServerSocket 的用法，以及 URL/URLConnection 的简单运用。
order: 37
keywords: [Java, 网络编程, TCP, UDP, Socket, ServerSocket, URL, URLConnection]
---

# 网络编程基础

## 前置知识
> 在阅读本章前，你需要了解Java基本语法、面向对象编程，以及异常处理。

## 为什么需要网络编程？

想象一下，你正在开发一个聊天软件或在线游戏，或者想实现一个服务能让远程用户访问，那你肯定需要了解网络编程。网络编程让你的程序可以和其他计算机“说话”，实现数据的发送和接收。但说起来简单，细节其实不少。比如，怎么保证消息送达？什么时候用 TCP，什么时候用 UDP？Java 又提供了哪些类帮我们快速实现这些功能？

本章会带你一步步拆解这些抽象的网络概念，从最基础的 TCP、UDP 协议说起，到 Java 中 `Socket`、`ServerSocket`，再到用 URL 做简单的网页请求。别担心，我会用最简单明了的语言和例子陪你一起“爬网络这座山”。

---

## 1. TCP 和 UDP：网络通信的“邮递员”和“快递员”

### 什么是TCP和UDP？

简单来说，TCP（传输控制协议）就像是邮递员，保证你的信件准确无误地送到收件箱，收件人会告诉邮递员“收到了”。UDP（用户数据报协议）更像快递员的闪电配送，虽然快但不保证送达。

### 为什么要分TCP和UDP？

- **TCP**：保证连接的稳定和数据完整，适合文件传输、网页浏览、邮件收发等需要“严谨投递”的场景。
- **UDP**：轻量快速，不保证顺序和投递，适合在线游戏、实时视频、语音通话，这种对速度要求高但可以容忍丢包的场合。

### TCP和UDP工作原理简述

我们把它想象成寄信：TCP 建立“连接”，像打电话确认彼此在听；UDP 则是直接写好信，投入邮箱，没人确认信是否送达。

---

## 2. Java 中的 Socket 编程

Java 的 `Socket` 类让我们轻松创建 TCP 连接，`DatagramSocket` 则对应 UDP。

### 2.1 TCP 客户端示例：连接服务器并发送消息

我们先用 TCP 做一个简单的客户端，连接本地的服务器端口，然后发一条消息。

```java
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;

public class TcpClientSimple {
    public static void main(String[] args) {
        String serverHost = "localhost"; // 服务器地址，通常是 IP 或域名
        int serverPort = 12345;           // 服务器监听端口

        try (Socket socket = new Socket(serverHost, serverPort);
             PrintWriter writer = new PrintWriter(socket.getOutputStream(), true)) {

            writer.println("你好，服务器！"); // 发送一条文本消息
            System.out.println("消息发送成功");

        } catch (Exception e) {
            System.err.println("连接失败：" + e.getMessage());
        }
    }
}
```

**这段代码做了什么**：  
1. 通过 `new Socket(serverHost, serverPort)` 与服务器建立 TCP 连接。  
2. 使用 `PrintWriter` 把字符串消息写入到服务器的输出流。  
3. 资源通过 try-with-resources 自动关闭，避免资源泄漏。

---

### 2.2 TCP 服务器示例：监听端口并接收客户端消息

服务器需要一个 `ServerSocket` 来监听端口，接受客户端请求，并读消息。

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class TcpServerSimple {
    public static void main(String[] args) {
        int listenPort = 12345; // 监听的端口号

        try (ServerSocket serverSocket = new ServerSocket(listenPort)) {
            System.out.println("服务器启动，等待客户端连接...");

            try (Socket clientSocket = serverSocket.accept();
                 BufferedReader reader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()))) {

                System.out.println("客户端已连接：" + clientSocket.getRemoteSocketAddress());

                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println("收到客户端消息：" + line);
                }

                System.out.println("客户端关闭连接");

            }

        } catch (Exception e) {
            System.err.println("服务器异常：" + e.getMessage());
        }
    }
}
```

**这段代码做了什么**：  
1. 创建 `ServerSocket` 并在指定端口 `12345` 上监听。  
2. 调用 `accept()` 阻塞等待客户端连接，连接成功返回一个 `Socket`。  
3. 读取客户端通过输入流发来的消息，逐行打印。  
4. 当客户端断开连接时，停止读取。

---

### 2.3 UDP示例：发送和接收数据报

UDP 相比 TCP 结构更简单，但代码看起来会稍微复杂一些，因为需要自己管理数据报。

```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class UdpClientServerExample {

    // UDP 服务器：接收消息
    public static class UdpServer {
        public static void main(String[] args) throws Exception {
            DatagramSocket socket = new DatagramSocket(9876);
            byte[] buffer = new byte[1024];
            System.out.println("UDP服务器已启动...");

            DatagramPacket packet = new DatagramPacket(buffer, buffer.length);

            while (true) {
                socket.receive(packet); // 接收数据包（阻塞）
                String received = new String(packet.getData(), 0, packet.getLength());
                System.out.println("接收到消息：" + received);

                // 简单回应客户端
                String response = "服务器收到了: " + received;
                byte[] responseData = response.getBytes();
                DatagramPacket responsePacket = new DatagramPacket(
                        responseData, responseData.length,
                        packet.getAddress(), packet.getPort());
                socket.send(responsePacket);
            }
        }
    }

    // UDP 客户端：发送消息
    public static class UdpClient {
        public static void main(String[] args) throws Exception {
            DatagramSocket socket = new DatagramSocket();
            InetAddress serverAddress = InetAddress.getByName("localhost");
            String message = "你好，UDP服务器";

            byte[] sendData = message.getBytes();
            DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, serverAddress, 9876);
            socket.send(sendPacket);
            System.out.println("消息已发送");

            // 接收服务器响应
            byte[] receiveBuffer = new byte[1024];
            DatagramPacket receivePacket = new DatagramPacket(receiveBuffer, receiveBuffer.length);
            socket.receive(receivePacket);

            String response = new String(receivePacket.getData(), 0, receivePacket.getLength());
            System.out.println("收到回复：" + response);

            socket.close();
        }
    }
}
```

**这段代码做了什么**：

- `UdpServer` 使用一个无限循环阻塞等待接收客户端通过 UDP 发送的数据包，收到后打印并回复。
- `UdpClient` 发送一个 UDP 数据包到服务器，并等待服务器响应。

---

## 3. URL 和 URLConnection：网络上的“浏览器视角”

除了底层 TCP/UDP，Java 也提供了更“高级”的 API 让我们能像浏览器那样访问网页和资源。

以下是一个简单的例子，访问百度，读取页面内容：

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class UrlConnectionExample {
    public static void main(String[] args) {
        String urlString = "https://www.baidu.com";

        try {
            URL url = new URL(urlString);
            URLConnection connection = url.openConnection();

            // 设置一个请求头，模拟浏览器访问，防止部分网站拒绝访问
            connection.setRequestProperty("User-Agent", "Mozilla/5.0");

            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(connection.getInputStream(), "UTF-8"))) {

                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
            }

        } catch (Exception e) {
            System.err.println("访问失败：" + e.getMessage());
        }
    }
}
```

**这段代码做了什么**：

1. 通过 `URL` 创建一个资源的定位符。  
2. 调用 `openConnection()` 得到一个连接对象。  
3. 通过连接的输入流读取网页内容。  
4. 设置请求头避免被目标网站拒绝。

---

:::warning ⚠️ 常见陷阱

- **TCP服务端没启动时客户端会报连接拒绝异常**，记得启动服务端先于客户端！  
- TCP 连接是面向连接的，关闭连接资源时一定用 try-with-resources 或在 finally 中关闭，避免端口占用。  
- UDP 是无连接的，不保证消息到达顺序或完整，要在应用层设计重传和顺序控制（如果需要）。  
- 使用 `URLConnection` 访问 HTTPS 时，证书问题可能导致连接失败，自己写爬虫时要注意SSL配置。  
- 字符编码要统一，在读写流时尤其要指定，避免乱码。
:::
---

:::tip 💡 实战建议

- 大多数企业项目都使用 TCP 来做稳定的通信，UDP 用于对实时性要求很高但可容忍丢包的场景。别轻易写自己的协议，能用现成框架就用。  
- 生产环境避免硬编码端口和IP，用配置文件管理，方便维护。  
- 服务器端通常会用多线程或线程池配合 `ServerSocket`，实现并发客户处理。单线程服务端只能服一家客户哦。  
- 读写数据流时，数据格式和协议需求明确后，考虑使用序列化库（如 protobuf），提高传输效率和兼容性。  
- 使用 `URLConnection` 做爬虫时，注意时常更换 User-Agent 和添加超时设置，防止被封禁。
:::
---

## 🔍 深入理解

- **为什么 TCP 的三次握手能防止“半开连接”？**  
- UDP 怎样通过加校验和保证数据完整性？  
- Java NIO 和传统 `Socket` API 的差异和优势？  
- HTTPS 与 HTTP 的区别，`HttpsURLConnection` 如何工作？

探索这些问题会让你对网络编程的底层机制更有掌握。

---

## 实战应用

假如你在开发一个在线聊天室，我们会用到：

- **服务器**：用 `ServerSocket` 监听端口，接收多个客户端连接，每个连接用线程处理，实现消息转发。  
- **客户端**：用 `Socket` 连接服务器，实时发送和接收消息。  
- **服务器与客户端之间**的消息格式协议需要提前定义好（比如 JSON），使双方能解析和展示。

这就是网络编程的典型入门项目，也是理解 TCP/IP 应用的最佳练习。

---

## 小结

- TCP 和 UDP 是网络传输的两种核心协议，分别适合不同场景。  
- Java 中通过 `Socket` 和 `ServerSocket` 实现 TCP 通信，`DatagramSocket` 实现 UDP。  
- `URL` 和 `URLConnection` 提供了简单访问网页的方法，适合初级网络请求。  
- 网络编程中资源管理、编码和异常处理不可忽视。  
- 实际项目中往往需要更多的构建块，比如线程池、协议解析和安全认证。

---

我希望这章内容能让你对网络编程有一个清晰直观的理解。下次当你写一个小型聊天工具或是网页爬虫时，别忘了回头看看这些基础，理解背后的原理会让你事半功倍。

如果你想尝试动手，不妨先用这章的代码搭个简易客户端和服务器，然后逐步扩展功能，刻意练习是最快的通路！

祝编程愉快，我们下一章再见！