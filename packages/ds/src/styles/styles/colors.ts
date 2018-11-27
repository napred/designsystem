import { IStyler } from '../../types';
import { createStringStyle } from '../simpleStyleFactories';
import { createStringSystemStyle } from '../systemStyleFactories';

export const color: IStyler<{ color?: string | string[] | void }> = createStringSystemStyle(
  'color',
  'color',
  'colors',
);

export const bgColor: IStyler<{
  /** Specifies background color */
  bgColor?: string | string[] | void;
}> = createStringSystemStyle('bgColor', 'background-color', 'colors');

export const shadow: IStyler<{
  shadow?: string | string[] | void;
}> = createStringStyle('shadow', 'box-shadow');
