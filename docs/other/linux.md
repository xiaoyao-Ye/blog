# Linux

## ssh

通过 ssh 远程登录实例的方式

```bash
ssh <username>@<IP address or domain name>

# 安装 Snappy 包管理器(不安装也可以使用apt-get)
sudo apt-get install snapd

# 安装 docker
sudo snap install docker
# or
sudo apt-get install docker.io

# 将用户添加到sudo组
sudo usermod -aG sudo <your_username>
# 重新登录或执行以下命令使更改生效
newgrp sudo

# 使用sudo命令启动Docker守护进程：
sudo systemctl start docker
# 将Docker守护进程的权限更改为当前用户：(目前这个是有效的, 前面三个都还是要通过sudo才能使用docker)
sudo chown "$USER":"$USER" /var/run/docker.sock
```
