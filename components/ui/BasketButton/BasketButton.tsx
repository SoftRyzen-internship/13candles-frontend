'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { ModalWindow } from '@/components/ui/ModalWindow';
import { Basket } from '@/components/Basket';

import { useCartStore } from '@/store';
import { useRehydrate } from '@/utils/useRehydrate';

import { BasketButtonProps } from './types';

import BasketIcon from '/public/icons/icon_cart.svg';

export const BasketButton: React.FC<BasketButtonProps> = ({
  isIcon,
  data,
  text,
  className = '',
  form,
}) => {
  useRehydrate();

  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  const storedTotal = useCartStore(store => store.totalItems);

  const {
    buttons: { cartBtnAriaLabel, makeOrderBtn },
    title,
    titleCart,
  } = data;

  const modalTitle = isIcon && storedTotal === 0 ? titleCart : title;

  const buttonClasses = classNames(
    {
      'relative h-7 w-7': isIcon,
      link: !isIcon,
    },
    className,
  );

  const tagClasses = classNames(
    'bg-red-light absolute right-0 top-0 flex h-3 w-3 items-center justify-center rounded-full text-[8px] font-bold leading-[1px] text-white',
    { 'w-4': storedTotal > 99 },
  );

  return (
    <>
      {isIcon && (
        <button
          className={buttonClasses}
          onClick={onToggleShowModal}
          aria-label={cartBtnAriaLabel}
          type="button"
        >
          <BasketIcon width={28} height={28} />
          {storedTotal > 0 && <span className={tagClasses}>{storedTotal}</span>}
        </button>
      )}

      {!isIcon && text && (
        <button
          className={buttonClasses}
          onClick={onToggleShowModal}
          type="button"
        >
          {text}
        </button>
      )}

      {!isIcon && !text && (
        <button
          className={`common-transition w-full border-[1px] border-transparent bg-black-light py-3 text-center text-lg font-medium uppercase text-white hover:border-black-light hover:bg-white hover:text-black-light focus:border-black-light focus:bg-white focus:text-black-light ${className}`}
          onClick={onToggleShowModal}
          type="button"
        >
          {makeOrderBtn}
        </button>
      )}

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        <Basket title={modalTitle} data={data} form={form} />
      </ModalWindow>
    </>
  );
};
