// @flow

import { css } from 'emotion';
import { createComponent, type StyleFn } from '@napred/ds';

import createVariants from './styles/createVariants';
import Message from './Message';

type TooltipVariants = 'default' | 'error' | 'warning' | 'success';

// $FlowExpectError
const tooltipVariants: StyleFn<{ variant?: TooltipVariants }> = createVariants('variant', {
  error: (props, { theme }) => css`
    background-color: ${theme.get('color', 'red')};

    &:before {
      border-bottom-color: ${theme.get('color', 'red')};
    }
  `,
  warning: (props, { theme }) => css`
    background-color: ${theme.get('color', 'orange')};

    &:before {
      border-bottom-color: ${theme.get('color', 'orange')};
    }
  `,
  success: (props, { theme }) => css`
    background-color: ${theme.get('color', 'green')};

    &:before {
      border-bottom-color: ${theme.get('color', 'green')};
    }
  `,
  default: (props, { theme }) => css`
    background-color: ${theme.get('color', 'blue')};

    &:before {
      border-bottom-color: ${theme.get('color', 'blue')};
    }
  `,
});

const Tooltip = createComponent('Tooltip', Message, {
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
      border-bottom-color: ${error ? theme.get('colors', 'red') : theme.get('color', 'blue')};
      border-width: 6px;
    }
  `,
  tooltipVariants,
  defaultProps: {
    variant: 'default',
  },
});

export default Tooltip;
