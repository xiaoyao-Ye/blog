import{_ as s,o as n,c as a,a as p}from"./app.65f89517.js";const A=JSON.parse('{"title":"create-xm","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6A21\u677F","slug":"\u6A21\u677F","link":"#\u6A21\u677F","children":[]}],"relativePath":"Ghosteye/create-xm.md","lastUpdated":1680428392000}'),l={name:"Ghosteye/create-xm.md"},o=p(`<h1 id="create-xm" tabindex="-1">create-xm <a class="header-anchor" href="#create-xm" aria-hidden="true">#</a></h1><blockquote><p>\u4E00\u4E2A\u5FEB\u901F\u521B\u5EFA\u9879\u76EE\u6A21\u677F\u7684 cli \u5DE5\u5177</p></blockquote><h2 id="\u6A21\u677F" tabindex="-1">\u6A21\u677F <a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a></h2><p>UI \u6846\u67B6\u6A21\u677F</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#C3E88D;">\u251C\u2500docs</span><span style="color:#A6ACCD;">                              </span><span style="color:#676E95;"># \u6587\u6863\u76EE\u5F55</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  index.md</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;"># \u6587\u6863\u9996\u9875</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  vite.config.ts</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;"># \u6587\u6863\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u251C\u2500.vitepress</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;"># \u6587\u6863\u4E3B\u9898\u4EE5\u53CA\u7F13\u5B58\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502  config.ts</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;"># \u6587\u6863\u754C\u9762\u914D\u7F6E</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500cache</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;"># \u7F13\u5B58\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502  \u2514\u2500deps</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502      package.json</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502      vue.js</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502      vue.js.map</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502      _metadata.json</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500demo</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;"># \u5728\u7EC4\u4EF6\u6587\u6863\u4E2D\u9700\u8981\u5C55\u793A\u7684\u7EC4\u4EF6\u96C6\u5408</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2514\u2500theme</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;"># \u4E3B\u9898\u76F8\u5173</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502      \u2502  index.ts</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502      \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502      \u2514\u2500style</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;"># \u81EA\u5B9A\u4E49\u4E3B\u9898\u6837\u5F0F\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502         var.css</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u251C\u2500components</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;"># \u7EC4\u4EF6\u6587\u6863</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2514\u2500button</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502        index.md</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2514\u2500guide</span><span style="color:#A6ACCD;">                          </span><span style="color:#676E95;"># \u6587\u6863\u5165\u53E3</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502       index.md</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502\u2500packages</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502\u2500kits-ui</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;"># \u7EC4\u4EF6\u6587\u4EF6\u5305</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2514\u2500button</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;"># \u6309\u94AE\u793A\u4F8B\u7EC4\u4EF6\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502       index.vue</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;"># vue\u7EC4\u4EF6\u793A\u4F8B</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502\u2500kits-ui-icons</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;"># icon\u6587\u4EF6\u5305</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500src</span><span style="color:#A6ACCD;">                         </span><span style="color:#676E95;"># icon\u7EC4\u4EF6\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500svg.ts</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;"># icon\u5BFC\u51FA\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2514\u2500index.ts</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;"># icon\u7EC4\u4EF6\u5305\u4E3B\u5165\u53E3</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2514\u2500kits-ui-theme</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;"># \u6837\u5F0F\u6587\u4EF6\u5305</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502     \u251C\u2500src</span><span style="color:#A6ACCD;">                         </span><span style="color:#676E95;"># \u5404\u7EC4\u4EF6\u6837\u5F0F\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502     \u2514\u2500index.scss</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;"># \u6837\u5F0F\u6587\u4EF6\u4E3B\u5165\u53E3--\u5305\u542B\u90E8\u5206\u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502\u2500start</span><span style="color:#A6ACCD;">                             </span><span style="color:#676E95;"># \u9884\u89C8\u9875\u9762(\u666E\u901Avue\u9879\u76EE)</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u251C\u2500src</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500components</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;"># \u9884\u89C8\u9875\u9762\u9700\u8981\u8C03\u8BD5\u7684\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500router</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;"># \u5F53\u524D\u8DEF\u7531\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500app.vue</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u251C\u2500main.ts</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;"># \u4E3B\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502  \u2514\u2500style.css</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502  \u2514\u2500index.html</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;"># \u9884\u89C8\u9875\u9762\u7684\u4E3B\u4F53</span></span>
<span class="line"><span style="color:#C3E88D;">\u2502</span></span>
<span class="line"><span style="color:#C3E88D;">\u2514\u2500scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">\u2514\u2500publish.sh</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;"># \u6253\u5305\u53D1\u5E03\u811A\u672C</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(t,r,y,C,i,D){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{A as __pageData,d as default};
