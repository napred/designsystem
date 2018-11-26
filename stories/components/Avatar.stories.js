// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Avatar from '../../packages/ui/src/Avatar';

const avatarStories = storiesOf('Components/Avatar', module);

avatarStories.add('default avatar', () => (
  <Avatar src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
));
