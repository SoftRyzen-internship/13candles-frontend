import { Logo } from '../ui/Logo';
import { SideMenu } from '../SideMenu';
import { HeaderProps } from '@/types/HeaderProps';

export const Header: React.FC<HeaderProps> = ({ header }) => {
  const { sidePanelMenu, nav, toHomePage, logoAriaLabelText } = header;
  console.log(sidePanelMenu);
  return (
    <header>
      <div className="container h-[100px]">
        <nav className="flex items-center justify-between">
          {/* //if not home page */}
          <SideMenu
            btnAriaClose={sidePanelMenu.closePanelBtnAriaText}
            btnAriaOpen={sidePanelMenu.openPanelBtnAriaText}
            links={nav}
          />
          <Logo aria={logoAriaLabelText} position="header" />
        </nav>
      </div>
    </header>
  );
};
