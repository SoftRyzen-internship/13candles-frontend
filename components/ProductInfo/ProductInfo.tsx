'use client';
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IProductInfo } from './types';

import { useCartStore } from '@/store';

import { Aromas } from '../Aromas';
import { Counter } from '../ui/Counter';
import { Button } from '../ui/Button';
import { BasketButton } from '../ui/BasketButton';

export const ProductInfo: React.FC<IProductInfo> = ({
  product,
  className,
  prodDescription,
  orderDescription,
  aromasData,
}) => {
  const [count, setCount] = useState(1);
  const [aromaName, setAromaName] = useState('');
  const addProduct = useCartStore(store => store.addProduct);

  const {
    attributes: {
      title,
      price,
      description,
      aromas,
      information,
      capacity,
      main_image,
    },
  } = product;

  const { amount, add, quantity, pieces } = prodDescription;
  const addToCart = () => {
    if (count < 1) return;

    addProduct(
      {
        title,
        capacity,
        price,
        image: main_image,
        aroma: aromaName,
      },
      count,
    );

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

      <p className="mb-4 xl:mb-6">{description}</p>

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

      <div className="mb-4 flex justify-between md:justify-normal xl:mb-6">
        <p className="font-montserrat text-[20px] font-medium">
          {`${price} ₴ / ${pieces}`}
        </p>

        <Counter
          caption={quantity}
          size="sm"
          count={count}
          setCount={setCount}
          className="md:ml-[82px]"
        />
      </div>

      <div className="mb-4 justify-between xl:mb-6 xl:flex">
        <Button
          tag="button"
          label={add}
          onClick={addToCart}
          buttonType="button"
          theme="white"
          className="xl:w-[242px]"
        />

        <BasketButton
          isIcon={false}
          data={orderDescription}
          className="xl:w-[266px]"
        />
      </div>

      <div className="mb-4 border-t border-black-light/25 xl:mb-6"></div>

      <p>{information}</p>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};
