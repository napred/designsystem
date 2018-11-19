// @flow

import type { StyleFn } from '../../types';
import { createStringStyle } from '../simpleStyleFactories';
import { createStringSystemStyle } from '../systemStyleFactories';

export const color: StyleFn<{ color?: string | Array<string> | void }> = createStringSystemStyle(
  'color',
  'color',
  'colors',
);

export const bgColor: StyleFn<{
  bgColor?: string | Array<string> | void,
}> = createStringSystemStyle('bgColor', 'background-color', 'colors');

export const shadow: StyleFn<{
  shadow?: string | Array<string> | void,
}> = createStringStyle('shadow', 'box-shadow');
