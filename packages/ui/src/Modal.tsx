import { Flex } from '@napred/primitives';
import React, { ReactElement, useEffect } from 'react';

import Overlay from './Overlay';
import Portal from './Portal';

interface IProps {
  children: ReactElement<any>;
  modalRootId: string;
  onClose?: (e: Event) => any;
  overlayed?: boolean;
}

function Modal(props: IProps) {
  const { modalRootId, overlayed, children, onClose } = props;

  function handleDocumentClick(e: MouseEvent) {
    if (onClose) {
      onClose(e);
    }
  }

  function handleEscKey(e: KeyboardEvent) {
    if (onClose && e.keyCode === 27) {
      onClose(e);
    }
  }

  function handleClickPropagation(e: MouseEvent) {
    return e.stopPropagation();
  }

  useEffect(() => {
    if (onClose != null) {
      document.addEventListener('keyup', handleEscKey);
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('keyup', handleEscKey);
      document.removeEventListener('click', handleDocumentClick);
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
