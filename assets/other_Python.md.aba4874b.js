import{_ as s,o as l,c as a,U as n}from"./chunks/framework.97dce334.js";const A=JSON.parse('{"title":"Python 基础","description":"","frontmatter":{},"headers":[],"relativePath":"other/Python.md","filePath":"other/Python.md","lastUpdated":1689782884000}'),o={name:"other/Python.md"},p=n(`<h1 id="python-基础" tabindex="-1">Python 基础 <a class="header-anchor" href="#python-基础" aria-label="Permalink to &quot;Python 基础&quot;">​</a></h1><ul><li>命令行敲 python 进入 python 交互模式.<code>exit()</code>回车退出.</li><li>python<code>大小写敏感</code></li><li><code>python 文件名.py</code>运行 python 文件.</li></ul><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env python3      # python\`#\`后面是注释</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -*- coding: utf-8 -*-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">第一行注释是为了告诉Linux</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释；</span></span>
<span class="line"><span style="color:#A6ACCD;">第二行注释是为了告诉Python解释器，按照UTF</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。</span></span></code></pre></div><h3 id="python-数据类型" tabindex="-1">python 数据类型 <a class="header-anchor" href="#python-数据类型" aria-label="Permalink to &quot;python 数据类型&quot;">​</a></h3><ul><li><p>**不可变数据（3 个）：**Number（数字）、String（字符串）、Tuple（元组）；</p></li><li><p>**可变数据（3 个）：**List（列表）、Dictionary（字典）、Set（集合）。</p></li><li><p>Number（数字）</p></li><li><p>String（字符串）</p></li><li><p>List（列表） (类似 arr)</p><ul><li>索引=下标.最后一个索引是<code>len(classmates) - 1</code>,也可以直接<code>list[-n]</code>取出倒数第 n 个值</li></ul></li><li><p>Tuple（元组） (类似常量的伪数组,小括号代替中括号.初始化后不可修改)</p></li><li><p>Set（集合）</p></li><li><p>Dictionary（字典） (类似对象,键必须有引号,可用字符串语法取,.赋值)</p></li><li><p>布尔值（True,False）</p><ul><li>True <code>and</code> False (类似&amp;&amp;)</li><li>True <code>or</code> False (类似||)</li><li><code>not</code> False (类似!)</li></ul></li><li><p>空值(None)</p></li></ul><h3 id="格式化" tabindex="-1">格式化(%) <a class="header-anchor" href="#格式化" aria-label="Permalink to &quot;格式化(%)&quot;">​</a></h3><h5 id="" tabindex="-1">% <a class="header-anchor" href="#" aria-label="Permalink to &quot;%&quot;">​</a></h5><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">运算符就是用来格式化字符串的。在字符串内部，</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">s表示用字符串替换，</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">d表示用整数替换，有几个</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">?占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">?，括号可以省略。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">如果你不太确定应该用什么，</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">s永远起作用，它会把任何数据类型转换为字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 占位符    替换内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># %d      整数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># %f      浮点数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># %s      字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># %x      十六进制整数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">如果字符串内有</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">字符</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">需要连续用两个</span><span style="color:#89DDFF;">%%</span><span style="color:#A6ACCD;">来转义</span></span></code></pre></div><h5 id="format" tabindex="-1">format() <a class="header-anchor" href="#format" aria-label="Permalink to &quot;format()&quot;">​</a></h5><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">它会用传入的参数依次替换字符串内的占位符</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">、</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">……</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#F78C6C;">{0}</span><span style="color:#C3E88D;">, 成绩提升了 </span><span style="color:#F78C6C;">{1</span><span style="color:#C792EA;">:.1f</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">小明</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">17.125</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&#39;</span><span style="color:#676E95;font-style:italic;">Hello, 小明, 成绩提升了 17.1%</span><span style="color:#89DDFF;font-style:italic;">&#39;</span></span></code></pre></div><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ul><li><code>print()</code>---输入-打印(3.8 只打印内容,并且字符串之外的逗号会打成空格,2.7 有逗号会包括括号全部打印)</li><li><code>input()</code>---输入-赋值(<code>变量=input()</code>回车后输入对应值,<code>变量可以跟js一样直接赋值不需要声明</code>)</li><li><code>ord(&#39;str&#39;)</code>---获取字符编码的整数表示</li><li><code>chr(int)</code>---把编码转换为对应的字符</li><li><code>str.encode(&#39;UTF-8&#39;)</code>---当<code>str</code>和<code>bytes</code>互相转换时，需要指编码。</li><li><code>range(n,nn)</code>---生成一个从 n 开始到 nn(不包括 nn 本身)的整数序列，再通过<code>list()</code>函数可以转换为 list</li><li><code>list(range(n))</code>---生成一个列表</li><li><code>max(x,x,x...)</code>---可以接收任意多个参数，并返回最大的那个</li><li><code>abs(x)</code>---求绝对值的函数<code>abs</code>，只有一个参数</li><li><code>int(x)</code>---可以把其他数据类型转换为整数</li><li><code>float(x)</code>---x 转浮点数</li><li><code>str(x)</code>---x 转字符串</li><li><code>bool(x)</code>---x 转布偶值</li><li><code>hex(x)</code>---把一个整数转换成十六进制表示的字符串</li><li><code>trim()</code>---去除字符串首尾的空格</li><li><code>isinstance(x, str)</code>---判断一个变量(x)是不是字符串,这里的 str 是字符串类型</li></ul><h5 id="列表-arr-方法" tabindex="-1">列表(arr)方法 <a class="header-anchor" href="#列表-arr-方法" aria-label="Permalink to &quot;列表(arr)方法&quot;">​</a></h5><ul><li><code>len(list)</code>---用来获取 list 元素的个数</li><li><code>list.append(元素)</code>---往 list 中追加元素到末尾</li><li><code>list.insert(索引, 元素)</code>---元素插入到<code>指定</code>的位置(索引)</li><li><code>list.pop()</code>---删除 list 末尾的元素</li><li><code>list.pop(索引)</code>---删除 list 指定位置(索引)的元素</li><li><code>list[序号] = 元素</code>---替换元素,直接给对应的索引赋值</li></ul><h5 id="字典方法" tabindex="-1">字典方法 <a class="header-anchor" href="#字典方法" aria-label="Permalink to &quot;字典方法&quot;">​</a></h5><ul><li><code>key in dict</code>---判断 dict 字典中是否存在 key</li><li><code>dict.get(元素[,返回值])</code>---有这个元素,就会取其值,没有会返回返回值(返回值可选,未定义返回 None)</li><li><code>dict.pop(key)</code>---删除 dict 中的 key</li></ul><h5 id="set-方法" tabindex="-1">set 方法 <a class="header-anchor" href="#set-方法" aria-label="Permalink to &quot;set 方法&quot;">​</a></h5><ul><li><code>add(key)</code>---添加元素到 set 中,在 set 中，可以重复添加，但不会有效果,没有重复的 key.</li><li><code>remove(key)</code>---删除元素</li></ul><h5 id="字符串方法" tabindex="-1">字符串方法 <a class="header-anchor" href="#字符串方法" aria-label="Permalink to &quot;字符串方法&quot;">​</a></h5><ul><li><code>str.replace(原字符, 新字符)</code>---把 str 的原字符替换成新字符,创建了一个新字符串返回.str 本身不变.</li><li><code>str.lower()</code>---把 str 中大写字母换成小写.</li></ul><h3 id="if-条件判断" tabindex="-1">if 条件判断 <a class="header-anchor" href="#if-条件判断" aria-label="Permalink to &quot;if 条件判断&quot;">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># print absolute value of an integer:</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(-</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-label="Permalink to &quot;循环&quot;">​</a></h3><ul><li>for</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#item是遍历出来的子项</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># python的迭代可以用于列表,元祖,字典,等等.</span></span></code></pre></div><ul><li>while 循环</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">99</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 当n 小于 10时，条件满足，执行break语句</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># break语句会结束当前循环</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 如果n是偶数，执行continue语句</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># continue语句会直接继续下一轮循环，后续的print()语句不会执行</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> n</span></span>
<span class="line"><span style="color:#A6ACCD;">    n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">)</span></span></code></pre></div><ul><li><p>要实现下标循环怎么办?</p></li><li><p>Python 内置的<code>enumerate</code>函数</p></li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">enumerate</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 0 A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1 B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2 C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># for循环里，同时引用了两个变量，在Python里是很常见</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">)]:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> y</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3 9</span></span></code></pre></div><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h3><ul><li><p>函数执行完毕也没有<code>return</code>语句时，自动<code>return None</code>。</p></li><li><p>函数可以同时返回多个值，但其实就是一个 tuple。</p></li><li><p>pass 可以用来作为占位符</p></li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 例:求绝对值函数</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myAbs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果想定义一个什么事也不做的空函数，可以用pass语句：</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">nop</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pass可以用来作为占位符,空函数,缺少了pass，代码运行就会有语法错误(也可以用作if里等等)</span></span></code></pre></div><h5 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h5><ul><li><p><code>*args</code>是可变参数，args 接收的是一个 tuple；</p></li><li><p><code>**kw</code>是关键字参数，kw 接收的是一个 dict。</p></li><li><p>以及调用函数时如何传入可变参数和关键字参数的语法：</p></li><li><p>可变参数既可以直接传入：<code>func(1, 2, 3)</code>，又可以先组装 list 或 tuple，再通过<code>*args</code>传入：<code>func(*(1, 2, 3))</code>；</p></li><li><p>关键字参数既可以直接传入：<code>func(a=1, b=2)</code>，又可以先组装 dict，再通过<code>**kw</code>传入：<code>func(**{&#39;a&#39;: 1, &#39;b&#39;: 2})</code>。</p></li><li><p>使用<code>*args</code>和<code>**kw</code>是 Python 的习惯写法，当然也可以用其他参数名，但最好使用习惯用法。</p></li><li><p>命名的关键字参数是为了限制调用者可以传入的参数名，同时可以提供默认值。</p></li><li><p>定义命名的关键字参数在没有可变参数的情况下不要忘了写分隔符<code>*</code>，否则定义的将是位置参数。</p></li></ul><h5 id="递归函数" tabindex="-1">递归函数 <a class="header-anchor" href="#递归函数" aria-label="Permalink to &quot;递归函数&quot;">​</a></h5><ul><li>在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。</li></ul><h3 id="from-import" tabindex="-1">from ** import ** <a class="header-anchor" href="#from-import" aria-label="Permalink to &quot;from ** import **&quot;">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 如果已经把函数定义保存为.py文件了,在交互模式使用函数:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 用\`from 文件名 import 函数名\`来导入myAbs()函数,然后使用</span></span>
<span class="line"><span style="color:#82AAFF;">myAbs</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 导入</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> xxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># import xxx语句表示导入xx包，并允许后续代码引用xxx包里的sin、cos等函数。</span></span></code></pre></div><h3 id="return" tabindex="-1">return <a class="header-anchor" href="#return" aria-label="Permalink to &quot;return&quot;">​</a></h3><ul><li>python 允许返回多个值,用<code>逗号</code>隔开</li></ul><h3 id="切片" tabindex="-1">切片 <a class="header-anchor" href="#切片" aria-label="Permalink to &quot;切片&quot;">​</a></h3><ul><li>取一个 list 或 tuple 的部分元素是非常常见的操作,通过索引一个个取很繁琐,因此，Python 提供了切片（Slice）操作符</li><li><code>list[n:n1]</code>---从索引<code>n</code>开始取,直到索引<code>n1</code>为止但不包括索引<code>n1</code>。n 为 0 可以省略!支持倒数切片.例:(-5:-1)</li><li>什么都不写，只写<code>[:]</code>就可以原样复制一个 list</li><li>tuple 也是一种 list，唯一区别是 tuple 不可变。因此，tuple 也可以用切片操作，只是操作的结果仍是 tuple</li><li>字符串<code>&#39;xxx&#39;</code>也可以看成是一种 list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串</li></ul><h3 id="列表生成式" tabindex="-1">列表生成式 <a class="header-anchor" href="#列表生成式" aria-label="Permalink to &quot;列表生成式&quot;">​</a></h3><ul><li>在一个列表生成式中，<code>for</code>前面的<code>if ... else</code>是表达式，而<code>for</code>后面的<code>if</code>是过滤条件，不能带<code>else</code></li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可以加判断,满足条件的加入列表,(for循环后面的if是判断,不能有else)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [4, 16, 36, 64, 100]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># for前面的if,else是表达式</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#89DDFF;">[-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用两层循环，可以生成全排列</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ABC</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">XYZ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#[&#39;AX&#39;, &#39;AY&#39;, &#39;AZ&#39;, &#39;BX&#39;, &#39;BY&#39;, &#39;BZ&#39;, &#39;CX&#39;, &#39;CY&#39;, &#39;CZ&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可以用来处理列表的值</span></span>
<span class="line"><span style="color:#A6ACCD;">L </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">IBM</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Apple</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lower</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> L</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># lower()把所有的字符串变成小写</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [&#39;hello&#39;, &#39;world&#39;, &#39;ibm&#39;, &#39;apple&#39;]</span></span></code></pre></div>`,46),e=[p];function t(c,r,i,y,D,F){return l(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};