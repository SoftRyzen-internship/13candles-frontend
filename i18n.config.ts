export const i18n = {
  defaultLocale: 'en',
  locales: ['uk', 'en'],
} as const;

// module.exports = {
//   i18n: {
//     locales: ['en', 'uk'],
//     defaultLocale: 'uk',
//   },
// };

export type Locale = (typeof i18n)['locales'][number];
