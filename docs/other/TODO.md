# TODO

- miniProgram
- [ ] 生命周期
- [ ] 常用 api

- react
- [ ] react 生命周期
- [ ] react 新特性
- [ ] umi

- interview
- [ ] reduce
- [ ] 自己实现 promise
- [ ] 不用 api 实现查询字符串每个字符出现的次数
- [ ] 不用 api 实现查询字符串中某个字符所在的位置.

- 怎么优化网站

- 精灵图,矢量图,缩略图,base64 编码.
- 懒加载
- 减少请求
- 浏览器缓存
  - 强缓存
  - 协商缓存(由后端控制)
  - h5 有 manifest 也可以缓存,但不常用

## 37%法则

"37%法则"的意思就是，寻找阶段进行到 37%就要停止。 100 个应聘者，先面试前 37 个，此后的面试只要遇到一个更优秀的，就立刻录取，不再继续面试了。换句话说，前 37 个面试者无论多么优秀，都不会录取，他们只是用来确定录取的标准。

如果最合适的候选者偏偏在前面 37%里面，那就只能错过了，作为"寻找阶段"不得不付出的成本。最终录取的将是不如前面候选人的次优选择。

这个法则很实用，日常生活中，只要符合"寻找-决策过程"的场景，都可以适用 37%法则。

（1）相亲时，假定有 10 个相亲对象，那么前 3 ～ 4 个可以作为寻找阶段，后面只要遇到一个比前面更好的人，就可以同意了。

（2）租房时，假定有一个月的找房子时间，那么 30 天的 37﹪也就是 11 天。在找了 11 天之后，你就要出手了。只要发现比先前更令人心动的房子，就不要犹豫，马上租下来。

（3）读书时，假定这本书有 100 页，如果读了 37 页，还没有发现感兴趣的内容，那就可以放弃了。

（4）一个 10 集的电视剧，第 4 集是最佳弃剧时间。

（5）一个 10 分钟的视频，看了 3 分 42 秒，如果还是觉得不好看，就可以关掉了。

（6）一个年轻人想在 18 岁到 24 岁，一共 7 年时间里找到人生方向，确定未来想做什么。那么，他有 2.59 年（7 \* 0.37）的时间自由尝试。也就是说，到了大三下学期就应该初步定下自己的方向，后面除非遇到更有吸引力的事情，否则就不应该转换事业方向。

## refreshToken

> 开一个 blog 或者开一个 admin-pc 的实践文章栏记录这些信息

- 登录有 session 和 jwt 两种方案.
- session 是通过 cookie 携带, 用户信息保存在服务端.
- jwt 是通过 token 携带, 一般通过请求头的 authorization 字段, 用户信息保存在客户端. jwt 天然支持分布式, 使用较多. jwt 不支持注销.
- 使用 jwt 的时候会有过期时间, 过期后需要重新登录, 为了让用户有更好的体验需要设置无感刷新 token 的机制, 也就是 refreshToken.
- 可以使用 access_token, refresh_token 两个 token 来实现, access_token 用来访问资源, refresh_token 用来刷新 access_token, 两个 token 的过期时间不同, refresh_token 的过期时间长一些, 一般是 access_token 的两倍.

```typescript
interface PendingTask {
  config: AxiosRequestConfig;
  resolve: Function;
}

// 通过 refreshing, queue 避免并发请求多个401的情况导致多个刷新 token 的请求
// 是否正在刷新 token
let refreshing = false;
// 保存请求的数组
const queue: PendingTask[] = [];

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    let { data, config } = error.response;

    // 如果正在刷新 token, 则把请求保存到队列中
    if (refreshing) {
      return new Promise(resolve => {
        queue.push({
          config,
          resolve,
        });
      });
    }

    // 401 代表 token 过期, 避免刷新 token 时死循环, 需要判断是否是刷新 token 的请求
    if (data.statusCode === 401 && !config.url.includes("/refresh")) {
      refreshing = true;
      // 刷新 token
      const res = await refreshToken();
      refreshing = false;
      // 刷新成功后重新请求
      if (res.status === 200) {
        // 把队列中的请求重新发出
        queue.forEach(({ config, resolve }) => {
          resolve(axiosInstance(config));
        });
        return axiosInstance(config);
      } else {
        alert(data || "登录过期，请重新登录");
      }
    } else {
      return error.response;
    }
  },
);

async function refreshToken() {
  const res = await axiosInstance.get("/refresh", {
    params: {
      token: localStorage.getItem("refresh_token"),
    },
  });
  // 刷新成功后重新设置 token
  localStorage.setItem("access_token", res.data.accessToken);
  localStorage.setItem("refresh_token", res.data.refreshToken);
  return res;
}
```

## Dockerfile corepack issue

```Dockerfile
FROM node:18-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile

COPY . .

EXPOSE 1024

RUN pnpm build

CMD ["pnpm", "run", "start:prod"]
```

```shell
------
 > [todo-server build-stage 5/7] RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store   pnpm install --frozen-lockfile:
138.0 Internal Error: Error when performing the request to https://registry.npmjs.org/pnpm; for troubleshooting help, see https://github.com/nodejs/corepack#troubleshooting
138.0     at ClientRequest.<anonymous> (/usr/local/lib/node_modules/corepack/dist/lib/corepack.cjs:42195:14)
138.0     at ClientRequest.emit (node:events:517:28)
138.0     at TLSSocket.socketErrorListener (node:_http_client:501:9)
138.0     at TLSSocket.emit (node:events:517:28)
138.0     at emitErrorNT (node:internal/streams/destroy:151:8)
138.0     at emitErrorCloseNT (node:internal/streams/destroy:116:3)
138.0     at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
------
failed to solve: process "/bin/sh -c pnpm install --frozen-lockfile" did not complete successfully: exit code: 1
```

当出现上面报错时, 我尝试过重新运行 `docker compose --env-file .env.production up -d --build` 去解决问题, 但它大多时候不能解决问题.
而后怀疑网络问题, 运行 `curl https://registry.npmjs.org/pnpm` 发现能够正常获取到.
尝试设置环境变量 `COREPACK_NPM_REGISTRY=https://registry.npmmirror.com`, 仍然无法解决.
去github查看issue 经过几次跳转, 我找到了解决方法:  

```shell
# mac 重新安装 CA 证书
brew install ca-certificates
# linux 重新安装 CA 证书
apt install ca-certificates
```

再次运行 `docker compose --env-file .env.production up -d --build` 一切正常.

## docker MySQL issue

```shell
024-03-01T02:53:27.279982Z 1 [ERROR] [MY-012574] [InnoDB] Unable to lock ./ibdata1 error: 11
2024-03-01T02:53:27.421651Z 1 [ERROR] [MY-012592] [InnoDB] Operating system error number 11 in a file operation.
2024-03-01T02:53:27.613610Z 1 [ERROR] [MY-012596] [InnoDB] Error number 11 means 'Resource temporarily unavailable'
2024-03-01T02:53:27.642059Z 1 [ERROR] [MY-012215] [InnoDB] Cannot open datafile './ibdata1'
2024-03-01T02:53:27.642104Z 1 [ERROR] [MY-012959] [InnoDB] Could not open or create the system tablespace. If you tried to add new data files to the system tablespace, and it failed here, you should now edit innodb_data_file_path in my.cnf back to what it was, and remove the new ibdata files InnoDB created in this failed attempt. InnoDB only wrote those files full of zeros, but did not yet use them in any way. But be careful: do not remove old data files which contain your precious data!
2024-03-01T02:53:27.672650Z 1 [ERROR] [MY-012930] [InnoDB] Plugin initialization aborted with error Cannot open a file.
2024-03-01T02:53:28.251407Z 1 [ERROR] [MY-010334] [Server] Failed to initialize DD Storage Engine
2024-03-01T02:53:28.263494Z 0 [ERROR] [MY-010020] [Server] Data Dictionary initialization failed.
2024-03-01T02:53:28.263521Z 0 [ERROR] [MY-010119] [Server] Aborting
```

MySQL 报错导致容器停止运行. 重启后依然如此，怀疑是服务器不堪重负，重启服务器后目前一切正常。。。

## other

```shell
w # 将显示当前登录用户信息
df -h # 将显示磁盘空间使用情况
free -h # 将显示系统的内存使用情况
uptime # 将显示系统的负载信息和运行时间
```

## UTC

现在有一个函数, 功能是传入一个 Date 返回这个 Date 的开始时间(00:00:00)和结束时间(23:59:59)

```ts
function dateRange(date: Date) {
  const start = new Date(new Date(date).setHours(0, 0, 0, 0))
  const end = new Date(new Date(date).setHours(23, 59, 59, 999))
  return { start, end }
}
```

现在我需要给这个函数添加单元测试如下:

```ts
it('should return the start and end of the date range', async () => {
  const { start, end } = dateRange(new Date(2023, 0, 1))

  expect(start.toISOString()).toBe('2023-01-01T00:00:00.000Z')
  expect(end.toISOString()).toBe('2023-01-01T23:59:59.999Z')
})
```

你会发现单元测试不通过!!!

```txt
期望得到 '2023-01-01T00:00:00.000Z'
实际得到 '2022-01-31T16:00:00.000Z'
```

思考了一下, 应该是时区的问题, 本地的时间通过 toISOString api 转换得到的是这个时间对应的 UTC 时间

```ts
// 想了一下, 那直接使用 UTC 时间作为断言不就好了? 修改单元测试如下:
it('should return the start and end of the date range', async () => {
  const { start, end } = dateRange(new Date(2023, 0, 1))

  expect(start.toISOString()).toBe('2022-01-31T16:00:00.000Z')
  expect(end.toISOString()).toBe('2023-01-01T15:59:59.000Z')
})
```

运行通过. 打完收工直接 `git push` 推送到 Github. 触发 actions, 我天真的以为 actions 执行完毕就好了.

等了半天发现不对劲, 这 actions 怎么报错了...

发现单元测试不通过, 提示:

```txt
期望得到 '2022-01-31T16:00:00.000Z'
实际得到 '2023-01-01T00:00:00.000Z'
```

我\*\*你个大\*\* Github actions 是 UTC 时间, 所以单元测试断言16:00:00是一天的开始肯定是有问题的. 这只在东八区生效.

通过下面方式将输出的时间减去偏移的时间, 转换为 utc 时间然后在使用 `toISOString()` 转换为字符串对比:

```ts
const date = new Date('2024-01-01')
let { start, end } = dateRange(date)

function convertToUTC(date: Date) {
  const offset = date.getTimezoneOffset()
  const utcDate = new Date(date.getTime() - offset * 60 * 1000)
  return utcDate
}

start = convertToUTC(start)
end = convertToUTC(end)

expect(start.toISOString()).toBe('2024-01-01T00:00:00.000Z')
expect(end.toISOString()).toBe('2024-01-01T23:59:59.999Z')
```

打完收工!!!

### 2024.04.22

> 看大圣分享的 remote 工作视频记录一下部分内容

哪怕是远程工作也分不同的模式:

- 同步就是必须在指定的时间工作, 工作时间内有任何消息都需要及时回复.
- 异步就是允许在不同时间段工作, 工作时间基本上不会有什么交流, 一般通过文档和任务看板去进行沟通, 然后一个月这种时间进行一次会议

优点:

- 避免通勤
- 肉身自由, 可以一边旅游等
- 避免工作地点, 可以去消费低的地方等.
- 工作时间避免打断
- 如果是异步工作的话可以自由安排工作时间

缺点:

- 没有人给你限制和规划, 对个体要求较高需要自律(可以想到不自律会有多糟糕)
- 没有社交, 会觉得跟社会脱节. 可以自己多找朋友聚聚
- 需要家里人的支持, 如果家人理解不了你在做什么, 那么你每天不是在远程工作而是在上坟.
- 沟通方面需要英语, 哪怕可以借助很多工具.
- 工资发放可能会比较麻烦
- 需要考虑稳定性, 这里大圣建议可以找两份远程工作, 因为远程工作一般5小时可以搞定(除非特别卷), 两份也就10小时, 如果一份工作没了另一份工作也可以让你很好的生活.

#### 技术栈

- Next
- Typescript
- Tailwind
- Shadcn/ui mui NextUI...
- Nestjs
- typeorm/prisma
- ...
- Go ruby java C#

#### web3

> web3 相关的远程岗位较其他前端岗位相对多

- Hardhat + etherjs + React + wagmi
- Solidity / Move / Rust / Cairo

#### 好用的工具

- https://eleduck.com/
- https://www.linkedin.com/feed/
- https://relingo.net/zh/
- https://www.trancy.org/
- https://github.com/yetone/openai-translator
- Google meet & zoom
- Slack signal github vercel linear.app
