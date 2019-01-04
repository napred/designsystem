import { extractStylerProps, IStyler, styleList, styles } from '@napred/ds';

export type NativeStylerProps = extractStylerProps<typeof styles.alignContent> &
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
  extractStylerProps<typeof styles.p> &
  extractStylerProps<typeof styles.px> &
  extractStylerProps<typeof styles.py> &
  extractStylerProps<typeof styles.pt> &
  extractStylerProps<typeof styles.pb> &
  extractStylerProps<typeof styles.pr> &
  extractStylerProps<typeof styles.pl> &
  extractStylerProps<typeof styles.position> &
  extractStylerProps<typeof styles.right> &
  extractStylerProps<typeof styles.shadow> &
  extractStylerProps<typeof styles.textAlign> &
  extractStylerProps<typeof styles.top> &
  extractStylerProps<typeof styles.width> &
  extractStylerProps<typeof styles.zIndex>;

// these styles are not supported by react native
const ignoreStyles: Array<IStyler<any, any>> = [
  styles.overflowX,
  styles.overflowY,
  styles.textOverflow,
  styles.textTransform,
  styles.transition,
  styles.whiteSpace,
];

export const nativeStyleList = styleList.filter(style => !ignoreStyles.includes(style));
