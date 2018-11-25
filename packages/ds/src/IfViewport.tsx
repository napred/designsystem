import { FunctionComponent, ReactElement, ReactNode } from 'react';
import useDesignSystem from './hooks/useDesignSystem';

interface IProps {
  /** Render function */
  children: () => ReactNode;
  /** If viewport is greater than */
  gt?: number;
  /** If viewport is greater than or equal to */
  gte?: number;
  /** If viewport is exact or is found in array */
  is?: number | number[];
  /** If viewport is less than */
  lt?: number;
  /** If viewport is less than or equal to */
  lte?: number;
}

/**
 * Renders children only if viewport matches criteria
 *
 * Order of precedence:
 * is
 * gt
 * lt
 * gte
 * lte
 *
 * If none matches, renders null
 */
const IfViewport: FunctionComponent<IProps> = ({ children, gt, gte, is, lt, lte }) => {
  const { viewport } = useDesignSystem();

  if (is != null) {
    if (Array.isArray(is) && is.includes(viewport)) {
      return children() as ReactElement<any>;
    }

    if (is === viewport) {
      return children() as ReactElement<any>;
    }
  }

  if (
    (gt != null && viewport > gt) ||
    (lt != null && viewport < lt) ||
    (gte != null && viewport >= gte) ||
    (lte != null && viewport <= lte)
  ) {
    return children() as ReactElement<any>;
  }

  if (lt != null && viewport < lt) {
    return children() as ReactElement<any>;
  }

  return null;
};

IfViewport.displayName = 'IfViewport';

export default IfViewport;
