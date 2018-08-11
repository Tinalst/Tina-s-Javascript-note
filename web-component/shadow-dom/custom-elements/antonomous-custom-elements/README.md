## Custom Element 导读
`
更新时间： 2018-08-04 18:36  by TinaLim
`
### 是什么？
Custom Element 是浏览器支持的一种创建自定义元素的方式
### 浏览器支持情况
Chrome与Opera默认支持custom Element， firefox，Edge, safari也会尽快加入
### 自定义元素分类
+ Autonumous Custome Elements
    独立元素，不继承内置的HTML元素，总是继承HTMLElement
+ Custome Build-in Element 
    继承内置的HTML元素
### 生命周期
Custom Element 存在生命周期
+ connectedCallback()
    当自定义元素插入文档（document）中触发该回调函数
+ attributeChangedCallback()
    当自定义元素发生增删改其元素的属性的时候触发该回调函数
### 用法？
1. 定义元素
```
class <class-name> extends <HTMLElemnts | 内置元素> {
    constructor() {
        // 首先必须调用super()方法
        supper();
        // 元素的功能代码写这里
    }
}
``` 
2. 注册元素
```
CustomElement.define('<element-name>', 'class-name', {extends='xxx'})
```