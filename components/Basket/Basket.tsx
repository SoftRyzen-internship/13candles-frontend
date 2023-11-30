'use client';

import { useState } from 'react';

import { BasketOrder } from '../BasketOrder';
import { BusinessForm } from '../BusinessForm';
import { SuccessNotification } from '../SuccessNotification';
import { ErrorNotification } from '../ErrorNotification';

import { useCartStore } from '@/store';
import { useRehydrate } from '@/utils/useRehydrate';

import { BasketProps } from './types';
import { PopUpType } from '@/types';

export const Basket: React.FC<BasketProps> = ({ title, data, form }) => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');

  const { emptyBasketText, orderCard } = data;
  const {
    notifications: { cart },
  } = form;

  useRehydrate();
  const selectedProducts = useCartStore(store => store.items);

  return (
    <div>
      {popUpType === 'default' && (
        <h3 className="title-lg relative mb-8 after:absolute after:bottom-[-16px] after:block after:h-[1px] after:w-full after:bg-gray md:mb-12 xl:mb-12 xl:after:bottom-[-24px]">
          {title}
        </h3>
      )}

      {selectedProducts.length > 0 ? (
        <div className="flex justify-between smOnly:flex-col smOnly:gap-6 notXl:items-center">
          {popUpType === 'default' && (
            <BasketOrder products={selectedProducts} description={orderCard} />
          )}
          {popUpType === 'default' && (
            <BusinessForm
              staticData={form}
              section={'cart'}
              setPopUpType={setPopUpType}
              className="xl:mt-9"
            />
          )}
        </div>
      ) : (
        <>
          {popUpType === 'default' && (
            <p className="pb-11 pt-2 text-center text-lg font-medium md:pb-[104px] md:pt-4 xl:text-xl">
              <span>{emptyBasketText.subtitle}</span>
              <br />
              <span>{emptyBasketText.tip}</span>
            </p>
          )}
          {popUpType === 'success' && (
            <SuccessNotification staticData={cart.success} />
          )}
        </>
      )}
      {popUpType === 'error' && (
        <ErrorNotification staticData={cart.error} section="cart" />
      )}
    </div>
  );
};
