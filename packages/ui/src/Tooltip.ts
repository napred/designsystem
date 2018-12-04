import { createComponent } from '@napred/ds';
import { css } from 'emotion';

import Message from './Message';
import createVariants from './styles/createVariants';

type TooltipVariants = 'default' | 'error' | 'warning' | 'success';

const tooltipVariants = createVariants<any, { variant?: TooltipVariants }>('variant', {
  default: (_, { theme }) => css`
    background-color: ${theme.color('blue', 'transparent')};

    &:before {
      border-bottom-color: ${theme.color('blue', 'transparent')};
    }
  `,
  error: (_, { theme }) => css`
    background-color: ${theme.color('red', 'transparent')};

    &:before {
      border-bottom-color: ${theme.color('red', 'transparent')};
    }
  `,
  success: (_, { theme }) => css`
    background-color: ${theme.color('green', 'transparent')};

    &:before {
      border-bottom-color: ${theme.color('green', 'transparent')};
    }
  `,
  warning: (_, { theme }) => css`
    background-color: ${theme.color('orange', 'transparent')};

    &:before {
      border-bottom-color: ${theme.color('orange', 'transparent')};
    }
  `,
});

const Tooltip = createComponent<{ error?: any }>('Tooltip', Message, {
  style: ({ error }, { theme }) => css`
    position: absolute;
    border-radius: 2px;
    pointer-events: none;

    &::before {
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      z-index: 100;
      top: 0;
      margin-top: -12px;
      border: solid transparent;
      border-color: rgba(60, 60, 60, 0);
      border-bottom-color: ${error
        ? theme.color('red', 'transparent')
        : theme.color('blue', 'transparent')};
      border-width: 6px;
    }
  `,
  styles: [tooltipVariants],
});

export default Tooltip;
