import { useContext } from 'react';
import DesignSystemContext, { SystemAPI } from '../context';

export default function useDesignSystem<TStyle>(): SystemAPI<TStyle> {
  return useContext(DesignSystemContext);
}
