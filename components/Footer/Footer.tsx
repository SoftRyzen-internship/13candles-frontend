import React from 'react';
import { Logo } from '../ui/Logo';
import { FooterNavRow } from '../FooterNavRow';
import { Information } from '../Information';
import { ContactList } from '../ContactList';
import { SoftRyzen } from '../SoftRyzen';

// import { SocialNetworks } from './SocialNetworks';
// import { SoftRyzen } from './SoftRyzen';
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
{
  /* <Footer {...footer} />; */
}
export const Footer: React.FC<FooterProps> = props => {
  return (
    <footer>
      {/* Desktop Version */}
      <div className="container ">
        <div className="mx-auto grid grid-cols-1 gap-6 border-t-[1px] border-black-light pt-4 md:grid md:grid-cols-3 md:justify-items-start md:gap-[51px] md:pt-[37px] xl:grid-cols-4 xl:gap-[120px] xl:pt-10">
          <div className="flex flex-col gap-6 md:gap-[26px]">
            <Logo
              className="mx-auto "
              position="footer"
              aria={props.logoAriaLabelText}
            />
            <ContactList className="mx-auto" contacts={props.contacts} />
          </div>
          <FooterNavRow data={props} />
          <Information {...props} />
          {/* <SocialNetworks /> */}
        </div>
        <div className="mt-8 ">
          <SoftRyzen
            name={props.soft_ryzen.name}
            href={props.soft_ryzen.href}
          />
        </div>
      </div>
    </footer>
  );
};
