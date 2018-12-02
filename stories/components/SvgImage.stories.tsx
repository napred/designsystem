import { CloseIcon, SvgImage } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const svgImageStories = storiesOf('Components/SvgImage', module);

svgImageStories.add('imported svg image as children', () => (
  <SvgImage fontSize={5}>
    <CloseIcon />
  </SvgImage>
));

svgImageStories.add('imported svg image as icon', () => <SvgImage icon={CloseIcon} fontSize={5} />);
