import { createComponent, createNumericStyle } from '@napred/browser';

export interface IProps {
  width?: null | number | string | void | Array<null | number | string | void>;
}

const width = createNumericStyle<IProps>('width', ['max-width'], '100%');

const Column = createComponent('Column', 'div', {
  style: {
    boxSizing: 'border-box',
  },
  styles: [width],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Column.defaultProps = {
  className: 'ds-col',
  flex: '0 0 auto',
};

export default Column;
