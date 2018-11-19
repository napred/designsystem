// @flow

import createSystemComponent from './createSystemComponent';
import IfViewport from './components/IfViewport';

export * from './utilities';
export * from './designSystemComponents';
export * from './styles';
export * from './types';
export { default as Theme } from './theme';

export const systemComponent = createSystemComponent;

export { createSystemComponent, IfViewport };
