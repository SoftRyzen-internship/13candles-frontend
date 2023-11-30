'use client';

import { usePathname } from 'next/navigation';

import { Logo } from '@/components/ui/Logo';
import { FooterNavRow } from '@/components/FooterNavRow';
import { Information } from '@/components/Information';
import { ContactList } from '@/components/ContactList';
import { SocialsMenu } from '@/components/SocialsMenu';
import { SoftRyzen } from '@/components/SoftRyzen';

import { FooterProps } from '@/types';

import { checkPageName } from '@/utils';
import { HOME } from '@/data/routes';

export const Footer: React.FC<FooterProps> = ({
  information,
  dynamicInfo,
  footer: {
    logoAriaLabelText,
    contacts,
    social_text,
    social,
    soft_ryzen,
    ...restProps
  },
  dataOrder,
  form,
}) => {
  const path = usePathname();
  const isHomePage = checkPageName(path, HOME);

  return (
    <footer className="pb-[24px] md:pb-[36px] xl:pb-[40px]">
      <div className="container">
        <div className="mx-auto grid gap-6 border-t-[1px] border-black-light pt-4 md:flex md:justify-between md:justify-items-start md:pt-[37px] xl:pt-10">
          <div className="flex flex-col gap-6 md:gap-[26px] md:justify-self-start">
            <Logo
              className="mx-auto"
              position="footer"
              aria={logoAriaLabelText}
            />
            <ContactList
              className="mx-auto font-montserrat"
              contacts={contacts}
            />
          </div>
          {isHomePage && (
            <FooterNavRow data={restProps} dataOrder={dataOrder} form={form} />
          )}
          <Information information={information} dynamicInfo={dynamicInfo} />
          <div>
            <SocialsMenu socials={social} title={social_text} />
            <SoftRyzen softRyzen={soft_ryzen} />
          </div>
        </div>
      </div>
    </footer>
  );
};
