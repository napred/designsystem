// @flow

import { css } from 'emotion';
import applyStyles from '../applyStyles';
import { createSystem } from '../../context';
import { createCssStyle, createStringStyle, styles as allStyles } from '../';

describe('applyStyles', () => {
  const system = createSystem();
  const styles = new Map([
    ['color', allStyles.color],
    ['test', createStringStyle('test', 'test')],
    [
      'position',
      createCssStyle(
        ['position'],
        props => css`
          position: ${props.position};
        `,
      ),
    ],
  ]);

  it('works correctly for no props', () => {
    expect(applyStyles({}, styles, system)).toEqual('css-0');
  });

  it('works correctly for props', () => {
    expect(
      applyStyles(
        {
          color: '#ff0000',
        },
        styles,
        system,
      ),
    ).toEqual('css-6da32');

    expect(
      applyStyles(
        {
          test: 'test',
        },
        styles,
        system,
      ),
    ).toEqual('css-jxe9qv');

    expect(
      applyStyles(
        {
          color: 'blue',
          test: 'test',
        },
        styles,
        system,
      ),
    ).toEqual('css-tihguf');
  });
});
