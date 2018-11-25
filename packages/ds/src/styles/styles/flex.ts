import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { IStyler } from '../types';

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

export const alignContent: IStyler<{
  alignContent?: string | string[] | void;
}> = createStringStyle('alignContent', 'align-content');

export const alignItems: IStyler<{
  alignItems?: AlignItems | AlignItems[] | void;
}> = createStringStyle('alignItems', 'align-items');

export const alignSelf: IStyler<{
  alignSelf?: string | string[] | void;
}> = createStringStyle('alignSelf', 'align-self');

export const flex: IStyler<{
  flex?: number | string | Array<number | string> | void;
}> = createStringStyle('flex', 'flex');

export const flexBasis: IStyler<{
  flexBasis?: string | number | Array<string | number> | void;
}> = createNumericStyle('flexBasis', 'flex-basis');

export const flexDirection: IStyler<{
  flexDirection?: string | string[] | void;
}> = createStringStyle('flexDirection', 'flex-direction');

export const flexGrow: IStyler<{
  flexGrow?: string | number | Array<string | number> | void;
}> = createStringStyle('flexGrow', 'flex-grow');

export const flexOrder: IStyler<{
  flexOrder?: string | number | Array<string | number> | void;
}> = createStringStyle('flexOrder', 'order');

export const flexShrink: IStyler<{
  flexShrink?: string | number | Array<string | number> | void;
}> = createStringStyle('flexShrink', 'flex-shrink');

export const flexWrap: IStyler<{
  flexWrap?: string | string[] | void;
}> = createStringStyle('flexWrap', 'flex-wrap');

export const justifyContent: IStyler<{
  justifyContent?: JustifyContent | JustifyContent[] | void;
}> = createStringStyle('justifyContent', 'justify-content');
