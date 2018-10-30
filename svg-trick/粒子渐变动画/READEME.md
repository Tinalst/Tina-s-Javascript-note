# 使用SVG裁剪技术+渐变技术制作动态变换的波点动画


## 参考资料
https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Clipping_and_masking
https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath

## 知识导读

### svg 裁剪技术

 clipPath 标签
 是什么： 可以理解为裁剪规则，图像只在裁剪后的范围内才能看到
 如何：

```
    // 1. 定义裁剪规则
    <defs>
        <clipPath id="myClipPath">
            // 裁剪图形SVG代码
        </clipPath>
    </defs>

    // 使用裁剪,
    <g style="clip-path:url(#myClipPath)">
        // 被裁减的图形
    </g>
```

### svg 渐变
如何
```
    // 1. 定义渐变规则
    <defs>
        <linearGradient id=""myGradient>
            // ....
        <linearGradient>
    </defs>

    // 2. 使用渐变
    <circle cx="250" cy="257" r="100" fill="url(#myGradient)">
```

## 实现思路
1. 定义裁剪规则，这里是由多个圆形组成的一个圆环SVG代码
2. 定义一个渐变规则
3. 将渐变规则运用到一个图形上面，该图形是将会被裁剪的图形
4. 使用裁剪规则对添加了渐变效果的图形进行裁剪
5. 对运用了渐变规则的元素进行CSS动画处理，这里是旋转动画