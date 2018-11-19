// @flow

import React, { type ComponentType } from 'react';
import omit from './omit';

type Props = {
  as?: string | ComponentType<any>,
  blacklist?: Array<string>,
};

export default function createCleanTag<T: Object>(
  tag: string | ComponentType<T>,
  defaultBlacklist?: Array<string> = [],
): ComponentType<T & Props> {
  // $FlowExpectError
  return React.forwardRef(({ as: Tag = tag, blacklist = defaultBlacklist, ...rest }, ref) =>
    React.createElement(Tag, {
      ref,
      ...omit(rest, blacklist),
    }),
  );
}
