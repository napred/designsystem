// @flow

import type { StyleFn } from '../../types';
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

export const alignContent: StyleFn<{
  alignContent?: string | Array<string> | void,
}> = createStringStyle('alignContent', 'align-content');

export const alignItems: StyleFn<{
  alignItems?: AlignItems | Array<AlignItems> | void,
}> = createStringStyle('alignItems', 'align-items');

export const alignSelf: StyleFn<{
  alignSelf?: string | Array<string> | void,
}> = createStringStyle('alignSelf', 'align-self');

export const flex: StyleFn<{
  flex?: number | string | Array<number | string> | void,
}> = createStringStyle('flex', 'flex');

export const flexBasis: StyleFn<{
  flexBasis?: string | number | Array<string | number> | void,
}> = createNumericStyle('flexBasis', 'flex-basis');

export const flexDirection: StyleFn<{
  flexDirection?: string | Array<string> | void,
}> = createStringStyle('flexDirection', 'flex-direction');

export const flexGrow: StyleFn<{
  flexGrow?: string | number | Array<string | number> | void,
}> = createStringStyle('flexGrow', 'flex-grow');

export const flexOrder: StyleFn<{
  flexOrder?: string | number | Array<string | number> | void,
}> = createStringStyle('flexOrder', 'order');

export const flexShrink: StyleFn<{
  flexShrink?: string | number | Array<string | number> | void,
}> = createStringStyle('flexShrink', 'flex-shrink');

export const flexWrap: StyleFn<{
  flexWrap?: string | Array<string> | void,
}> = createStringStyle('flexWrap', 'flex-wrap');

export const justifyContent: StyleFn<{
  justifyContent?: JustifyContent | Array<JustifyContent> | void,
}> = createStringStyle('justifyContent', 'justify-content');
