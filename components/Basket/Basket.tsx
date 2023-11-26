'use client';

import { BasketOrder } from '../BasketOrder';

import { useCartStore } from '@/store';
import { useRehydrate } from '@/utils/useRehydrate';

import { BasketProps } from './types';

export const Basket: React.FC<BasketProps> = ({ title, data }) => {
  const { emptyBasketText, orderCard } = data;

  useRehydrate();
  const selectedProducts = useCartStore(store => store.items);

  return (
    <div>
      <h3 className="title-lg relative mb-8 after:absolute after:bottom-[-16px] after:block after:h-[1px] after:w-full after:bg-gray md:mb-12 xl:mb-12 xl:after:bottom-[-24px]">
        {title}
      </h3>

      {selectedProducts.length > 0 ? (
        // Placeholder for future order-list & order-form elements:
        <div className="flex">
          <BasketOrder products={selectedProducts} description={orderCard} />
        </div>
      ) : (
        // If users cart is empty:
        <p className="pb-11 pt-2 text-center text-lg font-medium md:pb-[104px] md:pt-4 xl:text-xl">
          <span>{emptyBasketText.subtitle}</span>
          <br />
          <span>{emptyBasketText.tip}</span>
        </p>
      )}
    </div>
  );
};
