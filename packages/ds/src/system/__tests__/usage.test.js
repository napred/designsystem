/**
 * @flow
 */

import React from 'react';
import { css } from 'styled-components';
import { render } from 'enzyme';
import { createCssStyle, createStringStyle, createSystemComponent, DesignSystem } from '../';
import type { StyleFn } from '../types';

describe('design system usage', () => {
  it('works correctly', () => {
    const bgColor: StyleFn<{ bgColor?: string | void }> = createCssStyle(
      ['bgColor'],
      css`
          /* prettier-ignore */
          ${({ bgColor: color, system }) =>
            color ? `background-color: ${system.color(color, color)};` : ''}
        `,
    );
    const display: StyleFn<{ display?: string | void }> = createStringStyle(
      'display',
      'display',
      'block',
    );
    const opacity: StyleFn<{ opacity?: number | void }> = createStringStyle('opacity', 'opacity');

    const SpanOpacity = createSystemComponent('span', [opacity]);
    const SpanColorOpacity = createSystemComponent(SpanOpacity);
    const Div = createSystemComponent('div', [display]);
    const CssParagraph = createSystemComponent('p', [bgColor]);
    const BlackDiv = createSystemComponent('div');

    // $FlowExpectError
    BlackDiv.defaultProps = {
      bgColor: 'black',
    };

    const WhiteDiv = createSystemComponent(BlackDiv);
    const TomatoDiv = createSystemComponent(WhiteDiv);
    // $FlowExpectError
    TomatoDiv.defaultProps = {
      color: 'tomato',
    };

    const wrapper = render(
      <DesignSystem>
        <SpanOpacity />
        <SpanOpacity opacity={1} />
        <SpanColorOpacity />
        <SpanColorOpacity color="tomato" />
        <SpanColorOpacity color="tomato" opacity={1} />
        <Div />
        <Div as={SpanOpacity} display="flex" />
        <Div as={SpanColorOpacity} color="tomato" />
        <Div as={SpanColorOpacity} color="tomato" display="flex" />
        <Div as={SpanColorOpacity} color="tomato" opacity={0.5} />
        <SpanColorOpacity as="a" color="tomato" />
        <Div as="p" display="black" />
        <CssParagraph />
        <CssParagraph bgColor="tomato" />
        <CssParagraph bgColor="primary" />
        <CssParagraph as={Div} display="flex" bgColor="primary" />
        <BlackDiv />
        <BlackDiv bgColor="white" />
        <Div as={BlackDiv} />
        <Div as={BlackDiv} bgColor="white" />
        <WhiteDiv />
        <WhiteDiv bgColor="tomato" />
        <TomatoDiv />
        <TomatoDiv color="white" />
        <TomatoDiv bgColor="white" color="white" />
      </DesignSystem>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
