'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { ModalWindow } from '@/components/ui/ModalWindow';
import BasketIcon from '/public/icons/icon_cart.svg';
import { BasketButtonProps } from './types';

export const BasketButton: React.FC<BasketButtonProps> = ({
  isIcon,
  text,
  ariaLabel,
  className = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  const buttonClasses = classNames('', className);

  return (
    <>
      {isIcon ? (
        <button
          className={buttonClasses}
          onClick={onToggleShowModal}
          aria-label={ariaLabel}
          type="button"
        >
          <BasketIcon width={28} height={28} />
        </button>
      ) : (
        <button className={className} type="button" onClick={onToggleShowModal}>
          {text}
        </button>
      )}

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        <div className="text-black">content of basket</div>
      </ModalWindow>
    </>
  );
};
