'use client';

import { useCartStore } from '@/store';
import { useRehydrate } from '@/utils';

import { BasketProps } from './types';
import { BasketOrder } from '../BasketOrder';

export const Basket: React.FC<BasketProps> = ({ title, data }) => {
  const { emptyBasketText, orderCard } = data;

  useRehydrate();
  const selectedProducts = useCartStore(store => store.items);

  return (
    <div>
      <h3 className="title-lg mb-4 border-b border-gray pb-4 md:mb-8 xl:mb-6 xl:pb-6">
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
