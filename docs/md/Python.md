### Python 基础

- 命令行敲 python 进入 python 交互模式.`exit()`回车退出.
- python`大小写敏感`
- `python 文件名.py`运行 python 文件.

### 注释

```python
#!/usr/bin/env python3      # python`#`后面是注释
# -*- coding: utf-8 -*-

第一行注释是为了告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释；
第二行注释是为了告诉Python解释器，按照UTF-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。
```

### python 数据类型

- **不可变数据（3 个）：**Number（数字）、String（字符串）、Tuple（元组）；
- **可变数据（3 个）：**List（列表）、Dictionary（字典）、Set（集合）。

- Number（数字）
- String（字符串）
- List（列表） (类似 arr)
  - 索引=下标.最后一个索引是`len(classmates) - 1`,也可以直接`list[-n]`取出倒数第 n 个值
- Tuple（元组） (类似常量的伪数组,小括号代替中括号.初始化后不可修改)
- Set（集合）
- Dictionary（字典） (类似对象,键必须有引号,可用字符串语法取,.赋值)

- 布尔值（True,False）
  - True `and` False (类似&&)
  - True `or` False (类似||)
  - `not` False (类似!)
- 空值(None)

### 格式化(%)

##### %

```python
%运算符就是用来格式化字符串的。在字符串内部，%s表示用字符串替换，%d表示用整数替换，有几个%?占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个%?，括号可以省略。

如果你不太确定应该用什么，%s永远起作用，它会把任何数据类型转换为字符串

# 占位符    替换内容
# %d      整数
# %f      浮点数
# %s      字符串
# %x      十六进制整数

如果字符串内有%字符,需要连续用两个%%来转义
```

##### format()

```python
它会用传入的参数依次替换字符串内的占位符{0}、{1}……

>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
'Hello, 小明, 成绩提升了 17.1%'
```

### 方法

- `print()`---输入-打印(3.8 只打印内容,并且字符串之外的逗号会打成空格,2.7 有逗号会包括括号全部打印)
- `input()`---输入-赋值(`变量=input()`回车后输入对应值,`变量可以跟js一样直接赋值不需要声明`)
- `ord('str')`---获取字符编码的整数表示
- `chr(int)`---把编码转换为对应的字符
- `str.encode('UTF-8')`---当`str`和`bytes`互相转换时，需要指编码。
- `range(n,nn)`---生成一个从 n 开始到 nn(不包括 nn 本身)的整数序列，再通过`list()`函数可以转换为 list
- `list(range(n))`---生成一个列表
- `max(x,x,x...)`---可以接收任意多个参数，并返回最大的那个
- `abs(x)`---求绝对值的函数`abs`，只有一个参数
- `int(x)`---可以把其他数据类型转换为整数
- `float(x)`---x 转浮点数
- `str(x)`---x 转字符串
- `bool(x)`---x 转布偶值
- `hex(x)`---把一个整数转换成十六进制表示的字符串
- `trim()`---去除字符串首尾的空格
- `isinstance(x, str)`---判断一个变量(x)是不是字符串,这里的 str 是字符串类型

##### 列表(arr)方法

- `len(list)`---用来获取 list 元素的个数
- `list.append(元素)`---往 list 中追加元素到末尾
- `list.insert(索引, 元素)`---元素插入到`指定`的位置(索引)
- `list.pop()`---删除 list 末尾的元素
- `lsit.pop(索引)`---删除 list 指定位置(索引)的元素
- `list[序号] = 元素`---替换元素,直接给对应的索引赋值

##### 字典方法

- `key in dict`---判断 dict 字典中是否存在 key
- `dict.get(元素[,返回值])`---有这个元素,就会取其值,没有会返回返回值(返回值可选,未定义返回 None)
- `dict.pop(key)`---删除 dict 中的 key

##### set 方法

- `add(key)`---添加元素到 set 中,在 set 中，可以重复添加，但不会有效果,没有重复的 key.
- `remove(key)`---删除元素

##### 字符串方法

- `str.replace(原字符, 新字符)`---把 str 的原字符替换成新字符,创建了一个新字符串返回.str 本身不变.
- `str.lower()`---把 str 中大写字母换成小写.

### if 条件判断

```python
# print absolute value of an integer:
a = 100
if a>=0:
  print(a)
else:
  print(-a)
```

### 循环

- for

```python
list = [1,2,3,4,5]
for item in list:
    print(item)      #item是遍历出来的子项

# python的迭代可以用于列表,元祖,字典,等等.
```

- while 循环

```python
sum = 0
n = 99
while n > 0:
    if n < 10: # 当n 小于 10时，条件满足，执行break语句
        break # break语句会结束当前循环
    if n % 2 == 0: # 如果n是偶数，执行continue语句
        continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
    sum = sum + n
    n = n - 2
print(sum)
```

- 要实现下标循环怎么办?

- Python 内置的`enumerate`函数

```python
for i, value in enumerate(['A', 'B', 'C']):
    print(i, value)

# 0 A
# 1 B
# 2 C

# for循环里，同时引用了两个变量，在Python里是很常见
for x, y in [(1, 1), (2, 4), (3, 9)]:
    print(x, y)

# 1 1
# 2 4
# 3 9
```

### 函数

- 函数执行完毕也没有`return`语句时，自动`return None`。

- 函数可以同时返回多个值，但其实就是一个 tuple。

- pass 可以用来作为占位符

```python
# 定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回。
# 例:求绝对值函数
def myAbs(x):
    if x >= 0:
        return x
    else:
        return -x

# 如果想定义一个什么事也不做的空函数，可以用pass语句：
def nop():
    pass
# pass可以用来作为占位符,空函数,缺少了pass，代码运行就会有语法错误(也可以用作if里等等)
```

##### 参数

- `*args`是可变参数，args 接收的是一个 tuple；

- `**kw`是关键字参数，kw 接收的是一个 dict。

- 以及调用函数时如何传入可变参数和关键字参数的语法：
- 可变参数既可以直接传入：`func(1, 2, 3)`，又可以先组装 list 或 tuple，再通过`*args`传入：`func(*(1, 2, 3))`；
- 关键字参数既可以直接传入：`func(a=1, b=2)`，又可以先组装 dict，再通过`**kw`传入：`func(**{'a': 1, 'b': 2})`。
- 使用`*args`和`**kw`是 Python 的习惯写法，当然也可以用其他参数名，但最好使用习惯用法。
- 命名的关键字参数是为了限制调用者可以传入的参数名，同时可以提供默认值。
- 定义命名的关键字参数在没有可变参数的情况下不要忘了写分隔符`*`，否则定义的将是位置参数。

##### 递归函数

- 在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。

### from ** import **

```python
# 如果已经把函数定义保存为.py文件了,在交互模式使用函数:
# 用`from 文件名 import 函数名`来导入myAbs()函数,然后使用
myAbs(x)


# 导入
import xxx
# import xxx语句表示导入xx包，并允许后续代码引用xxx包里的sin、cos等函数。
```

### return

- python 允许返回多个值,用`逗号`隔开

### 切片

- 取一个 list 或 tuple 的部分元素是非常常见的操作,通过索引一个个取很繁琐,因此，Python 提供了切片（Slice）操作符
- `list[n:n1]`---从索引`n`开始取,直到索引`n1`为止但不包括索引`n1`。n 为 0 可以省略!支持倒数切片.例:(-5:-1)
- 什么都不写，只写`[:]`就可以原样复制一个 list
- tuple 也是一种 list，唯一区别是 tuple 不可变。因此，tuple 也可以用切片操作，只是操作的结果仍是 tuple
- 字符串`'xxx'`也可以看成是一种 list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串

### 列表生成式

- 在一个列表生成式中，`for`前面的`if ... else`是表达式，而`for`后面的`if`是过滤条件，不能带`else`

```python
[x * x for x in range(1,11)]
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 可以加判断,满足条件的加入列表,(for循环后面的if是判断,不能有else)
[x * x for x in range(1, 11) if x % 2 == 0]
# [4, 16, 36, 64, 100]

# for前面的if,else是表达式
[x if x % 2 == 0 else -x for x in range(1, 11)]
[-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]

# 使用两层循环，可以生成全排列
[m + n for m in 'ABC' for n in 'XYZ']
#['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']

# 可以用来处理列表的值
L = ['Hello', 'World', 'IBM', 'Apple']
[s.lower() for s in L]      # lower()把所有的字符串变成小写
# ['hello', 'world', 'ibm', 'apple']
```
