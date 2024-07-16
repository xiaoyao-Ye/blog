import{_ as s,o as a,c as n,U as l}from"./chunks/framework.97dce334.js";const D=JSON.parse('{"title":"编码规范","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/coding-specification.md","filePath":"handbook/coding-specification.md","lastUpdated":1721127893000}'),t={name:"handbook/coding-specification.md"},e=l(`<h1 id="编码规范" tabindex="-1">编码规范 <a class="header-anchor" href="#编码规范" aria-label="Permalink to &quot;编码规范&quot;">​</a></h1><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><ul><li>命名方式: 小驼峰方式 ( 构造函数使用大驼峰命名法 )</li><li>命名规则: 前缀为动词</li></ul><table><thead><tr><th>动词</th><th>含义</th><th>返回值</th></tr></thead><tbody><tr><td>can</td><td>判断是否可执行某个动作(权限)</td><td>函数返回一个布尔值。true：可执行；false：不可执行</td></tr><tr><td>has</td><td>判断是否含有某个值</td><td>函数返回一个布尔值。true：含有此值；false：不含有此值</td></tr><tr><td>is</td><td>判断是否为某个值</td><td>函数返回一个布尔值。true：为某个值；false：不为某个值</td></tr><tr><td>get</td><td>获取某个值</td><td>函数返回一个非布尔值</td></tr><tr><td>set</td><td>设置某个值</td><td>无返回值、返回是否设置成功或者返回链式对象</td></tr></tbody></table><h2 id="常见目录结构约定" tabindex="-1">常见目录结构约定 <a class="header-anchor" href="#常见目录结构约定" aria-label="Permalink to &quot;常见目录结构约定&quot;">​</a></h2><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C3E88D;">├── build                      // 构建相关</span></span>
<span class="line"><span style="color:#C3E88D;">├── config                     // 配置相关</span></span>
<span class="line"><span style="color:#C3E88D;">├── src                        // 源代码</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── api                    // 所有请求</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── assets                 // 主题 字体等静态资源</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── components             // 全局公用组件</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── directive              // 全局指令</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── filters                // 全局 filter</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── icons                  // 项目所有 svg icons</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── lang                   // 国际化 language</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── mock                   // 项目mock 模拟数据</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── router                 // 路由</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── store                  // 全局 store管理</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── styles                 // 全局样式</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── utils                  // 全局公用方法</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── vendor                 // 公用vendor</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── views                  // view</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── App.vue                // 入口页面</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── main.js                // 入口 加载组件 初始化等</span></span>
<span class="line"><span style="color:#C3E88D;">│   └── permission.js          // 权限管理</span></span>
<span class="line"><span style="color:#C3E88D;">├── static                     // 第三方不打包资源</span></span>
<span class="line"><span style="color:#C3E88D;">│   └── Tinymce                // 富文本</span></span>
<span class="line"><span style="color:#C3E88D;">├── .babelrc                   // babel-loader 配置</span></span>
<span class="line"><span style="color:#C3E88D;">├── eslintrc.js                // eslint 配置项</span></span>
<span class="line"><span style="color:#C3E88D;">├── .gitignore                 // git 忽略项</span></span>
<span class="line"><span style="color:#C3E88D;">├── favicon.ico                // favicon图标</span></span>
<span class="line"><span style="color:#C3E88D;">├── index.html                 // html模板</span></span>
<span class="line"><span style="color:#C3E88D;">└── package.json               // package.json</span></span></code></pre></div>`,6),p=[e];function o(c,i,r,d,h,y){return a(),n("div",null,p)}const E=s(t,[["render",o]]);export{D as __pageData,E as default};
