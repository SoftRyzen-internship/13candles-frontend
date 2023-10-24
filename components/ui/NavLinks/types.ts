export type NavLink = {
  name: string;
  href: string;
};

export interface NavLinksProps {
  links: NavLink[];
  className?: string;
  onClick?: () => void;
}
