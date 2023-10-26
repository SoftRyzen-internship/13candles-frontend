import React from 'react';
import classNames from 'classnames';

import { MenuButtonProps } from './types';

export const MenuButton: React.FC<MenuButtonProps> = ({
  isOpen,
  onClick,
  btnAriaClose = '',
  btnAriaOpen = '',
  className = '',
}) => {
  const burgerStyle = classNames(
    'hamburger',
    {
      'is-active': isOpen,
    },
    className,
  );

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? btnAriaClose : btnAriaOpen}
      className={burgerStyle}
    >
      <span></span>
    </button>
  );
};
