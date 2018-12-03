import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Drawer } from '../../packages/ui/src';

const drawerStories = storiesOf('Components/Drawer', module);

drawerStories.add('empty drawer on right side', () => (
  <Drawer open side="right" bgColor="greyLighter">
    this drawer is empty
  </Drawer>
));

drawerStories.add('empty drawer with overlay', () => (
  <Drawer open side="right" bgColor="greyLighter" overlayed>
    this drawer is empty and overlayed
  </Drawer>
));
