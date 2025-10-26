---
title: 数据库应用项目  
description: 本章将带你开发一个完整的Java数据库CRUD应用，深入理解事务处理和数据持久化的核心概念。  
order: 95  
keywords: [Java, 数据库, CRUD, 事务处理, 数据持久化]  
---

# 数据库应用项目

## 前置知识  
> 在阅读本章前，你需要了解Java基础语法、面向对象编程基础和JDBC的简单使用。

## 为什么需要数据库应用项目？

我们经常遇到这样的需求：应用需要存储、查询和更新数据，并保证数据的一致性。比如，一个用户管理系统，你想添加用户、更新用户信息、查询用户列表，甚至删除用户。面对这些需求，写一套稳定、高效且易维护的数据库操作逻辑非常关键。

这就是我们要重点讲解的数据库应用项目：如何用Java写完整的CRUD操作（增删改查），如何让你的操作支持事务，确保数据安全，最后讲讲数据持久化的基本模式。学习完本章，不仅你能自己动手写基本的数据库程序，还能理解在复杂场景中把控数据完整性的秘诀。

## 具体章节

### 一、建立最基础的CRUD操作框架

先从最简单的增删改查动作开始。我们用JDBC连接简单的数据库（以H2内存数据库为例，这样代码你复制就能运行，不用配置外部数据库）。

```java
import java.sql.*;

public class SimpleCRUD {

    // 建立数据库连接
    private static Connection getConnection() throws SQLException {
        // H2内存数据库，JDBC URL带有自动创建表的参数
        String url = "jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1";
        return DriverManager.getConnection(url, "sa", "");
    }

    // 创建用户表
    private static void createTable(Connection conn) throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS users (" +
                     "id INT AUTO_INCREMENT PRIMARY KEY," +
                     "username VARCHAR(100) NOT NULL," +
                     "email VARCHAR(100) NOT NULL)";
        try (Statement stmt = conn.createStatement()) {
            stmt.execute(sql);
        }
    }

    // 插入新用户
    public static void insertUser(Connection conn, String username, String email) throws SQLException {
        String insertSql = "INSERT INTO users (username, email) VALUES (?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(insertSql)) {
            pstmt.setString(1, username);
            pstmt.setString(2, email);
            pstmt.executeUpdate();
        }
    }

    // 查询所有用户并打印
    public static void queryUsers(Connection conn) throws SQLException {
        String querySql = "SELECT id, username, email FROM users";
        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(querySql)) {
            System.out.println("用户列表：");
            while (rs.next()) {
                int id = rs.getInt("id");
                String username = rs.getString("username");
                String email = rs.getString("email");
                System.out.printf("ID: %d, 用户名: %s, 邮箱: %s%n", id, username, email);
            }
        }
    }

    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            createTable(conn);

            // 插入几个用户
            insertUser(conn, "Alice", "alice@example.com");
            insertUser(conn, "Bob", "bob@example.com");

            // 查询展示
            queryUsers(conn);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么**：  
1. 通过JDBC建立了一个内存数据库连接，使用H2轻量数据库。  
2. 创建了一个`users`表，如果不存在则新建。  
3. 定义了插入新用户和查询所有用户的两个方法。  
4. 在`main`方法中插入了两个用户并打印全部用户。  
5. 所有资源均用`try-with-resources`安全关闭，避免内存泄漏。

这就像你先搭了个“数据库小菜市场”，有了摊位（表），开始把东西（数据）放进去和取出来。这是我们后续构建复杂功能的基础。

---

### 二、引入更新和删除操作，完成完整CRUD

光插入和查询不够，接下来我们添加更新和删除操作。你可能觉得重复代码多，但这恰恰是CRUD操作的典型格式：针对不同需求写不同的Data Access Object（DAO）方法。

```java
import java.sql.*;

public class CompleteCRUD {

    private static Connection getConnection() throws SQLException {
        String url = "jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1";
        return DriverManager.getConnection(url, "sa", "");
    }

    private static void createTable(Connection conn) throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS users (" +
                     "id INT AUTO_INCREMENT PRIMARY KEY," +
                     "username VARCHAR(100) NOT NULL," +
                     "email VARCHAR(100) NOT NULL)";
        try (Statement stmt = conn.createStatement()) {
            stmt.execute(sql);
        }
    }

    public static void insertUser(Connection conn, String username, String email) throws SQLException {
        String insertSql = "INSERT INTO users (username, email) VALUES (?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(insertSql)) {
            pstmt.setString(1, username);
            pstmt.setString(2, email);
            pstmt.executeUpdate();
        }
    }

    public static void queryUsers(Connection conn) throws SQLException {
        String querySql = "SELECT id, username, email FROM users";
        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(querySql)) {
            System.out.println("用户列表：");
            while (rs.next()) {
                int id = rs.getInt("id");
                String username = rs.getString("username");
                String email = rs.getString("email");
                System.out.printf("ID: %d, 用户名: %s, 邮箱: %s%n", id, username, email);
            }
        }
    }

    // 更新用户邮箱，根据ID更新
    public static void updateUserEmail(Connection conn, int id, String newEmail) throws SQLException {
        String updateSql = "UPDATE users SET email = ? WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(updateSql)) {
            pstmt.setString(1, newEmail);
            pstmt.setInt(2, id);
            int affectedRows = pstmt.executeUpdate();
            System.out.println("更新了 " + affectedRows + " 条记录。");
        }
    }

    // 删除用户，根据ID删除
    public static void deleteUser(Connection conn, int id) throws SQLException {
        String deleteSql = "DELETE FROM users WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(deleteSql)) {
            pstmt.setInt(1, id);
            int affectedRows = pstmt.executeUpdate();
            System.out.println("删除了 " + affectedRows + " 条记录。");
        }
    }

    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            createTable(conn);

            insertUser(conn, "Alice", "alice@example.com");
            insertUser(conn, "Bob", "bob@example.com");

            System.out.println("初始数据:");
            queryUsers(conn);

            System.out.println("\n更新 Bob 的邮箱：");
            updateUserEmail(conn, 2, "newbob@example.com");
            queryUsers(conn);

            System.out.println("\n删除用户 Alice：");
            deleteUser(conn, 1);
            queryUsers(conn);

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么**：  
1. 在上一段基础上新增了`updateUserEmail`和`deleteUser`两个方法。  
2. 修改和删除都是基于用户的`id`字段完成的。  
3. 你会发现在操作数据库时，核心思路总是准备SQL语句，绑定参数，然后执行。  
4. 通过打印影响的行数，我们也能直观反馈操作是否成功。

这就好比市场上更新商品价格或把坏的商品清理出货架，数据库操作一样需要针对特定“摊位”进行修改和维护。

---

### 三、事务处理：保证数据操作的“原子性”

到现在，你可能注意到如果要一次执行多条涉及数据变动的操作，就需要保障它们要么都成功，要么都失败。否则，一半操作成功一半失败，会让数据处于脏乱状态。

事务就是解决这个问题的利器。我们用一个示例演示如何开启事务，进行操作，出错时回滚。

```java
import java.sql.*;

public class TransactionDemo {

    private static Connection getConnection() throws SQLException {
        String url = "jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1";
        return DriverManager.getConnection(url, "sa", "");
    }

    private static void createTable(Connection conn) throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS accounts (" +
                     "id INT AUTO_INCREMENT PRIMARY KEY," +
                     "owner VARCHAR(100) NOT NULL," +
                     "balance DECIMAL(15, 2) NOT NULL)";
        try (Statement stmt = conn.createStatement()) {
            stmt.execute(sql);
        }
    }

    // 初始化账户
    private static void insertAccount(Connection conn, String owner, double balance) throws SQLException {
        String sql = "INSERT INTO accounts (owner, balance) VALUES (?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, owner);
            pstmt.setDouble(2, balance);
            pstmt.executeUpdate();
        }
    }

    // 打印所有账户余额
    private static void printAccounts(Connection conn) throws SQLException {
        String sql = "SELECT id, owner, balance FROM accounts";
        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            System.out.println("账户信息：");
            while (rs.next()) {
                System.out.printf("ID: %d, 拥有者: %s, 余额: %.2f%n", 
                                  rs.getInt("id"), rs.getString("owner"), rs.getDouble("balance"));
            }
        }
    }

    // 转账操作，涉及事务控制
    public static void transferMoney(Connection conn, int fromId, int toId, double amount) throws SQLException {
        try {
            conn.setAutoCommit(false);  // 关闭自动提交，开启事务

            // 扣钱
            String deductSql = "UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?";
            try (PreparedStatement pstmt = conn.prepareStatement(deductSql)) {
                pstmt.setDouble(1, amount);
                pstmt.setInt(2, fromId);
                pstmt.setDouble(3, amount);
                int updatedRows = pstmt.executeUpdate();
                if (updatedRows == 0) {
                    throw new SQLException("余额不足，无法转账");
                }
            }

            // 转入钱
            String addSql = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(addSql)) {
                pstmt.setDouble(1, amount);
                pstmt.setInt(2, toId);
                pstmt.executeUpdate();
            }

            conn.commit();  // 提交事务
            System.out.println("转账成功：" + amount + " 从账户 " + fromId + " 到账户 " + toId);

        } catch (SQLException e) {
            conn.rollback();  // 出错回滚事务
            System.out.println("转账失败，事务回滚：" + e.getMessage());
        } finally {
            conn.setAutoCommit(true);  // 恢复自动提交
        }
    }

    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            createTable(conn);
            insertAccount(conn, "Alice", 1000.0);
            insertAccount(conn, "Bob", 500.0);

            System.out.println("转账前状态：");
            printAccounts(conn);

            // 成功转账示例
            transferMoney(conn, 1, 2, 300.0);
            printAccounts(conn);

            // 失败转账示例（余额不足）
            transferMoney(conn, 2, 1, 1000.0);
            printAccounts(conn);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么**：  
1. 创建了一个简单的`accounts`账户表，并插入初始数据。  
2. 定义了`transferMoney`方法，封装了转账的两步操作：扣款和加款。  
3. 使用JDBC的事务控制，关闭自动提交模式，在操作中如果遇到错误抛异常则回滚。  
4. 演示了转账成功和因余额不足导致事务回滚的情况。  
5. 让我们看到，事务能保持数据的一致性，避免操作半途中数据异常。

想象一下你在银行柜台做转账，一笔操作中钱是从一个账户扣，再加到另一个账户，中间不能出错、不能只完成一部分，这就是事务想保证的“原子性”和“一致性”。

---

:::warning ⚠️ 常见陷阱  
**忘记关闭自动提交导致事务无效**  
许多初学者直接使用JDBC默认的自动提交模式，误以为自己写的事务代码能有效回滚。其实，自动提交开启时，每条SQL执行后都会自动提交，`rollback()`失去了意义。  
解决办法：  
- 记得调用`conn.setAutoCommit(false)`开启事务手动管理。  
- 代码结束后务必恢复自动提交状态，避免影响后续操作。  

**不正确的异常处理导致数据库状态不一致**  
捕获异常时如果不调用`rollback()`，发生错误后数据库可能被提交了部分修改，留下“脏数据”。  
建议：  
- 在catch块中，确保执行`conn.rollback()`，并处理异常信息。  
- 使用finally块恢复连接状态。  
:::

---

## 对比总结

| 方案         | 优点                           | 缺点                                         | 适用场景                     |
|------------|------------------------------|--------------------------------------------|--------------------------|
| 简单JDBC CRUD | 直接控制SQL，灵活度高               | 代码重复多，手动管理事务复杂                        | 小项目，演示教学，快速原型               |
| 集成框架（如MyBatis, Hibernate） | 简化CRUD操作，支持自动映射和复杂查询             | 需要学习框架配置，调试复杂，性能有时牺牲             | 企业级项目，业务复杂，维护成本优化          |
| Spring事务管理  | 简化事务控制，注解或AOP支持                    | 需要依赖Spring生态，配置门槛                       | 现代Java应用，微服务架构，复杂事务场景      |

本章重点演示的是最基础的JDBC CRUD和事务管理逻辑，帮助你建立数据访问的核心认知。后续你也可以用这些基础技能来理解和运用更高级的ORM框架。

---

:::tip 💡 实战建议  
1. **避免硬编码SQL与表结构**，用常量或配置文件管理，提高维护性。  
2. **合理利用事务边界**，不要把所有操作放入一个事务，避免性能瓶颈。  
3. **尽量使用参数化SQL**，防止SQL注入安全风险。  
4. **数据库连接要使用连接池**，避免频繁开启关闭连接带来的性能损耗。  
5. **捕获异常时做好日志记录**，方便后续排查问题。  
6. 你可以尝试将CRUD操作封装成DAO层接口，实现代码复用和解耦。  
:::

---

## 延伸思考

- 如果需要支持并发大量访问，你的事务隔离级别要如何设计？JDBC默认的隔离级别满足需求吗？  
- 如何设计一个通用的DAO层，避免每张表重复写CRUD代码？你会考虑用什么设计模式？  
- 在大规模系统中，数据持久化层如何与缓存结合，改善响应速度？  

---

## 小结

- 数据库CRUD操作是大多数应用的基础，掌握JDBC的基本用法很重要。  
- 事务处理保证数据完整和一致性，是数据库编程的核心。  
- 实践中要注意事务边界和异常回滚，避免数据不一致。  
- 基础知识打牢后，可以平滑过渡到框架和更复杂的持久化方案。

---

如果你愿意，我们下一章可以再一起探讨如何使用JPA或MyBatis等框架，让数据库操作更优雅、更易维护。你也可以试着用这章的代码练习一下，动手改写查询条件或尝试新功能尤其有效。数据库的世界很丰富，慢慢来，我们一步步把它搞懂！