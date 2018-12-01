import { createComponent } from '@napred/ds';
import { css } from 'emotion';

const Nav = createComponent('Nav', 'nav');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Nav.defaultProps = {
  alignItems: 'stretch',
  display: 'flex',
  left: 0,
  m: 0,
  p: 0,
  position: 'relative',
  right: 0,
  shadow: '0px -2px 10px -1px rgba(0, 0, 0, 0.5)',
  top: 0,
  width: '100%',
  zIndex: 30,
};

export const NavItem = createComponent('NavItem', 'div', {
  style: {
    cursor: 'pointer',
  },
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
NavItem.defaultProps = {
  alignItems: 'center',
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  px: 2,
  py: 1,
};

export const NavStart = createComponent('NavStart', 'div');

// temporary fix because if we use defaultProps in config object
// it will require them :(
NavStart.defaultProps = {
  display: 'flex',
  justifyContent: 'flex-start',
  mr: 'auto',
};

export const NavEnd = createComponent('NavEnd', 'div', {
  style: css`
    &::before {
      content: '';
      flex: 1;
      margin-right: auto;
    }
  `,
});

NavEnd.defaultProps = {
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-start',
  ml: 'auto',
};

// temporary fix because if we use defaultProps in config object
// it will require them :(

export const NavBrand = createComponent('NavBrand', 'div');

// temporary fix because if we use defaultProps in config object
// it will require them :(
NavBrand.defaultProps = {
  alignItems: 'stretch',
  dislay: 'flex',
  flexShrink: 0,
  maxWidth: '100%',
};

export default Nav;
