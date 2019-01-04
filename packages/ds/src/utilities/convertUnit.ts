/**
 * Converts numerical unit (e.g. 10px, 1rem, etc) or just number to css unit
 *
 * If the unit is an integer, it will return value in px
 * If the unit is not a numerical unit, it will return the value as is
 *
 * @param unit (e.g. 10px, 1rem, 1, 1 / 2, 3%)
 * @param multiplier optional multiplier
 * @param defaultUnit if number is passed, this is returned unit for integer
 */
export default function convertUnit(
  unit: number | string,
  multiplier: number = 1,
  unitType?: string,
): string {
  const num = Number(unit);

  if (Number.isNaN(num)) {
    // try to parse value and units
    return (unit as string).replace(
      /^(-?\d+(?:\.\d+)?)(?:\s*([a-zA-Z%]+))?$/,
      (_, parsedNumber, parsedUnit) => {
        return convertUnit(parsedNumber, multiplier, parsedUnit);
      },
    );
  }

  const isInt = Number.isInteger(num);

  if (isInt) {
    return `${num * multiplier}${unitType || 'px'}`;
  } else if (unitType != null) {
    return `${num * multiplier}${unitType}`;
  }

  // return value in percents
  return `${num * multiplier * 100}%`;
}
