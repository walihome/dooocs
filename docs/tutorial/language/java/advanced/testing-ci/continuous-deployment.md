---
title: 持续部署
description: 本章带你一步步掌握自动化部署流程，结合 Docker 容器化和 Kubernetes 基础，将你的 Java 应用推向生产环境。
order: 88
keywords: [持续部署, Docker, Kubernetes, Java, 自动化部署]
---

# 持续部署

## 前置知识

> 在阅读本章前，你需要了解：Java 基础语法，基本的 HTTP 服务开发，以及版本控制工具（如 Git）的使用。

## 为什么需要持续部署？

你有没有遇到过这样的情况？上线一个新功能，手动把代码打包、上传、部署到服务器，结果发现依赖版本错了或者忘记重启服务，浪费了大量时间调试。这种传统“搬砖”式上线流程不仅费时费力，还容易出错。

持续部署（Continuous Deployment，简称 CD）就是为了解决这类问题：它让代码一推送，自动完成构建、测试、打包和部署，一气呵成。这样，开发者可以专注写代码，系统自动把最新稳定的版本推送到生产环境。

接下来，我们一起从零开始，掌握持续部署的自动化思路，并用 Docker 把 Java 应用转身为容器化服务，最终借助 Kubernetes 让它可伸缩、易管理。

## 具体章节

### 一、自动化部署流程简介

简单说，持续部署的流程分成几个环节：

- 代码提交到仓库（如 GitHub、GitLab）
- CI（持续集成）工具触发自动构建测试
- 构建成功后生成镜像并推送到镜像仓库
- CD 工具拉取镜像自动部署到生产环境

这个流程让人联想到流水线，每个环节都是一道质量关卡，只有通过才会进入下一步。

### 二、开始用 Java 做一个简单的 Web 服务

让我们先写一个最简单的 Java 应用，帮它做容器化打基础。

```java
package com.example.continuousdeployment;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class SimpleHttpServer {

    public static void main(String[] args) throws IOException {
        // 创建一个HttpServer监听8080端口
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // 设置根路径的请求处理器
        server.createContext("/", new RootHandler());

        server.start();
        System.out.println("服务器启动，访问地址：http://localhost:8080/");
    }

    // 请求处理器，返回简单的欢迎信息
    static class RootHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String response = "Hello from Continuous Deployment Demo!";
            exchange.sendResponseHeaders(200, response.getBytes().length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response.getBytes());
            }
        }
    }
}
```

这段代码做了什么：

1. 创建了一个监听 8080 端口的简易 HTTP 服务器。
2. 定义了根路径 `/` 的请求响应，返回一段欢迎文字。
3. 启动服务器并输出提示。

这就是你的可部署的 Java 应用原型，简单明了。

### 三、将 Java 程序打包为 Docker 镜像

我们知道，Java 程序需要 JVM 环境，直接在目标服务器手动部署会有环境不一致风险。Docker 可以帮我们把程序和运行环境打包在一起，确保处处一样。

下面是一个 Dockerfile，教你一步步把刚写的 Java 服务装进容器里：

```dockerfile
# 基础镜像，带有OpenJDK 11环境
FROM openjdk:11-jre-slim

# 把编译好的jar包复制到容器中
COPY target/simple-http-server.jar /app/simple-http-server.jar

# 声明容器内监听端口
EXPOSE 8080

# 容器启动后执行命令，运行Java应用
CMD ["java", "-jar", "/app/simple-http-server.jar"]
```

该文件做了什么？

1. 选用官方 OpenJDK 11 精简版作为基础镜像。
2. 复制项目编译产物 JAR 到容器指定路径。
3. 告诉 Docker 镜像会监听 8080 端口。
4. 容器启动时运行 Java 程序。

**编译打包命令举例：**

```bash
# 假设使用 Maven 构建
mvn clean package
```

**构建镜像命令举例：**

```bash
docker build -t simple-http-server:latest .
```

**运行镜像命令验证：**

```bash
docker run -p 8080:8080 simple-http-server:latest
```

打开浏览器访问 `http://localhost:8080/`，你应该可以看到“Hello from Continuous Deployment Demo!”的欢迎信息。

这一步我们成功把 Java 应用容器化了，接下来自动化才有基础。

### 四、引入 Kubernetes 实现自动化部署

容器管理好，但当你的服务需要扩容、健康检查、蓝绿发布时，单靠 Docker 不够。Kubernetes（简称 K8s）是云原生时代的容器管理利器。

先来看一个最简单的 Kubernetes 部署配置文件 `deployment.yaml`：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: simple-http-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: simple-http-app
  template:
    metadata:
      labels:
        app: simple-http-app
    spec:
      containers:
      - name: simple-http-container
        image: simple-http-server:latest
        ports:
        - containerPort: 8080
```

这段配置做了什么？

1. 创建一个名为 `simple-http-deployment` 的部署。
2. 设定创建3个副本，保证有3份服务实例同时运行。
3. 标记 Pod 的标签是 `app: simple-http-app` 以方便管理。
4. 容器使用之前构建的镜像，暴露 8080 端口。

**部署命令示例：**

```bash
kubectl apply -f deployment.yaml
```

等待几秒，可以通过命令 `kubectl get pods` 查看是否3个实例都启动成功。

现在即使有一个实例 crash，Kubernetes 也会自动重启它，这就是自动化管理的魅力。

### 五、结合持续集成（CI）实现流水线部署

在实际项目中，我们不希望自己手动打包容器上传，还要写部署文件应用。理想情况是：代码 push 到仓库，流水线自动执行所有步骤。

举例用 GitHub Actions 编写简易流水线：

```yaml
name: Java CI with Docker and Kubernetes

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: 检出代码
      uses: actions/checkout@v2

    - name: 设置 JDK 11
      uses: actions/setup-java@v3
      with:
        java-version: '11'

    - name: 构建项目
      run: mvn clean package

    - name: 构建 Docker 镜像
      run: docker build -t your-dockerhub-username/simple-http-server:latest .

    - name: 登录 Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: 推送镜像到 Docker Hub
      run: docker push your-dockerhub-username/simple-http-server:latest

    - name: 部署到 Kubernetes 集群
      env:
        KUBECONFIG: ${{ secrets.KUBECONFIG }}
      run: |
        kubectl apply -f deployment.yaml
```

这个流程做了:

1. 监听 `main` 分支 push 事件。
2. 通过 Maven 构建 Java 项目。
3. 使用 Docker 构建并推送最新镜像到 Docker Hub。
4. 通过 `kubectl` 部署更新的镜像到 Kubernetes 集群。

这样，代码一提交，就会自动完成整个部署流程，省时又省力。

---

:::tip 💡 实战建议  
- 在生产环境，务必配置健康检查和资源限制，避免单个服务挂掉导致大面积不可用。  
- 使用私有镜像仓库时，注意配置 Kubernetes 的镜像拉取凭证（Secret）。  
- 推荐分阶段流水线设计：先自动部署到测试环境，确认无误再部署生产，降低风险。  
:::

:::warning ⚠️ 常见陷阱  
- 别忘了 Kubernetes 里的镜像标签和仓库地址要对应，否则无法拉取镜像。  
- 自动化脚本中密码和密钥千万不要硬编码，要用 CI/CD 工具的安全变量机制。  
- 当容器端口和 Kubernetes 配置端口不一致时，服务会报错，注意统一端口号。  
:::

## 对比总结

| 传统人工部署 | 持续部署（自动化）                         |
|--------------|------------------------------------------|
| 手工打包，易出错 | CI/CD 自动化构建，稳定高效                    |
| 环境不一致导致“雪崩” | Docker 容器环境一致性                     |
| 无法快速回滚    | Kubernetes 支持滚动更新及版本回滚                |
| 依赖各个环节确认 | 流水线全自动，一处配置整体生效                 |

持续部署看似复杂，但将复杂拆成模块，一步步实现，效果显著：节省时间，降低人力成本，提升系统稳定性。

## 延伸思考

- 除了 Kubernetes，还有哪些容器编排工具？它们有什么优劣？
- 如何利用监控和日志系统，与持续部署结合，实现更智能的自动化运维？
- 当业务复杂时，如何设计分布式微服务的持续部署流程？

---

# 小结

- 持续部署让代码变更快速且自动地推送到生产环境，减少人为干预和错误。
- 使用 Docker 容器化，保证应用和运行时环境一致，避免环境差异问题。
- Kubernetes 作为集群容器管理平台，实现服务高可用和自动恢复。
- 结合 CI/CD 工具，设计完整自动化流水线，提高开发效率和服务稳定性。
```