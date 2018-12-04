import { createComponent, createCssStyle, DSProps } from '@napred/ds';
import { css, keyframes } from 'emotion';
import React from 'react';

const LoadingDotsWrapper = createComponent('LoadingDotsWrapper', 'div', {
  style: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: 1.3,
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

const LoadingDot = createComponent<{ animationDelay?: string; dark?: boolean }>(
  'LoadingDot',
  'div',
  {
    styles: [
      createCssStyle(
        ['dark', 'animationDelay'],
        ({ dark, animationDelay }, { theme }) => css`
          border-radius: 50%;
          height: 0.6em;
          margin: 0 0.2em;
          width: 0.6em;
          border: 0.1em solid ${dark ? theme.get('colors', 'turqoiseDark') : theme.get('colors', 'greyLightest')};

          animation: ${loadingDotAnimation} 1s ease infinite;
          animation-delay: ${animationDelay || '0ms'};
          transform: scale(0);
        `,
      ),
    ],
  },
);

export interface IProps extends DSProps {
  dark?: boolean;
}

export default function LoadingDots({ dark, ...restProps }: IProps) {
  return (
    <LoadingDotsWrapper {...restProps}>
      <LoadingDot dark={dark} />
      <LoadingDot dark={dark} animationDelay="200ms" />
      <LoadingDot dark={dark} animationDelay="400ms" />
    </LoadingDotsWrapper>
  );
}
