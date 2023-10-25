'use client';

import { useState } from 'react';
import { ModalWindow } from '../ModalWindow';
import { ButtonProps } from './types';
import classNames from 'classnames';

export const ButtonOpenModal: React.FC<ButtonProps> = ({
  children,
  element: Element,
  data,
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
        <Element {...data} />
      </ModalWindow>
    </>
  );
};
