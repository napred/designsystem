// @flow

import { createCssStyle, createComponent } from '@napred/ds';
import { css, keyframes } from 'emotion';
import React from 'react';

const LoadingDotsWrapper = createComponent('LoadingDotsWrapper', 'div', {
  style: {
    alignItems: 'center',
    display: 'inline-flex',
    lineHeight: 1.3,
    justifyContent: 'center',
  },
});

const loadingDotAnimation = keyframes`
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;

const LoadingDot = createComponent('LoadingDot', 'div', {
  styles: [
    createCssStyle(
      ['dark', 'animationDelay'],
      ({ dark, animationDelay }, { theme }) => css`
        border-radius: 50%;
        border: 0.1em solid ${theme.get('color', 'greyLightest')};
        height: 0.6em;
        margin: 0 0.2em;
        width: 0.6em;

        ${dark
          ? css`
              border: 0.1em solid ${theme.get('color', 'turqoiseDark')};
            `
          : css`
              border: 0.1em solid ${theme.get('color', 'greyLightest')};
            `};

        animation: ${loadingDotAnimation} 1s ease infinite;
        animation-delay: ${animationDelay || '0ms'};
        transform: scale(0);
      `,
    ),
  ],
});

export default function LoadingDots({ dark, ...restProps }: { dark?: boolean }) {
  return (
    <LoadingDotsWrapper className="a-ld" {...restProps}>
      <LoadingDot dark={dark} />
      <LoadingDot dark={dark} animationDelay="200ms" />
      <LoadingDot dark={dark} animationDelay="400ms" />
    </LoadingDotsWrapper>
  );
}
