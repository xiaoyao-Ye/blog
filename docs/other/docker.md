# Docker

## docker 中常用命令

- `docker search xxx` 查看 xxx 有哪些可用版本
- `docker pull` 从一个 Docker 的仓库服务器下拉一个镜像或仓库
- `docker push` 将一个镜像或者仓库推送到一个 Docker 的注册服务器
- `docker build .` 以当前目录下的 Dockerfile 为基础构建镜像 --tag <镜像名称>
- `docker images` 查看是否已安装了对应镜像
- `docker run` 创建一个新容器，并在其中运行给定命令
  - `-i` 交互式操作。
  - `-t` 终端。
  - `-d` 进入后台运行, 想要进入容器需要使用指令 docker exec <容器 ID>
  - `-p` 映射容器内的网络端口到宿主机上 -p <宿主机端口:容器内端口>
  - `--name` 指定容器名称
  - `-v` /opt/docker_v/mysql/conf:/etc/mysql/conf.d 将主机/opt/docker_v/mysql/conf 目录挂载到容器的/etc/mysql/conf.d ?
- `docker ps -a` 查看所有容器
- `docker kill <容器 ID>` 关闭一个运行中的容器 (包括进程和所有相关资源)
- `docker stop <容器 ID>` 停止一个容器
- `docker start <容器 ID>` 启动一个已经停止的容器
- `docker restart <容器 ID>` 重启一个容器
- `docker rm <容器 ID>` 删除给定的若干个容器
- `docker rmi <容器 ID>` 删除给定的若干个容器
- `docker cp` 在容器和本地宿主系统之间复制文件中

## docker 中运行 mysql

```bash
docker pull mysql:latest
docker run --name xxx -p 3333:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
docker exec -it xxx/容器ID bash # -it 提供交互式环境 bash 进入实例后启动 bash 程序
mysql -u root -p # 登陆数据库
create database mangosteen charset=utf8; # 新建数据库
exit # 退出数据库&宿主机
```

## docker 容器中 mysql 时区问题

> docker 中运行 mysql 默认时区就是 UTC

1. 新启动一个容器的话, 只要在启动容器的时候带上参数即可:
   `-e TZ=Asia/Shanghai`
2. 已启动的容器需要修改配置(重启才能生效--永久有效)

```bash
date
ln -sf /usr/share/zoneinfo/Shanghai /etc/localtime
# 退出重启docker
exit
docker restart 容器ID
```

## docker 使用宿主机的 ssh 秘钥

如果你的本地 SSH 代理正在运行，扩展程序(vscode)将自动转发你的本地 SSH 代理。

如果没有运行(mac 一般会默认运行, Linux 和 windows 不会)需要自己运行以下命令(`管理员PowerShell`):

```bash
# Make sure you're running as an Administrator
Set-Service ssh-agent -StartupType Automatic
Start-service ssh-agent
Get-Service ssh-agent
```

并将 ssh 添加到代理:

`ssh-add $HOME/.ssh/id_rsa` 或者是 github_rsa 这种自己生成的 ssh 密钥名字

## Dockerfile

- `FROM` 指定基础镜像，例如 `FROM ubuntu:18.04 as builder` as builder 是给阶段命名。
- `RUN` 执行命令并构建镜像，例如 `RUN apt-get update && apt-get install -y python3`。
- `WORKDIR` 设置工作目录，例如 `WORKDIR /app`。
- `COPY` 复制文件或目录到镜像中，例如 `COPY . /app`。
- `ADD` 类似于 COPY，但可以处理远程 URL 和解压 tar 文件。
- `ENV` 设置环境变量，例如 `ENV NAME=John`。
- `EXPOSE` 暴露容器端口，例如 `EXPOSE 8080`。
- `CMD` 指定容器启动时执行的命令，例如 `CMD ["python3", "app.py"]`。
- `ENTRYPOINT` 指定容器启动时执行的命令，与 CMD 的区别是可以接受用户输入的参数，例如 `ENTRYPOINT ["python3", "app.py"]`。
- `ARG` 定义构建镜像时的变量，例如 `ARG VERSION=1.0`。

以下技巧减少构建镜像的大小和时间:

- 使用 alpine 镜像
- 先 COPY package.json 然后 npm install 之后在 COPY 项目其他文件, 这样每次打包镜像只要 package.json 没有变化就不会重新 install
- 例如前端项目打包后真正需要部署的是 dist 相关的文件, 可以使用多阶段构建, 在第二个阶段 COPY dist 目录和 package.json 仅安装生产环境依赖(--production), 部署到 nginx
- 使用 ARG 增加构建灵活性, ARG 是构建时的参数，ENV 时运行时的变量, 二者结合起来使用可以增加构建灵活性
- CMD 结合 ENTRYPOINT, 配置 ENTRYPOINT 在运行镜像时携带的参数会是 ENTRYPOINT 中的额外参数, 而 CMD 会是覆盖参数. 也就是配置 CMD 运行时携带参数会覆盖掉 CMD 中的参数, 可以同时配置 ENTRYPOINT 和 CMD, 前者一定会执行, 后者可以根据运行时命令替换(类似默认值?) 用 CMD 比较多
- COPY 和 ADD 都可以把宿主机的文件复制到容器内, ADD 复制 tar.gz 文件会解压. 用 COPY 比较多

```Dockerfile
FROM node:16-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

## Linux

- `systemctl start docker` 启动 docker
- `systemctl restart docker` 重启 docker
- `systemctl stop docker` 关闭 docker
