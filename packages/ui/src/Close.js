// @flow

import React from 'react';
import SvgImage from './SvgImage';
import { CloseIcon } from './assets';

type Props = {
  inverted: boolean,
};

export default function Close({ inverted, ...props }: Props) {
  return (
    <SvgImage
      cursor="pointer"
      fontSize={4}
      fill={inverted ? 'primary' : ['primary', 'white']}
      bgColor={inverted ? 'transparent' : ['white', 'primary']}
      borderRadius={inverted ? 0 : [0, 3]}
      p={2}
      {...props}
    >
      <CloseIcon />
    </SvgImage>
  );
}

Close.defaultProps = {
  inverted: false,
};
