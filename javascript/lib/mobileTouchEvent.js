document.getElementsByTagName('body')[0].style.width = window.innerWidth + 'px';
document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';

function drag (obj, parentNode) {
    var obj = document.getElementById('obj');
    if(arguments.length == 1) {
        var parentNode = window.self;
        var pWidth = parentNode.innerWidth;
        var pHeight = parentNode.innerHeight;
    }else {
        var parentNode = document.getElementById(parentNode);
        var pWidth = parentNode.clientWidth;
        var pHeight = parentNode.clientHeight;
    }
    obj.addEventListener('touchstart', function(event) {
        // 当只有一个手指的时候
        console.log('event', event);
        console.log('offsetLeft', obj.offsetLeft);
        console.log('offsetTop', obj.offsetTop);
        if(event.touches.length == 1) {
            // 阻止浏览器默认行为
            event.preventDefault();
        }
        // 当前dom元素上手指的列表，尽量使用这个代替touches
        var touch = event.targetTouches[0]; 

        // 手指指向浏览器|| 客户端页面的水平坐标 - 元素的水平偏移位置
        var disX = touch.clientX - obj.offsetLeft;

        // 手指指向浏览器 || 客户端页面的垂直坐标 = 元素的垂直偏移位置
        var disY = touch.clientY - obj.offsetTop;
        
        // 返回OBJ的元素宽度
        var oWidth = obj.offsetWidth;

        // 返回OBJ的元素的高度
        var oHeight = obj.offsetHeight;

        obj.addEventListener('touchmove', function(event) {
            console.log('touchmove', event);
            var touch = event.targetTouches[0];
            obj.style.left = touch.clientX - disX + 'px';
            obj.style.top = touch.clientY - disY + 'px';  
            console.log(obj.style.left); 

            // 左侧
            if(obj.offsetLeft <= 0) {
                obj.style.left = 0 + 'px';
            }     

            // 右侧
            if(obj.offsetLeft >= pWidth - oWidth){
                obj.style.left = pWidth - oWidth + 'px';
            }   

            // 上面
            if(obj.offsetTop <= 0) {
                obj.style.top = 0 + 'px';
            }

            // 下面
            if(obj.offsetTop >= pHeight - oHeight) {
                obj.style.top = pHeight - oHeight + 'px';
            }
        })

      

    })

}
drag('obj');