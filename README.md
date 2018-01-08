# Demo

### Example
1.1 [控制 Div 属性](./Example/1.1_controlDiv.html)

1.2 [网页换肤](./Example/1.2_changeSkin.html)

1.3 [函数接收参数并弹出](./Example/1.3_funArgument.html)

1.4 [用循环将三个 Div 变成红色](./Example/1.4_changeColor.html)

1.5 [鼠标移入/移出改变样式](./Example/1.5_hover.html)

1.6 [记住密码提示框](./Example/1.6_tips.html)

2.1 百度输入法

2.2 点击 Div，显示其 innerHTML

2.3 求出数组中所有数字的和

2.4 弹出层效果

2.5 函数传参，改变 Div 任意属性的值

2.6 图片列表：鼠标移入/移出改变图片透明度

2.7 简易选项卡

2.8 简易 JS 年历

2.9 单一按钮显示/隐藏一播放列表收缩展开

2.10 提示框效果

2.11 鼠标移过，修改图片路径

2.12 复选框(checkbox)全选/全不选/反选

### ECharts Demo
- 快速上手 [simpleChart](./ECharts/simpleChart)
- 折线图 [lineChart](./Echarts/lineChart)
    1. symbol
        - 默认提供的标记类型: 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        - 自定义标记图形：'image://url'
    2. symbolSize
    3. lineStyle

### JavaScript
- Web 打印
    1. 打印会出现预览窗口
    ``` JavaScript
    document.execCommand('print')
    ```
    2. 直接打印 （只兼容 IE）
    ``` HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <style>
            #web-browser {
                height: 0;
                width: 0;
                display: none;
            }
        </style>
    </head>
    <body>
        <object id='web-browser' classid='CLSID:8856F961-340A-11D0-A96B-00C04FD705A2' VIEWASTEXT></object> 
        
        <h1>hello world</h1>
        <button id="print">直接打印</button>
        <button id="print_preview">打印预览</button>

        <script>
            document.getElementById('print').onclick = function() {
                execScript('document.getElementById("web-browser").execwb 6, 2, 3','vbscript')
            }
            
            document.getElementById('print_preview').onclick = function() {
                document.execCommand('print')
            }
        </script>

    </body>
    </html>
    ```