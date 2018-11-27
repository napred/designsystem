// @flow

import { type Node, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: Node,
  containerId: string,
  removeOnUnmount: boolean,
};

function Portal(props: Props) {
  const { containerId, children, removeOnUnmount } = props;

  // const portalElement = useRef();

  const portalContainer: ?HTMLDivElement = useMemo(
    () => {
      if (global.document !== undefined) {
        let el = global.document.getElementById(props.containerId);

        if (el != null) {
          return el;
        }

        el = global.document.createElement('div');

        el.id = containerId;

        global.document.body.appendChild(el);

        return el;
      }

      return null;
    },
    [true],
  );

  useEffect(
    () => () => {
      if (removeOnUnmount) {
        global.document.body.removeChild(portalContainer);
      }
    },
    [],
  );

  if (portalContainer == null) {
    return null;
  }

  return createPortal(children, portalContainer);
}

Portal.defaultProps = {
  containerId: 'portal-root',
  removeOnUnmount: true,
};

export default Portal;
