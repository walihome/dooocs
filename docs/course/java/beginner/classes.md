---
title: 类、属性、方法
category: Java
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 类、属性、方法

你有没有想过,为什么要学习"类"这个概念?想象一下,如果你要管理一个班级的学生信息,每个学生都有姓名、年龄、成绩等信息。如果没有"类",你可能需要创建几十个变量:`student1Name`, `student1Age`, `student2Name`...这样很快就会乱套。而"类"就像一个模板,帮你把相关的信息和操作组织在一起。

## 💡 什么是类(Class)

### 用生活中的例子理解

把**类(Class)**想象成一张"制作蛋糕的配方":
- 📋 配方上写着需要哪些材料(面粉、鸡蛋、糖...)
- 📋 配方上还写着制作步骤(搅拌、烘烤...)
- 🎂 按照配方,你可以做出一个又一个真实的蛋糕

在 Java 中:
- **类(Class)** = 配方
- **对象(Object)** = 按配方做出的真实蛋糕
- **属性(Field/Attribute)** = 配方中的材料清单
- **方法(Method)** = 配方中的制作步骤

::: tip 为什么叫"类"?
"类"代表一**类**事物,比如"学生"这一类人、"汽车"这一类交通工具。所有学生都有共同的特征(姓名、年龄),也有共同的行为(学习、考试)。
:::

## 📝 定义你的第一个类

### 创建 Student 类

让我们创建一个表示"学生"的类。首先创建一个新文件 `Student.java`:

```java
// 定义一个学生类 define a Student class
public class Student {
    // 这里暂时是空的,我们马上会添加内容
    // this is empty for now, we'll add content soon
}
```

**代码解析**:
- `public` - **访问修饰符(Access Modifier)**,表示这个类可以被其他代码访问
- `class` - **关键字(Keyword)**,告诉 Java "我要定义一个类"
- `Student` - **类名(Class Name)**,必须与文件名完全一致
- `{ }` - **类体(Class Body)**,所有属性和方法都写在这对大括号里

::: warning 文件名规则
类名必须与文件名一致!如果类名是 `Student`,文件名必须是 `Student.java`。Java 区分大小写,`student.java` 是不行的。
:::

## 💡 什么是属性(Field)

**属性(Field)**也叫**字段(Field)**或**成员变量(Member Variable)**,它们是类中存储数据的容器。

回到学生的例子,每个学生都有:
- 👤 姓名
- 🎂 年龄  
- 📚 成绩

这些就是学生类的属性。

### 定义类的属性

```java
public class Student {
    // 定义学生的属性 define student fields
    String name;        // 姓名 name
    int age;           // 年龄 age
    double score;      // 成绩 score
}
```

**代码解析**:
- `String` - **数据类型(Data Type)**,表示文本类型
- `int` - 整数类型(比如 18、20)
- `double` - 小数类型(比如 95.5)
- `name`, `age`, `score` - **变量名(Variable Name)**,用来标识这个属性

::: tip 命名规范
- 类名用**大驼峰命名法(PascalCase)**:`Student`, `BankAccount`
- 属性和方法用**小驼峰命名法(camelCase)**:`name`, `studentName`, `calculateScore`
:::

## 🔒 属性的访问等级(Access Level)

你有没有想过,为什么有些信息需要保密,有些可以公开?比如你的姓名可以告诉别人,但银行卡密码就不能随便给别人看。

Java 提供了**访问修饰符(Access Modifier)**来控制属性的可见性:

| 修饰符 | 中文 | 可见范围 | 使用场景 |
|--------|------|----------|----------|
| `public` | 公开的 | 任何地方都能访问 | 需要外部访问的属性(较少用) |
| `private` | 私有的 | 只能在本类内部访问 | **推荐**,保护数据安全 |
| `protected` | 受保护的 | 本类、子类、同包可访问 | 继承场景(后续学习) |
| 不写(default) | 默认的 | 同一个包内可访问 | 不推荐,容易混淆 |

### 使用 private 保护属性

```java
public class Student {
    // 使用 private 保护学生信息 use private to protect student data
    private String name;
    private int age;
    private double score;
}
```

::: warning 为什么推荐使用 private?
如果属性是 `public`,任何人都能直接修改,可能导致数据错误。比如有人把年龄改成 -5 岁或 200 岁,这显然不合理。使用 `private` 后,只能通过特定方法修改,我们可以在方法中加入检查逻辑。
:::

## 💡 什么是方法(Method)

**方法(Method)**是类中定义的行为或操作,它告诉对象"能做什么"。

学生能做什么?
- 📖 学习
- ✍️ 考试
- 💬 自我介绍

这些动作就可以定义成方法。

### 方法的基本结构

```java
访问修饰符 返回值类型 方法名(参数列表) {
    // 方法体 method body
    // 执行的代码
}
```

### 创建一个自我介绍方法

```java
public class Student {
    private String name;
    private int age;
    private double score;
    
    // 自我介绍方法 self-introduction method
    public void introduce() {
        System.out.println("大家好,我叫 " + name);
        System.out.println("我今年 " + age + " 岁");
        System.out.println("我的成绩是 " + score + " 分");
    }
}
```

**代码解析**:
- `public` - 这个方法可以被外部调用
- `void` - **返回值类型(Return Type)**,`void` 表示不返回任何值
- `introduce` - 方法名,动词形式,表示"做什么"
- `()` - **参数列表(Parameter List)**,这里是空的,表示不需要参数
- `{ }` - 方法体,具体执行的代码

::: tip 方法命名规范
方法名应该是动词或动词短语,表达"做什么":
- ✅ `introduce()` - 介绍
- ✅ `calculateTotal()` - 计算总数
- ✅ `getAge()` - 获取年龄
- ❌ `student()` - 不清楚要做什么
:::

### 带参数的方法

如果我们需要从外部传入数据怎么办?使用**参数(Parameter)**:

```java
public class Student {
    private String name;
    private int age;
    private double score;
    
    // 设置姓名的方法 method to set name
    public void setName(String newName) {
        name = newName;  // 把传入的值赋给属性
    }
    
    // 设置年龄的方法 method to set age
    public void setAge(int newAge) {
        // 添加检查逻辑 add validation logic
        if (newAge > 0 && newAge < 150) {
            age = newAge;
        } else {
            System.out.println("年龄不合理!");
        }
    }
}
```

**代码解析**:
- `String newName` - **参数(Parameter)**,定义传入数据的类型和名称
- `newAge > 0 && newAge < 150` - 检查年龄是否合理
- 这就是为什么要用 `private` 保护属性,我们可以在方法中加入验证!

### 有返回值的方法

有些方法需要返回结果,比如获取学生信息:

```java
public class Student {
    private String name;
    private int age;
    private double score;
    
    // 获取姓名 get name
    public String getName() {
        return name;  // 返回姓名
    }
    
    // 获取年龄 get age
    public int getAge() {
        return age;
    }
    
    // 判断是否及格 check if passed
    public boolean isPassed() {
        return score >= 60;  // 返回 true 或 false
    }
}
```

**代码解析**:
- `String getName()` - 返回类型是 `String`,必须用 `return` 返回一个字符串
- `boolean isPassed()` - 返回类型是 `boolean`,返回 `true` 或 `false`
- `return` - **关键字(Keyword)**,把结果返回给调用者

::: warning return 的注意事项
- 有返回值的方法必须有 `return` 语句
- `return` 后面的值类型必须与方法定义的返回类型一致
- `return` 执行后,方法立即结束,后面的代码不会执行
:::

## 📝 完整示例:创建和使用学生类

现在把所有内容组合起来,创建一个完整的 `Student.java`:

```java
// Student.java
public class Student {
    // 属性定义 field definitions
    private String name;
    private int age;
    private double score;
    
    // 设置姓名 set name
    public void setName(String newName) {
        name = newName;
    }
    
    // 获取姓名 get name
    public String getName() {
        return name;
    }
    
    // 设置年龄 set age
    public void setAge(int newAge) {
        if (newAge > 0 && newAge < 150) {
            age = newAge;
        } else {
            System.out.println("年龄必须在 0-150 之间!");
        }
    }
    
    // 获取年龄 get age
    public int getAge() {
        return age;
    }
    
    // 设置成绩 set score
    public void setScore(double newScore) {
        if (newScore >= 0 && newScore <= 100) {
            score = newScore;
        } else {
            System.out.println("成绩必须在 0-100 之间!");
        }
    }
    
    // 获取成绩 get score
    public double getScore() {
        return score;
    }
    
    // 判断是否及格 check if passed
    public boolean isPassed() {
        return score >= 60;
    }
    
    // 自我介绍 self-introduction
    public void introduce() {
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age);
        System.out.println("成绩: " + score);
        System.out.println("是否及格: " + (isPassed() ? "是" : "否"));
    }
}
```

创建测试类 `StudentTest.java`:

```java
// StudentTest.java
public class StudentTest {
    public static void main(String[] args) {
        // 创建学生对象 create student object
        Student student1 = new Student();
        
        // 设置学生信息 set student information
        student1.setName("张三");
        student1.setAge(20);
        student1.setScore(85.5);
        
        // 调用自我介绍方法 call introduce method
        student1.introduce();
        
        System.out.println("---分隔线---");
        
        // 创建第二个学生 create second student
        Student student2 = new Student();
        student2.setName("李四");
        student2.setAge(19);
        student2.setScore(58.0);
        
        student2.introduce();
    }
}
```

## ✅ 验证方法

### 编译和运行

在命令行中执行:

```bash
# 编译两个文件 compile both files
javac Student.java StudentTest.java

# 运行测试类 run test class
java StudentTest
```

### 预期输出

```
姓名: 张三
年龄: 20
成绩: 85.5
是否及格: 是
---分隔线---
姓名: 李四
年龄: 19
成绩: 58.0
是否及格: 否
```

::: tip 验证成功的标志
- 没有编译错误
- 能看到两个学生的完整信息
- 及格状态正确显示
:::

## 💪 练习题

### 练习 1: 添加新属性

为 `Student` 类添加一个 `studentId`(学号)属性:
1. 类型是 `String`
2. 访问级别是 `private`
3. 创建对应的 `setStudentId()` 和 `getStudentId()` 方法
4. 在 `introduce()` 方法中也输出学号

### 练习 2: 创建计算方法

添加一个方法 `calculateGrade()`,根据分数返回等级:
- 90-100: "优秀"
- 80-89: "良好"
- 70-79: "中等"
- 60-69: "及格"
- 0-59: "不及格"

提示:使用 `if-else` 语句

```java
public String calculateGrade() {
    if (score >= 90) {
        return "优秀";
    } else if (score >= 80) {
        return "良好";
    }
    // 继续补充...
}
```

### 练习 3: 创建新类

创建一个 `Book`(书籍)类,包含:
- 属性: `title`(标题), `author`(作者), `price`(价格), `pages`(页数)
- 所有属性都是 `private`
- 为每个属性创建 setter 和 getter 方法
- 创建 `getInfo()` 方法,输出书籍的完整信息
- 创建 `isExpensive()` 方法,判断价格是否超过 50 元

## 📌 本章小结

### 关键概念

1. **类(Class)** 是对象的模板,定义了对象有什么属性和能做什么
2. **属性(Field)** 存储对象的数据,推荐使用 `private` 保护
3. **方法(Method)** 定义对象的行为,可以有参数和返回值
4. **访问修饰符(Access Modifier)** 控制属性和方法的可见性

### 访问修饰符对比

| 修饰符 | 同类 | 同包 | 子类 | 所有地方 |
|--------|------|------|------|----------|
| `private` | ✅ | ❌ | ❌ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

### 最佳实践

- ✅ 属性使用 `private`,通过方法访问(封装原则)
- ✅ 方法名使用动词,清晰表达意图
- ✅ 在 setter 方法中添加数据验证
- ✅ 类名与文件名保持一致
- ❌ 避免属性直接使用 `public`

::: tip 下一步
现在你已经掌握了类的基础,但你可能会疑惑:每次创建对象后都要手动调用一堆 setter 方法很麻烦,有没有更简单的方法?答案是有的!这就是**构造方法(Constructor)**,它可以在创建对象时就完成初始化。
:::