import { IComponentOptions } from '../types';
import useDesignSystem from './useDesignSystem';

export default function useStyle<TProps extends object, TStyle>(
  componentName: string,
  props: TProps,
  options: IComponentOptions<TProps, TStyle>,
): { [propName: string]: any } {
  const ds = useDesignSystem<TStyle>();

  return ds.applyStyles<TProps>(componentName, props, options);
}
