// @flow

import { css } from 'emotion';
import { createComponent } from '@napred/ds';

const Nav = createComponent('Nav', 'nav', {
  defaultProps: {
    alignItems: 'stretch',
    display: 'flex',
    position: 'relative',
    left: 0,
    m: 0,
    p: 0,
    right: 0,
    shadow: '0px -2px 10px -1px rgba(0, 0, 0, 0.5)',
    top: 0,
    zIndex: 30,
    width: '100%',
  },
});

export const NavItem = createComponent('NavItem', 'div', {
  style: {
    cursor: 'pointer',
  },
  defaultProps: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    px: 2,
    py: 1,
  },
});

export const NavStart = createComponent('NavStart', 'div', {
  defaultProps: {
    display: 'flex',
    justifyContent: 'flex-start',
    mr: 'auto',
  },
});

export const NavEnd = createComponent('NavEnd', 'div', {
  style: css`
    &::before {
      content: '';
      flex: 1;
      margin-right: auto;
    }
  `,
  defaultProps: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1',
    ml: 'auto',
  },
});

export const NavBrand = createComponent('NavBrand', 'div', {
  defaultProps: {
    alignItems: 'stretch',
    dislay: 'flex',
    flexShrink: 0,
    maxWidth: '100%',
  },
});

export default Nav;
