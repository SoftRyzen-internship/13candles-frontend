export const i18n = {
  defaultLocale: 'en',
  locales: ['uk', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
