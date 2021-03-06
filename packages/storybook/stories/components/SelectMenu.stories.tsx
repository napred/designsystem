import { storiesOf } from '@storybook/react';
import React from 'react';
import { Flex } from '../../../primitives/src';
import { Button, MenuItem, SelectMenu } from '../../../ui/src';

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
