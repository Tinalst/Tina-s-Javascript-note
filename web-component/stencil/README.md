# Stencli 笔记
## 是什么？
> 通俗的来讲，steniljs是一个编译器帮助我们构建适用于任何的JavaScript工程（可以使Angular, React, Vue, 原始写法的工程, Ember等）的Web Component。 
## 特性
+ 使用JSX 和Typescript相结合的语法，乘坐TSX
+ 支持virtual dom
+ Async rendering
+ reactive data-bingding
## 能做什么？
+ 构建适用于多个平台的web Component
+ 构建web app 
+ PWA
+ SSR
+ 有ionic团队创建，具体应用已经ionic4上体现
## 支持度？
+ chrome (以及所有基于Chrome的浏览器)
+ Safafi (包括iOS上的Safari)
+ Firefox
+ Edage
+ IE11

## 基础用法
> stencil 也有自己的一套简单的使用规则，不要将stencil当做框架看待，它只是一个编译器
1. 获取相关模板
<br/>
由stencil构建的网站：[stencil-site](https://github.com/ionic-team/stencil-site)
<br/>
构建APP应用或者component的模板：
[stencil-stencil-app-starter](https://github.com/ionic-team/stencil-app-starter)
<br/>
单纯构建组件的模板：
[stencil-component-starter](https://github.com/ionic-team/stencil-component-starter)
> 还有基于node.js的模板，可在ionicGitHub中查看，模板只是为了方便快速的开发，不一定要有

2. 下载相关依赖
```
cd your-project
npm install
```
3. 运行工程
```
npm start
```