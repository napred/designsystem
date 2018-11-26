// @flow

import { css } from 'emotion';
import { convertUnit, createCssStyle, createComponent } from '@napred/ds';

const Container = createComponent('Container', 'div', {
  styles: [
    createCssStyle(
      [],
      (props, { theme, viewport }) => css`
        margin-left: auto;
        margin-right: auto;
        padding-left: ${convertUnit(theme.get('gutter', viewport))};
        padding-right: ${convertUnit(theme.get('gutter', viewport))};
        width: 100%;
      `,
    ),
  ],
});

// $FlowExpectError
Container.defaultProps = {
  maxWidth: [0, 1, 2, 3],
};

export default Container;
