'use client';

import { useRef, MouseEvent, KeyboardEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import { IPortal } from './types';

import { defaultStyle, duration, transitionStyles } from './variants';


export const Portal = ({ onModalClose, children, showModal }: IPortal) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickEscape = (e: KeyboardEvent<Document>) => {
      if (e.code === 'Escape') {
        onModalClose()
      }
    };
    document.addEventListener('keydown', onClickEscape as any);
    return () => {
      document.removeEventListener('keydown', onClickEscape as any);
    };
  }, [onModalClose]);

  const handleBackdrop = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onModalClose()
    }
  }



  return (
    <Transition
      nodeRef={nodeRef} in={showModal} timeout={duration}


      mountOnEnter
      unmountOnExit
    >
      {state => {
        return createPortal(




          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            ref={nodeRef}
            tabIndex={0}
            onClick={handleBackdrop}
            className={` fixed left-0 top-0 z-20 h-[100%] w-[100%] overflow-auto bg-black-light/50 `}
          >

            {children}





          </div>,

          document.getElementById('modal')!,
        );




      }}
    </Transition>

  )



};
