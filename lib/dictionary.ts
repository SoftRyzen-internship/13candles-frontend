import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/common.json`)).default,
    ...(await import(`@/dictionaries/en/home_page.json`)).default,
    ...(await import(`@/dictionaries/en/delivery_and_payment.json`)).default,
    ...(await import(`@/dictionaries/en/offer_contract.json`)).default,
    ...(await import(`@/dictionaries/en/rules_of_use.json`)).default,
    ...(await import(`@/dictionaries/en/warranties_and_returns.json`)).default,
    ...(await import(`@/dictionaries/en/business_page.json`)).default,
  }),

  uk: async () => ({
    ...(await import(`@/dictionaries/uk/common.json`)).default,
    ...(await import(`@/dictionaries/uk/home_page.json`)).default,
    ...(await import(`@/dictionaries/uk/delivery_and_payment.json`)).default,
    ...(await import(`@/dictionaries/uk/offer_contract.json`)).default,
    ...(await import(`@/dictionaries/uk/rules_of_use.json`)).default,
    ...(await import(`@/dictionaries/uk/warranties_and_returns.json`)).default,
    ...(await import(`@/dictionaries/uk/business_page.json`)).default,
  }),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
