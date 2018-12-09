import { createComponentFactory, StylerProps } from '@napred/ds';
import createStyle from './createStyle';
import { StyleDefinition } from './types';

const createComponent = createComponentFactory<StylerProps, StyleDefinition>({ createStyle });

export default createComponent;
