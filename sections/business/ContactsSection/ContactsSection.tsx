import { FC } from 'react';

import { Logo } from '@/components/ui/Logo';
import { ContactList } from '@/components/ContactList';
import { SocialsMenu } from '@/components/SocialsMenu';
import { BusinessFormWithPopUp } from '@/components/BusinessFormWithPopUp';

import { ContactsProps } from './types';

export const ContactsSection: FC<ContactsProps> = ({
  staticData,
  form,
  contacts,
}) => {
  const { hiddenTitle, logoAriaLabelText, contacts_text, social_text, social } =
    staticData;

  return (
    <section
      id="contacts"
      className="pb-12 pt-4 md:pb-9 md:pt-[18px] xl:pb-[127px] xl:pt-[60px]"
    >
      <div className="container md:flex md:items-center md:justify-between">
        <h2 className="visually-hidden">{hiddenTitle}</h2>

        <div className="bg-red-200 mb-8 flex flex-col gap-6 md:mb-0 md:gap-9 xl:w-[470px] xl:gap-12">
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
              variant="contacts"
              contacts={contacts}
            />
          </div>
          <SocialsMenu
            socials={social}
            title={social_text}
            variant="contacts"
          />
        </div>
        <BusinessFormWithPopUp staticData={form} className="xl:mr-[78px]" />
      </div>
    </section>
  );
};
