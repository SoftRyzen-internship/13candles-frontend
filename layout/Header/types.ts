export interface HeaderProps {
  header: {
    sidePanelMenu: {
      openPanelBtnAriaText: string;
      closePanelBtnAriaText: string;
    };
    mobileMenu: {
      openMenuBtnAriaText: string;
      closeMenuBtnAriaText: string;
    };
    nav: {
      name: string;
      href: string;
    }[];
    toHomePage: {
      name: string;
      href: string;
    };
    logoAriaLabelText: string;
    forBusinesBtnText: string;
    language: string;
  };
}
