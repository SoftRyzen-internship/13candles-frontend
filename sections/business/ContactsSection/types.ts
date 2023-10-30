import { FormStaticDataT } from '@/components/BusinessFormWithPopUp/types';

type ContactType = { href: string; icon: string; text: string };
type SocialType = { href: string; icon: string; text: string };

export type ContactsProps = {
  staticData: {
    logoAriaLabelText: string;
    contacts_text: string;
    contacts: ContactType[];
    social_text: string;
    social: SocialType[];
  };
  form: FormStaticDataT;
};
