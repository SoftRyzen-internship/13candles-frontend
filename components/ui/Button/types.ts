export interface ButtonProps {
  tag: 'a' | 'button';
  label: string;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  theme?: 'dark' | 'white';
  ariaLabel?: string;
}
