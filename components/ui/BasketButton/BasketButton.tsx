'use client';

import { useState } from 'react';
import classNames from 'classnames';
import BasketIcon from '/public//icons//icon_cart.svg';

import { ButtonOpenModal } from '@/components/ui/ButtonOpenModal';
import { Portal } from '@/components/ui/Portal';
import { ModalWindow } from '@/components/ui/ModalWindow';
import { BasketButtonProps } from '@/components/ui/BasketButton/types';

export const BasketButton: React.FC<BasketButtonProps> = ({
  className = '',
  isIcon = false,
  text = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => setShowModal(false);
  const onModalOpen = () => setShowModal(true);
  const buttonClasses = classNames(
    'h-7 w-7',
    { 'decor case': isIcon },
    className,
  );

  return (
    <>
      <ButtonOpenModal className={buttonClasses} onModalOpen={onModalOpen}>
        {isIcon && <BasketIcon />}
        <span className="link">{text}</span>
      </ButtonOpenModal>
      <Portal onModalClose={onModalClose} showModal={showModal}>
        <ModalWindow
          className="text-black"
          onModalClose={onModalClose}
          showModal={showModal}
        >
          <div>content of basket</div>
        </ModalWindow>
      </Portal>
    </>
  );
};
