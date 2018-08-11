import {Component} from "@stencil/core";

@Component({
    tag: 'slot-components'
})
export class SlotComponents {
    render = () => {
        return(
            <div>
                <h2>slot Component</h2>
                <div>
                    <slot />
                </div>
                <h1>
                    <slot name='slotHere'></slot>
                </h1>
            </div>
        )
    }
}
