export default function formatStyleResult(
  value: null | undefined | string | number,
  cssAttributes: string[],
  formatter: (val: string | number) => string | number,
): { [cssAttr: string]: string | number } {
  if (value == null) {
    return {};
  }

  const formattedValue = formatter(value);

  if (cssAttributes.length === 1) {
    return { [cssAttributes[0]]: formattedValue };
  }

  return cssAttributes.reduce((res, attrName) => ({ ...res, [attrName]: formattedValue }), {});
}
