# css

## 鼠标选中状态

- 元素下的文字颜色和背景颜色改变,只设置 color 默认会无 bgcolor,都不设置,按网站默认的来

```javascript
body::selection {
  color: #fff;
  background: #000;
}
.box-custom::selection {
  color: #ffffff;
  background-color: #ff4c9f;
}
```

## 禁止选择文本

```css
p {
  user-select: none;
}
```

## 文字超出隐藏

```css
// 单行
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

// 多行
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

## 图片 5px 间距

1. **给父元素设置 font-size: 0;**
1. **给 img 设置 display: block;**
1. **给 img 设置 vertical-align: bottom;**
1. **给父元素设置 line-height: 5px;**

## not 选择器

> 例如: 所有元素都需要某个样式,唯独最后一个元素不需要

```css
li:not(:last-child) {
  border-bottom: 1px solid #ebedf0;
}
```

## ios 滚动条卡顿

> 在 IOS 机器上，经常遇到元素滚动时卡顿的情况，只需要一行 css 即可让其支持弹性滚动

```css
body,
html {
  -webkit-overflow-scrolling: touch;
}
```

## 使用 scroll-snap-type 优化滚动

```html
<div class="section">
  <div class="section__item">Item 1</div>
  <div class="section__item">Item 2</div>
  <div class="section__item">Item 3</div>
  <div class="section__item">Item 4</div>
  <div class="section__item">Item 5</div>
</div>
```

```css
.section {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.section__item {
  scroll-snap-align: start;
}
```

## 版权栏布局

> 内容不够时，**版权栏**要处于底部，内容足够多时，**版权栏**随着内容往下沉

```html
<div class="container">
  <div class="main">我是内容区域</div>
  <div class="footer">版权栏</div>
</div>
```

```css
.container {
  height: 100vh;
  /* 关键css处 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  flex: 1;
}
```

## 网站灰色模式

- 使用 filter 属性完成

```css
body {
  filter: grayscale(100%);
}
```

## flex 布局最后一排数量不够两端对齐问题

> （适合所有列的布局：3 列、4 列、5 列等等）推荐使用！

```vue
<template>
  <div class="cardList">
    <div class="card"></div>
  </div>
</template>

<style lang="scss" scoped>
.cardList {
  padding-left: 30rpx;
  padding-right: 12rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: '';
    flex: auto; // 有空间则占领剩余所有空间,没空间width为0
  }
  .card {
    margin-right: 18rpx;
    width: calc((100% - (18rpx * 3)) / 3); // 几列就 *几/几
  }
}
</style>
```

## 三角形

```html
<div class="box">
  <div class="box-inner">
    <div class="triangle bottom"></div>
    <div class="triangle right"></div>
    <div class="triangle top"></div>
    <div class="triangle left"></div>
  </div>
</div>
```

```css
.triangle {
  display: inline-block;
  margin-right: 10px;
  /* 基础样式 */
  border: solid 10px transparent;
}
/*下*/
.triangle.bottom {
  border-top-color: #0097a7;
}
/*上*/
.triangle.top {
  border-bottom-color: #b2ebf2;
}
/*左*/
.triangle.left {
  border-right-color: #00bcd4;
}
/*右*/
.triangle.right {
  border-left-color: #009688;
}
```

## 箭头

```html
<div class="box">
  <div class="box-inner">
    <div class="arrow bottom"></div>
    <div class="arrow top"></div>
    <div class="arrow right"></div>
    <div class="arrow left"></div>
  </div>
</div>
```

```css
.arrow {
  display: inline-block;
  margin-right: 10px;
  /* 基础样式 */
  width: 0;
  height: 0;
  /* 基础样式 */
  border: 16px solid;
  border-color: transparent #cddc39 transparent transparent;
  position: relative;
}

.arrow::after {
  content: '';
  position: absolute;
  /* 通过位移覆盖背景 */
  right: -20px;
  top: -16px;
  border: 16px solid;
  border-color: transparent #fff transparent transparent;
}
/*下*/
.arrow.bottom {
  transform: rotate(270deg);
}
/*上*/
.arrow.top {
  transform: rotate(90deg);
}
/*左*/
.arrow.left {
  transform: rotate(180deg);
}
/*右*/
.arrow.right {
  transform: rotate(0deg);
}
```

## 隐藏滚动条

> 移动设备横向滚动

```css
.box-hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
```

## 内圆角

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>内圆角</title>
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
    }
    body {
      /* background: #999; */
      padding-top: 50px;
    }
    .wrapper {
      display: flex;
      position: relative;
      width: 320px;
      height: 100px;
      margin: auto;
      filter: drop-shadow(2px 2px 3px #999);
    }
    .wrapper div {
      height: 100%;
    }
    .wrapper b {
      position: absolute;
      right: 30%;
      top: 5px;
      height: calc(100% - 10px);
      border-left: 1px dotted #fff;
    }
    .left {
      background: #58a;
      background:  radial-gradient(circle at top right, transparent 5px, #44C9A1 0) top right ,radial-gradient(circle at bottom right, transparent 5px, #44C9A1 0) bottom right ;
      background-size: 100% 60%;
      background-repeat: no-repeat;
      color: white;
      width: 70%;
      border-radius: 5px 0 0 5px;
    }
    .right {
      background: #58a;
      background: radial-gradient(circle at top left, transparent 5px, #44C9A1 0) top left ,radial-gradient(circle at bottom left, transparent 5px, #44C9A1 0) bottom left ;
      background-size: 100% 60%;
      background-repeat: no-repeat;
      width: 30%;
      color: white;
      border-radius: 0 5px 5px 0;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="left"></div>
    <b></b>
    <div class="right"></div>
  </div>
  </div>
</body>
</html>
```

## 滚动条样式

```javascript
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/

::-webkit-scrollbar {
    width: 9px;
    height: 9px
}


/*定义滚动条轨道*/

::-webkit-scrollbar-track {
    background-color: transparent;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em
}


/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb {
    background-color: #0093ff;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .4) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .4) 50%, rgba(255, 255, 255, .4) 75%, transparent 75%, transparent);
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em
}
```

## 鼠标点击烟花

```javascript
// html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>鼠标点击爆出小烟花效果演示</title>
    <style>
        html, body {
            background: #333;
            height: 100%;
            width: 100%;
            margin: 0px;
            padding: 0px;
            text-align: center;
        }

        h1 {
            color: #EFEFEF;
        }

        #fireworks {
            position: fixed;
            top: 0px;
            z-index: 9999;
        }
    </style>
</head>
<body>
<div><h1>鼠标点击爆出小烟花效果演示</h1></div>
<div id="fireworks"></div>
<script src="./index.js"></script>
<script>
    var yh = new CursorSpecialEffects();
    yh.init();
</script>
</body>
</html>


// js
class Circle {
  constructor({
    origin,
    speed,
    color,
    angle,
    context
  }) {
    this.origin = origin
    this.position = {
      ...this.origin
    }
    this.color = color
    this.speed = speed
    this.angle = angle
    this.context = context
    this.renderCount = 0
  }

  draw() {
    this.context.fillStyle = this.color
    this.context.beginPath()
    this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)
    this.context.fill()
  }

  move() {
    this.position.x = (Math.sin(this.angle) * this.speed) + this.position.x
    this.position.y = (Math.cos(this.angle) * this.speed) + this.position.y + (this.renderCount * 0.3)
    this.renderCount++
  }
}

class Boom {
  constructor({
    origin,
    context,
    circleCount = 10,
    area
  }) {
    this.origin = origin
    this.context = context
    this.circleCount = circleCount
    this.area = area
    this.stop = false
    this.circles = []
  }

  randomArray(range) {
    const length = range.length
    const randomIndex = Math.floor(length * Math.random())
    return range[randomIndex]
  }

  randomColor() {
    const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    return '#' + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range)
  }

  randomRange(start, end) {
    return (end - start) * Math.random() + start
  }

  init() {
    for (let i = 0; i < this.circleCount; i++) {
      const circle = new Circle({
        context: this.context,
        origin: this.origin,
        color: this.randomColor(),
        angle: this.randomRange(Math.PI - 1, Math.PI + 1),
        speed: this.randomRange(1, 6)
      })
      this.circles.push(circle)
    }
  }

  move() {
    this.circles.forEach((circle, index) => {
      if (circle.position.x > this.area.width || circle.position.y > this.area.height) {
        return this.circles.splice(index, 1)
      }
      circle.move()
    })
    if (this.circles.length == 0) {
      this.stop = true
    }
  }

  draw() {
    this.circles.forEach(circle => circle.draw())
  }
}

class CursorSpecialEffects {
  constructor() {
    this.computerCanvas = document.createElement('canvas')
    this.renderCanvas = document.createElement('canvas')

    this.computerContext = this.computerCanvas.getContext('2d')
    this.renderContext = this.renderCanvas.getContext('2d')

    this.globalWidth = window.innerWidth
    this.globalHeight = window.innerHeight

    this.booms = []
    this.running = false
  }

  handleMouseDown(e) {
    const boom = new Boom({
      origin: {
        x: e.clientX,
        y: e.clientY
      },
      context: this.computerContext,
      area: {
        width: this.globalWidth,
        height: this.globalHeight
      }
    })
    boom.init()
    this.booms.push(boom)
    this.running || this.run()
  }

  handlePageHide() {
    this.booms = []
    this.running = false
  }

  init() {
    const style = this.renderCanvas.style
    style.position = 'fixed'
    style.top = style.left = 0
    style.zIndex = '999999999999999999999999999999999999999999'
    style.pointerEvents = 'none'

    style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth
    style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight

    document.body.append(this.renderCanvas)

    window.addEventListener('mousedown', this.handleMouseDown.bind(this))
    window.addEventListener('pagehide', this.handlePageHide.bind(this))
  }

  run() {
    this.running = true
    if (this.booms.length == 0) {
      return this.running = false
    }

    requestAnimationFrame(this.run.bind(this))

    this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
    this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)

    this.booms.forEach((boom, index) => {
      if (boom.stop) {
        return this.booms.splice(index, 1)
      }
      boom.move()
      boom.draw()
    })
    this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight)
  }
}
try {
  // module.exports.default = module.exports = CursorSpecialEffects
} catch (err) {
  console.log("错误", err);
}
```

## 图片扫描

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .saomiao {
        width: 200px;
        height: 200px;
        position: absolute;
        background: linear-gradient(#03a9f4, #03a9f4), linear-gradient(
            90deg,
            #ffffff33 1px,
            transparent 0,
            transparent 19px
          ), linear-gradient(#ffffff33 1px, transparent 0, transparent 19px), linear-gradient(transparent, #2196f3);
        background-size: 100% 1.5%, 10% 100%, 100% 10%, 100% 100%;
        background-repeat: no-repeat, repeat, repeat, repeat;
        background-position: 0 0, 0 0, 0 0, 0 0;
        clip-path: polygon(0% 0%, 100% 0%, 100% 1.5%, 0% 1.5%);
        animation: move 2s linear infinite;
      }
      .saomiao img {
        width: 200px;
        position: absolute;
      }
    </style>
  </head>
  <body>
    <div class="saomiao">
      <img src="./xx/xx.png" alt="xx" />
    </div>
  </body>
</html>
```

## 方框拖拽

```html
<!-- <script src="https://libs.baidu.com/jquery/2.1.1/jquery.min.js"></script>
<script src="jquery-3.2.1.js"></script> -->
<style type="text/css">
  img {
    height: 100px;
    width: 100px;
  }
  div {
    border: 1px solid red;
    width: 120px;
    height: 120px;
    float: left;
  }
</style>

<body>
  <div id="div1" ondragover="allowDrop(event)" ondrop="drop(event)">
    <img id="drag1" src="img/Desert.jpg" draggable="true" ondragstart="drag(event)" />
  </div>

  <div id="div2" ondragover="allowDrop(event)" ondrop="drop(event)">
    <img id="drag2" src="img/Lighthouse.jpg" draggable="true" ondragstart="drag(event)" />
  </div>

  <div id="div3" ondragover="allowDrop(event)" ondrop="drop(event)"></div>
</body>

<script>
  // 1 设置图片允许拖动 draggable = "true"
  // 2 拖的时候保存数据（图片id） ev.dataTrasfer.setData('mark', ev.target.id);
  // 3 允许图片放置这里 ondragover = "allowDrop()"

  function allowDrop(ev) {
    ev.preventDefault()
  }

  function drag(ev) {
    ev.dataTransfer.setData('mark', ev.target.id)
  }

  function drop(ev) {
    if (document.querySelector('#' + ev.target.id).nodeName == 'DIV') {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('mark')
      ev.target.appendChild(document.getElementById(data))
      console.log(ev.target.id)
    } else if (document.querySelector('#' + ev.target.id).nodeName == 'IMG') {
      console.log(ev.target.id)

      var transferImg = ev.target.src
      var markID = ev.dataTransfer.getData('mark')
      document.querySelector('#' + ev.target.id).src = document.getElementById(markID).src
      document.getElementById(markID).src = transferImg
    }
  }
</script>
```

## 画板绘画

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <style type="text/css">
      body {
        background-color: #8fbc8f;
      }

      #bj {
        margin: 0 400px;
        width: 530px;
        height: 700px;
        border-radius: 20px;
        background-color: #000;
      }

      canvas {
        margin: 15px;
        border-radius: 20px;
        background-color: #fff;
      }

      #to {
        margin: 0 100px;
        color: #fff;
      }

      input {
        margin: 0 8px;
      }
    </style>
  </head>

  <body>
    <div id="bj">
      <canvas id="mycanvas" width="500px" height="600px"></canvas>
      <div id="to">
        画笔颜色: <input id="color" type="color" /> 画笔大小:
        <input type="number" id="number" min="1" max="20" value="1" />
      </div>
    </div>
    <script>
      var mycanvas = document.querySelector('#mycanvas')
      var cxt = mycanvas.getContext('2d')

      var color = '#000'
      var lineWith = 2

      mycanvas.onmousedown = function (e) {
        start_draw()
        cxt.moveTo(e.clientX - mycanvas.offsetLeft, e.clientY - mycanvas.offsetTop)
        mycanvas.addEventListener('mousemove', draw)
      }

      //选择画笔
      document.querySelector('#color').oninput = function () {
        color = this.value
      }

      //选择画笔大小
      document.querySelector('#number').oninput = function () {
        lineWith = this.value
      }

      //松开鼠标
      mycanvas.onmouseup = function () {
        mycanvas.removeEventListener('mousemove', draw)
      }

      //开始画
      function start_draw() {
        cxt.beginPath()
        cxt.strokeStyle = color
        cxt.lineWidth = lineWith
      }

      function draw(e) {
        e.preventDefault()
        cxt.lineTo(e.clientX - mycanvas.offsetLeft, e.clientY - mycanvas.offsetTop)
        cxt.stroke()
      }
    </script>
  </body>
</html>
```

## 物体移动

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      img {
        height: 240px;
        width: 240px;
        position: absolute;
      }
    </style>
  </head>

  <body>
    <img src="img/Desert.jpg" />
  </body>
</html>

<script>
  var img = document.querySelector('img')
  function scrollRight() {
    var left = img.offsetLeft
    if (left > 300) {
      clearInterval(cls)
      cls = setInterval(scrollLeft, 100)
    }
    img.style.left = left + 50 + 'px'
  }

  function scrollLeft() {
    var left = img.offsetLeft
    if (left < 0) {
      clearInterval(cls)
      cls = setInterval(scrollRight, 100)
    }
    img.style.left = left - 50 + 'px'
  }

  var cls = setInterval(scrollRight, 100)
</script>
```

## 画中国五星红旗

```html
<!DOCTYPE html>
<html>
  <style type="text/css">
    canvas {
      background: red;
      display: block;
      margin: 0 auto;
    }
  </style>

  <body>
    <canvas id="mycanvas" width="800px" height="500px"></canvas>
  </body>
  <script type="text/javascript">
    /*var mycanvas=document.querySelector("canvas");
    var cxt=mycanvas.getContext("2d");*/
    function drawstar(cxt, x, y, R, r, fillStyle, rot) {
      cxt.beginPath()
      for (var i = 0; i < 5; i++) {
        cxt.lineTo(
          Math.cos(((18 + 72 * i) / 180) * Math.PI + rot) * R + x,
          -Math.sin(((18 + 72 * i) / 180) * Math.PI + rot) * R + y,
        )
        cxt.lineTo(
          Math.cos(((54 + 72 * i) / 180) * Math.PI + rot) * r + x,
          -Math.sin(((54 + 72 * i) / 180) * Math.PI + rot) * r + y,
        )
      }
      cxt.closePath()
      cxt.fillStyle = fillStyle
      cxt.fill()
    }
    var mycanvas = document.querySelector('canvas')
    var cx = mycanvas.getContext('2d')

    drawstar(cx, 120, 130, 80, 35, 'yellow', 0)
    drawstar(cx, 250, 50, 30, 12, 'yellow', 12)
    drawstar(cx, 300, 110, 30, 12, 'yellow', -12)
    drawstar(cx, 290, 200, 30, 12, 'yellow', -12)
    drawstar(cx, 220, 250, 30, 12, 'yellow', 12)
  </script>
</html>
```

## 雪花球

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>css水晶球雪花动画</title>

    <style>
      body {
        background-color: #d6d6d3;
        height: 100vh;
        width: 100vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0;
      }
      #c1,
      #c2 {
        position: absolute;
        top: 0;
        left: 0;
        height: 300px;
        width: 300px;
        border-radius: 50%;
      }
      #c1 {
        z-index: -11;
      }
      #c2 {
        z-index: 1000;
      }
      .container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
      }
      .snowglobe {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        background-color: #dadee8;
        border: 2px solid #cad0de;
        z-index: -30;
      }
      .snowglobe:before {
        position: absolute;
        content: '';
        height: 280px;
        width: 280px;
        border-radius: 50%;
        top: 10px;
        left: 10px;
        background: #fff;
      }
      .snowglobe:after {
        position: absolute;
        content: '';
        height: 280px;
        width: 290px;
        border-radius: 50%;
        top: 17px;
        background: #dadee8;
      }
      .base {
        position: relative;
        border-bottom: 50px solid #534f54;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        height: 0;
        width: 242px;
        margin-top: -60px;
        z-index: -10;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
      }
      .base:after {
        position: absolute;
        content: '';
        top: 25px;
        left: -10px;
        width: 262px;
        height: 50px;
        border-radius: 125px/25px;
        background: #534f54;
      }
      .baseTop {
        background-color: #fff;
        width: 242px;
        height: 40px;
        border-radius: 125px/20px;
        margin-top: -72px;
        box-sizing: border-box;
        border-bottom: 8px solid #dadee8;
        z-index: -10;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
      }
      .baseShadow {
        position: absolute;
        background-color: #a1a6b1;
        width: 275px;
        height: 60px;
        border-radius: 130px/30px;
        top: 270px;
        z-index: -40;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
      }
      .tree {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-bottom: 70px solid #8caba1;
        margin-top: 67px;
        margin-left: -80px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .tree:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-right: 20px solid transparent;
        border-bottom: 70px solid #7e9990;
      }
      .tree4 {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 100px solid #516463;
        margin-top: 65px;
        margin-left: -50px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .tree4:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-right: 30px solid transparent;
        border-bottom: 100px solid #5a706e;
      }
      .tree2 {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 70px solid #5a706e;
        margin-top: 67px;
        margin-left: 70px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .tree2:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-right: 20px solid transparent;
        border-bottom: 70px solid #516463;
      }
      .tree3 {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-bottom: 80px solid #7e9990;
        margin-top: 69px;
        margin-left: -20px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .tree3:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-right: 20px solid transparent;
        border-bottom: 80px solid #8caba1;
      }
      .roof {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 31.25px solid #ba616d;
        margin-top: 58px;
        margin-left: 30px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .cabin {
        position: absolute;
        background: #534f54;
        display: inline-block;
        height: 40px;
        margin-top: 93px;
        margin-left: 30px;
        width: 80px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .cabin:before {
        border-bottom: 25px solid #534f54;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        content: '';
        height: 0;
        left: 0;
        position: absolute;
        top: -25px;
        width: 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <canvas id="c1"></canvas>
      <canvas id="c2"></canvas>
      <div class="snowglobe"></div>
      <div class="highlight"></div>
      <div class="base"></div>
      <div class="baseTop"></div>
      <div class="baseShadow"></div>
      <div class="tree"></div>
      <div class="tree2"></div>
      <div class="tree3"></div>
      <div class="tree4"></div>
      <div class="roof"></div>
      <div class="cabin"></div>
    </div>

    <script type="text/javascript">
      ;(function () {
        var c1 = document.getElementById('c1')
        var c2 = document.getElementById('c2')
        var ctx1 = c1.getContext('2d')
        var ctx2 = c2.getContext('2d')
        c1.height = 300
        c1.width = 300
        c2.height = 300
        c2.width = 300

        ctx1.fillStyle = 'white'
        ctx2.fillStyle = 'white'
        var c1Flakes = []
        var c2Flakes = []

        function Flake(r) {
          this.x = Math.random() * 300
          this.y = Math.random() * 250
          this.r = r
        }

        for (var i = 0; i <= 80; i++) {
          var flake = new Flake(2)
          c1Flakes.push(flake)
        }

        for (var i = 0; i <= 80; i++) {
          var flake = new Flake(3)
          c2Flakes.push(flake)
        }

        function render() {
          ctx1.clearRect(0, 0, 300, 300)
          ctx2.clearRect(0, 0, 300, 300)
          for (var i = 0; i < c1Flakes.length; i++) {
            ctx1.beginPath()
            ctx1.arc(c1Flakes[i].x, c1Flakes[i].y, c1Flakes[i].r, 0, Math.PI * 2)
            ctx1.fill()
            if (c1Flakes[i].y <= 245) {
              c1Flakes[i].y += 0.3
            } else {
              c1Flakes[i].y = 0
            }
          }

          for (var i = 0; i < c2Flakes.length; i++) {
            ctx2.beginPath()
            ctx2.arc(c2Flakes[i].x, c2Flakes[i].y, c2Flakes[i].r, 0, Math.PI * 2)
            ctx2.fill()
            if (c2Flakes[i].y <= 245) {
              c2Flakes[i].y += 0.6
            } else {
              c2Flakes[i].y = 0
            }
          }
          requestAnimationFrame(render)
        }
        render()
      })()
    </script>
  </body>
</html>
```

## input

## placeholder 样式

```html
<input type="text" class="placehoder-custom" placeholder="请输入用户名搜索" />
```

```css
.placehoder-custom::-webkit-input-placeholder {
  color: #babbc1;
  font-size: 12px;
}
```

## 光标颜色

```css
input {
  caret-color: #ffd476;
}
```

## 移除`type=number`尾部箭头

```css
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
```

## 移除选中时边框

```css
.no-outline {
  outline: none;
}
```
