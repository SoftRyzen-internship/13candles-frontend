'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AddToCartBtn } from './AddToCartBtn';

import { useCartStore } from '@/store';

import { ProductDataInfo } from '@/types/Products';
import { IOrderModalStatic } from '@/types/OrderModalStatic';
// import { BasketButton } from '../BasketButton';

type Props = {
  product: ProductDataInfo;
  dataOrder: IOrderModalStatic;
};

export const FakeProductCard: React.FC<Props> = ({ product, dataOrder }) => {
  const {
    buttons: { addToCartBtn, addToCartSuccessText },
  } = dataOrder;

  const {
    attributes: { title, price, capacity, main_image, aromas, description },
  } = product;

  const [quantity, setQuantity] = useState(1);

  const addProduct = useCartStore(store => store.addProduct);

  const aromaTitle = aromas ? 'Some aroma...' : undefined; //the value from aroma-dropdown/checkbox

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

    toast.success(addToCartSuccessText);

    setQuantity(1);
  };

  return (
    <>
      <div className="outline-dashed outline-cyan-600 md:w-[332px] xl:w-[532px]">
        <div className="flex items-end gap-[32px]">
          <div>
            <p className="text-xl font-bold">{title}</p>
            <p>{description}</p>
            <p>Capacity: {capacity}</p>
            <p>Price: {price}</p>
          </div>
          <div className="flex items-center gap-2">
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

        <div className="flex flex-col gap-2 xl:flex-row xl:gap-6">
          <AddToCartBtn label={addToCartBtn} onClick={addToCart} />
          {/* <BasketButton isIcon={false} data={dataOrder} /> */}
        </div>
      </div>

      <ToastContainer position="top-center" />
    </>
  );
};
