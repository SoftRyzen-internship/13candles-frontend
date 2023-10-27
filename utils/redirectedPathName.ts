import { i18n } from '@/i18n.config';

export const redirectedPathName = (lang: string, pathName: string) => {
  const newLocale =
    i18n.locales[0] === lang ? i18n.locales[1] : i18n.locales[0];

  if (!pathName) return '/';
  const segments = pathName.split('/');
  segments[1] = newLocale;
  return segments.join('/');
};
