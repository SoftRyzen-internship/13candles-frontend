'use client';

import { useState } from 'react';

import { useCartStore } from '@/store';
import { useRehydrate } from '@/utils/useRehydrate';

import { BasketProps } from './types';
import { BusinessForm } from '../BusinessForm';
import { PopUpType } from '@/types';

export const Basket: React.FC<BasketProps> = ({ title, data, form }) => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');

  const { emptyBasketText, orderCard } = data;

  useRehydrate();
  const selectedProducts = useCartStore(store => store.items);
  const totalPrice = useCartStore(store => store.totalPrice);
  const deleteProduct = useCartStore(store => store.deleteProduct);

  return (
    <div>
      <h3 className="title-lg mb-4 border-b border-gray pb-4 md:mb-8 xl:mb-6 xl:pb-6">
        {title}
      </h3>

      {selectedProducts.length > 0 ? (
        // Placeholder for future order-list & order-form elements:
        <div className="flex border">
          <div className="flex items-end justify-between border">
            <ul className="flex flex-col gap-2">
              {selectedProducts.map(
                ({ quantity, product: { title, aroma, capacity, price } }) => (
                  <li key={aroma ? title + aroma : title}>
                    <p className="font-bold">{title}</p>

                    {aroma && (
                      <p>
                        {orderCard.aromaText} {aroma}
                      </p>
                    )}

                    <p>
                      {orderCard.capacityText}: {capacity}
                    </p>

                    <div className="flex gap-[32px]">
                      <div>
                        <button
                          type="button"
                          aria-label={orderCard.increaseQtyBtn}
                        >
                          +
                        </button>

                        <span>{quantity}</span>

                        <button
                          type="button"
                          aria-label={orderCard.decreaseQtyBtn}
                        >
                          -
                        </button>
                      </div>

                      <p>{price}</p>

                      <button
                        onClick={() => deleteProduct(title, aroma)}
                        type="button"
                        aria-label={orderCard.deleteProductBtn}
                      >
                        [delete icon]
                      </button>
                    </div>
                  </li>
                ),
              )}
            </ul>

            <p>
              {orderCard.totalPriceText} {totalPrice}
            </p>
          </div>
          {popUpType === 'default' && (
            <BusinessForm
              staticData={form}
              section={'cart'}
              setPopUpType={setPopUpType}
            />
          )}
        </div>
      ) : (
        // If users cart is empty or Send order was pressed:
        <>
          {popUpType === 'default' && (
            <p className="pb-11 pt-2 text-center text-lg font-medium md:pb-[104px] md:pt-4 xl:text-xl">
              <span>{emptyBasketText.subtitle}</span>
              <br />
              <span>{emptyBasketText.tip}</span>
            </p>
          )}
          {popUpType === 'success' && <p>text about success</p>}
          {popUpType === 'error' && <p>text about error</p>}
        </>
      )}
    </div>
  );
};
