import { setErrorHandler } from '@stencil/core';

const myErrorHandler = (e, el) => {
  if (!el) return;
  el.dispatchEvent(new CustomEvent('componentError', {
    bubbles: true, cancelable: true, composed: true, detail: e
  }));
}
setErrorHandler(myErrorHandler)
