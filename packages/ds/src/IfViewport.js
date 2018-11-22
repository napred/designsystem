// @flow

import useDesignSystem from './hooks/useDesignSystem';

type Props = {
  children: () => React$Node,
  gt?: number,
  gte?: number,
  is?: number | Array<number>,
  lt?: number,
  lte?: number,
};

export default function IfViewport({ children, gt, gte, is, lt, lte }: Props) {
  const { viewport } = useDesignSystem();

  if (is != null) {
    if (Array.isArray(is) && is.includes(viewport)) {
      return children();
    }

    if (is === viewport) {
      return children();
    }
  }

  if (
    (gt != null && viewport > gt) ||
    (lt != null && viewport < lt) ||
    (gte != null && viewport >= gte) ||
    (lte != null && viewport <= lte)
  ) {
    return children();
  }

  if (lt != null && viewport < lt) {
    return children();
  }

  return null;
}
