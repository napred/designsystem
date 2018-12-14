import { convertUnit, createComponent, createStyle, getResponsiveValue } from '@napred/browser';
import { Box } from '@napred/primitives';
import { css } from 'emotion';

const Container = createComponent<{}>('Container', Box, {
  styles: [
    createStyle([], (_, { theme, viewport }) => {
      return css`
        margin-left: auto;
        margin-right: auto;
        padding-left: ${convertUnit(Number(getResponsiveValue(viewport, theme.get('gutters'))))};
        padding-right: ${convertUnit(Number(getResponsiveValue(viewport, theme.get('gutters'))))};
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
