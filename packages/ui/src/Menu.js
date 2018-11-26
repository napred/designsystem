// @flow

import { createComponent } from '@napred/ds';
import React from 'react';
import Popover from './Popover';
import { List, ListItem, ListSubheader } from './List';

const BaseMenuItem = ListItem;

export const MenuItem = createComponent('MenuItem', BaseMenuItem);
export const MenuSubheader = ListSubheader;

type BorderRadius = number | string | null | void;

type Props = {
  children?: ?React$Node,
  open: boolean,
  shadow: string | Array<string>,
  borderRadius?: BorderRadius | Array<BorderRadius> | void,
  width?: string | number | Array<string | number>,
  left?: string | number | Array<string | number>,
  right?: string | number | Array<string | number>,
  top?: string | number | Array<string | number>,
  bottom?: string | number | Array<string | number>,
};

export default function Menu({
  open,
  children,
  shadow,
  borderRadius,
  left,
  right,
  top,
  bottom,
  width,
  ...props
}: Props) {
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
    >
      <List {...props}>{children}</List>
    </Popover>
  ) : null;
}

Menu.defaultProps = {
  open: true,
  shadow: ['none', 'none', '0 4px 10px 0 rgba(0, 0, 0, 0.2)'],
  borderRadius: [null, null, 0, 0],
  left: 'initial',
  right: 'initial',
  top: 'initial',
  width: ['100vw', '100wv', '100%'],
};

Menu.displayName = 'Menu';
