import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image } from '../../../primitives/src';

const imageStories = storiesOf('Components/Image', module);

imageStories.add('default fullscreen image', () => (
  <Image src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=2048&q=20" />
));
