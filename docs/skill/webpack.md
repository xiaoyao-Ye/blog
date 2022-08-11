# webpack

## 自动化引入模块

- 需要注意 `require.context` 并不是天生的而是由 `webpack` 提供。在构建时，`webpack` 在代码中解析它。

```javascript
// 这个示例是导入api文件夹里的所有js文件
let importAll = require.context('./modules', false, /\.js$/)

class Api extends Request {
  constructor() {
    super()
    //importAll.keys()为模块路径数组
    importAll.keys().map((path) => {
      //兼容处理：.default获取ES6规范暴露的内容; 后者获取commonJS规范暴露的内容
      let api = importAll(path).default || importAll(path)
      Object.keys(api).forEach((key) => (this[key] = api[key]))
    })
  }
}

export default new Api()
```

- `require.context` 参数
  - 文件夹路径
  - 是否递归查找子文件夹下的模块
  - 模块匹配规则，一般匹配文件后缀名
- 只要是需要批量引入的场景，都可以使用这种方法。包括一些公用的全局组件，只需往文件夹内新增组件即可使用，不需要再去注册。如果还没用上的小伙伴，一定要了解下，简单实用又能提高效率。
