import { Locale } from '@/i18n.config';
import { FormStaticDataT } from '@/types';

type SocialType = { href: string; icon: string; text: string };

export type ContactsProps = {
  staticData: {
    logoAriaLabelText: string;
    contacts_text: string;
    social_text: string;
    social: SocialType[];
  };
  form: FormStaticDataT;
  lang: Locale;
};
