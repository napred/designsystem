// @flow

import React from 'react';
import { css } from 'emotion';
import { createCleanTag, createComponent } from '@napred/ds';

const BaseListItem = createCleanTag('li');

function RoledListItem({ button, ...rest }: { button?: boolean }) {
  return <BaseListItem role={button ? 'button' : undefined} {...rest} />;
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
});

// $FlowExpectError
OrderedList.defaultProps = {
  p: 0,
};

const itemStyle = {
  style: {
    display: 'flex',
    listStyle: 'none',
    width: '100%',
  },
};

export const ListItem = createComponent('ListItem', RoledListItem, itemStyle);

export const ListSubheader = createComponent('ListSubheader', 'li', itemStyle);

// $FlowExpectError
ListSubheader.defaultProps = {
  px: 3,
  py: 2,
  bgColor: 'white',
  fontWeight: 600,
  fontSize: '0.9em',
};

// $FlowExpectError
ListItem.defaultProps = {
  px: 3,
  py: 2,
  bgColor: 'white',
  alignItems: 'center',
};

// $FlowExpectError
List.defaultProps = {
  p: 0,
  m: 0,
};
