// @flow

import { createComponent } from '@napred/ds';
import React from 'react';

import Portal from './Portal';

export const OverlayDiv = createComponent('OverlayDiv', 'div', {
  style: {
    background: 'rgba(0, 0, 0, 0.8)',
    height: '100vh',
    position: 'fixed',
    width: '100vw',
    top: 0,
    left: 0,
    right: 0,
  },
});

type Props = {
  containerId: string,
  zIndex?: number,
};

export default function Overlay({ containerId, zIndex = 1, ...rest }: Props) {
  return (
    <Portal containerId={containerId}>
      <OverlayDiv zIndex={zIndex} {...rest} />
    </Portal>
  );
}
