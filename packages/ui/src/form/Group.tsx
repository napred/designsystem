import { createComponent, css, DSProps } from '@napred/browser';
import React, { ComponentType, ReactNode } from 'react';
import { Flex } from '@napred/primitives';

const BaseGroup: ComponentType<{ children?: ReactNode }> = ({ children, ...props }) => (
  <Flex {...props}>{children}</Flex>
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

Group.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
};

export default Group;
