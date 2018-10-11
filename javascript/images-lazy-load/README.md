## 实现一个渐进增强懒加载图片
### 预读知识点
#### Element.getBoundingClientRect()
`返回元素的大小和元素相对于视口的位置（从左上角作为原点）`

+ 元素right是从原点开始到元素的最右边的位置的 

#### window.innerHeight
`获得可视区域（窗口）的高度包括了纵向滚动条的高度`

#### document.documentElement.clientHeight
`获得可视区域（窗口的）的高度`

#### newArr = Array.prototype.filter()
`接收一个函数作为callback参数，返回一个符合callback过滤后的新数组`

### 实现思路
1. 第一次打开页面就要加载的图片正常写法显示
2. 获取需要被懒加载的图片，当被懒加载的图片出现在视口处，则显示正在图片
3. 优化
