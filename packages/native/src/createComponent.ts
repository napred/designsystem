import { ComponentFactory, createComponentFactory } from '@napred/ds';
import createStyle from './createStyle';
import { NativeStylerProps } from './styleList';
import { StyleDefinition } from './types';

const createComponent: ComponentFactory<
  NativeStylerProps,
  StyleDefinition
> = createComponentFactory({
  createStyle,
});

export default createComponent;
