'use client';

import { AddToCartBtnProps } from './types';

export const AddToCartBtn: React.FC<AddToCartBtnProps> = ({
  label,
  onClick,
}) => {
  return (
    <>
      <button
        className="common-transition w-full border-[1px] py-3 text-center text-lg font-medium uppercase hover:bg-black-light hover:text-white focus:bg-black-light focus:text-white"
        type="button"
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};
