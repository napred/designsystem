// @flow

import { css } from 'emotion';
import defaultTheme from '../../defaultTheme';
import { createNullCache } from '../../cache';
import { createSystem } from '../../system';
import { createCssStyle, createStyleApplicator } from '../';

describe('createCssStyle', () => {
  const system = createSystem({
    cache: createNullCache(),
    styleApplicatorFactory: createStyleApplicator,
    theme: defaultTheme,
  });

  it('works with simple string', () => {
    const styler = createCssStyle(
      ['color'],
      `
        color: blue;
      `,
    );

    expect(styler.propNames).toEqual(['color']);
    expect(styler.stripProps).toEqual(['color']);
    expect(styler.apply({}, system)).toEqual('css-1aj1g6z');
  });

  it('works with simple style', () => {
    const styler = createCssStyle(
      ['color'],
      css`
        color: blue;
      `,
    );

    expect(styler.propNames).toEqual(['color']);
    expect(styler.stripProps).toEqual(['color']);
    expect(styler.apply({}, system)).toEqual('css-1aj1g6z');
  });

  it('works with simple object', () => {
    const styler = createCssStyle(['color'], { color: 'blue' });

    expect(styler.propNames).toEqual(['color']);
    expect(styler.stripProps).toEqual(['color']);
    expect(styler.apply({}, system)).toEqual('css-14ksm7b');
  });

  it('works with function', () => {
    const styler = createCssStyle(
      ['color'],
      props =>
        css`
          color: ${props.color};
        `,
    );

    expect(styler.propNames).toEqual(['color']);
    expect(styler.stripProps).toEqual(['color']);
    expect(styler.apply({ color: 'blue' }, system)).toEqual('css-b0nm20');
  });
});
