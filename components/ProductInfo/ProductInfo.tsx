'use client';
import React from 'react';
import classNames from 'classnames';

import { IProductInfo } from './types';
import { Counter } from '../ui/Counter';
//import { Button } from '../ui/Button';

export const ProductInfo: React.FC<IProductInfo> = ({
  product,
  className,
  prodDescription,
}) => {
  const {
    attributes: { title, price, description, aromas, information, capacity },
  } = product;

  const { amount, add, purchase } = prodDescription;

  const btn = classNames(
    'w-full py-3 px-5 text-center text-[20px] font-medium border border-black-light uppercase cursor-pointer common-transition box-border shrink-0',
  );
  const btnWhite = classNames(
    'xl:w-[242px] mb-[8px] xl:mb-0 text-black-light bg-body hover:bg-black-light focus:bg-black-light hover:text-white focus:text-white active:bg-black-light active:text-white',
    btn,
  );
  const btnDark = classNames(
    'xl:w-[266px] bg-black-light text-white hover:bg-body focus:bg-body hover:text-black-light focus:text-black-light active:bg-body active:text-black-light',
    btn,
  );

  return (
    <div
      className={`${className} w-full shrink-0 pt-6 outline outline-1 outline-red sm:w-[440px] md:w-[331px] xl:w-[532px]`}
    >
      <h2 className="mb-4 text-2xl font-bold xl:mb-6 xl:text-[40px]">
        {title}
      </h2>

      <p className="mb-4 xl:mb-6">{description}</p>

      {capacity && (
        <p className="mb-3 xl:mb-6">
          <span className="font-semibold">{amount}: </span>
          {capacity}
        </p>
      )}

      {aromas && <p>aromas</p>}

      <div className="mb-4 flex justify-between md:justify-normal xl:mb-6">
        <p className="font-['Montserrat'] text-xl font-medium">{`${price} ₴ / шт`}</p>
        <Counter caption="К-сть:" size="sm" className="md:ml-[82px]" />
      </div>

      <div className="mb-4 justify-between xl:mb-6 xl:flex">
        <button type="button" className={btnWhite}>
          {add}
        </button>

        <button type="button" className={btnDark}>
          {purchase}
        </button>
      </div>

      <div className="mb-4 border-t border-black-light/25 xl:mb-6"></div>

      <p>{information}</p>
    </div>
  );
};
