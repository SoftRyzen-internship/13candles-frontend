export type FooterProps = {
  logoAriaLabelText: string;
  contacts: {
    href: string;
    icon: string;
    text: string;
  }[];
  nav_text: string;
  nav: {
    name: string;
    href?: string;
  }[];
  basketText: string;
  forBusinesBtnText: string;
  info_text: string;
  info: string[];
  social_text: string;
  social: {
    href: string;
    icon: string;
    text: string;
  }[];
  soft_ryzen: {
    name: string;
    href: string;
  };
};
