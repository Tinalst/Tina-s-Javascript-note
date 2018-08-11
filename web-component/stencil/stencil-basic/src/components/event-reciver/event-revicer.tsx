import {Component, Listen, State} from "@stencil/core";

@Component({
    tag: 'event-reciver'
})
export class EventRevicer {

    @State() content: string = "还没有接收到邮件";

    @Listen('emailer')
    emailHandle(event: CustomEvent) {
        console.log(event);
        this.content  = event.detail;
    }

    render = () => {
        return(
            <div>
                <event-sender></event-sender>
                {this.content}
            </div>
        )
    }
}
