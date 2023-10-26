'use client';

import { useRef, MouseEvent, KeyboardEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import { defaultStyle, duration, transitionStyles } from './variants';
import { PortalProps } from './types';

export const Portal: React.FC<PortalProps> = ({
  onModalClose,
  children,
  showModal,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showModal) document.body.classList.add('overflow-hidden');
    if (!showModal) document.body.classList.remove('overflow-hidden');
  }, [showModal]);

  useEffect(() => {
    const onClickEscape = (e: KeyboardEvent<Document>) => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    document.addEventListener('keydown', onClickEscape as any);

    return () => {
      document.removeEventListener('keydown', onClickEscape as any);
    };
  }, [onModalClose]);

  const handleBackdrop = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={showModal}
      timeout={duration}
      mountOnEnter
      unmountOnExit
    >
      {state => {
        return createPortal(
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            ref={nodeRef}
            tabIndex={0}
            onClick={handleBackdrop}
            className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black-light/50"
          >
            {children}
          </div>,
          document.getElementById('modal')!,
        );
      }}
    </Transition>
  );
};
