// @flow

export default function createVariants(propValue: string, cases: { [case: string]: any }) {
  return cases[propValue] || cases.default || '';
}
