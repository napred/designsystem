// @flow

import { renderStylesToString } from 'emotion-server';
import { renderToStaticMarkup } from 'react-dom/server';
import os from 'os';
import path from 'path';
import fs from 'fs';

export function renderPage(element: React$Element<*>, logCss?: boolean = false): string {
  const filePath = path.join(os.tmpdir(), `rendered-page-${Date.now()}.html`);

  const renderedView = renderStylesToString(renderToStaticMarkup(element));

  if (logCss) {
    // eslint-disable-next-line no-console
    console.log(renderedView);
  }

  fs.writeFileSync(
    filePath,
    `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Test</title>
      <style>
        * { box-sizing: border-box; }

        body, html {
          margin: 0;
          padding: 0;
          text-size-adjust: 100%;
        }
      </style>
    </head>
    <body>
      <div id="root">
        ${renderedView}
      </div>
    </body>
    </html>
  `.trim(),
  );

  return filePath;
}
