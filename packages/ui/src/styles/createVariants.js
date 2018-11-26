// @flow

export default function createVariants(propName: string, cases: { [case: string]: any }) {
  return (props: any) => cases[props[propName]] || cases.default || '';
}
