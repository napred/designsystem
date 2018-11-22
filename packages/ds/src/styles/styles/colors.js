// @flow

import type { Styler } from '../types';
import { createStringStyle } from '../simpleStyleFactories';
import { createStringSystemStyle } from '../systemStyleFactories';

export const color: Styler<{ color?: string | Array<string> | void }> = createStringSystemStyle(
  'color',
  'color',
  'colors',
);

export const bgColor: Styler<{
  bgColor?: string | Array<string> | void,
}> = createStringSystemStyle('bgColor', 'background-color', 'colors');

export const shadow: Styler<{
  shadow?: string | Array<string> | void,
}> = createStringStyle('shadow', 'box-shadow');
