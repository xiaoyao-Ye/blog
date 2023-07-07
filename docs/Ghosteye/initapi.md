# 前端快速创建 API 和类型定义

## 介绍

在现代的软件开发中，创建和管理 API 是非常重要的一部分。

为了简化这个过程，并提高开发效率, 我造了一个轮子, 它提供了一种简单的方式来快速创建 API 并自动生成类型定义，让开发人员可以更轻松地进行 API 的设计和开发。

还能提供更好的代码可读性和可维护性。

如果你正在寻找一种简单而又高效的方式来创建 API, 我推荐你尝试一下。

项目链接：

[initapi(GitHub 地址)](https://github.com/xiaoyao-Ye/initapi)

[initapi(npm 地址)](https://www.npmjs.com/package/initapi)

创建结果展示:

API 文件示例
![Generate API Content Example](/initApi/api_mul.png)

类型 文件示例
![Generate Type Content Example](/initApi/typings.png)

## 主要特性

- 快速创建 API：`initapi` 提供了一种简单的命令行界面，可以快速创建 API 文件并生成基本的请求函数。
- 自动生成类型定义：根据 API 结构和数据模型，自动生成 TypeScript 的 interface 和 type, 避免手动定义类型的繁琐工作。
- 类型安全：根据后端类型转换成前端的 TypeScript 类型，提高代码可靠性和类型安全性。
- 统一规范：功能放置位置一致，请求函数的创建方法一致，保持代码统一。
- 降低维护成本：后端接口变动后，只需重新生成函数代码，引用部分无需修改。

## 使用方式

> 这里只介绍最简单的使用方式, 可前往 [initapi](https://github.com/xiaoyao-Ye/initapi) 查看更多可自定义内容

安装:

```bash
npm i initapi -D
# or
pnpm i initapi -D
```

使用:

创建并配置 `api.config.ts` or `api.config.js`:

```ts
import { defineConfig } from 'initapi'
export default defineConfig({
  service: {
    // 后端有几个服务就配置几个
    // 服务名称-创建API时文件夹的名称会使用此命名
    pets: {
      // API接口文档的json文件地址(这里借用swagger官方公开的作为示例) 可以设置远程也可以设置本地相对路径
      url: 'https://petstore.swagger.io/v2/swagger.json',
    },
  },
  // API 文件输出目录
  outputDir: './src/api',
})
```

package.json:

```json
  "scripts": {
    "api": "initapi create",
    // ...
  },
```

```bash
npm run api
```

创建成功示例
![Generate success Example](/initApi/workflow.png)

## 最后

感谢您的支持和参与！如果有任何问题或需要进一步的帮助，请随时提问。我们非常欢迎您使用、关注、点赞、提交问题和发起合并请求！谢谢！😊

项目链接：

[initapi(GitHub 地址)](https://github.com/xiaoyao-Ye/initapi)

[initapi(npm 地址)](https://www.npmjs.com/package/initapi)
