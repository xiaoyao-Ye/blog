import{_ as s,o as n,c as a,U as l}from"./chunks/framework.97dce334.js";const A=JSON.parse('{"title":"DevOps","description":"","frontmatter":{},"headers":[],"relativePath":"other/DevOps.md","filePath":"other/DevOps.md","lastUpdated":1714377660000}'),p={name:"other/DevOps.md"},o=l(`<h1 id="devops" tabindex="-1">DevOps <a class="header-anchor" href="#devops" aria-label="Permalink to &quot;DevOps&quot;">​</a></h1><h2 id="gitlab-gitlab-runner" tabindex="-1">gitlab &amp; gitlab-runner <a class="header-anchor" href="#gitlab-gitlab-runner" aria-label="Permalink to &quot;gitlab &amp; gitlab-runner&quot;">​</a></h2><p>docker-compose.yml</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3.6</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gitlab</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># gitlab/gitlab-ee:latest 是企业版收费, gitlab/gitlab-ce:latest&quot; 是社区版免费</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gitlab/gitlab-ce:latest</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">privileged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 最好写服务器地址或域名(域名要设置解析)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hostname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">TZ</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">GITLAB_OMNIBUS_CONFIG</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">        external_url &#39;http://127.0.0.1&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">        gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222</span></span>
<span class="line"><span style="color:#C3E88D;">        gitlab_rails[&#39;time_zone&#39;] = &#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">        # Add any other gitlab.rb configuration here, each on its own line</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">80:80</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">443:443</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 22端口好像被ssh占用了</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2222:22</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./config:/etc/gitlab</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logs:/var/log/gitlab</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./data:/var/opt/gitlab</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">shm_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">256m</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gitlab-runner</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gitlab/gitlab-runner:latest</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab-runner</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">privileged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 这两步骤是为了让容器内的gitlab-runner可以访问到docker</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/docker:/usr/bin/dcoker</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 将当前目录的config文件，映射到容器的/etc/gitlab-runner目录</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./gitlab-runner:/etc/gitlab-runner</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 也是指定docker</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">RUNNER_EXECUTOR</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">depends_on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitlab</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gitlab</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">external</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 启动, gitlab初始化需要等大概5-10分钟</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 首次登录 gitlab 账号是 root 初始密码应该是在 [config?]/initial_root_password 文件中</span></span></code></pre></div><p>上面 gitlab-runner 的 volumes 可能不生效会导致连接 docker 主进程失败, 可以手动处理:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./gitlab-runner/config/config.toml</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># volumes = [&quot;/cache&quot;] 改成:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># volumes = [&quot;/cache&quot;, &quot;/usr/bin/docker:/usr/bin/docker&quot;, &quot;/var/run/docker.sock:/var/run/docker.sock&quot;]</span></span></code></pre></div><h2 id="ci-cd" tabindex="-1">CI/CD <a class="header-anchor" href="#ci-cd" aria-label="Permalink to &quot;CI/CD&quot;">​</a></h2><p>需要先创建 runner, 然后使用 runner 进行 CI/CD</p><p>gitlab setting 中找到 CI/CD-&gt;runners 注册 runner</p><p>在运行 gitlab 的命令行中输入: <code>docker exec -it gitlab-runner gitlab-runner register</code> 依次输入:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Enter the GitLab instance URL (for example, gitlab.com/):</span></span>
<span class="line"><span style="color:#FFCB6B;">http://服务器IP地址:端口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Enter the registration token:</span></span>
<span class="line"><span style="color:#FFCB6B;">上面创建runner的token</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Enter a description for the runner: || Enter tags for the runner (comma-separated): || xx name xx</span></span>
<span class="line"><span style="color:#FFCB6B;">runner</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 这个好像无所谓</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Enter an executor: docker-ssh, parallels, ssh, docker-ssh+machine, kubernetes, custom, docker, shell, virtualbox, docker+machine:</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Enter the default Docker image (for example, ruby:2.6):</span></span>
<span class="line"><span style="color:#FFCB6B;">node:16-alpine</span></span></code></pre></div><p>然后 gitlab 项目编写 <code>.gitlab-ci.yml</code> 文件, 上传触发</p><p>示例:</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># cache:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   key: ci-cache</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   paths:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     - &quot;node_modules/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">stages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker build . --tag clock</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 判断name=clock这个容器是否在运行，在运行的话就进行销毁</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">if [ $(docker ps -aq --filter name=clock) ]; then docker rm -f clock;fi</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker run -d -p 8080:80 --name clock clock</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">only</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span></code></pre></div><div class="language-Dockerfile"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> node:16-alpine </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> build-stage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">WORKDIR</span><span style="color:#A6ACCD;"> /app</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> corepack enable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> package.json pnpm-lock.yaml ./</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  pnpm install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> . .</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> pnpm build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> nginx:stable-alpine </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> production-stage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> --from=build-stage /app/dist /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#F78C6C;">EXPOSE</span><span style="color:#A6ACCD;"> 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">CMD</span><span style="color:#A6ACCD;"> [</span><span style="color:#C3E88D;">&quot;nginx&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#C3E88D;">&quot;-g&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#C3E88D;">&quot;daemon off;&quot;</span><span style="color:#A6ACCD;">]</span></span></code></pre></div><h2 id="other" tabindex="-1">Other <a class="header-anchor" href="#other" aria-label="Permalink to &quot;Other&quot;">​</a></h2><p>云服务服务器默认是只开启 443, 80, 22 端口的, 其他端口需要在控制台设置防火墙允许对应端口</p>`,18),e=[o];function t(c,r,y,i,C,D){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
