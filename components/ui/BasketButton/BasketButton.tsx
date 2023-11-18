'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { ModalWindow } from '@/components/ui/ModalWindow';
import { Basket } from '@/components/Basket';

import { useCartStore } from '@/store';

import { BasketButtonProps } from './types';

import BasketIcon from '/public/icons/icon_cart.svg';

export const BasketButton: React.FC<BasketButtonProps> = ({
  isIcon,
  text,
  ariaLabel,
  className = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  const storedTotal = useCartStore(store => store.totalItems);

  const buttonClasses = classNames(
    {
      'relative h-7 w-7': isIcon,
      link: !isIcon,
    },
    className,
  );

  const tagClasses = classNames(
    'bg-red-light absolute right-0 top-0 inline-flex h-3 w-3 items-center justify-center rounded-full text-[8px] font-bold leading-none text-white',
    { 'text-[6px]': storedTotal > 99 },
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
          {storedTotal > 0 && <span className={tagClasses}>{storedTotal}</span>}
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
        <Basket title={text || ariaLabel} />
      </ModalWindow>
    </>
  );
};
