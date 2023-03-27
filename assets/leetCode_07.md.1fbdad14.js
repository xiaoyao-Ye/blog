import{_ as s,o as n,c as a,a as l}from"./app.481da17f.js";const i=JSON.parse('{"title":"\u6574\u6570\u53CD\u8F6C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF","link":"#\u601D\u8DEF","children":[]},{"level":2,"title":"\u5B57\u7B26\u4E32\u53CD\u8F6C","slug":"\u5B57\u7B26\u4E32\u53CD\u8F6C","link":"#\u5B57\u7B26\u4E32\u53CD\u8F6C","children":[]},{"level":2,"title":"\u53D6\u6A21\u8FD0\u7B97","slug":"\u53D6\u6A21\u8FD0\u7B97","link":"#\u53D6\u6A21\u8FD0\u7B97","children":[]}],"relativePath":"leetCode/07.md","lastUpdated":1679885872000}'),p={name:"leetCode/07.md"},o=l(`<h1 id="\u6574\u6570\u53CD\u8F6C" tabindex="-1">\u6574\u6570\u53CD\u8F6C <a class="header-anchor" href="#\u6574\u6570\u53CD\u8F6C" aria-hidden="true">#</a></h1><blockquote><p>\u7ED9\u4F60\u4E00\u4E2A 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570 <code>x</code> \uFF0C\u8FD4\u56DE\u5C06 <code>x</code> \u4E2D\u7684\u6570\u5B57\u90E8\u5206\u53CD\u8F6C\u540E\u7684\u7ED3\u679C\u3002 \u5982\u679C\u53CD\u8F6C\u540E\u6574\u6570\u8D85\u8FC7 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570\u7684\u8303\u56F4 <code>[\u22122<sup>31</sup>, 2<sup>31</sup> \u2212 1]</code> \uFF0C\u5C31\u8FD4\u56DE 0\u3002</p></blockquote><p><strong>\u5047\u8BBE\u73AF\u5883\u4E0D\u5141\u8BB8\u5B58\u50A8 64 \u4F4D\u6574\u6570\uFF08\u6709\u7B26\u53F7\u6216\u65E0\u7B26\u53F7\uFF09\u3002</strong></p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Ax = 123</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A321</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Ax = -123</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A-321</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B 3\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Ax = 120</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B 4\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Ax = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li><code>-2<sup>31</sup>-1 &lt;= x &lt;= 2<sup>31</sup>-1</code></li></ul><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><ul><li>\u8F6C\u5B57\u7B26\u4E32, \u53CD\u8F6C\u56DE\u6765</li><li>\u4E00\u76F4\u53D6\u6570\u503C\u6700\u540E\u4E00\u4F4D, \u76F4\u5230 0</li></ul><h2 id="\u5B57\u7B26\u4E32\u53CD\u8F6C" tabindex="-1">\u5B57\u7B26\u4E32\u53CD\u8F6C <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u53CD\u8F6C" aria-hidden="true">#</a></h2><div class="language-TypeScript"><button class="copy"></button><span class="lang">TypeScript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unshift</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> (</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">**</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">31</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">**</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53D6\u6A21\u8FD0\u7B97" tabindex="-1">\u53D6\u6A21\u8FD0\u7B97 <a class="header-anchor" href="#\u53D6\u6A21\u8FD0\u7B97" aria-hidden="true">#</a></h2><div class="language-TypeScript"><button class="copy"></button><span class="lang">TypeScript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> () </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> (</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">**</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">31</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">**</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,19),e=[o];function c(t,r,F,y,D,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};