import { createComponent, createStyle, DSProps } from '@napred/browser';
import React, { ReactNode } from 'react';
import Fixed from './Fixed';
import Overlay from './Overlay';
import Portal from './Portal';

const transforms = {
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateY(-100%)',
};

const side = ({
  side: toSide,
}: IDrawerBaseProps): {
  bottom: null | number;
  left: null | number;
  right: null | number;
  top: null | number;
} => {
  if (!transforms[toSide]) {
    return {
      bottom: 0,
      left: 0,
      right: null,
      top: 0,
    };
  }
  const top = /^(top|left|right)$/.test(toSide) ? 0 : null;
  const bottom = /^(bottom|left|right)$/.test(toSide) ? 0 : null;
  const left = /^(left|top|bottom)$/.test(toSide) ? 0 : null;
  const right = /^(right|top|bottom)$/.test(toSide) ? 0 : null;

  return {
    bottom,
    left,
    right,
    top,
  };
};

const transform = ({ open, side: toSide }: IDrawerBaseProps) => ({
  transform: open ? null : transforms[toSide] || transforms.left,
});

interface IDrawerBaseProps extends DSProps {
  children?: ReactNode;
  open: boolean;
  side: keyof (typeof transforms);
}

const drawerStyle = createStyle(['open', 'side'], (props: IDrawerBaseProps) => ({
  ...transform(props),
  ...side(props),
}));

const DrawerBase = createComponent<IDrawerBaseProps>('DrawerBase', Fixed, {
  styles: [drawerStyle],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
DrawerBase.defaultProps = {
  height: ['100%'],
  width: ['100%', '75%', '50%'],
  zIndex: 32,
};

interface IDrawerProps extends IDrawerBaseProps {
  containerId: string;
  overlayContainerId: string;
  overlayed: boolean;
  overlayProps: DSProps,
}

function Drawer({ containerId, overlayContainerId, overlayProps, overlayed, ...rest }: IDrawerProps) {
  const allOverlayProps = { zIndex: 31, ...overlayProps };
  return (
    <Portal containerId={containerId}>
      <DrawerBase {...rest} />
      {overlayed ? <Overlay { ...allOverlayProps} containerId={overlayContainerId} /> : null}
    </Portal>
  );
}

Drawer.defaultProps = {
  containerId: 'drawer-root',
  open: false,
  overlayContainerId: 'drawer-overlay-root',
  overlayed: false,
  side: 'left',
};

export default Drawer;
