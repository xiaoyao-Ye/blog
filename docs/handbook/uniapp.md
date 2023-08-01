# uniapp

## 禁止弹窗遮罩层下的页面滚动

给弹窗的最外层 view 添加 `@touchmove.stop.prevent` 事件, 主要是为了设置 touchmove 的 `.stop.prevent`
事件本身如果没有使用到可以不绑定函数
