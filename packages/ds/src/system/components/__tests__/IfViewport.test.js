/**
 * @flow
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import IfViewport from '../IfViewport';
import { DesignSystem } from '../../';

function A() {
  return <div />;
}

function B() {
  return <div />;
}

describe('IfViewport system component', () => {
  it('renders only for matched viewports (scalar prop)', () => {
    const wrapper = mount(
      <DesignSystem is={2}>
        <IfViewport is={2}>{() => <A />}</IfViewport>
        <IfViewport is={0}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(wrapper.find(A).length).toBe(1);
    expect(wrapper.find(B).length).toBe(0);
  });

  it('renders only for matched viewports (array prop)', () => {
    const wrapper = mount(
      <DesignSystem is={0}>
        <IfViewport is={[0, 2]}>{() => <A />}</IfViewport>
        <IfViewport is={1}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(wrapper.find(A).length).toBe(1);
    expect(wrapper.find(B).length).toBe(0);
  });

  it('renders only for matched viewports (greater than)', () => {
    const wrapper = mount(
      <DesignSystem is={3}>
        <IfViewport gt={2}>{() => <A />}</IfViewport>
        <IfViewport gt={4}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(wrapper.find(A).length).toBe(1);
    expect(wrapper.find(B).length).toBe(0);
  });

  it('renders only for matched viewports (less than)', () => {
    const wrapper = mount(
      <DesignSystem is={3}>
        <IfViewport lt={4}>{() => <A />}</IfViewport>
        <IfViewport lt={2}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(wrapper.find(A).length).toBe(1);
    expect(wrapper.find(B).length).toBe(0);
  });

  it('renders only for matched viewports (greater than or equal)', () => {
    const wrapper = mount(
      <DesignSystem is={3}>
        <IfViewport gte={3}>{() => <A />}</IfViewport>
        <IfViewport gte={4}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(wrapper.find(A).length).toBe(1);
    expect(wrapper.find(B).length).toBe(0);
  });

  it('renders only for matched viewports (less than or equal)', () => {
    const wrapper = mount(
      <DesignSystem is={3}>
        <IfViewport lte={3}>{() => <A />}</IfViewport>
        <IfViewport lte={2}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(wrapper.find(A).length).toBe(1);
    expect(wrapper.find(B).length).toBe(0);
  });
});
