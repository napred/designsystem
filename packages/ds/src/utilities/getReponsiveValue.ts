type AllowedValueType = string | number | null | undefined; // null means that it is turned off for given breakpoint

/**
 * Gets responsive value from user specified value or default value
 *
 * It fills undefined in default value with previous value from defaults
 * If prop is longer or equal to default it will fill undefined with respective values from default
 *
 * If breakpoint exceeds the lengths, then it will return the last value
 *
 * @param breakpoint - current breakpoint
 * @param value - user specified value
 * @param defaultValue - default value
 *
 * @returns The value
 */
export default function getResponsiveValue(
  breakpoint: number,
  value: AllowedValueType[],
  defaultValue: AllowedValueType | AllowedValueType[],
): string | number | null {
  const defaultLength = Array.isArray(defaultValue)
    ? defaultValue.length
    : defaultValue !== undefined
    ? 1
    : 0;
  const valueLength = value.length;
  const maxLength = Math.max(valueLength, defaultLength);
  let currentValue;
  let currentDefault;

  if (value[breakpoint] === null) {
    return null;
  }

  // if there are no defaults, then just return tha value according to user provided values
  if (defaultValue === undefined) {
    for (let i = 0; i < valueLength; i++) {
      currentValue = value[i] === undefined ? currentValue : value[i];

      if (i === breakpoint) {
        break;
      }
    }

    return currentValue === undefined ? null : currentValue;
  }

  const defaultValues = Array.isArray(defaultValue)
    ? defaultValue
    : Array(maxLength).fill(defaultValue);

  // if defaults are longer than user provided values
  // then use last value from them
  for (let i = 0; i < maxLength; i++) {
    currentDefault = defaultValues[i] === undefined ? currentDefault : defaultValues[i];
    currentValue = value[i] === null ? null : value[i] === undefined ? currentDefault : value[i];

    if (i === breakpoint) {
      break;
    }
  }

  return currentValue === undefined ? null : currentValue;
}
