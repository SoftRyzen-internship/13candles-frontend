'use client';

import { BasketItem } from '../BasketItem';

import { useCartStore } from '@/store';

import { IBasketOrderProps } from './types';

export const BasketOrder: React.FC<IBasketOrderProps> = ({
  products,
  description,
}) => {
  const totalPrice = useCartStore(store => store.totalPrice);
  const { cardTitle, totalPriceText, productTitle, qty, sum } = description;

  return (
    <div className="w-full shrink-0 bg-stone-50 px-4 py-4 md:w-[422px] md:py-6 xl:w-[740px] xl:px-6 xl:py-9">
      <h3 className="relative mb-7 text-lg font-medium after:absolute after:bottom-[-12px] after:block after:h-[1px] after:w-full after:bg-gray">
        {cardTitle}
      </h3>

      <div className="mb-3 flex notXl:hidden">
        <p className="w-[320px] shrink-0">{productTitle}</p>

        <p className="w-[190px]">{qty}</p>

        <p>{sum}</p>
      </div>

      <ul className="mb-6 flex flex-col gap-4 xl:mb-12 xl:gap-3">
        {products.map(productData => {
          const { product } = productData;
          return (
            <BasketItem
              key={
                product.aroma
                  ? product.en_title + product.aroma
                  : product.en_title
              }
              productData={productData}
              description={description}
            />
          );
        })}
      </ul>

      <div className="flex justify-between text-lg">
        <p className="font-medium">{totalPriceText}:</p>
        <p className="font-montserrat font-bold ">{totalPrice}&nbsp;₴</p>
      </div>
    </div>
  );
};
