// @flow

import { css } from 'emotion';
import { createSystem } from '../../context';
import { createCssStyle } from '../';

describe('createCssStyle', () => {
  it('works with simple style', () => {
    const styler = createCssStyle(
      ['color'],
      css`
        color: blue;
      `,
    );

    expect(styler.propNames).toEqual(['color']);
    expect(styler.apply({}, createSystem())).toEqual('css-1aj1g6z');
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
    expect(styler.apply({ color: 'blue' }, createSystem())).toEqual('css-b0nm20');
  });
});
