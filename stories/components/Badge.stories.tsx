import { storiesOf } from '@storybook/react';
import React from 'react';

import { Badge } from '@napred/ui';

const badgeStories = storiesOf('Components/Badge', module);

badgeStories.add('default badge', () => <Badge>react</Badge>);
