import { IStyler, ITheme } from '@napred/ds';
import transform from 'css-to-react-native';
import { RegisteredStyle, StyleSheet } from 'react-native';
import Stylis from 'stylis';

const ROOT_CLASS_NAME = '$$root';

function createPlugin() {
  const result: Array<[string, string]> = [];

  return function toArrayPlugin(context: number, content: string, selectors: string[]) {
    if (context === -2) {
      // end
      return result;
    }

    if (context === 1) {
      // we are on line
      if (selectors.length === 1 && selectors[0] === ROOT_CLASS_NAME) {
        // we accept only root styles
        // split line by first : so we get the name of property and value
        const separatorIndex = content.indexOf(':');

        result.push([
          content.substring(0, separatorIndex),
          content.substring(separatorIndex + 1).trim(),
        ]);
      }
    }
  };
}

export default function applyStyles(
  /** Props passed to component */
  props: { [key: string]: any },
  /** Design system */
  system: { theme: ITheme; viewport: number },
  /** All collected styles for component */
  styles: Array<IStyler<any>>,
): { default: RegisteredStyle<any> } {
  const parser = new Stylis();
  parser.use(createPlugin());

  // styler can return only style object or css string
  // we need to convert it to array of tuples of property and value
  const tuples = styles.reduce(
    (result, style) => {
      const appliedStyle = style.apply(props, system);

      // convert css string to tuples
      if (typeof appliedStyle === 'string') {
        const rules = parser(ROOT_CLASS_NAME, appliedStyle);

        return [...result, ...rules];
      } else if (
        typeof appliedStyle === 'object' &&
        appliedStyle != null &&
        !Array.isArray(appliedStyle)
      ) {
        // style object to tuples
        return Object.keys(appliedStyle as { [property: string]: string }).reduce(
          (acc, property) => [
            ...acc,
            // convert value to string because css-to-react-native will throw
            // because it will try to call .trim() on value
            [property, appliedStyle[property].toString()] as [string, string],
          ],
          result,
        );
      } else {
        throw new Error(
          `Invalid style result ${typeof appliedStyle}. Only css string or css object is accepted`,
        );
      }
    },
    [] as Array<[string, string]>,
  );

  return StyleSheet.create({
    default: transform(tuples),
  });
}
