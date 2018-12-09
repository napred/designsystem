import { convertUnit, createComponent, createStyle } from '@napred/browser';
import { css } from 'emotion';

const Container = createComponent<{}>('Container', 'div', {
  styles: [
    createStyle([], (_, { theme, viewport }) => {
      return css`
        margin-left: auto;
        margin-right: auto;
        padding-left: ${convertUnit(theme.getResponsiveValue('gutters', viewport))};
        padding-right: ${convertUnit(theme.getResponsiveValue('gutters', viewport))};
        width: 100%;
      `;
    }),
  ],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Container.defaultProps = {
  maxWidth: [0, 1, 2, 3],
};

export default Container;
