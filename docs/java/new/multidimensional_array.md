# Java多维数组

在学习多维数组之前，请确保你了解[Java数组](/java-programming/arrays "Java Arrays")。

多维数组是一个数组的数组。每个多维数组的元素本身也是一个数组。例如，

```java
int[][] a = new int[3][4];
```

在这里，我们创建了一个名为a的多维数组。它是一个二维数组，最多可以容纳12个元素。

![Java中的二维数组](https://cdn.programiz.com/sites/tutorial2program/files/java-2d-array.jpg)  
二维数组

请记住，Java使用从0开始的索引，也就是说，Java中的数组索引从0开始，而不是从1开始。

让我们来看一个创建三维数组的例子。例如，

```java
String[][][] data = new String[3][4][2];
```

在这里，data是一个可以容纳最多24个（3*4*2）`String`类型元素的三维数组。

* * *

## 如何初始化Java中的二维数组？

下面是如何在Java中初始化二维数组的方法。

```java
int[][] a = {
      {1, 2, 3}, 
      {4, 5, 6, 9}, 
      {7}, 
};
```

正如我们所见，多维数组的每个元素本身也是一个数组。而且，与C/C++不同，在Java中，多维数组的每一行长度可以不同。

![具有可变长度的Java二维数组示例](https://cdn.programiz.com/sites/tutorial2program/files/2d-array-variable-length.jpg)  
二维数组的初始化

### 例子：二维数组

```java
class MultidimensionalArray {
    public static void main(String[] args) {

        // 创建一个二维数组
        int[][] a = {
            {1, 2, 3}, 
            {4, 5, 6, 9}, 
            {7}, 
        };
      
        // 计算每行的长度
        System.out.println("第1行的长度：" + a[0].length);
        System.out.println("第2行的长度：" + a[1].length);
        System.out.println("第3行的长度：" + a[2].length);
    }
}
```

**输出**：
```
第1行的长度：3
第2行的长度：4
第3行的长度：1
```

在上面的例子中，我们创建了一个名为a的多维数组。由于多维数组的每个组件也是一个数组（`a[0]`、`a[1]`和`a[2]`也都是数组）。

我们使用`length`属性来计算每一行的长度。

* * *

### 例子：循环打印二维数组的所有元素

```java
class MultidimensionalArray {
    public static void main(String[] args) {

        int[][] a = {
            {1, -2, 3}, 
            {-4, -5, 6, 9}, 
            {7}, 
        };
      
        for (int i = 0; i < a.length; ++i) {
            for(int j = 0; j < a[i].length; ++j) {
                System.out.println(a[i][j]);
            }
        }
    }
}
```

**输出**：
```
1
-2
3
-4
-5
6
9
7
```

我们还可以使用[for...each循环](/java-programming/enhanced-for-loop "Java for..each Loop")来访问多维数组的元素。例如，

```java
class MultidimensionalArray {
    public static void main(String[] args) {

        // 创建一个二维数组
        int[][] a = {
            {1, -2, 3}, 
            {-4, -5, 6, 9}, 
            {7}, 
        };
      
        // 第一个for...each循环访问二维数组中的每个数组
        for (int[] innerArray: a) {
            // 第二个for...each循环访问每行中的每个元素
            for(int data: innerArray) {
                System.out.println(data);
            }