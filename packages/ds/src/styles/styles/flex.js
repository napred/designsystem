// @flow

import type { Styler } from '../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';

export type AlignItems = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
export type JustifyContent =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'left'
  | 'right'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch';

export const alignContent: Styler<{
  alignContent?: string | Array<string> | void,
}> = createStringStyle('alignContent', 'align-content');

export const alignItems: Styler<{
  alignItems?: AlignItems | Array<AlignItems> | void,
}> = createStringStyle('alignItems', 'align-items');

export const alignSelf: Styler<{
  alignSelf?: string | Array<string> | void,
}> = createStringStyle('alignSelf', 'align-self');

export const flex: Styler<{
  flex?: number | string | Array<number | string> | void,
}> = createStringStyle('flex', 'flex');

export const flexBasis: Styler<{
  flexBasis?: string | number | Array<string | number> | void,
}> = createNumericStyle('flexBasis', 'flex-basis');

export const flexDirection: Styler<{
  flexDirection?: string | Array<string> | void,
}> = createStringStyle('flexDirection', 'flex-direction');

export const flexGrow: Styler<{
  flexGrow?: string | number | Array<string | number> | void,
}> = createStringStyle('flexGrow', 'flex-grow');

export const flexOrder: Styler<{
  flexOrder?: string | number | Array<string | number> | void,
}> = createStringStyle('flexOrder', 'order');

export const flexShrink: Styler<{
  flexShrink?: string | number | Array<string | number> | void,
}> = createStringStyle('flexShrink', 'flex-shrink');

export const flexWrap: Styler<{
  flexWrap?: string | Array<string> | void,
}> = createStringStyle('flexWrap', 'flex-wrap');

export const justifyContent: Styler<{
  justifyContent?: JustifyContent | Array<JustifyContent> | void,
}> = createStringStyle('justifyContent', 'justify-content');
