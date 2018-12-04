import { ITheme } from '../types';
import { IThemeSettings } from './types';

export default function createTheme(settings: IThemeSettings): ITheme {
  return {
    color(valueOrName, defaultValueOrName) {
      const color = settings.colors[valueOrName];

      if (color == null) {
        if (defaultValueOrName != null) {
          return settings.colors[defaultValueOrName] || defaultValueOrName;
        }

        return valueOrName;
      }

      return color;
    },
    get(attributeName, defaultValue) {
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

    getResponsiveValue(attributeName, viewport, defaultValue) {
      const attributeValues = settings[attributeName];

      if (attributeValues == null) {
        if (defaultValue == null) {
          throw new Error(`There is no ${attributeName} defined in theme`);
        } else {
          return defaultValue;
        }
      } else if (
        Array.isArray(attributeValues)
      ) {
        return attributeValues[viewport] || attributeValues[attributeValues.length - 1];
      }

      return attributeValues;
    },
  };
}
