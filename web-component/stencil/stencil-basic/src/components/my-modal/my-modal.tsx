import {Component, Element, EventEmitter, Event, Method, Prop, State} from "@stencil/core";

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})
export class MyModal {
    buttons = ['okay', 'cancel'];

    @State() showOption: boolean = false;

    @Element() modalEl: HTMLElement;

    @Prop() title: string;
    @Prop() content: string;

    @Event() onClose: EventEmitter;

    @Method() open() {
        this.modalEl.style.display = 'block';
    };

    showOptionsHandler = () => {
        this.showOption = true;
    };

    closeOptionsHandler = () => {
        // this.modalEl.style.display = 'none';
        this.showOption = false;
        this.onClose.emit();
    };

    render = () => {
        let options = null;
        if(this.showOption) {
            options = (this.buttons.map(btn => (
                <button onClick={this.closeOptionsHandler.bind(this)}>{btn}</button>
            )))
        }
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
                <hr/>
                <button onClick={this.showOptionsHandler.bind(this)}>show options</button>
                <hr/>
                {options}
            </div>
        )
    }

}
