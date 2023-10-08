import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ContentWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggle }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscPush);

    return () => window.removeEventListener('keydown', onEscPush);
  });

  const onEscPush = e => {
    if (e.key !== 'Escape') {
      return;
    }
    console.log('1');
    toggle();
  };

  const handleOverlayClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    toggle();
  };

  return createPortal(
    <Backdrop onClick={handleOverlayClick}>
      <ContentWrapper>{children}</ContentWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
