// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BooleanValue } from 'react-values';
import { storiesOf } from '@storybook/react';

import Menu, { MenuItem, MenuSubheader } from '../../packages/ui/src/Menu';
import Button from '../../packages/ui/src/form/Button';
import { CloseIcon } from '../../packages/ui/src/assets';
import SvgImage from '../../packages/ui/src/SvgImage';

const menuStories = storiesOf('Components/Menu', module);

menuStories.add('simple menu', () => (
  <BooleanValue defaultValue={false}>
    {({ set, value }) => (
      <React.Fragment>
        <Button
          onClick={() => {
            set(!value);
          }}
        >
          open
        </Button>
        <Menu open={value}>
          <MenuItem button>menu item no.1</MenuItem>
          <MenuItem button>menu item no.2</MenuItem>
          <MenuItem button>menu item no.3</MenuItem>
        </Menu>
      </React.Fragment>
    )}
  </BooleanValue>
));

menuStories.add('menu with icons', () => (
  <BooleanValue defaultValue={false}>
    {({ set, value }) => (
      <React.Fragment>
        <Button
          onClick={() => {
            set(!value);
          }}
        >
          open
        </Button>
        <Menu open={value}>
          <MenuItem button>
            <SvgImage>
              <CloseIcon />
            </SvgImage>
            Booze
          </MenuItem>
          <MenuSubheader>Other booze</MenuSubheader>
          <MenuItem button>
            <SvgImage>
              <CloseIcon />
            </SvgImage>
            Tipple
          </MenuItem>
          <MenuItem button>
            <SvgImage>
              <CloseIcon />
            </SvgImage>
            Gin
          </MenuItem>
        </Menu>
      </React.Fragment>
    )}
  </BooleanValue>
));
