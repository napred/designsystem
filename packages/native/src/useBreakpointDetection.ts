import { SystemAPI } from '@napred/ds';
import { match } from 'css-mediaquery';
import { useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';
import { StyleDefinition } from './types';

export default function useBreakpointDetection(
  currentViewport: number,
  system: SystemAPI<StyleDefinition>,
) {
  return useEffect(() => {
    const breakpoints: string[] = system.theme.get('breakpoints');
    const viewportMatches: boolean[] = breakpoints.map(mq =>
      match(mq, { type: 'screen', ...Dimensions.get('window') }),
    );

    viewportMatches[currentViewport] = true;

    const mqListener = ({ window }: { window: ScaledSize }) => {
      // run against all media queries
      const matches = breakpoints.map(mq => match(mq, { type: 'screen', ...window }));

      system.setViewport(matches.lastIndexOf(true));
    };

    Dimensions.addEventListener('change', mqListener);

    const viewport = viewportMatches.lastIndexOf(true);

    if (viewport !== currentViewport) {
      system.setViewport(viewport);
    }

    // remove listener
    return () => {
      Dimensions.removeEventListener('change', mqListener);
    };
  }, []);
}
