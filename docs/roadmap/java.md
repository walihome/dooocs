---
title: Java 开发路线图
sidebar: false
single: true
---

<script setup>
const roadmapData = [
  {
    title: '基础准备',
    description: '掌握编程基础和开发环境搭建',
    topics: [
      {
        name: 'Java 环境配置',
        description: '安装 JDK，配置环境变量，熟悉 IDE（IntelliJ IDEA 或 Eclipse）',
        resources: [
          { name: 'Oracle JDK 官方下载', url: 'https://www.oracle.com/java/technologies/downloads/' },
          { name: 'OpenJDK 下载', url: 'https://openjdk.org/' },
          { name: 'IntelliJ IDEA 下载', url: 'https://www.jetbrains.com/idea/' }
        ]
      },
      {
        name: 'Java 基础语法',
        description: '变量、数据类型、运算符、控制流程（if/switch/for/while）',
        resources: [
          { name: 'Java 官方教程', url: 'https://docs.oracle.com/javase/tutorial/' },
          { name: 'Java 语言规范', url: 'https://docs.oracle.com/javase/specs/' }
        ]
      },
      {
        name: '面向对象编程',
        description: '类与对象、封装、继承、多态、接口、抽象类',
        resources: [
          { name: 'Head First Java', url: 'https://book.douban.com/subject/2000732/' },
          { name: 'Effective Java', url: 'https://book.douban.com/subject/30412517/' }
        ]
      },
      {
        name: '常用 API',
        description: 'String、StringBuilder、Math、日期时间（java.time）、包装类',
        resources: [
          { name: 'Java API 文档', url: 'https://docs.oracle.com/en/java/javase/17/docs/api/' }
        ]
      },
      {
        name: '异常处理',
        description: 'try-catch-finally、自定义异常、异常链、try-with-resources',
      }
    ]
  },
  {
    title: '核心技术',
    description: '深入学习 Java 核心技术栈',
    topics: [
      {
        name: '集合框架',
        description: 'List、Set、Map、Queue 接口及其实现类，泛型的使用',
        resources: [
          { name: 'Java 集合框架详解', url: 'https://docs.oracle.com/javase/tutorial/collections/' }
        ]
      },
      {
        name: 'IO 流',
        description: '字节流、字符流、缓冲流、对象流、NIO',
        resources: [
          { name: 'Java NIO 教程', url: 'https://www.baeldung.com/java-nio-2-file-api' }
        ]
      },
      {
        name: '多线程编程',
        description: 'Thread、Runnable、线程同步、线程池、并发工具类',
        resources: [
          { name: 'Java 并发编程实战', url: 'https://book.douban.com/subject/10484692/' }
        ]
      },
      {
        name: '反射与注解',
        description: '反射 API、自定义注解、注解处理器',
      },
      {
        name: 'Lambda 与 Stream',
        description: 'Lambda 表达式、函数式接口、Stream API',
      },
      {
        name: 'JVM 基础',
        description: '类加载机制、内存模型、垃圾回收',
        resources: [
          { name: '深入理解 Java 虚拟机', url: 'https://book.douban.com/subject/34907497/' }
        ]
      }
    ]
  },
  {
    title: '关系型数据库',
    description: '掌握SQL和关系型数据库',
    topics: [
      {
        name: 'SQL 基础',
        description: 'DDL、DML、DQL、DCL，查询语法、表设计、约束',
        resources: [
          { name: 'SQL 教程', url: 'https://www.w3schools.com/sql/' }
        ]
      },
      {
        name: 'MySQL',
        description: '最流行的开源关系型数据库',
        resources: [
          { name: 'MySQL 官方文档', url: 'https://dev.mysql.com/doc/' },
          { name: 'MySQL 快速入门', url: 'https://dev.mysql.com/doc/mysql-getting-started/en/' }
        ]
      },
      {
        name: 'PostgreSQL',
        description: '强大的开源对象关系型数据库',
        resources: [
          { name: 'PostgreSQL 官方文档', url: 'https://www.postgresql.org/docs/' },
          { name: 'PostgreSQL 教程', url: 'https://www.postgresqltutorial.com/' }
        ]
      },
      {
        name: 'MariaDB / Oracle',
        description: 'MariaDB（MySQL分支）、Oracle Database',
        resources: [
          { name: 'MariaDB 文档', url: 'https://mariadb.com/kb/en/' }
        ]
      },
      {
        name: '数据库进阶',
        description: '索引、事务（ACID）、隔离级别、锁机制、性能优化',
      }
    ]
  },
  {
    title: 'Java 数据库开发',
    description: '数据库连接和 ORM 框架',
    topics: [
      {
        name: 'JDBC',
        description: 'Java Database Connectivity API',
        resources: [
          { name: 'JDBC 教程', url: 'https://docs.oracle.com/javase/tutorial/jdbc/' }
        ]
      },
      {
        name: '数据库连接池',
        description: 'HikariCP（推荐）、Druid、C3P0',
        resources: [
          { name: 'HikariCP GitHub', url: 'https://github.com/brettwooldridge/HikariCP' },
          { name: 'Druid 文档', url: 'https://github.com/alibaba/druid/wiki' }
        ]
      },
      {
        name: 'MyBatis',
        description: 'SQL 映射框架，XML/注解开发、动态 SQL、分页插件',
        resources: [
          { name: 'MyBatis 官方文档', url: 'https://mybatis.org/mybatis-3/zh/index.html' },
          { name: 'MyBatis-Plus', url: 'https://baomidou.com/' }
        ]
      },
      {
        name: 'Hibernate',
        description: 'JPA 实现，对象关系映射、HQL、缓存',
        resources: [
          { name: 'Hibernate ORM 文档', url: 'https://hibernate.org/orm/documentation/' },
          { name: 'Hibernate Getting Started', url: 'https://hibernate.org/orm/documentation/getting-started/' }
        ]
      },
      {
        name: 'Spring Data JPA',
        description: 'Repository 接口、方法命名查询、Specification',
        resources: [
          { name: 'Spring Data JPA 文档', url: 'https://spring.io/projects/spring-data-jpa' },
          { name: 'Spring Data JPA 参考文档', url: 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/' }
        ]
      },
      {
        name: 'jOOQ',
        description: '类型安全的 SQL 构建器',
        resources: [
          { name: 'jOOQ 官网', url: 'https://www.jooq.org/' }
        ]
      }
    ]
  },
  {
    title: 'Web 开发基础',
    description: '学习 Web 开发核心技术',
    topics: [
      {
        name: 'HTTP 协议',
        description: 'HTTP 方法、状态码、Headers、Cookie、Session、HTTPS',
        resources: [
          { name: 'MDN HTTP 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP' }
        ]
      },
      {
        name: 'HTML/CSS/JavaScript',
        description: '前端基础知识，了解前后端交互',
        resources: [
          { name: 'MDN Web 文档', url: 'https://developer.mozilla.org/zh-CN/' }
        ]
      },
      {
        name: 'Servlet & JSP',
        description: 'Servlet 生命周期、过滤器、监听器、请求转发与重定向',
        resources: [
          { name: 'Servlet 规范', url: 'https://jakarta.ee/specifications/servlet/' }
        ]
      },
      {
        name: 'Maven',
        description: '项目构建工具、依赖管理、生命周期、多模块项目',
        resources: [
          { name: 'Maven 官方文档', url: 'https://maven.apache.org/guides/' },
          { name: 'Maven 快速入门', url: 'https://maven.apache.org/guides/getting-started/' }
        ]
      },
      {
        name: 'Gradle',
        description: '现代构建工具、Groovy/Kotlin DSL、性能优秀',
        resources: [
          { name: 'Gradle 官方文档', url: 'https://docs.gradle.org/' },
          { name: 'Gradle 用户手册', url: 'https://docs.gradle.org/current/userguide/userguide.html' }
        ]
      },
      {
        name: 'Tomcat',
        description: 'Servlet 容器、配置、部署、性能调优',
        resources: [
          { name: 'Tomcat 官方文档', url: 'https://tomcat.apache.org/tomcat-10.1-doc/index.html' }
        ]
      },
      {
        name: 'Jetty / Undertow',
        description: '轻量级 Web 服务器和 Servlet 容器',
        resources: [
          { name: 'Jetty 文档', url: 'https://www.eclipse.org/jetty/documentation/' }
        ]
      }
    ]
  },
  {
    title: 'Spring 框架体系',
    description: '掌握企业级开发框架',
    topics: [
      {
        name: 'Spring Core',
        description: 'IoC 容器、依赖注入、Bean 生命周期、AOP 切面编程',
        resources: [
          { name: 'Spring Framework 文档', url: 'https://docs.spring.io/spring-framework/reference/' },
          { name: 'Spring 核心技术', url: 'https://docs.spring.io/spring-framework/reference/core.html' }
        ]
      },
      {
        name: 'Spring MVC',
        description: 'RESTful API、请求映射、参数绑定、拦截器、异常处理、数据验证',
        resources: [
          { name: 'Spring MVC 文档', url: 'https://docs.spring.io/spring-framework/reference/web/webmvc.html' }
        ]
      },
      {
        name: 'Spring Boot',
        description: '自动配置、Starter、配置文件（YAML/Properties）、Actuator 监控',
        resources: [
          { name: 'Spring Boot 官方文档', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
          { name: 'Spring Boot 快速开始', url: 'https://spring.io/quickstart' },
          { name: 'Spring Boot 指南', url: 'https://spring.io/guides' }
        ]
      },
      {
        name: 'Spring Security',
        description: '认证授权、JWT、OAuth2、RBAC、方法级别安全',
        resources: [
          { name: 'Spring Security 文档', url: 'https://docs.spring.io/spring-security/reference/' },
          { name: 'Spring Security 快速开始', url: 'https://spring.io/guides/gs/securing-web/' }
        ]
      },
      {
        name: 'Spring Data JPA',
        description: 'Repository 接口、查询方法、Specification、审计',
        resources: [
          { name: 'Spring Data JPA 文档', url: 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/' }
        ]
      },
      {
        name: 'Spring Data Redis',
        description: 'RedisTemplate、缓存抽象、Session 共享',
        resources: [
          { name: 'Spring Data Redis 文档', url: 'https://docs.spring.io/spring-data/redis/docs/current/reference/html/' }
        ]
      },
      {
        name: 'Spring Cache',
        description: '缓存抽象、注解式缓存、多种缓存实现',
        resources: [
          { name: 'Spring Cache 文档', url: 'https://docs.spring.io/spring-framework/reference/integration/cache.html' }
        ]
      }
    ]
  },
  {
    title: 'NoSQL 数据库',
    description: '非关系型数据库',
    topics: [
      {
        name: 'Redis',
        description: 'Key-Value 存储，数据类型、持久化、主从复制、哨兵、集群',
        resources: [
          { name: 'Redis 官方文档', url: 'https://redis.io/docs/' },
          { name: 'Redis 命令参考', url: 'https://redis.io/commands/' }
        ]
      },
      {
        name: 'MongoDB',
        description: 'Document 数据库，BSON、聚合管道、副本集、分片',
        resources: [
          { name: 'MongoDB 官方文档', url: 'https://www.mongodb.com/docs/' },
          { name: 'MongoDB Java Driver', url: 'https://www.mongodb.com/docs/drivers/java/sync/current/' }
        ]
      },
      {
        name: 'Elasticsearch',
        description: '全文检索引擎，倒排索引、聚合分析、集群',
        resources: [
          { name: 'Elasticsearch 官方文档', url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html' },
          { name: 'Elasticsearch Java Client', url: 'https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/index.html' }
        ]
      },
      {
        name: 'Cassandra / Neo4j',
        description: 'Cassandra（列式存储）、Neo4j（图数据库）',
        resources: [
          { name: 'Cassandra 文档', url: 'https://cassandra.apache.org/doc/' },
          { name: 'Neo4j 文档', url: 'https://neo4j.com/docs/' }
        ]
      }
    ]
  },
  {
    title: '缓存与消息队列',
    description: '提升性能和异步处理',
    topics: [
      {
        name: '缓存策略',
        description: 'Cache-Aside、Read-Through、Write-Through、缓存穿透/击穿/雪崩',
      },
      {
        name: 'Memcached',
        description: '高性能分布式内存缓存',
        resources: [
          { name: 'Memcached 文档', url: 'https://memcached.org/' }
        ]
      },
      {
        name: 'RabbitMQ',
        description: 'AMQP 协议，交换机、队列、绑定、消息确认',
        resources: [
          { name: 'RabbitMQ 官方文档', url: 'https://www.rabbitmq.com/documentation.html' },
          { name: 'RabbitMQ Java Client', url: 'https://www.rabbitmq.com/java-client.html' }
        ]
      },
      {
        name: 'Apache Kafka',
        description: '分布式流处理平台，Topic、Partition、Consumer Group',
        resources: [
          { name: 'Kafka 官方文档', url: 'https://kafka.apache.org/documentation/' },
          { name: 'Kafka 快速开始', url: 'https://kafka.apache.org/quickstart' }
        ]
      },
      {
        name: 'RocketMQ',
        description: '阿里开源消息中间件，顺序消息、事务消息',
        resources: [
          { name: 'RocketMQ 官方文档', url: 'https://rocketmq.apache.org/docs/' }
        ]
      }
    ]
  },
  {
    title: 'Web 服务器',
    description: '反向代理与负载均衡',
    topics: [
      {
        name: 'Nginx',
        description: '反向代理、负载均衡、静态资源服务、限流',
        resources: [
          { name: 'Nginx 官方文档', url: 'https://nginx.org/en/docs/' }
        ]
      },
      {
        name: 'Apache HTTP Server',
        description: '老牌 Web 服务器',
        resources: [
          { name: 'Apache 文档', url: 'https://httpd.apache.org/docs/' }
        ]
      },
      {
        name: 'Caddy',
        description: '自动 HTTPS，配置简单',
        resources: [
          { name: 'Caddy 文档', url: 'https://caddyserver.com/docs/' }
        ]
      }
    ]
  },
  {
    title: 'API 设计',
    description: 'RESTful 与其他 API 风格',
    topics: [
      {
        name: 'REST API',
        description: 'RESTful 设计原则、HTTP 方法、状态码、HATEOAS',
        resources: [
          { name: 'REST API 教程', url: 'https://restfulapi.net/' }
        ]
      },
      {
        name: 'GraphQL',
        description: 'Schema、Query、Mutation、Subscription',
        resources: [
          { name: 'GraphQL 官网', url: 'https://graphql.org/' }
        ]
      },
      {
        name: 'gRPC',
        description: 'Protocol Buffers、双向流、高性能 RPC',
        resources: [
          { name: 'gRPC 官方文档', url: 'https://grpc.io/docs/' },
          { name: 'gRPC Java', url: 'https://grpc.io/docs/languages/java/quickstart/' }
        ]
      },
      {
        name: 'API 文档',
        description: 'OpenAPI/Swagger、Springdoc、API 规范',
        resources: [
          { name: 'Swagger 文档', url: 'https://swagger.io/docs/' },
          { name: 'Springdoc OpenAPI', url: 'https://springdoc.org/' }
        ]
      }
    ]
  },
  {
    title: '认证与授权',
    description: '安全认证机制',
    topics: [
      {
        name: 'JWT',
        description: 'JSON Web Token、无状态认证、Token 刷新',
        resources: [
          { name: 'JWT 官网', url: 'https://jwt.io/' },
          { name: 'Java JWT', url: 'https://github.com/auth0/java-jwt' }
        ]
      },
      {
        name: 'OAuth 2.0',
        description: '授权框架、授权码模式、客户端凭证模式',
        resources: [
          { name: 'OAuth 2.0 规范', url: 'https://oauth.net/2/' }
        ]
      },
      {
        name: 'Session & Cookie',
        description: '会话管理、Cookie 安全、Session 共享',
      },
      {
        name: 'OpenID / SAML',
        description: 'OpenID Connect、SAML 2.0、单点登录',
      }
    ]
  },
  {
    title: '测试',
    description: '保证代码质量',
    topics: [
      {
        name: 'JUnit 5',
        description: '单元测试框架、断言、参数化测试',
        resources: [
          { name: 'JUnit 5 文档', url: 'https://junit.org/junit5/docs/current/user-guide/' }
        ]
      },
      {
        name: 'Mockito',
        description: 'Mock 框架、打桩、验证',
        resources: [
          { name: 'Mockito 文档', url: 'https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html' }
        ]
      },
      {
        name: 'Spring Test',
        description: '集成测试、MockMvc、TestContainers',
        resources: [
          { name: 'Spring Boot Testing', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing' }
        ]
      },
      {
        name: 'AssertJ / Hamcrest',
        description: '流式断言、可读性更强',
        resources: [
          { name: 'AssertJ 文档', url: 'https://assertj.github.io/doc/' }
        ]
      }
    ]
  },
  {
    title: '微服务架构',
    description: '掌握微服务开发和治理',
    topics: [
      {
        name: 'Spring Cloud',
        description: 'Eureka/Nacos 注册中心、Feign、Gateway、Config',
        resources: [
          { name: 'Spring Cloud 官方文档', url: 'https://spring.io/projects/spring-cloud' },
          { name: 'Spring Cloud 参考文档', url: 'https://docs.spring.io/spring-cloud/docs/current/reference/html/' }
        ]
      },
      {
        name: 'Spring Cloud Alibaba',
        description: 'Nacos、Sentinel、Seata、RocketMQ 集成',
        resources: [
          { name: 'Spring Cloud Alibaba 文档', url: 'https://spring-cloud-alibaba-group.github.io/github-pages/2022/zh-cn/' },
          { name: 'Nacos 官方文档', url: 'https://nacos.io/zh-cn/docs/quick-start.html' }
        ]
      },
      {
        name: 'Apache Dubbo',
        description: '高性能 RPC 框架、服务注册与发现、负载均衡',
        resources: [
          { name: 'Dubbo 官方文档', url: 'https://dubbo.apache.org/zh/' },
          { name: 'Dubbo 快速开始', url: 'https://dubbo.apache.org/zh/docs3-v2/java-sdk/quick-start/' }
        ]
      },
      {
        name: 'Sentinel',
        description: '流量控制、熔断降级、系统负载保护',
        resources: [
          { name: 'Sentinel 官方文档', url: 'https://sentinelguard.io/zh-cn/docs/introduction.html' }
        ]
      },
      {
        name: 'Hystrix',
        description: '熔断器模式、线程隔离、降级策略（已维护）',
        resources: [
          { name: 'Hystrix GitHub', url: 'https://github.com/Netflix/Hystrix' }
        ]
      },
      {
        name: '分布式事务 Seata',
        description: 'AT/TCC/SAGA/XA 模式、事务协调',
        resources: [
          { name: 'Seata 官方文档', url: 'https://seata.io/zh-cn/' }
        ]
      },
      {
        name: 'API 网关',
        description: 'Spring Cloud Gateway、Kong、身份认证、流量控制',
        resources: [
          { name: 'Spring Cloud Gateway 文档', url: 'https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/' },
          { name: 'Kong Gateway', url: 'https://docs.konghq.com/' }
        ]
      },
      {
        name: '架构模式',
        description: 'Monolith、Microservices、SOA、Serverless、Service Mesh',
      }
    ]
  },
  {
    title: '容器与云原生',
    description: '现代化部署与运维',
    topics: [
      {
        name: 'Docker',
        description: '镜像构建、容器管理、Dockerfile、Docker Compose、多阶段构建',
        resources: [
          { name: 'Docker 官方文档', url: 'https://docs.docker.com/' },
          { name: 'Docker 快速开始', url: 'https://docs.docker.com/get-started/' }
        ]
      },
      {
        name: 'Kubernetes',
        description: 'Pod、Service、Deployment、ConfigMap、Ingress、StatefulSet',
        resources: [
          { name: 'Kubernetes 官方文档', url: 'https://kubernetes.io/zh-cn/docs/home/' },
          { name: 'Kubernetes 教程', url: 'https://kubernetes.io/zh-cn/docs/tutorials/' }
        ]
      },
      {
        name: 'Helm',
        description: 'Kubernetes 包管理器、Chart、模板',
        resources: [
          { name: 'Helm 文档', url: 'https://helm.sh/docs/' }
        ]
      },
      {
        name: 'Istio',
        description: 'Service Mesh、流量管理、可观测性、安全',
        resources: [
          { name: 'Istio 官方文档', url: 'https://istio.io/latest/docs/' }
        ]
      }
    ]
  },
  {
    title: 'CI/CD',
    description: '持续集成与部署',
    topics: [
      {
        name: 'Jenkins',
        description: 'Pipeline、插件系统、自动化构建部署',
        resources: [
          { name: 'Jenkins 官方文档', url: 'https://www.jenkins.io/doc/' }
        ]
      },
      {
        name: 'GitLab CI/CD',
        description: '.gitlab-ci.yml、Runner、Pipeline',
        resources: [
          { name: 'GitLab CI/CD 文档', url: 'https://docs.gitlab.com/ee/ci/' }
        ]
      },
      {
        name: 'GitHub Actions',
        description: 'Workflow、Action、自动化',
        resources: [
          { name: 'GitHub Actions 文档', url: 'https://docs.github.com/actions' }
        ]
      },
      {
        name: 'Tekton',
        description: 'Kubernetes 原生 CI/CD',
        resources: [
          { name: 'Tekton 文档', url: 'https://tekton.dev/docs/' }
        ]
      }
    ]
  },
  {
    title: '可观测性',
    description: '监控、日志与链路追踪',
    topics: [
      {
        name: 'Prometheus',
        description: '指标采集、时序数据库、PromQL、告警',
        resources: [
          { name: 'Prometheus 官方文档', url: 'https://prometheus.io/docs/introduction/overview/' }
        ]
      },
      {
        name: 'Grafana',
        description: '数据可视化、Dashboard、告警',
        resources: [
          { name: 'Grafana 文档', url: 'https://grafana.com/docs/' }
        ]
      },
      {
        name: 'ELK Stack',
        description: 'Elasticsearch、Logstash、Kibana 日志分析',
        resources: [
          { name: 'Elastic Stack 文档', url: 'https://www.elastic.co/guide/index.html' }
        ]
      },
      {
        name: 'SkyWalking',
        description: 'APM 系统、分布式追踪、性能分析',
        resources: [
          { name: 'SkyWalking 文档', url: 'https://skywalking.apache.org/docs/' }
        ]
      },
      {
        name: 'Zipkin / Jaeger',
        description: '分布式链路追踪',
        resources: [
          { name: 'Zipkin 文档', url: 'https://zipkin.io/' },
          { name: 'Jaeger 文档', url: 'https://www.jaegertracing.io/docs/' }
        ]
      },
      {
        name: 'Micrometer',
        description: 'Java 应用指标门面、集成多种监控系统',
        resources: [
          { name: 'Micrometer 文档', url: 'https://micrometer.io/docs' }
        ]
      }
    ]
  },
  {
    title: 'Web 安全',
    description: '安全最佳实践',
    topics: [
      {
        name: 'HTTPS / TLS',
        description: 'SSL/TLS 协议、证书、加密通信',
      },
      {
        name: '哈希算法',
        description: 'MD5（不推荐）、SHA-256、bcrypt、scrypt、Argon2',
      },
      {
        name: 'OWASP Top 10',
        description: 'SQL 注入、XSS、CSRF、安全配置错误',
        resources: [
          { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' }
        ]
      },
      {
        name: 'CORS',
        description: '跨域资源共享、预检请求',
        resources: [
          { name: 'CORS 详解', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS' }
        ]
      },
      {
        name: 'CSP',
        description: '内容安全策略、XSS 防护',
      },
      {
        name: 'API 安全',
        description: '速率限制、输入验证、HTTPS Only、安全头',
      }
    ]
  },
  {
    title: '数据库进阶',
    description: '深入数据库技术',
    topics: [
      {
        name: '数据库索引',
        description: 'B-Tree、Hash、全文索引、索引优化',
      },
      {
        name: '事务与 ACID',
        description: '事务隔离级别、MVCC、死锁',
      },
      {
        name: 'ORM 框架',
        description: 'Hibernate、MyBatis、N+1 问题',
      },
      {
        name: '数据库规范化',
        description: '1NF、2NF、3NF、BCNF、反规范化',
      },
      {
        name: '故障模式',
        description: '主从延迟、脑裂、数据丢失',
      },
      {
        name: '性能分析',
        description: 'Explain、慢查询日志、索引优化',
      },
      {
        name: '数据复制',
        description: '主从复制、双主复制、多主复制',
      },
      {
        name: '分库分表',
        description: '垂直拆分、水平拆分、Sharding 策略',
      },
      {
        name: 'CAP 定理',
        description: '一致性、可用性、分区容错性',
      }
    ]
  },
  {
    title: '实时数据',
    description: '实时通信技术',
    topics: [
      {
        name: 'WebSocket',
        description: '全双工通信、消息推送',
        resources: [
          { name: 'WebSocket 教程', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API' }
        ]
      },
      {
        name: 'Server-Sent Events',
        description: '服务器推送事件、单向通信',
      },
      {
        name: 'Long Polling / Short Polling',
        description: '长轮询、短轮询',
      }
    ]
  },
  {
    title: '系统设计与架构',
    description: '架构模式与设计原则',
    topics: [
      {
        name: '设计模式',
        description: '23种设计模式、创建型、结构型、行为型',
        resources: [
          { name: '设计模式：可复用面向对象软件的基础', url: 'https://book.douban.com/subject/1052241/' },
          { name: 'Refactoring Guru', url: 'https://refactoringguru.cn/design-patterns' }
        ]
      },
      {
        name: 'DDD 领域驱动设计',
        description: '聚合根、实体、值对象、领域事件、限界上下文',
        resources: [
          { name: '领域驱动设计', url: 'https://book.douban.com/subject/26819666/' }
        ]
      },
      {
        name: '系统设计原则',
        description: 'SOLID、高内聚低耦合、单一职责',
      },
      {
        name: '架构模式',
        description: '分层架构、六边形架构、CQRS、Event Sourcing',
      },
      {
        name: '扩展性设计',
        description: '负载均衡、数据库扩展、缓存、CDN',
      }
    ]
  },
  {
    title: '性能优化',
    description: '降级策略与高并发',
    topics: [
      {
        name: 'JVM 调优',
        description: '堆内存配置、GC 调优、JVM 参数',
        resources: [
          { name: 'JVM 调优指南', url: 'https://docs.oracle.com/en/java/javase/17/gctuning/' }
        ]
      },
      {
        name: 'SQL 优化',
        description: '索引优化、查询重写、Explain 分析',
      },
      {
        name: '优雅降级',
        description: 'Graceful Degradation、服务降级',
      },
      {
        name: '限流',
        description: 'Token Bucket、Leaky Bucket、固定窗口、滑动窗口',
      },
      {
        name: '熔断',
        description: 'Circuit Breaker 模式、半开状态',
      },
      {
        name: '背压',
        description: 'Backpressure、反应式流',
      },
      {
        name: '负载转移',
        description: 'Load Shifting、削峰填谷',
      },
      {
        name: '分布式锁',
        description: 'Redis 分布式锁、Redisson、ZooKeeper',
        resources: [
          { name: 'Redisson 文档', url: 'https://github.com/redisson/redisson/wiki' }
        ]
      }
    ]
  },
  {
    title: '代码质量',
    description: '代码规范与最佳实践',
    topics: [
      {
        name: '代码规范',
        description: 'Google Java Style、阿里巴巴 Java 开发手册',
        resources: [
          { name: 'Google Java Style Guide', url: 'https://google.github.io/styleguide/javaguide.html' },
          { name: '阿里巴巴 Java 开发手册', url: 'https://github.com/alibaba/p3c' }
        ]
      },
      {
        name: '静态代码分析',
        description: 'SonarQube、Checkstyle、PMD、SpotBugs',
        resources: [
          { name: 'SonarQube 文档', url: 'https://docs.sonarqube.org/' }
        ]
      },
      {
        name: '代码审查',
        description: 'Code Review 最佳实践',
      },
      {
        name: '重构',
        description: '代码重构技巧、技术债务管理',
        resources: [
          { name: 'Refactoring', url: 'https://book.douban.com/subject/30468597/' }
        ]
      }
    ]
  },
  {
    title: '持续学习',
    description: '保持技术敏锐度',
    topics: [
      {
        name: '开源贡献',
        description: '参与开源项目、提交 PR、Issue',
      },
      {
        name: '技术社区',
        description: 'Stack Overflow、GitHub、掘金、InfoQ',
      },
      {
        name: '技术博客',
        description: '撰写技术博客、总结经验',
      },
      {
        name: '经典书籍',
        description: 'Effective Java、Clean Code、重构、设计模式',
        resources: [
          { name: 'Effective Java 中文版', url: 'https://book.douban.com/subject/30412517/' },
          { name: 'Clean Code', url: 'https://book.douban.com/subject/4199741/' }
        ]
      }
    ]
  }
];
</script>

<Roadmap :stages="roadmapData" />

