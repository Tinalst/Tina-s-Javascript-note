### 结合slot和template标签制作自定义元素(模板)
`
更新时间： 2018-08-04 23:34 by TinaLim
`
## slot标签
### 是什么?
占位符,为自定义文本预留位置

### 属性
```
<name>  指定唯一<slot></slot>的名字
```

### 规范
+ 严格闭合

用法?

1. 定义模板，预留占位
```
<template id="element-name">
    <slot name="slot-name"></slot>
</template>

```
2. 定义元素
```
class class-name extends HTMLElement {
    constructor() {
        // 总是必须调用super（）这个函数
        super();

        // 功能代码写这里
        ...
    }
}
```

3. 注册元素
```
customElement.define(
    'element-name',
     'class-name',
      [{extends: open | closed]}])
```

## 除了slot，你还应该了解？

## Element.attchShadow()
将shadow DOM 挂载到Element下，并返回Element的shadow DOM

### 语法
```
let shadowRoot = element.attchShadow(shadowRootInit)
```
### 参数
shadowRootInit 

指定shadow DOM 的封装方式

model : 'open' || 'closed'

## Template 标签
### 特性
+ 在使用前无需执行任何操作，也能隐藏标签的内容
+ template模板的定义代码可以写字HTML文件中任何位置，head | body | franmset  etc.

### 定义模板的样式
1. 直接定义
```
<template>
    <style>
        ... // 直接在template元素中定义的样式，会被自动识别并作用于template scop内的元素
    </style>
</template>
```
2. 字符串定义载入
```
class class-name extends HTMLElement {
    // 1. 挂载shadow root
    let shadowRoot = this.attachShadow({mode: "open"});

    // 2. 定义样式
    const style = document.createElement('style');
    style.textContent = `....` // 以字符串形式声明的样式需要手动载入样式

    // 3. 载入样式
    shadowRoot.appenChild(style);
}
```



