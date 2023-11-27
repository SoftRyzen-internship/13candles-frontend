import { NavLink } from '@/components/ui/NavLinks/types';
import { FormStaticDataT } from '@/types';
import { IOrderModalStatic } from '@/types/OrderModalStatic';

export interface HeaderProps {
  data: {
    sidePanelMenu: {
      openPanelBtnAriaText: string;
      closePanelBtnAriaText: string;
    };
    mobileMenu: {
      openMenuBtnAriaText: string;
      closeMenuBtnAriaText: string;
    };
    nav: NavLink[];
    toHomePage: NavLink;
    logoAriaLabelText: string;
    forBusinessBtnText: string;
    languageButtonText: string;
    basketAriaLabel: string;
    basketTitle: string;
  };
  dataOrder: IOrderModalStatic;
  form: FormStaticDataT;
}
