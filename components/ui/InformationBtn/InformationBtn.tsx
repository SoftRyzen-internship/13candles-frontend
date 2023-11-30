'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { ModalWindow } from '../ModalWindow';
import { InformationText } from '../InformationText';
import { InformationBtnPtops } from './types';

export const InformationBtn: React.FC<InformationBtnPtops> = ({
  children,
  data,
  dynamicData,
  className = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  const buttonClasses = classNames('link', className);

  return (
    <>
      <button
        type="button"
        onClick={onToggleShowModal}
        className={buttonClasses}
      >
        {children}
      </button>

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        {dynamicData && dynamicData.length > 0 ? (
          <InformationText text={dynamicData} dynamic={true} />
        ) : (
          data.map(text => <InformationText key={text} text={text} />)
        )}
      </ModalWindow>
    </>
  );
};
