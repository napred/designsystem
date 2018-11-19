// @flow

import collectStylePropNames from '../utilities/collectStylePropNames';
import * as styles from './styles';
import { createCssStyle } from './cssStyleFactories';
import { createNumericStyle, createStringStyle, createStyle } from './simpleStyleFactories';
import {
  createNumericSystemStyle,
  createStringSystemStyle,
  createSystemStyle,
} from './systemStyleFactories';
import composeStyles from './composeStyles';

export {
  createCssStyle,
  createNumericStyle,
  createNumericSystemStyle,
  createStringStyle,
  createStringSystemStyle,
  createStyle,
  createSystemStyle,
  styles,
};

const styleList = [
  styles.alignContent,
  styles.alignItems,
  styles.alignSelf,
  styles.bgColor,
  styles.borderColor,
  styles.borderRadius,
  styles.borderStyle,
  styles.borderWidth,
  styles.borderRadiusBottomLeft,
  styles.borderRadiusBottomRight,
  styles.borderRadiusTopLeft,
  styles.borderRadiusTopRight,
  styles.bottom,
  styles.color,
  styles.display,
  styles.flex,
  styles.flexBasis,
  styles.flexDirection,
  styles.flexGrow,
  styles.flexOrder,
  styles.flexShrink,
  styles.flexWrap,
  styles.fontFamily,
  styles.fontSize,
  styles.fontWeight,
  styles.height,
  styles.justifyContent,
  styles.left,
  styles.lineHeight,
  styles.m,
  styles.mx,
  styles.my,
  styles.minHeight,
  styles.minWidth,
  styles.maxHeight,
  styles.maxWidth,
  styles.mb,
  styles.ml,
  styles.mr,
  styles.mt,
  styles.overflow,
  styles.overflowX,
  styles.overflowY,
  styles.p,
  styles.px,
  styles.py,
  styles.pt,
  styles.pb,
  styles.pl,
  styles.pr,
  styles.position,
  styles.right,
  styles.shadow,
  styles.transition,
  styles.textAlign,
  styles.textOverflow,
  styles.textTransform,
  styles.top,
  styles.width,
  styles.whiteSpace,
  styles.zIndex,
];

export const systemStyles = composeStyles(...styleList)(({}: any));
export const systemStylesPropsNames = collectStylePropNames((systemStyles: any));
