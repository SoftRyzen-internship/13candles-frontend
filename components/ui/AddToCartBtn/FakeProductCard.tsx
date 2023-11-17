'use client';

import { useState } from 'react';

import { AddToCartBtn } from './AddToCartBtn';

import { useCartStore } from '@/store';

import { Locale } from '@/i18n.config';
import { ProductDataInfo } from '@/types/Products';

type Props = {
  lang: Locale;
  data: ProductDataInfo;
};

export const FakeProductCard: React.FC<Props> = ({ lang, data }) => {
  const addToCartBtnLabel = lang === 'en' ? 'Add to cart' : 'Додати у кошик';

  // console.log('product: ', data);
  const {
    attributes: { title, price, capacity, main_image, aromas },
  } = data;

  const [quantity, setQuantity] = useState(1);

  const addProduct = useCartStore(store => store.addProduct);

  const aromaTitle = aromas ? 'Some aroma...' : undefined;

  const addToCart = () => {
    if (quantity < 1) return;

    addProduct(
      {
        title,
        capacity,
        price,
        image: main_image,
        aroma: aromaTitle,
      },
      quantity,
    );

    alert('the product has been added to the cart');

    setQuantity(1);
  };

  return (
    <div className="my-4 outline-dashed outline-cyan-600 md:w-[332px] xl:w-[532px]">
      <div className="flex items-start gap-[32px]">
        <div>
          <p>Title: {title}</p>
          <p>Capacity: {capacity}</p>
          <p>Price: {price}</p>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <button
            className="h4 w-4 outline-dashed"
            onClick={() => {
              setQuantity(prev => prev - 1);
            }}
          >
            -
          </button>
          <span className="text-[20px] font-bold">{quantity}</span>
          <button
            className="h4 w-4 outline-dashed"
            onClick={() => {
              setQuantity(prev => prev + 1);
            }}
          >
            +
          </button>
        </div>
      </div>

      <AddToCartBtn label={addToCartBtnLabel} onClick={addToCart} />
    </div>
  );
};
