// @flow

import { createCssStyle, createNumericStyle, type StyleFn, createComponent } from '@napred/ds';

export type Props = {
  width?: number | string | void | Array<number | string | void>,
};

const width: StyleFn<{
  width?: number | string | Array<string | number> | void,
}> = createNumericStyle('width', ['max-width'], '100%');

const Column = createComponent('Column', 'div', {
  styles: [width, createCssStyle([], { boxSizing: 'border-box' })],
  defaultProps: {
    className: 'ds-col',
    flex: '0 0 auto',
  },
});

export default Column;
