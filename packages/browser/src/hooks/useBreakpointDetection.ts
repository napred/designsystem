import { SystemAPI } from '@napred/ds';
import { useEffect } from 'react';
import { StyleDefinition } from '../types';

export default function useBreakpointDetection(
  currentViewport: number,
  system: SystemAPI<StyleDefinition>,
): any {
  return useEffect(() => {
    const breakpoints: string[] = system.theme.get('breakpoints');
    const mediaQueryList: Array<{
      list: MediaQueryList;
      listener: (e: MediaQueryListEvent) => void;
    }> = [];
    const viewportMatches = breakpoints.map(() => false);

    viewportMatches[currentViewport] = true;

    if (window != null && window.matchMedia) {
      const matches = breakpoints.map((mediaQuery, mqIndex) => {
        const mqList = window.matchMedia(mediaQuery);
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
      mediaQueryList.forEach(({ list, listener }) =>
        list.removeListener(listener as EventListener),
      );
    };
  }, []);
}
