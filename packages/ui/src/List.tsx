import { createComponent, css } from '@napred/browser';
import React from 'react';

function BaseListItem({ button, ...rest }: { button?: boolean }) {
  return <li role={button ? 'button' : undefined} {...rest} />;
}

export const List = createComponent('List', 'ul', {
  style: (_, { theme }) => css`
    display: block;
    list-style: none;

    & > *[role='button'] {
      cursor: pointer;
      user-select: none;
    }

    & > *[role='button']:hover {
      background-color: ${theme.color('greyLighter')};
    }
  `,
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
List.defaultProps = {
  m: 0,
  p: 0,
};

export const OrderedList = createComponent('OrderedList', 'ol', {
  style: (_, { theme }) =>
    css`
      display: block;
      list-style: decimal;

      & > *[role='button'] {
        cursor: pointer;
        user-select: none;
      }

      & > *[role='button']:hover {
        background-color: ${theme.color('greyLighter')};
      }
    `,
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
OrderedList.defaultProps = {
  p: 0,
};

const itemStyle = {
  display: 'flex',
  listStyle: 'none',
  width: '100%',
};

export const ListItem = createComponent('ListItem', BaseListItem, {
  style: itemStyle,
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
ListItem.defaultProps = {
  alignItems: 'center',
  bgColor: 'white',
  px: 3,
  py: 2,
};

export const ListSubheader = createComponent('ListSubheader', 'li', {
  style: itemStyle,
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
ListSubheader.defaultProps = {
  bgColor: 'white',
  fontSize: '0.9em',
  fontWeight: 600,
  px: 3,
  py: 2,
};
