import { createComponentFactory } from '@napred/ds';
import createStyle from './createStyle';

const createComponent = createComponentFactory({ createStyle });

export default createComponent;
