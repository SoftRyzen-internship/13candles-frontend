'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '../../components/ui/Logo';
import { SideMenu } from '../../components/SideMenu';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = () => {
  // const { sidePanelMenu, nav, toHomePage, logoAriaLabelText } = header;
  // const pathname = usePathname();
  // const router = useRouter();

  // console.log(params);
  return (
    <header>
      <div className="container h-[100px]">
        <nav className="flex items-center justify-between">
          {/* //if not home page */}
          {/* <SideMenu
            btnAriaClose={sidePanelMenu.closePanelBtnAriaText}
            btnAriaOpen={sidePanelMenu.openPanelBtnAriaText}
            links={nav}
          />
          <Logo aria={logoAriaLabelText} position="header" /> */}
        </nav>
      </div>
    </header>
  );
};
