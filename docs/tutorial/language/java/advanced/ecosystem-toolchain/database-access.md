---
title: 数据库访问
description: 本章将引导你逐步掌握Java中常用的数据库访问技术，包括JDBC、连接池技术（以HikariCP为代表）、以及主流ORM框架JPA/Hibernate和MyBatis。从基础知识到实战技巧，帮助你在项目中高效稳定地操作数据库。
order: 79
keywords: [JDBC, HikariCP, JPA, Hibernate, MyBatis, 数据库访问, Java]
---

# 数据库访问

## 前置知识
> 在阅读本章前，你需要了解：
> - Java 基础语法和面向对象编程
> - SQL 语言的基本操作（SELECT、INSERT、UPDATE、DELETE）
> - Java 项目构建基础（IDE使用、依赖管理如Maven/Gradle）

## 为什么需要数据库访问？

想象有一天，你的Java应用需要保存用户数据，或者读取库存信息。你会发现，数据不能永远 “活”在程序的变量里，它们需要一个可靠、安全、持久的“仓库”——数据库。于是，如何让Java程序“听懂”数据库的语言，成为你必须面对的课题。

数据库访问有了多种层次的方法：最底层的JDBC提供了和数据库“直接对话”的能力；连接池帮助我们提升访问效率；ORM框架像JPA或MyBatis则让数据操作变得像操纵普通Java对象一样顺畅。不理解这些，你的代码可能臃肿难维护，效率低下，甚至在高并发场景下崩溃。

本章，我们带你一步步揭开这些乐高积木，组装出高效、清晰、易维护的数据库访问代码。

---

## 第一节：JDBC - 认识数据库访问的基石

### 什么是JDBC？

用简单的比喻来说，JDBC就像是Java程序与数据库之间的“翻译官”。它负责把Java的命令转换成数据库能理解的SQL，并把结果翻译回Java对象。

### 为什么需要JDBC？

虽然现在有很多高级框架，但JDBC是Java访问数据库的根基。了解它，有助于你明白数据库交互的底层细节，为后面学习ORM框架打下坚实基础。

### 基础用法

下面是一个最简单的示范，运行前请确保你有本地/远程数据库，比如MySQL，并根据实际情况修改连接信息。

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SimpleJDBCExample {
    public static void main(String[] args) {
        // 1. 数据库连接参数
        String url = "jdbc:mysql://localhost:3306/testdb?useSSL=false";
        String username = "root";
        String password = "password";

        // 2. 注册驱动和建立连接
        try (Connection connection = DriverManager.getConnection(url, username, password);
             Statement statement = connection.createStatement()) {

            // 3. 执行SQL查询
            String sql = "SELECT id, name FROM users";
            ResultSet rs = statement.executeQuery(sql);

            // 4. 处理结果集
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println("User ID: " + id + ", Name: " + name);
            }
            rs.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

这段代码做了什么？  
1. 通过`DriverManager.getConnection()`连接数据库。  
2. 使用`Statement`发送SQL语句。  
3. 循环遍历`ResultSet`，取出查询结果打印。  
4. 使用 try-with-resources 自动关闭连接，防止资源泄漏。

---

## 第二节：连接池——让数据库连接更高效

### 连接池为何重要？

你可能注意到上面例子中，每次访问数据库都要新建连接，这很浪费资源。数据库连接本身的建立和断开成本很高，频繁创建和销毁会拖慢程序。

这就好比你去餐厅叫服务员，每次都得从门外叫一遍，效率低下。连接池则像是提前安排好了服务员队伍，瞬间响应你的叫唤。

### 介绍HikariCP

HikariCP是目前性能非常优异的Java数据库连接池。它轻量、快速且配置简单。

### HikariCP 简单示范

```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class HikariCPExample {
    public static void main(String[] args) {
        // 1. HikariCP配置
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/testdb?useSSL=false");
        config.setUsername("root");
        config.setPassword("password");
        config.setMaximumPoolSize(10); // 最大连接数

        // 2. 创建数据源
        try (HikariDataSource dataSource = new HikariDataSource(config)) {
            // 3. 获取连接
            try (Connection conn = dataSource.getConnection();
                 PreparedStatement stmt = conn.prepareStatement("SELECT id, name FROM users");
                 ResultSet rs = stmt.executeQuery()) {

                // 4. 处理结果集
                while (rs.next()) {
                    System.out.println("User ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

这段代码做了什么？  
1. 配置Hikari连接池的参数，如数据库地址、用户名密码、最大连接数。  
2. 创建Hikari数据源对象。  
3. 从池中获取连接，执行SQL。  
4. 使用try-with-resources保证所有资源被正确关闭。

---

## 第三节：ORM框架入门 — JPA和Hibernate

### 什么是ORM？

ORM（对象关系映射）就像是为你盖了座“桥”，让Java对象和数据库中的表能直接对话。你可以用Java对象操作数据库，无需写繁琐的SQL。

### 为什么选JPA+Hibernate？

JPA是Java官方的规范，而Hibernate是最流行的JPA实现。它们让数据库操作更优雅，也方便维护和扩展。

### 基础示范

以下示例演示如何使用JPA定义实体类，并执行简单查询。请确认项目已加入相关依赖，如Hibernate和数据库驱动。

```java
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Id;
import jakarta.persistence.Persistence;
import jakarta.persistence.TypedQuery;

import java.util.List;

@Entity
class User {
    @Id
    private int id;
    private String name;

    // 无参构造器是JPA需要的
    public User() {}

    public int getId() { return id; }
    public String getName() { return name; }
    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }
}

public class JPADemo {
    public static void main(String[] args) {
        // 1. 创建EntityManagerFactory，连接名与persistence.xml中配置对应
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-persistence-unit");
        EntityManager em = emf.createEntityManager();

        // 2. 开启事务
        em.getTransaction().begin();

        // 3. 创建User实体，保存到数据库
        User user = new User();
        user.setId(1);
        user.setName("Alice");
        em.persist(user);

        // 4. 提交事务
        em.getTransaction().commit();

        // 5. 查询所有User
        TypedQuery<User> query = em.createQuery("SELECT u FROM User u", User.class);
        List<User> users = query.getResultList();

        for (User u : users) {
            System.out.println("User ID: " + u.getId() + ", Name: " + u.getName());
        }

        // 6. 关闭
        em.close();
        emf.close();
    }
}
```

这段代码做了什么？  
1. 定义了一个`User`实体类，对应数据库表。  
2. 通过`EntityManager`管理实体的生命周期，包括新增和查询。  
3. 显示了事务的开启和提交，JPA需要通过事务确保数据一致性。

---

## 第四节：MyBatis — 代码与SQL的精致结合

### MyBatis是什么？

如果你希望写自己的SQL，但又想少写重复样板代码，MyBatis就是你的好伙伴。它介于纯SQL和全自动ORM之间，帮助你管理复杂查询同时保留SQL灵活性。

### 短小精悍示例

```java
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.Reader;
import java.util.List;

public interface UserMapper {
    @Select("SELECT id, name FROM users")
    List<User> getAllUsers();
}

class User {
    private int id;
    private String name;

    //Getter 和 Setter
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

public class MyBatisDemo {
    public static void main(String[] args) throws Exception {
        // 1. 加载MyBatis配置文件
        try (Reader reader = Resources.getResourceAsReader("mybatis-config.xml")) {
            SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(reader);
            try (SqlSession session = factory.openSession()) {
                UserMapper mapper = session.getMapper(UserMapper.class);
                List<User> users = mapper.getAllUsers();
                for (User u : users) {
                    System.out.println("User ID: " + u.getId() + ", Name: " + u.getName());
                }
            }
        }
    }
}
```

这段代码做了什么？  
1. 声明`UserMapper`接口，并使用注解方式定义SQL。  
2. 通过`SqlSessionFactory`创建`SqlSession`，并执行查询。  
3. 映射结果集到Java对象。

---

:::warning ⚠️ 常见陷阱

- **忘记关闭数据库连接**：JDBC中忘记关闭连接会导致连接泄漏，严重影响程序性能。
- **连接池配置不合理**：过小的连接池容量会导致性能瓶颈，过大则浪费资源，建议根据应用负载合理设置。
- **事务不正确使用**：尤其是ORM框架，未正确开启或提交事务，会导致数据不一致。
- **JPA实体缺少无参构造器**：这是框架反射实例化实体的硬性要求。
- **MyBatis映射文件或注解配置错误**：导致SQL解析错误或映射失败，调试时信息要细致检查。

:::

:::tip 💡 实战建议

- 优先使用连接池（如HikariCP）管理数据库连接，避免频繁创建销毁。
- 在多线程、高并发场景下，合理配置连接池参数，避免连接耗尽。
- ORM适合快速开发和复杂业务对象管理，但对性能敏感或复杂SQL可选择MyBatis。
- 配合Spring Framework进行数据库访问，可以减少大量样板代码，提升开发效率。
- 定期监控数据库连接使用率和慢查询，及时调整配置和优化SQL。

:::

## 小结

- JDBC是Java与数据库交互的基础，了解它能帮你掌控底层细节。  
- 使用连接池（如HikariCP）能显著提升数据库访问效率和应用稳定性。  
- JPA/Hibernate让数据库操作更加面向对象，减少SQL侵入，提高开发速度。  
- MyBatis则兼顾了SQL灵活性和代码可维护性，适合复杂查询。  
- 切记关注事务管理和资源关闭，避免常见的性能和数据一致性问题。

---

## 相关阅读与延伸思考

- 如何根据应用场景选择合适的数据库访问技术？  
- 连接池的监控指标和调优技巧有哪些？  
- ORM框架如何批量操作提高性能？  
- MyBatis XML配置和注解方式的优缺点对比。  
- Spring Data JPA和MyBatis Spring整合的深入实践。

---

通过本章的学习，我希望你能理解数据库访问不仅仅是“写SQL”，更是一门如何有效管理资源、保证数据一致性与性能的艺术。  
接下来，别忘了动手实践，代码中摸索，才能真正掌握这些知识。加油！