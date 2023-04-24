# test

[\_](https://testing.cuixueshe.com/)

- 保持单元测试的可读性(测试非常重视可读性和可维护性, 只有测试的维护成本小于业务代码的维护成本, 才会愿意去维护它)

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

## 最小准备测试数据原则

> 当前测试 case 中没有用的数据就不要创建, 保持单元测试的可读性

1. 默认参数的方式

   > 这种方式会改变原本的业务代码, 但是这并不影响. 单元测试也是业务逻辑的用户之一, 单元测试可以驱动我们设计出更好用的 api
   > 比如测试一个 class 需要 new class 并传入一系列的属性, 如果当前测试只要 name 那就不要创建 name 以外的属性, 可以用默认参数为 "" 来让 new class 时只传入 name 属性

2. 委托工厂函数来隐藏不需要的属性

   编写一个 `createUser` 函数, 这个函数只接受一个 name 属性, 并返回 `new class(name, ...default)`, 通过这个函数设置默认值, 写测试 case 的时候就只需要调用 `createUser(name)` 来隐藏其他属性, 保持可读性

3. 虚拟对象的方式

   `const user = { name: 'userName' } as User` 通过类型断言来解决类型问题, 来保持创建最小准备测试数据的原则
