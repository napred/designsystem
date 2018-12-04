import { IStyler } from '../../types';
import { createStringStyle } from '../simpleStyleFactories';
import { createStringSystemStyle } from '../systemStyleFactories';

export type Color = string | null | undefined;
type Opacity = number | string | null | undefined;
type Shadow = string | null | undefined;

export const bgColor: IStyler<{
  /** Specifies background color */
  bgColor?: Color | Color[];
}> = createStringSystemStyle('bgColor', 'backgroundColor', 'colors');

export const borderColor: IStyler<{
  borderColor?: Color | Color[];
}> = createStringSystemStyle('borderColor', 'borderColor', 'colors');

export const color: IStyler<{ color?: Color | Color[] }> = createStringSystemStyle(
  'color',
  'color',
  'colors',
);

export const opacity: IStyler<{ opacity?: Opacity | Opacity[] }> = createStringStyle(
  'opacity',
  'opacity',
);

export const shadow: IStyler<{
  shadow?: Shadow | Shadow[];
}> = createStringStyle('shadow', 'boxShadow');
