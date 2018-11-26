// @flow

import React from 'react';
import { createCssStyle, createComponent } from '@napred/ds';
import Fixed from './Fixed';
import Overlay from './Overlay';
import Portal from './Portal';

const transforms = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)',
};

const side = ({ side: toSide }) => {
  if (!transforms[toSide])
    return {
      top: 0,
      left: 0,
      bottom: 0,
    };
  const top = /^(top|left|right)$/.test(toSide) ? 0 : null;
  const bottom = /^(bottom|left|right)$/.test(toSide) ? 0 : null;
  const left = /^(left|top|bottom)$/.test(toSide) ? 0 : null;
  const right = /^(right|top|bottom)$/.test(toSide) ? 0 : null;

  return {
    top,
    bottom,
    left,
    right,
  };
};

const transform = ({ open, side: toSide }) => ({
  transform: open ? null : transforms[toSide] || transforms.left,
});

type Props = {
  containerId: string,
  open: boolean,
  overlayed: boolean,
  side: 'left' | 'top' | 'bottom' | 'right',
};

const drawerStyle = createCssStyle(['open', 'side'], { ...transform, ...side }, ['open', 'side']);

const DrawerBase = createComponent('DrawerBase', Fixed, { styles: [drawerStyle] });

// $FlowExpectError
DrawerBase.defaultProps = {
  height: ['100%'],
  zIndex: 2,
  width: ['100%', '75%', '50%'],
};

export default function Drawer(props: Props) {
  const { containerId, overlayed, ...rest } = props;

  return (
    <Portal containerId={containerId}>
      <DrawerBase {...rest} />
      {overlayed ? <Overlay containerId={containerId} /> : null}
    </Portal>
  );
}

// $FlowExpectError
Drawer.defaultProps = {
  containerId: 'drawer-root',
  open: false,
  overlayed: false,
  side: 'left',
};
