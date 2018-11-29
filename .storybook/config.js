import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { DesignSystem } from '@napred/ds';

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

addDecorator(storyFn => {
  return <DesignSystem>{storyFn()}</DesignSystem>;
});

configureViewport({
  defaultViewport: 'iphone6',
  viewports: {
    iphone5: {
      name: 'iPhone 5/SE',
      styles: {
        height: '558px',
        width: '320px',
      },
      type: 'mobile',
    },
    iphone6: {
      name: 'iPhone 6/7/8',
      styles: {
        height: '667px',
        width: '375px',
      },
      type: 'mobile',
    },
    iphone6p: {
      name: 'iPhone 6/7/8 Plus',
      styles: {
        height: '736px',
        width: '414px',
      },
      type: 'mobile',
    },
    iphonex: {
      name: 'iPhone X',
      styles: {
        height: '812px',
        width: '375px',
      },
      type: 'mobile',
    },
    ipad: {
      name: 'iPad',
      styles: {
        height: '1024px',
        width: '768px',
      },
      type: 'tablet',
    },
    ipadpro: {
      name: 'iPad Pro',
      styles: {
        height: '1366px',
        width: '1024px',
      },
      type: 'tablet',
    },
    fullhd: {
      name: 'Desktop Full HD',
      styles: {
        height: '900px',
        width: '1920px',
      },
      type: 'desktop',
    },
    xxl: {
      name: 'Desktop XXL',
      styles: {
        height: '1100px',
        width: '2048px',
      },
      type: 'desktop',
    },
    responsive: {
      name: 'Responsive',
      styles: {
        width: '100%',
        height: '100%',
        border: 'none',
        display: 'block',
        boxShadow: 'none',
      },
      type: 'desktop',
    },
  },
});

configure(loadStories, module);
