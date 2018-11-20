// @flow

import React, { type ComponentType } from 'react';
import Theme from './theme';

export type StyleFn<Props: Object> = {
  propNames: Array<string>,
  // eslint-disable-next-line no-undef
  [[call]]: <T: Object>(p: StyleFn<T>) => StyleFn<T & Props>,
};

export class SystemComponent<T> extends React.Component<T> {
  static appliedStyles: Array<StyleFn<any>>;
  static blacklist: Array<string>;
  static displayName: ?string;
  static isSystemComponent: boolean;
  static targetComponent: string | ComponentType<any> | Class<SystemComponent<any>>;
}

export type SystemComponentProps = {
  system: Theme,
  viewport: number,
};

// extracts props from composed styler
export type ExtractStylesProps = <T>(StyleFn<T>) => T;

export type ExtractSystemComponentProps = <T>(SystemComponent<T>) => T;
