/**
 * Cleans props from props that should not be rendered to HTML
 */
export default function cleanProps(
  /** Props that should be cleaned */
  props: { [key: string]: any },
  /** List of props that should be stripped */
  blacklist: string[],
): { [key: string]: any } {
  return Object.keys(props).reduce((result, propName) => {
    if (blacklist.includes(propName)) {
      return result;
    }

    return { ...result, [propName]: props[propName] };
  }, {});
}
