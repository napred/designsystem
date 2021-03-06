import { storiesOf } from '@storybook/react';
import React from 'react';
import { CloseIcon, SvgImage } from '../../../ui/src';

const svgImageStories = storiesOf('Components/SvgImage', module);

svgImageStories.add('imported svg image as children', () => (
  <SvgImage fontSize={5}>
    <CloseIcon />
  </SvgImage>
));

svgImageStories.add('imported svg image as icon', () => <SvgImage icon={CloseIcon} fontSize={5} />);
