import {Component} from "@stencil/core";

@Component({
    tag: 'ref-stencil'
})
export class RefStencil {

    textInput: HTMLInputElement;

    handleSubmit = (ev: Event) => {
        ev.preventDefault();
        console.log(this.textInput.value);
    };

    render = () => {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>姓名：</label>
                    <input type='text' ref={(el: HTMLInputElement) => this.textInput = el}/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }

}
