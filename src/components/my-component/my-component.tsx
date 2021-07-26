import { Component, Prop, h, VNode, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() errorMsg: string = null;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private errorHandler = (e: CustomEvent) => {
    this.errorMsg = (e.detail as Error).message;
  }

  private safeRender = (): VNode[] => {
    return [
      <div>Hello, World! I'm {this.getText()}</div>,
      (!this.errorMsg ?
        <error-component onComponentError={this.errorHandler}></error-component> :
        <p>Oh no - there was an error. {this.errorMsg}</p>
      )];
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return this.safeRender();
  }
}
