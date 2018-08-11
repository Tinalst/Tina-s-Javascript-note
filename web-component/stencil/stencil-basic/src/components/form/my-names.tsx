import {Component, State} from "@stencil/core";

@Component({
    tag: 'my-name'
})
export  class MyNames {

    @State() value: string;

    submitHandle = (e) => {
        e.preventDefault();
        console.log(this.value);
    };

    changeHandle = (event) => {
      this.value  = event.target.value;
    };

    render = () => {
        return (
            <form onSubmit={ (e) => this.submitHandle(e)}>
                <label>
                    Name:
                    <input type="text" value={this.value} onInput={(event) => this.changeHandle(event)}/>
                </label>
                <input type='submit' value="Submit"/>
            </form>
        )
    }
}
