# 原生应用开发

- react native
- weex(官方文档并不完善,坑多,百度都找不到解决方案)
- flutter

|                  | React-Native | Weex           | Flutter  |
| ---------------- | ------------ | -------------- | -------- |
| 基于的语言       | React        | Vue            | Dart     |
| 性能             | 中           | 中             | 高       |
| 是否需要 js 桥接 | 是           | 是             | 否       |
| 学习难度         | 中           | 高             | 高       |
| 生态             | 成熟         | 一般           | 趋于成熟 |
| 是否推荐         | 推荐         | 不推荐(很多坑) | 可以尝试 |

## 环境搭建

### 公共部分

#### 下载安装

```js
1.安装Node(官网左边稳定版)
  下载地址:
    https://nodejs.org/en/

2.安装 JDK8.x
  下载地址:
    https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    然后下一步下一步安装即可

3.安装Git
  下载地址:
    https://git-scm.com/downloads

4.安装 Android sdk
  已经准备好:
    https://pan.baidu.com/s/1ImnzcYV0wtNfqH2-BM-QSQ

  下载地址:
    https://blog.csdn.net/QQxiaoqiang1573/article/details/73274771

5.安装 Android 模拟器
  推荐夜神模拟器, 轻量级并且使用方便, 下载地址: https://www.yeshen.com/
```

#### 安装 JDK8.x 需要注意的问题

- 下载时会提示登录 oracle.

  ```js
  账号：2696671285@qq.com
  密码：Oracle123
  ```

- 下载时默认是 https，使用 http 之后虽然还是慢，但是也能稳定在 400k 左右!

- 装完之后还要把 java 的安装目录,配置为环境变量

  ```js
  一般会配置到系统环境变量,这样所有用户登录都是可以使用的
  // 1.JAVA_HOME
  这个变量名对应的是JDK8.x的安装路径(完成路径,例如:C:\Windows\System32\Drivers\DriverData)
  // 2.Path
  Path里面还需要配置`%JAVA_HOME%\bin`和`%JAVA_HOME%\jre\bin`
  配置好后怎么验证是否配置好了呢? --> 在小黑窗里输入javac,如果有反应则可以了
  ```

#### 安装 Android sdk 需要注意的问题

- 最好直接从已经准备好的云盘下载.

- 下载完后直接解压,把解压好的文件放到想安装的盘符下即可,内置需要下载的文件,齐全,无需下载其他文件.

- 配置环境变量

  ```js
  // 1.ANDROID_HOME
  这个变量名对应的变量值是解压出来的android文件放置的对应的位置.
  // 2.Path
  Path里面还要配置`%ANDROID_HOME%\tools`和`%ANDROID_HOME%\platform-tools`
  配置好后怎么验证是否配置好了呢? --> 在小黑窗里输入adb,如果有反应则可以了
  ```

### 独立部分

#### React-Native

参考地址: [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

```js
1.安装python2.x
  下载地址:
    https://www.python.org/downloads/
```

#### Weex

> 常见问题: [https://www.jianshu.com/p/8cd872a618d4](https://www.jianshu.com/p/8cd872a618d4)

安装一个 Android 5.1.1 的模拟器, 不要使用它默认的 4.4 的模拟器

#### Flutter

参考地址: [https://flutterchina.club/setup-windows](https://flutterchina.club/setup-windows)

```js
// 1.安装 Flutter SDK
// 下载地址:【建议通过git clone】
// https://flutter.io/sdk-archive/#windows

2.配置环境变量
把Flutter\bin这个目录的路径配置到Path里.怎么验证是否配置好了呢? 小黑窗里输入flutter --version

3.执行一次 flutter doctor 来安装需要的依赖包
```

### react-native

1.创建项目:

```js
npx react-native init 项目名
```

2.连接模拟器或者真机:

```js
// 真机:
https://reactnative.cn/docs/running-on-device/
// 模拟器:
adb connect 127.0.0.1:62001    // 这个ip端口是固定的
adb devices            // 确认是否连接
```

3.运行项目:

```js
// 运行项目如果没弹出Metro框的话，需要先运行react-native start在运行项目

yarn android
# 或者
yarn react-native run-android
```
