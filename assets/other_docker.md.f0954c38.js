import{_ as s,o as a,c as l,U as o}from"./chunks/framework.97dce334.js";const A=JSON.parse('{"title":"Docker","description":"","frontmatter":{},"headers":[],"relativePath":"other/docker.md","filePath":"other/docker.md","lastUpdated":1698637990000}'),e={name:"other/docker.md"},n=o(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h1><h2 id="docker-中常用命令" tabindex="-1">docker 中常用命令 <a class="header-anchor" href="#docker-中常用命令" aria-label="Permalink to &quot;docker 中常用命令&quot;">​</a></h2><ul><li><code>docker search xxx</code> 查看 xxx 有哪些可用版本</li><li><code>docker pull</code> 从一个 Docker 的仓库服务器下拉一个镜像或仓库</li><li><code>docker push</code> 将一个镜像或者仓库推送到一个 Docker 的注册服务器</li><li><code>docker build .</code> 以当前目录下的 Dockerfile 为基础构建镜像 --tag &lt;镜像名称&gt;</li><li><code>docker images</code> 查看是否已安装了对应镜像</li><li><code>docker run</code> 创建一个新容器，并在其中运行给定命令 <ul><li><code>-i</code> 交互式操作。</li><li><code>-t</code> 终端。</li><li><code>-d</code> 进入后台运行, 想要进入容器需要使用指令 docker exec &lt;容器 ID&gt;</li><li><code>-p</code> 映射容器内的网络端口到宿主机上 -p &lt;宿主机端口:容器内端口&gt;</li><li><code>--name</code> 指定容器名称</li><li><code>-v</code> /opt/docker_v/mysql/conf:/etc/mysql/conf.d 将主机/opt/docker_v/mysql/conf 目录挂载到容器的/etc/mysql/conf.d ?</li></ul></li><li><code>docker ps -a</code> 查看所有容器</li><li><code>docker kill &lt;容器 ID&gt;</code> 关闭一个运行中的容器 (包括进程和所有相关资源)</li><li><code>docker stop &lt;容器 ID&gt;</code> 停止一个容器</li><li><code>docker start &lt;容器 ID&gt;</code> 启动一个已经停止的容器</li><li><code>docker restart &lt;容器 ID&gt;</code> 重启一个容器</li><li><code>docker rm &lt;容器 ID&gt;</code> 删除给定的若干个容器</li><li><code>docker rmi &lt;镜像 ID&gt;</code> 删除给定的若干个镜像</li><li><code>docker cp</code> 在容器和本地宿主系统之间复制文件中</li></ul><h2 id="docker-中运行-mysql" tabindex="-1">docker 中运行 mysql <a class="header-anchor" href="#docker-中运行-mysql" aria-label="Permalink to &quot;docker 中运行 mysql&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:latest</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3333</span><span style="color:#C3E88D;">:3306</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=</span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx/容器ID</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># -it 提供交互式环境 bash 进入实例后启动 bash 程序</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 登陆数据库</span></span>
<span class="line"><span style="color:#FFCB6B;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mangosteen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">charset=utf8</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 新建数据库</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 退出数据库&amp;宿主机</span></span></code></pre></div><h2 id="docker-容器中-mysql-时区问题" tabindex="-1">docker 容器中 mysql 时区问题 <a class="header-anchor" href="#docker-容器中-mysql-时区问题" aria-label="Permalink to &quot;docker 容器中 mysql 时区问题&quot;">​</a></h2><blockquote><p>docker 中运行 mysql 默认时区就是 UTC</p></blockquote><ol><li>新启动一个容器的话, 只要在启动容器的时候带上参数即可: <code>-e TZ=Asia/Shanghai</code></li><li>已启动的容器需要修改配置(重启才能生效--永久有效)</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">date</span></span>
<span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/zoneinfo/Shanghai</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/localtime</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 退出重启docker</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID</span></span></code></pre></div><h2 id="docker-使用宿主机的-ssh-秘钥" tabindex="-1">docker 使用宿主机的 ssh 秘钥 <a class="header-anchor" href="#docker-使用宿主机的-ssh-秘钥" aria-label="Permalink to &quot;docker 使用宿主机的 ssh 秘钥&quot;">​</a></h2><p>如果你的本地 SSH 代理正在运行，扩展程序(vscode)将自动转发你的本地 SSH 代理。</p><p>如果没有运行(mac 一般会默认运行, Linux 和 windows 不会)需要自己运行以下命令(<code>管理员PowerShell</code>):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Make sure you&#39;re running as an Administrator</span></span>
<span class="line"><span style="color:#FFCB6B;">Set-Service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh-agent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-StartupType</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Automatic</span></span>
<span class="line"><span style="color:#FFCB6B;">Start-service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh-agent</span></span>
<span class="line"><span style="color:#FFCB6B;">Get-Service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh-agent</span></span></code></pre></div><p>并将 ssh 添加到代理:</p><p><code>ssh-add $HOME/.ssh/id_rsa</code> 或者是 github_rsa 这种自己生成的 ssh 密钥名字</p><h2 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h2><ul><li><code>FROM</code> 指定基础镜像，例如 <code>FROM ubuntu:18.04 as builder</code> as builder 是给阶段命名。</li><li><code>RUN</code> 执行命令并构建镜像，例如 <code>RUN apt-get update &amp;&amp; apt-get install -y python3</code>。</li><li><code>WORKDIR</code> 设置工作目录，例如 <code>WORKDIR /app</code>。</li><li><code>COPY</code> 复制文件或目录到镜像中，例如 <code>COPY . /app</code>。</li><li><code>ADD</code> 类似于 COPY，但可以处理远程 URL 和解压 tar 文件。</li><li><code>ENV</code> 设置环境变量，例如 <code>ENV NAME=John</code>。</li><li><code>EXPOSE</code> 暴露容器端口，例如 <code>EXPOSE 8080</code>。</li><li><code>CMD</code> 指定容器启动时执行的命令，例如 <code>CMD [&quot;python3&quot;, &quot;app.py&quot;]</code>。</li><li><code>ENTRYPOINT</code> 指定容器启动时执行的命令，与 CMD 的区别是可以接受用户输入的参数，例如 <code>ENTRYPOINT [&quot;python3&quot;, &quot;app.py&quot;]</code>。</li><li><code>ARG</code> 定义构建镜像时的变量，例如 <code>ARG VERSION=1.0</code>。</li></ul><p>以下技巧减少构建镜像的大小和时间:</p><ul><li>使用 alpine 镜像</li><li>先 COPY package.json 然后 npm install 之后在 COPY 项目其他文件, 这样每次打包镜像只要 package.json 没有变化就不会重新 install</li><li>例如前端项目打包后真正需要部署的是 dist 相关的文件, 可以使用多阶段构建, 在第二个阶段 COPY dist 目录和 package.json 仅安装生产环境依赖(--production), 部署到 nginx</li><li>使用 ARG 增加构建灵活性, ARG 是构建时的参数，ENV 时运行时的变量, 二者结合起来使用可以增加构建灵活性</li><li>CMD 结合 ENTRYPOINT, 配置 ENTRYPOINT 在运行镜像时携带的参数会是 ENTRYPOINT 中的额外参数, 而 CMD 会是覆盖参数. 也就是配置 CMD 运行时携带参数会覆盖掉 CMD 中的参数, 可以同时配置 ENTRYPOINT 和 CMD, 前者一定会执行, 后者可以根据运行时命令替换(类似默认值?) 用 CMD 比较多</li><li>COPY 和 ADD 都可以把宿主机的文件复制到容器内, ADD 复制 tar.gz 文件会解压. 用 COPY 比较多</li></ul><div class="language-Dockerfile"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> node:16-alpine </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> build-stage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">WORKDIR</span><span style="color:#A6ACCD;"> /app</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> corepack enable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> .npmrc package.json pnpm-lock.yaml ./</span></span>
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
<span class="line"><span style="color:#F78C6C;">CMD</span><span style="color:#A6ACCD;"> [</span><span style="color:#C3E88D;">&quot;nginx&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#C3E88D;">&quot;-g&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#C3E88D;">&quot;daemon off;&quot;</span><span style="color:#A6ACCD;">]</span></span></code></pre></div><h2 id="buildkit" tabindex="-1">BuildKit <a class="header-anchor" href="#buildkit" aria-label="Permalink to &quot;BuildKit&quot;">​</a></h2><p>默认好像是禁用的, 启用需要前往 <code>/etc/docker/daemon.json</code> 配置, 如果 daemon.json 文件不存在就 <code>touch</code> 新建一个</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">features</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">buildkit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>然后重新启动 Docker 守护进程.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span></code></pre></div><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><ul><li><code>systemctl start docker</code> 启动 docker</li><li><code>systemctl restart docker</code> 重启 docker</li><li><code>systemctl stop docker</code> 关闭 docker</li><li><code>sudo apt remove --purge docker.io</code> 删除 docker</li></ul><h2 id="常用镜像" tabindex="-1">常用镜像 <a class="header-anchor" href="#常用镜像" aria-label="Permalink to &quot;常用镜像&quot;">​</a></h2><ul><li><code>gitlab/gitlab-ce</code> gitlab-ce 是一个开源的社区版 GitLab</li><li><code>node:16-alpine</code> node:16-alpine 是一个基于 Alpine 的 Node.js</li><li><code>nginx:stable-alpine</code> nginx:stable-alpine 是一个基于 Alpine 的 Nginx</li></ul>`,29),p=[n];function c(t,r,i,d,C,y){return a(),l("div",null,p)}const u=s(e,[["render",c]]);export{A as __pageData,u as default};
