import React from 'react';
import classNames from 'classnames';

import { MenuButtonProps } from './types';

export const MenuButton: React.FC<MenuButtonProps> = ({
  isOpen,
  onClick,
  btnAriaClose,
  btnAriaOpen,
  className = '',
}) => {
  const burgerStyle = classNames(
    'hamburger hamburger--squeeze',
    {
      'is-active': isOpen === true,
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
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
