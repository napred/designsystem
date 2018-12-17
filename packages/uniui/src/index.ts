import { createComponent, createVariants } from '@napred/native';
import { Box, Flex, Link } from '@napred/primitives/native';

import AbsoluteDef from './Absolute';
import AvatarDef, { style as avatarStyle } from './Avatar';
import BadgeDef, { style as badgeStyle } from './Badge';
import BlockLinkDef from './BlockLink';
import CircleDef, { style as circleStyle } from './Circle';
import DividerDef, { style as dividerStyle } from './Divider';
import FixedDef from './Fixed';
import {
  itemStyle,
  List as ListDef,
  ListItem as ListItemDef,
  ListSubheader as ListSubheaderDef,
  OrderedList as OrderedListDef,
} from './List';
import MessageDef, { msgVariants } from './Message';

export const Absolute = createComponent('Absolute', Box);
Absolute.defaultProps = AbsoluteDef.defaultProps;

export const Avatar = createComponent('Avatar', Box, { style: avatarStyle });
Avatar.defaultProps = AvatarDef.defaultProps;

export const Badge = createComponent('Badge', Box, { style: badgeStyle });
Badge.defaultProps = BadgeDef.defaultProps;

export const BlockLink = createComponent('BlockLink', Link);
BlockLink.defaultProps = BlockLinkDef.defaultProps;

export const Circle = createComponent('Circle', Badge, { style: circleStyle });
Circle.defaultProps = CircleDef.defaultProps;

// export const Close = () => {};
// Circle.defaultProps = CircleDef.defaultProps;

export const Divider = createComponent('Divider', Box, { style: dividerStyle });
Divider.defaultProps = DividerDef.defaultProps;

// export const Drawer = () => {};

export const Fixed = createComponent('Fixed', Box);
Fixed.defaultProps = FixedDef.defaultProps;

export const List = createComponent('List', Box);
List.defaultProps = ListDef.defaultProps;

export const OrderedList = createComponent('OrderedList', Box);
OrderedList.defaultProps = OrderedListDef.defaultProps;

export const ListItem = createComponent('ListItem', Box, { style: itemStyle });
ListItem.defaultProps = ListItemDef.defaultProps;

export const ListSubheader = createComponent('ListSubheader', Box, { style: itemStyle });
ListSubheader.defaultProps = ListSubheaderDef.defaultProps;

// export const Menu = () => {}

export const Message = createComponent('Message', Flex, { styles: [createVariants('variant', msgVariants)] });
Message.defaultProps = MessageDef.defaultProps;

export * from './assets';
// export * from './form';
// export * from './layout';
// if you put this on the start of the file
// rollup will generate invalid build
export * from '@napred/primitives';
