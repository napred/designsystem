// @flow

import React from 'react';
import { DesignSystemConsumer } from '../';
import type { SystemComponentProps } from '../types';

type IfViewportProps = {
  children: () => React$Node,
  gt?: number,
  gte?: number,
  is?: number | Array<number>,
  lt?: number,
  lte?: number,
};

export default class IfViewport extends React.Component<IfViewportProps> {
  renderChildren = (system: SystemComponentProps) => {
    const { children, gt, gte, is, lt, lte } = this.props;

    if (is != null) {
      if (Array.isArray(is) && is.includes(system.viewport)) {
        return children();
      }
      if (is === system.viewport) {
        return children();
      }
    } else if (gt != null && system.viewport > gt) {
      return children();
    } else if (lt != null && system.viewport < lt) {
      return children();
    } else if (gte != null && system.viewport >= gte) {
      return children();
    } else if (lte != null && system.viewport <= lte) {
      return children();
    }

    return null;
  };

  render() {
    return <DesignSystemConsumer>{this.renderChildren}</DesignSystemConsumer>;
  }
}
