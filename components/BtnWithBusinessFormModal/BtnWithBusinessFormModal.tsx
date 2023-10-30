'use client';

import { FC, useState } from 'react';
import { ModalWindow } from '@/components/ui/ModalWindow';
import { BusinessForm } from '@/components/BusinessForm/BusinessForm';
import { SuccessNotification } from '@/components/SuccessNotification/SuccessNotification';
import { ErrorNotification } from '@/components/ErrorNotification/ErrorNotification';
import { BtnWithBusinessFormModalProps, PopUpType } from './types';

export const BtnWithBusinessFormModal: FC<BtnWithBusinessFormModalProps> = ({
  staticData,
}) => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');
  const [showModal, setShowModal] = useState(false);

  const {
    notifications: { error, success },
  } = staticData;

  const handleToggleModal = () => {
    setShowModal(prev => !prev);
    setPopUpType('default');
  };
  return (
    <div>
      <button onClick={handleToggleModal}>Консультація</button>

      <ModalWindow onModalClose={handleToggleModal} showModal={showModal}>
        {popUpType === 'default' ? (
          <BusinessForm
            staticData={staticData}
            setPopUpType={setPopUpType}
            section="hero"
          />
        ) : null}

        {popUpType === 'success' ? (
          <SuccessNotification staticData={success} />
        ) : null}
        {popUpType === 'error' ? (
          <ErrorNotification staticData={error} />
        ) : null}
      </ModalWindow>
    </div>
  );
};
