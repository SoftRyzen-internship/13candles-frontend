export interface ButtonProps {
  tag: 'a' | 'button';
  label: string;
  href?: string;
  children?: React.ReactNode;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
