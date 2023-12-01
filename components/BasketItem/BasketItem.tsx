'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { Counter } from '../ui/Counter';

import { useCartStore } from '@/store';

import { IBasketItemProps } from './types';

import { Locale } from '@/i18n.config';

import IconBasket from '@/public/icons/icon_basket.svg';

export const BasketItem: React.FC<IBasketItemProps> = ({
  productData: { quantity, product, totalPrice },
  description,
}) => {
  const lang = useParams().lang as Locale;
  const [count, setCount] = useState(quantity);

  const deleteProduct = useCartStore(store => store.deleteProduct);
  const increment = useCartStore(store => store.addOneProduct);
  const decrement = useCartStore(store => store.deleteOneProduct);

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
      increment(en_title, aroma);
    } else {
      decrement(en_title, aroma);
    }

    setCount(num);
  };

  return (
    <li className="justify-between border-b border-gray-light pb-4 xl:flex xl:pb-3">
      <div className="mb-4 flex xl:mb-0 xl:w-[320px] xl:shrink-0">
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
            <p
              className={`${en_capacity ? 'mb-2 md:mb-1' : ''} md:text-[12px]`}
            >
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

      <div className="flex items-center justify-between xl:w-full">
        <Counter
          count={count}
          setCount={handleClick}
          ariaMinus={description.arias.delOne}
          ariaPlus={description.arias.addOne}
        />

        <p className="ml-2 font-montserrat text-lg font-medium md:text-xl">
          {totalPrice}&nbsp;₴
        </p>

        <button
          type="button"
          onClick={() => deleteProduct(en_title, aroma)}
          aria-label={description.arias.delete}
          className="ml-2"
        >
          <IconBasket width="24" height="24" />
        </button>
      </div>
    </li>
  );
};
