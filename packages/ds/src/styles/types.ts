import { ISystem } from '../system';

export interface IStyler<TProps extends object> {
  apply: (props: TProps, designSystem: ISystem) => any;
  propNames: string[];
  stripProps: string[];
}

export type extractStylerProps<Type> = Type extends IStyler<infer x> ? x : object;
