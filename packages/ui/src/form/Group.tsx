import { createComponent, css, DSProps } from '@napred/browser';
import React, { ComponentType, ReactNode } from 'react';

import Row from '../layout/Row';

const BaseGroup: ComponentType<{ children?: ReactNode }> = ({ children, ...props }) => (
  <Row {...props}>{children}</Row>
);

const Group = createComponent('Group', BaseGroup, {
  style: ({ groupBorderRadius }: { groupBorderRadius?: string } & DSProps) => css`
    & > * {
      flex: 1;
      border-radius: 0;
    }

    & > *:first-child,
    & > *:first-child * {
      border-radius: ${groupBorderRadius || '3px'} 0 0 ${groupBorderRadius || '3px'};
    }

    & > *:last-child,
    & > *:last-child * {
      border-radius: 0 ${groupBorderRadius || '3px'} ${groupBorderRadius || '3px'} 0;
    }
  `,
});

export default Group;
