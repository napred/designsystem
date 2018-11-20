/**
 * @flow
 * @jest-environment jsdom
 */

import React from 'react';
import styled from 'styled-components';
import { render } from 'enzyme';
import { createSystemComponent, isSystemComponent, DesignSystem } from '../';

describe('createSystemComponent', () => {
  it('creates system component from primitive component', () => {
    const A = createSystemComponent('span');

    expect(isSystemComponent(A)).toBe(true);

    expect(
      render(
        <DesignSystem>
          <A />
        </DesignSystem>,
      ),
    ).toMatchSnapshot();
  });

  it('creates system component from another system component (extends it)', () => {
    const A = createSystemComponent('span');
    const B = createSystemComponent(A);

    expect(isSystemComponent(B)).toBe(true);

    expect(
      render(
        <DesignSystem>
          <B />
        </DesignSystem>,
      ),
    ).toMatchSnapshot();
  });

  it('creates system component from custom component', () => {
    function A(props: any) {
      return <div {...props} />;
    }

    const B = createSystemComponent(A);

    expect(isSystemComponent(B)).toBe(true);

    expect(
      render(
        <DesignSystem>
          <B />
        </DesignSystem>,
      ),
    ).toMatchSnapshot();
  });

  it('does not allow to use styled component as base', () => {
    expect(() => createSystemComponent(styled.div``)).toThrow();
  });

  describe('component overriding', () => {
    it('allows to override base component by primitive component', () => {
      const A = createSystemComponent('span');

      expect(
        render(
          <DesignSystem>
            <A as="div" />
          </DesignSystem>,
        ),
      ).toMatchSnapshot();
    });

    it('allows to override base component by system component (extends it)', () => {
      const A = createSystemComponent('span');
      const B = createSystemComponent('div');

      expect(
        render(
          <DesignSystem>
            <A as={B} />
          </DesignSystem>,
        ),
      ).toMatchSnapshot();
    });

    it('allows to override base component by custom component (not recommended)', () => {
      const A = createSystemComponent('span');
      function B(props: any) {
        return <div {...props} />;
      }

      expect(
        render(
          <DesignSystem>
            <A as={B} />
          </DesignSystem>,
        ),
      ).toMatchSnapshot();
    });

    it('does not allow to use styled component as override', () => {
      const A = createSystemComponent('span');

      expect(() =>
        render(
          <DesignSystem>
            <A as={styled.div``} />
          </DesignSystem>,
        ),
      ).toThrow();
    });
  });
});
