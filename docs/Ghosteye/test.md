# 单元测试

::: tip 分析如何写出更好的测试
不要完美主义, 试图找出所有边界, 小步走逐步完善

视角转换, 从使用者的角度去思考功能而不是只思考当前开发的函数, 不要过度设计, 用到啥测试啥

不要追求 100%覆盖率, 该测的测, 不该测的不要为了测试覆盖率而测
:::

## vitest

开箱即用、共用 vite 配置(意味着可以开发环境, 构建环境, 测试环境共用同一套配置)

### Usage

```bash
# 安装
pnpm i vitest -D
# 测试
vitest run
```

### Common api

- `it/test` 测试用例 (it 和 test 是一样的, 只是为了兼容 jest)
  - `it.skip` 跳过测试用例
  - `it.only` 只测试当前测试用例
  - `it.todo` 标记当前测试用例为待完成
- `describe` 测试用例分组
  - `describe.skip` 跳过测试用例分组
  - `describe.only` 只测试当前测试用例分组
- `expect` 断言, 语法 `expect(<value>).<api>(target)`
  - `toBe` 相当于 `===`
  - `toEqual` 是深度相等的意思, 用于比较对象
  - `toBeTruthy` 相当于 `!!value`
  - `toBeFalsy` 相当于 `!value`
  - `toContain` 相当于 `value.includes(target)`
  - `toThrow` 相当于 `throw new Error()`
- `expectTypeOf` 语法 `expectTypeOf(<value>).<api>()`
  - `toBeObject` 目标是对象类型
  - `toBeString` 目标是字符串类型
  - `toBeNumber` 目标是数字类型
  - `toBeBoolean` 目标是布尔类型
  - `toBeArray` 目标是数组类型
  - `toBeFunction` 目标是函数类型
  - `toBePromise` 目标是 promise 类型
- `beforeEach` 每个测试用例执行前执行
- `afterEach` 每个测试用例执行后执行
- `beforeAll` 所有测试用例执行前执行
- `afterAll` 所有测试用例执行后执行
- `vi.mock` 用于 mock 模块
- `vi.mocked` 用于 mock 模块的函数
- `vi.importActual` 用于导入真实的模块
- `vi.doMock` 用于 mock 模块, 与 vi.mock 的区别是 vi.doMock 必须在 import 之前使用
- `vi.stubEnv` 用于 stub 环境变量
- `vi.unstubAllEnvs` 用于还原所有 stub 的环境变量
- `vi.stubGlobal` 用于 stub 全局变量
- `vi.unstubAllGlobals` 用于还原所有 stub 的全局变量
- `vi.spyOn` 用于 mock 模块的函数, 但是不会影响模块的其他导出
- `vi.fn`
- [more...](https://vitest.dev/api/)

### 测试覆盖率

代码覆盖率是指测试代码覆盖到了多少业务代码

```bash
# 启动Vitest进程时，它会自动提示您安装相应的支持包(如果没有安装的话)
vitest run --coverage

# 或者手动安装
# For v8
npm i -D @vitest/coverage-v8

# For istanbul
npm i -D @vitest/coverage-istanbul
```

## jest

> 构建和开发是分开的配置, 有一定的维护成本

use

```bash
# 安装
pnpm i jest TypeScript @types/jest ts-jest -D
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

::: info 可读性原则
当前测试 case 中没有用的数据就不要创建, 保持单元测试的可读性
:::

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

::: tip 注意
上面示例中的 `vi.mock` 是全局的, 当前测试文件所有用到 `countNum` 函数的测试用例都会返回 4.
:::

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
vi.mock("./config", () => {
  return { name: "Ghosteye" }
})
vi.mock("./config", async (importOriginal) => {
  const config = await importOriginal()
  // const config = await vi.importActual("./config") // 跟上面这行代码的结果是一样的
  return { ...config as any, name: "Ghosteye" };      // 只覆盖 name 属性
})
```

### 环境变量

获取环境变量的两种方式:

- 在 node 中使用 `process.env`
- 在 vite webpack 中使用 `import.meta.env`

::: code-group

```TypeScript [index.spec.ts]
import { it, expect, vi } from "vitest";
import { getUserName } from "./helper";

it("test-stub", () => {
  // 这种方式会影响别的测试 case
  // process.env.USER_NAME = "Ghosteye";
  vi.stubEnv("USER_NAME", "Ghosteye");  // [!code hl]

  const res = getUserName();

  expect(res).toBe("username is Ghosteye");

  // 还原所有env, 一般配合 afterEach 使用就不用在这里单独 unstubAllEnvs
  vi.unstubAllEnvs(); // [!code hl]
});

it("should", () => {
  console.log(process.env.USER_NAME); // undefined
});

// afterEach(() => {
//   vi.unstubAllEnvs();
// });
```

```TypeScript [helper.ts]
const getUserName = () => {
  return `username is ` + process.env.USER_NAME;
  // return `username is ` + (import.meta.env.USER_NAME);
};

export { getUserName };
```

:::

### 全局 global

::: code-group

```TypeScript [index.spec.ts]
import { it, expect, vi } from "vitest";
import { doubleHeight, getGlobalUser } from "./global";

it("should", () => {
  vi.stubGlobal("innerHeight", 100);  // [!code hl]

  const res = doubleHeight();

  expect(res).toBe(200);
});

it("should", () => {
  vi.stubGlobal("user", { name: "Ghosteye" });  // [!code hl]

  const res = getGlobalUser();

  expect(res).toBe("username is Ghosteye");
});
```

```TypeScript [global.ts]
// window.user = {name: "test"};
// window.innerHeight = 900;

const getGlobalUser = () => {
  return "username is " + user.name;
};

const doubleHeight = () => {
  return innerHeight * 2;
};

export { getGlobalUser, doubleHeight };
```

:::

### 间接层的处理技巧

![test](/other/test-stub.svg)

::: code-group

```TypeScript [index.spec.ts]
import { it, expect, vi } from "vitest";
import { doubleHeight } from "./global";

vi.mock("./window.ts", () => {
  return {
    innerHeightFn: () => 100,
  }
})

it("should", () => {
  const res = doubleHeight();

  expect(res).toBe(200);
});
```

```TypeScript [global.ts]
import { innerHeightFn } from "./window";

const doubleHeight = () => {
  return innerHeightFn() * 2;
};

export { doubleHeight };
```

```TypeScript [window.ts]
export const innerHeightFn = () => {
  return innerHeight;
}
```

:::

### 依赖注入

::: info 依赖倒置原则
高层模块不应该依赖底层模块, 二者都应该依赖其抽象.
抽象不应该依赖细节, 细节应该依赖抽象.
:::

::: info 程序的接缝
程序接缝是代码中的一个分界线, 它允许我们讲一个组件与其他组件隔离开.
通过创建接缝, 我们可以轻松地将组件替换为另一个组件, 而不会影响到应用程序的其他部分.
这有助于将组件之间的耦合降到最低. 使得代码更加模块化.
:::

强依赖某个模块或者第三方库时, 通过依赖注入的方式解决强依赖, 便于测试.

本质上就是调整一下代码结构, 将强依赖的模块或者第三方库抽离出来一个函数, 将这个函数通过参数的方式传入, 那么测试的时候就可以传入一个自定义返回值的函数, 从而达到测试的目的.

函数示例:

- 更改代码结构前: readAndProcessFile(高层) 依赖于 readFileSync(底层)
- 更改代码结构后: readAndProcessFile 依赖于 FileRender 接口(传入的参数), 而 fileRender.read 是去实现接口, 这样做的好处是我们可以随时去替换 fileRender, 从而达到测试的目的.

```TypeScript [readAndProcessFile.ts]
import { readFileSync } from "fs";

export const readAndProcessFile = (filePath: string): string => {
  // 当前强依赖 redFileSync 不利于测试
  const content = readFileSync(filePath, { encoding: "utf8" });  // [!code hl]
  // 实际场景下可能 process 的过程会比较复杂
  return content + "-> Ghosteye";
};
```

::: code-group

```TypeScript [readAndProcessFile.ts]
export interface FileRender {
  read: (filePath: string) => string;
}
// 通过依赖注入的方式解决强依赖, 利于测试
export const readAndProcessFile = (
  filePath: string,
  fileRender: FileRender  // [!code hl]
): string => {
  const content = fileRender.read(filePath);  // [!code hl]
  return content + "-> Ghosteye";
};
```

```TypeScript [readAndProcessFile.spec.ts]
import { it, expect, describe } from "vitest";
import { readAndProcessFile } from "./readAndProcessFile";
import type { FileRender } from "./readAndProcessFile";

describe("di function", () => {
  it("read and process file", () => {
    class TxtFileRender implements FileRender { // [!code hl]
      read(filePath: string) {  // [!code hl]
        return "test "; // [!code hl]
      } // [!code hl]
    } // [!code hl]

    const res = readAndProcessFile("test.txt", new TxtFileRender());  // [!code hl]
    expect(res).toBe("test -> Ghosteye");
  });
});
```

:::

class 示例:

- 构造函数的方式(如果想要表达该参数是必填可以用这个方式, 否则可以用其他两种方式)
- 属性的方式
- 方法的方式

> 这三种方式本质都是一样的, 只是写法不同而已.

```TypeScript [readAndProcessFile.ts]
import { readFileSync } from "fs";
// 强依赖与 readFileSync 不利于测试
export class ReadAndProcessFile {
  run(filePath: string) {
    const content = readFileSync(filePath, { encoding: "utf-8" }); // [!code hl]
    return content + "-> Ghosteye";
  }
}
```

::: code-group

```TypeScript [readAndProcessFile.ts]
export interface FileRender {
  read: (filePath: string) => string;
}

// 通过依赖注入的方式解决强依赖, 利于测试
export interface FileRender {
  read: (filePath: string) => string;
}

// 通过依赖注入的方式解决强依赖, 利于测试
// 构造函数的方式
// export class ReadAndProcessFile {
//   private _fileRender: FileRender;
//   constructor(fileRender: FileRender) {
//     this._fileRender = fileRender;
//   }
//   run(filePath: string) {
//     const content = this._fileRender.read(filePath);
//     return content + "-> Ghosteye";
//   }
// }

// 属性的方式
// export class ReadAndProcessFile {
//   private _fileRender!: FileRender;
//   constructor() {}
//   run(filePath: string) {
//     const content = this.fileRender.read(filePath);
//     return content + "-> Ghosteye";
//   }

//   get fileRender() {
//     return this._fileRender;
//   }

//   set fileRender(fileRender: FileRender) {
//     this._fileRender = fileRender;
//   }
// }

// 方法的方式
export class ReadAndProcessFile {
  private _fileRender!: FileRender;
  constructor() {}
  run(filePath: string) {
    const content = this._fileRender.read(filePath);
    return content + "-> Ghosteye";
  }

  setFileRender(fileRender: FileRender) {
    this._fileRender = fileRender;
  }
}
```

```TypeScript [readAndProcessFile.spec.ts]
import { it, expect, describe } from "vitest";
import { ReadAndProcessFile } from "./readAndProcessFile";
import type { FileRender } from "./readAndProcessFile";

describe("di class", () => {
  // it("构造函数", () => {
  //   class StubFileRender implements FileRender {
  //     read(filePath: string) {
  //       return "test ";
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile(new StubFileRender());
  //   const res = readAndProcessFile.run("./test.txt");
  //   expect(res).toBe("test -> Ghosteye");
  // });

  // it("属性", () => {
  //   class StubFileRender implements FileRender {
  //     read(filePath: string) {
  //       return "test ";
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile();
  //   readAndProcessFile.fileRender = new StubFileRender();
  //   const res = readAndProcessFile.run("./test.txt");
  //   expect(res).toBe("test -> Ghosteye");
  // });

  it("方法", () => {
    class StubFileRender implements FileRender {
      read(filePath: string) {
        return "test ";
      }
    }

    const readAndProcessFile = new ReadAndProcessFile();
    readAndProcessFile.setFileRender(new StubFileRender());
    const res = readAndProcessFile.run("./test.txt");
    expect(res).toBe("test -> Ghosteye");
  });
});

```

:::

> 函数示例是通过参数完成依赖注入 class 示例是通过 constructor, 属性, 方法 完成依赖注入

## 状态验证

::: info 状态验证的过程是黑盒验证
黑盒验证可以让我们大胆的去重构`实现`部分, 因为我们只关心输入和输出, 不关心内部的实现细节
:::

- 状态验证是测试中使用最多的方式, 状态是指 `属性/数据结构`
- 状态验证最重要的是找到状态然后去验证它. 状态没有暴露出去可以通过间接层去获取状态

<!-- 状态验证的过程是黑盒验证: 黑盒验证可以让我们大胆的去重构`实现`部分, 因为我们只关心输入和输出, 不关心内部的实现细节 -->

::: code-group

```TypeScript [counter.spec.ts]
import { Counter } from "./counter";
import { afterEach, it, expect, describe } from "vitest";

describe("Counter class", () => {
  it("increment", () => {
    const counter = new Counter();

    counter.increment();

    expect(counter.getCount()).toBe(1);
  });
});

describe("Counter function", () => {
  afterEach(() => {
    // reset 可以放到 beforeEach | afterEach 里面
    reset();
  });
  it("increment", () => {
    increment();

    expect(getCount()).toBe(1);
  });
  it("second", () => {
    increment();

    expect(getCount()).toBe(1);
  });
});
```

```TypeScript [counter.ts]
// class
export class Counter {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increment(): void {
    this.count++;
  }

  reset(): void {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}
// function
let count = 0;

export function getCount(): number {
  return count;
}

export function increment(): void {
  // 重构很大的空间
  count--;
  count++;
  count++;
}

export function reset(): void {
  count = 0;
}
```

:::

## 行为验证

- 定义: 验证对象之间的交互是否按预期进行, 验证是指 `函数/方法` 的调用次数, 调用顺序, 调用参数, 调用时机等等.
- 本质: 假定状态的改变都是由行为交互去引起的, 那么行为按预期进行了, 则断定状态也就按预期改变了.
- 实施: 记录交互信息, 验证信息:
  - stub 提供间接输入 (只是提供值, 不记录交互信息)
  - mock 提供间接输入以外还会记录交互信息, 用于行为验证
    - `vi.fn` mock 函数, 但是会影响模块的其他导出
    - `vi.spyOn` mock 函数, 但是不会影响模块的其他导出
- 缺点:
  - 白盒验证, 暴露了内部细节, 重构的时候需要修改测试代码, 破坏了封装性
  - 破坏了测试的有效性(我们做行为验证的时候断定状态也就按预期改变了, 但是实际上内部实现没有改变状态时, 行为验证并不能有效验证到)

::: warning 再次提醒
优先使用状态验证. 但并不是使用了状态验证就不需要行为验证了, 很多时候需要状态验证和行为验证一起使用.
:::

示例 1:

::: code-group

```TypeScript [userService.spec.ts]
import { vi, it, expect, describe } from "vitest";
import { UserService } from "./userService";
import { Database } from "./database";

describe("UserService", () => {
  it("should create user ", () => {
    // 与 vi.spyOn 一样
    // Database.prototype.addUser = vi.fn();
    const database = new Database();
    // 记录 addUser 的行为
    vi.spyOn(database, "addUser");
    console.log(database.addUser); // 多了非常多的 function 用于记录行为信息
    // 调用 addUser 之前 addUser.isCalled 是 false
    const userService = new UserService(database);
    // 调用 addUser 之后 addUser.isCalled 是 true

    userService.createUser("Ghosteye");

    expect(database.addUser).toBeCalled();
  });
});
```

```TypeScript [userService.ts]
import { Database, User } from "./database";

export class UserService {
  constructor(private userDatabase: Database) {}

  createUser(name: string): User {
    const id = Math.random() * 1000000;
    const newUser: User = { id, name };
    this.userDatabase.addUser(newUser);
    return newUser;
  }

  findUser(id: number) {
    return this.userDatabase.getUser(id);
  }
}
```

```TypeScript [database.ts]
export interface User {
  id: number;
  name: string;
}

export class Database {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    // axios("/addUser")
  }

  getUser(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
```

示例 2:

:::

::: code-group

```TypeScript [login.spec.ts]
import { it, expect, describe, vi } from "vitest";
import { getTips, login, loginV2 } from "./login";
import { appLogin } from "api";

vi.mock("api", () => {
  return {
    // appLogin: vi.fn(),
    // appLogin: vi.fn().mockReturnValue(true),
    appLogin: vi.fn(() => true),
  };
});

describe("login", () => {
  it("should called login function from api", () => {
    login("Ghosteye", "jiubugaosuni");

    // 验证是否调用了 appLogin 函数
    expect(appLogin).toBeCalled();
    // 是否调用了 appLogin 函数，并且传入了 Ghosteye 和 jiubugaosuni 两个参数
    // expect(appLogin).toBeCalledWith("Ghosteye", "jiubugaosuni");
    // 是否只调用了一次 appLogin 函数
    // expect(appLogin).toBeCalledTimes(1);
  });

  it("v2", () => {
    loginV2("Ghosteye", "jiubugaosuni");
    // 行为验证: 是否调用了 appLogin 函数
    expect(appLogin).toBeCalled();
    // 状态验证: tipString 是否为 login success
    expect(getTips()).toBe("login success");
  });
});
```

```TypeScript [login.ts]
import { appLogin } from "api";

const state = { tipString: "" };

export function login(username: string, password: string) {
  appLogin(username, password);
}

export function loginV2(username: string, password: string) {
  const isLogin = appLogin(username, password);

  if (isLogin) {
    state.tipString = "login success";
  }
}

export function getTips() {
  return state.tipString;
}
```

:::

<!-- 优先使用状态验证, 当找不着状态的时候, 或者当状态非常难获取的时候才使用行为验证

- 测试的写法风格：
- vi.spyOn 对比 vi.mock 使用区别以及使用场景
  - vi.spyOn 不会影响模块的其他导出
- 封装 fireEvent
  - 渐进式演示，同时强调学习技巧 -> 学习库的 api 设计
- 独居测试 mock 掉所有的依赖
- 同时只测试一个功能 ，不要贪多
- 测试之前先把功能详细的写出来
  - 写不出来 说明对功能不了解 就别想写测试了
- vue 组件的两种测试方案
  - 逻辑可以放到组件里面 ，然后用组件测试覆盖逻辑
  - 逻辑可以抽离到 useXXX 独立的文件里面， 用单元测试覆盖
- 通过看 watchDebounced 的实现方案 来制定测试策略
  - promise + setTimeout 的测试方案
- 群居测试和独居测试 测试不同上下文的选择
  - 单独测试 search.ts (独居)
  - 包含 searchTasks & searchCommands 的测试策略 (群居)
- 使用 **mocks** 来方便 mock
  - 使用时机
- 为什么使用假的 command 对象
- 群居测试
  - 把 searchTasks 和 searchCommands 包含进来一起测试的测试 -->

## 可预测性

::: info 保证给定特定输入时产生的输出是可预测的
代码的可预测性是指代码的执行结果是可预测的, 代码的可预测性是测试的前提.
:::

不稳定的代码:

- 外部依赖
  - api
  - 第三方库
  - 数据库
- 随机数
- 时间

### 随机数

::: code-group

```TypeScript [random.spec.ts]
import { vi, it, expect, describe } from "vitest";
import { generateRandomString } from "./random";

describe("Math.random", () => {
  it("should generate random string", () => {
    // 返回 0.1
    //     vi.spyOn(Math, "random").mockImplementation(() => {
    //       return 0.1;
    //     });

    // 第一次调用返回 0.1，第二次调用返回 0.2
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.2;
    });

    const result = generateRandomString(2);

    expect(result).toBe("fc");
  });
});
```

```TypeScript [random.ts]
/**
 * 基于 Math.random 生成一个随机字符串
 * @param length 字符串长度
 * @returns 生成的随机字符串
 */
export function generateRandomString(length: number): string {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // 生成 0 到字符串长度之间的随机整数
    result += characters.charAt(randomIndex); // 将指定位置上的字符添加到结果字符串中
  }
  return result;
}
```

:::

### 时间 Date

::: code-group

```TypeScript [date.spec.ts]
import { beforeEach, afterEach, vi, it, expect, describe } from "vitest";
import { checkFriday } from "./date";

describe("date", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be happy when it's Friday", () => {
    vi.setSystemTime(new Date(2023, 3, 21));

    const result = checkFriday();

    expect(result).toBe("happy");
  });

  it("should be sad when it's not Friday", () => {
    vi.setSystemTime(new Date(2023, 3, 22));

    const result = checkFriday();

    expect(result).toBe("sad");
  });

  it("third", () => {
    checkFriday(); // 这里还是 22 号, 需要使用 vi.useRealTimers(); 还原真实时间
  });
});
```

```TypeScript [date.ts]
/**
 * 检测今天是否为周五
 * @returns 如果今天是周五返回 "开心"，否则返回 "不开心"
 */
export function checkFriday(): string {
  const today = new Date();
  console.log(today.getDay());
  if (today.getDay() === 5) {
    return "happy";
  } else {
    return "sad";
  }
}
```

:::

## 快速反馈

::: info 保证测试的执行速度快
当执行测试的时候, 我们希望测试能够快速的执行完毕, 从而让我们能够快速的得到反馈. 想象一下一个单测需要等待 10s 才能执行完毕, 才能得到反馈, 那么越来越多这种单测, 也就不会愿意维护单测了.
:::

导致单测执行速度慢的原因:

- 外部依赖
  - api
  - 第三方库
  - 数据库
- time
- promise

### time

通过 vi.useFakeTimers() 和 vi.useRealTimers() 切换真实时间和假时间来保证测试执行速度快

::: code-group

```TypeScript [time.spec.ts]
import { vi, it, expect, describe } from "vitest";
import { User } from "./setTimeout";

describe("setTimeout", () => {
  it("should fetch User data", () => {
    vi.useFakeTimers(); // [!code hl]
    const user = new User("1");

    const callback = vi.fn();
    user.fetchData(callback, 1000);
    // vi.advanceTimersByTime(1000);  // [!code hl] 时间快进 1000ms
    vi.advanceTimersToNextTimer(); // [!code hl] 推荐使用

    expect(callback).toBeCalledWith("Data for user with id: 1");
  });

  it("should fetch User data", () => {
    vi.useFakeTimers(); // [!code hl]
    const user = new User("1");

    const callback = vi.fn();
    user.fetchDataV2(callback);
    // 这里 delay 是写死的 2000, 使用 advanceTimersToNextTimer 避免重构更改时间后测试不通过
    vi.advanceTimersToNextTimer();  // [!code hl]

    expect(callback).toBeCalledWith("Data for user with id: 1");
  });

  it("should fetch User data, all", () => {
    vi.useFakeTimers(); // [!code hl]
    const user = new User("1");
    const callback = vi.fn();
    user.fetchData(callback, 1000);

    const user2 = new User("2");
    const callbackV2 = vi.fn();
    user2.fetchDataV2(callbackV2);

    vi.runAllTimers(); // [!code hl] 运行所有的定时器

    expect(callback).toBeCalledWith("Data for user with id: 1");
    expect(callbackV2).toBeCalledWith("Data for user with id: 2");
  });
});
```

```TypeScript [time.ts]
export class User {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  fetchData(callback: (data: string) => void, delay: number): void {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      callback(data);
    }, delay);
  }

  fetchDataV2(callback: (data: string) => void): void {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      callback(data);
    }, 2000);
  }
}
```

:::

### promise

处理异步快速反馈的方式:

示例 1(通过 await 和 advanceTimersToNextTimer 解决 promise + time 的情况):

::: code-group

```TypeScript [promise.spec.ts]
import { vi, it, expect, describe } from "vitest";
import { delay, fetchUserData } from "./index";

describe("Promise", () => {
  it("normal", async () => {
    const result = await fetchUserData();

    expect(result).toBe("1");
  });

  it("delay", async () => {
    vi.useFakeTimers();

    // error case
    // vi.advanceTimersToNextTimer();
    // const result = await delay(1000);
    // vi.advanceTimersToNextTimer();

    // 先拿到 promise 对象不用 await
    const result = delay(100);  // [!code hl]
    // 再调用 advanceTimersToNextTimer 快进时间
    vi.advanceTimersToNextTimer();  // [!code hl]
    // 最后取出 promise 的 resolve 值
    expect(result).resolves.toBe("ok"); // [!code hl]
  });
});
```

```TypeScript [promise.ts]
export function fetchUserData() {
  return new Promise((resolve, reject) => {
    resolve("1");
  });
}

export function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, time);
  });
}
```

:::

示例 2(通过 flushPromises 解决 promise 嵌套 promise 的情况):

::: code-group

```TypeScript [view.spec.ts]
import { it, expect, describe } from "vitest";
import { View } from "./view";
import flushPromises from "flush-promises";

// flushPromises 源码很简单, 如果不想引入这个库, 可以自己 copy 一个放到 utils 里面

describe("View", () => {
  it("should change count", async () => {
    const view = new View();
    // await view.render(); // error case
    // 关于 promise 嵌套 promise 的情况进行测试
    view.render();
    await flushPromises();  // [!code hl]

    expect(view.count).toBe(3);
  });
});
```

```TypeScript [view.ts]
export class View {
  count: number = 1;
  render() {
    Promise.resolve()
      .then(() => {
        this.count = 2;
      })
      .then(() => {
        this.count = 3;
      });
  }
}
```

:::

## API 的多种测试方式

![API](/other/API_test.svg)

### 直接 mock axios(不推荐)

使用 `vi.mocked(axios.[methods]).mockResolvedValue` 或者 mockRejectedValue 直接返回数据, 这种方式并没有检测传入的参数, 也就是说不传参数也能测试成功, 所以需要增加行为验证 验证是否调用指定函数

使用 `vi.mocked(axios.[methods]).mockImplementation((title: string)=> ({title}))` 这种方式可以检测传入的参数, 将行为验证改为状态验证

> 输入和输出时比较麻烦, 暴露了实现细节

### mock 中间层

使用 `vi.mocked(fetchAddTodo).mockImplementation((title: string)=> ({title}))` 没有暴露实现细节 axios, 只暴露了 fetchAddTodo, 这样做的好处是我们可以随时去重构 fetchAddTodo, 从而达到测试的目的.

> 输入和输出更好处理, 没有暴露实现细节, 没有额外的学习成本

### 使用 mock server worker

> 有额外的学习成本, 但是如有有 koa 和 express 的使用经验, 学习成本不大

::: code-group

```TypeScript [serverWorker.spec.ts]
import { it, expect, describe, beforeEach, afterEach } from "vitest";
import { server } from "../mocks/server";
import { mockAddTodo } from "../mocks/handlers";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("server worker", () => {
  it("todo", () => {
    // server.use(
    //   // 注意这里的 url 是`完整的 url`, 不是相对路径, 跟 koa express 类似, 可以自定义路由, 返回数据
    //   rest.get("http://localhost:3000/api/todo", await (req, res, context) => {
    //     const { title } = await req.json();
    //     return res(context.json({ title }));
    //   }),
    // );
    // 这种方式的代码会比较多比较杂, 可以把 server 部分的代码抽离出去
    server.use(mockAddTodo());
  });
});
```

```TypeScript [server.ts]
import { setupServer } from "msw/node";

export const server = setupServer();
```

```TypeScript [handlers.ts]
export const mockAddTodo = () => {
  return rest.get("http://localhost:3000/api/todo", await (req, res, context) => {
    const { title } = await req.json();
    return res(context.json({ title }));
  });
};
```

:::

初始化部分的逻辑可能是在每个测试脚本都需要执行的, 可以放到 vitest 的配置当中.

::: code-group

```TypeScript [vite.config.ts]
// vitest.config.ts || vite.config.ts 都可以, 推荐使用 vite.config.ts
export default defineConfig({
  test: {
    setupFiles: ["./src/setup.ts"],
  },
  // ...
});
```

```TypeScript [setup.ts]
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

:::

## 参数化验证

::: info 作用
提供在多个 test case 中重用相同测试逻辑的方法
:::

在这个示例中, 测试代码逻辑都是相同的只是输入和输出不同, 所以可以使用参数化验证

::: code-group

```TypeScript [param.spec.ts]
describe("emailValidator", () => {
  // [!code hl] // 重复的测试 case
  // it("should return true for valid email", () => {
  //   const email = "valid-email@example.com";
  //   expect(emailValidator(email)).toBe(true);
  // });

  // it("should return false for invalid email without domain extension", () => {
  //   const email = "invalid.email@example";
  //   expect(emailValidator(email)).toBe(false);
  // });

  // it("should return false for invalid email with extra dot at the end", () => {
  //   const email = "another.invalid.email@example.";
  //   expect(emailValidator(email)).toBe(false);
  // });

  // it("should return false for invalid email with missing '@'", () => {
  //   const email = "yet.another.invalid.email.example.com";
  //   expect(emailValidator(email)).toBe(false);
  // });

  // [!code hl] // 这种方式的缺点是, 当测试失败的时候, 无法知道是哪个 case 失败了
  it.each([
    ["valid-email@example.com", true],
    ["invalid.email@example", false],
    ["another.invalid.email@example.", false],
    ["yet.another.invalid.email.example.com", false],
  ])("should return %s when email is %s", (email, expected) => {
    expect(emailValidator(email)).toBe(expected);
  });

  // [!code hl] // 使用对象的方式可以知道 case 对应的输入和输出从而知道是哪个 case 失败了
  it.each([{ email: "valid-email@example.com", expected: true }])(
    "should return $email when email is $expected",
    ({ email, expected }) => {
      console.log(email, expected);
      expect(emailValidator(email)).toBe(expected);
    },
  );

  // [!code hl] // 使用模板字符的方式调用更灵活
  it.each`
    email                        | expected
    ${"valid-email@example.com"} | ${true}
    ${"invalid.email@example"}   | ${false}
  `("should return $email when email is $expected", ({ email, expected }) => {
    console.log(email, expected);
    expect(emailValidator(email)).toBe(expected);
  });

  // [!code hl] // 使用模板字符的方式调用更灵活
  it.each`
    email             | expected
    ${{ a: "aaaaa" }} | ${true}
  `("should return $email.a when email is $expected", ({ email, expected }) => {
    console.log(email, expected);
    expect(emailValidator(email)).toBe(expected);
  });
});
```

```TypeScript [emailValidator.ts]
export function emailValidator(email: string): boolean {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
```

:::

## 手动测试到单元测试的认知转变

::: info
不会写测试的时候, 可以想一下用手动测试的时候是如何去验证的, 然后转化为使用单元测试去验证就好了

现代框架 vue 和 react 都是数据驱动视图的, 所以只要保证数据的正确性, 视图就是正确的
:::

- 手动测试 -> 去看试图的变化
- 单元测试 -> 去看状态 -> 数据的变化

![learning_test](/other/learning_test.svg)

> 相同点都对数据进行处理<br>
> 不同的地方是手动测试是通过用户的交互(键盘事件/鼠标事件等)去 input<br>
> 单元测试是通过调用函数去 input

- 单元测试是测试单个逻辑
- 组件测试是测试组件逻辑和 UI
- e2e 测试是测试整个应用

![test](/other/test.svg)

## 测试的基本策略

- 正向测试(happy path):
  - 给定预期输入时能产生预期的输入, 满足功能要求
- 反向测试(sad path):
  - 处理无效输入: 程序在使用过程中可能会收到无效或错误的输入
  - 提高程序的健壮性: 通过反向测试, 我们可以发现和修复程序中的一些潜在问题, 从而提高程序的健壮性
- 异常测试(sad path):
  - 处理运行时错误: 程序在运行过程中可能会出现各种运行时错误, 例如网络错误, 服务器错误

::: warning 再次提醒
不要完美主义, 不要陷入测试 case 的陷阱试图找出所有反向测试和异常测试, 小步走逐步完善即可.

如果不知道哪些测试是该写的, 哪些测试是不该写的, 可以先想一下这个功能如果是手动测试的话是如何去做的. 然后将手动测试改成单元测试就好了. 后续遇到无效输入和运行时错误的时候再去补充测试即可.
:::

## 不是所有代码都值得写测试

::: info 回报率
简单的代码, 不容易出错的代码, 写测试的回报率都特别低

测试覆盖率值越高, 回报率越低

回报率特别低的代码就没有必要去写测试了
:::

- 简单的代码, 不容易出错误的代码就没有必要去写测试, 因为它的回报率特别的低
- 没必要追求 100% 覆盖率, 当覆盖率达到一定值的时候回报率是特别低的
- 库可能覆盖率高一点比较好, 业务代码经常重构或者更改业务, 单元测试的作用就不那么大, 覆盖率低一点也没关系
- 结合功能去写单元测试, 而不是仅仅测试独立的函数
- 非关键的代码, 比如 `console.log` 日志
- 只是将后端数据格式进行简单的转换后渲染, 这个根据实际情况选择是否测试, 如果个人写的比较自信那么可以不写, 如果对自己写的代码没那么自信写一下也是可以的

## 掌握使用测试替身的核心思想

::: info 核心思想
将被测代码与周围隔离开来, 从而使测试更加容易编写, 更加可靠

将那些不可控, 不可预测的部分隔离开, 然后通过测试替身替换成可控, 可预测的部分
:::

![stub](/other/stub.svg)

> 将 car 跟 engine 隔离开来, 可以使用测试替身替换 engine

使用测试替身(stub/mock)进行以下操作:

- 加速执行测试
- 使执行变得确定
- 模拟特殊情况
- 暴露隐藏的信息

## 测试替身的类型

![stub_test](/other/stub_test.svg)

### Dummy(哑元对象) 占位符 类型报错

::: info Dummy
它的本质是占位符.

作用是解决类型报错.
:::

::: code-group

```TypeScript [dummy.spec.ts]
import { test } from "vitest";
import { Message, Recipient, sendEmail } from "./dummy";

test("EmailService", () => {
  const message: Message = {
    subject: "heihei",
    body: "hahaha",
  };
  // 创建一个基础数据结构, 占位
  // const dummyRecipient: Recipient = {
  //   email: "",
  //   name: "",
  // };
  // 创建一个空对象, 占位
  const dummyRecipient = {} as Recipient;
  sendEmail(message, dummyRecipient);
});
```

```TypeScript [dummy.ts]
export interface Message {
  subject: string;
  body: string;
}

export interface Recipient {
  email: string;
  name: string;
}

export function sendEmail(message: Message, recipient: Recipient) {
  // 假设这里是发送邮件的真实逻辑，它只使用了 message 参数
  console.log(`Email subject: ${message.subject}`);
  console.log(`Email body: ${message.body}`);

  // 真实逻辑会调用 recipient
  // console.log(recipient);
}
```

:::

### Stub(测试桩)

::: info stub
它主要是去做隔离依赖的, 让我们可以更随意的去控制我们想要的值, 一般用于间接输入的时候.
:::

::: code-group

```TypeScript [stub.spec.ts]
// user.test.js
import { vi, it, expect, describe } from "vitest";
import { sendWelcomeEmail } from "./stub";
import { getUserEmail } from "./stub.database";

vi.mock("./stub.database.ts", () => {
  return {
    getUserEmail: () => "test@gmail.com",
  };
});

it("sendWelcomeEmail sends email to the correct address", async () => {
  const email = sendWelcomeEmail(1);
  expect(email).toBe("test@gmail.com");
});
```

```TypeScript [stub.ts]
import { getUserEmail } from "./stub.database";
// user.js
export function sendWelcomeEmail(userId: number) {
  const email = getUserEmail(userId);
  // Send email to the user...
  return email;
}
```

```TypeScript [stub.database.ts]
// database.js
// 模拟的数据库数据
const users = [
  { id: 1, email: "alice@example.com" },
  { id: 2, email: "bob@example.com" },
  { id: 3, email: "charlie@example.com" },
];

// 模拟从数据库中获取用户电子邮件的函数
export function getUserEmail(userId: number) {
  // 在真实的函数中，你可能会进行数据库查询
  // 但在这个模拟的函数中，我们只是从一个数组中获取数据
  const user = users.find(user => user.id === userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user.email;
}
```

:::

### Spy(测试间谍)

::: info spyOn
它的主要作用是记录目标函数被调用的方式和次数用于验证, 一般用于行为验证.
:::

::: code-group

```TypeScript [spy.spec.ts]
import { vi, test, expect, describe } from "vitest";
import { user } from "./spy";

test("spy", () => {
  vi.spyOn(user, "getName");
  user.getName();

  expect(user.getName).toBeCalled();
});
```

```TypeScript [spy.ts]
export const user = {
  getName() {
    return "Ghosteye";
  },
};
```

:::

### mock(模拟对象)

::: info mock
可以理解为它是 stub 和 spy 的结合体, 用于隔离依赖, 控制代码的行为, 去验证代码的行为.

一般在行为验证的时候去用它, 用于间接输出.
:::

::: code-group

```TypeScript [spy.spec.ts]
import { vi, test, expect, describe } from "vitest";
import { user } from "./spy";

test("spy", () => {
  vi.spyOn(user, "getName").mockImplementation(() => "heiheihei"); // [!code hl]
  user.getName();

  expect(user.getName).toBeCalled();
  expect(user.getName()).toBe("heiheihei"); // [!code hl]
  console.log(user.getName);
});
```

```TypeScript [spy.ts]
export const user = {
  getName() {
    return "Ghosteye";
  },
};
```

:::

::: code-group

```TypeScript [stub.spec.ts]
// user.test.js
import { vi, it, expect, describe } from "vitest";
import { sendWelcomeEmail } from "./stub";
import { getUserEmail } from "./stub.database";

vi.mock("./stub.database.ts", () => {
  return {
    getUserEmail: vi.fn(() => "test@gmail.com"), // [!code hl]
  };
});

it("sendWelcomeEmail sends email to the correct address", async () => {
  const email = sendWelcomeEmail(1);
  console.log(getUserEmail); // [!code hl]
  expect(email).toBe("test@gmail.com");
});
```

```TypeScript [stub.ts]
import { getUserEmail } from "./stub.database";
// user.js
export function sendWelcomeEmail(userId: number) {
  const email = getUserEmail(userId);
  // Send email to the user...
  return email;
}
```

```TypeScript [stub.database.ts]
// database.js
// 模拟的数据库数据
const users = [
  { id: 1, email: "alice@example.com" },
  { id: 2, email: "bob@example.com" },
  { id: 3, email: "charlie@example.com" },
];

// 模拟从数据库中获取用户电子邮件的函数
export function getUserEmail(userId: number) {
  // 在真实的函数中，你可能会进行数据库查询
  // 但在这个模拟的函数中，我们只是从一个数组中获取数据
  const user = users.find(user => user.id === userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user.email;
}
```

:::

### fake(伪造对象)

::: info
它主要用于替代那些在测试环境中难以创建或者过于复杂耗时的真实对象, 伪造一个简单版本用于辅助触发测试

一个功能有一些方法可能不是你触发的(比如服务端去触发), 这个时候要进行测试需要某个方法去触发需要测试的函数就需要用到伪造对象
:::

::: code-group

```TypeScript [fake.spec.ts]
import { vi, test, expect } from "vitest";
class FakeSocket {
  private listeners: { [key: string]: ((...args: any[]) => void)[] } = {};

  // 模拟 `on` 方法，用于监听事件
  on(event: string, listener: (...args: any[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  // 用于在测试中手动触发事件，模拟从服务器接收到消息
  trigger(event: string, ...args: any[]) {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      eventListeners.forEach(listener => listener(...args));
    }
  }
}

function io() {
  return new FakeSocket();
}

vi.mock("socket.io-client", () => {
  return {
    default: io,
  };
});

// 现在，你的代码将使用我们的 Fake `socket.io` 而不是真实的 `socket.io`
import { initSocket, addListener } from "./fake.socket";

test("should handle messages from the server", () => {
  const mockListener = vi.fn();
  addListener(mockListener);

  const socket = initSocket();

  // 手动触发 "message" 事件，模拟从服务器接收到消息
  socket.trigger("message", "Hello, world!");

  expect(mockListener).toHaveBeenCalledWith("Hello, world!");
});
```

```TypeScript [fake.socket.ts]
import io from "socket.io-client";

const listeners: Listen[] = [];

export let socket;
export function initSocket() {
  socket = io("http://localhost:3000");

  socket.on("message", message => {
    listeners.forEach(listener => {
      listener(message);
    });
  });

  return socket;
}

type Listen = (message: string) => void;

export function addListener(listen: Listen) {
  listeners.push(listen);
}
```

:::

## 独居测试和群居测试

::: info
独居测试就是只测待测部分的 SUT, 其他内容都隔离开.

群居测试就是将 SUT 所依赖的部分一起测试.

独居和群居都各自是一个流派, 没有哪个更好, 根据实际场景去使用就行. 最好是根据团队风格规范去统一.
:::

![solitary-test-sociable-test](/other/solitary-test-sociable-test.svg)

示例代码(分别给下面代码写独居测试和群居测试):

::: code-group

```TypeScript [orderProcessor.ts]
import { checkStock } from "./InventoryService";
import { sendEmail } from "./EmailService";
// 订单处理系统
export class OrderProcessor {
  processOrder(order) {
    // 检查并更新库存，发送确认邮件
    const isOk = checkStock(order);
    if (isOk) {
      sendEmail();
    }
  }
}
```

```TypeScript [EmailService.ts]
import axios from "axios";
// 邮件服务

export function sendEmail() {
  axios.get("/sendEmail");
}
```

```TypeScript [InventoryService.ts]
const stock = [
  {
    name: "北冰洋",
    count: 10,
  },
];
// 库存服务
export function checkStock(order) {
  // 真实的逻辑
  const item = stock.find(item => order.name === item.name);
  if (!item) return false;
  return item.count > 0;
}

export function updateStock(item) {
  const stockItem = stock[item.name];

  if (stockItem) {
    stockItem.count += item.count;
  } else {
    stock.push(item);
  }
}
```

:::

### 独居测试

```TypeScript
import { OrderProcessor } from "./orderProcessor";
import { vi, test, expect, describe } from "vitest";
import { sendEmail } from "./EmailService";

// 大量的 mock 代码
vi.mock("./EmailService", () => {
  return {
    sendEmail: vi.fn(),
  };
});

vi.mock("./InventoryService.ts", () => {
  return {
    //stub
    checkStock() {
      return true;
    },
  };
});

test("processOrder should succeed when there is enough stock", () => {
  const orderProcessor = new OrderProcessor();

  orderProcessor.processOrder({ name: "hei", count: 1 });

  expect(sendEmail).toBeCalled();
});
```

优点:

- 如果测试报错可以更精准的去定位问题, 因为测试范围比较窄

缺点:

- 大量的 mock 代码: 示例只是两个依赖, 如果有更多的依赖意味着需要写更多的 mock 代码
- 暴露了实现细节: 比如改动 `checkStock` 重命名为 `checkStockNew` 并没有更改逻辑, 但是会导致测试用例失败
- 忽略了组件之间的交互: 上面通过 mock 直接返回了 `checkStock` 的结果, 假设我破坏了 `checkStock` 内的代码(比如注释掉), `测试还是通过!!!`

适用场景:

- 架构分层比较清晰的时候, 比如 nest.js 或者 koa 等

### 群居测试

```TypeScript
import { test, vi, expect, describe } from "vitest";
import { OrderProcessor } from "./orderProcessor";
import { updateStock } from "./InventoryService";
import { sendEmail } from "./EmailService";

vi.mock("./EmailService.ts", () => {
  return {
    sendEmail: vi.fn(),
  };
});

// 群居
test("processOrder should succeed when there is enough stock", () => {
  // setup 因为测试需要 checkStock 返回 true, 所以需要先更新库存
  updateStock({ name: "hei", count: 1 });

  const orderProcessor = new OrderProcessor();

  orderProcessor.processOrder({ name: "hei", count: 1 });

  expect(sendEmail).toBeCalled();
});
```

优点:

- 更真实的环境: 假设将 `checkStock` 的内容注释掉, 那么测试就会报错, 可以发现组件之间的交互问题

缺点:

- 定位问题比较困难: 如果 `processOrder` 依赖的不止是 `sendEmail` `checkStock` 这两个模块, 还有更多的模块的话, 那么当测试报错的时候就很难定位问题了
- setup 比较费力: 需要创建一些数据, 比如上面的 `updateStock` 就是为了让 `checkStock` 返回 true, 如果 `checkStock` 依赖的数据比较多, 那么 setup 的代码就会比较多

> 解决定位困难: 平时写单元测试的时候是小步走的方式, 那么每次写到一部分的时候报错了, 就可以定位到刚才写的部分出了问题<br>
> 解决 setup 费力: 创建工厂函数用于创建数据

适用场景:

- 前端业务代码, 分层不太清晰的功能等

## 测试的拆卸

::: info 拆卸
主要用于在测试执行后, 清除或者还原测试期间产生的副作用, 以确保每个测试之间的独立性和可重复性
:::

- 利用垃圾回收机制: 临时创建的变量使用完毕后会自动回收
- 内联拆卸: 指一些全局/数据库/文件/永久数据, 需要手动去清理. 可以封装一个重置方法, 在对应的 test case 后面调用重置
- 隐式拆卸: 假设一个 test case 执行过程中已经产生了副作用, 但是在重置之前抛出了错误, 导致没有执行到重置方法就进行下一个 test case 了, 这个时候就需要在下一个 test case 之前去重置, 可以使用 `afterEach` 来实现

> 示例待补充...

## 自定义环境&模拟浏览器环境

::: info tips
很多时候没有浏览器环境, 比如说 localStorage 等. 或者是没有 path, fs 等 node 模块
:::

### 浏览器环境

> 推荐使用 `happy-dom` 这个包, 测试时性能更好, 也可以使用 js-dom 等包

::: code-group

```TypeScript [browser-env.spec.ts]
import { test, expect } from "vitest";
import { getName } from "./browser-env";
// import { Window } from "happy-dom";

test("browser-env", () => {
  // 在 vitest.config.ts 文件中配置后不再需要手动挂载
  // const window = new Window();
  // console.log(window)
  // globalThis.localStorage = window.localStorage;
  localStorage.setItem("name", "Ghosteye");
  expect(getName()).toBe("Ghosteye");
});
```

```TypeScript [browser-env.ts]
export function getName() {
  return localStorage.getItem("name");
}
```

```TypeScript [vitest.config.ts]
import { defineConfig } from "vitest/dist/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
  },
});
```

:::

### 自定义环境

[vitest-environment](https://cn.vitest.dev/guide/environment.html)

::: info tips
创建自定义环境 vitest 框架有要求文件夹名称必须是 `vitest-environment-*` 的格式
:::

```JavaScript [vitest-environment-ghosteye/index.js]
export default {
  name: "custom Ghosteye",
  transformMode: "ssr",
  setup(global) {
    console.log(" vitest - env - Ghosteye");
    let obj = {};
    global.localStorage = {
      getItem(key) {
        return obj[key];
      },
      setItem(key, name) {
        obj[key] = name;
      },
    };

    return {
      teardown() {
        // called after all tests with this env have been run
      },
    };
  },
};
```

::: info Usage
首先需要在 vitest-environment-ghosteye 文件夹创建 package.json( `pnpm init -y` ) 文件

然后安装到依赖 `pnpm i ./vitest-environment-ghosteye -D`

然后在 vitest.config.ts 文件中配置 `environment: "ghosteye"`
:::

::: code-group

```TypeScript [browser-env.spec.ts]
import { test, expect } from "vitest";
import { getName } from "./browser-env";

test("browser-env", () => {
  localStorage.setItem("name", "Ghosteye");
  expect(getName()).toBe("Ghosteye");
});
```

```TypeScript [browser-env.ts]
export function getName() {
  return localStorage.getItem("name");
}
```

```TypeScript [vitest.config.ts]
import { defineConfig } from "vitest/dist/config";

export default defineConfig({
  test: {
    // vitest 会自己加上自定义环境的前缀
    environment: "ghosteye",
  },
});
```

:::

## 测试命名

测试命名的作用
测试命名的规则
一个不好的命名会导致什么问题

<!-- 测试命名的目的是为了让测试更加容易理解, 一般遵循以下规则: -->

<!-- - 测试的名称应该是一个完整的句子 -->
<!-- - 测试的名称应该包含三个部分: 主语, 动词, 宾语 -->

## 快照测试

> 第一次执行快照测试会自动生成快照文件, 再次执行会判断是否与当前快照文件相等

::: code-group

<<< @/../src/test/40-snapshot/index.spec.ts [snapshot.spec.ts]

<<< @/../src/test/40-snapshot/__snapshots__/index.spec.ts.snap [__snapshots__/index.spec.ts.snap]

<<< @/../src/test/40-snapshot/__snapshots__/Hi.html [__snapshots__/Hi.html]

:::

通过 `-u`(--update) 更新快照

```bash
vitest snapshot -u 
```

## 分析如何写出更好的测试

- 不要完美主义, 试图找出所有边界, 小步走逐步完善
- 视角转换, 从使用者的角度去思考功能而不是只思考当前开发的函数, 不要过度设计, 用到啥测试啥
- 不要追求 100%覆盖率, 该测的测, 不该测的不要为了测试覆盖率而测

![test_map](/other/test_map_new.svg)

[\_](https://testing.cuixueshe.com/)
