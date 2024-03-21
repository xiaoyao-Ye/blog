import{_ as s,o as n,c as l,U as a}from"./chunks/framework.97dce334.js";const F=JSON.parse('{"title":"window powershell","description":"","frontmatter":{},"headers":[],"relativePath":"other/terminal.md","filePath":"other/terminal.md","lastUpdated":1709543452000}'),o={name:"other/terminal.md"},p=a(`<h1 id="window-powershell" tabindex="-1">window powershell <a class="header-anchor" href="#window-powershell" aria-label="Permalink to &quot;window powershell&quot;">​</a></h1><ol><li>打开命令行通过 <code>echo $profile</code> 获取 <code>Microsoft.PowerShell_profile.ps1</code> 的位置(如果没有可以自己创建一个<code>C:\\Users\\Admin\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1</code>)</li><li>配置你自己的命令</li><li>重启命令行输入命令看是否生效, 不生效可以使用 <a href="https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3" target="_blank" rel="noreferrer">Set-ExecutionPolicy</a> 设置权限</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># To use @antfu/ni, Remove-Item the alias &#39;ni&#39; of New-Item </span></span>
<span class="line"><span style="color:#FFCB6B;">Remove-Item</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Alias:ni</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Force</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ErrorAction</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Ignore</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># The &#39;gc&#39; is the alias of Get-Content default</span></span>
<span class="line"><span style="color:#FFCB6B;">Remove-Item</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Alias:gc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Force</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ErrorAction</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Ignore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># @Args represent the parameters of input </span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">gc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@Args</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">degit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@Args</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">git.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$Args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:</span><span style="color:#A6ACCD;">$Args</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:10809</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">git.getproxy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">git.unproxy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span></span></code></pre></div>`,3),e=[p];function t(r,c,C,A,y,D){return n(),l("div",null,e)}const E=s(o,[["render",t]]);export{F as __pageData,E as default};
