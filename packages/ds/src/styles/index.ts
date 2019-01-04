import { extractStylerProps } from '../types';
import * as styles from './styles';

export { styles };

export * from './simpleStyleFactories';
export * from './systemStyleFactories';

export type StylerProps = extractStylerProps<typeof styles.alignContent> &
  extractStylerProps<typeof styles.alignItems> &
  extractStylerProps<typeof styles.alignSelf> &
  extractStylerProps<typeof styles.bgColor> &
  extractStylerProps<typeof styles.borderColor> &
  extractStylerProps<typeof styles.borderRadius> &
  extractStylerProps<typeof styles.borderStyle> &
  extractStylerProps<typeof styles.borderWidth> &
  extractStylerProps<typeof styles.borderRadiusBottomLeft> &
  extractStylerProps<typeof styles.borderRadiusBottomRight> &
  extractStylerProps<typeof styles.borderRadiusTopLeft> &
  extractStylerProps<typeof styles.borderRadiusBottomRight> &
  extractStylerProps<typeof styles.bottom> &
  extractStylerProps<typeof styles.color> &
  extractStylerProps<typeof styles.display> &
  extractStylerProps<typeof styles.flex> &
  extractStylerProps<typeof styles.flexBasis> &
  extractStylerProps<typeof styles.flexDirection> &
  extractStylerProps<typeof styles.flexGrow> &
  extractStylerProps<typeof styles.flexOrder> &
  extractStylerProps<typeof styles.flexShrink> &
  extractStylerProps<typeof styles.flexWrap> &
  extractStylerProps<typeof styles.fontFamily> &
  extractStylerProps<typeof styles.fontSize> &
  extractStylerProps<typeof styles.fontWeight> &
  extractStylerProps<typeof styles.height> &
  extractStylerProps<typeof styles.justifyContent> &
  extractStylerProps<typeof styles.left> &
  extractStylerProps<typeof styles.lineHeight> &
  extractStylerProps<typeof styles.m> &
  extractStylerProps<typeof styles.mx> &
  extractStylerProps<typeof styles.my> &
  extractStylerProps<typeof styles.mt> &
  extractStylerProps<typeof styles.mb> &
  extractStylerProps<typeof styles.mr> &
  extractStylerProps<typeof styles.ml> &
  extractStylerProps<typeof styles.minHeight> &
  extractStylerProps<typeof styles.minWidth> &
  extractStylerProps<typeof styles.maxHeight> &
  extractStylerProps<typeof styles.maxWidth> &
  extractStylerProps<typeof styles.opacity> &
  extractStylerProps<typeof styles.overflow> &
  extractStylerProps<typeof styles.overflowX> &
  extractStylerProps<typeof styles.overflowY> &
  extractStylerProps<typeof styles.p> &
  extractStylerProps<typeof styles.px> &
  extractStylerProps<typeof styles.py> &
  extractStylerProps<typeof styles.pt> &
  extractStylerProps<typeof styles.pb> &
  extractStylerProps<typeof styles.pr> &
  extractStylerProps<typeof styles.pl> &
  extractStylerProps<typeof styles.position> &
  extractStylerProps<typeof styles.right> &
  extractStylerProps<typeof styles.transition> &
  extractStylerProps<typeof styles.shadow> &
  extractStylerProps<typeof styles.textAlign> &
  extractStylerProps<typeof styles.textOverflow> &
  extractStylerProps<typeof styles.textTransform> &
  extractStylerProps<typeof styles.top> &
  extractStylerProps<typeof styles.width> &
  extractStylerProps<typeof styles.whiteSpace> &
  extractStylerProps<typeof styles.zIndex>;

export const styleList = [
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
  styles.mb,
  styles.ml,
  styles.mr,
  styles.mt,
  styles.minHeight,
  styles.minWidth,
  styles.maxHeight,
  styles.maxWidth,
  styles.opacity,
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
