'use client';

// import { useCartStore } from '@/store';

import { AddToCartBtnProps } from './types';

export const AddToCartBtn: React.FC<AddToCartBtnProps> = ({
  label,
  onClick,
}) => {
  //   const addToCart = useCartStore(store => store.addProduct);

  //   const handleClick = () => {
  //     console.log(addToCart);

  // addToCart({ title: 'Sphere', capacity = '350мл', aroma: 'Yes, Boss' }, 1);
  //   };

  return (
    <button
      className="common-transition w-full border-[1px] px-8 py-3 text-center text-lg font-medium uppercase hover:bg-black-light hover:text-white focus:bg-black-light focus:text-white"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
