# test

- 保持单元测试的可读性(测试非常重视可读性和可维护性, 只有测试的维护成本小于业务代码的维护成本, 才会愿意去维护它)

## vitest

> 开箱即用、共用 vite 配置(意味着可以开发环境, 构建环境, 测试环境共用同一套配置)

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

:::code-group

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

:::code-group

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

:::code-group

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

> 强依赖某个模块或者第三方库时, 通过依赖注入的方式解决强依赖, 便于测试

```txt
依赖倒置原则:
高层模块不应该依赖底层模块, 二者都应该依赖其抽象;
抽象不应该依赖细节, 细节应该依赖抽象.

程序的接缝:
程序接缝是代码中的一个分界线, 它允许我们讲一个组件与其他组件隔离开.
通过创建接缝, 我们可以轻松地将组件替换为另一个组件, 而不会影响到应用程序的其他部分.
这有助于将组件之间的耦合降到最低. 使得代码更加模块化.
```

> 本质上就是调整一下代码结构, 将强依赖的模块或者第三方库抽离出来一个函数, 将这个函数通过参数的方式传入, 那么测试的时候就可以传入一个自定义返回值的函数, 从而达到测试的目的.

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

:::code-group

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

:::code-group

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

> 使用最多的方式, 状态是指 `属性/数据结构`, 状态验证最重要的是找到状态然后去验证它. 状态没有暴露出去可以通过间接层去获取状态

状态验证的过程是黑盒验证: 黑盒验证可以让我们大胆的去重构`实现`部分, 因为我们只关心输入和输出, 不关心内部的实现细节

:::code-group

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

优先使用状态验证, 当找不着状态的时候, 或者当状态非常难获取的时候才使用行为验证

## 分析如何写出更好的测试

[\_](https://testing.cuixueshe.com/)
