# test

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

   缺点:

   - 会造成很多重复的代码
   - 当准备数据部分逻辑比较复杂的时候, 就会导致单元测试可读性变差

2. 委托 Delegated

   > 工厂函数, 可复用的话可以抽离成文件

   测试数据比较复杂的时候可以使用委托, 将重复的数据放到函数内, 通过创建函数获得测试数据, 还可以设置默认值

   当有多个测试文件需要使用同一个创建测试数据的函数时, 可以将该函数放到一个 helper 共享文件夹中

   解决了代码重复的问题, 可读性的问题

3. 隐式 Implicit

   > beforeEach 里面创建

   测试数据一样的时候, 可以使用隐式的方式

## 后门操作准备数据的方式

> 正常情况下应该使用 createTodo 先创建数据而后测试 removeTodo

比如说做一个 todo 项目, 当你还没有写 addTodo 功能的时候, 需求需要先写 removeTodo. 那这个时候就可以直接给 todoList 添加数据用于测试删除功能.

通过后门操作数据用于测试的方式尽量少用, 这是一种脆弱的测试方式, 假设 todoList 更改数据结构, 所有使用到 todoList 的单元测试都会报错, 适合临时测试

## 最小准备测试数据原则

> 当前测试 case 中没有用的数据就不要创建, 保持单元测试的可读性

1. 默认参数的方式

   > 这种方式会改变原本的业务代码, 但是这并不影响. 单元测试也是业务逻辑的用户之一, 单元测试可以驱动我们设计出更好用的 api
   > 比如测试一个 class 需要 new class 并传入一系列的属性, 如果当前测试只要 name 那就不要创建 name 以外的属性, 可以用默认参数为 "" 来让 new class 时只传入 name 属性

2. 委托工厂函数来隐藏不需要的属性

   编写一个 `createUser` 函数, 这个函数只接受一个 name 属性, 并返回 `new class(name, ...default)`, 通过这个函数设置默认值, 写测试 case 的时候就只需要调用 `createUser(name)` 来隐藏其他属性, 保持可读性

3. 虚拟对象的方式

   `const user = { name: 'userName' } as User` 通过类型断言来解决类型问题, 来保持创建最小准备测试数据的原则

## 程序的间接输入-依赖函数调用-stub 的应用

```JavaScript
// 直接输入
function add(a, b) {
  return a + b;
}

// 间接输入
function double() {
  // count 函数是从 count.js 中导出
  return countNum() * 2; // [!code hl]
}
```

### 常见场景

> 函数返回的值是不确定的, 或者是返回的 promise

```JavaScript{6-11}
// 间接输入的测试当中, 上面这个 count 函数返回的值是不确定的,
// 甚至是异步的. 那么我们就需要去控制这个间接输入的值:

// stub 存根
// 替换掉真实的逻辑实现
vi.mock("./count", () => {
  return {
    countNum: () => 4,
    countNumPromise: () => Promise.resolve(4)
  }
})

it("stub", () => {
  // given

  // when
  // 不在需要关心 double 函数中的 countNum 会返回什么数据,
  // 因为我们使用 vi.mock 替换掉了 countNum 的返回值用于测试
  const res = double();
  // then
  expect(res).toBe(8);
})
```

注意: 上面示例中的 `vi.mock` 是全局的, 当前测试文件所有用到 `countNum` 函数的测试用例都会返回 4.

::: code-group

```JavaScript{2,5,11-13,15} [test.spec.js]
// 可以在指定的测试用例里面使用, 从而不影响其他测试用例
vi.mock("./count");
it("one", () => {
  // given
  vi.mocked(countNum).mockReturnValue(4);
  // ...
})

// 另一种方式是不使用 vi.mock 而是使用 vi.doMock
it("two", () => {
  vi.doMock("./count", () => {
    return { countNum: () => 4 }
  })
  // doMock 这种方式有个条件就是必须在使用 doMock 的下一个导入才能生效:
  const { countNum } = await import("./count");
})
```

```JavaScript [count.js]
// n 是不确定的
const countNum = () => { return n }

const double = () => {
  return countNum() * 2
}
export { countNum, double }
```

:::

### 第三方库的函数调用

```JavaScript{1,5}
vi.mock("axios");
test("处理第三方模块 axios", async () => {
  const obj = { id: 7, name: "Ghosteye" }
  // vi.mocked(axios).mockRejectedValue(obj) // 返回失败
  vi.mocked(axios).mockResolvedValue(obj) // 返回成功
  // vi.mocked(axios.get).mockResolvedValue(obj) // getUserID 中用的是 axios.get 函数

  const res = await getUserID();

  expect(res).toBe(7)
})
```

### 对象

> 遇到需要测试全局对象的情况

- 测试需要用到对象中的属性, 直接改这个对象的属性数据去测试
- 测试需要用到对象中的函数, 直接给这个对象的函数赋值为一个自定义的新函数用于测试

### class

```JavaScript
vi.mock("./class", () => {
  return {
    user: class User {
      name: string = "Ghosteye",
      getAge() { return 7 }
    }
  }
})
// or
it("test", () => {
  // given
  User.prototype.getAge = () => { return 7; }
})
```

### 常量

vi.mock 返回值会替换 config 中所有的导出, 所以如果 vi.mock 只返回了 name, 那么其他属性和方法将不可用, 解决:

```JavaScript
vi.mock("./config", () => [
  return { name: "Ghosteye" }
])
vi.mock("./config", async (importOriginal) => {
  const config = await importOriginal()
  // const config = await vi.importActual("./config") // 跟上面这行代码的结果是一样的
  return { ...config as any, name: "Ghosteye" };      // 只覆盖 name 属性
})
```

[\_](https://testing.cuixueshe.com/)
