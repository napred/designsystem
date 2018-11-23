// @flow

// $FlowFixMe
import { useContext } from 'react';
import DesignSystemContext, { type SystemAPI } from '../context';

export default function useDesignSystem(): SystemAPI {
  return useContext(DesignSystemContext);
}
