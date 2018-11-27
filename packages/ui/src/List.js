// @flow

import React from 'react';
import { css } from 'emotion';
import { createComponent } from '@napred/ds';

function BaseListItem({ button, ...rest }: { button?: boolean }) {
  return <li role={button ? 'button' : undefined} {...rest} />;
}

export const List = createComponent('List', 'ul', {
  style: (props, { theme }) => css`
    display: block;
    list-style: none;

    & > *[role='button'] {
      cursor: pointer;
      user-select: none;
    }

    & > *[role='button']:hover {
      background-color: ${theme.get('color', 'greyLighter')};
    }
  `,
  defaultProps: {
    p: 0,
    m: 0,
  },
});

export const OrderedList = createComponent('OrderedList', 'ol', {
  style: (props, { theme }) =>
    css`
      display: block;
      list-style: decimal;

      & > *[role='button'] {
        cursor: pointer;
        user-select: none;
      }

      & > *[role='button']:hover {
        background-color: ${theme.get('color', 'greyLighter')};
      }
    `,
  defaultProps: {
    p: 0,
  },
});

const itemStyle = {
  display: 'flex',
  listStyle: 'none',
  width: '100%',
};

export const ListItem = createComponent('ListItem', BaseListItem, {
  style: itemStyle,
  defaultProps: {
    px: 3,
    py: 2,
    bgColor: 'white',
    alignItems: 'center',
  },
});

export const ListSubheader = createComponent('ListSubheader', 'li', {
  style: itemStyle,
  defaultProps: {
    px: 3,
    py: 2,
    bgColor: 'white',
    fontWeight: 600,
    fontSize: '0.9em',
  },
});
