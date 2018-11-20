// @flow
/* eslint-disable react/prop-types, react/sort-comp */

import React, { type Node, type ComponentType, type Context } from 'react';
import { injectGlobal } from 'styled-components';
import type { SystemComponentProps } from './types';
import Theme from './theme';

import defaultTheme from './defaultTheme';

const {
  Provider,
  Consumer,
}: Context<SystemComponentProps & { viewportMatches: Array<boolean> }> = React.createContext({
  viewport: 0,
  viewportMatches: [true],
  system: defaultTheme,
});

type DesignSystemProps = {
  children: Node,
  is?: number,
  theme: Theme,
};

export { defaultTheme };

function calculateViewportState(
  currentState: { viewportMatches: Array<boolean> },
  breakpointIndex: number,
  breakpointMatch: boolean,
): { viewportMatches: Array<boolean>, viewport: number } {
  const newMatches = currentState.viewportMatches.slice();

  newMatches[breakpointIndex] = breakpointMatch;

  return {
    viewport: newMatches.lastIndexOf(true),
    viewportMatches: newMatches,
  };
}

export class DesignSystem extends React.Component<
  DesignSystemProps,
  SystemComponentProps & { viewportMatches: Array<boolean> },
> {
  mediaQueryLists: Array<{ list: MediaQueryList, listener: Function }> = [];

  static defaultProps = {
    theme: defaultTheme,
  };

  static getDerivedStateFromProps(props: DesignSystemProps, state: SystemComponentProps) {
    if (props.theme !== state.system) {
      return {
        system: props.theme,
      };
    }

    return null;
  }

  constructor(props: DesignSystemProps) {
    super(props);

    const { is, theme } = props;

    const viewportMatches = theme.mediaQueries().map(() => false);

    viewportMatches[is || 0] = true;

    this.state = {
      viewport: viewportMatches.lastIndexOf(true),
      viewportMatches,
      system: theme,
    };

    // Apply CSS resets
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      ${theme.fonts()}
      
      html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        color: ${theme.color('greyDark', '#444')};
        font-family: ${theme.fontFamily('default')};
        /* https://github.com/necolas/normalize.css/blob/7369f566898b8cefc2649b6a66e112857de4c46f/normalize.css#L8-L13 */
        text-size-adjust: 100%;
      }

      *, *::before, *::after {
        box-sizing: inherit;
      }
      
      body {
        margin: 0;
        padding: 0;
      }

      ul {
        list-style: none;
      }
    `;
  }

  createListener = (index: number) => (e: MediaQueryListEvent) => {
    this.setState(currentState => calculateViewportState(currentState, index, e.matches));
  };

  componentDidMount() {
    const { viewport, system } = this.state;

    const matchedBreakpoint = viewport || 0;

    // now create matchers if we are in browser context, and set up matchedBreakpoint only if
    // is is null or undefined
    if (global.window != null && global.window.matchMedia != null) {
      const mediaQueries = system.mediaQueries();

      const viewportMatches = mediaQueries.map((mediaQuery, mqIndex) => {
        const mediaQueryList = window.matchMedia(mediaQuery);
        const listener = this.createListener(mqIndex);

        // register media query listener
        mediaQueryList.addListener(listener);

        // push listener to mediaQueryList
        this.mediaQueryLists.push({ list: mediaQueryList, listener });

        return mediaQueryList.matches;
      });

      this.setState(calculateViewportState({ viewportMatches }, matchedBreakpoint, true));
    }
  }

  componentWillUnmount() {
    this.mediaQueryLists.forEach(({ list, listener }) => {
      list.removeListener(listener);
    });
  }

  render() {
    const { children } = this.props;

    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const DesignSystemConsumer = Consumer;
