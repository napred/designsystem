import { storiesOf } from '@storybook/react';
import React from 'react';
import { BlockLink } from '../../../ui/src';

const linkStories = storiesOf('Components/BlockLink', module);

linkStories.add('default', () => (
  <BlockLink bgColor="#ccc" href="/" p={2} width="50%">
    Block link
  </BlockLink>
));
