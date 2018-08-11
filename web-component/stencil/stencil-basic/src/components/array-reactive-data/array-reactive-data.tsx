import {Component, State} from "@stencil/core";

@Component({
    tag: 'array-reactive-data'
})
export class ArrayReactiveData {
    // @state() 声明的变量，当变量的值发生改变的时候，会触发重新渲染
    @State() name: string = 'pipi';
    @State() array: Array<number> = [1,2,3,4];

    arrayHandle = () => {
        this.name = 'qiqi';
        this.array.push(5);
    };

    render = () => {
        // let item = (this.array.map(item => (
        //     <div>{item}</div>
        // )));

        return (
            <div>
                <button onClick={this.arrayHandle.bind(this)}>点我数组变化</button>
                <p>{this.array}</p>
                <div>
                    <label>姓名：
                        <p>{this.name}</p>
                    </label>
                </div>
            </div>
        );
    }
}
