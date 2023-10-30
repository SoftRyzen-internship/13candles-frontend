import { FC } from 'react';

import { Logo } from '@/components/ui/Logo';
import { ContactList } from '@/components/ContactList';
import { SocialsMenu } from '@/components/SocialsMenu';

import { ContactsProps } from './types';

export const ContactsSection: FC<ContactsProps> = ({ staticData }) => {
  const { logoAriaLabelText, contacts_text, contacts, social_text, social } =
    staticData;

  return (
    <section
      id="contacts"
      className="pb-12 pt-4 md:pb-9 md:pt-[18px] xl:pb-[127px] xl:pt-[110px]"
    >
      <div className="container md:flex md:items-center md:justify-between">
        <div className="mb-8 flex flex-col gap-6 bg-red-200 md:mb-0 md:gap-9 xl:w-[470px] xl:gap-12">
          <Logo
            className="mx-auto"
            position="contacts"
            aria={logoAriaLabelText}
          />
          <div>
            <span className="mx-auto mb-6 hidden font-bold xl:block xl:text-xl">
              {contacts_text}
            </span>
            <ContactList
              className="mx-auto font-montserrat"
              contacts={contacts}
              variant="contacts"
            />
          </div>
          <SocialsMenu
            socials={social}
            title={social_text}
            variant="contacts"
          />
        </div>
        <div className="flex h-[361px] w-full items-center justify-center bg-blue-300 text-xxxl md:h-[371px] md:w-[350px] xl:h-[382px] xl:w-[578px]">
          I am form
        </div>
      </div>
    </section>
  );
};
