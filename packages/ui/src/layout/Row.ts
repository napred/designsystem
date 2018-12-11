import { convertUnit, createComponent, createStyle, getResponsiveValue } from '@napred/browser';
import { css } from 'emotion';

const Row = createComponent<{ gutters?: boolean }>('Row', 'div', {
  styles: [
    createStyle(
      ['gutters'],
      ({ gutters }, { theme, viewport }) => {
        return css`
          ${!gutters
            ? ''
            : css`
                margin-left: ${convertUnit(
                  -(getResponsiveValue(viewport, theme.get('gutters')) || 0) / 2,
                )};
                margin-right: ${convertUnit(
                  -(getResponsiveValue(viewport, theme.get('gutters')) || 0) / 2,
                )};

                & > .ds-col {
                  padding-left: ${convertUnit(
                    Number(getResponsiveValue(viewport, theme.get('gutters')) || 0) / 2,
                  )};
                  padding-right: ${convertUnit(
                    Number(getResponsiveValue(viewport, theme.get('gutters')) || 0) / 2,
                  )};
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
