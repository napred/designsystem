import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { BooleanValue } from 'react-values';
import { Button, CloseIcon, Menu, MenuItem, MenuSubheader, SvgImage } from '../../../ui/src';

const menuStories = storiesOf('Components/Menu', module);

menuStories.add('simple menu', () => (
  <BooleanValue defaultValue={false}>
    {({ set, value }: { set: (val: boolean) => any; value: boolean }) => (
      <Fragment>
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
      </Fragment>
    )}
  </BooleanValue>
));

menuStories.add('menu with icons', () => (
  <BooleanValue defaultValue={false}>
    {({ set, value }: { set: (val: boolean) => any; value: boolean }) => (
      <Fragment>
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
      </Fragment>
    )}
  </BooleanValue>
));
