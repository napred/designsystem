import { injectGlobal } from 'emotion';
import { useMemo } from 'react';
import { SystemAPI } from '../system';

function formatFontImports(imports: string[]): string {
  const css = imports.join(';');

  if (css !== '') {
    return `${css};`;
  }

  return '';
}

export default function useStyleReset(system: SystemAPI): void {
  // call it only once
  useMemo(
    () => {
      // tslint:disable-next-line:no-unused-expression
      injectGlobal`
      ${formatFontImports(system.theme.get('importFonts', []))}
      
      html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        color: ${system.theme.get('colors', 'greyDark')};
        font-family: ${system.theme.get('fonts', 'default')};
        /* https://github.com/necolas/normalize.css/blob/7369f566898b8cefc2649b6a66e112857de4c46f/normalize.css#L8-L13 */
        text-size-adjust: 100%;
      }
      *, *::before, *::after {
        box-sizing: inherit;
      }
      
      body {
        margin: 0;
        padding: 0;
      }
      ul {
        list-style: none;
      }
    `;
    },
    [true],
  );
}
