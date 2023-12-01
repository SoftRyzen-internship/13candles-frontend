'use client';
import React, { useEffect, useState } from 'react';

import Markdown from 'react-markdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IProductInfo } from './types';

import { useCartStore } from '@/store';

import { Aromas } from '../Aromas';
import { Counter } from '../ui/Counter';
import { Button } from '../ui/Button';
import { BasketButton } from '../ui/BasketButton';
import { Locale, i18n } from '@/i18n.config';
import { CustomTagProps } from '../ui/InformationText/types';

export const ProductInfo: React.FC<IProductInfo> = ({
  product,
  className = '',
  prodDescription,
  orderDescription,
  aromasData,
  lang,
  form,
}) => {
  const [count, setCount] = useState(1);
  const [aromaName, setAromaName] = useState('');
  const addProduct = useCartStore(store => store.addProduct);

  const {
    orderCard: { arias },
  } = orderDescription;

  useEffect(() => {
    setCount(1);
  }, [aromaName]);

  const {
    attributes: { title, price, description, aromas, information, capacity },
  } = product[lang][0];

  const arrData = i18n.locales.map((item: Locale) => {
    return {
      [item + '_title']: product[item][0]?.attributes.title || '',
      [item + '_capacity']: product[item][0]?.attributes.capacity || '',
      [item + '_image']: product[item][0]?.attributes.main_image || {},
    };
  });

  const dataForStore = Object.assign(
    {
      price,
      aroma: aromaName,
    },
    ...arrData,
  );

  const { amount, add, quantity, pieces } = prodDescription;

  const MD_P = ({ children }: CustomTagProps) => (
    <p className="mb-3 last:mb-0 md:mb-4 xl:mb-2">{children}</p>
  );

  const addToCart = () => {
    if (count < 1) return;

    addProduct(dataForStore, count);

    toast.success(orderDescription.buttons.addToCartSuccessText);

    setCount(1);
  };

  return (
    <div
      className={`${className} w-full shrink-0 sm:w-[440px] md:w-[331px] xl:w-[532px] xl:pt-6`}
    >
      <h2 className="mb-3 text-2xl font-bold xl:mb-6 xl:text-[40px]">
        {title}
      </h2>

      <div className="mb-4 xl:mb-6">
        <Markdown
          components={{
            p: MD_P,
          }}
        >
          {description}
        </Markdown>
      </div>

      {capacity && (
        <p className="mb-4 xl:mb-6">
          <span className="font-semibold">{amount}: </span>
          {capacity}
        </p>
      )}

      {aromas && (
        <Aromas
          aromas={aromasData}
          prodDescription={prodDescription}
          setAromaName={setAromaName}
          className="mb-6 xl:mb-9"
        />
      )}

      <div className="mb-4 flex justify-between xl:mb-6 xl:justify-normal">
        <p className="font-montserrat text-[20px] font-medium">
          {`${price} ₴ / ${pieces}.`}
        </p>

        <Counter
          caption={quantity}
          size="sm"
          count={count}
          setCount={setCount}
          className="xl:ml-[82px]"
          ariaMinus={arias.delOne}
          ariaPlus={arias.addOne}
        />
      </div>

      <div className="mb-4 flex flex-col items-center md:justify-between xl:mb-6 xl:flex-row">
        <Button
          tag="button"
          label={add}
          onClick={addToCart}
          buttonType="button"
          theme="white"
          className="xl:w-[242px] smOnly:max-w-[280px]"
        />

        <BasketButton
          isIcon={false}
          data={orderDescription}
          form={form}
          className="xl:w-[266px] smOnly:max-w-[280px]"
        />
      </div>

      <div className="mb-4 border-t border-black-light/25 xl:mb-6"></div>

      <div className="flex">
        <p>*</p>
        <div>
          <Markdown
            components={{
              p: MD_P,
            }}
          >
            {information}
          </Markdown>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};
