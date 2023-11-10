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

  const handleEsc = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

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
        nodeRef.current?.focus();

        return createPortal(
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            ref={nodeRef}
            tabIndex={0}
            onKeyDown={handleEsc}
            onClick={handleBackdrop}
            className="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center bg-black-light/50"
          >
            {children}
          </div>,
          document.getElementById('modal')!,
        );
      }}
    </Transition>
  );
};
