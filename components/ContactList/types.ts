import { Locale } from '@/i18n.config';

export interface ContactListProps {
  lang: Locale;
  variant?: 'contacts' | undefined;
  className?: string;
}
