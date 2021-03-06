import React, { ReactNode } from 'react';
import { render } from 'react-testing-library';
import { DesignSystemContext, IfViewport } from '../';

function A() {
  return <div>A</div>;
}

function B() {
  return <div>B</div>;
}

function DesignSystem({ children, is }: { children: ReactNode; is: number }) {
  return (
    <DesignSystemContext.Provider value={{ viewport: is } as any}>
      {children}
    </DesignSystemContext.Provider>
  );
}

describe('IfViewport system component', () => {
  it('renders only for matched viewports (scalar prop)', () => {
    const { asFragment } = render(
      <DesignSystem is={2}>
        <IfViewport is={2}>{() => <A />}</IfViewport>
        <IfViewport is={0}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders only for matched viewports (array prop)', () => {
    const { asFragment } = render(
      <DesignSystem is={0}>
        <IfViewport is={[0, 2]}>{() => <A />}</IfViewport>
        <IfViewport is={1}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders only for matched viewports (greater than)', () => {
    const { asFragment } = render(
      <DesignSystem is={3}>
        <IfViewport gt={2}>{() => <A />}</IfViewport>
        <IfViewport gt={4}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders only for matched viewports (less than)', () => {
    const { asFragment } = render(
      <DesignSystem is={3}>
        <IfViewport lt={4}>{() => <A />}</IfViewport>
        <IfViewport lt={2}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders only for matched viewports (greater than or equal)', () => {
    const { asFragment } = render(
      <DesignSystem is={3}>
        <IfViewport gte={3}>{() => <A />}</IfViewport>
        <IfViewport gte={4}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders only for matched viewports (less than or equal)', () => {
    const { asFragment } = render(
      <DesignSystem is={3}>
        <IfViewport lte={3}>{() => <A />}</IfViewport>
        <IfViewport lte={2}>{() => <B />}</IfViewport>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
