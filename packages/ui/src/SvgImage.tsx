import { createComponent, css } from '@napred/browser';
import React, { Children, ComponentType, ReactNode } from 'react';
import getResponsiveValue from './utils/getResponsiveValue';

interface IProps {
  children?: ReactNode;
  fill?: string | string[];
  icon?: ComponentType<any>;
  titleAccess?: null | string;
  viewBox?: null | string;
}

const Svg = ({ children, icon: Icon, titleAccess, ...rest }: IProps) => {
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

const SvgImage = createComponent<IProps>('SvgImage', Svg, {
  cacheProps: ['fill'],
  stripProps: ['fill'],
  style: ({ fill }, { theme, viewport }) => css`
    user-select: none;
    display: inline-block;
    flex-shrink: 0;

    path:last-child {
      fill: ${theme.color(fill ? getResponsiveValue<string>(fill, viewport) : 'transparent')};
    }
  `,
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
SvgImage.defaultProps = {
  fill: 'primary',
  focusable: 'false',
  fontSize: 2,
  height: '1em',
  width: '1em',
};

export default SvgImage;
