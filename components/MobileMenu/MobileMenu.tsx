'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import { useParams, usePathname } from 'next/navigation';

import { NavLinks } from '../ui/NavLinks';
import { TranslationSwitcher } from '../TranslationSwitcher';
import { BusinessLink } from '../ui/BusinessLink';
import { MenuButton } from '../ui/MenuButton';

import { MobileMenuProps } from './types';
import { Locale } from '@/i18n.config';
import { checkPageName } from '@/utils';
import { FOR_BUSINESS, HOME } from '@/data';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  languageButtonText,
  businessText,
  links,
  btnAriaOpen,
  btnAriaClose,
  toHomePage,
}) => {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);

  const pathname = usePathname();
  const lang = useParams().lang as Locale;
  const isHomePage = checkPageName(pathname, HOME);
  const isBusinessPage = checkPageName(pathname, FOR_BUSINESS);

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
            <TranslationSwitcher
              lang={lang}
              buttonText={languageButtonText}
              className="mx-auto inline-flex"
            />
            {isHomePage ? (
              <NavLinks
                onClick={() => setOpen(false)}
                className="grid"
                links={links}
              />
            ) : (
              <Link
                href={`${toHomePage.href}${lang}`}
                onClick={() => setOpen(false)}
                className="link mx-auto max-w-max"
              >
                {toHomePage.name}
              </Link>
            )}

            {!isBusinessPage && (
              <BusinessLink
                className="mx-auto inline-flex text-lg"
                isIcon={true}
                text={businessText}
                onClick={() => setOpen(false)}
              />
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
