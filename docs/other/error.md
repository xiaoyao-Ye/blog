# error

## 关于报错

> 报错的时候思考一下为什么会报错,

- js(js 引擎只做这两件事):识别语法,处理数据(存储和计算)
- 所以,所有的程序报错原因也只有两个:

  - 语法不识别/语法识别错误.(控制台报错显示 syntaxError 一定是语法错误)
  - 数据不识别/数据处理错误.(控制台报错显示 ReferenceError 一定是数据错误)

- css 属性隐藏的层叠性.上面有 transform 旋转的情况下下面设置的 transform 平移属性没效果

- 案例:按钮禁用表单:

  - 设置 true/false 不要加引号!
  - 禁用 disabled 是属性,不是样式
    - input[i].disabled
  - innerText 获取的是文本内容.不能获取 value 的内容,如果是 value 里的内容,需要更改 value 的值

- 案例:timeID 要在外面声明
- 获取时间 Date 的时候.如果要用标量接收,要写 new 关键字

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        #box {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            left: 50px;
            top: 50px;
        }
    </style>
</head>
<body>

<input type="button" value="移动到400" id="move400"/>
<input type="button" value="移动到800" id="move800"/>
<div id="box"></div>

</body>
<script>
    var box = document.getElementById('box');
    var timeID;
    document.getElementById('move400').onclick = function () {
        clearInterval(timeID);
            timeID = setInterval(function () {      // 这里timeID要在外面声明!
            var px = box.offsetLeft;
            px += 10;
            if (px < 400) {
                box.style.left = px + 'px';
            } else {
                box.style.left = '400px';
            }
        }, 50)
    }
    document.getElementById('move800').onclick = function () {
        clearInterval(timeID);
        setInterval (function () {
            var px = box.offsetLeft;
            px += 10;
            if (px < 800) {
                box.style.left = px + 'px';
            } else {
                box.style.left = '800px';
            }
        }, 50)
    }

</script>
</html>
```

## sass 安装问题

![1585903380792](/images/1585903380792.png)
