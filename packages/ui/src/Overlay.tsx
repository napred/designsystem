import { createComponent, DSProps } from '@napred/ds';
import React from 'react';

import Portal from './Portal';

export const OverlayDiv = createComponent('OverlayDiv', 'div', {
  style: {
    background: 'rgba(0, 0, 0, 0.8)',
    height: '100vh',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100vw',
  },
});

interface IProps extends DSProps {
  containerId: string;
  zIndex?: number;
}

export default function Overlay({ containerId, zIndex = 1, ...rest }: IProps) {
  return (
    <Portal containerId={containerId}>
      <OverlayDiv zIndex={zIndex} {...rest} />
    </Portal>
  );
}
