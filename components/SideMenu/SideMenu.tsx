'use client';
import { CSSTransition } from 'react-transition-group';
import { Squash as Hamburger } from 'hamburger-react';
import { useRef, useState } from 'react';

import { NavLinks } from '../ui/NavLinks';
import { SideMenuProps } from './types';
import css from './SideMenu.module.css';

export const SideMenu: React.FC<SideMenuProps> = ({
  links = [],
  btnAriaOpen,
  btnAriaClose,
  className = '',
}) => {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div className={`flex items-center smOnly:hidden ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        aria-label={isOpen ? btnAriaClose : btnAriaOpen}
      >
        <Hamburger
          duration={0.3}
          toggled={isOpen}
          distance="sm"
          size={20}
          color="#171717"
          easing="ease-in-out"
          rounded
        />
      </button>

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: css['fade-enter'],
          enterActive: css['fade-enter-active'],
          exit: css['fade-exit'],
          exitActive: css['fade-exit-active'],
        }}
      >
        <div ref={nodeRef}>
          <NavLinks links={links} className="ml-6" />
        </div>
      </CSSTransition>
    </div>
  );
};
