---
title: Web应用项目  
description: 使用Spring Boot开发RESTful API，实现前后端分离架构的实战教程  
order: 94  
keywords: [Spring Boot, RESTful API, 前后端分离, Java, Web开发]  
---

# Web应用项目

## 前置知识  
> 在阅读本章前，你需要了解：Java基础语法、Spring框架基础、Maven项目管理。

---

## 为什么需要使用Spring Boot开发RESTful API？

想象一下，你正在构建一个现代的Web应用，前端负责用户交互，后端负责业务逻辑和数据存取。传统方法往往是前后端紧耦合，页面跳转频繁，开发和维护都特别费劲。这时候，前后端分离的架构应运而生：前端专注做SPA（单页应用），后端暴露标准的RESTful API接口，两者通过HTTP进行通信。

而Spring Boot让后端开发RESTful API不再是复杂的配置堆积，而是可以快速启动、简洁实用。你会发现，写REST接口像搭积木一样简单，项目启动快、易维护、测试友好。接下来，我们一步步来打造一个简单的Spring Boot REST应用，帮助你理解这个流程。

---

## 1. 创建一个简单的Spring Boot RESTful API

我们先从一个最基础的例子开始：实现一个能返回问候语的接口。

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// 主程序入口，Spring Boot自动配置
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

// 控制器类，负责HTTP请求处理
@RestController
class GreetingController {
    
    // 映射GET请求到 /greeting 路径
    @GetMapping("/greeting")
    public String greeting() {
        return "Hello, welcome to Spring Boot REST API!";
    }
}
```

这段代码做了什么：
1. `@SpringBootApplication` 注解告诉Spring这是启动类，自动扫描和配置相关组件。
2. `@RestController` 表明这个类的所有方法都会返回数据而非视图。
3. `@GetMapping("/greeting")` 映射HTTP GET请求，把 `/greeting` 路径绑定到方法 `greeting`。
4. 方法直接返回字符串，Spring Boot自动帮你把它作为HTTP响应返回。

**当你启动程序，访问 http://localhost:8080/greeting 时，会得到返回“Hello, welcome to Spring Boot REST API!”的响应。**

这就是REST API最简单的雏形。

---

## 2. 逐步丰富功能：返回JSON数据与路径参数

上面的例子稍显简单，没有数据结构的支持。实际项目中，我们常需要通过JSON传递复杂数据，并根据URL参数返回不同内容。

继续优化，我们创建一个返回用户信息的接口，能根据用户id动态返回。

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

@RestController
@RequestMapping("/users")   // 路径前缀
class UserController {

    // 模拟数据库：id -> 用户名映射
    private static Map<Integer, String> userMap = new HashMap<>();
    
    static {
        userMap.put(1, "Alice");
        userMap.put(2, "Bob");
        userMap.put(3, "Charlie");
    }
    
    // GET /users/{id} 返回指定id的用户信息
    @GetMapping("/{id}")
    public Map<String, Object> getUserById(@PathVariable int id) {
        String name = userMap.get(id);
        if (name == null) {
            // 返回404，Spring会自动转换为响应状态码
            throw new UserNotFoundException("User with id " + id + " not found.");
        }
        
        Map<String, Object> response = new HashMap<>();
        response.put("id", id);
        response.put("name", name);
        return response;  // Spring自动转成JSON
    }
}

// 自定义异常
@ResponseStatus(code = org.springframework.http.HttpStatus.NOT_FOUND)
class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```

这段代码做了什么：
1. 定义了`/users`的REST路径，使用`@RequestMapping`做前缀统一管理。
2. 通过`@GetMapping("/{id}")`定义动态路径参数 `id`，用`@PathVariable`绑定它。
3. 返回用户信息用`Map<String, Object>`，Spring自动转成JSON格式。
4. 自定义异常并用`@ResponseStatus`注解标记，遇到找不到用户时返回HTTP 404。

**注意**这个模式是RESTful设计里非常经典的“资源 + 标识符”的访问方式。

---

## 3. 构建完整的前后端分离应用架构

终于到了一个稍复杂点，稍微接近真实项目的场景。前端使用现代框架（比如React、Vue）与后端通过REST API通信。

我们重点是后端，增加对数据的增删改查（CRUD）支持，数据实体用Java类表示，结合Spring的`@RestController`和`@RequestBody`实现。

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

// 用户实体
class User {
    private int id;
    private String name;
    private int age;
    
    // 必须有无参构造器和getter/setter，为JSON序列化/反序列化服务
    public User() {}
    
    public User(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}

@RestController
@RequestMapping("/api/users")
class UserController {

    private Map<Integer, User> userStore = new HashMap<>();
    private AtomicInteger idGenerator = new AtomicInteger(1);

    // 获取所有用户
    @GetMapping
    public List<User> listUsers() {
        return new ArrayList<>(userStore.values());
    }

    // 根据ID获取用户
    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        User user = userStore.get(id);
        if (user == null) {
            throw new UserNotFoundException("User with id " + id + " not found.");
        }
        return user;
    }

    // 新增用户，POST请求体传JSON
    @PostMapping
    public User createUser(@RequestBody User userRequest) {
        int newId = idGenerator.getAndIncrement();
        userRequest.setId(newId);
        userStore.put(newId, userRequest);
        return userRequest;
    }

    // 更新用户信息，PUT请求体传JSON
    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User userRequest) {
        User existingUser = userStore.get(id);
        if (existingUser == null) {
            throw new UserNotFoundException("User with id " + id + " not found.");
        }
        existingUser.setName(userRequest.getName());
        existingUser.setAge(userRequest.getAge());
        return existingUser;
    }

    // 删除用户
    @DeleteMapping("/{id}")
    public Map<String, String> deleteUser(@PathVariable int id) {
        User removed = userStore.remove(id);
        if (removed == null) {
            throw new UserNotFoundException("User with id " + id + " not found.");
        }
        return Collections.singletonMap("message", "User deleted successfully");
    }
}

@ResponseStatus(code = org.springframework.http.HttpStatus.NOT_FOUND)
class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```

这段代码做了什么：
1. 设计了一份简单的`User`数据结构，Spring通过Jackson自动实现JSON序列化和反序列化（Java对象和JSON自动转）。
2. 利用`@RequestBody`接收请求体中的JSON，支持新增和更新用户。
3. 使用`@DeleteMapping`实现删除接口，返回操作结果消息。
4. 用内存哈希结构模拟数据库，重点不是数据持久化，而是API设计和数据交互。
5. 提供了完整的CRUD接口，适配任何前端请求。

**这就是前后端完全分离时，后端给前端提供的标准API形态。前端只需要调用这些HTTP接口，拿到JSON数据，渲染界面。**

---

:::warning 常见陷阱 ⚠️

- **没有无参构造器或getter/setter，导致JSON反序列化失败。**  
  JSON转换框架（如Jackson）依赖Java Bean规范，少了这些会报错或数据无法绑定。  
- **路径参数和请求体参数混淆。**  
  一定要明确用`@PathVariable`绑定URL路径参数，用`@RequestBody`绑定请求体JSON，别搞混。  
- **异常处理缺失导致客户端难辨错误。**  
  自定义异常并结合`@ResponseStatus`能给RESTful接口一个清晰的状态码提示，千万别直接抛普通异常。  
- **内存存储仅用于演示，真实项目必须用数据库。**  
  这里用Map存储用户数据，只是方便代码示范，生产环境宁愿先接入JPA或者MyBatis等ORM工具。
:::
---

:::info 实战建议 💡

- 勤用`@RestController`代替旧版`@Controller + @ResponseBody`组合，代码更简洁。  
- 统一使用`@RequestMapping`在类上定义路径前缀，避免路径硬编码，方便管理。  
- 利用Spring Boot Actuator监控接口运行状态，有助于实际生产部署的稳定性。  
- 集成Swagger/OpenAPI文档生成工具，帮助前端和测试人员清晰理解接口定义。  
- 尽早规划异常处理机制，推荐使用`@ControllerAdvice`统一拦截，避免接口响应不一致。  
- 实际业务中推荐持久化存储，结合Spring Data等框架简化数据访问。
:::
---

## 延伸思考 🔍

- 你考虑过如何为REST API添加身份认证和权限控制吗？  
- 有没有想过如何实现接口版本管理，支持迭代升级？  
- 业务复杂时，你会如何处理接口的幂等性和事务一致性？

---

## 小结

- RESTful API通过HTTP方法对应资源操作，适用于前后端分离架构。  
- Spring Boot让REST接口开发变得简单快捷，自动配置和JSON映射极大减轻负担。  
- 设计REST接口时路径、请求体和状态码的正确使用是关键。  
- 生产环境要关注异常处理、接口文档、安全性和持久存储。  

---

这章内容帮你从零搭建起Spring Boot的RESTful后端服务，支撑起真正现代的Web应用架构。在下章中，我们将深入介绍如何结合前端框架，实现流畅的前后端交互。一路走来，前后端分离的美妙世界正向你招手！