---
title: 项目部署与运维
description: 全面掌握 Java 应用的打包、服务器部署、监控告警与日志分析，助你平稳上线与运行。
order: 99
keywords: [Java, 部署, 运维, 应用打包, 监控告警, 日志分析]
---

# 项目部署与运维

## 前置知识
> 在阅读本章前，你需要对 Java 基础语法、Maven/Gradle 构建工具有初步了解，同时熟悉 Linux 基础命令会非常有帮助。

## 为什么需要项目部署与运维？

想象你刚写完了一个很棒的 Java 应用——它功能完善、代码优雅。激动地等待用户上线使用，结果……你的程序在服务器上崩溃了，日志一团乱麻，服务器资源被占满。是不是很令人抓狂？

这正是项目部署与运维领域的意义所在，我们不是只写代码，更要让程序“活”起来，稳定、高效地运行在实际环境上。今天我们就从打包程序开始，逐步走到服务器部署、监控和日志分析，帮你掌握上线后的“生存之道”。

## 1. 应用打包

### 简单定义
应用打包，就是把我们写好的代码和它运行需要的依赖，打包成一个可以直接运行的文件或文件集合。

### 为什么需要它？
开发环境和生产环境可能差很多，直接“扔”代码到服务器通常会出问题。打包让你的程序和依赖整合在一起，方便部署。

### 基础用法：使用 Maven 打包一个简单的 Java 应用

```java
// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, deployment!");
    }
}
```

假设上面是我们的应用入口。我们写好 `pom.xml`，执行：

```bash
mvn clean package
```

这个命令会帮你编译代码，下载依赖，最终生成一个 `target/your-app.jar`。

这段代码做了什么：
1. `HelloWorld` 是程序的主类，打印一条简单信息。
2. `mvn clean package` 清理老旧文件并重新打包。

### 进阶：创建可执行的 fat JAR（含所有依赖）

普通 `jar` 包不包含依赖，部署时还要额外准备依赖库，不够方便。下面是在 `pom.xml` 中配置 Maven Shade 插件，合并依赖：

```xml
<!-- pom.xml 中的部分配置 -->
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>3.2.4</version>
            <executions>
                <execution>
                    <phase>package</phase>
                    <goals><goal>shade</goal></goals>
                    <configuration>
                        <transformers>
                            <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                                <mainClass>HelloWorld</mainClass>
                            </transformer>
                        </transformers>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

执行

```bash
mvn clean package
```

生成的 `target/your-app.jar` 就是包含所有依赖和主类声明的“大胖 JAR”，直接用

```bash
java -jar your-app.jar
```

就能跑起来。

这段代码做了什么：
- 配置 Shade 插件把所有依赖合并进一个 JAR
- 声明程序入口主类，方便一键启动

---

## 2. 服务器部署

### 简单定义
服务器部署，就是将打包好的应用上传到云服务器或物理机，并配置运行环境让它能启动。

### 为什么需要它？
代码在本地跑没问题，到了服务器可能缺环境依赖或者配置错误就崩溃。部署过程保证环境一致，实现应用平稳上线。

### 基础用法：用 SCP 和 SSH 部署启动 Java 应用

这是最“原始”，也最能理解的部署方式。

步骤：
1. 将打包好的 fat JAR 复制到服务器

```bash
scp target/your-app.jar user@your-server:/home/user/apps/
```

2. 远程登录服务器，启动程序

```bash
ssh user@your-server
cd /home/user/apps
nohup java -jar your-app.jar > app.log 2>&1 &
```

- `nohup` 让程序关闭终端后依然运行。
- `> app.log 2>&1 &` 把控制台输出重定向到日志文件，并在后台运行。

这段代码做了什么：
- 远程上传文件
- 远程启动 Java 应用并异步运行

### 进阶：使用 Systemd 管理 Java 服务

让应用更专业一点，自动随服务器启动/停止。写个 systemd 服务配置

```ini
# /etc/systemd/system/my-java-app.service
[Unit]
Description=My Java Application
After=network.target

[Service]
User=youruser
WorkingDirectory=/home/youruser/apps
ExecStart=/usr/bin/java -jar /home/youruser/apps/your-app.jar
SuccessExitStatus=143
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

操作流程：

```bash
sudo systemctl daemon-reload
sudo systemctl start my-java-app
sudo systemctl enable my-java-app
```

优点：  
- 服务器启动时自动起应用  
- 若崩溃自动重启  
- 可以用 `systemctl status my-java-app` 查看状态，方便管理  

这段代码做了什么：
- 定义了一个服务器服务单元，自动启动 java 应用
- 设置失败后自动重启，提升稳定性

---

## 3. 监控告警

### 简单定义
监控告警是实时检查应用状态和性能，出现异常时及时通知运维人员。

### 为什么需要它？
没人天天盯着服务器，一旦应用内存泄漏、CPU 飙升、响应变慢，自动监控就能第一时间发现，防止故障扩大。

### 典型做法

#### 代码示例：引入 Micrometer 监控指标

Micrometer 是 Java 应用监控的事实标准，它可以把应用指标发送到 Prometheus、Grafana 等。

添加依赖（Maven）：

```xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-core</artifactId>
    <version>1.10.4</version>
</dependency>
```

示例代码：

```java
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.simple.SimpleMeterRegistry;

public class MonitoringExample {
    private final Counter requestCounter;

    public MonitoringExample(MeterRegistry registry) {
        this.requestCounter = Counter.builder("requests_total")
                                     .description("Total number of requests")
                                     .register(registry);
    }

    public void handleRequest() {
        requestCounter.increment(); // 每收到一个请求，计数器+1
        // 处理请求逻辑...
    }

    public static void main(String[] args) {
        MeterRegistry registry = new SimpleMeterRegistry(); // 简单内存型注册表
        MonitoringExample app = new MonitoringExample(registry);

        app.handleRequest();

        System.out.println("Requests counted: " + registry.get("requests_total").counter().count());
    }
}
```

这段代码做了什么：
- 创建了一个计数器指标 `requests_total`
- 每处理一次请求，调用 `increment()` 递增计数器
- 打印当前请求总数

### 进阶：告警策略简述

监控本身不够，还得设置告警，比如：

- CPU 利用率 > 90% 持续 5 分钟，触发报警邮件
- 应用响应时间超过阈值，触发手机短信

具体实现通常结合 Prometheus Alertmanager 或云服务的监控平台。

---

## 4. 日志分析

### 简单定义
日志是程序运行时记录的重要信息，通过分析它我们能排查故障、洞察行为。

### 为什么需要它？
如果服务「崩了」，没有日志你就像盲人摸象。好的日志可以精准定位问题根源。

### 基础用法：用 Log4j2 记录日志

`Log4j2` 是经典、功能强大的日志框架。

示例：

```java
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LoggingExample {
    private static final Logger logger = LogManager.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("程序启动");
        try {
            int result = 10 / 0; // 故意制造异常
        } catch (Exception e) {
            logger.error("捕获异常", e);
        }
        logger.info("程序结束");
    }
}
```

这段代码做了什么：
- 记录程序开始的 info 级别日志
- 捕获并记录异常详细堆栈信息
- 记录程序结束的信息

### 进阶：集中式日志收集与分析

在生产环境，一般会用 ELK（Elasticsearch + Logstash + Kibana）或 Loki + Grafana 来收集、存储和分析日志。

---

:::warning ⚠️ 常见陷阱

- **启动程序时不写日志重定向（`> app.log 2>&1`）**，导致控制台输出看不到，排查异常困难。
- **打包没有包含依赖**，导致服务器启动时找不到类。
- **Systemd 配置文件权限问题**，导致服务无法启动。
- **监控指标采样过于频繁**，反而压垮应用性能。
- **日志不规范，缺少关键上下文信息**，影响排查效率。
:::
---

:::tip 💡 实战建议

- **打包时优先使用 fat JAR**，减少依赖缺失问题。
- **搭建自动化部署流水线（CI/CD）**，提升部署一致性和效率。
- **使用 Systemd 或容器编排管理 Java 应用**，减少人工干预风险。
- **结合 Prometheus 和 Grafana 建立性能监控面板**，及时了解应用健康状况。
- **采用结构化日志格式（如 JSON）**，方便日志索引和自动分析。
:::
---

:::details 🔍 深入理解：为什么 fat JAR 如此流行？

如果把 Java 应用比作一本书，依赖库就是附录。普通 JAR 只包含正文，得把附录单独带上。fat JAR 把正文 + 附录一起装订成“加厚版”，方便携带和阅读，尤其在运维环境中没有原始依赖库的情况下非常实用。
:::
---

## 小结

- 项目部署从打包开始，fat JAR 简化依赖管理。
- 服务器部署推荐用 SSH + Systemd，实现自动化和稳定运营。
- 监控告警帮你早发现潜在风险，使用 Micrometer 等库能方便集成。
- 日志是排查问题利器，规范记录和集中分析同等重要。
- 少踩坑，多实践，用好工具，让你的 Java 应用“活力四射”。

---

祝你项目上线顺利，服务器稳定运行！如果遇到部署运维的棘手问题，随时来聊，我们一起攻克。