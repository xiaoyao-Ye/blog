import{_ as s,o as n,c as a,a as l}from"./app.e159cec9.js";const i=JSON.parse('{"title":"\u79FB\u9664\u5143\u7D20","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u66B4\u529B","slug":"\u66B4\u529B","link":"#\u66B4\u529B","children":[]},{"level":2,"title":"\u53CC\u6307\u9488","slug":"\u53CC\u6307\u9488","link":"#\u53CC\u6307\u9488","children":[]},{"level":2,"title":"\u53CC\u6307\u9488\u4F18\u5316","slug":"\u53CC\u6307\u9488\u4F18\u5316","link":"#\u53CC\u6307\u9488\u4F18\u5316","children":[]}],"relativePath":"leetCode/27.md","lastUpdated":1682597271000}'),p={name:"leetCode/27.md"},o=l(`<h1 id="\u79FB\u9664\u5143\u7D20" tabindex="-1">\u79FB\u9664\u5143\u7D20 <a class="header-anchor" href="#\u79FB\u9664\u5143\u7D20" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E00\u4E2A\u6570\u7EC4 <code>nums</code> \u548C\u4E00\u4E2A\u503C <code>val</code> \uFF0C\u4F60\u9700\u8981 \u539F\u5730 \u79FB\u9664\u6240\u6709\u6570\u503C\u7B49\u4E8E <code>val</code> \u7684\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u79FB\u9664\u540E\u6570\u7EC4\u7684\u65B0\u957F\u5EA6\u3002</p><p>\u4E0D\u8981\u4F7F\u7528\u989D\u5916\u7684\u6570\u7EC4\u7A7A\u95F4\uFF0C\u4F60\u5FC5\u987B\u4EC5\u4F7F\u7528 <code>O(1)</code> \u989D\u5916\u7A7A\u95F4\u5E76 \u539F\u5730 <strong>\u4FEE\u6539\u8F93\u5165\u6570\u7EC4</strong>\u3002</p><p>\u5143\u7D20\u7684\u987A\u5E8F\u53EF\u4EE5\u6539\u53D8\u3002\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002</p><p>\u8BF4\u660E:</p><p>\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u6570\u503C\u662F\u6574\u6570\uFF0C\u4F46\u8F93\u51FA\u7684\u7B54\u6848\u662F\u6570\u7EC4\u5462?</p><p>\u8BF7\u6CE8\u610F\uFF0C\u8F93\u5165\u6570\u7EC4\u662F\u4EE5\u300C\u5F15\u7528\u300D\u65B9\u5F0F\u4F20\u9012\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u5728\u51FD\u6570\u91CC\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u53EF\u89C1\u7684\u3002</p><p>\u4F60\u53EF\u4EE5\u60F3\u8C61\u5185\u90E8\u64CD\u4F5C\u5982\u4E0B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// nums \u662F\u4EE5\u201C\u5F15\u7528\u201D\u65B9\u5F0F\u4F20\u9012\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u5BF9\u5B9E\u53C2\u4F5C\u4EFB\u4F55\u62F7\u8D1D</span></span>
<span class="line"><span style="color:#A6ACCD;">int len = removeElement(nums, val);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5728\u51FD\u6570\u91CC\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u53EF\u89C1\u7684\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6839\u636E\u4F60\u7684\u51FD\u6570\u8FD4\u56DE\u7684\u957F\u5EA6, \u5B83\u4F1A\u6253\u5370\u51FA\u6570\u7EC4\u4E2D \u8BE5\u957F\u5EA6\u8303\u56F4\u5185 \u7684\u6240\u6709\u5143\u7D20\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">for (int i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(nums[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B 1\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [3,2,2,3], val = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A2, nums = [2,2]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 2, \u5E76\u4E14 nums \u4E2D\u7684\u524D\u4E24\u4E2A\u5143\u7D20\u5747\u4E3A 2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F8B\u5982\uFF0C\u51FD\u6570\u8FD4\u56DE\u7684\u65B0\u957F\u5EA6\u4E3A 2 \uFF0C\u800C nums = [2,2,3,3] \u6216 nums = [2,2,0,0]\uFF0C\u4E5F\u4F1A\u88AB\u89C6\u4F5C\u6B63\u786E\u7B54\u6848\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Anums = [0,1,2,2,3,0,4,2], val = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A5, nums = [0,1,4,0,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u91CA\uFF1A\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 5, \u5E76\u4E14 nums \u4E2D\u7684\u524D\u4E94\u4E2A\u5143\u7D20\u4E3A 0, 1, 3, 0, 4\u3002\u6CE8\u610F\u8FD9\u4E94\u4E2A\u5143\u7D20\u53EF\u4E3A\u4EFB\u610F\u987A\u5E8F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li><code>0 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 100</code></li></ul><h2 id="\u66B4\u529B" tabindex="-1">\u66B4\u529B <a class="header-anchor" href="#\u66B4\u529B" aria-hidden="true">#</a></h2><blockquote><p>\u4E2A\u4EBA\u62D9\u89C1\u7684\u89E3\u6CD5</p></blockquote><div class="language-TypeScript"><button class="copy"></button><span class="lang">TypeScript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeElement</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">--;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53CC\u6307\u9488" tabindex="-1">\u53CC\u6307\u9488 <a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a></h2><div class="language-TypeScript"><button class="copy"></button><span class="lang">TypeScript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeElement</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53CC\u6307\u9488\u4F18\u5316" tabindex="-1">\u53CC\u6307\u9488\u4F18\u5316 <a class="header-anchor" href="#\u53CC\u6307\u9488\u4F18\u5316" aria-hidden="true">#</a></h2><div class="language-TypeScript"><button class="copy"></button><span class="lang">TypeScript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeElement</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">--;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,22),e=[o];function c(t,r,y,F,D,C){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{i as __pageData,u as default};