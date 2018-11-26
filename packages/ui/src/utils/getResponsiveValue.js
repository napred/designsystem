// @flow

export default function getResponsiveValue(
  value: Array<string | number> | string | number,
  viewport: number,
) {
  if (Array.isArray(value)) {
    return value[viewport] || value[value.length - 1];
  }
  return value;
}
