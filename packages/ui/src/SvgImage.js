// @flow

import { css } from 'emotion';
import { createComponent } from '@napred/ds';
import React, { Children, type ChildrenArray, type ComponentType } from 'react';
import getResponsiveValue from './utils/getResponsiveValue';

type Props = {
  children?: ChildrenArray<any>,
  viewBox?: ?string,
  icon?: ComponentType<any>,
  titleAccess?: ?string,
};

const Svg = ({ children, icon: Icon, titleAccess, ...rest }: Props) => {
  if (Icon != null) {
    return <Icon aria-hidden={titleAccess ? 'false' : 'true'} {...rest} />;
  } else if (children != null) {
    return React.cloneElement(Children.only(children), {
      'aria-hidden': titleAccess ? 'false' : 'true',
      ...rest,
    });
  }

  return null;
};

const SvgImage = createComponent('SvgImage', Svg, {
  style: ({ fill }, { theme, viewport }) => css`
    user-select: none;
    display: inline-block;
    flex-shrink: 0;

    path:last-child {
      fill: ${theme.get('colors', getResponsiveValue(fill, viewport))};
    }
  `,
  cacheProps: ['fill'],
  stripProps: ['fill'],
});

// $FlowExpectError
SvgImage.defaultProps = {
  fill: 'primary',
  focusable: 'false',
  fontSize: 2,
  height: '1em',
  width: '1em',
};

export default SvgImage;
