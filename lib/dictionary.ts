// import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/common.json`)).default,
    ...(await import(`@/dictionaries/en/information.json`)).default,
    ...(await import(`@/dictionaries/en/home_page.json`)).default,
    ...(await import(`@/dictionaries/en/business_page.json`)).default,
    ...(await import(`@/dictionaries/en/category_page.json`)).default,
    ...(await import(`@/dictionaries/en/product_page.json`)).default,
  }),

  uk: async () => ({
    ...(await import(`@/dictionaries/uk/common.json`)).default,
    ...(await import(`@/dictionaries/uk/information.json`)).default,
    ...(await import(`@/dictionaries/uk/home_page.json`)).default,
    ...(await import(`@/dictionaries/uk/business_page.json`)).default,
    ...(await import(`@/dictionaries/uk/category_page.json`)).default,
    ...(await import(`@/dictionaries/uk/product_page.json`)).default,
  }),
};

const metadata = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/meta/common.json`)).default,
    ...(await import(`@/dictionaries/en/meta/home.json`)).default,
    ...(await import(`@/dictionaries/en/meta/business.json`)).default,
    ...(await import(`@/dictionaries/en/meta/category.json`)).default,
    ...(await import(`@/dictionaries/en/meta/product.json`)).default,
  }),

  uk: async () => ({
    ...(await import(`@/dictionaries/uk/meta/common.json`)).default,
    ...(await import(`@/dictionaries/uk/meta/home.json`)).default,
    ...(await import(`@/dictionaries/uk/meta/business.json`)).default,
    ...(await import(`@/dictionaries/uk/meta/category.json`)).default,
    ...(await import(`@/dictionaries/uk/meta/product.json`)).default,
  }),
};

const commonDictionaries = {
  en: async () => (await import(`@/dictionaries/en/common.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/common.json`)).default,
};

export const getDictionary = async (lang: Locale) => dictionaries[lang]();
export const getMetadata = async (lang: Locale) => metadata[lang]();
export const getCommonDictionaries = async (lang: Locale) =>
  commonDictionaries[lang]();
