import { IStylingOptions } from '../types';
import useDesignSystem from './useDesignSystem';

interface IStyleOptions extends IStylingOptions {
  /** Tell the system to generate (false) or passthrough (true) styles for underlying component */
  passthrough?: boolean;
}

export default function useStyle(
  componentName: string,
  props: { [key: string]: any },
  options: IStyleOptions,
): { [key: string]: any } {
  const ds = useDesignSystem();

  return ds.applyStyles(componentName, props, options);
}
