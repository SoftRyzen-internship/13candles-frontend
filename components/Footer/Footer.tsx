import React from 'react';
import { Logo } from '../ui/Logo';
import { FooterNavRow } from '../FooterNavRow';
import { Information } from '../Information';
import { ContactList } from '../ContactList';
import { SoftRyzen } from '../SoftRyzen';
import { FooterProps } from './types';

// import { SocialNetworks } from './SocialNetworks';
{
  /* <SocialNetworks /> */
}
{
  /* <Footer {...footer} />; */
}
export const Footer: React.FC<FooterProps> = ({
  logoAriaLabelText,
  contacts,
  soft_ryzen,
  ...restProps
}) => {
  return (
    <footer>
      <div className="container">
        <div className="mx-auto grid gap-6 border-t-[1px] border-black-light pt-4 md:flex md:justify-between md:justify-items-start md:pt-[37px] xl:pt-10">
          <div className="flex min-w-[229px] flex-col gap-6 md:gap-[26px] md:justify-self-start">
            <Logo
              className="mx-auto"
              position="footer"
              aria={logoAriaLabelText}
            />
            <ContactList className="mx-auto" contacts={contacts} />
          </div>
          <FooterNavRow data={restProps} />
          <Information {...restProps} />
          <Information {...restProps} />
        </div>
        <div className="mt-8">
          <SoftRyzen name={soft_ryzen.name} href={soft_ryzen.href} />
        </div>
      </div>
    </footer>
  );
};
