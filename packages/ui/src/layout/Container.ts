import { convertUnit, createComponent, createCssStyle } from '@napred/ds';
import { css } from 'emotion';

const Container = createComponent('Container', 'div', {
  styles: [
    createCssStyle(
      [],
      (_, { theme, viewport }) => css`
        margin-left: auto;
        margin-right: auto;
        padding-left: ${convertUnit(theme.get('gutter', viewport))};
        padding-right: ${convertUnit(theme.get('gutter', viewport))};
        width: 100%;
      `,
    ),
  ],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Container.defaultProps = {
  maxWidth: [0, 1, 2, 3],
};

export default Container;
