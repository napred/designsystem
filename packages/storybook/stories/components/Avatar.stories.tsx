import { storiesOf } from '@storybook/react';
import React from 'react';

import { Avatar } from '../../../ui/src';

const avatarStories = storiesOf('Components/Avatar', module);

avatarStories.add('default avatar', () => (
  <Avatar src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=2048&q=20" />
));
