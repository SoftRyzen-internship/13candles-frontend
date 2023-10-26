export interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  btnAriaClose: string;
  btnAriaOpen: string;
  className?: string;
}
