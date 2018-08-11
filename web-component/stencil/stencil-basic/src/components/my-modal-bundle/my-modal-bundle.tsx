import {Component, Element, Listen, Method, Prop, State} from "@stencil/core";

@Component({
    tag: 'my-modal-bundle'
})
export class MyModalBundle {

    @Element() modalEl: HTMLElement;

    @Prop() mytitle: string;
    @Prop() content: string;

    @State() show = false;

    @Method() open() {
        this.show = true;
    };

    @Listen('onClose') closeModalHandler() {
        this.show = false;
    }

    render = () => {
        let content = null;
        if(this.show) {
            content = [
                <my-modal title={this.mytitle} content={this.content}></my-modal>,
                <my-backdrop></my-backdrop>
            ];
        }
        return content;
    }
}
