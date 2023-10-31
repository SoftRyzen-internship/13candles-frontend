'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ModalWindow } from '@/components/ui/ModalWindow';
import { BusinessForm } from '@/components/BusinessForm/BusinessForm';
import { SuccessNotification } from '@/components/SuccessNotification/SuccessNotification';
import { ErrorNotification } from '@/components/ErrorNotification/ErrorNotification';
import { BtnWithBusinessFormModalProps, PopUpType } from '@/types';

export const BtnWithBusinessFormModal: FC<BtnWithBusinessFormModalProps> = ({
  staticData,
  label,
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
    <div className="mt-[16px] md:w-[211px] xl:mt-[48px]">
      <Button
        tag="button"
        label={label}
        buttonType="button"
        disabled={false}
        onClick={handleToggleModal}
      />

      <ModalWindow
        onModalClose={handleToggleModal}
        showModal={showModal}
        className="pb-[34px] pt-[76px] md:pt-[104px] xl:py-12"
      >
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
