'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { defineCurrentPage } from '@/utils';

import { Logo } from '../../components/ui/Logo';
import { SideMenu } from '../../components/SideMenu';
import { MobileMenu } from '@/components/MobileMenu';
import { BasketButton } from '@/components/ui/BasketButton';
import { BusinessLink } from '@/components/ui/BusinessLink';
import { TranslationSwitcher } from '@/components/TranslationSwitcher';

import { Locale } from '@/i18n.config';
import { Pages } from '@/types/Pages';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const {
    sidePanelMenu,
    nav,
    mobileMenu,
    toHomePage,
    languageButtonText,
    logoAriaLabelText,
    forBusinesBtnText,
    basketAriaLabel,
  } = data;

  const pathname = usePathname();

  const lang = useParams().lang as Locale;

  const page: Pages = defineCurrentPage(pathname);

  return (
    <header className="z-10 w-full bg-body pb-6 pt-9 md:pb-8 xl:pb-10 smOnly:fixed">
      <div className="smOnly:header-underline container relative">
        <nav className="grid grid-cols-3 items-center justify-items-stretch">
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
                className="h-6 items-center sm:flex md:mr-6 xl:mr-[88px] smOnly:hidden"
              />
            )}
            <TranslationSwitcher
              lang={lang}
              buttonText={languageButtonText}
              className="md:mr-7 xl:mr-9 smOnly:hidden"
            />
            <BasketButton isIcon={true} ariaLabel={basketAriaLabel} />
          </div>
        </nav>
      </div>
    </header>
  );
};
