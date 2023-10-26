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

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const {
    sidePanelMenu,
    nav,
    mobileMenu,
    // toHomePage,
    languageButtonText,
    logoAriaLabelText,
    forBusinesBtnText,
  } = data;
  const pathname = usePathname();

  console.log(pathname);
  const lang = useParams().lang as Locale;

  // const business = pathname.includes('/business');

  return (
    <header>
      <div className="container h-[100px]">
        <nav className="flex items-center justify-between pt-9">
          {/* //if home page */}
          <SideMenu
            btnAriaClose={sidePanelMenu.closePanelBtnAriaText}
            btnAriaOpen={sidePanelMenu.openPanelBtnAriaText}
            links={nav}
          />

          <MobileMenu
            businessText={forBusinesBtnText}
            links={nav}
            languageButtonText={languageButtonText}
            btnAriaClose={mobileMenu.closeMenuBtnAriaText}
            btnAriaOpen={mobileMenu.openMenuBtnAriaText}
          />
          <div className="flex items-center">
            <Logo aria={logoAriaLabelText} position="header" />
            {/* <div className="flex items-center"> */}
            <BusinessLink
              isIcon={true}
              text={forBusinesBtnText}
              className="md:mr-6 xl:mr-[88px] smOnly:hidden"
            />
            <TranslationSwitcher
              lang={lang}
              buttonText={languageButtonText}
              className="md:mr-[38px] xl:mr-9 smOnly:hidden"
            />

            <BasketButton isIcon={true} />
            {/* </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};
