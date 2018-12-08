import { createComponent, createStyle, css } from '@napred/browser';

const Input = createComponent('Input', 'input', {
  styles: [
    createStyle(
      [],
      (_, { theme }) => css`
        transition: all 0.3s ease;

        &:focus {
          outline: 0;
          border-color: ${theme.get('colors', 'primary')};
        }
      `,
    ),
  ],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Input.defaultProps = {
  borderColor: 'greyLight',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: 1,
  m: 0,
  p: 2,
};

export default Input;
