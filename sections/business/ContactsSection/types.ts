import { FormStaticDataT } from '@/types';

type SocialType = { href: string; icon: string; text: string };

export type ContactsProps = {
  staticData: {
    hiddenTitle: string;
    logoAriaLabelText: string;
    contacts_text: string;
    social_text: string;
    social: SocialType[];
  };
  contacts: {
    href: string;
    icon: string;
    text: string;
  }[];
  form: FormStaticDataT;
};
