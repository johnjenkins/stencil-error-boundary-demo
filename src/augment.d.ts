import * as Stencil from '@stencil/core/internal';
declare module '@stencil/core/internal' {
  export interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentError?: (event: CustomEvent<Error>) => void;
  }
  export namespace JSXBase {
    interface HTMLAttributes {
      onComponentError?: (event: CustomEvent<Error>) => void;
    }
  }
}
