---
title: 文档生成
description: 探索Java中常用的文档生成技术，包括Javadoc、Swagger/OpenAPI与Markdown，帮助你写出规范、易维护的项目文档。
order: 80
keywords: [Javadoc, Swagger, OpenAPI, Markdown, Java文档]
---

# 文档生成

## 前置知识
> 在阅读本章前，你需要了解：基本的Java编程和常见的注释写法。

## 为什么需要文档生成？

你有没有遇到过这样的尴尬：项目写得满满当当，但完全没有清晰的文档？结果新同事摸不到头脑，API接口调用也频频出错。或者上线之后改动频繁，手写文档总是落后于代码更新……这时候，文档自动生成工具就成了救星。

本文将陪你一起探索Java项目中常用的几种文档生成方式：Javadoc，它是Java代码自带的“注释魔法”；Swagger/OpenAPI，现代REST API的说明利器；还有Markdown，一种灵活简洁的文本格式，方便生成项目说明和技术文档。掌握它们，你的项目不仅代码质量高，文档质量也能秒杀一切！

---

## 一、Javadoc：代码里的活文档

### 什么是Javadoc？

简单来说，Javadoc就是Java自带的一套注释规范和工具，可以从你的Java代码中提取注释信息，自动生成HTML格式的API文档。相比于写死的Word或PDF说明，Javadoc文档和代码同步更新，既省心又省力。

### 为什么需要Javadoc？

- 自动生成，减少重复劳动
- 统一规范，便于项目维护
- 方便其它团队成员和开源用户快速理解API

### 基础用法

Javadoc注释使用`/** ... */`包裹，放在类、方法、字段等声明前面，常用标签有`@param`（参数说明）、`@return`（返回值说明）、`@throws`（异常说明）等。

### 简单示例1：HelloWorld类的Javadoc写法

```java
/**
 * HelloWorld演示类
 * 演示Javadoc注释的基本用法
 */
public class HelloWorld {

    /**
     * 主方法，程序入口
     * @param args 命令行参数数组
     */
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

这段代码做了什么？

1. `/** ... */`块中对类和方法分别加了说明，告诉阅读者功能和参数
2. `@param args`说明了`main`方法的参数作用
3. 运行`javadoc HelloWorld.java`即可生成HTML文档

---

### 深入一点：Javadoc标签详解

- `@see`：推荐关联的类或方法，方便跳转
- `@since`：代码新增的版本，帮助版本管理
- `@deprecated`：标记废弃方法，提醒不要再用

你会发现，合理使用这些标签，生成的文档既美观，还含金量满满。

---

## 二、Swagger/OpenAPI：写给API的说明书

### 什么是Swagger和OpenAPI？

Swagger起初是一个工具，后来开源成OpenAPI规范，专门用来描述RESTful API接口。它支持通过注解或者YAML/JSON文件，自动生成交互式的接口文档和测试工具。

### 为什么需要Swagger/OpenAPI？

- 自动生成丰富的REST API文档，支持在线调试
- 让接口设计者、开发者、测试和运维都能在同一页
- 减少接口误用，提升团队协作效率

---

### 基础用法

我们通常用`springdoc-openapi`或`swagger-springfox`结合Spring Boot项目，通过注解描述接口。

---

### 示例2：Spring Boot项目中的Swagger简单配置

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// 引入swagger相关的注解
import io.swagger.v3.oas.annotations.Operation;

@SpringBootApplication
public class ApiDocumentationApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiDocumentationApplication.class, args);
    }
}

@RestController
class GreetingController {

    /**
     * 返回问候语
     * @return 问候字符串
     */
    @GetMapping("/greet")
    @Operation(summary = "获取问候语", description = "这个接口会返回一段简单的问候语")
    public String greet() {
        return "Hello from Swagger!";
    }
}
```

这段代码做了什么？

1. `@Operation`注解给接口加了详细描述，自动被Swagger扫描生成文档
2. 访问`/swagger-ui.html`（需要额外依赖和配置）即可看到漂亮的可交互文档界面
3. 你可以直接在线调用接口，查看返回结果

---

### 复杂一点的情况

- 可以添加请求参数、响应模型的详细说明
- 支持安全配置（如API Key、OAuth2）
- 配合`springdoc-openapi`，一键生成OpenAPI规范的yaml或json文件

---

## 三、Markdown：灵活的项目说明书

### 什么是Markdown？

Markdown是一种轻量级标记语言，写出来的文本结构清晰，语法简单，而且可以很方便地转换成HTML、PDF格式。很多开源项目都喜欢用Markdown写README和技术文档。

### 为什么要懂Markdown？

- 容易撰写维护，比传统Word效率高
- GitHub、GitLab、码云均支持Markdown渲染
- 丰富插件、工具支持，方便集成生成站点、电子书

---

### Markdown代码示例3：一个简单的项目说明README.md

```markdown
# MyProject

这是我的Java项目，主要功能是实现XXX。

## 运行说明

- JDK版本：Java 11+
- 构建工具：Maven

## 接口说明

接口列表请参考自动生成的Swagger文档。

## 贡献者

- 张三
- 李四
```

这段代码做了什么？

1. 标题用`#`，分级标题用`##`，结构清晰
2. 列表用`-`，语句简洁明了
3. 易读且支持在线查看，方便大家快速了解项目

### 进阶提示

- 可以用表格、图片丰富文档
- 结合自动化工具，生成API文档集成到Markdown中
- 支持脚注、代码高亮，助力技术传播

---

## 现有方案对比总结

| 技术       | 适用场景                        | 优势                             | 局限性                           |
|------------|--------------------------------|----------------------------------|----------------------------------|
| Javadoc    | Java代码API文档                | 集成简单，自动从代码生成         | 只针对Java代码，界面较简单       |
| Swagger/OpenAPI | REST API接口说明            | 支持交互式文档，丰富的生态支持 | 需要额外依赖和注解配置           |
| Markdown   | 项目说明、技术文档和教程       | 简单灵活，支持多平台             | 不自动同步API实现，手工维护      |

根据项目需求，通常是三者结合使用：Javadoc用于细化Java代码内部注释；Swagger用于REST接口文档；Markdown用来写整站、项目说明和教程。

---

:::tip 💡 实战建议
- 养成良好的Javadoc习惯，从一开始就写注释，不然项目后期文档维护成本会很高。
- 对于REST API，推荐使用`springdoc-openapi`，其配置友好且兼容最新规范。
- Markdown文件最好统一放在项目根目录，方便团队协作和版本管理。
:::

:::warning ⚠️ 常见陷阱
- Javadoc中的HTML标签使用滥用会导致生成文档异常。
- Swagger注解写得不准确，会误导前端或第三方调用者。
- Markdown文件版本无序管理，容易产生读文档和代码不同步情况。
:::

---

## 延伸思考 🔍

- 你能想到其他语言或者框架的文档生成工具吗？它们和Java生态的有何异同？
- 如果团队规模扩大，文档策略需要怎么调整？自动化和手工维护的平衡怎样把握？
- 怎样在持续集成系统中集成文档生成，保证代码一提交，文档也自动更新？

---

## 小结

- Javadoc是Java内置的标准注释规范，能生成稳定的API文档
- Swagger/OpenAPI专注REST接口，支持交互和测试，提升接口可用性
- Markdown灵活又简洁，广泛用于项目说明和技术传播
- 好的文档习惯和自动化流程，显著降低项目沟通成本，增强代码可维护性

---

希望这章内容能帮你打开Java文档生成的大门。文档这件“小事”，真正做好了，你代码才能“活”得更久更精彩。下次写代码时，不妨花几分钟，给代码讲讲故事，让它们成为别人眼中的“小明星”。