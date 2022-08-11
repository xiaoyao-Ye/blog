# 包管理

## package.json 版本管理

> npm version [xxxx] -m"可以提交消息" 如果当前已经有 git 库了,可能会失败.

- `npm version patch`     小改动,比如修复了一个 bug 之类的,版本号变动: 1.0.0->1.0.1
- `npm version minor`     增加新功能,不影响现有功能, 版本号变动: 1.0.0->1.1.0
- `npm version major`     破坏模块向后的兼容性, 版本号变动: 1.0.0->2.0.0

## 淘宝源

```bash
# 淘宝源
npm config set registry https://registry.npm.taobao.org/
# 新版淘宝源
npm config set registry https://registry.npmmirror.com/
# npmjs npm本源
npm config set registry https://registry.npmjs.org/
# 公司阿里云源
npm config set registry=https://packages.aliyun.com/605b1fb26cc98419b95d3b83/npm/npm-registry/
用户名: 605b1f90e1a7ccc7cca80729
密码: 2N(=yQ4mHJJ=
```
