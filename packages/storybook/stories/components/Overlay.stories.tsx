import { storiesOf } from '@storybook/react';
import React from 'react';
import { Overlay } from '../../../ui/src';

const overlayStories = storiesOf('Components/Overlay', module);

overlayStories.add('renders overlay to portal', () => <Overlay containerId="overlay-root" />);
