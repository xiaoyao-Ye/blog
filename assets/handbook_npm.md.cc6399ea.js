import{_ as s,o as n,c as a,a as p}from"./app.481da17f.js";const F=JSON.parse('{"title":"\u5305\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"package.json \u7248\u672C\u7BA1\u7406","slug":"package-json-\u7248\u672C\u7BA1\u7406","link":"#package-json-\u7248\u672C\u7BA1\u7406","children":[]},{"level":2,"title":"NPM \u6E90","slug":"npm-\u6E90","link":"#npm-\u6E90","children":[]},{"level":2,"title":"--save \u548C--save-dev","slug":"save-\u548C-save-dev","link":"#save-\u548C-save-dev","children":[]},{"level":2,"title":"dependencies \u548C devDependencies \u533A\u522B","slug":"dependencies-\u548C-devdependencies-\u533A\u522B","link":"#dependencies-\u548C-devdependencies-\u533A\u522B","children":[]},{"level":2,"title":"\u5E38\u7528\u5305","slug":"\u5E38\u7528\u5305","link":"#\u5E38\u7528\u5305","children":[{"level":3,"title":"vue3 \u81EA\u52A8\u5BFC\u5165","slug":"vue3-\u81EA\u52A8\u5BFC\u5165","link":"#vue3-\u81EA\u52A8\u5BFC\u5165","children":[]}]},{"level":2,"title":"pnpm","slug":"pnpm","link":"#pnpm","children":[{"level":3,"title":"monorepo","slug":"monorepo","link":"#monorepo","children":[]}]}],"relativePath":"handbook/npm.md","lastUpdated":1679885872000}'),l={name:"handbook/npm.md"},e=p(`<h1 id="\u5305\u7BA1\u7406" tabindex="-1">\u5305\u7BA1\u7406 <a class="header-anchor" href="#\u5305\u7BA1\u7406" aria-hidden="true">#</a></h1><h2 id="package-json-\u7248\u672C\u7BA1\u7406" tabindex="-1">package.json \u7248\u672C\u7BA1\u7406 <a class="header-anchor" href="#package-json-\u7248\u672C\u7BA1\u7406" aria-hidden="true">#</a></h2><blockquote><p>npm version [xxxx] -m&quot;\u53EF\u4EE5\u63D0\u4EA4\u6D88\u606F&quot; \u5982\u679C\u5F53\u524D\u5DF2\u7ECF\u6709 git \u5E93\u4E86,\u53EF\u80FD\u4F1A\u5931\u8D25.</p></blockquote><ul><li><code>npm version patch</code> \xA0 \xA0 \u5C0F\u6539\u52A8,\u6BD4\u5982\u4FEE\u590D\u4E86\u4E00\u4E2A bug \u4E4B\u7C7B\u7684,\u7248\u672C\u53F7\u53D8\u52A8: 1.0.0-&gt;1.0.1</li><li><code>npm version minor</code> \xA0 \xA0 \u589E\u52A0\u65B0\u529F\u80FD,\u4E0D\u5F71\u54CD\u73B0\u6709\u529F\u80FD, \u7248\u672C\u53F7\u53D8\u52A8: 1.0.0-&gt;1.1.0</li><li><code>npm version major</code> \xA0 \xA0 \u7834\u574F\u6A21\u5757\u5411\u540E\u7684\u517C\u5BB9\u6027, \u7248\u672C\u53F7\u53D8\u52A8: 1.0.0-&gt;2.0.0</li></ul><p>\u8BE6\u60C5\u67E5\u770B: <a href="https://docs.npmjs.com/cli/v6/using-npm/semver" target="_blank" rel="noreferrer">semver</a></p><h2 id="npm-\u6E90" tabindex="-1">NPM \u6E90 <a class="header-anchor" href="#npm-\u6E90" aria-hidden="true">#</a></h2><blockquote><p>\u5EFA\u8BAE\u4F7F\u7528 nrm \u8FDB\u884C\u7BA1\u7406:</p></blockquote><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5B89\u88C5nrm</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i -g nrm</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6240\u6709\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm ls</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm use taobao</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u624B\u52A8\u8BBE\u7F6E:</p></blockquote><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u6DD8\u5B9D\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u7248\u6DD8\u5B9D\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#676E95;"># npmjs npm\u672C\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#676E95;"># \u516C\u53F8\u963F\u91CC\u4E91\u6E90</span></span>
<span class="line"></span></code></pre></div><h2 id="save-\u548C-save-dev" tabindex="-1">--save \u548C--save-dev <a class="header-anchor" href="#save-\u548C-save-dev" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save \u4F1A\u628A\u4F60\u4E0B\u8F7D\u7684\u7B2C\u4E09\u65B9\u5305\u4FE1\u606F\u4FDD\u5B58\u5230 </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">dependencies</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev \u4F1A\u628A\u4F60\u4E0B\u8F7D\u7684\u7B2C\u4E09\u65B9\u5305\u4FDD\u5B58\u5230 </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">devDependencies</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#676E95;">// ---------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i \u63D2\u4EF6\u540D \u9ED8\u8BA4\u76F8\u5F53\u4E8E  npm i </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save \u63D2\u4EF6\u540D</span></span>
<span class="line"><span style="color:#676E95;">// ---------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add          \u4F1A\u5728  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">dependencies</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">      \u4E2D\u5B89\u88C5\u4E00\u4E2A\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span><span style="color:#89DDFF;">/-</span><span style="color:#A6ACCD;">dev  \u4F1A\u5728  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">devDependencies</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">   \u4E2D\u5B89\u88C5\u4E00\u4E2A\u5305</span></span>
<span class="line"></span></code></pre></div><h2 id="dependencies-\u548C-devdependencies-\u533A\u522B" tabindex="-1">dependencies \u548C devDependencies \u533A\u522B <a class="header-anchor" href="#dependencies-\u548C-devdependencies-\u533A\u522B" aria-hidden="true">#</a></h2><ul><li>dependencies\uFF1A \u91CC\u9762\u7684\u63D2\u4EF6\u4EE3\u8868\u5F00\u53D1\u6253\u5305\u540E\u4E5F\u4F1A\u8981\u7528 <ul><li>\u76F4\u63A5 npm i \u5C31\u884C\u4E86\uFF0C\u56E0\u4E3A npm i \u9ED8\u8BA4\u5C31\u662F --save</li><li>\u5982\u679C\u662F cnpm i \u90A3\u4E48\u5FC5\u987B\u81EA\u5DF1\u52A0 --save</li></ul></li><li>devDependencies \uFF1A\u5F00\u53D1\u65F6\u9700\u8981\uFF0C\u6B63\u5F0F\u4E0A\u7EBF\u4E0D\u9700\u8981 <ul><li>\u6240\u4EE5\u5BF9\u4E8E\u8FD9\u7C7B\u63D2\u4EF6\uFF0C\u8BB0\u5F97\u4E0B\u8F7D\u65F6\u4E00\u5B9A\u8981\u7528 --save-dev \u7684\u547D\u4EE4</li></ul></li></ul><h2 id="\u5E38\u7528\u5305" tabindex="-1">\u5E38\u7528\u5305 <a class="header-anchor" href="#\u5E38\u7528\u5305" aria-hidden="true">#</a></h2><h3 id="vue3-\u81EA\u52A8\u5BFC\u5165" tabindex="-1">vue3 \u81EA\u52A8\u5BFC\u5165 <a class="header-anchor" href="#vue3-\u81EA\u52A8\u5BFC\u5165" aria-hidden="true">#</a></h3><blockquote><p>Auto import APIs on-demand for Vite, Webpack, Rollup and esbuild. With TypeScript support. Powered by <a href="https://github.com/unjs/unplugin" target="_blank" rel="noreferrer">unplugin</a>.</p></blockquote><p>\u5B89\u88C5</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add -D unplugin-auto-import</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add -D unplugin-vue-components</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528</p><ul><li>\u652F\u6301 vite, webpack,rollup, esbuild \u7B49</li><li>vite \u793A\u4F8B:</li></ul><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// vite.config.ts</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> AutoImport </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-auto-import/vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Components </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-vue-components/vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">AutoImport</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">imports</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueuse/head</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Components</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">extensions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">dts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">vue</span><span style="color:#A6ACCD;">\\?</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">md</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">resolvers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">IconsResolver</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">componentPrefix</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h2><h3 id="monorepo" tabindex="-1">monorepo <a class="header-anchor" href="#monorepo" aria-hidden="true">#</a></h3><blockquote><p>pnpm \u7684 monorepo \u662F\u5C06\u591A\u4E2A\u9879\u76EE\u6216\u5305\u6587\u4EF6\u653E\u5230\u4E00\u4E2A git \u4ED3\u5E93\u4E2D\u8FDB\u884C\u7BA1\u7406\uFF0C\u591A\u4E2A\u9879\u76EE\u4E2D\u4F1A\u6709\u5171\u4EAB\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5206\u5305\u5F15\u7528\uFF0C\u800C\u6574\u4E2A\u9879\u76EE\u7531\u6839\u76EE\u5F55\u7BA1\u7406\u7684 dependencies \u52A0\u4E0A\u591A\u4E2A packages \u7EC4\u6210\uFF0C\u6BCF\u4E2A package \u4E5F\u53EF\u4EE5\u5728\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\u5F15\u5165\u81EA\u5DF1\u7684 dependencies \u3002</p></blockquote><p>\u4F7F\u7528\u573A\u666F:</p><ul><li>\u591A\u4E2A\u9879\u76EE\u4E2D\u6709\u5171\u4EAB\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5206\u5305\u5F15\u7528\uFF0C\u51CF\u5C11\u4EE3\u7801\u5197\u4F59</li><li>\u53EF\u4EE5\u628A\u539F\u672C\u4E00\u4E2A\u9879\u76EE\u7684\u591A\u4E2A\u6A21\u5757\u62C6\u5206\u6210\u591A\u4E2A packages \uFF0C\u5728 packages \u4E4B\u95F4\u76F8\u4E92\u5F15\u7528\uFF0C\u4E5F\u53EF\u4EE5\u5355\u72EC\u53D1\u5E03\u6210\u5305\uFF0C\u6781\u5927\u5730\u89E3\u51B3\u4E86\u9879\u76EE\u4E4B\u95F4\u4EE3\u7801\u65E0\u6CD5\u91CD\u7528\u7684\u75DB\u70B9</li><li>\u5728\u9879\u76EE\u6253\u5305\u6216\u8005\u7F16\u8BD1\u64CD\u4F5C\u65F6\u4E5F\u53EF\u91CD\u7528\u4E00\u5957\u914D\u7F6E\uFF0C\u901A\u5403\u6240\u6709 packages</li></ul><p>\u4F7F\u7528\u65B9\u5F0F:</p><ol><li><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\uFF0C\u521B\u5EFA\u4E00\u4E2A pnpm-workspace.yaml \u6587\u4EF6\uFF0C\u5E76\u8BBE\u7F6E packages \u5C5E\u6027\uFF0C\u6307\u5B9A\u9700\u8981\u7BA1\u7406\u7684 packages \u6587\u4EF6\u5939</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">packages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packages/**</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">docs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5B89\u88C5\u4F9D\u8D56 \u5B89\u88C5\u516C\u5171\u4F9D\u8D56\uFF1A\u5728\u6839\u76EE\u5F55\u4E0B\u5B89\u88C5\u516C\u5171\u4F9D\u8D56\uFF0C\u4F8B\u5982 TypeScript\uFF0C\u4F9B\u6240\u6709 packages \u4F7F\u7528\uFF0C\u547D\u4EE4\u5982\u4E0B:</p><blockquote><p>-w or --workspace-root</p></blockquote><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm install typescript -D -w</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u7279\u5B9A packages \u7684\u4F9D\u8D56\uFF1A\u4F8B\u5982\u5B89\u88C5 vue\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm install vue -r --filter \u9700\u8981\u5B89\u88C5\u8BE5\u5305\u7684\u5B50\u5305</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u591A\u4E2A packages \u7684\u4F9D\u8D56\uFF1A\u4F8B\u5982\u5B89\u88C5 /tools\uFF0C/server\uFF0C/web \u7684\u4F9D\u8D56\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i vue -r --filter tools server web</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5728 packages \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u5404\u81EA\u7684 package, \u4F8B\u5982 server\uFF0Ctools\uFF0Cweb</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#C3E88D;">\u251C\u2500\u2500 packages</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u251C\u2500\u2500 server</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u251C\u2500\u2500 tools</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u2514\u2500\u2500 web</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u5404\u81EA\u7684 package \u4E2D\u5F15\u7528\u516C\u5171\u4F9D\u8D56\uFF0C\u4F8B\u5982\u5728 web \u4E2D\u5F15\u7528 TypeScript\uFF1A</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#C3E88D;">\u251C\u2500\u2500 node_modules</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u251C\u2500\u2500 @types</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u2514\u2500\u2500 typescript -&gt; .pnpm/typescript@4.4.4/node_modules/typescript</span></span>
<span class="line"><span style="color:#C3E88D;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#C3E88D;">\u251C\u2500\u2500 packages</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u251C\u2500\u2500 server</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u251C\u2500\u2500 tools</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502   \u2514\u2500\u2500 web</span></span>
<span class="line"><span style="color:#C3E88D;">\u251C\u2500\u2500 pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#C3E88D;">\u2514\u2500\u2500 pnpm-workspace.yaml</span></span>
<span class="line"></span></code></pre></div><p>\u5728 package \u4E2D\u5F15\u7528\u5176\u4ED6 package \u7684\u4F9D\u8D56\uFF0C\u4F8B\u5982\u5728 server \u4E2D\u5F15\u7528 web \u4E2D\u7684 vue\uFF1A</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">import Vue from &#39;../web/node_modules/vue&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u6253\u5305\u7F16\u8BD1 \u6253\u5305\u7F16\u8BD1\u516C\u5171\u4F9D\u8D56\uFF1A\u4F8B\u5982\u7F16\u8BD1 TypeScript\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm tsc</span></span>
<span class="line"></span></code></pre></div></li></ol>`,29),o=[e];function c(t,r,i,D,y,d){return n(),a("div",null,o)}const A=s(l,[["render",c]]);export{F as __pageData,A as default};