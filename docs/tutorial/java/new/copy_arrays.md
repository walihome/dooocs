---
title: Java 复制数组
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 复制数组

在Java中，我们可以将一个数组复制到另一个数组中。有几种技术可以用于在Java中复制数组。

---

## 1. 使用赋值运算符复制数组

让我们举一个例子，
```
class Main {
    public static void main(String[] args) {
       
        int [] numbers = {1, 2, 3, 4, 5, 6};
        int [] positiveNumbers = numbers;    // 复制数组

        for (int number: positiveNumbers) {
            System.out.print(number + ", ");
        }
    }
}

输出：
1, 2, 3, 4, 5, 6
```

在上面的示例中，我们使用赋值运算符（`=`）将名为numbers的数组复制到名为positiveNumbers的另一个数组中。

这种技术是最简单的，并且也有效。但是，这种技术存在一个问题。如果我们更改一个数组的元素，其他数组的相应元素也会发生更改。例如，
```
class Main {
    public static void main(String[] args) {
      
        int [] numbers = {1, 2, 3, 4, 5, 6};
        int [] positiveNumbers = numbers;    // 复制数组
      
        // 更改第一个数组的值
        numbers[0] = -1;

        // 打印第二个数组
        for (int number: positiveNumbers) {
            System.out.print(number + ", ");
        }
    }
}

输出：
-1, 2, 3, 4, 5, 6
```

在这里，我们可以看到我们更改了numbers数组的一个值。当我们打印positiveNumbers数组时，我们可以看到相同的值也发生了变化。

这是因为两个数组引用相同的数组对象。这是由于浅拷贝造成的。要了解有关浅拷贝的更多信息，请访问[浅拷贝](http://stackoverflow.com/questions/1175620/in-java-what-is-a-shallow-copy)。

现在，为了在复制数组时生成新的数组对象，我们需要进行深拷贝而不是浅拷贝。

---

## 2. 使用循环结构复制数组

让我们举一个例子：
```
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
      
        int [] source = {1, 2, 3, 4, 5, 6};
        int [] destination = new int[6];

        // 迭代并将元素从source复制到destination
        for (int i = 0; i < source.length; ++i) {
            destination[i] = source[i];
        }
      
         // 将数组转换为字符串
        System.out.println(Arrays.toString(destination));
    }
}

输出：
[1, 2, 3, 4, 5, 6]
```

在上面的示例中，我们使用`for`循环来迭代源数组的每个元素。在每次迭代中，我们将元素从源数组复制到目标数组。

这里，源数组和目标数组引用不同的对象（深拷贝）。因此，如果更改一个数组的元素，另一个数组的相应元素不会改变。

请注意以下语句，
```
System.out.println(Arrays.toString(destination));
```

这里，我们使用了toString()方法将数组转换为字符串。要了解更多信息，请访问[toString()方法（官方Java文档）](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)。

---

## 3. 使用arraycopy()方法复制数组

在Java中，[System类](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html)包含一个名为`arraycopy()`的方法来复制数组。与上述两种方法相比，这个方法是一种更好的复制数组的方法。

`arraycopy()`方法允许您将源数组的指定部分复制到目标数组。例如，
```
arraycopy(Object src, int srcPos,Object dest, int destPos, int length)
```

其中，

  * src - 您要复制的源