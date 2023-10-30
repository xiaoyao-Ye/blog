# DevOps

## gitlab & gitlab-runner

docker-compose.yml

```yml
version: "3.6"
name: gitlab
services:
  gitlab:
    # gitlab/gitlab-ee:latest 是企业版收费, gitlab/gitlab-ce:latest" 是社区版免费
    image: "gitlab/gitlab-ce:latest"
    container_name: gitlab
    restart: always
    privileged: true
    # 最好写服务器地址或域名(域名要设置解析)
    hostname: "127.0.0.1"
    environment:
      TZ: "Asia/Shanghai"
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://127.0.0.1'
        gitlab_rails['gitlab_shell_ssh_port'] = 2222
        gitlab_rails['time_zone'] = 'Asia/Shanghai'
        # Add any other gitlab.rb configuration here, each on its own line
    ports:
      - "80:80"
      - "443:443"
      # 22端口好像被ssh占用了
      - "2222:22"
    volumes:
      - "./config:/etc/gitlab"
      - "./logs:/var/log/gitlab"
      - "./data:/var/opt/gitlab"
    shm_size: "256m"

  gitlab-runner:
    image: "gitlab/gitlab-runner:latest"
    container_name: gitlab-runner
    privileged: true
    restart: always
    volumes:
      # 这两步骤是为了让容器内的gitlab-runner可以访问到docker
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/dcoker
      # 将当前目录的config文件，映射到容器的/etc/gitlab-runner目录
      - ./gitlab-runner:/etc/gitlab-runner
    environment:
      # 也是指定docker
      RUNNER_EXECUTOR: "docker"
    depends_on:
      - gitlab

networks:
  gitlab:
    external: true
```

```bash
docker compose up -d # 启动, gitlab初始化需要等大概5-10分钟
# 首次登录 gitlab 账号是 root 初始密码应该是在 [config?]/initial_root_password 文件中
```

上面 gitlab-runner 的 volumes 可能不生效会导致连接 docker 主进程失败, 可以手动处理:

```bash
vim ./gitlab-runner/config/config.toml
# volumes = ["/cache"] 改成:
# volumes = ["/cache", "/usr/bin/docker:/usr/bin/docker", "/var/run/docker.sock:/var/run/docker.sock"]
```

## CI/CD

需要先创建 runner, 然后使用 runner 进行 CI/CD

gitlab setting 中找到 CI/CD->runners 注册 runner

在运行 gitlab 的命令行中输入: `docker exec -it gitlab-runner gitlab-runner register` 依次输入:

```bash
# Enter the GitLab instance URL (for example, gitlab.com/):
http://服务器IP地址:端口
# Enter the registration token:
上面创建runner的token
# Enter a description for the runner: || Enter tags for the runner (comma-separated): || xx name xx
runner # 这个好像无所谓
# Enter an executor: docker-ssh, parallels, ssh, docker-ssh+machine, kubernetes, custom, docker, shell, virtualbox, docker+machine:
docker
# Enter the default Docker image (for example, ruby:2.6):
node:16-alpine
```

然后 gitlab 项目编写 `.gitlab-ci.yml` 文件, 上传触发

示例:

```yml
# cache:
#   key: ci-cache
#   paths:
#     - "node_modules/"

stages:
  - "deploy"

deploy:
  stage: deploy
  image: docker
  script:
    - docker build . --tag clock
    # 判断name=clock这个容器是否在运行，在运行的话就进行销毁
    - if [ $(docker ps -aq --filter name=clock) ]; then docker rm -f clock;fi
    - docker run -d -p 8080:80 --name clock clock
  only:
    - main
```

```Dockerfile
FROM node:16-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

## Other

云服务服务器默认是只开启 443, 80, 22 端口的, 其他端口需要在控制台设置防火墙允许对应端口
