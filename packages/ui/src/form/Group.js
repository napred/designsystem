// @flow

import { createCssStyle, createComponent } from '@napred/ds';
import { css } from 'emotion';
import React, { type ComponentType } from 'react';

import Row from '../layout/Row';

const BaseGroup: ComponentType<{ children?: any }> = ({ children, ...props }) => (
  <Row {...props}>{children}</Row>
);

const Group = createComponent('Group', BaseGroup, {
  styles: [
    createCssStyle(
      [],
      css`
        & > * {
          flex: 1;
          border-radius: 0;
        }

        & > *:first-child,
        & > *:first-child * {
          border-radius: 3px 0 0 3px;
        }

        & > *:last-child,
        & > *:last-child * {
          border-radius: 0 3px 3px 0;
        }
      `,
    ),
  ],
});

export default Group;
