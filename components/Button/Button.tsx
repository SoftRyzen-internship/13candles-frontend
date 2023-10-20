'use client';
import React from 'react';
import classNames from 'classnames';

import { smoothScroll } from '@/utils';
import { ButtonProps } from '@/components/Button/type';

export const Button: React.FC<ButtonProps> = ({
  tag: Tag = 'a',
  label,
  href,
  children,
  className,
}) => {
  const btnStyles = classNames('button', className);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    smoothScroll(e, href!);
  };

  return (
    <Tag
      href={href}
      className={btnStyles}
      onClick={href ? handleOnClick : undefined}
      aria-label={label}
    >
      {label}
      {children}
    </Tag>
  );
};
