import { createComponent, createStyle, css } from '@napred/browser';

const Textarea = createComponent<{}>('Textarea', 'textarea', {
  styles: [
    createStyle(
      [],
      (_, { theme }) => css`
        transition: all 0.3s ease;
        font-family: inherit;
        appearance: none;

        &:focus {
          outline: 0;
          border-color: ${theme.get('color', 'primary')};
        }
        &:disabled {
          opacity: 1/4;
        }
      `,
    ),
  ],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Textarea.defaultProps = {
  borderColor: 'greyLight',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: 1,
  my: 0,
  p: 2,
};

export default Textarea;
