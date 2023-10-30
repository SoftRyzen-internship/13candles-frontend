import { NavLink } from '../ui/NavLinks/types';

export interface MobileMenuProps {
  languageButtonText: string;
  businessText: string;
  links: NavLink[];
  btnAriaOpen: string;
  btnAriaClose: string;
  toHomePage: NavLink;
}
