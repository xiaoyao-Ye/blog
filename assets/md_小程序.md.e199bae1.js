import{_ as s,c as a,o as n,a as l}from"./app.09c894ff.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"mpvue","slug":"mpvue","link":"#mpvue","children":[]},{"level":3,"title":"\u6CE8\u610F!","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]},{"level":3,"title":"vue \u751F\u547D\u5468\u671F","slug":"vue-\u751F\u547D\u5468\u671F","link":"#vue-\u751F\u547D\u5468\u671F","children":[]},{"level":3,"title":"\u5C0F\u7A0B\u5E8F\u751F\u547D\u5468\u671F","slug":"\u5C0F\u7A0B\u5E8F\u751F\u547D\u5468\u671F","link":"#\u5C0F\u7A0B\u5E8F\u751F\u547D\u5468\u671F","children":[]},{"level":3,"title":"mpvue \u751F\u547D\u5468\u671F","slug":"mpvue-\u751F\u547D\u5468\u671F","link":"#mpvue-\u751F\u547D\u5468\u671F","children":[]},{"level":3,"title":"mpvue \u8BED\u6CD5","slug":"mpvue-\u8BED\u6CD5","link":"#mpvue-\u8BED\u6CD5","children":[]}],"relativePath":"md/\u5C0F\u7A0B\u5E8F.md","lastUpdated":1663409870000}'),e={name:"md/\u5C0F\u7A0B\u5E8F.md"},p=l(`<h3 id="mpvue" tabindex="-1">mpvue <a class="header-anchor" href="#mpvue" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u9879\u76EE\u7ED3\u6784</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;">build        </span><span style="color:#676E95;">// \u6253\u5305\u6784\u5EFA\u76F8\u5173\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;">config      </span><span style="color:#676E95;">// \u7528\u4E8E\u6253\u5305\u7684\u4E00\u4E9B\u53D8\u91CF\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;">dist        </span><span style="color:#676E95;">// \u5C0F\u7A0B\u5E8F\u9875\u9762\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;">src        </span><span style="color:#676E95;">// mpvue\u6E90\u4EE3\u7801</span></span>
<span class="line"><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;">static      </span><span style="color:#676E95;">// \u4E00\u4E9B\u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;">test        </span><span style="color:#676E95;">// \u6D4B\u8BD5\u76F8\u5173</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">babelrc      </span><span style="color:#676E95;">// js\u7684\u7F16\u8BD1\u914D\u7F6E</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editorconfig    </span><span style="color:#676E95;">// \u7F16\u8F91\u5668\u98CE\u683C</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gitignore    </span><span style="color:#676E95;">// git\u6587\u4EF6\u5FFD\u7565\u6E05\u5355</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">postcssrc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js    </span><span style="color:#676E95;">// \u8F6C\u6362css\u5230wxss\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html    </span><span style="color:#676E95;">// \u5165\u53E3\u9B54\u677F</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">package</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">lock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json  </span><span style="color:#676E95;">// node\u5305\u7248\u672C\u8BF4\u660E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json    </span><span style="color:#676E95;">// \u9879\u76EE\u63CF\u8FF0\u6587\u4EF6,\u9879\u76EE\u4F9D\u8D56\u9879\u63CF\u8FF0</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> project</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json  </span><span style="color:#676E95;">// \u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> README</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">md      </span><span style="color:#676E95;">// \u9879\u76EE\u8BF4\u660E\u6587\u4EF6</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F! <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><p>\u7528 mpvue \u8FDB\u884C\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5BF9\u7B26\u53F7,\u7A7A\u683C\u5F88\u654F\u611F.\u9700\u8981\u628A<code>eslint\u5173\u6389</code>.</p><h3 id="vue-\u751F\u547D\u5468\u671F" tabindex="-1">vue \u751F\u547D\u5468\u671F <a class="header-anchor" href="#vue-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h3><h3 id="\u5C0F\u7A0B\u5E8F\u751F\u547D\u5468\u671F" tabindex="-1">\u5C0F\u7A0B\u5E8F\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h3><h3 id="mpvue-\u751F\u547D\u5468\u671F" tabindex="-1">mpvue \u751F\u547D\u5468\u671F <a class="header-anchor" href="#mpvue-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h3><ul><li>mpvue \u751F\u547D\u5468\u671F\u5C31\u662F vue \u7684\u751F\u547D\u5468\u671F\u4E0E\u5C0F\u7A0B\u5E8F\u7684\u751F\u547D\u5468\u671F\u7ED3\u5408.</li><li><code>mpvue</code>\u4F1A\u5728\u5C0F\u7A0B\u5E8F<code>onReady</code>\u540E,\u518D\u53BB\u89E6\u53D1 vue mounted \u751F\u547D\u5468\u671F</li><li>\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50(<code>\u6240\u4EE5mpvue\u9879\u76EE\u5927\u591A\u60C5\u51B5\u4E0B\u76F4\u63A5\u7528vue\u7684\u751F\u547D\u5468\u671F\u5C31\u53EF\u4EE5\u4E86,\u6CE8\u610F:\u4E5F\u6709\u4F8B\u5916!</code>)</li></ul><h3 id="mpvue-\u8BED\u6CD5" tabindex="-1">mpvue \u8BED\u6CD5 <a class="header-anchor" href="#mpvue-\u8BED\u6CD5" aria-hidden="true">#</a></h3>`,9),o=[p];function c(t,r,i,D,y,d){return n(),a("div",null,o)}const C=s(e,[["render",c]]);export{u as __pageData,C as default};
