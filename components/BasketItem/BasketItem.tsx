'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { IBasketItemProps } from './types';

import { useCartStore } from '@/store';

import { Counter } from '../ui/Counter';

import { Locale } from '@/i18n.config';

import IconBasket from '@/public/icons/icon_basket.svg';

export const BasketItem: React.FC<IBasketItemProps> = ({
  productData: { quantity, product, totalPrice },
  description,
}) => {
  const lang = useParams().lang as Locale;
  const [count, setCount] = useState(quantity);

  const deleteProduct = useCartStore(store => store.deleteProduct);
  const addOneProduct = useCartStore(store => store.addOneProduct);
  const deleteOneProduct = useCartStore(store => store.deleteOneProduct);

  const {
    uk_image,
    uk_title,
    uk_capacity,
    en_image,
    en_title,
    en_capacity,
    aroma,
  } = product;
  const isUk = lang === 'uk';

  const handleClick = (num: number) => {
    if (num > count) {
      addOneProduct(en_title, aroma);
    } else {
      deleteOneProduct(en_title, aroma);
    }

    setCount(num);
  };

  return (
    <li className="justify-between border-b border-gray-light pb-4 xl:flex xl:pb-3">
      <div className="mb-4 flex xl:w-[320px] xl:shrink-0">
        <Image
          src={en_image.photo.data.attributes.url}
          alt={isUk ? uk_image.image_description : en_image.image_description}
          width="64"
          height="64"
          className="h-[88px] w-[88px] object-cover xl:h-[64px] xl:w-[64px]"
        />

        <div className="ml-4 pt-2 text-gray xl:pt-1">
          <p className="mb-2 text-lg font-bold text-black-light md:mb-1 md:text-base">
            {isUk ? uk_title : en_title}
          </p>

          {aroma && (
            <p className={`${en_capacity && 'mb-2 md:mb-1'} md:text-[12px]`}>
              {description.aromaText} {aroma}
            </p>
          )}

          {en_capacity && (
            <p className="md:text-[12px]">
              {description.capacityText}: {isUk ? uk_capacity : en_capacity}
            </p>
          )}
        </div>
      </div>

      <div className="xl:justify-left flex items-center justify-between xl:w-full">
        <Counter
          count={count}
          setCount={handleClick}
          className="xl:w-[236px]"
        />

        <p className="font-montserrat text-lg  font-medium md:text-xl">
          {totalPrice} ₴
        </p>

        <button
          type="button"
          onClick={() => deleteProduct(en_title, aroma)}
          className="xl:ml-auto"
        >
          <IconBasket width="24" height="24" />
        </button>
      </div>
    </li>
  );
};
