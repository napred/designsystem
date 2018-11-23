/**
 * @flow
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'react-testing-library';

import { Box, DesignSystem } from '../../';
import { createNumericStyle, createStringStyle, createStyle } from '../simpleStyleFactories';

describe('simple style factories', () => {
  describe('createStyler', () => {
    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styles = [createStyle('test', 'test', val => val, ['1', '2'])];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem is={1} styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const styles = [createStyle('test', 'test', val => val, ['1', '2'])];

      // $FlowFixMe
      const { asFragment, rerender } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={2} styles={styles}>
          <Box test={['1']} />
          <Box test={['1', '3']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const styles = [createStyle('test', 'test', val => val, '1')];

      // $FlowFixMe
      const { asFragment, rerender } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={2} styles={styles}>
          <Box test={['1']} />
          <Box test={['1', '3']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (without default)', () => {
      const styles = [createStyle('test', 'test', val => val)];

      // $FlowFixMe
      const { asFragment, rerender } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={2} styles={styles}>
          <Box test={['1']} />
          <Box test={['1', '3']} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('createStringStyler', () => {
    it('works with simple value (without default value)', () => {
      const styles = [createStringStyle('test', 'test')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with simple value (with default value)', () => {
      const styles = [createStringStyle('test', 'test', '2')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (without default value)', () => {
      const styles = [createStringStyle('test', 'test')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default simple value)', () => {
      const styles = [createStringStyle('test', 'test', '2')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default responsive value)', () => {
      const styles = [createStringStyle('test', ['testLeft', 'testRight'], ['3', '2'])];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styles = [createStringStyle('test', ['testLeft', 'testRight'], ['3', '2'])];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem is={1} styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default)', () => {
      const styles = [createStringStyle('test', ['testLeft', 'testRight'], ['3', '2'])];

      // $FlowFixMe
      const { asFragment, rerender } = render(
        <DesignSystem styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();

      rerender(
        <DesignSystem is={2} styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );
    });
  });

  describe('createNumericStyler', () => {
    it('works with simple value (without default value)', () => {
      const styles = [createNumericStyle('test', 'test')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with simple value (with default value)', () => {
      const styles = [createNumericStyle('test', 'test', '2')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={1} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (without default value)', () => {
      const styles = [createNumericStyle('test', 'test')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default simple value)', () => {
      const styles = [createNumericStyle('test', 'test', '2')];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('works with responsive value (with default responsive value)', () => {
      const styles = [createNumericStyle('test', 'test', ['1', '2'])];

      // $FlowFixMe
      const { asFragment } = render(
        <DesignSystem styles={styles}>
          <Box test={[1]} />
          <Box />
        </DesignSystem>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
