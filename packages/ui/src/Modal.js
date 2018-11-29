// @flow
/* eslint-disable react/sort-comp, no-multi-assign */

import React, { useEffect } from 'react';
import { Flex } from '@napred/primitives';

import Overlay from './Overlay';
import Portal from './Portal';

type Props = {
  children: React.Node,
  modalRootId: string,
  onClose?: (e: SyntheticEvent<Document>) => any,
  overlayed?: boolean,
};

function Modal(props: Props) {
  const { modalRootId, overlayed, children, onClose } = props;

  function handleDocumentClick(e: SyntheticMouseEvent<Document>) {
    if (onClose) {
      onClose(e);
    }
  }

  function handleEscKey(e: SyntheticKeyboardEvent<Document>) {
    if (onClose && e.keyCode === 27) {
      onClose(e);
    }
  }

  function handleClickPropagation(e: SyntheticMouseEvent<HTMLDivElement>) {
    return e.stopPropagation();
  }

  useEffect(() => {
    if (onClose != null) {
      global.document.addEventListener('keyup', handleEscKey);
      global.document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      global.document.removeEventListener('keyup', handleEscKey);
      global.document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Portal containerId={modalRootId}>
      <Flex
        alignItems="center"
        height="100vh"
        justifyContent="center"
        left={0}
        onClick={handleClickPropagation}
        position="fixed"
        right={0}
        top={0}
        width="100vw"
        zIndex={2}
      >
        {overlayed ? <Overlay containerId={modalRootId} /> : null}
        {children}
      </Flex>
    </Portal>
  );
}

Modal.defaultProps = {
  modalRootId: 'modal-root',
  overlayed: false,
};

export default Modal;
