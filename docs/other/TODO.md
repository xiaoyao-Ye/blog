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

## electron

> 安装 electron 经常会失败, 如果发现卡在 postinstall 阶段, 直接去 node_modules 下找到 electron 的 package.json 将 postinstall 命令删除, 然后安装其他的包, 安装完成后再手动安装 electron 即可:

手动去 electron 安装对应系统的压缩包, 解压后放置在一个指定的文件夹, 然后将该文件夹设置为环境变量, 打开 cmd 输入 electron -v 查看是否安装成功.

然后启动项目会发现还是启动不了, 这个时候需要将 node 的环境变量更改一下``

```bash
# process.env.ELECTRON_OVERRIDE_DIST_PATH = 手动安装的 electron 的路径
# process.env.ELECTRON_OVERRIDE_DIST_PATH = 'C:\\Users\\Administrator\\Downloads\\electron-v26.1.0-win32-x64'
# 这里我选择在vite.config.ts的plugins的electron的onstart中设置
process.env.ELECTRON_OVERRIDE_DIST_PATH = "C:\\Users\\Administrator\\Downloads\\electron-v26.1.0-win32-x64";
```

发现 postinstall 就是下载对应版本的 zip 文件解压放到 ./dist 中, 然后创建 `path.txt` `echo "electron.exe" ./path.txt`, 我们可以手动这样做
