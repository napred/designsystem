import { DSProps } from '@napred/browser';
import React, { ReactNode } from 'react';
import { List, ListItem, ListSubheader } from './List';
import Popover from './Popover';

export const MenuItem = ListItem;
export const MenuSubheader = ListSubheader;

interface IProps extends DSProps {
  children?: ReactNode;
  listProps: DSProps;
  open: boolean;
  popoverProps: DSProps;
}

function Menu({
  borderRadius,
  bottom,
  children,
  left,
  listProps,
  open,
  popoverProps,
  right,
  shadow,
  top,
  width,
  ...props
}: IProps) {
  return open ? (
    <Popover
      borderRadius={borderRadius}
      bottom={bottom}
      left={left}
      position={['fixed', 'absolute']}
      right={right}
      shadow={shadow}
      top={top}
      width={width}
      zIndex={32}
      {...popoverProps}
    >
      <List {...props} {...listProps}>
        {children}
      </List>
    </Popover>
  ) : null;
}

Menu.defaultProps = {
  borderRadius: [null, null, 0, 0],
  left: 'initial',
  listProps: {},
  open: true,
  popoverProps: {},
  right: 'initial',
  shadow: ['none', 'none', '0 4px 10px 0 rgba(0, 0, 0, 0.2)'],
  top: 'initial',
  width: ['100vw', '100wv', '100%'],
};

Menu.displayName = 'Menu';

export default Menu;
