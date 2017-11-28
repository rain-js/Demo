# Demo

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