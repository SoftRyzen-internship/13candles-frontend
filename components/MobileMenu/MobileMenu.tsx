'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useParams } from 'next/navigation';

import { NavLinks } from '../ui/NavLinks';
import { TranslationSwitcher } from '../TranslationSwitcher';
import { BusinessLink } from '../ui/BusinessLink';
import { MenuButton } from '../ui/MenuButton';

import { MobileMenuProps } from './types';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  businessText,
  links,
  btnAriaOpen,
  btnAriaClose,
  isHomePage = true,
}) => {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const { lang } = useParams();
  const currentLang = lang.toString() === 'en' ? 'Eng' : 'Укр';

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {};
  }, [isOpen]);

  return (
    <>
      <MenuButton
        btnAriaClose={btnAriaClose}
        btnAriaOpen={btnAriaOpen}
        isOpen={isOpen}
        onClick={() => setOpen(prev => !prev)}
        className=" md:hidden"
      />

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
        classNames="mobile"
      >
        <div
          ref={nodeRef}
          className=" fixed bottom-0 left-0 right-0 top-[100px] z-10 overflow-auto bg-body md:hidden"
        >
          <div className="container grid gap-9 py-7 text-center text-lg">
            <TranslationSwitcher lang={currentLang} />
            {isHomePage && (
              <NavLinks
                onClick={() => setOpen(false)}
                className="grid"
                links={links}
              />
            )}

            <BusinessLink
              className="mx-auto inline-flex text-lg"
              isIcon={true}
              text={businessText}
            />
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
