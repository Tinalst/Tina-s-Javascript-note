# Stencil 笔记（二） 基础规则
## 装饰器
+ @Component()

与angular中的同名装饰器一样的意思
+ @Prop()
<br/>
从组件外部接收内容的变量声明方式
```
<my-componet propVar={}>
```
+ @State()
<br/>
使用@State()声明的变量只能在组件内使用，不能在外部访问到
<br/>
*state() prop()声明的变量，一但改变都会触发re-render*
+ @Element()
<br/>
获取当前组件元素
```
  @Element() modalEl: HTMLElement;
    ...
   this.modalEl.style.display = 'block';
```
+ @Method()
<br/>>
声明可以作为该HTMLElment的一个API
```
  @Method() open() {
        this.modalEl.style.display = 'block';
    };

    XXXcomponent.open()
```
+ @Event() && @Listen()
<br/>
子元素向父元素发射事件 ，类似于angular中的emitEvent
```
  @Event() onClose: EventEmitter;
  this.onClose.emit();


  @Listen('onClose')        closeModalHandler() {
        this.show = false;
   }
```
## 使用stencil 构建第一个组件——遮罩层
请查看
<br/>
[my-modal]()
<br/>
[my-backdrop]()
<br/>
[my-modal-bundle]()