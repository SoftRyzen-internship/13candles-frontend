'use client';

import React from 'react';
import classNames from 'classnames';

import { smoothScroll } from '@/utils';
import { ButtonProps } from '@/components/ui/Button/types';

export const Button: React.FC<ButtonProps> = ({
  tag = 'a',
  label,
  href,
  className,
  buttonType,
  disabled,
  onClick,
}) => {
  const btnStyles = classNames(
    'common-transition notXl:bg-black-light xl:border-black-light xl:text-black-light xl:bg-body notXl:text-white mx-auto block',
    'w-full cursor-pointer px-12 py-3 text-center text-[20px] font-medium leading-6 xl:border xl:py-[11px]',
    'xl:hover:bg-black-light xl:focus:bg-black-light xl:hover:text-white xl:focus:text-white',
    'xl:active:bg-black-light xl:active:text-white',
    className,
  );

  return tag === 'a' ? (
    <a href={href} className={btnStyles} onClick={e => smoothScroll(e, href)}>
      {label}
    </a>
  ) : (
    <button
      type={buttonType}
      disabled={disabled}
      className={btnStyles}
        onClick={onClick}
        



        
    >
      {label}
    </button>
  );
};
