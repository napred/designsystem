// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Overlay from '../../packages/ui/src/Overlay';

const overlayStories = storiesOf('Components/Overlay', module);

overlayStories.add('renders overlay to portal', () => <Overlay containerId="overlay-root" />);
