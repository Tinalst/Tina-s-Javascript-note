function Hello(arg) {
    return arg;
}
// 指定myHello是一个方法 并且这个方式是一个参数为K|T 返回值为k| T的泛型方法
// 方式一：
var myHello = Hello;
alert(myHello('hello'));
// 方式二
var myHello2 = Hello;
alert(myHello2('lala'));
