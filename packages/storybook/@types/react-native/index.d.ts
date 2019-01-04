// hack because react-native conflicts with @types/node and lib.dom
declare module 'react-native' {
  import { ComponentType } from 'react';

  type Style = {
    default: any;
    create(obj: any): any;
  };

  const StyleSheet: Style;
  const Image: ComponentType;
  const Text: ComponentType;
  const View: ComponentType;

  export { Image, StyleSheet, Text, View };

  export type RegisteredStyle<T> = any;
}
