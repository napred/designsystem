// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { MenuItem } from '../../packages/ui/src/Menu';
import Button from '../../packages/ui/src/form/Button';
import SelectMenu from '../../packages/ui/src/SelectMenu';
import Flex from '../../packages/primitives/src/Flex';

const selectMenuStories = storiesOf('Components/SelectMenu', module);

selectMenuStories.add('user button select', () => (
  <Flex bgColor="yellow">
    <SelectMenu
      title="User menu title"
      renderButton={(opened, set) => (
        <Button onBlur={() => set(false)} onClick={() => set(!opened)}>
          Username
        </Button>
      )}
      renderMenuContent={() => (
        <React.Fragment>
          <MenuItem button>Moje objednávky</MenuItem>
          <MenuItem button>Nastavení</MenuItem>
          <MenuItem button>Odhlásit se</MenuItem>
        </React.Fragment>
      )}
    />
  </Flex>
));
