// @flow

import { css } from 'emotion';
import defaultTheme from '../../defaultTheme';
import { createNullCache } from '../../cache';
import { createSystem } from '../../system';
import { createStyleApplicator, createCssStyle, createStringStyle, styles as allStyles } from '../';

describe('createStyleApplicator', () => {
  const system = createSystem({
    cache: createNullCache(),
    globalStyles: [
      allStyles.color,
      createStringStyle('test', 'test'),
      createCssStyle(
        ['position'],
        props => css`
          position: ${props.position};
        `,
      ),
    ],
    styleApplicatorFactory: createStyleApplicator,
    theme: defaultTheme,
  });

  it('works correctly for no props', () => {
    expect(system.applyStyles('', {})).toEqual([
      { className: expect.stringMatching(/^css-.+$/) },
      ['stripProps', 'color', 'test', 'position'],
    ]);
  });

  it('works correctly for props', () => {
    expect(
      system.applyStyles(
        '',
        {
          color: '#ff0000',
        },
        {},
      ),
    ).toEqual([
      { className: expect.stringMatching(/^css-.+$/), color: '#ff0000' },
      ['stripProps', 'color', 'test', 'position'],
    ]);

    expect(
      system.applyStyles(
        '',
        {
          test: 'test',
        },
        {},
      ),
    ).toEqual([
      { className: expect.stringMatching(/^css-.+$/), test: 'test' },
      ['stripProps', 'color', 'test', 'position'],
    ]);

    expect(
      system.applyStyles(
        '',
        {
          color: 'blue',
          test: 'test',
        },
        {},
      ),
    ).toEqual([
      { className: expect.stringMatching(/^css-.+$/), color: 'blue', test: 'test' },
      ['stripProps', 'color', 'test', 'position'],
    ]);
  });
});
