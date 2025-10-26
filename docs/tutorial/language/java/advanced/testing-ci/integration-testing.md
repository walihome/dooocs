---
title: 集成测试
description: 掌握Spring Test、TestContainers、数据库测试和API测试，构建可靠的Java集成测试体系。
order: 85
keywords: [集成测试, Spring Test, TestContainers, 数据库测试, API测试]
---

# 集成测试

## 前置知识
> 在阅读本章前，你需要了解：  
> - Java 单元测试的基本写法（JUnit）  
> - Spring 框架基础，尤其是 Spring Boot  
> - 依赖注入和基本的数据库操作

## 为什么需要集成测试？

想象一下，你刚完成一个用户注册功能的开发，在本地单元测试通过了，但一部署到测试环境的时候，发现用户信息根本没存到数据库，API 返回也不正常。这种问题很难从单元测试中发现，因为单元测试仅关注单个组件的功能，更像是花园里的园丁，专注修剪单株植物。而集成测试就是把整个花园—数据库、缓存、消息队列、API等—真正连起来，确保它们协同工作不会出错。

在现代企业应用中，系统越来越复杂，光靠单元测试已经远远不够。集成测试帮助我们在接近真实运行环境的状态下发现问题，是构建高质量软件必不可少的环节。

## Spring Test是什么？

Spring Test是Spring官方提供的一组测试支持库，旨在方便地集成Spring应用上下文到测试代码中。它可以让你启动一个最小甚至是完整的Spring环境，从而测试Bean的交互、数据库操作、事务管理等。

相比简单的JUnit测试，Spring Test 可以让测试过程贴近真实应用，验证不同层之间的集成是否正常工作。

---

## 具体章节

### 1. Spring Test——开启你的集成测试之旅

让我们先写一个最简单的Spring Boot应用的集成测试，看看Spring Test怎么帮我们把整个应用环境加载起来。

```java
package com.example.integrationtest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest  // 启动Spring上下文
public class SimpleIntegrationTest {

    @Autowired
    private GreetingService greetingService; // 假设应用有个服务Bean

    @Test
    public void testGreeting() {
        String greeting = greetingService.greet("Alice");
        assertThat(greeting).isEqualTo("Hello, Alice!");
    }
}
```

```java
package com.example.integrationtest;

import org.springframework.stereotype.Service;

@Service
public class GreetingService {
    public String greet(String name) {
        return "Hello, " + name + "!";
    }
}
```

**这段代码做了什么？**  
1. `@SpringBootTest`注解告诉Spring Test启动完整的Spring应用上下文，包括所有Bean。  
2. 我们注入了`GreetingService`，它是Spring管理的服务。  
3. 测试中调用`greet`方法，并验证返回值。  
4. 这样，我们实际上是在应用“跑起来”的环境下测试代码，远离了单元测试的孤立，能发现集成层面的问题。

### 2. 使用 TestContainers 做数据库集成测试

你或许遇到过这样的烦恼：测试数据库每次都得手动准备，又担心测试环境不一致导致测试不稳定。TestContainers解决了这个痛点，它通过Docker容器，给我们提供了真实可控的数据库实例。

先来看个用PostgreSQL的例子：

```java
package com.example.integrationtest;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.testcontainers.containers.PostgreSQLContainer;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class PostgresContainerTest {

    // 创建并启动PostgreSQL容器
    static PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres:15")
            .withDatabaseName("testdb")
            .withUsername("testuser")
            .withPassword("testpass");

    static {
        postgreSQLContainer.start();
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 动态注入数据库连接配置，覆盖Spring DataSource配置
    @DynamicPropertySource
    static void overrideProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgreSQLContainer::getJdbcUrl);
        registry.add("spring.datasource.username", postgreSQLContainer::getUsername);
        registry.add("spring.datasource.password", postgreSQLContainer::getPassword);
    }

    @Test
    public void testDatabaseInsertAndQuery() {
        // 创建表
        jdbcTemplate.execute("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(100))");
        // 插入数据
        jdbcTemplate.update("INSERT INTO users(name) VALUES (?)", "Bob");
        // 查询数据
        Integer count = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users WHERE name = ?", Integer.class, "Bob");
        assertThat(count).isEqualTo(1);
    }
}
```

**这段代码做了什么？**  
1. 使用TestContainers启动了一个PostgreSQL数据库容器，真实数据库环境就绪。  
2. 通过`@DynamicPropertySource`把容器数据库的连接信息动态注入到Spring应用中。  
3. `JdbcTemplate`执行SQL操作，完成数据插入和查询。  
4. 这样测试不依赖本地或共享数据库，保证环境一致且安全隔离。

### 3. API集成测试——使用 MockMvc 模拟HTTP请求

当我们的应用提供HTTP接口时，单元测试验证单个Service还不够。我们想知道当有真实HTTP请求进来时，前端控制器、服务、数据库能否协同工作正常。这时，Spring Test提供的`MockMvc`大显神威。

```java
package com.example.integrationtest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc  // 自动配置MockMvc
public class ApiIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testHelloEndpoint() throws Exception {
        mockMvc.perform(get("/hello?name=Tom"))
                .andExpect(status().isOk())
                .andExpect(content().string("Hello, Tom!"));
    }
}
```

```java
package com.example.integrationtest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(@RequestParam String name) {
        return "Hello, " + name + "!";
    }
}
```

**这段代码做了什么？**  
1. 启动了完整Spring环境并自动配置了`MockMvc`组件。  
2. 通过`mockMvc.perform()`模拟HTTP GET请求，传入请求参数。  
3. 校验响应状态码和返回内容是否符合预期。  
4. 这种方式既不需要实际启动服务器，又能逼真模拟HTTP层的行为和Controller逻辑。

---

## 对比总结

| 测试类型         | 主要用途                                       | 优缺点                                                         | 使用场景                            |
| ---------------- | ----------------------------------------------| -------------------------------------------------------------- | ---------------------------------- |
| 单元测试         | 测试单个组件和方法的正确性                    | 快速、易写，难覆盖集成逻辑                                       | 逻辑层功能验证                     |
| Spring Test整合  | 加载Spring上下文，测试Bean间交互              | 环境更重，测试更接近真实运行                                     | 验证Bean同Spring上下文一起正常工作 |
| TestContainers   | 真实数据库等依赖的Docker环境测试               | 需要Docker支持，启动时间稍长，但环境独立且一致性最好             | 依赖数据库、消息队列等第三方系统的测试 |
| MockMvc API测试  | 模拟HTTP请求，测试Controller及请求处理流程    | 无需启动服务器，速度快，适合Web层集成测试                        | Web接口校验                       |

---

:::tip 💡 实战建议
- 尽早引入TestContainers，告别“本地通，本地跑”的糟糕习惯，让你的数据库测试环境和生产更接近。  
- 集成测试环境启动成本高，尽量分层设计，配合单元测试实现快速反馈。  
- MockMvc测试应覆盖各种HTTP参数和异常场景，保证API的健壮性。
- 记得每个集成测试后清理测试数据，避免状态污染。
:::

:::warning ⚠️ 常见陷阱
- 过度依赖完整SpringBootTest启动，导致测试执行时间冗长，影响CI速度。合理使用`@MockBean`或切片测试可提升效率。  
- TestContainers需要Docker环境，部分CI或本地环境可能配置不当，导致测试失败。务必检查环境支持。  
- 忘记数据库事务回滚或清理，导致测试数据残留，影响后续测试准确性。
:::

---

## 实战应用

想象你现在要给一个金融交易系统写集成测试，其中涉及Kafka消息中间件、MySQL数据库和完整的业务逻辑链条：

- 你会用TestContainers启动MySQL和Kafka容器，保证测试环境与生产环境一致。
- 用Spring Test加载Spring上下文，注入所有业务服务Bean。
- 利用MockMvc模拟用户的HTTP请求，驱动系统做交易操作。
- 做完测试后，验证数据库和消息队列状态。
- 测试结束自动回滚事务或清理所有容器。

这样一套流程能最大限度地发现集成为一体之后的系统问题。

---

## 小结

- 集成测试让你的系统不只是“零件”能用，而是真正“机器”能转起来。  
- Spring Test 提供了丰富的工具支持，帮你轻松启动Spring环境。  
- TestContainers用Docker实现了数据库、消息队列的真实环境隔离，保证测试稳定。  
- MockMvc让你无需启动服务器就能模拟HTTP请求，快速验证API行为。  
- 通过合理拆分测试层次，避免过重的测试负担，让集成测试既全面又高效。

集成测试不是负担，而是你打造可靠软件的守门员。现在你已经掌握了这几种关键技术，下一步不妨动手给你的项目加上一套稳定的集成测试体系吧！