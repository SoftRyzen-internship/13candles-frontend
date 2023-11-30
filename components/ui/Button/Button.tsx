'use client';

import React from 'react';
import classNames from 'classnames';

import { smoothScroll } from '@/utils';
import { ButtonProps } from '@/components/ui/Button/types';

export const Button: React.FC<ButtonProps> = ({
  tag = 'a',
  label,
  href,
  className = '',
  buttonType,
  disabled,
  theme,
  ariaLabel,
  onClick,
}) => {
  const btn = classNames(
    'w-full py-3 px-5 text-center text-[20px] leading-6 font-medium border border-black-light cursor-pointer common-transition shrink-0',
  );

  const btnDefault = classNames(
    'notXl:bg-black-light xl:border-black-light xl:text-black-light xl:bg-body notXl:text-white mx-auto block',
    'xl:border xl:py-[11px]',
    'xl:hover:bg-black-light xl:focus:bg-black-light xl:hover:text-white xl:focus:text-white',
    'xl:active:bg-black-light xl:active:text-white',
  );
  const btnWhite = classNames(
    'mb-[8px] xl:mb-0 text-black-light uppercase bg-body hover:bg-black-light hover:text-white active:bg-black-light active:text-white',
  );
  const btnDark = classNames(
    'bg-black-light text-white uppercase hover:bg-body hover:text-black-light active:bg-body active:text-black-light',
  );

  const btnStyles = classNames(
    btn,
    { [btnDefault]: !theme },
    { [btnWhite]: theme === 'white' },
    { [btnDark]: theme === 'dark' },
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
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};
