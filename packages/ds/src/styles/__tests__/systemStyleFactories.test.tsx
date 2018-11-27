/**
 * @jest-environment jsdom
 */

import React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { render } from 'react-testing-library';

import { createComponent, DesignSystem } from '../../';
import {
  createNumericSystemStyle,
  createStringSystemStyle,
  createSystemStyle,
} from '../systemStyleFactories';

const Box = createComponent('Box', 'div');

describe('styler factories', () => {
  describe('createSystemStyle', () => {
    it('works with simple value (without default value)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val)];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with simple value (with default value)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val, 1)];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box fontSize={0} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (without default value)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val)];

      const { asFragment, rerender } = render(
        <DesignSystem styles={styles}>
          <Box test={['1', '2']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={1} styles={styles}>
          <Box test={['1', '2']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default simple value)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val, '2')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[0]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default responsive value)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val, ['1', '2'])];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={['1']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val, ['1', '2'])];

      const { asFragment, rerender } = render(
        <DesignSystem is={1} styles={styles}>
          <Box fontSize={['1']} />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={1} styles={styles}>
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val, ['1', '2'])];

      const { asFragment, rerender } = render(
        <DesignSystem is={1} styles={styles}>
          <Box test={['1']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={2} styles={styles}>
          <Box test={['1']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={2} styles={styles}>
          <Box test={['1', '3']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const styles = [createSystemStyle('test', 'test', 'spacing', val => val, '1')];

      const { asFragment, rerender } = render(
        <DesignSystem styles={styles}>
          <Box test={['1']} />
          <Box test={['1', '3']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={2} styles={styles}>
          <Box test={['1']} />
          <Box test={['1', '3']} />
          <Box />,
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('createSystemNumericStyler', () => {
    it('works with simple value (without default value)', () => {
      const styles = [createNumericSystemStyle('test', 'test', 'fontSizes')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with simple value (with default value)', () => {
      const styles = [createNumericSystemStyle('test', 'test', 'fontSizes', 1)];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (without default value)', () => {
      const styles = [createNumericSystemStyle('test', 'test', 'fontSizes')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={['1', '2']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default simple value)', () => {
      const styles = [createNumericSystemStyle('test', 'test', 'fontSizes', '2')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[0]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default responsive value)', () => {
      const styles = [createNumericSystemStyle('test', 'test', 'fontSizes', ['1', '2'])];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={['1']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('createSystemStringStyler', () => {
    it('works with simple value (without default value)', () => {
      const styles = [createStringSystemStyle('test', 'test', 'colors')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test="white" />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with simple value (with default value)', () => {
      const styles = [createStringSystemStyle('test', 'test', 'colors', 'white')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test="black" />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (without default value)', () => {
      const styles = [createStringSystemStyle('test', 'test', 'colors', 'white')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={['white', 'black']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default simple value)', () => {
      const styles = [createStringSystemStyle('test', 'test', 'colors', 'red')];

      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={['white', 'red']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default responsive value)', () => {
      const styles = [createStringSystemStyle('test', 'test', 'colors', ['white', 'red'])];

      const { asFragment, rerender } = render(
        <DesignSystem styles={styles}>
          <Box test={['white']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={1} styles={styles}>
          <Box test={['white']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
