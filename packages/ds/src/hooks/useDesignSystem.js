// @flow

// $FlowFixMe
import { useContext } from 'react';
import DesignSystemContext, { type System } from '../context';

export default function useDesignSystem(): System {
  return useContext(DesignSystemContext);
}
