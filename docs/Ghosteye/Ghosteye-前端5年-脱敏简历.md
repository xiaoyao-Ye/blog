_Ghosteye / <Ghosteye@yeah.net>

Github：[https://github.com/xiaoyao-Ye](https://github.com/xiaoyao-Ye)

博客：[https://xiaoyao-ye.github.io/blog/](https://xiaoyao-ye.github.io/blog/)

### 技术栈

TypeScript | Vue3 | uniapp | Node.js | nestjs | React | Git | Docker

### 个人简介

拥抱前后端技术，思维开放，乐于学习分享，已开源项目实践中的一些工具。

### 技术成果

- **Quick Create log**：vscode 插件 [![installs](https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/ghosteye.vs-quick-log?label=Installs)](https://marketplace.visualstudio.com/items?itemName=ghosteye.vs-quick-log)
  - 精准识别打印变量，调试效率增加 **50%**

- **zl-cli**：一个生成接口函数的工具，支持团队内5大项目自动生成 api 函数，对接接口效率增加 **100%**
  - 根据 openAPI 规范生成 api.ts 和 typings.d.ts 等接口文件
  - 统一前端对接编码规范，简化多人协作开发流程，便于后续维护

- **create-xm**: 前端脚手架，用于快速搭建公司内部前端项目
  - 快速生成更适合公司内部使用的前端框架基础模板的工具
  - 自定义项目模板，统一团队内的 Eslint、Prettier、Git 提交等规范

### 工作经历

#### 2023.05 - 至今  xx(深圳)xx技术有限公司（前端工程师）

#### 2021.04 - 2023.03  深圳xxxx科技有限公司（前端工程师）

#### 2019.03 - 2021.02  深圳xxxxx有限公司（前端工程师）

### 项目经验

#### DApp：xx商城

> 技术栈：uniapp、uview-ui、Viem

- 使用 Viem、Ethers、Web3 部署调用智能合约
- 解析交易回执日志，解析交易 inputData 数据
- 编写 **Quick Create log** vscode 插件批量打印变量，优化调试效率
- 接入 sentry 实时监测追踪应用程序中的错误和异常

#### PC：xxxxx 创作者平台

> 技术栈：React、nextjs、chakra-ui、swr

- 主要使用 nextjs app router 架构实现 SRR SSG CSR渲染
- Chakra UI 构建原子样式组件
- 通过 framer-motion 添加页面 UX 交互
- i18next 实现多语言国际化
- 使用 axios 以及 swr 的 hook 实现接口请求
- 编写 Dockerfile 实现项目 CI/CD 自动化构建部署

#### PC：xxxx运营管理系统  | xx集团派遣管理平台

> 技术栈：vue3、vite、TypeScript 、vue-router、pinia、windicss、antd、element-plus、ueditor

- 编写 create-xm 脚手架，快速搭建各端项目，让团队成员专注于业务开发
  - 统一团队使用的相关生态工具，便于协作维护
  - 省去各个项目手动配置 Eslint、Prettier、Git 等协作工具的时间
- 编写 zl-cli npm包，减少重复性工作，提升研发体验
  - 可直接生成与后端对接的接口以及 TS 类型定义的代码，并使用 Prettier 格式化后生成文件
  - 对接时只需调用生成的 api 函数传入接口参数即可，让前端更专注于业务逻辑开发
- 应用 CI/CD 等自动化工程，编写 Dockerfile 使用 docker 配合 gitlab 进行持续集成，部署，发布
- 封装上传组件，实现大文件切片上传，断点续传，实时显示上传进度等功能
- 编写按钮权限，水印，防抖，节流等全局指令

#### 小程序：xx服务+

> 技术栈：uniapp、vue2、TypeScript、uview-ui、uni-ui、pinia、loadsh-es、scss

- 基于 miniprogram-ci 编写 **wechat-ci** npm包，可脱离微信开发者工具，自动化构建及发布，避免重复性时间损耗，提高团队效能
  - 合并了发布环节，整个提交流程只需要在 vscode 中进行即可
  - 杜绝了切换环境(开发/测试/生产)时导致的发布错误, 减少版本号填写错误的问题
  - 命令行直接上传并获取小程序预览码，无需使用微信开发者工具进行编译上传
- 基于 uniapp 的 navigate 封装路由，实现页面跳转，传参，路由守卫等功能
- 使用 vue-class-component、vue-property-decorator 插件实现以 class 的方式编写 vue 页面
- 适配 Android 和 IOS 以及解决各种疑难杂症

#### PC+H5：TMS运输系统管理平台

> 技术栈：vue2、vue-router、vuex、element-ui、vant、less

- 对 axios 进行二次封装，请求/响应拦截中对接口进一步处理，便捷进行 api 接口的请求
- 使用 echarts 完成仪表盘统计数据可视化，完成 KPI 温度、路线、订单表格等散点图渲染
- 使用百度地图对冷藏车辆的温度、速度、定位、轨迹信息进行可视化在途跟踪及监控
- 封装使用 localStorage

### 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。
