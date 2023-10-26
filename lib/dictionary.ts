import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/common.json`)).default,
    ...(await import(`@/dictionaries/en/information.json`)).default,
    ...(await import(`@/dictionaries/en/home_page.json`)).default,
  }),

  uk: async () => ({
    ...(await import(`@/dictionaries/uk/common.json`)).default,
    ...(await import(`@/dictionaries/uk/information.json`)).default,
    ...(await import(`@/dictionaries/uk/home_page.json`)).default,
  }),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
