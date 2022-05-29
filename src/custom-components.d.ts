import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'react-chess': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Attributes ...
  }
}
