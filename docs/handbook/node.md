# node

## global

一些全局的环境变量, 或者全局变量可以挂载到全剧对象上面. 就好像浏览器挂载到 `window` 一样

```Typescript
Object.assign(global, { $ })
```

## common API

### constant

> node 内置的常量

- `__dirname` 动态获取当前文件所属目录的绝对路径
- `__filename` 动态获取当前文件的绝对路径

### fs

> Sync 结尾是同步, 其余是异步

- fs.exists 判断是否存在, 存在则返回 true，否则返回 false
- fs.writeFile 将指定的数据写入文件。默认情况下，如果文件存在，将被替换。
- fs.mkdir 创建目录
- fs.readdir 读取文件目录,返回目录下文件名数组
- fs.readFile('xx', 'utf-8') 读取文件并返回其内容
- fs.stat 给定路径, 返回 stat 对象, 该对象具有多个属性和方法来获取有关文件或目录的详细信息
  - stat.isDirectory() 该路径是否是目录
  - stat.isFile() 该路径是否是文件
- fs.copyFile 将文件从源路径异步复制到目标路径。默认情况下，如果文件存在，将被替换。
- fs.rm 删除给定路径的目录。它也可以递归地用于删除嵌套目录

### path

- `resolve` 将多个路径解析为一个绝对路径.

  ```js
  // 语法为 `path.resolve([...paths])`
  // `...paths` 是一个路径或多个路径片段, 如果传入路径为空, 则返回当前工作目录的绝对路径

  path.resolve("/foo/bar", "./baz");
  // 返回: '/foo/bar/baz'

  path.resolve("/foo/bar", "/tmp/file/");
  // 返回: '/tmp/file'

  path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");
  // 如果当前工作目录是 /home/myself/node，
  // 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
  ```

- `join` 将多个路径拼接为一个路径.

  ```js
  // 语法为 `path.join([...paths])`
  // `...paths` 是一个路径或多个路径片段,
  // 任何一个路径片段是绝对路径，则之前的路径片段都会被忽略
  // 如果拼接后的路径是空字符串，则返回当前工作目录的路径

  path.join("/foo", "bar", "baz/asdf", "quux", "..");
  // 返回: '/foo/bar/baz/asdf'

  path.join("wwwroot", "static_files/png/", "../gif/image.gif");
  // 如果当前工作目录是 /home/myself/node，
  // 则返回 'wwwroot/static_files/gif/image.gif'
  ```

- `extname` 获取文件的扩展名.

  ```js
  // 它的语法为path.extname(path)。
  // 其中path是文件路径。如果文件没有扩展名，则返回空字符串

  path.join("/foo", "bar", "baz/asdf", "quux", "..");
  // 返回: '/foo/bar/baz/asdf'

  path.join("wwwroot", "static_files/png/", "../gif/image.gif");
  // 如果当前工作目录是 /home/myself/node，
  // 则返回 'wwwroot/static_files/gif/image.gif'
  ```

### child_process

- `spawn` 执行命令. 主要用于异步地衍生子进程，不会阻塞 Node.js 事件循环

## shebang

Shebang 是一种在 Unix 和 Linux 系统中使用的特殊注释，通常用于指定脚本文件的解释器。在文件的第一行添加一个井号（#）和一个惊叹号（!），紧接着是解释器的完整路径或可执行文件名。例如，`#!/usr/bin/python` `#!/usr/bin/env node`。当直接调用脚本文件时，调用者会利用 Shebang 提供的信息调用相应的解释器，从而使得脚本文件的调用方式与普通的可执行文件类似。

Shebang 的作用是指定脚本文件的解释器。

`#!/usr/bin/env python` 在这个例子中, 用了 env. 使用 env 和不使用 env 的区别在于，env 将在 PATH 环境变量中查找 python，而不是在固定的路径中查找。这样做的好处是可以避免在不同的系统上使用不同的 Python 解释器所带来的问题。

### package.json 配置可执行文件

```json
{
  "name": "test",
  // 可执行文件, 从 npm 上安装这个包后, 使用 test 命令会执行这个index.js
  "bin": "./index.js",
  // or
  // 可配置为对象形式
  "bin": {
    // xx
    "xx": "./xx.js",
    // zz
    "zz": "./zz.js"
  }
}
```

## import

当 node 中需要导入一个文件时, 使用 import 导入需要的是一个 fileURL, 不能直接是 path

可以使用 `await import(url.pathToFileURL(resolve('./xx.js')).toString());` 这种方式转换.
