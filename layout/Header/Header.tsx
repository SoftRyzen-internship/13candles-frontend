'use client';

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import { Logo } from '../../components/ui/Logo';
import { SideMenu } from '../../components/SideMenu';
import { HeaderProps } from './types';
import { MobileMenu } from '@/components/MobileMenu';
import { BasketButton } from '@/components/ui/BasketButton';
import { BusinessLink } from '@/components/ui/BusinessLink';
import { TranslationSwitcher } from '@/components/TranslationSwitcher';
import { Locale } from '@/i18n.config';
import { defineCurrentPage } from '@/utils';
import { Pages } from '@/types/pages';
import Link from 'next/link';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const {
    sidePanelMenu,
    nav,
    mobileMenu,
    toHomePage,
    languageButtonText,
    logoAriaLabelText,
    forBusinesBtnText,
  } = data;
  const pathname = usePathname();

  const lang = useParams().lang as Locale;

  const page: Pages = defineCurrentPage(pathname);

  return (
    <header className="z-10 w-full bg-body smOnly:fixed">
      <div className="smOnly:header-underline container relative">
        <nav className="grid grid-cols-3 items-center justify-items-stretch pt-9 smOnly:pb-4">
          {page === 'Home' ? (
            <SideMenu
              btnAriaClose={sidePanelMenu.closePanelBtnAriaText}
              btnAriaOpen={sidePanelMenu.openPanelBtnAriaText}
              links={nav}
            />
          ) : (
            <Link
              className="link hidden max-w-fit items-center md:flex"
              href={`${toHomePage.href}${lang}`}
            >
              {toHomePage.name}
            </Link>
          )}

          <MobileMenu
            businessText={forBusinesBtnText}
            links={nav}
            languageButtonText={languageButtonText}
            btnAriaClose={mobileMenu.closeMenuBtnAriaText}
            btnAriaOpen={mobileMenu.openMenuBtnAriaText}
          />

          <div className="justify-self-center">
            <Logo aria={logoAriaLabelText} position="header" />
          </div>
          <div className="flex items-center justify-self-end">
            {page !== 'Business' && (
              <BusinessLink
                isIcon={true}
                text={forBusinesBtnText}
                className="md:mr-6 xl:mr-[88px] smOnly:hidden"
              />
            )}
            <TranslationSwitcher
              lang={lang}
              buttonText={languageButtonText}
              className="md:mr-7 xl:mr-9 smOnly:hidden"
            />
            <BasketButton isIcon={true} />
          </div>
        </nav>
      </div>
    </header>
  );
};
