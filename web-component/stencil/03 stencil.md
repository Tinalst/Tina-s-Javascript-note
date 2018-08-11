# stencil 入门（三） 发布自己的组件
> 本章记录如何使用stencil构建一个简单的组件并使其在原生和Angular应用中同时都能使用 React 和vue的童鞋，可以参照官方文档配置将本章的简单组件进行相应的配置

## 下载[stencil-component-starter](https://github.com/ionic-team/stencil-component-starter)模板，帮助我们快速搭建

    ![images]()
## 修改模板中的相关配置

```
// 1. 删除/www && /dist 目录下的文件，原因是这两个文件都是npm build 之后的产物，与我们的组件不一致删除方便修改名称

// 2. 同理，删除 src/components/component.d.ts文件，因为这个也是在编译后自动生成的产物

// 3. 重命名以下三个文件
src/components/my-component -> src/components/tinalst-hearder
src/components/tinalst-hearder/tinalst-hearder.tsx -> src/components/tinalst-hearder/tinalst-hearder.tsx
src/components/tinalst-hearder/tinalst-hearder.scss -> src/components/tinalst-hearder/tinalst-hearder.scss

// 4. 添加逻辑，修改好名称之后对相应的组件TSX文件进行逻辑编写

// 5. 更新组件输出
npm run-script build

// 6. 测试组件
在index.html文件中进行测试

// 7. 发布组件
npm publish
在发布之间应该确保组件的名称是唯一的，否则会发布失败
通过访问 https://wwww.npmjs.com/package/组件名 确认
发布成功后即可访问当组件
[tinalst-hearder](https://www.npmjs.com/package/tinalst-hearder)
```

## 使用
### 在原生页面中使用
1. 创建html文件，在文件中包含如下外联JS文件
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>tinalst-header-component test</title>
	<script src='https://unpkg.com/tinalst-hearder@0.0.1/dist/tinalsthearder.js'></script> 
</head>
<body>
	  <tinalst-hearder first="Stencil" last="'Don't call me a framework' JS"></tinalst-hearder>
</body>
</html>
```

### 在Angular应用中使用
1. 创建angular应用
```
app.module.ts

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@NgModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

```

2. 添加外联脚本
```
index.html

<!doctype html>
<html lang="en">
<head>
    ...
  <script src='https://unpkg.com/tinalst-hearder@0.0.1/dist/tinalsthearder.js'></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>


```

3. 在模板中使用
```
app.components.html

<tinalst-hearder #tinalstHeader first="Stencil" last="'Don't call me a framework' JS"></tinalst-hearder>

<button (click)="btnClick()">click</button>

```

```
app.component.ts

  @ViewChild('tinalstHeader') tinalstHeader: ElementRef;

  btnClick = () => {
    console.log(this.tinalstHeader.nativeElement);
  }

```

当成普通元素使用即可
