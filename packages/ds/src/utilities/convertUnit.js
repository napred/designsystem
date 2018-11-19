// @flow

export default function convertUnit(w: number | string): string {
  const num = Number(w);

  if (Number.isNaN(num)) {
    return w.toString();
  }

  const isInteger = w.toString().indexOf('.') === -1;

  return `${isInteger ? num : num * 100}${isInteger ? 'px' : '%'}`;
}
