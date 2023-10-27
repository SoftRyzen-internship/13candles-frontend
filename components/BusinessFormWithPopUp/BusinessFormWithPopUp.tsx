'use client';

import { useEffect, useState, FC } from 'react';

import { Portal } from '@/components/ui/Portal';
import { ModalWindow } from '@/components/ui/ModalWindow';
import { BusinessForm } from '@/components/BusinessForm/BusinessForm';
import { SuccessNotification } from '@/components/SuccessNotification/SuccessNotification';
import { ErrorNotification } from '@/components/ErrorNotification/ErrorNotification';

import { PopUpType, BusinessFormWithPopUpProps } from './types';

export const BusinessFormWithPopUp: FC<BusinessFormWithPopUpProps> = ({
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

  useEffect(() => {
    if (popUpType !== 'default') {
      setShowModal(prev => !prev);
    }
  }, [popUpType]);

  return (
    <>
      <BusinessForm
        staticData={staticData}
        section={'contacts'}
        setPopUpType={setPopUpType}
      />
      <Portal onModalClose={handleToggleModal} showModal={showModal}>
        <ModalWindow onModalClose={handleToggleModal}>
          {popUpType === 'success' ? (
            <SuccessNotification staticData={success} />
          ) : null}
          {popUpType === 'error' ? (
            <ErrorNotification staticData={error} />
          ) : null}
        </ModalWindow>
      </Portal>
    </>
  );
};
