'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Portal } from '@/components/ui/Portal';
import { ModalWindow } from '@/components/ui/ModalWindow';

import { ButtonModalClientProps } from './types';

export const ButtonModalClient: React.FC<ButtonModalClientProps> = ({
  label,
  className,
  children,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onModalClose = () => setShowModal(false);
  const onModalOpen = () => setShowModal(true);

  return (
    <div className={className}>
      <Button
        tag="button"
        label={label}
        buttonType="button"
        disabled={false}
        onClick={() => {
          onModalOpen();
        }}
      />

      <Portal onModalClose={onModalClose} showModal={showModal}>
        <ModalWindow
          className="text-black"
          onModalClose={onModalClose}
          showModal={showModal}
        >
          {children}
        </ModalWindow>
      </Portal>
    </div>
  );
};
