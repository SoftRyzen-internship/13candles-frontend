'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { ModalWindow } from '@/components/ui/ModalWindow';
import { BasketButtonProps } from './types';
import BasketIcon from '/public/icons/icon_cart.svg';
import { Basket } from '@/components/Basket';

export const BasketButton: React.FC<BasketButtonProps> = ({
  isIcon,
  text,
  ariaLabel,
  className = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  const buttonClasses = classNames(
    {
      'h-7 w-7': isIcon,
      link: !isIcon,
    },
    className,
  );

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
        <button
          className={buttonClasses}
          onClick={onToggleShowModal}
          type="button"
        >
          {text}
        </button>
      )}

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        <Basket basket={text || ariaLabel} />
      </ModalWindow>
    </>
  );
};
