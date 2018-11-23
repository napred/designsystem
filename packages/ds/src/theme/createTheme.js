// @flow

import type { ThemeSettings, Theme } from './types';

export default function createTheme(settings: ThemeSettings): Theme {
  return {
    get: (attributeName: string, defaultValue?: any): any => {
      const attributeValues = settings[attributeName];

      if (attributeValues == null) {
        if (defaultValue == null) {
          throw new Error(`There is no ${attributeName} defined in theme`);
        } else {
          return defaultValue;
        }
      } else if (
        typeof attributeValues === 'object' &&
        !Array.isArray(attributeValues) &&
        defaultValue != null
      ) {
        return attributeValues[defaultValue] || defaultValue;
      }

      return attributeValues;
    },
  };
}
