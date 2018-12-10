import { ComponentFactory, createComponentFactory, StylerProps } from '@napred/ds';
import createStyle from './createStyle';
import { StyleDefinition } from './types';

const createComponent: ComponentFactory<StylerProps, StyleDefinition> = createComponentFactory({
  createStyle,
});

export default createComponent;
