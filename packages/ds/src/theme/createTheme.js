// @flow

import type { ThemeSettings, Theme } from './types';

export default function createTheme(settings: ThemeSettings): Theme {
  return {
    get: (attributeName: string): any => {
      const attributeValues = settings[attributeName];

      if (attributeValues == null) {
        throw new Error(`There is no ${attributeName} defined in theme`);
      }

      return attributeValues;
    },
  };
}
