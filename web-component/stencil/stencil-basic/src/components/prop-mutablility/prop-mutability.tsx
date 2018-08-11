import {Component, Prop, Watch} from "@stencil/core";

@Component({
    tag: 'prop-mutability'
})
export class PropMutability {

    @Prop({mutable: true}) name: string = 'tina';

    @Watch('name') watchName(newValue: string, oldValue: string) {
        console.log('newValue:', newValue);
        console.log('oldValue:', oldValue);
    }
    nameHandle = () => {
        console.log(111);
        this.name = 'piti';

    };

    render() {
        return (
            <div>
                <br/>
                <label>
                    姓名：
                    <input type='text' onBlur={this.nameHandle.bind(this)}/>
                    <p>你好：{this.name}</p>
                </label>
            </div>
        )
    }
}
