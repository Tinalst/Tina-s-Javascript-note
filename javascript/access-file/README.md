## 在WEB应用中使用File

参考链接
> https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications

### 访问文件

```
<input type="file">
```
相关属性：
+ multiple 多选
+ accept   接收的文件格式

如何访问：
```
document.getElemnetById('xxxx').files[x]
```
### FileList对象属性
+ length
+ name
+ size
+ type

### 自定义按钮访问文件思路
1. 隐藏input元素
2. 创建一个按钮元素，调用按钮的点击事件同时为input元素设置click事件

### 允许用户通过拖拽方式导入文件
相关API
+ dragenter()
+ dragover()
+ drop()

`注意要阻止上面事件的浏览器默认行为以及停止冒泡`

相关API
+ event.stopPropagation()
+ event.preventDefault()

实现思路
1. 创建一个监听拖拽对象的拖拽区域
2. 为拖拽区域设置监听drop、 dragover、 dragenter事件，
3. 获取拖拽结果并进行渲染

`拖拽的类型可以使FileList对象（文本文件拖拽结果）； 拖拽生成的dataTransfer对象（svg图形图像文件拖拽结果）；`
### File 对象
相关API 
+ File.lastModified : 返回File引用文件最后修改的日期，MS单位
+ File.lastModifiedData: 返回File引用文件最后修改的日期,Data对象
+ File.name: 返回File引用文件的文件名
+ File.type: 返回File引用文件的META类型

`不合适使用type属性进行文件类型的校验，最佳方式是使用正则和name属性进行文件格式的识别`

### FileReader对象
如果要进行拖拽结果预览，要进行拖拽结果的读取

相关API
+ FileReaderInstance.error: 返回读取文件的错误信息
+ FileReaderInstance.onload: = fn() : 文件读取时触发
+ FileReaderInstance.readySate: 文件读取时的状态
+ FileReaderInstance.result: 在文件读取完成后返回文件内容

读取方式
+ FileReaderInstance.abort(): 取消FileReader读取操作
+ FileReaderInstance.readDataURL(): 返回base64图片格式

### 图片预览思路
1. 访问图片: Filelist属性
2. 读取图片： dataTransfer
3. 显示图片： src的替换