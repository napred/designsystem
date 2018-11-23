// @flow

// $FlowFixMe
import { useEffect } from 'react';
import type { SystemAPI } from '../system';

export default function useBreakpointDetection(currentViewport: number, system: SystemAPI): any {
  return useEffect(() => {
    const breakpoints = system.theme.get('breakpoints');
    const mediaQueryList = [];
    const viewportMatches = breakpoints.map(() => false);

    viewportMatches[currentViewport] = true;

    if (global.window != null && global.window.matchMedia) {
      const matches = breakpoints.map((mediaQuery, mqIndex) => {
        const mqList = global.window.matchMedia(mediaQuery);
        const listener = (e: MediaQueryListEvent) => {
          viewportMatches[mqIndex] = e.matches;

          system.setViewport(viewportMatches.lastIndexOf(true));
        };

        // register media query listener
        mqList.addListener(listener);

        // push listener to mediaQueryList
        mediaQueryList.push({ list: mqList, listener });

        return mqList.matches;
      });

      const viewport = matches.lastIndexOf(true);

      if (viewport !== currentViewport) {
        system.setViewport(viewport);
      }
    }

    return () => {
      mediaQueryList.forEach(({ list, listener }) => list.removeListener(listener));
    };
  }, []);
}
