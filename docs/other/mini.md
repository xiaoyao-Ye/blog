# mini

通过不断的造轮子学习

## mini-vue

## mini-zx

<!-- [崔哥笔记](https://app.heptabase.com/w/b1d37c4b02d6e93f8628cdac360bde066f124b279cd2b50ab57410740300a34f?id=6b388a5f-6c0a-4971-942f-617ca34a10d3) -->

### 功能描述

通过 $`` 方式直接调用 shell command 然后输出结果:

```ts
import { $ } from 'zx'
$`cat package.json`

//  {
//    "name": "demos",
//    "version": "1.0.0",
//    ...
//  }
```
