import { storiesOf } from '@storybook/react';
import React from 'react';

import { Avatar } from '@napred/ui';

const avatarStories = storiesOf('Components/Avatar', module);

avatarStories.add('default avatar', () => (
  <Avatar src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
));
