'use client';
import React from 'react';
//import classNames from 'classnames';

import { IProductInfo } from './types';
import { Counter } from '../ui/Counter';
import { Button } from '../ui/Button';

export const ProductInfo: React.FC<IProductInfo> = ({
  product,
  className,
  prodDescription,
}) => {
  const {
    attributes: { title, price, description, aromas, information, capacity },
  } = product;

  const { amount, add, purchase } = prodDescription;

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
        <p className="font-montserrat text-xl font-medium">{`${price} ₴ / шт`}</p>
        <Counter caption="К-сть:" size="sm" className="md:ml-[82px]" />
      </div>

      <div className="mb-4 justify-between xl:mb-6 xl:flex">
        <Button
          tag="button"
          label={add}
          buttonType="button"
          theme="white"
          className="xl:w-[242px]"
        />
        <Button
          tag="button"
          label={purchase}
          buttonType="button"
          theme="dark"
          className="xl:w-[266px]"
        />
      </div>

      <div className="mb-4 border-t border-black-light/25 xl:mb-6"></div>

      <p>{information}</p>
    </div>
  );
};
