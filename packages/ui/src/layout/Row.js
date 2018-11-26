// @flow

import { convertUnit, createCssStyle, createComponent } from '@napred/ds';
import { css } from 'emotion';

const Row = createComponent('Row', 'div', {
  styles: [
    createCssStyle(
      ['gutters'],
      ({ gutters }, { theme, viewport }) => css`
        ${!gutters
          ? ''
          : css`
              margin-left: ${convertUnit(-theme.get('gutter', viewport) / 2)};
              margin-right: ${convertUnit(-theme.get('gutter', viewport) / 2)};

              & > .ds-col {
                padding-left: ${convertUnit(theme.get('gutter', viewport) / 2)};
                padding-right: ${convertUnit(theme.get('gutter', viewport) / 2)};
              }
            `};
      `,
      ['gutters'],
    ),
  ],
});

// $FlowExpectError
Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export default Row;
