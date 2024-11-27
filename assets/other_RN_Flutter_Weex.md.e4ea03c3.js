import{_ as a,o as t,c as e,U as s}from"./chunks/framework.97dce334.js";const A=JSON.parse('{"title":"原生应用开发","description":"","frontmatter":{},"headers":[],"relativePath":"other/RN_Flutter_Weex.md","filePath":"other/RN_Flutter_Weex.md","lastUpdated":1732711417000}'),n={name:"other/RN_Flutter_Weex.md"},l=s(`<h1 id="原生应用开发" tabindex="-1">原生应用开发 <a class="header-anchor" href="#原生应用开发" aria-label="Permalink to &quot;原生应用开发&quot;">​</a></h1><ul><li>react native</li><li>weex(官方文档并不完善,坑多,百度都找不到解决方案)</li><li>flutter</li></ul><table><thead><tr><th></th><th style="text-align:center;">React-Native</th><th style="text-align:center;">Weex</th><th style="text-align:center;">Flutter</th></tr></thead><tbody><tr><td>基于的语言</td><td style="text-align:center;">React</td><td style="text-align:center;">Vue</td><td style="text-align:center;">Dart</td></tr><tr><td>性能</td><td style="text-align:center;">中</td><td style="text-align:center;">中</td><td style="text-align:center;">高</td></tr><tr><td>是否需要 js 桥接</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td><td style="text-align:center;">否</td></tr><tr><td>学习难度</td><td style="text-align:center;">中</td><td style="text-align:center;">高</td><td style="text-align:center;">高</td></tr><tr><td>生态</td><td style="text-align:center;">成熟</td><td style="text-align:center;">一般</td><td style="text-align:center;">趋于成熟</td></tr><tr><td>是否推荐</td><td style="text-align:center;">推荐</td><td style="text-align:center;">不推荐(很多坑)</td><td style="text-align:center;">可以尝试</td></tr></tbody></table><h2 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h2><h3 id="公共部分" tabindex="-1">公共部分 <a class="header-anchor" href="#公共部分" aria-label="Permalink to &quot;公共部分&quot;">​</a></h3><h4 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-label="Permalink to &quot;下载安装&quot;">​</a></h4><ol><li>安装 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node(官网左边稳定版)</a></li><li>安装 JDK8.x <ul><li>下载地址: <a href="https://www.oracle.com/java/technologies/downloads/#java8" target="_blank" rel="noreferrer">java</a> 然后下一步下一步安装即可</li></ul></li><li>安装 <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">Git</a></li><li>安装 Android sdk <ul><li>已经准备好: <a href="https://pan.baidu.com/s/1ImnzcYV0wtNfqH2-BM-QSQ" target="_blank" rel="noreferrer">Android</a></li><li>镜像下载地址: <a href="https://blog.csdn.net/QQxiaoqiang1573/article/details/73274771" target="_blank" rel="noreferrer">镜像</a></li></ul></li><li>安装 Android 模拟器 <ul><li>推荐夜神模拟器, 轻量级并且使用方便, 下载地址: <a href="https://www.yeshen.com/" target="_blank" rel="noreferrer">夜神模拟器</a></li></ul></li></ol><h4 id="安装-jdk8-x-需要注意的问题" tabindex="-1">安装 JDK8.x 需要注意的问题 <a class="header-anchor" href="#安装-jdk8-x-需要注意的问题" aria-label="Permalink to &quot;安装 JDK8.x 需要注意的问题&quot;">​</a></h4><ul><li><p>下载时会提示登录 oracle.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">账号：2696671285@qq.com</span></span>
<span class="line"><span style="color:#A6ACCD;">密码：Oracle123</span></span></code></pre></div></li><li><p>下载时默认是 https，使用 http 之后虽然还是慢，但是也能稳定在 400k 左右!</p></li><li><p>装完之后还要把 java 的安装目录, 配置为环境变量:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一般会配置到系统环境变量,这样所有用户登录都是可以使用的</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1.JAVA_HOME</span></span>
<span class="line"><span style="color:#A6ACCD;">这个变量名对应的是JDK8.x的安装路径(完成路径,例如:C:\\Windows\\System32\\Drivers\\DriverData)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2.Path</span></span>
<span class="line"><span style="color:#A6ACCD;">Path里面还需要配置\`%JAVA_HOME%\\bin\`和\`%JAVA_HOME%\\jre\\bin\`</span></span>
<span class="line"><span style="color:#A6ACCD;">配置好后怎么验证是否配置好了呢? --&gt; 在小黑窗里输入javac,如果有反应则可以了</span></span></code></pre></div></li></ul><h4 id="安装-android-sdk-需要注意的问题" tabindex="-1">安装 Android sdk 需要注意的问题 <a class="header-anchor" href="#安装-android-sdk-需要注意的问题" aria-label="Permalink to &quot;安装 Android sdk 需要注意的问题&quot;">​</a></h4><ul><li><p>最好直接从已经准备好的云盘下载.</p></li><li><p>下载完后直接解压,把解压好的文件放到想安装的盘符下即可,内置需要下载的文件,齐全,无需下载其他文件.</p></li><li><p>配置环境变量</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 1.ANDROID_HOME</span></span>
<span class="line"><span style="color:#A6ACCD;">这个变量名对应的变量值是解压出来的android文件放置的对应的位置.</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2.Path</span></span>
<span class="line"><span style="color:#A6ACCD;">Path里面还要配置\`%ANDROID_HOME%\\tools\`和\`%ANDROID_HOME%\\platform-tools\`</span></span>
<span class="line"><span style="color:#A6ACCD;">配置好后怎么验证是否配置好了呢? --&gt; 在小黑窗里输入adb,如果有反应则可以了</span></span></code></pre></div></li></ul><h3 id="独立部分" tabindex="-1">独立部分 <a class="header-anchor" href="#独立部分" aria-label="Permalink to &quot;独立部分&quot;">​</a></h3><h4 id="react-native" tabindex="-1">React-Native <a class="header-anchor" href="#react-native" aria-label="Permalink to &quot;React-Native&quot;">​</a></h4><p><a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank" rel="noreferrer">参考地址</a></p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1.安装python2.x</span></span>
<span class="line"><span style="color:#A6ACCD;">  下载地址:</span></span>
<span class="line"><span style="color:#A6ACCD;">    https://www.python.org/downloads/</span></span></code></pre></div><h4 id="weex" tabindex="-1">Weex <a class="header-anchor" href="#weex" aria-label="Permalink to &quot;Weex&quot;">​</a></h4><p><a href="https://www.jianshu.com/p/8cd872a618d4" target="_blank" rel="noreferrer">常见问题</a></p><p>安装一个 Android 5.1.1 的模拟器, 不要使用它默认的 4.4 的模拟器</p><h4 id="flutter" tabindex="-1">Flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;Flutter&quot;">​</a></h4><p><a href="https://flutterchina.club/setup-windows" target="_blank" rel="noreferrer">参考地址</a></p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1.安装 Flutter SDK</span></span>
<span class="line"><span style="color:#A6ACCD;">// 下载地址:【建议通过git clone】</span></span>
<span class="line"><span style="color:#A6ACCD;">// https://flutter.io/sdk-archive/#windows</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.配置环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">把Flutter\\bin这个目录的路径配置到Path里.怎么验证是否配置好了呢? 小黑窗里输入flutter --version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3.执行一次 flutter doctor 来安装需要的依赖包</span></span></code></pre></div><h3 id="react-native-1" tabindex="-1">react-native <a class="header-anchor" href="#react-native-1" aria-label="Permalink to &quot;react-native&quot;">​</a></h3><ol><li><p>创建项目:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react-native</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">项目名</span></span></code></pre></div></li><li><p>连接模拟器或者真机:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 真机:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://reactnative.cn/docs/running-on-device/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  模拟器:</span></span>
<span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0</span><span style="color:#C3E88D;">.0.1:62001</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 这个ip端口是固定的</span></span>
<span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devices</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 确认是否连接</span></span></code></pre></div></li><li><p>运行项目:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 运行项目如果没弹出Metro框的话，需要先运行react-native start在运行项目</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">android</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react-native</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run-android</span></span></code></pre></div></li></ol>`,23),r=[l];function o(p,i,c,d,h,y){return t(),e("div",null,r)}const u=a(n,[["render",o]]);export{A as __pageData,u as default};