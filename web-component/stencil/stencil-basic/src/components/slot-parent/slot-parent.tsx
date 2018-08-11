import {Component} from "@stencil/core";

@Component({
    tag: 'slot-parent'
})
export class SlotParent {
    render = () => {
        return (
            <div>
                <slot-components>
                    <p>slot content2</p>
                    <p slot='slotHere'>slot content</p>
                </slot-components>
            </div>
        )
    }
}
