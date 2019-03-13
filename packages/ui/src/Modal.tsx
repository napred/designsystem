import { DSProps } from '@napred/browser';
import { Flex } from '@napred/primitives';
import React, { ReactElement, useEffect } from 'react';

import Overlay from './Overlay';
import Portal from './Portal';

interface IProps extends DSProps {
  children: ReactElement<any>;
  modalRootId: string;
  onClose?: (e: Event) => any;
  overlayed?: boolean;
  overlayContainerId: string;
  overlayProps?: DSProps | null;
}

const BASE_MODAL_ZINDEX = 32;

function Modal(props: IProps) {
  const {
    modalRootId,
    overlayContainerId,
    overlayed,
    overlayProps,
    children,
    onClose,
    ...rest
  } = props;

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

  const allOverlayProps = {
    zIndex: Number(rest.zIndex || BASE_MODAL_ZINDEX) - 1,
    ...(overlayProps || {}),
  };

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
        zIndex={rest.zIndex}
      >
        {overlayed ? <Overlay {...allOverlayProps} containerId={overlayContainerId} /> : null}
        {children}
      </Flex>
    </Portal>
  );
}

Modal.defaultProps = {
  modalRootId: 'modal-root',
  overlayContainerId: 'modal-overlay-root',
  overlayed: false,
  zIndex: BASE_MODAL_ZINDEX
};

export default Modal;
