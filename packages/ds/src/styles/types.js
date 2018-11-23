// @flow

import type { System } from '../context';

export type Styler<TProps: *> = {
  apply: (props: TProps, designSystem: System) => any,
  propNames: Array<string>,
  stripProps: Array<string>,
};
