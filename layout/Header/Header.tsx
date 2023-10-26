'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '../../components/ui/Logo';
import { SideMenu } from '../../components/SideMenu';
import { HeaderProps } from './types';
import { MobileMenu } from '@/components/MobileMenu';
import { BasketButton } from '@/components/ui/BasketButton';

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

  console.log(pathname);

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
          <Logo aria={logoAriaLabelText} position="header" />
          <BasketButton isIcon={true} />
        </nav>
      </div>
    </header>
  );
};
