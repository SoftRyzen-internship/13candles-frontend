import { InformationProps } from '@/components/Information/type';
import { SoftRyzenProps } from '@/components/SoftRyzen/types';

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
  social_text: string;
  social: {
    href: string;
    icon: string;
    text: string;
  }[];
  information: InformationProps;
  soft_ryzen: SoftRyzenProps;
};
