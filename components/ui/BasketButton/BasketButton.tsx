'use client';

import { useState } from 'react';

import BasketIcon from '/public//icons//icon_cart.svg';

import { ButtonOpenModal } from '@/components/ui/ButtonOpenModal';
import { Portal } from '@/components/ui/Portal';
import { ModalWindow } from '@/components/ui/ModalWindow';

export const BasketButton = () => {
  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => setShowModal(false);
  const onModalOpen = () => setShowModal(true);

  return (
    <>
      <ButtonOpenModal className="h-7 w-7" onModalOpen={onModalOpen}>
        <BasketIcon />
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
