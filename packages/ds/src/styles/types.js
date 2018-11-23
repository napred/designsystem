// @flow

import type { System } from '../system';

export type Styler<TProps: *> = {
  apply: (props: TProps, designSystem: System) => any,
  propNames: Array<string>,
  stripProps: Array<string>,
};
