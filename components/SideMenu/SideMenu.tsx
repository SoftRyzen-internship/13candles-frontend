'use client';
import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePathname } from 'next/navigation';

import { MenuButton } from '../ui/MenuButton';
import { NavLinks } from '../ui/NavLinks';
import { SideMenuProps } from './types';

export const SideMenu: React.FC<SideMenuProps> = ({
  links = [],
  btnAriaOpen,
  btnAriaClose,
  className = '',
}) => {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const path = usePathname();
  const homePage = path === '/en' || path === '/uk';

  return (
    <div className={` flex items-center smOnly:hidden ${className}`}>
      <MenuButton
        btnAriaClose={btnAriaClose}
        btnAriaOpen={btnAriaOpen}
        isOpen={isOpen}
        onClick={() => setOpen(prev => !prev)}
      />

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
        classNames={'fade'}
      >
        <div ref={nodeRef}>
          {homePage && (
            <NavLinks
              links={links}
              onClick={() => setOpen(false)}
              className="ml-6"
            />
          )}
        </div>
      </CSSTransition>
    </div>
  );
};
