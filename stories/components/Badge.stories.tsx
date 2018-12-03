import { storiesOf } from '@storybook/react';
import React from 'react';

import { Badge } from '../../packages/ui/src';

const badgeStories = storiesOf('Components/Badge', module);

badgeStories.add('default badge', () => <Badge>react</Badge>);
