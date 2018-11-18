// 1. 定义泛型接口
interface Hello<T> {
    (arg: T): T;
}

// 2. 定义泛型函数
function mineHello<T>(arg: T): T {
    return arg;
}

// 3. 使用
const MH: Hello<String> = mineHello;
alert(MH('string'));
