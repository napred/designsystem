import React from 'react';
import { CloseIcon } from './assets';
import SvgImage from './SvgImage';

interface IProps {
  inverted: boolean;
}

export default function Close({ inverted, ...props }: IProps) {
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
