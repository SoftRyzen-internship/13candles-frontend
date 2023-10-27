import { NavLink } from '../ui/NavLinks/types';

export interface SideMenuProps {
  links: NavLink[] | NavLink;
  btnAriaOpen: string;
  btnAriaClose: string;
  className?: string;
}
