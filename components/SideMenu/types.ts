import { NavLink } from '../ui/NavLinks/types';

export interface SideMenuProps {
  links: NavLink[];
  btnAriaOpen: string;
  btnAriaClose: string;
  className?: string;
}
