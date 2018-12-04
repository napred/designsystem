import { useContext } from 'react';
import DesignSystemContext, { SystemAPI } from '../context';

export default function useDesignSystem(): SystemAPI {
  return useContext(DesignSystemContext);
}
