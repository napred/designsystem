import { IStyler } from '../styles';
import useDesignSystem from './useDesignSystem';

export default function useStyle(
  componentName: string,
  props: { [key: string]: any },
  options: {
    cacheProps?: string[];
    passthrough?: boolean;
    styles?: Array<IStyler<any>>;
    stripProps?: string[];
  },
): { [key: string]: any } {
  const ds = useDesignSystem();

  return ds.applyStyles(componentName, props, options);
}
