import { createComponent, createStyle, css, DSProps } from '@napred/browser';
import { arrayize, getResponsiveValue } from '@napred/ds';

export interface IProps extends DSProps {
  checked?: boolean;
  disabled?: boolean;
  height?: number;
}

const Toggle = createComponent<IProps>('Toggle', 'div', {
  styles: [
    createStyle(
      ['disabled', 'height', 'checked', 'borderWidth'],
      ({ disabled, height, checked, borderWidth }, { theme, viewport }) => {
        return css`
          cursor: pointer;
          display: inline-flex;
          background-color: ${checked ? theme.color('primary') : theme.color('greyLight')};
          transition-property: background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-out;
          user-select: none;
          ${disabled
            ? css`
                cursor: not-allowed;
                filter: grayscale(10%);
                opacity: 0.6;
              `
            : ''}
          &::after {
            content: ' ';
            width: calc(
              ${height}px -
                ${Number(getResponsiveValue(viewport, arrayize(borderWidth), 0)) * 4}px
            );
            height: calc(
              ${height}px -
                ${Number(getResponsiveValue(viewport, arrayize(borderWidth), 0)) * 4}px
            );
            border-radius: 16px;
            margin: ${2 * Number(getResponsiveValue(viewport, arrayize(borderWidth), viewport))}px;
            background-color: ${theme.get('color', 'white')};
            transition-property: transform, color;
            transition-duration: 0.1s;
            transition-timing-function: ease-out;
            transform: ${checked ? 'translateX(16px)' : 'translateX(0)'};
          }
          &:focus {
            outline: 0;
          }
        `;
      },
      ['height', 'borderWidth'],
    ),
  ],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Toggle.defaultProps = {
  borderColor: 'grey',
  borderRadius: 3,
  borderStyle: 'transparent',
  borderWidth: 1,
  disabled: false,
  height: 24,
  role: 'checkbox',
  width: 40,
};

export default Toggle;
