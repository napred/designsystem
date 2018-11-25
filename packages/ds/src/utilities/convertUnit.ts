/**
 * Converts numerical unit to px or %
 *
 * if w is integer, final value will be in px
 * if w is float, final value will be in %
 * otherwise stringified value is returned if w is not a number
 */
export default function convertUnit(w: number | string): string {
  const num = Number(w);

  if (Number.isNaN(num)) {
    return w.toString();
  }

  const isInteger = w.toString().indexOf('.') === -1;

  return `${isInteger ? num : num * 100}${isInteger ? 'px' : '%'}`;
}
