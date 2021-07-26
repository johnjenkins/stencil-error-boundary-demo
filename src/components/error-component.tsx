import { Component } from '@stencil/core';

@Component({
  tag: 'error-component',
  shadow: true,
})
export class ErrorComponent {

  render() {
    throw Error('There was an error during error-component render');
  }
}
