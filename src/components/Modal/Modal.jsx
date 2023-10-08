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
    <Backdrop
      onClick={handleOverlayClick}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <ContentWrapper
        initial={{
          scale: 1.2,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        {children}
      </ContentWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
