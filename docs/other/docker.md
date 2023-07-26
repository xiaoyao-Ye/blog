# Docker

## docker 中常用命令

- docker search xxx 查看 xxx 有哪些可用版本
- docker pull 从一个 Docker 的仓库服务器下拉一个镜像或仓库
- docker push 将一个镜像或者仓库推送到一个 Docker 的注册服务器
- docker images 查看是否已安装了对应镜像
- docker run 创建一个新容器，并在其中运行给定命令
  - -i 交互式操作。
  - -t 终端。
  - -d 进入后台运行, 想要进入容器需要使用指令 docker exec <容器 ID>
  - -p 映射容器内的网络端口到宿主机上
  - --name 指定容器名称 ?
  - -v /opt/docker_v/mysql/conf:/etc/mysql/conf.d 将主机/opt/docker_v/mysql/conf 目录挂载到容器的/etc/mysql/conf.d ?
- docker ps -a 查看所有容器
- docker kill <容器 ID> 关闭一个运行中的容器 (包括进程和所有相关资源)；
- docker stop <容器 ID> 停止一个容器
- docker start <容器 ID> 启动一个已经停止的容器
- docker restart 重启一个容器
- docker rm 删除给定的若干个容器
- docker rmi 删除给定的若干个容器
- docker cp 在容器和本地宿主系统之间复制文件中；

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
