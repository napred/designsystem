import { DesignSystem } from '@napred/native';
import React, { ReactNode } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
// @ts-ignore
import { AppRegistry } from 'react-native-web';

export function render(component: ReactNode) {
  // register the app
  AppRegistry.registerComponent('App', () => () => <DesignSystem>{component}</DesignSystem>);

  // prerender the app
  const { element, getStyleElement } = AppRegistry.getApplication('App', {});
  // first the element
  const html = renderToString(element);
  // then the styles (optionally include a nonce if your CSP policy requires it)
  const css = renderToStaticMarkup(getStyleElement());

  // example HTML document string
  const document = `
    <!DOCTYPE html>
    <html>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body, #root { height: 100% }
      body { overflow-y: hidden; }
      #root { display: flex; }
    </style>
    ${css}
    <body>
    <div id="root">
    ${html}
    </div>
  `;

  page.setContent(document);
}
