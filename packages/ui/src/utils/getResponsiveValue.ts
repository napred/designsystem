export default function getResponsiveValue<T>(value: T[] | T, viewport: number): T {
  if (Array.isArray(value)) {
    return value[viewport] || value[value.length - 1];
  }
  return value;
}
