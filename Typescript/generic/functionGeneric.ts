function Hello<T>(arg: T): T {
    return arg;
}

// 指定myHello是一个方法 并且这个方式是一个参数为K|T 返回值为k| T的泛型方法
// 方式一：
const myHello:<k>(arg: k) => k = Hello;
alert(myHello('hello'));

// 方式二
const myHello2: {<T>(arg: T): T} = Hello;
alert(myHello2('lala'));

