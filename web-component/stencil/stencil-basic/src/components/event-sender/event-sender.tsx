import {Component, Event, EventEmitter} from "@stencil/core";

@Component({
    tag: 'event-sender'
})
export class EventSender {
    @Event() emailer: EventEmitter;

    emailHandle = () => {
        this.emailer.emit('邮件内容');
    };

    render = () => {
        return(
            <div>
                <button onClick={this.emailHandle}>发送邮件</button>
            </div>
        )
    }
}
