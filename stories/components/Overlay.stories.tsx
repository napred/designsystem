import { Overlay } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const overlayStories = storiesOf('Components/Overlay', module);

overlayStories.add('renders overlay to portal', () => <Overlay containerId="overlay-root" />);
