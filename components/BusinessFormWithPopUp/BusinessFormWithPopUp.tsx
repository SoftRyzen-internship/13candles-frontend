'use client';

import { useEffect, useState, FC } from 'react';

import { ModalWindow } from '@/components/ui/ModalWindow';
import { BusinessForm } from '@/components/BusinessForm/BusinessForm';
import { SuccessNotification } from '@/components/SuccessNotification/SuccessNotification';
import { ErrorNotification } from '@/components/ErrorNotification/ErrorNotification';

import { PopUpType, BusinessFormWithPopUpProps } from '@/types';

export const BusinessFormWithPopUp: FC<BusinessFormWithPopUpProps> = ({
  staticData,
  className = '',
}) => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');
  const [showModal, setShowModal] = useState(false);

  const {
    notifications: {
      business: { error, success },
    },
  } = staticData;

  const handleToggleModal = () => {
    setShowModal(prev => !prev);

    setTimeout(() => {
      setPopUpType('default');
    }, 1000);
  };

  useEffect(() => {
    if (popUpType !== 'default') {
      setShowModal(prev => !prev);
    }
  }, [popUpType]);

  return (
    <div className={className}>
      <BusinessForm
        staticData={staticData}
        section={'contacts'}
        setPopUpType={setPopUpType}
      />
      <ModalWindow
        onModalClose={handleToggleModal}
        showModal={showModal}
        className="pb-[34px] pt-[76px] md:pt-[104px] xl:py-12"
      >
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
