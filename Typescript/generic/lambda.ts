
// 指定myFunc是一个function，它的的参数a为number类型并返回string类型的结果
const myFunc:(a: number) => string = function (a: number): string {
    return `hello${a}`;
};

alert(myFunc(2));
