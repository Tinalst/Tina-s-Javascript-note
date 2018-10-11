// 1. 处理浏览器兼容性问题
function registerListener(event, func) {
    if(window.addEventListener) {
        window.addEventListener(event, func);
    }else {
        window.attachEvent(`on${event}, func`);
    }
}
// 2. 初始化不显示查看更多，显示下一个，统计要懒加载的图片数量
function setLazy() {
    document.getElementById('listing').removeChild(document.getElementById('viewMore'));
    document.getElementById('nextPage').removeAttribute('class');
    lazy = document.getElementsByClassName('lazy');
    console.log(`found ${lazy.length} lazy images`);
}
// 3. 判断元素是否在窗口中
function isInViewport(el) {
    // 获取元素的大小以及相对于视口的位置
    var rectObj = el.getBoundingClientRect();
    return (rectObj.bottom >= 0 &&
        rectObj.right >= 0&&
        rectObj.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rectObj.left <= (window.innerWidth || document.documentElement.clientWidth));
}
// 4. 将已经在视口中出现的img标签的src由默认的标签换为data-src的标签属性
function layLoad() {
    for(var i = 0; i < lazy.length; i++ ){
        // 判断元素如果出现在可视区域范围
        if(isInViewport(lazy[i])){
            // 变换可视区域内的img标签的src路径
            if(lazy[i].getAttribute('data-src')){
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
            }
        }
    }
    // 5
    cleanLazy();
}
// 5.重新组装lazy参数，过滤掉已经加载过的图片（标志是data-src被移除了）
function cleanLazy() {
    lazy = Array.prototype.filter.call(lazy, function(v){
        return v.getAttribute('data-src');
    });
}

var lazy = [];
registerListener('load', setLazy);
registerListener('load', layLoad);
registerListener('scroll', layLoad);
registerListener('resize', layLoad);