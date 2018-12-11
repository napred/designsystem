import { storiesOf } from '@storybook/react';
import React from 'react';
import { DesignSystem } from '../../../native/src';
import { Image } from '../../../primitives/src';
import { Image as NativeImage } from '../../../primitives/src/native';

const imageStories = storiesOf('Primitives/Image', module);

imageStories.add('web', () => (
  <Image src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=2048&q=20" />
));

imageStories.add('native', () => (
  <DesignSystem>
    <NativeImage src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=2048&q=20" />
  </DesignSystem>
));
