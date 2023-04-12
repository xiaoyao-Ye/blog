import{_ as s,o as a,c as n,a as l}from"./app.32965564.js";const A=JSON.parse('{"title":"node","description":"","frontmatter":{},"headers":[{"level":2,"title":"common API","slug":"common-api","link":"#common-api","children":[{"level":3,"title":"constant","slug":"constant","link":"#constant","children":[]},{"level":3,"title":"path","slug":"path","link":"#path","children":[]}]},{"level":2,"title":"shebang","slug":"shebang","link":"#shebang","children":[]},{"level":2,"title":"package.json","slug":"package-json","link":"#package-json","children":[]},{"level":2,"title":"import","slug":"import","link":"#import","children":[]}],"relativePath":"handbook/node.md","lastUpdated":1681277160000}'),p={name:"handbook/node.md"},o=l(`<h1 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h1><h2 id="common-api" tabindex="-1">common API <a class="header-anchor" href="#common-api" aria-hidden="true">#</a></h2><h3 id="constant" tabindex="-1">constant <a class="header-anchor" href="#constant" aria-hidden="true">#</a></h3><blockquote><p>node \u5185\u7F6E\u7684\u5E38\u91CF</p></blockquote><ul><li><code>__dirname</code> \u52A8\u6001\u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u6240\u5C5E\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84</li><li><code>__filename</code> \u52A8\u6001\u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84</li></ul><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-hidden="true">#</a></h3><ul><li><p><code>resolve</code> \u5C06\u591A\u4E2A\u8DEF\u5F84\u89E3\u6790\u4E3A\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84.</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u8BED\u6CD5\u4E3A \`path.resolve([...paths])\`</span></span>
<span class="line"><span style="color:#676E95;">// \`...paths\` \u662F\u4E00\u4E2A\u8DEF\u5F84\u6216\u591A\u4E2A\u8DEF\u5F84\u7247\u6BB5, \u5982\u679C\u4F20\u5165\u8DEF\u5F84\u4E3A\u7A7A, \u5219\u8FD4\u56DE\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/foo/bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./baz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD4\u56DE: &#39;/foo/bar/baz&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/foo/bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/tmp/file/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD4\u56DE: &#39;/tmp/file&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wwwroot</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static_files/png/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../gif/image.gif</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u5982\u679C\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u662F /home/myself/node\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">// \u5219\u8FD4\u56DE &#39;/home/myself/node/wwwroot/static_files/gif/image.gif&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>join</code> \u5C06\u591A\u4E2A\u8DEF\u5F84\u62FC\u63A5\u4E3A\u4E00\u4E2A\u8DEF\u5F84.</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u8BED\u6CD5\u4E3A \`path.join([...paths])\`</span></span>
<span class="line"><span style="color:#676E95;">// \`...paths\` \u662F\u4E00\u4E2A\u8DEF\u5F84\u6216\u591A\u4E2A\u8DEF\u5F84\u7247\u6BB5,</span></span>
<span class="line"><span style="color:#676E95;">// \u4EFB\u4F55\u4E00\u4E2A\u8DEF\u5F84\u7247\u6BB5\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5219\u4E4B\u524D\u7684\u8DEF\u5F84\u7247\u6BB5\u90FD\u4F1A\u88AB\u5FFD\u7565</span></span>
<span class="line"><span style="color:#676E95;">// \u5982\u679C\u62FC\u63A5\u540E\u7684\u8DEF\u5F84\u662F\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5219\u8FD4\u56DE\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u8DEF\u5F84</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz/asdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">quux</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">..</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD4\u56DE: &#39;/foo/bar/baz/asdf&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wwwroot</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static_files/png/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../gif/image.gif</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u5982\u679C\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u662F /home/myself/node\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">// \u5219\u8FD4\u56DE &#39;wwwroot/static_files/gif/image.gif&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>extname</code> \u83B7\u53D6\u6587\u4EF6\u7684\u6269\u5C55\u540D.</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B83\u7684\u8BED\u6CD5\u4E3Apath.extname(path)\u3002</span></span>
<span class="line"><span style="color:#676E95;">// \u5176\u4E2Dpath\u662F\u6587\u4EF6\u8DEF\u5F84\u3002\u5982\u679C\u6587\u4EF6\u6CA1\u6709\u6269\u5C55\u540D\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz/asdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">quux</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">..</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD4\u56DE: &#39;/foo/bar/baz/asdf&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wwwroot</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">static_files/png/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../gif/image.gif</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u5982\u679C\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u662F /home/myself/node\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">// \u5219\u8FD4\u56DE &#39;wwwroot/static_files/gif/image.gif&#39;</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="shebang" tabindex="-1">shebang <a class="header-anchor" href="#shebang" aria-hidden="true">#</a></h2><p>Shebang \u662F\u4E00\u79CD\u5728 Unix \u548C Linux \u7CFB\u7EDF\u4E2D\u4F7F\u7528\u7684\u7279\u6B8A\u6CE8\u91CA\uFF0C\u901A\u5E38\u7528\u4E8E\u6307\u5B9A\u811A\u672C\u6587\u4EF6\u7684\u89E3\u91CA\u5668\u3002\u5728\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u6DFB\u52A0\u4E00\u4E2A\u4E95\u53F7\uFF08#\uFF09\u548C\u4E00\u4E2A\u60CA\u53F9\u53F7\uFF08!\uFF09\uFF0C\u7D27\u63A5\u7740\u662F\u89E3\u91CA\u5668\u7684\u5B8C\u6574\u8DEF\u5F84\u6216\u53EF\u6267\u884C\u6587\u4EF6\u540D\u3002\u4F8B\u5982\uFF0C<code>#!/usr/bin/python</code> <code>#!/usr/bin/env node</code>\u3002\u5F53\u76F4\u63A5\u8C03\u7528\u811A\u672C\u6587\u4EF6\u65F6\uFF0C\u8C03\u7528\u8005\u4F1A\u5229\u7528 Shebang \u63D0\u4F9B\u7684\u4FE1\u606F\u8C03\u7528\u76F8\u5E94\u7684\u89E3\u91CA\u5668\uFF0C\u4ECE\u800C\u4F7F\u5F97\u811A\u672C\u6587\u4EF6\u7684\u8C03\u7528\u65B9\u5F0F\u4E0E\u666E\u901A\u7684\u53EF\u6267\u884C\u6587\u4EF6\u7C7B\u4F3C\u3002</p><p>Shebang \u7684\u4F5C\u7528\u662F\u6307\u5B9A\u811A\u672C\u6587\u4EF6\u7684\u89E3\u91CA\u5668\u3002</p><p><code>#!/usr/bin/env python</code> \u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D, \u7528\u4E86 env. \u4F7F\u7528 env \u548C\u4E0D\u4F7F\u7528 env \u7684\u533A\u522B\u5728\u4E8E\uFF0Cenv \u5C06\u5728 PATH \u73AF\u5883\u53D8\u91CF\u4E2D\u67E5\u627E python\uFF0C\u800C\u4E0D\u662F\u5728\u56FA\u5B9A\u7684\u8DEF\u5F84\u4E2D\u67E5\u627E\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u53EF\u4EE5\u907F\u514D\u5728\u4E0D\u540C\u7684\u7CFB\u7EDF\u4E0A\u4F7F\u7528\u4E0D\u540C\u7684 Python \u89E3\u91CA\u5668\u6240\u5E26\u6765\u7684\u95EE\u9898\u3002</p><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h2><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u53EF\u6267\u884C\u6587\u4EF6, \u4ECE npm \u4E0A\u5B89\u88C5\u8FD9\u4E2A\u5305\u540E, \u4F7F\u7528 test \u547D\u4EE4\u4F1A\u6267\u884C\u8FD9\u4E2Aindex.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">bin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// or</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u53EF\u914D\u7F6E\u4E3A\u5BF9\u8C61\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">bin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// test xx</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">xx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./xx.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// test zz</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">zz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./zz.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="import" tabindex="-1">import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><p>\u5F53 node \u4E2D\u9700\u8981\u5BFC\u5165\u4E00\u4E2A\u6587\u4EF6\u65F6, \u4F7F\u7528 import \u5BFC\u5165\u9700\u8981\u7684\u662F\u4E00\u4E2A fileURL, \u4E0D\u80FD\u76F4\u63A5\u662F path</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>await import(url.pathToFileURL(resolve(&#39;./xx.js&#39;)).toString());</code> \u8FD9\u79CD\u65B9\u5F0F\u8F6C\u6362.</p>`,16),e=[o];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
