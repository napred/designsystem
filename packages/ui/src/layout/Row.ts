import { convertUnit, createComponent, createStyle } from '@napred/browser';
import { css } from 'emotion';

const Row = createComponent('Row', 'div', {
  styles: [
    createStyle(
      ['gutters'],
      ({ gutters }, { theme, viewport }) => {
        return css`
          ${!gutters
            ? ''
            : css`
                margin-left: ${convertUnit(-theme.getResponsiveValue('gutters', viewport) / 2)};
                margin-right: ${convertUnit(-theme.getResponsiveValue('gutters', viewport) / 2)};

                & > .ds-col {
                  padding-left: ${convertUnit(theme.getResponsiveValue('gutters', viewport) / 2)};
                  padding-right: ${convertUnit(theme.getResponsiveValue('gutters', viewport) / 2)};
                }
              `};
        `;
      },
      ['gutters'],
    ),
  ],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export default Row;
