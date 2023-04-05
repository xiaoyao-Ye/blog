# test

## vitest

> 开箱即用、共用 vite 配置(意味着可以开发环境, 构建环境, 测试环境共用同一套配置)

use

```bash
# 安装
pnpm i vitest -D
# 测试
vitest run
```

## jest

> 构建和开发是分开的配置, 有一定的维护成本

use

```bash
# 安装
pnpm i jest typescript @types/jest ts-jest -D
# 初始化配置
npx ts-jest config:init
# 测试
jest
```

## 创建测试数据的三种方式

1. 内联 in-line

   > 直接在 test/it 中创建数据

   测试数据比较简单的时候可以直接使用内联的方式

2. 委托 Delegated

   > 工厂函数, 可复用的话可以抽离成文件

   测试数据比较复杂的时候可以使用委托

3. 隐式 Implicit

   > beforeEach 里面创建

   测试数据一样的时候, 可以使用隐式的方式
