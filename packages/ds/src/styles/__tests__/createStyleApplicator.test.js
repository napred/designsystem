// @flow

import { css } from 'emotion';
import defaultTheme from '../../defaultTheme';
import { createNullCache } from '../../cache';
import { createSystem } from '../../system';
import {
  createStyleApplicator,
  COMPONENT_PATH_PROP_NAME,
  STRIP_PROPS_PROP_NAME,
  STYLERS_PROP_NAME,
  createCssStyle,
  createStringStyle,
  styles as allStyles,
} from '../';

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

  describe('passthrough', () => {
    it('works correctly for no props', () => {
      expect(system.applyStyles('', {}, { passthrough: true })).toEqual({
        className: '',
        [COMPONENT_PATH_PROP_NAME]: [''],
        [STRIP_PROPS_PROP_NAME]: [
          COMPONENT_PATH_PROP_NAME,
          STRIP_PROPS_PROP_NAME,
          STYLERS_PROP_NAME,
          'color',
          'test',
          'position',
        ],
        [STYLERS_PROP_NAME]: [],
      });
    });

    it('works correctly for props', () => {
      expect(
        system.applyStyles(
          '',
          {
            color: '#ff0000',
          },
          { passthrough: true },
        ),
      ).toEqual({
        className: '',
        color: '#ff0000',
        [COMPONENT_PATH_PROP_NAME]: [''],
        [STRIP_PROPS_PROP_NAME]: [
          COMPONENT_PATH_PROP_NAME,
          STRIP_PROPS_PROP_NAME,
          STYLERS_PROP_NAME,
          'color',
          'test',
          'position',
        ],
        [STYLERS_PROP_NAME]: [],
      });
    });
  });

  describe('render style', () => {
    it('works correctly for no props', () => {
      expect(system.applyStyles('', {})).toEqual({
        className: expect.stringMatching(/^css-.+$/),
        [COMPONENT_PATH_PROP_NAME]: [''],
        [STRIP_PROPS_PROP_NAME]: [
          COMPONENT_PATH_PROP_NAME,
          STRIP_PROPS_PROP_NAME,
          STYLERS_PROP_NAME,
          'color',
          'test',
          'position',
        ],
        [STYLERS_PROP_NAME]: [],
      });
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
      ).toEqual({
        className: expect.stringMatching(/^css-.+$/),
        color: '#ff0000',
        [COMPONENT_PATH_PROP_NAME]: [''],
        [STRIP_PROPS_PROP_NAME]: [
          COMPONENT_PATH_PROP_NAME,
          STRIP_PROPS_PROP_NAME,
          STYLERS_PROP_NAME,
          'color',
          'test',
          'position',
        ],
        [STYLERS_PROP_NAME]: [],
      });

      expect(
        system.applyStyles(
          '',
          {
            test: 'test',
          },
          {},
        ),
      ).toEqual({
        className: expect.stringMatching(/^css-.+$/),
        test: 'test',
        [COMPONENT_PATH_PROP_NAME]: [''],
        [STRIP_PROPS_PROP_NAME]: [
          COMPONENT_PATH_PROP_NAME,
          STRIP_PROPS_PROP_NAME,
          STYLERS_PROP_NAME,
          'color',
          'test',
          'position',
        ],
        [STYLERS_PROP_NAME]: [],
      });

      expect(
        system.applyStyles(
          '',
          {
            color: 'blue',
            test: 'test',
          },
          {},
        ),
      ).toEqual({
        className: expect.stringMatching(/^css-.+$/),
        color: 'blue',
        test: 'test',
        [COMPONENT_PATH_PROP_NAME]: [''],
        [STRIP_PROPS_PROP_NAME]: [
          COMPONENT_PATH_PROP_NAME,
          STRIP_PROPS_PROP_NAME,
          STYLERS_PROP_NAME,
          'color',
          'test',
          'position',
        ],
        [STYLERS_PROP_NAME]: [],
      });
    });
  });
});
