// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Image from '../../packages/primitives/src/Image';

const imageStories = storiesOf('Components/Image', module);

imageStories.add('default fullscreen image', () => (
  <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
));
