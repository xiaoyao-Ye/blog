import{_ as s,o as n,c as a,U as l}from"./chunks/framework.655210d0.js";const A=JSON.parse('{"title":"create-xm","description":"","frontmatter":{},"headers":[],"relativePath":"Ghosteye/create-xm.md","filePath":"Ghosteye/create-xm.md","lastUpdated":1689762228000}'),p={name:"Ghosteye/create-xm.md"},o=l(`<h1 id="create-xm" tabindex="-1">create-xm <a class="header-anchor" href="#create-xm" aria-label="Permalink to &quot;create-xm&quot;">​</a></h1><blockquote><p>一个快速创建项目模板的 cli 工具</p></blockquote><h2 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板&quot;">​</a></h2><p>UI 框架模板</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C3E88D;">├─docs</span><span style="color:#A6ACCD;">                              </span><span style="color:#676E95;font-style:italic;"># 文档目录</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  index.md</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 文档首页</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  vite.config.ts</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 文档配置文件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─.vitepress</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 文档主题以及缓存文件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │  config.ts</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 文档界面配置</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─cache</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># 缓存文件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │  └─deps</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │      package.json</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │      vue.js</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │      vue.js.map</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │      _metadata.json</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─demo</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># 在组件文档中需要展示的组件集合</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  └─theme</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># 主题相关</span></span>
<span class="line"><span style="color:#C3E88D;">│  │      │  index.ts</span></span>
<span class="line"><span style="color:#C3E88D;">│  │      │</span></span>
<span class="line"><span style="color:#C3E88D;">│  │      └─style</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;"># 自定义主题样式文件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │         var.css</span></span>
<span class="line"><span style="color:#C3E88D;">│  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─components</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 组件文档</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  └─button</span></span>
<span class="line"><span style="color:#C3E88D;">│  │        index.md</span></span>
<span class="line"><span style="color:#C3E88D;">│  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  └─guide</span><span style="color:#A6ACCD;">                          </span><span style="color:#676E95;font-style:italic;"># 文档入口</span></span>
<span class="line"><span style="color:#C3E88D;">│       index.md</span></span>
<span class="line"><span style="color:#C3E88D;">│</span></span>
<span class="line"><span style="color:#C3E88D;">│─packages</span></span>
<span class="line"><span style="color:#C3E88D;">│  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  │─kits-ui</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># 组件文件包</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  └─button</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 按钮示例组件文件夹</span></span>
<span class="line"><span style="color:#C3E88D;">│  │       index.vue</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># vue组件示例</span></span>
<span class="line"><span style="color:#C3E88D;">│  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  │─kits-ui-icons</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># icon文件包</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─src</span><span style="color:#A6ACCD;">                         </span><span style="color:#676E95;font-style:italic;"># icon组件文件夹</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─svg.ts</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># icon导出文件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  └─index.ts</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;"># icon组件包主入口</span></span>
<span class="line"><span style="color:#C3E88D;">│  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  └─kits-ui-theme</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 样式文件包</span></span>
<span class="line"><span style="color:#C3E88D;">│     ├─src</span><span style="color:#A6ACCD;">                         </span><span style="color:#676E95;font-style:italic;"># 各组件样式文件</span></span>
<span class="line"><span style="color:#C3E88D;">│     └─index.scss</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 样式文件主入口--包含部分全局变量</span></span>
<span class="line"><span style="color:#C3E88D;">│</span></span>
<span class="line"><span style="color:#C3E88D;">│─start</span><span style="color:#A6ACCD;">                             </span><span style="color:#676E95;font-style:italic;"># 预览页面(普通vue项目)</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─src</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─components</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 预览页面需要调试的组件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─router</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 当前路由文件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─app.vue</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  ├─main.ts</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 主入口文件</span></span>
<span class="line"><span style="color:#C3E88D;">│  │  └─style.css</span></span>
<span class="line"><span style="color:#C3E88D;">│  │</span></span>
<span class="line"><span style="color:#C3E88D;">│  └─index.html</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 预览页面的主体</span></span>
<span class="line"><span style="color:#C3E88D;">│</span></span>
<span class="line"><span style="color:#C3E88D;">└─scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">└─publish.sh</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 打包发布脚本</span></span></code></pre></div>`,5),e=[o];function t(c,i,r,y,C,D){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
