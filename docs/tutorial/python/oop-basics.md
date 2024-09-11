---
title: Python 面向对象(OOP)
order: 20
description: Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of objects
---


# Python面向对象(OOP)基础

[面向对象编程](https://en.wikipedia.org/wiki/Object-oriented_programming)

面向对象编程（OOP）是一种基于“对象”概念的编程范式，对象可以包含数据和代码。数据以字段的形式存在（通常称为属性或特性），代码以过程的形式存在（通常称为方法）。
  


## 封装

封装是面向对象编程的基本概念之一，有助于保护对象的数据和方法免受未经授权的访问和修改。这是一种实现数据抽象的方法，这意味着对象的实现细节对外界隐藏，只暴露必要的信息。

在 Python 中，可以通过使用访问修饰符来实现封装。访问修饰符是定义类中属性和方法可访问性的关键字。Python 中有三种访问修饰符：`public（公共）`、`private（私有）`和 `protected（受保护）`。然而，Python 没有像 Java 和 C++ 等其他编程语言那样明确定义访问修饰符的方法。相反，它使用下划线前缀的约定来表示访问级别。

在给定的代码示例中，类 MyClass 有两个属性， `_protected_var` 和 `__private_var`。`_protected_var` 通过使用单下划线前缀标记为受保护。这意味着该属性可以在类及其子类中访问，但不能在类外部访问。`__private_var` 通过使用双下划线前缀标记为私有。这意味着该属性只能在类内部访问，不能在类外部访问，甚至在其子类中也不能访问。

当我们创建 MyClass 类的对象时，可以使用对象名称和单下划线前缀访问 `_protected_var` 属性。然而，我们不能使用对象名称访问 `__private_var` 属性，因为它对外界隐藏。如果我们尝试访问 `__private_var` 属性，将会得到一个 `AttributeError`，如代码所示。

总之，封装是面向对象编程中的一个重要概念，有助于保护对象的实现细节。在 Python 中，我们可以通过使用访问修饰符和下划线前缀来表示访问级别来实现封装。

```python
# Define a class named MyClass
class MyClass:

    # Constructor method that initializes the class object
    def __init__(self):

        # Define a protected variable with an initial value of 10
        # The variable name starts with a single underscore, which indicates protected access
        self._protected_var = 10

        # Define a private variable with an initial value of 20
        # The variable name starts with two underscores, which indicates private access
        self.__private_var = 20

# Create an object of MyClass class
obj = MyClass()

# Access the protected variable using the object name and print its value
# The protected variable can be accessed outside the class but
# it is intended to be used within the class or its subclasses
print(obj._protected_var)   # output: 10

# Try to access the private variable using the object name and print its value
# The private variable cannot be accessed outside the class, even by its subclasses
# This will raise an AttributeError because the variable is not accessible outside the class
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## 继承

继承促进了代码重用，并允许您创建一个共享共同属性和方法的类层次结构。它通过将相关功能放在一个地方并促进模块化的概念，有助于创建干净和有组织的代码。从中派生出新类的基类也称为父类，而新类称为子类或子类。

在代码中，我们定义了一个名为 Animal 的类，该类具有一个构造方法，该方法使用 name 属性初始化类对象，并定义了一个名为 speak 的方法。speak 方法在 Animal 类中定义，但没有主体。

然后我们定义了两个名为 Dog 和 Cat 的子类，这些子类继承自 Animal 类。这些子类重写了 Animal 类的 speak 方法。

我们创建了一个具有 name 属性 "Rover" 的 Dog 对象和一个具有 name 属性 "Whiskers" 的 Cat 对象。我们使用 dog.speak() 调用 Dog 对象的 speak 方法，它打印 "Woof!"，因为 Dog 类的 speak 方法重写了 Animal 类的 speak 方法。同样，我们使用 cat.speak() 调用 Cat 对象的 speak 方法，它打印 "Meow!"，因为 Cat 类的 speak 方法重写了 Animal 类的 speak 方法。

``` python
# Define a class named Animal
class Animal:

    # Constructor method that initializes the class object with a name attribute
    def __init__(self, name):
        self.name = name

    # Method that is defined in the Animal class but does not have a body
    # This method will be overridden in the subclasses of Animal
    def speak(self):
        print("")

# Define a subclass named Dog that inherits from the Animal class
class Dog(Animal):

    # Override the speak method of the Animal class
    def speak(self):
        print("Woof!")

# Define a subclass named Cat that inherits from the Animal class
class Cat(Animal):

    # Override the speak method of the Animal class
    def speak(self):
        print("Meow!")

# Create a Dog object with a name attribute "Rover"
dog = Dog("Rover")

# Create a Cat object with a name attribute "Whiskers"
cat = Cat("Whiskers")

# Call the speak method of the Dog class and print the output
# The speak method of the Dog class overrides the speak method of the Animal class
# Therefore, when we call the speak method of the Dog object, it will print "Woof!"
dog.speak()   # output: Woof!

# Call the speak method of the Cat class and print the output
# The speak method of the Cat class overrides the speak method of the Animal class
# Therefore, when we call the speak method of the Cat object, it will print "Meow!"
cat.speak()   # output: Meow!

```

## 多态

多态是面向对象编程中的一个重要概念，它允许你编写能够以统一方式处理不同类对象的代码。在 Python 中，多态是通过方法重写或方法重载来实现的。

方法重写是指子类提供了一个在其父类中已经定义的方法的自己的实现。这允许子类在不改变方法名称或签名的情况下修改方法的行为。

方法重载是指多个方法具有相同的名称但不同的参数。Python 不直接支持方法重载，但可以通过使用默认参数或可变长度参数来实现。

多态使编写灵活且可重用的代码变得更容易。它允许你编写能够处理不同对象的代码，而无需知道它们的具体类型。

```python
#The Shape class is defined with an abstract area method, which is intended to be overridden by subclasses.
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # The Rectangle class is defined with an __init__ method that initializes
    # width and height instance variables.
    # It also defines an area method that calculates and returns
    # the area of a rectangle using the width and height instance variables.
    def __init__(self, width, height):
        self.width = width  # Initialize width instance variable
        self.height = height  # Initialize height instance variable

    def area(self):
        return self.width * self.height  # Return area of rectangle


 # The Circle class is defined with an __init__ method
 # that initializes a radius instance variable.
 # It also defines an area method that calculates and
 # returns the area of a circle using the radius instance variable.
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # Initialize radius instance variable

    def area(self):
        return 3.14 * self.radius ** 2  # Return area of circle using pi * r^2

# The shapes list is created with one Rectangle object and one Circle object. The for
# loop iterates over each object in the list and calls the area method of each object
# The output will be the area of the rectangle (20) and the area of the circle (153.86).
shapes = [Rectangle(4, 5), Circle(7)]  # Create a list of Shape objects
for shape in shapes:
    print(shape.area())  # Output the area of each Shape object

```
## 抽象

抽象是面向对象编程（OOP）中的一个重要概念，因为它允许你专注于对象或系统的基本特征，同时忽略与当前上下文无关的细节。通过减少复杂性和隐藏不必要的细节，抽象可以使代码更加模块化、更易读且更易维护。

在 Python 中，可以通过使用抽象类或接口来实现抽象。抽象类是一个不能直接实例化的类，而是供其他类继承的。它通常包含没有实现的抽象方法，但为子类的实现提供了一个模板。这允许程序员为一组相关的类定义一个通用接口，同时仍然允许每个类具有自己的特定行为。

另一方面，接口是一组方法签名的集合，一个类必须实现这些方法才能被认为与接口“兼容”。接口通常用于定义多个类可以实现的一组通用方法，从而允许它们在某些上下文中可以互换使用。

Python 没有内置对抽象类或接口的支持，但可以使用 abc（抽象基类）模块来实现。该模块提供了 ABC 类和 abstractmethod 装饰器，可以用来定义抽象类和方法。

总的来说，抽象是管理复杂性和提高面向对象编程中代码质量的强大工具，Python 提供了一系列实现代码抽象的选项。

```python
# Import the abc module to define abstract classes and methods
from abc import ABC, abstractmethod

# Define an abstract class called Shape that has an abstract method called area
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Define a Rectangle class that inherits from Shape
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Implement the area method for Rectangles
    def area(self):
        return self.width * self.height

# Define a Circle class that also inherits from Shape
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # Implement the area method for Circles
    def area(self):
        return 3.14 * self.radius ** 2

# Create a list of shapes that includes both Rectangles and Circles
shapes = [Rectangle(4, 5), Circle(7)]

# Loop through each shape in the list and print its area
for shape in shapes:
    print(shape.area())

```

这些是 Python 中一些基本的面向对象编程（OOP）原则。本页面目前正在编写中，更多详细的示例和解释将很快推出。
