# 包管理

## package.json 版本管理

> npm version [xxxx] -m"可以提交消息" 如果当前已经有 git 库了,可能会失败.

- `npm version patch`     小改动,比如修复了一个 bug 之类的,版本号变动: 1.0.0->1.0.1
- `npm version minor`     增加新功能,不影响现有功能, 版本号变动: 1.0.0->1.1.0
- `npm version major`     破坏模块向后的兼容性, 版本号变动: 1.0.0->2.0.0

详情查看: [semver](https://docs.npmjs.com/cli/v6/using-npm/semver)

## NPM 源

> 建议使用 nrm 进行管理:

```bash
# 安装nrm
npm i -g nrm
# 查看所有源
nrm ls
# 使用
nrm use taobao
```

> 手动设置:

```bash
# 淘宝源
npm config set registry https://registry.npm.taobao.org/
# 新版淘宝源
npm config set registry https://registry.npmmirror.com/
# npmjs npm本源
npm config set registry https://registry.npmjs.org/
# 公司阿里云源
```

<!--
npm config set registry=https://packages.aliyun.com/605b1fb26cc98419b95d3b83/npm/npm-registry/
用户名: 605b1f90e1a7ccc7cca80729
密码: 2N(=yQ4mHJJ=
-->

## --save 和--save-dev

```js
--save 会把你下载的第三方包信息保存到 `dependencies`
--save-dev 会把你下载的第三方包保存到 `devDependencies`
// ---------------------------------------------
npm i 插件名 默认相当于  npm i --save 插件名
// ---------------------------------------------
yarn add          会在  `dependencies`      中安装一个包
yarn add -D/-dev  会在  `devDependencies`   中安装一个包
```

## dependencies 和 devDependencies 区别

- dependencies： 里面的插件代表开发打包后也会要用
  - 直接 npm i 就行了，因为 npm i 默认就是 --save
  - 如果是 cnpm i 那么必须自己加 --save
- devDependencies ：开发时需要，正式上线不需要
  - 所以对于这类插件，记得下载时一定要用 --save-dev 的命令

## 常用包

### vue3 自动导入

> Auto import APIs on-demand for Vite, Webpack, Rollup and esbuild. With TypeScript support. Powered by [unplugin](https://github.com/unjs/unplugin).

安装

```bash
yarn add -D unplugin-auto-import
yarn add -D unplugin-vue-components
```

使用

- 支持 vite, webpack,rollup, esbuild 等
- vite 示例:

```javascript
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
    }),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
  ],
})
```
