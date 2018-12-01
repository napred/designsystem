import { Image } from '@napred/primitives';
import { storiesOf } from '@storybook/react';
import React from 'react';

const imageStories = storiesOf('Components/Image', module);

imageStories.add('default fullscreen image', () => (
  <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
));
