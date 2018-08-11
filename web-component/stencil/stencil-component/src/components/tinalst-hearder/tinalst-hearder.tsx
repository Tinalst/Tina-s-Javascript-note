import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tinalst-hearder',
  styleUrl: 'tinalst-hearder.css',
  shadow: true
})
export class TinalstHearder {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
