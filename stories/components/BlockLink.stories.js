// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import BlockLink from '../../packages/ui/src/BlockLink';

const linkStories = storiesOf('Components/BlockLink', module);

linkStories.add('default', () => (
  <BlockLink bgColor="#ccc" href="/" p={2} width="50%">
    Block link
  </BlockLink>
));
